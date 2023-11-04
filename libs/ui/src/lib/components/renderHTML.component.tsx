import React, { useEffect, useState } from 'react';

type RenderHTMLFileProps = {
  filePath: string;
};

const RenderHTMLFile: React.FC<RenderHTMLFileProps> = ({ filePath }) => {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch the HTML file content from the specified path
    const fetchHTMLContent = async () => {
      try {
        const response = await fetch(filePath);
        if (response.ok) {
          const content = await response.text();
          setHtmlContent(content);
        } else {
          console.error('Failed to fetch HTML file:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred while fetching the HTML file:', error);
      }
    };

    fetchHTMLContent();
  }, [filePath]);

  return (
    <div>
      {htmlContent ? (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RenderHTMLFile;
