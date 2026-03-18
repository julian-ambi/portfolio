"use client";

import { useState, FormEvent } from "react";

interface ContactProps {
  isVisible: boolean;
}

export default function Contact({ isVisible }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className={`contact${isVisible ? " section-show" : ""}`}
    >
      <div className="container">
        <div className="section-title">
          <h2>お問い合わせ</h2>
          <p>お気軽にご連絡ください</p>
        </div>

        <div className="row mt-2">
          <div className="col-md-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-map"></i>
              <h3>住所</h3>
              <p>Wan Chai, Hong Kong</p>
            </div>
          </div>

          {/* Social Profile - disabled for now */}
          {/*
          <div className="col-md-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-share-alt"></i>
              <h3>ソーシャルプロフィール</h3>
              <div className="social-links">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="bi bi-skype"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          */}

          <div className="col-md-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-envelope"></i>
              <h3>メール</h3>
              <p>julian.mok28@outlook.com</p>
            </div>
          </div>

          <div className="col-md-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-phone-call"></i>
              <h3>電話</h3>
              <p>852-2882-4133</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="php-email-form mt-4">
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="お名前"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="メールアドレス"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              placeholder="件名"
              required
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows={5}
              placeholder="メッセージ"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>
          <div className="my-3">
            <div
              className="loading"
              style={{ display: status === "loading" ? "block" : "none" }}
            >
              読み込み中
            </div>
            <div
              className="error-message"
              style={{ display: status === "error" ? "block" : "none" }}
            >
              エラーが発生しました。もう一度お試しください。
            </div>
            <div
              className="sent-message"
              style={{ display: status === "success" ? "block" : "none" }}
            >
              メッセージが送信されました。ありがとうございます！
            </div>
          </div>
          <div className="text-center">
            <button type="submit">メッセージを送信</button>
          </div>
        </form>
      </div>
    </section>
  );
}
