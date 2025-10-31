import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "6lbqme4u", // ✅ your project ID
  dataset: "production", // ✅ your dataset name
  apiVersion: "2025-01-01", // or the version you're using
  useCdn: false, // ❌ turn this off for private datasets
  token:
    "skbpqOdqhEtsQ1fdnNnSSuxvG5o4K1ylgdnqI5GCMzu8kIE76EbvmygHjgsoaNFKEB9wqwEid92GbBpHpSGgMvVDotY8mteSsUQ5jfTqteCxHNdKjzOYOD2YFv9o1jmV9dUxkEzQdFBI1VpvB4590VjqPlRTioVjwghwgJni7TV85FQdJ25G", // 🔹 Add this line (see below)
});
