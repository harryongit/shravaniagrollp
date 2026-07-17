import { createFileRoute } from "@tanstack/react-router";
import { IndianRupee, FileText, TrendingDown, TrendingUp, Download, CreditCard, ArrowUpRight, Receipt, Clock, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/_auth/accounts")({
  component: AccountsDashboard,
});

function AccountsDashboard() {
  return (
    <div className="container-x py-8 lg:py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-display text-3xl text-ink">Accounts & Finance</h1>
          <p className="text-sm text-ink-soft mt-1">FY 2025-26 · Q2 Overview</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 text-xs">
            <Download className="h-4 w-4" /> Export
          </Button>
          <Button className="gap-2 text-xs">
            <Receipt className="h-4 w-4" /> Generate Invoice
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-8">
        {[
          { label: "Revenue (MTD)", value: 2480000, icon: TrendingUp, trend: "+12.4%", color: "text-success" },
          { label: "Expenses (MTD)", value: 1850000, icon: TrendingDown, trend: "+8.2%", color: "text-destructive" },
          { label: "Net Profit", value: 630000, icon: IndianRupee, trend: "+18.6%", color: "text-success" },
          { label: "Outstanding Receivables", value: 1420000, icon: Clock, trend: "", color: "text-amber" },
        ].map((s) => (
          <div key={s.label} className="surface-card p-5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-ink-soft uppercase tracking-wider">{s.label}</div>
              <div className={`h-8 w-8 rounded-full bg-current/10 grid place-items-center ${s.color}`}>
                <s.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <div className="text-2xl font-bold text-ink">{formatINR(s.value)}</div>
              {s.trend && (
                <div className={`text-xs font-medium px-1.5 py-0.5 rounded flex items-center ${s.color} bg-current/10`}>
                  <ArrowUpRight className="h-3 w-3 mr-0.5" /> {s.trend}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="surface-card p-6">
          <h3 className="text-base font-medium text-ink mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            {[
              { id: "TXN-00124", from: "Kisan Agro Centre, Pune", amount: 23400, type: "credit" as const, date: "Today, 10:30 AM" },
              { id: "TXN-00123", from: "Green Fields Supply", amount: 12800, type: "credit" as const, date: "Yesterday, 3:15 PM" },
              { id: "TXN-00122", from: "Warehouse Restock — Urea", amount: 45000, type: "debit" as const, date: "Yesterday, 11:20 AM" },
              { id: "TXN-00121", from: "Shree Ram Seeds", amount: 45200, type: "credit" as const, date: "Jul 14, 2026" },
              { id: "TXN-00120", from: "Electricity Bill — WH-1", amount: 12400, type: "debit" as const, date: "Jul 13, 2026" },
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-full grid place-items-center ${
                    t.type === "credit" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                  }`}>
                    {t.type === "credit" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  </div>
                  <div>
                    <div className="text-sm text-ink">{t.from}</div>
                    <div className="text-xs text-ink-soft">{t.id} · {t.date}</div>
                  </div>
                </div>
                <div className={`text-sm font-medium ${t.type === "credit" ? "text-success" : "text-destructive"}`}>
                  {t.type === "credit" ? "+" : "-"}{formatINR(t.amount)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="surface-card p-6">
            <h3 className="text-base font-medium text-ink mb-4">Invoice Status</h3>
            <div className="space-y-3">
              {[
                { inv: "INV-2026-0241", customer: "Kisan Agro Centre", amount: 23400, status: "Paid" as const },
                { inv: "INV-2026-0240", customer: "Green Fields Supply", amount: 12800, status: "Pending" as const },
                { inv: "INV-2026-0239", customer: "Shree Ram Seeds", amount: 45200, status: "Overdue" as const },
                { inv: "INV-2026-0238", customer: "Bharat Agri", amount: 8900, status: "Paid" as const },
              ].map((inv, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div>
                    <div className="text-sm font-medium text-ink">{inv.inv}</div>
                    <div className="text-xs text-ink-soft">{inv.customer}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-ink">{formatINR(inv.amount)}</div>
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                      inv.status === "Paid" ? "text-success bg-success/10" :
                      inv.status === "Pending" ? "text-amber bg-amber/10" :
                      "text-destructive bg-destructive/10"
                    }`}>
                      {inv.status === "Overdue" ? <><AlertTriangle className="h-3 w-3 inline mr-0.5" /> Overdue</> : inv.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4 text-xs">
              View All Invoices
            </Button>
          </div>

          <div className="surface-card p-6">
            <h3 className="text-base font-medium text-ink mb-4">GST Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-soft">GST Collected (Output)</span>
                <span className="font-medium text-ink">{formatINR(372000)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-soft">ITC Claimed (Input)</span>
                <span className="font-medium text-ink">{formatINR(218000)}</span>
              </div>
              <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
                <span className="font-medium text-ink">Net GST Payable</span>
                <span className="font-medium text-ink">{formatINR(154000)}</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4 text-xs">
              <Download className="h-3 w-3 mr-1" /> Download GSTR-3B
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
