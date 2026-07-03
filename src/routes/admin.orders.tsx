import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/admin/orders")({
  component: AdminOrders,
});

function AdminOrders() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-display text-2xl text-ink">Orders Management</h1>
        <Button>Export CSV</Button>
      </div>

      <div className="surface-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-ink-soft uppercase bg-surface border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Total</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <tr key={i} className="hover:bg-surface/50">
                  <td className="px-6 py-4 font-medium text-ink">#SA-{1000 + i}</td>
                  <td className="px-6 py-4 text-ink-soft">Oct {10 + i}, 2026</td>
                  <td className="px-6 py-4 text-ink">Farmer {i}</td>
                  <td className="px-6 py-4 font-medium">{formatINR(3000 + i * 200)}</td>
                  <td className="px-6 py-4">
                    <span className="bg-amber/10 text-amber text-xs font-medium px-2.5 py-0.5 rounded">
                      Processing
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="font-medium text-primary hover:underline">
                      View details
                    </button>
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
