export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="mb-4 text-sm font-mono uppercase tracking-wider">Rhasaun Campbell</h4>
            <p className="text-sm opacity-80 leading-relaxed max-w-xs">
              Product designer and architect specializing in enterprise software systems.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-mono uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm font-mono">
              <li><a href="#work" className="opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2"><span>[01]</span> Selected Work</a></li>
              <li><a href="#how" className="opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2"><span>[02]</span> How I Work</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2"><span>[03]</span> Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-mono uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm font-mono">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">LinkedIn</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Twitter</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-xs font-mono opacity-60 flex justify-between uppercase tracking-wider">
          <span>© 2026 Rhasaun Campbell</span>
          <span>[ RELEASE: V3.0.1 ]</span>
        </div>
      </div>
    </footer>
  );
}