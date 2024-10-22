// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hycaY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js"); // Importing the model.js file
var _recipiViewJs = require("./views/recipiView.js");
var _recipiViewJsDefault = parcelHelpers.interopDefault(_recipiViewJs);
var _resultViewJs = require("./views/resultView.js");
var _resultViewJsDefault = parcelHelpers.interopDefault(_resultViewJs);
var _searchViewJs = require("./views/searchView.js"); //Importing all the Views
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _pagenationViewJs = require("./views/pagenationView.js");
var _pagenationViewJsDefault = parcelHelpers.interopDefault(_pagenationViewJs);
var _bookMarksViewJs = require("./views/bookMarksView.js");
var _bookMarksViewJsDefault = parcelHelpers.interopDefault(_bookMarksViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _configJs = require("./config.js");
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
if (module.hot) module.hot.accept();
// Function to controll the recipe
const controlRecipes = async function() {
    try {
        // Get the id from the url
        const id = window.location.hash.slice(1);
        // If there is no id, return
        if (!id) return;
        // Rendering Spinner
        (0, _recipiViewJsDefault.default).renderSpinner();
        // Updating the active link
        (0, _resultViewJsDefault.default).update(_modelJs.getSearchResultsPage());
        // Updating the bookmark view
        (0, _bookMarksViewJsDefault.default).update(_modelJs.state.bookMarks);
        // Loading recipe
        await _modelJs.loadRecipes(id);
        // Rendering recipe
        (0, _recipiViewJsDefault.default).render(_modelJs.state.recipe);
    } catch (error) {
        console.error(error);
        // Render error message
        (0, _recipiViewJsDefault.default).renderError();
    }
};
// Function to controll the search results
const controllSearchResults = async function() {
    try {
        // Get the query from the search view
        const query = (0, _searchViewJsDefault.default).getQuery();
        // Render Spinner only if there is a query
        if (query) (0, _resultViewJsDefault.default).renderSpinner();
        // If there is no query, return
        if (!query) return;
        // Loading search results
        await _modelJs.loadSearchResults(query);
        // Rendering search results
        (0, _resultViewJsDefault.default).render(_modelJs.getSearchResultsPage());
        // Rendering initial pagenation buttons
        (0, _pagenationViewJsDefault.default).render(_modelJs.state.search);
    } catch (error) {
        (0, _resultViewJsDefault.default).renderError();
    }
};
// Function to controll the pagenation
const controlPagenation = function(goToPage) {
    // Rendering the new search results
    (0, _pagenationViewJsDefault.default).render(_modelJs.getSearchResultsPage(goToPage));
    // Rendering the new pagenation buttons
    (0, _pagenationViewJsDefault.default).render(_modelJs.state.search);
    (0, _resultViewJsDefault.default).render(_modelJs.getSearchResultsPage(goToPage));
};
// Function to controll the servings
const controllServings = function(newServings) {
    // update the servings in the state
    _modelJs.updateServings(newServings);
    // update the recipe view
    (0, _recipiViewJsDefault.default).update(_modelJs.state.recipe);
};
// Function to controll the adding and removing of bookmark
const controllAddBookmark = function() {
    // Add or remove bookmark
    if (!_modelJs.state.recipe.bookMarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    // Update recipe view
    (0, _recipiViewJsDefault.default).update(_modelJs.state.recipe);
    // Render bookmarks
    (0, _bookMarksViewJsDefault.default).render(_modelJs.state.bookMarks);
};
// Function to controll the bookmark
const controllBookMarks = function() {
    (0, _bookMarksViewJsDefault.default).render(_modelJs.state.bookMarks);
};
// Function to controll the add recipe
const controllAddRecipe = async function(newRecipe) {
    try {
        // Show loading spinner
        (0, _addRecipeViewJsDefault.default).renderSpinner();
        // upload the new recipe data
        await _modelJs.uploadRecipe(newRecipe);
        console.log(_modelJs.state.recipe);
        // render recipe
        (0, _recipiViewJsDefault.default).render(_modelJs.state.recipe);
        // success message
        (0, _addRecipeViewJsDefault.default).renderMessage();
        // render bookmark view
        (0, _bookMarksViewJsDefault.default).render(_modelJs.state.bookMarks);
        // change ID in the url
        window.history.pushState(null, "", `#${_modelJs.state.recipe.id}`); // state, title, url
        //close form window
        setTimeout(()=>{
            (0, _addRecipeViewJsDefault.default).toggleWindow();
        }, (0, _configJs.MODAL_CLOSE_SEC) * 1000);
    } catch (error) {
        console.error("Error uploading recipe", error);
        (0, _addRecipeViewJsDefault.default).renderError(error);
    }
};
// Event listener for the hashchange event and load event to load the recipe
const init = function() {
    (0, _bookMarksViewJsDefault.default).addHandlerRender(controllBookMarks);
    (0, _recipiViewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _recipiViewJsDefault.default).addHandlerRenderUpdateServings(controllServings);
    (0, _recipiViewJsDefault.default).addHandlerRenderBookmark(controllAddBookmark);
    (0, _searchViewJsDefault.default).addHandlerSearch(controllSearchResults);
    (0, _pagenationViewJsDefault.default).addHandlerClick(controlPagenation);
    (0, _addRecipeViewJsDefault.default).addHandlerUpload(controllAddRecipe);
};
init() // Calling the init function to start the app
;

},{"./model.js":"Y4A21","./views/recipiView.js":"cKxvC","./views/resultView.js":"f70O5","./views/searchView.js":"9OQAM","./views/pagenationView.js":"7Vqbs","./views/bookMarksView.js":"1O019","./views/addRecipeView.js":"i6DNj","./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipes", ()=>loadRecipes);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
var _helper = require("./helper");
var _config = require("./config");
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        page: 1,
        resultsPerPage: (0, _config.RES_PER_PAGE)
    },
    bookMarks: []
};
// Function to create a recipe object from the data received from the API
const createRecipeObject = function(data) {
    const { recipe } = data.data;
    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.sourceUrl,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const loadRecipes = async function(id) {
    try {
        const url = `${(0, _config.API_URL)}${id}?key=${(0, _config.KEY)}`;
        const data = await (0, _helper.AJAX)(url);
        state.recipe = createRecipeObject(data);
        // Check if the current recipe is bookmarked
        if (state.bookMarks.some((bookMark)=>bookMark.id === id)) state.recipe.bookMarked = true;
        else state.recipe.bookMarked = false;
    } catch (error) {
        throw error;
    }
};
const loadSearchResults = async function(query) {
    try {
        const url = `${(0, _config.API_URL)}?search=${query}&key=${(0, _config.KEY)}`;
        state.search.query = query;
        const data = await (0, _helper.AJAX)(url);
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...rec.key && {
                    key: rec.key
                }
            };
        });
        state.search.page = 1;
    } catch (error) {
        throw error;
    }
};
const getSearchResultsPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; // 0
    const end = page * state.search.resultsPerPage; // 10
    return state.search.results.slice(start, end);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
    });
    state.recipe.servings = newServings;
};
// Function to persist bookmarks to local storage
const persistBookmarks = function() {
    localStorage.setItem("bookMarks", JSON.stringify(state.bookMarks));
};
const addBookmark = function(recipe) {
    state.bookMarks.push(recipe);
    // Mark current recipe as bookmarked
    if (state.recipe.id === recipe.id) state.recipe.bookMarked = true;
    persistBookmarks();
};
const deleteBookmark = function(id) {
    const index = state.bookMarks.findIndex((bookMark)=>bookMark.id == id);
    state.bookMarks.splice(index, 1);
    // Mark current recipe as NOT bookmarked
    if (state.recipe.id === id) state.recipe.bookMarked = false;
    persistBookmarks();
};
// Function to get bookmarks from local storage
const init = function() {
    const storage = localStorage.getItem("bookMarks");
    if (storage) state.bookMarks = JSON.parse(storage);
};
init(); // Call the function to get bookmarks from local storage at the starting of the application
// Function to clear bookmarks from local storage for dev purposes
const clearBookmarks = function() {
    localStorage.clear("bookMarks");
};
const uploadRecipe = async function(newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith("ingredient") && entry[1] !== "") // Filter out empty ingredients
        .map((ing)=>{
            // Convert the ingredient into the correct format
            const ingArr = ing[1].split(",").map((el)=>el.trim());
            if (ingArr.length !== 3) throw new Error("Wrong ingredient format! Please use the correct format :)");
            const [quantity, unit, description] = ingArr;
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        // Create a new recipe object
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients
        };
        // Send the new recipe to the API (POST)
        const data = await (0, _helper.AJAX)(`${(0, _config.API_URL)}?key=${(0, _config.KEY)}`, recipe);
        state.recipe = createRecipeObject(data); // Update the state with the new recipe
        addBookmark(state.recipe);
    } catch (error) {
        throw error;
    }
};

},{"./helper":"lVRAz","./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _configJs = require("./config.js");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        // Set a timeout that rejects the promise after TIMEOUT_SEC seconds
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData) {
    try {
        // If uploadData is defined, make a POST request with the data
        const fetchPro = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        // Wait for the fetch request to resolve or the timeout to reject
        const res = await Promise.race([
            fetchPro,
            timeout((0, _configJs.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "KEY", ()=>KEY);
parcelHelpers.export(exports, "MODAL_CLOSE_SEC", ()=>MODAL_CLOSE_SEC);
const API_URL = `https://forkify-api.herokuapp.com/api/v2/recipes/`;
const TIMEOUT_SEC = 10;
const RES_PER_PAGE = 10;
const KEY = "cf440178-83c0-4920-8395-611e29b4b15a";
const MODAL_CLOSE_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cKxvC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel-bundler
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fractionJs = require("fraction.js");
// var Fraction = require ('fraction.js');
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class recipeView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".recipe");
    _errorMessage = "We could not find that recipe. Please try another one!";
    _message = "";
    // Add event listeners to the window object for hashchange and load events
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    // Add event listeners to the parent element for click events
    addHandlerRenderUpdateServings(handler) {
        this._parentEl.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--update-servings");
            if (!btn) return;
            const updateTo = +btn.dataset.updateTo;
            updateTo >= 1 ? handler(updateTo) : handler(1);
        });
    }
    // Add event listeners to the parent element for click events
    addHandlerRenderBookmark(handler) {
        this._parentEl.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handler();
        });
    }
    // Generate the markup for the recipe
    _generateMarkup() {
        return `
          <figure class="recipe__fig">
            <img src= ${this._data.image} alt=${this._data.title} class="recipe__img" />
            <h1 class="recipe__title">
              <span>${this._data.title}</span>
            </h1>
          </figure>

          <div class="recipe__details">
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
              <span class="recipe__info-text">servings</span>

              <div class="recipe__info-buttons">
                <button class="btn--tiny btn--update-servings" data-update-to ="${this._data.servings - 1}">
                  <svg>
                    <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
                  </svg>
                </button>
                <button class="btn--tiny btn--update-servings" data-update-to ="${this._data.servings + 1}">
                  <svg>
                    <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
                  </svg>
                </button>
              </div>
            </div>

            <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
              </svg>
            </div>
            <button class="btn--round btn--bookmark">
              <svg class="">
                <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookMarked ? "-fill" : ""}"></use>
              </svg>
            </button>
          </div>

          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
              ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
            </ul>
          </div>

          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
              directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href=${this._data.sourceUrl}
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
              </svg>
            </a>
          </div>
        `;
    }
    // Generate the markup for the ingredient
    _generateMarkupIngredient(ing) {
        return `
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity ? new (0, _fractionJs.Fraction)(ing.quantity).toFraction(true) : ""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
              </div>
            </li>
          `;
    }
}
exports.default = new recipeView();

},{"url:../../img/icons.svg":"loVOp","fraction.js":"cNkjY","./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports) {
module.exports = require("9bcc84ee5d265e38").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"9bcc84ee5d265e38":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"cNkjY":[function(require,module,exports) {
/*
Fraction.js v5.0.6 10/10/2024
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2024, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/ "use strict";
(function(C) {
    function A() {
        return Error("Parameters must be integer");
    }
    function v() {
        return Error("Invalid argument");
    }
    function y() {
        return Error("Division by Zero");
    }
    function q(a, c) {
        var d = g, b = h;
        let f = h;
        if (void 0 !== a && null !== a) {
            if (void 0 !== c) {
                if ("bigint" === typeof a) d = a;
                else {
                    if (isNaN(a)) throw v();
                    if (0 !== a % 1) throw A();
                    d = BigInt(a);
                }
                if ("bigint" === typeof c) b = c;
                else {
                    if (isNaN(c)) throw v();
                    if (0 !== c % 1) throw A();
                    b = BigInt(c);
                }
                f = d * b;
            } else if ("object" === typeof a) {
                if ("d" in a && "n" in a) d = BigInt(a.n), b = BigInt(a.d), "s" in a && (d *= BigInt(a.s));
                else if (0 in a) d = BigInt(a[0]), 1 in a && (b = BigInt(a[1]));
                else if ("bigint" === typeof a) d = a;
                else throw v();
                f = d * b;
            } else if ("number" === typeof a) {
                if (isNaN(a)) throw v();
                0 > a && (f = -h, a = -a);
                if (0 === a % 1) d = BigInt(a);
                else if (0 < a) {
                    c = 1;
                    var m = 0, k = 1, n = 1;
                    let t = 1;
                    1 <= a && (c = 10 ** Math.floor(1 + Math.log10(a)), a /= c);
                    for(; 1E7 >= k && 1E7 >= t;)if (b = (m + n) / (k + t), a === b) {
                        1E7 >= k + t ? (d = m + n, b = k + t) : t > k ? (d = n, b = t) : (d = m, b = k);
                        break;
                    } else a > b ? (m += n, k += t) : (n += m, t += k), 1E7 < k ? (d = n, b = t) : (d = m, b = k);
                    d = BigInt(d) * BigInt(c);
                    b = BigInt(b);
                }
            } else if ("string" === typeof a) {
                b = 0;
                m = c = d = g;
                k = n = h;
                a = a.replace(/_/g, "").match(/\d+|./g);
                if (null === a) throw v();
                "-" === a[b] ? (f = -h, b++) : "+" === a[b] && b++;
                if (a.length === b + 1) c = u(a[b++], f);
                else if ("." === a[b + 1] || "." === a[b]) {
                    "." !== a[b] && (d = u(a[b++], f));
                    b++;
                    if (b + 1 === a.length || "(" === a[b + 1] && ")" === a[b + 3] || "'" === a[b + 1] && "'" === a[b + 3]) c = u(a[b], f), n = p ** BigInt(a[b].length), b++;
                    if ("(" === a[b] && ")" === a[b + 2] || "'" === a[b] && "'" === a[b + 2]) m = u(a[b + 1], f), k = p ** BigInt(a[b + 1].length) - h, b += 3;
                } else "/" === a[b + 1] || ":" === a[b + 1] ? (c = u(a[b], f), n = u(a[b + 2], h), b += 3) : "/" === a[b + 3] && " " === a[b + 1] && (d = u(a[b], f), c = u(a[b + 2], f), n = u(a[b + 4], h), b += 5);
                if (a.length <= b) b = n * k, f = d = m + b * d + k * c;
                else throw v();
            } else if ("bigint" === typeof a) f = d = a, b = h;
            else throw v();
        }
        if (b === g) throw y();
        e.s = f < g ? -h : h;
        e.n = d < g ? -d : d;
        e.d = b < g ? -b : b;
    }
    function u(a, c) {
        try {
            a = BigInt(a);
        } catch (d) {
            throw v();
        }
        return a * c;
    }
    function l(a, c) {
        if (c === g) throw y();
        const d = Object.create(r.prototype);
        d.s = a < g ? -h : h;
        a = a < g ? -a : a;
        const b = w(a, c);
        d.n = a / b;
        d.d = c / b;
        return d;
    }
    function B(a) {
        const c = {};
        let d = a, b = x, f = z - h;
        for(; f <= d;){
            for(; d % b === g;)d /= b, c[b] = (c[b] || g) + h;
            f += h + x * b++;
        }
        d !== a ? 1 < d && (c[d] = (c[d] || g) + h) : c[a] = (c[a] || g) + h;
        return c;
    }
    function D(a, c) {
        for(; c % x === g; c /= x);
        for(; c % z === g; c /= z);
        if (c === h) return g;
        a = p % c;
        let d = 1;
        for(; a !== h; d++)if (a = a * p % c, 2E3 < d) return g;
        return BigInt(d);
    }
    function E(a, c, d) {
        a = h;
        var b = p;
        let f = h;
        for(; d > g; b = b * b % c, d >>= h)d & h && (f = f * b % c);
        b = f;
        for(d = 0; 300 > d; d++){
            if (a === b) return BigInt(d);
            a = a * p % c;
            b = b * p % c;
        }
        return 0;
    }
    function w(a, c) {
        if (!a) return c;
        if (!c) return a;
        for(;;){
            a %= c;
            if (!a) return c;
            c %= a;
            if (!c) return a;
        }
    }
    function r(a, c) {
        q(a, c);
        if (this instanceof r) a = w(e.d, e.n), this.s = e.s, this.n = e.n / a, this.d = e.d / a;
        else return l(e.s * e.n, e.d);
    }
    "undefined" === typeof BigInt && (BigInt = function(a) {
        if (isNaN(a)) throw Error("");
        return a;
    });
    const g = BigInt(0), h = BigInt(1), x = BigInt(2), z = BigInt(5), p = BigInt(10), e = {
        s: h,
        n: g,
        d: h
    };
    r.prototype = {
        s: h,
        n: g,
        d: h,
        abs: function() {
            return l(this.n, this.d);
        },
        neg: function() {
            return l(-this.s * this.n, this.d);
        },
        add: function(a, c) {
            q(a, c);
            return l(this.s * this.n * e.d + e.s * this.d * e.n, this.d * e.d);
        },
        sub: function(a, c) {
            q(a, c);
            return l(this.s * this.n * e.d - e.s * this.d * e.n, this.d * e.d);
        },
        mul: function(a, c) {
            q(a, c);
            return l(this.s * e.s * this.n * e.n, this.d * e.d);
        },
        div: function(a, c) {
            q(a, c);
            return l(this.s * e.s * this.n * e.d, this.d * e.n);
        },
        clone: function() {
            return l(this.s * this.n, this.d);
        },
        mod: function(a, c) {
            if (void 0 === a) return l(this.s * this.n % this.d, h);
            q(a, c);
            if (g === e.n * this.d) throw y();
            return l(this.s * e.d * this.n % (e.n * this.d), e.d * this.d);
        },
        gcd: function(a, c) {
            q(a, c);
            return l(w(e.n, this.n) * w(e.d, this.d), e.d * this.d);
        },
        lcm: function(a, c) {
            q(a, c);
            return e.n === g && this.n === g ? l(g, h) : l(e.n * this.n, w(e.n, this.n) * w(e.d, this.d));
        },
        inverse: function() {
            return l(this.s * this.d, this.n);
        },
        pow: function(a, c) {
            q(a, c);
            if (e.d === h) return e.s < g ? l((this.s * this.d) ** e.n, this.n ** e.n) : l((this.s * this.n) ** e.n, this.d ** e.n);
            if (this.s < g) return null;
            a = B(this.n);
            c = B(this.d);
            let d = h, b = h;
            for(let f in a)if ("1" !== f) {
                if ("0" === f) {
                    d = g;
                    break;
                }
                a[f] *= e.n;
                if (a[f] % e.d === g) a[f] /= e.d;
                else return null;
                d *= BigInt(f) ** a[f];
            }
            for(let f in c)if ("1" !== f) {
                c[f] *= e.n;
                if (c[f] % e.d === g) c[f] /= e.d;
                else return null;
                b *= BigInt(f) ** c[f];
            }
            return e.s < g ? l(b, d) : l(d, b);
        },
        equals: function(a, c) {
            q(a, c);
            return this.s * this.n * e.d === e.s * e.n * this.d;
        },
        compare: function(a, c) {
            q(a, c);
            a = this.s * this.n * e.d - e.s * e.n * this.d;
            return (g < a) - (a < g);
        },
        ceil: function(a) {
            a = p ** BigInt(a || 0);
            return l(this.s * a * this.n / this.d + (a * this.n % this.d > g && this.s >= g ? h : g), a);
        },
        floor: function(a) {
            a = p ** BigInt(a || 0);
            return l(this.s * a * this.n / this.d - (a * this.n % this.d > g && this.s < g ? h : g), a);
        },
        round: function(a) {
            a = p ** BigInt(a || 0);
            return l(this.s * a * this.n / this.d + this.s * ((this.s >= g ? h : g) + a * this.n % this.d * x > this.d ? h : g), a);
        },
        roundTo: function(a, c) {
            q(a, c);
            var d = this.n * e.d;
            a = this.d * e.n;
            c = d % a;
            d /= a;
            c + c >= a && d++;
            return l(this.s * d * e.n, e.d);
        },
        divisible: function(a, c) {
            q(a, c);
            return !(!(e.n * this.d) || this.n * e.d % (e.n * this.d));
        },
        valueOf: function() {
            return Number(this.s * this.n) / Number(this.d);
        },
        toString: function(a) {
            function c(n) {
                return "bigint" === typeof n ? n : Math.floor(n);
            }
            let d = this.n, b = this.d;
            a = a || 15;
            var f = D(d, b);
            let m = E(d, b, f), k = this.s < g ? "-" : "";
            k += c(d / b);
            (d = d % b * p) && (k += ".");
            if (f) {
                for(a = m; a--;)k += c(d / b), d %= b, d *= p;
                for(k += "("; f--;)k += c(d / b), d %= b, d *= p;
                k += ")";
            } else for(f = a; d && f--;)k += c(d / b), d %= b, d *= p;
            return k;
        },
        toFraction: function(a) {
            let c = this.n, d = this.d, b = this.s < g ? "-" : "";
            if (d === h) b += c;
            else {
                let f = c / d;
                a && f > g && (b += f, b += " ", c %= d);
                b = b + c + "/" + d;
            }
            return b;
        },
        toLatex: function(a) {
            let c = this.n, d = this.d, b = this.s < g ? "-" : "";
            if (d === h) b += c;
            else {
                let f = c / d;
                a && f > g && (b += f, c %= d);
                b = b + "\\frac{" + c + "}{" + d;
                b += "}";
            }
            return b;
        },
        toContinued: function() {
            let a = this.n, c = this.d, d = [];
            do {
                d.push(a / c);
                let b = a % c;
                a = c;
                c = b;
            }while (a !== h);
            return d;
        },
        simplify: function(a) {
            a = a || .001;
            const c = this.abs(), d = c.toContinued();
            for(let b = 1; b < d.length; b++){
                let f = l(d[b - 1], h);
                for(let m = b - 2; 0 <= m; m--)f = f.inverse().add(d[m]);
                if (Math.abs(f.sub(c).valueOf()) < a) return f.mul(this.s);
            }
            return this;
        }
    };
    "function" === typeof define && define.amd ? define([], function() {
        return r;
    }) : (Object.defineProperty(r, "__esModule", {
        value: !0
    }), r["default"] = r, r.Fraction = r, module.exports = r);
})(this);

},{}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    // Render the data to the DOM
    render(data, render = true) {
        // If no data or an empty array is passed, render the error message
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markUp = this._generateMarkup();
        // If render is false, return the markup
        if (!render) return markUp;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markUp);
    }
    // Update the DOM with new data
    update(data) {
        this._data = data;
        const newMarkUp = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkUp);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(this._parentEl.querySelectorAll("*"));
        // Loop through the new elements and update the current elements if they are different
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            // Update changed TEXT
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") curEl.textContent = newEl.textContent;
            // Update changed ATTRIBUTES
            if (!newEl.isEqualNode(curEl)) // Loop through the attributes of the new element and update the current element
            Array.from(newEl.attributes).forEach((attr)=>{
                curEl.setAttribute(attr.name, attr.value);
            });
        });
    }
    // Clear the DOM
    _clear() {
        this._parentEl.innerHTML = "";
    }
    // Render a spinner
    renderSpinner() {
        const html = `
      <div class="spinner">
        <svg>
          <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
        </svg>
      </div>
    `;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", html);
    }
    // Render an error message
    renderError(message = this._errorMessage) {
        const markUp = `
      <div class="error">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markUp);
    }
    // Render a message
    renderMessage(message = this._message) {
        const markUp = `
      <div class="message">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markUp);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f70O5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
class resultView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".results");
    _errorMessage = "No recepi found for your query! Please try again \uD83D\uDE41";
    _message = "";
    // Generate the markup for the results
    _generateMarkup() {
        // Map through the data and return the markup for each result
        return this._data.map((result)=>{
            return (0, _previewViewJsDefault.default).render(result, false);
        }).join("");
    }
}
exports.default = new resultView();

},{"./view.js":"bWlJ9","./previewView.js":"1FDQ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FDQ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class previewView extends (0, _viewJsDefault.default) {
    _parentEl = "";
    // Generate the markup for the preview
    _generateMarkup() {
        // Get the id from the url
        const id = window.location.hash.slice(1);
        // Return the markup for the preview
        return `
          <li class="preview">
            <a class="preview__link ${id === this._data.id ? "preview__link--active" : ""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key ? "" : "hidden"}">
                  <svg>
                    <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
        `;
    }
}
exports.default = new previewView();

},{"url:../../img/icons.svg":"loVOp","./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class searchView {
    _parentEl = document.querySelector(".search");
    // Get the query from the search input field
    getQuery() {
        const query = this._parentEl.querySelector(".search__field").value;
        this._clearInput();
        return query;
    }
    // Clear the search input field
    _clearInput() {
        this._parentEl.querySelector(".search__field").value = "";
    }
    // Add an event listener to the search view to handle the search submission
    addHandlerSearch(handler) {
        // Add an event listener to the search view
        this._parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new searchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Vqbs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class pagenationView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".pagination");
    // Add event listener for click event
    addHandlerClick(handler) {
        this._parentEl.addEventListener("click", function(e) {
            // Get the closest button element
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            // Get the page number from the data attribute
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    // Generate the markup for the pagination
    _generateMarkup() {
        const numOfPages = Math.ceil((this._data.length || this._data.results.length) / this._data.resultsPerPage);
        let currentPage = this._data.page;
        // page 1 and there are other pages
        if (currentPage === 1 && numOfPages > 1) return `
              <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${currentPage + 1}</span>
                <svg class="search__icon">
                  <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
                </svg>
              </button>
            `;
        // last page
        if (currentPage === numOfPages && numOfPages > 1) return `
              <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                  <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currentPage - 1}</span>
              </button>
            `;
        // other page
        if (currentPage < numOfPages) return `
              <button data-goto="${currentPage - 1}" button class="btn--inline pagination__btn--prev" >
                <svg class="search__icon">
                  <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currentPage - 1}</span>
              </button >
              <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${currentPage + 1}</span>
                <svg class="search__icon">
                  <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
                </svg>
              </button>
            `;
        // page 1 and there are no other pages
        return "";
    }
}
exports.default = new pagenationView();

},{"url:../../img/icons.svg":"loVOp","./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1O019":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
class bookMarksView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".bookmarks__list");
    _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it \uD83D\uDE41";
    _message = "";
    // Add an event listener to the window to render the bookmarks when the page loads
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    // Generate the markup for the bookmarks
    _generateMarkup() {
        // Map through the bookmarks and render each one using the previewView class
        return this._data.map((bookMark)=>{
            return (0, _previewViewJsDefault.default).render(bookMark, false);
        }).join("");
    }
}
exports.default = new bookMarksView();

},{"./view.js":"bWlJ9","./previewView.js":"1FDQ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6DNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
// Class to handle the add recipe view
class addRecipeView extends (0, _viewJsDefault.default) {
    // Select the parent element and the message to be displayed
    _parentEl = document.querySelector(".upload");
    _message = "Recipe was successfully uploaded :)";
    // Select the overlay and the window elements
    _overlay = document.querySelector(".overlay");
    _window = document.querySelector(".add-recipe-window");
    // Select the open and close buttons
    _btnOpen = document.querySelector(".nav__btn--add-recipe");
    _btnClose = document.querySelector(".btn--close-modal");
    // Constructor to add event listeners to the open and close buttons
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    // Function to toggle the overlay and window elements
    toggleWindow() {
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
    }
    // Function to add event listener to the open button
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
    }
    // Function to add event listener to the close button and the overlay
    _addHandlerHideWindow() {
        this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
        this._overlay.addEventListener("click", this.toggleWindow.bind(this));
    }
    // Function to add event listener to the submit button
    addHandlerUpload(handler) {
        this._parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            // Get the form data and convert it to an object
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            handler(data);
        });
    }
}
exports.default = new addRecipeView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hycaY","aenu9"], "aenu9", "parcelRequire7e89")

//# sourceMappingURL=index.e37f48ea.js.map
