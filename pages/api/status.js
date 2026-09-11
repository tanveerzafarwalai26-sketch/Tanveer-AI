import { getRotationStatus } from '../lib/groq-service';

export default async function handler(req, res) {
  try {
    const status = getRotationStatus();
    return res.status(200).json({
      success: true,
      status: {
        currentModel: status.currentModel,
        nextRotationIn: Math.floor(status.nextRotationIn / 1000) + 's',
        nextRotationAt: new Date(Date.now() + status.nextRotationIn).toISOString(),
        totalRequests: status.totalRequests,
        totalErrors: status.totalErrors,
        availableModels: status.models,
      },
    });
  } catch (error) {
    console.error('Status Error:', error);
    return res.status(500).json({
      error: error.message,
      message: 'Failed to get status',
    });
  }
}
