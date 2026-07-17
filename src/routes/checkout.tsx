import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ChevronRight, MapPin, Truck, CreditCard, LogIn, UserPlus, Smartphone, Building2, Wallet, ExternalLink } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatINR, findProduct } from "@/lib/catalog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useUserStore } from "@/lib/user-store";
import { useOrderStore, type PaymentMethod } from "@/lib/order-store";

export const Route = createFileRoute("/checkout")({
  component: Checkout,
});

const steps = [
  { id: "address", name: "Address", icon: MapPin },
  { id: "delivery", name: "Delivery", icon: Truck },
  { id: "payment", name: "Payment", icon: CreditCard },
  { id: "review", name: "Review", icon: CheckCircle2 },
];

function Checkout() {
  const { lines, subtotal, clear } = useCart();
  const { currentUser } = useUserStore();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  if (!currentUser) {
    return (
      <div className="container-x py-24 text-center max-w-md mx-auto">
        <div className="mx-auto h-16 w-16 bg-primary/10 text-primary rounded-full grid place-items-center mb-6">
          <LogIn className="h-8 w-8" />
        </div>
        <h1 className="text-display text-3xl mb-4">Sign in to continue</h1>
        <p className="text-ink-soft mb-8">You need to be logged in to place an order. Please sign in or create an account.</p>
        <div className="space-y-3">
          <Button onClick={() => navigate({ to: "/auth/login" })} className="w-full gap-2">
            <LogIn className="h-4 w-4" /> Sign In
          </Button>
          <Button variant="outline" onClick={() => navigate({ to: "/auth/register" })} className="w-full gap-2">
            <UserPlus className="h-4 w-4" /> Create an Account
          </Button>
          <Link to="/" className="block text-sm text-ink-soft hover:text-primary mt-4">
            Continue browsing
          </Link>
        </div>
      </div>
    );
  }

  if (currentUser.status === "pending") {
    return (
      <div className="container-x py-24 text-center max-w-md mx-auto">
        <div className="mx-auto h-16 w-16 bg-amber/10 text-amber rounded-full grid place-items-center mb-6">
          <LogIn className="h-8 w-8" />
        </div>
        <h1 className="text-display text-3xl mb-4">Account pending approval</h1>
        <p className="text-ink-soft mb-8">
          Your account is pending admin verification. You will be able to place orders once your account is approved.
        </p>
        <Button onClick={() => navigate({ to: "/dashboard" })} variant="outline">
          Go to Dashboard
        </Button>
      </div>
    );
  }

  const [address, setAddress] = useState({
    name: "",
    line1: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cashfree_upi");
  const [processing, setProcessing] = useState(false);
  const [placedOrder, setPlacedOrder] = useState<any>(null);
  const { placeOrder } = useOrderStore();

  if (lines.length === 0 && currentStep !== 4) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="text-display text-3xl">Your cart is empty</h1>
        <Button onClick={() => navigate({ to: "/products" })} className="mt-6">
          Back to shop
        </Button>
      </div>
    );
  }

  const handleNext = () => setCurrentStep((c) => Math.min(c + 1, 4));
  const handleBack = () => setCurrentStep((c) => Math.max(c - 1, 0));

  const handlePlaceOrder = async () => {
    setProcessing(true);
    const enrichedLines = lines.map((l) => {
      const p = findProduct(l.slug);
      return {
        ...l,
        sku: p?.sku ?? "",
        description: p?.description ?? l.name,
        category: p?.category ?? "",
      };
    });
    const result = placeOrder({
      customerId: currentUser.id,
      customerName: address.name,
      customerEmail: currentUser.email,
      customerPhone: address.phone,
      lines: enrichedLines,
      subtotal,
      deliveryCharge: deliveryMethod === "express" ? 250 : 0,
      gst: subtotal * 0.12,
      total: subtotal + (deliveryMethod === "express" ? 250 : 0),
      paymentMethod: paymentMethod as PaymentMethod,
      shippingAddress: address.line1,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
      deliveryMethod: deliveryMethod as "standard" | "express",
    });
    if (result.success && result.order) {
      setPlacedOrder(result.order);
      if (result.order.cfPaymentLink) {
        window.open(result.order.cfPaymentLink, "_blank");
      }
      setCurrentStep(4);
      clear();
    }
    setProcessing(false);
  };

  if (currentStep === 4) {
    return (
      <div className="container-x py-24 text-center max-w-lg mx-auto">
        <div className="mx-auto h-16 w-16 bg-success/20 text-success rounded-full grid place-items-center mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h1 className="text-display text-3xl mb-4">Order Placed!</h1>
        <p className="text-ink-soft mb-2">
          Order <span className="font-semibold text-ink">{placedOrder?.orderNumber}</span> created.
        </p>
        <p className="text-ink-soft text-sm mb-6">
          {placedOrder?.lines.length} product(s) · Total {formatINR(placedOrder?.total ?? 0)} · via Cashfree
        </p>

        {placedOrder?.cfPaymentLink && (
          <div className="rounded-xl bg-surface p-5 mb-6 border border-border text-sm text-left">
            <div className="flex items-center gap-2 mb-3">
              <ExternalLink className="h-4 w-4 text-primary" />
              <span className="font-medium text-ink">Complete Your Payment</span>
            </div>
            <p className="text-ink-soft text-xs mb-3">
              Your order is pending payment. Pay securely via Cashfree to confirm your order.
            </p>
            <div className="space-y-2 mb-4 border-b border-border pb-4">
              {placedOrder.lines.map((l: any) => (
                <div key={l.slug} className="flex justify-between text-xs">
                  <span className="text-ink-soft flex-1 pr-2 truncate">
                    {l.qty}x {l.name} <span className="text-ink-soft/60">({l.packSize})</span>
                  </span>
                  <span className="font-medium tabular-nums">{formatINR(l.price * l.qty)}</span>
                </div>
              ))}
            </div>
            <a
              href={placedOrder.cfPaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full h-11 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 mb-2"
            >
              Pay {formatINR(placedOrder.total)} via Cashfree <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <p className="text-[0.65rem] text-ink-soft text-center">
              You will be redirected to Cashfree payment page. Your order will be confirmed after payment.
            </p>
          </div>
        )}

        {!placedOrder?.cfPaymentLink && (
          <div className="rounded-xl bg-success/5 border border-success/20 p-4 mb-6 text-sm">
            <p className="text-success font-medium">Payment completed successfully!</p>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <Button onClick={() => navigate({ to: "/dashboard/orders" })} className="w-full">
            View My Orders
          </Button>
          <Button onClick={() => navigate({ to: "/" })} variant="outline" className="w-full">
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-x py-8 lg:py-12">
      <div className="mb-8">
        <nav aria-label="Progress">
          <ol role="list" className="flex items-center space-x-2 sm:space-x-4 justify-center">
            {steps.map((step, stepIdx) => (
              <li key={step.name} className="flex items-center">
                <span
                  className={`flex items-center gap-2 text-sm font-medium ${stepIdx <= currentStep ? "text-primary" : "text-ink-soft opacity-50"}`}
                >
                  <span
                    className={`grid h-6 w-6 place-items-center rounded-full text-xs ${stepIdx <= currentStep ? "bg-primary text-primary-foreground" : "bg-surface border border-border"}`}
                  >
                    {stepIdx + 1}
                  </span>
                  <span className="hidden sm:inline">{step.name}</span>
                </span>
                {stepIdx !== steps.length - 1 && (
                  <ChevronRight className="ml-2 sm:ml-4 h-4 w-4 text-border" />
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
        <div className="lg:col-span-7 space-y-8">
          {currentStep === 0 && (
            <div className="surface-card p-6 sm:p-8">
              <h2 className="text-xl font-medium mb-6">Shipping Address</h2>
              {!currentUser && (
                <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-sm">
                  Already have an account?{" "}
                  <button
                    onClick={() => navigate({ to: "/auth/login" })}
                    className="font-medium text-primary hover:underline"
                  >
                    Log in
                  </button>{" "}
                  for faster checkout.
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 space-y-2">
                  <Label>Full Name</Label>
                  <Input
                    value={address.name}
                    onChange={(e) => setAddress({ ...address, name: e.target.value })}
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label>Address Line 1</Label>
                  <Input
                    value={address.line1}
                    onChange={(e) => setAddress({ ...address, line1: e.target.value })}
                    placeholder="House no, Street, Village"
                  />
                </div>
                <div className="space-y-2">
                  <Label>City / District</Label>
                  <Input
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>State</Label>
                  <Input
                    value={address.state}
                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>PIN Code</Label>
                  <Input
                    value={address.pincode}
                    onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input
                    value={address.phone}
                    onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button onClick={handleNext}>Continue to Delivery</Button>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="surface-card p-6 sm:p-8">
              <h2 className="text-xl font-medium mb-6">Delivery Method</h2>
              <RadioGroup
                value={deliveryMethod}
                onValueChange={setDeliveryMethod}
                className="space-y-4"
              >
                <div
                  className={`flex items-center space-x-3 rounded-xl border p-4 cursor-pointer transition-colors ${deliveryMethod === "standard" ? "border-primary bg-primary/5" : "border-border bg-background"}`}
                  onClick={() => setDeliveryMethod("standard")}
                >
                  <RadioGroupItem value="standard" id="standard" />
                  <div className="flex-1">
                    <Label htmlFor="standard" className="text-base cursor-pointer">
                      Standard Delivery
                    </Label>
                    <p className="text-sm text-ink-soft">3-5 business days</p>
                  </div>
                  <div className="font-medium">Free</div>
                </div>
                <div
                  className={`flex items-center space-x-3 rounded-xl border p-4 cursor-pointer transition-colors ${deliveryMethod === "express" ? "border-primary bg-primary/5" : "border-border bg-background"}`}
                  onClick={() => setDeliveryMethod("express")}
                >
                  <RadioGroupItem value="express" id="express" />
                  <div className="flex-1">
                    <Label htmlFor="express" className="text-base cursor-pointer">
                      Express Delivery
                    </Label>
                    <p className="text-sm text-ink-soft">
                      1-2 business days (if available in your PIN)
                    </p>
                  </div>
                  <div className="font-medium">₹250</div>
                </div>
              </RadioGroup>
              <div className="mt-8 flex justify-between">
                <Button variant="ghost" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleNext}>Continue to Payment</Button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="surface-card p-6 sm:p-8">
              <h2 className="text-xl font-medium mb-6">Payment Method</h2>
              <p className="text-sm text-ink-soft mb-6">
                Choose your preferred payment method. All payments are processed securely via{" "}
                <span className="font-medium text-ink">Cashfree</span>.
              </p>
              <RadioGroup
                value={paymentMethod}
                onValueChange={(v) => setPaymentMethod(v as PaymentMethod)}
                className="space-y-4"
              >
                <div
                  className={`flex items-center space-x-3 rounded-xl border p-4 cursor-pointer transition-colors ${paymentMethod === "cashfree_upi" ? "border-primary bg-primary/5" : "border-border bg-background"}`}
                  onClick={() => setPaymentMethod("cashfree_upi")}
                >
                  <RadioGroupItem value="cashfree_upi" id="cashfree_upi" />
                  <div className="flex items-center gap-3 flex-1">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <div>
                      <Label htmlFor="cashfree_upi" className="text-base cursor-pointer">
                        UPI
                      </Label>
                      <p className="text-sm text-ink-soft">Google Pay, PhonePe, Paytm</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex items-center space-x-3 rounded-xl border p-4 cursor-pointer transition-colors ${paymentMethod === "cashfree_card" ? "border-primary bg-primary/5" : "border-border bg-background"}`}
                  onClick={() => setPaymentMethod("cashfree_card")}
                >
                  <RadioGroupItem value="cashfree_card" id="cashfree_card" />
                  <div className="flex items-center gap-3 flex-1">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <div>
                      <Label htmlFor="cashfree_card" className="text-base cursor-pointer">
                        Credit / Debit Card
                      </Label>
                      <p className="text-sm text-ink-soft">Visa, Mastercard, RuPay</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex items-center space-x-3 rounded-xl border p-4 cursor-pointer transition-colors ${paymentMethod === "cashfree_netbanking" ? "border-primary bg-primary/5" : "border-border bg-background"}`}
                  onClick={() => setPaymentMethod("cashfree_netbanking")}
                >
                  <RadioGroupItem value="cashfree_netbanking" id="cashfree_netbanking" />
                  <div className="flex items-center gap-3 flex-1">
                    <Building2 className="h-5 w-5 text-primary" />
                    <div>
                      <Label htmlFor="cashfree_netbanking" className="text-base cursor-pointer">
                        Net Banking
                      </Label>
                      <p className="text-sm text-ink-soft">All major banks</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex items-center space-x-3 rounded-xl border p-4 cursor-pointer transition-colors ${paymentMethod === "cashfree_wallet" ? "border-primary bg-primary/5" : "border-border bg-background"}`}
                  onClick={() => setPaymentMethod("cashfree_wallet")}
                >
                  <RadioGroupItem value="cashfree_wallet" id="cashfree_wallet" />
                  <div className="flex items-center gap-3 flex-1">
                    <Wallet className="h-5 w-5 text-primary" />
                    <div>
                      <Label htmlFor="cashfree_wallet" className="text-base cursor-pointer">
                        Wallet
                      </Label>
                      <p className="text-sm text-ink-soft">Paytm, Mobikwik, Freecharge</p>
                    </div>
                  </div>
                </div>
              </RadioGroup>
              <div className="mt-8 flex justify-between">
                <Button variant="ghost" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleNext}>Review Order</Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="surface-card p-6 sm:p-8">
              <h2 className="text-xl font-medium mb-6">Review Your Order</h2>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-ink mb-1">Shipping To</h4>
                    <p className="text-ink-soft">
                      {address.name}
                      <br />
                      {address.line1}
                      <br />
                      {address.city}, {address.state} {address.pincode}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-ink mb-1">Payment via Cashfree</h4>
                    <p className="text-ink-soft capitalize">{paymentMethod.replace("cashfree_", "")}</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-medium text-ink mb-4">Order Items</h4>
                  <div className="space-y-4">
                    {lines.map((l) => (
                      <div key={l.slug} className="flex gap-4">
                        <div className="h-12 w-12 rounded-lg bg-surface shrink-0"></div>
                        <div className="flex-1 text-sm">
                          <div className="font-medium text-ink">{l.name}</div>
                          <div className="text-ink-soft">Qty: {l.qty}</div>
                        </div>
                        <div className="text-sm font-medium">{formatINR(l.price * l.qty)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button variant="ghost" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handlePlaceOrder} size="lg" disabled={processing}>
                  {processing ? "Processing..." : "Place Order"}
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-5">
          <div className="surface-card p-6 sticky top-24">
            <h3 className="text-lg font-medium text-ink mb-4">Order Summary</h3>
            <div className="space-y-4 mb-4">
              {lines.map((l) => (
                <div key={l.slug} className="flex justify-between text-sm">
                  <span className="text-ink-soft line-clamp-1 flex-1 pr-4">
                    {l.qty}x {l.name}
                  </span>
                  <span className="font-medium">{formatINR(l.price * l.qty)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-ink-soft">Subtotal</span>
                <span>{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-soft">
                  Delivery ({deliveryMethod === "express" ? "Express" : "Standard"})
                </span>
                <span>{deliveryMethod === "express" ? "₹250" : "Free"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-soft">GST (included)</span>
                <span>{formatINR(subtotal * 0.12)}</span>
              </div>
            </div>
            <div className="border-t border-border mt-4 pt-4 flex justify-between font-medium text-lg text-ink">
              <span>Total</span>
              <span>{formatINR(subtotal + (deliveryMethod === "express" ? 250 : 0))}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
