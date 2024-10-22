import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Toggle from 'react-switch';

export default function DarkMode() {
    const systemPrefersDark = useMediaQuery({ query: "(prefers-color-scheme: dark)" });
    const [isDark, setIsDark] = useState(systemPrefersDark);

    useEffect(() => {
        document.body.classList.toggle('dark', isDark);
    }, [isDark]);

    useEffect(() => {
        setIsDark(systemPrefersDark);
    }, [systemPrefersDark]);

    return (
        <Toggle
            checked={isDark}
            onChange={() => setIsDark(prev => !prev)}
            icons={{ checked: "🌙", unchecked: "🔆" }}
            aria-label="Dark mode toggle"
        />
    );
}
