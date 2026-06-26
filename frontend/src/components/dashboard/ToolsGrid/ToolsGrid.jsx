import React from 'react';
import { BookOpen, Mic, PenTool, Languages, ArrowRight } from 'lucide-react';
import './ToolsGrid.css';

export default function ToolsGrid() {
  const toolsData = [
    {
      id: 1,
      title: 'AI Tutor Chat',
      desc: 'AI सँग कुरा गर्नुहोस् र शंका समाधान गर्नुहोस्',
      btnText: 'Start Chat',
      theme: 'blue',
      icon: <BookOpen size={20} />
    },
    {
      id: 2,
      title: 'Vocabulary',
      desc: 'नयाँ शब्द सिक्नुहोस् र अभ्यास गर्नुहोस्',
      btnText: 'Learn Now',
      theme: 'purple',
      icon: <Mic size={20} />
    },
    {
      id: 3,
      title: 'Speaking Practice',
      desc: 'उच्चारण सुधार र बोल्ने अभ्यास गर्नुहोस्',
      btnText: 'Practice Now',
      theme: 'orange',
      icon: <PenTool size={20} />
    },
    {
      id: 4,
      title: 'Translation Tool',
      desc: 'नेपाली ↔ English अनुवाद सजिलो र छिटो',
      btnText: 'Translate Now',
      theme: 'pink',
      icon: <Languages size={20} />
    }
  ];

  return (
    <div className="db-tools-grid">
      {toolsData.map((tool) => (
        <div key={tool.id} className="tool-card">
          <div className={`tool-head ${tool.theme}`}>
            {tool.icon}
          </div>
          <h5>{tool.title}</h5>
          <p>{tool.desc}</p>
          <button className="tool-action-btn">
            {tool.btnText} <ArrowRight size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}