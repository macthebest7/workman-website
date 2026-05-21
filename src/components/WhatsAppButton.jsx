import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/923001234567" 
    target="_blank" 
    rel="noreferrer"
    className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
  >
    <MessageSquare size={28} fill="currentColor" />
  </a>
);

export default WhatsAppButton;