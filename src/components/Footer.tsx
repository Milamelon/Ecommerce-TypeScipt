
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
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Postres App. Todos los derechos reservados.
        </p>
    </footer>
    );
}