// src/pages/PatientHome.jsx
import React, { useState } from 'react';
import NavBar from '../components/common/NavBar';
import SmartHealth from '../components/patient/sections/SmartHealth';
import Tutorials from '../components/patient/sections/Tutorials';
import SymptomChecker from '../components/patient/sections/SymptomChecker';
import ConsultDoctor from '../components/patient/sections/ConsultDoctor';
import Biolocker from '../components/patient/sections/Biolocker';
import EmergencySOS from '../components/patient/sections/EmergencySOS';
import { tutorials as demoTutorials } from '../data/mockData';

export default function PatientHome() {
  const [active, setActive] = useState('overview');

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="p-4 max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Patient Dashboard</h1>
        </div>

        {active === 'overview' && (
          <>
            <SmartHealth />
            <Tutorials tutorials={demoTutorials} />
            <SymptomChecker />
            <ConsultDoctor />
            <Biolocker />
            <EmergencySOS />
          </>
        )}

        {/* Placeholder for switching smaller sections */}
      </main>
    </div>
  );
}
