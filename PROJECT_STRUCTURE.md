# Project Structure

```
src/
├── assets/
│   └── images/          # All image assets
├── components/
│   └── layout/          # Layout components (Layout.js)
├── data/                # JSON data files
├── hooks/               # Custom React hooks
├── pages/
│   ├── dashboard/       # Dashboard page and related components
│   ├── pomodoro/        # Pomodoro timer page and related components
│   ├── tasks/          # Task management page and related components
│   ├── rewards/        # Rewards system page and related components
│   ├── profile/        # User profile page and related components
│   └── settings/       # Settings page and related components
├── store/              # Zustand store files
├── styles/             # Global styles and theme configuration
└── utils/              # Utility functions and helpers

```

## File Organization Guidelines

1. Each page should have its own directory containing:
   - Main page component
   - Page-specific components
   - Page-specific styles
   - Page-specific utilities

2. Shared components should be placed in the `components` directory

3. All images and media files should be in the `assets` directory

4. Global styles and theme configuration should be in the `styles` directory

5. Data files (JSON, etc.) should be in the `data` directory

6. Custom hooks should be in the `hooks` directory

7. Store files should be in the `store` directory

8. Utility functions should be in the `utils` directory 