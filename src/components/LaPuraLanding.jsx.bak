import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Giới thiệu", href: "#gioithieu" },
  { label: "Tổng quan", href: "#tongquan" },
  { label: "Vị trí", href: "#vitri" },
  { label: "Tiện ích", href: "#tienich" },
  { label: "Sản phẩm", href: "#sanpham" },
  { label: "Giá bán", href: "#giaban" },
  { label: "Liên hệ", href: "#lienhe" },
];

const PRODUCTS = [
  {
    type: "Căn hộ 1PN + 1",
    price: "2,2 tỷ đồng",
    area: "46.7m² – 56.9m²",
    icon: "🛏",
    tag: "Phổ biến",
    color: "#c8a96e",
  },
  {
    type: "Căn hộ 2PN + 1WC",
    price: "2,49 tỷ đồng",
    area: "62.73m² – 62.86m²",
    icon: "🏠",
    tag: "Bán chạy",
    color: "#2e7d6b",
  },
  {
    type: "Căn hộ 2PN + 2WC",
    price: "3 tỷ đồng",
    area: "66.5m² – 76.9m²",
    icon: "✨",
    tag: "Cao cấp",
    color: "#1a4b6e",
  },
  {
    type: "Căn hộ Sân vườn",
    price: "4,5 tỷ đồng",
    area: "Từ 117.8m²",
    icon: "🌿",
    tag: "Premium",
    color: "#7a3b2e",
  },
];

const OVERVIEW = [
  { label: "Dự án", value: "La Pura" },
  { label: "Chủ đầu tư", value: "Tập Đoàn Phát Đạt" },
  { label: "Tổng thầu", value: "Central Construction" },
  { label: "Vị trí", value: "Mặt tiền QL13, Lái Thiêu, Thuận An, Bình Dương" },
  { label: "Tổng diện tích", value: "37.343 m²" },
  { label: "Quy mô", value: "8 toà tháp, 40 tầng" },
  { label: "Số lượng", value: "4.982 căn hộ" },
  { label: "Ngân hàng", value: "Hỗ trợ 70% giá trị" },
  { label: "Pháp lý", value: "Sổ hồng riêng từng căn" },
  { label: "Sở hữu", value: "Lâu dài" },
  { label: "Bàn giao", value: "Năm 2026" },
  { label: "Tiêu chuẩn", value: "Hoàn thiện nội thất cao cấp" },
];

const AMENITIES = [
  { icon: "🏊", label: "Hồ bơi ngoài trời" },
  { icon: "💪", label: "Phòng gym hiện đại" },
  { icon: "🛍", label: "Trung tâm thương mại" },
  { icon: "🌳", label: "Công viên xanh nội khu" },
  { icon: "🏫", label: "Trường học quốc tế" },
  { icon: "🍽", label: "Khu ẩm thực đa dạng" },
  { icon: "🔒", label: "An ninh 24/7" },
  { icon: "🏥", label: "Trung tâm y tế" },
  { icon: "⛳", label: "Sân thể thao đa năng" },
  { icon: "🚗", label: "Bãi đỗ xe thông minh" },
  { icon: "🌺", label: "Vườn hoa nghỉ dưỡng" },
  { icon: "📚", label: "Thư viện cộng đồng" },
];

function useScrollAnimation() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function LaPuraLanding() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", note: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSubmit = () => {
    if (form.name && form.phone) setSubmitted(true);
  };

  const accent = "#c8a96e";
  const dark = "#0d1f1a";
  const green = "#1e5c4a";

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: "#f8f5f0", color: dark, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f8f5f0; }
        ::-webkit-scrollbar-thumb { background: #c8a96e; border-radius: 3px; }
        .nav-link { font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; color: white; transition: color 0.3s; padding: 4px 0; border-bottom: 1px solid transparent; }
        .nav-link:hover { color: #c8a96e; border-bottom-color: #c8a96e; }
        .btn-gold { background: linear-gradient(135deg, #c8a96e, #e8c98a, #c8a96e); color: #0d1f1a; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; padding: 14px 32px; border: none; cursor: pointer; transition: all 0.3s; clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%); }
        .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(200,169,110,0.4); }
        .btn-outline { background: transparent; color: #c8a96e; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; padding: 13px 32px; border: 1px solid #c8a96e; cursor: pointer; transition: all 0.3s; }
        .btn-outline:hover { background: #c8a96e; color: #0d1f1a; }
        .card-product { background: white; border-top: 3px solid var(--card-color); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer; }
        .card-product:hover { transform: translateY(-8px); box-shadow: 0 20px 60px rgba(0,0,0,0.12); }
        .amenity-item { background: white; transition: all 0.3s; border: 1px solid transparent; }
        .amenity-item:hover { border-color: #c8a96e; transform: translateY(-4px); box-shadow: 0 8px 25px rgba(200,169,110,0.15); }
        input, textarea, select { font-family: 'Outfit', sans-serif; }
        .tag-badge { font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; }
        .divider-ornament { display: flex; align-items: center; gap: 16px; }
        .divider-ornament::before, .divider-ornament::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, transparent, #c8a96e, transparent); }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes pulse-ring { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(1.6); opacity: 0; } }
        .hero-badge { animation: float 4s ease-in-out infinite; }
        .shimmer-text { background: linear-gradient(90deg, #c8a96e 30%, #f5e0a0 50%, #c8a96e 70%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        .hotline-pulse::after { content: ''; position: absolute; inset: -4px; border-radius: 50%; border: 2px solid #c8a96e; animation: pulse-ring 1.5s ease-out infinite; }
        .mobile-nav { transition: max-height 0.4s ease, opacity 0.3s ease; }
        .overview-row:nth-child(odd) { background: #faf8f5; }
        .overview-row:nth-child(even) { background: white; }
      `}</style>

      {/* Floating Hotline */}
      <a
        href="tel:0947233868"
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 999,
          background: "linear-gradient(135deg, #c8a96e, #e8c98a)",
          width: 60, height: 60, borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(200,169,110,0.5)",
          fontSize: 24, textDecoration: "none",
        }}
        className="hotline-pulse"
        title="Gọi ngay"
      >
        📞
      </a>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(13,31,26,0.97)" : "rgba(13,31,26,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(200,169,110,0.3)" : "none",
        transition: "all 0.4s",
        padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: "#c8a96e", letterSpacing: "0.08em", lineHeight: 1 }}>LA PURA</span>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Bình Dương · Phát Đạt</span>
          </div>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="nav-link" style={{ display: "none" }}
                onMouseEnter={e => e.target.style.display = "block"}
              >{l.label}</a>
            ))}
            <div style={{ display: "flex", gap: 24 }}>
              {NAV_LINKS.slice(0, 6).map(l => (
                <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
              ))}
            </div>
            <a href="tel:0947233868" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: "#c8a96e", textDecoration: "none", letterSpacing: "0.05em" }}>
              📞 0947 233 868
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{
        minHeight: "100vh",
        background: `linear-gradient(160deg, #0d1f1a 0%, #1e3d2e 40%, #0d2a25 70%, #091510 100%)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden", paddingTop: 70,
      }}>
        {/* Background decorative elements */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06,
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(200,169,110,0.5) 60px, rgba(200,169,110,0.5) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(200,169,110,0.5) 60px, rgba(200,169,110,0.5) 61px)`,
        }} />
        <div style={{
          position: "absolute", top: "15%", right: "8%", width: 300, height: 300,
          borderRadius: "50%", border: "1px solid rgba(200,169,110,0.15)",
          boxShadow: "0 0 80px rgba(200,169,110,0.08) inset",
        }} />
        <div style={{
          position: "absolute", top: "25%", right: "12%", width: 180, height: 180,
          borderRadius: "50%", border: "1px solid rgba(200,169,110,0.1)",
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="hero-badge" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(200,169,110,0.15)", border: "1px solid rgba(200,169,110,0.4)",
            padding: "8px 20px", marginBottom: 32,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#c8a96e", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Đang mở bán tháng 03/2026
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 300, color: "white", lineHeight: 1, marginBottom: 8, letterSpacing: "-0.02em" }}>
            La Pura
          </h1>
          <h2 className="shimmer-text" style={{ fontSize: "clamp(16px, 3vw, 28px)", fontWeight: 400, marginBottom: 24, letterSpacing: "0.3em", textTransform: "uppercase" }}>
            Thành Phố Dưỡng Lành
          </h2>

          <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 40, flexWrap: "wrap" }}>
            {[
              { val: "8", unit: "Toà tháp" },
              { val: "40", unit: "Tầng cao" },
              { val: "4.982", unit: "Căn hộ" },
              { val: "37.343m²", unit: "Tổng diện tích" },
            ].map(s => (
              <div key={s.unit} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 600, color: "#c8a96e", lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>{s.unit}</div>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 620, margin: "0 auto 40px", lineHeight: 1.8, fontWeight: 300 }}>
            Toạ lạc ngay mặt tiền Quốc lộ 13, Lái Thiêu – Thuận An, Bình Dương. Căn hộ cao cấp do Tập Đoàn <strong style={{ color: "#c8a96e" }}>Phát Đạt</strong> phát triển, kết nối hoàn hảo với TP. Hồ Chí Minh.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-gold" onClick={() => document.getElementById("lienhe").scrollIntoView({ behavior: "smooth" })}>
              Nhận Bảng Giá Chi Tiết
            </button>
            <button className="btn-outline" onClick={() => document.getElementById("tongquan").scrollIntoView({ behavior: "smooth" })}>
              Tìm Hiểu Dự Án
            </button>
          </div>

          <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Khám phá</span>
            <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(200,169,110,0.6), transparent)" }} />
          </div>
        </div>
      </section>

      {/* INTRO BANNER */}
      <section style={{ background: accent, padding: "20px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {["Giá từ 2,2 tỷ · Vay 70%", "Sổ hồng riêng · Sở hữu lâu dài", "Bàn giao 2026 · Nội thất cao cấp", "Hotline: 0947 23 38 68"].map(t => (
            <span key={t} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, color: "#0d1f1a", letterSpacing: "0.05em" }}>
              ✦ {t}
            </span>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="tongquan" style={{ padding: "100px 24px", background: "#f8f5f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div className="divider-ornament" style={{ marginBottom: 16 }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: accent, letterSpacing: "0.25em", textTransform: "uppercase" }}>Tổng Quan</span>
            </div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, textAlign: "center", marginBottom: 12, letterSpacing: "-0.01em" }}>
              Tổng Quan Dự Án <span style={{ color: accent }}>La Pura</span>
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: "#666", textAlign: "center", marginBottom: 56, maxWidth: 560, margin: "0 auto 56px", lineHeight: 1.8 }}>
              Khu căn hộ cao cấp quy mô lớn nhất tại Bình Dương với đầy đủ tiện ích đẳng cấp
            </p>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 0, background: "white", boxShadow: "0 4px 40px rgba(0,0,0,0.08)" }}>
            {OVERVIEW.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 40}>
                <div className="overview-row" style={{ display: "flex", padding: "18px 28px", borderBottom: "1px solid #f0ece6" }}>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 600, color: "#999", letterSpacing: "0.12em", textTransform: "uppercase", minWidth: 140 }}>{item.label}</span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: dark, fontWeight: 500, flex: 1 }}>{item.value}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="sanpham" style={{ padding: "100px 24px", background: dark }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div className="divider-ornament" style={{ marginBottom: 16 }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: accent, letterSpacing: "0.25em", textTransform: "uppercase" }}>Sản Phẩm</span>
            </div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, textAlign: "center", marginBottom: 12, color: "white", letterSpacing: "-0.01em" }}>
              Đang Mở Bán <span style={{ color: accent }}>Tháng 03/2026</span>
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.5)", textAlign: "center", marginBottom: 60, lineHeight: 1.8 }}>
              Đa dạng loại hình căn hộ đáp ứng mọi nhu cầu an cư và đầu tư
            </p>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 2 }}>
            {PRODUCTS.map((p, i) => (
              <AnimatedSection key={p.type} delay={i * 80}>
                <div className="card-product" style={{ "--card-color": p.color, padding: 0, overflow: "hidden" }}>
                  <div style={{ background: p.color, padding: "32px 28px 24px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <span style={{ fontSize: 36, marginBottom: 12 }}>{p.icon}</span>
                    <span className="tag-badge" style={{ background: "rgba(0,0,0,0.25)", color: "white" }}>{p.tag}</span>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, color: "white", marginTop: 12, lineHeight: 1.3 }}>{p.type}</h3>
                  </div>
                  <div style={{ padding: "24px 28px" }}>
                    <div style={{ marginBottom: 8 }}>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "#999", letterSpacing: "0.12em", textTransform: "uppercase" }}>Giá bán</span>
                      <div style={{ fontSize: 22, fontWeight: 700, color: p.color, marginTop: 2 }}>{p.price}</div>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "#999", letterSpacing: "0.12em", textTransform: "uppercase" }}>Diện tích</span>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "#555", marginTop: 2 }}>{p.area}</div>
                    </div>
                    <button
                      className="btn-outline"
                      style={{ width: "100%", borderColor: p.color, color: p.color, padding: "11px 20px", fontSize: 12 }}
                      onClick={() => document.getElementById("lienhe").scrollIntoView({ behavior: "smooth" })}
                    >
                      Nhận Bảng Giá
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="vitri" style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div className="divider-ornament" style={{ marginBottom: 16 }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: accent, letterSpacing: "0.25em", textTransform: "uppercase" }}>Vị Trí</span>
            </div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, textAlign: "center", marginBottom: 12, letterSpacing: "-0.01em" }}>
              Vị Trí <span style={{ color: accent }}>Đắc Địa</span>
            </h2>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginTop: 56, alignItems: "center" }}>
            <AnimatedSection>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { icon: "🏙", title: "TP. Hồ Chí Minh", desc: "Kết nối trực tiếp qua Quốc lộ 13, chỉ 15–20 phút di chuyển" },
                  { icon: "🏪", title: "Trung tâm Thuận An", desc: "Nằm ngay trung tâm thành phố, đầy đủ tiện ích xung quanh" },
                  { icon: "🏭", title: "Khu công nghiệp", desc: "Gần các KCN lớn VSIP, Sóng Thần, Bình Dương" },
                  { icon: "✈️", title: "Sân bay Tân Sơn Nhất", desc: "Khoảng 25 phút di chuyển thuận tiện" },
                ].map(item => (
                  <div key={item.title} style={{ display: "flex", gap: 20, padding: "20px 24px", background: "#faf8f5", borderLeft: `3px solid ${accent}` }}>
                    <span style={{ fontSize: 24 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600, color: dark, marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "#777", lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div style={{ background: `linear-gradient(135deg, ${green} 0%, #0d1f1a 100%)`, padding: 40, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", border: `1px solid rgba(200,169,110,0.2)` }} />
                <div style={{ position: "absolute", bottom: -30, left: -30, width: 160, height: 160, borderRadius: "50%", border: `1px solid rgba(200,169,110,0.15)` }} />
                <div style={{ position: "relative" }}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>Địa chỉ</div>
                  <p style={{ fontSize: 20, fontWeight: 400, color: "white", lineHeight: 1.6, marginBottom: 32 }}>
                    Mặt tiền <strong style={{ color: accent }}>Quốc lộ 13</strong>, Phường Lái Thiêu, Thành phố Thuận An, Tỉnh Bình Dương
                  </p>
                  <div style={{ borderTop: "1px solid rgba(200,169,110,0.3)", paddingTop: 24 }}>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
                      📍 Toạ độ: 10°55′N 106°42′E<br/>
                      🚗 Cách Q.1: ~20 phút<br/>
                      🚌 Tuyến buýt: Nhiều tuyến kết nối
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="tienich" style={{ padding: "100px 24px", background: "#f8f5f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div className="divider-ornament" style={{ marginBottom: 16 }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: accent, letterSpacing: "0.25em", textTransform: "uppercase" }}>Tiện Ích</span>
            </div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, textAlign: "center", marginBottom: 56, letterSpacing: "-0.01em" }}>
              Tiện Ích <span style={{ color: accent }}>Đẳng Cấp</span>
            </h2>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 }}>
            {AMENITIES.map((a, i) => (
              <AnimatedSection key={a.label} delay={i * 40}>
                <div className="amenity-item" style={{ padding: "28px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{a.icon}</div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500, color: "#444", lineHeight: 1.4 }}>{a.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="giaban" style={{
        padding: "80px 24px",
        background: `linear-gradient(135deg, ${dark} 0%, #1a3d30 50%, ${dark} 100%)`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: `radial-gradient(${accent} 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <AnimatedSection>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: accent, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 20 }}>Ưu đãi đặc biệt tháng 3/2026</p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 300, color: "white", marginBottom: 20, lineHeight: 1.2 }}>
              Nhận <span style={{ color: accent }}>Bảng Giá Gốc</span><br/>Chủ Đầu Tư Phát Đạt
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.6)", marginBottom: 40, lineHeight: 1.8 }}>
              Hỗ trợ vay ngân hàng đến 70% · Sổ hồng riêng · Bàn giao hoàn thiện nội thất 2026
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn-gold" onClick={() => document.getElementById("lienhe").scrollIntoView({ behavior: "smooth" })}>
                Nhận Tư Vấn Miễn Phí
              </button>
              <a href="tel:0947233868" style={{ textDecoration: "none" }}>
                <button className="btn-outline">📞 0947 23 38 68</button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="lienhe" style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <AnimatedSection>
            <div className="divider-ornament" style={{ marginBottom: 16 }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: accent, letterSpacing: "0.25em", textTransform: "uppercase" }}>Đăng Ký</span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 300, textAlign: "center", marginBottom: 12, letterSpacing: "-0.01em" }}>
              Nhận Thông Tin <span style={{ color: accent }}>Chi Tiết</span>
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "#888", textAlign: "center", marginBottom: 48, lineHeight: 1.8 }}>
              Để lại thông tin, chuyên viên tư vấn sẽ liên hệ ngay qua SĐT / Zalo / Viber
            </p>
          </AnimatedSection>

          {submitted ? (
            <AnimatedSection>
              <div style={{ textAlign: "center", padding: "60px 40px", background: "#f8f5f0" }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                <h3 style={{ fontSize: 24, fontWeight: 400, marginBottom: 12, color: green }}>Đăng ký thành công!</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "#777", lineHeight: 1.8 }}>
                  Cảm ơn <strong>{form.name}</strong>! Chuyên viên sẽ liên hệ số <strong>{form.phone}</strong> trong thời gian sớm nhất.
                </p>
                <div style={{ marginTop: 24, fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "#999" }}>
                  Hoặc gọi ngay: <a href="tel:0947233868" style={{ color: accent, fontWeight: 600 }}>0947 23 38 68</a>
                </div>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection delay={100}>
              <div style={{ background: "#f8f5f0", padding: "48px 40px", boxShadow: "0 4px 40px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { field: "name", label: "Họ và tên *", placeholder: "Nguyễn Văn A" },
                    { field: "phone", label: "Số điện thoại / Zalo *", placeholder: "0901 234 567" },
                  ].map(({ field, label, placeholder }) => (
                    <div key={field}>
                      <label style={{ display: "block", fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 600, color: "#666", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{label}</label>
                      <input
                        type={field === "phone" ? "tel" : "text"}
                        placeholder={placeholder}
                        value={form[field]}
                        onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                        style={{
                          width: "100%", padding: "14px 18px", background: "white",
                          border: "1px solid #e8e2d8", outline: "none",
                          fontSize: 14, color: dark, transition: "border-color 0.3s",
                        }}
                        onFocus={e => e.target.style.borderColor = accent}
                        onBlur={e => e.target.style.borderColor = "#e8e2d8"}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ display: "block", fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 600, color: "#666", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Loại căn quan tâm</label>
                    <select
                      value={form.note}
                      onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                      style={{
                        width: "100%", padding: "14px 18px", background: "white",
                        border: "1px solid #e8e2d8", outline: "none",
                        fontSize: 14, color: dark, appearance: "none",
                      }}
                    >
                      <option value="">-- Chọn loại căn --</option>
                      <option>Căn hộ 1PN + 1 (từ 2,2 tỷ)</option>
                      <option>Căn hộ 2PN + 1WC (từ 2,49 tỷ)</option>
                      <option>Căn hộ 2PN + 2WC (từ 3 tỷ)</option>
                      <option>Căn hộ Sân vườn (từ 4,5 tỷ)</option>
                    </select>
                  </div>

                  <button
                    className="btn-gold"
                    style={{ width: "100%", padding: "18px", fontSize: 14, marginTop: 8, clipPath: "none" }}
                    onClick={handleSubmit}
                    disabled={!form.name || !form.phone}
                  >
                    Gửi Thông Tin — Nhận Tư Vấn Ngay
                  </button>

                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "#aaa", textAlign: "center", lineHeight: 1.6 }}>
                    🔒 Thông tin của bạn được bảo mật tuyệt đối. Không chia sẻ cho bên thứ ba.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: dark, padding: "60px 24px 32px", color: "rgba(255,255,255,0.6)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: accent, marginBottom: 4 }}>LA PURA</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>Thành phố dưỡng lành</div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, lineHeight: 1.8 }}>
                Dự án căn hộ cao cấp do Tập Đoàn Phát Đạt phát triển, toạ lạc tại mặt tiền Quốc lộ 13, Bình Dương.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 600, color: accent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>Liên hệ</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, lineHeight: 2.2 }}>
                <div>📍 Quốc lộ 13, Lái Thiêu, Thuận An, Bình Dương</div>
                <div>📞 <a href="tel:0947233868" style={{ color: accent, textDecoration: "none" }}>0947 23 38 68</a></div>
                <div>📧 <a href="mailto:info@lapura.vn" style={{ color: accent, textDecoration: "none" }}>info@lapura.vn</a></div>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 600, color: accent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>Chủ đầu tư</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, lineHeight: 2 }}>
                <div style={{ color: "white", fontWeight: 500 }}>Tập Đoàn Phát Đạt</div>
                <div>Đơn vị thi công: Central</div>
                <div>Ngân hàng: Hỗ trợ 70%</div>
                <div>Bàn giao: Năm 2026</div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12 }}>© 2025 La Pura Bình Dương. All rights reserved.</span>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12 }}>Chủ đầu tư: Tập Đoàn Phát Đạt</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
