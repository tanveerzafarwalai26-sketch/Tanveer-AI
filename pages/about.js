import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-purple-500/30 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            🤖 Tanveer AI
          </h1>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Tanveer AI के बारे में
          </h1>
          <p className="text-xl text-gray-400">
            Tanveer Developer द्वारा निर्मित एक स्वतंत्र AI Platform
          </p>
        </div>

        {/* Creator Section */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">👨‍💻</div>
            <h2 className="text-3xl font-bold text-white mb-2">Tanveer Developer</h2>
            <p className="text-xl text-purple-300">Creator & Founder</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-black/30 rounded-lg p-6">
              <p className="text-2xl mb-2">🇵🇰</p>
              <p className="text-gray-300">Country</p>
              <p className="text-white font-semibold">Pakistan</p>
            </div>
            <div className="bg-black/30 rounded-lg p-6">
              <p className="text-2xl mb-2">📍</p>
              <p className="text-gray-300">Location</p>
              <p className="text-white font-semibold">Sancha, Punjab</p>
            </div>
            <div className="bg-black/30 rounded-lg p-6">
              <p className="text-2xl mb-2">💡</p>
              <p className="text-gray-300">Mission</p>
              <p className="text-white font-semibold">AI for Everyone</p>
            </div>
          </div>
        </div>

        {/* About Tanveer AI */}
        <div className="bg-slate-700/50 border border-purple-500/30 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Tanveer AI क्या है?</h2>
          <div className="space-y-4 text-gray-300">
            <p className="text-lg">
              Tanveer AI एक स्वतंत्र और शक्तिशाली Artificial Intelligence Platform है जो 
              <span className="text-purple-400 font-semibold"> Tanveer Developer </span>
              द्वारा पाकिस्तान में विकसित किया गया है।
            </p>
            <p className="text-lg">
              यह कोई external AI service नहीं है। यह एक पूरी तरह से अलग, नई, और स्वतंत्र AI 
              platform है जो आपकी सभी जरूरतों को पूरा करने के लिए डिजाइन किया गया है।
            </p>
            <p className="text-lg">
              Tanveer AI का लक्ष्य: 
              <span className="text-pink-400 font-semibold"> हर किसी को Advanced AI Technology accessible बनाना</span>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">✨ Tanveer AI की क्षमताएँ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '💬', title: 'AI Chat', desc: 'किसी भी विषय पर बातचीत करें' },
              { icon: '🖼️', title: 'Image Generation', desc: 'Text से images बनाएँ' },
              { icon: '💻', title: 'Code Generation', desc: 'कोड लिखना और समझाना' },
              { icon: '📄', title: 'Document Analysis', desc: 'PDF और दस्तावेज़ analyze करें' },
              { icon: '✍️', title: 'Writing Assistant', desc: 'अपनी लेखन सुधारें' },
              { icon: '🌐', title: 'Translation', desc: '100+ भाषाओं में अनुवाद' },
              { icon: '📊', title: 'Data Visualization', desc: 'Charts और graphs बनाएँ' },
              { icon: '🎤', title: 'Voice Support', desc: 'Voice input/output' },
              { icon: '🚀', title: '15+ Features', desc: 'और भी बहुत कुछ!' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-700/50 border border-purple-500/30 rounded-lg p-6 hover:border-purple-500 transition">
                <p className="text-3xl mb-2">{feature.icon}</p>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Tanveer AI */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-8">🎯 Tanveer AI को क्यों चुनें?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl text-green-400">✓</span>
                <div>
                  <h3 className="text-white font-semibold">स्वतंत्र Platform</h3>
                  <p className="text-gray-400 text-sm">कोई बाहरी dependency नहीं</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-green-400">✓</span>
                <div>
                  <h3 className="text-white font-semibold">Fast & Reliable</h3>
                  <p className="text-gray-400 text-sm">24/7 High Performance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-green-400">✓</span>
                <div>
                  <h3 className="text-white font-semibold">Easy to Use</h3>
                  <p className="text-gray-400 text-sm">Simple और intuitive interface</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl text-green-400">✓</span>
                <div>
                  <h3 className="text-white font-semibold">Affordable</h3>
                  <p className="text-gray-400 text-sm">Free और transparent pricing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-green-400">✓</span>
                <div>
                  <h3 className="text-white font-semibold">Multilingual</h3>
                  <p className="text-gray-400 text-sm">हिंदी, उर्दू, अंग्रेजी सहित कई भाषाएँ</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-green-400">✓</span>
                <div>
                  <h3 className="text-white font-semibold">Privacy First</h3>
                  <p className="text-gray-400 text-sm">आपकी जानकारी सुरक्षित है</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-purple-500/30">
          <p className="text-gray-400 mb-4">
            Tanveer AI एक अभूतपूर्व creation है।
          </p>
          <p className="text-gray-400 mb-8">
            यह Tanveer Developer का vision है कि हर किसी को Advanced AI Technology accessible मिले।
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-2">
              <p className="text-purple-300 font-semibold">🇵🇰 Made in Pakistan</p>
            </div>
            <div className="bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-2">
              <p className="text-purple-300 font-semibold">📍 Sancha, Punjab</p>
            </div>
            <div className="bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-2">
              <p className="text-purple-300 font-semibold">💡 Innovation</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
