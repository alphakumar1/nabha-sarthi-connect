// src/components/common/NavBar.jsx
import React from 'react';
import { Heart, Globe, LogOut, Menu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';

export default function NavBar({ onMenuClick }) {
  const { t, lang, setLang } = useLanguage();
  const { user, logout } = useAuth();

  return (
    <header className="w-full px-4 py-3 flex items-center justify-between border-b bg-background/60">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="p-2 rounded-lg hover:bg-muted">
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3">
          <Heart className="h-7 w-7 text-primary" />
          <div>
            <div className="text-lg font-bold">{t.appName}</div>
            <div className="text-xs text-muted-foreground">{t.subtitle}</div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="px-2 py-1 rounded-md border border-muted bg-transparent"
          aria-label={t.selectLanguage}
        >
          <option value="en">EN</option>
          <option value="hi">हि</option>
          <option value="pb">ਪੰ</option>
        </select>

        {user ? (
          <div className="flex items-center gap-3">
            <div className="text-sm">{t.welcome}, <span className="font-semibold">{user.name}</span></div>
            <button onClick={logout} className="p-2 rounded-md hover:bg-muted" title={t.logout}>
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <div className="text-sm text-muted-foreground"> </div>
        )}
      </div>
    </header>
  );
}
