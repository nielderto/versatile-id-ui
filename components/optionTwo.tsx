export default function OptionTwo() {
    const options = [
        {
            title: "Guardian",
            button1: "Setup Guardian",
            button2: "View Active Guardian",
        }
    ]

    return (
        <section 
        className="relative w-[450px] h-[264px] rounded-2xl p-[1px]"
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
                    <h2 className="text-white text-2xl font-medium mb-8">
                        {option.title}
                    </h2>
                    
                    {/* Buttons Container */}
                    <div className="flex flex-col items-center justify-center flex-1 gap-6 mb-8">
                        <button 
                            className="w-[232px] h-[50px] rounded-xl text-white text-xl font-medium"
                            style={{
                                background: 'linear-gradient(135deg, #6F52A3 0%, #8B5A9C 100%)',
                            }}
                        >
                            {option.button1}
                        </button>
                        
                        <button 
                            className="w-[232px] h-[50px] rounded-xl text-white text-xl font-medium"
                            style={{
                                background: 'linear-gradient(135deg, #6F52A3 0%, #8B5A9C 100%)',
                            }}
                        >
                            {option.button2}
                        </button>
                    </div>
                </div>
            ))}
        </div>

        </section>
    )
}