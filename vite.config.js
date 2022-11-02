import { configDefaults } from "vitest/config";
import { VitePWA } from "vite-plugin-pwa";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
        plugins: [
                react(),
                VitePWA({
                        registerType: "autoUpdate",
                        devOptions: {
                                enabled: true,
                        },
                        workbox: {
                                globPatterns: [
                                        "**/*.{js,css,html,ico,png,svg}",
                                ],
                                sourcemap: true,
                                runtimeCaching: [
                                        {
                                                urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                                                handler: "CacheFirst",
                                                options: {
                                                        cacheName: "google-fonts-cache",
                                                        expiration: {
                                                                maxEntries: 10,
                                                                maxAgeSeconds:
                                                                        60 *
                                                                        60 *
                                                                        24 *
                                                                        365, // <== 365 days
                                                        },
                                                        cacheableResponse: {
                                                                statuses: [
                                                                        0, 200,
                                                                ],
                                                        },
                                                },
                                        },
                                        {
                                                urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                                                handler: "CacheFirst",
                                                options: {
                                                        cacheName: "gstatic-fonts-cache",
                                                        expiration: {
                                                                maxEntries: 10,
                                                                maxAgeSeconds:
                                                                        60 *
                                                                        60 *
                                                                        24 *
                                                                        365, // <== 365 days
                                                        },
                                                        cacheableResponse: {
                                                                statuses: [
                                                                        0, 200,
                                                                ],
                                                        },
                                                },
                                        },
                                        {
                                                handler: "NetworkOnly",
                                                urlPattern: /\/api\/.*\/*.json/,
                                                method: "POST",
                                                options: {
                                                        backgroundSync: {
                                                                name: "myQueueName",
                                                                options: {
                                                                        maxRetentionTime:
                                                                                24 *
                                                                                60,
                                                                },
                                                        },
                                                },
                                        },
                                ],
                        },
                        includeAssets: ["favicon.ico", "apple-touch-icon.png"],
                        manifest: {
                                name: "TODO-App",
                                short_name: "TODO",
                                description: "TODO Application",
                                theme_color: "hsl(280, 87%, 65%)",
                                icons: [
                                        {
                                                src: "pwa-192x192.png",
                                                sizes: "192x192",
                                                type: "image/png",
                                        },
                                        {
                                                src: "pwa-512x512.png",
                                                sizes: "512x512",
                                                type: "image/png",
                                        },
                                ],
                        },
                }),
        ],
        test: {
                exclude: [
                        ...configDefaults.exclude,
                        "**/*.spec.js",
                        "**/*.spec.jsx",
                ],
        },
});
