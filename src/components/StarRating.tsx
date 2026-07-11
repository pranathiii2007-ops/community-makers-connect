import { Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import type { RatingSummary } from "@/lib/reviews";

interface Props {
  summary: RatingSummary;
  /** Show the "based on N reviews" text. */
  showCount?: boolean;
  className?: string;
}

export function StarRating({ summary, showCount, className }: Props) {
  const { t } = useLang();
  const { average, count } = summary;
  const rounded = Math.round(average);

  if (count === 0) {
    return (
      <div className={`flex items-center gap-1 text-xs text-muted-foreground ${className ?? ""}`}>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 text-muted-foreground/40" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-1.5 ${className ?? ""}`}>
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${i < rounded ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"}`}
          />
        ))}
      </div>
      <span className="text-xs font-medium text-foreground">{average.toFixed(1)}</span>
      {showCount && (
        <span className="text-xs text-muted-foreground">
          {t("basedOnReviews")} {count} {t("reviewsLower")}
        </span>
      )}
    </div>
  );
}
