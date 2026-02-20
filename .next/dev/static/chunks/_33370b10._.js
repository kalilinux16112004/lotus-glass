(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-11 rounded-md px-8',
            icon: 'h-10 w-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = 'Input';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70');
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/alert-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialog",
    ()=>AlertDialog,
    "AlertDialogAction",
    ()=>AlertDialogAction,
    "AlertDialogCancel",
    ()=>AlertDialogCancel,
    "AlertDialogContent",
    ()=>AlertDialogContent,
    "AlertDialogDescription",
    ()=>AlertDialogDescription,
    "AlertDialogFooter",
    ()=>AlertDialogFooter,
    "AlertDialogHeader",
    ()=>AlertDialogHeader,
    "AlertDialogOverlay",
    ()=>AlertDialogOverlay,
    "AlertDialogPortal",
    ()=>AlertDialogPortal,
    "AlertDialogTitle",
    ()=>AlertDialogTitle,
    "AlertDialogTrigger",
    ()=>AlertDialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const AlertDialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const AlertDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const AlertDialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const AlertDialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = AlertDialogOverlay;
AlertDialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const AlertDialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/alert-dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg', className),
                ...props
            }, void 0, false, {
                fileName: "[project]/components/ui/alert-dialog.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = AlertDialogContent;
AlertDialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const AlertDialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col space-y-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = AlertDialogHeader;
AlertDialogHeader.displayName = 'AlertDialogHeader';
const AlertDialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = AlertDialogFooter;
AlertDialogFooter.displayName = 'AlertDialogFooter';
const AlertDialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = AlertDialogTitle;
AlertDialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const AlertDialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm text-muted-foreground', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = AlertDialogDescription;
AlertDialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
const AlertDialogAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c9 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c10 = AlertDialogAction;
AlertDialogAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const AlertDialogCancel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c11 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: 'outline'
        }), 'mt-2 sm:mt-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c12 = AlertDialogCancel;
AlertDialogCancel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "AlertDialogOverlay");
__turbopack_context__.k.register(_c1, "AlertDialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "AlertDialogContent");
__turbopack_context__.k.register(_c3, "AlertDialogHeader");
__turbopack_context__.k.register(_c4, "AlertDialogFooter");
__turbopack_context__.k.register(_c5, "AlertDialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "AlertDialogTitle");
__turbopack_context__.k.register(_c7, "AlertDialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "AlertDialogDescription");
__turbopack_context__.k.register(_c9, "AlertDialogAction$React.forwardRef");
__turbopack_context__.k.register(_c10, "AlertDialogAction");
__turbopack_context__.k.register(_c11, "AlertDialogCancel$React.forwardRef");
__turbopack_context__.k.register(_c12, "AlertDialogCancel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/admin-projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_PROJECTS",
    ()=>DEFAULT_PROJECTS,
    "getStoredProjects",
    ()=>getStoredProjects,
    "saveStoredProjects",
    ()=>saveStoredProjects
]);
const STORAGE_KEY = "lotus-admin-projects";
const DEFAULT_PROJECTS = [
    {
        id: "default-1",
        image: "/images/project-1.jpg",
        title: "Horizon Corporate Tower",
        location: "Mumbai, Maharashtra",
        type: "Curtain Wall System"
    },
    {
        id: "default-2",
        image: "/images/project-2.jpg",
        title: "Galaxy Mall & Convention Centre",
        location: "Bangalore, Karnataka",
        type: "ACP Cladding & Glazing"
    },
    {
        id: "default-3",
        image: "/images/project-3.jpg",
        title: "MedLife Super Speciality Hospital",
        location: "Delhi NCR",
        type: "Structural Glazing"
    },
    {
        id: "default-4",
        image: "/images/project-4.jpg",
        title: "The Grand Heritage Hotel",
        location: "Jaipur, Rajasthan",
        type: "Spider Glazing & Canopy"
    }
];
const getStoredProjects = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
        return [];
    }
    try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) {
            return [];
        }
        return parsed.filter((project)=>Boolean(project?.id) && Boolean(project?.title) && Boolean(project?.location) && Boolean(project?.type));
    } catch  {
        return [];
    }
};
const saveStoredProjects = (projects)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/contact-submissions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addContactSubmission",
    ()=>addContactSubmission,
    "getStoredContactSubmissions",
    ()=>getStoredContactSubmissions,
    "saveStoredContactSubmissions",
    ()=>saveStoredContactSubmissions
]);
const STORAGE_KEY = "lotus-contact-submissions";
const getStoredContactSubmissions = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const rawData = window.localStorage.getItem(STORAGE_KEY);
    if (!rawData) {
        return [];
    }
    try {
        const parsedData = JSON.parse(rawData);
        if (!Array.isArray(parsedData)) {
            return [];
        }
        return parsedData.filter((submission)=>Boolean(submission?.id) && Boolean(submission?.name) && Boolean(submission?.email) && Boolean(submission?.message));
    } catch  {
        return [];
    }
};
const saveStoredContactSubmissions = (submissions)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
};
const addContactSubmission = (submissionInput)=>{
    const currentSubmissions = getStoredContactSubmissions();
    const newSubmission = {
        id: crypto.randomUUID(),
        submittedAt: new Date().toISOString(),
        ...submissionInput
    };
    const updatedSubmissions = [
        newSubmission,
        ...currentSubmissions
    ];
    saveStoredContactSubmissions(updatedSubmissions);
    return newSubmission;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-mobile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useIsMobile.useEffect": ()=>{
            const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
            const onChange = {
                "useIsMobile.useEffect.onChange": ()=>{
                    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                }
            }["useIsMobile.useEffect.onChange"];
            mql.addEventListener('change', onChange);
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            return ({
                "useIsMobile.useEffect": ()=>mql.removeEventListener('change', onChange)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return !!isMobile;
}
_s(useIsMobile, "D6B2cPXNCaIbeOx+abFr1uxLRM0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/Admin/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/admin-projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contact$2d$submissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contact-submissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-mobile.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const PROJECT_CARD_ASPECT_RATIO = 16 / 10;
function AdminDashboardPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("projects");
    const [adminEmail, setAdminEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("admin@gmail.com");
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [contactSubmissions, setContactSubmissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showProjectForm, setShowProjectForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newProject, setNewProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        location: "",
        type: "",
        image: ""
    });
    const [rawImageDataUrl, setRawImageDataUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [uploadedImageSize, setUploadedImageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 16,
        height: 9
    });
    const [imageEditError, setImageEditError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isApplyingCrop, setIsApplyingCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [zoomLevel, setZoomLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [cropSizePercent, setCropSizePercent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(90);
    const [cropSelection, setCropSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 5,
        y: 5,
        width: 90,
        height: 90
    });
    const [isDraggingSelection, setIsDraggingSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isResizingSelection, setIsResizingSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeResizeHandle, setActiveResizeHandle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragStart, setDragStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [selectionAtDragStart, setSelectionAtDragStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 5,
        y: 5
    });
    const [cropAtDragStart, setCropAtDragStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 5,
        y: 5,
        width: 90,
        height: 90
    });
    const cropEditorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pinchStartDistanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pinchStartZoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const [deleteDialogOpen, setDeleteDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingDelete, setPendingDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardPage.useEffect": ()=>{
            const isAuthenticated = sessionStorage.getItem("lotus-admin-auth") === "true";
            if (!isAuthenticated) {
                router.replace("/Admin");
                return;
            }
            const storedEmail = sessionStorage.getItem("lotus-admin-email");
            if (storedEmail) {
                setAdminEmail(storedEmail);
            }
            setProjects((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredProjects"])());
            setContactSubmissions((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contact$2d$submissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredContactSubmissions"])());
        }
    }["AdminDashboardPage.useEffect"], [
        router
    ]);
    const handleSignOut = ()=>{
        sessionStorage.removeItem("lotus-admin-auth");
        sessionStorage.removeItem("lotus-admin-email");
        router.push("/Admin");
    };
    const handleProjectFieldChange = (field, value)=>{
        setNewProject((previous)=>({
                ...previous,
                [field]: value
            }));
    };
    const getAspectLockedSelection = (imageWidth, imageHeight, sizePercent, centerX = 50, centerY = 50)=>{
        const imageAspect = imageWidth / imageHeight;
        const maxWidthPercent = PROJECT_CARD_ASPECT_RATIO > imageAspect ? 100 : PROJECT_CARD_ASPECT_RATIO / imageAspect * 100;
        const maxHeightPercent = PROJECT_CARD_ASPECT_RATIO > imageAspect ? imageAspect / PROJECT_CARD_ASPECT_RATIO * 100 : 100;
        const scale = Math.min(1, Math.max(0.3, sizePercent / 100));
        const width = maxWidthPercent * scale;
        const height = maxHeightPercent * scale;
        const x = Math.min(100 - width, Math.max(0, centerX - width / 2));
        const y = Math.min(100 - height, Math.max(0, centerY - height / 2));
        return {
            x: Number(x.toFixed(2)),
            y: Number(y.toFixed(2)),
            width: Number(width.toFixed(2)),
            height: Number(height.toFixed(2))
        };
    };
    const handleProjectImageUrlChange = (value)=>{
        setRawImageDataUrl("");
        setUploadedImageSize({
            width: 16,
            height: 9
        });
        setImageEditError("");
        setZoomLevel(1);
        setCropSizePercent(90);
        setCropSelection({
            x: 5,
            y: 5,
            width: 90,
            height: 90
        });
        setIsResizingSelection(false);
        setActiveResizeHandle(null);
        handleProjectFieldChange("image", value);
    };
    const handleProjectImageFileChange = async (event)=>{
        const selectedFile = event.target.files?.[0];
        if (!selectedFile) {
            return;
        }
        const fileReader = new FileReader();
        const dataUrl = await new Promise((resolve, reject)=>{
            fileReader.onload = ()=>{
                if (typeof fileReader.result === "string") {
                    resolve(fileReader.result);
                    return;
                }
                reject(new Error("Could not read selected image."));
            };
            fileReader.onerror = ()=>reject(new Error("Could not read selected image."));
            fileReader.readAsDataURL(selectedFile);
        }).catch(()=>"");
        event.target.value = "";
        if (!dataUrl) {
            setImageEditError("Unable to load selected image. Please try another file.");
            return;
        }
        const imageDimensions = await new Promise((resolve, reject)=>{
            const image = new Image();
            image.onload = ()=>resolve({
                    width: image.naturalWidth,
                    height: image.naturalHeight
                });
            image.onerror = ()=>reject(new Error("Unable to detect image size."));
            image.src = dataUrl;
        }).catch(()=>({
                width: 16,
                height: 9
            }));
        setRawImageDataUrl(dataUrl);
        setUploadedImageSize(imageDimensions);
        setImageEditError("");
        setZoomLevel(1);
        setCropSizePercent(90);
        setCropSelection(isMobile ? {
            x: 5,
            y: 5,
            width: 90,
            height: 90
        } : getAspectLockedSelection(imageDimensions.width, imageDimensions.height, 90));
        setIsResizingSelection(false);
        setActiveResizeHandle(null);
        handleProjectFieldChange("image", dataUrl);
    };
    const startSelectionDrag = (event)=>{
        event.preventDefault();
        setIsDraggingSelection(true);
        setDragStart({
            x: event.clientX,
            y: event.clientY
        });
        setSelectionAtDragStart({
            x: cropSelection.x,
            y: cropSelection.y
        });
    };
    const startSelectionTouchDrag = (event)=>{
        if (!isMobile || event.touches.length !== 1) {
            return;
        }
        const touchPoint = event.touches[0];
        setIsDraggingSelection(true);
        setDragStart({
            x: touchPoint.clientX,
            y: touchPoint.clientY
        });
        setSelectionAtDragStart({
            x: cropSelection.x,
            y: cropSelection.y
        });
    };
    const handleEditorMouseMove = (event)=>{
        if (!isDraggingSelection && !isResizingSelection || !cropEditorRef.current) {
            return;
        }
        const bounds = cropEditorRef.current.getBoundingClientRect();
        const deltaX = event.clientX - dragStart.x;
        const deltaY = event.clientY - dragStart.y;
        if (isResizingSelection && activeResizeHandle) {
            const deltaXPercent = deltaX / bounds.width * 100;
            const deltaYPercent = deltaY / bounds.height * 100;
            const minimumSize = 8;
            setCropSelection(()=>{
                let { x, y, width, height } = cropAtDragStart;
                if (activeResizeHandle.includes("w")) {
                    x = cropAtDragStart.x + deltaXPercent;
                    width = cropAtDragStart.width - deltaXPercent;
                }
                if (activeResizeHandle.includes("e")) {
                    width = cropAtDragStart.width + deltaXPercent;
                }
                if (activeResizeHandle.includes("n")) {
                    y = cropAtDragStart.y + deltaYPercent;
                    height = cropAtDragStart.height - deltaYPercent;
                }
                if (activeResizeHandle.includes("s")) {
                    height = cropAtDragStart.height + deltaYPercent;
                }
                if (width < minimumSize) {
                    if (activeResizeHandle.includes("w")) {
                        x = cropAtDragStart.x + (cropAtDragStart.width - minimumSize);
                    }
                    width = minimumSize;
                }
                if (height < minimumSize) {
                    if (activeResizeHandle.includes("n")) {
                        y = cropAtDragStart.y + (cropAtDragStart.height - minimumSize);
                    }
                    height = minimumSize;
                }
                if (x < 0) {
                    if (activeResizeHandle.includes("w")) {
                        width += x;
                    }
                    x = 0;
                }
                if (y < 0) {
                    if (activeResizeHandle.includes("n")) {
                        height += y;
                    }
                    y = 0;
                }
                if (x + width > 100) {
                    if (activeResizeHandle.includes("e")) {
                        width = 100 - x;
                    } else {
                        x = 100 - width;
                    }
                }
                if (y + height > 100) {
                    if (activeResizeHandle.includes("s")) {
                        height = 100 - y;
                    } else {
                        y = 100 - height;
                    }
                }
                return {
                    x: Number(x.toFixed(2)),
                    y: Number(y.toFixed(2)),
                    width: Number(width.toFixed(2)),
                    height: Number(height.toFixed(2))
                };
            });
            return;
        }
        const nextX = selectionAtDragStart.x + deltaX / bounds.width * 100;
        const nextY = selectionAtDragStart.y + deltaY / bounds.height * 100;
        setCropSelection((previous)=>({
                ...previous,
                x: Number(Math.min(100 - previous.width, Math.max(0, nextX)).toFixed(2)),
                y: Number(Math.min(100 - previous.height, Math.max(0, nextY)).toFixed(2))
            }));
    };
    const stopSelectionDrag = ()=>{
        if (isDraggingSelection) {
            setIsDraggingSelection(false);
        }
        if (isResizingSelection) {
            setIsResizingSelection(false);
            setActiveResizeHandle(null);
        }
    };
    const startResize = (handle, clientX, clientY)=>{
        setIsDraggingSelection(false);
        setIsResizingSelection(true);
        setActiveResizeHandle(handle);
        setDragStart({
            x: clientX,
            y: clientY
        });
        setCropAtDragStart(cropSelection);
    };
    const startResizeMouse = (handle, event)=>{
        event.preventDefault();
        event.stopPropagation();
        startResize(handle, event.clientX, event.clientY);
    };
    const startResizeTouch = (handle, event)=>{
        if (event.touches.length !== 1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        const touchPoint = event.touches[0];
        startResize(handle, touchPoint.clientX, touchPoint.clientY);
    };
    const handleEditorTouchMove = (event)=>{
        if (!isMobile || !cropEditorRef.current) {
            return;
        }
        if (event.touches.length === 2 && pinchStartDistanceRef.current) {
            event.preventDefault();
            const firstTouch = event.touches[0];
            const secondTouch = event.touches[1];
            const distance = Math.hypot(secondTouch.clientX - firstTouch.clientX, secondTouch.clientY - firstTouch.clientY);
            const scaleFactor = distance / pinchStartDistanceRef.current;
            const nextZoom = pinchStartZoomRef.current * scaleFactor;
            setZoomLevel(Number(Math.min(3, Math.max(1, nextZoom)).toFixed(2)));
            return;
        }
        if (isResizingSelection && activeResizeHandle && event.touches.length === 1) {
            event.preventDefault();
            const touchPoint = event.touches[0];
            const bounds = cropEditorRef.current.getBoundingClientRect();
            const deltaX = touchPoint.clientX - dragStart.x;
            const deltaY = touchPoint.clientY - dragStart.y;
            const deltaXPercent = deltaX / bounds.width * 100;
            const deltaYPercent = deltaY / bounds.height * 100;
            const minimumSize = 8;
            setCropSelection(()=>{
                let { x, y, width, height } = cropAtDragStart;
                if (activeResizeHandle.includes("w")) {
                    x = cropAtDragStart.x + deltaXPercent;
                    width = cropAtDragStart.width - deltaXPercent;
                }
                if (activeResizeHandle.includes("e")) {
                    width = cropAtDragStart.width + deltaXPercent;
                }
                if (activeResizeHandle.includes("n")) {
                    y = cropAtDragStart.y + deltaYPercent;
                    height = cropAtDragStart.height - deltaYPercent;
                }
                if (activeResizeHandle.includes("s")) {
                    height = cropAtDragStart.height + deltaYPercent;
                }
                if (width < minimumSize) {
                    if (activeResizeHandle.includes("w")) {
                        x = cropAtDragStart.x + (cropAtDragStart.width - minimumSize);
                    }
                    width = minimumSize;
                }
                if (height < minimumSize) {
                    if (activeResizeHandle.includes("n")) {
                        y = cropAtDragStart.y + (cropAtDragStart.height - minimumSize);
                    }
                    height = minimumSize;
                }
                if (x < 0) {
                    if (activeResizeHandle.includes("w")) {
                        width += x;
                    }
                    x = 0;
                }
                if (y < 0) {
                    if (activeResizeHandle.includes("n")) {
                        height += y;
                    }
                    y = 0;
                }
                if (x + width > 100) {
                    if (activeResizeHandle.includes("e")) {
                        width = 100 - x;
                    } else {
                        x = 100 - width;
                    }
                }
                if (y + height > 100) {
                    if (activeResizeHandle.includes("s")) {
                        height = 100 - y;
                    } else {
                        y = 100 - height;
                    }
                }
                return {
                    x: Number(x.toFixed(2)),
                    y: Number(y.toFixed(2)),
                    width: Number(width.toFixed(2)),
                    height: Number(height.toFixed(2))
                };
            });
            return;
        }
        if (!isDraggingSelection || event.touches.length !== 1) {
            return;
        }
        event.preventDefault();
        const touchPoint = event.touches[0];
        const bounds = cropEditorRef.current.getBoundingClientRect();
        const deltaX = touchPoint.clientX - dragStart.x;
        const deltaY = touchPoint.clientY - dragStart.y;
        const nextX = selectionAtDragStart.x + deltaX / bounds.width * 100;
        const nextY = selectionAtDragStart.y + deltaY / bounds.height * 100;
        setCropSelection((previous)=>({
                ...previous,
                x: Number(Math.min(100 - previous.width, Math.max(0, nextX)).toFixed(2)),
                y: Number(Math.min(100 - previous.height, Math.max(0, nextY)).toFixed(2))
            }));
    };
    const handleCropSizeChange = (value)=>{
        const boundedValue = Math.min(100, Math.max(30, value));
        setCropSizePercent(boundedValue);
        const currentCenterX = cropSelection.x + cropSelection.width / 2;
        const currentCenterY = cropSelection.y + cropSelection.height / 2;
        setCropSelection(getAspectLockedSelection(uploadedImageSize.width, uploadedImageSize.height, boundedValue, currentCenterX, currentCenterY));
    };
    const toggleZoom = ()=>{
        setZoomLevel((previous)=>previous > 1 ? 1 : 2);
    };
    const handlePreviewTouchStart = (event)=>{
        if (!isMobile || event.touches.length !== 2) {
            return;
        }
        const firstTouch = event.touches[0];
        const secondTouch = event.touches[1];
        pinchStartDistanceRef.current = Math.hypot(secondTouch.clientX - firstTouch.clientX, secondTouch.clientY - firstTouch.clientY);
        pinchStartZoomRef.current = zoomLevel;
        setIsDraggingSelection(false);
        setIsResizingSelection(false);
        setActiveResizeHandle(null);
    };
    const handlePreviewTouchEnd = (event)=>{
        if (!isMobile) {
            return;
        }
        if (event.touches.length < 2) {
            pinchStartDistanceRef.current = null;
        }
        if (event.touches.length === 0) {
            stopSelectionDrag();
        }
    };
    const applyImageCrop = async ()=>{
        if (!rawImageDataUrl) {
            return;
        }
        const loadImage = (source)=>new Promise((resolve, reject)=>{
                const image = new Image();
                image.onload = ()=>resolve(image);
                image.onerror = ()=>reject(new Error("Unable to process image."));
                image.src = source;
            });
        setIsApplyingCrop(true);
        setImageEditError("");
        try {
            const sourceImage = await loadImage(rawImageDataUrl);
            const zoom = Math.min(3, Math.max(1, zoomLevel));
            const sourceWidthPercent = cropSelection.width / zoom;
            const sourceHeightPercent = cropSelection.height / zoom;
            const sourceXPercent = (cropSelection.x - 50) / zoom + 50;
            const sourceYPercent = (cropSelection.y - 50) / zoom + 50;
            const clampedXPercent = Math.min(100 - sourceWidthPercent, Math.max(0, sourceXPercent));
            const clampedYPercent = Math.min(100 - sourceHeightPercent, Math.max(0, sourceYPercent));
            const sourceX = clampedXPercent / 100 * sourceImage.width;
            const sourceY = clampedYPercent / 100 * sourceImage.height;
            const sourceWidth = sourceWidthPercent / 100 * sourceImage.width;
            const sourceHeight = sourceHeightPercent / 100 * sourceImage.height;
            if (sourceWidth <= 0 || sourceHeight <= 0) {
                throw new Error("Invalid crop area.");
            }
            const canvas = document.createElement("canvas");
            const maxOutput = 1400;
            const scale = Math.min(maxOutput / sourceWidth, maxOutput / sourceHeight, 1);
            canvas.width = Math.max(1, Math.round(sourceWidth * scale));
            canvas.height = Math.max(1, Math.round(sourceHeight * scale));
            const context = canvas.getContext("2d");
            if (!context) {
                throw new Error("Unable to edit image.");
            }
            context.drawImage(sourceImage, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, canvas.width, canvas.height);
            const editedImage = canvas.toDataURL("image/jpeg", 0.92);
            handleProjectFieldChange("image", editedImage);
        } catch  {
            setImageEditError("Image crop failed. Please adjust crop and try again.");
        } finally{
            setIsApplyingCrop(false);
        }
    };
    const handleAddProject = (event)=>{
        event.preventDefault();
        const project = {
            id: crypto.randomUUID(),
            title: newProject.title.trim(),
            location: newProject.location.trim(),
            type: newProject.type.trim(),
            image: newProject.image.trim() || "/images/project-1.jpg"
        };
        const updatedProjects = [
            project,
            ...projects
        ];
        setProjects(updatedProjects);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredProjects"])(updatedProjects);
        setNewProject({
            title: "",
            location: "",
            type: "",
            image: ""
        });
        setRawImageDataUrl("");
        setUploadedImageSize({
            width: 16,
            height: 9
        });
        setImageEditError("");
        setZoomLevel(1);
        setCropSizePercent(90);
        setCropSelection({
            x: 5,
            y: 5,
            width: 90,
            height: 90
        });
        setIsDraggingSelection(false);
        setIsResizingSelection(false);
        setActiveResizeHandle(null);
        setShowProjectForm(false);
    };
    const handleDeleteProject = (projectId)=>{
        const updatedProjects = projects.filter((project)=>project.id !== projectId);
        setProjects(updatedProjects);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredProjects"])(updatedProjects);
    };
    const handleDeleteSubmission = (submissionId)=>{
        const updatedSubmissions = contactSubmissions.filter((submission)=>submission.id !== submissionId);
        setContactSubmissions(updatedSubmissions);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contact$2d$submissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredContactSubmissions"])(updatedSubmissions);
    };
    const openDeleteDialog = (type, id, title)=>{
        setPendingDelete({
            type,
            id,
            title
        });
        setDeleteDialogOpen(true);
    };
    const handleConfirmDelete = ()=>{
        if (!pendingDelete) {
            return;
        }
        if (pendingDelete.type === "project") {
            handleDeleteProject(pendingDelete.id);
        } else {
            handleDeleteSubmission(pendingDelete.id);
        }
        setDeleteDialogOpen(false);
        setPendingDelete(null);
    };
    const formatSubmissionDate = (isoDate)=>{
        const date = new Date(isoDate);
        if (Number.isNaN(date.getTime())) {
            return isoDate;
        }
        return date.toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#0B1D3A] px-4 py-8 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-white/10 p-6 sm:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-start justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "font-serif text-3xl text-white",
                                                    children: "Admin Dashboard"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-base text-white/70",
                                                    children: adminEmail
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                            lineNumber: 684,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "ghost",
                                            onClick: handleSignOut,
                                            className: "text-white hover:bg-white/10 hover:text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 694,
                                                    columnNumber: 17
                                                }, this),
                                                "Sign Out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                            lineNumber: 688,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                    lineNumber: 683,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 grid gap-4 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-white/10 bg-white/5 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-2 flex items-center justify-between text-white/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 703,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Projects"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 702,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                projects.length,
                                                                " / 100"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 706,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 rounded-full bg-white/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full rounded-full bg-[#C5A55A]",
                                                        style: {
                                                            width: `${Math.min(projects.length, 100)}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                        lineNumber: 709,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 708,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                            lineNumber: 700,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-white/10 bg-white/5 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-2 flex items-center justify-between text-white/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 719,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Storage Used"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 718,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "0.48 MB / 1000 MB"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 722,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 717,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 rounded-full bg-white/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full w-[1%] rounded-full bg-[#C5A55A]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                        lineNumber: 725,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                            lineNumber: 716,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                    lineNumber: 699,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                            lineNumber: 682,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 sm:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 border-b border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveTab("projects"),
                                            className: `px-4 py-3 text-lg transition-colors ${activeTab === "projects" ? "border-b-2 border-[#C5A55A] text-white" : "text-white/60 hover:text-white/85"}`,
                                            children: [
                                                "Projects (",
                                                projects.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                            lineNumber: 733,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveTab("submissions"),
                                            className: `px-4 py-3 text-lg transition-colors ${activeTab === "submissions" ? "border-b-2 border-[#C5A55A] text-white" : "text-white/60 hover:text-white/85"}`,
                                            children: [
                                                "Contact Submissions (",
                                                contactSubmissions.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                            lineNumber: 744,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                    lineNumber: 732,
                                    columnNumber: 13
                                }, this),
                                activeTab === "projects" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "pt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6 flex items-center justify-between gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-serif text-4xl text-white",
                                                    children: "Manage Projects"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: ()=>setShowProjectForm((previous)=>!previous),
                                                    className: "bg-[#C5A55A] text-[#0B1D3A] hover:bg-[#D4B36A]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 765,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Add Project"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 761,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                            lineNumber: 759,
                                            columnNumber: 17
                                        }, this),
                                        showProjectForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleAddProject,
                                            className: "mb-6 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-4 sm:grid-cols-2 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "project-title",
                                                            className: "text-white/90",
                                                            children: "Project Title"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 776,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "project-title",
                                                            required: true,
                                                            value: newProject.title,
                                                            onChange: (event)=>handleProjectFieldChange("title", event.target.value),
                                                            className: "border-white/15 bg-white/5 text-white placeholder:text-white/35",
                                                            placeholder: "Project name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 777,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 775,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "project-location",
                                                            className: "text-white/90",
                                                            children: "Location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 788,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "project-location",
                                                            required: true,
                                                            value: newProject.location,
                                                            onChange: (event)=>handleProjectFieldChange("location", event.target.value),
                                                            className: "border-white/15 bg-white/5 text-white placeholder:text-white/35",
                                                            placeholder: "City, State"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 789,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 787,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "project-type",
                                                            className: "text-white/90",
                                                            children: "Project Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 800,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "project-type",
                                                            required: true,
                                                            value: newProject.type,
                                                            onChange: (event)=>handleProjectFieldChange("type", event.target.value),
                                                            className: "border-white/15 bg-white/5 text-white placeholder:text-white/35",
                                                            placeholder: "Curtain Wall / Glazing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 801,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 799,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 sm:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "project-image-file",
                                                            className: "text-white/90",
                                                            children: "Upload Image"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 823,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "project-image-file",
                                                            type: "file",
                                                            accept: "image/*",
                                                            onChange: handleProjectImageFileChange,
                                                            className: "border-white/15 bg-white/5 text-white file:mr-4 file:rounded-md file:border-0 file:bg-[#C5A55A] file:px-3 file:py-1 file:text-sm file:font-medium file:text-[#0B1D3A]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 824,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 822,
                                                    columnNumber: 21
                                                }, this),
                                                rawImageDataUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sm:col-span-2 rounded-2xl border border-white/10 bg-[#0B1D3A]/60 p-4 sm:p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-3 text-sm text-white/75",
                                                            children: isMobile ? "Image Editor: pinch with 2 fingers to zoom, drag crop box, or adjust from any edge/corner handle." : "Project ratio is locked to 16:10. Drag the crop box to select image area."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 835,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            ref: cropEditorRef,
                                                            className: "relative mx-auto w-full max-w-2xl overflow-hidden rounded-lg border border-white/20 bg-black",
                                                            style: {
                                                                aspectRatio: `${Math.max(1, uploadedImageSize.width)} / ${Math.max(1, uploadedImageSize.height)}`
                                                            },
                                                            onDoubleClick: isMobile ? undefined : toggleZoom,
                                                            onTouchStart: handlePreviewTouchStart,
                                                            onTouchMove: handleEditorTouchMove,
                                                            onTouchEnd: handlePreviewTouchEnd,
                                                            onMouseMove: handleEditorMouseMove,
                                                            onMouseUp: stopSelectionDrag,
                                                            onMouseLeave: stopSelectionDrag,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: rawImageDataUrl,
                                                                    alt: "Project image crop preview",
                                                                    className: "h-full w-full object-contain select-none",
                                                                    style: {
                                                                        transform: `scale(${zoomLevel})`,
                                                                        transformOrigin: "center"
                                                                    },
                                                                    draggable: false
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 855,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `absolute border-2 border-[#C5A55A] bg-transparent ${isDraggingSelection ? "cursor-grabbing" : "cursor-grab"}`,
                                                                    style: {
                                                                        top: `${cropSelection.y}%`,
                                                                        left: `${cropSelection.x}%`,
                                                                        width: `${cropSelection.width}%`,
                                                                        height: `${cropSelection.height}%`,
                                                                        boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.45)"
                                                                    },
                                                                    onMouseDown: startSelectionDrag,
                                                                    onTouchStart: startSelectionTouchDrag
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 866,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    "aria-label": "Resize top-left",
                                                                    className: "absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 cursor-nwse-resize rounded-full border border-[#0B1D3A] bg-[#C5A55A]",
                                                                    style: {
                                                                        left: `${cropSelection.x}%`,
                                                                        top: `${cropSelection.y}%`
                                                                    },
                                                                    onMouseDown: (event)=>startResizeMouse("nw", event),
                                                                    onTouchStart: (event)=>startResizeTouch("nw", event)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 879,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    "aria-label": "Resize top",
                                                                    className: "absolute h-3 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ns-resize rounded border border-[#0B1D3A] bg-[#C5A55A]",
                                                                    style: {
                                                                        left: `${cropSelection.x + cropSelection.width / 2}%`,
                                                                        top: `${cropSelection.y}%`
                                                                    },
                                                                    onMouseDown: (event)=>startResizeMouse("n", event),
                                                                    onTouchStart: (event)=>startResizeTouch("n", event)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 887,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    "aria-label": "Resize top-right",
                                                                    className: "absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 cursor-nesw-resize rounded-full border border-[#0B1D3A] bg-[#C5A55A]",
                                                                    style: {
                                                                        left: `${cropSelection.x + cropSelection.width}%`,
                                                                        top: `${cropSelection.y}%`
                                                                    },
                                                                    onMouseDown: (event)=>startResizeMouse("ne", event),
                                                                    onTouchStart: (event)=>startResizeTouch("ne", event)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 895,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    "aria-label": "Resize right",
                                                                    className: "absolute h-10 w-3 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize rounded border border-[#0B1D3A] bg-[#C5A55A]",
                                                                    style: {
                                                                        left: `${cropSelection.x + cropSelection.width}%`,
                                                                        top: `${cropSelection.y + cropSelection.height / 2}%`
                                                                    },
                                                                    onMouseDown: (event)=>startResizeMouse("e", event),
                                                                    onTouchStart: (event)=>startResizeTouch("e", event)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 903,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    "aria-label": "Resize bottom-right",
                                                                    className: "absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 cursor-nwse-resize rounded-full border border-[#0B1D3A] bg-[#C5A55A]",
                                                                    style: {
                                                                        left: `${cropSelection.x + cropSelection.width}%`,
                                                                        top: `${cropSelection.y + cropSelection.height}%`
                                                                    },
                                                                    onMouseDown: (event)=>startResizeMouse("se", event),
                                                                    onTouchStart: (event)=>startResizeTouch("se", event)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 911,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    "aria-label": "Resize bottom",
                                                                    className: "absolute h-3 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ns-resize rounded border border-[#0B1D3A] bg-[#C5A55A]",
                                                                    style: {
                                                                        left: `${cropSelection.x + cropSelection.width / 2}%`,
                                                                        top: `${cropSelection.y + cropSelection.height}%`
                                                                    },
                                                                    onMouseDown: (event)=>startResizeMouse("s", event),
                                                                    onTouchStart: (event)=>startResizeTouch("s", event)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 919,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    "aria-label": "Resize bottom-left",
                                                                    className: "absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 cursor-nesw-resize rounded-full border border-[#0B1D3A] bg-[#C5A55A]",
                                                                    style: {
                                                                        left: `${cropSelection.x}%`,
                                                                        top: `${cropSelection.y + cropSelection.height}%`
                                                                    },
                                                                    onMouseDown: (event)=>startResizeMouse("sw", event),
                                                                    onTouchStart: (event)=>startResizeTouch("sw", event)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 927,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    "aria-label": "Resize left",
                                                                    className: "absolute h-10 w-3 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize rounded border border-[#0B1D3A] bg-[#C5A55A]",
                                                                    style: {
                                                                        left: `${cropSelection.x}%`,
                                                                        top: `${cropSelection.y + cropSelection.height / 2}%`
                                                                    },
                                                                    onMouseDown: (event)=>startResizeMouse("w", event),
                                                                    onTouchStart: (event)=>startResizeTouch("w", event)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 935,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 841,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-3 text-xs text-white/65",
                                                            children: [
                                                                "Crop Area: ",
                                                                Math.round(cropSelection.width),
                                                                "% × ",
                                                                Math.round(cropSelection.height),
                                                                "% • Position X ",
                                                                Math.round(cropSelection.x),
                                                                "% / Y ",
                                                                Math.round(cropSelection.y),
                                                                "% • Zoom ",
                                                                zoomLevel.toFixed(1),
                                                                "x"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 945,
                                                            columnNumber: 25
                                                        }, this),
                                                        isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-xs text-white/55",
                                                            children: "Pinch to zoom • Drag box to move • Use any of 8 handles to crop from that side/corner."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 950,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-xs text-white/55",
                                                            children: "Double click on preview to zoom."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 952,
                                                            columnNumber: 27
                                                        }, this),
                                                        !isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    htmlFor: "project-crop-size",
                                                                    className: "text-xs text-white/75",
                                                                    children: [
                                                                        "Crop Size (",
                                                                        cropSizePercent,
                                                                        "%)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 957,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    id: "project-crop-size",
                                                                    type: "range",
                                                                    min: 30,
                                                                    max: 100,
                                                                    value: cropSizePercent,
                                                                    onChange: (event)=>handleCropSizeChange(Number(event.target.value))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 958,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 956,
                                                            columnNumber: 27
                                                        }, this) : null,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 flex flex-wrap items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    type: "button",
                                                                    onClick: applyImageCrop,
                                                                    disabled: isApplyingCrop,
                                                                    className: "bg-[#C5A55A] text-[#0B1D3A] hover:bg-[#D4B36A]",
                                                                    children: isApplyingCrop ? "Applying..." : "Apply Crop"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 970,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    type: "button",
                                                                    variant: "outline",
                                                                    onClick: ()=>{
                                                                        setZoomLevel(1);
                                                                        setCropSizePercent(90);
                                                                        setCropSelection(getAspectLockedSelection(uploadedImageSize.width, uploadedImageSize.height, 90));
                                                                    },
                                                                    className: "border-white/20 bg-transparent text-white hover:bg-white/10",
                                                                    children: "Reset Crop"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 978,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 969,
                                                            columnNumber: 25
                                                        }, this),
                                                        imageEditError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-sm text-red-300",
                                                            children: imageEditError
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 998,
                                                            columnNumber: 43
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 834,
                                                    columnNumber: 23
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sm:col-span-2 flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "submit",
                                                            className: "bg-[#C5A55A] text-[#0B1D3A] hover:bg-[#D4B36A]",
                                                            children: "Save Project"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 1003,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "button",
                                                            variant: "outline",
                                                            onClick: ()=>setShowProjectForm(false),
                                                            className: "border-white/20 bg-transparent text-white hover:bg-white/10",
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 1006,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 1002,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                            lineNumber: 771,
                                            columnNumber: 19
                                        }, this) : null,
                                        projects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-white/10 bg-white/5 p-12 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-5 text-3xl text-white/70",
                                                    children: "No projects yet"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 1020,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: ()=>setShowProjectForm(true),
                                                    className: "bg-[#C5A55A] text-[#0B1D3A] hover:bg-[#D4B36A]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 1025,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Add Your First Project"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 1021,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                            lineNumber: 1019,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 sm:grid-cols-2",
                                            children: projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: "rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-4 flex items-start justify-between gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-xl font-semibold text-white",
                                                                            children: project.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                            lineNumber: 1038,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-1 text-sm text-white/70",
                                                                            children: project.location
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                            lineNumber: 1039,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 1037,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>openDeleteDialog("project", project.id, project.title),
                                                                    className: "text-white/60 transition hover:text-white",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                        lineNumber: 1046,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 1041,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 1036,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-[#C5A55A]",
                                                            children: project.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 1049,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 truncate text-xs text-white/55",
                                                            children: project.image
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                            lineNumber: 1050,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, project.id, true, {
                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                    lineNumber: 1032,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                            lineNumber: 1030,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                    lineNumber: 758,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "pt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-6 font-serif text-4xl text-white",
                                            children: "Contact Form Submissions"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                            lineNumber: 1058,
                                            columnNumber: 17
                                        }, this),
                                        contactSubmissions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-white/10 bg-white/5 p-12 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl text-white/70",
                                                children: "No contact submissions yet"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                lineNumber: 1062,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                                            lineNumber: 1061,
                                            columnNumber: 19
                                        }, this) : null,
                                        contactSubmissions.map((submission)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "mb-4 rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-6 flex items-start justify-between gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-3xl font-semibold text-white",
                                                                        children: submission.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                        lineNumber: 1073,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-xl text-white/70",
                                                                        children: submission.service || "General enquiry"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                        lineNumber: 1074,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                lineNumber: 1072,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>openDeleteDialog("submission", submission.id, submission.name),
                                                                className: "text-white/60 transition hover:text-white",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                    lineNumber: 1083,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                lineNumber: 1076,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                        lineNumber: 1071,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid gap-6 md:grid-cols-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-1 text-xs tracking-[0.25em] text-white/50 uppercase",
                                                                        children: "Email"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                        lineNumber: 1089,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-2xl text-white",
                                                                        children: submission.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                        lineNumber: 1090,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                lineNumber: 1088,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-1 text-xs tracking-[0.25em] text-white/50 uppercase",
                                                                        children: "Phone"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                        lineNumber: 1093,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-2xl text-white",
                                                                        children: submission.phone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                        lineNumber: 1094,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                lineNumber: 1092,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-1 text-xs tracking-[0.25em] text-white/50 uppercase",
                                                                        children: "Service Required"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                        lineNumber: 1097,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-2xl text-white",
                                                                        children: submission.service || "Not specified"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                        lineNumber: 1098,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                lineNumber: 1096,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-1 text-xs tracking-[0.25em] text-white/50 uppercase",
                                                                        children: "Submitted"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                        lineNumber: 1101,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-2xl text-white",
                                                                        children: formatSubmissionDate(submission.submittedAt)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                        lineNumber: 1102,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                lineNumber: 1100,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                        lineNumber: 1087,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mb-1 text-xs tracking-[0.25em] text-white/50 uppercase",
                                                                children: "Message"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                lineNumber: 1107,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-lg text-white/85",
                                                                children: submission.message
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                                lineNumber: 1108,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                        lineNumber: 1106,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, submission.id, true, {
                                                fileName: "[project]/app/Admin/dashboard/page.tsx",
                                                lineNumber: 1067,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                    lineNumber: 1057,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                            lineNumber: 731,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                    lineNumber: 681,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Admin/dashboard/page.tsx",
                lineNumber: 680,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                open: deleteDialogOpen,
                onOpenChange: (open)=>{
                    setDeleteDialogOpen(open);
                    if (!open) {
                        setPendingDelete(null);
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                    className: "border-white/10 bg-[#10274A] text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                    className: "text-white",
                                    children: "Confirm Delete"
                                }, void 0, false, {
                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                    lineNumber: 1129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                    className: "text-white/70",
                                    children: [
                                        "Are you sure you want to delete this ",
                                        pendingDelete?.type === "project" ? "project" : "contact submission",
                                        "?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                    lineNumber: 1130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85",
                                    children: pendingDelete?.title || "Selected item"
                                }, void 0, false, {
                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                    lineNumber: 1133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                            lineNumber: 1128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                    className: "border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                    lineNumber: 1138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                    onClick: handleConfirmDelete,
                                    className: "bg-[#C5A55A] text-[#0B1D3A] hover:bg-[#D4B36A]",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                                    lineNumber: 1141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Admin/dashboard/page.tsx",
                            lineNumber: 1137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Admin/dashboard/page.tsx",
                    lineNumber: 1127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Admin/dashboard/page.tsx",
                lineNumber: 1118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Admin/dashboard/page.tsx",
        lineNumber: 679,
        columnNumber: 5
    }, this);
}
_s(AdminDashboardPage, "Bv0R591aUg3treCIYhOnuivwbhA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c = AdminDashboardPage;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_33370b10._.js.map