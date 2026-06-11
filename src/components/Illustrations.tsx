export const HeroShieldIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0066CC" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#05192D" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <path d="M100 20L30 55V105C30 145 60 175 100 190C140 175 170 145 170 105V55L100 20Z" fill="url(#shieldGrad)" stroke="#0066CC" strokeWidth="2" strokeOpacity="0.4"/>
    <path d="M100 50L55 72V108C55 135 72 155 100 168C128 155 145 135 145 108V72L100 50Z" fill="white" fillOpacity="0.1" stroke="#0066CC" strokeWidth="1.5" strokeOpacity="0.3"/>
    <path d="M85 100L95 110L118 87" stroke="#0066CC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="100" cy="100" r="35" stroke="#0066CC" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4"/>
    <circle cx="100" cy="100" r="50" stroke="#0066CC" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="6 6"/>
  </svg>
);

export const ShoppingIllustration = () => (
  <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="shopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#05192D" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#0066CC" stopOpacity="0.08" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="200" height="120" rx="12" fill="url(#shopGrad)"/>
    {/* Cart */}
    <rect x="60" y="50" width="80" height="60" rx="8" stroke="#05192D" strokeWidth="2" fill="white"/>
    <path d="M65 60H135" stroke="#05192D" strokeWidth="1.5" strokeOpacity="0.3"/>
    <circle cx="80" cy="100" r="6" stroke="#0066CC" strokeWidth="2" fill="white"/>
    <circle cx="120" cy="100" r="6" stroke="#0066CC" strokeWidth="2" fill="white"/>
    {/* Magnifying glass */}
    <circle cx="155" cy="70" r="20" stroke="#0066CC" strokeWidth="2.5" fill="white" fillOpacity="0.8"/>
    <line x1="168" y1="83" x2="182" y2="97" stroke="#0066CC" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="155" cy="70" r="12" stroke="#0066CC" strokeWidth="1" strokeOpacity="0.3"/>
    {/* Check */}
    <circle cx="175" cy="50" r="14" fill="#05192D"/>
    <path d="M169 50L173 54L181 46" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const InvestmentIllustration = () => (
  <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="invGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#05192D" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#0066CC" stopOpacity="0.08" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="200" height="120" rx="12" fill="url(#invGrad)"/>
    {/* Chart */}
    <polyline points="50,110 80,85 110,95 140,60 170,70 200,40" stroke="#0066CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <polyline points="50,110 80,95 110,100 140,80 170,85 200,75" stroke="#05192D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.3"/>
    {/* Shield */}
    <path d="M190 30L190 18C190 14 193 10 197 10L203 10C207 10 210 14 210 18V30C210 38 203 44 200 46C197 44 190 38 190 30Z" fill="#05192D"/>
    <path d="M197 22L199 26L205 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Data dots */}
    <circle cx="50" cy="110" r="3" fill="#05192D"/>
    <circle cx="80" cy="85" r="3" fill="#05192D"/>
    <circle cx="110" cy="95" r="3" fill="#05192D"/>
    <circle cx="140" cy="60" r="3" fill="#0066CC"/>
    <circle cx="170" cy="70" r="3" fill="#0066CC"/>
    <circle cx="200" cy="40" r="3" fill="#0066CC"/>
  </svg>
);

export const AnalysisIllustration = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
    <circle cx="40" cy="40" r="38" stroke="#05192D" strokeWidth="1" strokeOpacity="0.1" fill="#05192D" fillOpacity="0.03"/>
    <polyline points="15,55 25,40 35,48 45,30 55,35 65,20" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="25" cy="40" r="2.5" fill="#05192D"/>
    <circle cx="35" cy="48" r="2.5" fill="#05192D"/>
    <circle cx="45" cy="30" r="2.5" fill="#0066CC"/>
    <circle cx="55" cy="35" r="2.5" fill="#0066CC"/>
    <circle cx="65" cy="20" r="2.5" fill="#0066CC"/>
  </svg>
);

export const SecurityIllustration = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
    <circle cx="40" cy="40" r="38" stroke="#05192D" strokeWidth="1" strokeOpacity="0.1" fill="#05192D" fillOpacity="0.03"/>
    <path d="M40 15L20 25V40C20 52 28 62 40 68C52 62 60 52 60 40V25L40 15Z" stroke="#05192D" strokeWidth="2" fill="white" fillOpacity="0.5"/>
    <path d="M33 40L38 45L48 35" stroke="#0066CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SourcesIllustration = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
    <circle cx="40" cy="40" r="38" stroke="#05192D" strokeWidth="1" strokeOpacity="0.1" fill="#05192D" fillOpacity="0.03"/>
    <rect x="22" y="20" width="36" height="42" rx="4" stroke="#05192D" strokeWidth="2" fill="white" fillOpacity="0.5"/>
    <line x1="28" y1="30" x2="52" y2="30" stroke="#05192D" strokeWidth="1.5" strokeOpacity="0.4"/>
    <line x1="28" y1="38" x2="52" y2="38" stroke="#05192D" strokeWidth="1.5" strokeOpacity="0.3"/>
    <line x1="28" y1="46" x2="42" y2="46" stroke="#05192D" strokeWidth="1.5" strokeOpacity="0.3"/>
    <circle cx="52" cy="52" r="10" fill="#0066CC"/>
    <path d="M49 52L51 54L55 50" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StepSelectIllustration = () => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="10" y="10" width="100" height="60" rx="8" stroke="#05192D" strokeWidth="1.5" fill="white" fillOpacity="0.8"/>
    <rect x="20" y="22" width="30" height="8" rx="4" fill="#0066CC" fillOpacity="0.15" stroke="#0066CC" strokeWidth="1"/>
    <rect x="20" y="35" width="30" height="8" rx="4" stroke="#05192D" strokeWidth="1" strokeOpacity="0.3"/>
    <rect x="20" y="48" width="30" height="8" rx="4" stroke="#05192D" strokeWidth="1" strokeOpacity="0.3"/>
    <path d="M42 25L44 28L48 22" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="90" cy="40" r="12" stroke="#05192D" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3"/>
  </svg>
);

export const StepAnswerIllustration = () => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="10" y="10" width="100" height="60" rx="8" stroke="#05192D" strokeWidth="1.5" fill="white" fillOpacity="0.8"/>
    <text x="60" y="30" textAnchor="middle" fontSize="7" fill="#05192D" fontFamily="Inter, sans-serif">?</text>
    <rect x="20" y="38" width="80" height="6" rx="3" fill="#05192D" fillOpacity="0.08"/>
    <rect x="20" y="38" width="55" height="6" rx="3" fill="#0066CC" fillOpacity="0.6"/>
    <text x="60" y="60" textAnchor="middle" fontSize="5" fill="#05192D" fontFamily="Inter, sans-serif" opacity="0.5">...</text>
  </svg>
);

export const StepResultIllustration = () => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="60" cy="40" r="25" stroke="#05192D" strokeWidth="1.5" fill="white" fillOpacity="0.8"/>
    <circle cx="60" cy="40" r="20" stroke="#0066CC" strokeWidth="2" strokeDasharray="80 126" strokeLinecap="round" fill="none"/>
    <text x="60" y="43" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#05192D" fontFamily="Playfair Display, serif">A</text>
    <circle cx="95" cy="20" r="6" fill="#05192D" fillOpacity="0.1"/>
    <path d="M93 20L95 22L98 18" stroke="#05192D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
