/* Small hand-drawn "mac app icon" style glyphs — flat, self-contained
   64x64 artwork (background + glyph in one piece), inspired by the
   generic macOS app-icon vocabulary (folder, mail, notes, terminal...)
   rather than tracing Apple's actual assets. */

export const iconHome = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#2f7fe0"/>
  <polygon points="32,13 51,29 44,29 44,30 20,30 20,29 13,29" fill="#fff"/>
  <rect x="20" y="29" width="24" height="19" fill="#fff"/>
  <rect x="27" y="36" width="10" height="12" fill="#2f7fe0"/>
</svg>`;

export const iconAbout = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#eceff1"/>
  <circle cx="32" cy="25" r="10" fill="#8a919c"/>
  <path d="M14 50c0-11.5 8-18.5 18-18.5s18 7 18 18.5" fill="#8a919c"/>
</svg>`;

export const iconClock = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#fff"/>
  <circle cx="32" cy="32" r="19" fill="none" stroke="#1c1e20" stroke-width="3.2"/>
  <line x1="32" y1="32" x2="32" y2="19" stroke="#1c1e20" stroke-width="3.2" stroke-linecap="round"/>
  <line x1="32" y1="32" x2="41" y2="37" stroke="#1c1e20" stroke-width="3.2" stroke-linecap="round"/>
</svg>`;

export const iconFolder = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 22c0-2.2 1.8-4 4-4h13l5 5h26c2.2 0 4 1.8 4 4v4H6Z" fill="#5fa3ee"/>
  <path d="M6 26h52v20c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4Z" fill="#2f7fe0"/>
</svg>`;

export const iconPhotos = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#fff"/>
  <circle cx="32" cy="23" r="11" fill="#ff5a4e"/>
  <circle cx="21" cy="39" r="11" fill="#ffd23f"/>
  <circle cx="43" cy="39" r="11" fill="#2fa7e0"/>
  <circle cx="32" cy="38" r="7.5" fill="#35c76b"/>
</svg>`;

export const iconNotes = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#ffd34d"/>
  <rect x="14" y="17" width="36" height="4" fill="#fff" fill-opacity="0.92"/>
  <rect x="14" y="29" width="36" height="4" fill="#fff" fill-opacity="0.72"/>
  <rect x="14" y="41" width="22" height="4" fill="#fff" fill-opacity="0.72"/>
</svg>`;

export const iconDocument = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#fff"/>
  <path d="M19 12h18l9 9v29a2 2 0 01-2 2H19a2 2 0 01-2-2V14a2 2 0 012-2Z" fill="#e2e6e9"/>
  <path d="M37 12v9h9Z" fill="#c9cfd4"/>
  <rect x="24" y="31" width="18" height="3" fill="#9aa2a9"/>
  <rect x="24" y="39" width="18" height="3" fill="#9aa2a9"/>
  <rect x="25" y="9" width="7" height="17" fill="#e8452c"/>
</svg>`;

export const iconTerminal = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#1b1d1f"/>
  <text x="13" y="40" font-size="22" font-family="ui-monospace,SFMono-Regular,monospace" font-weight="700" fill="#3ddc6a">&gt;_</text>
</svg>`;

export const iconPencil = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#fff"/>
  <rect x="15" y="13" width="26" height="35" rx="2" fill="#eef3fb"/>
  <rect x="19" y="22" width="18" height="3" fill="#a9c0e0"/>
  <rect x="19" y="30" width="18" height="3" fill="#a9c0e0"/>
  <path d="M29 47l19-19 6 6-19 19-7 1Z" fill="#ff8a3d"/>
  <path d="M48 28l6 6-4 4-6-6Z" fill="#4f9bf0"/>
</svg>`;

export const iconCompass = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="26" fill="#fff" stroke="#e1e5e8" stroke-width="2"/>
  <polygon points="32,12 40,32 32,32" fill="#e8452c"/>
  <polygon points="32,12 24,32 32,32" fill="#c0301d"/>
  <polygon points="32,52 40,32 32,32" fill="#dfe3e6"/>
  <polygon points="32,52 24,32 32,32" fill="#c7ccd0"/>
</svg>`;

export const iconMail = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#2f7fe0"/>
  <rect x="11" y="20" width="42" height="27" rx="3" fill="#fff"/>
  <path d="M11 22l21 16 21-16" fill="none" stroke="#2f7fe0" stroke-width="3.2"/>
</svg>`;

export const iconRobotArm = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#1f8a7c"/>
  <circle cx="16" cy="48" r="5" fill="#fff"/>
  <line x1="16" y1="48" x2="30" y2="26" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
  <circle cx="30" cy="26" r="5" fill="#fff"/>
  <line x1="30" y1="26" x2="48" y2="34" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
  <circle cx="48" cy="34" r="4" fill="#fff"/>
</svg>`;

export const iconSpark = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#c2541a"/>
  <g stroke="#fff" stroke-width="4" stroke-linecap="round">
    <line x1="32" y1="14" x2="32" y2="26"/>
    <line x1="32" y1="38" x2="32" y2="50"/>
    <line x1="14" y1="32" x2="26" y2="32"/>
    <line x1="38" y1="32" x2="50" y2="32"/>
    <line x1="20" y1="20" x2="28" y2="28"/>
    <line x1="36" y1="36" x2="44" y2="44"/>
    <line x1="44" y1="20" x2="36" y2="28"/>
    <line x1="28" y1="36" x2="20" y2="44"/>
  </g>
</svg>`;

export const iconChatNode = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#2f6fb0"/>
  <path d="M14 20h36a3 3 0 013 3v16a3 3 0 01-3 3H28l-9 7v-7h-5a3 3 0 01-3-3V23a3 3 0 013-3Z" fill="#fff"/>
  <circle cx="24" cy="31" r="2.4" fill="#2f6fb0"/>
  <circle cx="32" cy="31" r="2.4" fill="#2f6fb0"/>
  <circle cx="40" cy="31" r="2.4" fill="#2f6fb0"/>
</svg>`;

export const iconLoopArrow = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#b23a74"/>
  <path d="M20 24a14 14 0 1122 16" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/>
  <polygon points="42,32 44,42 33,39" fill="#fff"/>
</svg>`;
