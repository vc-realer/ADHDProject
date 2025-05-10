import create from 'zustand';
import { persist } from 'zustand/middleware';

// Sound file paths
const SOUND_PATHS = {
  notification: '/sounds/notification.mp3',
  complete: '/sounds/complete.mp3',
  start: '/sounds/start.mp3',
  reward: '/sounds/reward.mp3',
};

// Create audio elements for different sounds
const sounds = {};
let soundsLoaded = false;

// Function to load sounds
const loadSounds = () => {
  if (soundsLoaded) return;

  Object.entries(SOUND_PATHS).forEach(([name, path]) => {
    const audio = new Audio(path);
    audio.preload = 'auto';
    
    // Add error handling for each sound
    audio.addEventListener('error', (e) => {
      console.error(`Error loading sound ${name}:`, e);
    });

    // Add load handling
    audio.addEventListener('canplaythrough', () => {
      console.log(`Sound ${name} loaded successfully`);
    });

    sounds[name] = audio;
  });

  soundsLoaded = true;
};

// Load sounds when the store is created
loadSounds();

const useSoundStore = create(
  persist(
    (set, get) => ({
      soundEnabled: true,
      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
      playSound: (soundName) => {
        const { soundEnabled } = get();
        
        if (!soundEnabled) return;
        
        const sound = sounds[soundName];
        if (!sound) {
          console.error(`Sound ${soundName} not found`);
          return;
        }

        // Create a new promise to handle the play attempt
        const playPromise = sound.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Reset the sound to the beginning after it finishes
              sound.addEventListener('ended', () => {
                sound.currentTime = 0;
              }, { once: true });
            })
            .catch(error => {
              console.error(`Error playing sound ${soundName}:`, error);
              // If the error is due to user interaction, try to play again
              if (error.name === 'NotAllowedError') {
                console.log('Sound playback requires user interaction');
              }
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