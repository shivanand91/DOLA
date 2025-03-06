"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for menu

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 flex p-4 bg-[#ebebde] h-14 justify-between items-center border-b border-gray-600">
            {/* Logo */}
            <Link href="/">
                <h1 className="text-2xl font-bold ">DOLA</h1>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex md:gap-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="#" className="hover:underline">Libraries</Link>
                <Link href="#" className="hover:underline">Pricing</Link>
                <Link href="#" className="hover:underline">How it Works?</Link>
                <Link href="#" className="hover:underline">About us</Link>
                <Link href="#" className="hover:underline">Contact us</Link>
            </ul>

            {/* Desktop Signup/Login Buttons */}
            <div className="hidden md:flex space-x-2 items-center">
                <Link href="/signup" className="py-1 border-2 border-[#14152169] px-4 rounded-full hover:bg-[#141521e4] hover:text-white bg-transparent">Signup</Link>
                <p>/</p>
                <Link href="/login" className="py-1 border-2 border-[#14152169] px-4 rounded-full hover:bg-[#141521e4] hover:text-white bg-transparent">Login</Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="absolute top-14 left-0 w-full bg-[#ebebde] border-b border-gray-600 md:hidden">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        <Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="#" className="hover:underline" onClick={() => setIsOpen(false)}>Libraries</Link>
                        <Link href="#" className="hover:underline" onClick={() => setIsOpen(false)}>Pricing</Link>
                        <Link href="#" className="hover:underline" onClick={() => setIsOpen(false)}>How it Works?</Link>
                        <Link href="#" className="hover:underline" onClick={() => setIsOpen(false)}>About us</Link>
                        <Link href="#" className="hover:underline" onClick={() => setIsOpen(false)}>Contact us</Link>

                        {/* Mobile Signup/Login Buttons */}
                        <div className="flex space-x-4 pt-2">
                            <Link href="/signup" className="py-1 border-2 border-[#14152169] px-4 rounded-full hover:bg-[#141521e4] hover:text-white bg-transparent">Signup</Link>
                            <p>/</p>
                            <Link href="/login" className="py-1 border-2 border-[#14152169] px-4 rounded-full hover:bg-[#141521e4] hover:text-white bg-transparent">Login</Link>
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
}
