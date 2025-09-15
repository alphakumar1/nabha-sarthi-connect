// src/components/auth/LoginForm.jsx
import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import Input from '../common/Input';
import Button from '../common/Button';

export default function LoginForm({ role, onBack }) {
  const { t } = useLanguage();
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const submit = () => {
    if (!name || !password) return;
    login({ name, role, phone });
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">{t.enterDetails}</h2>
        <p className="text-sm text-muted-foreground">{t.appName}</p>
      </div>

      <div className="space-y-3">
        <Input label={t.name} value={name} onChange={(e) => setName(e.target.value)} placeholder={t.name} />
        <Input label={t.password} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t.password} />
        <Input label={t.phoneNumber} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.phoneNumber} />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <Button onClick={submit} variant="primary" className="flex items-center justify-center gap-2">
          <Lock className="h-4 w-4" /> {t.login}
        </Button>
        <Button variant="muted" onClick={onBack}>Back</Button>
      </div>
    </div>
  );
}
