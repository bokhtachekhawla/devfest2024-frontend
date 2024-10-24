"use client"
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

// Ensure this only runs on the client side
if (typeof window !== 'undefined') {
  window.Pusher = Pusher;

  window.Echo = new Echo({
    broadcaster: 'pusher', // Use 'pusher' as the broadcaster
    key: process.env.VITE_REVERB_APP_KEY,
    wsHost: process.env.VITE_REVERB_HOST,
    wsPort: process.env.VITE_REVERB_PORT,
    wssPort: process.env.VITE_REVERB_PORT,
    forceTLS: (process.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
  });
}
