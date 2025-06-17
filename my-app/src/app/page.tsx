"use client";
import Navbar from "@/app/components/Navbar";
import { doLogout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import Footer from "./components/Footer";
import Landing from "./landing/page";
import { ThemeWrapper } from "./ThemeWrapper";


export default function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(doLogout());
    router.push("login");
  };

  return (
    <ThemeWrapper>
      <div className="container mx-auto px-4 flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
        {/* Navbar fija arriba */}
        <header className="w-full">
          <Navbar />
        </header>

        {/* Contenido principal que se expande */}
        <main className="">
          <Landing />
        </main>

        {/* Footer */}
        <footer className="w-full">
          <Footer />
        </footer>
      </div>
    </ThemeWrapper>
  );
}
