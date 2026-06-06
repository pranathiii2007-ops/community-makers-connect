import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { Loader2, ImagePlus, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";
import {
  sellerCategories,
  addProduct,
  updateProduct,
  type SellerProduct,
} from "@/lib/sellers";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  sellerId: string;
  product?: SellerProduct | null;
  onSaved: () => void;
}

export function ProductFormModal({ open, onOpenChange, sellerId, product, onSaved }: Props) {
  const { t, tr } = useLang();
  const fileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: sellerCategories[0].key,
    price: "",
    image: "" as string,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (open) {
      setForm({
        name: product?.name ?? "",
        description: product?.description ?? "",
        category: product?.category ?? sellerCategories[0].key,
        price: product?.price ?? "",
        image: product?.image ?? "",
      });
      setErrors({});
    }
  }, [open, product]);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image must be under 2MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setForm((f) => ({ ...f, image: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "!";
    if (form.description.trim().length < 5) e.description = "!";
    if (form.price.trim().length < 1) e.price = "!";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      if (product) {
        updateProduct(product.id, { ...form });
        toast.success(t("productUpdated"));
      } else {
        addProduct({ sellerId, ...form });
        toast.success(t("productPublished"));
      }
      setLoading(false);
      onOpenChange(false);
      onSaved();
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-md overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product ? t("editProduct") : t("addProduct")}</DialogTitle>
        </DialogHeader>
        <form onSubmit={submit} className="grid gap-4">
          <div className="grid gap-1.5">
            <Label>{t("productImage")}</Label>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onFile} />
            {form.image ? (
              <div className="relative">
                <img src={form.image} alt="" className="h-40 w-full rounded-xl object-cover" />
                <button
                  type="button"
                  onClick={() => setForm({ ...form, image: "" })}
                  className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-background/80 text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex h-32 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border text-sm text-muted-foreground transition-colors hover:bg-accent"
              >
                <ImagePlus className="h-6 w-6" />
                {t("uploadImageHint")}
              </button>
            )}
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="pf-name">{t("productName")}</Label>
            <Input
              id="pf-name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={errors.name ? "border-destructive" : ""}
            />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="pf-desc">{t("productDescription")}</Label>
            <Textarea
              id="pf-desc"
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className={errors.description ? "border-destructive" : ""}
            />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="pf-cat">{t("businessCategory")}</Label>
            <select
              id="pf-cat"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            >
              {sellerCategories.map((c) => (
                <option key={c.key} value={c.key}>
                  {tr(c.label)}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="pf-price">{t("price")}</Label>
            <Input
              id="pf-price"
              placeholder="₹250"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className={errors.price ? "border-destructive" : ""}
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {product ? t("updateProduct") : t("publishProduct")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
