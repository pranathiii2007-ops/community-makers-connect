import { useState, useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Store, ArrowRight, CheckCircle2, LogIn } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { useSeller } from "@/contexts/SellerContext";
import { SectionHeading } from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  sellerCategories,
  registerSeller,
  SellerEmailExistsError,
} from "@/lib/sellers";
import { workflowSteps } from "@/data/content";

export const Route = createFileRoute("/sell")({
  head: () => ({
    meta: [
      { title: "Become a Seller — Community Makers' Market" },
      { name: "description", content: "Register your home-based business and start selling to local buyers. No payments, connect directly." },
      { property: "og:title", content: "Become a Seller" },
      { property: "og:description", content: "Turn your skill into income. Register as a community seller." },
    ],
  }),
  component: SellPage,
});

type Mode = "register" | "login";

function SellPage() {
  const { t, tr } = useLang();
  const navigate = useNavigate();
  const { seller, refresh, login } = useSeller();
  const [mode, setMode] = useState<Mode>("register");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    businessName: "",
    category: sellerCategories[0].key,
    description: "",
    password: "",
  });
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => window.scrollTo(0, 0), []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.fullName.trim().length < 2) e.fullName = "!";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "!";
    if (form.phone.trim().replace(/\D/g, "").length < 8) e.phone = "!";
    if (form.location.trim().length < 2) e.location = "!";
    if (form.businessName.trim().length < 2) e.businessName = "!";
    if (form.description.trim().length < 5) e.description = "!";
    if (form.password.length < 4) e.password = "!";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    try {
      registerSeller(form);
      refresh();
      toast.success(t("registrationSuccess"));
      navigate({ to: "/seller-dashboard" });
    } catch (err) {
      if (err instanceof SellerEmailExistsError) {
        toast.error(t("emailAlreadyExists"));
        setMode("login");
        setLoginForm((f) => ({ ...f, email: form.email }));
      }
    }
  };

  const submitLogin = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (login(loginForm.email, loginForm.password)) {
      toast.success(t("loginSuccess"));
      navigate({ to: "/seller-dashboard" });
    } else {
      toast.error(t("invalidCredentials"));
    }
  };

  if (seller) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
        <h1 className="mt-4 text-2xl font-bold">{tr({ en: "You're already a seller", te: "మీరు ఇప్పటికే విక్రేత" })}</h1>
        <p className="mt-2 text-muted-foreground">{seller.businessName}</p>
        <Button className="mt-6" onClick={() => navigate({ to: "/seller-dashboard" })}>
          {t("goToDashboard")} <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading titleKey="sellerRegistration" subKey="sellerRegSub" />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* Workflow journey */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Store className="h-3.5 w-3.5 text-primary" /> {t("workflowTitle")}
          </span>
          <div className="mt-5 grid gap-3">
            {workflowSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft"
              >
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <h4 className="text-sm font-semibold">{tr(s.title)}</h4>
                  <p className="text-xs text-muted-foreground">{tr(s.text)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Register / Login card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
        >
          {/* Mode tabs */}
          <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl bg-muted p-1">
            <button
              type="button"
              onClick={() => setMode("register")}
              className={`rounded-lg py-2 text-sm font-medium transition-colors ${mode === "register" ? "bg-card text-foreground shadow-soft" : "text-muted-foreground"}`}
            >
              {t("register")}
            </button>
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`rounded-lg py-2 text-sm font-medium transition-colors ${mode === "login" ? "bg-card text-foreground shadow-soft" : "text-muted-foreground"}`}
            >
              {t("login")}
            </button>
          </div>

          {mode === "register" ? (
            <form onSubmit={submit} className="grid gap-4">
              <Field label={t("fullName")} err={errors.fullName}>
                <Input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={t("email")} err={errors.email}>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </Field>
                <Field label={t("phone")} err={errors.phone}>
                  <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </Field>
              </div>
              <Field label={t("location")} err={errors.location}>
                <Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
              </Field>
              <Field label={t("businessName")} err={errors.businessName}>
                <Input value={form.businessName} onChange={(e) => setForm({ ...form, businessName: e.target.value })} />
              </Field>
              <div className="grid gap-1.5">
                <Label>{t("businessCategory")}</Label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                >
                  {sellerCategories.map((c) => (
                    <option key={c.key} value={c.key}>{tr(c.label)}</option>
                  ))}
                </select>
              </div>
              <Field label={t("createPassword")} err={errors.password}>
                <Input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
              </Field>
              <Field label={t("businessDescription")} err={errors.description}>
                <Textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              </Field>
              <Button type="submit" size="lg" className="mt-2 w-full">
                {t("registerNow")} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                <button type="button" onClick={() => setMode("login")} className="font-medium text-primary hover:underline">
                  {t("haveAccount")}
                </button>
              </p>
            </form>
          ) : (
            <form onSubmit={submitLogin} className="grid gap-4">
              <div className="grid gap-1.5">
                <Label>{t("email")}</Label>
                <Input type="email" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} />
              </div>
              <div className="grid gap-1.5">
                <Label>{t("password")}</Label>
                <Input type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} />
              </div>
              <Button type="submit" size="lg" className="mt-2 w-full">
                <LogIn className="mr-1 h-4 w-4" /> {t("loginToDashboard")}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                <button type="button" onClick={() => setMode("register")} className="font-medium text-primary hover:underline">
                  {t("dontHaveAccount")}
                </button>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function Field({ label, err, children }: { label: string; err?: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label>{label}</Label>
      <div className={err ? "[&_input]:border-destructive [&_textarea]:border-destructive" : ""}>{children}</div>
    </div>
  );
}
