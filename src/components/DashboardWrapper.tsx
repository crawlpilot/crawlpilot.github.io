"use client";

import { useAuth } from "@/context/AuthContext";
import { SidePanel } from "@/components/SidePanel";
import { Navbar } from "@/components/Navbar";

export function DashboardWrapper({ children }: { children: React.ReactNode }) {
    const { user, loading, isSidePanelOpen, setSidePanelOpen } = useAuth();

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <SidePanel
                isOpen={isSidePanelOpen}
                onClose={() => setSidePanelOpen(false)}
            />

            <main className={`flex-1 transition-all duration-500 ease-in-out pt-16`}>
                <div className={`transition-opacity duration-300 ${loading ? "opacity-50" : "opacity-100"}`}>
                    {children}
                </div>
            </main>
        </div>
    );
}
