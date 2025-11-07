import Image from 'next/image';

export default function CreditCard() {
  return (
    <div 
      className="relative w-[450px] h-[264px] rounded-2xl p-[1px]"
      style={{
        background: 'linear-gradient(135deg, #28143B 0%, #671F68 100%)',
      }}
    >
      <div 
        className="relative w-full h-full rounded-2xl overflow-hidden bg-black"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/corner-image.png)',
            backgroundSize: '150%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 1,
            mixBlendMode: 'normal',
          }}
        />
        
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            background: `
              radial-gradient(ellipse at top right, black 0%, #000000 45%, transparent 70%),
              radial-gradient(ellipse at center top, black 0%, #000000 30%, transparent 85%),
              radial-gradient(ellipse at center, black 0%, #000000 45%, transparent 155%)
            `,
          }}
        />
        
        <div className="relative h-full text-white z-10">
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
            <div className="text-xs font-share-tech-mono">
              Secured by L4|Versatile ID
            </div>
            <Image 
              src="/image.png" 
              alt="Logo" 
              width={26} 
              height={37}
              className="object-contain"
            />
          </div>

          <div className="absolute top-1/2 left-6 transform -translate-y-1/2 flex flex-col gap-2">
            <div className="text-lg font-inter">
              W3ID
            </div>
            <div className="text-3xl font-semibold tracking-[0.3em] font-share-tech-mono">
              3673 4154 8578
            </div>
          </div>

          <div className="absolute bottom-6 left-6 text-sm font-share-tech-mono">
            Isha Edlabadkar
          </div>
          
          <div className="absolute bottom-6 right-6 text-xs font-orbitron font-[900] tracking-[0rem]">
            VERSATILE.ID
          </div>
        </div>
      </div>
    </div>
  );
}