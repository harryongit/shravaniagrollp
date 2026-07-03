import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { products, formatINR } from "@/lib/catalog";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/admin/catalog")({
  component: AdminCatalog,
});

function AdminCatalog() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-display text-2xl text-ink">Catalog Management</h1>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Product
        </Button>
      </div>

      <div className="surface-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-ink-soft uppercase bg-surface border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Stock</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {products.map((p) => (
                <tr key={p.slug} className="hover:bg-surface/50">
                  <td className="px-6 py-4 font-medium text-ink flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-surface shrink-0"></div>
                    {p.name}
                  </td>
                  <td className="px-6 py-4 text-ink-soft">{p.category}</td>
                  <td className="px-6 py-4 font-medium">{formatINR(p.price)}</td>
                  <td className="px-6 py-4">420 units</td>
                  <td className="px-6 py-4">
                    <span className="bg-success/10 text-success text-xs font-medium px-2.5 py-0.5 rounded">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="font-medium text-primary hover:underline">Edit</button>
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
