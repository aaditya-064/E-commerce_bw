import React from "react";
import {
  FiShoppingBag,
  FiShield,
  FiTruck,
  FiHeadphones,
  FiHeart,
} from "react-icons/fi";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="bg-color-primary-lighter) p-6 rounded-xl border border-orange-200) flex flex-col items-center text-center transition hover:shadow-sm">
    <div className="p-3 bg-color-primary-light) text-color-primary) rounded-full mb-4 text-xl">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-foreground) mb-2">{title}</h3>
    <p className="text-orange-800) text-sm leading-relaxed">{description}</p>
  </div>
);

export default function AboutUs() {
  const values = [
    {
      icon: <FiShield />,
      title: "Quality Assured",
      description:
        "Every product in our catalog goes through strict quality checks to ensure durability and excellence.",
    },
    {
      icon: <FiTruck />,
      title: "Fast & Reliable Shipping",
      description:
        "We partner with top-tier couriers to get your orders delivered to your doorstep safely and on time.",
    },
    {
      icon: <FiHeadphones />,
      title: "24/7 Support",
      description:
        "Our dedicated customer care team is always ready to assist you with any questions or concerns.",
    },
    {
      icon: <FiHeart />,
      title: "Customer First",
      description:
        "Your satisfaction is at the heart of everything we do, from browsing to unboxing.",
    },
  ];

  return (
    <div className="bg-background) min-h-screen text-foreground)">
      {/* Hero Section */}
      <section className="bg-background) py-16 px-6 sm:px-12 lg:px-24 border-b border-orange-200)">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-color-primary) bg-color-primary-light) px-3 py-1 rounded-full">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground) mt-4 mb-6">
            Redefining Online Shopping for Everyone
          </h1>
          <p className="text-lg text-orange-800) leading-relaxed">
            Founded with a simple mission, we strive to bring you high-quality
            products without the hassle. We believe shopping should be seamless,
            inspiring, and accessible.
          </p>
        </div>
      </section>

      {/* Brand Mission & Vision */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Crafted with Purpose
            </h2>
            <p className="text-orange-800 mb-4 leading-relaxed">
              Since our inception, we have curated our collections with one
              thing in mind: **you**. Whether you are looking for everyday
              essentials or unique statement pieces, we partner directly with
              trusted makers to keep standards high and prices fair.
            </p>
            <p className="text-orange-800 leading-relaxed">
              We aren't just an e-commerce platform; we are a community built on
              trust, transparency, and a shared love for exceptional products.
            </p>
          </div>
          <div className="bg-color-primary text-color-text-on-primary p-8 sm:p-12 rounded-2xl shadow-lg relative overflow-hidden">
            <FiShoppingBag className="absolute -right-8 -bottom-8 w-48 h-48 text-orange-600 opacity-40 pointer-events-none" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">
              Our Vision
            </h3>
            <p className="leading-relaxed relative z-10">
              To become the world's most customer-centric destination, where
              anyone can discover and find anything they might need online,
              backed by an unmatched shopping experience.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 bg-orange-50 px-6 sm:px-12 lg:px-24 border-y border-orange-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Why Shop With Us?
            </h2>
            <p className="text-orange-800)">
              The pillars that guide our day-to-day operations and promise to
              you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => (
              <ValueCard
                key={index}
                icon={val.icon}
                title={val.title}
                description={val.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Explore Our Collection?
          </h2>
          <p className="text-orange-800 mb-8">
            Join thousands of happy customers and find something you'll love
            today.
          </p>
          <a
            href="/products"
            className="inline-block bg-color-primary text-color-text-on-primary font-medium px-8 py-3 rounded-lg shadow hover:bg-color-primary-hover transition"
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
}
