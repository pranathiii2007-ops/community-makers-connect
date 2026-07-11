export interface Review {
  id: string;
  productId: string;
  name: string;
  rating: number; // 1-5
  comment: string;
  createdAt: string;
}

const KEY = "cmm-reviews";

function read(): Review[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function write(list: Review[]) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function addReview(
  data: Omit<Review, "id" | "createdAt">,
): Review {
  const review: Review = {
    ...data,
    rating: Math.max(1, Math.min(5, Math.round(data.rating))),
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const list = read();
  list.push(review);
  write(list);
  return review;
}

export function getReviewsForProduct(productId: string): Review[] {
  return read()
    .filter((r) => r.productId === productId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export interface RatingSummary {
  average: number;
  count: number;
}

export function getRatingSummary(productId: string): RatingSummary {
  const list = getReviewsForProduct(productId);
  if (list.length === 0) return { average: 0, count: 0 };
  const total = list.reduce((sum, r) => sum + r.rating, 0);
  return { average: total / list.length, count: list.length };
}
