import React, { useState } from 'react';
import { Edit2, Save, X } from 'lucide-react';

interface ContentSection {
  id: string;
  title: string;
  content: string;
  language: 'tr' | 'en';
}

const ContentManager = () => {
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEdit = (section: ContentSection) => {
    setEditingId(section.id);
  };

  const handleSave = (id: string, newContent: string) => {
    setSections(sections.map(section =>
      section.id === id ? { ...section, content: newContent } : section
    ));
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">İçerik Yönetimi</h1>

      <div className="space-y-4">
        {sections.map(section => (
          <div key={section.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {section.title}
                <span className="ml-2 text-sm text-gray-500">
                  ({section.language === 'tr' ? 'Türkçe' : 'English'})
                </span>
              </h3>
              {editingId !== section.id ? (
                <button
                  onClick={() => handleEdit(section)}
                  className="p-2 text-gray-600 hover:text-blue-600"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSave(section.id, section.content)}
                    className="p-2 text-green-600 hover:text-green-700"
                  >
                    <Save className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="p-2 text-gray-600 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {editingId === section.id ? (
              <textarea
                value={section.content}
                onChange={(e) => {
                  setSections(sections.map(s =>
                    s.id === section.id ? { ...s, content: e.target.value } : s
                  ));
                }}
                rows={5}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <div className="prose max-w-none">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentManager;