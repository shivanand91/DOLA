export default function LibCard() {
    return (
        <div className="p-4 rounded-md border h-auto w-full max-w-xs sm:max-w-sm md:max-w-md bg-[#233237] shadow-black shadow-2xl">
            <h1 className="text-center text-base sm:text-lg font-bold text-gray-300">
                DIGITAL ONLINE LIBRARY ACCESS CARD
            </h1>
            <div className="border w-full border-gray-300 mt-1"></div>

            {/* ID & Date Section */}
            <div className="flex justify-between text-xs font-semibold text-gray-300 mt-2">
                <p>DOLA ID: <span>DOLAXXX</span></p>
                <p>DATE: <span>05/03/2025</span></p>
            </div>

            {/* User Info Section */}
            <div className="px-3 pt-3 flex flex-wrap justify-between gap-4">
                <div className="text-white text-sm sm:text-md">
                    <p>Name: <span>Your Name</span></p>
                    <p>Age: <span>XX Years</span></p>
                    <p>Gender: <span>Male</span></p>
                </div>
                <div className="h-20 w-20 sm:h-24 sm:w-24 flex justify-center items-center border text-white border-white rounded">
                    Image
                </div>
            </div>

            {/* Balance & Recharge Section */}
            <div className="px-3 pt-3 text-white flex justify-between items-center rounded">
                <h3>Balance: <span className="text-red-500 font-bold text-lg"> ₹ 0 </span></h3>
                <button className="p-2 border rounded-xl px-4 hover:bg-[#60605e5f]">Recharge Now</button>
            </div>

            {/* QR Code & Scan Section */}
            <div className="px-3 pt-3 flex flex-wrap justify-between items-center gap-4">
                <div className="h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center font-bold text-white border rounded">
                    QR Code
                </div>
                <div className="font-semibold text-lg sm:text-2xl text-white flex flex-col items-center justify-center">
                    <p>Scan</p>
                    <p>&</p>
                    <p>Learn</p>
                </div>
            </div>

            <div className="border w-full border-gray-300 mt-1"></div>
            <p className="text-center pt-2 font-semibold text-white text-sm sm:text-md">
                10,000+ Libraries Connected with us
            </p>
        </div>
    );
}
