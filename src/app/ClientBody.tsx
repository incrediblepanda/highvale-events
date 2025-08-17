"use client";

import { useEffect } from "react";

// Declare global for TypeScript
declare global {
  interface Window {
    netlifyIdentity: {
      on: (event: string, callback: (user?: unknown) => void) => void;
      init?: () => void;
    };
  }
}

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";

    // Initialize Netlify Identity
    if (typeof window !== 'undefined' && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }, []);

  return <body className="antialiased" suppressHydrationWarning>{children}</body>;
}
