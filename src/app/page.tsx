"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardFive from "@/components/sections/feature/FeatureCardFive";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardThree from "@/components/sections/team/TeamCardThree";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import BlogCardTwo from "@/components/sections/blog/BlogCardTwo";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBase from "@/components/sections/footer/FooterBase";
import { BarChart3, Briefcase, Building2, Euro, FileText, HandHeart, Lightbulb, Linkedin, Mail, Newspaper, Quote, Seedling, Shield, Target, TrendingUp, Twitter, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="large"
      background="radialGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Team", id: "team" },
            { name: "News", id: "news" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="The Techshop"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Patient and Active Capital for B2B Digital Ventures"
          description="We partner with founders at the seed stage, providing both active support and strategic know-how for the best early-stage ventures in the B2B digital space."
          tag="Venture Capital"
          tagIcon={TrendingUp}
          buttons={[
            { text: "View Portfolio", href: "portfolio" },
            { text: "Contact Us", href: "contact" }
          ]}
          imageSrc="https://pixabay.com/get/g285a377d68318442e0d11c069028ac525d8b41741a5a411d778a53475a87068237715d557f70f40e855d03d2c3994196d7b9fe23633c441e557a0485ae9e6b17_1280.jpg"
          imageAlt="Modern tech venture capital office"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="The Techshop is an asset management company focused on Venture Capital, partnering with early-stage startups operating in the B2B digital space."
          buttons={[
            { text: "Our Approach", href: "approach" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="Our Investment Focus"
          description="We specialize in seed-stage B2B digital ventures with proven growth potential"
          tag="Investment Strategy"
          tagIcon={Target}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            { title: "Seed Stage Focus", icon: Seedling },
            { title: "B2B Digital Space", icon: Building2 },
            { title: "Active Support", icon: HandHeart },
            { title: "Strategic Know-how", icon: Lightbulb }
          ]}
          buttons={[
            { text: "Investment Criteria", href: "criteria" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Portfolio Companies"
          description="Innovative B2B digital startups we've partnered with"
          tag="Portfolio"
          tagIcon={Briefcase}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "TechVenture",
              name: "SaaS Platform Solution",
              price: "Series A",
              rating: 5,
              reviewCount: "2.5M",
              imageSrc: "https://pixabay.com/get/gc67bdfa15a80f362ef9de1f6d2727a35314666cabfb3e6940b1cfc8b29994d0212a794033d9d9ad9432731de1571f201ad801ce116488b9156deb9ef14cdf8b6_1280.jpg",
              imageAlt: "SaaS platform dashboard"
            },
            {
              id: "2",
              brand: "FinTech Innovations",
              name: "Financial Technology App",
              price: "Seed",
              rating: 5,
              reviewCount: "1.8M",
              imageSrc: "https://pixabay.com/get/g64bbe62d275c6769aa97cd5cde192669c6790c5a0e8dc90040abcca1d30cec5030c6b9bb99a22c02c2e4653ed6c7cffb32498c1baa7c11f16610319303106df4_1280.jpg",
              imageAlt: "Fintech mobile application"
            },
            {
              id: "3",
              brand: "Digital Commerce",
              name: "E-commerce Platform",
              price: "Series A",
              rating: 4,
              reviewCount: "3.2M",
              imageSrc: "https://pixabay.com/get/gcb378a71cae4d5a879e3485eee468b0b130f797f76bfb042abc302f93085821a629cfd4978ee74c97b75caaf1bff029403a978a5d63e17cbca2d6f69ab5b5cbf_1280.jpg",
              imageAlt: "E-commerce business solution"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Investment Performance"
          description="Key metrics that demonstrate our commitment to early-stage B2B digital ventures"
          tag="Track Record"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "50K",
              title: "Euros",
              description: "Minimum capital investment per venture",
              icon: Euro
            },
            {
              id: "2",
              value: "194",
              title: "Registry",
              description: "Albo delle Società di Gestione del Risparmio registration number",
              icon: FileText
            },
            {
              id: "3",
              value: "20",
              title: "EuVeca",
              description: "Registro dei Gestori EuVeca registration number",
              icon: Shield
            },
            {
              id: "4",
              value: "B2B",
              title: "Focus",
              description: "Specialized investment focus on B2B digital space",
              icon: Target
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Our Investment Team"
          description="Experienced professionals dedicated to supporting B2B digital ventures"
          tag="Leadership"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Managing Partner",
              imageSrc: "https://pixabay.com/get/g7d1fb7bf683eeaed93a981ff6af925f2b66d4cf2841ec334e144a793f352f04e8c5eae9e8462a38d6ad3775250f9920cb3170727c0bf82f5582970d3304ad8b6_1280.jpg",
              imageAlt: "Marco Rossi - Managing Partner",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/marco-rossi" },
                { icon: Twitter, url: "https://twitter.com/marco_rossi" }
              ]
            },
            {
              id: "2",
              name: "Laura Bianchi",
              role: "Investment Director",
              imageSrc: "https://pixabay.com/get/gc457911962cbef2e91390651bfadce0d1b446ec432b61f215f4ac07cf3ccc3af1fd16c96f598869885695aee69a60442d6d2129bf27ecd6fe1b444ed26f1f45a_1280.jpg",
              imageAlt: "Laura Bianchi - Investment Director",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/laura-bianchi" }
              ]
            },
            {
              id: "3",
              name: "Giuseppe Verdi",
              role: "Portfolio Manager",
              imageSrc: "https://pixabay.com/get/g07c91131e8a96dd71d1f3a925ccf1a0d521bc6d9ac9119e8b2921c3951685838bc1f59db9496ec61e312b8195b3b0086a87a1678c0667c9f25f8f03d565b47e0_1280.jpg",
              imageAlt: "Giuseppe Verdi - Portfolio Manager",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/giuseppe-verdi" },
                { icon: Mail, url: "mailto:giuseppe@techshop.capital" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Founders Say"
          description="Testimonials from entrepreneurs we've partnered with in their growth journey"
          tag="Success Stories"
          tagIcon={Quote}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alessandro Conti",
              role: "CEO & Founder",
              company: "TechFlow Solutions",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g5b07fa95ad5b55ac2716a8181246765c8b9ea1dbce54e6a59999f7970324332ed4897de9b341c46d23cf18c2772f8dabd60684611da80dd9c186f2ae3ce2028b_1280.jpg",
              imageAlt: "Alessandro Conti - CEO TechFlow Solutions"
            },
            {
              id: "2",
              name: "Martina Ferrari",
              role: "Co-Founder",
              company: "DataBridge Analytics",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g44f8dbf95d38c87acd63b3c88635c166fcba3105a25d3244617f117ffcf556e31aa75f8f1f65c21f40cccafd86f4439d0f7e56cce130146abe2a3e8667ed04c5_1280.jpg",
              imageAlt: "Martina Ferrari - Co-Founder DataBridge Analytics"
            },
            {
              id: "3",
              name: "Roberto Marino",
              role: "Founder & CTO",
              company: "CloudSync Technologies",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g7050c95d66a18829503e09bd9a304d20b34bb05bee521f7e87d239cc02fb5b3b85638d0680fed4c2c9de604753c6cdc7b70e679c41aa102a4955dd21253fdc74_1280.jpg",
              imageAlt: "Roberto Marino - Founder CloudSync Technologies"
            },
            {
              id: "4",
              name: "Sofia Romano",
              role: "CEO",
              company: "DigitalBridge Platform",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g7cc45c0774457d73702cc41234d4e52bc5b8120eaa9ec3cd650efeddfc2cdeb8e2425b0116a96bf4ea8d284ad4bec741fea34cda5cf0122a6e42e64225da1509_1280.jpg",
              imageAlt: "Sofia Romano - CEO DigitalBridge Platform"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Featured In"
          description="Recognition from leading financial and technology publications"
          tag="Media Coverage"
          tagIcon={Newspaper}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g2619c9f1c90043623b8b6950384e662d30353ea03ce296c53c2dc6e6fc05b44cd451048944bb46e81d9324ed86f1cc19df509343d80a06051efbe25f871519ad_1280.jpg",
            "https://pixabay.com/get/g58b356c84a8f26684bf02b974e981cad2a4e1d7564b194e57e61ca0c6727f73ef39efb5750688ba4adf9545010811b6475868c8b62b68e7047ccd082be2b6849_1280.jpg",
            "https://pixabay.com/get/g75913dc66f96e8374b7f93b9c91914e6ffec0b15531301f549b1ba413981f85d86e238aa2e7394af5264a359ee8acf05876a33a68c51a5a49598510b92fc8be1_1280.jpg",
            "https://pixabay.com/get/g4d8ae7c8bd685b1b6d292e4eb1d76b97a669163931d7bcf02c4af62dd9524894a22c1f8966c6d74a41071171a45884509815f4127e825da99bd9965742e225e4_1280.jpg",
            "https://pixabay.com/get/g175031c641af3e4fe3a474a70c4b559217d2f8d2988010ff5c4b81ac1c7f2419b80a4875c028da55b2f093c85798c9f39bd8e8afb3040285da21f8faf60a089c_1280.jpg",
            "https://pixabay.com/get/g4ff870bde61f0691837c6d1e2be3861b3e3a3b8338ee6d2094671c9a1339d4f86d7e8c53db83d2b7568924b516ace0383e4ce5be5dbe454d9c605c24805c7010_1280.jpg",
            "https://pixabay.com/get/gee7c64272d971df02b47adcec2a4df3f8e446489d27a0de151aa0cc705c0cfe3b3ac4ac31527a380fbccbd24daaf7bb0ab84cc5218bd50903a791dd4107d5b5c_1280.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Learn more about our investment approach and partnership model"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is The Techshop's investment focus?",
              content: "We focus on seed-stage ventures in the B2B digital space, providing patient and active capital along with strategic know-how to help startups scale successfully."
            },
            {
              id: "2",
              title: "What stage companies do you invest in?",
              content: "We specialize in seed-stage companies, particularly those operating in the B2B digital sector with strong growth potential and innovative solutions."
            },
            {
              id: "3",
              title: "How does The Techshop support portfolio companies?",
              content: "Beyond capital, we provide active support including strategic guidance, industry connections, operational expertise, and hands-on mentoring to help founders navigate growth challenges."
            },
            {
              id: "4",
              title: "What are your regulatory credentials?",
              content: "The Techshop SGR S.p.A. is registered at n. 194 dell'Albo delle Società di Gestione del Risparmio and n. 20 del Registro dei Gestori EuVeca, ensuring full regulatory compliance."
            }
          ]}
          buttons={[
            { text: "Contact for More Info", href: "contact" }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardTwo
          title="Latest News & Insights"
          description="Stay updated with the latest developments in venture capital and B2B technology"
          tag="News"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",
              tags: ["Venture Capital", "B2B", "Investment"],
              title: "The Future of B2B Digital Transformation",
              excerpt: "Exploring emerging trends and opportunities in the B2B digital space that are reshaping how businesses operate.",
              imageSrc: "https://pixabay.com/get/g0a63a2ea728b38c54f77050ae270ddd798fdd8b30a9eee6735a2ff3ee83c5f9747f92ffb1a1fec2c83faf76e940d3a3cc889d3abed61aa559fd080f5ae19b344_1280.jpg",
              imageAlt: "B2B digital transformation trends",
              authorName: "The Techshop Team",
              date: "15 Dec 2024"
            },
            {
              id: "2",
              tags: ["Seed Stage", "Startup", "Growth"],
              title: "Seed Stage Investment Strategies",
              excerpt: "Key considerations and best practices for seed-stage investments in today's competitive landscape.",
              imageSrc: "https://pixabay.com/get/g824780004708d1e6c8aef82738dc392f4290f564203b40759ac9d3d90d1587ced921e62da897acf3ce311105e08c22906875011f5d8c6195df38579d4d881b63_1280.jpg",
              imageAlt: "Seed stage investment analysis",
              authorName: "Investment Team",
              date: "08 Dec 2024"
            },
            {
              id: "3",
              tags: ["Portfolio", "Success", "Case Study"],
              title: "Portfolio Company Success Stories",
              excerpt: "How our active support and strategic guidance have helped portfolio companies achieve significant milestones.",
              imageSrc: "https://pixabay.com/get/gf7c92b7a868deeb225d6a2a26b675176dfc3558dae7d6dc6f7ba48d451b64d57b9bea8bc80b40aa90301d19537a342c6545f338ba54a824d459898132d5a5e62_1280.jpg",
              imageAlt: "Portfolio company success metrics",
              authorName: "Marco Rossi",
              date: "01 Dec 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          title="Ready to Partner with The Techshop?"
          description="Whether you're a startup seeking seed funding or an investor interested in our approach, we'd love to hear from you."
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Contact Us"
          termsText="By submitting you agree to our privacy policy and terms of service."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Team", href: "team" },
                { label: "Portfolio", href: "portfolio" },
                { label: "News", href: "news" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms of Service", href: "terms" },
                { label: "Regulatory Info", href: "regulatory" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Get in Touch", href: "contact" },
                { label: "Investment Inquiries", href: "investment" },
                { label: "Media Relations", href: "media" }
              ]
            }
          ]}
          logoText="The Techshop"
          copyrightText="© 2025 | The Techshop SGR S.p.A. - REA MI-2614961P - IVA 11618590969"
        />
      </div>
    </ThemeProvider>
  );
}