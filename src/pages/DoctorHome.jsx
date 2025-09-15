// src/pages/DoctorHome.jsx
import React from 'react';
import NavBar from '../components/common/NavBar';
import Appointments from '../components/doctor/sections/Appointments';
import VideoCalls from '../components/doctor/sections/VideoCalls';
import VoiceCalls from '../components/doctor/sections/VoiceCalls';
import Chat from '../components/doctor/sections/Chat';
import PatientRecords from '../components/doctor/sections/PatientRecords';

export default function DoctorHome() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="p-4 max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Doctor Dashboard</h1>
        </div>

        <Appointments />
        <VideoCalls />
        <VoiceCalls />
        <Chat />
        <PatientRecords />
      </main>
    </div>
  );
}
