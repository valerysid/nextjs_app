import { useEffect, useState } from "react";
import Tooltip from '../components/tooltip';
import Image from "next/image";

function DarkModeToggler() {

    const [theme, setTheme] = useState(
        typeof window !== "undefined" ? localStorage.theme : "dark"
    );

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => setTheme(e.matches ? 'dark' : 'light'));
            setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        }
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
            });
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const root = window.document.documentElement;
            const colorTheme = theme === "dark" ? "light" : "dark";
            root.classList.remove(colorTheme);
            root.classList.add(theme);
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    return (
        <Tooltip tooltipText={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
            <button className="w-6 h-6" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <Image className="w-full h-full" alt={'An icon for the sun or moon depending on dark mode settings'} src={`/icons/icon-${theme}.svg`} height={30} width={30} />
            </button >
        </Tooltip>
    )
}



export default DarkModeToggler