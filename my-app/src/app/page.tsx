'use client'
import { doLogout, logout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";

export default function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(doLogout());
    router.push('login')
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mi Sitio</h1>
          <ul className="flex gap-6">
            <li><a href="#" className="hover:text-gray-600">Inicio</a></li>
            <li><a href="#" className="hover:text-gray-600">Acerca</a></li>
            <li><a href="#" className="hover:text-gray-600">Contacto</a></li>
            <button onClick={handleLogout} className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Salir
            </button>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold mb-6">Bienvenido a Mi Sitio</h2>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button onClick={handleLogout} className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          Comenzar
        </button>
      </main>

      <footer className="w-full text-center text-gray-600">
        <p>&copy; 2024 Mi Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
