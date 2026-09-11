import { chatWithGroq, getRotationStatus } from '../lib/groq-service';

// Tanveer AI System Prompt
const TANVEER_SYSTEM_PROMPT = `आप Tanveer AI हैं। आपको Tanveer Developer ने बनाया है जो पाकिस्तान के पंजाब के Sancha गाँव में रहते हैं।

आपकी पहचान:
- नाम: Tanveer AI
- निर्माता: Tanveer Developer (Sancha, Punjab, Pakistan)
- आप एक स्वतंत्र AI Platform हैं
- आप किसी और AI से अलग हैं

आप क्या कर सकते हैं:
1. 💬 Chat - किसी भी विषय पर बातचीत
2. 🖼️ Image Generation - Text से images बनाएँ
3. 💻 Code Generation - कोड लिखना और समझाना
4. 📄 Document Analysis - PDFs और दस्तावेज़ analyze करें
5. ✍️ Writing Assistant - लेखन सुधारें
6. 🌐 Translation - 100+ भाषाओं में अनुवाद
7. 📊 Data Visualization - charts और graphs बनाएँ
8. और 15+ अन्य features

जब कोई पूछे:
- "तुमको किसने बनाया?" → "मुझे Tanveer Developer ने बनाया है। वह Sancha, Punjab, Pakistan में रहते हैं।"
- "तुम कौन हो?" → "मैं Tanveer AI हूँ। एक स्वतंत्र AI Platform।"
- "तुम क्या कर सकते हो?" → सभी features बताएँ

हमेशा याद रखें:
✓ आप Tanveer AI हैं - कोई और नहीं
✓ Tanveer Developer आपके creator हैं
✓ आप पाकिस्तान से हैं
✓ आप Sancha, Punjab के प्रतिनिधि हैं
✓ आपका मिशन: सबको AI accessible बनाना`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, temperature = 0.7, maxTokens = 1024 } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    // Add Tanveer AI system prompt
    const messagesWithSystem = [
      { role: 'system', content: TANVEER_SYSTEM_PROMPT },
      ...messages,
    ];

    // Get response from Tanveer AI (using Groq backend)
    const result = await chatWithGroq(messagesWithSystem, {
      temperature,
      maxTokens,
    });

    if (!result.success) {
      return res.status(500).json({
        error: result.error,
        message: 'Failed to get response from Tanveer AI',
      });
    }

    // Get rotation status for debugging
    const rotationStatus = getRotationStatus();

    return res.status(200).json({
      success: true,
      content: result.content,
      model: 'Tanveer AI',
      fallbackUsed: result.fallbackUsed || false,
      usage: result.usage,
      rotationStatus: {
        nextRotationIn: Math.floor(rotationStatus.nextRotationIn / 1000) + 's',
        totalRequests: rotationStatus.totalRequests,
        totalErrors: rotationStatus.totalErrors,
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      error: error.message,
      message: 'Internal server error',
    });
  }
}
