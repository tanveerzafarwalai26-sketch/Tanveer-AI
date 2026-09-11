import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import ChatInterface from '../components/ChatInterface';
import ImageGenerator from '../components/ImageGenerator';
import Features from '../components/Features';

export default function Home() {
  const [activeTab, setActiveTab] = React.useState('chat');

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-purple-500/30 z-40">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              🤖 Tanveer AI
            </h1>
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('chat')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === 'chat'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:bg-purple-600/20'
                }`}
              >
                💬 Chat
              </button>
              <button
                onClick={() => setActiveTab('image')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === 'image'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:bg-purple-600/20'
                }`}
              >
                🖼️ Image
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === 'features'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:bg-purple-600/20'
                }`}
              >
                ⚡ Features
              </button>
              <Link href="/about">
                <a className="px-4 py-2 rounded-lg text-gray-300 hover:bg-purple-600/20 transition">
                  ℹ️ About
                </a>
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20">
          {activeTab === 'chat' && <ChatInterface />}
          {activeTab === 'image' && <ImageGenerator />}
          {activeTab === 'features' && <Features />}
        </main>
      </div>
    </Layout>
  );
}
