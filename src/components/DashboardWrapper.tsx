"use client";

import { useAuth } from "@/context/AuthContext";
import { SidePanel } from "@/components/SidePanel";
import { Navbar } from "@/components/Navbar";

export function DashboardWrapper({ children }: { children: React.ReactNode }) {
    const { user, isSidePanelOpen, setSidePanelOpen } = useAuth();

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <SidePanel
                isOpen={isSidePanelOpen}
                onClose={() => setSidePanelOpen(false)}
            />

            <main className={`flex-1 transition-all duration-300 ${user && isSidePanelOpen ? "md:pl-72" : ""}`}>
                {children}
            </main>
        </div>
    );
}
