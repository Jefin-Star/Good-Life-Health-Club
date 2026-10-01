import React, { useState } from 'react';
import exactLogoImg from '../assets/images/329599999_6063375913719232_2146873118829007155_n.jpg';

export const GoodLifeLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => {
  return (
    <svg 
      viewBox="0 0 500 500" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Good Life Health Club Emblem"
    >
      <defs>
        <linearGradient id="mintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      <rect width="500" height="500" rx="36" fill="#000000" />

      <g transform="translate(10, 10)">
        {/* Top-Left Outer Mint Arc */}
        <path
          d="M295 85 C220 80 145 110 98 160 C55 205 32 268 34 330 C35 338 38 348 43 352 C47 355 55 356 60 351 C80 332 95 309 103 283 C111 260 112 238 116 216 C126 178 156 142 193 123 C226 107 265 102 301 110 C309 112 316 107 315 100 C314 92 305 88 295 85 Z"
          fill="url(#mintGrad)"
        />

        {/* Top-Right Golden Yellow Arc */}
        <path
          d="M172 140 C205 112 255 100 298 106 C356 116 410 158 434 213 C454 255 449 308 426 350 C413 374 394 395 371 411 C363 416 355 412 358 403 C379 360 390 308 382 260 C375 221 352 184 320 160 C289 137 248 129 209 134 C191 136 169 137 156 129 C151 126 161 120 172 140 Z"
          fill="url(#goldGrad)"
        />

        {/* Mint Green Athletic Leaping Figure */}
        <circle cx="218" cy="192" r="30" fill="url(#mintGrad)" />
        <path
          d="M218 226 C208 231 187 242 172 239 C153 234 140 218 133 200 C130 192 122 195 125 202 C137 229 156 256 180 271 C190 277 200 282 203 293 C208 304 203 319 193 330 C174 354 148 370 120 384 C114 387 117 395 124 394 C158 384 190 366 214 342 C229 326 238 305 243 283 C246 270 246 256 251 243 C259 226 275 211 291 202 C299 197 307 192 315 187 C320 184 317 178 310 179 C288 187 264 202 248 219 C240 227 231 230 218 226 Z"
          fill="url(#mintGrad)"
        />
        <path
          d="M168 342 C181 360 189 379 200 398 C205 405 215 401 213 393 C207 372 196 353 181 336 C176 331 165 336 168 342 Z"
          fill="url(#mintGrad)"
        />

        {/* Golden Yellow Companion Figure with Long Sweeping Tail */}
        <circle cx="272" cy="250" r="28" fill="url(#goldGrad)" />
        <path
          d="M274 282 C256 288 238 296 221 295 C206 293 196 282 190 271 C185 263 175 266 180 274 C195 301 216 322 242 336 C252 341 262 347 267 358 C272 371 262 387 248 401 C221 428 181 447 142 457 C136 459 138 467 144 465 C194 454 242 427 274 390 C290 371 301 347 306 322 C309 306 319 292 332 282 C347 269 363 259 379 248 C387 243 385 234 377 237 C348 248 322 264 303 285 C295 291 286 290 274 282 Z"
          fill="url(#goldGrad)"
        />

        {/* Bottom Mint Arc Swoop */}
        <path
          d="M248 427 C287 425 330 425 364 407 C387 396 408 377 424 356 C429 350 422 344 417 348 C396 370 370 388 341 398 C310 407 276 409 244 406 C236 404 235 416 241 419 C243 425 245 427 248 427 Z"
          fill="url(#mintGrad)"
        />
      </g>
    </svg>
  );
};

interface GymLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showTagline?: boolean;
  iconOnly?: boolean;
}

export const GymLogo: React.FC<GymLogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true,
  showTagline = false,
  iconOnly = false,
}) => {
  const [useFallback, setUseFallback] = useState(false);

  const iconContainerSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-2xl',
  };

  const iconElement = (
    <div className={`relative shrink-0 flex items-center justify-center p-0.5 rounded-xl bg-black border border-neutral-700/80 shadow-md overflow-hidden ${iconContainerSizes[size]}`}>
      {!useFallback ? (
        <img
          src={exactLogoImg}
          alt="Good Life Health Club Official Logo"
          className="w-full h-full object-contain"
          onError={() => setUseFallback(true)}
        />
      ) : (
        <GoodLifeLogoIcon className="w-full h-full object-contain" />
      )}
    </div>
  );

  if (iconOnly) {
    return iconElement;
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {iconElement}

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-extrabold tracking-wider uppercase text-white font-display ${textSizes[size]}`}>
              GOOD LIFE
            </span>
            <span className="text-[#f6c343] font-bold text-xs tracking-widest uppercase">
              HC
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-emerald-400 font-semibold mt-1">
            Health Club
          </span>
          {showTagline && (
            <span className="text-[11px] text-[#f6c343]/90 italic mt-0.5">
              Build Your Strength
            </span>
          )}
        </div>
      )}
    </div>
  );
};
