import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "6lbqme4u", 
  dataset: "production", 
  apiVersion: "2025-01-01", 
  useCdn: false,
  token:
    "skbpqOdqhEtsQ1fdnNnSSuxvG5o4K1ylgdnqI5GCMzu8kIE76EbvmygHjgsoaNFKEB9wqwEid92GbBpHpSGgMvVDotY8mteSsUQ5jfTqteCxHNdKjzOYOD2YFv9o1jmV9dUxkEzQdFBI1VpvB4590VjqPlRTioVjwghwgJni7TV85FQdJ25G", // 🔹 Add this line (see below)
});
// Initialize image builder
const builder = imageUrlBuilder(client);

// Export the helper function
export const urlFor = (source) => builder.image(source);
