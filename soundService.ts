export const playSound = (type: 'WIN' | 'LOSE' | 'STAKE' | 'CLICK' | 'QUEST') => {
    // Check settings first
    const settings = JSON.parse(localStorage.getItem('game-settings') || '{"sfx": true, "haptics": true}');
    if (!settings.sfx) return;

    const sounds = {
        WIN: '/audio/win.mp3',
        LOSE: '/audio/lose.mp3',
        STAKE: '/audio/stake.mp3',
        CLICK: '/audio/click.mp3',
        QUEST: '/audio/quest.mp3'
    };

    const audio = new Audio(sounds[type]);
    audio.play().catch(() => {
        // Fallback for missing files or blocked autoplay
        console.log(`Sound ${type} skipped (maybe file no dey or browser block am).`);
    });

    // Haptics
    if (settings.haptics && "vibrate" in navigator) {
        if (type === 'WIN') navigator.vibrate([100, 50, 100]);
        else if (type === 'STAKE') navigator.vibrate(50);
        else if (type === 'LOSE') navigator.vibrate(200);
    }
};
