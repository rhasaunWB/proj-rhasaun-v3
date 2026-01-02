import React from 'react';

interface TechnicalLayoutProps {
  children: React.ReactNode;
}

export function TechnicalLayout({ children }: TechnicalLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-700">
      {/* Grid Background - Elevated to overlay sticky sections */}
      <div
        className="fixed inset-0 pointer-events-none z-20 opacity-[0.1] [.light_&]:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 md:pt-0">
        {children}
      </div>
    </div>
  );
}
