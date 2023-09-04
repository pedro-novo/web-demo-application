import React from 'react';

const CodeSnippetSection: React.FC = () => {
  const codeString = `

  const message = 'Hello world' // Try edit me

  // Update header text
  document.querySelector('#header').innerHTML = message
    
  // Log to console
  console.log(message)

  `;

  return (
    <div className='w-[40%] border rounded-sm'>
      <pre>
        <code>{codeString}</code>
      </pre>
    </div>
  );
};

export default CodeSnippetSection;
