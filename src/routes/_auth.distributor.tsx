import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { Truck, CheckCircle2, TrendingUp, DollarSign, Package } from "lucide-react";
import { formatINR } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_auth/distributor")({
  component: DistributorDashboard,
});

function DistributorDashboard() {
  const { user } = useAuth();

  return (
    <div className="container-x py-8 lg:py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-display text-3xl text-ink">Supplier Portal</h1>
            <span className="bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider">
              Active
            </span>
          </div>
          <p className="text-ink-soft">National Fertilizers Ltd. · Vendor Code: VN-8042</p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="surface-card p-6 border-t-4 border-t-primary">
          <div className="text-sm font-medium text-ink-soft mb-2">Supply Fulfillment Rate</div>
          <div className="text-display text-3xl text-ink">98.2%</div>
          <div className="text-xs text-ink-soft mt-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3 text-success" /> +1.4% vs last month
          </div>
        </div>

        <div className="surface-card p-6 border-t-4 border-t-accent">
          <div className="text-sm font-medium text-ink-soft mb-2">Pending POs</div>
          <div className="text-display text-3xl text-ink">4</div>
          <div className="text-xs text-ink-soft mt-1">Require acknowledgment</div>
        </div>

        <div className="surface-card p-6 border-t-4 border-t-success">
          <div className="text-sm font-medium text-ink-soft mb-2">Pending Payments</div>
          <div className="text-display text-3xl text-ink">{formatINR(1250000)}</div>
          <div className="text-xs text-ink-soft mt-1">To be cleared by 15th Nov</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="surface-card">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="text-lg font-medium text-ink flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" /> Inbound Purchase Orders (from Shravani
                Agro)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-ink-soft uppercase bg-surface border-b border-border">
                  <tr>
                    <th className="px-6 py-4 font-medium">PO Number</th>
                    <th className="px-6 py-4 font-medium">Date Issued</th>
                    <th className="px-6 py-4 font-medium">Expected By</th>
                    <th className="px-6 py-4 font-medium">Amount</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    {
                      po: "PO-9201",
                      date: "01 Nov",
                      exp: "10 Nov",
                      amt: 450000,
                      status: "pending",
                    },
                    {
                      po: "PO-9188",
                      date: "28 Oct",
                      exp: "05 Nov",
                      amt: 820000,
                      status: "accepted",
                    },
                    {
                      po: "PO-9142",
                      date: "15 Oct",
                      exp: "25 Oct",
                      amt: 350000,
                      status: "fulfilled",
                    },
                  ].map((order) => (
                    <tr key={order.po} className="hover:bg-surface/50">
                      <td className="px-6 py-4 font-medium text-ink">{order.po}</td>
                      <td className="px-6 py-4 text-ink-soft">{order.date}</td>
                      <td className="px-6 py-4 text-ink-soft">{order.exp}</td>
                      <td className="px-6 py-4 font-medium">{formatINR(order.amt)}</td>
                      <td className="px-6 py-4">
                        {order.status === "pending" && (
                          <span className="bg-amber/10 text-amber text-xs font-medium px-2 py-0.5 rounded">
                            Pending Acknowledgment
                          </span>
                        )}
                        {order.status === "accepted" && (
                          <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded">
                            In Transit
                          </span>
                        )}
                        {order.status === "fulfilled" && (
                          <span className="bg-success/10 text-success text-xs font-medium px-2 py-0.5 rounded">
                            Delivered
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        {order.status === "pending" ? (
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              Reject
                            </Button>
                            <Button size="sm">Accept</Button>
                          </div>
                        ) : (
                          <Button size="sm" variant="outline">
                            View PDF
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="surface-card p-6">
            <h3 className="text-lg font-medium text-ink mb-4 flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" /> Active Dispatches
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-border bg-background">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium text-sm text-ink">ASN-8829 (PO-9188)</div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                    In Transit
                  </span>
                </div>
                <div className="text-xs text-ink-soft space-y-1">
                  <div>Carrier: VRL Logistics</div>
                  <div>Tracking: VRL-892183921</div>
                  <div>Est. Delivery: Tomorrow, 10:00 AM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="surface-card p-6">
            <h3 className="text-lg font-medium text-ink mb-4">Listing Management</h3>
            <p className="text-sm text-ink-soft mb-4">
              Propose new product listings or update pricing for existing approved items. Changes
              require admin approval.
            </p>
            <Button className="w-full">Submit New Product</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
