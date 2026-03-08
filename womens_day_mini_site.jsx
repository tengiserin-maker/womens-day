import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = {
  sister: {
    title: "Эгчдээ",
    icon: "👩",
    text: "Хайрт эгчдээ Эмэгтэйчүүдийн эрхийг хамгаалах өдрийн мэнд хүргэе. Таны халамж, түшиг, ухаалаг үгс үргэлж үнэ цэнтэй байдаг. Инээд, аз жаргал, эрүүл энх, хамгийн сайхан бүхнийг хүсье."
  },
  friend: {
    title: "Найздаа",
    icon: "💐",
    text: "Хайрт найздаа Эмэгтэйчүүдийн эрхийг хамгаалах өдрийн мэнд хүргэе. Чиний инээмсэглэл, дулаан зан, гэрэлтэй энерги орчныг үргэлж өнгөлж байдаг. Хайр, баяр баясал, амжилтаар дүүрэн байгаарай."
  },
  younger: {
    title: "Дүүдээ",
    icon: "🎀",
    text: "Хайрт дүүдээ Эмэгтэйчүүдийн эрхийг хамгаалах өдрийн мэнд хүргэе. Чиний мөрөөдөл бүхэн биелж, үргэлж өөрийнхөөрөө гэрэлтэж яваарай. Аз жаргал, инээд хөөр, хамгийн сайхан бүхнийг хүсье."
  }
};

function Flower() {
  const left = Math.random() * 100;
  const duration = 6 + Math.random() * 5;
  const delay = Math.random() * 4;

  return (
    <motion.div
      initial={{ y: -80, opacity: 0, x: 0, rotate: 0 }}
      animate={{ y: "110vh", opacity: 1, x: [0, 20, -20, 10], rotate: 360 }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
      className="absolute top-0 text-xl pointer-events-none"
      style={{ left: `${left}%` }}
    >
      🌸
    </motion.div>
  );
}

export default function WomensDayMiniSite() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-white flex items-center justify-center p-4 relative overflow-hidden">
      {Array.from({ length: 16 }).map((_, i) => (
        <Flower key={i} />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur rounded-[2rem] shadow-2xl p-6 border border-pink-100"
      >
        <div className="text-center">
          <div
            className="mx-auto w-40 h-40 overflow-hidden shadow-lg border-4 border-pink-200 bg-pink-50 flex items-center justify-center"
            style={{ clipPath: 'path("M 200 60 C 200 20 160 0 120 30 C 80 0 40 20 40 60 C 40 110 120 160 120 160 C 120 160 200 110 200 60 Z")' }}
          >
            <img
              src="/profile.jpg"
              alt="Tengis"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.h1
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
            className="mt-5 text-2xl font-bold text-rose-500"
          >
            Миний амьдралын гайхалтай бүсгүйчүүдэд
          </motion.h1>

          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Эмэгтэйчүүдийн эрхийг хамгаалах өдрийн мэнд хүргэе 🌷
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          <button
            onClick={() => setSelected(messages.sister)}
            className="rounded-2xl bg-pink-50 hover:bg-pink-100 transition p-4 shadow-sm border border-pink-100 flex flex-col items-center gap-2"
          >
            <div className="text-3xl">👩</div>
            <div className="text-sm font-semibold text-gray-700">Эгч</div>
          </button>

          <button
            onClick={() => setSelected(messages.friend)}
            className="rounded-2xl bg-rose-50 hover:bg-rose-100 transition p-4 shadow-sm border border-rose-100 flex flex-col items-center gap-2"
          >
            <div className="text-3xl">💐</div>
            <div className="text-sm font-semibold text-gray-700">Найз</div>
          </button>

          <button
            onClick={() => setSelected(messages.younger)}
            className="rounded-2xl bg-fuchsia-50 hover:bg-fuchsia-100 transition p-4 shadow-sm border border-fuchsia-100 flex flex-col items-center gap-2"
          >
            <div className="text-3xl">🎀</div>
            <div className="text-sm font-semibold text-gray-700">Дүү</div>
          </button>
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="mt-6 rounded-3xl bg-gradient-to-br from-pink-50 to-rose-100 p-5 border border-pink-100 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selected.icon}</span>
                  <h2 className="text-lg font-bold text-rose-500">{selected.title}</h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-xs px-3 py-1 rounded-full bg-white text-gray-500 border"
                >
                  Хаах
                </button>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-700">{selected.text}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-6 text-center text-xs text-gray-500">
          Сонголтоо дараад тухайн хүнд зориулсан мэндчилгээг нээгээрэй ✨
        </p>
      </motion.div>
    </div>
  );
}
