import { create } from 'zustand';

const useNotificationStore = create((set) => ({
  notificationsEnabled: false,
  toggleNotifications: () => set((state) => ({ 
    notificationsEnabled: !state.notificationsEnabled 
  })),
}));

export default useNotificationStore; 