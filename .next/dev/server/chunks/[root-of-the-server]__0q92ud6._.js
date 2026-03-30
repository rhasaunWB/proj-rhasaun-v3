module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/Halcyon/clients/rhasaun-v3/site/src/app/api/submit-contact/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Halcyon$2f$clients$2f$rhasaun$2d$v3$2f$site$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Halcyon/clients/rhasaun-v3/site/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Halcyon$2f$clients$2f$rhasaun$2d$v3$2f$site$2f$node_modules$2f40$notionhq$2f$client$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Halcyon/clients/rhasaun-v3/site/node_modules/@notionhq/client/build/src/index.js [app-route] (ecmascript)");
;
;
async function POST(request) {
    const siteToken = request.headers.get('x-site-token');
    if (siteToken !== process.env.SITE_TOKEN) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Halcyon$2f$clients$2f$rhasaun$2d$v3$2f$site$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Unauthorized'
        }, {
            status: 401
        });
    }
    const { name, email, message } = await request.json();
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Halcyon$2f$clients$2f$rhasaun$2d$v3$2f$site$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Server configuration error'
        }, {
            status: 500
        });
    }
    const notion = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Halcyon$2f$clients$2f$rhasaun$2d$v3$2f$site$2f$node_modules$2f40$notionhq$2f$client$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Client"]({
        auth: process.env.NOTION_API_KEY
    });
    try {
        await notion.pages.create({
            parent: {
                database_id: process.env.NOTION_DATABASE_ID
            },
            properties: {
                Name: {
                    title: [
                        {
                            text: {
                                content: name
                            }
                        }
                    ]
                },
                Email: {
                    email: email
                },
                Message: {
                    rich_text: [
                        {
                            text: {
                                content: message
                            }
                        }
                    ]
                }
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Halcyon$2f$clients$2f$rhasaun$2d$v3$2f$site$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Success'
        }, {
            status: 200
        });
    } catch (error) {
        console.error(error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Halcyon$2f$clients$2f$rhasaun$2d$v3$2f$site$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Failed to submit to Notion'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0q92ud6._.js.map