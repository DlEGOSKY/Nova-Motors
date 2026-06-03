export function cSVG(ac, bc, w = 300, h = 150) {
  const id = 'g' + ac.replace(/[^a-z0-9]/gi, '');
  return `<svg width="${w}" height="${h}" viewBox="0 0 300 150" fill="none">
    <defs>
      <linearGradient id="${id}" x1="0" y1="55" x2="0" y2="135" gradientUnits="userSpaceOnUse">
        <stop stop-color="${bc}"/>
        <stop offset="1" stop-color="${bc}" stop-opacity=".3"/>
      </linearGradient>
    </defs>
    <ellipse cx="150" cy="138" rx="110" ry="8" fill="${ac}" fill-opacity=".07"/>
    <path d="M35 120 L52 84 L88 62 L140 52 L188 52 L232 64 L262 86 L268 120Z" fill="url(#${id})" stroke="${ac}" stroke-width="1.4" stroke-opacity=".7"/>
    <path d="M93 62 L114 40 L188 37 L214 62Z" fill="${bc}" stroke="${ac}" stroke-width="1.1" stroke-opacity=".5"/>
    <path d="M100 60 L118 42 L158 39 L158 60Z" fill="${ac}" fill-opacity=".1" stroke="${ac}" stroke-width=".7" stroke-opacity=".6"/>
    <path d="M163 39 L188 39 L206 60 L163 60Z" fill="${ac}" fill-opacity=".1" stroke="${ac}" stroke-width=".7" stroke-opacity=".6"/>
    <circle cx="88" cy="122" r="22" fill="#050508" stroke="${ac}" stroke-opacity=".5" stroke-width="1.3"/>
    <circle cx="88" cy="122" r="15" fill="#0A0C14" stroke="${ac}" stroke-opacity=".7" stroke-width="1.1"/>
    <circle cx="88" cy="122" r="6" fill="${ac}" fill-opacity=".25"/>
    <circle cx="224" cy="122" r="22" fill="#050508" stroke="${ac}" stroke-opacity=".5" stroke-width="1.3"/>
    <circle cx="224" cy="122" r="15" fill="#0A0C14" stroke="${ac}" stroke-opacity=".7" stroke-width="1.1"/>
    <circle cx="224" cy="122" r="6" fill="${ac}" fill-opacity=".25"/>
    <ellipse cx="265" cy="93" rx="7" ry="4" fill="${ac}" opacity=".9"/>
    <ellipse cx="38" cy="96" rx="5" ry="3" fill="rgba(255,200,0,.65)"/>
  </svg>`;
}
