import { FormEvent, useEffect, useState } from "react";

import { Switch } from "@headlessui/react";
import { Moon } from "phosphor-react";

interface ToogleThemeProps {
  show: boolean;
}

export function ToogleTheme({ show }: ToogleThemeProps) {
  const html = document.querySelector("html");

  const [enabled, setEnabled] = useState(false);

  function toggleDarkMode(isEnabled: boolean) {
    setEnabled(isEnabled);

    if (isEnabled) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  }

  //useEffect(() => {});

  /*if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }*/

  return (
    <div
      className="flex align-middle justify-center"
      style={show ? { display: "flex" } : { display: "none" }}
    >
      <Moon className="m-1" />
      <Switch
        checked={enabled}
        onChange={toggleDarkMode}
        className={`${
          enabled ? "bg-brand-500" : "dark:bg-gray-200 bg-gray-500"
        } relative inline-flex h-6 w-11 items-center rounded-full mb-7 transition-all duration-500 ease-linear `}
      >
        <span className="sr-only">Dark/Light Mode</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full dark:bg-white bg-zinc-900`}
        />
      </Switch>
    </div>
  );
}
