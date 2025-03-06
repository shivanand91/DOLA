import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-gray-800 text-white p-4">
            <div className="text-center flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-3 mt-4">Get your DOLA Card today!</h1>
                <p>"Unlock Unlimited Learning with XXXX! 📚"</p>
                <p>Access libraries across INDIA with a single DOLA Rechargeable Card. Pay only for the hours you study!</p>
                <Link href="#" className="mt-4 mb-6 py-1 border-2 border-[#14152169] px-4 rounded-full hover:bg-[#8a93fbe4] hover:text-[#0c0d14e4] shadow-amber-50 shadow bg-transparent ">Get Started</Link>
            </div>

            <div className="text-center justify-center items-center m-4">
                <h1 className="text-4xl font-bold mb-2">Useful Links 🔗</h1>
                <div className="md:flex md:flex-wrap md:justify-around mt-6  gap-8">
                    <div className="grid gap-1 md:text-left space-y-2">
                        <h3 className="text-xl mt-4 font-semibold">About DOLA</h3>
                        <Link href="#" className="text-gray-300 hover:underline">Who we are ?</Link>
                        <Link href="#" className="text-gray-300 hover:underline">How it works?</Link>
                        <Link href="#" className="text-gray-300 hover:underline">Pricing</Link>
                        <Link href="#" className="text-gray-300 hover:underline">Partner Libraries</Link>
                    </div>
                    <div className="grid gap-1 md:text-left space-y-2">
                        <h3 className="text-xl mt-4 font-semibold">Support & Help</h3>
                        <Link href="#" className="text-gray-300 hover:underline">FAQs</Link>
                        <Link href="#" className="text-gray-300 hover:underline">Contact Us</Link>
                        <Link href="#" className="text-gray-300 hover:underline">Terms & Conditions</Link>
                        <Link href="#" className="text-gray-300 hover:underline">Privacy Policy</Link>
                        <Link href="#" className="text-gray-300 hover:underline">Refund Policy</Link>
                    </div>
                    <div className="grid gap-1 md:text-left space-y-2">
                        <h3 className="text-xl mt-4 font-semibold">Contact us</h3>
                        <Link href="#" className="text-gray-300 hover:underline">Subscribe to Newsletter</Link>
                        <Link href="#" className="text-gray-300 hover:underline">Social Links</Link>
                        <Link href="#" className="text-gray-300 hover:underline">Customer Support</Link>
                    </div>
                </div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-10"><span><Link href='/' className="font-bold hover:text-white hover:underline">DOLA</Link></span> &copy; 2025. All Rights Reserved.</p>
        </div>
    )

}