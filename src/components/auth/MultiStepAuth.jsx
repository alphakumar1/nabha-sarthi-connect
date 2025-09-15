// src/components/auth/MultiStepAuth.jsx
import React, { useState } from "react";
import { Globe, UserCircle, Stethoscope, Lock, ArrowLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useAuth } from "../../context/AuthContext";
import Input from "../common/Input";
import Button from "../common/Button";

export default function MultiStepAuth() {
  const { t, setLang } = useLanguage();
  const { login } = useAuth();

  const steps = ["language", "role", "details"];
  const [stepIndex, setStepIndex] = useState(0);

  const [selectedLang, setSelectedLang] = useState("en");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const currentStep = steps[stepIndex];

  const next = () => {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
    else login({ name, role, phone });
  };
  const back = () => setStepIndex(Math.max(0, stepIndex - 1));

  const selectLanguage = (code) => {
    setSelectedLang(code);
    setLang(code);
    next(); // auto advance
  };
  const selectRole = (r) => {
    setRole(r);
    next(); // auto advance
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 relative">
        {/* logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="App Logo" className="h-14 w-auto" />
        </div>

        {/* progress */}
        <div className="flex gap-2 mb-8">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1.5 rounded-full transition-all ${
                i <= stepIndex
                  ? "bg-gradient-to-r from-primary to-secondary"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* back button (not in details) */}
        {stepIndex > 0 && (
          <button
            onClick={back}
            className="absolute top-4 left-4 text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        )}

        {/* step content */}
        <div className="space-y-6">
          {/* language */}
          {currentStep === "language" && (
            <>
              <h2 className="text-lg font-semibold text-center flex items-center justify-center gap-2">
                <Globe className="h-5 w-5 text-primary" /> {t.selectLanguage}
              </h2>
              <div className="flex justify-center gap-4">
                {[
                  { code: "en", label: "English", flag: "🇬🇧" },
                  { code: "hi", label: "हिंदी", flag: "🇮🇳" },
                  { code: "pb", label: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
                ].map((l) => (
                  <button
                    key={l.code}
                    onClick={() => selectLanguage(l.code)}
                    className={`flex flex-col items-center p-3 rounded-xl border-2 transition ${
                      selectedLang === l.code
                        ? "border-transparent bg-gradient-to-br from-primary to-secondary text-white shadow-md"
                        : "border-muted hover:border-primary/50"
                    }`}
                  >
                    <span className="text-2xl">{l.flag}</span>
                    <span className="mt-1 text-sm font-medium">{l.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* role */}
          {currentStep === "role" && (
            <>
              <h2 className="text-lg font-semibold text-center flex items-center justify-center gap-2">
                <UserCircle className="h-5 w-5 text-secondary" /> {t.selectRole}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => selectRole("patient")}
                  className={`p-5 rounded-xl flex flex-col items-center gap-2 transition ${
                    role === "patient"
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                      : "bg-muted hover:bg-primary/10"
                  }`}
                >
                  <UserCircle className="h-7 w-7" />
                  <span>{t.patient}</span>
                </button>
                <button
                  onClick={() => selectRole("doctor")}
                  className={`p-5 rounded-xl flex flex-col items-center gap-2 transition ${
                    role === "doctor"
                      ? "bg-gradient-to-r from-secondary to-primary text-white shadow-md"
                      : "bg-muted hover:bg-secondary/10"
                  }`}
                >
                  <Stethoscope className="h-7 w-7" />
                  <span>{t.doctor}</span>
                </button>
              </div>
            </>
          )}

          {/* details */}
          {currentStep === "details" && (
            <>
              <h2 className="text-lg font-semibold text-center flex items-center justify-center gap-2">
                <Lock className="h-5 w-5 text-primary" /> {t.enterDetails}
              </h2>
              <Input
                label={t.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.name}
              />
              <Input
                label={t.password}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.password}
              />
              <Input
                label={t.phoneNumber || "Phone"}
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.phoneNumber || "Phone"}
              />
              <Button
                variant="primary"
                onClick={next}
                disabled={!name || !password || !phone}
                className="w-full"
              >
                {t.login}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
