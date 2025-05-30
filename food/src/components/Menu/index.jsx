import React from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-ifood-256.png"; 
import styles from "./styles.module.css";

export default function MenuPrime() {
    const navigate = useNavigate();
  
    const items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => navigate('/')
      },
      {
        label: 'Promoções',
        icon: 'pi pi-tags',
        command: () => navigate('/promocoes')
      },
      {
        label: 'Contato',
        icon: 'pi pi-whatsapp',
        command: () => navigate('/contato')
      }
    ];
  
    const start = (
      <img alt="logo" src={logo} className={styles.logo} />
    );
  
    const end = (
      <div className={styles.menuItems}>
        {items.map((item, i) => (
          <div key={i} onClick={item.command} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    );
  
    return (
      <div className={styles.menuWrapper}>
        <Menubar className={styles.customMenubar} start={start} end={end} />
      </div>
    );
  }