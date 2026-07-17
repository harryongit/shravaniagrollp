export type CashfreePaymentMethod = "cashfree_upi" | "cashfree_card" | "cashfree_netbanking" | "cashfree_wallet";

export type CashfreeOrderItem = {
  product_name: string;
  product_brand: string;
  product_description: string;
  pack_size: string;
  quantity: number;
  unit_price: number;
  total_amount: number;
};

export type CashfreeCustomerDetails = {
  customer_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
};

export type CashfreeOrderPayload = {
  order_id: string;
  order_amount: number;
  order_currency: "INR";
  order_note: string;
  order_items: CashfreeOrderItem[];
  customer_details: CashfreeCustomerDetails;
  order_meta: {
    return_url: string;
    notify_url: string;
    payment_methods?: string;
  };
  order_tags: Record<string, string>;
};

export type CashfreePaymentLinkResponse = {
  cf_order_id: string;
  order_id: string;
  payment_link: string;
  payment_session_id: string;
  order_status: string;
  order_amount: number;
  order_currency: "INR";
  created_at: string;
};

export const CASHFREE_PAYMENT_METHODS: {
  value: CashfreePaymentMethod;
  label: string;
  description: string;
  icon: string;
  cashfreeCode: string;
}[] = [
  {
    value: "cashfree_upi",
    label: "UPI",
    description: "Google Pay, PhonePe, Paytm",
    icon: "Smartphone",
    cashfreeCode: "upi",
  },
  {
    value: "cashfree_card",
    label: "Credit / Debit Card",
    description: "Visa, Mastercard, RuPay",
    icon: "CreditCard",
    cashfreeCode: "cc",
  },
  {
    value: "cashfree_netbanking",
    label: "Net Banking",
    description: "All major banks (SBI, HDFC, ICICI, Axis & more)",
    icon: "Building2",
    cashfreeCode: "nb",
  },
  {
    value: "cashfree_wallet",
    label: "Wallet",
    description: "Paytm, Mobikwik, Freecharge",
    icon: "Wallet",
    cashfreeCode: "wallet",
  },
];

export const PAYMENT_METHOD_LABEL: Record<CashfreePaymentMethod, string> = {
  cashfree_upi: "UPI",
  cashfree_card: "Card",
  cashfree_netbanking: "Net Banking",
  cashfree_wallet: "Wallet",
};

export function buildCashfreeOrderPayload(params: {
  orderId: string;
  orderNumber: string;
  total: number;
  items: { name: string; brand: string; description: string; packSize: string; qty: number; price: number }[];
  customer: { id: string; name: string; email: string; phone: string };
  returnUrl: string;
}): CashfreeOrderPayload {
  const orderItems: CashfreeOrderItem[] = params.items.map((item) => ({
    product_name: item.name,
    product_brand: item.brand,
    product_description: item.description,
    pack_size: item.packSize,
    quantity: item.qty,
    unit_price: item.price,
    total_amount: item.qty * item.price,
  }));

  const tags: Record<string, string> = {
    order_number: params.orderNumber,
    item_count: String(params.items.length),
    platform: "shravaniagro",
  };
  params.items.forEach((item, i) => {
    tags[`item_${i}_name`] = item.name;
    tags[`item_${i}_qty`] = String(item.qty);
    tags[`item_${i}_price`] = String(item.price);
  });

  return {
    order_id: params.orderId,
    order_amount: Math.round(params.total * 100) / 100,
    order_currency: "INR",
    order_note: `Order ${params.orderNumber} — ${params.items.length} item(s) from Shravani Agroproducts`,
    order_items: orderItems,
    customer_details: {
      customer_id: params.customer.id,
      customer_name: params.customer.name,
      customer_email: params.customer.email,
      customer_phone: params.customer.phone,
    },
    order_meta: {
      return_url: params.returnUrl,
      notify_url: `${window.location.origin}/api/cashfree/webhook`,
      payment_methods: "upi,cc,nb,wallet",
    },
    order_tags: tags,
  };
}

export function generateCfOrderId(): string {
  return `cf_ord_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function generatePaymentLink(orderId: string): string {
  return `https://pay.cashfree.com/pay/${orderId}`;
}
