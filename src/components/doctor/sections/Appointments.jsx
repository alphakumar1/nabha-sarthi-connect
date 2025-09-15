// src/components/doctor/sections/Appointments.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import NavBar from "../../common/NavBar";
import { useLanguage } from "../../../context/LanguageContext";

export default function Appointments() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="p-6 max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/doctor")}
          className="flex items-center gap-2 text-sm text-primary hover:underline mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.dashboard}
        </button>

        {/* Title */}
        <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <Calendar className="h-6 w-6 text-primary" />
          {t.appointments}
        </h1>

        <div className="bg-card rounded-xl p-6 shadow">
          <p className="text-muted-foreground">
            {t.appointments} section content goes here.
          </p>
        </div>
      </main>
    </div>
  );
}
