"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { PortfolioProject } from "@/data/portfolio";

interface Props {
  project: PortfolioProject;
}

export default function PortfolioDetailClient({ project }: Props) {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main">
      <div id="portfolio-details" className="portfolio-details" style={{ position: "relative", minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="portfolio-title">{project.title}</h2>

              {project.hasVideo && project.videoEmbed ? (
                <div className="portfolio-details-slider swiper">
                  <iframe
                    src={project.videoEmbed}
                    width="800"
                    height="463"
                    allow="autoplay"
                    style={{ maxWidth: "100%" }}
                  ></iframe>
                </div>
              ) : project.detailImages.length > 0 ? (
                <div className="portfolio-details-slider">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    speed={400}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                  >
                    {project.detailImages.map((img, i) => (
                      <SwiperSlide key={i}>
                        <Image
                          src={img}
                          alt={`${project.title} slide ${i + 1}`}
                          width={800}
                          height={500}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : (
                <Image
                  src={project.thumbnailImage}
                  alt={project.title}
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                />
              )}
            </div>

            <div className="col-lg-4 portfolio-info">
              <h3>プロジェクト情報</h3>
              <ul>
                {project.client && (
                  <li>
                    <strong>カテゴリ</strong>: {project.category}
                  </li>
                )}
                {project.client && (
                  <li>
                    <strong>クライアント</strong>: {project.client}
                  </li>
                )}
                {project.date && (
                  <li>
                    <strong>プロジェクト期間</strong>: {project.date}
                  </li>
                )}
                {project.projectUrl && (
                  <li>
                    <strong>プロジェクトURL</strong>:{" "}
                    <a href={project.projectUrl}>{project.projectUrl}</a>
                  </li>
                )}
              </ul>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">Julian Mok</a>
      </div>
    </main>
  );
}
