"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { projects, PortfolioProject } from "@/data/portfolio";

interface PortfolioProps {
  isVisible: boolean;
}

export default function Portfolio({ isVisible }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState("*");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isotopeRef = useRef<any>(null);
  const lightboxRef = useRef<any>(null);

  useEffect(() => {
    if (!isVisible) return;

    const initIsotope = async () => {
      const Isotope = (await import("isotope-layout")).default;
      if (isotopeRef.current) {
        isotopeRef.current.reloadItems();
        isotopeRef.current.layout();
        return;
      }
      if (containerRef.current) {
        isotopeRef.current = new Isotope(containerRef.current, {
          itemSelector: ".portfolio-item",
          layoutMode: "fitRows",
        });
      }
    };

    const initLightbox = async () => {
      const GLightbox = (await import("glightbox")).default;
      if (lightboxRef.current) {
        lightboxRef.current.destroy();
      }
      lightboxRef.current = GLightbox({
        selector: ".portfolio-lightbox",
      });
    };

    setTimeout(() => {
      initIsotope();
      initLightbox();
    }, 100);
  }, [isVisible]);

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    if (isotopeRef.current) {
      isotopeRef.current.arrange({ filter: filter });
    }
  };

  return (
    <section
      id="portfolio"
      className={`portfolio${isVisible ? " section-show" : ""}`}
    >
      <div className="container">
        <div className="section-title">
          <h2>ポートフォリオ</h2>
          <p>実績紹介</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              {[
                { filter: "*", label: "すべて" },
                { filter: ".filter-app", label: "アプリ" },
                { filter: ".filter-web", label: "Web" },
              ].map((item) => (
                <li
                  key={item.filter}
                  data-filter={item.filter}
                  className={activeFilter === item.filter ? "filter-active" : ""}
                  onClick={() => handleFilter(item.filter)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" ref={containerRef}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 portfolio-item ${project.filterClass}`}
            >
              <div className="portfolio-wrap" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", width: "100%", paddingTop: "66.67%" }}>
                  <Image
                    src={project.thumbnailImage}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover", position: "absolute", top: 0, left: 0 }}
                  />
                </div>
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <p>{project.category}</p>
                  <div className="portfolio-links">
                    <a
                      href={project.lightboxImage}
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title={project.title}
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href="#"
                      title="詳細を見る"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedProject(project);
                      }}
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Detail Modal */}
      {selectedProject && createPortal(
        <div
          className="portfolio-modal-overlay"
          onClick={() => setSelectedProject(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.8)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(30, 30, 30, 0.92)",
              backdropFilter: "blur(12px)",
              borderRadius: "12px",
              maxWidth: "90vw",
              width: "100%",
              height: "85vh",
              overflow: "auto",
              position: "relative",
              display: "flex",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "12px",
                right: "16px",
                background: "none",
                border: "none",
                fontSize: "28px",
                cursor: "pointer",
                color: "#ccc",
                zIndex: 1,
                lineHeight: 1,
              }}
            >
              &times;
            </button>

            <div style={{ flex: "1 1 70%", minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", background: "rgba(0, 0, 0, 0.3)", borderRadius: "12px 0 0 12px" }}>
              <Image
                src={selectedProject.thumbnailImage}
                alt={selectedProject.title}
                width={800}
                height={500}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </div>

            <div style={{ flex: "1 1 30%", padding: "32px 28px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ margin: "0 0 8px", fontSize: "22px", color: "#fff" }}>
                {selectedProject.title}
              </h3>
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(0, 120, 168, 0.2)",
                  color: "#5bc0de",
                  padding: "2px 10px",
                  borderRadius: "4px",
                  fontSize: "13px",
                  marginBottom: "12px",
                  width: "fit-content",
                }}
              >
                {selectedProject.category}
              </span>
              <p style={{ color: "#bbb", lineHeight: 1.7 }}>
                {selectedProject.description}
              </p>
              {selectedProject.projectUrl && (
                <a
                  href={selectedProject.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#5bc0de" }}
                >
                  プロジェクトURLを開く &rarr;
                </a>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
