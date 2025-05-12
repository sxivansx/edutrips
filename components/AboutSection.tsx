import { TextReveal } from "@/components/magicui/text-reveal";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#0A2139] text-white flex flex-col items-center py-24"
    >
      <div className="max-w-4xl px-2 text-center space-y-1 mb-10">
        <TextReveal className="text-2xl font-parkinsans text-white mb-4 text-left">
          Despite Global Exposure, Students Lack Real-World Cultural Awareness.
          Educational Travel Bridges That Gap.
        </TextReveal>
      </div>
      <BentoGrid>
        <BentoCard
          name="Sample Card"
          className=""
          background={<div />}
          Icon={ArrowRightIcon}
          description="This is a sample description."
          href="#"
          cta="Learn More"
        />
        <BentoCard
          name="Sample Card"
          className=""
          background={<div />}
          Icon={ArrowRightIcon}
          description="This is a sample description."
          href="#"
          cta="Learn More"
        />
        <BentoCard
          name="Sample Card"
          className=""
          background={<div />}
          Icon={ArrowRightIcon}
          description="This is a sample description."
          href="#"
          cta="Learn More"
        />
        <BentoCard
          name="Sample Card"
          className=""
          background={<div />}
          Icon={ArrowRightIcon}
          description="This is a sample description."
          href="#"
          cta="Learn More"
        />
      </BentoGrid>
    </section>
  );
}
