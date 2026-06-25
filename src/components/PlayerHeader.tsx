"use client";

import { motion } from "framer-motion";
import { Crown, Flame, Coins, User } from "lucide-react";

const XP_CURRENT = 450;
const XP_MAX = 1000;
const LEVEL = 4;
const STREAK = 12;
const GOLD = 8450;
const PLAYER_NAME = "PlayerName";

export default function PlayerHeader() {
  const xpPercent = (XP_CURRENT / XP_MAX) * 100;

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-white/[0.04] bg-background-dark/80 px-4 py-2.5 backdrop-blur-xl sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4">
        {/* Left — Logo + Profile */}
        <div className="flex shrink-0 items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-xp-purple/15 ring-1 ring-xp-purple/30 shadow-glow-purple">
            <Crown className="h-4 w-4 text-xp-purple" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-lighter ring-2 ring-xp-purple/20">
              <User className="h-4 w-4 text-zinc-400" />
            </div>
            <span className="hidden text-sm font-semibold text-zinc-100 sm:block">
              {PLAYER_NAME}
            </span>
          </div>
        </div>

        {/* Center — Level + XP bar */}
        <div className="flex flex-1 items-center gap-3 min-w-0">
          <span className="shrink-0 text-xs font-bold tracking-wide text-xp-purple">
            Lv.{LEVEL}
          </span>
          <div className="relative flex-1 min-w-0">
            <div className="h-2 w-full overflow-hidden rounded-full bg-surface-lighter">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${xpPercent}%` }}
                transition={{ duration: 1.2, delay: 0.25, ease: "easeOut" }}
                className="relative h-full rounded-full bg-gradient-to-r from-xp-purple-dark via-xp-purple to-purple-400"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.div>
            </div>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="shrink-0 whitespace-nowrap text-xs font-medium text-zinc-500"
          >
            <span className="text-zinc-200">{XP_CURRENT}</span>
            {" / "}
            {XP_MAX}
          </motion.span>
        </div>

        {/* Right — Streak + Gold */}
        <div className="flex shrink-0 items-center gap-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
            className="flex items-center gap-1.5"
          >
            <Flame className="h-4 w-4 text-orange-400 drop-shadow-[0_0_6px_rgba(251,146,60,0.5)]" />
            <span className="text-sm font-bold text-orange-400">{STREAK}</span>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
            className="flex items-center gap-1.5"
          >
            <Coins className="h-4 w-4 text-gold-amber drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
            <span className="text-sm font-bold text-gold-amber">
              {GOLD.toLocaleString()}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
