import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cafe-oscuro bg-opacity-70 backdrop-blur-sm text-gray-800 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-xl"
      >
        {/* Caja principal */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border-2 border-amber-300 shadow-2xl">
          <h1 className="text-5xl font-titulo mb-4 text-amber-800">
            ¡Tomemos café juntos!
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Las mejores charlas nacen con una buena taza de café ☕.  
            Acompáñame a compartir un momento tranquilo, con buena compañía y aroma a café recién hecho.
          </p>

          <div className="bg-amber-50 rounded-2xl p-6 shadow-lg backdrop-blur-sm border border-amber-200">
            <p className="text-xl font-semibold mb-2 text-amber-800">📍 Lugar:</p>
            <p className="mb-4 text-gray-700">Café Aroma – Zona 1, Ciudad de Guatemala</p>

            <p className="text-xl font-semibold mb-2 text-amber-800">🕓 Fecha y hora:</p>
            <p className="mb-6 text-gray-700">Sábado 28 de septiembre, 4:00 PM</p>

            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Confirmar asistencia
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
