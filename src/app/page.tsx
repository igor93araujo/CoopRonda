'use client';

import { Main } from '@/templates/Main';
import styles from "./page.module.css";
import { Header } from '@/components/Header';
import { useState } from 'react';
import Contacts from '@/templates/Contacts/Contacts';
import Purposes from '@/templates/Purposes/Purposes';
import Rounds from '@/templates/Rounds/Rounds';
import Restricted from '@/templates/Restricted/Restricted';


export default function Home() {

  const [activePage, setActivePage] = useState<string>('home');

  const handleNavigation = (pageId: string) => {
    setActivePage(pageId);
  };

  const getSelectedComponent = () => {
    switch (activePage) {
      case 'home':
        return <Main />;
      case 'contact':
        return <Contacts />;
      case 'purpose':
        return <Purposes />;
      case 'rounds':
        return <Rounds />;
      case 'restricted':
        return <Restricted />;
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
