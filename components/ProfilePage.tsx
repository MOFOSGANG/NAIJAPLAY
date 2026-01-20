import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Crown, LogOut, Edit2, Check, ShoppingBag } from 'lucide-react';
import { useGameStore } from '../store';
import { GAMES_CONFIG, SHOP_ITEMS, XP_PER_LEVEL } from '../constants';
import { GameType } from '../types';
import { CertificateGenerator } from './CertificateGenerator';

const ProfilePage = () => {
    const { user, updateProfile, logout } = useGameStore();
    const [isEditing, setIsEditing] = useState(false);
    const [editBio, setEditBio] = useState(user?.bio || '');
    const [editUsername, setEditUsername] = useState(user?.username || '');

    if (!user) return null;

    // Null safety for backend user objects that may not have frontend stats
    const stats = user.stats || {};
    const achievements = user.achievements || [];
    const inventory = user.inventory || [];

    const totalGamesPlayed = Object.values(stats).reduce((acc: number, s: any) => acc + (s?.played || 0), 0);
    const totalWins = Object.values(stats).reduce((acc: number, s: any) => acc + (s?.wins || 0), 0);
    const winRate = totalGamesPlayed > 0 ? Math.round((totalWins / totalGamesPlayed) * 100) : 0;

    // Ensure coins is always a number
    const userCoins = user.coins ?? 0;

    const handleSave = () => {
        updateProfile({ username: editUsername, bio: editBio });
        setIsEditing(false);
    };

    return (
        <div className="p-6 pb-32 max-w-4xl mx-auto space-y-8">
            {/* Profile Header */}
            <div className="glass p-8 rounded-[50px] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent" />
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#008751]/10 blur-[100px] pointer-events-none" />

                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-32 h-32 bg-gradient-to-br from-[#008751]/20 to-[#00ff88]/10 rounded-[45px] border-4 border-[#00ff88] flex items-center justify-center text-7xl shadow-[0_0_40px_rgba(0,255,136,0.2)]">
                            {user.avatar}
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#008751] rounded-xl flex items-center justify-center text-white font-black text-sm border-2 border-[#00ff88]">
                            {user.level}
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="flex-grow text-center md:text-left space-y-3">
                        {isEditing ? (
                            <input
                                type="text"
                                value={editUsername}
                                onChange={(e) => setEditUsername(e.target.value)}
                                className="bg-white/5 border border-white/20 rounded-xl px-4 py-2 text-2xl font-black outline-none focus:border-[#00ff88]"
                            />
                        ) : (
                            <h2 className="text-4xl font-black font-accent leading-none">{user.username}</h2>
                        )}
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <Crown size={14} className="text-[#FFA500]" />
                            <span className="text-[10px] font-black text-[#00ff88] uppercase tracking-[0.3em]">{user.title}</span>
                        </div>

                        {/* XP Bar */}
                        <div className="flex items-center gap-3">
                            <div className="flex-grow max-w-[250px] h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(user.xp / XP_PER_LEVEL) * 100}%` }}
                                    className="h-full bg-gradient-to-r from-[#008751] to-[#00ff88]"
                                />
                            </div>
                            <span className="text-[10px] font-black opacity-40">{user.xp}/{XP_PER_LEVEL} XP</span>
                        </div>

                        {/* Bio */}
                        {isEditing ? (
                            <textarea
                                value={editBio}
                                onChange={(e) => setEditBio(e.target.value)}
                                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-2 text-sm outline-none focus:border-[#00ff88] resize-none h-20"
                                placeholder="Tell the street about yourself..."
                            />
                        ) : (
                            <p className="text-white/50 text-sm italic">"{user.bio}"</p>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={isEditing ? handleSave : () => setIsEditing(true)}
                            className={`p-4 rounded-2xl font-black text-xs uppercase flex items-center gap-2 transition-all ${isEditing ? 'bg-[#00ff88] text-black' : 'glass border border-white/10 hover:bg-white/10'}`}
                        >
                            {isEditing ? <><Check size={16} /> Save</> : <><Edit2 size={16} /> Edit</>}
                        </button>
                        <button
                            onClick={() => logout()}
                            className="p-4 rounded-2xl font-black text-[10px] uppercase flex items-center gap-2 text-red-500/60 hover:text-red-500 hover:bg-red-500/10 transition-all border border-red-500/10"
                        >
                            <LogOut size={16} /> Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Street Cred Certificate */}
            <div className="glass p-8 rounded-[40px] border border-white/10 bg-[#008751]/5">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-xl font-black font-accent">STREET CRED</h3>
                        <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-1">Official Status Certificate</p>
                    </div>
                    <div className="w-12 h-12 bg-[#00ff88]/20 rounded-2xl flex items-center justify-center text-2xl">📜</div>
                </div>
                <CertificateGenerator />
            </div>

            {/* Achievements Section */}
            <div className="space-y-4">
                <h3 className="text-xl font-black font-accent px-2 flex items-center gap-2">
                    <Trophy className="text-[#FFA500]" size={20} /> BADGES OF THE STREET
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {achievements.map((achievement: any) => (
                        <div key={achievement.id} className="glass p-6 rounded-[35px] border border-white/10 flex flex-col items-center gap-3 relative group">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                {achievement.icon || '🏅'}
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-black text-[#00ff88] uppercase tracking-widest">{achievement.title}</p>
                                <p className="text-[8px] font-bold text-white/40 mt-1 uppercase">{achievement.description}</p>
                            </div>
                            <div className="absolute top-2 right-2">
                                <Check size={12} className="text-[#00ff88]" />
                            </div>
                        </div>
                    ))}
                    {achievements.length === 0 && (
                        <div className="col-span-full py-12 text-center text-white/20 font-black uppercase tracking-[0.2em]">
                            No badges yet. Keep hustling! 🏾🔥
                        </div>
                    )}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass p-6 rounded-[30px] border border-white/10 text-center">
                    <div className="text-3xl font-black text-[#FFA500]">{userCoins.toLocaleString()}</div>
                    <div className="text-[9px] font-black uppercase text-white/40 tracking-widest mt-1">Coins</div>
                </div>
                <div className="glass p-6 rounded-[30px] border border-white/10 text-center">
                    <div className="text-3xl font-black text-[#00ff88]">{totalGamesPlayed}</div>
                    <div className="text-[9px] font-black uppercase text-white/40 tracking-widest mt-1">Games Played</div>
                </div>
                <div className="glass p-6 rounded-[30px] border border-white/10 text-center">
                    <div className="text-3xl font-black text-yellow-400">{totalWins}</div>
                    <div className="text-[9px] font-black uppercase text-white/40 tracking-widest mt-1">Victories</div>
                </div>
                <div className="glass p-6 rounded-[30px] border border-white/10 text-center">
                    <div className="text-3xl font-black text-purple-400">{winRate}%</div>
                    <div className="text-[9px] font-black uppercase text-white/40 tracking-widest mt-1">Win Rate</div>
                </div>
            </div>

            {/* Game Stats */}
            <div className="glass p-6 rounded-[40px] border border-white/10">
                <h3 className="text-xl font-black font-accent uppercase mb-6 flex items-center gap-2">
                    <Trophy size={18} className="text-[#FFA500]" /> Game Performance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(GAMES_CONFIG).map(([id, game]) => {
                        const gameStat = stats[id as GameType] || { played: 0, wins: 0, losses: 0, highScore: 0 };
                        return (
                            <div key={id} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                                <div className={`w-12 h-12 ${game.color} rounded-xl flex items-center justify-center text-2xl`}>
                                    {game.icon}
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-black text-sm">{game.title}</h4>
                                    <p className="text-[10px] text-white/40">
                                        {gameStat.wins}W / {gameStat.losses}L • High: {gameStat.highScore}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-black text-[#00ff88]">{gameStat.played}</div>
                                    <div className="text-[8px] text-white/40 uppercase">Played</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Inventory */}
            <div className="glass p-6 rounded-[40px] border border-white/10">
                <h3 className="text-xl font-black font-accent uppercase mb-6 flex items-center gap-2">
                    <ShoppingBag size={18} className="text-[#FFA500]" /> My Collection ({inventory.length} items)
                </h3>
                <div className="flex flex-wrap gap-3">
                    {inventory.length > 0 ? (
                        SHOP_ITEMS.filter(item => inventory.includes(item.id)).map(item => (
                            <div key={item.id} className="glass px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3">
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                    <p className="text-xs font-black">{item.name}</p>
                                    <p className="text-[8px] text-white/40 uppercase">{item.rarity}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white/40 text-sm">No items yet. Visit the Market to get drip! 🛒</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
