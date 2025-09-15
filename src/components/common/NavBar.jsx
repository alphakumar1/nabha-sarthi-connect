// src/components/common/NavBar.jsx
import React from "react";
import { LogOut } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useAuth } from "../../context/AuthContext";

export default function NavBar() {
  const { t, lang, setLang } = useLanguage();
  const { user, logout } = useAuth();

  const langs = [
    { code: "en", label: "EN" },
    { code: "hi", label: "हि" },
    { code: "pb", label: "ਪੰ" },
  ];

  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b">
        {/* Logo + App Name */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <div className="font-bold text-lg text-foreground">{t.appName}</div>
        </div>

        {/* Logout */}
        {user && (
          <button
            onClick={logout}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition"
          >
            <LogOut className="h-4 w-4" />
            <span>{t.logout}</span>
          </button>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between px-6 py-2 bg-gradient-to-r from-primary/5 via-background to-secondary/5">
        {/* Welcome text */}
        <div className="text-sm text-foreground">
          {user ? `${t.welcome}, ${user.name}` : ""}
        </div>

        {/* Language Switch */}
        <div className="flex gap-2">
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                lang === l.code
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/70"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
