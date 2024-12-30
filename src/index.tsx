import React from 'react';
import { createRoot } from 'react-dom/client';
import Calendar from './components/Calendar';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(
  <Calendar year={2025}/>
);