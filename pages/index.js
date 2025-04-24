"use client";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="px-6 md:px-12 py-12 max-w-screen-xl mx-auto space-y-24 text-gray-900 bg-white">
      <section className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Diseño para conectar.<br />Dirección para emocionar.<br />Producción para impactar.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Diseñador multidisciplinario especializado en gráfico, UX/UI, motion y video.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Button className="mt-4 text-lg px-6 py-3" size="lg">
            Conectemos <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
