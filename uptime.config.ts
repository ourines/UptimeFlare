const pageConfig = {
  title: "Noin.ai Status",
  links: [
    { link: 'https://new.noin.ai', label: 'NewAPI' },
    { link: 'https://ai.ourines.com', label: 'API CRS' },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    // ===== NewAPI (new.noin.ai) - Relay 集群 =====
    {
      id: 'newapi-sonnet-4-6',
      name: 'Claude Sonnet 4.6',
      method: 'POST',
      target: 'https://new.noin.ai/v1/messages',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'sk-kzSAoXg3DIb4YORISjy1MLrAeHfHSWhCWG9G8ZrnPE8VuYDG',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 5,
        messages: [{ role: 'user', content: 'hi' }],
      }),
      expectedCodes: [200],
      responseKeyword: 'content',
      timeout: 30000,
    },
    {
      id: 'newapi-haiku-4-5',
      name: 'Claude Haiku 4.5',
      method: 'POST',
      target: 'https://new.noin.ai/v1/messages',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'sk-kzSAoXg3DIb4YORISjy1MLrAeHfHSWhCWG9G8ZrnPE8VuYDG',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 5,
        messages: [{ role: 'user', content: 'hi' }],
      }),
      expectedCodes: [200],
      responseKeyword: 'content',
      timeout: 30000,
    },
    {
      id: 'newapi-opus-4-6',
      name: 'Claude Opus 4.6',
      method: 'POST',
      target: 'https://new.noin.ai/v1/messages',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'sk-kzSAoXg3DIb4YORISjy1MLrAeHfHSWhCWG9G8ZrnPE8VuYDG',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 5,
        messages: [{ role: 'user', content: 'hi' }],
      }),
      expectedCodes: [200],
      responseKeyword: 'content',
      timeout: 60000,
    },
    // ===== NewAPI US (new-us.noin.ai) - CF Proxied =====
    {
      id: 'newapi-us-sonnet-4-6',
      name: 'US - Claude Sonnet 4.6',
      method: 'POST',
      target: 'https://new-us.noin.ai/v1/messages',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'sk-kzSAoXg3DIb4YORISjy1MLrAeHfHSWhCWG9G8ZrnPE8VuYDG',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 5,
        messages: [{ role: 'user', content: 'hi' }],
      }),
      expectedCodes: [200],
      responseKeyword: 'content',
      timeout: 30000,
    },
    // ===== API CRS (ai.ourines.com) =====
    {
      id: 'crs-endpoint',
      name: 'API CRS Endpoint',
      method: 'GET',
      target: 'https://ai.ourines.com',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },
  ],
  notification: {
    // appriseApiServer: "https://apprise.example.com/notify",
    // recipientUrl: "tgram://bottoken/ChatID",
    timeZone: "Asia/Shanghai",
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
    },
  },
}

export { pageConfig, workerConfig }
