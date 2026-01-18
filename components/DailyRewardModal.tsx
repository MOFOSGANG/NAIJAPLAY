import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Coins, Zap, Trophy, Check } from 'lucide-react';
import { useGameStore } from '../store';

const DailyRewardModal = ({ data, onClose }: { data: any, onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] bg-black/80 backdrop-blur-lg flex items-center justify-center p-6"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="glass p-12 rounded-[60px] max-w-md w-full text-center space-y-8 border-2 border-[#00ff88]/20 relative overflow-hidden"
            >
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00ff88]/10 blur-[100px] -z-1" />

                <div className="space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#008751] to-[#00ff88] rounded-[35px] mx-auto flex items-center justify-center text-5xl shadow-2xl relative">
                        🥖
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-2 -right-2 text-2xl"
                        >
                            ✨
                        </motion.div>
                    </div>
                    <h2 className="text-4xl font-black font-accent leading-none uppercase tracking-tight">Daily Bread!</h2>
                    <p className="text-white/50 text-xs font-black uppercase tracking-[0.3em]">Day {data.newStreak} Hustle Streak</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="glass p-6 rounded-[30px] border border-white/5 space-y-2">
                        <Coins className="text-[#FFA500] mx-auto" size={24} />
                        <p className="text-2xl font-black">+{data.rewardCoins}</p>
                        <p className="text-[10px] font-black uppercase text-white/40">Coins</p>
                    </div>
                    <div className="glass p-6 rounded-[30px] border border-white/5 space-y-2">
                        <Zap className="text-yellow-400 mx-auto" size={24} />
                        <p className="text-2xl font-black">+{data.rewardXP}</p>
                        <p className="text-[10px] font-black uppercase text-white/40">XP</p>
                    </div>
                </div>

                <p className="text-sm font-black text-[#00ff88] italic px-4">
                    "{data.message}"
                </p>

                <button
                    onClick={onClose}
                    className="w-full py-5 bg-[#008751] text-white rounded-[25px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3 group"
                >
                    LET'S GO! <Sparkles className="group-hover:animate-spin" size={18} />
                </button>
            </motion.div>
        </motion.div>
    );
};

export default DailyRewardModal;
