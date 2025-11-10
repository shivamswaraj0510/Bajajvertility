import React from "react";
import "../components/breadcrumb/styles/breadcrumb.scss";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import CategoryCard from "../components/category_card/category";
import ProductCard from "../components/product_card/product_card";
import PrescriptionUpload from "../components/prescription/prescription";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import HeroVisualCarousel from "../components/hero_visual/hero_visual";

import { client } from "../lib/sanity";

const CATS_QUERY = `*[_type == "buy_medicines_categories"][0].categories[]{
  icon,
  title,
  desc
}`;

// ✅ New: GROQ to fetch products with direct image URL
const PRODUCTS_QUERY = `*[_type == "buy_medicines_products"][0].products[]{
  title,
  salt,
  mrp,
  sale,
  "image_link": image_link.asset->url
}`;

export default function BuyMedicines() {
  // Categories state (unchanged)
  const [catsFromSanity, setCatsFromSanity] = React.useState([]);
  const [catsLoading, setCatsLoading] = React.useState(true);
  const [catsError, setCatsError] = React.useState(null);

  React.useEffect(() => {
    let active = true;
    setCatsLoading(true);
    setCatsError(null);

    client
      .fetch(CATS_QUERY)
      .then((res) => {
        if (!active) return;
        setCatsFromSanity(Array.isArray(res) ? res : []);
      })
      .catch((err) => {
        if (!active) return;
        setCatsError(err?.message || "Failed to load categories");
        setCatsFromSanity([]);
      })
      .finally(() => {
        if (!active) return;
        setCatsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  // ✅ New: products state (for Sanity data)
  const [productsFromSanity, setProductsFromSanity] = React.useState([]);
  const [productsLoading, setProductsLoading] = React.useState(true);
  const [productsError, setProductsError] = React.useState(null);

  // ✅ New: fetch products from Sanity on mount
  React.useEffect(() => {
    let active = true;
    setProductsLoading(true);
    setProductsError(null);

    client
      .fetch(PRODUCTS_QUERY)
      .then((res) => {
        if (!active) return;
        setProductsFromSanity(Array.isArray(res) ? res : []);
      })
      .catch((err) => {
        if (!active) return;
        setProductsError(err?.message || "Failed to load products");
        setProductsFromSanity([]);
      })
      .finally(() => {
        if (!active) return;
        setProductsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <Header />
      <main className="buy-med">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Pharmacy", href: "/pharmacy" },
            { label: "Buy Medicines" },
          ]}
        />

        {/* Hero */}
        <section className="buy-med__hero">
          <div className="wrap">
            <div className="copy">
              <h1>Order hospital‑verified medicines online</h1>
              <p>
                Fast delivery, authentic medicines, and pharmacist support.
                Upload your prescription or search by name.
              </p>
              <div className="actions"></div>
              <div className="assurances">
                <span>✔ 100% Genuine</span>
                <span>✔ Hospital Fulfilment</span>
                <span>✔ Secure Payment</span>
              </div>
            </div>
            <div className="visual" aria-hidden="true">
              <HeroVisualCarousel />
            </div>
          </div>
        </section>

        {/* Search bar */}
        <section className="buy-med__search">
          <div className="bar" role="search">
            <input placeholder="Search medicine, salt or brand (e.g., Paracetamol, Shelcal)" />
            <button className="btn-find">Search</button>
          </div>
        </section>

        {/* Categories — only this rendering logic changed earlier */}
        <section className="buy-med__cats" id="cats">
          <div className="head"></div>
          <div className="grid">
            {catsLoading && <div>Loading categories…</div>}
            {!catsLoading && catsError && (
              <div style={{ color: "crimson" }}>{catsError}</div>
            )}
            {!catsLoading && !catsError && catsFromSanity.length === 0 && (
              <div>No categories found.</div>
            )}
            {!catsLoading &&
              !catsError &&
              catsFromSanity.map((c) => <CategoryCard key={c.title} {...c} />)}
          </div>
        </section>

        {/* ✅ Products — only rendering logic changed to use Sanity data */}
        <section className="buy-med__products" id="popular">
          <div className="head"></div>
          <div className="grid">
            {productsLoading && <div>Loading products…</div>}
            {!productsLoading && productsError && (
              <div style={{ color: "crimson" }}>{productsError}</div>
            )}
            {!productsLoading &&
              !productsError &&
              productsFromSanity.length === 0 && <div>No products found.</div>}
            {!productsLoading &&
              !productsError &&
              productsFromSanity.map((p) => (
                <ProductCard key={p.title} {...p} />
              ))}
          </div>
        </section>

        {/* Prescription Upload */}
        <section id="rx">
          <PrescriptionUpload />
        </section>

        {/* Trust bar */}
        <section className="buy-med__trust">
          <div className="inner">
            <div>🔒 PCI-DSS Secure Payments</div>
            <div>🧪 Batch &amp; Expiry Checked</div>
            <div>👩‍⚕️ Pharmacist Chat</div>
            <div>🚚 Same-day Dispatch*</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
