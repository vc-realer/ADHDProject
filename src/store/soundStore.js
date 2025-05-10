import create from 'zustand';
import { persist } from 'zustand/middleware';

// Create audio elements for different sounds
const sounds = {
  notification: new Audio('/sounds/notification.mp3'),
  complete: new Audio('/sounds/complete.mp3'),
  start: new Audio('/sounds/start.mp3'),
  reward: new Audio('/sounds/reward.mp3'),
};

// Preload sounds
Object.values(sounds).forEach(sound => {
  sound.load();
});

const useSoundStore = create(
  persist(
    (set, get) => ({
      soundEnabled: true,
      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
      playSound: (soundName) => {
        const { soundEnabled } = get();
        if (soundEnabled && sounds[soundName]) {
          // Reset the sound to the beginning
          sounds[soundName].currentTime = 0;
          // Play the sound
          sounds[soundName].play().catch(error => {
            console.log('Error playing sound:', error);
          });
        }
      },
    }),
    {
      name: 'sound-storage',
    }
  )
);

export default useSoundStore; 