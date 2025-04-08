'use client';
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Magic = () => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
    navigator.clipboard.writeText(animatedGradientCSS);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">
        Some CSS stuff
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border border-white/20">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">🌈 Animated Gradient</h2>
            <p className="text-sm mb-4 text-gray-300">
              <code>@keyframes</code> magic...
            </p>
            <div className="h-32 rounded-lg mb-4 background-animated" />
            <Button
              variant="outline"
              onClick={handleClick}
              className={`text-sm transition-transform duration-150 ${clicked ? 'scale-90' : 'scale-100'}`}
            >
              Copy this magnificent CSS
            </Button>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        .background-animated {
          background: linear-gradient(270deg, #ff8a00, #e52e71, #9b00ff);
          background-size: 600% 600%;
          animation: gradientShift 10s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

const animatedGradientCSS = `
.background-animated {
  background: linear-gradient(270deg, #ff8a00, #e52e71, #9b00ff);
  background-size: 600% 600%;
  animation: gradientShift 10s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`;

export default Magic;
