"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/discord":
/*!**********************************************!*\
  !*** external "next-auth/providers/discord" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/discord");

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/discord */ \"next-auth/providers/discord\");\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../server/db/client */ \"(api)/./src/server/db/client.ts\");\n/* harmony import */ var _env_server_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../env/server.mjs */ \"(api)/./src/env/server.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_db_client__WEBPACK_IMPORTED_MODULE_3__, _env_server_mjs__WEBPACK_IMPORTED_MODULE_4__]);\n([_server_db_client__WEBPACK_IMPORTED_MODULE_3__, _env_server_mjs__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n // Prisma adapter for NextAuth, optional and can be removed\n\n\n\n\nconst authOptions = {\n  // Include user.id on session\n  callbacks: {\n    session({\n      session,\n      user\n    }) {\n      if (session.user) {\n        session.user.id = user.id;\n      }\n\n      return session;\n    }\n\n  },\n  // Configure one or more authentication providers\n  adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_server_db_client__WEBPACK_IMPORTED_MODULE_3__.prisma),\n  providers: [next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1___default()({\n    clientId: _env_server_mjs__WEBPACK_IMPORTED_MODULE_4__.env.DISCORD_CLIENT_ID,\n    clientSecret: _env_server_mjs__WEBPACK_IMPORTED_MODULE_4__.env.DISCORD_CLIENT_SECRET\n  }) // ...add more providers here\n  ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNSyxXQUE0QixHQUFHO0VBQzFDO0VBQ0FDLFNBQVMsRUFBRTtJQUNUQyxPQUFPLENBQUM7TUFBRUEsT0FBRjtNQUFXQztJQUFYLENBQUQsRUFBb0I7TUFDekIsSUFBSUQsT0FBTyxDQUFDQyxJQUFaLEVBQWtCO1FBQ2hCRCxPQUFPLENBQUNDLElBQVIsQ0FBYUMsRUFBYixHQUFrQkQsSUFBSSxDQUFDQyxFQUF2QjtNQUNEOztNQUNELE9BQU9GLE9BQVA7SUFDRDs7RUFOUSxDQUYrQjtFQVUxQztFQUNBRyxPQUFPLEVBQUVSLHdFQUFhLENBQUNDLHFEQUFELENBWG9CO0VBWTFDUSxTQUFTLEVBQUUsQ0FDVFYsa0VBQWUsQ0FBQztJQUNkVyxRQUFRLEVBQUVSLGtFQURJO0lBRWRVLFlBQVksRUFBRVYsc0VBQXlCVztFQUZ6QixDQUFELENBRE4sQ0FLVDtFQUxTO0FBWitCLENBQXJDO0FBcUJQLGlFQUFlZixnREFBUSxDQUFDSyxXQUFELENBQXZCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZmVzdGlidWRkeS93ZWItY2xpZW50LXNlcnZlci1hcHAvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyB0eXBlIE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBEaXNjb3JkUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZGlzY29yZFwiO1xuXG4vLyBQcmlzbWEgYWRhcHRlciBmb3IgTmV4dEF1dGgsIG9wdGlvbmFsIGFuZCBjYW4gYmUgcmVtb3ZlZFxuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL2RiL2NsaWVudFwiO1xuaW1wb3J0IHsgZW52IH0gZnJvbSBcIi4uLy4uLy4uL2Vudi9zZXJ2ZXIubWpzXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICAvLyBJbmNsdWRlIHVzZXIuaWQgb24gc2Vzc2lvblxuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uKHsgc2Vzc2lvbiwgdXNlciB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHVzZXIuaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGlzY29yZFByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBlbnYuRElTQ09SRF9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IGVudi5ESVNDT1JEX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkRpc2NvcmRQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJlbnYiLCJhdXRoT3B0aW9ucyIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJESVNDT1JEX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/server/db/client.ts":
/*!*********************************!*\
  !*** ./src/server/db/client.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env_server_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../env/server.mjs */ \"(api)/./src/env/server.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_server_mjs__WEBPACK_IMPORTED_MODULE_1__]);\n_env_server_mjs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// src/server/db/client.ts\n\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n  log: [\"query\"]\n});\n\nif (_env_server_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV !== \"production\") {\n  global.prisma = prisma;\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2RiL2NsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTU8sTUFBTUUsTUFBTSxHQUNqQkMsTUFBTSxDQUFDRCxNQUFQLElBQ0EsSUFBSUYsd0RBQUosQ0FBaUI7RUFDZkksR0FBRyxFQUFFLENBQUMsT0FBRDtBQURVLENBQWpCLENBRks7O0FBTVAsSUFBSUgseURBQUEsS0FBaUIsWUFBckIsRUFBbUM7RUFDakNFLE1BQU0sQ0FBQ0QsTUFBUCxHQUFnQkEsTUFBaEI7QUFDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGZlc3RpYnVkZHkvd2ViLWNsaWVudC1zZXJ2ZXItYXBwLy4vc3JjL3NlcnZlci9kYi9jbGllbnQudHM/MjcyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2VydmVyL2RiL2NsaWVudC50c1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBlbnYgfSBmcm9tIFwiLi4vLi4vZW52L3NlcnZlci5tanNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPVxuICBnbG9iYWwucHJpc21hIHx8XG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuICAgIGxvZzogW1wicXVlcnlcIl0sXG4gIH0pO1xuXG5pZiAoZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBnbG9iYWwucHJpc21hID0gcHJpc21hO1xufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImVudiIsInByaXNtYSIsImdsb2JhbCIsImxvZyIsIk5PREVfRU5WIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/server/db/client.ts\n");

/***/ }),

/***/ "(api)/./src/env/client.mjs":
/*!****************************!*\
  !*** ./src/env/client.mjs ***!
  \****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"env\": () => (/* binding */ env),\n/* harmony export */   \"formatErrors\": () => (/* binding */ formatErrors)\n/* harmony export */ });\n/* harmony import */ var _schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema.mjs */ \"(api)/./src/env/schema.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__]);\n_schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-check\n\n\nconst _clientEnv = _schema_mjs__WEBPACK_IMPORTED_MODULE_0__.clientSchema.safeParse(_schema_mjs__WEBPACK_IMPORTED_MODULE_0__.clientEnv);\n\nconst formatErrors = (\n/** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */\nerrors) => Object.entries(errors).map(([name, value]) => {\n  if (value && \"_errors\" in value) return `${name}: ${value._errors.join(\", \")}\\n`;\n}).filter(Boolean);\n\nif (!_clientEnv.success) {\n  console.error(\"❌ Invalid environment variables:\\n\", ...formatErrors(_clientEnv.error.format()));\n  throw new Error(\"Invalid environment variables\");\n}\n/**\n * Validate that client-side environment variables are exposed to the client.\n */\n\n\nfor (let key of Object.keys(_clientEnv.data)) {\n  if (!key.startsWith(\"NEXT_PUBLIC_\")) {\n    console.warn(\"❌ Invalid public environment variable name:\", key);\n    throw new Error(\"Invalid public environment variable name\");\n  }\n}\n\nconst env = _clientEnv.data;\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52L2NsaWVudC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNRSxVQUFVLEdBQUdELCtEQUFBLENBQXVCRCxrREFBdkIsQ0FBbkI7O0FBRU8sTUFBTUksWUFBWSxHQUFHO0FBQzFCO0FBQ0FDLE1BRjBCLEtBSTFCQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUYsTUFBZixFQUNHRyxHQURILENBQ08sQ0FBQyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsQ0FBRCxLQUFtQjtFQUN0QixJQUFJQSxLQUFLLElBQUksYUFBYUEsS0FBMUIsRUFDRSxPQUFRLEdBQUVELElBQUssS0FBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBeUIsSUFBNUM7QUFDSCxDQUpILEVBS0dDLE1BTEgsQ0FLVUMsT0FMVixDQUpLOztBQVdQLElBQUksQ0FBQ1osVUFBVSxDQUFDYSxPQUFoQixFQUF5QjtFQUN2QkMsT0FBTyxDQUFDQyxLQUFSLENBQ0Usb0NBREYsRUFFRSxHQUFHYixZQUFZLENBQUNGLFVBQVUsQ0FBQ2UsS0FBWCxDQUFpQkMsTUFBakIsRUFBRCxDQUZqQjtFQUlBLE1BQU0sSUFBSUMsS0FBSixDQUFVLCtCQUFWLENBQU47QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsS0FBSyxJQUFJQyxHQUFULElBQWdCZCxNQUFNLENBQUNlLElBQVAsQ0FBWW5CLFVBQVUsQ0FBQ29CLElBQXZCLENBQWhCLEVBQThDO0VBQzVDLElBQUksQ0FBQ0YsR0FBRyxDQUFDRyxVQUFKLENBQWUsY0FBZixDQUFMLEVBQXFDO0lBQ25DUCxPQUFPLENBQUNRLElBQVIsQ0FBYSw2Q0FBYixFQUE0REosR0FBNUQ7SUFFQSxNQUFNLElBQUlELEtBQUosQ0FBVSwwQ0FBVixDQUFOO0VBQ0Q7QUFDRjs7QUFFTSxNQUFNTSxHQUFHLEdBQUd2QixVQUFVLENBQUNvQixJQUF2QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGZlc3RpYnVkZHkvd2ViLWNsaWVudC1zZXJ2ZXItYXBwLy4vc3JjL2Vudi9jbGllbnQubWpzPzY1YTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWNoZWNrXG5pbXBvcnQgeyBjbGllbnRFbnYsIGNsaWVudFNjaGVtYSB9IGZyb20gXCIuL3NjaGVtYS5tanNcIjtcblxuY29uc3QgX2NsaWVudEVudiA9IGNsaWVudFNjaGVtYS5zYWZlUGFyc2UoY2xpZW50RW52KTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEVycm9ycyA9IChcbiAgLyoqIEB0eXBlIHtpbXBvcnQoJ3pvZCcpLlpvZEZvcm1hdHRlZEVycm9yPE1hcDxzdHJpbmcsc3RyaW5nPixzdHJpbmc+fSAqL1xuICBlcnJvcnMsXG4pID0+XG4gIE9iamVjdC5lbnRyaWVzKGVycm9ycylcbiAgICAubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodmFsdWUgJiYgXCJfZXJyb3JzXCIgaW4gdmFsdWUpXG4gICAgICAgIHJldHVybiBgJHtuYW1lfTogJHt2YWx1ZS5fZXJyb3JzLmpvaW4oXCIsIFwiKX1cXG5gO1xuICAgIH0pXG4gICAgLmZpbHRlcihCb29sZWFuKTtcblxuaWYgKCFfY2xpZW50RW52LnN1Y2Nlc3MpIHtcbiAgY29uc29sZS5lcnJvcihcbiAgICBcIuKdjCBJbnZhbGlkIGVudmlyb25tZW50IHZhcmlhYmxlczpcXG5cIixcbiAgICAuLi5mb3JtYXRFcnJvcnMoX2NsaWVudEVudi5lcnJvci5mb3JtYXQoKSksXG4gICk7XG4gIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGVzXCIpO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIHRoYXQgY2xpZW50LXNpZGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIGFyZSBleHBvc2VkIHRvIHRoZSBjbGllbnQuXG4gKi9cbmZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhfY2xpZW50RW52LmRhdGEpKSB7XG4gIGlmICgha2V5LnN0YXJ0c1dpdGgoXCJORVhUX1BVQkxJQ19cIikpIHtcbiAgICBjb25zb2xlLndhcm4oXCLinYwgSW52YWxpZCBwdWJsaWMgZW52aXJvbm1lbnQgdmFyaWFibGUgbmFtZTpcIiwga2V5KTtcblxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcHVibGljIGVudmlyb25tZW50IHZhcmlhYmxlIG5hbWVcIik7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVudiA9IF9jbGllbnRFbnYuZGF0YTtcbiJdLCJuYW1lcyI6WyJjbGllbnRFbnYiLCJjbGllbnRTY2hlbWEiLCJfY2xpZW50RW52Iiwic2FmZVBhcnNlIiwiZm9ybWF0RXJyb3JzIiwiZXJyb3JzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsIm5hbWUiLCJ2YWx1ZSIsIl9lcnJvcnMiLCJqb2luIiwiZmlsdGVyIiwiQm9vbGVhbiIsInN1Y2Nlc3MiLCJjb25zb2xlIiwiZXJyb3IiLCJmb3JtYXQiLCJFcnJvciIsImtleSIsImtleXMiLCJkYXRhIiwic3RhcnRzV2l0aCIsIndhcm4iLCJlbnYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/env/client.mjs\n");

/***/ }),

/***/ "(api)/./src/env/schema.mjs":
/*!****************************!*\
  !*** ./src/env/schema.mjs ***!
  \****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clientEnv\": () => (/* binding */ clientEnv),\n/* harmony export */   \"clientSchema\": () => (/* binding */ clientSchema),\n/* harmony export */   \"serverSchema\": () => (/* binding */ serverSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);\nzod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-check\n\n/**\n * Specify your server-side environment variables schema here.\n * This way you can ensure the app isn't built with invalid env vars.\n */\n\nconst serverSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n  DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url(),\n  NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_0__.z[\"enum\"]([\"development\", \"test\", \"production\"]),\n  NEXTAUTH_SECRET: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n  NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url(),\n  DISCORD_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n  DISCORD_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()\n});\n/**\n * Specify your client-side environment variables schema here.\n * This way you can ensure the app isn't built with invalid env vars.\n * To expose them to the client, prefix them with `NEXT_PUBLIC_`.\n */\n\nconst clientSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({// NEXT_PUBLIC_BAR: z.string(),\n});\n/**\n * You can't destruct `process.env` as a regular object, so you have to do\n * it manually here. This is because Next.js evaluates this at build time,\n * and only used environment variables are included in the build.\n * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}\n */\n\nconst clientEnv = {// NEXT_PUBLIC_BAR: process.env.NEXT_PUBLIC_BAR,\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52L3NjaGVtYS5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQyxZQUFZLEdBQUdELHlDQUFBLENBQVM7RUFDbkNHLFlBQVksRUFBRUgseUNBQUEsR0FBV0ssR0FBWCxFQURxQjtFQUVuQ0MsUUFBUSxFQUFFTiwwQ0FBQSxDQUFPLENBQUMsYUFBRCxFQUFnQixNQUFoQixFQUF3QixZQUF4QixDQUFQLENBRnlCO0VBR25DUSxlQUFlLEVBQUVSLHlDQUFBLEVBSGtCO0VBSW5DUyxZQUFZLEVBQUVULHlDQUFBLEdBQVdLLEdBQVgsRUFKcUI7RUFLbkNLLGlCQUFpQixFQUFFVix5Q0FBQSxFQUxnQjtFQU1uQ1cscUJBQXFCLEVBQUVYLHlDQUFBO0FBTlksQ0FBVCxDQUFyQjtBQVNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTVksWUFBWSxHQUFHWix5Q0FBQSxDQUFTLENBQ25DO0FBRG1DLENBQVQsQ0FBckI7QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTWEsU0FBUyxHQUFHLENBQ3ZCO0FBRHVCLENBQWxCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZmVzdGlidWRkeS93ZWItY2xpZW50LXNlcnZlci1hcHAvLi9zcmMvZW52L3NjaGVtYS5tanM/NDIyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtY2hlY2tcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbi8qKlxuICogU3BlY2lmeSB5b3VyIHNlcnZlci1zaWRlIGVudmlyb25tZW50IHZhcmlhYmxlcyBzY2hlbWEgaGVyZS5cbiAqIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHAgaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLlxuICovXG5leHBvcnQgY29uc3Qgc2VydmVyU2NoZW1hID0gei5vYmplY3Qoe1xuICBEQVRBQkFTRV9VUkw6IHouc3RyaW5nKCkudXJsKCksXG4gIE5PREVfRU5WOiB6LmVudW0oW1wiZGV2ZWxvcG1lbnRcIiwgXCJ0ZXN0XCIsIFwicHJvZHVjdGlvblwiXSksXG4gIE5FWFRBVVRIX1NFQ1JFVDogei5zdHJpbmcoKSxcbiAgTkVYVEFVVEhfVVJMOiB6LnN0cmluZygpLnVybCgpLFxuICBESVNDT1JEX0NMSUVOVF9JRDogei5zdHJpbmcoKSxcbiAgRElTQ09SRF9DTElFTlRfU0VDUkVUOiB6LnN0cmluZygpLFxufSk7XG5cbi8qKlxuICogU3BlY2lmeSB5b3VyIGNsaWVudC1zaWRlIGVudmlyb25tZW50IHZhcmlhYmxlcyBzY2hlbWEgaGVyZS5cbiAqIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHAgaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLlxuICogVG8gZXhwb3NlIHRoZW0gdG8gdGhlIGNsaWVudCwgcHJlZml4IHRoZW0gd2l0aCBgTkVYVF9QVUJMSUNfYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNsaWVudFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgLy8gTkVYVF9QVUJMSUNfQkFSOiB6LnN0cmluZygpLFxufSk7XG5cbi8qKlxuICogWW91IGNhbid0IGRlc3RydWN0IGBwcm9jZXNzLmVudmAgYXMgYSByZWd1bGFyIG9iamVjdCwgc28geW91IGhhdmUgdG8gZG9cbiAqIGl0IG1hbnVhbGx5IGhlcmUuIFRoaXMgaXMgYmVjYXVzZSBOZXh0LmpzIGV2YWx1YXRlcyB0aGlzIGF0IGJ1aWxkIHRpbWUsXG4gKiBhbmQgb25seSB1c2VkIGVudmlyb25tZW50IHZhcmlhYmxlcyBhcmUgaW5jbHVkZWQgaW4gdGhlIGJ1aWxkLlxuICogQHR5cGUge3sgW2sgaW4ga2V5b2Ygei5pbmZlcjx0eXBlb2YgY2xpZW50U2NoZW1hPl06IHouaW5mZXI8dHlwZW9mIGNsaWVudFNjaGVtYT5ba10gfCB1bmRlZmluZWQgfX1cbiAqL1xuZXhwb3J0IGNvbnN0IGNsaWVudEVudiA9IHtcbiAgLy8gTkVYVF9QVUJMSUNfQkFSOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVIsXG59O1xuIl0sIm5hbWVzIjpbInoiLCJzZXJ2ZXJTY2hlbWEiLCJvYmplY3QiLCJEQVRBQkFTRV9VUkwiLCJzdHJpbmciLCJ1cmwiLCJOT0RFX0VOViIsImVudW0iLCJORVhUQVVUSF9TRUNSRVQiLCJORVhUQVVUSF9VUkwiLCJESVNDT1JEX0NMSUVOVF9JRCIsIkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCIsImNsaWVudFNjaGVtYSIsImNsaWVudEVudiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/env/schema.mjs\n");

/***/ }),

/***/ "(api)/./src/env/server.mjs":
/*!****************************!*\
  !*** ./src/env/server.mjs ***!
  \****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"env\": () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var _schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema.mjs */ \"(api)/./src/env/schema.mjs\");\n/* harmony import */ var _client_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.mjs */ \"(api)/./src/env/client.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__, _client_mjs__WEBPACK_IMPORTED_MODULE_1__]);\n([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__, _client_mjs__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// @ts-check\n\n/**\n * This file is included in `/next.config.mjs` which ensures the app isn't built with invalid env vars.\n * It has to be a `.mjs`-file to be imported there.\n */\n\n\n\nconst _serverEnv = _schema_mjs__WEBPACK_IMPORTED_MODULE_0__.serverSchema.safeParse(process.env);\n\nif (!_serverEnv.success) {\n  console.error(\"❌ Invalid environment variables:\\n\", ...(0,_client_mjs__WEBPACK_IMPORTED_MODULE_1__.formatErrors)(_serverEnv.error.format()));\n  throw new Error(\"Invalid environment variables\");\n}\n/**\n * Validate that server-side environment variables are not exposed to the client.\n */\n\n\nfor (let key of Object.keys(_serverEnv.data)) {\n  if (key.startsWith(\"NEXT_PUBLIC_\")) {\n    console.warn(\"❌ You are exposing a server-side env-variable:\", key);\n    throw new Error(\"You are exposing a server-side env-variable\");\n  }\n}\n\nconst env = _objectSpread(_objectSpread({}, _serverEnv.data), _client_mjs__WEBPACK_IMPORTED_MODULE_1__.env);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52L3NlcnZlci5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1JLFVBQVUsR0FBR0osK0RBQUEsQ0FBdUJNLE9BQU8sQ0FBQ0wsR0FBL0IsQ0FBbkI7O0FBRUEsSUFBSSxDQUFDRyxVQUFVLENBQUNHLE9BQWhCLEVBQXlCO0VBQ3ZCQyxPQUFPLENBQUNDLEtBQVIsQ0FDRSxvQ0FERixFQUVFLEdBQUdOLHlEQUFZLENBQUNDLFVBQVUsQ0FBQ0ssS0FBWCxDQUFpQkMsTUFBakIsRUFBRCxDQUZqQjtFQUlBLE1BQU0sSUFBSUMsS0FBSixDQUFVLCtCQUFWLENBQU47QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsS0FBSyxJQUFJQyxHQUFULElBQWdCQyxNQUFNLENBQUNDLElBQVAsQ0FBWVYsVUFBVSxDQUFDVyxJQUF2QixDQUFoQixFQUE4QztFQUM1QyxJQUFJSCxHQUFHLENBQUNJLFVBQUosQ0FBZSxjQUFmLENBQUosRUFBb0M7SUFDbENSLE9BQU8sQ0FBQ1MsSUFBUixDQUFhLGdEQUFiLEVBQStETCxHQUEvRDtJQUVBLE1BQU0sSUFBSUQsS0FBSixDQUFVLDZDQUFWLENBQU47RUFDRDtBQUNGOztBQUVNLE1BQU1WLEdBQUcsbUNBQVFHLFVBQVUsQ0FBQ1csSUFBbkIsR0FBNEJiLDRDQUE1QixDQUFULEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZmVzdGlidWRkeS93ZWItY2xpZW50LXNlcnZlci1hcHAvLi9zcmMvZW52L3NlcnZlci5tanM/YjAyOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtY2hlY2tcbi8qKlxuICogVGhpcyBmaWxlIGlzIGluY2x1ZGVkIGluIGAvbmV4dC5jb25maWcubWpzYCB3aGljaCBlbnN1cmVzIHRoZSBhcHAgaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLlxuICogSXQgaGFzIHRvIGJlIGEgYC5tanNgLWZpbGUgdG8gYmUgaW1wb3J0ZWQgdGhlcmUuXG4gKi9cbmltcG9ydCB7IHNlcnZlclNjaGVtYSB9IGZyb20gXCIuL3NjaGVtYS5tanNcIjtcbmltcG9ydCB7IGVudiBhcyBjbGllbnRFbnYsIGZvcm1hdEVycm9ycyB9IGZyb20gXCIuL2NsaWVudC5tanNcIjtcblxuY29uc3QgX3NlcnZlckVudiA9IHNlcnZlclNjaGVtYS5zYWZlUGFyc2UocHJvY2Vzcy5lbnYpO1xuXG5pZiAoIV9zZXJ2ZXJFbnYuc3VjY2Vzcykge1xuICBjb25zb2xlLmVycm9yKFxuICAgIFwi4p2MIEludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGVzOlxcblwiLFxuICAgIC4uLmZvcm1hdEVycm9ycyhfc2VydmVyRW52LmVycm9yLmZvcm1hdCgpKSxcbiAgKTtcbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZXNcIik7XG59XG5cbi8qKlxuICogVmFsaWRhdGUgdGhhdCBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYXJlIG5vdCBleHBvc2VkIHRvIHRoZSBjbGllbnQuXG4gKi9cbmZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhfc2VydmVyRW52LmRhdGEpKSB7XG4gIGlmIChrZXkuc3RhcnRzV2l0aChcIk5FWFRfUFVCTElDX1wiKSkge1xuICAgIGNvbnNvbGUud2FybihcIuKdjCBZb3UgYXJlIGV4cG9zaW5nIGEgc2VydmVyLXNpZGUgZW52LXZhcmlhYmxlOlwiLCBrZXkpO1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBleHBvc2luZyBhIHNlcnZlci1zaWRlIGVudi12YXJpYWJsZVwiKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZW52ID0geyAuLi5fc2VydmVyRW52LmRhdGEsIC4uLmNsaWVudEVudiB9O1xuIl0sIm5hbWVzIjpbInNlcnZlclNjaGVtYSIsImVudiIsImNsaWVudEVudiIsImZvcm1hdEVycm9ycyIsIl9zZXJ2ZXJFbnYiLCJzYWZlUGFyc2UiLCJwcm9jZXNzIiwic3VjY2VzcyIsImNvbnNvbGUiLCJlcnJvciIsImZvcm1hdCIsIkVycm9yIiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsImRhdGEiLCJzdGFydHNXaXRoIiwid2FybiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/env/server.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();