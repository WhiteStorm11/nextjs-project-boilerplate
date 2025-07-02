(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/rubikCubeUtils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CUBE_COLORS": (()=>CUBE_COLORS),
    "createCubie": (()=>createCubie),
    "createRubiksCube": (()=>createRubiksCube),
    "isSolved": (()=>isSolved),
    "resetCube": (()=>resetCube),
    "rotateCube": (()=>rotateCube),
    "rotateFace": (()=>rotateFace),
    "scrambleCube": (()=>scrambleCube)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const CUBE_COLORS = {
    front: 0xff0000,
    back: 0xffa500,
    top: 0xffffff,
    bottom: 0xffff00,
    right: 0x00ff00,
    left: 0x0000ff
};
const createCubie = (x, y, z, colors, size = 1)=>{
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](size, size, size);
    const materials = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: colors.right,
            shininess: 30
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: colors.left,
            shininess: 30
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: colors.top,
            shininess: 30
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: colors.bottom,
            shininess: 30
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: colors.front,
            shininess: 30
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: colors.back,
            shininess: 30
        })
    ];
    const cubie = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, materials);
    cubie.position.set(x, y, z);
    cubie.castShadow = true;
    cubie.receiveShadow = true;
    // Store the original colors and position for reference
    cubie.originalColors = {
        ...colors
    };
    cubie.originalPosition = {
        x,
        y,
        z
    };
    return cubie;
};
// Get initial colors for a cubie based on its position
const getInitialCubieColors = (x, y, z)=>{
    return {
        right: x === 1 ? CUBE_COLORS.right : 0x333333,
        left: x === -1 ? CUBE_COLORS.left : 0x333333,
        top: y === 1 ? CUBE_COLORS.top : 0x333333,
        bottom: y === -1 ? CUBE_COLORS.bottom : 0x333333,
        front: z === 1 ? CUBE_COLORS.front : 0x333333,
        back: z === -1 ? CUBE_COLORS.back : 0x333333
    };
};
const createRubiksCube = ()=>{
    const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    const size = 1;
    const gap = 0.1;
    // Create all 27 cubies
    for(let x = -1; x <= 1; x++){
        for(let y = -1; y <= 1; y++){
            for(let z = -1; z <= 1; z++){
                const colors = getInitialCubieColors(x, y, z);
                const cubie = createCubie(x * (size + gap), y * (size + gap), z * (size + gap), colors, size);
                group.add(cubie);
            }
        }
    }
    // Initial rotation for better view
    group.rotation.x = Math.PI / 6;
    group.rotation.y = -Math.PI / 4;
    return group;
};
const rotateFace = (cube, axis, layer, angle)=>{
    const rotationMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
    const pivotPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
    // Select cubies in the correct layer
    const cubiesInLayer = cube.children.filter((cubie)=>{
        const position = cubie.position.clone();
        cube.localToWorld(position);
        const coord = position[axis];
        return Math.abs(coord - layer) < 0.1;
    });
    // Create rotation matrix
    switch(axis){
        case 'x':
            rotationMatrix.makeRotationX(angle);
            break;
        case 'y':
            rotationMatrix.makeRotationY(angle);
            break;
        case 'z':
            rotationMatrix.makeRotationZ(angle);
            break;
    }
    // Apply rotation to selected cubies
    cubiesInLayer.forEach((cubie)=>{
        cubie.position.sub(pivotPoint);
        cubie.position.applyMatrix4(rotationMatrix);
        cubie.position.add(pivotPoint);
        cubie.rotateOnWorldAxis(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](axis === 'x' ? 1 : 0, axis === 'y' ? 1 : 0, axis === 'z' ? 1 : 0), angle);
    });
};
const scrambleCube = (cube)=>{
    const axes = [
        'x',
        'y',
        'z'
    ];
    const layers = [
        -1,
        0,
        1
    ];
    const angles = [
        Math.PI / 2,
        -Math.PI / 2,
        Math.PI
    ];
    // Apply 20 random moves
    for(let i = 0; i < 20; i++){
        const axis = axes[Math.floor(Math.random() * axes.length)];
        const layer = layers[Math.floor(Math.random() * layers.length)];
        const angle = angles[Math.floor(Math.random() * angles.length)];
        rotateFace(cube, axis, layer, angle);
    }
};
const isSolved = (cube)=>{
    const faces = [
        'right',
        'left',
        'top',
        'bottom',
        'front',
        'back'
    ];
    for (const face of faces){
        const faceColor = cube.children[0].originalColors[face];
        const faceCubies = cube.children.filter((cubie)=>{
            const materials = cubie.material;
            const faceIndex = faces.indexOf(face);
            return materials[faceIndex].color.getHex() === faceColor;
        });
        if (faceCubies.length !== 9) {
            return false;
        }
    }
    return true;
};
const resetCube = (cube)=>{
    cube.rotation.set(Math.PI / 6, -Math.PI / 4, 0);
    cube.children.forEach((cubie)=>{
        const originalPosition = cubie.originalPosition;
        const originalColors = cubie.originalColors;
        if (originalPosition && originalColors) {
            cubie.position.set(originalPosition.x, originalPosition.y, originalPosition.z);
            const materials = cubie.material;
            materials[0].color.setHex(originalColors.right);
            materials[1].color.setHex(originalColors.left);
            materials[2].color.setHex(originalColors.top);
            materials[3].color.setHex(originalColors.bottom);
            materials[4].color.setHex(originalColors.front);
            materials[5].color.setHex(originalColors.back);
        }
    });
};
const rotateCube = (cube, deltaX, deltaY, sensitivity = 0.01)=>{
    cube.rotation.y += deltaX * sensitivity;
    cube.rotation.x += deltaY * sensitivity;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/RubikCubeGame.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rubikCubeUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const RubikCubeGame = ()=>{
    _s();
    // State to track WebGL support and cube state
    const [webGLError, setWebGLError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [isCubeSolved, setIsCubeSolved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cubeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMouseDown, setIsMouseDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTouchDown, setIsTouchDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastMousePosition, setLastMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Initialize Three.js scene
    const initScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RubikCubeGame.useCallback[initScene]": ()=>{
            if (!containerRef.current) return;
            try {
                // Initialize scene
                const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
                scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x121212);
                sceneRef.current = scene;
                // Initialize camera with better position
                const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](60, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
                camera.position.set(6, 4, 8);
                camera.lookAt(0, 0, 0);
                cameraRef.current = camera;
                // Initialize renderer
                const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    antialias: true,
                    alpha: true,
                    powerPreference: 'default'
                });
                if (!renderer.getContext()) {
                    throw new Error('Failed to initialize WebGL context');
                }
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
                containerRef.current.appendChild(renderer.domElement);
                rendererRef.current = renderer;
                // Add lights
                const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0xffffff, 0.6);
                scene.add(ambientLight);
                // Add directional lights from multiple angles
                const createDirectionalLight = {
                    "RubikCubeGame.useCallback[initScene].createDirectionalLight": (x, y, z, intensity = 0.8)=>{
                        const light = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, intensity);
                        light.position.set(x, y, z);
                        return light;
                    }
                }["RubikCubeGame.useCallback[initScene].createDirectionalLight"];
                scene.add(createDirectionalLight(10, 10, 10)); // Top-right-front
                scene.add(createDirectionalLight(-10, 10, 10)); // Top-left-front
                scene.add(createDirectionalLight(10, -10, 10)); // Bottom-right-front
                scene.add(createDirectionalLight(0, 10, -10)); // Top-back
                // Create Rubik's cube
                const cube = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRubiksCube"])();
                scene.add(cube);
                cubeRef.current = cube;
                // Animation loop with smooth auto-rotation
                const animate = {
                    "RubikCubeGame.useCallback[initScene].animate": ()=>{
                        animationFrameRef.current = requestAnimationFrame(animate);
                        if (rendererRef.current && sceneRef.current && cameraRef.current && cubeRef.current) {
                            if (!isMouseDown && !isTouchDown) {
                                // Add subtle auto-rotation when not being dragged or touched
                                cubeRef.current.rotation.y += 0.005;
                            }
                            rendererRef.current.render(sceneRef.current, cameraRef.current);
                        }
                    }
                }["RubikCubeGame.useCallback[initScene].animate"];
                animate();
            } catch (error) {
                setWebGLError(error instanceof Error ? error.message : 'Failed to initialize WebGL');
                return;
            }
            // Handle window resize
            const handleResize = {
                "RubikCubeGame.useCallback[initScene].handleResize": ()=>{
                    if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
                    const width = containerRef.current.clientWidth;
                    const height = containerRef.current.clientHeight;
                    cameraRef.current.aspect = width / height;
                    cameraRef.current.updateProjectionMatrix();
                    rendererRef.current.setSize(width, height);
                    rendererRef.current.setPixelRatio(window.devicePixelRatio);
                }
            }["RubikCubeGame.useCallback[initScene].handleResize"];
            window.addEventListener('resize', handleResize);
            // Handle keyboard controls
            const handleKeyDown = {
                "RubikCubeGame.useCallback[initScene].handleKeyDown": (event)=>{
                    if (!cubeRef.current) return;
                    const angle = event.shiftKey ? -Math.PI / 2 : Math.PI / 2;
                    switch(event.key.toLowerCase()){
                        case 'f':
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateFace"])(cubeRef.current, 'z', 1, angle);
                            break;
                        case 'b':
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateFace"])(cubeRef.current, 'z', -1, angle);
                            break;
                        case 'r':
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateFace"])(cubeRef.current, 'x', 1, angle);
                            break;
                        case 'l':
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateFace"])(cubeRef.current, 'x', -1, angle);
                            break;
                        case 'u':
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateFace"])(cubeRef.current, 'y', 1, angle);
                            break;
                        case 'd':
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateFace"])(cubeRef.current, 'y', -1, angle);
                            break;
                    }
                    // Check if cube is solved after each move
                    if (cubeRef.current) {
                        setIsCubeSolved((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSolved"])(cubeRef.current));
                    }
                }
            }["RubikCubeGame.useCallback[initScene].handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            // Cleanup
            return ({
                "RubikCubeGame.useCallback[initScene]": ()=>{
                    window.removeEventListener('resize', handleResize);
                    window.removeEventListener('keydown', handleKeyDown);
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                    if (containerRef.current && rendererRef.current) {
                        containerRef.current.removeChild(rendererRef.current.domElement);
                    }
                    rendererRef.current?.dispose();
                }
            })["RubikCubeGame.useCallback[initScene]"];
        }
    }["RubikCubeGame.useCallback[initScene]"], []);
    // Initialize scene on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RubikCubeGame.useEffect": ()=>{
            initScene();
        }
    }["RubikCubeGame.useEffect"], [
        initScene
    ]);
    // Event handlers
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RubikCubeGame.useCallback[handleMouseDown]": (e)=>{
            setIsMouseDown(true);
            setLastMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }
    }["RubikCubeGame.useCallback[handleMouseDown]"], []);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RubikCubeGame.useCallback[handleMouseMove]": (e)=>{
            if (!isMouseDown || !cubeRef.current) return;
            const deltaX = e.clientX - lastMousePosition.x;
            const deltaY = e.clientY - lastMousePosition.y;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateCube"])(cubeRef.current, deltaX, deltaY);
            setLastMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }
    }["RubikCubeGame.useCallback[handleMouseMove]"], [
        isMouseDown,
        lastMousePosition
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RubikCubeGame.useCallback[handleMouseUp]": ()=>{
            setIsMouseDown(false);
        }
    }["RubikCubeGame.useCallback[handleMouseUp]"], []);
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RubikCubeGame.useCallback[handleTouchStart]": (e)=>{
            const touch = e.touches[0];
            setIsTouchDown(true);
            setLastMousePosition({
                x: touch.clientX,
                y: touch.clientY
            });
        }
    }["RubikCubeGame.useCallback[handleTouchStart]"], []);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RubikCubeGame.useCallback[handleTouchMove]": (e)=>{
            if (!isTouchDown || !cubeRef.current) return;
            const touch = e.touches[0];
            const deltaX = touch.clientX - lastMousePosition.x;
            const deltaY = touch.clientY - lastMousePosition.y;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateCube"])(cubeRef.current, deltaX, deltaY);
            setLastMousePosition({
                x: touch.clientX,
                y: touch.clientY
            });
        }
    }["RubikCubeGame.useCallback[handleTouchMove]"], [
        isTouchDown,
        lastMousePosition
    ]);
    const handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RubikCubeGame.useCallback[handleTouchEnd]": ()=>{
            setIsTouchDown(false);
        }
    }["RubikCubeGame.useCallback[handleTouchEnd]"], []);
    // Game control handlers
    const [selectedLayer, setSelectedLayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRotating, setIsRotating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleScramble = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RubikCubeGame.useCallback[handleScramble]": ()=>{
            if (cubeRef.current && !isRotating) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrambleCube"])(cubeRef.current);
                setIsCubeSolved(false);
            }
        }
    }["RubikCubeGame.useCallback[handleScramble]"], [
        isRotating
    ]);
    const handleReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RubikCubeGame.useCallback[handleReset]": ()=>{
            if (cubeRef.current && !isRotating) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetCube"])(cubeRef.current);
                setIsCubeSolved(true);
            }
        }
    }["RubikCubeGame.useCallback[handleReset]"], [
        isRotating
    ]);
    // Rotate selected layer clockwise or counterclockwise
    const rotateSelectedLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RubikCubeGame.useCallback[rotateSelectedLayer]": (clockwise)=>{
            if (!cubeRef.current || !selectedLayer || isRotating) return;
            setIsRotating(true);
            const angle = clockwise ? Math.PI / 2 : -Math.PI / 2;
            // Animate rotation over 300ms
            const duration = 300;
            const start = performance.now();
            const animateRotation = {
                "RubikCubeGame.useCallback[rotateSelectedLayer].animateRotation": (time)=>{
                    const elapsed = time - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const currentAngle = angle * progress;
                    // Reset rotation before applying incremental rotation
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetCube"])(cubeRef.current);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateFace"])(cubeRef.current, selectedLayer.axis, selectedLayer.layer, currentAngle);
                    if (progress < 1) {
                        requestAnimationFrame(animateRotation);
                    } else {
                        setIsRotating(false);
                        setIsCubeSolved((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rubikCubeUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSolved"])(cubeRef.current));
                    }
                }
            }["RubikCubeGame.useCallback[rotateSelectedLayer].animateRotation"];
            requestAnimationFrame(animateRotation);
        }
    }["RubikCubeGame.useCallback[rotateSelectedLayer]"], [
        selectedLayer,
        isRotating
    ]);
    // UI for selecting layer and rotating
    const LayerSelector = ()=>{
        const layers = [
            -1,
            0,
            1
        ];
        const axes = [
            'x',
            'y',
            'z'
        ];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex flex-col gap-4",
            children: [
                axes.map((axis)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-semibold capitalize",
                                children: [
                                    axis.toUpperCase(),
                                    " axis:"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RubikCubeGame.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this),
                            layers.map((layer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `px-3 py-1 rounded ${selectedLayer?.axis === axis && selectedLayer.layer === layer ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`,
                                    onClick: ()=>setSelectedLayer({
                                            axis,
                                            layer
                                        }),
                                    disabled: isRotating,
                                    children: layer === -1 ? '1' : layer === 0 ? '2' : '3'
                                }, layer, false, {
                                    fileName: "[project]/src/components/RubikCubeGame.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, axis, true, {
                        fileName: "[project]/src/components/RubikCubeGame.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50",
                            onClick: ()=>rotateSelectedLayer(true),
                            disabled: !selectedLayer || isRotating,
                            children: "Girar ↻"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RubikCubeGame.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-red-600 text-white px-4 py-2 rounded disabled:opacity-50",
                            onClick: ()=>rotateSelectedLayer(false),
                            disabled: !selectedLayer || isRotating,
                            children: "Girar ↺"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RubikCubeGame.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RubikCubeGame.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RubikCubeGame.tsx",
            lineNumber: 276,
            columnNumber: 7
        }, this);
    };
    if (webGLError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-screen flex flex-col items-center justify-center bg-black text-white p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-4",
                    children: "Error"
                }, void 0, false, {
                    fileName: "[project]/src/components/RubikCubeGame.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500",
                    children: webGLError
                }, void 0, false, {
                    fileName: "[project]/src/components/RubikCubeGame.tsx",
                    lineNumber: 321,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2",
                    children: "Por favor, intenta usar un navegador más moderno o habilita el soporte de WebGL."
                }, void 0, false, {
                    fileName: "[project]/src/components/RubikCubeGame.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RubikCubeGame.tsx",
            lineNumber: 319,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl font-bold text-white mb-4 tracking-tight",
                        children: "Cubo Rubik"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RubikCubeGame.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-gray-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg",
                                children: "🖱️ Arrastra para rotar el cubo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RubikCubeGame.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "El cubo gira automáticamente cuando no lo estás moviendo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RubikCubeGame.tsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RubikCubeGame.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RubikCubeGame.tsx",
                lineNumber: 329,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "w-full max-w-4xl aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-black/50 backdrop-blur-sm",
                onMouseDown: handleMouseDown,
                onMouseMove: handleMouseMove,
                onMouseUp: handleMouseUp,
                onMouseLeave: handleMouseUp,
                onTouchStart: handleTouchStart,
                onTouchMove: handleTouchMove,
                onTouchEnd: handleTouchEnd
            }, void 0, false, {
                fileName: "[project]/src/components/RubikCubeGame.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex flex-col sm:flex-row gap-4 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleScramble,
                        className: "bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg",
                        children: "🎲 Mezclar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RubikCubeGame.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleReset,
                        className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg",
                        children: "↺ Reiniciar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RubikCubeGame.tsx",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RubikCubeGame.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayerSelector, {}, void 0, false, {
                fileName: "[project]/src/components/RubikCubeGame.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 text-center text-gray-400 text-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Desarrollado con Three.js y Next.js"
                }, void 0, false, {
                    fileName: "[project]/src/components/RubikCubeGame.tsx",
                    lineNumber: 367,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RubikCubeGame.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RubikCubeGame.tsx",
        lineNumber: 328,
        columnNumber: 5
    }, this);
};
_s(RubikCubeGame, "z+o97kkQoD5yG8o2O/opF7SpTVg=");
_c = RubikCubeGame;
const __TURBOPACK__default__export__ = RubikCubeGame;
var _c;
__turbopack_context__.k.register(_c, "RubikCubeGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/rubik-cube/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RubikCubePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RubikCubeGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RubikCubeGame.tsx [app-client] (ecmascript)");
'use client';
;
;
function RubikCubePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen w-full bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RubikCubeGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/rubik-cube/page.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/rubik-cube/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = RubikCubePage;
var _c;
__turbopack_context__.k.register(_c, "RubikCubePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a2ba79b8._.js.map