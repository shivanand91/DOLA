export default function BenefitsOfDOLA() {
    const benefits = [
        { 
            title: "Access to 10,000+ Libraries", 
            description: "DOLA card se aap kisi bhi partnered library me bina registration ke ja sakte hain.", 
            image: "/assets/access.webp" 
        },
        { 
            title: "Pay Per Hour System", 
            description: "Aap jitni der library me rahenge, bas utna hi pay karna hoga.", 
            image: "/assets/access.webp" 
        },
        { 
            title: "One Card for All Libraries", 
            description: "Ek hi card se aap multiple libraries ko access kar sakte hain.", 
            image: "/assets/access.webp" 
        },
        { 
            title: "Secure Digital Transactions", 
            description: "Secure UPI, Card Payments, aur Digital Wallets ke through recharge karein.", 
            image: "/assets/access.webp" 
        },
    ];

    return (
        <div className="pl-16 pr-16 pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Benefits of DOLA</h2>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                    <div 
                        key={index} 
                        className="bg-white shadow-lg rounded-xl p-4 transform transition duration-300 hover:scale-105"
                    >
                        <img 
                            src={benefit.image} 
                            alt={benefit.title} 
                            className="w-16 h-16 mx-auto mb-2"
                        />
                        <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
