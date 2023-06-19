import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Gradients from "./Gradients";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Layout({ children }) {

    return (
			<div className="relative antialiased font-normal font-trap bg-black text-white">
				<Header />

				<div className="min-h-screen relative">
					<Gradients />
					{children}
				</div>

				<Footer />
			</div>
		);
}