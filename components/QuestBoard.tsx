import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, Lock, Trophy } from 'lucide-react';
import { useGameStore } from '../store';

const QuestBoard = () => {
    const { dailyQuests, fetchQuests, claimQuest, user } = useGameStore();

    useEffect(() => {
        fetchQuests();
    }, []);

    return (
        <div className="bg-black/40 backdrop-blur-md rounded-3xl border border-white/5 p-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#008751]/20 rounded-xl flex items-center justify-center text-[#00ff88]">
                        <Target size={20} />
                    </div>
                    <div>
                        <h3 className="text-lg font-black font-accent text-white uppercase tracking-tighter">Daily Hustle</h3>
                        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Resets in 24h</p>
                    </div>
                </div>
                <div className="bg-white/5 px-3 py-1 rounded-full text-[10px] font-bold text-white/60">
                    {dailyQuests.filter(q => q.completed).length}/{dailyQuests.length} Done
                </div>
            </div>

            <div className="space-y-3">
                {dailyQuests.length === 0 ? (
                    <div className="text-center py-8 text-white/20 text-xs font-bold uppercase tracking-widest">
                        Loading Quests...
                    </div>
                ) : (
                    dailyQuests.map((quest) => (
                        <motion.div
                            key={quest.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`relative overflow-hidden rounded-2xl p-4 border ${quest.completed ? 'bg-[#00ff88]/5 border-[#00ff88]/20' : 'bg-white/5 border-white/5'}`}
                        >
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h4 className={`text-sm font-black uppercase tracking-tight ${quest.completed ? 'text-[#00ff88]' : 'text-white'}`}>
                                        {quest.title}
                                    </h4>
                                    <p className="text-[10px] text-white/50 font-medium leading-relaxed mt-1">
                                        {quest.description}
                                    </p>

                                    {/* Rewards */}
                                    <div className="flex gap-2 mt-3">
                                        <div className="px-2 py-0.5 bg-yellow-500/10 rounded text-[10px] font-bold text-yellow-500 flex items-center gap-1">
                                            <span>📀</span> {quest.rewardCoins}
                                        </div>
                                        <div className="px-2 py-0.5 bg-purple-500/10 rounded text-[10px] font-bold text-purple-400 flex items-center gap-1">
                                            <span>⚡</span> {quest.rewardXP} XP
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end gap-2">
                                    {quest.claimed ? (
                                        <div className="flex items-center gap-1 text-[#00ff88] text-[10px] font-black uppercase tracking-widest bg-[#00ff88]/10 px-2 py-1 rounded-lg">
                                            <CheckCircle size={12} /> Claimed
                                        </div>
                                    ) : quest.completed ? (
                                        <button
                                            onClick={() => claimQuest(quest.id)}
                                            className="px-4 py-2 bg-[#00ff88] hover:bg-[#00cc6a] text-black text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-green-500/20 active:scale-95 transition-all flex items-center gap-1"
                                        >
                                            <Trophy size={14} /> Claim
                                        </button>
                                    ) : (
                                        <div className="text-xs font-black text-white/20 tabular-nums">
                                            {quest.progress}/{quest.target}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Progress Bar */}
                            {!quest.completed && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                                    <motion.div
                                        className="h-full bg-[#00ff88]"
                                        style={{ width: `${(quest.progress / quest.target) * 100}%` }}
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
};

export default QuestBoard;
