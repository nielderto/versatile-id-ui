import {Clock, ArrowUpRight, ArrowDownLeft} from "lucide-react";
import Image from "next/image";

export default function OptionFive() {
    const transactions = [
        { amount: "0.5 AVAX", address: "0x1234_5687", type: "to", status: "correct" },
        { amount: "1000 USDC", address: "0x1234_5687", type: "from", status: "loading" },
        { amount: "25 USDT", address: "0x1234_5687", type: "to", status: "cancelled" },
    ]

    return (
        <section className="relative w-[450px] h-[602px] rounded-2xl p-[1px]"
        style={{
            background: 'linear-gradient(135deg, #6F6F6F 0%, #4A3872 50%, #DE89C3 100%)',
        }}>
            <div 
                className="relative w-full h-full rounded-2xl overflow-hidden bg-black flex flex-col p-8"
                style={{
                    boxShadow: 'inset 0 0 40px #671F6896',
                }}
            >
                {/* Title with Clock Icon */}
                <div className="flex items-center gap-4 mb-8">
                    <Clock className="w-8 h-8 text-white" />
                    <h2 className="text-white text-2xl font-medium">Recent Transactions</h2>
                </div>

                {/* Transaction List */}
                <div className="flex flex-col gap-6">
                    {transactions.map((transaction, index) => (
                        <div 
                            key={index}
                            className="flex items-center justify-between p-6 rounded-2xl"
                            style={{
                                backgroundColor: '#1A1A1A',
                            }}
                        >
                            {/* Left side - Icon and Info */}
                            <div className="flex items-center gap-4">
                                {/* Arrow Icon */}
                                <div className="relative">
                                    {transaction.type === "to" ? (
                                        <ArrowUpRight className="w-8 h-8 text-white" />
                                    ) : (
                                        <ArrowDownLeft className="w-8 h-8 text-white" />
                                    )}
                                    <div 
                                        className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full"
                                        style={{
                                            background: 'linear-gradient(135deg, #8B5A9C 0%, #DE89C3 100%)',
                                        }}
                                    />
                                </div>
                                
                                {/* Transaction Details */}
                                <div className="flex flex-col">
                                    <span className="text-white text-xl font-semibold">
                                        {transaction.amount}
                                    </span>
                                    <span className="text-gray-400 text-sm">
                                        {transaction.type === "to" ? "To" : "From"}: {transaction.address}
                                    </span>
                                </div>
                            </div>

                            {/* Right side - Status Icon */}
                            <Image 
                                src={`/${transaction.status}.png`}
                                alt={transaction.status}
                                width={25}
                                height={25}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* See All Button */}
                <div className="mt-17 flex justify-center">
                    <button className="flex items-center gap-3 text-white text-xl">
                        <div className="flex flex-col gap-1">
                            <div className="w-8 h-1 bg-white rounded"></div>
                            <div className="w-8 h-1 bg-white rounded"></div>
                            <div className="w-8 h-1 bg-white rounded"></div>
                        </div>
                        <span>See All Transactions</span>
                    </button>
                </div>
            </div>
        </section>
    )
}