import CreditCard from "@/components/CreditCard";
import OptionOne from "@/components/optionOne";
import OptionTwo from "@/components/optionTwo";
import OptionThree from "@/components/optionThree";
import OptionFour from "@/components/optionFour";
import OptionFive from "@/components/optionFive";
import OptionSix from "@/components/optionSix";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 flex justify-center">
        <div 
          className="max-w-[96rem] w-full h-full"
          style={{
            backgroundImage: 'url(/main-background.png)',
            backgroundSize: '180%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.1,
          }}
        />
      </div>
      
      {/* Content on top of background */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Header */}
        <header className="w-full max-w-6xl py-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image src="/logo-whiter.png" alt="Versatile ID Logo" width={40} height={40} />
              <span className="text-white text-xl font-orbitron font-black tracking-[-0.05em]">VERSATILE.ID</span>
            </div>
            
            {/* Navigation */}
            <nav className="flex gap-8">
              <a 
                href="#" 
                className="text-white pb-1 border-b-2"
                style={{
                  borderImage: 'linear-gradient(90deg, #4A3872 0%, #DE89C3 100%) 1',
                }}
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Profile
              </a>
            </nav>
          </div>
        </header>

        {/* Divider */}
        <div className="w-full max-w-7xl border-b border-[#FFF]"></div>

        {/* Welcome Text */}
        <div className="w-full max-w-6xl mt-8 mb-8">
          <span 
            className="text-2xl"
            style={{
              background: 'linear-gradient(90deg, #FFFFFF 0%, #DDAFCE 50%, #684BAB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Welcome back to Versatile ID hub,
          </span>
        </div>

        {/* Main Content */}
        <section className="w-full max-w-6xl flex flex-row items-start gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <CreditCard />
            <OptionTwo />
            <OptionFive />
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <OptionOne />
            <div className="flex flex-row gap-8">
            <OptionThree />
            <OptionFour />
            </div>
            <OptionSix />
          </div>
        </section>
      </div>
    </div>
  );
}
