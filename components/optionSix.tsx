import {ChartColumnIncreasing, TrendingUp, TrendingDown, ExternalLink} from "lucide-react";
import { FaEthereum } from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";
import Image from "next/image";

export default function OptionSix() {
    const cryptos = [
        { name: "AVAX", price: "$42.15", change: "+5.2%", isPositive: true, icon: "avax", isImage: true },
        { name: "BTC", price: "$65,420", change: "-2.1%", isPositive: false, icon: <BsCurrencyBitcoin />, isImage: false },
        { name: "ETH", price: "$3,240", change: "+3.8%", isPositive: true, icon: <FaEthereum />, isImage: false },
    ]

    return (
        <section className="relative w-[690px] h-[602px] rounded-2xl p-[1px]"
        style={{
            background: 'linear-gradient(135deg, #6F6F6F 0%, #4A3872 50%, #DE89C3 100%)',
        }}>
            <div 
                className="relative w-full h-full rounded-2xl overflow-hidden bg-black flex flex-col p-8"
                style={{
                    boxShadow: 'inset 0 0 40px #671F6896',
                }}
            >
                {/* Title */}
                <div className="flex flex-row items-center gap-3 mb-8">
                    <ChartColumnIncreasing className="w-8 h-8 text-white" />
                    <h2 className="text-white text-2xl font-medium">AI Price Insights</h2>
                </div>

                {/* Crypto Cards */}
                <div className="flex flex-col gap-6 mb-8">
                    {cryptos.map((crypto, index) => (
                        <div 
                            key={index}
                            className="flex items-center justify-between p-6 rounded-2xl"
                            style={{
                                backgroundColor: '#1A1A1A',
                            }}
                        >
                            {/* Left side - Icon and Info */}
                            <div className="flex items-center gap-4">
                                {/* Crypto Icon */}
                                {crypto.isImage ? (
                                    <Image 
                                        src={`/${crypto.icon}.png`}
                                        alt={crypto.name}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl text-black">
                                        {crypto.icon}
                                    </div>
                                )}
                                
                                {/* Crypto Details */}
                                <div className="flex flex-col">
                                    <span className="text-white text-xl font-semibold">
                                        {crypto.name}
                                    </span>
                                    <span className="text-gray-400 text-base">
                                        {crypto.price}
                                    </span>
                                </div>
                            </div>

                            {/* Right side - Change and Trend */}
                            <div className="flex items-center gap-3">
                                <span 
                                    className="text-xl font-semibold"
                                    style={{
                                        color: crypto.isPositive ? '#4ADE80' : '#F87171'
                                    }}
                                >
                                    {crypto.change}
                                </span>
                                {crypto.isPositive ? (
                                    <TrendingUp className="w-8 h-8" style={{ color: '#4ADE80' }} />
                                ) : (
                                    <TrendingDown className="w-8 h-8" style={{ color: '#F87171' }} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* View Full Analysis Button */}
                <div className="mt-6 flex justify-center">
                    <button className="flex items-center gap-3 text-white text-xl">
                        <ExternalLink className="w-6 h-6" />
                        <span>View Full Analysis</span>
                    </button>
                </div>
            </div>
        </section>
    )
}