"use client";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Pointer } from "@/components/magicui/pointer";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <img
        src="/hero-bg.png"
        alt="Waterfall background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        draggable={false}
      />
      {/* Stars */}
      <img
        src="/star1.svg"
        alt="star"
        className="absolute z-10"
        style={{ top: "8%", left: "10%", width: 40, height: 40 }}
        draggable={true}
      />
      <img
        src="/star1.svg"
        alt="star"
        className="absolute z-10"
        style={{ top: "20%", right: "15%", width: 60, height: 60 }}
        draggable={true}
      />
      <img
        src="/star1.svg"
        alt="star"
        className="absolute z-10"
        style={{ bottom: "18%", left: "18%", width: 32, height: 32 }}
        draggable={true}
      />
      <img
        src="/star1.svg"
        alt="star"
        className="absolute z-10"
        style={{ bottom: "10%", right: "8%", width: 50, height: 50 }}
        draggable={true}
      />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen">
        <SparklesText className="font-parkinsans">
          <div className="text-center" style={{ color: "#0A2139" }}>
            Unlock A World Of
            <br />
            Learning Beyond Borders
          </div>
        </SparklesText>
        <p className="mt-8 text-lg text-[#0A2139] text-center max-w-2xl mx-auto font-manrope">
          Empowering institutions to take learning beyond classrooms through expertly curated global journeys.
        </p>
        <div className="mt-10">
          <InteractiveHoverButton>Get Started</InteractiveHoverButton>
        </div>
      </div>
      <Pointer>
  <img
    src="/star1.svg"
    alt="Custom Cursor"
    className="w-8 h-8"
    draggable={false}
  />
</Pointer>

    </section>
  );
}
