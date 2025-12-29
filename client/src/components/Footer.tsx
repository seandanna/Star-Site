import { Instagram, Linkedin, Mail } from "lucide-react";

const imdbIcon = (
  <svg viewBox="0 0 448 512" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.3 229.2H21c.1-.1.2-.3.3-.4zM97 319V192h20.2v127H97zm44.8 0V192h21l13.6 57.1h.4l13.8-57.1h21v127h-18.7v-90.8h-.4l-14.7 90.8h-15.5l-14.7-90.8h-.4V319h-18.7zM261 192h30.2c19.3 0 30.2 11.5 30.2 29.8v67.5c0 18.2-10.9 29.7-30.2 29.7H261V192zm20.2 110.3h10c9.1 0 10.1-4.1 10.1-12.7v-67.5c0-8.6-1-12.7-10.1-12.7h-10v92.9zm101.4 16.7h-10c-9.1 0-10.1-4.1-10.1-12.7v-67.5c0-8.6 1-12.7 10.1-12.7h10c9.1 0 10.1 4.1 10.1 12.7v67.5c0 8.6-1 12.7-10.1 12.7zm-20.2-110.3h30.2c19.3 0 30.2 11.5 30.2 29.8v67.5c0 18.2-10.9 29.7-30.2 29.7h-30.2V192zm20.2 110.3h10c9.1 0 10.1-4.1 10.1-12.7v-67.5c0-8.6-1-12.7-10.1-12.7h-10v92.9z"/>
  </svg>
);

const actorsAccessIcon = (
  <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center p-1 overflow-hidden transition-all group-hover:bg-gray-900 group-hover:text-white">
    <span className="text-[7px] font-black leading-[1.1] text-center uppercase tracking-tighter">
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