
export default function Footer() {
    return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-8">
        <div className="flex items-center gap-3">
            <span className="text-3xl">🍰</span>
            <p className="text-sm">
            Postres App
            <br />
            <span className="text-gray-400">Postres artesanales hechos con amor</span>
            </p>
        </div>

        <div className="flex flex-col gap-2">
            <h6 className="text-white font-semibold text-sm uppercase tracking-wide">Síguenos</h6>
            <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"></path>
                </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-pink-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-pink-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
            </a>
            </div>
        </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Postres App. Todos los derechos reservados.
        </p>
    </footer>
    );
}