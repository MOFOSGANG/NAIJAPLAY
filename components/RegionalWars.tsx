import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Shield, Swords, MapPin, Trophy, Users, Star, ArrowUp } from 'lucide-react';
import { useGameStore } from '../store';

const RegionalWars = () => {
    const { leaders, fetchLeaderboards, user: currentUser } = useGameStore();
    const [viewType, setViewType] = useState<'USERS' | 'VILLAGES'>('USERS');
    const [scope, setScope] = useState<'GLOBAL' | 'REGIONAL'>('GLOBAL');
    const [region, setRegion] = useState('Lagos');

    useEffect(() => {
        fetchLeaderboards(viewType, scope === 'REGIONAL' ? region : undefined);
    }, [viewType, scope, region]);

    const regions = ['Lagos', 'Abuja', 'Rivers', 'Oyo', 'Kano'];

    return (
        <div className="space-y-6">
            {/* Header / Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass p-6 rounded-[30px] border border-white/5 flex items-center justify-between">
                    <div>
                        <p className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] mb-1">Your Rank</p>
                        <h3 className="text-2xl font-black text-[#00ff88]">#--</h3>
                    </div>
                    <Trophy className="text-[#00ff88] opacity-20" size={40} />
                </div>
                <div className="glass p-6 rounded-[30px] border border-white/5 flex items-center justify-between">
                    <div>
                        <p className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] mb-1">Total Street XP</p>
                        <h3 className="text-2xl font-black text-white">{currentUser.xp.toLocaleString()}</h3>
                    </div>
                    <Star className="text-white opacity-20" size={40} />
                </div>
            </div>

            {/* Controls */}
            <div className="glass p-2 rounded-[25px] border border-white/5 flex flex-wrap gap-2">
                <div className="flex bg-white/5 rounded-2xl p-1 flex-grow md:flex-grow-0">
                    <button
                        onClick={() => setViewType('USERS')}
                        className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewType === 'USERS' ? 'bg-[#008751] text-white' : 'text-white/40 hover:text-white'}`}
                    >
                        Street Kings
                    </button>
                    <button
                        onClick={() => setViewType('VILLAGES')}
                        className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewType === 'VILLAGES' ? 'bg-[#008751] text-white' : 'text-white/40 hover:text-white'}`}
                    >
                        Strongest Villages
                    </button>
                </div>

                <div className="flex bg-white/5 rounded-2xl p-1 flex-grow md:flex-grow-0">
                    <button
                        onClick={() => setScope('GLOBAL')}
                        className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${scope === 'GLOBAL' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white'}`}
                    >
                        Global
                    </button>
                    <button
                        onClick={() => setScope('REGIONAL')}
                        className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${scope === 'REGIONAL' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white'}`}
                    >
                        Regional
                    </button>
                </div>

                {scope === 'REGIONAL' && (
                    <select
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="bg-white/5 text-white text-[10px] font-black uppercase px-4 rounded-xl outline-none border border-white/10"
                    >
                        {regions.map(r => <option key={r} value={r} className="bg-[#1a1a1a]">{r}</option>)}
                    </select>
                )}
            </div>

            {/* Leaderboard List */}
            <div className="glass rounded-[35px] border border-white/5 overflow-hidden">
                <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
                    <h4 className="text-xs font-black uppercase text-white/40 tracking-widest">
                        {scope} {viewType === 'USERS' ? 'King' : 'Village'} Rankings
                    </h4>
                    <Globe size={16} className="text-white/20" />
                </div>

                <div className="max-h-[500px] overflow-y-auto divide-y divide-white/5">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${viewType}-${scope}-${region}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="divide-y divide-white/5"
                        >
                            {viewType === 'USERS' ? (
                                leaders.users.map((u, i) => (
                                    <div key={u.id} className={`p-4 flex items-center justify-between hover:bg-white/5 transition-colors ${u.id === currentUser.id ? 'bg-[#008751]/10' : ''}`}>
                                        <div className="flex items-center gap-4">
                                            <span className={`w-8 text-sm font-black ${i < 3 ? 'text-[#00ff88]' : 'text-white/20'}`}>
                                                #{i + 1}
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                                                {u.avatar || u.username[0]}
                                            </div>
                                            <div>
                                                <h5 className="text-sm font-black text-white">{u.username}</h5>
                                                <p className="text-[8px] text-white/40 uppercase font-bold tracking-widest">{u.title}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs font-black text-white">{u.xp.toLocaleString()} XP</div>
                                            <div className="text-[8px] text-[#00ff88] uppercase font-black">Level {u.level}</div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                leaders.villages.map((v, i) => (
                                    <div key={v.id} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <span className={`w-8 text-sm font-black ${i < 3 ? 'text-[#00ff88]' : 'text-white/20'}`}>
                                                #{i + 1}
                                            </span>
                                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                                                {v.icon}
                                            </div>
                                            <div>
                                                <h5 className="text-sm font-black text-white">{v.name}</h5>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[8px] text-white/40 uppercase font-bold tracking-widest">{v.region}</span>
                                                    <span className="w-1 h-1 rounded-full bg-white/10" />
                                                    <span className="text-[8px] text-[#00ff88] uppercase font-black flex items-center gap-1">
                                                        <Users size={8} /> {v._count.members} Members
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs font-black text-white">{v.totalXP.toLocaleString()} XP</div>
                                            <div className="flex items-center justify-end gap-1 text-[8px] text-[#FFA500] font-black uppercase">
                                                <Shield size={8} /> Rank {i + 1}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}

                            {((viewType === 'USERS' && leaders.users.length === 0) || (viewType === 'VILLAGES' && leaders.villages.length === 0)) && (
                                <div className="p-20 text-center text-white/20">
                                    <Swords size={48} className="mx-auto mb-4 opacity-50" />
                                    <p className="text-xs font-black uppercase tracking-widest">Street is quiet for now...</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Event Banner */}
            <div className="p-8 bg-gradient-to-r from-[#008751] to-[#00ff88] rounded-[35px] relative overflow-hidden group">
                <div className="absolute inset-0 ankara-pattern opacity-10" />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
                />

                <div className="relative z-10">
                    <div className="flex items-center gap-2 text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                        <Sparkles size={12} />
                        Next Main Event
                    </div>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Lagos Island Lockdown</h3>
                    <div className="flex items-center gap-4">
                        <div className="px-4 py-2 bg-black/20 rounded-xl text-white text-[10px] font-black border border-white/10 uppercase tracking-widest">Starts in 2 Days</div>
                        <button className="px-6 py-2 bg-white text-[#008751] rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">Prepare</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Sparkles = ({ size }: { size: number }) => (
    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>
        <Star size={size} />
    </motion.div>
);

export default RegionalWars;
