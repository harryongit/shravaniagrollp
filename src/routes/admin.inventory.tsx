import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Download, Plus, RefreshCw, TrendingDown } from "lucide-react";
import { products, formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/admin/inventory")({
  component: AdminInventory,
});

function AdminInventory() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-display text-2xl text-ink">Inventory Management</h1>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Export
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> Intake Stock
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="surface-card p-5 border-t-4 border-t-primary">
          <div className="text-sm text-ink-soft mb-1">Total SKUs</div>
          <div className="text-2xl font-bold text-ink">{products.length}</div>
        </div>
        <div className="surface-card p-5 border-t-4 border-t-destructive">
          <div className="text-sm text-ink-soft mb-1">Out of Stock</div>
          <div className="text-2xl font-bold text-destructive">3</div>
        </div>
        <div className="surface-card p-5 border-t-4 border-t-amber">
          <div className="text-sm text-ink-soft mb-1">Low Stock</div>
          <div className="text-2xl font-bold text-amber">12</div>
        </div>
        <div className="surface-card p-5 border-t-4 border-t-success">
          <div className="text-sm text-ink-soft mb-1">Expiring in 30d</div>
          <div className="text-2xl font-bold text-success">8</div>
        </div>
      </div>

      <div className="surface-card">
        <div className="p-6 border-b border-border flex gap-4">
          <Input placeholder="Search by SKU or product name..." className="max-w-xs" />
          <select className="h-10 rounded-md border border-input bg-background px-3 text-sm">
            <option>All Warehouses</option>
            <option>WH-West-01 (Pune)</option>
            <option>WH-South-01 (Bangalore)</option>
          </select>
          <select className="h-10 rounded-md border border-input bg-background px-3 text-sm">
            <option>All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-ink-soft uppercase bg-surface border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">SKU</th>
                <th className="px-6 py-4 font-medium">Batch / Expiry</th>
                <th className="px-6 py-4 font-medium text-right">In Stock</th>
                <th className="px-6 py-4 font-medium text-right">Threshold</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {products.map((p, i) => {
                const stock = [480, 12, 0, 350, 5, 120][i % 6];
                const threshold = 20;
                const batch = `BT-2026-${1000 + i}`;
                const expiry = `Jun 202${7 + (i % 3)}`;
                const status = stock === 0 ? "out" : stock < threshold ? "low" : "ok";
                return (
                  <tr key={p.slug} className="hover:bg-surface/50">
                    <td className="px-6 py-4 font-medium text-ink">{p.name}</td>
                    <td className="px-6 py-4 font-mono text-ink-soft text-xs">
                      {p.slug.toUpperCase().slice(0, 10)}
                    </td>
                    <td className="px-6 py-4 text-ink-soft">
                      {batch} / {expiry}
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-ink tabular-nums">
                      {stock}
                    </td>
                    <td className="px-6 py-4 text-right text-ink-soft tabular-nums">{threshold}</td>
                    <td className="px-6 py-4">
                      {status === "ok" && (
                        <span className="bg-success/10 text-success text-xs font-medium px-2 py-0.5 rounded">
                          In Stock
                        </span>
                      )}
                      {status === "low" && (
                        <span className="bg-amber/10 text-amber text-xs font-medium px-2 py-0.5 rounded flex items-center gap-1">
                          <TrendingDown className="h-3 w-3" />
                          Low Stock
                        </span>
                      )}
                      {status === "out" && (
                        <span className="bg-destructive/10 text-destructive text-xs font-medium px-2 py-0.5 rounded flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          Out of Stock
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button size="sm" variant="outline" className="gap-1 text-xs">
                        <RefreshCw className="h-3 w-3" /> Restock
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
