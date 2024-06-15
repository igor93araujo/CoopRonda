'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import React, { useState } from 'react';

export default function RootLayout({ children }) {
 const [sheet] = useState(() => new ServerStyleSheet());

 useServerInsertedHTML(() => (
  <>{sheet.getStyleElement()}</>
 ));

 return (
  <html lang="en">
   <head>
    {/* Adicione suas fontes personalizadas aqui */}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
   </head>
   <body>
    <StyleSheetManager sheet={sheet.instance}>
     {children}
    </StyleSheetManager>
   </body>
  </html>
 );
}
