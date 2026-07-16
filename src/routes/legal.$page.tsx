import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/$page")({
  component: LegalPage,
});

const pages: Record<string, { title: string; content: string }> = {
  privacy: {
    title: "Privacy Policy",
    content: `
## 1. Introduction
Shravani Agroproducts Enterprises LLP ("Shravani Agroproducts Enterprises LLP", "we", "us", or "our"), incorporated under the Limited Liability Partnership Act, 2008, operates the agricultural marketplace platform at shravaniagro.com. This Privacy Policy explains how we collect, use, disclose, and protect your personal information.

## 2. Information We Collect
We collect information you provide directly to us, including your name, email address, phone number, postal address, farm profile details, payment information (processed securely via Razorpay/Stripe — we do not store card data), and any content you submit (reviews, advisory requests).

We also automatically collect device information, IP addresses, browser type, and usage analytics through Google Analytics 4 and Google Tag Manager.

## 3. How We Use Your Information
- To process orders, deliver products, and provide customer support.
- To send transactional messages (order confirmations, delivery updates) via email, SMS, and WhatsApp.
- To personalise product recommendations based on your crop profile and purchase history.
- To comply with GST and other legal obligations requiring invoice record retention.
- To improve our platform through aggregated, anonymised analytics.

## 4. Sharing of Information
We do not sell your personal data. We share information only with: delivery partners (shipping address and order details only), payment gateways (for transaction processing), and government authorities (when required by law, e.g., GST filings).

## 5. Data Retention
We retain your account and order data for a minimum of 7 years to comply with Indian GST and accounting regulations. You may request account deletion for non-transactional data at any time.

## 6. Your Rights
You have the right to access, correct, and request deletion of your personal data. Contact us at privacy@shravaniagro.com.

## 7. Cookies
We use first-party cookies for session management and third-party cookies (Google Analytics, Meta Pixel) for analytics. You can opt out via our cookie settings or browser controls.

## 8. Contact Us
Shravani Agroproducts Enterprises LLP, Agriculture Hub, Phase 2, Pune, Maharashtra 411001. Email: privacy@shravaniagro.com
    `,
  },
  terms: {
    title: "Terms of Service",
    content: `
## 1. Acceptance of Terms
By accessing or using the Shravani Agroproducts Enterprises LLP platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.

## 2. Eligibility
The platform is available to users who are 18 years of age or older. Dealers and Distributors must hold a valid trade license and GSTIN.

## 3. Orders & Pricing
All prices are displayed inclusive of applicable GST. We reserve the right to correct pricing errors before fulfillment. Orders are subject to stock availability; in the event of a stock-out post-payment, a full refund will be initiated within 5 business days.

## 4. Intellectual Property
All content, branding, illustrations, and platform code are the exclusive property of Shravani Agroproducts Enterprises LLP. You may not reproduce, republish, or redistribute any content without prior written permission.

## 5. Limitation of Liability
To the maximum extent permitted by law, Shravani Agroproducts Enterprises LLP shall not be liable for indirect, incidental, or consequential damages arising from use of the platform.

## 6. Governing Law
These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Pune, Maharashtra.

## 7. Amendments
We reserve the right to modify these Terms at any time. Continued use of the platform after modifications constitutes acceptance of the updated Terms.
    `,
  },
  shipping: {
    title: "Shipping Policy",
    content: `
## Delivery Timelines
Standard orders are processed and dispatched within 1–2 business days of payment confirmation. Delivery timelines depend on the shipping zone:
- **Tier 1 Cities (Pune, Mumbai, Bangalore etc.):** 2–3 business days
- **Tier 2 / Tier 3 Cities:** 3–5 business days
- **Rural Pincodes:** 5–8 business days

## Shipping Charges
Free standard shipping on orders above ₹5,000. Orders below ₹5,000 attract a flat shipping fee of ₹99. Express delivery (1–2 business days) is available in select pincodes at ₹250 additional.

## Bulk Orders & Heavy Items
Farm machinery, sprayers, and heavy items are shipped via dedicated logistics partners. Timelines may vary; the sales team will communicate specific ETAs at the time of order confirmation.

## Tracking
All shipments are provided with a tracking number via SMS and email once dispatched. You may also track your order at shravaniagro.com/track.

## Failed Delivery Attempts
If a delivery fails due to the customer being unavailable, the courier will attempt redelivery twice. After two failed attempts, the order may be returned to our warehouse, and a refund will be initiated after deducting return shipping charges.
    `,
  },
  returns: {
    title: "Returns & Refunds Policy",
    content: `
## Return Window
Products may be returned within 7 days of delivery if they are: damaged during transit, incorrect items delivered, or defective (manufacturing defect confirmed by our team). Seeds, opened pesticides/herbicides, and consumable products are not eligible for return once opened, due to regulatory requirements.

## How to Initiate a Return
Log in to your account, navigate to Order History, select the order, and click "Request Return". Upload clear photos of the damaged/incorrect item. Our team will review the request within 48 hours.

## Refund Processing
Approved refunds are processed to the original payment method within 5–7 business days. COD orders are refunded via bank transfer; please provide your account details during the return request.

## Cancellations
Orders may be cancelled before dispatch (usually within 2 hours of placement). Once dispatched, cancellations are not possible; you may initiate a return after delivery.

## Damaged in Transit
If your order arrives visibly damaged, please refuse the delivery and note this on the delivery receipt. Contact our support team immediately with photos for priority resolution.
    `,
  },
};

function LegalPage() {
  const { page } = Route.useParams();
  const data = pages[page] || pages["terms"];

  return (
    <div className="container-x py-12 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-eyebrow mb-4">Legal</div>
        <h1 className="text-display text-4xl text-ink mb-8">{data.title}</h1>
        <p className="text-sm text-ink-soft mb-8 pb-8 border-b border-border">
          Last updated: November 1, 2026
        </p>

        <div className="prose prose-neutral max-w-none text-ink space-y-4">
          {data.content
            .trim()
            .split("\n")
            .map((line, i) => {
              if (line.startsWith("## "))
                return (
                  <h2 key={i} className="text-xl font-medium text-ink mt-8 mb-3">
                    {line.replace("## ", "")}
                  </h2>
                );
              if (line.startsWith("- **")) {
                const match = line.match(/\*\*(.*?)\*\*:(.*)/);
                if (match)
                  return (
                    <div key={i} className="text-sm text-ink-soft pl-4 mb-1">
                      <span className="font-medium text-ink">{match[1]}:</span>
                      {match[2]}
                    </div>
                  );
              }
              if (line.startsWith("- "))
                return (
                  <li key={i} className="text-sm text-ink-soft ml-4">
                    {line.replace("- ", "")}
                  </li>
                );
              if (line.trim() === "") return null;
              return (
                <p key={i} className="text-sm text-ink-soft leading-relaxed">
                  {line}
                </p>
              );
            })}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4 text-sm">
          {Object.entries(pages).map(
            ([key, p]) =>
              key !== page && (
                <a key={key} href={`/legal/${key}`} className="text-primary hover:underline">
                  {p.title}
                </a>
              ),
          )}
        </div>
      </div>
    </div>
  );
}
