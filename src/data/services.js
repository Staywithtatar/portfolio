import {
  LayoutDashboard,
  Building2,
  ShoppingCart,
  Package,
  FileBarChart,
  Users,
  Server,
  FileText,
} from "lucide-react";

export const services = [
  {
    icon: LayoutDashboard,
    title: { en: "Admin Dashboard", th: "ระบบ Admin Dashboard" },
    description: {
      en: "Internal dashboards with role-based access, charts, tables, and management flows.",
      th: "Dashboard ภายในองค์กร พร้อมระบบสิทธิ์ผู้ใช้ กราฟ ตาราง และ flow การจัดการ",
    },
  },
  {
    icon: Building2,
    title: { en: "ERP / Internal Systems", th: "ระบบ ERP / ภายในองค์กร" },
    description: {
      en: "Custom ERP modules tailored to your business workflow — from material to report.",
      th: "ระบบ ERP สั่งทำตาม workflow ธุรกิจ — ตั้งแต่ material จนถึง report",
    },
  },
  {
    icon: ShoppingCart,
    title: { en: "E-commerce Website", th: "เว็บไซต์ E-commerce" },
    description: {
      en: "Online stores with product catalog, cart, checkout, and seller management.",
      th: "ร้านค้าออนไลน์ พร้อม product catalog, ตะกร้า, checkout และระบบจัดการผู้ขาย",
    },
  },
  {
    icon: Package,
    title: { en: "Stock / Inventory System", th: "ระบบ Stock / Inventory" },
    description: {
      en: "Inventory tracking, stock movement, warehouse logic, and reorder alerts.",
      th: "ติดตามสต๊อก การเคลื่อนไหวสินค้า logic คลังสินค้า และแจ้งเตือนสั่งซื้อ",
    },
  },
  {
    icon: FileBarChart,
    title: { en: "Report System", th: "ระบบรายงาน" },
    description: {
      en: "Reporting modules with filters, exports (PDF/Excel), and visualizations.",
      th: "ระบบรายงานพร้อม filter, export (PDF/Excel) และการแสดงผลเชิงภาพ",
    },
  },
  {
    icon: Users,
    title: { en: "Customer / Order Management", th: "จัดการลูกค้า / Order" },
    description: {
      en: "CRM-style customer profiles and order pipelines with status tracking.",
      th: "ระบบ CRM โปรไฟล์ลูกค้าและ pipeline การสั่งซื้อ พร้อมติดตามสถานะ",
    },
  },
  {
    icon: Server,
    title: { en: "VPS Deployment", th: "Deploy ขึ้น VPS" },
    description: {
      en: "Server setup, Docker containers, domain & SSL — from zero to live deployment.",
      th: "ตั้งค่า server, Docker container, โดเมน & SSL — ตั้งแต่ศูนย์จนเปิดใช้งานจริง",
    },
  },
  {
    icon: FileText,
    title: { en: "System Documentation", th: "เอกสารระบบ" },
    description: {
      en: "Technical documentation, API references, and clean handover materials.",
      th: "เอกสารทางเทคนิค API reference และเอกสารส่งมอบงานที่ชัดเจน",
    },
  },
];
