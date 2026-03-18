"use client";

import { useState } from "react";

interface HeaderProps {
  activeSection: string | null;
  onSectionChange: (section: string | null) => void;
}

const navLinks = [
  { id: "header", label: "ホーム" },
  { id: "about", label: "自己紹介" },
  { id: "resume", label: "職務経歴" },
  { id: "portfolio", label: "実績" },
  { id: "contact", label: "お問い合わせ" },
];

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleNavClick = (id: string) => {
    if (id === "header") {
      onSectionChange(null);
    } else {
      onSectionChange(id);
    }
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getActiveId = () => {
    return activeSection === null ? "header" : activeSection;
  };

  return (
    <header id="header" className={activeSection !== null ? "header-top" : ""}>
      <div className="container">
        <h1>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("header");
            }}
          >
            ジュリアン・モク
          </a>
        </h1>
        <h2>
          私は<span>フルスタックエンジニア</span>です
        </h2>

        <nav id="navbar" className={`navbar${mobileNavOpen ? " navbar-mobile" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className={`nav-link${getActiveId() === link.id ? " active" : ""}`}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <i
            className={`bi ${mobileNavOpen ? "bi-x" : "bi-list"} mobile-nav-toggle`}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          ></i>
        </nav>

      </div>
    </header>
  );
}
