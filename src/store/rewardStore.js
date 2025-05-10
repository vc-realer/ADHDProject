import create from 'zustand';
import { persist } from 'zustand/middleware';

const useRewardStore = create(
  persist(
    (set, get) => ({
      rewards: [],
      inventory: [],
      points: 0,
      addPoints: (amount) =>
        set((state) => ({
          points: state.points + amount,
        })),
      spendPoints: (amount) =>
        set((state) => ({
          points: Math.max(0, state.points - amount),
        })),
      addReward: (reward) =>
        set((state) => ({
          rewards: [...state.rewards, reward],
        })),
      addToInventory: (reward) =>
        set((state) => ({
          inventory: [...state.inventory, { ...reward, obtainedAt: new Date().toISOString() }],
        })),
      getRarityDistribution: () => {
        const inventory = get().inventory;
        return {
          common: inventory.filter((item) => item.rarity === 'common').length,
          rare: inventory.filter((item) => item.rarity === 'rare').length,
          epic: inventory.filter((item) => item.rarity === 'epic').length,
          legendary: inventory.filter((item) => item.rarity === 'legendary').length,
        };
      },
      getPointsHistory: () => get().pointsHistory || [],
      addPointsHistory: (entry) =>
        set((state) => ({
          pointsHistory: [...(state.pointsHistory || []), entry],
        })),
    }),
    {
      name: 'reward-storage',
    }
  )
);

export default useRewardStore; 