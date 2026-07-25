// src/components/Banner.tsx
import Image from "next/image";

export default function Banner() {
    return (
    <div className="relative w-full h-70 sm:h-85 overflow-hidden">
      {/* Capa 1: la imagen de fondo */}
        <Image
        src="/images/banner-postres.png"
        alt="Postres artesanales"
        fill
        priority
        className="object-cover"
        />

      {/* Capa 2: un degradado oscuro encima, para que el texto se lea bien */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/10" />

      {/* Capa 3: el texto y el botón, arriba de todo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <span className="text-pink-200 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">
            Hecho a mano, con amor
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3 drop-shadow-md">
            Postres que endulzan tu día 🍰
        </h1>
        <p className="text-sm sm:text-base text-white/90 max-w-md mb-5">
            Tortas, tartas y galletas artesanales, hechas frescas cada día
        </p>
        
        </div>
    </div>
    );
}