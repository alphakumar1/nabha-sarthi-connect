// src/App.jsx
import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import LanguageSelector from './components/language/LanguageSelector';
import RoleSelection from './components/auth/RoleSelection';
import LoginForm from './components/auth/LoginForm';
import PatientHome from './pages/PatientHome';
import DoctorHome from './pages/DoctorHome';

function RoutesInside() {
  const { user } = useAuth();
  const [step, setStep] = useState('language'); // language, role, details, dashboard
  const [role, setRole] = useState(null);

  if (!user) {
    if (step === 'language') {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <LanguageSelector />
          <div className="mt-4 w-full max-w-md mx-auto text-center">
            <button onClick={() => setStep('role')} className="mt-4 px-4 py-2 rounded-xl bg-primary text-white">Continue</button>
          </div>
        </div>
      );
    }

    if (step === 'role') {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <RoleSelection onBack={() => setStep('language')} onSelectRole={(r) => { setRole(r); setStep('details'); }} />
        </div>
      );
    }

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <LoginForm role={role} onBack={() => setStep('role')} />
      </div>
    );
  }

  // logged in
  return user.role === 'patient' ? <PatientHome /> : <DoctorHome />;
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <RoutesInside />
      </AuthProvider>
    </LanguageProvider>
  );
}
