import { Instagram, Linkedin, Mail } from "lucide-react";

const imdbIcon = (
  <div className="w-8 h-8 rounded-sm bg-gray-900 flex items-center justify-center p-0.5 shadow-sm">
    <span className="text-white text-[10px] font-black leading-none tracking-tight">IMDb</span>
  </div>
);

const actorsAccessIcon = (
  <div className="w-8 h-8 rounded-full border border-gray-900 flex items-center justify-center p-0.5 overflow-hidden transition-all">
    <span className="text-[6px] font-black leading-[1.1] text-center uppercase tracking-tighter">
      Actors<br/>Access
    </span>
  </div>
);

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 text-center">
      <div className="flex justify-center items-center gap-6 md:gap-8">
        <a 
          href="https://www.imdb.com/name/nm6025384/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 transition-transform hover:scale-110 text-gray-900"
          title="IMDb"
        >
          {imdbIcon}
        </a>
        <a 
          href="https://www.instagram.com/jackiehdanna/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 transition-transform hover:scale-110 text-gray-900"
          title="Instagram"
        >
          <Instagram size={24} />
        </a>
        <a 
          href="https://www.linkedin.com/in/jackiedanna/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 transition-transform hover:scale-110 text-gray-900"
          title="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a 
          href="https://resumes.actorsaccess.com/jackiedanna" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group p-2 transition-transform hover:scale-110 text-gray-900"
          title="Actors Access"
        >
          {actorsAccessIcon}
        </a>
        <a 
          href="mailto:contact@jackiedanna.com" 
          className="p-2 transition-transform hover:scale-110 text-gray-900"
          title="Email"
        >
          <Mail size={24} />
        </a>
      </div>
      <div className="pt-8 text-xs text-gray-600 tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Jackie D'Anna. All Rights Reserved.
      </div>
    </footer>
  );
}