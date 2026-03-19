"use client";

import { useAuth } from "@/context/AuthContext";
import { Navbar } from "@/components/Navbar";
import { usePathname } from "next/navigation";

export function DashboardWrapper({ children }: { children: React.ReactNode }) {
    const { loading } = useAuth();
    const pathname = usePathname();

    const isAuthPage = pathname === "/login" || pathname === "/signup";

    if (isAuthPage) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className={`flex-1 transition-all duration-500 ease-in-out pt-16`}>
                <div className={`transition-opacity duration-300 ${loading ? "opacity-50" : "opacity-100"}`}>
                    {children}
                </div>
            </main>
        </div>
    );
}
