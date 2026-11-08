/**
 * Bhojan Mitra Service for Indian Food Atlas
 * Client-side interface to the serverless /api/chat endpoint.
 * Zero API keys or provider tokens are handled in frontend code.
 */

export interface ChatMessage {
  id: string;
  role: "system" | "user" | "assistant";
  content: string;
  timestamp: number;
  usedWebSearch?: boolean;
  sources?: Array<{ title: string; url: string }>;
  isError?: boolean;
}

export interface DishContextInfo {
  id: string;
  name: string;
  alternateName?: string;
  state: string;
  category?: string;
  description: string;
  ingredients: string[];
  tasteProfile: string;
  era: string;
  keyTechnique: string;
  culturalIntroduction?: string;
  earliestDocumentedEvidence?: string;
  stages?: Array<{ stageName: string; headline: string; detail?: string }>;
}

export interface ChatApiResponse {
  reply: string;
  usedWebSearch?: boolean;
  sources?: Array<{ title: string; url: string }>;
  isError?: boolean;
}

const FALLBACK_ERROR_MESSAGE = "Bhojan Mitra is taking a break. Please try again in a little while.";

/**
 * Sends chat messages to the serverless /api/chat route.
 * Never connects directly to external providers or stores keys.
 */
export async function sendChatMessageToBackend(
  messages: ChatMessage[],
  dishContext?: DishContextInfo
): Promise<ChatApiResponse> {
  try {
    const payload = {
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content.slice(0, 500),
      })),
      dishContext: dishContext
        ? {
            name: dishContext.name,
            state: dishContext.state,
            description: dishContext.description,
          }
        : undefined,
    };

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        reply: FALLBACK_ERROR_MESSAGE,
        isError: true,
      };
    }

    const data = await response.json();
    if (data.error) {
      return {
        reply: data.error,
        isError: true,
      };
    }

    return {
      reply: data.reply || FALLBACK_ERROR_MESSAGE,
      usedWebSearch: Boolean(data.usedWebSearch),
      sources: Array.isArray(data.sources) ? data.sources : [],
      isError: false,
    };
  } catch (err) {
    console.error("[Bhojan Mitra Client] Request failed:", err);
    return {
      reply: FALLBACK_ERROR_MESSAGE,
      isError: true,
    };
  }
}
