'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (theme === 'dark' || (!theme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        if (newIsDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-700"
            aria-label="Toggle theme"
        >
            {isDark ? '☀️' : '🌙'}
        </button>
    );
}
