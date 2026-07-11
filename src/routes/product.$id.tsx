import { useState, useEffect, useCallback } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, MessageCircle, Store, MapPin, Star } from "lucide-react";
import { toast } from "sonner";
import { useLang } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ContactFormModal } from "@/components/ContactFormModal";
import { StarRating } from "@/components/StarRating";
import { useMarketProduct } from "@/lib/db-content";
import { getSeller } from "@/lib/sellers";
import {
  addReview,
  getReviewsForProduct,
  getRatingSummary,
  type Review,
  type RatingSummary,
} from "@/lib/reviews";

export const Route = createFileRoute("/product/$id")({
  head: () => ({
    meta: [
      { title: "Product Details — Community Makers' Market" },
      { name: "description", content: "View product details and contact the local seller directly." },
    ],
  }),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { id } = Route.useParams();
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [summary, setSummary] = useState<RatingSummary>({ average: 0, count: 0 });

  const reloadReviews = useCallback(() => {
    setReviews(getReviewsForProduct(id));
    setSummary(getRatingSummary(id));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    reloadReviews();
  }, [id, reloadReviews]);

  const { product } = useMarketProduct(id, lang);
  const seller = product?.sellerId ? getSeller(product.sellerId) : undefined;

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <p className="text-lg text-muted-foreground">{t("productNotFound")}</p>
        <Button className="mt-6" onClick={() => navigate({ to: "/marketplace" })}>
          {t("backToMarketplace")}
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <button
        onClick={() => navigate({ to: "/marketplace" })}
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> {t("backToMarketplace")}
      </button>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-card"
        >
          {product.image ? (
            <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
          ) : (
            <div className="flex aspect-square items-center justify-center bg-gradient-warm text-[8rem]">
              {product.emoji ?? "📦"}
            </div>
          )}
          {product.discountPercent ? (
            <span className="absolute left-4 top-4 rounded-full bg-destructive px-3 py-1.5 text-sm font-bold text-destructive-foreground shadow-soft">
              {product.discountPercent}% {t("off")}
            </span>
          ) : null}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <Badge variant="secondary" className="font-normal">{product.category}</Badge>
          <h1 className="mt-3 text-3xl font-bold">{product.name}</h1>
          <StarRating summary={summary} showCount className="mt-2" />
          {product.discountedPrice ? (
            <p className="mt-2 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-primary">{product.discountedPrice}</span>
              <span className="text-xl text-muted-foreground line-through">{product.price}</span>
            </p>
          ) : (
            <p className="mt-2 text-3xl font-extrabold text-primary">{product.price}</p>
          )}
          <p className="mt-5 text-muted-foreground">{product.description}</p>

          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <Store className="h-4 w-4 text-primary" /> {t("sellerInformation")}
            </h3>
            <p className="mt-2 font-medium">{product.sellerName}</p>
            {seller && (
              <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> {seller.location}
              </p>
            )}
          </div>

          <Button size="lg" className="mt-6 w-full" onClick={() => setOpen(true)}>
            <MessageCircle className="mr-1 h-4 w-4" /> {t("contactSeller")}
          </Button>
        </motion.div>
      </div>

      {/* Reviews */}
      <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{t("reviews")}</h2>
            <StarRating summary={summary} showCount />
          </div>
          {reviews.length === 0 ? (
            <p className="mt-6 rounded-2xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">
              {t("noReviewsYet")}
            </p>
          ) : (
            <div className="mt-6 grid gap-4">
              {reviews.map((r) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-border bg-card p-4 shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{r.name}</p>
                    <span className="text-xs text-muted-foreground">{new Date(r.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="mt-1 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-3.5 w-3.5 ${i < r.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"}`} />
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{r.comment}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <ReviewForm productId={id} onAdded={reloadReviews} />
      </div>

      <ContactFormModal
        open={open}
        onOpenChange={setOpen}
        subject={product.name}
        sellerId={product.sellerId}
        productId={product.id}
        defaultMessage={t("defaultInquiryMsg")}
      />
    </div>
  );
}

function ReviewForm({ productId, onAdded }: { productId: string; onAdded: () => void }) {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2 || rating < 1 || comment.trim().length < 2) {
      toast.error(t("invalidCredentials") && t("yourReview"));
      return;
    }
    addReview({ productId, name: name.trim(), rating, comment: comment.trim() });
    toast.success(t("reviewAdded"));
    setName("");
    setRating(0);
    setComment("");
    onAdded();
  };

  return (
    <form onSubmit={submit} className="h-fit rounded-3xl border border-border bg-card p-6 shadow-soft">
      <h3 className="text-lg font-semibold">{t("writeReview")}</h3>
      <div className="mt-4 grid gap-4">
        <div className="grid gap-1.5">
          <Label>{t("reviewerName")}</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="grid gap-1.5">
          <Label>{t("yourRating")}</Label>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => {
              const val = i + 1;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRating(val)}
                  onMouseEnter={() => setHover(val)}
                  onMouseLeave={() => setHover(0)}
                  aria-label={`${val}`}
                >
                  <Star className={`h-6 w-6 transition-colors ${val <= (hover || rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"}`} />
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid gap-1.5">
          <Label>{t("yourReview")}</Label>
          <Textarea rows={4} value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>
        <Button type="submit" className="w-full">{t("submitReview")}</Button>
      </div>
    </form>
  );
}
