import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Cpu, Bot, Sparkles } from "lucide-react";

export default function PRXSystems() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#020617] text-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          PRX <span className="text-cyan-400">Systems</span>
        </motion.h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          Building intelligent robotic systems and interactive hardware designed
          to live naturally in human spaces.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-5 text-lg rounded-2xl">
            View Prototype
          </Button>
          <Button variant="outline" className="px-6 py-5 text-lg rounded-2xl border-slate-500 text-slate-200">
            Join Updates
          </Button>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-8">
        <Card className="bg-[#020617] border border-slate-800 rounded-2xl shadow-lg">
          <CardContent className="p-8">
            <Cpu className="w-10 h-10 text-cyan-400" />
            <h3 className="mt-4 text-xl font-semibold">Engineering First</h3>
            <p className="mt-2 text-slate-400">
              Every product is built as a system — modular, scalable, and designed
              to evolve.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#020617] border border-slate-800 rounded-2xl shadow-lg">
          <CardContent className="p-8">
            <Bot className="w-10 h-10 text-cyan-400" />
            <h3 className="mt-4 text-xl font-semibold">Human Interaction</h3>
            <p className="mt-2 text-slate-400">
              Robotics that respond to presence, motion, and emotion — not screens.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#020617] border border-slate-800 rounded-2xl shadow-lg">
          <CardContent className="p-8">
            <Sparkles className="w-10 h-10 text-cyan-400" />
            <h3 className="mt-4 text-xl font-semibold">Ambient Technology</h3>
            <p className="mt-2 text-slate-400">
              Technology that blends into environments and enhances daily life
              quietly.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 text-center text-slate-500">
        <p>© {new Date().getFullYear()} PRX Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}
