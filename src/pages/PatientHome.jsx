// src/pages/PatientHome.jsx
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import {
  ShieldPlus,
  BookOpen,
  Brain,
  Stethoscope,
  Lock,
  AlertTriangle,
} from "lucide-react";
import Card from "../components/common/Card";
import { useLanguage } from "../context/LanguageContext";

export default function PatientHome() {
  const { t } = useLanguage();

  const sections = [
    { path: "/patient/smart-health", title: t.smartHealth, icon: ShieldPlus },
    { path: "/patient/tutorials", title: t.tutorials, icon: BookOpen },
    { path: "/patient/symptom-checker", title: t.aiSymptomChecker, icon: Brain },
    { path: "/patient/consult-doctor", title: t.consultDoctor, icon: Stethoscope },
    { path: "/patient/biolocker", title: t.biolocker, icon: Lock },
    { path: "/patient/emergency-sos", title: t.emergencySOS, icon: AlertTriangle },
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
