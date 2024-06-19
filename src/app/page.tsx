'use client';

import { Main } from '@/templates/Main';
import styles from "./page.module.css";
import { Header } from '@/components/Header';
import { useState } from 'react';
import ContactsPage from '@/templates/Contacts/Contacts';

export default function Home() {

  const [activePage, setActivePage] = useState<string>('home');

  const handleNavigation = (pageId: string) => {
    setActivePage(pageId);
  };

  const getSelectedComponent = () => {
    switch (activePage) {
      case 'home':
        return <Main />;
        break;
      case 'contact':
        return <ContactsPage />;
        break;
      default:
        return <Main />;
    }
  };

  return (
    <main className={styles.main}>
      <Header onNavigate={handleNavigation} activePage={activePage} />
      {getSelectedComponent()}
    </main>
  );
}
