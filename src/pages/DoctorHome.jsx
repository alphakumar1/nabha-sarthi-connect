// src/pages/DoctorHome.jsx
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import { Calendar, Video, Phone, MessageCircle, FileText } from "lucide-react";
import Card from "../components/common/Card";
import { useLanguage } from "../context/LanguageContext";

export default function DoctorHome() {
  const { t } = useLanguage();

  const sections = [
    { path: "/doctor/appointments", title: t.appointments, icon: Calendar },
    { path: "/doctor/video-calls", title: t.videoCalls, icon: Video },
    { path: "/doctor/voice-calls", title: t.voiceCalls, icon: Phone },
    { path: "/doctor/chat", title: t.chat, icon: MessageCircle },
    { path: "/doctor/patient-records", title: t.patientRecords, icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="p-6 max-w-6xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">{t.dashboard}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s) => (
            <Link key={s.path} to={s.path}>
              <Card className="cursor-pointer hover:shadow-lg transition">
                <div className="flex flex-col items-center justify-center py-6">
                  <s.icon className="h-10 w-10 text-primary mb-3" />
                  <div className="font-semibold text-lg">{s.title}</div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
