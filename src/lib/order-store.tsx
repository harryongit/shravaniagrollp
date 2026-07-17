import { createContext, useContext, useEffect, useMemo, useState, useCallback, type ReactNode } from "react";
import { generateCfOrderId, generatePaymentLink, buildCashfreeOrderPayload } from "./cashfree";

export type OrderStatus = "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled" | "refunded";

export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export type PaymentMethod = "cashfree_upi" | "cashfree_card" | "cashfree_netbanking" | "cashfree_wallet";

export type OrderLine = {
  slug: string;
  sku: string;
  name: string;
  brand: string;
  packSize: string;
  price: number;
  qty: number;
  description: string;
  category: string;
};

export type Order = {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  lines: OrderLine[];
  subtotal: number;
  deliveryCharge: number;
  gst: number;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  cfOrderId: string;
  cfPaymentId: string;
  cfPaymentLink: string;
  cashfreePayload: ReturnType<typeof buildCashfreeOrderPayload>;
  shippingAddress: string;
  city: string;
  state: string;
  pincode: string;
  deliveryMethod: "standard" | "express";
  createdAt: string;
  updatedAt: string;
};

type PlaceOrderData = {
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  lines: OrderLine[];
  subtotal: number;
  deliveryCharge: number;
  gst: number;
  total: number;
  paymentMethod: PaymentMethod;
  shippingAddress: string;
  city: string;
  state: string;
  pincode: string;
  deliveryMethod: "standard" | "express";
};

type OrderStoreContextType = {
  orders: Order[];
  placeOrder: (data: PlaceOrderData) => { success: boolean; order?: Order; error?: string };
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  updatePaymentStatus: (orderId: string, status: PaymentStatus, cfPaymentId?: string) => void;
  getUserOrders: (customerId: string) => Order[];
  getOrder: (orderId: string) => Order | undefined;
};

const ORDER_KEY = "shravani_orders_v1";

const OrderStoreCtx = createContext<OrderStoreContextType | null>(null);

function loadOrders(): Order[] {
  try {
    const stored = localStorage.getItem(ORDER_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch { return []; }
}

export function OrderStoreProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(loadOrders());
  }, []);

  const persist = useCallback((updated: Order[]) => {
    localStorage.setItem(ORDER_KEY, JSON.stringify(updated));
    setOrders(updated);
  }, []);

  const value = useMemo<OrderStoreContextType>(() => ({
    orders,
    placeOrder: (data) => {
      const existing = loadOrders();
      const orderNumber = `SA-${String(1000 + existing.length + 1).padStart(4, "0")}`;
      const orderId = `ord_${Date.now()}`;
      const cfOrderId = generateCfOrderId();
      const returnUrl = `${window.location.origin}/payment/return?order_id=${orderId}&order_number=${orderNumber}`;

      const cashfreePayload = buildCashfreeOrderPayload({
        orderId: cfOrderId,
        orderNumber,
        total: data.total,
        items: data.lines.map((l) => ({
          name: l.name,
          brand: l.brand,
          description: l.description,
          packSize: l.packSize,
          qty: l.qty,
          price: l.price,
        })),
        customer: {
          id: data.customerId,
          name: data.customerName,
          email: data.customerEmail,
          phone: data.customerPhone,
        },
        returnUrl,
      });

      const cfPaymentLink = generatePaymentLink(cfOrderId);

      const order: Order = {
        id: orderId,
        orderNumber,
        customerId: data.customerId,
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        customerPhone: data.customerPhone,
        lines: data.lines,
        subtotal: data.subtotal,
        deliveryCharge: data.deliveryCharge,
        gst: data.gst,
        total: data.total,
        paymentMethod: data.paymentMethod,
        paymentStatus: "pending",
        orderStatus: "pending",
        cfOrderId,
        cfPaymentId: "",
        cfPaymentLink,
        cashfreePayload,
        shippingAddress: data.shippingAddress,
        city: data.city,
        state: data.state,
        pincode: data.pincode,
        deliveryMethod: data.deliveryMethod,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const updated = [...existing, order];
      persist(updated);
      return { success: true, order };
    },
    updateOrderStatus: (orderId, status) => {
      const updated = loadOrders().map(o =>
        o.id === orderId ? { ...o, orderStatus: status, updatedAt: new Date().toISOString() } : o
      );
      persist(updated);
    },
    updatePaymentStatus: (orderId, status, cfPaymentId) => {
      const updated = loadOrders().map(o =>
        o.id === orderId
          ? { ...o, paymentStatus: status, cfPaymentId: cfPaymentId || o.cfPaymentId, updatedAt: new Date().toISOString() }
          : o
      );
      persist(updated);
    },
    getUserOrders: (customerId) =>
      loadOrders()
        .filter(o => o.customerId === customerId)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    getOrder: (orderId) => loadOrders().find(o => o.id === orderId),
  }), [orders, persist]);

  return <OrderStoreCtx.Provider value={value}>{children}</OrderStoreCtx.Provider>;
}

export function useOrderStore() {
  const c = useContext(OrderStoreCtx);
  if (!c) throw new Error("useOrderStore outside OrderStoreProvider");
  return c;
}
