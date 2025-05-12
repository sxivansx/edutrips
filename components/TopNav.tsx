"use client";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TopNav() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home", icon: <Home className="w-6 h-6 mr-2" strokeWidth={2.2} /> },
    { href: "/destination", label: "Destination" },
    { href: "/about", label: "About Us" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  const containerRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, top: 0, height: 0 });

  useLayoutEffect(() => {
    const idx = navItems.findIndex((item) => item.href === pathname);
    const el = itemRefs.current[idx];
    const container = containerRef.current;
    if (el && container) {
      setIndicator({
        left: el.offsetLeft,
        width: el.offsetWidth,
        top: el.offsetTop,
        height: el.offsetHeight,
      });
    }
  }, [pathname]);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <ul
        ref={containerRef}
        className="relative flex items-center bg-[#122233] rounded-[2.5rem] px-6 py-2.5 shadow-lg gap-4 min-w-[700px] h-[64px]"
        style={{ minHeight: 64 }}
      >
        {/* Sliding indicator with layout for transfer animation */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
          className="absolute rounded-[2rem] bg-white z-0 shadow"
          style={{
            width: indicator.width,
            height: indicator.height,
            left: indicator.left,
            top: indicator.top,
          }}
        />
        {navItems.map((item, i) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={item.href}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="relative z-10"
            >
              <Link
                href={item.href}
                className={
                  `flex items-center justify-center px-6 py-2 rounded-[2rem] font-semibold text-lg transition-colors duration-150 ` +
                  (isActive
                    ? "text-[#122233]"
                    : "text-white hover:bg-white/10")
                }
                style={{ position: "relative", zIndex: 10, fontFamily: 'var(--font-manrope)' }}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
} 