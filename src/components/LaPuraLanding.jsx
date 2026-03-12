import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Tổng quan", href: "#tongquan" },
  { label: "Tiến độ", href: "#tiendo" },
  { label: "Nhà mẫu", href: "#nhamau" },
  { label: "Sản phẩm", href: "#sanpham" },
  { label: "Mặt bằng", href: "#matbang" },
  { label: "Tiện ích", href: "#tienich" },
  { label: "Liên hệ", href: "#lienhe" },
];

const PRODUCTS = [
  {
    type: "Căn hộ 1PN",
    price: "2,2 tỷ đồng",
    area: "NFA: 46.59–55.51m²",
    nsa: "NSA: 41.52–49.86m²",
    tag: "Phổ biến",
    color: "#c8a96e",
    floorPlan: "/images/can-ho-la-pu-ra-binh-duong-1pn.jpg",
  },
  {
    type: "Căn hộ 2PN 1WC",
    price: "2,49 tỷ đồng",
    area: "NFA: 61.91–66.41m²",
    nsa: "NSA: 55.54–57.49m²",
    tag: "Bán chạy",
    color: "#2e7d6b",
    floorPlan: "/images/can-ho-la-pu-ra-binh-duong-2pn-1wc.jpg",
  },
  {
    type: "Căn hộ 2PN 2WC",
    price: "3 tỷ đồng",
    area: "NFA: 66.08–76.91m²",
    nsa: "NSA: 58.98–69.96m²",
    tag: "Cao cấp",
    color: "#1a4b6e",
    floorPlan: "/images/can-ho-la-pu-ra-binh-duong-2pn-2wc.jpg",
  },
  {
    type: "Căn hộ Sân vườn",
    price: "4,5 tỷ đồng",
    area: "NFA: Từ 117.8m²",
    nsa: "",
    tag: "Premium",
    color: "#7a3b2e",
    floorPlan: null,
  },
];

// Tiến độ thi công
const CONSTRUCTION = [
  {
    src: "/images/tien-do-thi-cong-lapura-binh-duong.jpg",
    label: "Mặt tiền Quốc lộ 13",
  },
  {
    src: "/images/tien-do-thi-cong-lapura-binh-duong-2-1.jpg",
    label: "Toàn cảnh công trường",
  },
  {
    src: "/images/tien-do-thi-cong-lapura-binh-duong-3-1.jpg",
    label: "Tiến độ thi công",
  },
];

// Nhà mẫu
const SHOWROOM = [
  {
    src: "/images/hinh-anh-nha-mau-la-pura-1-1.jpg",
    label: "Phòng Ngủ Master",
    desc: "Không gian ngủ cao cấp với cửa kính full-height view thành phố",
  },
  {
    src: "/images/hinh-anh-nha-mau-la-pura-2-1.jpg",
    label: "Phòng Khách & Bếp",
    desc: "Không gian mở kết hợp phòng khách, bếp và ban công xanh",
  },
  {
    src: "/images/hinh-anh-nha-mau-la-pura-3-1.jpg",
    label: "Phòng Khách",
    desc: "Thiết kế tối giản, sang trọng với tầm nhìn mở ra thiên nhiên",
  },
  {
    src: "/images/hinh-anh-nha-mau-la-pura-4-1.jpg",
    label: "Nội Thất Tổng Thể",
    desc: "Bộ tứ không gian — phòng khách, bếp, ban công và nội thất hoàn thiện",
  },
  {
    src: "/images/nha-mau-la-pu-ra-binh-duong-4.jpg",
    label: "Phòng Đọc / Làm Việc",
    desc: "Góc thư giãn đa năng với ánh sáng tự nhiên tràn vào",
  },
];

const OVERVIEW = [
  { label: "Dự án", value: "La Pura" },
  { label: "Đơn vị phân phối", value: "Rever.vn" },
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

const SvgPhone = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.22 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
  </svg>
);

const SvgZalo = () => (
  <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="10" fill="#0068FF" />
    <text
      x="50%"
      y="54%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="Arial Black,Arial"
      fontWeight="900"
      fontSize="18"
      fill="white"
    >
      Za
    </text>
  </svg>
);

const SvgMapPin = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SvgMail = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const SvgLock = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const SvgCheck = () => (
  <svg
    width="52"
    height="52"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1e5c4a"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const AMENITY_ICONS = {
  Pool: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h20M2 12c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0M6 19c1.5-2 3.5-2 5 0s3.5 2 5 0" />
    </svg>
  ),
  Gym: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 4v16M18 4v16M2 8h4M18 8h4M2 16h4M18 16h4M6 12h12" />
    </svg>
  ),
  Mall: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Park: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22V12m0 0C10 8 6 5 6 5s-2 4 2 7m4-7c2-4 6-7 6-7s2 4-2 7" />
    </svg>
  ),
  School: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Restaurant: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
    </svg>
  ),
  Security: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Medical: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  Sport: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
    </svg>
  ),
  Parking: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 17V7h4a3 3 0 010 6H9" />
    </svg>
  ),
  Garden: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22V12M12 12C12 7 17 3 17 3S22 7 17 12M12 12C12 7 7 3 7 3S2 7 7 12" />
    </svg>
  ),
  Library: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  ),
};

const AMENITIES = [
  { Icon: AMENITY_ICONS.Pool, label: "Hồ bơi ngoài trời" },
  { Icon: AMENITY_ICONS.Gym, label: "Phòng gym hiện đại" },
  { Icon: AMENITY_ICONS.Mall, label: "Trung tâm thương mại" },
  { Icon: AMENITY_ICONS.Park, label: "Công viên xanh nội khu" },
  { Icon: AMENITY_ICONS.School, label: "Trường học quốc tế" },
  { Icon: AMENITY_ICONS.Restaurant, label: "Khu ẩm thực đa dạng" },
  { Icon: AMENITY_ICONS.Security, label: "An ninh 24/7" },
  { Icon: AMENITY_ICONS.Medical, label: "Trung tâm y tế" },
  { Icon: AMENITY_ICONS.Sport, label: "Sân thể thao đa năng" },
  { Icon: AMENITY_ICONS.Parking, label: "Bãi đỗ xe thông minh" },
  { Icon: AMENITY_ICONS.Garden, label: "Vườn hoa nghỉ dưỡng" },
  { Icon: AMENITY_ICONS.Library, label: "Thư viện cộng đồng" },
];

// Ảnh tiện ích thực tế — đặt trong public/images/
const AMENITY_PHOTOS = [
  {
    src: "/images/ho-boi-la-pura.jpg",
    label: "Hồ Bơi La Pura",
    desc: "Hồ bơi vô cực trong nhà với vườn cây xanh bao quanh",
  },
  {
    src: "/images/be-thuy-tri-lieu-zenia.jpg",
    label: "Bể Thủy Trị Liệu Zenia",
    desc: "Không gian nghỉ dưỡng cao cấp với bể thủy trị liệu thiên nhiên",
  },
  {
    src: "/images/tang-mai-la-pura.jpg",
    label: "Tầng Mái La Pura",
    desc: "Khu vườn tầng mái xanh mát, không gian thư giãn đẳng cấp",
  },
  {
    src: "/images/outdoor-terrace-la-pura.jpg",
    label: "Outdoor Terrace",
    desc: "Sân terrace ngoài trời với không gian gỗ tự nhiên và cây xanh",
  },
  {
    src: "/images/khu-vui-choi-tre-em-la-pura.jpg",
    label: "Khu Vui Chơi Trẻ Em",
    desc: "Sân chơi rộng lớn, an toàn và hiện đại cho trẻ em",
  },
];

// Mặt bằng Zenia theo nhóm tầng
const FLOOR_PLANS = [
  { label: "Tầng 4–10", file: "/images/mat-bang-zenia-tang-4-10.jpg" },
  { label: "Tầng 11", file: "/images/mat-bang-zenia-tang-11.jpg" },
  { label: "Tầng 12", file: "/images/mat-bang-zenia-tang-12.jpg" },
  { label: "Tầng 13", file: "/images/mat-bang-zenia-tang-13.jpg" },
  { label: "Tầng 14–16", file: "/images/mat-bang-zenia-tang-14-16.jpg" },
  { label: "Tầng 17–18", file: "/images/mat-bang-zenia-tang-17-18.jpg" },
  { label: "Tầng 19", file: "/images/mat-bang-zenia-tang-19.jpg" },
  { label: "Tầng 21–25", file: "/images/mat-bang-zenia-tang-21-25.jpg" },
  { label: "Tầng 26", file: "/images/mat-bang-zenia-tang-26.jpg" },
  { label: "Tầng 27", file: "/images/mat-bang-zenia-tang-27.jpg" },
  { label: "Tầng 28–30", file: "/images/mat-bang-zenia-tang-28-30.jpg" },
  { label: "Tầng 31–39", file: "/images/mat-bang-zenia-tang-31-39.jpg" },
];

function useZaloWidget() {
  useEffect(() => {
    if (document.getElementById("zalo-sdk-script")) return;
    const div = document.createElement("div");
    div.className = "zalo-chat-widget";
    div.setAttribute("data-oaid", "1717736678695240623");
    div.setAttribute("data-welcome-message", "Rất vui khi được hỗ trợ bạn!");
    div.setAttribute("data-autopopup", "0");
    div.setAttribute("data-width", "");
    div.setAttribute("data-height", "");
    document.body.appendChild(div);
    const script = document.createElement("script");
    script.id = "zalo-sdk-script";
    script.src = "https://sp.zalo.me/plugins/sdk.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      const el = document.querySelector(".zalo-chat-widget");
      if (el) el.remove();
    };
  }, []);
}

function useScrollAnimation() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function AnimatedSection({ children, delay = 0, style = {} }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function LaPuraLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", note: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeFloor, setActiveFloor] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [activeShowroom, setActiveShowroom] = useState(0);

  useZaloWidget();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const accent = "#c8a96e";
  const dark = "#0d1f1a";
  const green = "#1e5c4a";

  return (
    <div
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        background: "#f8f5f0",
        color: dark,
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f8f5f0; }
        ::-webkit-scrollbar-thumb { background: #c8a96e; border-radius: 3px; }
        .nav-link { font-family:'Outfit',sans-serif; font-size:12px; font-weight:500; letter-spacing:0.13em; text-transform:uppercase; text-decoration:none; color:rgba(255,255,255,0.75); transition:color 0.25s; }
        .nav-link:hover { color:#c8a96e; }
        .btn-gold { background:linear-gradient(135deg,#c8a96e,#e8c98a,#c8a96e); color:#0d1f1a; font-family:'Outfit',sans-serif; font-size:12px; font-weight:700; letter-spacing:0.15em; text-transform:uppercase; padding:14px 32px; border:none; cursor:pointer; transition:all 0.3s; }
        .btn-gold:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(200,169,110,0.45); }
        .btn-gold:disabled { opacity:0.5; cursor:not-allowed; transform:none; }
        .btn-zalo { background:#0068FF; color:white; font-family:'Outfit',sans-serif; font-size:12px; font-weight:700; letter-spacing:0.13em; text-transform:uppercase; padding:14px 28px; border:none; cursor:pointer; transition:all 0.3s; display:inline-flex; align-items:center; gap:8px; }
        .btn-zalo:hover { background:#0055cc; transform:translateY(-2px); }
        .btn-outline { background:transparent; color:#c8a96e; font-family:'Outfit',sans-serif; font-size:12px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; padding:12px 24px; border:1px solid #c8a96e; cursor:pointer; transition:all 0.3s; width:100%; }
        .btn-outline:hover { background:#c8a96e; color:#0d1f1a; }
        .card-hover { transition:transform 0.3s,box-shadow 0.3s; }
        .card-hover:hover { transform:translateY(-6px); box-shadow:0 18px 50px rgba(0,0,0,0.13); }
        .amenity-card { background:white; border:1px solid transparent; transition:all 0.3s; text-align:center; padding:28px 16px; }
        .amenity-card:hover { border-color:#c8a96e; transform:translateY(-4px); box-shadow:0 8px 24px rgba(200,169,110,0.14); }
        .amenity-card:hover .a-icon { color:#c8a96e; }
        .a-icon { color:#999; transition:color 0.3s; display:flex; justify-content:center; margin-bottom:14px; }
        .float-btn { position:fixed; right:22px; z-index:999; width:54px; height:54px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; border:none; text-decoration:none; transition:transform 0.2s,box-shadow 0.2s; }
        .float-btn:hover { transform:scale(1.1); }
        .pulse { position:relative; }
        .pulse::after { content:''; position:absolute; inset:-5px; border-radius:50%; border:2px solid; animation:pulse-ring 2s ease-out infinite; }
        .pulse-gold::after { border-color:#c8a96e; }
        .pulse-blue::after { border-color:#0068FF; }
        .divider { display:flex; align-items:center; justify-content:center; gap:14px; margin-bottom:14px; }
        .divider::before,.divider::after { content:''; width:60px; height:1px; background:linear-gradient(90deg,transparent,#c8a96e,transparent); }
        .overview-row { display:flex; padding:15px 32px; border-bottom:1px solid #f0ece6; transition:background 0.15s; }
        .overview-row:nth-child(odd) { background:#faf8f5; }
        .overview-row:nth-child(even) { background:white; }
        .overview-row:hover { background:#f5f0e8; }
        input,select { font-family:'Outfit',sans-serif; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.7} 100%{transform:scale(1.55);opacity:0} }
        .hero-float { animation:float 4s ease-in-out infinite; }
        .shimmer { background:linear-gradient(90deg,#c8a96e 25%,#f5dfa0 50%,#c8a96e 75%); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer 3s linear infinite; }
        @media(max-width:768px){ .hide-mobile{display:none!important;} .col2{grid-template-columns:1fr!important;} }
        .zalo-chat-widget { right: 0 !important; left: auto !important; bottom: 0 !important; }
        #zalo-chat-plugin { right: 0 !important; left: auto !important; }
        .zalo-chat-button { right: 20px !important; left: auto !important; }
      `}</style>

      {/* Floating Phone */}
      <a
        href="tel:0877191940"
        style={{
          position: "fixed",
          bottom: 90,
          right: 22,
          zIndex: 9999,
          width: 54,
          height: 54,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#c8a96e,#e8c98a)",
          boxShadow: "0 4px 18px rgba(200,169,110,0.4)",
          textDecoration: "none",
          transition: "transform 0.2s",
        }}
        title="Gọi ngay"
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <SvgPhone />
      </a>

      {/* Floating Zalo */}
      <a
        href="https://zalo.me/0877191940"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: 24,
          right: 22,
          zIndex: 9999,
          width: 54,
          height: 54,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0068FF",
          boxShadow: "0 4px 18px rgba(0,104,255,0.4)",
          textDecoration: "none",
          transition: "transform 0.2s",
        }}
        title="Chat Zalo"
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <SvgZalo />
      </a>

      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(13,31,26,0.97)" : "rgba(13,31,26,0.82)",
          backdropFilter: "blur(14px)",
          borderBottom: scrolled ? "1px solid rgba(200,169,110,0.2)" : "none",
          transition: "all 0.35s",
          padding: "0 28px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 21,
                fontWeight: 700,
                color: accent,
                letterSpacing: "0.07em",
                lineHeight: 1,
              }}
            >
              LA PURA
            </div>
            <div
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 9,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Phân phối bởi Rever.vn
            </div>
          </div>
          <div className="hide-mobile" style={{ display: "flex", gap: 22 }}>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <a
              href="https://zalo.me/0877191940"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "'Outfit',sans-serif",
                fontSize: 12,
                color: "#4da8ff",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <SvgZalo /> <span className="hide-mobile">Zalo</span>
            </a>
            <a
              href="tel:0877191940"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "'Outfit',sans-serif",
                fontSize: 12,
                fontWeight: 700,
                color: accent,
                textDecoration: "none",
              }}
            >
              <SvgPhone /> <span className="hide-mobile">0877 191 940</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          paddingTop: 68,
          background:
            "linear-gradient(155deg,#0d1f1a 0%,#1e3d2e 45%,#0a1e18 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(200,169,110,0.6) 60px,rgba(200,169,110,0.6) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(200,169,110,0.6) 60px,rgba(200,169,110,0.6) 61px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "12%",
            right: "7%",
            width: 260,
            height: 260,
            borderRadius: "50%",
            border: "1px solid rgba(200,169,110,0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "13%",
            width: 140,
            height: 140,
            borderRadius: "50%",
            border: "1px solid rgba(200,169,110,0.07)",
          }}
        />

        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            padding: "60px 24px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="hero-float"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(200,169,110,0.1)",
              border: "1px solid rgba(200,169,110,0.3)",
              padding: "7px 20px",
              marginBottom: 36,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#4ade80",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 11,
                color: accent,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Đang mở bán 03/2026 · Phân phối: Rever.vn
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(50px,8vw,100px)",
              fontWeight: 300,
              color: "white",
              lineHeight: 0.95,
              marginBottom: 10,
              letterSpacing: "-0.02em",
            }}
          >
            La Pura
          </h1>
          <h2
            className="shimmer"
            style={{
              fontSize: "clamp(13px,2.2vw,22px)",
              fontWeight: 400,
              marginBottom: 44,
              letterSpacing: "0.38em",
              textTransform: "uppercase",
            }}
          >
            Thành Phố Dưỡng Lành
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 44,
              marginBottom: 48,
              flexWrap: "wrap",
            }}
          >
            {[
              { val: "8", unit: "Toà tháp" },
              { val: "40", unit: "Tầng cao" },
              { val: "4.982", unit: "Căn hộ" },
              { val: "37.343m²", unit: "Diện tích" },
            ].map((s) => (
              <div key={s.unit}>
                <div
                  style={{
                    fontSize: "clamp(24px,4vw,38px)",
                    fontWeight: 600,
                    color: accent,
                    lineHeight: 1,
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginTop: 5,
                  }}
                >
                  {s.unit}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontSize: 15,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 560,
              margin: "0 auto 44px",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            Mặt tiền Quốc lộ 13, Lái Thiêu – Thuận An, Bình Dương. Phân phối độc
            quyền bởi <strong style={{ color: accent }}>Rever.vn</strong>, phát
            triển bởi{" "}
            <strong style={{ color: accent }}>Tập Đoàn Phát Đạt</strong>.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn-gold"
              onClick={() =>
                document
                  .getElementById("lienhe")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Nhận Bảng Giá Chi Tiết
            </button>
            <a
              href="https://zalo.me/0877191940"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="btn-zalo">
                <SvgZalo /> Nhắn Zalo Ngay
              </button>
            </a>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 36,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 9,
                color: "rgba(255,255,255,0.2)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              Khám phá
            </span>
            <div
              style={{
                width: 1,
                height: 36,
                background:
                  "linear-gradient(to bottom,rgba(200,169,110,0.5),transparent)",
              }}
            />
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <div style={{ background: accent, padding: "16px 24px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: 36,
            flexWrap: "wrap",
          }}
        >
          {[
            "Giá từ 2,2 tỷ · Vay 70%",
            "Sổ hồng riêng · Sở hữu lâu dài",
            "Bàn giao 2026 · Hoàn thiện NT",
            "Phân phối: Rever.vn",
          ].map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "#0d1f1a",
                letterSpacing: "0.05em",
              }}
            >
              — {t}
            </span>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <section
        id="tongquan"
        style={{ padding: "96px 24px", background: "#f8f5f0" }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <AnimatedSection>
            <div className="divider">
              <span
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 11,
                  color: accent,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                Tổng Quan
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px,5vw,46px)",
                fontWeight: 300,
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Tổng Quan Dự Án <span style={{ color: accent }}>La Pura</span>
            </h2>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 14,
                color: "#888",
                textAlign: "center",
                marginBottom: 52,
                lineHeight: 1.8,
              }}
            >
              Phân phối chính thức bởi{" "}
              <strong style={{ color: dark }}>Rever.vn</strong> · Căn hộ cao cấp
              quy mô lớn nhất Bình Dương
            </p>
          </AnimatedSection>
          <div
            style={{
              background: "white",
              boxShadow: "0 2px 32px rgba(0,0,0,0.06)",
            }}
          >
            {OVERVIEW.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 25}>
                <div className="overview-row">
                  <span
                    style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#bbb",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      minWidth: 170,
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: 14,
                      color: dark,
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TIẾN ĐỘ THI CÔNG */}
      <section id="tiendo" style={{ padding: "96px 24px", background: dark }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div className="divider">
              <span
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 11,
                  color: accent,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                Thực Tế
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px,5vw,46px)",
                fontWeight: 300,
                textAlign: "center",
                marginBottom: 10,
                color: "white",
              }}
            >
              Tiến Độ <span style={{ color: accent }}>Thi Công</span>
            </h2>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.4)",
                textAlign: "center",
                marginBottom: 48,
                lineHeight: 1.8,
              }}
            >
              Hình ảnh thực tế từ công trường · Cập nhật 2025
            </p>
          </AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 3,
            }}
          >
            {CONSTRUCTION.map((c, i) => (
              <AnimatedSection key={c.label} delay={i * 80}>
                <div
                  onClick={() => setLightbox({ src: c.src, label: c.label })}
                  style={{
                    position: "relative",
                    cursor: "zoom-in",
                    overflow: "hidden",
                    aspectRatio: "16/10",
                    background: "#111",
                  }}
                >
                  <img
                    src={c.src}
                    alt={c.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s",
                      opacity: 0.9,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.06)";
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.opacity = "0.9";
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(to top,rgba(0,0,0,0.7),transparent)",
                      padding: "20px 18px 14px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Outfit',sans-serif",
                        fontSize: 12,
                        color: "rgba(255,255,255,0.8)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {c.label}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* NHÀ MẪU */}
      <section
        id="nhamau"
        style={{ padding: "96px 24px", background: "#faf8f5" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div className="divider">
              <span
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 11,
                  color: accent,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                Nhà Mẫu
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px,5vw,46px)",
                fontWeight: 300,
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Hình Ảnh <span style={{ color: accent }}>Nhà Mẫu</span>
            </h2>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 14,
                color: "#888",
                textAlign: "center",
                marginBottom: 40,
                lineHeight: 1.8,
              }}
            >
              Nội thất hoàn thiện cao cấp · Bàn giao theo tiêu chuẩn
            </p>
          </AnimatedSection>

          {/* Main large image */}
          <AnimatedSection>
            <div
              onClick={() =>
                setLightbox({
                  src: SHOWROOM[activeShowroom].src,
                  label: SHOWROOM[activeShowroom].label,
                })
              }
              style={{
                position: "relative",
                cursor: "zoom-in",
                overflow: "hidden",
                aspectRatio: "16/8",
                marginBottom: 4,
                background: "#eee",
              }}
            >
              <img
                key={activeShowroom}
                src={SHOWROOM[activeShowroom].src}
                alt={SHOWROOM[activeShowroom].label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(13,31,26,0.75) 0%, transparent 45%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px 32px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 10,
                    color: accent,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  La Pura · Nhà mẫu
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 26,
                    fontWeight: 600,
                    color: "white",
                    marginBottom: 4,
                  }}
                >
                  {SHOWROOM[activeShowroom].label}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {SHOWROOM[activeShowroom].desc}
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "rgba(0,0,0,0.4)",
                  padding: "5px 9px",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </div>
          </AnimatedSection>

          {/* Thumbnails */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${SHOWROOM.length},1fr)`,
              gap: 4,
            }}
          >
            {SHOWROOM.map((s, i) => (
              <div
                key={s.label}
                onClick={() => setActiveShowroom(i)}
                style={{
                  cursor: "pointer",
                  overflow: "hidden",
                  aspectRatio: "16/10",
                  position: "relative",
                  outline:
                    activeShowroom === i ? `2px solid ${accent}` : "none",
                  outlineOffset: 0,
                }}
              >
                <img
                  src={s.src}
                  alt={s.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                    filter: activeShowroom === i ? "none" : "brightness(0.6)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.filter = "brightness(0.9)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter =
                      activeShowroom === i ? "none" : "brightness(0.6)")
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="sanpham" style={{ padding: "96px 24px", background: dark }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div className="divider">
              <span
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 11,
                  color: accent,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                Sản Phẩm
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px,5vw,46px)",
                fontWeight: 300,
                textAlign: "center",
                marginBottom: 10,
                color: "white",
              }}
            >
              Đang Mở Bán <span style={{ color: accent }}>Tháng 03/2026</span>
            </h2>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.4)",
                textAlign: "center",
                marginBottom: 52,
                lineHeight: 1.8,
              }}
            >
              Đa dạng loại hình căn hộ · Tư vấn bởi chuyên viên Rever.vn
            </p>
          </AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 3,
            }}
          >
            {PRODUCTS.map((p, i) => (
              <AnimatedSection key={p.type} delay={i * 70}>
                <div
                  className="card-hover"
                  style={{
                    background: "white",
                    borderTop: `3px solid ${p.color}`,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{ background: p.color, padding: "22px 26px 18px" }}
                  >
                    <span
                      style={{
                        fontFamily: "'Outfit',sans-serif",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        background: "rgba(0,0,0,0.2)",
                        color: "white",
                        padding: "4px 10px",
                        display: "inline-block",
                        marginBottom: 12,
                      }}
                    >
                      {p.tag}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: 19,
                        fontWeight: 600,
                        color: "white",
                        lineHeight: 1.3,
                      }}
                    >
                      {p.type}
                    </h3>
                  </div>
                  {p.floorPlan && (
                    <div
                      style={{
                        overflow: "hidden",
                        cursor: "zoom-in",
                        background: "#f8f5f0",
                        aspectRatio: "4/3",
                      }}
                      onClick={() =>
                        setLightbox({ src: p.floorPlan, label: p.type })
                      }
                    >
                      <img
                        src={p.floorPlan}
                        alt={p.type}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.4s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    </div>
                  )}
                  <div style={{ padding: "18px 26px 22px" }}>
                    <div style={{ marginBottom: 8 }}>
                      <div
                        style={{
                          fontFamily: "'Outfit',sans-serif",
                          fontSize: 10,
                          color: "#bbb",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        Giá bán
                      </div>
                      <div
                        style={{
                          fontSize: 20,
                          fontWeight: 700,
                          color: p.color,
                          marginTop: 2,
                        }}
                      >
                        {p.price}
                      </div>
                    </div>
                    <div style={{ marginBottom: 18 }}>
                      <div
                        style={{
                          fontFamily: "'Outfit',sans-serif",
                          fontSize: 12,
                          color: "#777",
                          marginTop: 2,
                          lineHeight: 1.8,
                        }}
                      >
                        {p.area}
                      </div>
                      {p.nsa && (
                        <div
                          style={{
                            fontFamily: "'Outfit',sans-serif",
                            fontSize: 12,
                            color: "#aaa",
                          }}
                        >
                          {p.nsa}
                        </div>
                      )}
                    </div>
                    <button
                      className="btn-outline"
                      style={{ borderColor: p.color, color: p.color }}
                      onClick={() =>
                        document
                          .getElementById("lienhe")
                          .scrollIntoView({ behavior: "smooth" })
                      }
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

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9000,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            cursor: "zoom-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "95vw",
              maxHeight: "90vh",
            }}
          >
            <img
              src={lightbox.src}
              alt={lightbox.label}
              style={{
                maxWidth: "95vw",
                maxHeight: "85vh",
                objectFit: "contain",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -36,
                left: 0,
                right: 0,
                textAlign: "center",
                fontFamily: "'Outfit',sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.1em",
              }}
            >
              {lightbox.label}
            </div>
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute",
                top: -40,
                right: 0,
                background: "none",
                border: "none",
                color: "white",
                fontSize: 28,
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* MẶT BẰNG */}
      <section
        id="matbang"
        style={{ padding: "96px 24px", background: "#f8f5f0" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div className="divider">
              <span
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 11,
                  color: "#c8a96e",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                Mặt Bằng
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px,5vw,46px)",
                fontWeight: 300,
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Mặt Bằng{" "}
              <span style={{ color: "#c8a96e" }}>Zenia by La Pura</span>
            </h2>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 14,
                color: "#888",
                textAlign: "center",
                marginBottom: 40,
                lineHeight: 1.8,
              }}
            >
              Chi tiết bố trí căn hộ theo từng nhóm tầng — Click để xem phóng to
            </p>
          </AnimatedSection>

          {/* Tab buttons */}
          <AnimatedSection>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                justifyContent: "center",
                marginBottom: 32,
              }}
            >
              {FLOOR_PLANS.map((fp, i) => (
                <button
                  key={fp.label}
                  onClick={() => setActiveFloor(i)}
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    padding: "8px 16px",
                    cursor: "pointer",
                    border: `1px solid ${activeFloor === i ? "#c8a96e" : "#ddd"}`,
                    background: activeFloor === i ? "#c8a96e" : "white",
                    color: activeFloor === i ? "#0d1f1a" : "#666",
                    transition: "all 0.2s",
                  }}
                >
                  {fp.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Floor plan image */}
          <AnimatedSection>
            <div
              style={{
                position: "relative",
                cursor: "zoom-in",
                overflow: "hidden",
                boxShadow: "0 4px 40px rgba(0,0,0,0.12)",
                background: "white",
              }}
              onClick={() =>
                setLightbox({
                  src: FLOOR_PLANS[activeFloor].file,
                  label: FLOOR_PLANS[activeFloor].label,
                })
              }
            >
              <img
                src={FLOOR_PLANS[activeFloor].file}
                alt={FLOOR_PLANS[activeFloor].label}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.4s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(to top, rgba(13,31,26,0.85), transparent)",
                  padding: "24px 28px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: 10,
                      color: "#c8a96e",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    Zenia by La Pura
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: 22,
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    Mặt Bằng {FLOOR_PLANS[activeFloor].label}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.6)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  Click để phóng to
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Legend */}
          <AnimatedSection delay={100}>
            <div
              style={{
                display: "flex",
                gap: 20,
                justifyContent: "center",
                marginTop: 20,
                flexWrap: "wrap",
              }}
            >
              {[
                { color: "#f5f0d8", label: "1 Phòng ngủ" },
                { color: "#c8e0c0", label: "2PN – 1WC" },
                { color: "#7ab870", label: "2PN – 2WC" },
                { color: "#d4edaa", label: "3 Phòng ngủ" },
              ].map((l) => (
                <div
                  key={l.label}
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      background: l.color,
                      border: "1px solid #ccc",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: 12,
                      color: "#666",
                    }}
                  >
                    {l.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* LOCATION */}
      <section id="vitri" style={{ padding: "96px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div className="divider">
              <span
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 11,
                  color: accent,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                Vị Trí
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px,5vw,46px)",
                fontWeight: 300,
                textAlign: "center",
                marginBottom: 52,
              }}
            >
              Vị Trí <span style={{ color: accent }}>Đắc Địa</span>
            </h2>
          </AnimatedSection>
          <div
            className="col2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "center",
            }}
          >
            <AnimatedSection>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {[
                  {
                    icon: "🏙",
                    title: "TP. Hồ Chí Minh",
                    desc: "Kết nối trực tiếp qua Quốc lộ 13, chỉ 15–20 phút",
                  },
                  {
                    icon: "🏢",
                    title: "Trung tâm Thuận An",
                    desc: "Nằm ngay trung tâm thành phố, đầy đủ tiện ích",
                  },
                  {
                    icon: "🏭",
                    title: "Khu công nghiệp",
                    desc: "Gần KCN VSIP, Sóng Thần, Bình Dương",
                  },
                  {
                    icon: "✈️",
                    title: "Sân bay Tân Sơn Nhất",
                    desc: "Khoảng 25 phút di chuyển",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      display: "flex",
                      gap: 18,
                      padding: "18px 22px",
                      background: "#faf8f5",
                      borderLeft: `3px solid ${accent}`,
                    }}
                  >
                    <span style={{ fontSize: 20, flexShrink: 0 }}>
                      {item.icon}
                    </span>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Outfit',sans-serif",
                          fontSize: 13,
                          fontWeight: 600,
                          color: dark,
                          marginBottom: 3,
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Outfit',sans-serif",
                          fontSize: 12,
                          color: "#888",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={120}>
              <div
                style={{
                  background: `linear-gradient(135deg,${green},#0d1f1a)`,
                  padding: 40,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    border: "1px solid rgba(200,169,110,0.12)",
                  }}
                />
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: 10,
                      color: accent,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: 14,
                    }}
                  >
                    Địa chỉ dự án
                  </div>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      color: "white",
                      lineHeight: 1.7,
                      marginBottom: 28,
                    }}
                  >
                    Mặt tiền{" "}
                    <strong style={{ color: accent }}>Quốc lộ 13</strong>,
                    Phường Lái Thiêu, TP. Thuận An, Bình Dương
                  </p>
                  <div
                    style={{
                      borderTop: "1px solid rgba(200,169,110,0.2)",
                      paddingTop: 22,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Outfit',sans-serif",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 2.4,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <span style={{ color: accent }}>
                          <SvgMapPin />
                        </span>
                        Lái Thiêu, Thuận An, Bình Dương
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <span style={{ color: accent }}>
                          <SvgPhone />
                        </span>
                        <a
                          href="tel:0877191940"
                          style={{ color: accent, textDecoration: "none" }}
                        >
                          0877 191 940
                        </a>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <span style={{ color: accent }}>
                          <SvgMail />
                        </span>
                        <a
                          href="mailto:info@rever.vn"
                          style={{ color: accent, textDecoration: "none" }}
                        >
                          info@rever.vn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section
        id="tienich"
        style={{ padding: "96px 24px", background: "#f8f5f0" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div className="divider">
              <span
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 11,
                  color: accent,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                Tiện Ích
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px,5vw,46px)",
                fontWeight: 300,
                textAlign: "center",
                marginBottom: 52,
              }}
            >
              Tiện Ích <span style={{ color: accent }}>Đẳng Cấp</span>
            </h2>
          </AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))",
              gap: 10,
            }}
          >
            {AMENITIES.map((a, i) => (
              <AnimatedSection key={a.label} delay={i * 30}>
                <div className="amenity-card">
                  <div className="a-icon">
                    <a.Icon />
                  </div>
                  <div
                    style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#555",
                      lineHeight: 1.4,
                    }}
                  >
                    {a.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Ảnh tiện ích thực tế */}
          <AnimatedSection delay={100}>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 28,
                fontWeight: 300,
                textAlign: "center",
                margin: "64px 0 32px",
                color: dark,
              }}
            >
              Hình Ảnh <span style={{ color: accent }}>Thực Tế</span>
            </h3>
          </AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
              gap: 16,
            }}
          >
            {AMENITY_PHOTOS.map((photo, i) => (
              <AnimatedSection key={photo.label} delay={i * 60}>
                <div
                  onClick={() =>
                    setLightbox({ src: photo.src, label: photo.label })
                  }
                  style={{
                    position: "relative",
                    cursor: "zoom-in",
                    overflow: "hidden",
                    background: "#eee",
                    aspectRatio: "16/10",
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.06)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(13,31,26,0.8) 0%, transparent 50%)",
                      transition: "opacity 0.3s",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "16px 20px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: 17,
                        fontWeight: 600,
                        color: "white",
                        marginBottom: 4,
                      }}
                    >
                      {photo.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Outfit',sans-serif",
                        fontSize: 11,
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.5,
                      }}
                    >
                      {photo.desc}
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      background: "rgba(0,0,0,0.4)",
                      padding: "4px 8px",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="giaban"
        style={{
          padding: "80px 24px",
          background: `linear-gradient(135deg,${dark} 0%,#1a3d30 50%,${dark} 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage: `radial-gradient(${accent} 1px,transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <AnimatedSection>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 11,
                color: accent,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Rever.vn · Phân phối chính thức
            </p>
            <h2
              style={{
                fontSize: "clamp(24px,5vw,42px)",
                fontWeight: 300,
                color: "white",
                marginBottom: 18,
                lineHeight: 1.25,
              }}
            >
              Nhận <span style={{ color: accent }}>Bảng Giá Gốc</span>
              <br />
              Chủ Đầu Tư Phát Đạt
            </h2>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                marginBottom: 36,
                lineHeight: 1.9,
              }}
            >
              Vay đến 70% · Sổ hồng riêng · Bàn giao hoàn thiện nội thất 2026
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                className="btn-gold"
                onClick={() =>
                  document
                    .getElementById("lienhe")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Nhận Tư Vấn Miễn Phí
              </button>
              <a
                href="https://zalo.me/0877191940"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button className="btn-zalo">
                  <SvgZalo /> Chat Zalo
                </button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="lienhe"
        style={{ padding: "96px 24px", background: "white" }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <AnimatedSection>
            <div className="divider">
              <span
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 11,
                  color: accent,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                Đăng Ký
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(24px,5vw,40px)",
                fontWeight: 300,
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Nhận Thông Tin <span style={{ color: accent }}>Chi Tiết</span>
            </h2>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 14,
                color: "#aaa",
                textAlign: "center",
                marginBottom: 44,
                lineHeight: 1.8,
              }}
            >
              Chuyên viên <strong style={{ color: dark }}>Rever.vn</strong> sẽ
              liên hệ qua SĐT / Zalo / Viber
            </p>
          </AnimatedSection>

          {submitted ? (
            <AnimatedSection>
              <div
                style={{
                  textAlign: "center",
                  padding: "56px 32px",
                  background: "#f8f5f0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <SvgCheck />
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    marginBottom: 10,
                    color: green,
                  }}
                >
                  Đăng ký thành công!
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 14,
                    color: "#777",
                    lineHeight: 1.8,
                  }}
                >
                  Cảm ơn <strong>{form.name}</strong>! Chuyên viên Rever.vn sẽ
                  liên hệ <strong>{form.phone}</strong> sớm nhất.
                </p>
                <div
                  style={{
                    marginTop: 20,
                    display: "flex",
                    gap: 16,
                    justifyContent: "center",
                  }}
                >
                  <a
                    href="tel:0877191940"
                    style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: 13,
                      color: accent,
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    📞 Gọi ngay
                  </a>
                  <a
                    href="https://zalo.me/0877191940"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: 13,
                      color: "#0068FF",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    💬 Zalo
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection delay={80}>
              <div
                style={{
                  background: "#f8f5f0",
                  padding: "40px 36px",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 18 }}
                >
                  {[
                    {
                      field: "name",
                      label: "Họ và tên *",
                      placeholder: "Nguyễn Văn A",
                    },
                    {
                      field: "phone",
                      label: "Số điện thoại / Zalo *",
                      placeholder: "0901 234 567",
                    },
                  ].map(({ field, label, placeholder }) => (
                    <div key={field}>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "'Outfit',sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#aaa",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: 7,
                        }}
                      >
                        {label}
                      </label>
                      <input
                        type={field === "phone" ? "tel" : "text"}
                        placeholder={placeholder}
                        value={form[field]}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, [field]: e.target.value }))
                        }
                        style={{
                          width: "100%",
                          padding: "13px 16px",
                          background: "white",
                          border: "1px solid #e8e2d8",
                          outline: "none",
                          fontSize: 14,
                          color: dark,
                          transition: "border-color 0.25s",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = accent)}
                        onBlur={(e) => (e.target.style.borderColor = "#e8e2d8")}
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Outfit',sans-serif",
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#aaa",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: 7,
                      }}
                    >
                      Loại căn quan tâm
                    </label>
                    <select
                      value={form.note}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, note: e.target.value }))
                      }
                      style={{
                        width: "100%",
                        padding: "13px 16px",
                        background: "white",
                        border: "1px solid #e8e2d8",
                        outline: "none",
                        fontSize: 14,
                        color: dark,
                        appearance: "none",
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
                    style={{
                      width: "100%",
                      padding: "16px",
                      fontSize: 13,
                      marginTop: 4,
                      clipPath: "none",
                    }}
                    onClick={() => {
                      if (form.name && form.phone) setSubmitted(true);
                    }}
                    disabled={!form.name || !form.phone}
                  >
                    Gửi Thông Tin — Nhận Tư Vấn Ngay
                  </button>
                  <p
                    style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: 11,
                      color: "#ccc",
                      textAlign: "center",
                      lineHeight: 1.6,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 5,
                    }}
                  >
                    <SvgLock /> Thông tin bảo mật tuyệt đối
                  </p>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: dark,
          padding: "56px 24px 28px",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: 44,
              marginBottom: 44,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 24,
                  fontWeight: 700,
                  color: accent,
                  marginBottom: 2,
                }}
              >
                LA PURA
              </div>
              <div
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 9,
                  color: "rgba(255,255,255,0.28)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Bình Dương · Phát Đạt
              </div>
              <p
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 13,
                  lineHeight: 1.9,
                }}
              >
                Căn hộ cao cấp mặt tiền QL13. Phân phối chính thức bởi{" "}
                <strong style={{ color: "rgba(255,255,255,0.65)" }}>
                  Rever.vn
                </strong>
                .
              </p>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 10,
                  fontWeight: 700,
                  color: accent,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                Liên hệ Rever.vn
              </div>
              <div
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 13,
                  lineHeight: 2.5,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <SvgMapPin />
                  QL13, Lái Thiêu, Thuận An, BD
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <SvgPhone />
                  <a
                    href="tel:0877191940"
                    style={{ color: accent, textDecoration: "none" }}
                  >
                    0877 191 940
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <SvgMail />
                  <a
                    href="mailto:info@rever.vn"
                    style={{ color: accent, textDecoration: "none" }}
                  >
                    info@rever.vn
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 10,
                  fontWeight: 700,
                  color: accent,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                Thông tin dự án
              </div>
              <div
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 13,
                  lineHeight: 2.2,
                }}
              >
                <div style={{ color: "rgba(255,255,255,0.65)" }}>
                  Chủ đầu tư: Tập Đoàn Phát Đạt
                </div>
                <div>Tổng thầu: Central Construction</div>
                <div>Ngân hàng: Hỗ trợ 70%</div>
                <div>Bàn giao: Năm 2026</div>
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: 22,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11 }}>
              © 2025 La Pura Bình Dương · Phân phối bởi Rever.vn
            </span>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11 }}>
              Chủ đầu tư: Tập Đoàn Phát Đạt
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
