"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const handlechangetheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    useEffect(() => {
        setMounted(true)
        console.log(theme)
    }, [])

    if (!mounted) return null

    return (
        <>
            <Button onClick={handlechangetheme} color="success">
                {
                    theme === "dark" ?
                        <SunIcon className="h-6 w-6" />
                        :
                        <MoonIcon className="h-6 w-6" />
                }
            </Button>
        </>
    )
};