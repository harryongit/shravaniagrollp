import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { MessageSquare, Phone, Search, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/_auth/support")({
  component: SupportDashboard,
});

function SupportDashboard() {
  const { user } = useAuth();

  return (
    <div className="container-x py-8 lg:py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-display text-3xl text-ink">Support Console</h1>
            <span className="bg-success/10 text-success border border-success/20 px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider">
              Online
            </span>
          </div>
          <p className="text-ink-soft">Agent: {user?.email || "Support Rep"}</p>
        </div>
        <div className="flex gap-3 relative max-w-sm w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" />
          <Input placeholder="Lookup Order ID or Phone..." className="pl-9" />
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2">My Open Tickets</div>
          <div className="text-display text-3xl text-ink">12</div>
        </div>
        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2">Unassigned Queue</div>
          <div className="text-display text-3xl text-ink">8</div>
        </div>
        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2">Avg Response Time</div>
          <div className="text-display text-3xl text-ink">14m</div>
        </div>
        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2">CSAT Score</div>
          <div className="text-display text-3xl text-ink">4.8/5</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <div className="surface-card">
            <div className="p-4 border-b border-border font-medium text-ink flex items-center justify-between">
              Ticket Queue
              <select className="text-xs bg-transparent border-none text-ink-soft focus:ring-0">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Highest Priority</option>
              </select>
            </div>
            <div className="divide-y divide-border h-[500px] overflow-y-auto">
              {[
                {
                  id: "T-1042",
                  subject: "Refund not received",
                  user: "Ramesh K.",
                  time: "10m ago",
                  priority: "high",
                  type: "email",
                },
                {
                  id: "T-1043",
                  subject: "How to use Imidacloprid?",
                  user: "Suresh P.",
                  time: "25m ago",
                  priority: "medium",
                  type: "whatsapp",
                },
                {
                  id: "T-1044",
                  subject: "Order delayed",
                  user: "Anil D.",
                  time: "1h ago",
                  priority: "high",
                  type: "phone",
                },
                {
                  id: "T-1045",
                  subject: "Cancel my order",
                  user: "Mahesh G.",
                  time: "2h ago",
                  priority: "medium",
                  type: "email",
                },
                {
                  id: "T-1046",
                  subject: "Received damaged bag",
                  user: "Vijay R.",
                  time: "3h ago",
                  priority: "high",
                  type: "whatsapp",
                },
              ].map((t) => (
                <div key={t.id} className="p-4 hover:bg-surface/50 cursor-pointer">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-medium text-ink-soft">{t.id}</span>
                    <span className="flex items-center gap-1 text-[10px] text-ink-soft">
                      <Clock className="h-3 w-3" /> {t.time}
                    </span>
                  </div>
                  <div className="font-medium text-sm text-ink mb-1">{t.subject}</div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-ink-soft">{t.user}</span>
                    <div className="flex gap-2">
                      {t.priority === "high" && (
                        <AlertCircle className="h-3.5 w-3.5 text-destructive" />
                      )}
                      {t.type === "whatsapp" && (
                        <MessageSquare className="h-3.5 w-3.5 text-success" />
                      )}
                      {t.type === "phone" && <Phone className="h-3.5 w-3.5 text-primary" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 surface-card flex flex-col h-[555px]">
          <div className="p-4 border-b border-border flex justify-between items-start bg-surface/30">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="font-medium text-lg text-ink">Refund not received</h2>
                <span className="bg-destructive/10 text-destructive text-[10px] uppercase px-1.5 py-0.5 rounded font-bold">
                  High Priority
                </span>
              </div>
              <div className="text-sm text-ink-soft mt-1">
                Ticket: T-1042 · Customer: Ramesh Kumar · Related Order: SA-1024
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                Initiate Refund
              </Button>
              <Button size="sm" variant="outline">
                Close Ticket
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-background">
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-surface shrink-0 grid place-items-center text-xs font-medium">
                RK
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-ink">Ramesh Kumar</span>
                  <span className="text-xs text-ink-soft">10:45 AM</span>
                </div>
                <div className="text-sm text-ink bg-surface p-3 rounded-tr-xl rounded-b-xl inline-block max-w-[80%] border border-border">
                  I returned my order SA-1024 last week, the pickup was done, but I haven't received
                  the refund in my bank account yet. Can you please check?
                </div>
              </div>
            </div>

            <div className="flex gap-4 flex-row-reverse">
              <div className="h-8 w-8 rounded-full bg-primary/20 text-primary shrink-0 grid place-items-center text-xs font-medium">
                SR
              </div>
              <div className="flex-1 flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-ink-soft">11:02 AM</span>
                  <span className="text-sm font-medium text-ink">Support Rep</span>
                </div>
                <div className="text-sm text-primary-foreground bg-primary p-3 rounded-tl-xl rounded-b-xl inline-block max-w-[80%]">
                  Hello Ramesh, I apologize for the delay. Let me check the status of your return
                  with the warehouse and process the refund immediately. Give me a moment.
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-border bg-surface/30">
            <div className="flex gap-2">
              <Input placeholder="Type your reply..." className="flex-1" />
              <Button>Send Reply</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
