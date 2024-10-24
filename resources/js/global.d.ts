// global.d.ts or in the same file if it's specific
export {};

declare global {
  interface Window {
    Pusher: typeof Pusher;
    Echo: Echo;
  }
}
