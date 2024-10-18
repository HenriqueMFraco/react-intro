import { useState } from 'react';
import { useMediaQuery } from 'react-responsive' //biblioteca do dark mode
import {useEffect} from 'react'
import Toggle from 'react-switch';

export default function DarkMode() {
    const systemPrefersDark = useMediaQuery({ query: "(prefers-color-scheme: dark)" }); //monitora o estado/query do slide, mudando pro CSS
    const [isDark, setIsDark] = useState(systemPrefersDark);
  
    useEffect(() => {
      document.body.classList.toggle('dark', isDark);
    }, [isDark]);
  
    const toggleDarkMode = () => {
      setIsDark(!isDark);
    };
  
    return (
      <Toggle
        checked={isDark}
        onChange={({ target }) => setIsDark(target.checked)}
        icons={{ checked: "🌙", unchecked: "🔆" }}
        aria-label="Dark mode toggle"
      />
    );
  }