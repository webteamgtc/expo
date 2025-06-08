import Image from 'next/image';

const RegulationBar = () => {
    return (
        <div className="bg-[#29489C] w-full py-4 ">
            {/* GTC Logo */}
            <div className=' container mx-auto flex items-center gap-4 md:gap-2 justify-between flex-wrap'>
                <div className="flex items-center gap-3">
                    <Image
                        src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/logo-2024-new.webp"
                        alt="GTC Logo"
                        width={120}
                        height={40}
                        className="object-contain"
                    />
                </div>

                {/* Regulation Flags */}
                <div className="flex flex-wrap items-center gap-4 text-white text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-xs">●</span>
                        <img src="https://flagcdn.com/16x12/gb.png" alt="UK" className="w-4 h-3 inline-block" /> FCA
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-xs">●</span>
                        <img src="https://flagcdn.com/16x12/au.png" alt="AU" className="w-4 h-3 inline-block" /> ASIC
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-xs">●</span>
                        <img src="https://flagcdn.com/16x12/ae.png" alt="UAE" className="w-4 h-3 inline-block" /> SCA
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-xs">●</span>
                        <img src="https://flagcdn.com/16x12/mu.png" alt="MU" className="w-4 h-3 inline-block" /> FSC
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-xs">●</span>
                        <img src="https://flagcdn.com/16x12/vu.png" alt="VU" className="w-4 h-3 inline-block" /> VFSC
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-xs">●</span>
                        <img src="https://flagcdn.com/16x12/za.png" alt="ZA" className="w-4 h-3 inline-block" /> FSCA
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RegulationBar;
