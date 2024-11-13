import Link from "next/link";

import Header from "@/components/header";

// This is a server component
export default function Home() {
    console.log(`Hello from the server!`)

    return (
        <main>
            <Header />
            <p>🔥 Let&apos;s get started! 🔥</p>
            <p><Link href="/about">About us</Link></p>
        </main>
    );
}
