import { WalletMinimal, Shield, ArrowLeftRight } from "lucide-react";

export default function OptionOne(){
    const options = [
        { name: "Connect Wallet", logo: <WalletMinimal />, end: "0" },
        { name: "Active Guardian", logo: <Shield />, end:"0/3" },
        {name: "Pending Transaction", logo: <ArrowLeftRight />, end: "2" },
    ]

    return (
        <div 
    className="relative w-[690px] h-[264px] rounded-2xl p-[1px]"
    style={{
        background: 'linear-gradient(135deg, #6F6F6F 0%, #4A3872 50%, #DE89C3 100%)',
    }}>
    <div 
        className="relative w-full h-full rounded-2xl overflow-hidden bg-black flex flex-col items-center justify-center gap-4"
        >
            {options.map((option) => (
                <div 
                    key={option.name} 
                    className="flex flex-row items-center justify-between px-6 rounded-xl"
                    style={{
                        backgroundColor: '#131313',
                        width: '635.7px',
                        height: '56px',
                    }}
                >
                    <div className="flex flex-row items-center gap-3">
                        {option.logo}
                        <span>{option.name}</span>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <span className="text-white">{option.end}</span>
                    </div>
                </div>
            ))}
    </div>
        </div>
    )
}