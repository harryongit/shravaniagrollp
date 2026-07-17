import { createFileRoute } from "@tanstack/react-router";
import { Clock, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/admin/orders")({
  component: AdminOrders,
});

function AdminOrders() {
  const statusBadge = (status: string) => {
    const map: Record<string, { color: string; icon: any }> = {
      Paid: { color: "bg-success/10 text-success", icon: CheckCircle },
      Pending: { color: "bg-amber/10 text-amber", icon: Clock },
      Failed: { color: "bg-destructive/10 text-destructive", icon: XCircle },
      Refunded: { color: "bg-clay/10 text-clay", icon: XCircle },
    };
    const m = map[status] || map.Pending;
    const Icon = m.icon;
    return (
      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded ${m.color}`}>
        <Icon className="h-3 w-3" /> {status}
      </span>
    );
  };

  const orders = [
    { id: "#SA-1001", date: "18 Jul 2026", customer: "Rajesh Patil", total: 4850, payment: "UPI", cfRef: "CF-PAY-487291", status: "Paid", orderStatus: "Shipped" },
    { id: "#SA-1002", date: "17 Jul 2026", customer: "Sneha Kale", total: 12200, payment: "Card", cfRef: "CF-PAY-487192", status: "Paid", orderStatus: "Processing" },
    { id: "#SA-1003", date: "16 Jul 2026", customer: "Vikas Jadhav", total: 2340, payment: "Net Banking", cfRef: "CF-PAY-487093", status: "Pending", orderStatus: "Pending" },
    { id: "#SA-1004", date: "15 Jul 2026", customer: "Anita Deshmukh", total: 8900, payment: "UPI", cfRef: "CF-PAY-486994", status: "Paid", orderStatus: "Delivered" },
    { id: "#SA-1005", date: "14 Jul 2026", customer: "Suresh Gaikwad", total: 3150, payment: "Card", cfRef: "CF-PAY-486895", status: "Failed", orderStatus: "Cancelled" },
    { id: "#SA-1006", date: "13 Jul 2026", customer: "Priya Shinde", total: 15600, payment: "Wallet", cfRef: "CF-PAY-486796", status: "Paid", orderStatus: "Delivered" },
    { id: "#SA-1007", date: "12 Jul 2026", customer: "Mahendra Thorat", total: 7200, payment: "UPI", cfRef: "CF-PAY-486697", status: "Refunded", orderStatus: "Refunded" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-display text-2xl text-ink">Orders Management</h1>
        <div className="flex gap-2">
          <Button variant="outline">Payout Report</Button>
          <Button>Export CSV</Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-xl bg-surface p-4">
          <div className="text-2xl font-bold text-ink tabular-nums">{formatINR(54240)}</div>
          <div className="text-xs text-ink-soft mt-1">Total Revenue (Cashfree)</div>
        </div>
        <div className="rounded-xl bg-surface p-4">
          <div className="text-2xl font-bold text-ink">7</div>
          <div className="text-xs text-ink-soft mt-1">Orders This Week</div>
        </div>
        <div className="rounded-xl bg-surface p-4">
          <div className="text-2xl font-bold text-ink tabular-nums">{formatINR(76480)}</div>
          <div className="text-xs text-ink-soft mt-1">Pending Payouts</div>
        </div>
        <div className="rounded-xl bg-surface p-4">
          <div className="text-2xl font-bold text-ink">98.2%</div>
          <div className="text-xs text-ink-soft mt-1">Settlement Rate</div>
        </div>
      </div>

      <div className="surface-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-ink-soft uppercase bg-surface border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Order</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Total</th>
                <th className="px-6 py-4 font-medium">Payment</th>
                <th className="px-6 py-4 font-medium">Cashfree Ref</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {orders.map((o, i) => (
                <tr key={i} className="hover:bg-surface/50">
                  <td className="px-6 py-4 font-medium text-ink">{o.id}</td>
                  <td className="px-6 py-4 text-ink-soft whitespace-nowrap">{o.date}</td>
                  <td className="px-6 py-4 text-ink">{o.customer}</td>
                  <td className="px-6 py-4 font-medium tabular-nums">{formatINR(o.total)}</td>
                  <td className="px-6 py-4 text-ink-soft">{o.payment}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-mono text-ink-soft">{o.cfRef}</span>
                  </td>
                  <td className="px-6 py-4">{statusBadge(o.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="font-medium text-primary hover:underline text-xs">
                        View
                      </button>
                      <button className="text-ink-soft hover:text-primary text-xs flex items-center gap-1">
                        Payout <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
