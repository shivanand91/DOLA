"use client";  // 👈 यह लाइन जोड़ें

import { useState } from "react";

export default function HowItWorks() {
    const [activeTab, setActiveTab] = useState("students");

    return (
        <div className="flex flex-col justify-center items-center p-4 h-auto font-bold ">
            <h1 className="pb-4 text-2xl">How DOLA Works?</h1>

            {/* Tabs Section */}
            <div className="flex justify-around gap-8 pt-4">
                <button
                    className={`px-6 py-2 border rounded-md transition ${
                        activeTab === "students"
                            ? "bg-gray-700 text-white"
                            : "bg-gray-400 text-black"
                    }`}
                    onClick={() => setActiveTab("students")}
                >
                    Students
                </button>
                <button
                    className={`px-6 py-2 border rounded-md transition ${
                        activeTab === "library"
                            ? "bg-gray-700 text-white"
                            : "bg-gray-400 text-black"
                    }`}
                    onClick={() => setActiveTab("library")}
                >
                    Library Admins
                </button>
            </div>

            {/* Content Section */}
            <div className="p-6 mt-4 w-full max-w-3xl bg-white shadow-md rounded-md">
                {activeTab === "students" && (
                    <div>
                        <h2 className="text-xl text-gray-700 mb-2">Steps for Students:</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>1️⃣ Register and activate your DOLA card.</li>
                            <li>2️⃣ Find and select a nearby library.</li>
                            <li>3️⃣ Scan your DOLA card at the library entrance.</li>
                            <li>4️⃣ Study as long as you need.</li>
                            <li>5️⃣ Your usage time will be tracked automatically.</li>
                            <li>6️⃣ Recharge your wallet when needed.</li>
                        </ul>
                    </div>
                )}

                {activeTab === "library" && (
                    <div>
                        <h2 className="text-xl text-gray-700 mb-2">Steps for Library Admins:</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>1️⃣ Register your library on the DOLA platform.</li>
                            <li>2️⃣ Set up a scanning system for DOLA cards.</li>
                            <li>3️⃣ Monitor student check-ins and check-outs.</li>
                            <li>4️⃣ Receive automatic payment settlements.</li>
                            <li>5️⃣ Manage and track library usage reports.</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
