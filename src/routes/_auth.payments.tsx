import { createFileRoute } from "@tanstack/react-router";
import { IndianRupee, CreditCard, CheckCircle, XCircle, Clock } from "lucide-react";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/_auth/payments")({
  component: Payments,
});

function Payments() {
  const payments = [
    { id: "CF-TXN-101", date: "14 Jul 2026", amount: 3400, method: "UPI", status: "Paid" },
    { id: "CF-TXN-102", date: "10 Jul 2026", amount: 12500, method: "Net Banking", status: "Paid" },
    { id: "CF-TXN-103", date: "05 Jul 2026", amount: 2800, method: "Card", status: "Pending" },
    { id: "CF-TXN-104", date: "28 Jun 2026", amount: 8900, method: "UPI", status: "Paid" },
    { id: "CF-TXN-105", date: "20 Jun 2026", amount: 2200, method: "Card", status: "Failed" },
  ];

  return (
    <div className="container-x py-12">
      <div className="surface-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <CreditCard className="h-6 w-6 text-primary" />
          <h1 className="text-display text-2xl text-ink">Payments</h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-4 mb-8">
          <div className="rounded-xl bg-surface p-4">
            <div className="text-2xl font-bold text-ink tabular-nums">{formatINR(29800)}</div>
            <div className="text-xs text-ink-soft mt-1">Total Paid</div>
          </div>
          <div className="rounded-xl bg-surface p-4">
            <div className="text-2xl font-bold text-ink tabular-nums">{formatINR(2800)}</div>
            <div className="text-xs text-ink-soft mt-1">Pending</div>
          </div>
          <div className="rounded-xl bg-surface p-4">
            <div className="text-2xl font-bold text-ink">5</div>
            <div className="text-xs text-ink-soft mt-1">Transactions</div>
          </div>
          <div className="rounded-xl bg-surface p-4">
            <div className="text-2xl font-bold text-ink">4.5★</div>
            <div className="text-xs text-ink-soft mt-1">Avg. Rating</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="hidden sm:grid sm:grid-cols-5 px-4 py-2 text-xs font-medium text-ink-soft uppercase tracking-wider">
            <div>ID</div>
            <div>Date</div>
            <div>Amount</div>
            <div>Method</div>
            <div>Status</div>
          </div>
          {payments.map((p) => (
            <div key={p.id} className="grid sm:grid-cols-5 items-center p-4 rounded-xl border border-border hover:bg-surface/50 text-sm">
              <div className="font-medium text-ink">{p.id}</div>
              <div className="text-ink-soft">{p.date}</div>
              <div className="text-ink tabular-nums">{formatINR(p.amount)}</div>
              <div className="text-ink-soft">{p.method}</div>
              <div className={`flex items-center gap-1 text-xs font-medium ${
                p.status === "Paid" ? "text-success" :
                p.status === "Failed" ? "text-destructive" : "text-amber"
              }`}>
                {p.status === "Paid" ? <CheckCircle className="h-3 w-3" /> :
                 p.status === "Failed" ? <XCircle className="h-3 w-3" /> :
                 <Clock className="h-3 w-3" />}
                {p.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
