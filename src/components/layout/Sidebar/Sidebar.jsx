import { useState } from "react";
import css from "./Sidebar.module.css";
import {
  FaHome,
  FaShoppingCart,
  FaBox,
  FaPlug,
  FaHandshake,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={css.sidebarMenu}>
      <div onClick={() => toggleAccordion(0)} className={css.menuItem}>
        <FaHome className={css.icon} />
        Strona główna
      </div>

      <div onClick={() => toggleAccordion(1)} className={css.menuItem}>
        <FaShoppingCart className={css.icon} />
        Zamówienia
      </div>
      {openIndex === 1 && (
        <ul className={css.subMenuList}>
          <li className={css.subMenuItem}>Lista zamówień</li>
          <li className={css.subMenuItem}>Faktury</li>
          <li className={css.subMenuItem}>Zwroty</li>
          <li className={css.subMenuItem}>Statystyki</li>
          <li className={css.subMenuItem}>Statusy zamówień</li>
          <li className={css.subMenuItem}>Szablony E-mail/SMS</li>
          <li className={css.subMenuItem}>Automatyczne akcje</li>
          <li className={css.subMenuItem}>Wydruki i eksporty</li>
          <li className={css.subMenuItem}>Import przelewów</li>
          <li className={css.subMenuItem}>Ustawienia</li>
        </ul>
      )}

      <div onClick={() => toggleAccordion(2)} className={css.menuItem}>
        <FaBox className={css.icon} />
        Produkty
      </div>
      {openIndex === 2 && (
        <ul className={css.subMenuList}>
          <li className={css.subMenuItem}>Kategorie</li>
          <li className={css.subMenuItem}>Lista produktów</li>
          <li className={css.subMenuItem}>Atrybuty</li>
        </ul>
      )}

      <div onClick={() => toggleAccordion(3)} className={css.menuItem}>
        <FaPlug className={css.icon} />
        Integracje
      </div>

      <div onClick={() => toggleAccordion(4)} className={css.menuItem}>
        <FaHandshake className={css.icon} />
        B2B Connect
      </div>

      <div onClick={() => toggleAccordion(5)} className={css.menuItem}>
        <FaQuestionCircle className={css.icon} />
        Pomoc i kontakt
      </div>
    </div>
  );
}
