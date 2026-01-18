import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Clock, X, Loader2, Sparkles, Gamepad2, Zap, Coins } from 'lucide-react';
import { useMultiplayerStore } from '../multiplayerStore';
import { useGameStore } from '../store';

interface MatchmakingQueueProps {
    gameType: string;
    gameName: string;
    gameIcon: string;
    onClose: () => void;
}

const MatchmakingQueue = ({ gameType, gameName, gameIcon, onClose }: MatchmakingQueueProps) => {
    const { queue, joinQueue, leaveQueue, onlinePlayerCount } = useMultiplayerStore();
    const { user: currentUser } = useGameStore();
    const [elapsedTime, setElapsedTime] = useState(0);
    const [dots, setDots] = useState('');
    const [selectingStake, setSelectingStake] = useState(!queue.isInQueue);

    useEffect(() => {
        // Update elapsed time every second
        const interval = setInterval(() => {
            if (queue.startedAt) {
                setElapsedTime(Math.floor((Date.now() - new Date(queue.startedAt).getTime()) / 1000));
            }
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 1000);
        return () => clearInterval(interval);
    }, [queue.startedAt]);

    const handleJoin = (stake: number) => {
        if (currentUser.coins < stake) {
            alert("Omo, your money no reach! Hustle small for market first. 💰");
            return;
        }
        joinQueue(gameType, stake);
        setSelectingStake(false);
    };

    const handleCancel = () => {
        leaveQueue();
        onClose();
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const stakeOptions = [
        { amount: 0, label: 'Free Play', icon: '🆓' },
        { amount: 100, label: 'Street Bet', icon: '🥉' },
        { amount: 500, label: 'Oga Bet', icon: '🥈' },
        { amount: 1000, label: 'King Bet', icon: '🥇' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="glass p-10 rounded-[50px] max-w-md w-full text-center space-y-8 border border-white/10 relative overflow-hidden"
            >
                {/* Background animation */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-conic from-[#008751]/10 via-transparent to-[#00ff88]/10"
                    />
                </div>

                <AnimatePresence mode="wait">
                    {selectingStake ? (
                        <motion.div
                            key="stake-selection"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6 relative z-10"
                        >
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black font-accent">Drop your Stake!</h2>
                                <p className="text-white/50 text-xs uppercase tracking-widest font-black">Betnaija Staking Mode 🇳🇬</p>
                            </div>

                            <div className="text-sm font-black text-[#FFA500] bg-[#FFA500]/10 py-2 rounded-xl border border-[#FFA500]/20">
                                Your Coins: {currentUser.coins.toLocaleString()} C
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {stakeOptions.map((opt) => (
                                    <button
                                        key={opt.amount}
                                        onClick={() => handleJoin(opt.amount)}
                                        disabled={currentUser.coins < opt.amount}
                                        className={`p-6 rounded-3xl border transition-all flex flex-col items-center gap-2 group ${currentUser.coins < opt.amount
                                                ? 'opacity-30 border-white/5 grayscale pointer-events-none'
                                                : 'glass border-white/10 hover:border-[#00ff88] hover:bg-[#00ff88]/5'
                                            }`}
                                    >
                                        <span className="text-3xl">{opt.icon}</span>
                                        <div className="text-center">
                                            <p className="text-[10px] font-black uppercase text-white/40">{opt.label}</p>
                                            <p className="text-sm font-black text-white">{opt.amount} C</p>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={onClose}
                                className="text-[10px] font-black uppercase text-white/20 hover:text-white transition-colors"
                            >
                                Not today, oga.
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="queue-status"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8 relative z-10"
                        >
                            {/* Game Icon */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-24 h-24 bg-gradient-to-br from-[#008751] to-[#00ff88] rounded-[35px] mx-auto flex items-center justify-center text-5xl shadow-2xl relative"
                            >
                                {gameIcon}
                                {queue.stake > 0 && (
                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#FFA500] rounded-full border-4 border-[#0a0a0f] flex items-center justify-center text-sm shadow-xl">
                                        💰
                                    </div>
                                )}
                            </motion.div>

                            {/* Status Text */}
                            <div>
                                <h2 className="text-3xl font-black font-accent mb-2">Finding Match{dots}</h2>
                                <p className="text-white/50 text-sm">{gameName} • <span className="text-[#FFA500] font-black">{queue.stake > 0 ? `${queue.stake}C Stake` : 'Free Play'}</span></p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="glass p-4 rounded-2xl border border-white/5">
                                    <Clock size={18} className="text-[#00ff88] mx-auto mb-2" />
                                    <p className="text-xl font-black">{formatTime(elapsedTime)}</p>
                                    <p className="text-[8px] text-white/40 uppercase tracking-widest">Searching</p>
                                </div>
                                <div className="glass p-4 rounded-2xl border border-white/5">
                                    <Users size={18} className="text-[#FFA500] mx-auto mb-2" />
                                    <p className="text-xl font-black">{queue.position || '...'}</p>
                                    <p className="text-[8px] text-white/40 uppercase tracking-widest">In Queue</p>
                                </div>
                                <div className="glass p-4 rounded-2xl border border-white/5">
                                    <Zap size={18} className="text-yellow-400 mx-auto mb-2" />
                                    <p className="text-xl font-black">{onlinePlayerCount}</p>
                                    <p className="text-[8px] text-white/40 uppercase tracking-widest">Online</p>
                                </div>
                            </div>

                            {/* Fun Messages */}
                            <motion.p
                                key={elapsedTime % 10}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs text-white/30 italic"
                            >
                                {elapsedTime < 10 && "Looking for worthy opponents..."}
                                {elapsedTime >= 10 && elapsedTime < 30 && "Checking the compounds..."}
                                {elapsedTime >= 30 && elapsedTime < 60 && "Sharpening the competition..."}
                                {elapsedTime >= 60 && "The best things take time! 🔥"}
                            </motion.p>

                            {/* Cancel Button */}
                            <button
                                onClick={handleCancel}
                                className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                            >
                                <X size={16} />
                                Cancel Search
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default MatchmakingQueue;
