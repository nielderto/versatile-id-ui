import {ChevronRight} from "lucide-react";

export default function OptionFour() {
    const options = [
        {
            title: "Transactions",
            items: [
                "Manage Approvals",
                "Manage Transactions",
            ]
        }
    ]
    return (
        <section className="relative w-[330px] h-[264px] rounded-2xl p-[1px]"
        style={{
            background: 'linear-gradient(135deg, #6F6F6F 0%, #4A3872 50%, #DE89C3 100%)',
        }}>
            <div 
                className="relative w-full h-full rounded-2xl overflow-hidden bg-black flex flex-col p-8"
                style={{
                    boxShadow: 'inset 0 0 40px #671F6896',
                }}
            >
                {options.map((option, index) => (
                    <div key={index} className="flex flex-col h-full">
                        {/* Title */}
                        <h2 className="text-white text-2xl font-medium">
                            {option.title}
                        </h2>
                        
                        {/* Items with Chevrons */}
                        <div className="flex flex-col gap-8 mt-8">
                            {option.items.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 text-white text-xl">
                                    <ChevronRight className="w-6 h-6" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}