import React from 'react';
import RenderHTMLFile from './renderHTML.component';

export const TOS: React.FC = () => {
  return (
    <div>
      <h1>Terms of Service</h1>
      <RenderHTMLFile filePath="../static/tos.html" />
    </div>
  );
};
