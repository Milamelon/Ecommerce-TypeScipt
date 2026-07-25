import Image from "next/image";

export default function Banner() {
    return (
    <div className="relative w-full h-70 sm:h-85 overflow-hidden">
        <Image
        src="/images/Banner.png"
        alt="Postres artesanales"
        fill
        priority
        className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/10" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
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