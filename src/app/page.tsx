"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Car, Settings, Wrench, CreditCard, Shield, Star, MessageSquare, Phone } from 'lucide-react';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "hero-cars", "url": "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Front view of a lineup of Mercedes-Benz cars with bright headlights, showcasing luxury and elegance." },
  { "id": "about-dealership", "url": "https://images.pexels.com/photos/7144236/pexels-photo-7144236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A woman and man smiling while reviewing details at a car dealership. Perfect for business or lifestyle imagery." },
  { "id": "service-maintenance", "url": "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Mechanic skillfully repairing car undercarriage in outdoor setting with tools." },
  { "id": "financing-consultation", "url": "https://images.pexels.com/photos/7144177/pexels-photo-7144177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A diverse team of adults discussing a car purchase in a dealership showroom." },
  { "id": "warranty-protection", "url": "https://images.pexels.com/photos/5849553/pexels-photo-5849553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Illustration of hands protecting a home and family with an insurance shield symbol." },
  { "id": "sedan-luxury", "url": "https://images.pexels.com/photos/13101559/pexels-photo-13101559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two Mercedes Benz car keys resting on a luxurious leather seat, showcasing elegance and design." },
  { "id": "suv-family", "url": "https://images.pexels.com/photos/27497542/pexels-photo-27497542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A white SUV parked on a rural road with rustic village houses in the background." },
  { "id": "sports-car", "url": "https://images.pexels.com/photos/7925480/pexels-photo-7925480.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Front view of a luxury red sports car parked in an urban setting. Sleek and modern design." },
  { "id": "testimonial-1", "url": "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Colleagues celebrate success with a fist bump over financial charts depicting teamwork and unity." },
  { "id": "testimonial-2", "url": "https://images.pexels.com/photos/34345272/pexels-photo-34345272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "professional woman portrait confident - Photo by Roman Biernacki" },
  { "id": "testimonial-3", "url": "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Colleagues celebrate success with a fist bump over financial charts depicting teamwork and unity." },
  { "id": "testimonial-4", "url": "https://images.pexels.com/photos/34345272/pexels-photo-34345272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "professional woman businesswoman portrait - Photo by Roman Biernacki" },
  { "id": "contact-showroom", "url": "https://images.pexels.com/photos/20051474/pexels-photo-20051474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Spacious and modern car salon with luxury cars in a pristine interior setting." }
];

function resolveAsset(assetId: string): { url: string; alt: string } {
  const asset = assetMap.find(a => a.id === assetId);
  return {
    url: asset?.url ?? "/public/images/placeholder.webp",
    alt: asset?.alt ?? "Decorative image"
  };
}

export default function Home() {
  const heroImage = resolveAsset("hero-cars");
  const sedanLuxuryImage = resolveAsset("sedan-luxury");
  const suvFamilyImage = resolveAsset("suv-family");
  const sportsCarImage = resolveAsset("sports-car");
  const testimonial1Image = resolveAsset("testimonial-1");
  const testimonial2Image = resolveAsset("testimonial-2");
  const testimonial3Image = resolveAsset("testimonial-3");
  const testimonial4Image = resolveAsset("testimonial-4");
  const contactImage = resolveAsset("contact-showroom");

  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Inventory", id: "products" },
            { name: "Services", id: "features" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AutoDealer Pro"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Premium Cars, Trusted Service"
          description="Discover our extensive collection of quality vehicles with transparent pricing and exceptional customer service. Your dream car awaits."
          tag="Car Dealership"
          tagIcon={Car}
          buttons={[
            { text: "View Inventory", href: "products" },
            { text: "Get Quote", href: "contact" }
          ]}
          imageSrc={heroImage.url}
          imageAlt={heroImage.alt}
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="With over 20 years of experience in the automotive industry, we've built our reputation on quality, trust, and exceptional customer service"
          buttons={[
            { text: "Learn More", href: "about" },
            { text: "Our Story", href: "#" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Why Choose Us"
          description="We provide comprehensive automotive services to ensure your complete satisfaction"
          tag="Services"
          tagIcon={Settings}
          features={[
            {
              title: "Expert Service",
              description: "Our certified technicians provide professional maintenance and repair services",
              icon: Wrench
            },
            {
              title: "Financing Options",
              description: "Flexible financing plans to help you drive away with your perfect car today",
              icon: CreditCard
            },
            {
              title: "Quality Guarantee",
              description: "All our vehicles come with comprehensive warranties for your peace of mind",
              icon: Shield
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Vehicles"
          description="Explore our handpicked selection of premium vehicles"
          tag="Inventory"
          tagIcon={Star}
          products={[
            {
              id: "luxury-sedan",
              name: "Premium Luxury Sedan",
              price: "$45,000",
              imageSrc: sedanLuxuryImage.url,
              imageAlt: sedanLuxuryImage.alt
            },
            {
              id: "family-suv",
              name: "Family SUV Deluxe",
              price: "$38,500",
              imageSrc: suvFamilyImage.url,
              imageAlt: suvFamilyImage.alt
            },
            {
              id: "sports-car",
              name: "High Performance Sports Car",
              price: "$65,000",
              imageSrc: sportsCarImage.url,
              imageAlt: sportsCarImage.alt
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from satisfied customers who found their perfect vehicle"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Michael Johnson",
              role: "Business Owner",
              company: "Johnson Enterprises",
              rating: 5,
              imageSrc: testimonial1Image.url,
              imageAlt: testimonial1Image.alt
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Marketing Director",
              company: "Creative Solutions",
              rating: 5,
              imageSrc: testimonial2Image.url,
              imageAlt: testimonial2Image.alt
            },
            {
              id: "3",
              name: "David Chen",
              role: "Software Engineer",
              company: "Tech Innovations",
              rating: 5,
              imageSrc: testimonial3Image.url,
              imageAlt: testimonial3Image.alt
            },
            {
              id: "4",
              name: "Emily Rodriguez",
              role: "Project Manager",
              company: "Global Systems",
              rating: 5,
              imageSrc: testimonial4Image.url,
              imageAlt: testimonial4Image.alt
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Find Your Perfect Car?"
          description="Contact us today for a personalized consultation and let us help you drive away with confidence."
          tagIcon={Phone}
          inputPlaceholder="Enter your email"
          buttonText="Get Quote"
          termsText="By submitting, you agree to receive communications about our vehicles and services."
          imageSrc={contactImage.url}
          imageAlt={contactImage.alt}
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Vehicles",
              items: [
                { label: "New Cars", href: "#" },
                { label: "Used Cars", href: "#" },
                { label: "Luxury Cars", href: "#" },
                { label: "SUVs", href: "#" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Financing", href: "#" },
                { label: "Service Center", href: "#" },
                { label: "Parts", href: "#" },
                { label: "Warranty", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "contact" },
                { label: "Reviews", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 AutoDealer Pro. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}