// src/components/patient/sections/Tutorials.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import NavBar from "../../common/NavBar";
import { useLanguage } from "../../../context/LanguageContext";

export default function Tutorials() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="p-6 max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/patient")}
          className="flex items-center gap-2 text-sm text-primary hover:underline mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.dashboard}
        </button>

        <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <BookOpen className="h-6 w-6 text-primary" />
          {t.tutorials}
        </h1>

        <div className="bg-card rounded-xl p-6 shadow">
          <p className="text-muted-foreground">
            {t.tutorials} section content goes here.
          </p>
        </div>
      </main>
    </div>
  );
}
