// src/components/patient/sections/Tutorials.jsx
import React from 'react';
import { BookOpen, Play } from 'lucide-react';
import Card from '../../common/Card';
import { useLanguage } from '../../../context/LanguageContext';

export default function Tutorials({ tutorials = [] }) {
  const { t } = useLanguage();

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <BookOpen className="h-8 w-8 text-secondary" />
        <h2 className="text-2xl font-bold">{t.tutorials}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tutorials.map(tut => (
          <Card key={tut.id} className="flex flex-col">
            <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
              <Play className="h-12 w-12 text-primary" />
            </div>
            <h3 className="font-semibold">{tut.title}</h3>
            <div className="text-sm text-muted-foreground mt-1">{tut.duration}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
