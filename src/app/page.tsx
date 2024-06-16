'use client';

import { MainPage } from '@/templates/MainPage';
import styles from "./page.module.css";
import { Header } from '@/components/Header';
import { useState } from 'react';
import ContactsPage from '@/templates/ContactsPage/ContactsPage';

export default function Home() {
  
  const [activePage, setActivePage] = useState<string>('home');

  const handleNavigation = (pageId: string) => {
    setActivePage(pageId);
  };

  const getSelectedComponent = () => {
    switch (activePage) {
      case 'home':
        return <MainPage />;
        break;
      case 'contact':
        return <ContactsPage />;
        break;
      default:
        return <MainPage />;
    }
  };

  return (
    <main className={styles.main}>
      <Header onNavigate={handleNavigation} activePage={activePage}/>
      {getSelectedComponent()}
    </main>
  );
}
