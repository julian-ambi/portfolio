"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface AboutProps {
  isVisible: boolean;
}

const counts = [
  { icon: "bi bi-emoji-smile", end: 132, label: "満足いただいたお客様" },
  { icon: "bi bi-journal-richtext", end: 51, label: "プロジェクト" },
  { icon: "bi bi-headset", end: 1463, label: "サポート時間" },
  { icon: "bi bi-award", end: 24, label: "受賞歴" },
];

const skillsLeft = [
  { name: "PHP / Laravel", value: 100 },
  { name: "Ruby on Rails", value: 100 },
  { name: "Node.js", value: 100 },
  { name: "Python / FastAPI", value: 100 },
  { name: "Go", value: 100 },
  { name: "React / Next.js", value: 100 },
];

const skillsCenter = [
  { name: "AWS", value: 100 },
  { name: "GCP", value: 100 },
  { name: "LangChain", value: 100 },
  { name: "DifyAI", value: 100 },
  { name: "MySQL", value: 100 },
  { name: "PostgreSQL", value: 100 },
];

const skillsRight = [
  { name: "Redis", value: 100 },
  { name: "Git", value: 100 },
  { name: "Docker", value: 100 },
  { name: "Jira", value: 100 },
  { name: "Slack", value: 100 },
  { name: "Notion", value: 100 },
];

const interests = [
  { icon: "ri-store-line", color: "#ffbb2c", name: "Web開発" },
  { icon: "ri-bar-chart-box-line", color: "#5578ff", name: "Webデザイン" },
  {
    icon: "ri-calendar-todo-line",
    color: "#e80368",
    name: "バックエンド開発",
  },
  { icon: "ri-paint-brush-line", color: "#e361ff", name: "データベース設計" },
  { icon: "ri-database-2-line", color: "#47aeff", name: "アプリ開発" },
  { icon: "ri-gradienter-line", color: "#ffa76e", name: "Webサイト保守" },
  { icon: "ri-file-list-3-line", color: "#11dbcf", name: "デジタルマーケティング" },
  { icon: "ri-price-tag-2-line", color: "#4233ff", name: "Pira Neve" },
  { icon: "ri-anchor-line", color: "#b2904f", name: "Dirada Pack" },
  { icon: "ri-disc-line", color: "#b20969", name: "Moton Ideal" },
  { icon: "ri-base-station-line", color: "#ff5828", name: "Verdo Park" },
  { icon: "ri-fingerprint-line", color: "#29cc61", name: "Flavor Nivelanda" },
];

export default function About({ isVisible }: AboutProps) {
  const skillsAnimated = useRef(false);
  const countersAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !skillsAnimated.current) {
      skillsAnimated.current = true;
      setTimeout(() => {
        const bars = document.querySelectorAll(".progress .progress-bar");
        bars.forEach((el) => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.width = htmlEl.getAttribute("aria-valuenow") + "%";
        });
      }, 100);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && !countersAnimated.current) {
      countersAnimated.current = true;
      const counterEls = document.querySelectorAll(".purecounter");
      counterEls.forEach((el) => {
        const target = parseInt(el.getAttribute("data-purecounter-end") || "0");
        const htmlEl = el as HTMLElement;
        let current = 0;
        const step = Math.max(1, Math.floor(target / 50));
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          htmlEl.textContent = String(current);
        }, 30);
      });
    }
  }, [isVisible]);

  return (
    <section id="about" className={`about${isVisible ? " section-show" : ""}`}>
      {/* About Me */}
      <div className="about-me container">
        <div className="section-title">
          <h2>自己紹介</h2>
          <p>私について詳しく知る</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <Image
              src="/img/333.png"
              className="img-fluid"
              alt="プロフィール"
              width={400}
              height={400}
            />
          </div>
          <div className="col-lg-12 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>フルスタック開発者</h3>
            <p className="fst-italic">
              2018 年より日本の IT 企業にて、フルスタックエンジニアとして Web
              アプリケーション開発およびインフラ設 計・運用に従事しました。
              Next.js、 Ruby on Rails、 PHP、 Python
              などを使用した開発経験に加え、 AWS・ GCP を活用したサーバーレス環
              境の構築にも携わりました。
              また、技術リーダーとしてチームの進捗管理や品質管理を担当し、プロジェクト全体の円滑な進行をサポート
              しました。
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>生年月日:</strong> <span>1996年02月8日</span>
                  </li>
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>ウェブサイト:</strong> <span>julian.mok28@outlook.com</span>
                  </li> */}
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>電話番号:</strong> <span>852-2882-4133</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>居住地:</strong> <span>Wan Chai, Hong Kong</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>年齢:</strong> <span>30</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>学歴:</strong> <span>学士</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>メール:</strong> <span>julian.mok28@outlook.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counts */}
      <div className="counts container">
        <div className="row">
          {counts.map((item, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-6${index > 0 ? " mt-5 mt-md-0" : ""}${index >= 2 ? " mt-lg-0" : ""}`}
            >
              <div className="count-box">
                <i className={item.icon}></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end={item.end}
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  0
                </span>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="skills container">
        <div className="section-title">
          <h2>スキル</h2>
        </div>

        <div className="row skills-content">
          <div className="col-lg-4">
            {skillsLeft.map((skill) => (
              <div className="progress" key={skill.name}>
                <span className="skill">
                  {skill.name} <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            {skillsCenter.map((skill) => (
              <div className="progress" key={skill.name}>
                <span className="skill">
                  {skill.name} <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            {skillsRight.map((skill) => (
              <div className="progress" key={skill.name}>
                <span className="skill">
                  {skill.name} <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="interests container">
        <div className="section-title">
          <h2>興味・関心</h2>
        </div>

        <div className="row">
          {interests.map((item, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-4${index >= 1 && index <= 2 ? " mt-4 mt-md-0" : ""}${index === 3 ? " mt-4 mt-lg-0" : ""}${index >= 4 ? " mt-4" : ""}`}
            >
              <div className="icon-box">
                <i className={item.icon} style={{ color: item.color }}></i>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
