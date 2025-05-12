import { NumberTicker } from "@/components/magicui/number-ticker";

export default function StatSection() {
  return (
    <section
      id="stat"
      className="min-h-screen bg-gradient-to-b from-[#0A2139] to-[#0A2139]/90 text-white flex items-center justify-center"
    >
      <div className="flex flex-row items-center justify-between w-full max-w-7xl px-8">
        {/* Left stats */}
        <div className="flex flex-col items-center">
          <NumberTicker
            value={50}
            className="whitespace-pre-wrap text-8xl font-parkinsans tracking-tighter text-white inline-block mx-4 text-center"
          />
          <p className="text-2xl font-parkinsans mb-4 text-center">
            Institutions
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="/Star2.svg"
            alt="star"
            draggable={false}
            className="w-[51px] h-[51px]"
          />
        </div>
        <div className="flex flex-col items-center">
          <NumberTicker
            value={12}
            className="whitespace-pre-wrap text-8xl font-parkinsans tracking-tighter text-white inline-block mx-4 text-center"
          />
          <p className="text-2xl font-parkinsans mb-4 text-center">
            Countries
          </p>
        </div>
        {/* Star divider */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="/Star2.svg"
            alt="star"
            draggable={false}
            className="w-[51px] h-[51px]"
          />
        </div>
        {/* Right stats */}
        <div className="flex flex-col items-center">
          <NumberTicker
            value={200}
            className="whitespace-pre-wrap text-8xl font-parkinsans tracking-tighter text-white inline-block mx-4 text-center"
          />
          <p className="text-2xl font-parkinsans mb-4 text-center">
            Educational Trips
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="/Star2.svg"
            alt="star"
            draggable={false}
            className="w-[51px] h-[51px]"
          />
        </div>
        <div className="flex flex-col items-center">
          <NumberTicker
            value={12500}
            className="whitespace-pre-wrap text-8xl font-parkinsans tracking-tighter text-white inline-block mx-4 text-center"
          />
          <p className="text-2xl font-parkinsans mb-4 text-center">
            Students
          </p>
        </div>
      </div>
    </section>
  );
}
  