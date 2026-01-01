"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Fun facts about Gumugumu (made up for the joke)
const gumugmuFacts = [
  "Low Key had low hope some of you were seeing this year",
  "I think it's too late 2027 my year fr",
  "Are we going for Nana's or Mbuzi when we meet up?",
  "New Semster starting soon. Wish you a good hunting",
  "Or maybe he's a chameleon idk",
];

// Confetti component
function Confetti({ key: confettiKey }) {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const colors = ["#ff8906", "#f25f4c", "#e53170", "#4ecdc4", "#7f5af0", "#ffd700"];
    const newConfetti = [];

    for (let i = 0; i < 100; i++) {
      newConfetti.push({
        id: `${confettiKey}-${i}`,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 8,
        rotation: Math.random() * 360,
      });
    }
    setConfetti(newConfetti);
  }, [confettiKey]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((c) => (
        <div
          key={c.id}
          className="confetti"
          style={{
            left: `${c.left}%`,
            width: `${c.size}px`,
            height: `${c.size}px`,
            backgroundColor: c.color,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            transform: `rotate(${c.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}

// Floating particles in background
function ParticleBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 10,
        opacity: 0.2 + Math.random() * 0.5,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `radial-gradient(circle, rgba(255,137,6,${p.opacity}) 0%, transparent 70%)`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

// Stars in background
function StarsBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 50; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 60,
        size: 1 + Math.random() * 2,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3,
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: "#fff",
            borderRadius: "50%",
            animation: `twinkle ${s.duration}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}



// Countdown or New Year message
function NewYearMessage() {
  return (
    <div className="text-center slide-up slide-up-delay-2">
      <div className="text-8xl md:text-9xl font-bold mb-4">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          2026
        </span>
      </div>
      <div className="text-2xl md:text-3xl text-orange-300 font-light tracking-widest">
        HAPPY NEW YEAR
      </div>
    </div>
  );
}

// Main message component
function MainMessage() {
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % gumugmuFacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center slide-up slide-up-delay-3">
      {/* Ba Gumugumu Header */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 glow-text">
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text ">
          Ba Gumugumu!
        </span>
      </h1>

      {/* Decorative line */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        <span className="text-3xl">🦎</span>
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      </div>

      {/* Happy New Year */}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 glow-text-subtle">
        Happy New Year! 🎉
      </h2>

      {/* The definitive statement */}
      <div className="relative">
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 leading-relaxed">
          And nah... Rango is{" "}
          <span className="relative inline-block">
            <span className="font-black text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-3xl md:text-4xl lg:text-5xl">
              DEFINITELY
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full" />
          </span>{" "}
          <br className="md:hidden" />
          a{" "}
          <span className="font-black text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-3xl md:text-4xl lg:text-5xl animate-pulse">
            Gumugumu
          </span>{" "}
          🦎
        </p>
      </div>

      {/* Rotating fun facts */}
      <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
        <p className="text-lg text-orange-200 italic transition-all duration-500">
          &ldquo;{gumugmuFacts[currentFact]}&rdquo;
        </p>
      </div>

      {/* Not a chameleon badge */}
      <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30">
        <span className="text-red-400 text-lg">❌</span>
        <span className="text-gray-300 line-through">Chameleon</span>
        <span className="text-green-400 text-lg">✓</span>
        <span className="text-white font-bold">Gumugumu</span>
      </div>
    </div>
  );
}

// 2025 Wrapped Stats Data - Fill these in later!
const wrappedStats = [
  {
    id: 1,
    title: "Times We Debated Rango's Species",
    stat: "∞",
    subtitle: "And counting...",
    emoji: "🦎",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    title: "Messages in Group Chat",
    stat: "10,000+",
    subtitle: "Mostly memes tbh",
    emoji: "💬",
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    id: 3,
    title: "Times Someone Said 'Ba Gumugumu'",
    stat: "247",
    subtitle: "Not enough honestly",
    emoji: "🎉",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    id: 4,
    title: "Hours Spent Together",
    stat: "500+",
    subtitle: "Quality time with the squad",
    emoji: "⏰",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: 5,
    title: "Inside Jokes Created",
    stat: "42",
    subtitle: "The meaning of friendship",
    emoji: "😂",
    gradient: "from-green-400 to-teal-500",
  },
  {
    id: 6,
    title: "Nana's or Mbuzi Debates",
    stat: "69",
    subtitle: "Nice.",
    emoji: "🍖",
    gradient: "from-red-500 to-pink-500",
  },
];

// 2025 Wrapped Carousel Component
function WrappedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % wrappedStats.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % wrappedStats.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + wrappedStats.length) % wrappedStats.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentStat = wrappedStats[currentSlide];

  return (
    <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            ✨ 2025 Wrapped ✨
          </span>
        </h2>
        <p className="text-gray-400">Our year in numbers</p>
      </div>

      {/* Carousel Content */}
      <div className="relative min-h-[280px] flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all text-white"
        >
          ←
        </button>

        {/* Slide Content */}
        <div
          className="w-full px-12 transition-all duration-500 ease-out"
          key={currentStat.id}
        >
          <div className="text-6xl mb-4">{currentStat.emoji}</div>
          <h3 className="text-xl md:text-2xl text-gray-300 mb-4">
            {currentStat.title}
          </h3>
          <div
            className={`text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r ${currentStat.gradient} bg-clip-text text-transparent animate-pulse`}
          >
            {currentStat.stat}
          </div>
          <p className="text-lg text-gray-400 italic">
            {currentStat.subtitle}
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all text-white"
        >
          →
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {wrappedStats.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? "bg-gradient-to-r from-orange-500 to-pink-500 w-8"
              : "bg-white/20 hover:bg-white/40"
              }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="mt-4 text-sm text-gray-500">
        {currentSlide + 1} / {wrappedStats.length}
      </div>
    </div>
  );
}

// Messages Section Component
function MessagesSection() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Fetch messages on mount
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/messages");
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });

      if (response.ok) {
        const newMessage = await response.json();
        setMessages((prev) => [newMessage, ...prev]);
        setName("");
        setMessage("");
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Failed to submit message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto mt-12 slide-up slide-up-delay-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
        <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          Leave a Message 💬
        </span>
      </h2>
      <p className="text-gray-400 text-center mb-8">
        Leave something for the board?
      </p>

      {/* Message Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Who dis?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50}
            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
          />
        </div>
        <textarea
          placeholder="Your message... "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none mb-4"
        />
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-sm">{message.length}/500</span>
          <button
            type="submit"
            disabled={isSubmitting || !name.trim() || !message.trim()}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? "Sending... 🦎" : "Send Message 🎊"}
          </button>
        </div>
      </form>

      {/* Success message */}
      {showSuccess && (
        <div className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-center animate-pulse">
          ✨ Message sent successfull
        </div>
      )}

      {/* Messages List */}
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <span className="text-4xl mb-2 block">🦎</span>
            No messages yet. Be the first to leave one!
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🦎</span>
                  <span className="font-semibold text-orange-300">
                    {msg.name}
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  {formatTime(msg.timestamp)}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">{msg.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// Desert landscape SVG
function DesertLandscape() {
  return (
    <div className="fixed bottom-0 left-0 right-0 pointer-events-none">
      <svg
        viewBox="0 0 1440 200"
        className="w-full h-auto opacity-30"
        preserveAspectRatio="none"
      >
        {/* Back dunes */}
        <path
          d="M0 200 Q 200 100 400 150 Q 600 80 800 140 Q 1000 60 1200 130 Q 1400 90 1440 150 L 1440 200 Z"
          fill="url(#duneGradient1)"
        />
        {/* Front dunes */}
        <path
          d="M0 200 Q 150 140 300 170 Q 500 120 700 160 Q 900 100 1100 150 Q 1300 120 1440 160 L 1440 200 Z"
          fill="url(#duneGradient2)"
        />
        {/* Cactus silhouettes */}
        <g fill="#1a1a2e">
          {/* Cactus 1 */}
          <path d="M100 170 L100 130 Q100 115 110 115 L115 115 L115 125 L110 125 L110 170 Z" />
          <path d="M90 145 Q85 145 85 140 L85 135 Q85 130 90 130 L100 130 L100 145 Z" />

          {/* Cactus 2 */}
          <path d="M1300 175 L1300 120 Q1300 105 1310 105 L1320 105 Q1330 105 1330 120 L1330 175 Z" />
          <path d="M1280 140 Q1280 135 1285 135 L1300 135 L1300 155 L1285 155 Q1280 155 1280 150 Z" />
          <path d="M1330 150 L1345 150 Q1350 150 1350 155 L1350 160 Q1350 165 1345 165 L1330 165 Z" />
        </g>

        <defs>
          <linearGradient id="duneGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2d1f0f" />
            <stop offset="100%" stopColor="#1a1a2e" />
          </linearGradient>
          <linearGradient id="duneGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3d2a14" />
            <stop offset="100%" stopColor="#1a1a2e" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Sun/Moon decoration
function CelestialBody() {
  return (
    <div className="fixed top-10 right-10 md:top-20 md:right-20 pointer-events-none">
      <div className="relative">
        {/* Glow */}
        <div
          className="absolute inset-0 -m-10 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, #ff8906 0%, transparent 70%)",
            width: "150px",
            height: "150px",
            animation: "pulse-glow 4s ease-in-out infinite",
          }}
        />
        {/* Sun/Moon */}
        <div
          className="w-20 h-20 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, #ffd700 0%, #ff8906 50%, #ff6b35 100%)",
            boxShadow: "0 0 60px rgba(255, 137, 6, 0.6)",
          }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const [confettiKey, setConfettiKey] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Auto-trigger confetti every 10 seconds
    const confettiInterval = setInterval(() => {
      setConfettiKey((prev) => prev + 1);
      setShowConfetti(true);

      // Hide confetti after 8 seconds
      setTimeout(() => setShowConfetti(false), 8000);
    }, 10000);

    // Initial confetti hide after 8 seconds
    const initialHide = setTimeout(() => setShowConfetti(false), 8000);

    return () => {
      clearInterval(confettiInterval);
      clearTimeout(initialHide);
    };
  }, []);

  return (
    <div className="gradient-bg min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <StarsBackground />
      <ParticleBackground />
      <DesertLandscape />
      <CelestialBody />

      {/* Confetti celebration - auto triggers every 10 seconds */}
      {showConfetti && <Confetti key={confettiKey} />}

      {/* Main content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 md:p-12 pb-32 gap-16 md:gap-12">
        {/* Gumugumu illustration */}
        <div className="slide-up slide-up-delay-1 flex flex-col items-center gap-8">
          <Image
            src="/rango.png"
            alt="Rango"
            width={300}
            height={300}
            className="w-48 h-auto md:w-72  drop-shadow-2xl"
            priority
          />
          {/* Year display - grouped with image for better flow */}
          <NewYearMessage />
        </div>

        {/* Main message card */}
        <div className="w-full max-w-4xl">
          <MainMessage />
        </div>

        {/* Messages Section */}
        <div className="w-full max-w-4xl">
          <MessagesSection />
        </div>
      </main>

      {/* Decorative side elements */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 text-6xl opacity-20 hidden lg:block">
        🦎
      </div>
      <div className="fixed right-4 top-1/2 -translate-y-1/2 text-6xl opacity-20 hidden lg:block">
        🦎
      </div>
    </div>
  );
}
