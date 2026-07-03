import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { FileText, DollarSign, Download, CreditCard, BarChart4 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/_auth/accounts")({
  component: AccountsDashboard,
});

function AccountsDashboard() {
  const { user } = useAuth();

  return (
    <div className="container-x py-8 lg:py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-display text-3xl text-ink">Accounts & Finance</h1>
            <span className="bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider">
              Manager
            </span>
          </div>
          <p className="text-ink-soft">Reconciliation, Invoices, and GST Reports</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Export GSTR-1
          </Button>
          <Button className="gap-2">
            <BarChart4 className="h-4 w-4" /> Financial Reports
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="surface-card p-6 border-t-4 border-t-primary">
          <div className="text-sm font-medium text-ink-soft mb-2 flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-primary" /> Today's Collections
          </div>
          <div className="text-display text-3xl text-ink">{formatINR(840000)}</div>
          <div className="text-xs text-ink-soft mt-1">₹6.2L Online · ₹2.2L COD</div>
        </div>

        <div className="surface-card p-6 border-t-4 border-t-amber">
          <div className="text-sm font-medium text-ink-soft mb-2 flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-amber" /> Pending Refunds
          </div>
          <div className="text-display text-3xl text-ink">{formatINR(24500)}</div>
          <div className="text-xs text-ink-soft mt-1">12 requests to process</div>
        </div>

        <div className="surface-card p-6 border-t-4 border-t-success">
          <div className="text-sm font-medium text-ink-soft mb-2 flex items-center gap-2">
            <FileText className="h-4 w-4 text-success" /> Monthly GST Liability
          </div>
          <div className="text-display text-3xl text-ink">{formatINR(1250000)}</div>
          <div className="text-xs text-success mt-1">Est. for Current Month</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="surface-card">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-medium text-ink flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" /> Payment Reconciliation
            </h3>
            <select className="h-9 rounded-md border border-input bg-background px-3 text-sm">
              <option>Razorpay</option>
              <option>Stripe</option>
              <option>COD Remittance</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-ink-soft uppercase bg-surface border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-medium">Txn ID</th>
                  <th className="px-6 py-4 font-medium">Order</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { txn: "pay_LKhg9...", order: "SA-1024", amt: 4500, status: "settled" },
                  {
                    txn: "pay_LKhj2...",
                    order: "SA-1025",
                    amt: 12500,
                    status: "pending_settlement",
                  },
                  { txn: "pay_LKhx1...", order: "SA-1026", amt: 850, status: "settled" },
                ].map((t) => (
                  <tr key={t.txn} className="hover:bg-surface/50">
                    <td className="px-6 py-4 font-mono text-ink-soft">{t.txn.slice(0, 10)}</td>
                    <td className="px-6 py-4 font-medium text-ink">{t.order}</td>
                    <td className="px-6 py-4">{formatINR(t.amt)}</td>
                    <td className="px-6 py-4">
                      {t.status === "settled" ? (
                        <span className="bg-success/10 text-success text-xs font-medium px-2 py-0.5 rounded">
                          Settled
                        </span>
                      ) : (
                        <span className="bg-amber/10 text-amber text-xs font-medium px-2 py-0.5 rounded">
                          Pending Bank
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="surface-card">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-medium text-ink flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" /> Refund Approvals
            </h3>
            <Button size="sm" variant="ghost">
              View All
            </Button>
          </div>
          <div className="divide-y divide-border">
            {[
              { id: "RF-902", order: "SA-0992", amt: 2500, reason: "Damaged Item" },
              { id: "RF-903", order: "SA-0995", amt: 12000, reason: "Order Cancelled" },
            ].map((rf) => (
              <div
                key={rf.id}
                className="p-4 flex items-center justify-between hover:bg-surface/50"
              >
                <div>
                  <div className="font-medium text-sm text-ink">
                    {rf.id} · {rf.order}
                  </div>
                  <div className="text-xs text-ink-soft mt-1">{rf.reason}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-medium text-ink">{formatINR(rf.amt)}</div>
                  <Button size="sm">Approve</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
