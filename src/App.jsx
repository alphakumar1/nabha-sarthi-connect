// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Auth
import MultiStepAuth from "./components/auth/MultiStepAuth";

// Patient
import PatientHome from "./pages/PatientHome";
import SmartHealth from "./components/patient/sections/SmartHealth";
import Tutorials from "./components/patient/sections/Tutorials";
import SymptomChecker from "./components/patient/sections/SymptomChecker";
import ConsultDoctor from "./components/patient/sections/ConsultDoctor";
import Biolocker from "./components/patient/sections/Biolocker";
import EmergencySOS from "./components/patient/sections/EmergencySOS";

// Doctor
import DoctorHome from "./pages/DoctorHome";
import Appointments from "./components/doctor/sections/Appointments";
import VideoCalls from "./components/doctor/sections/VideoCalls";
import VoiceCalls from "./components/doctor/sections/VoiceCalls";
import Chat from "./components/doctor/sections/Chat";
import PatientRecords from "./components/doctor/sections/PatientRecords";

function ProtectedRoutes() {
  const { user } = useAuth();

  if (!user) {
    return <MultiStepAuth />;
  }

  return (
    <Routes>
      {/* Patient Routes */}
      {user.role === "patient" && (
        <>
          <Route path="/patient" element={<PatientHome />} />
          <Route path="/patient/smart-health" element={<SmartHealth />} />
          <Route path="/patient/tutorials" element={<Tutorials />} />
          <Route path="/patient/symptom-checker" element={<SymptomChecker />} />
          <Route path="/patient/consult-doctor" element={<ConsultDoctor />} />
          <Route path="/patient/biolocker" element={<Biolocker />} />
          <Route path="/patient/emergency-sos" element={<EmergencySOS />} />
          <Route path="*" element={<Navigate to="/patient" replace />} />
        </>
      )}

      {/* Doctor Routes */}
      {user.role === "doctor" && (
        <>
          <Route path="/doctor" element={<DoctorHome />} />
          <Route path="/doctor/appointments" element={<Appointments />} />
          <Route path="/doctor/video-calls" element={<VideoCalls />} />
          <Route path="/doctor/voice-calls" element={<VoiceCalls />} />
          <Route path="/doctor/chat" element={<Chat />} />
          <Route path="/doctor/patient-records" element={<PatientRecords />} />
          <Route path="*" element={<Navigate to="/doctor" replace />} />
        </>
      )}
    </Routes>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <ProtectedRoutes />
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}
