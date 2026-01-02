export function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Center Identification */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 font-mono text-xs tracking-wider hidden md:block mix-blend-difference text-primary uppercase">
        [ RHASAUN CAMPBELL ]
      </div>

      {/* Top Right Menu/Action */}
      <header className="fixed top-8 right-8 z-50 mix-blend-difference text-primary">
        <button
          onClick={scrollToContact}
          className="group flex items-center gap-2 font-mono text-xs tracking-wider uppercase hover:opacity-70 transition-opacity"
        >
          <span>Contact</span>
          <span className="group-hover:rotate-45 transition-transform duration-300">[+]</span>
        </button>
      </header>
    </>
  );
}