'use client';

import React from 'react';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-cormorant font-bold text-sage mb-6">
          TinaCMS Admin Panel
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-cormorant font-semibold text-sage mb-4">
            Setup Required
          </h2>

          <p className="text-sage/70 mb-6 leading-relaxed">
            To enable the visual editor, you need to complete the TinaCMS Cloud setup:
          </p>

          <ol className="text-left text-sage/70 space-y-3 mb-8">
            <li><strong>1.</strong> Create an account at <a href="https://tina.io" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">tina.io</a></li>
            <li><strong>2.</strong> Connect your GitHub repository (incrediblepanda/highvale-events)</li>
            <li><strong>3.</strong> Get your Client ID and Token from TinaCMS Cloud</li>
            <li><strong>4.</strong> Add the environment variables to Netlify:
              <ul className="ml-6 mt-2 text-sm">
                <li>• NEXT_PUBLIC_TINA_CLIENT_ID</li>
                <li>• TINA_TOKEN</li>
              </ul>
            </li>
            <li><strong>5.</strong> Redeploy your site</li>
          </ol>

          <div className="bg-cream p-4 rounded-lg">
            <p className="text-sm text-sage/60">
              Once configured, this page will display the TinaCMS visual editor where you can drag-and-drop content blocks and edit your site visually.
            </p>
          </div>
        </div>

        <div className="text-sm text-sage/50">
          <p>For detailed instructions, check the TINACMS_SETUP.md file in your project.</p>
        </div>
      </div>
    </div>
  );
}
