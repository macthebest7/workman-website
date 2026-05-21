import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll window to top
    window.scrollTo(0, 0);

    // 2. Dynamic Tab Title Logic
    const pageTitles = {
      '/': 'Home',
      '/about': 'About Us',
      '/projects': 'Our Projects',
      '/contact': 'Contact Us',
      '/services/hvac': 'HVAC Systems',
      '/services/fire-fighting': 'Fire Fighting',
      '/services/ventilation': 'Ventilation Systems',
      '/services/air-conditioning': 'Air Conditioning',
      '/services/insulation': 'Thermal Insulation',
      '/services/mechanical-engineering': 'Mechanical Engineering',
      '/services/testing-commissioning': 'Testing & Commissioning',
      '/services/maintenance': 'Maintenance & AMC',
    };

    const currentPage = pageTitles[pathname] || 'Mechanical Services';
    document.title = `${currentPage} | Worksman Services`;

  }, [pathname]);

  return null;
}