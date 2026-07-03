import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ChevronRight, MapPin, Truck, CreditCard } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatINR } from "@/lib/catalog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAuth } from "@/lib/auth";

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
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const [address, setAddress] = useState({
    name: "",
    line1: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("razorpay");

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

  const placeOrder = async () => {
    // In a real app, this would call Supabase edge function to create order and initiate payment intent
    // For this prototype, we simulate success
    setCurrentStep(4);
    clear();
  };

  if (currentStep === 4) {
    return (
      <div className="container-x py-24 text-center max-w-md">
        <div className="mx-auto h-16 w-16 bg-success/20 text-success rounded-full grid place-items-center mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h1 className="text-display text-3xl mb-4">Order Confirmed!</h1>
        <p className="text-ink-soft mb-8">
          Thank you for shopping with Shravani Agroproducts. Your order #SA-
          {Math.floor(Math.random() * 10000)} has been placed successfully.
        </p>
        <Button onClick={() => navigate({ to: "/" })} className="w-full">
          Continue Shopping
        </Button>
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
              {!user && (
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
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="space-y-4"
              >
                <div
                  className={`flex items-center space-x-3 rounded-xl border p-4 cursor-pointer transition-colors ${paymentMethod === "razorpay" ? "border-primary bg-primary/5" : "border-border bg-background"}`}
                  onClick={() => setPaymentMethod("razorpay")}
                >
                  <RadioGroupItem value="razorpay" id="razorpay" />
                  <div className="flex-1">
                    <Label htmlFor="razorpay" className="text-base cursor-pointer">
                      UPI / Credit Card / Netbanking
                    </Label>
                    <p className="text-sm text-ink-soft">Secured by Razorpay</p>
                  </div>
                </div>
                <div
                  className={`flex items-center space-x-3 rounded-xl border p-4 cursor-pointer transition-colors ${paymentMethod === "cod" ? "border-primary bg-primary/5" : "border-border bg-background"}`}
                  onClick={() => setPaymentMethod("cod")}
                >
                  <RadioGroupItem value="cod" id="cod" />
                  <div className="flex-1">
                    <Label htmlFor="cod" className="text-base cursor-pointer">
                      Cash on Delivery
                    </Label>
                    <p className="text-sm text-ink-soft">Pay at your doorstep</p>
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
                    <h4 className="font-medium text-ink mb-1">Payment Method</h4>
                    <p className="text-ink-soft uppercase">{paymentMethod}</p>
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
                <Button onClick={placeOrder} size="lg">
                  Place Order
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
