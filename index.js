function G1(t, r) {
  for (var o = 0; o < r.length; o++) {
    const s = r[o];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const l in s)
        if (l !== "default" && !(l in t)) {
          const u = Object.getOwnPropertyDescriptor(s, l);
          u &&
            Object.defineProperty(
              t,
              l,
              u.get ? u : { enumerable: !0, get: () => s[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) s(l);
  new MutationObserver((l) => {
    for (const u of l)
      if (u.type === "childList")
        for (const c of u.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(l) {
    const u = {};
    return (
      l.integrity && (u.integrity = l.integrity),
      l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function s(l) {
    if (l.ep) return;
    l.ep = !0;
    const u = o(l);
    fetch(l.href, u);
  }
})();
function cg(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Iu = { exports: {} },
  Pi = {},
  Du = { exports: {} },
  Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mh;
function K1() {
  if (mh) return Ee;
  mh = 1;
  var t = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    f = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function w(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (v && k[v]) || k["@@iterator"]),
        typeof k == "function" ? k : null);
  }
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    C = Object.assign,
    E = {};
  function T(k, j, J) {
    (this.props = k),
      (this.context = j),
      (this.refs = E),
      (this.updater = J || x);
  }
  (T.prototype.isReactComponent = {}),
    (T.prototype.setState = function (k, j) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, k, j, "setState");
    }),
    (T.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    });
  function b() {}
  b.prototype = T.prototype;
  function L(k, j, J) {
    (this.props = k),
      (this.context = j),
      (this.refs = E),
      (this.updater = J || x);
  }
  var M = (L.prototype = new b());
  (M.constructor = L), C(M, T.prototype), (M.isPureReactComponent = !0);
  var N = Array.isArray,
    V = Object.prototype.hasOwnProperty,
    W = { current: null },
    Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(k, j, J) {
    var oe,
      he = {},
      xe = null,
      me = null;
    if (j != null)
      for (oe in (j.ref !== void 0 && (me = j.ref),
      j.key !== void 0 && (xe = "" + j.key),
      j))
        V.call(j, oe) && !Y.hasOwnProperty(oe) && (he[oe] = j[oe]);
    var Pe = arguments.length - 2;
    if (Pe === 1) he.children = J;
    else if (1 < Pe) {
      for (var Te = Array(Pe), Be = 0; Be < Pe; Be++)
        Te[Be] = arguments[Be + 2];
      he.children = Te;
    }
    if (k && k.defaultProps)
      for (oe in ((Pe = k.defaultProps), Pe))
        he[oe] === void 0 && (he[oe] = Pe[oe]);
    return {
      $$typeof: t,
      type: k,
      key: xe,
      ref: me,
      props: he,
      _owner: W.current,
    };
  }
  function ue(k, j) {
    return {
      $$typeof: t,
      type: k.type,
      key: j,
      ref: k.ref,
      props: k.props,
      _owner: k._owner,
    };
  }
  function ce(k) {
    return typeof k == "object" && k !== null && k.$$typeof === t;
  }
  function we(k) {
    var j = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (J) {
        return j[J];
      })
    );
  }
  var re = /\/+/g;
  function ve(k, j) {
    return typeof k == "object" && k !== null && k.key != null
      ? we("" + k.key)
      : j.toString(36);
  }
  function $(k, j, J, oe, he) {
    var xe = typeof k;
    (xe === "undefined" || xe === "boolean") && (k = null);
    var me = !1;
    if (k === null) me = !0;
    else
      switch (xe) {
        case "string":
        case "number":
          me = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case t:
            case r:
              me = !0;
          }
      }
    if (me)
      return (
        (me = k),
        (he = he(me)),
        (k = oe === "" ? "." + ve(me, 0) : oe),
        N(he)
          ? ((J = ""),
            k != null && (J = k.replace(re, "$&/") + "/"),
            $(he, j, J, "", function (Be) {
              return Be;
            }))
          : he != null &&
            (ce(he) &&
              (he = ue(
                he,
                J +
                  (!he.key || (me && me.key === he.key)
                    ? ""
                    : ("" + he.key).replace(re, "$&/") + "/") +
                  k
              )),
            j.push(he)),
        1
      );
    if (((me = 0), (oe = oe === "" ? "." : oe + ":"), N(k)))
      for (var Pe = 0; Pe < k.length; Pe++) {
        xe = k[Pe];
        var Te = oe + ve(xe, Pe);
        me += $(xe, j, J, Te, he);
      }
    else if (((Te = w(k)), typeof Te == "function"))
      for (k = Te.call(k), Pe = 0; !(xe = k.next()).done; )
        (xe = xe.value), (Te = oe + ve(xe, Pe++)), (me += $(xe, j, J, Te, he));
    else if (xe === "object")
      throw (
        ((j = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (j === "[object Object]"
              ? "object with keys {" + Object.keys(k).join(", ") + "}"
              : j) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return me;
  }
  function te(k, j, J) {
    if (k == null) return k;
    var oe = [],
      he = 0;
    return (
      $(k, oe, "", "", function (xe) {
        return j.call(J, xe, he++);
      }),
      oe
    );
  }
  function q(k) {
    if (k._status === -1) {
      var j = k._result;
      (j = j()),
        j.then(
          function (J) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 1), (k._result = J));
          },
          function (J) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 2), (k._result = J));
          }
        ),
        k._status === -1 && ((k._status = 0), (k._result = j));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var z = { current: null },
    F = { transition: null },
    B = {
      ReactCurrentDispatcher: z,
      ReactCurrentBatchConfig: F,
      ReactCurrentOwner: W,
    };
  function G() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Ee.Children = {
      map: te,
      forEach: function (k, j, J) {
        te(
          k,
          function () {
            j.apply(this, arguments);
          },
          J
        );
      },
      count: function (k) {
        var j = 0;
        return (
          te(k, function () {
            j++;
          }),
          j
        );
      },
      toArray: function (k) {
        return (
          te(k, function (j) {
            return j;
          }) || []
        );
      },
      only: function (k) {
        if (!ce(k))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return k;
      },
    }),
    (Ee.Component = T),
    (Ee.Fragment = o),
    (Ee.Profiler = l),
    (Ee.PureComponent = L),
    (Ee.StrictMode = s),
    (Ee.Suspense = h),
    (Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
    (Ee.act = G),
    (Ee.cloneElement = function (k, j, J) {
      if (k == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            k +
            "."
        );
      var oe = C({}, k.props),
        he = k.key,
        xe = k.ref,
        me = k._owner;
      if (j != null) {
        if (
          (j.ref !== void 0 && ((xe = j.ref), (me = W.current)),
          j.key !== void 0 && (he = "" + j.key),
          k.type && k.type.defaultProps)
        )
          var Pe = k.type.defaultProps;
        for (Te in j)
          V.call(j, Te) &&
            !Y.hasOwnProperty(Te) &&
            (oe[Te] = j[Te] === void 0 && Pe !== void 0 ? Pe[Te] : j[Te]);
      }
      var Te = arguments.length - 2;
      if (Te === 1) oe.children = J;
      else if (1 < Te) {
        Pe = Array(Te);
        for (var Be = 0; Be < Te; Be++) Pe[Be] = arguments[Be + 2];
        oe.children = Pe;
      }
      return {
        $$typeof: t,
        type: k.type,
        key: he,
        ref: xe,
        props: oe,
        _owner: me,
      };
    }),
    (Ee.createContext = function (k) {
      return (
        (k = {
          $$typeof: c,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (k.Provider = { $$typeof: u, _context: k }),
        (k.Consumer = k)
      );
    }),
    (Ee.createElement = X),
    (Ee.createFactory = function (k) {
      var j = X.bind(null, k);
      return (j.type = k), j;
    }),
    (Ee.createRef = function () {
      return { current: null };
    }),
    (Ee.forwardRef = function (k) {
      return { $$typeof: f, render: k };
    }),
    (Ee.isValidElement = ce),
    (Ee.lazy = function (k) {
      return { $$typeof: g, _payload: { _status: -1, _result: k }, _init: q };
    }),
    (Ee.memo = function (k, j) {
      return { $$typeof: m, type: k, compare: j === void 0 ? null : j };
    }),
    (Ee.startTransition = function (k) {
      var j = F.transition;
      F.transition = {};
      try {
        k();
      } finally {
        F.transition = j;
      }
    }),
    (Ee.unstable_act = G),
    (Ee.useCallback = function (k, j) {
      return z.current.useCallback(k, j);
    }),
    (Ee.useContext = function (k) {
      return z.current.useContext(k);
    }),
    (Ee.useDebugValue = function () {}),
    (Ee.useDeferredValue = function (k) {
      return z.current.useDeferredValue(k);
    }),
    (Ee.useEffect = function (k, j) {
      return z.current.useEffect(k, j);
    }),
    (Ee.useId = function () {
      return z.current.useId();
    }),
    (Ee.useImperativeHandle = function (k, j, J) {
      return z.current.useImperativeHandle(k, j, J);
    }),
    (Ee.useInsertionEffect = function (k, j) {
      return z.current.useInsertionEffect(k, j);
    }),
    (Ee.useLayoutEffect = function (k, j) {
      return z.current.useLayoutEffect(k, j);
    }),
    (Ee.useMemo = function (k, j) {
      return z.current.useMemo(k, j);
    }),
    (Ee.useReducer = function (k, j, J) {
      return z.current.useReducer(k, j, J);
    }),
    (Ee.useRef = function (k) {
      return z.current.useRef(k);
    }),
    (Ee.useState = function (k) {
      return z.current.useState(k);
    }),
    (Ee.useSyncExternalStore = function (k, j, J) {
      return z.current.useSyncExternalStore(k, j, J);
    }),
    (Ee.useTransition = function () {
      return z.current.useTransition();
    }),
    (Ee.version = "18.3.1"),
    Ee
  );
}
var gh;
function jc() {
  return gh || ((gh = 1), (Du.exports = K1())), Du.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yh;
function Y1() {
  if (yh) return Pi;
  yh = 1;
  var t = jc(),
    r = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, h, m) {
    var g,
      v = {},
      w = null,
      x = null;
    m !== void 0 && (w = "" + m),
      h.key !== void 0 && (w = "" + h.key),
      h.ref !== void 0 && (x = h.ref);
    for (g in h) s.call(h, g) && !u.hasOwnProperty(g) && (v[g] = h[g]);
    if (f && f.defaultProps)
      for (g in ((h = f.defaultProps), h)) v[g] === void 0 && (v[g] = h[g]);
    return {
      $$typeof: r,
      type: f,
      key: w,
      ref: x,
      props: v,
      _owner: l.current,
    };
  }
  return (Pi.Fragment = o), (Pi.jsx = c), (Pi.jsxs = c), Pi;
}
var vh;
function Q1() {
  return vh || ((vh = 1), (Iu.exports = Y1())), Iu.exports;
}
var I = Q1(),
  S = jc();
const Z = cg(S),
  X1 = G1({ __proto__: null, default: Z }, [S]);
var aa = {},
  Vu = { exports: {} },
  xt = {},
  Fu = { exports: {} },
  ju = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xh;
function q1() {
  return (
    xh ||
      ((xh = 1),
      (function (t) {
        function r(F, B) {
          var G = F.length;
          F.push(B);
          e: for (; 0 < G; ) {
            var k = (G - 1) >>> 1,
              j = F[k];
            if (0 < l(j, B)) (F[k] = B), (F[G] = j), (G = k);
            else break e;
          }
        }
        function o(F) {
          return F.length === 0 ? null : F[0];
        }
        function s(F) {
          if (F.length === 0) return null;
          var B = F[0],
            G = F.pop();
          if (G !== B) {
            F[0] = G;
            e: for (var k = 0, j = F.length, J = j >>> 1; k < J; ) {
              var oe = 2 * (k + 1) - 1,
                he = F[oe],
                xe = oe + 1,
                me = F[xe];
              if (0 > l(he, G))
                xe < j && 0 > l(me, he)
                  ? ((F[k] = me), (F[xe] = G), (k = xe))
                  : ((F[k] = he), (F[oe] = G), (k = oe));
              else if (xe < j && 0 > l(me, G))
                (F[k] = me), (F[xe] = G), (k = xe);
              else break e;
            }
          }
          return B;
        }
        function l(F, B) {
          var G = F.sortIndex - B.sortIndex;
          return G !== 0 ? G : F.id - B.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var u = performance;
          t.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            f = c.now();
          t.unstable_now = function () {
            return c.now() - f;
          };
        }
        var h = [],
          m = [],
          g = 1,
          v = null,
          w = 3,
          x = !1,
          C = !1,
          E = !1,
          T = typeof setTimeout == "function" ? setTimeout : null,
          b = typeof clearTimeout == "function" ? clearTimeout : null,
          L = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function M(F) {
          for (var B = o(m); B !== null; ) {
            if (B.callback === null) s(m);
            else if (B.startTime <= F)
              s(m), (B.sortIndex = B.expirationTime), r(h, B);
            else break;
            B = o(m);
          }
        }
        function N(F) {
          if (((E = !1), M(F), !C))
            if (o(h) !== null) (C = !0), q(V);
            else {
              var B = o(m);
              B !== null && z(N, B.startTime - F);
            }
        }
        function V(F, B) {
          (C = !1), E && ((E = !1), b(X), (X = -1)), (x = !0);
          var G = w;
          try {
            for (
              M(B), v = o(h);
              v !== null && (!(v.expirationTime > B) || (F && !we()));

            ) {
              var k = v.callback;
              if (typeof k == "function") {
                (v.callback = null), (w = v.priorityLevel);
                var j = k(v.expirationTime <= B);
                (B = t.unstable_now()),
                  typeof j == "function"
                    ? (v.callback = j)
                    : v === o(h) && s(h),
                  M(B);
              } else s(h);
              v = o(h);
            }
            if (v !== null) var J = !0;
            else {
              var oe = o(m);
              oe !== null && z(N, oe.startTime - B), (J = !1);
            }
            return J;
          } finally {
            (v = null), (w = G), (x = !1);
          }
        }
        var W = !1,
          Y = null,
          X = -1,
          ue = 5,
          ce = -1;
        function we() {
          return !(t.unstable_now() - ce < ue);
        }
        function re() {
          if (Y !== null) {
            var F = t.unstable_now();
            ce = F;
            var B = !0;
            try {
              B = Y(!0, F);
            } finally {
              B ? ve() : ((W = !1), (Y = null));
            }
          } else W = !1;
        }
        var ve;
        if (typeof L == "function")
          ve = function () {
            L(re);
          };
        else if (typeof MessageChannel < "u") {
          var $ = new MessageChannel(),
            te = $.port2;
          ($.port1.onmessage = re),
            (ve = function () {
              te.postMessage(null);
            });
        } else
          ve = function () {
            T(re, 0);
          };
        function q(F) {
          (Y = F), W || ((W = !0), ve());
        }
        function z(F, B) {
          X = T(function () {
            F(t.unstable_now());
          }, B);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            C || x || ((C = !0), q(V));
          }),
          (t.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ue = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return o(h);
          }),
          (t.unstable_next = function (F) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var B = 3;
                break;
              default:
                B = w;
            }
            var G = w;
            w = B;
            try {
              return F();
            } finally {
              w = G;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (F, B) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var G = w;
            w = F;
            try {
              return B();
            } finally {
              w = G;
            }
          }),
          (t.unstable_scheduleCallback = function (F, B, G) {
            var k = t.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? k + G : k))
                : (G = k),
              F)
            ) {
              case 1:
                var j = -1;
                break;
              case 2:
                j = 250;
                break;
              case 5:
                j = 1073741823;
                break;
              case 4:
                j = 1e4;
                break;
              default:
                j = 5e3;
            }
            return (
              (j = G + j),
              (F = {
                id: g++,
                callback: B,
                priorityLevel: F,
                startTime: G,
                expirationTime: j,
                sortIndex: -1,
              }),
              G > k
                ? ((F.sortIndex = G),
                  r(m, F),
                  o(h) === null &&
                    F === o(m) &&
                    (E ? (b(X), (X = -1)) : (E = !0), z(N, G - k)))
                : ((F.sortIndex = j), r(h, F), C || x || ((C = !0), q(V))),
              F
            );
          }),
          (t.unstable_shouldYield = we),
          (t.unstable_wrapCallback = function (F) {
            var B = w;
            return function () {
              var G = w;
              w = B;
              try {
                return F.apply(this, arguments);
              } finally {
                w = G;
              }
            };
          });
      })(ju)),
    ju
  );
}
var wh;
function Z1() {
  return wh || ((wh = 1), (Fu.exports = q1())), Fu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sh;
function J1() {
  if (Sh) return xt;
  Sh = 1;
  var t = jc(),
    r = Z1();
  function o(e) {
    for (
      var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        i = 1;
      i < arguments.length;
      i++
    )
      n += "&args[]=" + encodeURIComponent(arguments[i]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var s = new Set(),
    l = {};
  function u(e, n) {
    c(e, n), c(e + "Capture", n);
  }
  function c(e, n) {
    for (l[e] = n, e = 0; e < n.length; e++) s.add(n[e]);
  }
  var f = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    h = Object.prototype.hasOwnProperty,
    m =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    v = {};
  function w(e) {
    return h.call(v, e)
      ? !0
      : h.call(g, e)
      ? !1
      : m.test(e)
      ? (v[e] = !0)
      : ((g[e] = !0), !1);
  }
  function x(e, n, i, a) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a
          ? !1
          : i !== null
          ? !i.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function C(e, n, i, a) {
    if (n === null || typeof n > "u" || x(e, n, i, a)) return !0;
    if (a) return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function E(e, n, i, a, d, p, y) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = a),
      (this.attributeNamespace = d),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = p),
      (this.removeEmptyString = y);
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      T[e] = new E(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var n = e[0];
      T[n] = new E(n, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      T[e] = new E(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      T[e] = new E(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        T[e] = new E(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      T[e] = new E(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      T[e] = new E(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      T[e] = new E(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      T[e] = new E(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var b = /[\-:]([a-z])/g;
  function L(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var n = e.replace(b, L);
      T[n] = new E(n, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(b, L);
        T[n] = new E(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var n = e.replace(b, L);
      T[n] = new E(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      T[e] = new E(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (T.xlinkHref = new E(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      T[e] = new E(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function M(e, n, i, a) {
    var d = T.hasOwnProperty(n) ? T[n] : null;
    (d !== null
      ? d.type !== 0
      : a ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
      (C(n, i, d, a) && (i = null),
      a || d === null
        ? w(n) &&
          (i === null ? e.removeAttribute(n) : e.setAttribute(n, "" + i))
        : d.mustUseProperty
        ? (e[d.propertyName] = i === null ? (d.type === 3 ? !1 : "") : i)
        : ((n = d.attributeName),
          (a = d.attributeNamespace),
          i === null
            ? e.removeAttribute(n)
            : ((d = d.type),
              (i = d === 3 || (d === 4 && i === !0) ? "" : "" + i),
              a ? e.setAttributeNS(a, n, i) : e.setAttribute(n, i))));
  }
  var N = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    V = Symbol.for("react.element"),
    W = Symbol.for("react.portal"),
    Y = Symbol.for("react.fragment"),
    X = Symbol.for("react.strict_mode"),
    ue = Symbol.for("react.profiler"),
    ce = Symbol.for("react.provider"),
    we = Symbol.for("react.context"),
    re = Symbol.for("react.forward_ref"),
    ve = Symbol.for("react.suspense"),
    $ = Symbol.for("react.suspense_list"),
    te = Symbol.for("react.memo"),
    q = Symbol.for("react.lazy"),
    z = Symbol.for("react.offscreen"),
    F = Symbol.iterator;
  function B(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (F && e[F]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var G = Object.assign,
    k;
  function j(e) {
    if (k === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        k = (n && n[1]) || "";
      }
    return (
      `
` +
      k +
      e
    );
  }
  var J = !1;
  function oe(e, n) {
    if (!e || J) return "";
    J = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (D) {
            var a = D;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (D) {
            a = D;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (D) {
          a = D;
        }
        e();
      }
    } catch (D) {
      if (D && a && typeof D.stack == "string") {
        for (
          var d = D.stack.split(`
`),
            p = a.stack.split(`
`),
            y = d.length - 1,
            P = p.length - 1;
          1 <= y && 0 <= P && d[y] !== p[P];

        )
          P--;
        for (; 1 <= y && 0 <= P; y--, P--)
          if (d[y] !== p[P]) {
            if (y !== 1 || P !== 1)
              do
                if ((y--, P--, 0 > P || d[y] !== p[P])) {
                  var A =
                    `
` + d[y].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      A.includes("<anonymous>") &&
                      (A = A.replace("<anonymous>", e.displayName)),
                    A
                  );
                }
              while (1 <= y && 0 <= P);
            break;
          }
      }
    } finally {
      (J = !1), (Error.prepareStackTrace = i);
    }
    return (e = e ? e.displayName || e.name : "") ? j(e) : "";
  }
  function he(e) {
    switch (e.tag) {
      case 5:
        return j(e.type);
      case 16:
        return j("Lazy");
      case 13:
        return j("Suspense");
      case 19:
        return j("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = oe(e.type, !1)), e;
      case 11:
        return (e = oe(e.type.render, !1)), e;
      case 1:
        return (e = oe(e.type, !0)), e;
      default:
        return "";
    }
  }
  function xe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Y:
        return "Fragment";
      case W:
        return "Portal";
      case ue:
        return "Profiler";
      case X:
        return "StrictMode";
      case ve:
        return "Suspense";
      case $:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case we:
          return (e.displayName || "Context") + ".Consumer";
        case ce:
          return (e._context.displayName || "Context") + ".Provider";
        case re:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case te:
          return (
            (n = e.displayName || null), n !== null ? n : xe(e.type) || "Memo"
          );
        case q:
          (n = e._payload), (e = e._init);
          try {
            return xe(e(n));
          } catch {}
      }
    return null;
  }
  function me(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ""),
          n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return xe(n);
      case 8:
        return n === X ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function Pe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Te(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Be(e) {
    var n = Te(e) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      a = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var d = i.get,
        p = i.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return d.call(this);
          },
          set: function (y) {
            (a = "" + y), p.call(this, y);
          },
        }),
        Object.defineProperty(e, n, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (y) {
            a = "" + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function wt(e) {
    e._valueTracker || (e._valueTracker = Be(e));
  }
  function yr(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(),
      a = "";
    return (
      e && (a = Te(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== i ? (n.setValue(e), !0) : !1
    );
  }
  function St(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Nn(e, n) {
    var i = n.checked;
    return G({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function _n(e, n) {
    var i = n.defaultValue == null ? "" : n.defaultValue,
      a = n.checked != null ? n.checked : n.defaultChecked;
    (i = Pe(n.value != null ? n.value : i)),
      (e._wrapperState = {
        initialChecked: a,
        initialValue: i,
        controlled:
          n.type === "checkbox" || n.type === "radio"
            ? n.checked != null
            : n.value != null,
      });
  }
  function Wr(e, n) {
    (n = n.checked), n != null && M(e, "checked", n, !1);
  }
  function Ln(e, n) {
    Wr(e, n);
    var i = Pe(n.value),
      a = n.type;
    if (i != null)
      a === "number"
        ? ((i === 0 && e.value === "") || e.value != i) && (e.value = "" + i)
        : e.value !== "" + i && (e.value = "" + i);
    else if (a === "submit" || a === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value")
      ? Ut(e, n.type, i)
      : n.hasOwnProperty("defaultValue") && Ut(e, n.type, Pe(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked);
  }
  function pn(e, n, i) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var a = n.type;
      if (
        !(
          (a !== "submit" && a !== "reset") ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      (n = "" + e._wrapperState.initialValue),
        i || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (i = e.name),
      i !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      i !== "" && (e.name = i);
  }
  function Ut(e, n, i) {
    (n !== "number" || St(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var _t = Array.isArray;
  function On(e, n, i, a) {
    if (((e = e.options), n)) {
      n = {};
      for (var d = 0; d < i.length; d++) n["$" + i[d]] = !0;
      for (i = 0; i < e.length; i++)
        (d = n.hasOwnProperty("$" + e[i].value)),
          e[i].selected !== d && (e[i].selected = d),
          d && a && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + Pe(i), n = null, d = 0; d < e.length; d++) {
        if (e[d].value === i) {
          (e[d].selected = !0), a && (e[d].defaultSelected = !0);
          return;
        }
        n !== null || e[d].disabled || (n = e[d]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Vo(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(o(91));
    return G({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ct(e, n) {
    var i = n.value;
    if (i == null) {
      if (((i = n.children), (n = n.defaultValue), i != null)) {
        if (n != null) throw Error(o(92));
        if (_t(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), (i = n);
    }
    e._wrapperState = { initialValue: Pe(i) };
  }
  function hn(e, n) {
    var i = Pe(n.value),
      a = Pe(n.defaultValue);
    i != null &&
      ((i = "" + i),
      i !== e.value && (e.value = i),
      n.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      a != null && (e.defaultValue = "" + a);
  }
  function Qi(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
      n !== "" &&
      n !== null &&
      (e.value = n);
  }
  function Xi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Mn(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Xi(n)
      : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Hr,
    $r = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (n, i, a, d) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, i, a, d);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = n;
      else {
        for (
          Hr = Hr || document.createElement("div"),
            Hr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = Hr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function Lt(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var In = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Gr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(In).forEach(function (e) {
    Gr.forEach(function (n) {
      (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (In[n] = In[e]);
    });
  });
  function Fo(e, n, i) {
    return n == null || typeof n == "boolean" || n === ""
      ? ""
      : i || typeof n != "number" || n === 0 || (In.hasOwnProperty(e) && In[e])
      ? ("" + n).trim()
      : n + "px";
  }
  function qi(e, n) {
    e = e.style;
    for (var i in n)
      if (n.hasOwnProperty(i)) {
        var a = i.indexOf("--") === 0,
          d = Fo(i, n[i], a);
        i === "float" && (i = "cssFloat"), a ? e.setProperty(i, d) : (e[i] = d);
      }
  }
  var Zi = G(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Kr(e, n) {
    if (n) {
      if (Zi[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(o(60));
        if (
          typeof n.dangerouslySetInnerHTML != "object" ||
          !("__html" in n.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(o(62));
    }
  }
  function jo(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vr = null;
  function Ot(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Bo = null,
    ge = null,
    Ce = null;
  function _e(e) {
    if ((e = li(e))) {
      if (typeof Bo != "function") throw Error(o(280));
      var n = e.stateNode;
      n && ((n = Es(n)), Bo(e.stateNode, e.type, n));
    }
  }
  function pt(e) {
    ge ? (Ce ? Ce.push(e) : (Ce = [e])) : (ge = e);
  }
  function Et() {
    if (ge) {
      var e = ge,
        n = Ce;
      if (((Ce = ge = null), _e(e), n)) for (e = 0; e < n.length; e++) _e(n[e]);
    }
  }
  function xr(e, n) {
    return e(n);
  }
  function Ji() {}
  var Za = !1;
  function Dd(e, n, i) {
    if (Za) return e(n, i);
    Za = !0;
    try {
      return xr(e, n, i);
    } finally {
      (Za = !1), (ge !== null || Ce !== null) && (Ji(), Et());
    }
  }
  function zo(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var a = Es(i);
    if (a === null) return null;
    i = a[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(o(231, n, typeof i));
    return i;
  }
  var Ja = !1;
  if (f)
    try {
      var Uo = {};
      Object.defineProperty(Uo, "passive", {
        get: function () {
          Ja = !0;
        },
      }),
        window.addEventListener("test", Uo, Uo),
        window.removeEventListener("test", Uo, Uo);
    } catch {
      Ja = !1;
    }
  function Zv(e, n, i, a, d, p, y, P, A) {
    var D = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(i, D);
    } catch (H) {
      this.onError(H);
    }
  }
  var Wo = !1,
    es = null,
    ts = !1,
    el = null,
    Jv = {
      onError: function (e) {
        (Wo = !0), (es = e);
      },
    };
  function e0(e, n, i, a, d, p, y, P, A) {
    (Wo = !1), (es = null), Zv.apply(Jv, arguments);
  }
  function t0(e, n, i, a, d, p, y, P, A) {
    if ((e0.apply(this, arguments), Wo)) {
      if (Wo) {
        var D = es;
        (Wo = !1), (es = null);
      } else throw Error(o(198));
      ts || ((ts = !0), (el = D));
    }
  }
  function wr(e) {
    var n = e,
      i = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), n.flags & 4098 && (i = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? i : null;
  }
  function Vd(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function Fd(e) {
    if (wr(e) !== e) throw Error(o(188));
  }
  function n0(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = wr(e)), n === null)) throw Error(o(188));
      return n !== e ? null : e;
    }
    for (var i = e, a = n; ; ) {
      var d = i.return;
      if (d === null) break;
      var p = d.alternate;
      if (p === null) {
        if (((a = d.return), a !== null)) {
          i = a;
          continue;
        }
        break;
      }
      if (d.child === p.child) {
        for (p = d.child; p; ) {
          if (p === i) return Fd(d), e;
          if (p === a) return Fd(d), n;
          p = p.sibling;
        }
        throw Error(o(188));
      }
      if (i.return !== a.return) (i = d), (a = p);
      else {
        for (var y = !1, P = d.child; P; ) {
          if (P === i) {
            (y = !0), (i = d), (a = p);
            break;
          }
          if (P === a) {
            (y = !0), (a = d), (i = p);
            break;
          }
          P = P.sibling;
        }
        if (!y) {
          for (P = p.child; P; ) {
            if (P === i) {
              (y = !0), (i = p), (a = d);
              break;
            }
            if (P === a) {
              (y = !0), (a = p), (i = d);
              break;
            }
            P = P.sibling;
          }
          if (!y) throw Error(o(189));
        }
      }
      if (i.alternate !== a) throw Error(o(190));
    }
    if (i.tag !== 3) throw Error(o(188));
    return i.stateNode.current === i ? e : n;
  }
  function jd(e) {
    return (e = n0(e)), e !== null ? Bd(e) : null;
  }
  function Bd(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Bd(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var zd = r.unstable_scheduleCallback,
    Ud = r.unstable_cancelCallback,
    r0 = r.unstable_shouldYield,
    o0 = r.unstable_requestPaint,
    We = r.unstable_now,
    i0 = r.unstable_getCurrentPriorityLevel,
    tl = r.unstable_ImmediatePriority,
    Wd = r.unstable_UserBlockingPriority,
    ns = r.unstable_NormalPriority,
    s0 = r.unstable_LowPriority,
    Hd = r.unstable_IdlePriority,
    rs = null,
    tn = null;
  function a0(e) {
    if (tn && typeof tn.onCommitFiberRoot == "function")
      try {
        tn.onCommitFiberRoot(rs, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Wt = Math.clz32 ? Math.clz32 : c0,
    l0 = Math.log,
    u0 = Math.LN2;
  function c0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((l0(e) / u0) | 0)) | 0;
  }
  var os = 64,
    is = 4194304;
  function Ho(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ss(e, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var a = 0,
      d = e.suspendedLanes,
      p = e.pingedLanes,
      y = i & 268435455;
    if (y !== 0) {
      var P = y & ~d;
      P !== 0 ? (a = Ho(P)) : ((p &= y), p !== 0 && (a = Ho(p)));
    } else (y = i & ~d), y !== 0 ? (a = Ho(y)) : p !== 0 && (a = Ho(p));
    if (a === 0) return 0;
    if (
      n !== 0 &&
      n !== a &&
      !(n & d) &&
      ((d = a & -a), (p = n & -n), d >= p || (d === 16 && (p & 4194240) !== 0))
    )
      return n;
    if ((a & 4 && (a |= i & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= a; 0 < n; )
        (i = 31 - Wt(n)), (d = 1 << i), (a |= e[i]), (n &= ~d);
    return a;
  }
  function d0(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function f0(e, n) {
    for (
      var i = e.suspendedLanes,
        a = e.pingedLanes,
        d = e.expirationTimes,
        p = e.pendingLanes;
      0 < p;

    ) {
      var y = 31 - Wt(p),
        P = 1 << y,
        A = d[y];
      A === -1
        ? (!(P & i) || P & a) && (d[y] = d0(P, n))
        : A <= n && (e.expiredLanes |= P),
        (p &= ~P);
    }
  }
  function nl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function $d() {
    var e = os;
    return (os <<= 1), !(os & 4194240) && (os = 64), e;
  }
  function rl(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function $o(e, n, i) {
    (e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - Wt(n)),
      (e[n] = i);
  }
  function p0(e, n) {
    var i = e.pendingLanes & ~n;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements);
    var a = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var d = 31 - Wt(i),
        p = 1 << d;
      (n[d] = 0), (a[d] = -1), (e[d] = -1), (i &= ~p);
    }
  }
  function ol(e, n) {
    var i = (e.entangledLanes |= n);
    for (e = e.entanglements; i; ) {
      var a = 31 - Wt(i),
        d = 1 << a;
      (d & n) | (e[a] & n) && (e[a] |= n), (i &= ~d);
    }
  }
  var ke = 0;
  function Gd(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Kd,
    il,
    Yd,
    Qd,
    Xd,
    sl = !1,
    as = [],
    Dn = null,
    Vn = null,
    Fn = null,
    Go = new Map(),
    Ko = new Map(),
    jn = [],
    h0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function qd(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Dn = null;
        break;
      case "dragenter":
      case "dragleave":
        Vn = null;
        break;
      case "mouseover":
      case "mouseout":
        Fn = null;
        break;
      case "pointerover":
      case "pointerout":
        Go.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ko.delete(n.pointerId);
    }
  }
  function Yo(e, n, i, a, d, p) {
    return e === null || e.nativeEvent !== p
      ? ((e = {
          blockedOn: n,
          domEventName: i,
          eventSystemFlags: a,
          nativeEvent: p,
          targetContainers: [d],
        }),
        n !== null && ((n = li(n)), n !== null && il(n)),
        e)
      : ((e.eventSystemFlags |= a),
        (n = e.targetContainers),
        d !== null && n.indexOf(d) === -1 && n.push(d),
        e);
  }
  function m0(e, n, i, a, d) {
    switch (n) {
      case "focusin":
        return (Dn = Yo(Dn, e, n, i, a, d)), !0;
      case "dragenter":
        return (Vn = Yo(Vn, e, n, i, a, d)), !0;
      case "mouseover":
        return (Fn = Yo(Fn, e, n, i, a, d)), !0;
      case "pointerover":
        var p = d.pointerId;
        return Go.set(p, Yo(Go.get(p) || null, e, n, i, a, d)), !0;
      case "gotpointercapture":
        return (
          (p = d.pointerId), Ko.set(p, Yo(Ko.get(p) || null, e, n, i, a, d)), !0
        );
    }
    return !1;
  }
  function Zd(e) {
    var n = Sr(e.target);
    if (n !== null) {
      var i = wr(n);
      if (i !== null) {
        if (((n = i.tag), n === 13)) {
          if (((n = Vd(i)), n !== null)) {
            (e.blockedOn = n),
              Xd(e.priority, function () {
                Yd(i);
              });
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ls(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = ll(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var a = new i.constructor(i.type, i);
        (vr = a), i.target.dispatchEvent(a), (vr = null);
      } else return (n = li(i)), n !== null && il(n), (e.blockedOn = i), !1;
      n.shift();
    }
    return !0;
  }
  function Jd(e, n, i) {
    ls(e) && i.delete(n);
  }
  function g0() {
    (sl = !1),
      Dn !== null && ls(Dn) && (Dn = null),
      Vn !== null && ls(Vn) && (Vn = null),
      Fn !== null && ls(Fn) && (Fn = null),
      Go.forEach(Jd),
      Ko.forEach(Jd);
  }
  function Qo(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      sl ||
        ((sl = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, g0)));
  }
  function Xo(e) {
    function n(d) {
      return Qo(d, e);
    }
    if (0 < as.length) {
      Qo(as[0], e);
      for (var i = 1; i < as.length; i++) {
        var a = as[i];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    for (
      Dn !== null && Qo(Dn, e),
        Vn !== null && Qo(Vn, e),
        Fn !== null && Qo(Fn, e),
        Go.forEach(n),
        Ko.forEach(n),
        i = 0;
      i < jn.length;
      i++
    )
      (a = jn[i]), a.blockedOn === e && (a.blockedOn = null);
    for (; 0 < jn.length && ((i = jn[0]), i.blockedOn === null); )
      Zd(i), i.blockedOn === null && jn.shift();
  }
  var Yr = N.ReactCurrentBatchConfig,
    us = !0;
  function y0(e, n, i, a) {
    var d = ke,
      p = Yr.transition;
    Yr.transition = null;
    try {
      (ke = 1), al(e, n, i, a);
    } finally {
      (ke = d), (Yr.transition = p);
    }
  }
  function v0(e, n, i, a) {
    var d = ke,
      p = Yr.transition;
    Yr.transition = null;
    try {
      (ke = 4), al(e, n, i, a);
    } finally {
      (ke = d), (Yr.transition = p);
    }
  }
  function al(e, n, i, a) {
    if (us) {
      var d = ll(e, n, i, a);
      if (d === null) Tl(e, n, a, cs, i), qd(e, a);
      else if (m0(d, e, n, i, a)) a.stopPropagation();
      else if ((qd(e, a), n & 4 && -1 < h0.indexOf(e))) {
        for (; d !== null; ) {
          var p = li(d);
          if (
            (p !== null && Kd(p),
            (p = ll(e, n, i, a)),
            p === null && Tl(e, n, a, cs, i),
            p === d)
          )
            break;
          d = p;
        }
        d !== null && a.stopPropagation();
      } else Tl(e, n, a, null, i);
    }
  }
  var cs = null;
  function ll(e, n, i, a) {
    if (((cs = null), (e = Ot(a)), (e = Sr(e)), e !== null))
      if (((n = wr(e)), n === null)) e = null;
      else if (((i = n.tag), i === 13)) {
        if (((e = Vd(n)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return (cs = e), null;
  }
  function ef(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (i0()) {
          case tl:
            return 1;
          case Wd:
            return 4;
          case ns:
          case s0:
            return 16;
          case Hd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Bn = null,
    ul = null,
    ds = null;
  function tf() {
    if (ds) return ds;
    var e,
      n = ul,
      i = n.length,
      a,
      d = "value" in Bn ? Bn.value : Bn.textContent,
      p = d.length;
    for (e = 0; e < i && n[e] === d[e]; e++);
    var y = i - e;
    for (a = 1; a <= y && n[i - a] === d[p - a]; a++);
    return (ds = d.slice(e, 1 < a ? 1 - a : void 0));
  }
  function fs(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ps() {
    return !0;
  }
  function nf() {
    return !1;
  }
  function Pt(e) {
    function n(i, a, d, p, y) {
      (this._reactName = i),
        (this._targetInst = d),
        (this.type = a),
        (this.nativeEvent = p),
        (this.target = y),
        (this.currentTarget = null);
      for (var P in e)
        e.hasOwnProperty(P) && ((i = e[P]), (this[P] = i ? i(p) : p[P]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? ps
          : nf),
        (this.isPropagationStopped = nf),
        this
      );
    }
    return (
      G(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = ps));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = ps));
        },
        persist: function () {},
        isPersistent: ps,
      }),
      n
    );
  }
  var Qr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    cl = Pt(Qr),
    qo = G({}, Qr, { view: 0, detail: 0 }),
    x0 = Pt(qo),
    dl,
    fl,
    Zo,
    hs = G({}, qo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: hl,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Zo &&
              (Zo && e.type === "mousemove"
                ? ((dl = e.screenX - Zo.screenX), (fl = e.screenY - Zo.screenY))
                : (fl = dl = 0),
              (Zo = e)),
            dl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : fl;
      },
    }),
    rf = Pt(hs),
    w0 = G({}, hs, { dataTransfer: 0 }),
    S0 = Pt(w0),
    E0 = G({}, qo, { relatedTarget: 0 }),
    pl = Pt(E0),
    P0 = G({}, Qr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    C0 = Pt(P0),
    T0 = G({}, Qr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    A0 = Pt(T0),
    b0 = G({}, Qr, { data: 0 }),
    of = Pt(b0),
    R0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    k0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    N0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function _0(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = N0[e])
      ? !!n[e]
      : !1;
  }
  function hl() {
    return _0;
  }
  var L0 = G({}, qo, {
      key: function (e) {
        if (e.key) {
          var n = R0[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = fs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? k0[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: hl,
      charCode: function (e) {
        return e.type === "keypress" ? fs(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? fs(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    O0 = Pt(L0),
    M0 = G({}, hs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    sf = Pt(M0),
    I0 = G({}, qo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hl,
    }),
    D0 = Pt(I0),
    V0 = G({}, Qr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    F0 = Pt(V0),
    j0 = G({}, hs, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    B0 = Pt(j0),
    z0 = [9, 13, 27, 32],
    ml = f && "CompositionEvent" in window,
    Jo = null;
  f && "documentMode" in document && (Jo = document.documentMode);
  var U0 = f && "TextEvent" in window && !Jo,
    af = f && (!ml || (Jo && 8 < Jo && 11 >= Jo)),
    lf = " ",
    uf = !1;
  function cf(e, n) {
    switch (e) {
      case "keyup":
        return z0.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function df(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Xr = !1;
  function W0(e, n) {
    switch (e) {
      case "compositionend":
        return df(n);
      case "keypress":
        return n.which !== 32 ? null : ((uf = !0), lf);
      case "textInput":
        return (e = n.data), e === lf && uf ? null : e;
      default:
        return null;
    }
  }
  function H0(e, n) {
    if (Xr)
      return e === "compositionend" || (!ml && cf(e, n))
        ? ((e = tf()), (ds = ul = Bn = null), (Xr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return af && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var $0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ff(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!$0[e.type] : n === "textarea";
  }
  function pf(e, n, i, a) {
    pt(a),
      (n = xs(n, "onChange")),
      0 < n.length &&
        ((i = new cl("onChange", "change", null, i, a)),
        e.push({ event: i, listeners: n }));
  }
  var ei = null,
    ti = null;
  function G0(e) {
    _f(e, 0);
  }
  function ms(e) {
    var n = to(e);
    if (yr(n)) return e;
  }
  function K0(e, n) {
    if (e === "change") return n;
  }
  var hf = !1;
  if (f) {
    var gl;
    if (f) {
      var yl = "oninput" in document;
      if (!yl) {
        var mf = document.createElement("div");
        mf.setAttribute("oninput", "return;"),
          (yl = typeof mf.oninput == "function");
      }
      gl = yl;
    } else gl = !1;
    hf = gl && (!document.documentMode || 9 < document.documentMode);
  }
  function gf() {
    ei && (ei.detachEvent("onpropertychange", yf), (ti = ei = null));
  }
  function yf(e) {
    if (e.propertyName === "value" && ms(ti)) {
      var n = [];
      pf(n, ti, e, Ot(e)), Dd(G0, n);
    }
  }
  function Y0(e, n, i) {
    e === "focusin"
      ? (gf(), (ei = n), (ti = i), ei.attachEvent("onpropertychange", yf))
      : e === "focusout" && gf();
  }
  function Q0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ms(ti);
  }
  function X0(e, n) {
    if (e === "click") return ms(n);
  }
  function q0(e, n) {
    if (e === "input" || e === "change") return ms(n);
  }
  function Z0(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Ht = typeof Object.is == "function" ? Object.is : Z0;
  function ni(e, n) {
    if (Ht(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var i = Object.keys(e),
      a = Object.keys(n);
    if (i.length !== a.length) return !1;
    for (a = 0; a < i.length; a++) {
      var d = i[a];
      if (!h.call(n, d) || !Ht(e[d], n[d])) return !1;
    }
    return !0;
  }
  function vf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function xf(e, n) {
    var i = vf(e);
    e = 0;
    for (var a; i; ) {
      if (i.nodeType === 3) {
        if (((a = e + i.textContent.length), e <= n && a >= n))
          return { node: i, offset: n - e };
        e = a;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = vf(i);
    }
  }
  function wf(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? wf(e, n.parentNode)
        : "contains" in e
        ? e.contains(n)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function Sf() {
    for (var e = window, n = St(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = St(e.document);
    }
    return n;
  }
  function vl(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function J0(e) {
    var n = Sf(),
      i = e.focusedElem,
      a = e.selectionRange;
    if (
      n !== i &&
      i &&
      i.ownerDocument &&
      wf(i.ownerDocument.documentElement, i)
    ) {
      if (a !== null && vl(i)) {
        if (
          ((n = a.start),
          (e = a.end),
          e === void 0 && (e = n),
          "selectionStart" in i)
        )
          (i.selectionStart = n),
            (i.selectionEnd = Math.min(e, i.value.length));
        else if (
          ((e = ((n = i.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var d = i.textContent.length,
            p = Math.min(a.start, d);
          (a = a.end === void 0 ? p : Math.min(a.end, d)),
            !e.extend && p > a && ((d = a), (a = p), (p = d)),
            (d = xf(i, p));
          var y = xf(i, a);
          d &&
            y &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== d.node ||
              e.anchorOffset !== d.offset ||
              e.focusNode !== y.node ||
              e.focusOffset !== y.offset) &&
            ((n = n.createRange()),
            n.setStart(d.node, d.offset),
            e.removeAllRanges(),
            p > a
              ? (e.addRange(n), e.extend(y.node, y.offset))
              : (n.setEnd(y.node, y.offset), e.addRange(n)));
        }
      }
      for (n = [], e = i; (e = e.parentNode); )
        e.nodeType === 1 &&
          n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < n.length; i++)
        (e = n[i]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var e1 = f && "documentMode" in document && 11 >= document.documentMode,
    qr = null,
    xl = null,
    ri = null,
    wl = !1;
  function Ef(e, n, i) {
    var a =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    wl ||
      qr == null ||
      qr !== St(a) ||
      ((a = qr),
      "selectionStart" in a && vl(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (ri && ni(ri, a)) ||
        ((ri = a),
        (a = xs(xl, "onSelect")),
        0 < a.length &&
          ((n = new cl("onSelect", "select", null, n, i)),
          e.push({ event: n, listeners: a }),
          (n.target = qr))));
  }
  function gs(e, n) {
    var i = {};
    return (
      (i[e.toLowerCase()] = n.toLowerCase()),
      (i["Webkit" + e] = "webkit" + n),
      (i["Moz" + e] = "moz" + n),
      i
    );
  }
  var Zr = {
      animationend: gs("Animation", "AnimationEnd"),
      animationiteration: gs("Animation", "AnimationIteration"),
      animationstart: gs("Animation", "AnimationStart"),
      transitionend: gs("Transition", "TransitionEnd"),
    },
    Sl = {},
    Pf = {};
  f &&
    ((Pf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Zr.animationend.animation,
      delete Zr.animationiteration.animation,
      delete Zr.animationstart.animation),
    "TransitionEvent" in window || delete Zr.transitionend.transition);
  function ys(e) {
    if (Sl[e]) return Sl[e];
    if (!Zr[e]) return e;
    var n = Zr[e],
      i;
    for (i in n) if (n.hasOwnProperty(i) && i in Pf) return (Sl[e] = n[i]);
    return e;
  }
  var Cf = ys("animationend"),
    Tf = ys("animationiteration"),
    Af = ys("animationstart"),
    bf = ys("transitionend"),
    Rf = new Map(),
    kf =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function zn(e, n) {
    Rf.set(e, n), u(n, [e]);
  }
  for (var El = 0; El < kf.length; El++) {
    var Pl = kf[El],
      t1 = Pl.toLowerCase(),
      n1 = Pl[0].toUpperCase() + Pl.slice(1);
    zn(t1, "on" + n1);
  }
  zn(Cf, "onAnimationEnd"),
    zn(Tf, "onAnimationIteration"),
    zn(Af, "onAnimationStart"),
    zn("dblclick", "onDoubleClick"),
    zn("focusin", "onFocus"),
    zn("focusout", "onBlur"),
    zn(bf, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    u(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    u(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var oi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    r1 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(oi)
    );
  function Nf(e, n, i) {
    var a = e.type || "unknown-event";
    (e.currentTarget = i), t0(a, n, void 0, e), (e.currentTarget = null);
  }
  function _f(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var a = e[i],
        d = a.event;
      a = a.listeners;
      e: {
        var p = void 0;
        if (n)
          for (var y = a.length - 1; 0 <= y; y--) {
            var P = a[y],
              A = P.instance,
              D = P.currentTarget;
            if (((P = P.listener), A !== p && d.isPropagationStopped()))
              break e;
            Nf(d, P, D), (p = A);
          }
        else
          for (y = 0; y < a.length; y++) {
            if (
              ((P = a[y]),
              (A = P.instance),
              (D = P.currentTarget),
              (P = P.listener),
              A !== p && d.isPropagationStopped())
            )
              break e;
            Nf(d, P, D), (p = A);
          }
      }
    }
    if (ts) throw ((e = el), (ts = !1), (el = null), e);
  }
  function Oe(e, n) {
    var i = n[_l];
    i === void 0 && (i = n[_l] = new Set());
    var a = e + "__bubble";
    i.has(a) || (Lf(n, e, 2, !1), i.add(a));
  }
  function Cl(e, n, i) {
    var a = 0;
    n && (a |= 4), Lf(i, e, a, n);
  }
  var vs = "_reactListening" + Math.random().toString(36).slice(2);
  function ii(e) {
    if (!e[vs]) {
      (e[vs] = !0),
        s.forEach(function (i) {
          i !== "selectionchange" && (r1.has(i) || Cl(i, !1, e), Cl(i, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[vs] || ((n[vs] = !0), Cl("selectionchange", !1, n));
    }
  }
  function Lf(e, n, i, a) {
    switch (ef(n)) {
      case 1:
        var d = y0;
        break;
      case 4:
        d = v0;
        break;
      default:
        d = al;
    }
    (i = d.bind(null, n, i, e)),
      (d = void 0),
      !Ja ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (d = !0),
      a
        ? d !== void 0
          ? e.addEventListener(n, i, { capture: !0, passive: d })
          : e.addEventListener(n, i, !0)
        : d !== void 0
        ? e.addEventListener(n, i, { passive: d })
        : e.addEventListener(n, i, !1);
  }
  function Tl(e, n, i, a, d) {
    var p = a;
    if (!(n & 1) && !(n & 2) && a !== null)
      e: for (;;) {
        if (a === null) return;
        var y = a.tag;
        if (y === 3 || y === 4) {
          var P = a.stateNode.containerInfo;
          if (P === d || (P.nodeType === 8 && P.parentNode === d)) break;
          if (y === 4)
            for (y = a.return; y !== null; ) {
              var A = y.tag;
              if (
                (A === 3 || A === 4) &&
                ((A = y.stateNode.containerInfo),
                A === d || (A.nodeType === 8 && A.parentNode === d))
              )
                return;
              y = y.return;
            }
          for (; P !== null; ) {
            if (((y = Sr(P)), y === null)) return;
            if (((A = y.tag), A === 5 || A === 6)) {
              a = p = y;
              continue e;
            }
            P = P.parentNode;
          }
        }
        a = a.return;
      }
    Dd(function () {
      var D = p,
        H = Ot(i),
        K = [];
      e: {
        var U = Rf.get(e);
        if (U !== void 0) {
          var ee = cl,
            ie = e;
          switch (e) {
            case "keypress":
              if (fs(i) === 0) break e;
            case "keydown":
            case "keyup":
              ee = O0;
              break;
            case "focusin":
              (ie = "focus"), (ee = pl);
              break;
            case "focusout":
              (ie = "blur"), (ee = pl);
              break;
            case "beforeblur":
            case "afterblur":
              ee = pl;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = rf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = S0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = D0;
              break;
            case Cf:
            case Tf:
            case Af:
              ee = C0;
              break;
            case bf:
              ee = F0;
              break;
            case "scroll":
              ee = x0;
              break;
            case "wheel":
              ee = B0;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = A0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = sf;
          }
          var ae = (n & 4) !== 0,
            He = !ae && e === "scroll",
            _ = ae ? (U !== null ? U + "Capture" : null) : U;
          ae = [];
          for (var R = D, O; R !== null; ) {
            O = R;
            var Q = O.stateNode;
            if (
              (O.tag === 5 &&
                Q !== null &&
                ((O = Q),
                _ !== null &&
                  ((Q = zo(R, _)), Q != null && ae.push(si(R, Q, O)))),
              He)
            )
              break;
            R = R.return;
          }
          0 < ae.length &&
            ((U = new ee(U, ie, null, i, H)),
            K.push({ event: U, listeners: ae }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((U = e === "mouseover" || e === "pointerover"),
            (ee = e === "mouseout" || e === "pointerout"),
            U &&
              i !== vr &&
              (ie = i.relatedTarget || i.fromElement) &&
              (Sr(ie) || ie[mn]))
          )
            break e;
          if (
            (ee || U) &&
            ((U =
              H.window === H
                ? H
                : (U = H.ownerDocument)
                ? U.defaultView || U.parentWindow
                : window),
            ee
              ? ((ie = i.relatedTarget || i.toElement),
                (ee = D),
                (ie = ie ? Sr(ie) : null),
                ie !== null &&
                  ((He = wr(ie)),
                  ie !== He || (ie.tag !== 5 && ie.tag !== 6)) &&
                  (ie = null))
              : ((ee = null), (ie = D)),
            ee !== ie)
          ) {
            if (
              ((ae = rf),
              (Q = "onMouseLeave"),
              (_ = "onMouseEnter"),
              (R = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ae = sf),
                (Q = "onPointerLeave"),
                (_ = "onPointerEnter"),
                (R = "pointer")),
              (He = ee == null ? U : to(ee)),
              (O = ie == null ? U : to(ie)),
              (U = new ae(Q, R + "leave", ee, i, H)),
              (U.target = He),
              (U.relatedTarget = O),
              (Q = null),
              Sr(H) === D &&
                ((ae = new ae(_, R + "enter", ie, i, H)),
                (ae.target = O),
                (ae.relatedTarget = He),
                (Q = ae)),
              (He = Q),
              ee && ie)
            )
              t: {
                for (ae = ee, _ = ie, R = 0, O = ae; O; O = Jr(O)) R++;
                for (O = 0, Q = _; Q; Q = Jr(Q)) O++;
                for (; 0 < R - O; ) (ae = Jr(ae)), R--;
                for (; 0 < O - R; ) (_ = Jr(_)), O--;
                for (; R--; ) {
                  if (ae === _ || (_ !== null && ae === _.alternate)) break t;
                  (ae = Jr(ae)), (_ = Jr(_));
                }
                ae = null;
              }
            else ae = null;
            ee !== null && Of(K, U, ee, ae, !1),
              ie !== null && He !== null && Of(K, He, ie, ae, !0);
          }
        }
        e: {
          if (
            ((U = D ? to(D) : window),
            (ee = U.nodeName && U.nodeName.toLowerCase()),
            ee === "select" || (ee === "input" && U.type === "file"))
          )
            var le = K0;
          else if (ff(U))
            if (hf) le = q0;
            else {
              le = Q0;
              var de = Y0;
            }
          else
            (ee = U.nodeName) &&
              ee.toLowerCase() === "input" &&
              (U.type === "checkbox" || U.type === "radio") &&
              (le = X0);
          if (le && (le = le(e, D))) {
            pf(K, le, i, H);
            break e;
          }
          de && de(e, U, D),
            e === "focusout" &&
              (de = U._wrapperState) &&
              de.controlled &&
              U.type === "number" &&
              Ut(U, "number", U.value);
        }
        switch (((de = D ? to(D) : window), e)) {
          case "focusin":
            (ff(de) || de.contentEditable === "true") &&
              ((qr = de), (xl = D), (ri = null));
            break;
          case "focusout":
            ri = xl = qr = null;
            break;
          case "mousedown":
            wl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (wl = !1), Ef(K, i, H);
            break;
          case "selectionchange":
            if (e1) break;
          case "keydown":
          case "keyup":
            Ef(K, i, H);
        }
        var fe;
        if (ml)
          e: {
            switch (e) {
              case "compositionstart":
                var ye = "onCompositionStart";
                break e;
              case "compositionend":
                ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ye = "onCompositionUpdate";
                break e;
            }
            ye = void 0;
          }
        else
          Xr
            ? cf(e, i) && (ye = "onCompositionEnd")
            : e === "keydown" &&
              i.keyCode === 229 &&
              (ye = "onCompositionStart");
        ye &&
          (af &&
            i.locale !== "ko" &&
            (Xr || ye !== "onCompositionStart"
              ? ye === "onCompositionEnd" && Xr && (fe = tf())
              : ((Bn = H),
                (ul = "value" in Bn ? Bn.value : Bn.textContent),
                (Xr = !0))),
          (de = xs(D, ye)),
          0 < de.length &&
            ((ye = new of(ye, e, null, i, H)),
            K.push({ event: ye, listeners: de }),
            fe
              ? (ye.data = fe)
              : ((fe = df(i)), fe !== null && (ye.data = fe)))),
          (fe = U0 ? W0(e, i) : H0(e, i)) &&
            ((D = xs(D, "onBeforeInput")),
            0 < D.length &&
              ((H = new of("onBeforeInput", "beforeinput", null, i, H)),
              K.push({ event: H, listeners: D }),
              (H.data = fe)));
      }
      _f(K, n);
    });
  }
  function si(e, n, i) {
    return { instance: e, listener: n, currentTarget: i };
  }
  function xs(e, n) {
    for (var i = n + "Capture", a = []; e !== null; ) {
      var d = e,
        p = d.stateNode;
      d.tag === 5 &&
        p !== null &&
        ((d = p),
        (p = zo(e, i)),
        p != null && a.unshift(si(e, p, d)),
        (p = zo(e, n)),
        p != null && a.push(si(e, p, d))),
        (e = e.return);
    }
    return a;
  }
  function Jr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Of(e, n, i, a, d) {
    for (var p = n._reactName, y = []; i !== null && i !== a; ) {
      var P = i,
        A = P.alternate,
        D = P.stateNode;
      if (A !== null && A === a) break;
      P.tag === 5 &&
        D !== null &&
        ((P = D),
        d
          ? ((A = zo(i, p)), A != null && y.unshift(si(i, A, P)))
          : d || ((A = zo(i, p)), A != null && y.push(si(i, A, P)))),
        (i = i.return);
    }
    y.length !== 0 && e.push({ event: n, listeners: y });
  }
  var o1 = /\r\n?/g,
    i1 = /\u0000|\uFFFD/g;
  function Mf(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        o1,
        `
`
      )
      .replace(i1, "");
  }
  function ws(e, n, i) {
    if (((n = Mf(n)), Mf(e) !== n && i)) throw Error(o(425));
  }
  function Ss() {}
  var Al = null,
    bl = null;
  function Rl(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var kl = typeof setTimeout == "function" ? setTimeout : void 0,
    s1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    If = typeof Promise == "function" ? Promise : void 0,
    a1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof If < "u"
        ? function (e) {
            return If.resolve(null).then(e).catch(l1);
          }
        : kl;
  function l1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Nl(e, n) {
    var i = n,
      a = 0;
    do {
      var d = i.nextSibling;
      if ((e.removeChild(i), d && d.nodeType === 8))
        if (((i = d.data), i === "/$")) {
          if (a === 0) {
            e.removeChild(d), Xo(n);
            return;
          }
          a--;
        } else (i !== "$" && i !== "$?" && i !== "$!") || a++;
      i = d;
    } while (i);
    Xo(n);
  }
  function Un(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Df(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (n === 0) return e;
          n--;
        } else i === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var eo = Math.random().toString(36).slice(2),
    nn = "__reactFiber$" + eo,
    ai = "__reactProps$" + eo,
    mn = "__reactContainer$" + eo,
    _l = "__reactEvents$" + eo,
    u1 = "__reactListeners$" + eo,
    c1 = "__reactHandles$" + eo;
  function Sr(e) {
    var n = e[nn];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if ((n = i[mn] || i[nn])) {
        if (
          ((i = n.alternate),
          n.child !== null || (i !== null && i.child !== null))
        )
          for (e = Df(e); e !== null; ) {
            if ((i = e[nn])) return i;
            e = Df(e);
          }
        return n;
      }
      (e = i), (i = e.parentNode);
    }
    return null;
  }
  function li(e) {
    return (
      (e = e[nn] || e[mn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function to(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Es(e) {
    return e[ai] || null;
  }
  var Ll = [],
    no = -1;
  function Wn(e) {
    return { current: e };
  }
  function Me(e) {
    0 > no || ((e.current = Ll[no]), (Ll[no] = null), no--);
  }
  function Le(e, n) {
    no++, (Ll[no] = e.current), (e.current = n);
  }
  var Hn = {},
    rt = Wn(Hn),
    ht = Wn(!1),
    Er = Hn;
  function ro(e, n) {
    var i = e.type.contextTypes;
    if (!i) return Hn;
    var a = e.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === n)
      return a.__reactInternalMemoizedMaskedChildContext;
    var d = {},
      p;
    for (p in i) d[p] = n[p];
    return (
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = d)),
      d
    );
  }
  function mt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Ps() {
    Me(ht), Me(rt);
  }
  function Vf(e, n, i) {
    if (rt.current !== Hn) throw Error(o(168));
    Le(rt, n), Le(ht, i);
  }
  function Ff(e, n, i) {
    var a = e.stateNode;
    if (((n = n.childContextTypes), typeof a.getChildContext != "function"))
      return i;
    a = a.getChildContext();
    for (var d in a) if (!(d in n)) throw Error(o(108, me(e) || "Unknown", d));
    return G({}, i, a);
  }
  function Cs(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Hn),
      (Er = rt.current),
      Le(rt, e),
      Le(ht, ht.current),
      !0
    );
  }
  function jf(e, n, i) {
    var a = e.stateNode;
    if (!a) throw Error(o(169));
    i
      ? ((e = Ff(e, n, Er)),
        (a.__reactInternalMemoizedMergedChildContext = e),
        Me(ht),
        Me(rt),
        Le(rt, e))
      : Me(ht),
      Le(ht, i);
  }
  var gn = null,
    Ts = !1,
    Ol = !1;
  function Bf(e) {
    gn === null ? (gn = [e]) : gn.push(e);
  }
  function d1(e) {
    (Ts = !0), Bf(e);
  }
  function $n() {
    if (!Ol && gn !== null) {
      Ol = !0;
      var e = 0,
        n = ke;
      try {
        var i = gn;
        for (ke = 1; e < i.length; e++) {
          var a = i[e];
          do a = a(!0);
          while (a !== null);
        }
        (gn = null), (Ts = !1);
      } catch (d) {
        throw (gn !== null && (gn = gn.slice(e + 1)), zd(tl, $n), d);
      } finally {
        (ke = n), (Ol = !1);
      }
    }
    return null;
  }
  var oo = [],
    io = 0,
    As = null,
    bs = 0,
    Mt = [],
    It = 0,
    Pr = null,
    yn = 1,
    vn = "";
  function Cr(e, n) {
    (oo[io++] = bs), (oo[io++] = As), (As = e), (bs = n);
  }
  function zf(e, n, i) {
    (Mt[It++] = yn), (Mt[It++] = vn), (Mt[It++] = Pr), (Pr = e);
    var a = yn;
    e = vn;
    var d = 32 - Wt(a) - 1;
    (a &= ~(1 << d)), (i += 1);
    var p = 32 - Wt(n) + d;
    if (30 < p) {
      var y = d - (d % 5);
      (p = (a & ((1 << y) - 1)).toString(32)),
        (a >>= y),
        (d -= y),
        (yn = (1 << (32 - Wt(n) + d)) | (i << d) | a),
        (vn = p + e);
    } else (yn = (1 << p) | (i << d) | a), (vn = e);
  }
  function Ml(e) {
    e.return !== null && (Cr(e, 1), zf(e, 1, 0));
  }
  function Il(e) {
    for (; e === As; )
      (As = oo[--io]), (oo[io] = null), (bs = oo[--io]), (oo[io] = null);
    for (; e === Pr; )
      (Pr = Mt[--It]),
        (Mt[It] = null),
        (vn = Mt[--It]),
        (Mt[It] = null),
        (yn = Mt[--It]),
        (Mt[It] = null);
  }
  var Ct = null,
    Tt = null,
    De = !1,
    $t = null;
  function Uf(e, n) {
    var i = jt(5, null, null, 0);
    (i.elementType = "DELETED"),
      (i.stateNode = n),
      (i.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [i]), (e.flags |= 16)) : n.push(i);
  }
  function Wf(e, n) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (n =
            n.nodeType !== 1 || i.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (Ct = e), (Tt = Un(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (Ct = e), (Tt = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((i = Pr !== null ? { id: yn, overflow: vn } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: i,
                retryLane: 1073741824,
              }),
              (i = jt(18, null, null, 0)),
              (i.stateNode = n),
              (i.return = e),
              (e.child = i),
              (Ct = e),
              (Tt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Dl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Vl(e) {
    if (De) {
      var n = Tt;
      if (n) {
        var i = n;
        if (!Wf(e, n)) {
          if (Dl(e)) throw Error(o(418));
          n = Un(i.nextSibling);
          var a = Ct;
          n && Wf(e, n)
            ? Uf(a, i)
            : ((e.flags = (e.flags & -4097) | 2), (De = !1), (Ct = e));
        }
      } else {
        if (Dl(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (De = !1), (Ct = e);
      }
    }
  }
  function Hf(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ct = e;
  }
  function Rs(e) {
    if (e !== Ct) return !1;
    if (!De) return Hf(e), (De = !0), !1;
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== "head" && n !== "body" && !Rl(e.type, e.memoizedProps))),
      n && (n = Tt))
    ) {
      if (Dl(e)) throw ($f(), Error(o(418)));
      for (; n; ) Uf(e, n), (n = Un(n.nextSibling));
    }
    if ((Hf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (n === 0) {
                Tt = Un(e.nextSibling);
                break e;
              }
              n--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || n++;
          }
          e = e.nextSibling;
        }
        Tt = null;
      }
    } else Tt = Ct ? Un(e.stateNode.nextSibling) : null;
    return !0;
  }
  function $f() {
    for (var e = Tt; e; ) e = Un(e.nextSibling);
  }
  function so() {
    (Tt = Ct = null), (De = !1);
  }
  function Fl(e) {
    $t === null ? ($t = [e]) : $t.push(e);
  }
  var f1 = N.ReactCurrentBatchConfig;
  function ui(e, n, i) {
    if (
      ((e = i.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(o(309));
          var a = i.stateNode;
        }
        if (!a) throw Error(o(147, e));
        var d = a,
          p = "" + e;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == "function" &&
          n.ref._stringRef === p
          ? n.ref
          : ((n = function (y) {
              var P = d.refs;
              y === null ? delete P[p] : (P[p] = y);
            }),
            (n._stringRef = p),
            n);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!i._owner) throw Error(o(290, e));
    }
    return e;
  }
  function ks(e, n) {
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Gf(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Kf(e) {
    function n(_, R) {
      if (e) {
        var O = _.deletions;
        O === null ? ((_.deletions = [R]), (_.flags |= 16)) : O.push(R);
      }
    }
    function i(_, R) {
      if (!e) return null;
      for (; R !== null; ) n(_, R), (R = R.sibling);
      return null;
    }
    function a(_, R) {
      for (_ = new Map(); R !== null; )
        R.key !== null ? _.set(R.key, R) : _.set(R.index, R), (R = R.sibling);
      return _;
    }
    function d(_, R) {
      return (_ = Jn(_, R)), (_.index = 0), (_.sibling = null), _;
    }
    function p(_, R, O) {
      return (
        (_.index = O),
        e
          ? ((O = _.alternate),
            O !== null
              ? ((O = O.index), O < R ? ((_.flags |= 2), R) : O)
              : ((_.flags |= 2), R))
          : ((_.flags |= 1048576), R)
      );
    }
    function y(_) {
      return e && _.alternate === null && (_.flags |= 2), _;
    }
    function P(_, R, O, Q) {
      return R === null || R.tag !== 6
        ? ((R = ku(O, _.mode, Q)), (R.return = _), R)
        : ((R = d(R, O)), (R.return = _), R);
    }
    function A(_, R, O, Q) {
      var le = O.type;
      return le === Y
        ? H(_, R, O.props.children, Q, O.key)
        : R !== null &&
          (R.elementType === le ||
            (typeof le == "object" &&
              le !== null &&
              le.$$typeof === q &&
              Gf(le) === R.type))
        ? ((Q = d(R, O.props)), (Q.ref = ui(_, R, O)), (Q.return = _), Q)
        : ((Q = Js(O.type, O.key, O.props, null, _.mode, Q)),
          (Q.ref = ui(_, R, O)),
          (Q.return = _),
          Q);
    }
    function D(_, R, O, Q) {
      return R === null ||
        R.tag !== 4 ||
        R.stateNode.containerInfo !== O.containerInfo ||
        R.stateNode.implementation !== O.implementation
        ? ((R = Nu(O, _.mode, Q)), (R.return = _), R)
        : ((R = d(R, O.children || [])), (R.return = _), R);
    }
    function H(_, R, O, Q, le) {
      return R === null || R.tag !== 7
        ? ((R = Lr(O, _.mode, Q, le)), (R.return = _), R)
        : ((R = d(R, O)), (R.return = _), R);
    }
    function K(_, R, O) {
      if ((typeof R == "string" && R !== "") || typeof R == "number")
        return (R = ku("" + R, _.mode, O)), (R.return = _), R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case V:
            return (
              (O = Js(R.type, R.key, R.props, null, _.mode, O)),
              (O.ref = ui(_, null, R)),
              (O.return = _),
              O
            );
          case W:
            return (R = Nu(R, _.mode, O)), (R.return = _), R;
          case q:
            var Q = R._init;
            return K(_, Q(R._payload), O);
        }
        if (_t(R) || B(R))
          return (R = Lr(R, _.mode, O, null)), (R.return = _), R;
        ks(_, R);
      }
      return null;
    }
    function U(_, R, O, Q) {
      var le = R !== null ? R.key : null;
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return le !== null ? null : P(_, R, "" + O, Q);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case V:
            return O.key === le ? A(_, R, O, Q) : null;
          case W:
            return O.key === le ? D(_, R, O, Q) : null;
          case q:
            return (le = O._init), U(_, R, le(O._payload), Q);
        }
        if (_t(O) || B(O)) return le !== null ? null : H(_, R, O, Q, null);
        ks(_, O);
      }
      return null;
    }
    function ee(_, R, O, Q, le) {
      if ((typeof Q == "string" && Q !== "") || typeof Q == "number")
        return (_ = _.get(O) || null), P(R, _, "" + Q, le);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case V:
            return (
              (_ = _.get(Q.key === null ? O : Q.key) || null), A(R, _, Q, le)
            );
          case W:
            return (
              (_ = _.get(Q.key === null ? O : Q.key) || null), D(R, _, Q, le)
            );
          case q:
            var de = Q._init;
            return ee(_, R, O, de(Q._payload), le);
        }
        if (_t(Q) || B(Q)) return (_ = _.get(O) || null), H(R, _, Q, le, null);
        ks(R, Q);
      }
      return null;
    }
    function ie(_, R, O, Q) {
      for (
        var le = null, de = null, fe = R, ye = (R = 0), Ze = null;
        fe !== null && ye < O.length;
        ye++
      ) {
        fe.index > ye ? ((Ze = fe), (fe = null)) : (Ze = fe.sibling);
        var be = U(_, fe, O[ye], Q);
        if (be === null) {
          fe === null && (fe = Ze);
          break;
        }
        e && fe && be.alternate === null && n(_, fe),
          (R = p(be, R, ye)),
          de === null ? (le = be) : (de.sibling = be),
          (de = be),
          (fe = Ze);
      }
      if (ye === O.length) return i(_, fe), De && Cr(_, ye), le;
      if (fe === null) {
        for (; ye < O.length; ye++)
          (fe = K(_, O[ye], Q)),
            fe !== null &&
              ((R = p(fe, R, ye)),
              de === null ? (le = fe) : (de.sibling = fe),
              (de = fe));
        return De && Cr(_, ye), le;
      }
      for (fe = a(_, fe); ye < O.length; ye++)
        (Ze = ee(fe, _, ye, O[ye], Q)),
          Ze !== null &&
            (e &&
              Ze.alternate !== null &&
              fe.delete(Ze.key === null ? ye : Ze.key),
            (R = p(Ze, R, ye)),
            de === null ? (le = Ze) : (de.sibling = Ze),
            (de = Ze));
      return (
        e &&
          fe.forEach(function (er) {
            return n(_, er);
          }),
        De && Cr(_, ye),
        le
      );
    }
    function ae(_, R, O, Q) {
      var le = B(O);
      if (typeof le != "function") throw Error(o(150));
      if (((O = le.call(O)), O == null)) throw Error(o(151));
      for (
        var de = (le = null), fe = R, ye = (R = 0), Ze = null, be = O.next();
        fe !== null && !be.done;
        ye++, be = O.next()
      ) {
        fe.index > ye ? ((Ze = fe), (fe = null)) : (Ze = fe.sibling);
        var er = U(_, fe, be.value, Q);
        if (er === null) {
          fe === null && (fe = Ze);
          break;
        }
        e && fe && er.alternate === null && n(_, fe),
          (R = p(er, R, ye)),
          de === null ? (le = er) : (de.sibling = er),
          (de = er),
          (fe = Ze);
      }
      if (be.done) return i(_, fe), De && Cr(_, ye), le;
      if (fe === null) {
        for (; !be.done; ye++, be = O.next())
          (be = K(_, be.value, Q)),
            be !== null &&
              ((R = p(be, R, ye)),
              de === null ? (le = be) : (de.sibling = be),
              (de = be));
        return De && Cr(_, ye), le;
      }
      for (fe = a(_, fe); !be.done; ye++, be = O.next())
        (be = ee(fe, _, ye, be.value, Q)),
          be !== null &&
            (e &&
              be.alternate !== null &&
              fe.delete(be.key === null ? ye : be.key),
            (R = p(be, R, ye)),
            de === null ? (le = be) : (de.sibling = be),
            (de = be));
      return (
        e &&
          fe.forEach(function ($1) {
            return n(_, $1);
          }),
        De && Cr(_, ye),
        le
      );
    }
    function He(_, R, O, Q) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === Y &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case V:
            e: {
              for (var le = O.key, de = R; de !== null; ) {
                if (de.key === le) {
                  if (((le = O.type), le === Y)) {
                    if (de.tag === 7) {
                      i(_, de.sibling),
                        (R = d(de, O.props.children)),
                        (R.return = _),
                        (_ = R);
                      break e;
                    }
                  } else if (
                    de.elementType === le ||
                    (typeof le == "object" &&
                      le !== null &&
                      le.$$typeof === q &&
                      Gf(le) === de.type)
                  ) {
                    i(_, de.sibling),
                      (R = d(de, O.props)),
                      (R.ref = ui(_, de, O)),
                      (R.return = _),
                      (_ = R);
                    break e;
                  }
                  i(_, de);
                  break;
                } else n(_, de);
                de = de.sibling;
              }
              O.type === Y
                ? ((R = Lr(O.props.children, _.mode, Q, O.key)),
                  (R.return = _),
                  (_ = R))
                : ((Q = Js(O.type, O.key, O.props, null, _.mode, Q)),
                  (Q.ref = ui(_, R, O)),
                  (Q.return = _),
                  (_ = Q));
            }
            return y(_);
          case W:
            e: {
              for (de = O.key; R !== null; ) {
                if (R.key === de)
                  if (
                    R.tag === 4 &&
                    R.stateNode.containerInfo === O.containerInfo &&
                    R.stateNode.implementation === O.implementation
                  ) {
                    i(_, R.sibling),
                      (R = d(R, O.children || [])),
                      (R.return = _),
                      (_ = R);
                    break e;
                  } else {
                    i(_, R);
                    break;
                  }
                else n(_, R);
                R = R.sibling;
              }
              (R = Nu(O, _.mode, Q)), (R.return = _), (_ = R);
            }
            return y(_);
          case q:
            return (de = O._init), He(_, R, de(O._payload), Q);
        }
        if (_t(O)) return ie(_, R, O, Q);
        if (B(O)) return ae(_, R, O, Q);
        ks(_, O);
      }
      return (typeof O == "string" && O !== "") || typeof O == "number"
        ? ((O = "" + O),
          R !== null && R.tag === 6
            ? (i(_, R.sibling), (R = d(R, O)), (R.return = _), (_ = R))
            : (i(_, R), (R = ku(O, _.mode, Q)), (R.return = _), (_ = R)),
          y(_))
        : i(_, R);
    }
    return He;
  }
  var ao = Kf(!0),
    Yf = Kf(!1),
    Ns = Wn(null),
    _s = null,
    lo = null,
    jl = null;
  function Bl() {
    jl = lo = _s = null;
  }
  function zl(e) {
    var n = Ns.current;
    Me(Ns), (e._currentValue = n);
  }
  function Ul(e, n, i) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), a !== null && (a.childLanes |= n))
          : a !== null && (a.childLanes & n) !== n && (a.childLanes |= n),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function uo(e, n) {
    (_s = e),
      (jl = lo = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & n && (gt = !0), (e.firstContext = null));
  }
  function Dt(e) {
    var n = e._currentValue;
    if (jl !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), lo === null)) {
        if (_s === null) throw Error(o(308));
        (lo = e), (_s.dependencies = { lanes: 0, firstContext: e });
      } else lo = lo.next = e;
    return n;
  }
  var Tr = null;
  function Wl(e) {
    Tr === null ? (Tr = [e]) : Tr.push(e);
  }
  function Qf(e, n, i, a) {
    var d = n.interleaved;
    return (
      d === null ? ((i.next = i), Wl(n)) : ((i.next = d.next), (d.next = i)),
      (n.interleaved = i),
      xn(e, a)
    );
  }
  function xn(e, n) {
    e.lanes |= n;
    var i = e.alternate;
    for (i !== null && (i.lanes |= n), i = e, e = e.return; e !== null; )
      (e.childLanes |= n),
        (i = e.alternate),
        i !== null && (i.childLanes |= n),
        (i = e),
        (e = e.return);
    return i.tag === 3 ? i.stateNode : null;
  }
  var Gn = !1;
  function Hl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Xf(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function wn(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Kn(e, n, i) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), Ae & 2)) {
      var d = a.pending;
      return (
        d === null ? (n.next = n) : ((n.next = d.next), (d.next = n)),
        (a.pending = n),
        xn(e, i)
      );
    }
    return (
      (d = a.interleaved),
      d === null ? ((n.next = n), Wl(a)) : ((n.next = d.next), (d.next = n)),
      (a.interleaved = n),
      xn(e, i)
    );
  }
  function Ls(e, n, i) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (i & 4194240) !== 0))
    ) {
      var a = n.lanes;
      (a &= e.pendingLanes), (i |= a), (n.lanes = i), ol(e, i);
    }
  }
  function qf(e, n) {
    var i = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), i === a)) {
      var d = null,
        p = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var y = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          p === null ? (d = p = y) : (p = p.next = y), (i = i.next);
        } while (i !== null);
        p === null ? (d = p = n) : (p = p.next = n);
      } else d = p = n;
      (i = {
        baseState: a.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: p,
        shared: a.shared,
        effects: a.effects,
      }),
        (e.updateQueue = i);
      return;
    }
    (e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = n) : (e.next = n),
      (i.lastBaseUpdate = n);
  }
  function Os(e, n, i, a) {
    var d = e.updateQueue;
    Gn = !1;
    var p = d.firstBaseUpdate,
      y = d.lastBaseUpdate,
      P = d.shared.pending;
    if (P !== null) {
      d.shared.pending = null;
      var A = P,
        D = A.next;
      (A.next = null), y === null ? (p = D) : (y.next = D), (y = A);
      var H = e.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (P = H.lastBaseUpdate),
        P !== y &&
          (P === null ? (H.firstBaseUpdate = D) : (P.next = D),
          (H.lastBaseUpdate = A)));
    }
    if (p !== null) {
      var K = d.baseState;
      (y = 0), (H = D = A = null), (P = p);
      do {
        var U = P.lane,
          ee = P.eventTime;
        if ((a & U) === U) {
          H !== null &&
            (H = H.next =
              {
                eventTime: ee,
                lane: 0,
                tag: P.tag,
                payload: P.payload,
                callback: P.callback,
                next: null,
              });
          e: {
            var ie = e,
              ae = P;
            switch (((U = n), (ee = i), ae.tag)) {
              case 1:
                if (((ie = ae.payload), typeof ie == "function")) {
                  K = ie.call(ee, K, U);
                  break e;
                }
                K = ie;
                break e;
              case 3:
                ie.flags = (ie.flags & -65537) | 128;
              case 0:
                if (
                  ((ie = ae.payload),
                  (U = typeof ie == "function" ? ie.call(ee, K, U) : ie),
                  U == null)
                )
                  break e;
                K = G({}, K, U);
                break e;
              case 2:
                Gn = !0;
            }
          }
          P.callback !== null &&
            P.lane !== 0 &&
            ((e.flags |= 64),
            (U = d.effects),
            U === null ? (d.effects = [P]) : U.push(P));
        } else
          (ee = {
            eventTime: ee,
            lane: U,
            tag: P.tag,
            payload: P.payload,
            callback: P.callback,
            next: null,
          }),
            H === null ? ((D = H = ee), (A = K)) : (H = H.next = ee),
            (y |= U);
        if (((P = P.next), P === null)) {
          if (((P = d.shared.pending), P === null)) break;
          (U = P),
            (P = U.next),
            (U.next = null),
            (d.lastBaseUpdate = U),
            (d.shared.pending = null);
        }
      } while (!0);
      if (
        (H === null && (A = K),
        (d.baseState = A),
        (d.firstBaseUpdate = D),
        (d.lastBaseUpdate = H),
        (n = d.shared.interleaved),
        n !== null)
      ) {
        d = n;
        do (y |= d.lane), (d = d.next);
        while (d !== n);
      } else p === null && (d.shared.lanes = 0);
      (Rr |= y), (e.lanes = y), (e.memoizedState = K);
    }
  }
  function Zf(e, n, i) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var a = e[n],
          d = a.callback;
        if (d !== null) {
          if (((a.callback = null), (a = i), typeof d != "function"))
            throw Error(o(191, d));
          d.call(a);
        }
      }
  }
  var ci = {},
    rn = Wn(ci),
    di = Wn(ci),
    fi = Wn(ci);
  function Ar(e) {
    if (e === ci) throw Error(o(174));
    return e;
  }
  function $l(e, n) {
    switch ((Le(fi, n), Le(di, e), Le(rn, ci), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Mn(null, "");
        break;
      default:
        (e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Mn(n, e));
    }
    Me(rn), Le(rn, n);
  }
  function co() {
    Me(rn), Me(di), Me(fi);
  }
  function Jf(e) {
    Ar(fi.current);
    var n = Ar(rn.current),
      i = Mn(n, e.type);
    n !== i && (Le(di, e), Le(rn, i));
  }
  function Gl(e) {
    di.current === e && (Me(rn), Me(di));
  }
  var Ve = Wn(0);
  function Ms(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Kl = [];
  function Yl() {
    for (var e = 0; e < Kl.length; e++)
      Kl[e]._workInProgressVersionPrimary = null;
    Kl.length = 0;
  }
  var Is = N.ReactCurrentDispatcher,
    Ql = N.ReactCurrentBatchConfig,
    br = 0,
    Fe = null,
    Ye = null,
    Xe = null,
    Ds = !1,
    pi = !1,
    hi = 0,
    p1 = 0;
  function ot() {
    throw Error(o(321));
  }
  function Xl(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!Ht(e[i], n[i])) return !1;
    return !0;
  }
  function ql(e, n, i, a, d, p) {
    if (
      ((br = p),
      (Fe = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (Is.current = e === null || e.memoizedState === null ? y1 : v1),
      (e = i(a, d)),
      pi)
    ) {
      p = 0;
      do {
        if (((pi = !1), (hi = 0), 25 <= p)) throw Error(o(301));
        (p += 1),
          (Xe = Ye = null),
          (n.updateQueue = null),
          (Is.current = x1),
          (e = i(a, d));
      } while (pi);
    }
    if (
      ((Is.current = js),
      (n = Ye !== null && Ye.next !== null),
      (br = 0),
      (Xe = Ye = Fe = null),
      (Ds = !1),
      n)
    )
      throw Error(o(300));
    return e;
  }
  function Zl() {
    var e = hi !== 0;
    return (hi = 0), e;
  }
  function on() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Xe === null ? (Fe.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe;
  }
  function Vt() {
    if (Ye === null) {
      var e = Fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ye.next;
    var n = Xe === null ? Fe.memoizedState : Xe.next;
    if (n !== null) (Xe = n), (Ye = e);
    else {
      if (e === null) throw Error(o(310));
      (Ye = e),
        (e = {
          memoizedState: Ye.memoizedState,
          baseState: Ye.baseState,
          baseQueue: Ye.baseQueue,
          queue: Ye.queue,
          next: null,
        }),
        Xe === null ? (Fe.memoizedState = Xe = e) : (Xe = Xe.next = e);
    }
    return Xe;
  }
  function mi(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Jl(e) {
    var n = Vt(),
      i = n.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = e;
    var a = Ye,
      d = a.baseQueue,
      p = i.pending;
    if (p !== null) {
      if (d !== null) {
        var y = d.next;
        (d.next = p.next), (p.next = y);
      }
      (a.baseQueue = d = p), (i.pending = null);
    }
    if (d !== null) {
      (p = d.next), (a = a.baseState);
      var P = (y = null),
        A = null,
        D = p;
      do {
        var H = D.lane;
        if ((br & H) === H)
          A !== null &&
            (A = A.next =
              {
                lane: 0,
                action: D.action,
                hasEagerState: D.hasEagerState,
                eagerState: D.eagerState,
                next: null,
              }),
            (a = D.hasEagerState ? D.eagerState : e(a, D.action));
        else {
          var K = {
            lane: H,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          };
          A === null ? ((P = A = K), (y = a)) : (A = A.next = K),
            (Fe.lanes |= H),
            (Rr |= H);
        }
        D = D.next;
      } while (D !== null && D !== p);
      A === null ? (y = a) : (A.next = P),
        Ht(a, n.memoizedState) || (gt = !0),
        (n.memoizedState = a),
        (n.baseState = y),
        (n.baseQueue = A),
        (i.lastRenderedState = a);
    }
    if (((e = i.interleaved), e !== null)) {
      d = e;
      do (p = d.lane), (Fe.lanes |= p), (Rr |= p), (d = d.next);
      while (d !== e);
    } else d === null && (i.lanes = 0);
    return [n.memoizedState, i.dispatch];
  }
  function eu(e) {
    var n = Vt(),
      i = n.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = e;
    var a = i.dispatch,
      d = i.pending,
      p = n.memoizedState;
    if (d !== null) {
      i.pending = null;
      var y = (d = d.next);
      do (p = e(p, y.action)), (y = y.next);
      while (y !== d);
      Ht(p, n.memoizedState) || (gt = !0),
        (n.memoizedState = p),
        n.baseQueue === null && (n.baseState = p),
        (i.lastRenderedState = p);
    }
    return [p, a];
  }
  function ep() {}
  function tp(e, n) {
    var i = Fe,
      a = Vt(),
      d = n(),
      p = !Ht(a.memoizedState, d);
    if (
      (p && ((a.memoizedState = d), (gt = !0)),
      (a = a.queue),
      tu(op.bind(null, i, a, e), [e]),
      a.getSnapshot !== n || p || (Xe !== null && Xe.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        gi(9, rp.bind(null, i, a, d, n), void 0, null),
        qe === null)
      )
        throw Error(o(349));
      br & 30 || np(i, n, d);
    }
    return d;
  }
  function np(e, n, i) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: i }),
      (n = Fe.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (Fe.updateQueue = n),
          (n.stores = [e]))
        : ((i = n.stores), i === null ? (n.stores = [e]) : i.push(e));
  }
  function rp(e, n, i, a) {
    (n.value = i), (n.getSnapshot = a), ip(n) && sp(e);
  }
  function op(e, n, i) {
    return i(function () {
      ip(n) && sp(e);
    });
  }
  function ip(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !Ht(e, i);
    } catch {
      return !0;
    }
  }
  function sp(e) {
    var n = xn(e, 1);
    n !== null && Qt(n, e, 1, -1);
  }
  function ap(e) {
    var n = on();
    return (
      typeof e == "function" && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mi,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = g1.bind(null, Fe, e)),
      [n.memoizedState, e]
    );
  }
  function gi(e, n, i, a) {
    return (
      (e = { tag: e, create: n, destroy: i, deps: a, next: null }),
      (n = Fe.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (Fe.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((i = n.lastEffect),
          i === null
            ? (n.lastEffect = e.next = e)
            : ((a = i.next), (i.next = e), (e.next = a), (n.lastEffect = e))),
      e
    );
  }
  function lp() {
    return Vt().memoizedState;
  }
  function Vs(e, n, i, a) {
    var d = on();
    (Fe.flags |= e),
      (d.memoizedState = gi(1 | n, i, void 0, a === void 0 ? null : a));
  }
  function Fs(e, n, i, a) {
    var d = Vt();
    a = a === void 0 ? null : a;
    var p = void 0;
    if (Ye !== null) {
      var y = Ye.memoizedState;
      if (((p = y.destroy), a !== null && Xl(a, y.deps))) {
        d.memoizedState = gi(n, i, p, a);
        return;
      }
    }
    (Fe.flags |= e), (d.memoizedState = gi(1 | n, i, p, a));
  }
  function up(e, n) {
    return Vs(8390656, 8, e, n);
  }
  function tu(e, n) {
    return Fs(2048, 8, e, n);
  }
  function cp(e, n) {
    return Fs(4, 2, e, n);
  }
  function dp(e, n) {
    return Fs(4, 4, e, n);
  }
  function fp(e, n) {
    if (typeof n == "function")
      return (
        (e = e()),
        n(e),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function pp(e, n, i) {
    return (
      (i = i != null ? i.concat([e]) : null), Fs(4, 4, fp.bind(null, n, e), i)
    );
  }
  function nu() {}
  function hp(e, n) {
    var i = Vt();
    n = n === void 0 ? null : n;
    var a = i.memoizedState;
    return a !== null && n !== null && Xl(n, a[1])
      ? a[0]
      : ((i.memoizedState = [e, n]), e);
  }
  function mp(e, n) {
    var i = Vt();
    n = n === void 0 ? null : n;
    var a = i.memoizedState;
    return a !== null && n !== null && Xl(n, a[1])
      ? a[0]
      : ((e = e()), (i.memoizedState = [e, n]), e);
  }
  function gp(e, n, i) {
    return br & 21
      ? (Ht(i, n) ||
          ((i = $d()), (Fe.lanes |= i), (Rr |= i), (e.baseState = !0)),
        n)
      : (e.baseState && ((e.baseState = !1), (gt = !0)), (e.memoizedState = i));
  }
  function h1(e, n) {
    var i = ke;
    (ke = i !== 0 && 4 > i ? i : 4), e(!0);
    var a = Ql.transition;
    Ql.transition = {};
    try {
      e(!1), n();
    } finally {
      (ke = i), (Ql.transition = a);
    }
  }
  function yp() {
    return Vt().memoizedState;
  }
  function m1(e, n, i) {
    var a = qn(e);
    if (
      ((i = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      vp(e))
    )
      xp(n, i);
    else if (((i = Qf(e, n, i, a)), i !== null)) {
      var d = ft();
      Qt(i, e, a, d), wp(i, n, a);
    }
  }
  function g1(e, n, i) {
    var a = qn(e),
      d = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (vp(e)) xp(n, d);
    else {
      var p = e.alternate;
      if (
        e.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = n.lastRenderedReducer), p !== null)
      )
        try {
          var y = n.lastRenderedState,
            P = p(y, i);
          if (((d.hasEagerState = !0), (d.eagerState = P), Ht(P, y))) {
            var A = n.interleaved;
            A === null
              ? ((d.next = d), Wl(n))
              : ((d.next = A.next), (A.next = d)),
              (n.interleaved = d);
            return;
          }
        } catch {
        } finally {
        }
      (i = Qf(e, n, d, a)),
        i !== null && ((d = ft()), Qt(i, e, a, d), wp(i, n, a));
    }
  }
  function vp(e) {
    var n = e.alternate;
    return e === Fe || (n !== null && n === Fe);
  }
  function xp(e, n) {
    pi = Ds = !0;
    var i = e.pending;
    i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
      (e.pending = n);
  }
  function wp(e, n, i) {
    if (i & 4194240) {
      var a = n.lanes;
      (a &= e.pendingLanes), (i |= a), (n.lanes = i), ol(e, i);
    }
  }
  var js = {
      readContext: Dt,
      useCallback: ot,
      useContext: ot,
      useEffect: ot,
      useImperativeHandle: ot,
      useInsertionEffect: ot,
      useLayoutEffect: ot,
      useMemo: ot,
      useReducer: ot,
      useRef: ot,
      useState: ot,
      useDebugValue: ot,
      useDeferredValue: ot,
      useTransition: ot,
      useMutableSource: ot,
      useSyncExternalStore: ot,
      useId: ot,
      unstable_isNewReconciler: !1,
    },
    y1 = {
      readContext: Dt,
      useCallback: function (e, n) {
        return (on().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: Dt,
      useEffect: up,
      useImperativeHandle: function (e, n, i) {
        return (
          (i = i != null ? i.concat([e]) : null),
          Vs(4194308, 4, fp.bind(null, n, e), i)
        );
      },
      useLayoutEffect: function (e, n) {
        return Vs(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return Vs(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var i = on();
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (i.memoizedState = [e, n]),
          e
        );
      },
      useReducer: function (e, n, i) {
        var a = on();
        return (
          (n = i !== void 0 ? i(n) : n),
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = m1.bind(null, Fe, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = on();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: ap,
      useDebugValue: nu,
      useDeferredValue: function (e) {
        return (on().memoizedState = e);
      },
      useTransition: function () {
        var e = ap(!1),
          n = e[0];
        return (e = h1.bind(null, e[1])), (on().memoizedState = e), [n, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, i) {
        var a = Fe,
          d = on();
        if (De) {
          if (i === void 0) throw Error(o(407));
          i = i();
        } else {
          if (((i = n()), qe === null)) throw Error(o(349));
          br & 30 || np(a, n, i);
        }
        d.memoizedState = i;
        var p = { value: i, getSnapshot: n };
        return (
          (d.queue = p),
          up(op.bind(null, a, p, e), [e]),
          (a.flags |= 2048),
          gi(9, rp.bind(null, a, p, i, n), void 0, null),
          i
        );
      },
      useId: function () {
        var e = on(),
          n = qe.identifierPrefix;
        if (De) {
          var i = vn,
            a = yn;
          (i = (a & ~(1 << (32 - Wt(a) - 1))).toString(32) + i),
            (n = ":" + n + "R" + i),
            (i = hi++),
            0 < i && (n += "H" + i.toString(32)),
            (n += ":");
        } else (i = p1++), (n = ":" + n + "r" + i.toString(32) + ":");
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    v1 = {
      readContext: Dt,
      useCallback: hp,
      useContext: Dt,
      useEffect: tu,
      useImperativeHandle: pp,
      useInsertionEffect: cp,
      useLayoutEffect: dp,
      useMemo: mp,
      useReducer: Jl,
      useRef: lp,
      useState: function () {
        return Jl(mi);
      },
      useDebugValue: nu,
      useDeferredValue: function (e) {
        var n = Vt();
        return gp(n, Ye.memoizedState, e);
      },
      useTransition: function () {
        var e = Jl(mi)[0],
          n = Vt().memoizedState;
        return [e, n];
      },
      useMutableSource: ep,
      useSyncExternalStore: tp,
      useId: yp,
      unstable_isNewReconciler: !1,
    },
    x1 = {
      readContext: Dt,
      useCallback: hp,
      useContext: Dt,
      useEffect: tu,
      useImperativeHandle: pp,
      useInsertionEffect: cp,
      useLayoutEffect: dp,
      useMemo: mp,
      useReducer: eu,
      useRef: lp,
      useState: function () {
        return eu(mi);
      },
      useDebugValue: nu,
      useDeferredValue: function (e) {
        var n = Vt();
        return Ye === null ? (n.memoizedState = e) : gp(n, Ye.memoizedState, e);
      },
      useTransition: function () {
        var e = eu(mi)[0],
          n = Vt().memoizedState;
        return [e, n];
      },
      useMutableSource: ep,
      useSyncExternalStore: tp,
      useId: yp,
      unstable_isNewReconciler: !1,
    };
  function Gt(e, n) {
    if (e && e.defaultProps) {
      (n = G({}, n)), (e = e.defaultProps);
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function ru(e, n, i, a) {
    (n = e.memoizedState),
      (i = i(a, n)),
      (i = i == null ? n : G({}, n, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Bs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? wr(e) === e : !1;
    },
    enqueueSetState: function (e, n, i) {
      e = e._reactInternals;
      var a = ft(),
        d = qn(e),
        p = wn(a, d);
      (p.payload = n),
        i != null && (p.callback = i),
        (n = Kn(e, p, d)),
        n !== null && (Qt(n, e, d, a), Ls(n, e, d));
    },
    enqueueReplaceState: function (e, n, i) {
      e = e._reactInternals;
      var a = ft(),
        d = qn(e),
        p = wn(a, d);
      (p.tag = 1),
        (p.payload = n),
        i != null && (p.callback = i),
        (n = Kn(e, p, d)),
        n !== null && (Qt(n, e, d, a), Ls(n, e, d));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var i = ft(),
        a = qn(e),
        d = wn(i, a);
      (d.tag = 2),
        n != null && (d.callback = n),
        (n = Kn(e, d, a)),
        n !== null && (Qt(n, e, a, i), Ls(n, e, a));
    },
  };
  function Sp(e, n, i, a, d, p, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, p, y)
        : n.prototype && n.prototype.isPureReactComponent
        ? !ni(i, a) || !ni(d, p)
        : !0
    );
  }
  function Ep(e, n, i) {
    var a = !1,
      d = Hn,
      p = n.contextType;
    return (
      typeof p == "object" && p !== null
        ? (p = Dt(p))
        : ((d = mt(n) ? Er : rt.current),
          (a = n.contextTypes),
          (p = (a = a != null) ? ro(e, d) : Hn)),
      (n = new n(i, p)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = Bs),
      (e.stateNode = n),
      (n._reactInternals = e),
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = d),
        (e.__reactInternalMemoizedMaskedChildContext = p)),
      n
    );
  }
  function Pp(e, n, i, a) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(i, a),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(i, a),
      n.state !== e && Bs.enqueueReplaceState(n, n.state, null);
  }
  function ou(e, n, i, a) {
    var d = e.stateNode;
    (d.props = i), (d.state = e.memoizedState), (d.refs = {}), Hl(e);
    var p = n.contextType;
    typeof p == "object" && p !== null
      ? (d.context = Dt(p))
      : ((p = mt(n) ? Er : rt.current), (d.context = ro(e, p))),
      (d.state = e.memoizedState),
      (p = n.getDerivedStateFromProps),
      typeof p == "function" && (ru(e, n, p, i), (d.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function" ||
        (typeof d.UNSAFE_componentWillMount != "function" &&
          typeof d.componentWillMount != "function") ||
        ((n = d.state),
        typeof d.componentWillMount == "function" && d.componentWillMount(),
        typeof d.UNSAFE_componentWillMount == "function" &&
          d.UNSAFE_componentWillMount(),
        n !== d.state && Bs.enqueueReplaceState(d, d.state, null),
        Os(e, i, d, a),
        (d.state = e.memoizedState)),
      typeof d.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function fo(e, n) {
    try {
      var i = "",
        a = n;
      do (i += he(a)), (a = a.return);
      while (a);
      var d = i;
    } catch (p) {
      d =
        `
Error generating stack: ` +
        p.message +
        `
` +
        p.stack;
    }
    return { value: e, source: n, stack: d, digest: null };
  }
  function iu(e, n, i) {
    return { value: e, source: null, stack: i ?? null, digest: n ?? null };
  }
  function su(e, n) {
    try {
      console.error(n.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var w1 = typeof WeakMap == "function" ? WeakMap : Map;
  function Cp(e, n, i) {
    (i = wn(-1, i)), (i.tag = 3), (i.payload = { element: null });
    var a = n.value;
    return (
      (i.callback = function () {
        Ks || ((Ks = !0), (Su = a)), su(e, n);
      }),
      i
    );
  }
  function Tp(e, n, i) {
    (i = wn(-1, i)), (i.tag = 3);
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var d = n.value;
      (i.payload = function () {
        return a(d);
      }),
        (i.callback = function () {
          su(e, n);
        });
    }
    var p = e.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == "function" &&
        (i.callback = function () {
          su(e, n),
            typeof a != "function" &&
              (Qn === null ? (Qn = new Set([this])) : Qn.add(this));
          var y = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: y !== null ? y : "",
          });
        }),
      i
    );
  }
  function Ap(e, n, i) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new w1();
      var d = new Set();
      a.set(n, d);
    } else (d = a.get(n)), d === void 0 && ((d = new Set()), a.set(n, d));
    d.has(i) || (d.add(i), (e = M1.bind(null, e, n, i)), n.then(e, e));
  }
  function bp(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Rp(e, n, i, a, d) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = d), e)
      : (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null
                ? (i.tag = 17)
                : ((n = wn(-1, 1)), (n.tag = 2), Kn(i, n, 1))),
            (i.lanes |= 1)),
        e);
  }
  var S1 = N.ReactCurrentOwner,
    gt = !1;
  function dt(e, n, i, a) {
    n.child = e === null ? Yf(n, null, i, a) : ao(n, e.child, i, a);
  }
  function kp(e, n, i, a, d) {
    i = i.render;
    var p = n.ref;
    return (
      uo(n, d),
      (a = ql(e, n, i, a, p, d)),
      (i = Zl()),
      e !== null && !gt
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~d),
          Sn(e, n, d))
        : (De && i && Ml(n), (n.flags |= 1), dt(e, n, a, d), n.child)
    );
  }
  function Np(e, n, i, a, d) {
    if (e === null) {
      var p = i.type;
      return typeof p == "function" &&
        !Ru(p) &&
        p.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((n.tag = 15), (n.type = p), _p(e, n, p, a, d))
        : ((e = Js(i.type, null, a, n, n.mode, d)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((p = e.child), !(e.lanes & d))) {
      var y = p.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : ni), i(y, a) && e.ref === n.ref)
      )
        return Sn(e, n, d);
    }
    return (
      (n.flags |= 1),
      (e = Jn(p, a)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function _p(e, n, i, a, d) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (ni(p, a) && e.ref === n.ref)
        if (((gt = !1), (n.pendingProps = a = p), (e.lanes & d) !== 0))
          e.flags & 131072 && (gt = !0);
        else return (n.lanes = e.lanes), Sn(e, n, d);
    }
    return au(e, n, i, a, d);
  }
  function Lp(e, n, i) {
    var a = n.pendingProps,
      d = a.children,
      p = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden")
      if (!(n.mode & 1))
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Le(ho, At),
          (At |= i);
      else {
        if (!(i & 1073741824))
          return (
            (e = p !== null ? p.baseLanes | i : i),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            Le(ho, At),
            (At |= e),
            null
          );
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (a = p !== null ? p.baseLanes : i),
          Le(ho, At),
          (At |= a);
      }
    else
      p !== null ? ((a = p.baseLanes | i), (n.memoizedState = null)) : (a = i),
        Le(ho, At),
        (At |= a);
    return dt(e, n, d, i), n.child;
  }
  function Op(e, n) {
    var i = n.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function au(e, n, i, a, d) {
    var p = mt(i) ? Er : rt.current;
    return (
      (p = ro(n, p)),
      uo(n, d),
      (i = ql(e, n, i, a, p, d)),
      (a = Zl()),
      e !== null && !gt
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~d),
          Sn(e, n, d))
        : (De && a && Ml(n), (n.flags |= 1), dt(e, n, i, d), n.child)
    );
  }
  function Mp(e, n, i, a, d) {
    if (mt(i)) {
      var p = !0;
      Cs(n);
    } else p = !1;
    if ((uo(n, d), n.stateNode === null))
      Us(e, n), Ep(n, i, a), ou(n, i, a, d), (a = !0);
    else if (e === null) {
      var y = n.stateNode,
        P = n.memoizedProps;
      y.props = P;
      var A = y.context,
        D = i.contextType;
      typeof D == "object" && D !== null
        ? (D = Dt(D))
        : ((D = mt(i) ? Er : rt.current), (D = ro(n, D)));
      var H = i.getDerivedStateFromProps,
        K =
          typeof H == "function" ||
          typeof y.getSnapshotBeforeUpdate == "function";
      K ||
        (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
          typeof y.componentWillReceiveProps != "function") ||
        ((P !== a || A !== D) && Pp(n, y, a, D)),
        (Gn = !1);
      var U = n.memoizedState;
      (y.state = U),
        Os(n, a, y, d),
        (A = n.memoizedState),
        P !== a || U !== A || ht.current || Gn
          ? (typeof H == "function" && (ru(n, i, H, a), (A = n.memoizedState)),
            (P = Gn || Sp(n, i, P, a, U, A, D))
              ? (K ||
                  (typeof y.UNSAFE_componentWillMount != "function" &&
                    typeof y.componentWillMount != "function") ||
                  (typeof y.componentWillMount == "function" &&
                    y.componentWillMount(),
                  typeof y.UNSAFE_componentWillMount == "function" &&
                    y.UNSAFE_componentWillMount()),
                typeof y.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof y.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = a),
                (n.memoizedState = A)),
            (y.props = a),
            (y.state = A),
            (y.context = D),
            (a = P))
          : (typeof y.componentDidMount == "function" && (n.flags |= 4194308),
            (a = !1));
    } else {
      (y = n.stateNode),
        Xf(e, n),
        (P = n.memoizedProps),
        (D = n.type === n.elementType ? P : Gt(n.type, P)),
        (y.props = D),
        (K = n.pendingProps),
        (U = y.context),
        (A = i.contextType),
        typeof A == "object" && A !== null
          ? (A = Dt(A))
          : ((A = mt(i) ? Er : rt.current), (A = ro(n, A)));
      var ee = i.getDerivedStateFromProps;
      (H =
        typeof ee == "function" ||
        typeof y.getSnapshotBeforeUpdate == "function") ||
        (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
          typeof y.componentWillReceiveProps != "function") ||
        ((P !== K || U !== A) && Pp(n, y, a, A)),
        (Gn = !1),
        (U = n.memoizedState),
        (y.state = U),
        Os(n, a, y, d);
      var ie = n.memoizedState;
      P !== K || U !== ie || ht.current || Gn
        ? (typeof ee == "function" && (ru(n, i, ee, a), (ie = n.memoizedState)),
          (D = Gn || Sp(n, i, D, a, U, ie, A) || !1)
            ? (H ||
                (typeof y.UNSAFE_componentWillUpdate != "function" &&
                  typeof y.componentWillUpdate != "function") ||
                (typeof y.componentWillUpdate == "function" &&
                  y.componentWillUpdate(a, ie, A),
                typeof y.UNSAFE_componentWillUpdate == "function" &&
                  y.UNSAFE_componentWillUpdate(a, ie, A)),
              typeof y.componentDidUpdate == "function" && (n.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof y.componentDidUpdate != "function" ||
                (P === e.memoizedProps && U === e.memoizedState) ||
                (n.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != "function" ||
                (P === e.memoizedProps && U === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = a),
              (n.memoizedState = ie)),
          (y.props = a),
          (y.state = ie),
          (y.context = A),
          (a = D))
        : (typeof y.componentDidUpdate != "function" ||
            (P === e.memoizedProps && U === e.memoizedState) ||
            (n.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != "function" ||
            (P === e.memoizedProps && U === e.memoizedState) ||
            (n.flags |= 1024),
          (a = !1));
    }
    return lu(e, n, i, a, p, d);
  }
  function lu(e, n, i, a, d, p) {
    Op(e, n);
    var y = (n.flags & 128) !== 0;
    if (!a && !y) return d && jf(n, i, !1), Sn(e, n, p);
    (a = n.stateNode), (S1.current = n);
    var P =
      y && typeof i.getDerivedStateFromError != "function" ? null : a.render();
    return (
      (n.flags |= 1),
      e !== null && y
        ? ((n.child = ao(n, e.child, null, p)), (n.child = ao(n, null, P, p)))
        : dt(e, n, P, p),
      (n.memoizedState = a.state),
      d && jf(n, i, !0),
      n.child
    );
  }
  function Ip(e) {
    var n = e.stateNode;
    n.pendingContext
      ? Vf(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && Vf(e, n.context, !1),
      $l(e, n.containerInfo);
  }
  function Dp(e, n, i, a, d) {
    return so(), Fl(d), (n.flags |= 256), dt(e, n, i, a), n.child;
  }
  var uu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Vp(e, n, i) {
    var a = n.pendingProps,
      d = Ve.current,
      p = !1,
      y = (n.flags & 128) !== 0,
      P;
    if (
      ((P = y) ||
        (P = e !== null && e.memoizedState === null ? !1 : (d & 2) !== 0),
      P
        ? ((p = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (d |= 1),
      Le(Ve, d & 1),
      e === null)
    )
      return (
        Vl(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (n.mode & 1
              ? e.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824)
              : (n.lanes = 1),
            null)
          : ((y = a.children),
            (e = a.fallback),
            p
              ? ((a = n.mode),
                (p = n.child),
                (y = { mode: "hidden", children: y }),
                !(a & 1) && p !== null
                  ? ((p.childLanes = 0), (p.pendingProps = y))
                  : (p = ea(y, a, 0, null)),
                (e = Lr(e, a, i, null)),
                (p.return = n),
                (e.return = n),
                (p.sibling = e),
                (n.child = p),
                (n.child.memoizedState = cu(i)),
                (n.memoizedState = uu),
                e)
              : du(n, y))
      );
    if (((d = e.memoizedState), d !== null && ((P = d.dehydrated), P !== null)))
      return E1(e, n, y, a, P, d, i);
    if (p) {
      (p = a.fallback), (y = n.mode), (d = e.child), (P = d.sibling);
      var A = { mode: "hidden", children: a.children };
      return (
        !(y & 1) && n.child !== d
          ? ((a = n.child),
            (a.childLanes = 0),
            (a.pendingProps = A),
            (n.deletions = null))
          : ((a = Jn(d, A)), (a.subtreeFlags = d.subtreeFlags & 14680064)),
        P !== null ? (p = Jn(P, p)) : ((p = Lr(p, y, i, null)), (p.flags |= 2)),
        (p.return = n),
        (a.return = n),
        (a.sibling = p),
        (n.child = a),
        (a = p),
        (p = n.child),
        (y = e.child.memoizedState),
        (y =
          y === null
            ? cu(i)
            : {
                baseLanes: y.baseLanes | i,
                cachePool: null,
                transitions: y.transitions,
              }),
        (p.memoizedState = y),
        (p.childLanes = e.childLanes & ~i),
        (n.memoizedState = uu),
        a
      );
    }
    return (
      (p = e.child),
      (e = p.sibling),
      (a = Jn(p, { mode: "visible", children: a.children })),
      !(n.mode & 1) && (a.lanes = i),
      (a.return = n),
      (a.sibling = null),
      e !== null &&
        ((i = n.deletions),
        i === null ? ((n.deletions = [e]), (n.flags |= 16)) : i.push(e)),
      (n.child = a),
      (n.memoizedState = null),
      a
    );
  }
  function du(e, n) {
    return (
      (n = ea({ mode: "visible", children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function zs(e, n, i, a) {
    return (
      a !== null && Fl(a),
      ao(n, e.child, null, i),
      (e = du(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function E1(e, n, i, a, d, p, y) {
    if (i)
      return n.flags & 256
        ? ((n.flags &= -257), (a = iu(Error(o(422)))), zs(e, n, y, a))
        : n.memoizedState !== null
        ? ((n.child = e.child), (n.flags |= 128), null)
        : ((p = a.fallback),
          (d = n.mode),
          (a = ea({ mode: "visible", children: a.children }, d, 0, null)),
          (p = Lr(p, d, y, null)),
          (p.flags |= 2),
          (a.return = n),
          (p.return = n),
          (a.sibling = p),
          (n.child = a),
          n.mode & 1 && ao(n, e.child, null, y),
          (n.child.memoizedState = cu(y)),
          (n.memoizedState = uu),
          p);
    if (!(n.mode & 1)) return zs(e, n, y, null);
    if (d.data === "$!") {
      if (((a = d.nextSibling && d.nextSibling.dataset), a)) var P = a.dgst;
      return (
        (a = P), (p = Error(o(419))), (a = iu(p, a, void 0)), zs(e, n, y, a)
      );
    }
    if (((P = (y & e.childLanes) !== 0), gt || P)) {
      if (((a = qe), a !== null)) {
        switch (y & -y) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        (d = d & (a.suspendedLanes | y) ? 0 : d),
          d !== 0 &&
            d !== p.retryLane &&
            ((p.retryLane = d), xn(e, d), Qt(a, e, d, -1));
      }
      return bu(), (a = iu(Error(o(421)))), zs(e, n, y, a);
    }
    return d.data === "$?"
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = I1.bind(null, e)),
        (d._reactRetry = n),
        null)
      : ((e = p.treeContext),
        (Tt = Un(d.nextSibling)),
        (Ct = n),
        (De = !0),
        ($t = null),
        e !== null &&
          ((Mt[It++] = yn),
          (Mt[It++] = vn),
          (Mt[It++] = Pr),
          (yn = e.id),
          (vn = e.overflow),
          (Pr = n)),
        (n = du(n, a.children)),
        (n.flags |= 4096),
        n);
  }
  function Fp(e, n, i) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n), Ul(e.return, n, i);
  }
  function fu(e, n, i, a, d) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: i,
          tailMode: d,
        })
      : ((p.isBackwards = n),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = a),
        (p.tail = i),
        (p.tailMode = d));
  }
  function jp(e, n, i) {
    var a = n.pendingProps,
      d = a.revealOrder,
      p = a.tail;
    if ((dt(e, n, a.children, i), (a = Ve.current), a & 2))
      (a = (a & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Fp(e, i, n);
          else if (e.tag === 19) Fp(e, i, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      a &= 1;
    }
    if ((Le(Ve, a), !(n.mode & 1))) n.memoizedState = null;
    else
      switch (d) {
        case "forwards":
          for (i = n.child, d = null; i !== null; )
            (e = i.alternate),
              e !== null && Ms(e) === null && (d = i),
              (i = i.sibling);
          (i = d),
            i === null
              ? ((d = n.child), (n.child = null))
              : ((d = i.sibling), (i.sibling = null)),
            fu(n, !1, d, i, p);
          break;
        case "backwards":
          for (i = null, d = n.child, n.child = null; d !== null; ) {
            if (((e = d.alternate), e !== null && Ms(e) === null)) {
              n.child = d;
              break;
            }
            (e = d.sibling), (d.sibling = i), (i = d), (d = e);
          }
          fu(n, !0, i, null, p);
          break;
        case "together":
          fu(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function Us(e, n) {
    !(n.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function Sn(e, n, i) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (Rr |= n.lanes),
      !(i & n.childLanes))
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(o(153));
    if (n.child !== null) {
      for (
        e = n.child, i = Jn(e, e.pendingProps), n.child = i, i.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (i = i.sibling = Jn(e, e.pendingProps)),
          (i.return = n);
      i.sibling = null;
    }
    return n.child;
  }
  function P1(e, n, i) {
    switch (n.tag) {
      case 3:
        Ip(n), so();
        break;
      case 5:
        Jf(n);
        break;
      case 1:
        mt(n.type) && Cs(n);
        break;
      case 4:
        $l(n, n.stateNode.containerInfo);
        break;
      case 10:
        var a = n.type._context,
          d = n.memoizedProps.value;
        Le(Ns, a._currentValue), (a._currentValue = d);
        break;
      case 13:
        if (((a = n.memoizedState), a !== null))
          return a.dehydrated !== null
            ? (Le(Ve, Ve.current & 1), (n.flags |= 128), null)
            : i & n.child.childLanes
            ? Vp(e, n, i)
            : (Le(Ve, Ve.current & 1),
              (e = Sn(e, n, i)),
              e !== null ? e.sibling : null);
        Le(Ve, Ve.current & 1);
        break;
      case 19:
        if (((a = (i & n.childLanes) !== 0), e.flags & 128)) {
          if (a) return jp(e, n, i);
          n.flags |= 128;
        }
        if (
          ((d = n.memoizedState),
          d !== null &&
            ((d.rendering = null), (d.tail = null), (d.lastEffect = null)),
          Le(Ve, Ve.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Lp(e, n, i);
    }
    return Sn(e, n, i);
  }
  var Bp, pu, zp, Up;
  (Bp = function (e, n) {
    for (var i = n.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        (i.child.return = i), (i = i.child);
        continue;
      }
      if (i === n) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === n) return;
        i = i.return;
      }
      (i.sibling.return = i.return), (i = i.sibling);
    }
  }),
    (pu = function () {}),
    (zp = function (e, n, i, a) {
      var d = e.memoizedProps;
      if (d !== a) {
        (e = n.stateNode), Ar(rn.current);
        var p = null;
        switch (i) {
          case "input":
            (d = Nn(e, d)), (a = Nn(e, a)), (p = []);
            break;
          case "select":
            (d = G({}, d, { value: void 0 })),
              (a = G({}, a, { value: void 0 })),
              (p = []);
            break;
          case "textarea":
            (d = Vo(e, d)), (a = Vo(e, a)), (p = []);
            break;
          default:
            typeof d.onClick != "function" &&
              typeof a.onClick == "function" &&
              (e.onclick = Ss);
        }
        Kr(i, a);
        var y;
        i = null;
        for (D in d)
          if (!a.hasOwnProperty(D) && d.hasOwnProperty(D) && d[D] != null)
            if (D === "style") {
              var P = d[D];
              for (y in P) P.hasOwnProperty(y) && (i || (i = {}), (i[y] = ""));
            } else
              D !== "dangerouslySetInnerHTML" &&
                D !== "children" &&
                D !== "suppressContentEditableWarning" &&
                D !== "suppressHydrationWarning" &&
                D !== "autoFocus" &&
                (l.hasOwnProperty(D)
                  ? p || (p = [])
                  : (p = p || []).push(D, null));
        for (D in a) {
          var A = a[D];
          if (
            ((P = d != null ? d[D] : void 0),
            a.hasOwnProperty(D) && A !== P && (A != null || P != null))
          )
            if (D === "style")
              if (P) {
                for (y in P)
                  !P.hasOwnProperty(y) ||
                    (A && A.hasOwnProperty(y)) ||
                    (i || (i = {}), (i[y] = ""));
                for (y in A)
                  A.hasOwnProperty(y) &&
                    P[y] !== A[y] &&
                    (i || (i = {}), (i[y] = A[y]));
              } else i || (p || (p = []), p.push(D, i)), (i = A);
            else
              D === "dangerouslySetInnerHTML"
                ? ((A = A ? A.__html : void 0),
                  (P = P ? P.__html : void 0),
                  A != null && P !== A && (p = p || []).push(D, A))
                : D === "children"
                ? (typeof A != "string" && typeof A != "number") ||
                  (p = p || []).push(D, "" + A)
                : D !== "suppressContentEditableWarning" &&
                  D !== "suppressHydrationWarning" &&
                  (l.hasOwnProperty(D)
                    ? (A != null && D === "onScroll" && Oe("scroll", e),
                      p || P === A || (p = []))
                    : (p = p || []).push(D, A));
        }
        i && (p = p || []).push("style", i);
        var D = p;
        (n.updateQueue = D) && (n.flags |= 4);
      }
    }),
    (Up = function (e, n, i, a) {
      i !== a && (n.flags |= 4);
    });
  function yi(e, n) {
    if (!De)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = e.tail;
          for (var a = null; i !== null; )
            i.alternate !== null && (a = i), (i = i.sibling);
          a === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function it(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      a = 0;
    if (n)
      for (var d = e.child; d !== null; )
        (i |= d.lanes | d.childLanes),
          (a |= d.subtreeFlags & 14680064),
          (a |= d.flags & 14680064),
          (d.return = e),
          (d = d.sibling);
    else
      for (d = e.child; d !== null; )
        (i |= d.lanes | d.childLanes),
          (a |= d.subtreeFlags),
          (a |= d.flags),
          (d.return = e),
          (d = d.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = i), n;
  }
  function C1(e, n, i) {
    var a = n.pendingProps;
    switch ((Il(n), n.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return it(n), null;
      case 1:
        return mt(n.type) && Ps(), it(n), null;
      case 3:
        return (
          (a = n.stateNode),
          co(),
          Me(ht),
          Me(rt),
          Yl(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Rs(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), $t !== null && (Cu($t), ($t = null)))),
          pu(e, n),
          it(n),
          null
        );
      case 5:
        Gl(n);
        var d = Ar(fi.current);
        if (((i = n.type), e !== null && n.stateNode != null))
          zp(e, n, i, a, d),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
        else {
          if (!a) {
            if (n.stateNode === null) throw Error(o(166));
            return it(n), null;
          }
          if (((e = Ar(rn.current)), Rs(n))) {
            (a = n.stateNode), (i = n.type);
            var p = n.memoizedProps;
            switch (((a[nn] = n), (a[ai] = p), (e = (n.mode & 1) !== 0), i)) {
              case "dialog":
                Oe("cancel", a), Oe("close", a);
                break;
              case "iframe":
              case "object":
              case "embed":
                Oe("load", a);
                break;
              case "video":
              case "audio":
                for (d = 0; d < oi.length; d++) Oe(oi[d], a);
                break;
              case "source":
                Oe("error", a);
                break;
              case "img":
              case "image":
              case "link":
                Oe("error", a), Oe("load", a);
                break;
              case "details":
                Oe("toggle", a);
                break;
              case "input":
                _n(a, p), Oe("invalid", a);
                break;
              case "select":
                (a._wrapperState = { wasMultiple: !!p.multiple }),
                  Oe("invalid", a);
                break;
              case "textarea":
                ct(a, p), Oe("invalid", a);
            }
            Kr(i, p), (d = null);
            for (var y in p)
              if (p.hasOwnProperty(y)) {
                var P = p[y];
                y === "children"
                  ? typeof P == "string"
                    ? a.textContent !== P &&
                      (p.suppressHydrationWarning !== !0 &&
                        ws(a.textContent, P, e),
                      (d = ["children", P]))
                    : typeof P == "number" &&
                      a.textContent !== "" + P &&
                      (p.suppressHydrationWarning !== !0 &&
                        ws(a.textContent, P, e),
                      (d = ["children", "" + P]))
                  : l.hasOwnProperty(y) &&
                    P != null &&
                    y === "onScroll" &&
                    Oe("scroll", a);
              }
            switch (i) {
              case "input":
                wt(a), pn(a, p, !0);
                break;
              case "textarea":
                wt(a), Qi(a);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (a.onclick = Ss);
            }
            (a = d), (n.updateQueue = a), a !== null && (n.flags |= 4);
          } else {
            (y = d.nodeType === 9 ? d : d.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Xi(i)),
              e === "http://www.w3.org/1999/xhtml"
                ? i === "script"
                  ? ((e = y.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof a.is == "string"
                  ? (e = y.createElement(i, { is: a.is }))
                  : ((e = y.createElement(i)),
                    i === "select" &&
                      ((y = e),
                      a.multiple
                        ? (y.multiple = !0)
                        : a.size && (y.size = a.size)))
                : (e = y.createElementNS(e, i)),
              (e[nn] = n),
              (e[ai] = a),
              Bp(e, n, !1, !1),
              (n.stateNode = e);
            e: {
              switch (((y = jo(i, a)), i)) {
                case "dialog":
                  Oe("cancel", e), Oe("close", e), (d = a);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Oe("load", e), (d = a);
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < oi.length; d++) Oe(oi[d], e);
                  d = a;
                  break;
                case "source":
                  Oe("error", e), (d = a);
                  break;
                case "img":
                case "image":
                case "link":
                  Oe("error", e), Oe("load", e), (d = a);
                  break;
                case "details":
                  Oe("toggle", e), (d = a);
                  break;
                case "input":
                  _n(e, a), (d = Nn(e, a)), Oe("invalid", e);
                  break;
                case "option":
                  d = a;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!a.multiple }),
                    (d = G({}, a, { value: void 0 })),
                    Oe("invalid", e);
                  break;
                case "textarea":
                  ct(e, a), (d = Vo(e, a)), Oe("invalid", e);
                  break;
                default:
                  d = a;
              }
              Kr(i, d), (P = d);
              for (p in P)
                if (P.hasOwnProperty(p)) {
                  var A = P[p];
                  p === "style"
                    ? qi(e, A)
                    : p === "dangerouslySetInnerHTML"
                    ? ((A = A ? A.__html : void 0), A != null && $r(e, A))
                    : p === "children"
                    ? typeof A == "string"
                      ? (i !== "textarea" || A !== "") && Lt(e, A)
                      : typeof A == "number" && Lt(e, "" + A)
                    : p !== "suppressContentEditableWarning" &&
                      p !== "suppressHydrationWarning" &&
                      p !== "autoFocus" &&
                      (l.hasOwnProperty(p)
                        ? A != null && p === "onScroll" && Oe("scroll", e)
                        : A != null && M(e, p, A, y));
                }
              switch (i) {
                case "input":
                  wt(e), pn(e, a, !1);
                  break;
                case "textarea":
                  wt(e), Qi(e);
                  break;
                case "option":
                  a.value != null && e.setAttribute("value", "" + Pe(a.value));
                  break;
                case "select":
                  (e.multiple = !!a.multiple),
                    (p = a.value),
                    p != null
                      ? On(e, !!a.multiple, p, !1)
                      : a.defaultValue != null &&
                        On(e, !!a.multiple, a.defaultValue, !0);
                  break;
                default:
                  typeof d.onClick == "function" && (e.onclick = Ss);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = !0;
                  break e;
                default:
                  a = !1;
              }
            }
            a && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return it(n), null;
      case 6:
        if (e && n.stateNode != null) Up(e, n, e.memoizedProps, a);
        else {
          if (typeof a != "string" && n.stateNode === null) throw Error(o(166));
          if (((i = Ar(fi.current)), Ar(rn.current), Rs(n))) {
            if (
              ((a = n.stateNode),
              (i = n.memoizedProps),
              (a[nn] = n),
              (p = a.nodeValue !== i) && ((e = Ct), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ws(a.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ws(a.nodeValue, i, (e.mode & 1) !== 0);
              }
            p && (n.flags |= 4);
          } else
            (a = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(a)),
              (a[nn] = n),
              (n.stateNode = a);
        }
        return it(n), null;
      case 13:
        if (
          (Me(Ve),
          (a = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (De && Tt !== null && n.mode & 1 && !(n.flags & 128))
            $f(), so(), (n.flags |= 98560), (p = !1);
          else if (((p = Rs(n)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!p) throw Error(o(318));
              if (
                ((p = n.memoizedState),
                (p = p !== null ? p.dehydrated : null),
                !p)
              )
                throw Error(o(317));
              p[nn] = n;
            } else
              so(),
                !(n.flags & 128) && (n.memoizedState = null),
                (n.flags |= 4);
            it(n), (p = !1);
          } else $t !== null && (Cu($t), ($t = null)), (p = !0);
          if (!p) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128
          ? ((n.lanes = i), n)
          : ((a = a !== null),
            a !== (e !== null && e.memoizedState !== null) &&
              a &&
              ((n.child.flags |= 8192),
              n.mode & 1 &&
                (e === null || Ve.current & 1 ? Qe === 0 && (Qe = 3) : bu())),
            n.updateQueue !== null && (n.flags |= 4),
            it(n),
            null);
      case 4:
        return (
          co(),
          pu(e, n),
          e === null && ii(n.stateNode.containerInfo),
          it(n),
          null
        );
      case 10:
        return zl(n.type._context), it(n), null;
      case 17:
        return mt(n.type) && Ps(), it(n), null;
      case 19:
        if ((Me(Ve), (p = n.memoizedState), p === null)) return it(n), null;
        if (((a = (n.flags & 128) !== 0), (y = p.rendering), y === null))
          if (a) yi(p, !1);
          else {
            if (Qe !== 0 || (e !== null && e.flags & 128))
              for (e = n.child; e !== null; ) {
                if (((y = Ms(e)), y !== null)) {
                  for (
                    n.flags |= 128,
                      yi(p, !1),
                      a = y.updateQueue,
                      a !== null && ((n.updateQueue = a), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      a = i,
                      i = n.child;
                    i !== null;

                  )
                    (p = i),
                      (e = a),
                      (p.flags &= 14680066),
                      (y = p.alternate),
                      y === null
                        ? ((p.childLanes = 0),
                          (p.lanes = e),
                          (p.child = null),
                          (p.subtreeFlags = 0),
                          (p.memoizedProps = null),
                          (p.memoizedState = null),
                          (p.updateQueue = null),
                          (p.dependencies = null),
                          (p.stateNode = null))
                        : ((p.childLanes = y.childLanes),
                          (p.lanes = y.lanes),
                          (p.child = y.child),
                          (p.subtreeFlags = 0),
                          (p.deletions = null),
                          (p.memoizedProps = y.memoizedProps),
                          (p.memoizedState = y.memoizedState),
                          (p.updateQueue = y.updateQueue),
                          (p.type = y.type),
                          (e = y.dependencies),
                          (p.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (i = i.sibling);
                  return Le(Ve, (Ve.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            p.tail !== null &&
              We() > mo &&
              ((n.flags |= 128), (a = !0), yi(p, !1), (n.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Ms(y)), e !== null)) {
              if (
                ((n.flags |= 128),
                (a = !0),
                (i = e.updateQueue),
                i !== null && ((n.updateQueue = i), (n.flags |= 4)),
                yi(p, !0),
                p.tail === null &&
                  p.tailMode === "hidden" &&
                  !y.alternate &&
                  !De)
              )
                return it(n), null;
            } else
              2 * We() - p.renderingStartTime > mo &&
                i !== 1073741824 &&
                ((n.flags |= 128), (a = !0), yi(p, !1), (n.lanes = 4194304));
          p.isBackwards
            ? ((y.sibling = n.child), (n.child = y))
            : ((i = p.last),
              i !== null ? (i.sibling = y) : (n.child = y),
              (p.last = y));
        }
        return p.tail !== null
          ? ((n = p.tail),
            (p.rendering = n),
            (p.tail = n.sibling),
            (p.renderingStartTime = We()),
            (n.sibling = null),
            (i = Ve.current),
            Le(Ve, a ? (i & 1) | 2 : i & 1),
            n)
          : (it(n), null);
      case 22:
      case 23:
        return (
          Au(),
          (a = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== a && (n.flags |= 8192),
          a && n.mode & 1
            ? At & 1073741824 &&
              (it(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : it(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, n.tag));
  }
  function T1(e, n) {
    switch ((Il(n), n.tag)) {
      case 1:
        return (
          mt(n.type) && Ps(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          co(),
          Me(ht),
          Me(rt),
          Yl(),
          (e = n.flags),
          e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 5:
        return Gl(n), null;
      case 13:
        if (
          (Me(Ve), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(o(340));
          so();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return Me(Ve), null;
      case 4:
        return co(), null;
      case 10:
        return zl(n.type._context), null;
      case 22:
      case 23:
        return Au(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ws = !1,
    st = !1,
    A1 = typeof WeakSet == "function" ? WeakSet : Set,
    ne = null;
  function po(e, n) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (a) {
          ze(e, n, a);
        }
      else i.current = null;
  }
  function hu(e, n, i) {
    try {
      i();
    } catch (a) {
      ze(e, n, a);
    }
  }
  var Wp = !1;
  function b1(e, n) {
    if (((Al = us), (e = Sf()), vl(e))) {
      if ("selectionStart" in e)
        var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var a = i.getSelection && i.getSelection();
          if (a && a.rangeCount !== 0) {
            i = a.anchorNode;
            var d = a.anchorOffset,
              p = a.focusNode;
            a = a.focusOffset;
            try {
              i.nodeType, p.nodeType;
            } catch {
              i = null;
              break e;
            }
            var y = 0,
              P = -1,
              A = -1,
              D = 0,
              H = 0,
              K = e,
              U = null;
            t: for (;;) {
              for (
                var ee;
                K !== i || (d !== 0 && K.nodeType !== 3) || (P = y + d),
                  K !== p || (a !== 0 && K.nodeType !== 3) || (A = y + a),
                  K.nodeType === 3 && (y += K.nodeValue.length),
                  (ee = K.firstChild) !== null;

              )
                (U = K), (K = ee);
              for (;;) {
                if (K === e) break t;
                if (
                  (U === i && ++D === d && (P = y),
                  U === p && ++H === a && (A = y),
                  (ee = K.nextSibling) !== null)
                )
                  break;
                (K = U), (U = K.parentNode);
              }
              K = ee;
            }
            i = P === -1 || A === -1 ? null : { start: P, end: A };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      bl = { focusedElem: e, selectionRange: i }, us = !1, ne = n;
      ne !== null;

    )
      if (
        ((n = ne), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = n), (ne = e);
      else
        for (; ne !== null; ) {
          n = ne;
          try {
            var ie = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ie !== null) {
                    var ae = ie.memoizedProps,
                      He = ie.memoizedState,
                      _ = n.stateNode,
                      R = _.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? ae : Gt(n.type, ae),
                        He
                      );
                    _.__reactInternalSnapshotBeforeUpdate = R;
                  }
                  break;
                case 3:
                  var O = n.stateNode.containerInfo;
                  O.nodeType === 1
                    ? (O.textContent = "")
                    : O.nodeType === 9 &&
                      O.documentElement &&
                      O.removeChild(O.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (Q) {
            ze(n, n.return, Q);
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (ne = e);
            break;
          }
          ne = n.return;
        }
    return (ie = Wp), (Wp = !1), ie;
  }
  function vi(e, n, i) {
    var a = n.updateQueue;
    if (((a = a !== null ? a.lastEffect : null), a !== null)) {
      var d = (a = a.next);
      do {
        if ((d.tag & e) === e) {
          var p = d.destroy;
          (d.destroy = void 0), p !== void 0 && hu(n, i, p);
        }
        d = d.next;
      } while (d !== a);
    }
  }
  function Hs(e, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var i = (n = n.next);
      do {
        if ((i.tag & e) === e) {
          var a = i.create;
          i.destroy = a();
        }
        i = i.next;
      } while (i !== n);
    }
  }
  function mu(e) {
    var n = e.ref;
    if (n !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = i;
          break;
        default:
          e = i;
      }
      typeof n == "function" ? n(e) : (n.current = e);
    }
  }
  function Hp(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), Hp(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[nn],
          delete n[ai],
          delete n[_l],
          delete n[u1],
          delete n[c1])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function $p(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Gp(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || $p(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function gu(e, n, i) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        n
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, n)
            : i.insertBefore(e, n)
          : (i.nodeType === 8
              ? ((n = i.parentNode), n.insertBefore(e, i))
              : ((n = i), n.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || n.onclick !== null || (n.onclick = Ss));
    else if (a !== 4 && ((e = e.child), e !== null))
      for (gu(e, n, i), e = e.sibling; e !== null; )
        gu(e, n, i), (e = e.sibling);
  }
  function yu(e, n, i) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), n ? i.insertBefore(e, n) : i.appendChild(e);
    else if (a !== 4 && ((e = e.child), e !== null))
      for (yu(e, n, i), e = e.sibling; e !== null; )
        yu(e, n, i), (e = e.sibling);
  }
  var Je = null,
    Kt = !1;
  function Yn(e, n, i) {
    for (i = i.child; i !== null; ) Kp(e, n, i), (i = i.sibling);
  }
  function Kp(e, n, i) {
    if (tn && typeof tn.onCommitFiberUnmount == "function")
      try {
        tn.onCommitFiberUnmount(rs, i);
      } catch {}
    switch (i.tag) {
      case 5:
        st || po(i, n);
      case 6:
        var a = Je,
          d = Kt;
        (Je = null),
          Yn(e, n, i),
          (Je = a),
          (Kt = d),
          Je !== null &&
            (Kt
              ? ((e = Je),
                (i = i.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(i)
                  : e.removeChild(i))
              : Je.removeChild(i.stateNode));
        break;
      case 18:
        Je !== null &&
          (Kt
            ? ((e = Je),
              (i = i.stateNode),
              e.nodeType === 8
                ? Nl(e.parentNode, i)
                : e.nodeType === 1 && Nl(e, i),
              Xo(e))
            : Nl(Je, i.stateNode));
        break;
      case 4:
        (a = Je),
          (d = Kt),
          (Je = i.stateNode.containerInfo),
          (Kt = !0),
          Yn(e, n, i),
          (Je = a),
          (Kt = d);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !st &&
          ((a = i.updateQueue), a !== null && ((a = a.lastEffect), a !== null))
        ) {
          d = a = a.next;
          do {
            var p = d,
              y = p.destroy;
            (p = p.tag),
              y !== void 0 && (p & 2 || p & 4) && hu(i, n, y),
              (d = d.next);
          } while (d !== a);
        }
        Yn(e, n, i);
        break;
      case 1:
        if (
          !st &&
          (po(i, n),
          (a = i.stateNode),
          typeof a.componentWillUnmount == "function")
        )
          try {
            (a.props = i.memoizedProps),
              (a.state = i.memoizedState),
              a.componentWillUnmount();
          } catch (P) {
            ze(i, n, P);
          }
        Yn(e, n, i);
        break;
      case 21:
        Yn(e, n, i);
        break;
      case 22:
        i.mode & 1
          ? ((st = (a = st) || i.memoizedState !== null), Yn(e, n, i), (st = a))
          : Yn(e, n, i);
        break;
      default:
        Yn(e, n, i);
    }
  }
  function Yp(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new A1()),
        n.forEach(function (a) {
          var d = D1.bind(null, e, a);
          i.has(a) || (i.add(a), a.then(d, d));
        });
    }
  }
  function Yt(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var a = 0; a < i.length; a++) {
        var d = i[a];
        try {
          var p = e,
            y = n,
            P = y;
          e: for (; P !== null; ) {
            switch (P.tag) {
              case 5:
                (Je = P.stateNode), (Kt = !1);
                break e;
              case 3:
                (Je = P.stateNode.containerInfo), (Kt = !0);
                break e;
              case 4:
                (Je = P.stateNode.containerInfo), (Kt = !0);
                break e;
            }
            P = P.return;
          }
          if (Je === null) throw Error(o(160));
          Kp(p, y, d), (Je = null), (Kt = !1);
          var A = d.alternate;
          A !== null && (A.return = null), (d.return = null);
        } catch (D) {
          ze(d, n, D);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) Qp(n, e), (n = n.sibling);
  }
  function Qp(e, n) {
    var i = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Yt(n, e), sn(e), a & 4)) {
          try {
            vi(3, e, e.return), Hs(3, e);
          } catch (ae) {
            ze(e, e.return, ae);
          }
          try {
            vi(5, e, e.return);
          } catch (ae) {
            ze(e, e.return, ae);
          }
        }
        break;
      case 1:
        Yt(n, e), sn(e), a & 512 && i !== null && po(i, i.return);
        break;
      case 5:
        if (
          (Yt(n, e),
          sn(e),
          a & 512 && i !== null && po(i, i.return),
          e.flags & 32)
        ) {
          var d = e.stateNode;
          try {
            Lt(d, "");
          } catch (ae) {
            ze(e, e.return, ae);
          }
        }
        if (a & 4 && ((d = e.stateNode), d != null)) {
          var p = e.memoizedProps,
            y = i !== null ? i.memoizedProps : p,
            P = e.type,
            A = e.updateQueue;
          if (((e.updateQueue = null), A !== null))
            try {
              P === "input" && p.type === "radio" && p.name != null && Wr(d, p),
                jo(P, y);
              var D = jo(P, p);
              for (y = 0; y < A.length; y += 2) {
                var H = A[y],
                  K = A[y + 1];
                H === "style"
                  ? qi(d, K)
                  : H === "dangerouslySetInnerHTML"
                  ? $r(d, K)
                  : H === "children"
                  ? Lt(d, K)
                  : M(d, H, K, D);
              }
              switch (P) {
                case "input":
                  Ln(d, p);
                  break;
                case "textarea":
                  hn(d, p);
                  break;
                case "select":
                  var U = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!p.multiple;
                  var ee = p.value;
                  ee != null
                    ? On(d, !!p.multiple, ee, !1)
                    : U !== !!p.multiple &&
                      (p.defaultValue != null
                        ? On(d, !!p.multiple, p.defaultValue, !0)
                        : On(d, !!p.multiple, p.multiple ? [] : "", !1));
              }
              d[ai] = p;
            } catch (ae) {
              ze(e, e.return, ae);
            }
        }
        break;
      case 6:
        if ((Yt(n, e), sn(e), a & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (d = e.stateNode), (p = e.memoizedProps);
          try {
            d.nodeValue = p;
          } catch (ae) {
            ze(e, e.return, ae);
          }
        }
        break;
      case 3:
        if (
          (Yt(n, e), sn(e), a & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            Xo(n.containerInfo);
          } catch (ae) {
            ze(e, e.return, ae);
          }
        break;
      case 4:
        Yt(n, e), sn(e);
        break;
      case 13:
        Yt(n, e),
          sn(e),
          (d = e.child),
          d.flags & 8192 &&
            ((p = d.memoizedState !== null),
            (d.stateNode.isHidden = p),
            !p ||
              (d.alternate !== null && d.alternate.memoizedState !== null) ||
              (wu = We())),
          a & 4 && Yp(e);
        break;
      case 22:
        if (
          ((H = i !== null && i.memoizedState !== null),
          e.mode & 1 ? ((st = (D = st) || H), Yt(n, e), (st = D)) : Yt(n, e),
          sn(e),
          a & 8192)
        ) {
          if (
            ((D = e.memoizedState !== null),
            (e.stateNode.isHidden = D) && !H && e.mode & 1)
          )
            for (ne = e, H = e.child; H !== null; ) {
              for (K = ne = H; ne !== null; ) {
                switch (((U = ne), (ee = U.child), U.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    vi(4, U, U.return);
                    break;
                  case 1:
                    po(U, U.return);
                    var ie = U.stateNode;
                    if (typeof ie.componentWillUnmount == "function") {
                      (a = U), (i = U.return);
                      try {
                        (n = a),
                          (ie.props = n.memoizedProps),
                          (ie.state = n.memoizedState),
                          ie.componentWillUnmount();
                      } catch (ae) {
                        ze(a, i, ae);
                      }
                    }
                    break;
                  case 5:
                    po(U, U.return);
                    break;
                  case 22:
                    if (U.memoizedState !== null) {
                      Zp(K);
                      continue;
                    }
                }
                ee !== null ? ((ee.return = U), (ne = ee)) : Zp(K);
              }
              H = H.sibling;
            }
          e: for (H = null, K = e; ; ) {
            if (K.tag === 5) {
              if (H === null) {
                H = K;
                try {
                  (d = K.stateNode),
                    D
                      ? ((p = d.style),
                        typeof p.setProperty == "function"
                          ? p.setProperty("display", "none", "important")
                          : (p.display = "none"))
                      : ((P = K.stateNode),
                        (A = K.memoizedProps.style),
                        (y =
                          A != null && A.hasOwnProperty("display")
                            ? A.display
                            : null),
                        (P.style.display = Fo("display", y)));
                } catch (ae) {
                  ze(e, e.return, ae);
                }
              }
            } else if (K.tag === 6) {
              if (H === null)
                try {
                  K.stateNode.nodeValue = D ? "" : K.memoizedProps;
                } catch (ae) {
                  ze(e, e.return, ae);
                }
            } else if (
              ((K.tag !== 22 && K.tag !== 23) ||
                K.memoizedState === null ||
                K === e) &&
              K.child !== null
            ) {
              (K.child.return = K), (K = K.child);
              continue;
            }
            if (K === e) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === e) break e;
              H === K && (H = null), (K = K.return);
            }
            H === K && (H = null),
              (K.sibling.return = K.return),
              (K = K.sibling);
          }
        }
        break;
      case 19:
        Yt(n, e), sn(e), a & 4 && Yp(e);
        break;
      case 21:
        break;
      default:
        Yt(n, e), sn(e);
    }
  }
  function sn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if ($p(i)) {
              var a = i;
              break e;
            }
            i = i.return;
          }
          throw Error(o(160));
        }
        switch (a.tag) {
          case 5:
            var d = a.stateNode;
            a.flags & 32 && (Lt(d, ""), (a.flags &= -33));
            var p = Gp(e);
            yu(e, p, d);
            break;
          case 3:
          case 4:
            var y = a.stateNode.containerInfo,
              P = Gp(e);
            gu(e, P, y);
            break;
          default:
            throw Error(o(161));
        }
      } catch (A) {
        ze(e, e.return, A);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function R1(e, n, i) {
    (ne = e), Xp(e);
  }
  function Xp(e, n, i) {
    for (var a = (e.mode & 1) !== 0; ne !== null; ) {
      var d = ne,
        p = d.child;
      if (d.tag === 22 && a) {
        var y = d.memoizedState !== null || Ws;
        if (!y) {
          var P = d.alternate,
            A = (P !== null && P.memoizedState !== null) || st;
          P = Ws;
          var D = st;
          if (((Ws = y), (st = A) && !D))
            for (ne = d; ne !== null; )
              (y = ne),
                (A = y.child),
                y.tag === 22 && y.memoizedState !== null
                  ? Jp(d)
                  : A !== null
                  ? ((A.return = y), (ne = A))
                  : Jp(d);
          for (; p !== null; ) (ne = p), Xp(p), (p = p.sibling);
          (ne = d), (Ws = P), (st = D);
        }
        qp(e);
      } else
        d.subtreeFlags & 8772 && p !== null
          ? ((p.return = d), (ne = p))
          : qp(e);
    }
  }
  function qp(e) {
    for (; ne !== null; ) {
      var n = ne;
      if (n.flags & 8772) {
        var i = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                st || Hs(5, n);
                break;
              case 1:
                var a = n.stateNode;
                if (n.flags & 4 && !st)
                  if (i === null) a.componentDidMount();
                  else {
                    var d =
                      n.elementType === n.type
                        ? i.memoizedProps
                        : Gt(n.type, i.memoizedProps);
                    a.componentDidUpdate(
                      d,
                      i.memoizedState,
                      a.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var p = n.updateQueue;
                p !== null && Zf(n, p, a);
                break;
              case 3:
                var y = n.updateQueue;
                if (y !== null) {
                  if (((i = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        i = n.child.stateNode;
                        break;
                      case 1:
                        i = n.child.stateNode;
                    }
                  Zf(n, y, i);
                }
                break;
              case 5:
                var P = n.stateNode;
                if (i === null && n.flags & 4) {
                  i = P;
                  var A = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      A.autoFocus && i.focus();
                      break;
                    case "img":
                      A.src && (i.src = A.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var D = n.alternate;
                  if (D !== null) {
                    var H = D.memoizedState;
                    if (H !== null) {
                      var K = H.dehydrated;
                      K !== null && Xo(K);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          st || (n.flags & 512 && mu(n));
        } catch (U) {
          ze(n, n.return, U);
        }
      }
      if (n === e) {
        ne = null;
        break;
      }
      if (((i = n.sibling), i !== null)) {
        (i.return = n.return), (ne = i);
        break;
      }
      ne = n.return;
    }
  }
  function Zp(e) {
    for (; ne !== null; ) {
      var n = ne;
      if (n === e) {
        ne = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        (i.return = n.return), (ne = i);
        break;
      }
      ne = n.return;
    }
  }
  function Jp(e) {
    for (; ne !== null; ) {
      var n = ne;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var i = n.return;
            try {
              Hs(4, n);
            } catch (A) {
              ze(n, i, A);
            }
            break;
          case 1:
            var a = n.stateNode;
            if (typeof a.componentDidMount == "function") {
              var d = n.return;
              try {
                a.componentDidMount();
              } catch (A) {
                ze(n, d, A);
              }
            }
            var p = n.return;
            try {
              mu(n);
            } catch (A) {
              ze(n, p, A);
            }
            break;
          case 5:
            var y = n.return;
            try {
              mu(n);
            } catch (A) {
              ze(n, y, A);
            }
        }
      } catch (A) {
        ze(n, n.return, A);
      }
      if (n === e) {
        ne = null;
        break;
      }
      var P = n.sibling;
      if (P !== null) {
        (P.return = n.return), (ne = P);
        break;
      }
      ne = n.return;
    }
  }
  var k1 = Math.ceil,
    $s = N.ReactCurrentDispatcher,
    vu = N.ReactCurrentOwner,
    Ft = N.ReactCurrentBatchConfig,
    Ae = 0,
    qe = null,
    Ke = null,
    et = 0,
    At = 0,
    ho = Wn(0),
    Qe = 0,
    xi = null,
    Rr = 0,
    Gs = 0,
    xu = 0,
    wi = null,
    yt = null,
    wu = 0,
    mo = 1 / 0,
    En = null,
    Ks = !1,
    Su = null,
    Qn = null,
    Ys = !1,
    Xn = null,
    Qs = 0,
    Si = 0,
    Eu = null,
    Xs = -1,
    qs = 0;
  function ft() {
    return Ae & 6 ? We() : Xs !== -1 ? Xs : (Xs = We());
  }
  function qn(e) {
    return e.mode & 1
      ? Ae & 2 && et !== 0
        ? et & -et
        : f1.transition !== null
        ? (qs === 0 && (qs = $d()), qs)
        : ((e = ke),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ef(e.type))),
          e)
      : 1;
  }
  function Qt(e, n, i, a) {
    if (50 < Si) throw ((Si = 0), (Eu = null), Error(o(185)));
    $o(e, i, a),
      (!(Ae & 2) || e !== qe) &&
        (e === qe && (!(Ae & 2) && (Gs |= i), Qe === 4 && Zn(e, et)),
        vt(e, a),
        i === 1 &&
          Ae === 0 &&
          !(n.mode & 1) &&
          ((mo = We() + 500), Ts && $n()));
  }
  function vt(e, n) {
    var i = e.callbackNode;
    f0(e, n);
    var a = ss(e, e === qe ? et : 0);
    if (a === 0)
      i !== null && Ud(i), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = a & -a), e.callbackPriority !== n)) {
      if ((i != null && Ud(i), n === 1))
        e.tag === 0 ? d1(th.bind(null, e)) : Bf(th.bind(null, e)),
          a1(function () {
            !(Ae & 6) && $n();
          }),
          (i = null);
      else {
        switch (Gd(a)) {
          case 1:
            i = tl;
            break;
          case 4:
            i = Wd;
            break;
          case 16:
            i = ns;
            break;
          case 536870912:
            i = Hd;
            break;
          default:
            i = ns;
        }
        i = uh(i, eh.bind(null, e));
      }
      (e.callbackPriority = n), (e.callbackNode = i);
    }
  }
  function eh(e, n) {
    if (((Xs = -1), (qs = 0), Ae & 6)) throw Error(o(327));
    var i = e.callbackNode;
    if (go() && e.callbackNode !== i) return null;
    var a = ss(e, e === qe ? et : 0);
    if (a === 0) return null;
    if (a & 30 || a & e.expiredLanes || n) n = Zs(e, a);
    else {
      n = a;
      var d = Ae;
      Ae |= 2;
      var p = rh();
      (qe !== e || et !== n) && ((En = null), (mo = We() + 500), Nr(e, n));
      do
        try {
          L1();
          break;
        } catch (P) {
          nh(e, P);
        }
      while (!0);
      Bl(),
        ($s.current = p),
        (Ae = d),
        Ke !== null ? (n = 0) : ((qe = null), (et = 0), (n = Qe));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((d = nl(e)), d !== 0 && ((a = d), (n = Pu(e, d)))),
        n === 1)
      )
        throw ((i = xi), Nr(e, 0), Zn(e, a), vt(e, We()), i);
      if (n === 6) Zn(e, a);
      else {
        if (
          ((d = e.current.alternate),
          !(a & 30) &&
            !N1(d) &&
            ((n = Zs(e, a)),
            n === 2 && ((p = nl(e)), p !== 0 && ((a = p), (n = Pu(e, p)))),
            n === 1))
        )
          throw ((i = xi), Nr(e, 0), Zn(e, a), vt(e, We()), i);
        switch (((e.finishedWork = d), (e.finishedLanes = a), n)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            _r(e, yt, En);
            break;
          case 3:
            if (
              (Zn(e, a),
              (a & 130023424) === a && ((n = wu + 500 - We()), 10 < n))
            ) {
              if (ss(e, 0) !== 0) break;
              if (((d = e.suspendedLanes), (d & a) !== a)) {
                ft(), (e.pingedLanes |= e.suspendedLanes & d);
                break;
              }
              e.timeoutHandle = kl(_r.bind(null, e, yt, En), n);
              break;
            }
            _r(e, yt, En);
            break;
          case 4:
            if ((Zn(e, a), (a & 4194240) === a)) break;
            for (n = e.eventTimes, d = -1; 0 < a; ) {
              var y = 31 - Wt(a);
              (p = 1 << y), (y = n[y]), y > d && (d = y), (a &= ~p);
            }
            if (
              ((a = d),
              (a = We() - a),
              (a =
                (120 > a
                  ? 120
                  : 480 > a
                  ? 480
                  : 1080 > a
                  ? 1080
                  : 1920 > a
                  ? 1920
                  : 3e3 > a
                  ? 3e3
                  : 4320 > a
                  ? 4320
                  : 1960 * k1(a / 1960)) - a),
              10 < a)
            ) {
              e.timeoutHandle = kl(_r.bind(null, e, yt, En), a);
              break;
            }
            _r(e, yt, En);
            break;
          case 5:
            _r(e, yt, En);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return vt(e, We()), e.callbackNode === i ? eh.bind(null, e) : null;
  }
  function Pu(e, n) {
    var i = wi;
    return (
      e.current.memoizedState.isDehydrated && (Nr(e, n).flags |= 256),
      (e = Zs(e, n)),
      e !== 2 && ((n = yt), (yt = i), n !== null && Cu(n)),
      e
    );
  }
  function Cu(e) {
    yt === null ? (yt = e) : yt.push.apply(yt, e);
  }
  function N1(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var i = n.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var a = 0; a < i.length; a++) {
            var d = i[a],
              p = d.getSnapshot;
            d = d.value;
            try {
              if (!Ht(p(), d)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = n.child), n.subtreeFlags & 16384 && i !== null))
        (i.return = n), (n = i);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Zn(e, n) {
    for (
      n &= ~xu,
        n &= ~Gs,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;

    ) {
      var i = 31 - Wt(n),
        a = 1 << i;
      (e[i] = -1), (n &= ~a);
    }
  }
  function th(e) {
    if (Ae & 6) throw Error(o(327));
    go();
    var n = ss(e, 0);
    if (!(n & 1)) return vt(e, We()), null;
    var i = Zs(e, n);
    if (e.tag !== 0 && i === 2) {
      var a = nl(e);
      a !== 0 && ((n = a), (i = Pu(e, a)));
    }
    if (i === 1) throw ((i = xi), Nr(e, 0), Zn(e, n), vt(e, We()), i);
    if (i === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      _r(e, yt, En),
      vt(e, We()),
      null
    );
  }
  function Tu(e, n) {
    var i = Ae;
    Ae |= 1;
    try {
      return e(n);
    } finally {
      (Ae = i), Ae === 0 && ((mo = We() + 500), Ts && $n());
    }
  }
  function kr(e) {
    Xn !== null && Xn.tag === 0 && !(Ae & 6) && go();
    var n = Ae;
    Ae |= 1;
    var i = Ft.transition,
      a = ke;
    try {
      if (((Ft.transition = null), (ke = 1), e)) return e();
    } finally {
      (ke = a), (Ft.transition = i), (Ae = n), !(Ae & 6) && $n();
    }
  }
  function Au() {
    (At = ho.current), Me(ho);
  }
  function Nr(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), s1(i)), Ke !== null))
      for (i = Ke.return; i !== null; ) {
        var a = i;
        switch ((Il(a), a.tag)) {
          case 1:
            (a = a.type.childContextTypes), a != null && Ps();
            break;
          case 3:
            co(), Me(ht), Me(rt), Yl();
            break;
          case 5:
            Gl(a);
            break;
          case 4:
            co();
            break;
          case 13:
            Me(Ve);
            break;
          case 19:
            Me(Ve);
            break;
          case 10:
            zl(a.type._context);
            break;
          case 22:
          case 23:
            Au();
        }
        i = i.return;
      }
    if (
      ((qe = e),
      (Ke = e = Jn(e.current, null)),
      (et = At = n),
      (Qe = 0),
      (xi = null),
      (xu = Gs = Rr = 0),
      (yt = wi = null),
      Tr !== null)
    ) {
      for (n = 0; n < Tr.length; n++)
        if (((i = Tr[n]), (a = i.interleaved), a !== null)) {
          i.interleaved = null;
          var d = a.next,
            p = i.pending;
          if (p !== null) {
            var y = p.next;
            (p.next = d), (a.next = y);
          }
          i.pending = a;
        }
      Tr = null;
    }
    return e;
  }
  function nh(e, n) {
    do {
      var i = Ke;
      try {
        if ((Bl(), (Is.current = js), Ds)) {
          for (var a = Fe.memoizedState; a !== null; ) {
            var d = a.queue;
            d !== null && (d.pending = null), (a = a.next);
          }
          Ds = !1;
        }
        if (
          ((br = 0),
          (Xe = Ye = Fe = null),
          (pi = !1),
          (hi = 0),
          (vu.current = null),
          i === null || i.return === null)
        ) {
          (Qe = 1), (xi = n), (Ke = null);
          break;
        }
        e: {
          var p = e,
            y = i.return,
            P = i,
            A = n;
          if (
            ((n = et),
            (P.flags |= 32768),
            A !== null && typeof A == "object" && typeof A.then == "function")
          ) {
            var D = A,
              H = P,
              K = H.tag;
            if (!(H.mode & 1) && (K === 0 || K === 11 || K === 15)) {
              var U = H.alternate;
              U
                ? ((H.updateQueue = U.updateQueue),
                  (H.memoizedState = U.memoizedState),
                  (H.lanes = U.lanes))
                : ((H.updateQueue = null), (H.memoizedState = null));
            }
            var ee = bp(y);
            if (ee !== null) {
              (ee.flags &= -257),
                Rp(ee, y, P, p, n),
                ee.mode & 1 && Ap(p, D, n),
                (n = ee),
                (A = D);
              var ie = n.updateQueue;
              if (ie === null) {
                var ae = new Set();
                ae.add(A), (n.updateQueue = ae);
              } else ie.add(A);
              break e;
            } else {
              if (!(n & 1)) {
                Ap(p, D, n), bu();
                break e;
              }
              A = Error(o(426));
            }
          } else if (De && P.mode & 1) {
            var He = bp(y);
            if (He !== null) {
              !(He.flags & 65536) && (He.flags |= 256),
                Rp(He, y, P, p, n),
                Fl(fo(A, P));
              break e;
            }
          }
          (p = A = fo(A, P)),
            Qe !== 4 && (Qe = 2),
            wi === null ? (wi = [p]) : wi.push(p),
            (p = y);
          do {
            switch (p.tag) {
              case 3:
                (p.flags |= 65536), (n &= -n), (p.lanes |= n);
                var _ = Cp(p, A, n);
                qf(p, _);
                break e;
              case 1:
                P = A;
                var R = p.type,
                  O = p.stateNode;
                if (
                  !(p.flags & 128) &&
                  (typeof R.getDerivedStateFromError == "function" ||
                    (O !== null &&
                      typeof O.componentDidCatch == "function" &&
                      (Qn === null || !Qn.has(O))))
                ) {
                  (p.flags |= 65536), (n &= -n), (p.lanes |= n);
                  var Q = Tp(p, P, n);
                  qf(p, Q);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        ih(i);
      } catch (le) {
        (n = le), Ke === i && i !== null && (Ke = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function rh() {
    var e = $s.current;
    return ($s.current = js), e === null ? js : e;
  }
  function bu() {
    (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4),
      qe === null || (!(Rr & 268435455) && !(Gs & 268435455)) || Zn(qe, et);
  }
  function Zs(e, n) {
    var i = Ae;
    Ae |= 2;
    var a = rh();
    (qe !== e || et !== n) && ((En = null), Nr(e, n));
    do
      try {
        _1();
        break;
      } catch (d) {
        nh(e, d);
      }
    while (!0);
    if ((Bl(), (Ae = i), ($s.current = a), Ke !== null)) throw Error(o(261));
    return (qe = null), (et = 0), Qe;
  }
  function _1() {
    for (; Ke !== null; ) oh(Ke);
  }
  function L1() {
    for (; Ke !== null && !r0(); ) oh(Ke);
  }
  function oh(e) {
    var n = lh(e.alternate, e, At);
    (e.memoizedProps = e.pendingProps),
      n === null ? ih(e) : (Ke = n),
      (vu.current = null);
  }
  function ih(e) {
    var n = e;
    do {
      var i = n.alternate;
      if (((e = n.return), n.flags & 32768)) {
        if (((i = T1(i, n)), i !== null)) {
          (i.flags &= 32767), (Ke = i);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Qe = 6), (Ke = null);
          return;
        }
      } else if (((i = C1(i, n, At)), i !== null)) {
        Ke = i;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        Ke = n;
        return;
      }
      Ke = n = e;
    } while (n !== null);
    Qe === 0 && (Qe = 5);
  }
  function _r(e, n, i) {
    var a = ke,
      d = Ft.transition;
    try {
      (Ft.transition = null), (ke = 1), O1(e, n, i, a);
    } finally {
      (Ft.transition = d), (ke = a);
    }
    return null;
  }
  function O1(e, n, i, a) {
    do go();
    while (Xn !== null);
    if (Ae & 6) throw Error(o(327));
    i = e.finishedWork;
    var d = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var p = i.lanes | i.childLanes;
    if (
      (p0(e, p),
      e === qe && ((Ke = qe = null), (et = 0)),
      (!(i.subtreeFlags & 2064) && !(i.flags & 2064)) ||
        Ys ||
        ((Ys = !0),
        uh(ns, function () {
          return go(), null;
        })),
      (p = (i.flags & 15990) !== 0),
      i.subtreeFlags & 15990 || p)
    ) {
      (p = Ft.transition), (Ft.transition = null);
      var y = ke;
      ke = 1;
      var P = Ae;
      (Ae |= 4),
        (vu.current = null),
        b1(e, i),
        Qp(i, e),
        J0(bl),
        (us = !!Al),
        (bl = Al = null),
        (e.current = i),
        R1(i),
        o0(),
        (Ae = P),
        (ke = y),
        (Ft.transition = p);
    } else e.current = i;
    if (
      (Ys && ((Ys = !1), (Xn = e), (Qs = d)),
      (p = e.pendingLanes),
      p === 0 && (Qn = null),
      a0(i.stateNode),
      vt(e, We()),
      n !== null)
    )
      for (a = e.onRecoverableError, i = 0; i < n.length; i++)
        (d = n[i]), a(d.value, { componentStack: d.stack, digest: d.digest });
    if (Ks) throw ((Ks = !1), (e = Su), (Su = null), e);
    return (
      Qs & 1 && e.tag !== 0 && go(),
      (p = e.pendingLanes),
      p & 1 ? (e === Eu ? Si++ : ((Si = 0), (Eu = e))) : (Si = 0),
      $n(),
      null
    );
  }
  function go() {
    if (Xn !== null) {
      var e = Gd(Qs),
        n = Ft.transition,
        i = ke;
      try {
        if (((Ft.transition = null), (ke = 16 > e ? 16 : e), Xn === null))
          var a = !1;
        else {
          if (((e = Xn), (Xn = null), (Qs = 0), Ae & 6)) throw Error(o(331));
          var d = Ae;
          for (Ae |= 4, ne = e.current; ne !== null; ) {
            var p = ne,
              y = p.child;
            if (ne.flags & 16) {
              var P = p.deletions;
              if (P !== null) {
                for (var A = 0; A < P.length; A++) {
                  var D = P[A];
                  for (ne = D; ne !== null; ) {
                    var H = ne;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vi(8, H, p);
                    }
                    var K = H.child;
                    if (K !== null) (K.return = H), (ne = K);
                    else
                      for (; ne !== null; ) {
                        H = ne;
                        var U = H.sibling,
                          ee = H.return;
                        if ((Hp(H), H === D)) {
                          ne = null;
                          break;
                        }
                        if (U !== null) {
                          (U.return = ee), (ne = U);
                          break;
                        }
                        ne = ee;
                      }
                  }
                }
                var ie = p.alternate;
                if (ie !== null) {
                  var ae = ie.child;
                  if (ae !== null) {
                    ie.child = null;
                    do {
                      var He = ae.sibling;
                      (ae.sibling = null), (ae = He);
                    } while (ae !== null);
                  }
                }
                ne = p;
              }
            }
            if (p.subtreeFlags & 2064 && y !== null) (y.return = p), (ne = y);
            else
              e: for (; ne !== null; ) {
                if (((p = ne), p.flags & 2048))
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vi(9, p, p.return);
                  }
                var _ = p.sibling;
                if (_ !== null) {
                  (_.return = p.return), (ne = _);
                  break e;
                }
                ne = p.return;
              }
          }
          var R = e.current;
          for (ne = R; ne !== null; ) {
            y = ne;
            var O = y.child;
            if (y.subtreeFlags & 2064 && O !== null) (O.return = y), (ne = O);
            else
              e: for (y = R; ne !== null; ) {
                if (((P = ne), P.flags & 2048))
                  try {
                    switch (P.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hs(9, P);
                    }
                  } catch (le) {
                    ze(P, P.return, le);
                  }
                if (P === y) {
                  ne = null;
                  break e;
                }
                var Q = P.sibling;
                if (Q !== null) {
                  (Q.return = P.return), (ne = Q);
                  break e;
                }
                ne = P.return;
              }
          }
          if (
            ((Ae = d),
            $n(),
            tn && typeof tn.onPostCommitFiberRoot == "function")
          )
            try {
              tn.onPostCommitFiberRoot(rs, e);
            } catch {}
          a = !0;
        }
        return a;
      } finally {
        (ke = i), (Ft.transition = n);
      }
    }
    return !1;
  }
  function sh(e, n, i) {
    (n = fo(i, n)),
      (n = Cp(e, n, 1)),
      (e = Kn(e, n, 1)),
      (n = ft()),
      e !== null && ($o(e, 1, n), vt(e, n));
  }
  function ze(e, n, i) {
    if (e.tag === 3) sh(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          sh(n, e, i);
          break;
        } else if (n.tag === 1) {
          var a = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Qn === null || !Qn.has(a)))
          ) {
            (e = fo(i, e)),
              (e = Tp(n, e, 1)),
              (n = Kn(n, e, 1)),
              (e = ft()),
              n !== null && ($o(n, 1, e), vt(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function M1(e, n, i) {
    var a = e.pingCache;
    a !== null && a.delete(n),
      (n = ft()),
      (e.pingedLanes |= e.suspendedLanes & i),
      qe === e &&
        (et & i) === i &&
        (Qe === 4 || (Qe === 3 && (et & 130023424) === et && 500 > We() - wu)
          ? Nr(e, 0)
          : (xu |= i)),
      vt(e, n);
  }
  function ah(e, n) {
    n === 0 &&
      (e.mode & 1
        ? ((n = is), (is <<= 1), !(is & 130023424) && (is = 4194304))
        : (n = 1));
    var i = ft();
    (e = xn(e, n)), e !== null && ($o(e, n, i), vt(e, i));
  }
  function I1(e) {
    var n = e.memoizedState,
      i = 0;
    n !== null && (i = n.retryLane), ah(e, i);
  }
  function D1(e, n) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          d = e.memoizedState;
        d !== null && (i = d.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(n), ah(e, i);
  }
  var lh;
  lh = function (e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || ht.current) gt = !0;
      else {
        if (!(e.lanes & i) && !(n.flags & 128)) return (gt = !1), P1(e, n, i);
        gt = !!(e.flags & 131072);
      }
    else (gt = !1), De && n.flags & 1048576 && zf(n, bs, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var a = n.type;
        Us(e, n), (e = n.pendingProps);
        var d = ro(n, rt.current);
        uo(n, i), (d = ql(null, n, a, e, d, i));
        var p = Zl();
        return (
          (n.flags |= 1),
          typeof d == "object" &&
          d !== null &&
          typeof d.render == "function" &&
          d.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              mt(a) ? ((p = !0), Cs(n)) : (p = !1),
              (n.memoizedState =
                d.state !== null && d.state !== void 0 ? d.state : null),
              Hl(n),
              (d.updater = Bs),
              (n.stateNode = d),
              (d._reactInternals = n),
              ou(n, a, e, i),
              (n = lu(null, n, a, !0, p, i)))
            : ((n.tag = 0), De && p && Ml(n), dt(null, n, d, i), (n = n.child)),
          n
        );
      case 16:
        a = n.elementType;
        e: {
          switch (
            (Us(e, n),
            (e = n.pendingProps),
            (d = a._init),
            (a = d(a._payload)),
            (n.type = a),
            (d = n.tag = F1(a)),
            (e = Gt(a, e)),
            d)
          ) {
            case 0:
              n = au(null, n, a, e, i);
              break e;
            case 1:
              n = Mp(null, n, a, e, i);
              break e;
            case 11:
              n = kp(null, n, a, e, i);
              break e;
            case 14:
              n = Np(null, n, a, Gt(a.type, e), i);
              break e;
          }
          throw Error(o(306, a, ""));
        }
        return n;
      case 0:
        return (
          (a = n.type),
          (d = n.pendingProps),
          (d = n.elementType === a ? d : Gt(a, d)),
          au(e, n, a, d, i)
        );
      case 1:
        return (
          (a = n.type),
          (d = n.pendingProps),
          (d = n.elementType === a ? d : Gt(a, d)),
          Mp(e, n, a, d, i)
        );
      case 3:
        e: {
          if ((Ip(n), e === null)) throw Error(o(387));
          (a = n.pendingProps),
            (p = n.memoizedState),
            (d = p.element),
            Xf(e, n),
            Os(n, a, null, i);
          var y = n.memoizedState;
          if (((a = y.element), p.isDehydrated))
            if (
              ((p = {
                element: a,
                isDehydrated: !1,
                cache: y.cache,
                pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                transitions: y.transitions,
              }),
              (n.updateQueue.baseState = p),
              (n.memoizedState = p),
              n.flags & 256)
            ) {
              (d = fo(Error(o(423)), n)), (n = Dp(e, n, a, i, d));
              break e;
            } else if (a !== d) {
              (d = fo(Error(o(424)), n)), (n = Dp(e, n, a, i, d));
              break e;
            } else
              for (
                Tt = Un(n.stateNode.containerInfo.firstChild),
                  Ct = n,
                  De = !0,
                  $t = null,
                  i = Yf(n, null, a, i),
                  n.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
          else {
            if ((so(), a === d)) {
              n = Sn(e, n, i);
              break e;
            }
            dt(e, n, a, i);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          Jf(n),
          e === null && Vl(n),
          (a = n.type),
          (d = n.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (y = d.children),
          Rl(a, d) ? (y = null) : p !== null && Rl(a, p) && (n.flags |= 32),
          Op(e, n),
          dt(e, n, y, i),
          n.child
        );
      case 6:
        return e === null && Vl(n), null;
      case 13:
        return Vp(e, n, i);
      case 4:
        return (
          $l(n, n.stateNode.containerInfo),
          (a = n.pendingProps),
          e === null ? (n.child = ao(n, null, a, i)) : dt(e, n, a, i),
          n.child
        );
      case 11:
        return (
          (a = n.type),
          (d = n.pendingProps),
          (d = n.elementType === a ? d : Gt(a, d)),
          kp(e, n, a, d, i)
        );
      case 7:
        return dt(e, n, n.pendingProps, i), n.child;
      case 8:
        return dt(e, n, n.pendingProps.children, i), n.child;
      case 12:
        return dt(e, n, n.pendingProps.children, i), n.child;
      case 10:
        e: {
          if (
            ((a = n.type._context),
            (d = n.pendingProps),
            (p = n.memoizedProps),
            (y = d.value),
            Le(Ns, a._currentValue),
            (a._currentValue = y),
            p !== null)
          )
            if (Ht(p.value, y)) {
              if (p.children === d.children && !ht.current) {
                n = Sn(e, n, i);
                break e;
              }
            } else
              for (p = n.child, p !== null && (p.return = n); p !== null; ) {
                var P = p.dependencies;
                if (P !== null) {
                  y = p.child;
                  for (var A = P.firstContext; A !== null; ) {
                    if (A.context === a) {
                      if (p.tag === 1) {
                        (A = wn(-1, i & -i)), (A.tag = 2);
                        var D = p.updateQueue;
                        if (D !== null) {
                          D = D.shared;
                          var H = D.pending;
                          H === null
                            ? (A.next = A)
                            : ((A.next = H.next), (H.next = A)),
                            (D.pending = A);
                        }
                      }
                      (p.lanes |= i),
                        (A = p.alternate),
                        A !== null && (A.lanes |= i),
                        Ul(p.return, i, n),
                        (P.lanes |= i);
                      break;
                    }
                    A = A.next;
                  }
                } else if (p.tag === 10) y = p.type === n.type ? null : p.child;
                else if (p.tag === 18) {
                  if (((y = p.return), y === null)) throw Error(o(341));
                  (y.lanes |= i),
                    (P = y.alternate),
                    P !== null && (P.lanes |= i),
                    Ul(y, i, n),
                    (y = p.sibling);
                } else y = p.child;
                if (y !== null) y.return = p;
                else
                  for (y = p; y !== null; ) {
                    if (y === n) {
                      y = null;
                      break;
                    }
                    if (((p = y.sibling), p !== null)) {
                      (p.return = y.return), (y = p);
                      break;
                    }
                    y = y.return;
                  }
                p = y;
              }
          dt(e, n, d.children, i), (n = n.child);
        }
        return n;
      case 9:
        return (
          (d = n.type),
          (a = n.pendingProps.children),
          uo(n, i),
          (d = Dt(d)),
          (a = a(d)),
          (n.flags |= 1),
          dt(e, n, a, i),
          n.child
        );
      case 14:
        return (
          (a = n.type),
          (d = Gt(a, n.pendingProps)),
          (d = Gt(a.type, d)),
          Np(e, n, a, d, i)
        );
      case 15:
        return _p(e, n, n.type, n.pendingProps, i);
      case 17:
        return (
          (a = n.type),
          (d = n.pendingProps),
          (d = n.elementType === a ? d : Gt(a, d)),
          Us(e, n),
          (n.tag = 1),
          mt(a) ? ((e = !0), Cs(n)) : (e = !1),
          uo(n, i),
          Ep(n, a, d),
          ou(n, a, d, i),
          lu(null, n, a, !0, e, i)
        );
      case 19:
        return jp(e, n, i);
      case 22:
        return Lp(e, n, i);
    }
    throw Error(o(156, n.tag));
  };
  function uh(e, n) {
    return zd(e, n);
  }
  function V1(e, n, i, a) {
    (this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function jt(e, n, i, a) {
    return new V1(e, n, i, a);
  }
  function Ru(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function F1(e) {
    if (typeof e == "function") return Ru(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === re)) return 11;
      if (e === te) return 14;
    }
    return 2;
  }
  function Jn(e, n) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = jt(e.tag, n, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = n),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 14680064),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (i.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      i
    );
  }
  function Js(e, n, i, a, d, p) {
    var y = 2;
    if (((a = e), typeof e == "function")) Ru(e) && (y = 1);
    else if (typeof e == "string") y = 5;
    else
      e: switch (e) {
        case Y:
          return Lr(i.children, d, p, n);
        case X:
          (y = 8), (d |= 8);
          break;
        case ue:
          return (
            (e = jt(12, i, n, d | 2)), (e.elementType = ue), (e.lanes = p), e
          );
        case ve:
          return (e = jt(13, i, n, d)), (e.elementType = ve), (e.lanes = p), e;
        case $:
          return (e = jt(19, i, n, d)), (e.elementType = $), (e.lanes = p), e;
        case z:
          return ea(i, d, p, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ce:
                y = 10;
                break e;
              case we:
                y = 9;
                break e;
              case re:
                y = 11;
                break e;
              case te:
                y = 14;
                break e;
              case q:
                (y = 16), (a = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (n = jt(y, i, n, d)), (n.elementType = e), (n.type = a), (n.lanes = p), n
    );
  }
  function Lr(e, n, i, a) {
    return (e = jt(7, e, a, n)), (e.lanes = i), e;
  }
  function ea(e, n, i, a) {
    return (
      (e = jt(22, e, a, n)),
      (e.elementType = z),
      (e.lanes = i),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ku(e, n, i) {
    return (e = jt(6, e, null, n)), (e.lanes = i), e;
  }
  function Nu(e, n, i) {
    return (
      (n = jt(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = i),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function j1(e, n, i, a, d) {
    (this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = rl(0)),
      (this.expirationTimes = rl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = rl(0)),
      (this.identifierPrefix = a),
      (this.onRecoverableError = d),
      (this.mutableSourceEagerHydrationData = null);
  }
  function _u(e, n, i, a, d, p, y, P, A) {
    return (
      (e = new j1(e, n, i, P, A)),
      n === 1 ? ((n = 1), p === !0 && (n |= 8)) : (n = 0),
      (p = jt(3, null, null, n)),
      (e.current = p),
      (p.stateNode = e),
      (p.memoizedState = {
        element: a,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Hl(p),
      e
    );
  }
  function B1(e, n, i) {
    var a =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: W,
      key: a == null ? null : "" + a,
      children: e,
      containerInfo: n,
      implementation: i,
    };
  }
  function ch(e) {
    if (!e) return Hn;
    e = e._reactInternals;
    e: {
      if (wr(e) !== e || e.tag !== 1) throw Error(o(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (mt(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (mt(i)) return Ff(e, i, n);
    }
    return n;
  }
  function dh(e, n, i, a, d, p, y, P, A) {
    return (
      (e = _u(i, a, !0, e, d, p, y, P, A)),
      (e.context = ch(null)),
      (i = e.current),
      (a = ft()),
      (d = qn(i)),
      (p = wn(a, d)),
      (p.callback = n ?? null),
      Kn(i, p, d),
      (e.current.lanes = d),
      $o(e, d, a),
      vt(e, a),
      e
    );
  }
  function ta(e, n, i, a) {
    var d = n.current,
      p = ft(),
      y = qn(d);
    return (
      (i = ch(i)),
      n.context === null ? (n.context = i) : (n.pendingContext = i),
      (n = wn(p, y)),
      (n.payload = { element: e }),
      (a = a === void 0 ? null : a),
      a !== null && (n.callback = a),
      (e = Kn(d, n, y)),
      e !== null && (Qt(e, d, y, p), Ls(e, d, y)),
      y
    );
  }
  function na(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function fh(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Lu(e, n) {
    fh(e, n), (e = e.alternate) && fh(e, n);
  }
  function z1() {
    return null;
  }
  var ph =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ou(e) {
    this._internalRoot = e;
  }
  (ra.prototype.render = Ou.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(o(409));
      ta(e, n, null, null);
    }),
    (ra.prototype.unmount = Ou.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          kr(function () {
            ta(null, e, null, null);
          }),
            (n[mn] = null);
        }
      });
  function ra(e) {
    this._internalRoot = e;
  }
  ra.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = Qd();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < jn.length && n !== 0 && n < jn[i].priority; i++);
      jn.splice(i, 0, e), i === 0 && Zd(e);
    }
  };
  function Mu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function oa(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function hh() {}
  function U1(e, n, i, a, d) {
    if (d) {
      if (typeof a == "function") {
        var p = a;
        a = function () {
          var D = na(y);
          p.call(D);
        };
      }
      var y = dh(n, a, e, 0, null, !1, !1, "", hh);
      return (
        (e._reactRootContainer = y),
        (e[mn] = y.current),
        ii(e.nodeType === 8 ? e.parentNode : e),
        kr(),
        y
      );
    }
    for (; (d = e.lastChild); ) e.removeChild(d);
    if (typeof a == "function") {
      var P = a;
      a = function () {
        var D = na(A);
        P.call(D);
      };
    }
    var A = _u(e, 0, !1, null, null, !1, !1, "", hh);
    return (
      (e._reactRootContainer = A),
      (e[mn] = A.current),
      ii(e.nodeType === 8 ? e.parentNode : e),
      kr(function () {
        ta(n, A, i, a);
      }),
      A
    );
  }
  function ia(e, n, i, a, d) {
    var p = i._reactRootContainer;
    if (p) {
      var y = p;
      if (typeof d == "function") {
        var P = d;
        d = function () {
          var A = na(y);
          P.call(A);
        };
      }
      ta(n, y, e, d);
    } else y = U1(i, n, e, d, a);
    return na(y);
  }
  (Kd = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var i = Ho(n.pendingLanes);
          i !== 0 &&
            (ol(n, i | 1), vt(n, We()), !(Ae & 6) && ((mo = We() + 500), $n()));
        }
        break;
      case 13:
        kr(function () {
          var a = xn(e, 1);
          if (a !== null) {
            var d = ft();
            Qt(a, e, 1, d);
          }
        }),
          Lu(e, 1);
    }
  }),
    (il = function (e) {
      if (e.tag === 13) {
        var n = xn(e, 134217728);
        if (n !== null) {
          var i = ft();
          Qt(n, e, 134217728, i);
        }
        Lu(e, 134217728);
      }
    }),
    (Yd = function (e) {
      if (e.tag === 13) {
        var n = qn(e),
          i = xn(e, n);
        if (i !== null) {
          var a = ft();
          Qt(i, e, n, a);
        }
        Lu(e, n);
      }
    }),
    (Qd = function () {
      return ke;
    }),
    (Xd = function (e, n) {
      var i = ke;
      try {
        return (ke = e), n();
      } finally {
        ke = i;
      }
    }),
    (Bo = function (e, n, i) {
      switch (n) {
        case "input":
          if ((Ln(e, i), (n = i.name), i.type === "radio" && n != null)) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
              ),
                n = 0;
              n < i.length;
              n++
            ) {
              var a = i[n];
              if (a !== e && a.form === e.form) {
                var d = Es(a);
                if (!d) throw Error(o(90));
                yr(a), Ln(a, d);
              }
            }
          }
          break;
        case "textarea":
          hn(e, i);
          break;
        case "select":
          (n = i.value), n != null && On(e, !!i.multiple, n, !1);
      }
    }),
    (xr = Tu),
    (Ji = kr);
  var W1 = { usingClientEntryPoint: !1, Events: [li, to, Es, pt, Et, Tu] },
    Ei = {
      findFiberByHostInstance: Sr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    H1 = {
      bundleType: Ei.bundleType,
      version: Ei.version,
      rendererPackageName: Ei.rendererPackageName,
      rendererConfig: Ei.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: N.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = jd(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ei.findFiberByHostInstance || z1,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var sa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!sa.isDisabled && sa.supportsFiber)
      try {
        (rs = sa.inject(H1)), (tn = sa);
      } catch {}
  }
  return (
    (xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W1),
    (xt.createPortal = function (e, n) {
      var i =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Mu(n)) throw Error(o(200));
      return B1(e, n, null, i);
    }),
    (xt.createRoot = function (e, n) {
      if (!Mu(e)) throw Error(o(299));
      var i = !1,
        a = "",
        d = ph;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (d = n.onRecoverableError)),
        (n = _u(e, 1, !1, null, null, i, !1, a, d)),
        (e[mn] = n.current),
        ii(e.nodeType === 8 ? e.parentNode : e),
        new Ou(n)
      );
    }),
    (xt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = jd(n)), (e = e === null ? null : e.stateNode), e;
    }),
    (xt.flushSync = function (e) {
      return kr(e);
    }),
    (xt.hydrate = function (e, n, i) {
      if (!oa(n)) throw Error(o(200));
      return ia(null, e, n, !0, i);
    }),
    (xt.hydrateRoot = function (e, n, i) {
      if (!Mu(e)) throw Error(o(405));
      var a = (i != null && i.hydratedSources) || null,
        d = !1,
        p = "",
        y = ph;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (d = !0),
          i.identifierPrefix !== void 0 && (p = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (y = i.onRecoverableError)),
        (n = dh(n, null, e, 1, i ?? null, d, !1, p, y)),
        (e[mn] = n.current),
        ii(e),
        a)
      )
        for (e = 0; e < a.length; e++)
          (i = a[e]),
            (d = i._getVersion),
            (d = d(i._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [i, d])
              : n.mutableSourceEagerHydrationData.push(i, d);
      return new ra(n);
    }),
    (xt.render = function (e, n, i) {
      if (!oa(n)) throw Error(o(200));
      return ia(null, e, n, !1, i);
    }),
    (xt.unmountComponentAtNode = function (e) {
      if (!oa(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (kr(function () {
            ia(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[mn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (xt.unstable_batchedUpdates = Tu),
    (xt.unstable_renderSubtreeIntoContainer = function (e, n, i, a) {
      if (!oa(i)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return ia(e, n, i, !1, a);
    }),
    (xt.version = "18.3.1-next-f1338f8080-20240426"),
    xt
  );
}
var Eh;
function dg() {
  if (Eh) return Vu.exports;
  Eh = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), (Vu.exports = J1()), Vu.exports;
}
var Ph;
function ex() {
  if (Ph) return aa;
  Ph = 1;
  var t = dg();
  return (aa.createRoot = t.createRoot), (aa.hydrateRoot = t.hydrateRoot), aa;
}
var tx = ex();
function fg(t) {
  var r,
    o,
    s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var l = t.length;
      for (r = 0; r < l; r++)
        t[r] && (o = fg(t[r])) && (s && (s += " "), (s += o));
    } else for (o in t) t[o] && (s && (s += " "), (s += o));
  return s;
}
function nx() {
  for (var t, r, o = 0, s = "", l = arguments.length; o < l; o++)
    (t = arguments[o]) && (r = fg(t)) && (s && (s += " "), (s += r));
  return s;
}
const Bc = "-",
  rx = (t) => {
    const r = ix(t),
      { conflictingClassGroups: o, conflictingClassGroupModifiers: s } = t;
    return {
      getClassGroupId: (c) => {
        const f = c.split(Bc);
        return f[0] === "" && f.length !== 1 && f.shift(), pg(f, r) || ox(c);
      },
      getConflictingClassGroupIds: (c, f) => {
        const h = o[c] || [];
        return f && s[c] ? [...h, ...s[c]] : h;
      },
    };
  },
  pg = (t, r) => {
    var c;
    if (t.length === 0) return r.classGroupId;
    const o = t[0],
      s = r.nextPart.get(o),
      l = s ? pg(t.slice(1), s) : void 0;
    if (l) return l;
    if (r.validators.length === 0) return;
    const u = t.join(Bc);
    return (c = r.validators.find(({ validator: f }) => f(u))) == null
      ? void 0
      : c.classGroupId;
  },
  Ch = /^\[(.+)\]$/,
  ox = (t) => {
    if (Ch.test(t)) {
      const r = Ch.exec(t)[1],
        o = r == null ? void 0 : r.substring(0, r.indexOf(":"));
      if (o) return "arbitrary.." + o;
    }
  },
  ix = (t) => {
    const { theme: r, prefix: o } = t,
      s = { nextPart: new Map(), validators: [] };
    return (
      ax(Object.entries(t.classGroups), o).forEach(([u, c]) => {
        uc(c, s, u, r);
      }),
      s
    );
  },
  uc = (t, r, o, s) => {
    t.forEach((l) => {
      if (typeof l == "string") {
        const u = l === "" ? r : Th(r, l);
        u.classGroupId = o;
        return;
      }
      if (typeof l == "function") {
        if (sx(l)) {
          uc(l(s), r, o, s);
          return;
        }
        r.validators.push({ validator: l, classGroupId: o });
        return;
      }
      Object.entries(l).forEach(([u, c]) => {
        uc(c, Th(r, u), o, s);
      });
    });
  },
  Th = (t, r) => {
    let o = t;
    return (
      r.split(Bc).forEach((s) => {
        o.nextPart.has(s) ||
          o.nextPart.set(s, { nextPart: new Map(), validators: [] }),
          (o = o.nextPart.get(s));
      }),
      o
    );
  },
  sx = (t) => t.isThemeGetter,
  ax = (t, r) =>
    r
      ? t.map(([o, s]) => {
          const l = s.map((u) =>
            typeof u == "string"
              ? r + u
              : typeof u == "object"
              ? Object.fromEntries(
                  Object.entries(u).map(([c, f]) => [r + c, f])
                )
              : u
          );
          return [o, l];
        })
      : t,
  lx = (t) => {
    if (t < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      o = new Map(),
      s = new Map();
    const l = (u, c) => {
      o.set(u, c), r++, r > t && ((r = 0), (s = o), (o = new Map()));
    };
    return {
      get(u) {
        let c = o.get(u);
        if (c !== void 0) return c;
        if ((c = s.get(u)) !== void 0) return l(u, c), c;
      },
      set(u, c) {
        o.has(u) ? o.set(u, c) : l(u, c);
      },
    };
  },
  hg = "!",
  ux = (t) => {
    const { separator: r, experimentalParseClassName: o } = t,
      s = r.length === 1,
      l = r[0],
      u = r.length,
      c = (f) => {
        const h = [];
        let m = 0,
          g = 0,
          v;
        for (let T = 0; T < f.length; T++) {
          let b = f[T];
          if (m === 0) {
            if (b === l && (s || f.slice(T, T + u) === r)) {
              h.push(f.slice(g, T)), (g = T + u);
              continue;
            }
            if (b === "/") {
              v = T;
              continue;
            }
          }
          b === "[" ? m++ : b === "]" && m--;
        }
        const w = h.length === 0 ? f : f.substring(g),
          x = w.startsWith(hg),
          C = x ? w.substring(1) : w,
          E = v && v > g ? v - g : void 0;
        return {
          modifiers: h,
          hasImportantModifier: x,
          baseClassName: C,
          maybePostfixModifierPosition: E,
        };
      };
    return o ? (f) => o({ className: f, parseClassName: c }) : c;
  },
  cx = (t) => {
    if (t.length <= 1) return t;
    const r = [];
    let o = [];
    return (
      t.forEach((s) => {
        s[0] === "[" ? (r.push(...o.sort(), s), (o = [])) : o.push(s);
      }),
      r.push(...o.sort()),
      r
    );
  },
  dx = (t) => ({ cache: lx(t.cacheSize), parseClassName: ux(t), ...rx(t) }),
  fx = /\s+/,
  px = (t, r) => {
    const {
        parseClassName: o,
        getClassGroupId: s,
        getConflictingClassGroupIds: l,
      } = r,
      u = [],
      c = t.trim().split(fx);
    let f = "";
    for (let h = c.length - 1; h >= 0; h -= 1) {
      const m = c[h],
        {
          modifiers: g,
          hasImportantModifier: v,
          baseClassName: w,
          maybePostfixModifierPosition: x,
        } = o(m);
      let C = !!x,
        E = s(C ? w.substring(0, x) : w);
      if (!E) {
        if (!C) {
          f = m + (f.length > 0 ? " " + f : f);
          continue;
        }
        if (((E = s(w)), !E)) {
          f = m + (f.length > 0 ? " " + f : f);
          continue;
        }
        C = !1;
      }
      const T = cx(g).join(":"),
        b = v ? T + hg : T,
        L = b + E;
      if (u.includes(L)) continue;
      u.push(L);
      const M = l(E, C);
      for (let N = 0; N < M.length; ++N) {
        const V = M[N];
        u.push(b + V);
      }
      f = m + (f.length > 0 ? " " + f : f);
    }
    return f;
  };
function hx() {
  let t = 0,
    r,
    o,
    s = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (o = mg(r)) && (s && (s += " "), (s += o));
  return s;
}
const mg = (t) => {
  if (typeof t == "string") return t;
  let r,
    o = "";
  for (let s = 0; s < t.length; s++)
    t[s] && (r = mg(t[s])) && (o && (o += " "), (o += r));
  return o;
};
function mx(t, ...r) {
  let o,
    s,
    l,
    u = c;
  function c(h) {
    const m = r.reduce((g, v) => v(g), t());
    return (o = dx(m)), (s = o.cache.get), (l = o.cache.set), (u = f), f(h);
  }
  function f(h) {
    const m = s(h);
    if (m) return m;
    const g = px(h, o);
    return l(h, g), g;
  }
  return function () {
    return u(hx.apply(null, arguments));
  };
}
const Ie = (t) => {
    const r = (o) => o[t] || [];
    return (r.isThemeGetter = !0), r;
  },
  gg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  gx = /^\d+\/\d+$/,
  yx = new Set(["px", "full", "screen"]),
  vx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  xx =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  wx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Sx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Ex =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Pn = (t) => To(t) || yx.has(t) || gx.test(t),
  tr = (t) => Oo(t, "length", Nx),
  To = (t) => !!t && !Number.isNaN(Number(t)),
  Bu = (t) => Oo(t, "number", To),
  Ci = (t) => !!t && Number.isInteger(Number(t)),
  Px = (t) => t.endsWith("%") && To(t.slice(0, -1)),
  Se = (t) => gg.test(t),
  nr = (t) => vx.test(t),
  Cx = new Set(["length", "size", "percentage"]),
  Tx = (t) => Oo(t, Cx, yg),
  Ax = (t) => Oo(t, "position", yg),
  bx = new Set(["image", "url"]),
  Rx = (t) => Oo(t, bx, Lx),
  kx = (t) => Oo(t, "", _x),
  Ti = () => !0,
  Oo = (t, r, o) => {
    const s = gg.exec(t);
    return s
      ? s[1]
        ? typeof r == "string"
          ? s[1] === r
          : r.has(s[1])
        : o(s[2])
      : !1;
  },
  Nx = (t) => xx.test(t) && !wx.test(t),
  yg = () => !1,
  _x = (t) => Sx.test(t),
  Lx = (t) => Ex.test(t),
  Ox = () => {
    const t = Ie("colors"),
      r = Ie("spacing"),
      o = Ie("blur"),
      s = Ie("brightness"),
      l = Ie("borderColor"),
      u = Ie("borderRadius"),
      c = Ie("borderSpacing"),
      f = Ie("borderWidth"),
      h = Ie("contrast"),
      m = Ie("grayscale"),
      g = Ie("hueRotate"),
      v = Ie("invert"),
      w = Ie("gap"),
      x = Ie("gradientColorStops"),
      C = Ie("gradientColorStopPositions"),
      E = Ie("inset"),
      T = Ie("margin"),
      b = Ie("opacity"),
      L = Ie("padding"),
      M = Ie("saturate"),
      N = Ie("scale"),
      V = Ie("sepia"),
      W = Ie("skew"),
      Y = Ie("space"),
      X = Ie("translate"),
      ue = () => ["auto", "contain", "none"],
      ce = () => ["auto", "hidden", "clip", "visible", "scroll"],
      we = () => ["auto", Se, r],
      re = () => [Se, r],
      ve = () => ["", Pn, tr],
      $ = () => ["auto", To, Se],
      te = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      q = () => ["solid", "dashed", "dotted", "double", "none"],
      z = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      F = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      B = () => ["", "0", Se],
      G = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      k = () => [To, Se];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Ti],
        spacing: [Pn, tr],
        blur: ["none", "", nr, Se],
        brightness: k(),
        borderColor: [t],
        borderRadius: ["none", "", "full", nr, Se],
        borderSpacing: re(),
        borderWidth: ve(),
        contrast: k(),
        grayscale: B(),
        hueRotate: k(),
        invert: B(),
        gap: re(),
        gradientColorStops: [t],
        gradientColorStopPositions: [Px, tr],
        inset: we(),
        margin: we(),
        opacity: k(),
        padding: re(),
        saturate: k(),
        scale: k(),
        sepia: B(),
        skew: k(),
        space: re(),
        translate: re(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Se] }],
        container: ["container"],
        columns: [{ columns: [nr] }],
        "break-after": [{ "break-after": G() }],
        "break-before": [{ "break-before": G() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...te(), Se] }],
        overflow: [{ overflow: ce() }],
        "overflow-x": [{ "overflow-x": ce() }],
        "overflow-y": [{ "overflow-y": ce() }],
        overscroll: [{ overscroll: ue() }],
        "overscroll-x": [{ "overscroll-x": ue() }],
        "overscroll-y": [{ "overscroll-y": ue() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [E] }],
        "inset-x": [{ "inset-x": [E] }],
        "inset-y": [{ "inset-y": [E] }],
        start: [{ start: [E] }],
        end: [{ end: [E] }],
        top: [{ top: [E] }],
        right: [{ right: [E] }],
        bottom: [{ bottom: [E] }],
        left: [{ left: [E] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Ci, Se] }],
        basis: [{ basis: we() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Se] }],
        grow: [{ grow: B() }],
        shrink: [{ shrink: B() }],
        order: [{ order: ["first", "last", "none", Ci, Se] }],
        "grid-cols": [{ "grid-cols": [Ti] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Ci, Se] }, Se] }],
        "col-start": [{ "col-start": $() }],
        "col-end": [{ "col-end": $() }],
        "grid-rows": [{ "grid-rows": [Ti] }],
        "row-start-end": [{ row: ["auto", { span: [Ci, Se] }, Se] }],
        "row-start": [{ "row-start": $() }],
        "row-end": [{ "row-end": $() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Se] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Se] }],
        gap: [{ gap: [w] }],
        "gap-x": [{ "gap-x": [w] }],
        "gap-y": [{ "gap-y": [w] }],
        "justify-content": [{ justify: ["normal", ...F()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...F(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...F(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [L] }],
        px: [{ px: [L] }],
        py: [{ py: [L] }],
        ps: [{ ps: [L] }],
        pe: [{ pe: [L] }],
        pt: [{ pt: [L] }],
        pr: [{ pr: [L] }],
        pb: [{ pb: [L] }],
        pl: [{ pl: [L] }],
        m: [{ m: [T] }],
        mx: [{ mx: [T] }],
        my: [{ my: [T] }],
        ms: [{ ms: [T] }],
        me: [{ me: [T] }],
        mt: [{ mt: [T] }],
        mr: [{ mr: [T] }],
        mb: [{ mb: [T] }],
        ml: [{ ml: [T] }],
        "space-x": [{ "space-x": [Y] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [Y] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Se, r] }],
        "min-w": [{ "min-w": [Se, r, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Se,
              r,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [nr] },
              nr,
            ],
          },
        ],
        h: [{ h: [Se, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Se, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Se, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Se, r, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", nr, tr] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Bu,
            ],
          },
        ],
        "font-family": [{ font: [Ti] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              Se,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", To, Bu] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Pn,
              Se,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Se] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Se] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [t] }],
        "placeholder-opacity": [{ "placeholder-opacity": [b] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [t] }],
        "text-opacity": [{ "text-opacity": [b] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...q(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Pn, tr] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Pn, Se] }],
        "text-decoration-color": [{ decoration: [t] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: re() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Se,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Se] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [b] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...te(), Ax] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Tx] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Rx,
            ],
          },
        ],
        "bg-color": [{ bg: [t] }],
        "gradient-from-pos": [{ from: [C] }],
        "gradient-via-pos": [{ via: [C] }],
        "gradient-to-pos": [{ to: [C] }],
        "gradient-from": [{ from: [x] }],
        "gradient-via": [{ via: [x] }],
        "gradient-to": [{ to: [x] }],
        rounded: [{ rounded: [u] }],
        "rounded-s": [{ "rounded-s": [u] }],
        "rounded-e": [{ "rounded-e": [u] }],
        "rounded-t": [{ "rounded-t": [u] }],
        "rounded-r": [{ "rounded-r": [u] }],
        "rounded-b": [{ "rounded-b": [u] }],
        "rounded-l": [{ "rounded-l": [u] }],
        "rounded-ss": [{ "rounded-ss": [u] }],
        "rounded-se": [{ "rounded-se": [u] }],
        "rounded-ee": [{ "rounded-ee": [u] }],
        "rounded-es": [{ "rounded-es": [u] }],
        "rounded-tl": [{ "rounded-tl": [u] }],
        "rounded-tr": [{ "rounded-tr": [u] }],
        "rounded-br": [{ "rounded-br": [u] }],
        "rounded-bl": [{ "rounded-bl": [u] }],
        "border-w": [{ border: [f] }],
        "border-w-x": [{ "border-x": [f] }],
        "border-w-y": [{ "border-y": [f] }],
        "border-w-s": [{ "border-s": [f] }],
        "border-w-e": [{ "border-e": [f] }],
        "border-w-t": [{ "border-t": [f] }],
        "border-w-r": [{ "border-r": [f] }],
        "border-w-b": [{ "border-b": [f] }],
        "border-w-l": [{ "border-l": [f] }],
        "border-opacity": [{ "border-opacity": [b] }],
        "border-style": [{ border: [...q(), "hidden"] }],
        "divide-x": [{ "divide-x": [f] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [f] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [b] }],
        "divide-style": [{ divide: q() }],
        "border-color": [{ border: [l] }],
        "border-color-x": [{ "border-x": [l] }],
        "border-color-y": [{ "border-y": [l] }],
        "border-color-s": [{ "border-s": [l] }],
        "border-color-e": [{ "border-e": [l] }],
        "border-color-t": [{ "border-t": [l] }],
        "border-color-r": [{ "border-r": [l] }],
        "border-color-b": [{ "border-b": [l] }],
        "border-color-l": [{ "border-l": [l] }],
        "divide-color": [{ divide: [l] }],
        "outline-style": [{ outline: ["", ...q()] }],
        "outline-offset": [{ "outline-offset": [Pn, Se] }],
        "outline-w": [{ outline: [Pn, tr] }],
        "outline-color": [{ outline: [t] }],
        "ring-w": [{ ring: ve() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [t] }],
        "ring-opacity": [{ "ring-opacity": [b] }],
        "ring-offset-w": [{ "ring-offset": [Pn, tr] }],
        "ring-offset-color": [{ "ring-offset": [t] }],
        shadow: [{ shadow: ["", "inner", "none", nr, kx] }],
        "shadow-color": [{ shadow: [Ti] }],
        opacity: [{ opacity: [b] }],
        "mix-blend": [{ "mix-blend": [...z(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": z() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [o] }],
        brightness: [{ brightness: [s] }],
        contrast: [{ contrast: [h] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", nr, Se] }],
        grayscale: [{ grayscale: [m] }],
        "hue-rotate": [{ "hue-rotate": [g] }],
        invert: [{ invert: [v] }],
        saturate: [{ saturate: [M] }],
        sepia: [{ sepia: [V] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [o] }],
        "backdrop-brightness": [{ "backdrop-brightness": [s] }],
        "backdrop-contrast": [{ "backdrop-contrast": [h] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [m] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [g] }],
        "backdrop-invert": [{ "backdrop-invert": [v] }],
        "backdrop-opacity": [{ "backdrop-opacity": [b] }],
        "backdrop-saturate": [{ "backdrop-saturate": [M] }],
        "backdrop-sepia": [{ "backdrop-sepia": [V] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [c] }],
        "border-spacing-x": [{ "border-spacing-x": [c] }],
        "border-spacing-y": [{ "border-spacing-y": [c] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              Se,
            ],
          },
        ],
        duration: [{ duration: k() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Se] }],
        delay: [{ delay: k() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Se] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [N] }],
        "scale-x": [{ "scale-x": [N] }],
        "scale-y": [{ "scale-y": [N] }],
        rotate: [{ rotate: [Ci, Se] }],
        "translate-x": [{ "translate-x": [X] }],
        "translate-y": [{ "translate-y": [X] }],
        "skew-x": [{ "skew-x": [W] }],
        "skew-y": [{ "skew-y": [W] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              Se,
            ],
          },
        ],
        accent: [{ accent: ["auto", t] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Se,
            ],
          },
        ],
        "caret-color": [{ caret: [t] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": re() }],
        "scroll-mx": [{ "scroll-mx": re() }],
        "scroll-my": [{ "scroll-my": re() }],
        "scroll-ms": [{ "scroll-ms": re() }],
        "scroll-me": [{ "scroll-me": re() }],
        "scroll-mt": [{ "scroll-mt": re() }],
        "scroll-mr": [{ "scroll-mr": re() }],
        "scroll-mb": [{ "scroll-mb": re() }],
        "scroll-ml": [{ "scroll-ml": re() }],
        "scroll-p": [{ "scroll-p": re() }],
        "scroll-px": [{ "scroll-px": re() }],
        "scroll-py": [{ "scroll-py": re() }],
        "scroll-ps": [{ "scroll-ps": re() }],
        "scroll-pe": [{ "scroll-pe": re() }],
        "scroll-pt": [{ "scroll-pt": re() }],
        "scroll-pr": [{ "scroll-pr": re() }],
        "scroll-pb": [{ "scroll-pb": re() }],
        "scroll-pl": [{ "scroll-pl": re() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", Se] },
        ],
        fill: [{ fill: [t, "none"] }],
        "stroke-w": [{ stroke: [Pn, tr, Bu] }],
        stroke: [{ stroke: [t, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Mx = mx(Ox);
function nt(...t) {
  return Mx(nx(t));
}
const Ri = S.forwardRef(({ className: t, ...r }, o) =>
  I.jsx("div", { ref: o, className: nt("card", t), ...r })
);
Ri.displayName = "Card";
const vg = S.forwardRef(({ className: t, ...r }, o) =>
  I.jsx("div", { ref: o, className: nt("card-header", t), ...r })
);
vg.displayName = "CardHeader";
const ki = S.forwardRef(({ className: t, ...r }, o) =>
  I.jsx("div", { ref: o, className: nt("card-title", t), ...r })
);
ki.displayName = "CardTitle";
const Ni = S.forwardRef(({ className: t, ...r }, o) =>
  I.jsx("div", { ref: o, className: nt("card-description", t), ...r })
);
Ni.displayName = "CardDescription";
const cc = S.forwardRef(({ className: t, ...r }, o) =>
  I.jsx("div", { ref: o, className: nt("card-content", t), ...r })
);
cc.displayName = "CardContent";
const wa = S.forwardRef(({ className: t, ...r }, o) =>
  I.jsx("div", { ref: o, className: nt("card-footer", t), ...r })
);
wa.displayName = "CardFooter";
const dc = S.forwardRef(({ className: t, type: r, ...o }, s) =>
  I.jsx("input", {
    type: r,
    className: nt(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t
    ),
    ref: s,
    ...o,
  })
);
dc.displayName = "Input";
function xg(t, r = []) {
  let o = [];
  function s(u, c) {
    const f = S.createContext(c),
      h = o.length;
    o = [...o, c];
    function m(v) {
      const { scope: w, children: x, ...C } = v,
        E = (w == null ? void 0 : w[t][h]) || f,
        T = S.useMemo(() => C, Object.values(C));
      return I.jsx(E.Provider, { value: T, children: x });
    }
    function g(v, w) {
      const x = (w == null ? void 0 : w[t][h]) || f,
        C = S.useContext(x);
      if (C) return C;
      if (c !== void 0) return c;
      throw new Error(`\`${v}\` must be used within \`${u}\``);
    }
    return (m.displayName = u + "Provider"), [m, g];
  }
  const l = () => {
    const u = o.map((c) => S.createContext(c));
    return function (f) {
      const h = (f == null ? void 0 : f[t]) || u;
      return S.useMemo(() => ({ [`__scope${t}`]: { ...f, [t]: h } }), [f, h]);
    };
  };
  return (l.scopeName = t), [s, Ix(l, ...r)];
}
function Ix(...t) {
  const r = t[0];
  if (t.length === 1) return r;
  const o = () => {
    const s = t.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
    return function (u) {
      const c = s.reduce((f, { useScope: h, scopeName: m }) => {
        const v = h(u)[`__scope${m}`];
        return { ...f, ...v };
      }, {});
      return S.useMemo(() => ({ [`__scope${r.scopeName}`]: c }), [c]);
    };
  };
  return (o.scopeName = r.scopeName), o;
}
var zc = dg();
const wg = cg(zc);
function Dx(t, r) {
  typeof t == "function" ? t(r) : t != null && (t.current = r);
}
function Sg(...t) {
  return (r) => t.forEach((o) => Dx(o, r));
}
function hr(...t) {
  return S.useCallback(Sg(...t), t);
}
var Uc = S.forwardRef((t, r) => {
  const { children: o, ...s } = t,
    l = S.Children.toArray(o),
    u = l.find(Fx);
  if (u) {
    const c = u.props.children,
      f = l.map((h) =>
        h === u
          ? S.Children.count(c) > 1
            ? S.Children.only(null)
            : S.isValidElement(c)
            ? c.props.children
            : null
          : h
      );
    return I.jsx(fc, {
      ...s,
      ref: r,
      children: S.isValidElement(c) ? S.cloneElement(c, void 0, f) : null,
    });
  }
  return I.jsx(fc, { ...s, ref: r, children: o });
});
Uc.displayName = "Slot";
var fc = S.forwardRef((t, r) => {
  const { children: o, ...s } = t;
  if (S.isValidElement(o)) {
    const l = Bx(o);
    return S.cloneElement(o, { ...jx(s, o.props), ref: r ? Sg(r, l) : l });
  }
  return S.Children.count(o) > 1 ? S.Children.only(null) : null;
});
fc.displayName = "SlotClone";
var Vx = ({ children: t }) => I.jsx(I.Fragment, { children: t });
function Fx(t) {
  return S.isValidElement(t) && t.type === Vx;
}
function jx(t, r) {
  const o = { ...r };
  for (const s in r) {
    const l = t[s],
      u = r[s];
    /^on[A-Z]/.test(s)
      ? l && u
        ? (o[s] = (...f) => {
            u(...f), l(...f);
          })
        : l && (o[s] = l)
      : s === "style"
      ? (o[s] = { ...l, ...u })
      : s === "className" && (o[s] = [l, u].filter(Boolean).join(" "));
  }
  return { ...t, ...o };
}
function Bx(t) {
  var s, l;
  let r =
      (s = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : s.get,
    o = r && "isReactWarning" in r && r.isReactWarning;
  return o
    ? t.ref
    : ((r =
        (l = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : l.get),
      (o = r && "isReactWarning" in r && r.isReactWarning),
      o ? t.props.ref : t.props.ref || t.ref);
}
var zx = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  en = zx.reduce((t, r) => {
    const o = S.forwardRef((s, l) => {
      const { asChild: u, ...c } = s,
        f = u ? Uc : r;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        I.jsx(f, { ...c, ref: l })
      );
    });
    return (o.displayName = `Primitive.${r}`), { ...t, [r]: o };
  }, {});
function Ux(t, r) {
  t && zc.flushSync(() => t.dispatchEvent(r));
}
var Wc = "Progress",
  Hc = 100,
  [Wx, Kb] = xg(Wc),
  [Hx, $x] = Wx(Wc),
  Eg = S.forwardRef((t, r) => {
    const {
      __scopeProgress: o,
      value: s = null,
      max: l,
      getValueLabel: u = Gx,
      ...c
    } = t;
    (l || l === 0) && !Ah(l) && console.error(Kx(`${l}`, "Progress"));
    const f = Ah(l) ? l : Hc;
    s !== null && !bh(s, f) && console.error(Yx(`${s}`, "Progress"));
    const h = bh(s, f) ? s : null,
      m = ka(h) ? u(h, f) : void 0;
    return I.jsx(Hx, {
      scope: o,
      value: h,
      max: f,
      children: I.jsx(en.div, {
        "aria-valuemax": f,
        "aria-valuemin": 0,
        "aria-valuenow": ka(h) ? h : void 0,
        "aria-valuetext": m,
        role: "progressbar",
        "data-state": Tg(h, f),
        "data-value": h ?? void 0,
        "data-max": f,
        ...c,
        ref: r,
      }),
    });
  });
Eg.displayName = Wc;
var Pg = "ProgressIndicator",
  Cg = S.forwardRef((t, r) => {
    const { __scopeProgress: o, ...s } = t,
      l = $x(Pg, o);
    return I.jsx(en.div, {
      "data-state": Tg(l.value, l.max),
      "data-value": l.value ?? void 0,
      "data-max": l.max,
      ...s,
      ref: r,
    });
  });
Cg.displayName = Pg;
function Gx(t, r) {
  return `${Math.round((t / r) * 100)}%`;
}
function Tg(t, r) {
  return t == null ? "indeterminate" : t === r ? "complete" : "loading";
}
function ka(t) {
  return typeof t == "number";
}
function Ah(t) {
  return ka(t) && !isNaN(t) && t > 0;
}
function bh(t, r) {
  return ka(t) && !isNaN(t) && t <= r && t >= 0;
}
function Kx(t, r) {
  return `Invalid prop \`max\` of value \`${t}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Hc}\`.`;
}
function Yx(t, r) {
  return `Invalid prop \`value\` of value \`${t}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Hc} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Ag = Eg,
  Qx = Cg;
const bg = S.forwardRef(({ className: t, value: r, ...o }, s) =>
  I.jsx(Ag, {
    ref: s,
    className: nt("progressBarRoot", t),
    ...o,
    children: I.jsx(Qx, {
      className: "progressBarIndicator",
      style: { transform: `translateX(-${100 - (r || 0)}%)` },
    }),
  })
);
bg.displayName = Ag.displayName;
const Vr = { INDOOR: "innen", OUTDOOR: "außen" },
  Oi = { MID: "mid", PRIVATE: "private" },
  Rh = { STAND: "stand", WALL: "wall", FOUNDATION: "foundation" },
  pc = { YES: "yes", NO: "no" },
  Xx = { YES: "yes", NO: "no" },
  hc = { YES: "yes", NO: "no" },
  Ai = { UP_TO_100A: "100A", UP_TO_250A: "250A", NONE: "none" },
  se = {
    INSTALLATION_LOCATION: "installationLocation",
    USAGE_TYPE: "usageType",
    CHARGING_POINTS: "chargingPoints",
    MOUNTING_METHOD: "mountingMethod",
    WALL_OPTIONS: "wallOptions",
    STAND_OPTIONS: "standOptions",
    FOUNDATION_OPTIONS: "foundationOptions",
    WIFI_REQUIREMENT: "wifiRequirement",
    INTERNET_REQUIREMENT: "internetRequirement",
    ACCESS_POINTS: "accessPoints",
    EQUALIZER_REQUIREMENT: "equalizerRequirement",
    WIELAND_CABLE: "wielandCable",
    WIELAND_CABLE_ADDITIONS: "wielandCableAdditions",
    WIFI_REQUIREMENT_OUTDOOR: "wifiRequirementOutdoor",
    WIFI_OUTDOOR: "wifiOutdoor",
    CABLE_HARNESS: "cableHarness",
    UTILS: "utils",
    COVER_COLOR: "coverColor",
    UTILS_NEXT: "utilsNext",
    START: "start",
    SUMMARY: "summary",
  },
  $e = {
    INSTALLED_CHARGING_POINTS: "installedChargingPoints",
    PREINSTALLED_CHARGING_POINTS: "preinstalledChargingPoints",
    WALL_MOUNTS: "wallMounts",
    ONE_WAY_BASE: "oneWayBase",
    TWO_WAY_BASE: "twoWayBase",
    FOUR_WAY_BASE: "fourWayBase",
    FOUNDATION_OPTIONS: "foundationOptions",
    NUMBER_OF_ACCESS_POINTS: "numberOfAccessPoints",
    WIELAND_CABLE_LENGTH_16: "wielandCableLength16",
    BEFESTIGUNGSSCHELLE_FLACHLEITUNG: "befestigungsschelleFlachleitung",
    WIELAND_CABLE_LENGTH_25: "wielandCableLength25",
    U_HOOK: "uHook",
    LADECABLE_4_5M: "ladekabel4_5m",
    LADECABLE_7_5M: "ladekabel7_5m",
    RFID_KEY: "rfidKey",
    BACK_PLATE: "backPlate",
    CABLE_HARNESS: "cableHarness",
    FRONT_COLOR_BLUE: "frontColorBlue",
    FRONT_COLOR_GREY: "frontColorGrey",
    FRONT_COLOR_RED: "frontColorRed",
    FRONT_COLOR_WHITE: "frontColorWhite",
  },
  Xt = [
    {
      id: se.START,
      title: "Start Konfigurator",
      label: se.START,
      inputType: "button",
      options: [
        {
          label: "Loslegen",
          value: "confirm",
          nextStep: se.INSTALLATION_LOCATION,
        },
      ],
    },
    {
      id: se.INSTALLATION_LOCATION,
      title: "Wo werden die Ladestationen installiert?",
      label: se.INSTALLATION_LOCATION,
      description:
        '<strong>Dies ist fett</strong> und <em>das ist kursiv</em>. <a href="url">link text</a>',
      inputType: "button",
      options: [
        { label: "Innen", value: Vr.INDOOR, nextStep: se.USAGE_TYPE },
        { label: "Außen", value: Vr.OUTDOOR, nextStep: se.USAGE_TYPE },
      ],
    },
    {
      id: se.USAGE_TYPE,
      title: "Welche Nutzung wird für die Ladestationen benötigt?",
      label: se.USAGE_TYPE,
      description:
        "Eine MID-abrechenbare Ladesäule ist mit einem geeichten Zähler ausgestattet, der den Stromverbrauch exakt erfasst, sodass der Betreiber rechtssicher abrechnen kann (z. B. für öffentliche oder geschäftliche Nutzung). Eine private Ladesäule benötigt keinen MID-Zähler und wird meist für den Eigenverbrauch genutzt, ohne rechtliche Vorgaben zur Abrechnung.",
      inputType: "button",
      options: [
        {
          label: "MID (Abrechnungspflichtig)",
          value: Oi.MID,
          nextStep: se.CHARGING_POINTS,
        },
        { label: "Privat", value: Oi.PRIVATE, nextStep: se.CHARGING_POINTS },
      ],
    },
    {
      id: se.CHARGING_POINTS,
      title: "Wie viele Ladepunkte und vorzurüstende Ladestationen gibt es?",
      label: se.CHARGING_POINTS,
      description:
        "Geben Sie die Anzahl der benötigten Ladepunkte ein und die Anzahl der vorzurüstenden Ladestationen.",
      inputType: "input",
      inputFields: [
        {
          name: $e.INSTALLED_CHARGING_POINTS,
          label: "Installierte Ladepunkte",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
        {
          name: $e.PREINSTALLED_CHARGING_POINTS,
          label: "Vorzurüstende Ladestationen",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
      ],
      nextStep: se.MOUNTING_METHOD,
    },
    {
      id: se.MOUNTING_METHOD,
      title: "Welche Montageart soll verwendet werden?",
      label: se.MOUNTING_METHOD,
      description: "Bitte wählen Sie die passende Montageart aus.",
      inputType: "button",
      options: () => [
        { label: "Standfüße", value: Rh.STAND, nextStep: se.STAND_OPTIONS },
        { label: "Wandmontage", value: Rh.WALL, nextStep: se.WALL_OPTIONS },
      ],
    },
    {
      id: se.WALL_OPTIONS,
      title: "Wie viele Wandmontagen werden benötigt?",
      label: se.WALL_OPTIONS,
      description: "Geben Sie die Anzahl der Wandmontagen ein.",
      inputType: "input",
      inputFields: [
        {
          name: $e.WALL_MOUNTS,
          label: "Wandmontagen",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
      ],
      nextStep: se.CABLE_HARNESS,
    },
    {
      id: se.STAND_OPTIONS,
      title: "Welche Standoptionen sollen verwendet werden?",
      label: se.STAND_OPTIONS,
      description: "Bitte wählen Sie die gewünschten Standoptionen aus.",
      inputType: "input",
      inputFields: [
        {
          name: $e.ONE_WAY_BASE,
          label: "1-Way Base",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
        {
          name: $e.TWO_WAY_BASE,
          label: "2-Way Base",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
        {
          name: $e.FOUR_WAY_BASE,
          label: "4-Way Base",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
        {
          name: $e.FOUNDATION_OPTIONS,
          label: "Fundament",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
      ],
      nextStep: se.CABLE_HARNESS,
    },
    {
      id: se.CABLE_HARNESS,
      title: "Wieviele Kabelstränge hat Ihr System?",
      label: se.CABLE_HARNESS,
      description: "Bitte geben Sie die Anzahl der Kabelstränge an.",
      inputType: "input",
      inputFields: [
        {
          name: $e.CABLE_HARNESS,
          label: "Kabelstränge",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
      ],
      nextStep: se.WIFI_REQUIREMENT,
    },
    {
      id: se.WIFI_REQUIREMENT,
      title: "Benötigt die Ladestation WLAN?",
      label: se.WIFI_REQUIREMENT,
      description:
        "TODO: Mit WLAN können Sie die Ladestationen über die Easee-App steuern.",
      inputType: "button",
      options: (t) => [
        { label: "Ja", value: pc.YES, nextStep: se.INTERNET_REQUIREMENT },
        {
          label: "Nein",
          value: pc.NO,
          nextStep:
            t.installationLocation === Vr.OUTDOOR
              ? se.EQUALIZER_REQUIREMENT
              : se.WIELAND_CABLE,
        },
      ],
    },
    {
      id: se.INTERNET_REQUIREMENT,
      title: "Internetanschluss vorhanden?",
      label: se.INTERNET_REQUIREMENT,
      description: "Bitte angeben, ob ein Internetanschluss vorhanden ist:",
      inputType: "button",
      options: [
        { label: "Ja", value: hc.YES, nextStep: se.ACCESS_POINTS },
        { label: "Nein", value: hc.NO, nextStep: se.ACCESS_POINTS },
      ],
    },
    {
      id: se.ACCESS_POINTS,
      title: "Anzahl der benötigten Access Points",
      label: se.ACCESS_POINTS,
      description:
        "Bitte geben Sie die Anzahl der benötigten Access Points an:",
      inputType: "input",
      inputFields: [
        {
          name: $e.NUMBER_OF_ACCESS_POINTS,
          label: "Access Points",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
      ],
      nextStep: (t) =>
        t.installationLocation === Vr.OUTDOOR
          ? se.EQUALIZER_REQUIREMENT
          : se.WIELAND_CABLE,
    },
    {
      id: se.WIELAND_CABLE,
      title: "Wird ein Wieland Flachbandkabel benötigt?",
      label: se.WIELAND_CABLE,
      description:
        "Bitte geben Sie die benötigte Länge des Kabels in Metern an:",
      inputType: "input",
      inputFields: [
        {
          name: $e.WIELAND_CABLE_LENGTH_16,
          label: "Wieland Flachbandkabel 16mm² (in m)",
          placeholder: "Länge in Metern eingeben",
          type: "number",
        },
        {
          name: $e.WIELAND_CABLE_LENGTH_25,
          label: "Wieland Flachbandkabel 25mm² (in m)",
          placeholder: "Länge in Metern eingeben",
          type: "number",
        },
      ],
      nextStep: se.WIELAND_CABLE_ADDITIONS,
    },
    {
      id: se.WIELAND_CABLE_ADDITIONS,
      title: "Wählen Sie das passende Zubehör für das Wieland Flachbandkabel",
      label: se.WIELAND_CABLE_ADDITIONS,
      description: "Wir empfehlen, dass alle 0,6m ein Halter montiert wird.",
      inputType: "input",
      inputFields: (t) => {
        const r = Math.ceil(
          (Number(t.wielandCableLength16) + Number(t.wielandCableLength25)) /
            0.6
        );
        return [
          {
            name: $e.BEFESTIGUNGSSCHELLE_FLACHLEITUNG,
            label: `Befestigungshalter (Wir empfehlen aufgrund Ihrer Kabellänge: ${r} Stück)`,
            placeholder: "Anzahl eingeben",
            type: "number",
          },
        ];
      },
      nextStep: se.EQUALIZER_REQUIREMENT,
    },
    {
      id: se.EQUALIZER_REQUIREMENT,
      title: "Welcher Equalizer wird benötigt?",
      label: se.EQUALIZER_REQUIREMENT,
      description: "Bitte wählen Sie den passenden Equalizer aus:",
      inputType: "button",
      options: (t) => {
        const r = [];
        return (
          t.installationLocation === Vr.INDOOR && t.usageType === Oi.MID
            ? r.push(
                { label: "Bis 100A", value: Ai.UP_TO_100A, nextStep: se.UTILS },
                { label: "Bis 250A", value: Ai.UP_TO_250A, nextStep: se.UTILS },
                {
                  label: "Keinen Equalizer",
                  value: Ai.NONE,
                  nextStep: se.UTILS,
                }
              )
            : r.push(
                { label: "Bis 100A", value: Ai.UP_TO_100A, nextStep: se.UTILS },
                {
                  label: "Keinen Equalizer",
                  value: Ai.NONE,
                  nextStep: se.UTILS,
                }
              ),
          r
        );
      },
    },
    {
      id: se.UTILS,
      title: "Zusätzliches Zubehör",
      label: se.UTILS,
      description: "Bitte geben Sie die Anzahl des benötigten Zubehörs an:",
      inputType: "input",
      inputFields: [
        {
          name: $e.U_HOOK,
          label: "U-Haken",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
        {
          name: $e.LADECABLE_4_5M,
          label: "Ladekabel 4,5m",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
        {
          name: $e.LADECABLE_7_5M,
          label: "Ladekabel 7,5m",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
      ],
      nextStep: se.UTILS_NEXT,
    },
    {
      id: se.UTILS_NEXT,
      title: "Weiteres Zubehör",
      label: se.UTILS_NEXT,
      description: "Bitte geben Sie die Anzahl des benötigten Zubehörs an:",
      inputType: "input",
      inputFields: [
        {
          name: $e.RFID_KEY,
          label: "RFID Schlüssel",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
        {
          name: $e.BACK_PLATE,
          label: "Easee Rückplatte",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
      ],
      nextStep: se.COVER_COLOR,
    },
    {
      id: se.COVER_COLOR,
      title: "Easee Cover Farben",
      label: se.COVER_COLOR,
      description: "Bitte geben Sie die Anzahl des benötigten Zubehörs an.",
      inputType: "input",
      inputFields: [
        {
          name: $e.FRONT_COLOR_BLUE,
          label: "Blau",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
        {
          name: $e.FRONT_COLOR_WHITE,
          label: "Weiß",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
        {
          name: $e.FRONT_COLOR_RED,
          label: "Rot",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
        {
          name: $e.FRONT_COLOR_GREY,
          label: "Anthrazit",
          placeholder: "Anzahl eingeben",
          type: "number",
        },
      ],
      nextStep: se.SUMMARY,
    },
    {
      id: se.SUMMARY,
      title: "Zusammenfassung",
      label: se.SUMMARY,
      description: "Überprüfen Sie Ihre Auswahl:",
      inputType: "button",
      options: [{ label: "Bestätigen", value: "confirm", nextStep: null }],
    },
  ],
  qx = [
    {
      id: "gid://shopify/Product/9760226050388",
      title: "Easee Charge Core",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/49882185924948"],
    },
    {
      id: "gid://shopify/Product/9760238338388",
      title: "Easee Ready",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/49882363789652"],
    },
    {
      id: "gid://shopify/Product/9760858603860",
      title: "Easee Base Standfuß 4-Way",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/49914343096660"],
    },
    {
      id: "gid://shopify/Product/9764733288788",
      title: "Easee U-Hook",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/49905355522388"],
    },
    {
      id: "gid://shopify/Product/9768456094036",
      title: "Easee Base Mounting Plate",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/49916266873172"],
    },
    {
      id: "gid://shopify/Product/9771094671700",
      title: "Easee RFID Key",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/49923456074068"],
    },
    {
      id: "gid://shopify/Product/9771117773140",
      title: "Easee Front Cover",
      productType: "Wallbox",
      variants: [
        "gid://shopify/ProductVariant/49923647439188",
        "gid://shopify/ProductVariant/49923647471956",
        "gid://shopify/ProductVariant/49923647504724",
        "gid://shopify/ProductVariant/49923647537492",
        "gid://shopify/ProductVariant/49923647570260",
      ],
    },
    {
      id: "gid://shopify/Product/9771148411220",
      title: "Easee Equalizer AMP Bundle",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/49923835756884"],
    },
    {
      id: "gid://shopify/Product/9773740851540",
      title: "Easee Equalizer P1",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/49935820849492"],
    },
    {
      id: "gid://shopify/Product/9773746717012",
      title: "Easee Gummiabdeckung",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/49935856697684"],
    },
    {
      id: "gid://shopify/Product/9773748355412",
      title: "Easee Ladekabel Typ2",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/49935873442132"],
    },
    {
      id: "gid://shopify/Product/9857253605716",
      title: "Wandhalterung für Typ-2-Ladekabel, mit Kabelablage",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/50526486167892"],
    },
    {
      id: "gid://shopify/Product/9888365150548",
      title: "Fundament für Easee Base Standfuß",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/50671832924500"],
    },
    {
      id: "gid://shopify/Product/9893454840148",
      title: "Flachleitung 5G16 schwarz - lfm.",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50699466408276"],
    },
    {
      id: "gid://shopify/Product/9893534368084",
      title: "Befestigungsschelle Flachleitung schraubbar",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50700879921492"],
    },
    {
      id: "gid://shopify/Product/9893572477268",
      title: "Leitungsendstück Podis 5G16",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50701425574228"],
    },
    {
      id: "gid://shopify/Product/9893582078292",
      title: "Anschlussmodul 5G16 - 32A - inkl. Kabelverschraubung",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50701609009492"],
    },
    {
      id: "gid://shopify/Product/9893591646548",
      title: "Anschlussmodul zur Einspeisung - 63A",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50701765378388"],
    },
    {
      id: "gid://shopify/Product/9893643747668",
      title: "Einspeisemodul 5G16 - 61A",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50701883801940"],
    },
    {
      id: "gid://shopify/Product/9893647253844",
      title: "Anschlussmodul 5G16 - 25A - RST25 Buchse",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50701893042516"],
    },
    {
      id: "gid://shopify/Product/9893791170900",
      title: "Konfektionierte Leitung RST25I5KS-S 60S 05BG03",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50702176649556"],
    },
    {
      id: "gid://shopify/Product/9893802180948",
      title: "Absicherungsmodul mit 3TE 63A",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50702318141780"],
    },
    {
      id: "gid://shopify/Product/9893821251924",
      title: "Absicherungsmodul FI/LS Typ A - C32A",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50702362509652"],
    },
    {
      id: "gid://shopify/Product/9893828886868",
      title: "Absicherungsmodul FI/LS Typ A - C16A",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50702388527444"],
    },
    {
      id: "gid://shopify/Product/9937641963860",
      title: "Easee Charge Up Bundle: mit Base, Fundament und Kabel",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50851440427348"],
    },
    {
      id: "gid://shopify/Product/9939720962388",
      title: "Easee Charge Core Bundle: mit Base, Fundament und Kabel",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50934961504596"],
    },
    {
      id: "gid://shopify/Product/9939913998676",
      title: "Easee Charge Core Bundle: mit U-Hook und Kabel",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50854058197332"],
    },
    {
      id: "gid://shopify/Product/9939949977940",
      title: "Easee Charge Up Bundle: mit U-Hook und Kabel",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50854114984276"],
    },
    {
      id: "gid://shopify/Product/9960821293396",
      title: "Easee Charge Max",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/50914564473172"],
    },
    {
      id: "gid://shopify/Product/9961038741844",
      title: "Easee Charge Up",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/50915242377556"],
    },
    {
      id: "gid://shopify/Product/9966245314900",
      title: "Easee Base Standfuß 1-Way",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/50934796583252"],
    },
    {
      id: "gid://shopify/Product/9966245544276",
      title: "Easee Base Standfuß 2-Way",
      productType: "Wallbox",
      variants: ["gid://shopify/ProductVariant/50934797271380"],
    },
    {
      id: "gid://shopify/Product/9966802829652",
      title: "Easee Charge Max Bundle: mit Base, Fundament und Kabel",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50936754733396"],
    },
    {
      id: "gid://shopify/Product/9966804533588",
      title: "Easee Charge Max Bundle: mit U-Hook und Kabel",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50936757944660"],
    },
    {
      id: "gid://shopify/Product/9974075392340",
      title: "Flachleitung 5G25 schwarz - lfm.",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50962323079508"],
    },
    {
      id: "gid://shopify/Product/9975263691092",
      title: "Ubiquiti UniFi AP-AC-M MESH",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50966063743316"],
    },
    {
      id: "gid://shopify/Product/9975264248148",
      title: "QUW A240S Outdoor Gehäuse, LTE / WLAN Omni-Antenne",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50966066168148"],
    },
    {
      id: "gid://shopify/Product/9975264903508",
      title: "UbiQuiti Switch UniFi USW-LITE-8-POE",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50966070198612"],
    },
    {
      id: "gid://shopify/Product/9975265460564",
      title: "Ubiquiti UniFi U6+ Access Point WiFi6",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50966072885588"],
    },
    {
      id: "gid://shopify/Product/9975266181460",
      title: "RUT241 Industrial 4G/LTE Router mit 2x 10/100MBit und WiFi",
      productType: "",
      variants: ["gid://shopify/ProductVariant/50966076621140"],
    },
  ],
  Re = {
    EASEE_CHARGE_CORE: "gid://shopify/Product/9760226050388",
    EASEE_READY: "gid://shopify/Product/9760238338388",
    EASEE_BASE_STANDFUSS_4_WAY: "gid://shopify/Product/9760858603860",
    EASEE_U_HOOK: "gid://shopify/Product/9764733288788",
    EASEE_BASE_MOUNTING_PLATE: "gid://shopify/Product/9768456094036",
    EASEE_RFID_KEY: "gid://shopify/Product/9771094671700",
    EASEE_FRONT_COVER: "gid://shopify/Product/9771117773140",
    EASEE_EQUALIZER_AMP_BUNDLE: "gid://shopify/Product/9771148411220",
    EASEE_EQUALIZER_P1: "gid://shopify/Product/9773740851540",
    EASEE_GUMMIABDECKUNG: "gid://shopify/Product/9773746717012",
    EASEE_LADEKABEL_TYP2: "gid://shopify/Product/9773748355412",
    WANDHALTERUNG_TYP2_KABEL: "gid://shopify/Product/9857253605716",
    FUNDAMENT_EASEE_BASE: "gid://shopify/Product/9888365150548",
    FLACHLEITUNG_5G16: "gid://shopify/Product/9893454840148",
    BEFESTIGUNGSSCHELLE_FLACHLEITUNG: "gid://shopify/Product/9893534368084",
    LEITUNGSENDSTUECK_PODIS_5G16: "gid://shopify/Product/9893572477268",
    ANSCHLUSSMODUL_5G16_32A: "gid://shopify/Product/9893582078292",
    ANSCHLUSSMODUL_EINSPEISUNG_63A: "gid://shopify/Product/9893591646548",
    EINSPEISEMODUL_5G16_61A: "gid://shopify/Product/9893643747668",
    ANSCHLUSSMODUL_5G16_25A: "gid://shopify/Product/9893647253844",
    KONFEKTIONIERTE_LEITUNG_RST25I5KS: "gid://shopify/Product/9893791170900",
    ABSICHERUNGSMODUL_63A: "gid://shopify/Product/9893802180948",
    ABSICHERUNGSMODUL_FI_LS_TYP_A_C32A: "gid://shopify/Product/9893821251924",
    ABSICHERUNGSMODUL_FI_LS_TYP_A_C16A: "gid://shopify/Product/9893828886868",
    EASEE_CHARGE_UP_BUNDLE_BASE: "gid://shopify/Product/9937641963860",
    EASEE_CHARGE_CORE_BUNDLE_BASE: "gid://shopify/Product/9939720962388",
    EASEE_CHARGE_CORE_BUNDLE_U_HOOK: "gid://shopify/Product/9939913998676",
    EASEE_CHARGE_UP_BUNDLE_U_HOOK: "gid://shopify/Product/9939949977940",
    EASEE_CHARGE_MAX: "gid://shopify/Product/9960821293396",
    EASEE_CHARGE_UP: "gid://shopify/Product/9961038741844",
    EASEE_BASE_STANDFUSS_1_WAY: "gid://shopify/Product/9966245314900",
    EASEE_BASE_STANDFUSS_2_WAY: "gid://shopify/Product/9966245544276",
    EASEE_CHARGE_MAX_BUNDLE_BASE: "gid://shopify/Product/9966802829652",
    EASEE_CHARGE_MAX_BUNDLE_U_HOOK: "gid://shopify/Product/9966804533588",
    FLACHLEITUNG_5G25: "gid://shopify/Product/9974075392340",
    UBIQUITI_ACCESS_POINT: "gid://shopify/Product/9975265460564",
    UBIQUITI_SWITCH: "gid://shopify/ProductVariant/50966070198612",
    RUT241_ROUTER: "gid://shopify/ProductVariant/50966076621140",
    QUW_ANTENNE: "gid://shopify/ProductVariant/50966066168148",
    EASEE_FRONT_COVER_BLUE: "gid://shopify/ProductVariant/49923647504724",
    EASEE_FRONT_COVER_GREY: "gid://shopify/ProductVariant/49923647471956",
    EASEE_FRONT_COVER_RED: "gid://shopify/ProductVariant/49923647537492",
    EASEE_FRONT_COVER_WHITE: "gid://shopify/ProductVariant/49923647570260",
  },
  Zx = qx.map((t) => ({ ...t, variants: t.variants.map((r) => ({ id: r })) })),
  Jx = Zx,
  za = (t) => Jx.find((o) => o.id === t),
  kh = (t) => {
    const r = [];
    if (!t.installationLocation)
      throw new Error("Installationsort muss angegeben werden");
    return (
      r.push(...ew(t)), r.push(...nw(t)), r.push(...tw(t)), r.push(...rw(t)), r
    );
  },
  ew = (t) =>
    [
      { merchandiseId: Re.FLACHLEITUNG_5G16, quantity: t.wielandCableLength16 },
      { merchandiseId: Re.FLACHLEITUNG_5G25, quantity: t.wielandCableLength25 },
      { merchandiseId: Re.EASEE_BASE_MOUNTING_PLATE, quantity: t.wallMounts },
      { merchandiseId: Re.FUNDAMENT_EASEE_BASE, quantity: t.foundationOptions },
      { merchandiseId: Re.EASEE_BASE_STANDFUSS_1_WAY, quantity: t.oneWayBase },
      { merchandiseId: Re.EASEE_BASE_STANDFUSS_2_WAY, quantity: t.twoWayBase },
      { merchandiseId: Re.EASEE_BASE_STANDFUSS_4_WAY, quantity: t.fourWayBase },
      { merchandiseId: Re.EASEE_U_HOOK, quantity: t.uHook },
      { merchandiseId: Re.EASEE_RFID_KEY, quantity: t.rfidKey },
      { merchandiseId: Re.EASEE_BASE_MOUNTING_PLATE, quantity: t.backPlate },
    ]
      .map(({ merchandiseId: s, quantity: l }) => {
        var c;
        const u = za(s);
        return u
          ? {
              merchandiseId:
                ((c = u.variants[0]) == null ? void 0 : c.id) || "",
              title: u.title,
              productType: u.productType,
              quantity: l || 0,
            }
          : null;
      })
      .filter((s) => s !== null && s.quantity > 0 && s.merchandiseId !== ""),
  tw = (t) => {
    const r = [];
    if (t.wifiRequirement === pc.YES && t.installationLocation === Vr.INDOOR) {
      const s = {
        productVariant: Re.UBIQUITI_ACCESS_POINT,
        quantity: t.numberOfAccessPoints,
      };
      if ((r.push(s), t.numberOfAccessPoints && t.numberOfAccessPoints > 1)) {
        const l = { productVariant: Re.UBIQUITI_SWITCH, quantity: 1 };
        r.push(l);
      }
      if (t.internetRequirement === hc.NO) {
        const l = [
          { productVariant: Re.RUT241_ROUTER, quantity: 1 },
          { productVariant: Re.QUW_ANTENNE, quantity: 1 },
        ];
        r.push(...l);
      }
    }
    if (t.wifiRequirement === Xx.YES && t.installationLocation === Vr.OUTDOOR) {
      const s = [
        { productVariant: Re.RUT241_ROUTER, quantity: 1 },
        { productVariant: Re.UBIQUITI_ACCESS_POINT, quantity: 1 },
      ];
      r.push(...s);
    }
    return r
      .map(({ merchandiseId: s, quantity: l }) => {
        var c;
        const u = za(s);
        return u
          ? {
              merchandiseId:
                ((c = u.variants[0]) == null ? void 0 : c.id) || "",
              title: u.title,
              productType: u.productType,
              quantity: l || 0,
            }
          : null;
      })
      .filter((s) => s !== null && s.quantity > 0 && s.merchandiseId !== "");
  },
  nw = (t) => {
    const r = [],
      o = Number(t.installedChargingPoints ?? 0),
      s = Number(t.preinstalledChargingPoints ?? 0);
    if (t.installedChargingPoints || t.preinstalledChargingPoints) {
      const c = [
        {
          merchandiseId:
            t.usageType === Oi.PRIVATE || (t.usageType === Oi.MID && o + s > 3)
              ? Re.EASEE_CHARGE_CORE
              : Re.EASEE_CHARGE_MAX,
          quantity: t.installedChargingPoints,
        },
        {
          merchandiseId: Re.EASEE_READY,
          quantity: t.preinstalledChargingPoints,
        },
        {
          merchandiseId: Re.KONFEKTIONIERTE_LEITUNG_RST25I5KS,
          quantity: t.installedChargingPoints,
        },
        {
          merchandiseId: Re.ANSCHLUSSMODUL_5G16_25A,
          quantity: t.installedChargingPoints,
        },
      ];
      r.push(...c);
    }
    if (t.wielandCableLength16 || t.wielandCableLength25) {
      const u = [
        {
          merchandiseId: Re.BEFESTIGUNGSSCHELLE_FLACHLEITUNG,
          quantity: t.befestigungsschelleFlachleitung,
        },
      ];
      r.push(...u);
    }
    if (t.cableHarness) {
      const u = [
        { merchandiseId: Re.EINSPEISEMODUL_5G16_61A, quantity: t.cableHarness },
        {
          merchandiseId: Re.LEITUNGSENDSTUECK_PODIS_5G16,
          quantity: t.cableHarness,
        },
      ];
      r.push(...u);
    }
    return r
      .map(({ merchandiseId: u, quantity: c }) => {
        var h;
        const f = za(u);
        return f
          ? {
              merchandiseId:
                ((h = f.variants[0]) == null ? void 0 : h.id) || "",
              title: f.title,
              productType: f.productType,
              quantity: c || 0,
            }
          : null;
      })
      .filter((u) => u !== null && u.quantity > 0 && u.merchandiseId !== "");
  },
  rw = (t) => {
    const r = [
        { id: Re.EASEE_FRONT_COVER_BLUE, quantity: t.frontColorBlue },
        { id: Re.EASEE_FRONT_COVER_GREY, quantity: t.frontColorGrey },
        { id: Re.EASEE_FRONT_COVER_RED, quantity: t.frontColorRed },
        { id: Re.EASEE_FRONT_COVER_WHITE, quantity: t.frontColorWhite },
      ],
      o = za(Re.EASEE_FRONT_COVER);
    return o
      ? o.variants
          .map((l) => {
            var f;
            const u = l.id,
              c = (f = r.find((h) => h.id === u)) == null ? void 0 : f.quantity;
            return {
              merchandiseId: u,
              title: o.title,
              productType: o.productType,
              quantity: c || 0,
            };
          })
          .filter((l) => l.quantity > 0)
      : [];
  };
function ow(t) {
  if (typeof Proxy > "u") return t;
  const r = new Map(),
    o = (...s) => t(...s);
  return new Proxy(o, {
    get: (s, l) =>
      l === "create" ? t : (r.has(l) || r.set(l, t(l)), r.get(l)),
  });
}
function Ua(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const mc = (t) => Array.isArray(t);
function Rg(t, r) {
  if (!Array.isArray(r)) return !1;
  const o = r.length;
  if (o !== t.length) return !1;
  for (let s = 0; s < o; s++) if (r[s] !== t[s]) return !1;
  return !0;
}
function Vi(t) {
  return typeof t == "string" || Array.isArray(t);
}
function Nh(t) {
  const r = [{}, {}];
  return (
    t == null ||
      t.values.forEach((o, s) => {
        (r[0][s] = o.get()), (r[1][s] = o.getVelocity());
      }),
    r
  );
}
function $c(t, r, o, s) {
  if (typeof r == "function") {
    const [l, u] = Nh(s);
    r = r(o !== void 0 ? o : t.custom, l, u);
  }
  if (
    (typeof r == "string" && (r = t.variants && t.variants[r]),
    typeof r == "function")
  ) {
    const [l, u] = Nh(s);
    r = r(o !== void 0 ? o : t.custom, l, u);
  }
  return r;
}
function Wa(t, r, o) {
  const s = t.getProps();
  return $c(s, r, o !== void 0 ? o : s.custom, t);
}
const Gc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Kc = ["initial", ...Gc],
  Wi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Ur = new Set(Wi),
  Tn = (t) => t * 1e3,
  An = (t) => t / 1e3,
  iw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  sw = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  aw = { type: "keyframes", duration: 0.8 },
  lw = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  uw = (t, { keyframes: r }) =>
    r.length > 2
      ? aw
      : Ur.has(t)
      ? t.startsWith("scale")
        ? sw(r[1])
        : iw
      : lw;
function Yc(t, r) {
  return t ? t[r] || t.default || t : void 0;
}
const cw = { skipAnimations: !1, useManualTiming: !1 },
  dw = (t) => t !== null;
function Ha(t, { repeat: r, repeatType: o = "loop" }, s) {
  const l = t.filter(dw),
    u = r && o !== "loop" && r % 2 === 1 ? 0 : l.length - 1;
  return !u || s === void 0 ? l[u] : s;
}
const ut = (t) => t;
let gc = ut;
function fw(t) {
  let r = new Set(),
    o = new Set(),
    s = !1,
    l = !1;
  const u = new WeakSet();
  let c = { delta: 0, timestamp: 0, isProcessing: !1 };
  function f(m) {
    u.has(m) && (h.schedule(m), t()), m(c);
  }
  const h = {
    schedule: (m, g = !1, v = !1) => {
      const x = v && s ? r : o;
      return g && u.add(m), x.has(m) || x.add(m), m;
    },
    cancel: (m) => {
      o.delete(m), u.delete(m);
    },
    process: (m) => {
      if (((c = m), s)) {
        l = !0;
        return;
      }
      (s = !0),
        ([r, o] = [o, r]),
        o.clear(),
        r.forEach(f),
        (s = !1),
        l && ((l = !1), h.process(m));
    },
  };
  return h;
}
const la = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  pw = 40;
function kg(t, r) {
  let o = !1,
    s = !0;
  const l = { delta: 0, timestamp: 0, isProcessing: !1 },
    u = () => (o = !0),
    c = la.reduce((b, L) => ((b[L] = fw(u)), b), {}),
    {
      read: f,
      resolveKeyframes: h,
      update: m,
      preRender: g,
      render: v,
      postRender: w,
    } = c,
    x = () => {
      const b = performance.now();
      (o = !1),
        (l.delta = s ? 1e3 / 60 : Math.max(Math.min(b - l.timestamp, pw), 1)),
        (l.timestamp = b),
        (l.isProcessing = !0),
        f.process(l),
        h.process(l),
        m.process(l),
        g.process(l),
        v.process(l),
        w.process(l),
        (l.isProcessing = !1),
        o && r && ((s = !1), t(x));
    },
    C = () => {
      (o = !0), (s = !0), l.isProcessing || t(x);
    };
  return {
    schedule: la.reduce((b, L) => {
      const M = c[L];
      return (b[L] = (N, V = !1, W = !1) => (o || C(), M.schedule(N, V, W))), b;
    }, {}),
    cancel: (b) => {
      for (let L = 0; L < la.length; L++) c[la[L]].cancel(b);
    },
    state: l,
    steps: c,
  };
}
const {
    schedule: Ne,
    cancel: lr,
    state: tt,
    steps: zu,
  } = kg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ut, !0),
  Ng = (t, r, o) =>
    (((1 - 3 * o + 3 * r) * t + (3 * o - 6 * r)) * t + 3 * r) * t,
  hw = 1e-7,
  mw = 12;
function gw(t, r, o, s, l) {
  let u,
    c,
    f = 0;
  do (c = r + (o - r) / 2), (u = Ng(c, s, l) - t), u > 0 ? (o = c) : (r = c);
  while (Math.abs(u) > hw && ++f < mw);
  return c;
}
function Hi(t, r, o, s) {
  if (t === r && o === s) return ut;
  const l = (u) => gw(u, 0, 1, t, o);
  return (u) => (u === 0 || u === 1 ? u : Ng(l(u), r, s));
}
const _g = (t) => (r) => r <= 0.5 ? t(2 * r) / 2 : (2 - t(2 * (1 - r))) / 2,
  Lg = (t) => (r) => 1 - t(1 - r),
  Og = Hi(0.33, 1.53, 0.69, 0.99),
  Qc = Lg(Og),
  Mg = _g(Qc),
  Ig = (t) =>
    (t *= 2) < 1 ? 0.5 * Qc(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  Xc = (t) => 1 - Math.sin(Math.acos(t)),
  Dg = Lg(Xc),
  Vg = _g(Xc),
  Fg = (t) => /^0[^.\s]+$/u.test(t);
function yw(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
    ? t === "none" || t === "0" || Fg(t)
    : !0;
}
const jg = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  Bg = (t) => (r) => typeof r == "string" && r.startsWith(t),
  zg = Bg("--"),
  vw = Bg("var(--"),
  qc = (t) => (vw(t) ? xw.test(t.split("/*")[0].trim()) : !1),
  xw =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ww = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Sw(t) {
  const r = ww.exec(t);
  if (!r) return [,];
  const [, o, s, l] = r;
  return [`--${o ?? s}`, l];
}
function Ug(t, r, o = 1) {
  const [s, l] = Sw(t);
  if (!s) return;
  const u = window.getComputedStyle(r).getPropertyValue(s);
  if (u) {
    const c = u.trim();
    return jg(c) ? parseFloat(c) : c;
  }
  return qc(l) ? Ug(l, r, o + 1) : l;
}
const bn = (t, r, o) => (o > r ? r : o < t ? t : o),
  Mo = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  Fi = { ...Mo, transform: (t) => bn(0, 1, t) },
  ua = { ...Mo, default: 1 },
  $i = (t) => ({
    test: (r) =>
      typeof r == "string" && r.endsWith(t) && r.split(" ").length === 1,
    parse: parseFloat,
    transform: (r) => `${r}${t}`,
  }),
  rr = $i("deg"),
  ln = $i("%"),
  pe = $i("px"),
  Ew = $i("vh"),
  Pw = $i("vw"),
  _h = {
    ...ln,
    parse: (t) => ln.parse(t) / 100,
    transform: (t) => ln.transform(t * 100),
  },
  Cw = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Lh = (t) => t === Mo || t === pe,
  Oh = (t, r) => parseFloat(t.split(", ")[r]),
  Mh =
    (t, r) =>
    (o, { transform: s }) => {
      if (s === "none" || !s) return 0;
      const l = s.match(/^matrix3d\((.+)\)$/u);
      if (l) return Oh(l[1], r);
      {
        const u = s.match(/^matrix\((.+)\)$/u);
        return u ? Oh(u[1], t) : 0;
      }
    },
  Tw = new Set(["x", "y", "z"]),
  Aw = Wi.filter((t) => !Tw.has(t));
function bw(t) {
  const r = [];
  return (
    Aw.forEach((o) => {
      const s = t.getValue(o);
      s !== void 0 &&
        (r.push([o, s.get()]), s.set(o.startsWith("scale") ? 1 : 0));
    }),
    r
  );
}
const Ro = {
  width: ({ x: t }, { paddingLeft: r = "0", paddingRight: o = "0" }) =>
    t.max - t.min - parseFloat(r) - parseFloat(o),
  height: ({ y: t }, { paddingTop: r = "0", paddingBottom: o = "0" }) =>
    t.max - t.min - parseFloat(r) - parseFloat(o),
  top: (t, { top: r }) => parseFloat(r),
  left: (t, { left: r }) => parseFloat(r),
  bottom: ({ y: t }, { top: r }) => parseFloat(r) + (t.max - t.min),
  right: ({ x: t }, { left: r }) => parseFloat(r) + (t.max - t.min),
  x: Mh(4, 13),
  y: Mh(5, 14),
};
Ro.translateX = Ro.x;
Ro.translateY = Ro.y;
const Wg = (t) => (r) => r.test(t),
  Rw = { test: (t) => t === "auto", parse: (t) => t },
  Hg = [Mo, pe, ln, rr, Pw, Ew, Rw],
  Ih = (t) => Hg.find(Wg(t)),
  jr = new Set();
let yc = !1,
  vc = !1;
function $g() {
  if (vc) {
    const t = Array.from(jr).filter((s) => s.needsMeasurement),
      r = new Set(t.map((s) => s.element)),
      o = new Map();
    r.forEach((s) => {
      const l = bw(s);
      l.length && (o.set(s, l), s.render());
    }),
      t.forEach((s) => s.measureInitialState()),
      r.forEach((s) => {
        s.render();
        const l = o.get(s);
        l &&
          l.forEach(([u, c]) => {
            var f;
            (f = s.getValue(u)) === null || f === void 0 || f.set(c);
          });
      }),
      t.forEach((s) => s.measureEndState()),
      t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (vc = !1), (yc = !1), jr.forEach((t) => t.complete()), jr.clear();
}
function Gg() {
  jr.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (vc = !0);
  });
}
function kw() {
  Gg(), $g();
}
class Zc {
  constructor(r, o, s, l, u, c = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...r]),
      (this.onComplete = o),
      (this.name = s),
      (this.motionValue = l),
      (this.element = u),
      (this.isAsync = c);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (jr.add(this),
          yc || ((yc = !0), Ne.read(Gg), Ne.resolveKeyframes($g)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: r,
      name: o,
      element: s,
      motionValue: l,
    } = this;
    for (let u = 0; u < r.length; u++)
      if (r[u] === null)
        if (u === 0) {
          const c = l == null ? void 0 : l.get(),
            f = r[r.length - 1];
          if (c !== void 0) r[0] = c;
          else if (s && o) {
            const h = s.readValue(o, f);
            h != null && (r[0] = h);
          }
          r[0] === void 0 && (r[0] = f), l && c === void 0 && l.set(r[0]);
        } else r[u] = r[u - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      jr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), jr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Mi = (t) => Math.round(t * 1e5) / 1e5,
  Jc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Nw(t) {
  return t == null;
}
const _w =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ed = (t, r) => (o) =>
    !!(
      (typeof o == "string" && _w.test(o) && o.startsWith(t)) ||
      (r && !Nw(o) && Object.prototype.hasOwnProperty.call(o, r))
    ),
  Kg = (t, r, o) => (s) => {
    if (typeof s != "string") return s;
    const [l, u, c, f] = s.match(Jc);
    return {
      [t]: parseFloat(l),
      [r]: parseFloat(u),
      [o]: parseFloat(c),
      alpha: f !== void 0 ? parseFloat(f) : 1,
    };
  },
  Lw = (t) => bn(0, 255, t),
  Uu = { ...Mo, transform: (t) => Math.round(Lw(t)) },
  Fr = {
    test: ed("rgb", "red"),
    parse: Kg("red", "green", "blue"),
    transform: ({ red: t, green: r, blue: o, alpha: s = 1 }) =>
      "rgba(" +
      Uu.transform(t) +
      ", " +
      Uu.transform(r) +
      ", " +
      Uu.transform(o) +
      ", " +
      Mi(Fi.transform(s)) +
      ")",
  };
function Ow(t) {
  let r = "",
    o = "",
    s = "",
    l = "";
  return (
    t.length > 5
      ? ((r = t.substring(1, 3)),
        (o = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (l = t.substring(7, 9)))
      : ((r = t.substring(1, 2)),
        (o = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (l = t.substring(4, 5)),
        (r += r),
        (o += o),
        (s += s),
        (l += l)),
    {
      red: parseInt(r, 16),
      green: parseInt(o, 16),
      blue: parseInt(s, 16),
      alpha: l ? parseInt(l, 16) / 255 : 1,
    }
  );
}
const xc = { test: ed("#"), parse: Ow, transform: Fr.transform },
  wo = {
    test: ed("hsl", "hue"),
    parse: Kg("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: r, lightness: o, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      ln.transform(Mi(r)) +
      ", " +
      ln.transform(Mi(o)) +
      ", " +
      Mi(Fi.transform(s)) +
      ")",
  },
  at = {
    test: (t) => Fr.test(t) || xc.test(t) || wo.test(t),
    parse: (t) =>
      Fr.test(t) ? Fr.parse(t) : wo.test(t) ? wo.parse(t) : xc.parse(t),
    transform: (t) =>
      typeof t == "string"
        ? t
        : t.hasOwnProperty("red")
        ? Fr.transform(t)
        : wo.transform(t),
  },
  Mw =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Iw(t) {
  var r, o;
  return (
    isNaN(t) &&
    typeof t == "string" &&
    (((r = t.match(Jc)) === null || r === void 0 ? void 0 : r.length) || 0) +
      (((o = t.match(Mw)) === null || o === void 0 ? void 0 : o.length) || 0) >
      0
  );
}
const Yg = "number",
  Qg = "color",
  Dw = "var",
  Vw = "var(",
  Dh = "${}",
  Fw =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ji(t) {
  const r = t.toString(),
    o = [],
    s = { color: [], number: [], var: [] },
    l = [];
  let u = 0;
  const f = r
    .replace(
      Fw,
      (h) => (
        at.test(h)
          ? (s.color.push(u), l.push(Qg), o.push(at.parse(h)))
          : h.startsWith(Vw)
          ? (s.var.push(u), l.push(Dw), o.push(h))
          : (s.number.push(u), l.push(Yg), o.push(parseFloat(h))),
        ++u,
        Dh
      )
    )
    .split(Dh);
  return { values: o, split: f, indexes: s, types: l };
}
function Xg(t) {
  return ji(t).values;
}
function qg(t) {
  const { split: r, types: o } = ji(t),
    s = r.length;
  return (l) => {
    let u = "";
    for (let c = 0; c < s; c++)
      if (((u += r[c]), l[c] !== void 0)) {
        const f = o[c];
        f === Yg
          ? (u += Mi(l[c]))
          : f === Qg
          ? (u += at.transform(l[c]))
          : (u += l[c]);
      }
    return u;
  };
}
const jw = (t) => (typeof t == "number" ? 0 : t);
function Bw(t) {
  const r = Xg(t);
  return qg(t)(r.map(jw));
}
const ur = {
    test: Iw,
    parse: Xg,
    createTransformer: qg,
    getAnimatableNone: Bw,
  },
  zw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Uw(t) {
  const [r, o] = t.slice(0, -1).split("(");
  if (r === "drop-shadow") return t;
  const [s] = o.match(Jc) || [];
  if (!s) return t;
  const l = o.replace(s, "");
  let u = zw.has(r) ? 1 : 0;
  return s !== o && (u *= 100), r + "(" + u + l + ")";
}
const Ww = /\b([a-z-]*)\(.*?\)/gu,
  wc = {
    ...ur,
    getAnimatableNone: (t) => {
      const r = t.match(Ww);
      return r ? r.map(Uw).join(" ") : t;
    },
  },
  Hw = {
    borderWidth: pe,
    borderTopWidth: pe,
    borderRightWidth: pe,
    borderBottomWidth: pe,
    borderLeftWidth: pe,
    borderRadius: pe,
    radius: pe,
    borderTopLeftRadius: pe,
    borderTopRightRadius: pe,
    borderBottomRightRadius: pe,
    borderBottomLeftRadius: pe,
    width: pe,
    maxWidth: pe,
    height: pe,
    maxHeight: pe,
    top: pe,
    right: pe,
    bottom: pe,
    left: pe,
    padding: pe,
    paddingTop: pe,
    paddingRight: pe,
    paddingBottom: pe,
    paddingLeft: pe,
    margin: pe,
    marginTop: pe,
    marginRight: pe,
    marginBottom: pe,
    marginLeft: pe,
    backgroundPositionX: pe,
    backgroundPositionY: pe,
  },
  $w = {
    rotate: rr,
    rotateX: rr,
    rotateY: rr,
    rotateZ: rr,
    scale: ua,
    scaleX: ua,
    scaleY: ua,
    scaleZ: ua,
    skew: rr,
    skewX: rr,
    skewY: rr,
    distance: pe,
    translateX: pe,
    translateY: pe,
    translateZ: pe,
    x: pe,
    y: pe,
    z: pe,
    perspective: pe,
    transformPerspective: pe,
    opacity: Fi,
    originX: _h,
    originY: _h,
    originZ: pe,
  },
  Vh = { ...Mo, transform: Math.round },
  td = {
    ...Hw,
    ...$w,
    zIndex: Vh,
    size: pe,
    fillOpacity: Fi,
    strokeOpacity: Fi,
    numOctaves: Vh,
  },
  Gw = {
    ...td,
    color: at,
    backgroundColor: at,
    outlineColor: at,
    fill: at,
    stroke: at,
    borderColor: at,
    borderTopColor: at,
    borderRightColor: at,
    borderBottomColor: at,
    borderLeftColor: at,
    filter: wc,
    WebkitFilter: wc,
  },
  nd = (t) => Gw[t];
function Zg(t, r) {
  let o = nd(t);
  return (
    o !== wc && (o = ur), o.getAnimatableNone ? o.getAnimatableNone(r) : void 0
  );
}
const Kw = new Set(["auto", "none", "0"]);
function Yw(t, r, o) {
  let s = 0,
    l;
  for (; s < t.length && !l; ) {
    const u = t[s];
    typeof u == "string" && !Kw.has(u) && ji(u).values.length && (l = t[s]),
      s++;
  }
  if (l && o) for (const u of r) t[u] = Zg(o, l);
}
class Jg extends Zc {
  constructor(r, o, s, l, u) {
    super(r, o, s, l, u, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: r, element: o, name: s } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let h = 0; h < r.length; h++) {
      let m = r[h];
      if (typeof m == "string" && ((m = m.trim()), qc(m))) {
        const g = Ug(m, o.current);
        g !== void 0 && (r[h] = g),
          h === r.length - 1 && (this.finalKeyframe = m);
      }
    }
    if ((this.resolveNoneKeyframes(), !Cw.has(s) || r.length !== 2)) return;
    const [l, u] = r,
      c = Ih(l),
      f = Ih(u);
    if (c !== f)
      if (Lh(c) && Lh(f))
        for (let h = 0; h < r.length; h++) {
          const m = r[h];
          typeof m == "string" && (r[h] = parseFloat(m));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: r, name: o } = this,
      s = [];
    for (let l = 0; l < r.length; l++) yw(r[l]) && s.push(l);
    s.length && Yw(r, s, o);
  }
  measureInitialState() {
    const { element: r, unresolvedKeyframes: o, name: s } = this;
    if (!r || !r.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Ro[s](
        r.measureViewportBox(),
        window.getComputedStyle(r.current)
      )),
      (o[0] = this.measuredOrigin);
    const l = o[o.length - 1];
    l !== void 0 && r.getValue(s, l).jump(l, !1);
  }
  measureEndState() {
    var r;
    const { element: o, name: s, unresolvedKeyframes: l } = this;
    if (!o || !o.current) return;
    const u = o.getValue(s);
    u && u.jump(this.measuredOrigin, !1);
    const c = l.length - 1,
      f = l[c];
    (l[c] = Ro[s](o.measureViewportBox(), window.getComputedStyle(o.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      !((r = this.removedTransforms) === null || r === void 0) &&
        r.length &&
        this.removedTransforms.forEach(([h, m]) => {
          o.getValue(h).set(m);
        }),
      this.resolveNoneKeyframes();
  }
}
function rd(t) {
  return typeof t == "function";
}
let Sa;
function Qw() {
  Sa = void 0;
}
const un = {
    now: () => (
      Sa === void 0 &&
        un.set(
          tt.isProcessing || cw.useManualTiming
            ? tt.timestamp
            : performance.now()
        ),
      Sa
    ),
    set: (t) => {
      (Sa = t), queueMicrotask(Qw);
    },
  },
  Fh = (t, r) =>
    r === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (ur.test(t) || t === "0") &&
            !t.startsWith("url("))
        );
function Xw(t) {
  const r = t[0];
  if (t.length === 1) return !0;
  for (let o = 0; o < t.length; o++) if (t[o] !== r) return !0;
}
function qw(t, r, o, s) {
  const l = t[0];
  if (l === null) return !1;
  if (r === "display" || r === "visibility") return !0;
  const u = t[t.length - 1],
    c = Fh(l, r),
    f = Fh(u, r);
  return !c || !f ? !1 : Xw(t) || ((o === "spring" || rd(o)) && s);
}
const Zw = 40;
class ey {
  constructor({
    autoplay: r = !0,
    delay: o = 0,
    type: s = "keyframes",
    repeat: l = 0,
    repeatDelay: u = 0,
    repeatType: c = "loop",
    ...f
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = un.now()),
      (this.options = {
        autoplay: r,
        delay: o,
        type: s,
        repeat: l,
        repeatDelay: u,
        repeatType: c,
        ...f,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Zw
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && kw(), this._resolved;
  }
  onKeyframesResolved(r, o) {
    (this.resolvedAt = un.now()), (this.hasAttemptedResolve = !0);
    const {
      name: s,
      type: l,
      velocity: u,
      delay: c,
      onComplete: f,
      onUpdate: h,
      isGenerator: m,
    } = this.options;
    if (!m && !qw(r, s, l, u))
      if (c) this.options.duration = 0;
      else {
        h == null || h(Ha(r, this.options, o)),
          f == null || f(),
          this.resolveFinishedPromise();
        return;
      }
    const g = this.initPlayback(r, o);
    g !== !1 &&
      ((this._resolved = { keyframes: r, finalKeyframe: o, ...g }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(r, o) {
    return this.currentFinishedPromise.then(r, o);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((r) => {
      this.resolveFinishedPromise = r;
    });
  }
}
const ko = (t, r, o) => {
    const s = r - t;
    return s === 0 ? 1 : (o - t) / s;
  },
  ty = (t, r, o = 10) => {
    let s = "";
    const l = Math.max(Math.round(r / o), 2);
    for (let u = 0; u < l; u++) s += t(ko(0, l - 1, u)) + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  };
function ny(t, r) {
  return r ? t * (1e3 / r) : 0;
}
const Jw = 5;
function ry(t, r, o) {
  const s = Math.max(r - Jw, 0);
  return ny(o - t(s), r - s);
}
const Ue = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Wu = 0.001;
function eS({
  duration: t = Ue.duration,
  bounce: r = Ue.bounce,
  velocity: o = Ue.velocity,
  mass: s = Ue.mass,
}) {
  let l,
    u,
    c = 1 - r;
  (c = bn(Ue.minDamping, Ue.maxDamping, c)),
    (t = bn(Ue.minDuration, Ue.maxDuration, An(t))),
    c < 1
      ? ((l = (m) => {
          const g = m * c,
            v = g * t,
            w = g - o,
            x = Sc(m, c),
            C = Math.exp(-v);
          return Wu - (w / x) * C;
        }),
        (u = (m) => {
          const v = m * c * t,
            w = v * o + o,
            x = Math.pow(c, 2) * Math.pow(m, 2) * t,
            C = Math.exp(-v),
            E = Sc(Math.pow(m, 2), c);
          return ((-l(m) + Wu > 0 ? -1 : 1) * ((w - x) * C)) / E;
        }))
      : ((l = (m) => {
          const g = Math.exp(-m * t),
            v = (m - o) * t + 1;
          return -Wu + g * v;
        }),
        (u = (m) => {
          const g = Math.exp(-m * t),
            v = (o - m) * (t * t);
          return g * v;
        }));
  const f = 5 / t,
    h = nS(l, u, f);
  if (((t = Tn(t)), isNaN(h)))
    return { stiffness: Ue.stiffness, damping: Ue.damping, duration: t };
  {
    const m = Math.pow(h, 2) * s;
    return { stiffness: m, damping: c * 2 * Math.sqrt(s * m), duration: t };
  }
}
const tS = 12;
function nS(t, r, o) {
  let s = o;
  for (let l = 1; l < tS; l++) s = s - t(s) / r(s);
  return s;
}
function Sc(t, r) {
  return t * Math.sqrt(1 - r * r);
}
const Ec = 2e4;
function oy(t) {
  let r = 0;
  const o = 50;
  let s = t.next(r);
  for (; !s.done && r < Ec; ) (r += o), (s = t.next(r));
  return r >= Ec ? 1 / 0 : r;
}
const rS = ["duration", "bounce"],
  oS = ["stiffness", "damping", "mass"];
function jh(t, r) {
  return r.some((o) => t[o] !== void 0);
}
function iS(t) {
  let r = {
    velocity: Ue.velocity,
    stiffness: Ue.stiffness,
    damping: Ue.damping,
    mass: Ue.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!jh(t, oS) && jh(t, rS))
    if (t.visualDuration) {
      const o = t.visualDuration,
        s = (2 * Math.PI) / (o * 1.2),
        l = s * s,
        u = 2 * bn(0.05, 1, 1 - t.bounce) * Math.sqrt(l);
      r = { ...r, mass: Ue.mass, stiffness: l, damping: u };
    } else {
      const o = eS(t);
      (r = { ...r, ...o, mass: Ue.mass }), (r.isResolvedFromDuration = !0);
    }
  return r;
}
function iy(t = Ue.visualDuration, r = Ue.bounce) {
  const o =
    typeof t != "object"
      ? { visualDuration: t, keyframes: [0, 1], bounce: r }
      : t;
  let { restSpeed: s, restDelta: l } = o;
  const u = o.keyframes[0],
    c = o.keyframes[o.keyframes.length - 1],
    f = { done: !1, value: u },
    {
      stiffness: h,
      damping: m,
      mass: g,
      duration: v,
      velocity: w,
      isResolvedFromDuration: x,
    } = iS({ ...o, velocity: -An(o.velocity || 0) }),
    C = w || 0,
    E = m / (2 * Math.sqrt(h * g)),
    T = c - u,
    b = An(Math.sqrt(h / g)),
    L = Math.abs(T) < 5;
  s || (s = L ? Ue.restSpeed.granular : Ue.restSpeed.default),
    l || (l = L ? Ue.restDelta.granular : Ue.restDelta.default);
  let M;
  if (E < 1) {
    const V = Sc(b, E);
    M = (W) => {
      const Y = Math.exp(-E * b * W);
      return (
        c - Y * (((C + E * b * T) / V) * Math.sin(V * W) + T * Math.cos(V * W))
      );
    };
  } else if (E === 1) M = (V) => c - Math.exp(-b * V) * (T + (C + b * T) * V);
  else {
    const V = b * Math.sqrt(E * E - 1);
    M = (W) => {
      const Y = Math.exp(-E * b * W),
        X = Math.min(V * W, 300);
      return (
        c - (Y * ((C + E * b * T) * Math.sinh(X) + V * T * Math.cosh(X))) / V
      );
    };
  }
  const N = {
    calculatedDuration: (x && v) || null,
    next: (V) => {
      const W = M(V);
      if (x) f.done = V >= v;
      else {
        let Y = 0;
        E < 1 && (Y = V === 0 ? Tn(C) : ry(M, V, W));
        const X = Math.abs(Y) <= s,
          ue = Math.abs(c - W) <= l;
        f.done = X && ue;
      }
      return (f.value = f.done ? c : W), f;
    },
    toString: () => {
      const V = Math.min(oy(N), Ec),
        W = ty((Y) => N.next(V * Y).value, V, 30);
      return V + "ms " + W;
    },
  };
  return N;
}
function Bh({
  keyframes: t,
  velocity: r = 0,
  power: o = 0.8,
  timeConstant: s = 325,
  bounceDamping: l = 10,
  bounceStiffness: u = 500,
  modifyTarget: c,
  min: f,
  max: h,
  restDelta: m = 0.5,
  restSpeed: g,
}) {
  const v = t[0],
    w = { done: !1, value: v },
    x = (X) => (f !== void 0 && X < f) || (h !== void 0 && X > h),
    C = (X) =>
      f === void 0
        ? h
        : h === void 0 || Math.abs(f - X) < Math.abs(h - X)
        ? f
        : h;
  let E = o * r;
  const T = v + E,
    b = c === void 0 ? T : c(T);
  b !== T && (E = b - v);
  const L = (X) => -E * Math.exp(-X / s),
    M = (X) => b + L(X),
    N = (X) => {
      const ue = L(X),
        ce = M(X);
      (w.done = Math.abs(ue) <= m), (w.value = w.done ? b : ce);
    };
  let V, W;
  const Y = (X) => {
    x(w.value) &&
      ((V = X),
      (W = iy({
        keyframes: [w.value, C(w.value)],
        velocity: ry(M, X, w.value),
        damping: l,
        stiffness: u,
        restDelta: m,
        restSpeed: g,
      })));
  };
  return (
    Y(0),
    {
      calculatedDuration: null,
      next: (X) => {
        let ue = !1;
        return (
          !W && V === void 0 && ((ue = !0), N(X), Y(X)),
          V !== void 0 && X >= V ? W.next(X - V) : (!ue && N(X), w)
        );
      },
    }
  );
}
const sS = Hi(0.42, 0, 1, 1),
  aS = Hi(0, 0, 0.58, 1),
  sy = Hi(0.42, 0, 0.58, 1),
  lS = (t) => Array.isArray(t) && typeof t[0] != "number",
  od = (t) => Array.isArray(t) && typeof t[0] == "number",
  zh = {
    linear: ut,
    easeIn: sS,
    easeInOut: sy,
    easeOut: aS,
    circIn: Xc,
    circInOut: Vg,
    circOut: Dg,
    backIn: Qc,
    backInOut: Mg,
    backOut: Og,
    anticipate: Ig,
  },
  Uh = (t) => {
    if (od(t)) {
      gc(t.length === 4);
      const [r, o, s, l] = t;
      return Hi(r, o, s, l);
    } else if (typeof t == "string") return gc(zh[t] !== void 0), zh[t];
    return t;
  },
  uS = (t, r) => (o) => r(t(o)),
  ir = (...t) => t.reduce(uS),
  je = (t, r, o) => t + (r - t) * o;
function Hu(t, r, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6
      ? t + (r - t) * 6 * o
      : o < 1 / 2
      ? r
      : o < 2 / 3
      ? t + (r - t) * (2 / 3 - o) * 6
      : t
  );
}
function cS({ hue: t, saturation: r, lightness: o, alpha: s }) {
  (t /= 360), (r /= 100), (o /= 100);
  let l = 0,
    u = 0,
    c = 0;
  if (!r) l = u = c = o;
  else {
    const f = o < 0.5 ? o * (1 + r) : o + r - o * r,
      h = 2 * o - f;
    (l = Hu(h, f, t + 1 / 3)), (u = Hu(h, f, t)), (c = Hu(h, f, t - 1 / 3));
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(u * 255),
    blue: Math.round(c * 255),
    alpha: s,
  };
}
function Na(t, r) {
  return (o) => (o > 0 ? r : t);
}
const $u = (t, r, o) => {
    const s = t * t,
      l = o * (r * r - s) + s;
    return l < 0 ? 0 : Math.sqrt(l);
  },
  dS = [xc, Fr, wo],
  fS = (t) => dS.find((r) => r.test(t));
function Wh(t) {
  const r = fS(t);
  if (!r) return !1;
  let o = r.parse(t);
  return r === wo && (o = cS(o)), o;
}
const Hh = (t, r) => {
    const o = Wh(t),
      s = Wh(r);
    if (!o || !s) return Na(t, r);
    const l = { ...o };
    return (u) => (
      (l.red = $u(o.red, s.red, u)),
      (l.green = $u(o.green, s.green, u)),
      (l.blue = $u(o.blue, s.blue, u)),
      (l.alpha = je(o.alpha, s.alpha, u)),
      Fr.transform(l)
    );
  },
  Pc = new Set(["none", "hidden"]);
function pS(t, r) {
  return Pc.has(t) ? (o) => (o <= 0 ? t : r) : (o) => (o >= 1 ? r : t);
}
function hS(t, r) {
  return (o) => je(t, r, o);
}
function id(t) {
  return typeof t == "number"
    ? hS
    : typeof t == "string"
    ? qc(t)
      ? Na
      : at.test(t)
      ? Hh
      : yS
    : Array.isArray(t)
    ? ay
    : typeof t == "object"
    ? at.test(t)
      ? Hh
      : mS
    : Na;
}
function ay(t, r) {
  const o = [...t],
    s = o.length,
    l = t.map((u, c) => id(u)(u, r[c]));
  return (u) => {
    for (let c = 0; c < s; c++) o[c] = l[c](u);
    return o;
  };
}
function mS(t, r) {
  const o = { ...t, ...r },
    s = {};
  for (const l in o)
    t[l] !== void 0 && r[l] !== void 0 && (s[l] = id(t[l])(t[l], r[l]));
  return (l) => {
    for (const u in s) o[u] = s[u](l);
    return o;
  };
}
function gS(t, r) {
  var o;
  const s = [],
    l = { color: 0, var: 0, number: 0 };
  for (let u = 0; u < r.values.length; u++) {
    const c = r.types[u],
      f = t.indexes[c][l[c]],
      h = (o = t.values[f]) !== null && o !== void 0 ? o : 0;
    (s[u] = h), l[c]++;
  }
  return s;
}
const yS = (t, r) => {
  const o = ur.createTransformer(r),
    s = ji(t),
    l = ji(r);
  return s.indexes.var.length === l.indexes.var.length &&
    s.indexes.color.length === l.indexes.color.length &&
    s.indexes.number.length >= l.indexes.number.length
    ? (Pc.has(t) && !l.values.length) || (Pc.has(r) && !s.values.length)
      ? pS(t, r)
      : ir(ay(gS(s, l), l.values), o)
    : Na(t, r);
};
function ly(t, r, o) {
  return typeof t == "number" && typeof r == "number" && typeof o == "number"
    ? je(t, r, o)
    : id(t)(t, r);
}
function vS(t, r, o) {
  const s = [],
    l = o || ly,
    u = t.length - 1;
  for (let c = 0; c < u; c++) {
    let f = l(t[c], t[c + 1]);
    if (r) {
      const h = Array.isArray(r) ? r[c] || ut : r;
      f = ir(h, f);
    }
    s.push(f);
  }
  return s;
}
function xS(t, r, { clamp: o = !0, ease: s, mixer: l } = {}) {
  const u = t.length;
  if ((gc(u === r.length), u === 1)) return () => r[0];
  if (u === 2 && t[0] === t[1]) return () => r[1];
  t[0] > t[u - 1] && ((t = [...t].reverse()), (r = [...r].reverse()));
  const c = vS(r, s, l),
    f = c.length,
    h = (m) => {
      let g = 0;
      if (f > 1) for (; g < t.length - 2 && !(m < t[g + 1]); g++);
      const v = ko(t[g], t[g + 1], m);
      return c[g](v);
    };
  return o ? (m) => h(bn(t[0], t[u - 1], m)) : h;
}
function wS(t, r) {
  const o = t[t.length - 1];
  for (let s = 1; s <= r; s++) {
    const l = ko(0, r, s);
    t.push(je(o, 1, l));
  }
}
function SS(t) {
  const r = [0];
  return wS(r, t.length - 1), r;
}
function ES(t, r) {
  return t.map((o) => o * r);
}
function PS(t, r) {
  return t.map(() => r || sy).splice(0, t.length - 1);
}
function _a({
  duration: t = 300,
  keyframes: r,
  times: o,
  ease: s = "easeInOut",
}) {
  const l = lS(s) ? s.map(Uh) : Uh(s),
    u = { done: !1, value: r[0] },
    c = ES(o && o.length === r.length ? o : SS(r), t),
    f = xS(c, r, { ease: Array.isArray(l) ? l : PS(r, l) });
  return {
    calculatedDuration: t,
    next: (h) => ((u.value = f(h)), (u.done = h >= t), u),
  };
}
const CS = (t) => {
    const r = ({ timestamp: o }) => t(o);
    return {
      start: () => Ne.update(r, !0),
      stop: () => lr(r),
      now: () => (tt.isProcessing ? tt.timestamp : un.now()),
    };
  },
  TS = { decay: Bh, inertia: Bh, tween: _a, keyframes: _a, spring: iy },
  AS = (t) => t / 100;
class sd extends ey {
  constructor(r) {
    super(r),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: h } = this.options;
        h && h();
      });
    const { name: o, motionValue: s, element: l, keyframes: u } = this.options,
      c = (l == null ? void 0 : l.KeyframeResolver) || Zc,
      f = (h, m) => this.onKeyframesResolved(h, m);
    (this.resolver = new c(u, f, o, s, l)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(r) {
    const {
        type: o = "keyframes",
        repeat: s = 0,
        repeatDelay: l = 0,
        repeatType: u,
        velocity: c = 0,
      } = this.options,
      f = rd(o) ? o : TS[o] || _a;
    let h, m;
    f !== _a &&
      typeof r[0] != "number" &&
      ((h = ir(AS, ly(r[0], r[1]))), (r = [0, 100]));
    const g = f({ ...this.options, keyframes: r });
    u === "mirror" &&
      (m = f({ ...this.options, keyframes: [...r].reverse(), velocity: -c })),
      g.calculatedDuration === null && (g.calculatedDuration = oy(g));
    const { calculatedDuration: v } = g,
      w = v + l,
      x = w * (s + 1) - l;
    return {
      generator: g,
      mirroredGenerator: m,
      mapPercentToKeyframes: h,
      calculatedDuration: v,
      resolvedDuration: w,
      totalDuration: x,
    };
  }
  onPostResolved() {
    const { autoplay: r = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !r
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(r, o = !1) {
    const { resolved: s } = this;
    if (!s) {
      const { keyframes: X } = this.options;
      return { done: !0, value: X[X.length - 1] };
    }
    const {
      finalKeyframe: l,
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: f,
      keyframes: h,
      calculatedDuration: m,
      totalDuration: g,
      resolvedDuration: v,
    } = s;
    if (this.startTime === null) return u.next(0);
    const {
      delay: w,
      repeat: x,
      repeatType: C,
      repeatDelay: E,
      onUpdate: T,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, r))
      : this.speed < 0 &&
        (this.startTime = Math.min(r - g / this.speed, this.startTime)),
      o
        ? (this.currentTime = r)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(r - this.startTime) * this.speed);
    const b = this.currentTime - w * (this.speed >= 0 ? 1 : -1),
      L = this.speed >= 0 ? b < 0 : b > g;
    (this.currentTime = Math.max(b, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = g);
    let M = this.currentTime,
      N = u;
    if (x) {
      const X = Math.min(this.currentTime, g) / v;
      let ue = Math.floor(X),
        ce = X % 1;
      !ce && X >= 1 && (ce = 1),
        ce === 1 && ue--,
        (ue = Math.min(ue, x + 1)),
        !!(ue % 2) &&
          (C === "reverse"
            ? ((ce = 1 - ce), E && (ce -= E / v))
            : C === "mirror" && (N = c)),
        (M = bn(0, 1, ce) * v);
    }
    const V = L ? { done: !1, value: h[0] } : N.next(M);
    f && (V.value = f(V.value));
    let { done: W } = V;
    !L &&
      m !== null &&
      (W = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
    const Y =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && W));
    return (
      Y && l !== void 0 && (V.value = Ha(h, this.options, l)),
      T && T(V.value),
      Y && this.finish(),
      V
    );
  }
  get duration() {
    const { resolved: r } = this;
    return r ? An(r.calculatedDuration) : 0;
  }
  get time() {
    return An(this.currentTime);
  }
  set time(r) {
    (r = Tn(r)),
      (this.currentTime = r),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = r)
        : this.driver && (this.startTime = this.driver.now() - r / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(r) {
    const o = this.playbackSpeed !== r;
    (this.playbackSpeed = r), o && (this.time = An(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: r = CS, onPlay: o, startTime: s } = this.options;
    this.driver || (this.driver = r((u) => this.tick(u))), o && o();
    const l = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = l - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = l)
      : (this.startTime = s ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var r;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (r = this.currentTime) !== null && r !== void 0 ? r : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: r } = this.options;
    r && r();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(r) {
    return (this.startTime = 0), this.tick(r, !0);
  }
}
const bS = new Set(["opacity", "clipPath", "filter", "transform"]);
function ad(t) {
  let r;
  return () => (r === void 0 && (r = t()), r);
}
const RS = { linearEasing: void 0 };
function kS(t, r) {
  const o = ad(t);
  return () => {
    var s;
    return (s = RS[r]) !== null && s !== void 0 ? s : o();
  };
}
const La = kS(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function uy(t) {
  return !!(
    (typeof t == "function" && La()) ||
    !t ||
    (typeof t == "string" && (t in Cc || La())) ||
    od(t) ||
    (Array.isArray(t) && t.every(uy))
  );
}
const _i = ([t, r, o, s]) => `cubic-bezier(${t}, ${r}, ${o}, ${s})`,
  Cc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: _i([0, 0.65, 0.55, 1]),
    circOut: _i([0.55, 0, 1, 0.45]),
    backIn: _i([0.31, 0.01, 0.66, -0.59]),
    backOut: _i([0.33, 1.53, 0.69, 0.99]),
  };
function cy(t, r) {
  if (t)
    return typeof t == "function" && La()
      ? ty(t, r)
      : od(t)
      ? _i(t)
      : Array.isArray(t)
      ? t.map((o) => cy(o, r) || Cc.easeOut)
      : Cc[t];
}
function NS(
  t,
  r,
  o,
  {
    delay: s = 0,
    duration: l = 300,
    repeat: u = 0,
    repeatType: c = "loop",
    ease: f = "easeInOut",
    times: h,
  } = {}
) {
  const m = { [r]: o };
  h && (m.offset = h);
  const g = cy(f, l);
  return (
    Array.isArray(g) && (m.easing = g),
    t.animate(m, {
      delay: s,
      duration: l,
      easing: Array.isArray(g) ? "linear" : g,
      fill: "both",
      iterations: u + 1,
      direction: c === "reverse" ? "alternate" : "normal",
    })
  );
}
function $h(t, r) {
  (t.timeline = r), (t.onfinish = null);
}
const _S = ad(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Oa = 10,
  LS = 2e4;
function OS(t) {
  return rd(t.type) || t.type === "spring" || !uy(t.ease);
}
function MS(t, r) {
  const o = new sd({
    ...r,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let s = { done: !1, value: t[0] };
  const l = [];
  let u = 0;
  for (; !s.done && u < LS; ) (s = o.sample(u)), l.push(s.value), (u += Oa);
  return { times: void 0, keyframes: l, duration: u - Oa, ease: "linear" };
}
const dy = { anticipate: Ig, backInOut: Mg, circInOut: Vg };
function IS(t) {
  return t in dy;
}
class Gh extends ey {
  constructor(r) {
    super(r);
    const { name: o, motionValue: s, element: l, keyframes: u } = this.options;
    (this.resolver = new Jg(
      u,
      (c, f) => this.onKeyframesResolved(c, f),
      o,
      s,
      l
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(r, o) {
    var s;
    let {
      duration: l = 300,
      times: u,
      ease: c,
      type: f,
      motionValue: h,
      name: m,
      startTime: g,
    } = this.options;
    if (!(!((s = h.owner) === null || s === void 0) && s.current)) return !1;
    if (
      (typeof c == "string" && La() && IS(c) && (c = dy[c]), OS(this.options))
    ) {
      const {
          onComplete: w,
          onUpdate: x,
          motionValue: C,
          element: E,
          ...T
        } = this.options,
        b = MS(r, T);
      (r = b.keyframes),
        r.length === 1 && (r[1] = r[0]),
        (l = b.duration),
        (u = b.times),
        (c = b.ease),
        (f = "keyframes");
    }
    const v = NS(h.owner.current, m, r, {
      ...this.options,
      duration: l,
      times: u,
      ease: c,
    });
    return (
      (v.startTime = g ?? this.calcStartTime()),
      this.pendingTimeline
        ? ($h(v, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (v.onfinish = () => {
            const { onComplete: w } = this.options;
            h.set(Ha(r, this.options, o)),
              w && w(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: v, duration: l, times: u, type: f, ease: c, keyframes: r }
    );
  }
  get duration() {
    const { resolved: r } = this;
    if (!r) return 0;
    const { duration: o } = r;
    return An(o);
  }
  get time() {
    const { resolved: r } = this;
    if (!r) return 0;
    const { animation: o } = r;
    return An(o.currentTime || 0);
  }
  set time(r) {
    const { resolved: o } = this;
    if (!o) return;
    const { animation: s } = o;
    s.currentTime = Tn(r);
  }
  get speed() {
    const { resolved: r } = this;
    if (!r) return 1;
    const { animation: o } = r;
    return o.playbackRate;
  }
  set speed(r) {
    const { resolved: o } = this;
    if (!o) return;
    const { animation: s } = o;
    s.playbackRate = r;
  }
  get state() {
    const { resolved: r } = this;
    if (!r) return "idle";
    const { animation: o } = r;
    return o.playState;
  }
  get startTime() {
    const { resolved: r } = this;
    if (!r) return null;
    const { animation: o } = r;
    return o.startTime;
  }
  attachTimeline(r) {
    if (!this._resolved) this.pendingTimeline = r;
    else {
      const { resolved: o } = this;
      if (!o) return ut;
      const { animation: s } = o;
      $h(s, r);
    }
    return ut;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: r } = this;
    if (!r) return;
    const { animation: o } = r;
    o.playState === "finished" && this.updateFinishedPromise(), o.play();
  }
  pause() {
    const { resolved: r } = this;
    if (!r) return;
    const { animation: o } = r;
    o.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: r } = this;
    if (!r) return;
    const {
      animation: o,
      keyframes: s,
      duration: l,
      type: u,
      ease: c,
      times: f,
    } = r;
    if (o.playState === "idle" || o.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: m,
          onUpdate: g,
          onComplete: v,
          element: w,
          ...x
        } = this.options,
        C = new sd({
          ...x,
          keyframes: s,
          duration: l,
          type: u,
          ease: c,
          times: f,
          isGenerator: !0,
        }),
        E = Tn(this.time);
      m.setWithVelocity(C.sample(E - Oa).value, C.sample(E).value, Oa);
    }
    const { onStop: h } = this.options;
    h && h(), this.cancel();
  }
  complete() {
    const { resolved: r } = this;
    r && r.animation.finish();
  }
  cancel() {
    const { resolved: r } = this;
    r && r.animation.cancel();
  }
  static supports(r) {
    const {
      motionValue: o,
      name: s,
      repeatDelay: l,
      repeatType: u,
      damping: c,
      type: f,
    } = r;
    return (
      _S() &&
      s &&
      bS.has(s) &&
      o &&
      o.owner &&
      o.owner.current instanceof HTMLElement &&
      !o.owner.getProps().onUpdate &&
      !l &&
      u !== "mirror" &&
      c !== 0 &&
      f !== "inertia"
    );
  }
}
const DS = ad(() => window.ScrollTimeline !== void 0);
class VS {
  constructor(r) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = r.filter(Boolean));
  }
  then(r, o) {
    return Promise.all(this.animations).then(r).catch(o);
  }
  getAll(r) {
    return this.animations[0][r];
  }
  setAll(r, o) {
    for (let s = 0; s < this.animations.length; s++) this.animations[s][r] = o;
  }
  attachTimeline(r, o) {
    const s = this.animations.map((l) =>
      DS() && l.attachTimeline ? l.attachTimeline(r) : o(l)
    );
    return () => {
      s.forEach((l, u) => {
        l && l(), this.animations[u].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(r) {
    this.setAll("time", r);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(r) {
    this.setAll("speed", r);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let r = 0;
    for (let o = 0; o < this.animations.length; o++)
      r = Math.max(r, this.animations[o].duration);
    return r;
  }
  runAll(r) {
    this.animations.forEach((o) => o[r]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function FS({
  when: t,
  delay: r,
  delayChildren: o,
  staggerChildren: s,
  staggerDirection: l,
  repeat: u,
  repeatType: c,
  repeatDelay: f,
  from: h,
  elapsed: m,
  ...g
}) {
  return !!Object.keys(g).length;
}
const ld =
    (t, r, o, s = {}, l, u) =>
    (c) => {
      const f = Yc(s, t) || {},
        h = f.delay || s.delay || 0;
      let { elapsed: m = 0 } = s;
      m = m - Tn(h);
      let g = {
        keyframes: Array.isArray(o) ? o : [null, o],
        ease: "easeOut",
        velocity: r.getVelocity(),
        ...f,
        delay: -m,
        onUpdate: (w) => {
          r.set(w), f.onUpdate && f.onUpdate(w);
        },
        onComplete: () => {
          c(), f.onComplete && f.onComplete();
        },
        name: t,
        motionValue: r,
        element: u ? void 0 : l,
      };
      FS(f) || (g = { ...g, ...uw(t, g) }),
        g.duration && (g.duration = Tn(g.duration)),
        g.repeatDelay && (g.repeatDelay = Tn(g.repeatDelay)),
        g.from !== void 0 && (g.keyframes[0] = g.from);
      let v = !1;
      if (
        ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
          ((g.duration = 0), g.delay === 0 && (v = !0)),
        v && !u && r.get() !== void 0)
      ) {
        const w = Ha(g.keyframes, f);
        if (w !== void 0)
          return (
            Ne.update(() => {
              g.onUpdate(w), g.onComplete();
            }),
            new VS([])
          );
      }
      return !u && Gh.supports(g) ? new Gh(g) : new sd(g);
    },
  jS = (t) => !!(t && typeof t == "object" && t.mix && t.toValue),
  BS = (t) => (mc(t) ? t[t.length - 1] || 0 : t);
function ud(t, r) {
  t.indexOf(r) === -1 && t.push(r);
}
function cd(t, r) {
  const o = t.indexOf(r);
  o > -1 && t.splice(o, 1);
}
class dd {
  constructor() {
    this.subscriptions = [];
  }
  add(r) {
    return ud(this.subscriptions, r), () => cd(this.subscriptions, r);
  }
  notify(r, o, s) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1) this.subscriptions[0](r, o, s);
      else
        for (let u = 0; u < l; u++) {
          const c = this.subscriptions[u];
          c && c(r, o, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Kh = 30,
  zS = (t) => !isNaN(parseFloat(t));
class US {
  constructor(r, o = {}) {
    (this.version = "11.13.1"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s, l = !0) => {
        const u = un.now();
        this.updatedAt !== u && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          l &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(r),
      (this.owner = o.owner);
  }
  setCurrent(r) {
    (this.current = r),
      (this.updatedAt = un.now()),
      this.canTrackVelocity === null &&
        r !== void 0 &&
        (this.canTrackVelocity = zS(this.current));
  }
  setPrevFrameValue(r = this.current) {
    (this.prevFrameValue = r), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(r) {
    return this.on("change", r);
  }
  on(r, o) {
    this.events[r] || (this.events[r] = new dd());
    const s = this.events[r].add(o);
    return r === "change"
      ? () => {
          s(),
            Ne.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const r in this.events) this.events[r].clear();
  }
  attach(r, o) {
    (this.passiveEffect = r), (this.stopPassiveEffect = o);
  }
  set(r, o = !0) {
    !o || !this.passiveEffect
      ? this.updateAndNotify(r, o)
      : this.passiveEffect(r, this.updateAndNotify);
  }
  setWithVelocity(r, o, s) {
    this.set(o),
      (this.prev = void 0),
      (this.prevFrameValue = r),
      (this.prevUpdatedAt = this.updatedAt - s);
  }
  jump(r, o = !0) {
    this.updateAndNotify(r),
      (this.prev = r),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      o && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const r = un.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      r - this.updatedAt > Kh
    )
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Kh);
    return ny(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  start(r) {
    return (
      this.stop(),
      new Promise((o) => {
        (this.hasAnimated = !0),
          (this.animation = r(o)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Bi(t, r) {
  return new US(t, r);
}
function WS(t, r, o) {
  t.hasValue(r) ? t.getValue(r).set(o) : t.addValue(r, Bi(o));
}
function HS(t, r) {
  const o = Wa(t, r);
  let { transitionEnd: s = {}, transition: l = {}, ...u } = o || {};
  u = { ...u, ...s };
  for (const c in u) {
    const f = BS(u[c]);
    WS(t, c, f);
  }
}
const fd = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  $S = "framerAppearId",
  fy = "data-" + fd($S);
function py(t) {
  return t.props[fy];
}
const lt = (t) => !!(t && t.getVelocity);
function GS(t) {
  return !!(lt(t) && t.add);
}
function Tc(t, r) {
  const o = t.getValue("willChange");
  if (GS(o)) return o.add(r);
}
function KS({ protectedKeys: t, needsAnimating: r }, o) {
  const s = t.hasOwnProperty(o) && r[o] !== !0;
  return (r[o] = !1), s;
}
function hy(t, r, { delay: o = 0, transitionOverride: s, type: l } = {}) {
  var u;
  let { transition: c = t.getDefaultTransition(), transitionEnd: f, ...h } = r;
  s && (c = s);
  const m = [],
    g = l && t.animationState && t.animationState.getState()[l];
  for (const v in h) {
    const w = t.getValue(
        v,
        (u = t.latestValues[v]) !== null && u !== void 0 ? u : null
      ),
      x = h[v];
    if (x === void 0 || (g && KS(g, v))) continue;
    const C = { delay: o, ...Yc(c || {}, v) };
    let E = !1;
    if (window.MotionHandoffAnimation) {
      const b = py(t);
      if (b) {
        const L = window.MotionHandoffAnimation(b, v, Ne);
        L !== null && ((C.startTime = L), (E = !0));
      }
    }
    Tc(t, v),
      w.start(
        ld(v, w, x, t.shouldReduceMotion && Ur.has(v) ? { type: !1 } : C, t, E)
      );
    const T = w.animation;
    T && m.push(T);
  }
  return (
    f &&
      Promise.all(m).then(() => {
        Ne.update(() => {
          f && HS(t, f);
        });
      }),
    m
  );
}
function Ac(t, r, o = {}) {
  var s;
  const l = Wa(
    t,
    r,
    o.type === "exit"
      ? (s = t.presenceContext) === null || s === void 0
        ? void 0
        : s.custom
      : void 0
  );
  let { transition: u = t.getDefaultTransition() || {} } = l || {};
  o.transitionOverride && (u = o.transitionOverride);
  const c = l ? () => Promise.all(hy(t, l, o)) : () => Promise.resolve(),
    f =
      t.variantChildren && t.variantChildren.size
        ? (m = 0) => {
            const {
              delayChildren: g = 0,
              staggerChildren: v,
              staggerDirection: w,
            } = u;
            return YS(t, r, g + m, v, w, o);
          }
        : () => Promise.resolve(),
    { when: h } = u;
  if (h) {
    const [m, g] = h === "beforeChildren" ? [c, f] : [f, c];
    return m().then(() => g());
  } else return Promise.all([c(), f(o.delay)]);
}
function YS(t, r, o = 0, s = 0, l = 1, u) {
  const c = [],
    f = (t.variantChildren.size - 1) * s,
    h = l === 1 ? (m = 0) => m * s : (m = 0) => f - m * s;
  return (
    Array.from(t.variantChildren)
      .sort(QS)
      .forEach((m, g) => {
        m.notify("AnimationStart", r),
          c.push(
            Ac(m, r, { ...u, delay: o + h(g) }).then(() =>
              m.notify("AnimationComplete", r)
            )
          );
      }),
    Promise.all(c)
  );
}
function QS(t, r) {
  return t.sortNodePosition(r);
}
function XS(t, r, o = {}) {
  t.notify("AnimationStart", r);
  let s;
  if (Array.isArray(r)) {
    const l = r.map((u) => Ac(t, u, o));
    s = Promise.all(l);
  } else if (typeof r == "string") s = Ac(t, r, o);
  else {
    const l = typeof r == "function" ? Wa(t, r, o.custom) : r;
    s = Promise.all(hy(t, l, o));
  }
  return s.then(() => {
    t.notify("AnimationComplete", r);
  });
}
const qS = Kc.length;
function my(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const o = t.parent ? my(t.parent) || {} : {};
    return t.props.initial !== void 0 && (o.initial = t.props.initial), o;
  }
  const r = {};
  for (let o = 0; o < qS; o++) {
    const s = Kc[o],
      l = t.props[s];
    (Vi(l) || l === !1) && (r[s] = l);
  }
  return r;
}
const ZS = [...Gc].reverse(),
  JS = Gc.length;
function eE(t) {
  return (r) =>
    Promise.all(r.map(({ animation: o, options: s }) => XS(t, o, s)));
}
function tE(t) {
  let r = eE(t),
    o = Yh(),
    s = !0;
  const l = (h) => (m, g) => {
    var v;
    const w = Wa(
      t,
      g,
      h === "exit"
        ? (v = t.presenceContext) === null || v === void 0
          ? void 0
          : v.custom
        : void 0
    );
    if (w) {
      const { transition: x, transitionEnd: C, ...E } = w;
      m = { ...m, ...E, ...C };
    }
    return m;
  };
  function u(h) {
    r = h(t);
  }
  function c(h) {
    const { props: m } = t,
      g = my(t.parent) || {},
      v = [],
      w = new Set();
    let x = {},
      C = 1 / 0;
    for (let T = 0; T < JS; T++) {
      const b = ZS[T],
        L = o[b],
        M = m[b] !== void 0 ? m[b] : g[b],
        N = Vi(M),
        V = b === h ? L.isActive : null;
      V === !1 && (C = T);
      let W = M === g[b] && M !== m[b] && N;
      if (
        (W && s && t.manuallyAnimateOnMount && (W = !1),
        (L.protectedKeys = { ...x }),
        (!L.isActive && V === null) ||
          (!M && !L.prevProp) ||
          Ua(M) ||
          typeof M == "boolean")
      )
        continue;
      const Y = nE(L.prevProp, M);
      let X = Y || (b === h && L.isActive && !W && N) || (T > C && N),
        ue = !1;
      const ce = Array.isArray(M) ? M : [M];
      let we = ce.reduce(l(b), {});
      V === !1 && (we = {});
      const { prevResolvedValues: re = {} } = L,
        ve = { ...re, ...we },
        $ = (z) => {
          (X = !0),
            w.has(z) && ((ue = !0), w.delete(z)),
            (L.needsAnimating[z] = !0);
          const F = t.getValue(z);
          F && (F.liveStyle = !1);
        };
      for (const z in ve) {
        const F = we[z],
          B = re[z];
        if (x.hasOwnProperty(z)) continue;
        let G = !1;
        mc(F) && mc(B) ? (G = !Rg(F, B)) : (G = F !== B),
          G
            ? F != null
              ? $(z)
              : w.add(z)
            : F !== void 0 && w.has(z)
            ? $(z)
            : (L.protectedKeys[z] = !0);
      }
      (L.prevProp = M),
        (L.prevResolvedValues = we),
        L.isActive && (x = { ...x, ...we }),
        s && t.blockInitialAnimation && (X = !1),
        X &&
          (!(W && Y) || ue) &&
          v.push(...ce.map((z) => ({ animation: z, options: { type: b } })));
    }
    if (w.size) {
      const T = {};
      w.forEach((b) => {
        const L = t.getBaseTarget(b),
          M = t.getValue(b);
        M && (M.liveStyle = !0), (T[b] = L ?? null);
      }),
        v.push({ animation: T });
    }
    let E = !!v.length;
    return (
      s &&
        (m.initial === !1 || m.initial === m.animate) &&
        !t.manuallyAnimateOnMount &&
        (E = !1),
      (s = !1),
      E ? r(v) : Promise.resolve()
    );
  }
  function f(h, m) {
    var g;
    if (o[h].isActive === m) return Promise.resolve();
    (g = t.variantChildren) === null ||
      g === void 0 ||
      g.forEach((w) => {
        var x;
        return (x = w.animationState) === null || x === void 0
          ? void 0
          : x.setActive(h, m);
      }),
      (o[h].isActive = m);
    const v = c(h);
    for (const w in o) o[w].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: c,
    setActive: f,
    setAnimateFunction: u,
    getState: () => o,
    reset: () => {
      (o = Yh()), (s = !0);
    },
  };
}
function nE(t, r) {
  return typeof r == "string" ? r !== t : Array.isArray(r) ? !Rg(r, t) : !1;
}
function Or(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Yh() {
  return {
    animate: Or(!0),
    whileInView: Or(),
    whileHover: Or(),
    whileTap: Or(),
    whileDrag: Or(),
    whileFocus: Or(),
    exit: Or(),
  };
}
class mr {
  constructor(r) {
    (this.isMounted = !1), (this.node = r);
  }
  update() {}
}
class rE extends mr {
  constructor(r) {
    super(r), r.animationState || (r.animationState = tE(r));
  }
  updateAnimationControlsSubscription() {
    const { animate: r } = this.node.getProps();
    Ua(r) && (this.unmountControls = r.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: r } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    r !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var r;
    this.node.animationState.reset(),
      (r = this.unmountControls) === null || r === void 0 || r.call(this);
  }
}
let oE = 0;
class iE extends mr {
  constructor() {
    super(...arguments), (this.id = oE++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: r, onExitComplete: o } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || r === s) return;
    const l = this.node.animationState.setActive("exit", !r);
    o && !r && l.then(() => o(this.id));
  }
  mount() {
    const { register: r } = this.node.presenceContext || {};
    r && (this.unmount = r(this.id));
  }
  unmount() {}
}
const sE = { animation: { Feature: rE }, exit: { Feature: iE } };
function aE(t, r, o) {
  var s;
  if (t instanceof Element) return [t];
  if (typeof t == "string") {
    let l = document;
    const u = (s = void 0) !== null && s !== void 0 ? s : l.querySelectorAll(t);
    return u ? Array.from(u) : [];
  }
  return Array.from(t);
}
const qt = { x: !1, y: !1 };
function gy() {
  return qt.x || qt.y;
}
function Qh(t) {
  return (r) => {
    r.pointerType === "touch" || gy() || t(r);
  };
}
function lE(t, r, o = {}) {
  const s = new AbortController(),
    l = { passive: !0, ...o, signal: s.signal },
    u = Qh((c) => {
      const { target: f } = c,
        h = r(c);
      if (!h || !f) return;
      const m = Qh((g) => {
        h(g), f.removeEventListener("pointerleave", m);
      });
      f.addEventListener("pointerleave", m, l);
    });
  return (
    aE(t).forEach((c) => {
      c.addEventListener("pointerenter", u, l);
    }),
    () => s.abort()
  );
}
function uE(t) {
  return t === "x" || t === "y"
    ? qt[t]
      ? null
      : ((qt[t] = !0),
        () => {
          qt[t] = !1;
        })
    : qt.x || qt.y
    ? null
    : ((qt.x = qt.y = !0),
      () => {
        qt.x = qt.y = !1;
      });
}
const yy = (t) =>
  t.pointerType === "mouse"
    ? typeof t.button != "number" || t.button <= 0
    : t.isPrimary !== !1;
function Gi(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const cE = (t) => (r) => yy(r) && t(r, Gi(r));
function Cn(t, r, o, s = { passive: !0 }) {
  return t.addEventListener(r, o, s), () => t.removeEventListener(r, o);
}
function sr(t, r, o, s) {
  return Cn(t, r, cE(o), s);
}
const Xh = (t, r) => Math.abs(t - r);
function dE(t, r) {
  const o = Xh(t.x, r.x),
    s = Xh(t.y, r.y);
  return Math.sqrt(o ** 2 + s ** 2);
}
class vy {
  constructor(
    r,
    o,
    { transformPagePoint: s, contextWindow: l, dragSnapToOrigin: u = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const v = Ku(this.lastMoveEventInfo, this.history),
          w = this.startEvent !== null,
          x = dE(v.offset, { x: 0, y: 0 }) >= 3;
        if (!w && !x) return;
        const { point: C } = v,
          { timestamp: E } = tt;
        this.history.push({ ...C, timestamp: E });
        const { onStart: T, onMove: b } = this.handlers;
        w ||
          (T && T(this.lastMoveEvent, v),
          (this.startEvent = this.lastMoveEvent)),
          b && b(this.lastMoveEvent, v);
      }),
      (this.handlePointerMove = (v, w) => {
        (this.lastMoveEvent = v),
          (this.lastMoveEventInfo = Gu(w, this.transformPagePoint)),
          Ne.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (v, w) => {
        this.end();
        const { onEnd: x, onSessionEnd: C, resumeAnimation: E } = this.handlers;
        if (
          (this.dragSnapToOrigin && E && E(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const T = Ku(
          v.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Gu(w, this.transformPagePoint),
          this.history
        );
        this.startEvent && x && x(v, T), C && C(v, T);
      }),
      !yy(r))
    )
      return;
    (this.dragSnapToOrigin = u),
      (this.handlers = o),
      (this.transformPagePoint = s),
      (this.contextWindow = l || window);
    const c = Gi(r),
      f = Gu(c, this.transformPagePoint),
      { point: h } = f,
      { timestamp: m } = tt;
    this.history = [{ ...h, timestamp: m }];
    const { onSessionStart: g } = o;
    g && g(r, Ku(f, this.history)),
      (this.removeListeners = ir(
        sr(this.contextWindow, "pointermove", this.handlePointerMove),
        sr(this.contextWindow, "pointerup", this.handlePointerUp),
        sr(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(r) {
    this.handlers = r;
  }
  end() {
    this.removeListeners && this.removeListeners(), lr(this.updatePoint);
  }
}
function Gu(t, r) {
  return r ? { point: r(t.point) } : t;
}
function qh(t, r) {
  return { x: t.x - r.x, y: t.y - r.y };
}
function Ku({ point: t }, r) {
  return {
    point: t,
    delta: qh(t, xy(r)),
    offset: qh(t, fE(r)),
    velocity: pE(r, 0.1),
  };
}
function fE(t) {
  return t[0];
}
function xy(t) {
  return t[t.length - 1];
}
function pE(t, r) {
  if (t.length < 2) return { x: 0, y: 0 };
  let o = t.length - 1,
    s = null;
  const l = xy(t);
  for (; o >= 0 && ((s = t[o]), !(l.timestamp - s.timestamp > Tn(r))); ) o--;
  if (!s) return { x: 0, y: 0 };
  const u = An(l.timestamp - s.timestamp);
  if (u === 0) return { x: 0, y: 0 };
  const c = { x: (l.x - s.x) / u, y: (l.y - s.y) / u };
  return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c;
}
function So(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
const wy = 1e-4,
  hE = 1 - wy,
  mE = 1 + wy,
  Sy = 0.01,
  gE = 0 - Sy,
  yE = 0 + Sy;
function Nt(t) {
  return t.max - t.min;
}
function vE(t, r, o) {
  return Math.abs(t - r) <= o;
}
function Zh(t, r, o, s = 0.5) {
  (t.origin = s),
    (t.originPoint = je(r.min, r.max, t.origin)),
    (t.scale = Nt(o) / Nt(r)),
    (t.translate = je(o.min, o.max, t.origin) - t.originPoint),
    ((t.scale >= hE && t.scale <= mE) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= gE && t.translate <= yE) || isNaN(t.translate)) &&
      (t.translate = 0);
}
function Ii(t, r, o, s) {
  Zh(t.x, r.x, o.x, s ? s.originX : void 0),
    Zh(t.y, r.y, o.y, s ? s.originY : void 0);
}
function Jh(t, r, o) {
  (t.min = o.min + r.min), (t.max = t.min + Nt(r));
}
function xE(t, r, o) {
  Jh(t.x, r.x, o.x), Jh(t.y, r.y, o.y);
}
function em(t, r, o) {
  (t.min = r.min - o.min), (t.max = t.min + Nt(r));
}
function Di(t, r, o) {
  em(t.x, r.x, o.x), em(t.y, r.y, o.y);
}
function wE(t, { min: r, max: o }, s) {
  return (
    r !== void 0 && t < r
      ? (t = s ? je(r, t, s.min) : Math.max(t, r))
      : o !== void 0 && t > o && (t = s ? je(o, t, s.max) : Math.min(t, o)),
    t
  );
}
function tm(t, r, o) {
  return {
    min: r !== void 0 ? t.min + r : void 0,
    max: o !== void 0 ? t.max + o - (t.max - t.min) : void 0,
  };
}
function SE(t, { top: r, left: o, bottom: s, right: l }) {
  return { x: tm(t.x, o, l), y: tm(t.y, r, s) };
}
function nm(t, r) {
  let o = r.min - t.min,
    s = r.max - t.max;
  return r.max - r.min < t.max - t.min && ([o, s] = [s, o]), { min: o, max: s };
}
function EE(t, r) {
  return { x: nm(t.x, r.x), y: nm(t.y, r.y) };
}
function PE(t, r) {
  let o = 0.5;
  const s = Nt(t),
    l = Nt(r);
  return (
    l > s
      ? (o = ko(r.min, r.max - s, t.min))
      : s > l && (o = ko(t.min, t.max - l, r.min)),
    bn(0, 1, o)
  );
}
function CE(t, r) {
  const o = {};
  return (
    r.min !== void 0 && (o.min = r.min - t.min),
    r.max !== void 0 && (o.max = r.max - t.min),
    o
  );
}
const bc = 0.35;
function TE(t = bc) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = bc),
    { x: rm(t, "left", "right"), y: rm(t, "top", "bottom") }
  );
}
function rm(t, r, o) {
  return { min: om(t, r), max: om(t, o) };
}
function om(t, r) {
  return typeof t == "number" ? t : t[r] || 0;
}
const im = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Eo = () => ({ x: im(), y: im() }),
  sm = () => ({ min: 0, max: 0 }),
  Ge = () => ({ x: sm(), y: sm() });
function zt(t) {
  return [t("x"), t("y")];
}
function Ey({ top: t, left: r, right: o, bottom: s }) {
  return { x: { min: r, max: o }, y: { min: t, max: s } };
}
function AE({ x: t, y: r }) {
  return { top: r.min, right: t.max, bottom: r.max, left: t.min };
}
function bE(t, r) {
  if (!r) return t;
  const o = r({ x: t.left, y: t.top }),
    s = r({ x: t.right, y: t.bottom });
  return { top: o.y, left: o.x, bottom: s.y, right: s.x };
}
function Yu(t) {
  return t === void 0 || t === 1;
}
function Rc({ scale: t, scaleX: r, scaleY: o }) {
  return !Yu(t) || !Yu(r) || !Yu(o);
}
function Ir(t) {
  return (
    Rc(t) ||
    Py(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function Py(t) {
  return am(t.x) || am(t.y);
}
function am(t) {
  return t && t !== "0%";
}
function Ma(t, r, o) {
  const s = t - o,
    l = r * s;
  return o + l;
}
function lm(t, r, o, s, l) {
  return l !== void 0 && (t = Ma(t, l, s)), Ma(t, o, s) + r;
}
function kc(t, r = 0, o = 1, s, l) {
  (t.min = lm(t.min, r, o, s, l)), (t.max = lm(t.max, r, o, s, l));
}
function Cy(t, { x: r, y: o }) {
  kc(t.x, r.translate, r.scale, r.originPoint),
    kc(t.y, o.translate, o.scale, o.originPoint);
}
const um = 0.999999999999,
  cm = 1.0000000000001;
function RE(t, r, o, s = !1) {
  const l = o.length;
  if (!l) return;
  r.x = r.y = 1;
  let u, c;
  for (let f = 0; f < l; f++) {
    (u = o[f]), (c = u.projectionDelta);
    const { visualElement: h } = u.options;
    (h && h.props.style && h.props.style.display === "contents") ||
      (s &&
        u.options.layoutScroll &&
        u.scroll &&
        u !== u.root &&
        Co(t, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
      c && ((r.x *= c.x.scale), (r.y *= c.y.scale), Cy(t, c)),
      s && Ir(u.latestValues) && Co(t, u.latestValues));
  }
  r.x < cm && r.x > um && (r.x = 1), r.y < cm && r.y > um && (r.y = 1);
}
function Po(t, r) {
  (t.min = t.min + r), (t.max = t.max + r);
}
function dm(t, r, o, s, l = 0.5) {
  const u = je(t.min, t.max, l);
  kc(t, r, o, u, s);
}
function Co(t, r) {
  dm(t.x, r.x, r.scaleX, r.scale, r.originX),
    dm(t.y, r.y, r.scaleY, r.scale, r.originY);
}
function Ty(t, r) {
  return Ey(bE(t.getBoundingClientRect(), r));
}
function kE(t, r, o) {
  const s = Ty(t, o),
    { scroll: l } = r;
  return l && (Po(s.x, l.offset.x), Po(s.y, l.offset.y)), s;
}
const Ay = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  NE = new WeakMap();
class _E {
  constructor(r) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ge()),
      (this.visualElement = r);
  }
  start(r, { snapToCursor: o = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const l = (g) => {
        const { dragSnapToOrigin: v } = this.getProps();
        v ? this.pauseAnimation() : this.stopAnimation(),
          o && this.snapToCursor(Gi(g).point);
      },
      u = (g, v) => {
        const { drag: w, dragPropagation: x, onDragStart: C } = this.getProps();
        if (
          w &&
          !x &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = uE(w)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          zt((T) => {
            let b = this.getAxisMotionValue(T).get() || 0;
            if (ln.test(b)) {
              const { projection: L } = this.visualElement;
              if (L && L.layout) {
                const M = L.layout.layoutBox[T];
                M && (b = Nt(M) * (parseFloat(b) / 100));
              }
            }
            this.originPoint[T] = b;
          }),
          C && Ne.postRender(() => C(g, v)),
          Tc(this.visualElement, "transform");
        const { animationState: E } = this.visualElement;
        E && E.setActive("whileDrag", !0);
      },
      c = (g, v) => {
        const {
          dragPropagation: w,
          dragDirectionLock: x,
          onDirectionLock: C,
          onDrag: E,
        } = this.getProps();
        if (!w && !this.openDragLock) return;
        const { offset: T } = v;
        if (x && this.currentDirection === null) {
          (this.currentDirection = LE(T)),
            this.currentDirection !== null && C && C(this.currentDirection);
          return;
        }
        this.updateAxis("x", v.point, T),
          this.updateAxis("y", v.point, T),
          this.visualElement.render(),
          E && E(g, v);
      },
      f = (g, v) => this.stop(g, v),
      h = () =>
        zt((g) => {
          var v;
          return (
            this.getAnimationState(g) === "paused" &&
            ((v = this.getAxisMotionValue(g).animation) === null || v === void 0
              ? void 0
              : v.play())
          );
        }),
      { dragSnapToOrigin: m } = this.getProps();
    this.panSession = new vy(
      r,
      {
        onSessionStart: l,
        onStart: u,
        onMove: c,
        onSessionEnd: f,
        resumeAnimation: h,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: m,
        contextWindow: Ay(this.visualElement),
      }
    );
  }
  stop(r, o) {
    const s = this.isDragging;
    if ((this.cancel(), !s)) return;
    const { velocity: l } = o;
    this.startAnimation(l);
    const { onDragEnd: u } = this.getProps();
    u && Ne.postRender(() => u(r, o));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: r, animationState: o } = this.visualElement;
    r && (r.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      o && o.setActive("whileDrag", !1);
  }
  updateAxis(r, o, s) {
    const { drag: l } = this.getProps();
    if (!s || !ca(r, l, this.currentDirection)) return;
    const u = this.getAxisMotionValue(r);
    let c = this.originPoint[r] + s[r];
    this.constraints &&
      this.constraints[r] &&
      (c = wE(c, this.constraints[r], this.elastic[r])),
      u.set(c);
  }
  resolveConstraints() {
    var r;
    const { dragConstraints: o, dragElastic: s } = this.getProps(),
      l =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (r = this.visualElement.projection) === null || r === void 0
          ? void 0
          : r.layout,
      u = this.constraints;
    o && So(o)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : o && l
      ? (this.constraints = SE(l.layoutBox, o))
      : (this.constraints = !1),
      (this.elastic = TE(s)),
      u !== this.constraints &&
        l &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        zt((c) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(c) &&
            (this.constraints[c] = CE(l.layoutBox[c], this.constraints[c]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: r, onMeasureDragConstraints: o } = this.getProps();
    if (!r || !So(r)) return !1;
    const s = r.current,
      { projection: l } = this.visualElement;
    if (!l || !l.layout) return !1;
    const u = kE(s, l.root, this.visualElement.getTransformPagePoint());
    let c = EE(l.layout.layoutBox, u);
    if (o) {
      const f = o(AE(c));
      (this.hasMutatedConstraints = !!f), f && (c = Ey(f));
    }
    return c;
  }
  startAnimation(r) {
    const {
        drag: o,
        dragMomentum: s,
        dragElastic: l,
        dragTransition: u,
        dragSnapToOrigin: c,
        onDragTransitionEnd: f,
      } = this.getProps(),
      h = this.constraints || {},
      m = zt((g) => {
        if (!ca(g, o, this.currentDirection)) return;
        let v = (h && h[g]) || {};
        c && (v = { min: 0, max: 0 });
        const w = l ? 200 : 1e6,
          x = l ? 40 : 1e7,
          C = {
            type: "inertia",
            velocity: s ? r[g] : 0,
            bounceStiffness: w,
            bounceDamping: x,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...u,
            ...v,
          };
        return this.startAxisValueAnimation(g, C);
      });
    return Promise.all(m).then(f);
  }
  startAxisValueAnimation(r, o) {
    const s = this.getAxisMotionValue(r);
    return (
      Tc(this.visualElement, r), s.start(ld(r, s, 0, o, this.visualElement, !1))
    );
  }
  stopAnimation() {
    zt((r) => this.getAxisMotionValue(r).stop());
  }
  pauseAnimation() {
    zt((r) => {
      var o;
      return (o = this.getAxisMotionValue(r).animation) === null || o === void 0
        ? void 0
        : o.pause();
    });
  }
  getAnimationState(r) {
    var o;
    return (o = this.getAxisMotionValue(r).animation) === null || o === void 0
      ? void 0
      : o.state;
  }
  getAxisMotionValue(r) {
    const o = `_drag${r.toUpperCase()}`,
      s = this.visualElement.getProps(),
      l = s[o];
    return (
      l ||
      this.visualElement.getValue(r, (s.initial ? s.initial[r] : void 0) || 0)
    );
  }
  snapToCursor(r) {
    zt((o) => {
      const { drag: s } = this.getProps();
      if (!ca(o, s, this.currentDirection)) return;
      const { projection: l } = this.visualElement,
        u = this.getAxisMotionValue(o);
      if (l && l.layout) {
        const { min: c, max: f } = l.layout.layoutBox[o];
        u.set(r[o] - je(c, f, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: r, dragConstraints: o } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!So(o) || !s || !this.constraints) return;
    this.stopAnimation();
    const l = { x: 0, y: 0 };
    zt((c) => {
      const f = this.getAxisMotionValue(c);
      if (f && this.constraints !== !1) {
        const h = f.get();
        l[c] = PE({ min: h, max: h }, this.constraints[c]);
      }
    });
    const { transformTemplate: u } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = u ? u({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      zt((c) => {
        if (!ca(c, r, null)) return;
        const f = this.getAxisMotionValue(c),
          { min: h, max: m } = this.constraints[c];
        f.set(je(h, m, l[c]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    NE.set(this.visualElement, this);
    const r = this.visualElement.current,
      o = sr(r, "pointerdown", (h) => {
        const { drag: m, dragListener: g = !0 } = this.getProps();
        m && g && this.start(h);
      }),
      s = () => {
        const { dragConstraints: h } = this.getProps();
        So(h) && h.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: l } = this.visualElement,
      u = l.addEventListener("measure", s);
    l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()),
      Ne.read(s);
    const c = Cn(window, "resize", () => this.scalePositionWithinConstraints()),
      f = l.addEventListener(
        "didUpdate",
        ({ delta: h, hasLayoutChanged: m }) => {
          this.isDragging &&
            m &&
            (zt((g) => {
              const v = this.getAxisMotionValue(g);
              v &&
                ((this.originPoint[g] += h[g].translate),
                v.set(v.get() + h[g].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      c(), o(), u(), f && f();
    };
  }
  getProps() {
    const r = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: s = !1,
        dragPropagation: l = !1,
        dragConstraints: u = !1,
        dragElastic: c = bc,
        dragMomentum: f = !0,
      } = r;
    return {
      ...r,
      drag: o,
      dragDirectionLock: s,
      dragPropagation: l,
      dragConstraints: u,
      dragElastic: c,
      dragMomentum: f,
    };
  }
}
function ca(t, r, o) {
  return (r === !0 || r === t) && (o === null || o === t);
}
function LE(t, r = 10) {
  let o = null;
  return Math.abs(t.y) > r ? (o = "y") : Math.abs(t.x) > r && (o = "x"), o;
}
class OE extends mr {
  constructor(r) {
    super(r),
      (this.removeGroupControls = ut),
      (this.removeListeners = ut),
      (this.controls = new _E(r));
  }
  mount() {
    const { dragControls: r } = this.node.getProps();
    r && (this.removeGroupControls = r.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ut);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const fm = (t) => (r, o) => {
  t && Ne.postRender(() => t(r, o));
};
class ME extends mr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ut);
  }
  onPointerDown(r) {
    this.session = new vy(r, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ay(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: r,
      onPanStart: o,
      onPan: s,
      onPanEnd: l,
    } = this.node.getProps();
    return {
      onSessionStart: fm(r),
      onStart: fm(o),
      onMove: s,
      onEnd: (u, c) => {
        delete this.session, l && Ne.postRender(() => l(u, c));
      },
    };
  }
  mount() {
    this.removePointerDownListener = sr(this.node.current, "pointerdown", (r) =>
      this.onPointerDown(r)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const $a = S.createContext(null);
function IE() {
  const t = S.useContext($a);
  if (t === null) return [!0, null];
  const { isPresent: r, onExitComplete: o, register: s } = t,
    l = S.useId();
  S.useEffect(() => s(l), []);
  const u = S.useCallback(() => o && o(l), [l, o]);
  return !r && o ? [!1, u] : [!0];
}
const pd = S.createContext({}),
  by = S.createContext({}),
  Ea = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function pm(t, r) {
  return r.max === r.min ? 0 : (t / (r.max - r.min)) * 100;
}
const bi = {
    correct: (t, r) => {
      if (!r.target) return t;
      if (typeof t == "string")
        if (pe.test(t)) t = parseFloat(t);
        else return t;
      const o = pm(t, r.target.x),
        s = pm(t, r.target.y);
      return `${o}% ${s}%`;
    },
  },
  DE = {
    correct: (t, { treeScale: r, projectionDelta: o }) => {
      const s = t,
        l = ur.parse(t);
      if (l.length > 5) return s;
      const u = ur.createTransformer(t),
        c = typeof l[0] != "number" ? 1 : 0,
        f = o.x.scale * r.x,
        h = o.y.scale * r.y;
      (l[0 + c] /= f), (l[1 + c] /= h);
      const m = je(f, h, 0.5);
      return (
        typeof l[2 + c] == "number" && (l[2 + c] /= m),
        typeof l[3 + c] == "number" && (l[3 + c] /= m),
        u(l)
      );
    },
  },
  Ia = {};
function VE(t) {
  Object.assign(Ia, t);
}
const { schedule: hd, cancel: Yb } = kg(queueMicrotask, !1);
class FE extends S.Component {
  componentDidMount() {
    const {
        visualElement: r,
        layoutGroup: o,
        switchLayoutGroup: s,
        layoutId: l,
      } = this.props,
      { projection: u } = r;
    VE(jE),
      u &&
        (o.group && o.group.add(u),
        s && s.register && l && s.register(u),
        u.root.didUpdate(),
        u.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        u.setOptions({
          ...u.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ea.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(r) {
    const {
        layoutDependency: o,
        visualElement: s,
        drag: l,
        isPresent: u,
      } = this.props,
      c = s.projection;
    return (
      c &&
        ((c.isPresent = u),
        l || r.layoutDependency !== o || o === void 0
          ? c.willUpdate()
          : this.safeToRemove(),
        r.isPresent !== u &&
          (u
            ? c.promote()
            : c.relegate() ||
              Ne.postRender(() => {
                const f = c.getStack();
                (!f || !f.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: r } = this.props.visualElement;
    r &&
      (r.root.didUpdate(),
      hd.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: r,
        layoutGroup: o,
        switchLayoutGroup: s,
      } = this.props,
      { projection: l } = r;
    l &&
      (l.scheduleCheckAfterUnmount(),
      o && o.group && o.group.remove(l),
      s && s.deregister && s.deregister(l));
  }
  safeToRemove() {
    const { safeToRemove: r } = this.props;
    r && r();
  }
  render() {
    return null;
  }
}
function Ry(t) {
  const [r, o] = IE(),
    s = S.useContext(pd);
  return I.jsx(FE, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: S.useContext(by),
    isPresent: r,
    safeToRemove: o,
  });
}
const jE = {
    borderRadius: {
      ...bi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: bi,
    borderTopRightRadius: bi,
    borderBottomLeftRadius: bi,
    borderBottomRightRadius: bi,
    boxShadow: DE,
  },
  ky = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  BE = ky.length,
  hm = (t) => (typeof t == "string" ? parseFloat(t) : t),
  mm = (t) => typeof t == "number" || pe.test(t);
function zE(t, r, o, s, l, u) {
  l
    ? ((t.opacity = je(0, o.opacity !== void 0 ? o.opacity : 1, UE(s))),
      (t.opacityExit = je(r.opacity !== void 0 ? r.opacity : 1, 0, WE(s))))
    : u &&
      (t.opacity = je(
        r.opacity !== void 0 ? r.opacity : 1,
        o.opacity !== void 0 ? o.opacity : 1,
        s
      ));
  for (let c = 0; c < BE; c++) {
    const f = `border${ky[c]}Radius`;
    let h = gm(r, f),
      m = gm(o, f);
    if (h === void 0 && m === void 0) continue;
    h || (h = 0),
      m || (m = 0),
      h === 0 || m === 0 || mm(h) === mm(m)
        ? ((t[f] = Math.max(je(hm(h), hm(m), s), 0)),
          (ln.test(m) || ln.test(h)) && (t[f] += "%"))
        : (t[f] = m);
  }
  (r.rotate || o.rotate) && (t.rotate = je(r.rotate || 0, o.rotate || 0, s));
}
function gm(t, r) {
  return t[r] !== void 0 ? t[r] : t.borderRadius;
}
const UE = Ny(0, 0.5, Dg),
  WE = Ny(0.5, 0.95, ut);
function Ny(t, r, o) {
  return (s) => (s < t ? 0 : s > r ? 1 : o(ko(t, r, s)));
}
function ym(t, r) {
  (t.min = r.min), (t.max = r.max);
}
function Bt(t, r) {
  ym(t.x, r.x), ym(t.y, r.y);
}
function vm(t, r) {
  (t.translate = r.translate),
    (t.scale = r.scale),
    (t.originPoint = r.originPoint),
    (t.origin = r.origin);
}
function xm(t, r, o, s, l) {
  return (
    (t -= r), (t = Ma(t, 1 / o, s)), l !== void 0 && (t = Ma(t, 1 / l, s)), t
  );
}
function HE(t, r = 0, o = 1, s = 0.5, l, u = t, c = t) {
  if (
    (ln.test(r) &&
      ((r = parseFloat(r)), (r = je(c.min, c.max, r / 100) - c.min)),
    typeof r != "number")
  )
    return;
  let f = je(u.min, u.max, s);
  t === u && (f -= r),
    (t.min = xm(t.min, r, o, f, l)),
    (t.max = xm(t.max, r, o, f, l));
}
function wm(t, r, [o, s, l], u, c) {
  HE(t, r[o], r[s], r[l], r.scale, u, c);
}
const $E = ["x", "scaleX", "originX"],
  GE = ["y", "scaleY", "originY"];
function Sm(t, r, o, s) {
  wm(t.x, r, $E, o ? o.x : void 0, s ? s.x : void 0),
    wm(t.y, r, GE, o ? o.y : void 0, s ? s.y : void 0);
}
function Em(t) {
  return t.translate === 0 && t.scale === 1;
}
function _y(t) {
  return Em(t.x) && Em(t.y);
}
function Pm(t, r) {
  return t.min === r.min && t.max === r.max;
}
function KE(t, r) {
  return Pm(t.x, r.x) && Pm(t.y, r.y);
}
function Cm(t, r) {
  return (
    Math.round(t.min) === Math.round(r.min) &&
    Math.round(t.max) === Math.round(r.max)
  );
}
function Ly(t, r) {
  return Cm(t.x, r.x) && Cm(t.y, r.y);
}
function Tm(t) {
  return Nt(t.x) / Nt(t.y);
}
function Am(t, r) {
  return (
    t.translate === r.translate &&
    t.scale === r.scale &&
    t.originPoint === r.originPoint
  );
}
class YE {
  constructor() {
    this.members = [];
  }
  add(r) {
    ud(this.members, r), r.scheduleRender();
  }
  remove(r) {
    if (
      (cd(this.members, r),
      r === this.prevLead && (this.prevLead = void 0),
      r === this.lead)
    ) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(r) {
    const o = this.members.findIndex((l) => r === l);
    if (o === 0) return !1;
    let s;
    for (let l = o; l >= 0; l--) {
      const u = this.members[l];
      if (u.isPresent !== !1) {
        s = u;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(r, o) {
    const s = this.lead;
    if (r !== s && ((this.prevLead = s), (this.lead = r), r.show(), s)) {
      s.instance && s.scheduleRender(),
        r.scheduleRender(),
        (r.resumeFrom = s),
        o && (r.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((r.snapshot = s.snapshot),
          (r.snapshot.latestValues = s.animationValues || s.latestValues)),
        r.root && r.root.isUpdating && (r.isLayoutDirty = !0);
      const { crossfade: l } = r.options;
      l === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((r) => {
      const { options: o, resumingFrom: s } = r;
      o.onExitComplete && o.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((r) => {
      r.instance && r.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function QE(t, r, o) {
  let s = "";
  const l = t.x.translate / r.x,
    u = t.y.translate / r.y,
    c = (o == null ? void 0 : o.z) || 0;
  if (
    ((l || u || c) && (s = `translate3d(${l}px, ${u}px, ${c}px) `),
    (r.x !== 1 || r.y !== 1) && (s += `scale(${1 / r.x}, ${1 / r.y}) `),
    o)
  ) {
    const {
      transformPerspective: m,
      rotate: g,
      rotateX: v,
      rotateY: w,
      skewX: x,
      skewY: C,
    } = o;
    m && (s = `perspective(${m}px) ${s}`),
      g && (s += `rotate(${g}deg) `),
      v && (s += `rotateX(${v}deg) `),
      w && (s += `rotateY(${w}deg) `),
      x && (s += `skewX(${x}deg) `),
      C && (s += `skewY(${C}deg) `);
  }
  const f = t.x.scale * r.x,
    h = t.y.scale * r.y;
  return (f !== 1 || h !== 1) && (s += `scale(${f}, ${h})`), s || "none";
}
const XE = (t, r) => t.depth - r.depth;
class qE {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(r) {
    ud(this.children, r), (this.isDirty = !0);
  }
  remove(r) {
    cd(this.children, r), (this.isDirty = !0);
  }
  forEach(r) {
    this.isDirty && this.children.sort(XE),
      (this.isDirty = !1),
      this.children.forEach(r);
  }
}
function Pa(t) {
  const r = lt(t) ? t.get() : t;
  return jS(r) ? r.toValue() : r;
}
function ZE(t, r) {
  const o = un.now(),
    s = ({ timestamp: l }) => {
      const u = l - o;
      u >= r && (lr(s), t(u - r));
    };
  return Ne.read(s, !0), () => lr(s);
}
function JE(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function eP(t, r, o) {
  const s = lt(t) ? t : Bi(t);
  return s.start(ld("", s, r, o)), s.animation;
}
const Dr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Li = typeof window < "u" && window.MotionDebug !== void 0,
  Qu = ["", "X", "Y", "Z"],
  tP = { visibility: "hidden" },
  bm = 1e3;
let nP = 0;
function Xu(t, r, o, s) {
  const { latestValues: l } = r;
  l[t] && ((o[t] = l[t]), r.setStaticValue(t, 0), s && (s[t] = 0));
}
function Oy(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: r } = t.options;
  if (!r) return;
  const o = py(r);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: l, layoutId: u } = t.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Ne, !(l || u));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && Oy(s);
}
function My({
  attachResizeListener: t,
  defaultParent: r,
  measureScroll: o,
  checkIsScrollRoot: s,
  resetTransform: l,
}) {
  return class {
    constructor(c = {}, f = r == null ? void 0 : r()) {
      (this.id = nP++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Li &&
              (Dr.totalNodes =
                Dr.resolvedTargetDeltas =
                Dr.recalculatedProjection =
                  0),
            this.nodes.forEach(iP),
            this.nodes.forEach(cP),
            this.nodes.forEach(dP),
            this.nodes.forEach(sP),
            Li && window.MotionDebug.record(Dr);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = c),
        (this.root = f ? f.root || f : this),
        (this.path = f ? [...f.path, f] : []),
        (this.parent = f),
        (this.depth = f ? f.depth + 1 : 0);
      for (let h = 0; h < this.path.length; h++)
        this.path[h].shouldResetTransform = !0;
      this.root === this && (this.nodes = new qE());
    }
    addEventListener(c, f) {
      return (
        this.eventHandlers.has(c) || this.eventHandlers.set(c, new dd()),
        this.eventHandlers.get(c).add(f)
      );
    }
    notifyListeners(c, ...f) {
      const h = this.eventHandlers.get(c);
      h && h.notify(...f);
    }
    hasListeners(c) {
      return this.eventHandlers.has(c);
    }
    mount(c, f = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = JE(c)), (this.instance = c);
      const { layoutId: h, layout: m, visualElement: g } = this.options;
      if (
        (g && !g.current && g.mount(c),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        f && (m || h) && (this.isLayoutDirty = !0),
        t)
      ) {
        let v;
        const w = () => (this.root.updateBlockedByResize = !1);
        t(c, () => {
          (this.root.updateBlockedByResize = !0),
            v && v(),
            (v = ZE(w, 250)),
            Ea.hasAnimatedSinceResize &&
              ((Ea.hasAnimatedSinceResize = !1), this.nodes.forEach(km));
        });
      }
      h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 &&
          g &&
          (h || m) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: v,
              hasLayoutChanged: w,
              hasRelativeTargetChanged: x,
              layout: C,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const E =
                  this.options.transition || g.getDefaultTransition() || gP,
                { onLayoutAnimationStart: T, onLayoutAnimationComplete: b } =
                  g.getProps(),
                L = !this.targetLayout || !Ly(this.targetLayout, C) || x,
                M = !w && x;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                M ||
                (w && (L || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(v, M);
                const N = { ...Yc(E, "layout"), onPlay: T, onComplete: b };
                (g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((N.delay = 0), (N.type = !1)),
                  this.startAnimation(N);
              } else
                w || km(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = C;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const c = this.getStack();
      c && c.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        lr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(fP),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: c } = this.options;
      return c && c.getProps().transformTemplate;
    }
    willUpdate(c = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Oy(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        (v.shouldResetTransform = !0),
          v.updateScroll("snapshot"),
          v.options.layoutRoot && v.willUpdate(!1);
      }
      const { layoutId: f, layout: h } = this.options;
      if (f === void 0 && !h) return;
      const m = this.getTransformTemplate();
      (this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        c && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Rm);
        return;
      }
      this.isUpdating || this.nodes.forEach(lP),
        (this.isUpdating = !1),
        this.nodes.forEach(uP),
        this.nodes.forEach(rP),
        this.nodes.forEach(oP),
        this.clearAllSnapshots();
      const f = un.now();
      (tt.delta = bn(0, 1e3 / 60, f - tt.timestamp)),
        (tt.timestamp = f),
        (tt.isProcessing = !0),
        zu.update.process(tt),
        zu.preRender.process(tt),
        zu.render.process(tt),
        (tt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), hd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(aP), this.sharedNodes.forEach(pP);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ne.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ne.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
      const c = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ge()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: f } = this.options;
      f &&
        f.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          c ? c.layoutBox : void 0
        );
    }
    updateScroll(c = "measure") {
      let f = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === c &&
          (f = !1),
        f)
      ) {
        const h = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: c,
          isRoot: h,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : h,
        };
      }
    }
    resetTransform() {
      if (!l) return;
      const c =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        f = this.projectionDelta && !_y(this.projectionDelta),
        h = this.getTransformTemplate(),
        m = h ? h(this.latestValues, "") : void 0,
        g = m !== this.prevTransformTemplateValue;
      c &&
        (f || Ir(this.latestValues) || g) &&
        (l(this.instance, m),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(c = !0) {
      const f = this.measurePageBox();
      let h = this.removeElementScroll(f);
      return (
        c && (h = this.removeTransform(h)),
        yP(h),
        {
          animationId: this.root.animationId,
          measuredBox: f,
          layoutBox: h,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var c;
      const { visualElement: f } = this.options;
      if (!f) return Ge();
      const h = f.measureViewportBox();
      if (
        !(
          ((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) ||
          this.path.some(vP)
        )
      ) {
        const { scroll: g } = this.root;
        g && (Po(h.x, g.offset.x), Po(h.y, g.offset.y));
      }
      return h;
    }
    removeElementScroll(c) {
      var f;
      const h = Ge();
      if (
        (Bt(h, c), !((f = this.scroll) === null || f === void 0) && f.wasRoot)
      )
        return h;
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m],
          { scroll: v, options: w } = g;
        g !== this.root &&
          v &&
          w.layoutScroll &&
          (v.wasRoot && Bt(h, c), Po(h.x, v.offset.x), Po(h.y, v.offset.y));
      }
      return h;
    }
    applyTransform(c, f = !1) {
      const h = Ge();
      Bt(h, c);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        !f &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          Co(h, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
          Ir(g.latestValues) && Co(h, g.latestValues);
      }
      return Ir(this.latestValues) && Co(h, this.latestValues), h;
    }
    removeTransform(c) {
      const f = Ge();
      Bt(f, c);
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h];
        if (!m.instance || !Ir(m.latestValues)) continue;
        Rc(m.latestValues) && m.updateSnapshot();
        const g = Ge(),
          v = m.measurePageBox();
        Bt(g, v),
          Sm(f, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g);
      }
      return Ir(this.latestValues) && Sm(f, this.latestValues), f;
    }
    setTargetDelta(c) {
      (this.targetDelta = c),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(c) {
      this.options = {
        ...this.options,
        ...c,
        crossfade: c.crossfade !== void 0 ? c.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== tt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(c = !1) {
      var f;
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const m = !!this.resumingFrom || this !== h;
      if (
        !(
          c ||
          (m && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((f = this.parent) === null || f === void 0) &&
            f.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: w } = this.options;
      if (!(!this.layout || !(v || w))) {
        if (
          ((this.resolvedRelativeTargetAt = tt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const x = this.getClosestProjectingParent();
          x && x.layout && this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ge()),
              (this.relativeTargetOrigin = Ge()),
              Di(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                x.layout.layoutBox
              ),
              Bt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Ge()), (this.targetWithTransforms = Ge())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                xE(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Bt(this.target, this.layout.layoutBox),
                Cy(this.target, this.targetDelta))
              : Bt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const x = this.getClosestProjectingParent();
            x &&
            !!x.resumingFrom == !!this.resumingFrom &&
            !x.options.layoutScroll &&
            x.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = x),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ge()),
                (this.relativeTargetOrigin = Ge()),
                Di(this.relativeTargetOrigin, this.target, x.target),
                Bt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Li && Dr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Rc(this.parent.latestValues) ||
          Py(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var c;
      const f = this.getLead(),
        h = !!this.resumingFrom || this !== f;
      let m = !0;
      if (
        ((this.isProjectionDirty ||
          (!((c = this.parent) === null || c === void 0) &&
            c.isProjectionDirty)) &&
          (m = !1),
        h &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (m = !1),
        this.resolvedRelativeTargetAt === tt.timestamp && (m = !1),
        m)
      )
        return;
      const { layout: g, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || v))
      )
        return;
      Bt(this.layoutCorrected, this.layout.layoutBox);
      const w = this.treeScale.x,
        x = this.treeScale.y;
      RE(this.layoutCorrected, this.treeScale, this.path, h),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Ge()));
      const { target: C } = f;
      if (!C) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (vm(this.prevProjectionDelta.x, this.projectionDelta.x),
          vm(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Ii(this.projectionDelta, this.layoutCorrected, C, this.latestValues),
        (this.treeScale.x !== w ||
          this.treeScale.y !== x ||
          !Am(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Am(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", C)),
        Li && Dr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(c = !0) {
      var f;
      if (
        ((f = this.options.visualElement) === null ||
          f === void 0 ||
          f.scheduleRender(),
        c)
      ) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Eo()),
        (this.projectionDelta = Eo()),
        (this.projectionDeltaWithTransform = Eo());
    }
    setAnimationOrigin(c, f = !1) {
      const h = this.snapshot,
        m = h ? h.latestValues : {},
        g = { ...this.latestValues },
        v = Eo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !f);
      const w = Ge(),
        x = h ? h.source : void 0,
        C = this.layout ? this.layout.source : void 0,
        E = x !== C,
        T = this.getStack(),
        b = !T || T.members.length <= 1,
        L = !!(E && !b && this.options.crossfade === !0 && !this.path.some(mP));
      this.animationProgress = 0;
      let M;
      (this.mixTargetDelta = (N) => {
        const V = N / 1e3;
        Nm(v.x, c.x, V),
          Nm(v.y, c.y, V),
          this.setTargetDelta(v),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Di(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            hP(this.relativeTarget, this.relativeTargetOrigin, w, V),
            M && KE(this.relativeTarget, M) && (this.isProjectionDirty = !1),
            M || (M = Ge()),
            Bt(M, this.relativeTarget)),
          E &&
            ((this.animationValues = g), zE(g, m, this.latestValues, V, L, b)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = V);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(c) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (lr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ne.update(() => {
          (Ea.hasAnimatedSinceResize = !0),
            (this.currentAnimation = eP(0, bm, {
              ...c,
              onUpdate: (f) => {
                this.mixTargetDelta(f), c.onUpdate && c.onUpdate(f);
              },
              onComplete: () => {
                c.onComplete && c.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const c = this.getStack();
      c && c.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(bm),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const c = this.getLead();
      let {
        targetWithTransforms: f,
        target: h,
        layout: m,
        latestValues: g,
      } = c;
      if (!(!f || !h || !m)) {
        if (
          this !== c &&
          this.layout &&
          m &&
          Iy(this.options.animationType, this.layout.layoutBox, m.layoutBox)
        ) {
          h = this.target || Ge();
          const v = Nt(this.layout.layoutBox.x);
          (h.x.min = c.target.x.min), (h.x.max = h.x.min + v);
          const w = Nt(this.layout.layoutBox.y);
          (h.y.min = c.target.y.min), (h.y.max = h.y.min + w);
        }
        Bt(f, h),
          Co(f, g),
          Ii(this.projectionDeltaWithTransform, this.layoutCorrected, f, g);
      }
    }
    registerSharedNode(c, f) {
      this.sharedNodes.has(c) || this.sharedNodes.set(c, new YE()),
        this.sharedNodes.get(c).add(f);
      const m = f.options.initialPromotionConfig;
      f.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity:
          m && m.shouldPreserveFollowOpacity
            ? m.shouldPreserveFollowOpacity(f)
            : void 0,
      });
    }
    isLead() {
      const c = this.getStack();
      return c ? c.lead === this : !0;
    }
    getLead() {
      var c;
      const { layoutId: f } = this.options;
      return f
        ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var c;
      const { layoutId: f } = this.options;
      return f
        ? (c = this.getStack()) === null || c === void 0
          ? void 0
          : c.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: c } = this.options;
      if (c) return this.root.sharedNodes.get(c);
    }
    promote({ needsReset: c, transition: f, preserveFollowOpacity: h } = {}) {
      const m = this.getStack();
      m && m.promote(this, h),
        c && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        f && this.setOptions({ transition: f });
    }
    relegate() {
      const c = this.getStack();
      return c ? c.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: c } = this.options;
      if (!c) return;
      let f = !1;
      const { latestValues: h } = c;
      if (
        ((h.z ||
          h.rotate ||
          h.rotateX ||
          h.rotateY ||
          h.rotateZ ||
          h.skewX ||
          h.skewY) &&
          (f = !0),
        !f)
      )
        return;
      const m = {};
      h.z && Xu("z", c, m, this.animationValues);
      for (let g = 0; g < Qu.length; g++)
        Xu(`rotate${Qu[g]}`, c, m, this.animationValues),
          Xu(`skew${Qu[g]}`, c, m, this.animationValues);
      c.render();
      for (const g in m)
        c.setStaticValue(g, m[g]),
          this.animationValues && (this.animationValues[g] = m[g]);
      c.scheduleRender();
    }
    getProjectionStyles(c) {
      var f, h;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return tP;
      const m = { visibility: "" },
        g = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (m.opacity = ""),
          (m.pointerEvents = Pa(c == null ? void 0 : c.pointerEvents) || ""),
          (m.transform = g ? g(this.latestValues, "") : "none"),
          m
        );
      const v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        const E = {};
        return (
          this.options.layoutId &&
            ((E.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (E.pointerEvents = Pa(c == null ? void 0 : c.pointerEvents) || "")),
          this.hasProjected &&
            !Ir(this.latestValues) &&
            ((E.transform = g ? g({}, "") : "none"), (this.hasProjected = !1)),
          E
        );
      }
      const w = v.animationValues || v.latestValues;
      this.applyTransformsToTarget(),
        (m.transform = QE(
          this.projectionDeltaWithTransform,
          this.treeScale,
          w
        )),
        g && (m.transform = g(w, m.transform));
      const { x, y: C } = this.projectionDelta;
      (m.transformOrigin = `${x.origin * 100}% ${C.origin * 100}% 0`),
        v.animationValues
          ? (m.opacity =
              v === this
                ? (h =
                    (f = w.opacity) !== null && f !== void 0
                      ? f
                      : this.latestValues.opacity) !== null && h !== void 0
                  ? h
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : w.opacityExit)
          : (m.opacity =
              v === this
                ? w.opacity !== void 0
                  ? w.opacity
                  : ""
                : w.opacityExit !== void 0
                ? w.opacityExit
                : 0);
      for (const E in Ia) {
        if (w[E] === void 0) continue;
        const { correct: T, applyTo: b } = Ia[E],
          L = m.transform === "none" ? w[E] : T(w[E], v);
        if (b) {
          const M = b.length;
          for (let N = 0; N < M; N++) m[b[N]] = L;
        } else m[E] = L;
      }
      return (
        this.options.layoutId &&
          (m.pointerEvents =
            v === this
              ? Pa(c == null ? void 0 : c.pointerEvents) || ""
              : "none"),
        m
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((c) => {
        var f;
        return (f = c.currentAnimation) === null || f === void 0
          ? void 0
          : f.stop();
      }),
        this.root.nodes.forEach(Rm),
        this.root.sharedNodes.clear();
    }
  };
}
function rP(t) {
  t.updateLayout();
}
function oP(t) {
  var r;
  const o =
    ((r = t.resumeFrom) === null || r === void 0 ? void 0 : r.snapshot) ||
    t.snapshot;
  if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: l } = t.layout,
      { animationType: u } = t.options,
      c = o.source !== t.layout.source;
    u === "size"
      ? zt((v) => {
          const w = c ? o.measuredBox[v] : o.layoutBox[v],
            x = Nt(w);
          (w.min = s[v].min), (w.max = w.min + x);
        })
      : Iy(u, o.layoutBox, s) &&
        zt((v) => {
          const w = c ? o.measuredBox[v] : o.layoutBox[v],
            x = Nt(s[v]);
          (w.max = w.min + x),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[v].max = t.relativeTarget[v].min + x));
        });
    const f = Eo();
    Ii(f, s, o.layoutBox);
    const h = Eo();
    c ? Ii(h, t.applyTransform(l, !0), o.measuredBox) : Ii(h, s, o.layoutBox);
    const m = !_y(f);
    let g = !1;
    if (!t.resumeFrom) {
      const v = t.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: w, layout: x } = v;
        if (w && x) {
          const C = Ge();
          Di(C, o.layoutBox, w.layoutBox);
          const E = Ge();
          Di(E, s, x.layoutBox),
            Ly(C, E) || (g = !0),
            v.options.layoutRoot &&
              ((t.relativeTarget = E),
              (t.relativeTargetOrigin = C),
              (t.relativeParent = v));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: o,
      delta: h,
      layoutDelta: f,
      hasLayoutChanged: m,
      hasRelativeTargetChanged: g,
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function iP(t) {
  Li && Dr.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function sP(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function aP(t) {
  t.clearSnapshot();
}
function Rm(t) {
  t.clearMeasurements();
}
function lP(t) {
  t.isLayoutDirty = !1;
}
function uP(t) {
  const { visualElement: r } = t.options;
  r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function km(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function cP(t) {
  t.resolveTargetDelta();
}
function dP(t) {
  t.calcProjection();
}
function fP(t) {
  t.resetSkewAndRotation();
}
function pP(t) {
  t.removeLeadSnapshot();
}
function Nm(t, r, o) {
  (t.translate = je(r.translate, 0, o)),
    (t.scale = je(r.scale, 1, o)),
    (t.origin = r.origin),
    (t.originPoint = r.originPoint);
}
function _m(t, r, o, s) {
  (t.min = je(r.min, o.min, s)), (t.max = je(r.max, o.max, s));
}
function hP(t, r, o, s) {
  _m(t.x, r.x, o.x, s), _m(t.y, r.y, o.y, s);
}
function mP(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const gP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Lm = (t) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  Om = Lm("applewebkit/") && !Lm("chrome/") ? Math.round : ut;
function Mm(t) {
  (t.min = Om(t.min)), (t.max = Om(t.max));
}
function yP(t) {
  Mm(t.x), Mm(t.y);
}
function Iy(t, r, o) {
  return (
    t === "position" || (t === "preserve-aspect" && !vE(Tm(r), Tm(o), 0.2))
  );
}
function vP(t) {
  var r;
  return (
    t !== t.root &&
    ((r = t.scroll) === null || r === void 0 ? void 0 : r.wasRoot)
  );
}
const xP = My({
    attachResizeListener: (t, r) => Cn(t, "resize", r),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  qu = { current: void 0 },
  Dy = My({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!qu.current) {
        const t = new xP({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (qu.current = t);
      }
      return qu.current;
    },
    resetTransform: (t, r) => {
      t.style.transform = r !== void 0 ? r : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  wP = {
    pan: { Feature: ME },
    drag: { Feature: OE, ProjectionNode: Dy, MeasureLayout: Ry },
  };
function Im(t, r, o) {
  const { props: s } = t;
  t.animationState &&
    s.whileHover &&
    t.animationState.setActive("whileHover", o);
  const l = s[o ? "onHoverStart" : "onHoverEnd"];
  l && Ne.postRender(() => l(r, Gi(r)));
}
class SP extends mr {
  mount() {
    const { current: r, props: o } = this.node;
    r &&
      (this.unmount = lE(
        r,
        (s) => (Im(this.node, s, !0), (l) => Im(this.node, l, !1)),
        { passive: !o.onHoverStart && !o.onHoverEnd }
      ));
  }
  unmount() {}
}
class EP extends mr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let r = !1;
    try {
      r = this.node.current.matches(":focus-visible");
    } catch {
      r = !0;
    }
    !r ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ir(
      Cn(this.node.current, "focus", () => this.onFocus()),
      Cn(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Vy = (t, r) => (r ? (t === r ? !0 : Vy(t, r.parentElement)) : !1);
function Zu(t, r) {
  if (!r) return;
  const o = new PointerEvent("pointer" + t);
  r(o, Gi(o));
}
class PP extends mr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ut),
      (this.removeEndListeners = ut),
      (this.removeAccessibleListeners = ut),
      (this.startPointerPress = (r, o) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const s = this.node.getProps(),
          u = sr(
            window,
            "pointerup",
            (f, h) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: m,
                  onTapCancel: g,
                  globalTapTarget: v,
                } = this.node.getProps(),
                w = !v && !Vy(this.node.current, f.target) ? g : m;
              w && Ne.update(() => w(f, h));
            },
            { passive: !(s.onTap || s.onPointerUp) }
          ),
          c = sr(window, "pointercancel", (f, h) => this.cancelPress(f, h), {
            passive: !(s.onTapCancel || s.onPointerCancel),
          });
        (this.removeEndListeners = ir(u, c)), this.startPress(r, o);
      }),
      (this.startAccessiblePress = () => {
        const r = (u) => {
            if (u.key !== "Enter" || this.isPressing) return;
            const c = (f) => {
              f.key !== "Enter" ||
                !this.checkPressEnd() ||
                Zu("up", (h, m) => {
                  const { onTap: g } = this.node.getProps();
                  g && Ne.postRender(() => g(h, m));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Cn(this.node.current, "keyup", c)),
              Zu("down", (f, h) => {
                this.startPress(f, h);
              });
          },
          o = Cn(this.node.current, "keydown", r),
          s = () => {
            this.isPressing && Zu("cancel", (u, c) => this.cancelPress(u, c));
          },
          l = Cn(this.node.current, "blur", s);
        this.removeAccessibleListeners = ir(o, l);
      });
  }
  startPress(r, o) {
    this.isPressing = !0;
    const { onTapStart: s, whileTap: l } = this.node.getProps();
    l &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      s && Ne.postRender(() => s(r, o));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !gy()
    );
  }
  cancelPress(r, o) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: s } = this.node.getProps();
    s && Ne.postRender(() => s(r, o));
  }
  mount() {
    const r = this.node.getProps(),
      o = sr(
        r.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(r.onTapStart || r.onPointerStart) }
      ),
      s = Cn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = ir(o, s);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Nc = new WeakMap(),
  Ju = new WeakMap(),
  CP = (t) => {
    const r = Nc.get(t.target);
    r && r(t);
  },
  TP = (t) => {
    t.forEach(CP);
  };
function AP({ root: t, ...r }) {
  const o = t || document;
  Ju.has(o) || Ju.set(o, {});
  const s = Ju.get(o),
    l = JSON.stringify(r);
  return s[l] || (s[l] = new IntersectionObserver(TP, { root: t, ...r })), s[l];
}
function bP(t, r, o) {
  const s = AP(r);
  return (
    Nc.set(t, o),
    s.observe(t),
    () => {
      Nc.delete(t), s.unobserve(t);
    }
  );
}
const RP = { some: 0, all: 1 };
class kP extends mr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: r = {} } = this.node.getProps(),
      { root: o, margin: s, amount: l = "some", once: u } = r,
      c = {
        root: o ? o.current : void 0,
        rootMargin: s,
        threshold: typeof l == "number" ? l : RP[l],
      },
      f = (h) => {
        const { isIntersecting: m } = h;
        if (
          this.isInView === m ||
          ((this.isInView = m), u && !m && this.hasEnteredView)
        )
          return;
        m && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", m);
        const { onViewportEnter: g, onViewportLeave: v } = this.node.getProps(),
          w = m ? g : v;
        w && w(h);
      };
    return bP(this.node.current, c, f);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: r, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(NP(r, o)) && this.startObserver();
  }
  unmount() {}
}
function NP({ viewport: t = {} }, { viewport: r = {} } = {}) {
  return (o) => t[o] !== r[o];
}
const _P = {
    inView: { Feature: kP },
    tap: { Feature: PP },
    focus: { Feature: EP },
    hover: { Feature: SP },
  },
  LP = { layout: { ProjectionNode: Dy, MeasureLayout: Ry } },
  md = S.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Ga = S.createContext({}),
  gd = typeof window < "u",
  Fy = gd ? S.useLayoutEffect : S.useEffect,
  jy = S.createContext({ strict: !1 });
function OP(t, r, o, s, l) {
  var u, c;
  const { visualElement: f } = S.useContext(Ga),
    h = S.useContext(jy),
    m = S.useContext($a),
    g = S.useContext(md).reducedMotion,
    v = S.useRef();
  (s = s || h.renderer),
    !v.current &&
      s &&
      (v.current = s(t, {
        visualState: r,
        parent: f,
        props: o,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g,
      }));
  const w = v.current,
    x = S.useContext(by);
  w &&
    !w.projection &&
    l &&
    (w.type === "html" || w.type === "svg") &&
    MP(v.current, o, l, x);
  const C = S.useRef(!1);
  S.useInsertionEffect(() => {
    w && C.current && w.update(o, m);
  });
  const E = o[fy],
    T = S.useRef(
      !!E &&
        !(
          !((u = window.MotionHandoffIsComplete) === null || u === void 0) &&
          u.call(window, E)
        ) &&
        ((c = window.MotionHasOptimisedAnimation) === null || c === void 0
          ? void 0
          : c.call(window, E))
    );
  return (
    Fy(() => {
      w &&
        ((C.current = !0),
        (window.MotionIsMounted = !0),
        w.updateFeatures(),
        hd.render(w.render),
        T.current && w.animationState && w.animationState.animateChanges());
    }),
    S.useEffect(() => {
      w &&
        (!T.current && w.animationState && w.animationState.animateChanges(),
        T.current &&
          (queueMicrotask(() => {
            var b;
            (b = window.MotionHandoffMarkAsComplete) === null ||
              b === void 0 ||
              b.call(window, E);
          }),
          (T.current = !1)));
    }),
    w
  );
}
function MP(t, r, o, s) {
  const {
    layoutId: l,
    layout: u,
    drag: c,
    dragConstraints: f,
    layoutScroll: h,
    layoutRoot: m,
  } = r;
  (t.projection = new o(
    t.latestValues,
    r["data-framer-portal-id"] ? void 0 : By(t.parent)
  )),
    t.projection.setOptions({
      layoutId: l,
      layout: u,
      alwaysMeasureLayout: !!c || (f && So(f)),
      visualElement: t,
      animationType: typeof u == "string" ? u : "both",
      initialPromotionConfig: s,
      layoutScroll: h,
      layoutRoot: m,
    });
}
function By(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : By(t.parent);
}
function IP(t, r, o) {
  return S.useCallback(
    (s) => {
      s && t.mount && t.mount(s),
        r && (s ? r.mount(s) : r.unmount()),
        o && (typeof o == "function" ? o(s) : So(o) && (o.current = s));
    },
    [r]
  );
}
function Ka(t) {
  return Ua(t.animate) || Kc.some((r) => Vi(t[r]));
}
function zy(t) {
  return !!(Ka(t) || t.variants);
}
function DP(t, r) {
  if (Ka(t)) {
    const { initial: o, animate: s } = t;
    return {
      initial: o === !1 || Vi(o) ? o : void 0,
      animate: Vi(s) ? s : void 0,
    };
  }
  return t.inherit !== !1 ? r : {};
}
function VP(t) {
  const { initial: r, animate: o } = DP(t, S.useContext(Ga));
  return S.useMemo(() => ({ initial: r, animate: o }), [Dm(r), Dm(o)]);
}
function Dm(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Vm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  No = {};
for (const t in Vm) No[t] = { isEnabled: (r) => Vm[t].some((o) => !!r[o]) };
function FP(t) {
  for (const r in t) No[r] = { ...No[r], ...t[r] };
}
const jP = Symbol.for("motionComponentSymbol");
function BP({
  preloadedFeatures: t,
  createVisualElement: r,
  useRender: o,
  useVisualState: s,
  Component: l,
}) {
  t && FP(t);
  function u(f, h) {
    let m;
    const g = { ...S.useContext(md), ...f, layoutId: zP(f) },
      { isStatic: v } = g,
      w = VP(f),
      x = s(f, v);
    if (!v && gd) {
      UP();
      const C = WP(g);
      (m = C.MeasureLayout),
        (w.visualElement = OP(l, x, g, r, C.ProjectionNode));
    }
    return I.jsxs(Ga.Provider, {
      value: w,
      children: [
        m && w.visualElement
          ? I.jsx(m, { visualElement: w.visualElement, ...g })
          : null,
        o(l, f, IP(x, w.visualElement, h), x, v, w.visualElement),
      ],
    });
  }
  const c = S.forwardRef(u);
  return (c[jP] = l), c;
}
function zP({ layoutId: t }) {
  const r = S.useContext(pd).id;
  return r && t !== void 0 ? r + "-" + t : t;
}
function UP(t, r) {
  S.useContext(jy).strict;
}
function WP(t) {
  const { drag: r, layout: o } = No;
  if (!r && !o) return {};
  const s = { ...r, ...o };
  return {
    MeasureLayout:
      (r != null && r.isEnabled(t)) || (o != null && o.isEnabled(t))
        ? s.MeasureLayout
        : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
const HP = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function yd(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(HP.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function Uy(t, { style: r, vars: o }, s, l) {
  Object.assign(t.style, r, l && l.getProjectionStyles(s));
  for (const u in o) t.style.setProperty(u, o[u]);
}
const Wy = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Hy(t, r, o, s) {
  Uy(t, r, void 0, s);
  for (const l in r.attrs) t.setAttribute(Wy.has(l) ? l : fd(l), r.attrs[l]);
}
function $y(t, { layout: r, layoutId: o }) {
  return (
    Ur.has(t) ||
    t.startsWith("origin") ||
    ((r || o !== void 0) && (!!Ia[t] || t === "opacity"))
  );
}
function vd(t, r, o) {
  var s;
  const { style: l } = t,
    u = {};
  for (const c in l)
    (lt(l[c]) ||
      (r.style && lt(r.style[c])) ||
      $y(c, t) ||
      ((s = o == null ? void 0 : o.getValue(c)) === null || s === void 0
        ? void 0
        : s.liveStyle) !== void 0) &&
      (u[c] = l[c]);
  return u;
}
function Gy(t, r, o) {
  const s = vd(t, r, o);
  for (const l in t)
    if (lt(t[l]) || lt(r[l])) {
      const u =
        Wi.indexOf(l) !== -1
          ? "attr" + l.charAt(0).toUpperCase() + l.substring(1)
          : l;
      s[u] = t[l];
    }
  return s;
}
function xd(t) {
  const r = S.useRef(null);
  return r.current === null && (r.current = t()), r.current;
}
function $P(
  { scrapeMotionValuesFromProps: t, createRenderState: r, onMount: o },
  s,
  l,
  u
) {
  const c = { latestValues: GP(s, l, u, t), renderState: r() };
  return o && (c.mount = (f) => o(s, f, c)), c;
}
const Ky = (t) => (r, o) => {
  const s = S.useContext(Ga),
    l = S.useContext($a),
    u = () => $P(t, r, s, l);
  return o ? u() : xd(u);
};
function GP(t, r, o, s) {
  const l = {},
    u = s(t, {});
  for (const w in u) l[w] = Pa(u[w]);
  let { initial: c, animate: f } = t;
  const h = Ka(t),
    m = zy(t);
  r &&
    m &&
    !h &&
    t.inherit !== !1 &&
    (c === void 0 && (c = r.initial), f === void 0 && (f = r.animate));
  let g = o ? o.initial === !1 : !1;
  g = g || c === !1;
  const v = g ? f : c;
  if (v && typeof v != "boolean" && !Ua(v)) {
    const w = Array.isArray(v) ? v : [v];
    for (let x = 0; x < w.length; x++) {
      const C = $c(t, w[x]);
      if (C) {
        const { transitionEnd: E, transition: T, ...b } = C;
        for (const L in b) {
          let M = b[L];
          if (Array.isArray(M)) {
            const N = g ? M.length - 1 : 0;
            M = M[N];
          }
          M !== null && (l[L] = M);
        }
        for (const L in E) l[L] = E[L];
      }
    }
  }
  return l;
}
const wd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Yy = () => ({ ...wd(), attrs: {} }),
  Qy = (t, r) => (r && typeof t == "number" ? r.transform(t) : t),
  KP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  YP = Wi.length;
function QP(t, r, o) {
  let s = "",
    l = !0;
  for (let u = 0; u < YP; u++) {
    const c = Wi[u],
      f = t[c];
    if (f === void 0) continue;
    let h = !0;
    if (
      (typeof f == "number"
        ? (h = f === (c.startsWith("scale") ? 1 : 0))
        : (h = parseFloat(f) === 0),
      !h || o)
    ) {
      const m = Qy(f, td[c]);
      if (!h) {
        l = !1;
        const g = KP[c] || c;
        s += `${g}(${m}) `;
      }
      o && (r[c] = m);
    }
  }
  return (s = s.trim()), o ? (s = o(r, l ? "" : s)) : l && (s = "none"), s;
}
function Sd(t, r, o) {
  const { style: s, vars: l, transformOrigin: u } = t;
  let c = !1,
    f = !1;
  for (const h in r) {
    const m = r[h];
    if (Ur.has(h)) {
      c = !0;
      continue;
    } else if (zg(h)) {
      l[h] = m;
      continue;
    } else {
      const g = Qy(m, td[h]);
      h.startsWith("origin") ? ((f = !0), (u[h] = g)) : (s[h] = g);
    }
  }
  if (
    (r.transform ||
      (c || o
        ? (s.transform = QP(r, t.transform, o))
        : s.transform && (s.transform = "none")),
    f)
  ) {
    const { originX: h = "50%", originY: m = "50%", originZ: g = 0 } = u;
    s.transformOrigin = `${h} ${m} ${g}`;
  }
}
function Fm(t, r, o) {
  return typeof t == "string" ? t : pe.transform(r + o * t);
}
function XP(t, r, o) {
  const s = Fm(r, t.x, t.width),
    l = Fm(o, t.y, t.height);
  return `${s} ${l}`;
}
const qP = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  ZP = { offset: "strokeDashoffset", array: "strokeDasharray" };
function JP(t, r, o = 1, s = 0, l = !0) {
  t.pathLength = 1;
  const u = l ? qP : ZP;
  t[u.offset] = pe.transform(-s);
  const c = pe.transform(r),
    f = pe.transform(o);
  t[u.array] = `${c} ${f}`;
}
function Ed(
  t,
  {
    attrX: r,
    attrY: o,
    attrScale: s,
    originX: l,
    originY: u,
    pathLength: c,
    pathSpacing: f = 1,
    pathOffset: h = 0,
    ...m
  },
  g,
  v
) {
  if ((Sd(t, m, v), g)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: w, style: x, dimensions: C } = t;
  w.transform && (C && (x.transform = w.transform), delete w.transform),
    C &&
      (l !== void 0 || u !== void 0 || x.transform) &&
      (x.transformOrigin = XP(
        C,
        l !== void 0 ? l : 0.5,
        u !== void 0 ? u : 0.5
      )),
    r !== void 0 && (w.x = r),
    o !== void 0 && (w.y = o),
    s !== void 0 && (w.scale = s),
    c !== void 0 && JP(w, c, f, h, !1);
}
const Pd = (t) => typeof t == "string" && t.toLowerCase() === "svg",
  eC = {
    useVisualState: Ky({
      scrapeMotionValuesFromProps: Gy,
      createRenderState: Yy,
      onMount: (t, r, { renderState: o, latestValues: s }) => {
        Ne.read(() => {
          try {
            o.dimensions =
              typeof r.getBBox == "function"
                ? r.getBBox()
                : r.getBoundingClientRect();
          } catch {
            o.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Ne.render(() => {
            Ed(o, s, Pd(r.tagName), t.transformTemplate), Hy(r, o);
          });
      },
    }),
  },
  tC = {
    useVisualState: Ky({
      scrapeMotionValuesFromProps: vd,
      createRenderState: wd,
    }),
  };
function Xy(t, r, o) {
  for (const s in r) !lt(r[s]) && !$y(s, o) && (t[s] = r[s]);
}
function nC({ transformTemplate: t }, r) {
  return S.useMemo(() => {
    const o = wd();
    return Sd(o, r, t), Object.assign({}, o.vars, o.style);
  }, [r]);
}
function rC(t, r) {
  const o = t.style || {},
    s = {};
  return Xy(s, o, t), Object.assign(s, nC(t, r)), s;
}
function oC(t, r) {
  const o = {},
    s = rC(t, r);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((o.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (o.tabIndex = 0),
    (o.style = s),
    o
  );
}
const iC = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Da(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    iC.has(t)
  );
}
let qy = (t) => !Da(t);
function sC(t) {
  t && (qy = (r) => (r.startsWith("on") ? !Da(r) : t(r)));
}
try {
  sC(require("@emotion/is-prop-valid").default);
} catch {}
function aC(t, r, o) {
  const s = {};
  for (const l in t)
    (l === "values" && typeof t.values == "object") ||
      ((qy(l) ||
        (o === !0 && Da(l)) ||
        (!r && !Da(l)) ||
        (t.draggable && l.startsWith("onDrag"))) &&
        (s[l] = t[l]));
  return s;
}
function lC(t, r, o, s) {
  const l = S.useMemo(() => {
    const u = Yy();
    return (
      Ed(u, r, Pd(s), t.transformTemplate),
      { ...u.attrs, style: { ...u.style } }
    );
  }, [r]);
  if (t.style) {
    const u = {};
    Xy(u, t.style, t), (l.style = { ...u, ...l.style });
  }
  return l;
}
function uC(t = !1) {
  return (o, s, l, { latestValues: u }, c) => {
    const h = (yd(o) ? lC : oC)(s, u, c, o),
      m = aC(s, typeof o == "string", t),
      g = o !== S.Fragment ? { ...m, ...h, ref: l } : {},
      { children: v } = s,
      w = S.useMemo(() => (lt(v) ? v.get() : v), [v]);
    return S.createElement(o, { ...g, children: w });
  };
}
function cC(t, r) {
  return function (s, { forwardMotionProps: l } = { forwardMotionProps: !1 }) {
    const c = {
      ...(yd(s) ? eC : tC),
      preloadedFeatures: t,
      useRender: uC(l),
      createVisualElement: r,
      Component: s,
    };
    return BP(c);
  };
}
const _c = { current: null },
  Zy = { current: !1 };
function dC() {
  if (((Zy.current = !0), !!gd))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        r = () => (_c.current = t.matches);
      t.addListener(r), r();
    } else _c.current = !1;
}
function fC(t, r, o) {
  for (const s in r) {
    const l = r[s],
      u = o[s];
    if (lt(l)) t.addValue(s, l);
    else if (lt(u)) t.addValue(s, Bi(l, { owner: t }));
    else if (u !== l)
      if (t.hasValue(s)) {
        const c = t.getValue(s);
        c.liveStyle === !0 ? c.jump(l) : c.hasAnimated || c.set(l);
      } else {
        const c = t.getStaticValue(s);
        t.addValue(s, Bi(c !== void 0 ? c : l, { owner: t }));
      }
  }
  for (const s in o) r[s] === void 0 && t.removeValue(s);
  return r;
}
const jm = new WeakMap(),
  pC = [...Hg, at, ur],
  hC = (t) => pC.find(Wg(t)),
  Bm = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class mC {
  scrapeMotionValuesFromProps(r, o, s) {
    return {};
  }
  constructor(
    {
      parent: r,
      props: o,
      presenceContext: s,
      reducedMotionConfig: l,
      blockInitialAnimation: u,
      visualState: c,
    },
    f = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Zc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const w = un.now();
        this.renderScheduledAt < w &&
          ((this.renderScheduledAt = w), Ne.render(this.render, !1, !0));
      });
    const { latestValues: h, renderState: m } = c;
    (this.latestValues = h),
      (this.baseTarget = { ...h }),
      (this.initialValues = o.initial ? { ...h } : {}),
      (this.renderState = m),
      (this.parent = r),
      (this.props = o),
      (this.presenceContext = s),
      (this.depth = r ? r.depth + 1 : 0),
      (this.reducedMotionConfig = l),
      (this.options = f),
      (this.blockInitialAnimation = !!u),
      (this.isControllingVariants = Ka(o)),
      (this.isVariantNode = zy(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(r && r.current));
    const { willChange: g, ...v } = this.scrapeMotionValuesFromProps(
      o,
      {},
      this
    );
    for (const w in v) {
      const x = v[w];
      h[w] !== void 0 && lt(x) && x.set(h[w], !1);
    }
  }
  mount(r) {
    (this.current = r),
      jm.set(r, this),
      this.projection && !this.projection.instance && this.projection.mount(r),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, s) => this.bindToMotionValue(s, o)),
      Zy.current || dC(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : _c.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    jm.delete(this.current),
      this.projection && this.projection.unmount(),
      lr(this.notifyUpdate),
      lr(this.render),
      this.valueSubscriptions.forEach((r) => r()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const r in this.events) this.events[r].clear();
    for (const r in this.features) {
      const o = this.features[r];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(r, o) {
    this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)();
    const s = Ur.has(r),
      l = o.on("change", (f) => {
        (this.latestValues[r] = f),
          this.props.onUpdate && Ne.preRender(this.notifyUpdate),
          s && this.projection && (this.projection.isTransformDirty = !0);
      }),
      u = o.on("renderRequest", this.scheduleRender);
    let c;
    window.MotionCheckAppearSync &&
      (c = window.MotionCheckAppearSync(this, r, o)),
      this.valueSubscriptions.set(r, () => {
        l(), u(), c && c(), o.owner && o.stop();
      });
  }
  sortNodePosition(r) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== r.type
      ? 0
      : this.sortInstanceNodePosition(this.current, r.current);
  }
  updateFeatures() {
    let r = "animation";
    for (r in No) {
      const o = No[r];
      if (!o) continue;
      const { isEnabled: s, Feature: l } = o;
      if (
        (!this.features[r] &&
          l &&
          s(this.props) &&
          (this.features[r] = new l(this)),
        this.features[r])
      ) {
        const u = this.features[r];
        u.isMounted ? u.update() : (u.mount(), (u.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ge();
  }
  getStaticValue(r) {
    return this.latestValues[r];
  }
  setStaticValue(r, o) {
    this.latestValues[r] = o;
  }
  update(r, o) {
    (r.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = r),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o);
    for (let s = 0; s < Bm.length; s++) {
      const l = Bm[s];
      this.propEventSubscriptions[l] &&
        (this.propEventSubscriptions[l](),
        delete this.propEventSubscriptions[l]);
      const u = "on" + l,
        c = r[u];
      c && (this.propEventSubscriptions[l] = this.on(l, c));
    }
    (this.prevMotionValues = fC(
      this,
      this.scrapeMotionValuesFromProps(r, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(r) {
    return this.props.variants ? this.props.variants[r] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(r) {
    const o = this.getClosestVariantNode();
    if (o)
      return (
        o.variantChildren && o.variantChildren.add(r),
        () => o.variantChildren.delete(r)
      );
  }
  addValue(r, o) {
    const s = this.values.get(r);
    o !== s &&
      (s && this.removeValue(r),
      this.bindToMotionValue(r, o),
      this.values.set(r, o),
      (this.latestValues[r] = o.get()));
  }
  removeValue(r) {
    this.values.delete(r);
    const o = this.valueSubscriptions.get(r);
    o && (o(), this.valueSubscriptions.delete(r)),
      delete this.latestValues[r],
      this.removeValueFromRenderState(r, this.renderState);
  }
  hasValue(r) {
    return this.values.has(r);
  }
  getValue(r, o) {
    if (this.props.values && this.props.values[r]) return this.props.values[r];
    let s = this.values.get(r);
    return (
      s === void 0 &&
        o !== void 0 &&
        ((s = Bi(o === null ? void 0 : o, { owner: this })),
        this.addValue(r, s)),
      s
    );
  }
  readValue(r, o) {
    var s;
    let l =
      this.latestValues[r] !== void 0 || !this.current
        ? this.latestValues[r]
        : (s = this.getBaseTargetFromProps(this.props, r)) !== null &&
          s !== void 0
        ? s
        : this.readValueFromInstance(this.current, r, this.options);
    return (
      l != null &&
        (typeof l == "string" && (jg(l) || Fg(l))
          ? (l = parseFloat(l))
          : !hC(l) && ur.test(o) && (l = Zg(r, o)),
        this.setBaseTarget(r, lt(l) ? l.get() : l)),
      lt(l) ? l.get() : l
    );
  }
  setBaseTarget(r, o) {
    this.baseTarget[r] = o;
  }
  getBaseTarget(r) {
    var o;
    const { initial: s } = this.props;
    let l;
    if (typeof s == "string" || typeof s == "object") {
      const c = $c(
        this.props,
        s,
        (o = this.presenceContext) === null || o === void 0 ? void 0 : o.custom
      );
      c && (l = c[r]);
    }
    if (s && l !== void 0) return l;
    const u = this.getBaseTargetFromProps(this.props, r);
    return u !== void 0 && !lt(u)
      ? u
      : this.initialValues[r] !== void 0 && l === void 0
      ? void 0
      : this.baseTarget[r];
  }
  on(r, o) {
    return this.events[r] || (this.events[r] = new dd()), this.events[r].add(o);
  }
  notify(r, ...o) {
    this.events[r] && this.events[r].notify(...o);
  }
}
class Jy extends mC {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Jg);
  }
  sortInstanceNodePosition(r, o) {
    return r.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(r, o) {
    return r.style ? r.style[o] : void 0;
  }
  removeValueFromRenderState(r, { vars: o, style: s }) {
    delete o[r], delete s[r];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: r } = this.props;
    lt(r) &&
      (this.childSubscription = r.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
}
function gC(t) {
  return window.getComputedStyle(t);
}
class yC extends Jy {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Uy);
  }
  readValueFromInstance(r, o) {
    if (Ur.has(o)) {
      const s = nd(o);
      return (s && s.default) || 0;
    } else {
      const s = gC(r),
        l = (zg(o) ? s.getPropertyValue(o) : s[o]) || 0;
      return typeof l == "string" ? l.trim() : l;
    }
  }
  measureInstanceViewportBox(r, { transformPagePoint: o }) {
    return Ty(r, o);
  }
  build(r, o, s) {
    Sd(r, o, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(r, o, s) {
    return vd(r, o, s);
  }
}
class vC extends Jy {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ge);
  }
  getBaseTargetFromProps(r, o) {
    return r[o];
  }
  readValueFromInstance(r, o) {
    if (Ur.has(o)) {
      const s = nd(o);
      return (s && s.default) || 0;
    }
    return (o = Wy.has(o) ? o : fd(o)), r.getAttribute(o);
  }
  scrapeMotionValuesFromProps(r, o, s) {
    return Gy(r, o, s);
  }
  build(r, o, s) {
    Ed(r, o, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(r, o, s, l) {
    Hy(r, o, s, l);
  }
  mount(r) {
    (this.isSVGTag = Pd(r.tagName)), super.mount(r);
  }
}
const xC = (t, r) =>
    yd(t) ? new vC(r) : new yC(r, { allowProjection: t !== S.Fragment }),
  wC = cC({ ...sE, ..._P, ...wP, ...LP }, xC),
  Mr = ow(wC);
class SC extends S.Component {
  getSnapshotBeforeUpdate(r) {
    const o = this.props.childRef.current;
    if (o && r.isPresent && !this.props.isPresent) {
      const s = this.props.sizeRef.current;
      (s.height = o.offsetHeight || 0),
        (s.width = o.offsetWidth || 0),
        (s.top = o.offsetTop),
        (s.left = o.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function EC({ children: t, isPresent: r }) {
  const o = S.useId(),
    s = S.useRef(null),
    l = S.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: u } = S.useContext(md);
  return (
    S.useInsertionEffect(() => {
      const { width: c, height: f, top: h, left: m } = l.current;
      if (r || !s.current || !c || !f) return;
      s.current.dataset.motionPopId = o;
      const g = document.createElement("style");
      return (
        u && (g.nonce = u),
        document.head.appendChild(g),
        g.sheet &&
          g.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${f}px !important;
            top: ${h}px !important;
            left: ${m}px !important;
          }
        `),
        () => {
          document.head.removeChild(g);
        }
      );
    }, [r]),
    I.jsx(SC, {
      isPresent: r,
      childRef: s,
      sizeRef: l,
      children: S.cloneElement(t, { ref: s }),
    })
  );
}
const PC = ({
  children: t,
  initial: r,
  isPresent: o,
  onExitComplete: s,
  custom: l,
  presenceAffectsLayout: u,
  mode: c,
}) => {
  const f = xd(CC),
    h = S.useId(),
    m = S.useCallback(
      (v) => {
        f.set(v, !0);
        for (const w of f.values()) if (!w) return;
        s && s();
      },
      [f, s]
    ),
    g = S.useMemo(
      () => ({
        id: h,
        initial: r,
        isPresent: o,
        custom: l,
        onExitComplete: m,
        register: (v) => (f.set(v, !1), () => f.delete(v)),
      }),
      u ? [Math.random(), m] : [o, m]
    );
  return (
    S.useMemo(() => {
      f.forEach((v, w) => f.set(w, !1));
    }, [o]),
    S.useEffect(() => {
      !o && !f.size && s && s();
    }, [o]),
    c === "popLayout" && (t = I.jsx(EC, { isPresent: o, children: t })),
    I.jsx($a.Provider, { value: g, children: t })
  );
};
function CC() {
  return new Map();
}
const da = (t) => t.key || "";
function zm(t) {
  const r = [];
  return (
    S.Children.forEach(t, (o) => {
      S.isValidElement(o) && r.push(o);
    }),
    r
  );
}
const TC = ({
  children: t,
  exitBeforeEnter: r,
  custom: o,
  initial: s = !0,
  onExitComplete: l,
  presenceAffectsLayout: u = !0,
  mode: c = "sync",
}) => {
  const f = S.useMemo(() => zm(t), [t]),
    h = f.map(da),
    m = S.useRef(!0),
    g = S.useRef(f),
    v = xd(() => new Map()),
    [w, x] = S.useState(f),
    [C, E] = S.useState(f);
  Fy(() => {
    (m.current = !1), (g.current = f);
    for (let L = 0; L < C.length; L++) {
      const M = da(C[L]);
      h.includes(M) ? v.delete(M) : v.get(M) !== !0 && v.set(M, !1);
    }
  }, [C, h.length, h.join("-")]);
  const T = [];
  if (f !== w) {
    let L = [...f];
    for (let M = 0; M < C.length; M++) {
      const N = C[M],
        V = da(N);
      h.includes(V) || (L.splice(M, 0, N), T.push(N));
    }
    c === "wait" && T.length && (L = T), E(zm(L)), x(f);
    return;
  }
  const { forceRender: b } = S.useContext(pd);
  return I.jsx(I.Fragment, {
    children: C.map((L) => {
      const M = da(L),
        N = f === C || h.includes(M),
        V = () => {
          if (v.has(M)) v.set(M, !0);
          else return;
          let W = !0;
          v.forEach((Y) => {
            Y || (W = !1);
          }),
            W && (b == null || b(), E(g.current), l && l());
        };
      return I.jsx(
        PC,
        {
          isPresent: N,
          initial: !m.current || s ? void 0 : !1,
          custom: N ? void 0 : o,
          presenceAffectsLayout: u,
          mode: c,
          onExitComplete: N ? void 0 : V,
          children: L,
        },
        M
      );
    }),
  });
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AC = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ev = (...t) =>
    t
      .filter((r, o, s) => !!r && r.trim() !== "" && s.indexOf(r) === o)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var bC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const RC = S.forwardRef(
  (
    {
      color: t = "currentColor",
      size: r = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: s,
      className: l = "",
      children: u,
      iconNode: c,
      ...f
    },
    h
  ) =>
    S.createElement(
      "svg",
      {
        ref: h,
        ...bC,
        width: r,
        height: r,
        stroke: t,
        strokeWidth: s ? (Number(o) * 24) / Number(r) : o,
        className: ev("lucide", l),
        ...f,
      },
      [
        ...c.map(([m, g]) => S.createElement(m, g)),
        ...(Array.isArray(u) ? u : [u]),
      ]
    )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kC = (t, r) => {
  const o = S.forwardRef(({ className: s, ...l }, u) =>
    S.createElement(RC, {
      ref: u,
      iconNode: r,
      className: ev(`lucide-${AC(t)}`, s),
      ...l,
    })
  );
  return (o.displayName = `${t}`), o;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const NC = kC("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
var _C = (t) => {
    switch (t) {
      case "success":
        return MC;
      case "info":
        return DC;
      case "warning":
        return IC;
      case "error":
        return VC;
      default:
        return null;
    }
  },
  LC = Array(12).fill(0),
  OC = ({ visible: t, className: r }) =>
    Z.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", r].filter(Boolean).join(" "),
        "data-visible": t,
      },
      Z.createElement(
        "div",
        { className: "sonner-spinner" },
        LC.map((o, s) =>
          Z.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${s}`,
          })
        )
      )
    ),
  MC = Z.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Z.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  IC = Z.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Z.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  DC = Z.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Z.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  VC = Z.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Z.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  FC = Z.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    Z.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    Z.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  jC = () => {
    let [t, r] = Z.useState(document.hidden);
    return (
      Z.useEffect(() => {
        let o = () => {
          r(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", o),
          () => window.removeEventListener("visibilitychange", o)
        );
      }, []),
      t
    );
  },
  Lc = 1,
  BC = class {
    constructor() {
      (this.subscribe = (t) => (
        this.subscribers.push(t),
        () => {
          let r = this.subscribers.indexOf(t);
          this.subscribers.splice(r, 1);
        }
      )),
        (this.publish = (t) => {
          this.subscribers.forEach((r) => r(t));
        }),
        (this.addToast = (t) => {
          this.publish(t), (this.toasts = [...this.toasts, t]);
        }),
        (this.create = (t) => {
          var r;
          let { message: o, ...s } = t,
            l =
              typeof (t == null ? void 0 : t.id) == "number" ||
              ((r = t.id) == null ? void 0 : r.length) > 0
                ? t.id
                : Lc++,
            u = this.toasts.find((f) => f.id === l),
            c = t.dismissible === void 0 ? !0 : t.dismissible;
          return (
            u
              ? (this.toasts = this.toasts.map((f) =>
                  f.id === l
                    ? (this.publish({ ...f, ...t, id: l, title: o }),
                      { ...f, ...t, id: l, dismissible: c, title: o })
                    : f
                ))
              : this.addToast({ title: o, ...s, dismissible: c, id: l }),
            l
          );
        }),
        (this.dismiss = (t) => (
          t ||
            this.toasts.forEach((r) => {
              this.subscribers.forEach((o) => o({ id: r.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((r) => r({ id: t, dismiss: !0 })),
          t
        )),
        (this.message = (t, r) => this.create({ ...r, message: t })),
        (this.error = (t, r) =>
          this.create({ ...r, message: t, type: "error" })),
        (this.success = (t, r) =>
          this.create({ ...r, type: "success", message: t })),
        (this.info = (t, r) => this.create({ ...r, type: "info", message: t })),
        (this.warning = (t, r) =>
          this.create({ ...r, type: "warning", message: t })),
        (this.loading = (t, r) =>
          this.create({ ...r, type: "loading", message: t })),
        (this.promise = (t, r) => {
          if (!r) return;
          let o;
          r.loading !== void 0 &&
            (o = this.create({
              ...r,
              promise: t,
              type: "loading",
              message: r.loading,
              description:
                typeof r.description != "function" ? r.description : void 0,
            }));
          let s = t instanceof Promise ? t : t(),
            l = o !== void 0,
            u,
            c = s
              .then(async (h) => {
                if (((u = ["resolve", h]), Z.isValidElement(h)))
                  (l = !1), this.create({ id: o, type: "default", message: h });
                else if (UC(h) && !h.ok) {
                  l = !1;
                  let m =
                      typeof r.error == "function"
                        ? await r.error(`HTTP error! status: ${h.status}`)
                        : r.error,
                    g =
                      typeof r.description == "function"
                        ? await r.description(`HTTP error! status: ${h.status}`)
                        : r.description;
                  this.create({
                    id: o,
                    type: "error",
                    message: m,
                    description: g,
                  });
                } else if (r.success !== void 0) {
                  l = !1;
                  let m =
                      typeof r.success == "function"
                        ? await r.success(h)
                        : r.success,
                    g =
                      typeof r.description == "function"
                        ? await r.description(h)
                        : r.description;
                  this.create({
                    id: o,
                    type: "success",
                    message: m,
                    description: g,
                  });
                }
              })
              .catch(async (h) => {
                if (((u = ["reject", h]), r.error !== void 0)) {
                  l = !1;
                  let m =
                      typeof r.error == "function" ? await r.error(h) : r.error,
                    g =
                      typeof r.description == "function"
                        ? await r.description(h)
                        : r.description;
                  this.create({
                    id: o,
                    type: "error",
                    message: m,
                    description: g,
                  });
                }
              })
              .finally(() => {
                var h;
                l && (this.dismiss(o), (o = void 0)),
                  (h = r.finally) == null || h.call(r);
              }),
            f = () =>
              new Promise((h, m) =>
                c.then(() => (u[0] === "reject" ? m(u[1]) : h(u[1]))).catch(m)
              );
          return typeof o != "string" && typeof o != "number"
            ? { unwrap: f }
            : Object.assign(o, { unwrap: f });
        }),
        (this.custom = (t, r) => {
          let o = (r == null ? void 0 : r.id) || Lc++;
          return this.create({ jsx: t(o), id: o, ...r }), o;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  bt = new BC(),
  zC = (t, r) => {
    let o = (r == null ? void 0 : r.id) || Lc++;
    return bt.addToast({ title: t, ...r, id: o }), o;
  },
  UC = (t) =>
    t &&
    typeof t == "object" &&
    "ok" in t &&
    typeof t.ok == "boolean" &&
    "status" in t &&
    typeof t.status == "number",
  WC = zC,
  HC = () => bt.toasts,
  fa = Object.assign(
    WC,
    {
      success: bt.success,
      info: bt.info,
      warning: bt.warning,
      error: bt.error,
      custom: bt.custom,
      message: bt.message,
      promise: bt.promise,
      dismiss: bt.dismiss,
      loading: bt.loading,
    },
    { getHistory: HC }
  );
function $C(t, { insertAt: r } = {}) {
  if (typeof document > "u") return;
  let o = document.head || document.getElementsByTagName("head")[0],
    s = document.createElement("style");
  (s.type = "text/css"),
    r === "top" && o.firstChild
      ? o.insertBefore(s, o.firstChild)
      : o.appendChild(s),
    s.styleSheet
      ? (s.styleSheet.cssText = t)
      : s.appendChild(document.createTextNode(t));
}
$C(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function pa(t) {
  return t.label !== void 0;
}
var GC = 3,
  KC = "32px",
  Um = 4e3,
  YC = 356,
  QC = 14,
  XC = 20,
  qC = 200;
function ZC(...t) {
  return t.filter(Boolean).join(" ");
}
var JC = (t) => {
  var r, o, s, l, u, c, f, h, m, g, v;
  let {
      invert: w,
      toast: x,
      unstyled: C,
      interacting: E,
      setHeights: T,
      visibleToasts: b,
      heights: L,
      index: M,
      toasts: N,
      expanded: V,
      removeToast: W,
      defaultRichColors: Y,
      closeButton: X,
      style: ue,
      cancelButtonStyle: ce,
      actionButtonStyle: we,
      className: re = "",
      descriptionClassName: ve = "",
      duration: $,
      position: te,
      gap: q,
      loadingIcon: z,
      expandByDefault: F,
      classNames: B,
      icons: G,
      closeButtonAriaLabel: k = "Close toast",
      pauseWhenPageIsHidden: j,
      cn: J,
    } = t,
    [oe, he] = Z.useState(!1),
    [xe, me] = Z.useState(!1),
    [Pe, Te] = Z.useState(!1),
    [Be, wt] = Z.useState(!1),
    [yr, St] = Z.useState(!1),
    [Nn, _n] = Z.useState(0),
    [Wr, Ln] = Z.useState(0),
    pn = Z.useRef(x.duration || $ || Um),
    Ut = Z.useRef(null),
    _t = Z.useRef(null),
    On = M === 0,
    Vo = M + 1 <= b,
    ct = x.type,
    hn = x.dismissible !== !1,
    Qi = x.className || "",
    Xi = x.descriptionClassName || "",
    Mn = Z.useMemo(
      () => L.findIndex((ge) => ge.toastId === x.id) || 0,
      [L, x.id]
    ),
    Hr = Z.useMemo(() => {
      var ge;
      return (ge = x.closeButton) != null ? ge : X;
    }, [x.closeButton, X]);
  Z.useMemo(() => x.duration || $ || Um, [x.duration, $]);
  let $r = Z.useRef(0),
    Lt = Z.useRef(0),
    In = Z.useRef(0),
    Gr = Z.useRef(null),
    [Fo, qi] = te.split("-"),
    Zi = Z.useMemo(
      () => L.reduce((ge, Ce, _e) => (_e >= Mn ? ge : ge + Ce.height), 0),
      [L, Mn]
    ),
    Kr = jC(),
    jo = x.invert || w,
    vr = ct === "loading";
  (Lt.current = Z.useMemo(() => Mn * q + Zi, [Mn, Zi])),
    Z.useEffect(() => {
      he(!0);
    }, []),
    Z.useEffect(() => {
      let ge = _t.current;
      if (ge) {
        let Ce = ge.getBoundingClientRect().height;
        return (
          Ln(Ce),
          T((_e) => [
            { toastId: x.id, height: Ce, position: x.position },
            ..._e,
          ]),
          () => T((_e) => _e.filter((pt) => pt.toastId !== x.id))
        );
      }
    }, [T, x.id]),
    Z.useLayoutEffect(() => {
      if (!oe) return;
      let ge = _t.current,
        Ce = ge.style.height;
      ge.style.height = "auto";
      let _e = ge.getBoundingClientRect().height;
      (ge.style.height = Ce),
        Ln(_e),
        T((pt) =>
          pt.find((Et) => Et.toastId === x.id)
            ? pt.map((Et) => (Et.toastId === x.id ? { ...Et, height: _e } : Et))
            : [{ toastId: x.id, height: _e, position: x.position }, ...pt]
        );
    }, [oe, x.title, x.description, T, x.id]);
  let Ot = Z.useCallback(() => {
    me(!0),
      _n(Lt.current),
      T((ge) => ge.filter((Ce) => Ce.toastId !== x.id)),
      setTimeout(() => {
        W(x);
      }, qC);
  }, [x, W, T, Lt]);
  Z.useEffect(() => {
    if (
      (x.promise && ct === "loading") ||
      x.duration === 1 / 0 ||
      x.type === "loading"
    )
      return;
    let ge;
    return (
      V || E || (j && Kr)
        ? (() => {
            if (In.current < $r.current) {
              let Ce = new Date().getTime() - $r.current;
              pn.current = pn.current - Ce;
            }
            In.current = new Date().getTime();
          })()
        : pn.current !== 1 / 0 &&
          (($r.current = new Date().getTime()),
          (ge = setTimeout(() => {
            var Ce;
            (Ce = x.onAutoClose) == null || Ce.call(x, x), Ot();
          }, pn.current))),
      () => clearTimeout(ge)
    );
  }, [V, E, x, ct, j, Kr, Ot]),
    Z.useEffect(() => {
      x.delete && Ot();
    }, [Ot, x.delete]);
  function Bo() {
    var ge, Ce, _e;
    return G != null && G.loading
      ? Z.createElement(
          "div",
          {
            className: J(
              B == null ? void 0 : B.loader,
              (ge = x == null ? void 0 : x.classNames) == null
                ? void 0
                : ge.loader,
              "sonner-loader"
            ),
            "data-visible": ct === "loading",
          },
          G.loading
        )
      : z
      ? Z.createElement(
          "div",
          {
            className: J(
              B == null ? void 0 : B.loader,
              (Ce = x == null ? void 0 : x.classNames) == null
                ? void 0
                : Ce.loader,
              "sonner-loader"
            ),
            "data-visible": ct === "loading",
          },
          z
        )
      : Z.createElement(OC, {
          className: J(
            B == null ? void 0 : B.loader,
            (_e = x == null ? void 0 : x.classNames) == null
              ? void 0
              : _e.loader
          ),
          visible: ct === "loading",
        });
  }
  return Z.createElement(
    "li",
    {
      tabIndex: 0,
      ref: _t,
      className: J(
        re,
        Qi,
        B == null ? void 0 : B.toast,
        (r = x == null ? void 0 : x.classNames) == null ? void 0 : r.toast,
        B == null ? void 0 : B.default,
        B == null ? void 0 : B[ct],
        (o = x == null ? void 0 : x.classNames) == null ? void 0 : o[ct]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (s = x.richColors) != null ? s : Y,
      "data-styled": !(x.jsx || x.unstyled || C),
      "data-mounted": oe,
      "data-promise": !!x.promise,
      "data-swiped": yr,
      "data-removed": xe,
      "data-visible": Vo,
      "data-y-position": Fo,
      "data-x-position": qi,
      "data-index": M,
      "data-front": On,
      "data-swiping": Pe,
      "data-dismissible": hn,
      "data-type": ct,
      "data-invert": jo,
      "data-swipe-out": Be,
      "data-expanded": !!(V || (F && oe)),
      style: {
        "--index": M,
        "--toasts-before": M,
        "--z-index": N.length - M,
        "--offset": `${xe ? Nn : Lt.current}px`,
        "--initial-height": F ? "auto" : `${Wr}px`,
        ...ue,
        ...x.style,
      },
      onPointerDown: (ge) => {
        vr ||
          !hn ||
          ((Ut.current = new Date()),
          _n(Lt.current),
          ge.target.setPointerCapture(ge.pointerId),
          ge.target.tagName !== "BUTTON" &&
            (Te(!0), (Gr.current = { x: ge.clientX, y: ge.clientY })));
      },
      onPointerUp: () => {
        var ge, Ce, _e, pt;
        if (Be || !hn) return;
        Gr.current = null;
        let Et = Number(
            ((ge = _t.current) == null
              ? void 0
              : ge.style
                  .getPropertyValue("--swipe-amount")
                  .replace("px", "")) || 0
          ),
          xr =
            new Date().getTime() -
            ((Ce = Ut.current) == null ? void 0 : Ce.getTime()),
          Ji = Math.abs(Et) / xr;
        if (Math.abs(Et) >= XC || Ji > 0.11) {
          _n(Lt.current),
            (_e = x.onDismiss) == null || _e.call(x, x),
            Ot(),
            wt(!0),
            St(!1);
          return;
        }
        (pt = _t.current) == null ||
          pt.style.setProperty("--swipe-amount", "0px"),
          Te(!1);
      },
      onPointerMove: (ge) => {
        var Ce, _e;
        if (!Gr.current || !hn) return;
        let pt = ge.clientY - Gr.current.y,
          Et =
            ((Ce = window.getSelection()) == null
              ? void 0
              : Ce.toString().length) > 0,
          xr = Fo === "top" ? Math.min(0, pt) : Math.max(0, pt);
        Math.abs(xr) > 0 && St(!0),
          !Et &&
            ((_e = _t.current) == null ||
              _e.style.setProperty("--swipe-amount", `${xr}px`));
      },
    },
    Hr && !x.jsx
      ? Z.createElement(
          "button",
          {
            "aria-label": k,
            "data-disabled": vr,
            "data-close-button": !0,
            onClick:
              vr || !hn
                ? () => {}
                : () => {
                    var ge;
                    Ot(), (ge = x.onDismiss) == null || ge.call(x, x);
                  },
            className: J(
              B == null ? void 0 : B.closeButton,
              (l = x == null ? void 0 : x.classNames) == null
                ? void 0
                : l.closeButton
            ),
          },
          (u = G == null ? void 0 : G.close) != null ? u : FC
        )
      : null,
    x.jsx || Z.isValidElement(x.title)
      ? x.jsx
        ? x.jsx
        : typeof x.title == "function"
        ? x.title()
        : x.title
      : Z.createElement(
          Z.Fragment,
          null,
          ct || x.icon || x.promise
            ? Z.createElement(
                "div",
                {
                  "data-icon": "",
                  className: J(
                    B == null ? void 0 : B.icon,
                    (c = x == null ? void 0 : x.classNames) == null
                      ? void 0
                      : c.icon
                  ),
                },
                x.promise || (x.type === "loading" && !x.icon)
                  ? x.icon || Bo()
                  : null,
                x.type !== "loading"
                  ? x.icon || (G == null ? void 0 : G[ct]) || _C(ct)
                  : null
              )
            : null,
          Z.createElement(
            "div",
            {
              "data-content": "",
              className: J(
                B == null ? void 0 : B.content,
                (f = x == null ? void 0 : x.classNames) == null
                  ? void 0
                  : f.content
              ),
            },
            Z.createElement(
              "div",
              {
                "data-title": "",
                className: J(
                  B == null ? void 0 : B.title,
                  (h = x == null ? void 0 : x.classNames) == null
                    ? void 0
                    : h.title
                ),
              },
              typeof x.title == "function" ? x.title() : x.title
            ),
            x.description
              ? Z.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: J(
                      ve,
                      Xi,
                      B == null ? void 0 : B.description,
                      (m = x == null ? void 0 : x.classNames) == null
                        ? void 0
                        : m.description
                    ),
                  },
                  typeof x.description == "function"
                    ? x.description()
                    : x.description
                )
              : null
          ),
          Z.isValidElement(x.cancel)
            ? x.cancel
            : x.cancel && pa(x.cancel)
            ? Z.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: x.cancelButtonStyle || ce,
                  onClick: (ge) => {
                    var Ce, _e;
                    pa(x.cancel) &&
                      hn &&
                      ((_e = (Ce = x.cancel).onClick) == null ||
                        _e.call(Ce, ge),
                      Ot());
                  },
                  className: J(
                    B == null ? void 0 : B.cancelButton,
                    (g = x == null ? void 0 : x.classNames) == null
                      ? void 0
                      : g.cancelButton
                  ),
                },
                x.cancel.label
              )
            : null,
          Z.isValidElement(x.action)
            ? x.action
            : x.action && pa(x.action)
            ? Z.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: x.actionButtonStyle || we,
                  onClick: (ge) => {
                    var Ce, _e;
                    pa(x.action) &&
                      ((_e = (Ce = x.action).onClick) == null ||
                        _e.call(Ce, ge),
                      !ge.defaultPrevented && Ot());
                  },
                  className: J(
                    B == null ? void 0 : B.actionButton,
                    (v = x == null ? void 0 : x.classNames) == null
                      ? void 0
                      : v.actionButton
                  ),
                },
                x.action.label
              )
            : null
        )
  );
};
function Wm() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let t = document.documentElement.getAttribute("dir");
  return t === "auto" || !t
    ? window.getComputedStyle(document.documentElement).direction
    : t;
}
var eT = S.forwardRef(function (t, r) {
  let {
      invert: o,
      position: s = "bottom-right",
      hotkey: l = ["altKey", "KeyT"],
      expand: u,
      closeButton: c,
      className: f,
      offset: h,
      theme: m = "light",
      richColors: g,
      duration: v,
      style: w,
      visibleToasts: x = GC,
      toastOptions: C,
      dir: E = Wm(),
      gap: T = QC,
      loadingIcon: b,
      icons: L,
      containerAriaLabel: M = "Notifications",
      pauseWhenPageIsHidden: N,
      cn: V = ZC,
    } = t,
    [W, Y] = Z.useState([]),
    X = Z.useMemo(
      () =>
        Array.from(
          new Set(
            [s].concat(W.filter((j) => j.position).map((j) => j.position))
          )
        ),
      [W, s]
    ),
    [ue, ce] = Z.useState([]),
    [we, re] = Z.useState(!1),
    [ve, $] = Z.useState(!1),
    [te, q] = Z.useState(
      m !== "system"
        ? m
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    z = Z.useRef(null),
    F = l.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    B = Z.useRef(null),
    G = Z.useRef(!1),
    k = Z.useCallback((j) => {
      Y((J) => {
        var oe;
        return (
          ((oe = J.find((he) => he.id === j.id)) != null && oe.delete) ||
            bt.dismiss(j.id),
          J.filter(({ id: he }) => he !== j.id)
        );
      });
    }, []);
  return (
    Z.useEffect(
      () =>
        bt.subscribe((j) => {
          if (j.dismiss) {
            Y((J) =>
              J.map((oe) => (oe.id === j.id ? { ...oe, delete: !0 } : oe))
            );
            return;
          }
          setTimeout(() => {
            wg.flushSync(() => {
              Y((J) => {
                let oe = J.findIndex((he) => he.id === j.id);
                return oe !== -1
                  ? [...J.slice(0, oe), { ...J[oe], ...j }, ...J.slice(oe + 1)]
                  : [j, ...J];
              });
            });
          });
        }),
      []
    ),
    Z.useEffect(() => {
      if (m !== "system") {
        q(m);
        return;
      }
      if (
        (m === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? q("dark")
            : q("light")),
        typeof window > "u")
      )
        return;
      let j = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        j.addEventListener("change", ({ matches: J }) => {
          q(J ? "dark" : "light");
        });
      } catch {
        j.addListener(({ matches: oe }) => {
          try {
            q(oe ? "dark" : "light");
          } catch (he) {
            console.error(he);
          }
        });
      }
    }, [m]),
    Z.useEffect(() => {
      W.length <= 1 && re(!1);
    }, [W]),
    Z.useEffect(() => {
      let j = (J) => {
        var oe, he;
        l.every((xe) => J[xe] || J.code === xe) &&
          (re(!0), (oe = z.current) == null || oe.focus()),
          J.code === "Escape" &&
            (document.activeElement === z.current ||
              ((he = z.current) != null &&
                he.contains(document.activeElement))) &&
            re(!1);
      };
      return (
        document.addEventListener("keydown", j),
        () => document.removeEventListener("keydown", j)
      );
    }, [l]),
    Z.useEffect(() => {
      if (z.current)
        return () => {
          B.current &&
            (B.current.focus({ preventScroll: !0 }),
            (B.current = null),
            (G.current = !1));
        };
    }, [z.current]),
    Z.createElement(
      "section",
      {
        "aria-label": `${M} ${F}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
      },
      X.map((j, J) => {
        var oe;
        let [he, xe] = j.split("-");
        return W.length
          ? Z.createElement(
              "ol",
              {
                key: j,
                dir: E === "auto" ? Wm() : E,
                tabIndex: -1,
                ref: z,
                className: f,
                "data-sonner-toaster": !0,
                "data-theme": te,
                "data-y-position": he,
                "data-lifted": we && W.length > 1 && !u,
                "data-x-position": xe,
                style: {
                  "--front-toast-height": `${
                    ((oe = ue[0]) == null ? void 0 : oe.height) || 0
                  }px`,
                  "--offset": typeof h == "number" ? `${h}px` : h || KC,
                  "--width": `${YC}px`,
                  "--gap": `${T}px`,
                  ...w,
                },
                onBlur: (me) => {
                  G.current &&
                    !me.currentTarget.contains(me.relatedTarget) &&
                    ((G.current = !1),
                    B.current &&
                      (B.current.focus({ preventScroll: !0 }),
                      (B.current = null)));
                },
                onFocus: (me) => {
                  (me.target instanceof HTMLElement &&
                    me.target.dataset.dismissible === "false") ||
                    G.current ||
                    ((G.current = !0), (B.current = me.relatedTarget));
                },
                onMouseEnter: () => re(!0),
                onMouseMove: () => re(!0),
                onMouseLeave: () => {
                  ve || re(!1);
                },
                onPointerDown: (me) => {
                  (me.target instanceof HTMLElement &&
                    me.target.dataset.dismissible === "false") ||
                    $(!0);
                },
                onPointerUp: () => $(!1),
              },
              W.filter(
                (me) => (!me.position && J === 0) || me.position === j
              ).map((me, Pe) => {
                var Te, Be;
                return Z.createElement(JC, {
                  key: me.id,
                  icons: L,
                  index: Pe,
                  toast: me,
                  defaultRichColors: g,
                  duration:
                    (Te = C == null ? void 0 : C.duration) != null ? Te : v,
                  className: C == null ? void 0 : C.className,
                  descriptionClassName:
                    C == null ? void 0 : C.descriptionClassName,
                  invert: o,
                  visibleToasts: x,
                  closeButton:
                    (Be = C == null ? void 0 : C.closeButton) != null ? Be : c,
                  interacting: ve,
                  position: j,
                  style: C == null ? void 0 : C.style,
                  unstyled: C == null ? void 0 : C.unstyled,
                  classNames: C == null ? void 0 : C.classNames,
                  cancelButtonStyle: C == null ? void 0 : C.cancelButtonStyle,
                  actionButtonStyle: C == null ? void 0 : C.actionButtonStyle,
                  removeToast: k,
                  toasts: W.filter((wt) => wt.position == me.position),
                  heights: ue.filter((wt) => wt.position == me.position),
                  setHeights: ce,
                  expandByDefault: u,
                  gap: T,
                  loadingIcon: b,
                  expanded: we,
                  pauseWhenPageIsHidden: N,
                  cn: V,
                });
              })
            )
          : null;
      })
    )
  );
});
const tT = () =>
  I.jsxs("div", {
    role: "status",
    children: [
      I.jsxs("svg", {
        "aria-hidden": "true",
        className:
          "w-4 h-4 text-black animate-spin dark:text-gray-600 fill-yellow-400",
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          I.jsx("path", {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor",
          }),
          I.jsx("path", {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill",
          }),
        ],
      }),
      I.jsx("span", { className: "sr-only", children: "Loading..." }),
    ],
  });
function ar(t, r, { checkForDefaultPrevented: o = !0 } = {}) {
  return function (l) {
    if ((t == null || t(l), o === !1 || !l.defaultPrevented))
      return r == null ? void 0 : r(l);
  };
}
function nT(t, r = []) {
  let o = [];
  function s(u, c) {
    const f = S.createContext(c),
      h = o.length;
    o = [...o, c];
    const m = (v) => {
      var b;
      const { scope: w, children: x, ...C } = v,
        E = ((b = w == null ? void 0 : w[t]) == null ? void 0 : b[h]) || f,
        T = S.useMemo(() => C, Object.values(C));
      return I.jsx(E.Provider, { value: T, children: x });
    };
    m.displayName = u + "Provider";
    function g(v, w) {
      var E;
      const x = ((E = w == null ? void 0 : w[t]) == null ? void 0 : E[h]) || f,
        C = S.useContext(x);
      if (C) return C;
      if (c !== void 0) return c;
      throw new Error(`\`${v}\` must be used within \`${u}\``);
    }
    return [m, g];
  }
  const l = () => {
    const u = o.map((c) => S.createContext(c));
    return function (f) {
      const h = (f == null ? void 0 : f[t]) || u;
      return S.useMemo(() => ({ [`__scope${t}`]: { ...f, [t]: h } }), [f, h]);
    };
  };
  return (l.scopeName = t), [s, rT(l, ...r)];
}
function rT(...t) {
  const r = t[0];
  if (t.length === 1) return r;
  const o = () => {
    const s = t.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
    return function (u) {
      const c = s.reduce((f, { useScope: h, scopeName: m }) => {
        const v = h(u)[`__scope${m}`];
        return { ...f, ...v };
      }, {});
      return S.useMemo(() => ({ [`__scope${r.scopeName}`]: c }), [c]);
    };
  };
  return (o.scopeName = r.scopeName), o;
}
function cr(t) {
  const r = S.useRef(t);
  return (
    S.useEffect(() => {
      r.current = t;
    }),
    S.useMemo(
      () =>
        (...o) => {
          var s;
          return (s = r.current) == null ? void 0 : s.call(r, ...o);
        },
      []
    )
  );
}
function oT(t, r = globalThis == null ? void 0 : globalThis.document) {
  const o = cr(t);
  S.useEffect(() => {
    const s = (l) => {
      l.key === "Escape" && o(l);
    };
    return (
      r.addEventListener("keydown", s, { capture: !0 }),
      () => r.removeEventListener("keydown", s, { capture: !0 })
    );
  }, [o, r]);
}
var iT = "DismissableLayer",
  Oc = "dismissableLayer.update",
  sT = "dismissableLayer.pointerDownOutside",
  aT = "dismissableLayer.focusOutside",
  Hm,
  tv = S.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  nv = S.forwardRef((t, r) => {
    const {
        disableOutsidePointerEvents: o = !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: l,
        onFocusOutside: u,
        onInteractOutside: c,
        onDismiss: f,
        ...h
      } = t,
      m = S.useContext(tv),
      [g, v] = S.useState(null),
      w =
        (g == null ? void 0 : g.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, x] = S.useState({}),
      C = hr(r, (Y) => v(Y)),
      E = Array.from(m.layers),
      [T] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      b = E.indexOf(T),
      L = g ? E.indexOf(g) : -1,
      M = m.layersWithOutsidePointerEventsDisabled.size > 0,
      N = L >= b,
      V = cT((Y) => {
        const X = Y.target,
          ue = [...m.branches].some((ce) => ce.contains(X));
        !N ||
          ue ||
          (l == null || l(Y),
          c == null || c(Y),
          Y.defaultPrevented || f == null || f());
      }, w),
      W = dT((Y) => {
        const X = Y.target;
        [...m.branches].some((ce) => ce.contains(X)) ||
          (u == null || u(Y),
          c == null || c(Y),
          Y.defaultPrevented || f == null || f());
      }, w);
    return (
      oT((Y) => {
        L === m.layers.size - 1 &&
          (s == null || s(Y),
          !Y.defaultPrevented && f && (Y.preventDefault(), f()));
      }, w),
      S.useEffect(() => {
        if (g)
          return (
            o &&
              (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Hm = w.body.style.pointerEvents),
                (w.body.style.pointerEvents = "none")),
              m.layersWithOutsidePointerEventsDisabled.add(g)),
            m.layers.add(g),
            $m(),
            () => {
              o &&
                m.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (w.body.style.pointerEvents = Hm);
            }
          );
      }, [g, w, o, m]),
      S.useEffect(
        () => () => {
          g &&
            (m.layers.delete(g),
            m.layersWithOutsidePointerEventsDisabled.delete(g),
            $m());
        },
        [g, m]
      ),
      S.useEffect(() => {
        const Y = () => x({});
        return (
          document.addEventListener(Oc, Y),
          () => document.removeEventListener(Oc, Y)
        );
      }, []),
      I.jsx(en.div, {
        ...h,
        ref: C,
        style: {
          pointerEvents: M ? (N ? "auto" : "none") : void 0,
          ...t.style,
        },
        onFocusCapture: ar(t.onFocusCapture, W.onFocusCapture),
        onBlurCapture: ar(t.onBlurCapture, W.onBlurCapture),
        onPointerDownCapture: ar(
          t.onPointerDownCapture,
          V.onPointerDownCapture
        ),
      })
    );
  });
nv.displayName = iT;
var lT = "DismissableLayerBranch",
  uT = S.forwardRef((t, r) => {
    const o = S.useContext(tv),
      s = S.useRef(null),
      l = hr(r, s);
    return (
      S.useEffect(() => {
        const u = s.current;
        if (u)
          return (
            o.branches.add(u),
            () => {
              o.branches.delete(u);
            }
          );
      }, [o.branches]),
      I.jsx(en.div, { ...t, ref: l })
    );
  });
uT.displayName = lT;
function cT(t, r = globalThis == null ? void 0 : globalThis.document) {
  const o = cr(t),
    s = S.useRef(!1),
    l = S.useRef(() => {});
  return (
    S.useEffect(() => {
      const u = (f) => {
          if (f.target && !s.current) {
            let h = function () {
              rv(sT, o, m, { discrete: !0 });
            };
            const m = { originalEvent: f };
            f.pointerType === "touch"
              ? (r.removeEventListener("click", l.current),
                (l.current = h),
                r.addEventListener("click", l.current, { once: !0 }))
              : h();
          } else r.removeEventListener("click", l.current);
          s.current = !1;
        },
        c = window.setTimeout(() => {
          r.addEventListener("pointerdown", u);
        }, 0);
      return () => {
        window.clearTimeout(c),
          r.removeEventListener("pointerdown", u),
          r.removeEventListener("click", l.current);
      };
    }, [r, o]),
    { onPointerDownCapture: () => (s.current = !0) }
  );
}
function dT(t, r = globalThis == null ? void 0 : globalThis.document) {
  const o = cr(t),
    s = S.useRef(!1);
  return (
    S.useEffect(() => {
      const l = (u) => {
        u.target &&
          !s.current &&
          rv(aT, o, { originalEvent: u }, { discrete: !1 });
      };
      return (
        r.addEventListener("focusin", l),
        () => r.removeEventListener("focusin", l)
      );
    }, [r, o]),
    {
      onFocusCapture: () => (s.current = !0),
      onBlurCapture: () => (s.current = !1),
    }
  );
}
function $m() {
  const t = new CustomEvent(Oc);
  document.dispatchEvent(t);
}
function rv(t, r, o, { discrete: s }) {
  const l = o.originalEvent.target,
    u = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: o });
  r && l.addEventListener(t, r, { once: !0 }),
    s ? Ux(l, u) : l.dispatchEvent(u);
}
var ec = 0;
function fT() {
  S.useEffect(() => {
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", t[0] ?? Gm()),
      document.body.insertAdjacentElement("beforeend", t[1] ?? Gm()),
      ec++,
      () => {
        ec === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          ec--;
      }
    );
  }, []);
}
function Gm() {
  const t = document.createElement("span");
  return (
    t.setAttribute("data-radix-focus-guard", ""),
    (t.tabIndex = 0),
    (t.style.outline = "none"),
    (t.style.opacity = "0"),
    (t.style.position = "fixed"),
    (t.style.pointerEvents = "none"),
    t
  );
}
var tc = "focusScope.autoFocusOnMount",
  nc = "focusScope.autoFocusOnUnmount",
  Km = { bubbles: !1, cancelable: !0 },
  pT = "FocusScope",
  ov = S.forwardRef((t, r) => {
    const {
        loop: o = !1,
        trapped: s = !1,
        onMountAutoFocus: l,
        onUnmountAutoFocus: u,
        ...c
      } = t,
      [f, h] = S.useState(null),
      m = cr(l),
      g = cr(u),
      v = S.useRef(null),
      w = hr(r, (E) => h(E)),
      x = S.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    S.useEffect(() => {
      if (s) {
        let E = function (M) {
            if (x.paused || !f) return;
            const N = M.target;
            f.contains(N) ? (v.current = N) : or(v.current, { select: !0 });
          },
          T = function (M) {
            if (x.paused || !f) return;
            const N = M.relatedTarget;
            N !== null && (f.contains(N) || or(v.current, { select: !0 }));
          },
          b = function (M) {
            if (document.activeElement === document.body)
              for (const V of M) V.removedNodes.length > 0 && or(f);
          };
        document.addEventListener("focusin", E),
          document.addEventListener("focusout", T);
        const L = new MutationObserver(b);
        return (
          f && L.observe(f, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", E),
              document.removeEventListener("focusout", T),
              L.disconnect();
          }
        );
      }
    }, [s, f, x.paused]),
      S.useEffect(() => {
        if (f) {
          Qm.add(x);
          const E = document.activeElement;
          if (!f.contains(E)) {
            const b = new CustomEvent(tc, Km);
            f.addEventListener(tc, m),
              f.dispatchEvent(b),
              b.defaultPrevented ||
                (hT(xT(iv(f)), { select: !0 }),
                document.activeElement === E && or(f));
          }
          return () => {
            f.removeEventListener(tc, m),
              setTimeout(() => {
                const b = new CustomEvent(nc, Km);
                f.addEventListener(nc, g),
                  f.dispatchEvent(b),
                  b.defaultPrevented || or(E ?? document.body, { select: !0 }),
                  f.removeEventListener(nc, g),
                  Qm.remove(x);
              }, 0);
          };
        }
      }, [f, m, g, x]);
    const C = S.useCallback(
      (E) => {
        if ((!o && !s) || x.paused) return;
        const T = E.key === "Tab" && !E.altKey && !E.ctrlKey && !E.metaKey,
          b = document.activeElement;
        if (T && b) {
          const L = E.currentTarget,
            [M, N] = mT(L);
          M && N
            ? !E.shiftKey && b === N
              ? (E.preventDefault(), o && or(M, { select: !0 }))
              : E.shiftKey &&
                b === M &&
                (E.preventDefault(), o && or(N, { select: !0 }))
            : b === L && E.preventDefault();
        }
      },
      [o, s, x.paused]
    );
    return I.jsx(en.div, { tabIndex: -1, ...c, ref: w, onKeyDown: C });
  });
ov.displayName = pT;
function hT(t, { select: r = !1 } = {}) {
  const o = document.activeElement;
  for (const s of t)
    if ((or(s, { select: r }), document.activeElement !== o)) return;
}
function mT(t) {
  const r = iv(t),
    o = Ym(r, t),
    s = Ym(r.reverse(), t);
  return [o, s];
}
function iv(t) {
  const r = [],
    o = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (s) => {
        const l = s.tagName === "INPUT" && s.type === "hidden";
        return s.disabled || s.hidden || l
          ? NodeFilter.FILTER_SKIP
          : s.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; o.nextNode(); ) r.push(o.currentNode);
  return r;
}
function Ym(t, r) {
  for (const o of t) if (!gT(o, { upTo: r })) return o;
}
function gT(t, { upTo: r }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (r !== void 0 && t === r) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
function yT(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function or(t, { select: r = !1 } = {}) {
  if (t && t.focus) {
    const o = document.activeElement;
    t.focus({ preventScroll: !0 }), t !== o && yT(t) && r && t.select();
  }
}
var Qm = vT();
function vT() {
  let t = [];
  return {
    add(r) {
      const o = t[0];
      r !== o && (o == null || o.pause()), (t = Xm(t, r)), t.unshift(r);
    },
    remove(r) {
      var o;
      (t = Xm(t, r)), (o = t[0]) == null || o.resume();
    },
  };
}
function Xm(t, r) {
  const o = [...t],
    s = o.indexOf(r);
  return s !== -1 && o.splice(s, 1), o;
}
function xT(t) {
  return t.filter((r) => r.tagName !== "A");
}
var Br =
    globalThis != null && globalThis.document ? S.useLayoutEffect : () => {},
  wT = X1.useId || (() => {}),
  ST = 0;
function ET(t) {
  const [r, o] = S.useState(wT());
  return (
    Br(() => {
      t || o((s) => s ?? String(ST++));
    }, [t]),
    t || (r ? `radix-${r}` : "")
  );
}
const PT = ["top", "right", "bottom", "left"],
  dr = Math.min,
  Rt = Math.max,
  Va = Math.round,
  ha = Math.floor,
  cn = (t) => ({ x: t, y: t }),
  CT = { left: "right", right: "left", bottom: "top", top: "bottom" },
  TT = { start: "end", end: "start" };
function Mc(t, r, o) {
  return Rt(t, dr(r, o));
}
function Rn(t, r) {
  return typeof t == "function" ? t(r) : t;
}
function kn(t) {
  return t.split("-")[0];
}
function Io(t) {
  return t.split("-")[1];
}
function Cd(t) {
  return t === "x" ? "y" : "x";
}
function Td(t) {
  return t === "y" ? "height" : "width";
}
function fr(t) {
  return ["top", "bottom"].includes(kn(t)) ? "y" : "x";
}
function Ad(t) {
  return Cd(fr(t));
}
function AT(t, r, o) {
  o === void 0 && (o = !1);
  const s = Io(t),
    l = Ad(t),
    u = Td(l);
  let c =
    l === "x"
      ? s === (o ? "end" : "start")
        ? "right"
        : "left"
      : s === "start"
      ? "bottom"
      : "top";
  return r.reference[u] > r.floating[u] && (c = Fa(c)), [c, Fa(c)];
}
function bT(t) {
  const r = Fa(t);
  return [Ic(t), r, Ic(r)];
}
function Ic(t) {
  return t.replace(/start|end/g, (r) => TT[r]);
}
function RT(t, r, o) {
  const s = ["left", "right"],
    l = ["right", "left"],
    u = ["top", "bottom"],
    c = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return o ? (r ? l : s) : r ? s : l;
    case "left":
    case "right":
      return r ? u : c;
    default:
      return [];
  }
}
function kT(t, r, o, s) {
  const l = Io(t);
  let u = RT(kn(t), o === "start", s);
  return (
    l && ((u = u.map((c) => c + "-" + l)), r && (u = u.concat(u.map(Ic)))), u
  );
}
function Fa(t) {
  return t.replace(/left|right|bottom|top/g, (r) => CT[r]);
}
function NT(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function sv(t) {
  return typeof t != "number"
    ? NT(t)
    : { top: t, right: t, bottom: t, left: t };
}
function ja(t) {
  const { x: r, y: o, width: s, height: l } = t;
  return {
    width: s,
    height: l,
    top: o,
    left: r,
    right: r + s,
    bottom: o + l,
    x: r,
    y: o,
  };
}
function qm(t, r, o) {
  let { reference: s, floating: l } = t;
  const u = fr(r),
    c = Ad(r),
    f = Td(c),
    h = kn(r),
    m = u === "y",
    g = s.x + s.width / 2 - l.width / 2,
    v = s.y + s.height / 2 - l.height / 2,
    w = s[f] / 2 - l[f] / 2;
  let x;
  switch (h) {
    case "top":
      x = { x: g, y: s.y - l.height };
      break;
    case "bottom":
      x = { x: g, y: s.y + s.height };
      break;
    case "right":
      x = { x: s.x + s.width, y: v };
      break;
    case "left":
      x = { x: s.x - l.width, y: v };
      break;
    default:
      x = { x: s.x, y: s.y };
  }
  switch (Io(r)) {
    case "start":
      x[c] -= w * (o && m ? -1 : 1);
      break;
    case "end":
      x[c] += w * (o && m ? -1 : 1);
      break;
  }
  return x;
}
const _T = async (t, r, o) => {
  const {
      placement: s = "bottom",
      strategy: l = "absolute",
      middleware: u = [],
      platform: c,
    } = o,
    f = u.filter(Boolean),
    h = await (c.isRTL == null ? void 0 : c.isRTL(r));
  let m = await c.getElementRects({ reference: t, floating: r, strategy: l }),
    { x: g, y: v } = qm(m, s, h),
    w = s,
    x = {},
    C = 0;
  for (let E = 0; E < f.length; E++) {
    const { name: T, fn: b } = f[E],
      {
        x: L,
        y: M,
        data: N,
        reset: V,
      } = await b({
        x: g,
        y: v,
        initialPlacement: s,
        placement: w,
        strategy: l,
        middlewareData: x,
        rects: m,
        platform: c,
        elements: { reference: t, floating: r },
      });
    (g = L ?? g),
      (v = M ?? v),
      (x = { ...x, [T]: { ...x[T], ...N } }),
      V &&
        C <= 50 &&
        (C++,
        typeof V == "object" &&
          (V.placement && (w = V.placement),
          V.rects &&
            (m =
              V.rects === !0
                ? await c.getElementRects({
                    reference: t,
                    floating: r,
                    strategy: l,
                  })
                : V.rects),
          ({ x: g, y: v } = qm(m, w, h))),
        (E = -1));
  }
  return { x: g, y: v, placement: w, strategy: l, middlewareData: x };
};
async function zi(t, r) {
  var o;
  r === void 0 && (r = {});
  const { x: s, y: l, platform: u, rects: c, elements: f, strategy: h } = t,
    {
      boundary: m = "clippingAncestors",
      rootBoundary: g = "viewport",
      elementContext: v = "floating",
      altBoundary: w = !1,
      padding: x = 0,
    } = Rn(r, t),
    C = sv(x),
    T = f[w ? (v === "floating" ? "reference" : "floating") : v],
    b = ja(
      await u.getClippingRect({
        element:
          (o = await (u.isElement == null ? void 0 : u.isElement(T))) == null ||
          o
            ? T
            : T.contextElement ||
              (await (u.getDocumentElement == null
                ? void 0
                : u.getDocumentElement(f.floating))),
        boundary: m,
        rootBoundary: g,
        strategy: h,
      })
    ),
    L =
      v === "floating"
        ? { x: s, y: l, width: c.floating.width, height: c.floating.height }
        : c.reference,
    M = await (u.getOffsetParent == null
      ? void 0
      : u.getOffsetParent(f.floating)),
    N = (await (u.isElement == null ? void 0 : u.isElement(M)))
      ? (await (u.getScale == null ? void 0 : u.getScale(M))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    V = ja(
      u.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: f,
            rect: L,
            offsetParent: M,
            strategy: h,
          })
        : L
    );
  return {
    top: (b.top - V.top + C.top) / N.y,
    bottom: (V.bottom - b.bottom + C.bottom) / N.y,
    left: (b.left - V.left + C.left) / N.x,
    right: (V.right - b.right + C.right) / N.x,
  };
}
const LT = (t) => ({
    name: "arrow",
    options: t,
    async fn(r) {
      const {
          x: o,
          y: s,
          placement: l,
          rects: u,
          platform: c,
          elements: f,
          middlewareData: h,
        } = r,
        { element: m, padding: g = 0 } = Rn(t, r) || {};
      if (m == null) return {};
      const v = sv(g),
        w = { x: o, y: s },
        x = Ad(l),
        C = Td(x),
        E = await c.getDimensions(m),
        T = x === "y",
        b = T ? "top" : "left",
        L = T ? "bottom" : "right",
        M = T ? "clientHeight" : "clientWidth",
        N = u.reference[C] + u.reference[x] - w[x] - u.floating[C],
        V = w[x] - u.reference[x],
        W = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(m));
      let Y = W ? W[M] : 0;
      (!Y || !(await (c.isElement == null ? void 0 : c.isElement(W)))) &&
        (Y = f.floating[M] || u.floating[C]);
      const X = N / 2 - V / 2,
        ue = Y / 2 - E[C] / 2 - 1,
        ce = dr(v[b], ue),
        we = dr(v[L], ue),
        re = ce,
        ve = Y - E[C] - we,
        $ = Y / 2 - E[C] / 2 + X,
        te = Mc(re, $, ve),
        q =
          !h.arrow &&
          Io(l) != null &&
          $ !== te &&
          u.reference[C] / 2 - ($ < re ? ce : we) - E[C] / 2 < 0,
        z = q ? ($ < re ? $ - re : $ - ve) : 0;
      return {
        [x]: w[x] + z,
        data: {
          [x]: te,
          centerOffset: $ - te - z,
          ...(q && { alignmentOffset: z }),
        },
        reset: q,
      };
    },
  }),
  OT = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(r) {
          var o, s;
          const {
              placement: l,
              middlewareData: u,
              rects: c,
              initialPlacement: f,
              platform: h,
              elements: m,
            } = r,
            {
              mainAxis: g = !0,
              crossAxis: v = !0,
              fallbackPlacements: w,
              fallbackStrategy: x = "bestFit",
              fallbackAxisSideDirection: C = "none",
              flipAlignment: E = !0,
              ...T
            } = Rn(t, r);
          if ((o = u.arrow) != null && o.alignmentOffset) return {};
          const b = kn(l),
            L = fr(f),
            M = kn(f) === f,
            N = await (h.isRTL == null ? void 0 : h.isRTL(m.floating)),
            V = w || (M || !E ? [Fa(f)] : bT(f)),
            W = C !== "none";
          !w && W && V.push(...kT(f, E, C, N));
          const Y = [f, ...V],
            X = await zi(r, T),
            ue = [];
          let ce = ((s = u.flip) == null ? void 0 : s.overflows) || [];
          if ((g && ue.push(X[b]), v)) {
            const $ = AT(l, c, N);
            ue.push(X[$[0]], X[$[1]]);
          }
          if (
            ((ce = [...ce, { placement: l, overflows: ue }]),
            !ue.every(($) => $ <= 0))
          ) {
            var we, re;
            const $ = (((we = u.flip) == null ? void 0 : we.index) || 0) + 1,
              te = Y[$];
            if (te)
              return {
                data: { index: $, overflows: ce },
                reset: { placement: te },
              };
            let q =
              (re = ce
                .filter((z) => z.overflows[0] <= 0)
                .sort((z, F) => z.overflows[1] - F.overflows[1])[0]) == null
                ? void 0
                : re.placement;
            if (!q)
              switch (x) {
                case "bestFit": {
                  var ve;
                  const z =
                    (ve = ce
                      .filter((F) => {
                        if (W) {
                          const B = fr(F.placement);
                          return B === L || B === "y";
                        }
                        return !0;
                      })
                      .map((F) => [
                        F.placement,
                        F.overflows
                          .filter((B) => B > 0)
                          .reduce((B, G) => B + G, 0),
                      ])
                      .sort((F, B) => F[1] - B[1])[0]) == null
                      ? void 0
                      : ve[0];
                  z && (q = z);
                  break;
                }
                case "initialPlacement":
                  q = f;
                  break;
              }
            if (l !== q) return { reset: { placement: q } };
          }
          return {};
        },
      }
    );
  };
function Zm(t, r) {
  return {
    top: t.top - r.height,
    right: t.right - r.width,
    bottom: t.bottom - r.height,
    left: t.left - r.width,
  };
}
function Jm(t) {
  return PT.some((r) => t[r] >= 0);
}
const MT = function (t) {
  return (
    t === void 0 && (t = {}),
    {
      name: "hide",
      options: t,
      async fn(r) {
        const { rects: o } = r,
          { strategy: s = "referenceHidden", ...l } = Rn(t, r);
        switch (s) {
          case "referenceHidden": {
            const u = await zi(r, { ...l, elementContext: "reference" }),
              c = Zm(u, o.reference);
            return {
              data: { referenceHiddenOffsets: c, referenceHidden: Jm(c) },
            };
          }
          case "escaped": {
            const u = await zi(r, { ...l, altBoundary: !0 }),
              c = Zm(u, o.floating);
            return { data: { escapedOffsets: c, escaped: Jm(c) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function IT(t, r) {
  const { placement: o, platform: s, elements: l } = t,
    u = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)),
    c = kn(o),
    f = Io(o),
    h = fr(o) === "y",
    m = ["left", "top"].includes(c) ? -1 : 1,
    g = u && h ? -1 : 1,
    v = Rn(r, t);
  let {
    mainAxis: w,
    crossAxis: x,
    alignmentAxis: C,
  } = typeof v == "number"
    ? { mainAxis: v, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: v.mainAxis || 0,
        crossAxis: v.crossAxis || 0,
        alignmentAxis: v.alignmentAxis,
      };
  return (
    f && typeof C == "number" && (x = f === "end" ? C * -1 : C),
    h ? { x: x * g, y: w * m } : { x: w * m, y: x * g }
  );
}
const DT = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(r) {
          var o, s;
          const { x: l, y: u, placement: c, middlewareData: f } = r,
            h = await IT(r, t);
          return c === ((o = f.offset) == null ? void 0 : o.placement) &&
            (s = f.arrow) != null &&
            s.alignmentOffset
            ? {}
            : { x: l + h.x, y: u + h.y, data: { ...h, placement: c } };
        },
      }
    );
  },
  VT = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(r) {
          const { x: o, y: s, placement: l } = r,
            {
              mainAxis: u = !0,
              crossAxis: c = !1,
              limiter: f = {
                fn: (T) => {
                  let { x: b, y: L } = T;
                  return { x: b, y: L };
                },
              },
              ...h
            } = Rn(t, r),
            m = { x: o, y: s },
            g = await zi(r, h),
            v = fr(kn(l)),
            w = Cd(v);
          let x = m[w],
            C = m[v];
          if (u) {
            const T = w === "y" ? "top" : "left",
              b = w === "y" ? "bottom" : "right",
              L = x + g[T],
              M = x - g[b];
            x = Mc(L, x, M);
          }
          if (c) {
            const T = v === "y" ? "top" : "left",
              b = v === "y" ? "bottom" : "right",
              L = C + g[T],
              M = C - g[b];
            C = Mc(L, C, M);
          }
          const E = f.fn({ ...r, [w]: x, [v]: C });
          return {
            ...E,
            data: { x: E.x - o, y: E.y - s, enabled: { [w]: u, [v]: c } },
          };
        },
      }
    );
  },
  FT = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        options: t,
        fn(r) {
          const { x: o, y: s, placement: l, rects: u, middlewareData: c } = r,
            { offset: f = 0, mainAxis: h = !0, crossAxis: m = !0 } = Rn(t, r),
            g = { x: o, y: s },
            v = fr(l),
            w = Cd(v);
          let x = g[w],
            C = g[v];
          const E = Rn(f, r),
            T =
              typeof E == "number"
                ? { mainAxis: E, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...E };
          if (h) {
            const M = w === "y" ? "height" : "width",
              N = u.reference[w] - u.floating[M] + T.mainAxis,
              V = u.reference[w] + u.reference[M] - T.mainAxis;
            x < N ? (x = N) : x > V && (x = V);
          }
          if (m) {
            var b, L;
            const M = w === "y" ? "width" : "height",
              N = ["top", "left"].includes(kn(l)),
              V =
                u.reference[v] -
                u.floating[M] +
                ((N && ((b = c.offset) == null ? void 0 : b[v])) || 0) +
                (N ? 0 : T.crossAxis),
              W =
                u.reference[v] +
                u.reference[M] +
                (N ? 0 : ((L = c.offset) == null ? void 0 : L[v]) || 0) -
                (N ? T.crossAxis : 0);
            C < V ? (C = V) : C > W && (C = W);
          }
          return { [w]: x, [v]: C };
        },
      }
    );
  },
  jT = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(r) {
          var o, s;
          const { placement: l, rects: u, platform: c, elements: f } = r,
            { apply: h = () => {}, ...m } = Rn(t, r),
            g = await zi(r, m),
            v = kn(l),
            w = Io(l),
            x = fr(l) === "y",
            { width: C, height: E } = u.floating;
          let T, b;
          v === "top" || v === "bottom"
            ? ((T = v),
              (b =
                w ===
                ((await (c.isRTL == null ? void 0 : c.isRTL(f.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((b = v), (T = w === "end" ? "top" : "bottom"));
          const L = E - g.top - g.bottom,
            M = C - g.left - g.right,
            N = dr(E - g[T], L),
            V = dr(C - g[b], M),
            W = !r.middlewareData.shift;
          let Y = N,
            X = V;
          if (
            ((o = r.middlewareData.shift) != null && o.enabled.x && (X = M),
            (s = r.middlewareData.shift) != null && s.enabled.y && (Y = L),
            W && !w)
          ) {
            const ce = Rt(g.left, 0),
              we = Rt(g.right, 0),
              re = Rt(g.top, 0),
              ve = Rt(g.bottom, 0);
            x
              ? (X =
                  C -
                  2 * (ce !== 0 || we !== 0 ? ce + we : Rt(g.left, g.right)))
              : (Y =
                  E -
                  2 * (re !== 0 || ve !== 0 ? re + ve : Rt(g.top, g.bottom)));
          }
          await h({ ...r, availableWidth: X, availableHeight: Y });
          const ue = await c.getDimensions(f.floating);
          return C !== ue.width || E !== ue.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Ya() {
  return typeof window < "u";
}
function Do(t) {
  return av(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function kt(t) {
  var r;
  return (
    (t == null || (r = t.ownerDocument) == null ? void 0 : r.defaultView) ||
    window
  );
}
function fn(t) {
  var r;
  return (r = (av(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : r.documentElement;
}
function av(t) {
  return Ya() ? t instanceof Node || t instanceof kt(t).Node : !1;
}
function Zt(t) {
  return Ya() ? t instanceof Element || t instanceof kt(t).Element : !1;
}
function dn(t) {
  return Ya() ? t instanceof HTMLElement || t instanceof kt(t).HTMLElement : !1;
}
function eg(t) {
  return !Ya() || typeof ShadowRoot > "u"
    ? !1
    : t instanceof ShadowRoot || t instanceof kt(t).ShadowRoot;
}
function Ki(t) {
  const { overflow: r, overflowX: o, overflowY: s, display: l } = Jt(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(r + s + o) &&
    !["inline", "contents"].includes(l)
  );
}
function BT(t) {
  return ["table", "td", "th"].includes(Do(t));
}
function Qa(t) {
  return [":popover-open", ":modal"].some((r) => {
    try {
      return t.matches(r);
    } catch {
      return !1;
    }
  });
}
function bd(t) {
  const r = Rd(),
    o = Zt(t) ? Jt(t) : t;
  return (
    o.transform !== "none" ||
    o.perspective !== "none" ||
    (o.containerType ? o.containerType !== "normal" : !1) ||
    (!r && (o.backdropFilter ? o.backdropFilter !== "none" : !1)) ||
    (!r && (o.filter ? o.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((s) =>
      (o.willChange || "").includes(s)
    ) ||
    ["paint", "layout", "strict", "content"].some((s) =>
      (o.contain || "").includes(s)
    )
  );
}
function zT(t) {
  let r = pr(t);
  for (; dn(r) && !_o(r); ) {
    if (bd(r)) return r;
    if (Qa(r)) return null;
    r = pr(r);
  }
  return null;
}
function Rd() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function _o(t) {
  return ["html", "body", "#document"].includes(Do(t));
}
function Jt(t) {
  return kt(t).getComputedStyle(t);
}
function Xa(t) {
  return Zt(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function pr(t) {
  if (Do(t) === "html") return t;
  const r = t.assignedSlot || t.parentNode || (eg(t) && t.host) || fn(t);
  return eg(r) ? r.host : r;
}
function lv(t) {
  const r = pr(t);
  return _o(r)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : dn(r) && Ki(r)
    ? r
    : lv(r);
}
function Ui(t, r, o) {
  var s;
  r === void 0 && (r = []), o === void 0 && (o = !0);
  const l = lv(t),
    u = l === ((s = t.ownerDocument) == null ? void 0 : s.body),
    c = kt(l);
  if (u) {
    const f = Dc(c);
    return r.concat(
      c,
      c.visualViewport || [],
      Ki(l) ? l : [],
      f && o ? Ui(f) : []
    );
  }
  return r.concat(l, Ui(l, [], o));
}
function Dc(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function uv(t) {
  const r = Jt(t);
  let o = parseFloat(r.width) || 0,
    s = parseFloat(r.height) || 0;
  const l = dn(t),
    u = l ? t.offsetWidth : o,
    c = l ? t.offsetHeight : s,
    f = Va(o) !== u || Va(s) !== c;
  return f && ((o = u), (s = c)), { width: o, height: s, $: f };
}
function kd(t) {
  return Zt(t) ? t : t.contextElement;
}
function Ao(t) {
  const r = kd(t);
  if (!dn(r)) return cn(1);
  const o = r.getBoundingClientRect(),
    { width: s, height: l, $: u } = uv(r);
  let c = (u ? Va(o.width) : o.width) / s,
    f = (u ? Va(o.height) : o.height) / l;
  return (
    (!c || !Number.isFinite(c)) && (c = 1),
    (!f || !Number.isFinite(f)) && (f = 1),
    { x: c, y: f }
  );
}
const UT = cn(0);
function cv(t) {
  const r = kt(t);
  return !Rd() || !r.visualViewport
    ? UT
    : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
}
function WT(t, r, o) {
  return r === void 0 && (r = !1), !o || (r && o !== kt(t)) ? !1 : r;
}
function zr(t, r, o, s) {
  r === void 0 && (r = !1), o === void 0 && (o = !1);
  const l = t.getBoundingClientRect(),
    u = kd(t);
  let c = cn(1);
  r && (s ? Zt(s) && (c = Ao(s)) : (c = Ao(t)));
  const f = WT(u, o, s) ? cv(u) : cn(0);
  let h = (l.left + f.x) / c.x,
    m = (l.top + f.y) / c.y,
    g = l.width / c.x,
    v = l.height / c.y;
  if (u) {
    const w = kt(u),
      x = s && Zt(s) ? kt(s) : s;
    let C = w,
      E = Dc(C);
    for (; E && s && x !== C; ) {
      const T = Ao(E),
        b = E.getBoundingClientRect(),
        L = Jt(E),
        M = b.left + (E.clientLeft + parseFloat(L.paddingLeft)) * T.x,
        N = b.top + (E.clientTop + parseFloat(L.paddingTop)) * T.y;
      (h *= T.x),
        (m *= T.y),
        (g *= T.x),
        (v *= T.y),
        (h += M),
        (m += N),
        (C = kt(E)),
        (E = Dc(C));
    }
  }
  return ja({ width: g, height: v, x: h, y: m });
}
function Nd(t, r) {
  const o = Xa(t).scrollLeft;
  return r ? r.left + o : zr(fn(t)).left + o;
}
function dv(t, r, o) {
  o === void 0 && (o = !1);
  const s = t.getBoundingClientRect(),
    l = s.left + r.scrollLeft - (o ? 0 : Nd(t, s)),
    u = s.top + r.scrollTop;
  return { x: l, y: u };
}
function HT(t) {
  let { elements: r, rect: o, offsetParent: s, strategy: l } = t;
  const u = l === "fixed",
    c = fn(s),
    f = r ? Qa(r.floating) : !1;
  if (s === c || (f && u)) return o;
  let h = { scrollLeft: 0, scrollTop: 0 },
    m = cn(1);
  const g = cn(0),
    v = dn(s);
  if (
    (v || (!v && !u)) &&
    ((Do(s) !== "body" || Ki(c)) && (h = Xa(s)), dn(s))
  ) {
    const x = zr(s);
    (m = Ao(s)), (g.x = x.x + s.clientLeft), (g.y = x.y + s.clientTop);
  }
  const w = c && !v && !u ? dv(c, h, !0) : cn(0);
  return {
    width: o.width * m.x,
    height: o.height * m.y,
    x: o.x * m.x - h.scrollLeft * m.x + g.x + w.x,
    y: o.y * m.y - h.scrollTop * m.y + g.y + w.y,
  };
}
function $T(t) {
  return Array.from(t.getClientRects());
}
function GT(t) {
  const r = fn(t),
    o = Xa(t),
    s = t.ownerDocument.body,
    l = Rt(r.scrollWidth, r.clientWidth, s.scrollWidth, s.clientWidth),
    u = Rt(r.scrollHeight, r.clientHeight, s.scrollHeight, s.clientHeight);
  let c = -o.scrollLeft + Nd(t);
  const f = -o.scrollTop;
  return (
    Jt(s).direction === "rtl" && (c += Rt(r.clientWidth, s.clientWidth) - l),
    { width: l, height: u, x: c, y: f }
  );
}
function KT(t, r) {
  const o = kt(t),
    s = fn(t),
    l = o.visualViewport;
  let u = s.clientWidth,
    c = s.clientHeight,
    f = 0,
    h = 0;
  if (l) {
    (u = l.width), (c = l.height);
    const m = Rd();
    (!m || (m && r === "fixed")) && ((f = l.offsetLeft), (h = l.offsetTop));
  }
  return { width: u, height: c, x: f, y: h };
}
function YT(t, r) {
  const o = zr(t, !0, r === "fixed"),
    s = o.top + t.clientTop,
    l = o.left + t.clientLeft,
    u = dn(t) ? Ao(t) : cn(1),
    c = t.clientWidth * u.x,
    f = t.clientHeight * u.y,
    h = l * u.x,
    m = s * u.y;
  return { width: c, height: f, x: h, y: m };
}
function tg(t, r, o) {
  let s;
  if (r === "viewport") s = KT(t, o);
  else if (r === "document") s = GT(fn(t));
  else if (Zt(r)) s = YT(r, o);
  else {
    const l = cv(t);
    s = { x: r.x - l.x, y: r.y - l.y, width: r.width, height: r.height };
  }
  return ja(s);
}
function fv(t, r) {
  const o = pr(t);
  return o === r || !Zt(o) || _o(o)
    ? !1
    : Jt(o).position === "fixed" || fv(o, r);
}
function QT(t, r) {
  const o = r.get(t);
  if (o) return o;
  let s = Ui(t, [], !1).filter((f) => Zt(f) && Do(f) !== "body"),
    l = null;
  const u = Jt(t).position === "fixed";
  let c = u ? pr(t) : t;
  for (; Zt(c) && !_o(c); ) {
    const f = Jt(c),
      h = bd(c);
    !h && f.position === "fixed" && (l = null),
      (
        u
          ? !h && !l
          : (!h &&
              f.position === "static" &&
              !!l &&
              ["absolute", "fixed"].includes(l.position)) ||
            (Ki(c) && !h && fv(t, c))
      )
        ? (s = s.filter((g) => g !== c))
        : (l = f),
      (c = pr(c));
  }
  return r.set(t, s), s;
}
function XT(t) {
  let { element: r, boundary: o, rootBoundary: s, strategy: l } = t;
  const c = [
      ...(o === "clippingAncestors"
        ? Qa(r)
          ? []
          : QT(r, this._c)
        : [].concat(o)),
      s,
    ],
    f = c[0],
    h = c.reduce((m, g) => {
      const v = tg(r, g, l);
      return (
        (m.top = Rt(v.top, m.top)),
        (m.right = dr(v.right, m.right)),
        (m.bottom = dr(v.bottom, m.bottom)),
        (m.left = Rt(v.left, m.left)),
        m
      );
    }, tg(r, f, l));
  return {
    width: h.right - h.left,
    height: h.bottom - h.top,
    x: h.left,
    y: h.top,
  };
}
function qT(t) {
  const { width: r, height: o } = uv(t);
  return { width: r, height: o };
}
function ZT(t, r, o) {
  const s = dn(r),
    l = fn(r),
    u = o === "fixed",
    c = zr(t, !0, u, r);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const h = cn(0);
  if (s || (!s && !u))
    if (((Do(r) !== "body" || Ki(l)) && (f = Xa(r)), s)) {
      const w = zr(r, !0, u, r);
      (h.x = w.x + r.clientLeft), (h.y = w.y + r.clientTop);
    } else l && (h.x = Nd(l));
  const m = l && !s && !u ? dv(l, f) : cn(0),
    g = c.left + f.scrollLeft - h.x - m.x,
    v = c.top + f.scrollTop - h.y - m.y;
  return { x: g, y: v, width: c.width, height: c.height };
}
function rc(t) {
  return Jt(t).position === "static";
}
function ng(t, r) {
  if (!dn(t) || Jt(t).position === "fixed") return null;
  if (r) return r(t);
  let o = t.offsetParent;
  return fn(t) === o && (o = o.ownerDocument.body), o;
}
function pv(t, r) {
  const o = kt(t);
  if (Qa(t)) return o;
  if (!dn(t)) {
    let l = pr(t);
    for (; l && !_o(l); ) {
      if (Zt(l) && !rc(l)) return l;
      l = pr(l);
    }
    return o;
  }
  let s = ng(t, r);
  for (; s && BT(s) && rc(s); ) s = ng(s, r);
  return s && _o(s) && rc(s) && !bd(s) ? o : s || zT(t) || o;
}
const JT = async function (t) {
  const r = this.getOffsetParent || pv,
    o = this.getDimensions,
    s = await o(t.floating);
  return {
    reference: ZT(t.reference, await r(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: s.width, height: s.height },
  };
};
function eA(t) {
  return Jt(t).direction === "rtl";
}
const tA = {
  convertOffsetParentRelativeRectToViewportRelativeRect: HT,
  getDocumentElement: fn,
  getClippingRect: XT,
  getOffsetParent: pv,
  getElementRects: JT,
  getClientRects: $T,
  getDimensions: qT,
  getScale: Ao,
  isElement: Zt,
  isRTL: eA,
};
function nA(t, r) {
  let o = null,
    s;
  const l = fn(t);
  function u() {
    var f;
    clearTimeout(s), (f = o) == null || f.disconnect(), (o = null);
  }
  function c(f, h) {
    f === void 0 && (f = !1), h === void 0 && (h = 1), u();
    const { left: m, top: g, width: v, height: w } = t.getBoundingClientRect();
    if ((f || r(), !v || !w)) return;
    const x = ha(g),
      C = ha(l.clientWidth - (m + v)),
      E = ha(l.clientHeight - (g + w)),
      T = ha(m),
      L = {
        rootMargin: -x + "px " + -C + "px " + -E + "px " + -T + "px",
        threshold: Rt(0, dr(1, h)) || 1,
      };
    let M = !0;
    function N(V) {
      const W = V[0].intersectionRatio;
      if (W !== h) {
        if (!M) return c();
        W
          ? c(!1, W)
          : (s = setTimeout(() => {
              c(!1, 1e-7);
            }, 1e3));
      }
      M = !1;
    }
    try {
      o = new IntersectionObserver(N, { ...L, root: l.ownerDocument });
    } catch {
      o = new IntersectionObserver(N, L);
    }
    o.observe(t);
  }
  return c(!0), u;
}
function rA(t, r, o, s) {
  s === void 0 && (s = {});
  const {
      ancestorScroll: l = !0,
      ancestorResize: u = !0,
      elementResize: c = typeof ResizeObserver == "function",
      layoutShift: f = typeof IntersectionObserver == "function",
      animationFrame: h = !1,
    } = s,
    m = kd(t),
    g = l || u ? [...(m ? Ui(m) : []), ...Ui(r)] : [];
  g.forEach((b) => {
    l && b.addEventListener("scroll", o, { passive: !0 }),
      u && b.addEventListener("resize", o);
  });
  const v = m && f ? nA(m, o) : null;
  let w = -1,
    x = null;
  c &&
    ((x = new ResizeObserver((b) => {
      let [L] = b;
      L &&
        L.target === m &&
        x &&
        (x.unobserve(r),
        cancelAnimationFrame(w),
        (w = requestAnimationFrame(() => {
          var M;
          (M = x) == null || M.observe(r);
        }))),
        o();
    })),
    m && !h && x.observe(m),
    x.observe(r));
  let C,
    E = h ? zr(t) : null;
  h && T();
  function T() {
    const b = zr(t);
    E &&
      (b.x !== E.x ||
        b.y !== E.y ||
        b.width !== E.width ||
        b.height !== E.height) &&
      o(),
      (E = b),
      (C = requestAnimationFrame(T));
  }
  return (
    o(),
    () => {
      var b;
      g.forEach((L) => {
        l && L.removeEventListener("scroll", o),
          u && L.removeEventListener("resize", o);
      }),
        v == null || v(),
        (b = x) == null || b.disconnect(),
        (x = null),
        h && cancelAnimationFrame(C);
    }
  );
}
const oA = DT,
  iA = VT,
  sA = OT,
  aA = jT,
  lA = MT,
  rg = LT,
  uA = FT,
  cA = (t, r, o) => {
    const s = new Map(),
      l = { platform: tA, ...o },
      u = { ...l.platform, _c: s };
    return _T(t, r, { ...l, platform: u });
  };
var Ca = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
function Ba(t, r) {
  if (t === r) return !0;
  if (typeof t != typeof r) return !1;
  if (typeof t == "function" && t.toString() === r.toString()) return !0;
  let o, s, l;
  if (t && r && typeof t == "object") {
    if (Array.isArray(t)) {
      if (((o = t.length), o !== r.length)) return !1;
      for (s = o; s-- !== 0; ) if (!Ba(t[s], r[s])) return !1;
      return !0;
    }
    if (((l = Object.keys(t)), (o = l.length), o !== Object.keys(r).length))
      return !1;
    for (s = o; s-- !== 0; ) if (!{}.hasOwnProperty.call(r, l[s])) return !1;
    for (s = o; s-- !== 0; ) {
      const u = l[s];
      if (!(u === "_owner" && t.$$typeof) && !Ba(t[u], r[u])) return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
}
function hv(t) {
  return typeof window > "u"
    ? 1
    : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function og(t, r) {
  const o = hv(t);
  return Math.round(r * o) / o;
}
function oc(t) {
  const r = S.useRef(t);
  return (
    Ca(() => {
      r.current = t;
    }),
    r
  );
}
function dA(t) {
  t === void 0 && (t = {});
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: l,
      elements: { reference: u, floating: c } = {},
      transform: f = !0,
      whileElementsMounted: h,
      open: m,
    } = t,
    [g, v] = S.useState({
      x: 0,
      y: 0,
      strategy: o,
      placement: r,
      middlewareData: {},
      isPositioned: !1,
    }),
    [w, x] = S.useState(s);
  Ba(w, s) || x(s);
  const [C, E] = S.useState(null),
    [T, b] = S.useState(null),
    L = S.useCallback((F) => {
      F !== W.current && ((W.current = F), E(F));
    }, []),
    M = S.useCallback((F) => {
      F !== Y.current && ((Y.current = F), b(F));
    }, []),
    N = u || C,
    V = c || T,
    W = S.useRef(null),
    Y = S.useRef(null),
    X = S.useRef(g),
    ue = h != null,
    ce = oc(h),
    we = oc(l),
    re = oc(m),
    ve = S.useCallback(() => {
      if (!W.current || !Y.current) return;
      const F = { placement: r, strategy: o, middleware: w };
      we.current && (F.platform = we.current),
        cA(W.current, Y.current, F).then((B) => {
          const G = { ...B, isPositioned: re.current !== !1 };
          $.current &&
            !Ba(X.current, G) &&
            ((X.current = G),
            zc.flushSync(() => {
              v(G);
            }));
        });
    }, [w, r, o, we, re]);
  Ca(() => {
    m === !1 &&
      X.current.isPositioned &&
      ((X.current.isPositioned = !1), v((F) => ({ ...F, isPositioned: !1 })));
  }, [m]);
  const $ = S.useRef(!1);
  Ca(
    () => (
      ($.current = !0),
      () => {
        $.current = !1;
      }
    ),
    []
  ),
    Ca(() => {
      if ((N && (W.current = N), V && (Y.current = V), N && V)) {
        if (ce.current) return ce.current(N, V, ve);
        ve();
      }
    }, [N, V, ve, ce, ue]);
  const te = S.useMemo(
      () => ({ reference: W, floating: Y, setReference: L, setFloating: M }),
      [L, M]
    ),
    q = S.useMemo(() => ({ reference: N, floating: V }), [N, V]),
    z = S.useMemo(() => {
      const F = { position: o, left: 0, top: 0 };
      if (!q.floating) return F;
      const B = og(q.floating, g.x),
        G = og(q.floating, g.y);
      return f
        ? {
            ...F,
            transform: "translate(" + B + "px, " + G + "px)",
            ...(hv(q.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: o, left: B, top: G };
    }, [o, f, q.floating, g.x, g.y]);
  return S.useMemo(
    () => ({ ...g, update: ve, refs: te, elements: q, floatingStyles: z }),
    [g, ve, te, q, z]
  );
}
const fA = (t) => {
    function r(o) {
      return {}.hasOwnProperty.call(o, "current");
    }
    return {
      name: "arrow",
      options: t,
      fn(o) {
        const { element: s, padding: l } = typeof t == "function" ? t(o) : t;
        return s && r(s)
          ? s.current != null
            ? rg({ element: s.current, padding: l }).fn(o)
            : {}
          : s
          ? rg({ element: s, padding: l }).fn(o)
          : {};
      },
    };
  },
  pA = (t, r) => ({ ...oA(t), options: [t, r] }),
  hA = (t, r) => ({ ...iA(t), options: [t, r] }),
  mA = (t, r) => ({ ...uA(t), options: [t, r] }),
  gA = (t, r) => ({ ...sA(t), options: [t, r] }),
  yA = (t, r) => ({ ...aA(t), options: [t, r] }),
  vA = (t, r) => ({ ...lA(t), options: [t, r] }),
  xA = (t, r) => ({ ...fA(t), options: [t, r] });
var wA = "Arrow",
  mv = S.forwardRef((t, r) => {
    const { children: o, width: s = 10, height: l = 5, ...u } = t;
    return I.jsx(en.svg, {
      ...u,
      ref: r,
      width: s,
      height: l,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? o : I.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
mv.displayName = wA;
var SA = mv;
function EA(t) {
  const [r, o] = S.useState(void 0);
  return (
    Br(() => {
      if (t) {
        o({ width: t.offsetWidth, height: t.offsetHeight });
        const s = new ResizeObserver((l) => {
          if (!Array.isArray(l) || !l.length) return;
          const u = l[0];
          let c, f;
          if ("borderBoxSize" in u) {
            const h = u.borderBoxSize,
              m = Array.isArray(h) ? h[0] : h;
            (c = m.inlineSize), (f = m.blockSize);
          } else (c = t.offsetWidth), (f = t.offsetHeight);
          o({ width: c, height: f });
        });
        return s.observe(t, { box: "border-box" }), () => s.unobserve(t);
      } else o(void 0);
    }, [t]),
    r
  );
}
var _d = "Popper",
  [gv, yv] = xg(_d),
  [PA, vv] = gv(_d),
  xv = (t) => {
    const { __scopePopper: r, children: o } = t,
      [s, l] = S.useState(null);
    return I.jsx(PA, { scope: r, anchor: s, onAnchorChange: l, children: o });
  };
xv.displayName = _d;
var wv = "PopperAnchor",
  Sv = S.forwardRef((t, r) => {
    const { __scopePopper: o, virtualRef: s, ...l } = t,
      u = vv(wv, o),
      c = S.useRef(null),
      f = hr(r, c);
    return (
      S.useEffect(() => {
        u.onAnchorChange((s == null ? void 0 : s.current) || c.current);
      }),
      s ? null : I.jsx(en.div, { ...l, ref: f })
    );
  });
Sv.displayName = wv;
var Ld = "PopperContent",
  [CA, TA] = gv(Ld),
  Ev = S.forwardRef((t, r) => {
    var me, Pe, Te, Be, wt, yr;
    const {
        __scopePopper: o,
        side: s = "bottom",
        sideOffset: l = 0,
        align: u = "center",
        alignOffset: c = 0,
        arrowPadding: f = 0,
        avoidCollisions: h = !0,
        collisionBoundary: m = [],
        collisionPadding: g = 0,
        sticky: v = "partial",
        hideWhenDetached: w = !1,
        updatePositionStrategy: x = "optimized",
        onPlaced: C,
        ...E
      } = t,
      T = vv(Ld, o),
      [b, L] = S.useState(null),
      M = hr(r, (St) => L(St)),
      [N, V] = S.useState(null),
      W = EA(N),
      Y = (W == null ? void 0 : W.width) ?? 0,
      X = (W == null ? void 0 : W.height) ?? 0,
      ue = s + (u !== "center" ? "-" + u : ""),
      ce =
        typeof g == "number"
          ? g
          : { top: 0, right: 0, bottom: 0, left: 0, ...g },
      we = Array.isArray(m) ? m : [m],
      re = we.length > 0,
      ve = { padding: ce, boundary: we.filter(bA), altBoundary: re },
      {
        refs: $,
        floatingStyles: te,
        placement: q,
        isPositioned: z,
        middlewareData: F,
      } = dA({
        strategy: "fixed",
        placement: ue,
        whileElementsMounted: (...St) =>
          rA(...St, { animationFrame: x === "always" }),
        elements: { reference: T.anchor },
        middleware: [
          pA({ mainAxis: l + X, alignmentAxis: c }),
          h &&
            hA({
              mainAxis: !0,
              crossAxis: !1,
              limiter: v === "partial" ? mA() : void 0,
              ...ve,
            }),
          h && gA({ ...ve }),
          yA({
            ...ve,
            apply: ({
              elements: St,
              rects: Nn,
              availableWidth: _n,
              availableHeight: Wr,
            }) => {
              const { width: Ln, height: pn } = Nn.reference,
                Ut = St.floating.style;
              Ut.setProperty("--radix-popper-available-width", `${_n}px`),
                Ut.setProperty("--radix-popper-available-height", `${Wr}px`),
                Ut.setProperty("--radix-popper-anchor-width", `${Ln}px`),
                Ut.setProperty("--radix-popper-anchor-height", `${pn}px`);
            },
          }),
          N && xA({ element: N, padding: f }),
          RA({ arrowWidth: Y, arrowHeight: X }),
          w && vA({ strategy: "referenceHidden", ...ve }),
        ],
      }),
      [B, G] = Tv(q),
      k = cr(C);
    Br(() => {
      z && (k == null || k());
    }, [z, k]);
    const j = (me = F.arrow) == null ? void 0 : me.x,
      J = (Pe = F.arrow) == null ? void 0 : Pe.y,
      oe = ((Te = F.arrow) == null ? void 0 : Te.centerOffset) !== 0,
      [he, xe] = S.useState();
    return (
      Br(() => {
        b && xe(window.getComputedStyle(b).zIndex);
      }, [b]),
      I.jsx("div", {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...te,
          transform: z ? te.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: he,
          "--radix-popper-transform-origin": [
            (Be = F.transformOrigin) == null ? void 0 : Be.x,
            (wt = F.transformOrigin) == null ? void 0 : wt.y,
          ].join(" "),
          ...(((yr = F.hide) == null ? void 0 : yr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: t.dir,
        children: I.jsx(CA, {
          scope: o,
          placedSide: B,
          onArrowChange: V,
          arrowX: j,
          arrowY: J,
          shouldHideArrow: oe,
          children: I.jsx(en.div, {
            "data-side": B,
            "data-align": G,
            ...E,
            ref: M,
            style: { ...E.style, animation: z ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Ev.displayName = Ld;
var Pv = "PopperArrow",
  AA = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Cv = S.forwardRef(function (r, o) {
    const { __scopePopper: s, ...l } = r,
      u = TA(Pv, s),
      c = AA[u.placedSide];
    return I.jsx("span", {
      ref: u.onArrowChange,
      style: {
        position: "absolute",
        left: u.arrowX,
        top: u.arrowY,
        [c]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[u.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[u.placedSide],
        visibility: u.shouldHideArrow ? "hidden" : void 0,
      },
      children: I.jsx(SA, {
        ...l,
        ref: o,
        style: { ...l.style, display: "block" },
      }),
    });
  });
Cv.displayName = Pv;
function bA(t) {
  return t !== null;
}
var RA = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(r) {
    var T, b, L;
    const { placement: o, rects: s, middlewareData: l } = r,
      c = ((T = l.arrow) == null ? void 0 : T.centerOffset) !== 0,
      f = c ? 0 : t.arrowWidth,
      h = c ? 0 : t.arrowHeight,
      [m, g] = Tv(o),
      v = { start: "0%", center: "50%", end: "100%" }[g],
      w = (((b = l.arrow) == null ? void 0 : b.x) ?? 0) + f / 2,
      x = (((L = l.arrow) == null ? void 0 : L.y) ?? 0) + h / 2;
    let C = "",
      E = "";
    return (
      m === "bottom"
        ? ((C = c ? v : `${w}px`), (E = `${-h}px`))
        : m === "top"
        ? ((C = c ? v : `${w}px`), (E = `${s.floating.height + h}px`))
        : m === "right"
        ? ((C = `${-h}px`), (E = c ? v : `${x}px`))
        : m === "left" &&
          ((C = `${s.floating.width + h}px`), (E = c ? v : `${x}px`)),
      { data: { x: C, y: E } }
    );
  },
});
function Tv(t) {
  const [r, o = "center"] = t.split("-");
  return [r, o];
}
var kA = xv,
  Av = Sv,
  NA = Ev,
  _A = Cv,
  LA = "Portal",
  bv = S.forwardRef((t, r) => {
    var f;
    const { container: o, ...s } = t,
      [l, u] = S.useState(!1);
    Br(() => u(!0), []);
    const c =
      o ||
      (l &&
        ((f = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : f.body));
    return c ? wg.createPortal(I.jsx(en.div, { ...s, ref: r }), c) : null;
  });
bv.displayName = LA;
function OA(t, r) {
  return S.useReducer((o, s) => r[o][s] ?? o, t);
}
var Od = (t) => {
  const { present: r, children: o } = t,
    s = MA(r),
    l =
      typeof o == "function" ? o({ present: s.isPresent }) : S.Children.only(o),
    u = hr(s.ref, IA(l));
  return typeof o == "function" || s.isPresent
    ? S.cloneElement(l, { ref: u })
    : null;
};
Od.displayName = "Presence";
function MA(t) {
  const [r, o] = S.useState(),
    s = S.useRef({}),
    l = S.useRef(t),
    u = S.useRef("none"),
    c = t ? "mounted" : "unmounted",
    [f, h] = OA(c, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    S.useEffect(() => {
      const m = ma(s.current);
      u.current = f === "mounted" ? m : "none";
    }, [f]),
    Br(() => {
      const m = s.current,
        g = l.current;
      if (g !== t) {
        const w = u.current,
          x = ma(m);
        t
          ? h("MOUNT")
          : x === "none" || (m == null ? void 0 : m.display) === "none"
          ? h("UNMOUNT")
          : h(g && w !== x ? "ANIMATION_OUT" : "UNMOUNT"),
          (l.current = t);
      }
    }, [t, h]),
    Br(() => {
      if (r) {
        let m;
        const g = r.ownerDocument.defaultView ?? window,
          v = (x) => {
            const E = ma(s.current).includes(x.animationName);
            if (x.target === r && E && (h("ANIMATION_END"), !l.current)) {
              const T = r.style.animationFillMode;
              (r.style.animationFillMode = "forwards"),
                (m = g.setTimeout(() => {
                  r.style.animationFillMode === "forwards" &&
                    (r.style.animationFillMode = T);
                }));
            }
          },
          w = (x) => {
            x.target === r && (u.current = ma(s.current));
          };
        return (
          r.addEventListener("animationstart", w),
          r.addEventListener("animationcancel", v),
          r.addEventListener("animationend", v),
          () => {
            g.clearTimeout(m),
              r.removeEventListener("animationstart", w),
              r.removeEventListener("animationcancel", v),
              r.removeEventListener("animationend", v);
          }
        );
      } else h("ANIMATION_END");
    }, [r, h]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(f),
      ref: S.useCallback((m) => {
        m && (s.current = getComputedStyle(m)), o(m);
      }, []),
    }
  );
}
function ma(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function IA(t) {
  var s, l;
  let r =
      (s = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : s.get,
    o = r && "isReactWarning" in r && r.isReactWarning;
  return o
    ? t.ref
    : ((r =
        (l = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : l.get),
      (o = r && "isReactWarning" in r && r.isReactWarning),
      o ? t.props.ref : t.props.ref || t.ref);
}
function DA({ prop: t, defaultProp: r, onChange: o = () => {} }) {
  const [s, l] = VA({ defaultProp: r, onChange: o }),
    u = t !== void 0,
    c = u ? t : s,
    f = cr(o),
    h = S.useCallback(
      (m) => {
        if (u) {
          const v = typeof m == "function" ? m(t) : m;
          v !== t && f(v);
        } else l(m);
      },
      [u, t, l, f]
    );
  return [c, h];
}
function VA({ defaultProp: t, onChange: r }) {
  const o = S.useState(t),
    [s] = o,
    l = S.useRef(s),
    u = cr(r);
  return (
    S.useEffect(() => {
      l.current !== s && (u(s), (l.current = s));
    }, [s, l, u]),
    o
  );
}
var FA = function (t) {
    if (typeof document > "u") return null;
    var r = Array.isArray(t) ? t[0] : t;
    return r.ownerDocument.body;
  },
  yo = new WeakMap(),
  ga = new WeakMap(),
  ya = {},
  ic = 0,
  Rv = function (t) {
    return t && (t.host || Rv(t.parentNode));
  },
  jA = function (t, r) {
    return r
      .map(function (o) {
        if (t.contains(o)) return o;
        var s = Rv(o);
        return s && t.contains(s)
          ? s
          : (console.error(
              "aria-hidden",
              o,
              "in not contained inside",
              t,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (o) {
        return !!o;
      });
  },
  BA = function (t, r, o, s) {
    var l = jA(r, Array.isArray(t) ? t : [t]);
    ya[o] || (ya[o] = new WeakMap());
    var u = ya[o],
      c = [],
      f = new Set(),
      h = new Set(l),
      m = function (v) {
        !v || f.has(v) || (f.add(v), m(v.parentNode));
      };
    l.forEach(m);
    var g = function (v) {
      !v ||
        h.has(v) ||
        Array.prototype.forEach.call(v.children, function (w) {
          if (f.has(w)) g(w);
          else
            try {
              var x = w.getAttribute(s),
                C = x !== null && x !== "false",
                E = (yo.get(w) || 0) + 1,
                T = (u.get(w) || 0) + 1;
              yo.set(w, E),
                u.set(w, T),
                c.push(w),
                E === 1 && C && ga.set(w, !0),
                T === 1 && w.setAttribute(o, "true"),
                C || w.setAttribute(s, "true");
            } catch (b) {
              console.error("aria-hidden: cannot operate on ", w, b);
            }
        });
    };
    return (
      g(r),
      f.clear(),
      ic++,
      function () {
        c.forEach(function (v) {
          var w = yo.get(v) - 1,
            x = u.get(v) - 1;
          yo.set(v, w),
            u.set(v, x),
            w || (ga.has(v) || v.removeAttribute(s), ga.delete(v)),
            x || v.removeAttribute(o);
        }),
          ic--,
          ic ||
            ((yo = new WeakMap()),
            (yo = new WeakMap()),
            (ga = new WeakMap()),
            (ya = {}));
      }
    );
  },
  zA = function (t, r, o) {
    o === void 0 && (o = "data-aria-hidden");
    var s = Array.from(Array.isArray(t) ? t : [t]),
      l = FA(t);
    return l
      ? (s.push.apply(s, Array.from(l.querySelectorAll("[aria-live]"))),
        BA(s, l, o, "aria-hidden"))
      : function () {
          return null;
        };
  },
  an = function () {
    return (
      (an =
        Object.assign ||
        function (r) {
          for (var o, s = 1, l = arguments.length; s < l; s++) {
            o = arguments[s];
            for (var u in o)
              Object.prototype.hasOwnProperty.call(o, u) && (r[u] = o[u]);
          }
          return r;
        }),
      an.apply(this, arguments)
    );
  };
function kv(t, r) {
  var o = {};
  for (var s in t)
    Object.prototype.hasOwnProperty.call(t, s) &&
      r.indexOf(s) < 0 &&
      (o[s] = t[s]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, s = Object.getOwnPropertySymbols(t); l < s.length; l++)
      r.indexOf(s[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, s[l]) &&
        (o[s[l]] = t[s[l]]);
  return o;
}
function UA(t, r, o) {
  if (o || arguments.length === 2)
    for (var s = 0, l = r.length, u; s < l; s++)
      (u || !(s in r)) &&
        (u || (u = Array.prototype.slice.call(r, 0, s)), (u[s] = r[s]));
  return t.concat(u || Array.prototype.slice.call(r));
}
var Ta = "right-scroll-bar-position",
  Aa = "width-before-scroll-bar",
  WA = "with-scroll-bars-hidden",
  HA = "--removed-body-scroll-bar-size";
function sc(t, r) {
  return typeof t == "function" ? t(r) : t && (t.current = r), t;
}
function $A(t, r) {
  var o = S.useState(function () {
    return {
      value: t,
      callback: r,
      facade: {
        get current() {
          return o.value;
        },
        set current(s) {
          var l = o.value;
          l !== s && ((o.value = s), o.callback(s, l));
        },
      },
    };
  })[0];
  return (o.callback = r), o.facade;
}
var GA = typeof window < "u" ? S.useLayoutEffect : S.useEffect,
  ig = new WeakMap();
function KA(t, r) {
  var o = $A(null, function (s) {
    return t.forEach(function (l) {
      return sc(l, s);
    });
  });
  return (
    GA(
      function () {
        var s = ig.get(o);
        if (s) {
          var l = new Set(s),
            u = new Set(t),
            c = o.current;
          l.forEach(function (f) {
            u.has(f) || sc(f, null);
          }),
            u.forEach(function (f) {
              l.has(f) || sc(f, c);
            });
        }
        ig.set(o, t);
      },
      [t]
    ),
    o
  );
}
function YA(t) {
  return t;
}
function QA(t, r) {
  r === void 0 && (r = YA);
  var o = [],
    s = !1,
    l = {
      read: function () {
        if (s)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return o.length ? o[o.length - 1] : t;
      },
      useMedium: function (u) {
        var c = r(u, s);
        return (
          o.push(c),
          function () {
            o = o.filter(function (f) {
              return f !== c;
            });
          }
        );
      },
      assignSyncMedium: function (u) {
        for (s = !0; o.length; ) {
          var c = o;
          (o = []), c.forEach(u);
        }
        o = {
          push: function (f) {
            return u(f);
          },
          filter: function () {
            return o;
          },
        };
      },
      assignMedium: function (u) {
        s = !0;
        var c = [];
        if (o.length) {
          var f = o;
          (o = []), f.forEach(u), (c = o);
        }
        var h = function () {
            var g = c;
            (c = []), g.forEach(u);
          },
          m = function () {
            return Promise.resolve().then(h);
          };
        m(),
          (o = {
            push: function (g) {
              c.push(g), m();
            },
            filter: function (g) {
              return (c = c.filter(g)), o;
            },
          });
      },
    };
  return l;
}
function XA(t) {
  t === void 0 && (t = {});
  var r = QA(null);
  return (r.options = an({ async: !0, ssr: !1 }, t)), r;
}
var Nv = function (t) {
  var r = t.sideCar,
    o = kv(t, ["sideCar"]);
  if (!r)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var s = r.read();
  if (!s) throw new Error("Sidecar medium not found");
  return S.createElement(s, an({}, o));
};
Nv.isSideCarExport = !0;
function qA(t, r) {
  return t.useMedium(r), Nv;
}
var _v = XA(),
  ac = function () {},
  qa = S.forwardRef(function (t, r) {
    var o = S.useRef(null),
      s = S.useState({
        onScrollCapture: ac,
        onWheelCapture: ac,
        onTouchMoveCapture: ac,
      }),
      l = s[0],
      u = s[1],
      c = t.forwardProps,
      f = t.children,
      h = t.className,
      m = t.removeScrollBar,
      g = t.enabled,
      v = t.shards,
      w = t.sideCar,
      x = t.noIsolation,
      C = t.inert,
      E = t.allowPinchZoom,
      T = t.as,
      b = T === void 0 ? "div" : T,
      L = t.gapMode,
      M = kv(t, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      N = w,
      V = KA([o, r]),
      W = an(an({}, M), l);
    return S.createElement(
      S.Fragment,
      null,
      g &&
        S.createElement(N, {
          sideCar: _v,
          removeScrollBar: m,
          shards: v,
          noIsolation: x,
          inert: C,
          setCallbacks: u,
          allowPinchZoom: !!E,
          lockRef: o,
          gapMode: L,
        }),
      c
        ? S.cloneElement(S.Children.only(f), an(an({}, W), { ref: V }))
        : S.createElement(b, an({}, W, { className: h, ref: V }), f)
    );
  });
qa.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
qa.classNames = { fullWidth: Aa, zeroRight: Ta };
var ZA = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function JA() {
  if (!document) return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var r = ZA();
  return r && t.setAttribute("nonce", r), t;
}
function eb(t, r) {
  t.styleSheet
    ? (t.styleSheet.cssText = r)
    : t.appendChild(document.createTextNode(r));
}
function tb(t) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(t);
}
var nb = function () {
    var t = 0,
      r = null;
    return {
      add: function (o) {
        t == 0 && (r = JA()) && (eb(r, o), tb(r)), t++;
      },
      remove: function () {
        t--,
          !t && r && (r.parentNode && r.parentNode.removeChild(r), (r = null));
      },
    };
  },
  rb = function () {
    var t = nb();
    return function (r, o) {
      S.useEffect(
        function () {
          return (
            t.add(r),
            function () {
              t.remove();
            }
          );
        },
        [r && o]
      );
    };
  },
  Lv = function () {
    var t = rb(),
      r = function (o) {
        var s = o.styles,
          l = o.dynamic;
        return t(s, l), null;
      };
    return r;
  },
  ob = { left: 0, top: 0, right: 0, gap: 0 },
  lc = function (t) {
    return parseInt(t || "", 10) || 0;
  },
  ib = function (t) {
    var r = window.getComputedStyle(document.body),
      o = r[t === "padding" ? "paddingLeft" : "marginLeft"],
      s = r[t === "padding" ? "paddingTop" : "marginTop"],
      l = r[t === "padding" ? "paddingRight" : "marginRight"];
    return [lc(o), lc(s), lc(l)];
  },
  sb = function (t) {
    if ((t === void 0 && (t = "margin"), typeof window > "u")) return ob;
    var r = ib(t),
      o = document.documentElement.clientWidth,
      s = window.innerWidth;
    return {
      left: r[0],
      top: r[1],
      right: r[2],
      gap: Math.max(0, s - o + r[2] - r[0]),
    };
  },
  ab = Lv(),
  bo = "data-scroll-locked",
  lb = function (t, r, o, s) {
    var l = t.left,
      u = t.top,
      c = t.right,
      f = t.gap;
    return (
      o === void 0 && (o = "margin"),
      `
  .`
        .concat(
          WA,
          ` {
   overflow: hidden `
        )
        .concat(
          s,
          `;
   padding-right: `
        )
        .concat(f, "px ")
        .concat(
          s,
          `;
  }
  body[`
        )
        .concat(
          bo,
          `] {
    overflow: hidden `
        )
        .concat(
          s,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            r && "position: relative ".concat(s, ";"),
            o === "margin" &&
              `
    padding-left: `
                .concat(
                  l,
                  `px;
    padding-top: `
                )
                .concat(
                  u,
                  `px;
    padding-right: `
                )
                .concat(
                  c,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(f, "px ")
                .concat(
                  s,
                  `;
    `
                ),
            o === "padding" &&
              "padding-right: ".concat(f, "px ").concat(s, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Ta,
          ` {
    right: `
        )
        .concat(f, "px ")
        .concat(
          s,
          `;
  }
  
  .`
        )
        .concat(
          Aa,
          ` {
    margin-right: `
        )
        .concat(f, "px ")
        .concat(
          s,
          `;
  }
  
  .`
        )
        .concat(Ta, " .")
        .concat(
          Ta,
          ` {
    right: 0 `
        )
        .concat(
          s,
          `;
  }
  
  .`
        )
        .concat(Aa, " .")
        .concat(
          Aa,
          ` {
    margin-right: 0 `
        )
        .concat(
          s,
          `;
  }
  
  body[`
        )
        .concat(
          bo,
          `] {
    `
        )
        .concat(HA, ": ")
        .concat(
          f,
          `px;
  }
`
        )
    );
  },
  sg = function () {
    var t = parseInt(document.body.getAttribute(bo) || "0", 10);
    return isFinite(t) ? t : 0;
  },
  ub = function () {
    S.useEffect(function () {
      return (
        document.body.setAttribute(bo, (sg() + 1).toString()),
        function () {
          var t = sg() - 1;
          t <= 0
            ? document.body.removeAttribute(bo)
            : document.body.setAttribute(bo, t.toString());
        }
      );
    }, []);
  },
  cb = function (t) {
    var r = t.noRelative,
      o = t.noImportant,
      s = t.gapMode,
      l = s === void 0 ? "margin" : s;
    ub();
    var u = S.useMemo(
      function () {
        return sb(l);
      },
      [l]
    );
    return S.createElement(ab, { styles: lb(u, !r, l, o ? "" : "!important") });
  },
  Vc = !1;
if (typeof window < "u")
  try {
    var va = Object.defineProperty({}, "passive", {
      get: function () {
        return (Vc = !0), !0;
      },
    });
    window.addEventListener("test", va, va),
      window.removeEventListener("test", va, va);
  } catch {
    Vc = !1;
  }
var vo = Vc ? { passive: !1 } : !1,
  db = function (t) {
    return t.tagName === "TEXTAREA";
  },
  Ov = function (t, r) {
    if (!(t instanceof Element)) return !1;
    var o = window.getComputedStyle(t);
    return (
      o[r] !== "hidden" &&
      !(o.overflowY === o.overflowX && !db(t) && o[r] === "visible")
    );
  },
  fb = function (t) {
    return Ov(t, "overflowY");
  },
  pb = function (t) {
    return Ov(t, "overflowX");
  },
  ag = function (t, r) {
    var o = r.ownerDocument,
      s = r;
    do {
      typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
      var l = Mv(t, s);
      if (l) {
        var u = Iv(t, s),
          c = u[1],
          f = u[2];
        if (c > f) return !0;
      }
      s = s.parentNode;
    } while (s && s !== o.body);
    return !1;
  },
  hb = function (t) {
    var r = t.scrollTop,
      o = t.scrollHeight,
      s = t.clientHeight;
    return [r, o, s];
  },
  mb = function (t) {
    var r = t.scrollLeft,
      o = t.scrollWidth,
      s = t.clientWidth;
    return [r, o, s];
  },
  Mv = function (t, r) {
    return t === "v" ? fb(r) : pb(r);
  },
  Iv = function (t, r) {
    return t === "v" ? hb(r) : mb(r);
  },
  gb = function (t, r) {
    return t === "h" && r === "rtl" ? -1 : 1;
  },
  yb = function (t, r, o, s, l) {
    var u = gb(t, window.getComputedStyle(r).direction),
      c = u * s,
      f = o.target,
      h = r.contains(f),
      m = !1,
      g = c > 0,
      v = 0,
      w = 0;
    do {
      var x = Iv(t, f),
        C = x[0],
        E = x[1],
        T = x[2],
        b = E - T - u * C;
      (C || b) && Mv(t, f) && ((v += b), (w += C)),
        f instanceof ShadowRoot ? (f = f.host) : (f = f.parentNode);
    } while ((!h && f !== document.body) || (h && (r.contains(f) || r === f)));
    return (
      ((g && (Math.abs(v) < 1 || !l)) || (!g && (Math.abs(w) < 1 || !l))) &&
        (m = !0),
      m
    );
  },
  xa = function (t) {
    return "changedTouches" in t
      ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY]
      : [0, 0];
  },
  lg = function (t) {
    return [t.deltaX, t.deltaY];
  },
  ug = function (t) {
    return t && "current" in t ? t.current : t;
  },
  vb = function (t, r) {
    return t[0] === r[0] && t[1] === r[1];
  },
  xb = function (t) {
    return `
  .block-interactivity-`
      .concat(
        t,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        t,
        ` {pointer-events: all;}
`
      );
  },
  wb = 0,
  xo = [];
function Sb(t) {
  var r = S.useRef([]),
    o = S.useRef([0, 0]),
    s = S.useRef(),
    l = S.useState(wb++)[0],
    u = S.useState(Lv)[0],
    c = S.useRef(t);
  S.useEffect(
    function () {
      c.current = t;
    },
    [t]
  ),
    S.useEffect(
      function () {
        if (t.inert) {
          document.body.classList.add("block-interactivity-".concat(l));
          var E = UA([t.lockRef.current], (t.shards || []).map(ug), !0).filter(
            Boolean
          );
          return (
            E.forEach(function (T) {
              return T.classList.add("allow-interactivity-".concat(l));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(l)),
                E.forEach(function (T) {
                  return T.classList.remove("allow-interactivity-".concat(l));
                });
            }
          );
        }
      },
      [t.inert, t.lockRef.current, t.shards]
    );
  var f = S.useCallback(function (E, T) {
      if (
        ("touches" in E && E.touches.length === 2) ||
        (E.type === "wheel" && E.ctrlKey)
      )
        return !c.current.allowPinchZoom;
      var b = xa(E),
        L = o.current,
        M = "deltaX" in E ? E.deltaX : L[0] - b[0],
        N = "deltaY" in E ? E.deltaY : L[1] - b[1],
        V,
        W = E.target,
        Y = Math.abs(M) > Math.abs(N) ? "h" : "v";
      if ("touches" in E && Y === "h" && W.type === "range") return !1;
      var X = ag(Y, W);
      if (!X) return !0;
      if ((X ? (V = Y) : ((V = Y === "v" ? "h" : "v"), (X = ag(Y, W))), !X))
        return !1;
      if (
        (!s.current && "changedTouches" in E && (M || N) && (s.current = V), !V)
      )
        return !0;
      var ue = s.current || V;
      return yb(ue, T, E, ue === "h" ? M : N, !0);
    }, []),
    h = S.useCallback(function (E) {
      var T = E;
      if (!(!xo.length || xo[xo.length - 1] !== u)) {
        var b = "deltaY" in T ? lg(T) : xa(T),
          L = r.current.filter(function (V) {
            return (
              V.name === T.type &&
              (V.target === T.target || T.target === V.shadowParent) &&
              vb(V.delta, b)
            );
          })[0];
        if (L && L.should) {
          T.cancelable && T.preventDefault();
          return;
        }
        if (!L) {
          var M = (c.current.shards || [])
              .map(ug)
              .filter(Boolean)
              .filter(function (V) {
                return V.contains(T.target);
              }),
            N = M.length > 0 ? f(T, M[0]) : !c.current.noIsolation;
          N && T.cancelable && T.preventDefault();
        }
      }
    }, []),
    m = S.useCallback(function (E, T, b, L) {
      var M = { name: E, delta: T, target: b, should: L, shadowParent: Eb(b) };
      r.current.push(M),
        setTimeout(function () {
          r.current = r.current.filter(function (N) {
            return N !== M;
          });
        }, 1);
    }, []),
    g = S.useCallback(function (E) {
      (o.current = xa(E)), (s.current = void 0);
    }, []),
    v = S.useCallback(function (E) {
      m(E.type, lg(E), E.target, f(E, t.lockRef.current));
    }, []),
    w = S.useCallback(function (E) {
      m(E.type, xa(E), E.target, f(E, t.lockRef.current));
    }, []);
  S.useEffect(function () {
    return (
      xo.push(u),
      t.setCallbacks({
        onScrollCapture: v,
        onWheelCapture: v,
        onTouchMoveCapture: w,
      }),
      document.addEventListener("wheel", h, vo),
      document.addEventListener("touchmove", h, vo),
      document.addEventListener("touchstart", g, vo),
      function () {
        (xo = xo.filter(function (E) {
          return E !== u;
        })),
          document.removeEventListener("wheel", h, vo),
          document.removeEventListener("touchmove", h, vo),
          document.removeEventListener("touchstart", g, vo);
      }
    );
  }, []);
  var x = t.removeScrollBar,
    C = t.inert;
  return S.createElement(
    S.Fragment,
    null,
    C ? S.createElement(u, { styles: xb(l) }) : null,
    x ? S.createElement(cb, { gapMode: t.gapMode }) : null
  );
}
function Eb(t) {
  for (var r = null; t !== null; )
    t instanceof ShadowRoot && ((r = t.host), (t = t.host)), (t = t.parentNode);
  return r;
}
const Pb = qA(_v, Sb);
var Dv = S.forwardRef(function (t, r) {
  return S.createElement(qa, an({}, t, { ref: r, sideCar: Pb }));
});
Dv.classNames = qa.classNames;
var Md = "Popover",
  [Vv, Xb] = nT(Md, [yv]),
  Yi = yv(),
  [Cb, gr] = Vv(Md),
  Fv = (t) => {
    const {
        __scopePopover: r,
        children: o,
        open: s,
        defaultOpen: l,
        onOpenChange: u,
        modal: c = !1,
      } = t,
      f = Yi(r),
      h = S.useRef(null),
      [m, g] = S.useState(!1),
      [v = !1, w] = DA({ prop: s, defaultProp: l, onChange: u });
    return I.jsx(kA, {
      ...f,
      children: I.jsx(Cb, {
        scope: r,
        contentId: ET(),
        triggerRef: h,
        open: v,
        onOpenChange: w,
        onOpenToggle: S.useCallback(() => w((x) => !x), [w]),
        hasCustomAnchor: m,
        onCustomAnchorAdd: S.useCallback(() => g(!0), []),
        onCustomAnchorRemove: S.useCallback(() => g(!1), []),
        modal: c,
        children: o,
      }),
    });
  };
Fv.displayName = Md;
var jv = "PopoverAnchor",
  Tb = S.forwardRef((t, r) => {
    const { __scopePopover: o, ...s } = t,
      l = gr(jv, o),
      u = Yi(o),
      { onCustomAnchorAdd: c, onCustomAnchorRemove: f } = l;
    return (
      S.useEffect(() => (c(), () => f()), [c, f]),
      I.jsx(Av, { ...u, ...s, ref: r })
    );
  });
Tb.displayName = jv;
var Bv = "PopoverTrigger",
  zv = S.forwardRef((t, r) => {
    const { __scopePopover: o, ...s } = t,
      l = gr(Bv, o),
      u = Yi(o),
      c = hr(r, l.triggerRef),
      f = I.jsx(en.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": l.open,
        "aria-controls": l.contentId,
        "data-state": Gv(l.open),
        ...s,
        ref: c,
        onClick: ar(t.onClick, l.onOpenToggle),
      });
    return l.hasCustomAnchor
      ? f
      : I.jsx(Av, { asChild: !0, ...u, children: f });
  });
zv.displayName = Bv;
var Id = "PopoverPortal",
  [Ab, bb] = Vv(Id, { forceMount: void 0 }),
  Uv = (t) => {
    const { __scopePopover: r, forceMount: o, children: s, container: l } = t,
      u = gr(Id, r);
    return I.jsx(Ab, {
      scope: r,
      forceMount: o,
      children: I.jsx(Od, {
        present: o || u.open,
        children: I.jsx(bv, { asChild: !0, container: l, children: s }),
      }),
    });
  };
Uv.displayName = Id;
var Lo = "PopoverContent",
  Wv = S.forwardRef((t, r) => {
    const o = bb(Lo, t.__scopePopover),
      { forceMount: s = o.forceMount, ...l } = t,
      u = gr(Lo, t.__scopePopover);
    return I.jsx(Od, {
      present: s || u.open,
      children: u.modal
        ? I.jsx(Rb, { ...l, ref: r })
        : I.jsx(kb, { ...l, ref: r }),
    });
  });
Wv.displayName = Lo;
var Rb = S.forwardRef((t, r) => {
    const o = gr(Lo, t.__scopePopover),
      s = S.useRef(null),
      l = hr(r, s),
      u = S.useRef(!1);
    return (
      S.useEffect(() => {
        const c = s.current;
        if (c) return zA(c);
      }, []),
      I.jsx(Dv, {
        as: Uc,
        allowPinchZoom: !0,
        children: I.jsx(Hv, {
          ...t,
          ref: l,
          trapFocus: o.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: ar(t.onCloseAutoFocus, (c) => {
            var f;
            c.preventDefault(),
              u.current || (f = o.triggerRef.current) == null || f.focus();
          }),
          onPointerDownOutside: ar(
            t.onPointerDownOutside,
            (c) => {
              const f = c.detail.originalEvent,
                h = f.button === 0 && f.ctrlKey === !0,
                m = f.button === 2 || h;
              u.current = m;
            },
            { checkForDefaultPrevented: !1 }
          ),
          onFocusOutside: ar(t.onFocusOutside, (c) => c.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  kb = S.forwardRef((t, r) => {
    const o = gr(Lo, t.__scopePopover),
      s = S.useRef(!1),
      l = S.useRef(!1);
    return I.jsx(Hv, {
      ...t,
      ref: r,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (u) => {
        var c, f;
        (c = t.onCloseAutoFocus) == null || c.call(t, u),
          u.defaultPrevented ||
            (s.current || (f = o.triggerRef.current) == null || f.focus(),
            u.preventDefault()),
          (s.current = !1),
          (l.current = !1);
      },
      onInteractOutside: (u) => {
        var h, m;
        (h = t.onInteractOutside) == null || h.call(t, u),
          u.defaultPrevented ||
            ((s.current = !0),
            u.detail.originalEvent.type === "pointerdown" && (l.current = !0));
        const c = u.target;
        ((m = o.triggerRef.current) == null ? void 0 : m.contains(c)) &&
          u.preventDefault(),
          u.detail.originalEvent.type === "focusin" &&
            l.current &&
            u.preventDefault();
      },
    });
  }),
  Hv = S.forwardRef((t, r) => {
    const {
        __scopePopover: o,
        trapFocus: s,
        onOpenAutoFocus: l,
        onCloseAutoFocus: u,
        disableOutsidePointerEvents: c,
        onEscapeKeyDown: f,
        onPointerDownOutside: h,
        onFocusOutside: m,
        onInteractOutside: g,
        ...v
      } = t,
      w = gr(Lo, o),
      x = Yi(o);
    return (
      fT(),
      I.jsx(ov, {
        asChild: !0,
        loop: !0,
        trapped: s,
        onMountAutoFocus: l,
        onUnmountAutoFocus: u,
        children: I.jsx(nv, {
          asChild: !0,
          disableOutsidePointerEvents: c,
          onInteractOutside: g,
          onEscapeKeyDown: f,
          onPointerDownOutside: h,
          onFocusOutside: m,
          onDismiss: () => w.onOpenChange(!1),
          children: I.jsx(NA, {
            "data-state": Gv(w.open),
            role: "dialog",
            id: w.contentId,
            ...x,
            ...v,
            ref: r,
            style: {
              ...v.style,
              "--radix-popover-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          }),
        }),
      })
    );
  }),
  $v = "PopoverClose",
  Nb = S.forwardRef((t, r) => {
    const { __scopePopover: o, ...s } = t,
      l = gr($v, o);
    return I.jsx(en.button, {
      type: "button",
      ...s,
      ref: r,
      onClick: ar(t.onClick, () => l.onOpenChange(!1)),
    });
  });
Nb.displayName = $v;
var _b = "PopoverArrow",
  Lb = S.forwardRef((t, r) => {
    const { __scopePopover: o, ...s } = t,
      l = Yi(o);
    return I.jsx(_A, { ...l, ...s, ref: r });
  });
Lb.displayName = _b;
function Gv(t) {
  return t ? "open" : "closed";
}
var Ob = Fv,
  Mb = zv,
  Ib = Uv,
  Kv = Wv;
const Db = Ob,
  Vb = Mb,
  Yv = S.forwardRef(
    ({ className: t, align: r = "center", sideOffset: o = 4, ...s }, l) =>
      I.jsx(Ib, {
        children: I.jsx(Kv, {
          ref: l,
          align: r,
          sideOffset: o,
          className: nt(
            "z-50 w-72 rounded-md border bg-white p-4 text-black shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            t
          ),
          ...s,
        }),
      })
  );
Yv.displayName = Kv.displayName;
const Qv = S.forwardRef(({ className: t, ...r }, o) =>
  I.jsx("div", {
    className: "relative w-full overflow-auto",
    children: I.jsx("table", {
      ref: o,
      className: nt("w-full caption-bottom text-sm", t),
      ...r,
    }),
  })
);
Qv.displayName = "Table";
const Xv = S.forwardRef(({ className: t, ...r }, o) =>
  I.jsx("thead", { ref: o, className: nt("[&_tr]:border-b", t), ...r })
);
Xv.displayName = "TableHeader";
const qv = S.forwardRef(({ className: t, ...r }, o) =>
  I.jsx("tbody", {
    ref: o,
    className: nt("[&_tr:last-child]:border-0", t),
    ...r,
  })
);
qv.displayName = "TableBody";
const Fb = S.forwardRef(({ className: t, ...r }, o) =>
  I.jsx("tfoot", {
    ref: o,
    className: nt("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t),
    ...r,
  })
);
Fb.displayName = "TableFooter";
const Fc = S.forwardRef(({ className: t, ...r }, o) =>
  I.jsx("tr", {
    ref: o,
    className: nt(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      t
    ),
    ...r,
  })
);
Fc.displayName = "TableRow";
const ba = S.forwardRef(({ className: t, ...r }, o) =>
  I.jsx("th", {
    ref: o,
    className: nt(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      t
    ),
    ...r,
  })
);
ba.displayName = "TableHead";
const Ra = S.forwardRef(({ className: t, ...r }, o) =>
  I.jsx("td", {
    ref: o,
    className: nt(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      t
    ),
    ...r,
  })
);
Ra.displayName = "TableCell";
const jb = S.forwardRef(({ className: t, ...r }, o) =>
  I.jsx("caption", {
    ref: o,
    className: nt("mt-4 text-sm text-muted-foreground", t),
    ...r,
  })
);
jb.displayName = "TableCaption";
function Bb() {
  var ve;
  const [t, r] = S.useState(0),
    [o, s] = S.useState({}),
    [l, u] = S.useState({}),
    [c, f] = S.useState({}),
    [h, m] = S.useState(1),
    [g, v] = S.useState([]),
    [w, x] = S.useState(1),
    [C, E] = S.useState(!1),
    [T, b] = S.useState(!1),
    [L, M] = S.useState([]),
    N = S.useMemo(
      () =>
        Xt.find(($) => {
          var te;
          return $.id === ((te = Xt[t]) == null ? void 0 : te.id);
        }) || null,
      [t]
    );
  S.useEffect(() => {
    (async () => {
      if ((N == null ? void 0 : N.id) === "summary") {
        const te = await kh(o);
        M(te);
      }
    })();
  }, [N, o]);
  const V = S.useCallback(
      ($, te) => {
        if (!N) return Xt.findIndex((q) => q.id === $) + 1;
        if (typeof N.nextStep == "function") {
          const q = N.nextStep(te);
          if (q) return Xt.findIndex((z) => z.id === q);
        }
        if (N.nextStep) return Xt.findIndex((q) => q.id === N.nextStep);
        if (N.inputType === "button" && typeof N.options == "function") {
          const q = N.options(te).find((z) => z.value === te[N.label]);
          if (q != null && q.nextStep)
            return Xt.findIndex((z) => z.id === q.nextStep);
        }
        return Xt.findIndex((q) => q.id === $) + 1;
      },
      [N]
    ),
    W = S.useCallback(() => {
      if (g.length > 0) {
        const $ = g[g.length - 1];
        return v((te) => te.slice(0, -1)), $;
      }
      return Math.max(0, t - 1);
    }, [g, t]),
    Y = ($) => {
      var q;
      const te = $.nextStep
        ? Xt.findIndex((z) => z.id === $.nextStep)
        : V((q = Xt[t]) == null ? void 0 : q.id, o);
      m(1),
        v((z) => [...z, t]),
        r(te),
        N && s((z) => ({ ...z, [N.label]: $.value })),
        x((z) => z + 1);
    },
    X = () => {
      m(1);
      const $ = {};
      if (
        (N != null &&
          N.inputFields &&
          (typeof N.inputFields == "function"
            ? N.inputFields(l)
            : N.inputFields
          ).forEach((q) => {
            let z = l[q.name];
            !z || z.trim() === ""
              ? ((z = "0"), (l[q.name] = z))
              : q.type === "number" &&
                !/^\d+$/.test(z) &&
                ($[q.name] = "Bitte geben Sie eine gültige Ganzzahl ein.");
          }),
        Object.keys($).length > 0)
      ) {
        f($);
        return;
      }
      f({}),
        s((te) => ({ ...te, ...l })),
        x((te) => te + 1),
        r((te) => {
          var z;
          const q = V((z = Xt[te]) == null ? void 0 : z.id, o);
          return v((F) => [...F, te]), q;
        });
    },
    ue = () => {
      const $ = W();
      m(-1), r($), x((te) => te - 1);
    },
    ce = S.useCallback(($) => (typeof $ == "function" ? $(o) : $), [o]),
    we = S.useMemo(() => Xt.filter((te) => te.id !== "summary").length, []),
    re = async () => {
      var te;
      E(!0);
      const $ = [];
      try {
        if (
          typeof ((te = window.Smootify) == null ? void 0 : te.addToCart) !=
          "function"
        )
          throw new Error("Smootify-Funktion nicht verfügbar");
        const q = kh(o);
        if (q.length === 0) {
          fa.warning("Keine Produkte zum Hinzufügen gefunden.");
          return;
        }
        for (const z of q)
          try {
            const F = {
              merchandiseId: z.merchandiseId,
              quantity: Number(z.quantity),
              attributes: [],
            };
            await window.Smootify.addToCart([F]);
          } catch (F) {
            console.error(
              `Fehler beim Hinzufügen von Produkt ${z.merchandiseId}:`,
              F
            ),
              $.push(z);
          }
        if ($.length === 0)
          fa.success(
            "Alle Produkte wurden erfolgreich zum Warenkorb hinzugefügt."
          );
        else {
          const z = $.map((F) => F.merchandiseId).join(", ");
          fa.error(
            `Die folgenden Produkte konnten nicht hinzugefügt werden: ${z}. Kontaktieren Sie bitte den Support.`
          );
        }
      } catch (q) {
        console.error("Ein globaler Fehler ist aufgetreten:", q),
          fa.error(
            "Beim Hinzufügen der Produkte ist ein Fehler aufgetreten. Kontaktieren Sie bitte den Support."
          );
      } finally {
        b(!0), E(!1);
      }
    };
  return (N == null ? void 0 : N.id) === "start"
    ? I.jsx("div", {
        className:
          "w-full h-screen flex items-center justify-center text-white",
        children: I.jsx("div", {
          className: "flex flex-col w-full max-w-md px-4 sm:px-6 md:px-8",
          children: I.jsxs(Ri, {
            className: "w-full text-center",
            children: [
              I.jsx(ki, {
                className: "text-lg lg:text-3xl",
                children: "Konfigurator",
              }),
              I.jsx(Ni, {
                className: "text-lg lg:text-xl mt-2",
                children:
                  "Willkommen auf unserem Konfigurator. Bitte beantworten Sie die folgenden Fragen, um die passenden Produkte zu finden.",
              }),
              I.jsx(wa, {
                className: "flex justify-center mt-4",
                children: I.jsx(Mr.button, {
                  type: "button",
                  onClick: () => Y({ label: "Start", value: "1" }),
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  disabled: C || T,
                  className:
                    "button max-w-[350px] w-full items-center justify-center flex",
                  children: "Konfigurator starten",
                }),
              }),
            ],
          }),
        }),
      })
    : (N == null ? void 0 : N.id) === "summary"
    ? L.length === 0
      ? I.jsx("div", {
          className:
            "w-full h-screen flex items-center justify-center text-white",
          children: I.jsx("div", {
            className: "flex flex-col w-full max-w-md px-4 sm:px-6 md:px-8",
            children: I.jsxs(Ri, {
              className: "w-full text-center",
              children: [
                I.jsx(ki, {
                  className: "text-lg lg:text-3xl",
                  children: "Übersicht",
                }),
                I.jsx(Ni, {
                  className: "text-lg lg:text-xl mt-2",
                  children:
                    "Es wurden keine Produkte gefunden. Bitte überprüfen Sie Ihre Eingaben.",
                }),
                I.jsx(wa, {
                  className: "flex justify-center mt-4",
                  children: I.jsx(Mr.button, {
                    type: "button",
                    onClick: () => window.location.reload(),
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    disabled: C || T,
                    className:
                      "button max-w-[350px] w-full items-center justify-center flex",
                    children: "Kalkulation neu starten",
                  }),
                }),
              ],
            }),
          }),
        })
      : I.jsx("div", {
          className: "w-full flex flex-col text-white",
          children: I.jsx("div", {
            className:
              "flex flex-col w-full flex-1 justify-center px-4 sm:px-6 md:px-8",
            children: I.jsxs(Ri, {
              className: "w-full max-w-4xl p-2 sm:p-4 lg:p-8",
              children: [
                I.jsx(ki, {
                  className: "text-lg lg:text-3xl",
                  children: "Übersicht",
                }),
                I.jsx(Ni, {
                  className: "text-lg lg:text-xl",
                  children:
                    "Durch die Konfiguration werden folgende Produkte benötigt:",
                }),
                I.jsx(cc, {
                  className: "px-0 py-4",
                  children: I.jsxs(Qv, {
                    children: [
                      I.jsx(Xv, {
                        children: I.jsxs(Fc, {
                          children: [
                            I.jsx(ba, { children: "Titel" }),
                            I.jsx(ba, { children: "Produktkategorie" }),
                            I.jsx(ba, {
                              className: "text-right",
                              children: "Anzahl",
                            }),
                          ],
                        }),
                      }),
                      I.jsx(qv, {
                        children: L.map(($, te) =>
                          I.jsxs(
                            Fc,
                            {
                              children: [
                                I.jsx(Ra, {
                                  className: "font-medium",
                                  children: $.title,
                                }),
                                I.jsx(Ra, { children: $.productType }),
                                I.jsx(Ra, {
                                  className: "text-right",
                                  children: $.quantity,
                                }),
                              ],
                            },
                            te
                          )
                        ),
                      }),
                    ],
                  }),
                }),
                I.jsx(wa, {
                  className: "flex items-center justify-center",
                  children: I.jsx(Mr.button, {
                    type: "button",
                    onClick: re,
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    disabled: C || T,
                    className:
                      "button max-w-[350px] w-full items-center justify-center flex",
                    children: T
                      ? "Produkte wurden hinzugefügt"
                      : C
                      ? I.jsx(tT, {})
                      : "Zum Warenkorb hinzufügen",
                  }),
                }),
              ],
            }),
          }),
        })
    : I.jsx("div", {
        className: "w-full flex flex-col flex-1 text-white",
        children: I.jsx("div", {
          className:
            "flex flex-col w-full flex-1 items-center px-4 sm:px-6 md:px-8 lg:pt-[200px] pt-[50px]",
          children: I.jsxs(Ri, {
            className:
              "w-full justify-center max-w-4xl p-2 sm:p-4 lg:p-8  flex flex-col overflow-scroll",
            children: [
              N &&
                I.jsx("div", {
                  className: "w-full px-6",
                  id: "progress-bar",
                  children: I.jsx(bg, {
                    className: "h-1",
                    value: (w / we) * 100,
                  }),
                }),
              I.jsx(TC, {
                mode: "wait",
                children:
                  N &&
                  I.jsxs(
                    Mr.div,
                    {
                      initial: { opacity: 0, x: h === 1 ? 16 : -16 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: h === 1 ? -16 : 16 },
                      transition: { duration: 0.3 },
                      children: [
                        I.jsxs(vg, {
                          className: "flex flex-auto",
                          children: [
                            I.jsxs(ki, {
                              className:
                                "flex text-lg items-center lg:text-2xl",
                              children: [
                                I.jsx("div", {
                                  className: "pr-2",
                                  children: N.title,
                                }),
                                I.jsxs(Db, {
                                  children: [
                                    I.jsx(Vb, { children: I.jsx(NC, {}) }),
                                    I.jsx(Yv, {
                                      children: I.jsx("div", {
                                        className: "grid gap-4",
                                        children: I.jsxs("div", {
                                          className: "space-y-2",
                                          children: [
                                            I.jsx("h4", {
                                              className:
                                                "font-medium leading-none text-black",
                                              children: "Information",
                                            }),
                                            I.jsx("div", {
                                              className:
                                                "text-sm text-gray-700",
                                              dangerouslySetInnerHTML: {
                                                __html: N.description || "",
                                              },
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            I.jsx(Ni, { className: "text-sm lg:text-xl" }),
                          ],
                        }),
                        I.jsx(cc, {
                          className: "flex-grow overflow-y-auto py-4",
                          children: I.jsxs("div", {
                            className: "grid gap-4",
                            children: [
                              N.inputType === "button" &&
                                ce(N.options).map(($, te) =>
                                  I.jsx(
                                    Mr.button,
                                    {
                                      type: "button",
                                      tabIndex: 0,
                                      "aria-label": `Select option: ${$.label}`,
                                      onClick: () => Y($),
                                      whileHover: { scale: 1.05 },
                                      whileTap: { scale: 0.95 },
                                      onKeyDown: (q) => {
                                        (q.key === "Enter" || q.key === " ") &&
                                          Y($);
                                      },
                                      className:
                                        "button is-secondary text-left w-full text-white",
                                      children: $.label,
                                    },
                                    `${$.value}-${te}`
                                  )
                                ),
                              typeof N.inputFields == "function"
                                ? N.inputFields(l).map(($, te) =>
                                    I.jsxs(
                                      "div",
                                      {
                                        className: "py-2",
                                        children: [
                                          I.jsx("label", {
                                            className: "form_label",
                                            children: $.label,
                                          }),
                                          I.jsx(dc, {
                                            className: "form_input w-full",
                                            placeholder: $.placeholder,
                                            value: l[$.name] || "",
                                            onChange: (q) =>
                                              u((z) => ({
                                                ...z,
                                                [$.name]: q.target.value,
                                              })),
                                          }),
                                          c[$.name] &&
                                            I.jsx("p", {
                                              className: "text-red-500 text-sm",
                                              children: c[$.name],
                                            }),
                                        ],
                                      },
                                      te
                                    )
                                  )
                                : (ve = N.inputFields) == null
                                ? void 0
                                : ve.map(($, te) =>
                                    I.jsxs(
                                      "div",
                                      {
                                        className: "py-2",
                                        children: [
                                          I.jsx("label", {
                                            className: "form_label",
                                            children: $.label,
                                          }),
                                          I.jsx(dc, {
                                            type: "number",
                                            name: $.name,
                                            max: 999,
                                            className: "form_input",
                                            placeholder: $.placeholder,
                                            value: l[$.name] || "",
                                            onChange: (q) =>
                                              u((z) => ({
                                                ...z,
                                                [$.name]: q.target.value,
                                              })),
                                          }),
                                          c[$.name] &&
                                            I.jsx("p", {
                                              className: "text-red-500 text-sm",
                                              children: c[$.name],
                                            }),
                                        ],
                                      },
                                      te
                                    )
                                  ),
                              I.jsxs("div", {
                                className:
                                  "justify-start items-center space-x-4 pt-4",
                                children: [
                                  t > 0 &&
                                    I.jsx(Mr.button, {
                                      type: "button",
                                      onClick: ue,
                                      whileHover: { scale: 1.05 },
                                      whileTap: { scale: 0.95 },
                                      className:
                                        "button is-secondary text-white",
                                      children: "Zurück",
                                    }),
                                  N.inputType === "input" &&
                                    I.jsx(Mr.button, {
                                      type: "button",
                                      onClick: X,
                                      whileHover: { scale: 1.05 },
                                      whileTap: { scale: 0.95 },
                                      className: "button",
                                      children: "Weiter",
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    t
                  ),
              }),
            ],
          }),
        }),
      });
}
var zb = (t, r, o, s, l, u, c, f) => {
    let h = document.documentElement,
      m = ["light", "dark"];
    function g(x) {
      (Array.isArray(t) ? t : [t]).forEach((C) => {
        let E = C === "class",
          T = E && u ? l.map((b) => u[b] || b) : l;
        E
          ? (h.classList.remove(...T), h.classList.add(x))
          : h.setAttribute(C, x);
      }),
        v(x);
    }
    function v(x) {
      f && m.includes(x) && (h.style.colorScheme = x);
    }
    function w() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    if (s) g(s);
    else
      try {
        let x = localStorage.getItem(r) || o,
          C = c && x === "system" ? w() : x;
        g(C);
      } catch {}
  },
  Ub = S.createContext(void 0),
  Wb = { setTheme: (t) => {}, themes: [] },
  Hb = () => {
    var t;
    return (t = S.useContext(Ub)) != null ? t : Wb;
  };
S.memo(
  ({
    forcedTheme: t,
    storageKey: r,
    attribute: o,
    enableSystem: s,
    enableColorScheme: l,
    defaultTheme: u,
    value: c,
    themes: f,
    nonce: h,
    scriptProps: m,
  }) => {
    let g = JSON.stringify([o, r, u, t, f, c, s, l]).slice(1, -1);
    return S.createElement("script", {
      ...m,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? h : "",
      dangerouslySetInnerHTML: { __html: `(${zb.toString()})(${g})` },
    });
  }
);
const $b = ({ ...t }) => {
  const { theme: r = "system" } = Hb();
  return I.jsx(eT, {
    theme: r,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...t,
  });
};
function Gb() {
  return I.jsxs("div", {
    className:
      "flex flex-col h-screen w-full justify-center bg-primary overflow-y-scroll",
    children: [I.jsx(Bb, {}), I.jsx($b, {})],
  });
}
tx.createRoot(document.getElementById("root")).render(
  I.jsx(S.StrictMode, { children: I.jsx(Gb, {}) })
);
