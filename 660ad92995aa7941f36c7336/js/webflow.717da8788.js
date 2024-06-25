/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var D_ = Object.create;
  var tn = Object.defineProperty;
  var G_ = Object.getOwnPropertyDescriptor;
  var V_ = Object.getOwnPropertyNames;
  var B_ = Object.getPrototypeOf,
    U_ = Object.prototype.hasOwnProperty;
  var se = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Re = (e, t) => {
      for (var r in t) tn(e, r, { get: t[r], enumerable: !0 });
    },
    ws = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of V_(t))
          !U_.call(e, i) &&
            i !== r &&
            tn(e, i, {
              get: () => t[i],
              enumerable: !(n = G_(t, i)) || n.enumerable,
            });
      return e;
    };
  var ee = (e, t, r) => (
      (r = e != null ? D_(B_(e)) : {}),
      ws(
        t || !e || !e.__esModule
          ? tn(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    Ke = (e) => ws(tn({}, "__esModule", { value: !0 }), e);
  var wi = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, v) {
        var m = new he.Bare();
        return m.init(l, v);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (v) {
          return "-" + v.toLowerCase();
        });
      }
      function n(l) {
        var v = parseInt(l.slice(1), 16),
          m = (v >> 16) & 255,
          I = (v >> 8) & 255,
          R = 255 & v;
        return [m, I, R];
      }
      function i(l, v, m) {
        return (
          "#" + ((1 << 24) | (l << 16) | (v << 8) | m).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, v) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof v + "] " + v);
      }
      function s(l, v, m) {
        f("Units do not match [" + l + "]: " + v + ", " + m);
      }
      function u(l, v, m) {
        if ((v !== void 0 && (m = v), l === void 0)) return m;
        var I = m;
        return (
          hr.test(l) || !It.test(l)
            ? (I = parseInt(l, 10))
            : It.test(l) && (I = 1e3 * parseFloat(l)),
          0 > I && (I = 0),
          I === I ? I : m
        );
      }
      function f(l) {
        oe.debug && window && window.console.warn(l);
      }
      function h(l) {
        for (var v = -1, m = l ? l.length : 0, I = []; ++v < m; ) {
          var R = l[v];
          R && I.push(R);
        }
        return I;
      }
      var g = (function (l, v, m) {
          function I($) {
            return typeof $ == "object";
          }
          function R($) {
            return typeof $ == "function";
          }
          function w() {}
          function X($, ae) {
            function q() {
              var Oe = new Q();
              return R(Oe.init) && Oe.init.apply(Oe, arguments), Oe;
            }
            function Q() {}
            ae === m && ((ae = $), ($ = Object)), (q.Bare = Q);
            var Z,
              de = (w[l] = $[l]),
              ze = (Q[l] = q[l] = new w());
            return (
              (ze.constructor = q),
              (q.mixin = function (Oe) {
                return (Q[l] = q[l] = X(q, Oe)[l]), q;
              }),
              (q.open = function (Oe) {
                if (
                  ((Z = {}),
                  R(Oe) ? (Z = Oe.call(q, ze, de, q, $)) : I(Oe) && (Z = Oe),
                  I(Z))
                )
                  for (var vr in Z) v.call(Z, vr) && (ze[vr] = Z[vr]);
                return R(ze.init) || (ze.init = $), q;
              }),
              q.open(ae)
            );
          }
          return X;
        })("prototype", {}.hasOwnProperty),
        d = {
          ease: [
            "ease",
            function (l, v, m, I) {
              var R = (l /= I) * l,
                w = R * l;
              return (
                v +
                m * (-2.75 * w * R + 11 * R * R + -15.5 * w + 8 * R + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, v, m, I) {
              var R = (l /= I) * l,
                w = R * l;
              return v + m * (-1 * w * R + 3 * R * R + -3 * w + 2 * R);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, v, m, I) {
              var R = (l /= I) * l,
                w = R * l;
              return (
                v +
                m * (0.3 * w * R + -1.6 * R * R + 2.2 * w + -1.8 * R + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, v, m, I) {
              var R = (l /= I) * l,
                w = R * l;
              return v + m * (2 * w * R + -5 * R * R + 2 * w + 2 * R);
            },
          ],
          linear: [
            "linear",
            function (l, v, m, I) {
              return (m * l) / I + v;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, v, m, I) {
              return m * (l /= I) * l + v;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, v, m, I) {
              return -m * (l /= I) * (l - 2) + v;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, v, m, I) {
              return (l /= I / 2) < 1
                ? (m / 2) * l * l + v
                : (-m / 2) * (--l * (l - 2) - 1) + v;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, v, m, I) {
              return m * (l /= I) * l * l + v;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, v, m, I) {
              return m * ((l = l / I - 1) * l * l + 1) + v;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, v, m, I) {
              return (l /= I / 2) < 1
                ? (m / 2) * l * l * l + v
                : (m / 2) * ((l -= 2) * l * l + 2) + v;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, v, m, I) {
              return m * (l /= I) * l * l * l + v;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, v, m, I) {
              return -m * ((l = l / I - 1) * l * l * l - 1) + v;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, v, m, I) {
              return (l /= I / 2) < 1
                ? (m / 2) * l * l * l * l + v
                : (-m / 2) * ((l -= 2) * l * l * l - 2) + v;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, v, m, I) {
              return m * (l /= I) * l * l * l * l + v;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, v, m, I) {
              return m * ((l = l / I - 1) * l * l * l * l + 1) + v;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, v, m, I) {
              return (l /= I / 2) < 1
                ? (m / 2) * l * l * l * l * l + v
                : (m / 2) * ((l -= 2) * l * l * l * l + 2) + v;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, v, m, I) {
              return -m * Math.cos((l / I) * (Math.PI / 2)) + m + v;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, v, m, I) {
              return m * Math.sin((l / I) * (Math.PI / 2)) + v;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, v, m, I) {
              return (-m / 2) * (Math.cos((Math.PI * l) / I) - 1) + v;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, v, m, I) {
              return l === 0 ? v : m * Math.pow(2, 10 * (l / I - 1)) + v;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, v, m, I) {
              return l === I
                ? v + m
                : m * (-Math.pow(2, (-10 * l) / I) + 1) + v;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, v, m, I) {
              return l === 0
                ? v
                : l === I
                ? v + m
                : (l /= I / 2) < 1
                ? (m / 2) * Math.pow(2, 10 * (l - 1)) + v
                : (m / 2) * (-Math.pow(2, -10 * --l) + 2) + v;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, v, m, I) {
              return -m * (Math.sqrt(1 - (l /= I) * l) - 1) + v;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, v, m, I) {
              return m * Math.sqrt(1 - (l = l / I - 1) * l) + v;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, v, m, I) {
              return (l /= I / 2) < 1
                ? (-m / 2) * (Math.sqrt(1 - l * l) - 1) + v
                : (m / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + v;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, v, m, I, R) {
              return (
                R === void 0 && (R = 1.70158),
                m * (l /= I) * l * ((R + 1) * l - R) + v
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, v, m, I, R) {
              return (
                R === void 0 && (R = 1.70158),
                m * ((l = l / I - 1) * l * ((R + 1) * l + R) + 1) + v
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, v, m, I, R) {
              return (
                R === void 0 && (R = 1.70158),
                (l /= I / 2) < 1
                  ? (m / 2) * l * l * (((R *= 1.525) + 1) * l - R) + v
                  : (m / 2) *
                      ((l -= 2) * l * (((R *= 1.525) + 1) * l + R) + 2) +
                    v
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        A = document,
        _ = window,
        O = "bkwld-tram",
        y = /[\-\.0-9]/g,
        S = /[A-Z]/,
        b = "number",
        x = /^(rgb|#)/,
        N = /(em|cm|mm|in|pt|pc|px)$/,
        C = /(em|cm|mm|in|pt|pc|px|%)$/,
        G = /(deg|rad|turn)$/,
        V = "unitless",
        U = /(all|none) 0s ease 0s/,
        k = /^(width|height)$/,
        K = " ",
        P = A.createElement("a"),
        T = ["Webkit", "Moz", "O", "ms"],
        L = ["-webkit-", "-moz-", "-o-", "-ms-"],
        B = function (l) {
          if (l in P.style) return { dom: l, css: l };
          var v,
            m,
            I = "",
            R = l.split("-");
          for (v = 0; v < R.length; v++)
            I += R[v].charAt(0).toUpperCase() + R[v].slice(1);
          for (v = 0; v < T.length; v++)
            if (((m = T[v] + I), m in P.style))
              return { dom: m, css: L[v] + l };
        },
        F = (t.support = {
          bind: Function.prototype.bind,
          transform: B("transform"),
          transition: B("transition"),
          backface: B("backface-visibility"),
          timing: B("transition-timing-function"),
        });
      if (F.transition) {
        var j = F.timing.dom;
        if (((P.style[j] = d["ease-in-back"][0]), !P.style[j]))
          for (var z in E) d[z][0] = E[z];
      }
      var te = (t.frame = (function () {
          var l =
            _.requestAnimationFrame ||
            _.webkitRequestAnimationFrame ||
            _.mozRequestAnimationFrame ||
            _.oRequestAnimationFrame ||
            _.msRequestAnimationFrame;
          return l && F.bind
            ? l.bind(_)
            : function (v) {
                _.setTimeout(v, 16);
              };
        })()),
        be = (t.now = (function () {
          var l = _.performance,
            v = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return v && F.bind
            ? v.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        je = g(function (l) {
          function v(W, J) {
            var le = h(("" + W).split(K)),
              re = le[0];
            J = J || {};
            var Ae = D[re];
            if (!Ae) return f("Unsupported property: " + re);
            if (!J.weak || !this.props[re]) {
              var De = Ae[0],
                Ce = this.props[re];
              return (
                Ce || (Ce = this.props[re] = new De.Bare()),
                Ce.init(this.$el, le, Ae, J),
                Ce
              );
            }
          }
          function m(W, J, le) {
            if (W) {
              var re = typeof W;
              if (
                (J ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                re == "number" && J)
              )
                return (
                  (this.timer = new ft({
                    duration: W,
                    context: this,
                    complete: w,
                  })),
                  void (this.active = !0)
                );
              if (re == "string" && J) {
                switch (W) {
                  case "hide":
                    q.call(this);
                    break;
                  case "stop":
                    X.call(this);
                    break;
                  case "redraw":
                    Q.call(this);
                    break;
                  default:
                    v.call(this, W, le && le[1]);
                }
                return w.call(this);
              }
              if (re == "function") return void W.call(this, this);
              if (re == "object") {
                var Ae = 0;
                ze.call(
                  this,
                  W,
                  function (pe, F_) {
                    pe.span > Ae && (Ae = pe.span), pe.stop(), pe.animate(F_);
                  },
                  function (pe) {
                    "wait" in pe && (Ae = u(pe.wait, 0));
                  }
                ),
                  de.call(this),
                  Ae > 0 &&
                    ((this.timer = new ft({ duration: Ae, context: this })),
                    (this.active = !0),
                    J && (this.timer.complete = w));
                var De = this,
                  Ce = !1,
                  en = {};
                te(function () {
                  ze.call(De, W, function (pe) {
                    pe.active && ((Ce = !0), (en[pe.name] = pe.nextStyle));
                  }),
                    Ce && De.$el.css(en);
                });
              }
            }
          }
          function I(W) {
            (W = u(W, 0)),
              this.active
                ? this.queue.push({ options: W })
                : ((this.timer = new ft({
                    duration: W,
                    context: this,
                    complete: w,
                  })),
                  (this.active = !0));
          }
          function R(W) {
            return this.active
              ? (this.queue.push({ options: W, args: arguments }),
                void (this.timer.complete = w))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function w() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var W = this.queue.shift();
              m.call(this, W.options, !0, W.args);
            }
          }
          function X(W) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var J;
            typeof W == "string"
              ? ((J = {}), (J[W] = 1))
              : (J = typeof W == "object" && W != null ? W : this.props),
              ze.call(this, J, Oe),
              de.call(this);
          }
          function $(W) {
            X.call(this, W), ze.call(this, W, vr, q_);
          }
          function ae(W) {
            typeof W != "string" && (W = "block"), (this.el.style.display = W);
          }
          function q() {
            X.call(this), (this.el.style.display = "none");
          }
          function Q() {
            this.el.offsetHeight;
          }
          function Z() {
            X.call(this), e.removeData(this.el, O), (this.$el = this.el = null);
          }
          function de() {
            var W,
              J,
              le = [];
            this.upstream && le.push(this.upstream);
            for (W in this.props)
              (J = this.props[W]), J.active && le.push(J.string);
            (le = le.join(",")),
              this.style !== le &&
                ((this.style = le), (this.el.style[F.transition.dom] = le));
          }
          function ze(W, J, le) {
            var re,
              Ae,
              De,
              Ce,
              en = J !== Oe,
              pe = {};
            for (re in W)
              (De = W[re]),
                re in ue
                  ? (pe.transform || (pe.transform = {}),
                    (pe.transform[re] = De))
                  : (S.test(re) && (re = r(re)),
                    re in D ? (pe[re] = De) : (Ce || (Ce = {}), (Ce[re] = De)));
            for (re in pe) {
              if (((De = pe[re]), (Ae = this.props[re]), !Ae)) {
                if (!en) continue;
                Ae = v.call(this, re);
              }
              J.call(this, Ae, De);
            }
            le && Ce && le.call(this, Ce);
          }
          function Oe(W) {
            W.stop();
          }
          function vr(W, J) {
            W.set(J);
          }
          function q_(W) {
            this.$el.css(W);
          }
          function Fe(W, J) {
            l[W] = function () {
              return this.children
                ? M_.call(this, J, arguments)
                : (this.el && J.apply(this, arguments), this);
            };
          }
          function M_(W, J) {
            var le,
              re = this.children.length;
            for (le = 0; re > le; le++) W.apply(this.children[le], J);
            return this;
          }
          (l.init = function (W) {
            if (
              ((this.$el = e(W)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var J = M(this.el, "transition");
              J && !U.test(J) && (this.upstream = J);
            }
            F.backface &&
              oe.hideBackface &&
              p(this.el, F.backface.css, "hidden");
          }),
            Fe("add", v),
            Fe("start", m),
            Fe("wait", I),
            Fe("then", R),
            Fe("next", w),
            Fe("stop", X),
            Fe("set", $),
            Fe("show", ae),
            Fe("hide", q),
            Fe("redraw", Q),
            Fe("destroy", Z);
        }),
        he = g(je, function (l) {
          function v(m, I) {
            var R = e.data(m, O) || e.data(m, O, new je.Bare());
            return R.el || R.init(m), I ? R.start(I) : R;
          }
          l.init = function (m, I) {
            var R = e(m);
            if (!R.length) return this;
            if (R.length === 1) return v(R[0], I);
            var w = [];
            return (
              R.each(function (X, $) {
                w.push(v($, I));
              }),
              (this.children = w),
              this
            );
          };
        }),
        Y = g(function (l) {
          function v() {
            var w = this.get();
            this.update("auto");
            var X = this.get();
            return this.update(w), X;
          }
          function m(w, X, $) {
            return X !== void 0 && ($ = X), w in d ? w : $;
          }
          function I(w) {
            var X = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(w);
            return (X ? i(X[1], X[2], X[3]) : w).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var R = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (w, X, $, ae) {
            (this.$el = w), (this.el = w[0]);
            var q = X[0];
            $[2] && (q = $[2]),
              H[q] && (q = H[q]),
              (this.name = q),
              (this.type = $[1]),
              (this.duration = u(X[1], this.duration, R.duration)),
              (this.ease = m(X[2], this.ease, R.ease)),
              (this.delay = u(X[3], this.delay, R.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = k.test(this.name)),
              (this.unit = ae.unit || this.unit || oe.defaultUnit),
              (this.angle = ae.angle || this.angle || oe.defaultAngle),
              oe.fallback || ae.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    K +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? K + d[this.ease][0] : "") +
                    (this.delay ? K + this.delay + "ms" : "")));
          }),
            (l.set = function (w) {
              (w = this.convert(w, this.type)), this.update(w), this.redraw();
            }),
            (l.transition = function (w) {
              (this.active = !0),
                (w = this.convert(w, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  w == "auto" && (w = v.call(this))),
                (this.nextStyle = w);
            }),
            (l.fallback = function (w) {
              var X =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (w = this.convert(w, this.type)),
                this.auto &&
                  (X == "auto" && (X = this.convert(this.get(), this.type)),
                  w == "auto" && (w = v.call(this))),
                (this.tween = new bt({
                  from: X,
                  to: w,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return M(this.el, this.name);
            }),
            (l.update = function (w) {
              p(this.el, this.name, w);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                p(this.el, this.name, this.get()));
              var w = this.tween;
              w && w.context && w.destroy();
            }),
            (l.convert = function (w, X) {
              if (w == "auto" && this.auto) return w;
              var $,
                ae = typeof w == "number",
                q = typeof w == "string";
              switch (X) {
                case b:
                  if (ae) return w;
                  if (q && w.replace(y, "") === "") return +w;
                  $ = "number(unitless)";
                  break;
                case x:
                  if (q) {
                    if (w === "" && this.original) return this.original;
                    if (X.test(w))
                      return w.charAt(0) == "#" && w.length == 7 ? w : I(w);
                  }
                  $ = "hex or rgb string";
                  break;
                case N:
                  if (ae) return w + this.unit;
                  if (q && X.test(w)) return w;
                  $ = "number(px) or string(unit)";
                  break;
                case C:
                  if (ae) return w + this.unit;
                  if (q && X.test(w)) return w;
                  $ = "number(px) or string(unit or %)";
                  break;
                case G:
                  if (ae) return w + this.angle;
                  if (q && X.test(w)) return w;
                  $ = "number(deg) or string(angle)";
                  break;
                case V:
                  if (ae || (q && C.test(w))) return w;
                  $ = "number(unitless) or string(unit or %)";
              }
              return a($, w), w;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        ve = g(Y, function (l, v) {
          l.init = function () {
            v.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), x));
          };
        }),
        Tt = g(Y, function (l, v) {
          (l.init = function () {
            v.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (m) {
              this.$el[this.name](m);
            });
        }),
        Mt = g(Y, function (l, v) {
          function m(I, R) {
            var w, X, $, ae, q;
            for (w in I)
              (ae = ue[w]),
                ($ = ae[0]),
                (X = ae[1] || w),
                (q = this.convert(I[w], $)),
                R.call(this, X, q, $);
          }
          (l.init = function () {
            v.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                ue.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  p(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (I) {
              m.call(this, I, function (R, w) {
                this.current[R] = w;
              }),
                p(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (I) {
              var R = this.values(I);
              this.tween = new gr({
                current: this.current,
                values: R,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var w,
                X = {};
              for (w in this.current) X[w] = w in R ? R[w] : this.current[w];
              (this.active = !0), (this.nextStyle = this.style(X));
            }),
            (l.fallback = function (I) {
              var R = this.values(I);
              this.tween = new gr({
                current: this.current,
                values: R,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              p(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (I) {
              var R,
                w = "";
              for (R in I) w += R + "(" + I[R] + ") ";
              return w;
            }),
            (l.values = function (I) {
              var R,
                w = {};
              return (
                m.call(this, I, function (X, $, ae) {
                  (w[X] = $),
                    this.current[X] === void 0 &&
                      ((R = 0),
                      ~X.indexOf("scale") && (R = 1),
                      (this.current[X] = this.convert(R, ae)));
                }),
                w
              );
            });
        }),
        bt = g(function (l) {
          function v(q) {
            $.push(q) === 1 && te(m);
          }
          function m() {
            var q,
              Q,
              Z,
              de = $.length;
            if (de)
              for (te(m), Q = be(), q = de; q--; ) (Z = $[q]), Z && Z.render(Q);
          }
          function I(q) {
            var Q,
              Z = e.inArray(q, $);
            Z >= 0 &&
              ((Q = $.slice(Z + 1)),
              ($.length = Z),
              Q.length && ($ = $.concat(Q)));
          }
          function R(q) {
            return Math.round(q * ae) / ae;
          }
          function w(q, Q, Z) {
            return i(
              q[0] + Z * (Q[0] - q[0]),
              q[1] + Z * (Q[1] - q[1]),
              q[2] + Z * (Q[2] - q[2])
            );
          }
          var X = { ease: d.ease[1], from: 0, to: 1 };
          (l.init = function (q) {
            (this.duration = q.duration || 0), (this.delay = q.delay || 0);
            var Q = q.ease || X.ease;
            d[Q] && (Q = d[Q][1]),
              typeof Q != "function" && (Q = X.ease),
              (this.ease = Q),
              (this.update = q.update || o),
              (this.complete = q.complete || o),
              (this.context = q.context || this),
              (this.name = q.name);
            var Z = q.from,
              de = q.to;
            Z === void 0 && (Z = X.from),
              de === void 0 && (de = X.to),
              (this.unit = q.unit || ""),
              typeof Z == "number" && typeof de == "number"
                ? ((this.begin = Z), (this.change = de - Z))
                : this.format(de, Z),
              (this.value = this.begin + this.unit),
              (this.start = be()),
              q.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = be()),
                (this.active = !0),
                v(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), I(this));
            }),
            (l.render = function (q) {
              var Q,
                Z = q - this.start;
              if (this.delay) {
                if (Z <= this.delay) return;
                Z -= this.delay;
              }
              if (Z < this.duration) {
                var de = this.ease(Z, 0, 1, this.duration);
                return (
                  (Q = this.startRGB
                    ? w(this.startRGB, this.endRGB, de)
                    : R(this.begin + de * this.change)),
                  (this.value = Q + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (Q = this.endHex || this.begin + this.change),
                (this.value = Q + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (q, Q) {
              if (((Q += ""), (q += ""), q.charAt(0) == "#"))
                return (
                  (this.startRGB = n(Q)),
                  (this.endRGB = n(q)),
                  (this.endHex = q),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var Z = Q.replace(y, ""),
                  de = q.replace(y, "");
                Z !== de && s("tween", Q, q), (this.unit = Z);
              }
              (Q = parseFloat(Q)),
                (q = parseFloat(q)),
                (this.begin = this.value = Q),
                (this.change = q - Q);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var $ = [],
            ae = 1e3;
        }),
        ft = g(bt, function (l) {
          (l.init = function (v) {
            (this.duration = v.duration || 0),
              (this.complete = v.complete || o),
              (this.context = v.context),
              this.play();
          }),
            (l.render = function (v) {
              var m = v - this.start;
              m < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        gr = g(bt, function (l, v) {
          (l.init = function (m) {
            (this.context = m.context),
              (this.update = m.update),
              (this.tweens = []),
              (this.current = m.current);
            var I, R;
            for (I in m.values)
              (R = m.values[I]),
                this.current[I] !== R &&
                  this.tweens.push(
                    new bt({
                      name: I,
                      from: this.current[I],
                      to: R,
                      duration: m.duration,
                      delay: m.delay,
                      ease: m.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (m) {
              var I,
                R,
                w = this.tweens.length,
                X = !1;
              for (I = w; I--; )
                (R = this.tweens[I]),
                  R.context &&
                    (R.render(m), (this.current[R.name] = R.value), (X = !0));
              return X
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((v.destroy.call(this), this.tweens)) {
                var m,
                  I = this.tweens.length;
                for (m = I; m--; ) this.tweens[m].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !F.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!F.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + l + ")");
        var v = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = v.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new bt(l);
        }),
        (t.delay = function (l, v, m) {
          return new ft({ complete: v, duration: l, context: m });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var p = e.style,
        M = e.css,
        H = { transform: F.transform && F.transform.css },
        D = {
          color: [ve, x],
          background: [ve, x, "background-color"],
          "outline-color": [ve, x],
          "border-color": [ve, x],
          "border-top-color": [ve, x],
          "border-right-color": [ve, x],
          "border-bottom-color": [ve, x],
          "border-left-color": [ve, x],
          "border-width": [Y, N],
          "border-top-width": [Y, N],
          "border-right-width": [Y, N],
          "border-bottom-width": [Y, N],
          "border-left-width": [Y, N],
          "border-spacing": [Y, N],
          "letter-spacing": [Y, N],
          margin: [Y, N],
          "margin-top": [Y, N],
          "margin-right": [Y, N],
          "margin-bottom": [Y, N],
          "margin-left": [Y, N],
          padding: [Y, N],
          "padding-top": [Y, N],
          "padding-right": [Y, N],
          "padding-bottom": [Y, N],
          "padding-left": [Y, N],
          "outline-width": [Y, N],
          opacity: [Y, b],
          top: [Y, C],
          right: [Y, C],
          bottom: [Y, C],
          left: [Y, C],
          "font-size": [Y, C],
          "text-indent": [Y, C],
          "word-spacing": [Y, C],
          width: [Y, C],
          "min-width": [Y, C],
          "max-width": [Y, C],
          height: [Y, C],
          "min-height": [Y, C],
          "max-height": [Y, C],
          "line-height": [Y, V],
          "scroll-top": [Tt, b, "scrollTop"],
          "scroll-left": [Tt, b, "scrollLeft"],
        },
        ue = {};
      F.transform &&
        ((D.transform = [Mt]),
        (ue = {
          x: [C, "translateX"],
          y: [C, "translateY"],
          rotate: [G],
          rotateX: [G],
          rotateY: [G],
          scale: [b],
          scaleX: [b],
          scaleY: [b],
          skew: [G],
          skewX: [G],
          skewY: [G],
        })),
        F.transform &&
          F.backface &&
          ((ue.z = [C, "translateZ"]),
          (ue.rotateZ = [G]),
          (ue.scaleZ = [b]),
          (ue.perspective = [N]));
      var hr = /ms/,
        It = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Cs = c((S5, xs) => {
    "use strict";
    var H_ = window.$,
      X_ = wi() && H_.tram;
    xs.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        f = n.hasOwnProperty,
        h = r.forEach,
        g = r.map,
        d = r.reduce,
        E = r.reduceRight,
        A = r.filter,
        _ = r.every,
        O = r.some,
        y = r.indexOf,
        S = r.lastIndexOf,
        b = Array.isArray,
        x = Object.keys,
        N = i.bind,
        C =
          (e.each =
          e.forEach =
            function (T, L, B) {
              if (T == null) return T;
              if (h && T.forEach === h) T.forEach(L, B);
              else if (T.length === +T.length) {
                for (var F = 0, j = T.length; F < j; F++)
                  if (L.call(B, T[F], F, T) === t) return;
              } else
                for (var z = e.keys(T), F = 0, j = z.length; F < j; F++)
                  if (L.call(B, T[z[F]], z[F], T) === t) return;
              return T;
            });
      (e.map = e.collect =
        function (T, L, B) {
          var F = [];
          return T == null
            ? F
            : g && T.map === g
            ? T.map(L, B)
            : (C(T, function (j, z, te) {
                F.push(L.call(B, j, z, te));
              }),
              F);
        }),
        (e.find = e.detect =
          function (T, L, B) {
            var F;
            return (
              G(T, function (j, z, te) {
                if (L.call(B, j, z, te)) return (F = j), !0;
              }),
              F
            );
          }),
        (e.filter = e.select =
          function (T, L, B) {
            var F = [];
            return T == null
              ? F
              : A && T.filter === A
              ? T.filter(L, B)
              : (C(T, function (j, z, te) {
                  L.call(B, j, z, te) && F.push(j);
                }),
                F);
          });
      var G =
        (e.some =
        e.any =
          function (T, L, B) {
            L || (L = e.identity);
            var F = !1;
            return T == null
              ? F
              : O && T.some === O
              ? T.some(L, B)
              : (C(T, function (j, z, te) {
                  if (F || (F = L.call(B, j, z, te))) return t;
                }),
                !!F);
          });
      (e.contains = e.include =
        function (T, L) {
          return T == null
            ? !1
            : y && T.indexOf === y
            ? T.indexOf(L) != -1
            : G(T, function (B) {
                return B === L;
              });
        }),
        (e.delay = function (T, L) {
          var B = a.call(arguments, 2);
          return setTimeout(function () {
            return T.apply(null, B);
          }, L);
        }),
        (e.defer = function (T) {
          return e.delay.apply(e, [T, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (T) {
          var L, B, F;
          return function () {
            L ||
              ((L = !0),
              (B = arguments),
              (F = this),
              X_.frame(function () {
                (L = !1), T.apply(F, B);
              }));
          };
        }),
        (e.debounce = function (T, L, B) {
          var F,
            j,
            z,
            te,
            be,
            je = function () {
              var he = e.now() - te;
              he < L
                ? (F = setTimeout(je, L - he))
                : ((F = null), B || ((be = T.apply(z, j)), (z = j = null)));
            };
          return function () {
            (z = this), (j = arguments), (te = e.now());
            var he = B && !F;
            return (
              F || (F = setTimeout(je, L)),
              he && ((be = T.apply(z, j)), (z = j = null)),
              be
            );
          };
        }),
        (e.defaults = function (T) {
          if (!e.isObject(T)) return T;
          for (var L = 1, B = arguments.length; L < B; L++) {
            var F = arguments[L];
            for (var j in F) T[j] === void 0 && (T[j] = F[j]);
          }
          return T;
        }),
        (e.keys = function (T) {
          if (!e.isObject(T)) return [];
          if (x) return x(T);
          var L = [];
          for (var B in T) e.has(T, B) && L.push(B);
          return L;
        }),
        (e.has = function (T, L) {
          return f.call(T, L);
        }),
        (e.isObject = function (T) {
          return T === Object(T);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var V = /(.)^/,
        U = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        k = /\\|'|\r|\n|\u2028|\u2029/g,
        K = function (T) {
          return "\\" + U[T];
        },
        P = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (T, L, B) {
          !L && B && (L = B), (L = e.defaults({}, L, e.templateSettings));
          var F = RegExp(
              [
                (L.escape || V).source,
                (L.interpolate || V).source,
                (L.evaluate || V).source,
              ].join("|") + "|$",
              "g"
            ),
            j = 0,
            z = "__p+='";
          T.replace(F, function (he, Y, ve, Tt, Mt) {
            return (
              (z += T.slice(j, Mt).replace(k, K)),
              (j = Mt + he.length),
              Y
                ? (z +=
                    `'+
((__t=(` +
                    Y +
                    `))==null?'':_.escape(__t))+
'`)
                : ve
                ? (z +=
                    `'+
((__t=(` +
                    ve +
                    `))==null?'':__t)+
'`)
                : Tt &&
                  (z +=
                    `';
` +
                    Tt +
                    `
__p+='`),
              he
            );
          }),
            (z += `';
`);
          var te = L.variable;
          if (te) {
            if (!P.test(te))
              throw new Error("variable is not a bare identifier: " + te);
          } else
            (z =
              `with(obj||{}){
` +
              z +
              `}
`),
              (te = "obj");
          z =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            z +
            `return __p;
`;
          var be;
          try {
            be = new Function(L.variable || "obj", "_", z);
          } catch (he) {
            throw ((he.source = z), he);
          }
          var je = function (he) {
            return be.call(this, he, e);
          };
          return (
            (je.source =
              "function(" +
              te +
              `){
` +
              z +
              "}"),
            je
          );
        }),
        e
      );
    })();
  });
  var $e = c((w5, Ds) => {
    "use strict";
    var ne = {},
      Ft = {},
      Dt = [],
      Ci = window.Webflow || [],
      dt = window.jQuery,
      Ve = dt(window),
      k_ = dt(document),
      Ye = dt.isFunction,
      Ge = (ne._ = Cs()),
      Ns = (ne.tram = wi() && dt.tram),
      nn = !1,
      Ri = !1;
    Ns.config.hideBackface = !1;
    Ns.config.keepInherited = !0;
    ne.define = function (e, t, r) {
      Ft[e] && Ps(Ft[e]);
      var n = (Ft[e] = t(dt, Ge, r) || {});
      return Ls(n), n;
    };
    ne.require = function (e) {
      return Ft[e];
    };
    function Ls(e) {
      ne.env() &&
        (Ye(e.design) && Ve.on("__wf_design", e.design),
        Ye(e.preview) && Ve.on("__wf_preview", e.preview)),
        Ye(e.destroy) && Ve.on("__wf_destroy", e.destroy),
        e.ready && Ye(e.ready) && W_(e);
    }
    function W_(e) {
      if (nn) {
        e.ready();
        return;
      }
      Ge.contains(Dt, e.ready) || Dt.push(e.ready);
    }
    function Ps(e) {
      Ye(e.design) && Ve.off("__wf_design", e.design),
        Ye(e.preview) && Ve.off("__wf_preview", e.preview),
        Ye(e.destroy) && Ve.off("__wf_destroy", e.destroy),
        e.ready && Ye(e.ready) && j_(e);
    }
    function j_(e) {
      Dt = Ge.filter(Dt, function (t) {
        return t !== e.ready;
      });
    }
    ne.push = function (e) {
      if (nn) {
        Ye(e) && e();
        return;
      }
      Ci.push(e);
    };
    ne.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var rn = navigator.userAgent.toLowerCase(),
      qs = (ne.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      z_ = (ne.env.chrome =
        /chrome/.test(rn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(rn.match(/chrome\/(\d+)\./)[1], 10)),
      K_ = (ne.env.ios = /(ipod|iphone|ipad)/.test(rn));
    ne.env.safari = /safari/.test(rn) && !z_ && !K_;
    var xi;
    qs &&
      k_.on("touchstart mousedown", function (e) {
        xi = e.target;
      });
    ne.validClick = qs
      ? function (e) {
          return e === xi || dt.contains(e, xi);
        }
      : function () {
          return !0;
        };
    var Ms = "resize.webflow orientationchange.webflow load.webflow",
      Y_ = "scroll.webflow " + Ms;
    ne.resize = Ni(Ve, Ms);
    ne.scroll = Ni(Ve, Y_);
    ne.redraw = Ni();
    function Ni(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Ge.throttle(function (i) {
          Ge.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Ge.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Ge.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ne.location = function (e) {
      window.location = e;
    };
    ne.env() && (ne.location = function () {});
    ne.ready = function () {
      (nn = !0), Ri ? $_() : Ge.each(Dt, Rs), Ge.each(Ci, Rs), ne.resize.up();
    };
    function Rs(e) {
      Ye(e) && e();
    }
    function $_() {
      (Ri = !1), Ge.each(Ft, Ls);
    }
    var Ot;
    ne.load = function (e) {
      Ot.then(e);
    };
    function Fs() {
      Ot && (Ot.reject(), Ve.off("load", Ot.resolve)),
        (Ot = new dt.Deferred()),
        Ve.on("load", Ot.resolve);
    }
    ne.destroy = function (e) {
      (e = e || {}),
        (Ri = !0),
        Ve.triggerHandler("__wf_destroy"),
        e.domready != null && (nn = e.domready),
        Ge.each(Ft, Ps),
        ne.resize.off(),
        ne.scroll.off(),
        ne.redraw.off(),
        (Dt = []),
        (Ci = []),
        Ot.state() === "pending" && Fs();
    };
    dt(ne.ready);
    Fs();
    Ds.exports = window.Webflow = ne;
  });
  var Bs = c((x5, Vs) => {
    "use strict";
    var Gs = $e();
    Gs.define(
      "brand",
      (Vs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var E = n.attr("data-wf-status"),
            A = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(A) && a.hostname !== A && (E = !0),
            E &&
              !s &&
              ((f = f || g()),
              d(),
              setTimeout(d, 500),
              e(r).off(u, h).on(u, h));
        };
        function h() {
          var E =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", E ? "display: none !important;" : "");
        }
        function g() {
          var E = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            A = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            _ = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return E.append(A, _), E[0];
        }
        function d() {
          var E = i.children(o),
            A = E.length && E.get(0) === f,
            _ = Gs.env("editor");
          if (A) {
            _ && E.remove();
            return;
          }
          E.length && E.remove(), _ || i.append(f);
        }
        return t;
      })
    );
  });
  var Hs = c((C5, Us) => {
    "use strict";
    var Li = $e();
    Li.define(
      "edit",
      (Us.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Li.env("test") || Li.env("frame")) && !r.fixture && !Q_())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          f = r.load || d,
          h = !1;
        try {
          h =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        h
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(s, g).triggerHandler(s);
        function g() {
          u || (/\?edit/.test(a.hash) && f());
        }
        function d() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, g),
            S(function (x) {
              e.ajax({
                url: y("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: E(x),
              });
            });
        }
        function E(x) {
          return function (N) {
            if (!N) {
              console.error("Could not load editor data");
              return;
            }
            (N.thirdPartyCookiesSupported = x),
              A(O(N.scriptPath), function () {
                window.WebflowEditor(N);
              });
          };
        }
        function A(x, N) {
          e.ajax({ type: "GET", url: x, dataType: "script", cache: !0 }).then(
            N,
            _
          );
        }
        function _(x, N, C) {
          throw (console.error("Could not load editor script: " + N), C);
        }
        function O(x) {
          return x.indexOf("//") >= 0
            ? x
            : y("https://editor-api.webflow.com" + x);
        }
        function y(x) {
          return x.replace(/([^:])\/\//g, "$1/");
        }
        function S(x) {
          var N = window.document.createElement("iframe");
          (N.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (N.style.display = "none"),
            (N.sandbox = "allow-scripts allow-same-origin");
          var C = function (G) {
            G.data === "WF_third_party_cookies_unsupported"
              ? (b(N, C), x(!1))
              : G.data === "WF_third_party_cookies_supported" &&
                (b(N, C), x(!0));
          };
          (N.onerror = function () {
            b(N, C), x(!1);
          }),
            window.addEventListener("message", C, !1),
            window.document.body.appendChild(N);
        }
        function b(x, N) {
          window.removeEventListener("message", N, !1), x.remove();
        }
        return n;
      })
    );
    function Q_() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var ks = c((R5, Xs) => {
    "use strict";
    var Z_ = $e();
    Z_.define(
      "focus-visible",
      (Xs.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(b) {
            return !!(
              b &&
              b !== document &&
              b.nodeName !== "HTML" &&
              b.nodeName !== "BODY" &&
              "classList" in b &&
              "contains" in b.classList
            );
          }
          function u(b) {
            var x = b.type,
              N = b.tagName;
            return !!(
              (N === "INPUT" && a[x] && !b.readOnly) ||
              (N === "TEXTAREA" && !b.readOnly) ||
              b.isContentEditable
            );
          }
          function f(b) {
            b.getAttribute("data-wf-focus-visible") ||
              b.setAttribute("data-wf-focus-visible", "true");
          }
          function h(b) {
            b.getAttribute("data-wf-focus-visible") &&
              b.removeAttribute("data-wf-focus-visible");
          }
          function g(b) {
            b.metaKey ||
              b.altKey ||
              b.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function d() {
            n = !1;
          }
          function E(b) {
            s(b.target) && (n || u(b.target)) && f(b.target);
          }
          function A(b) {
            s(b.target) &&
              b.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              h(b.target));
          }
          function _() {
            document.visibilityState === "hidden" && (i && (n = !0), O());
          }
          function O() {
            document.addEventListener("mousemove", S),
              document.addEventListener("mousedown", S),
              document.addEventListener("mouseup", S),
              document.addEventListener("pointermove", S),
              document.addEventListener("pointerdown", S),
              document.addEventListener("pointerup", S),
              document.addEventListener("touchmove", S),
              document.addEventListener("touchstart", S),
              document.addEventListener("touchend", S);
          }
          function y() {
            document.removeEventListener("mousemove", S),
              document.removeEventListener("mousedown", S),
              document.removeEventListener("mouseup", S),
              document.removeEventListener("pointermove", S),
              document.removeEventListener("pointerdown", S),
              document.removeEventListener("pointerup", S),
              document.removeEventListener("touchmove", S),
              document.removeEventListener("touchstart", S),
              document.removeEventListener("touchend", S);
          }
          function S(b) {
            (b.target.nodeName && b.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), y());
          }
          document.addEventListener("keydown", g, !0),
            document.addEventListener("mousedown", d, !0),
            document.addEventListener("pointerdown", d, !0),
            document.addEventListener("touchstart", d, !0),
            document.addEventListener("visibilitychange", _, !0),
            O(),
            r.addEventListener("focus", E, !0),
            r.addEventListener("blur", A, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var zs = c((N5, js) => {
    "use strict";
    var Ws = $e();
    Ws.define(
      "focus",
      (js.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Ws.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var $s = c((L5, Ys) => {
    "use strict";
    var Pi = window.jQuery,
      Qe = {},
      on = [],
      Ks = ".w-ix",
      an = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Pi(t).triggerHandler(Qe.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Pi(t).triggerHandler(Qe.types.OUTRO));
        },
      };
    Qe.triggers = {};
    Qe.types = { INTRO: "w-ix-intro" + Ks, OUTRO: "w-ix-outro" + Ks };
    Qe.init = function () {
      for (var e = on.length, t = 0; t < e; t++) {
        var r = on[t];
        r[0](0, r[1]);
      }
      (on = []), Pi.extend(Qe.triggers, an);
    };
    Qe.async = function () {
      for (var e in an) {
        var t = an[e];
        an.hasOwnProperty(e) &&
          (Qe.triggers[e] = function (r, n) {
            on.push([t, n]);
          });
      }
    };
    Qe.async();
    Ys.exports = Qe;
  });
  var Mi = c((P5, Js) => {
    "use strict";
    var qi = $s();
    function Qs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var J_ = window.jQuery,
      sn = {},
      Zs = ".w-ix",
      eT = {
        reset: function (e, t) {
          qi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          qi.triggers.intro(e, t), Qs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          qi.triggers.outro(e, t), Qs(t, "COMPONENT_INACTIVE");
        },
      };
    sn.triggers = {};
    sn.types = { INTRO: "w-ix-intro" + Zs, OUTRO: "w-ix-outro" + Zs };
    J_.extend(sn.triggers, eT);
    Js.exports = sn;
  });
  var eu = c((q5, it) => {
    function Fi(e) {
      return (
        (it.exports = Fi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (it.exports.__esModule = !0),
        (it.exports.default = it.exports),
        Fi(e)
      );
    }
    (it.exports = Fi),
      (it.exports.__esModule = !0),
      (it.exports.default = it.exports);
  });
  var un = c((M5, Er) => {
    var tT = eu().default;
    function tu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (tu = function (i) {
        return i ? r : t;
      })(e);
    }
    function rT(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (tT(e) != "object" && typeof e != "function"))
        return { default: e };
      var r = tu(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Er.exports = rT),
      (Er.exports.__esModule = !0),
      (Er.exports.default = Er.exports);
  });
  var ru = c((F5, yr) => {
    function nT(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (yr.exports = nT),
      (yr.exports.__esModule = !0),
      (yr.exports.default = yr.exports);
  });
  var ce = c((D5, nu) => {
    var cn = function (e) {
      return e && e.Math == Math && e;
    };
    nu.exports =
      cn(typeof globalThis == "object" && globalThis) ||
      cn(typeof window == "object" && window) ||
      cn(typeof self == "object" && self) ||
      cn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Gt = c((G5, iu) => {
    iu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var At = c((V5, ou) => {
    var iT = Gt();
    ou.exports = !iT(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var ln = c((B5, au) => {
    var mr = Function.prototype.call;
    au.exports = mr.bind
      ? mr.bind(mr)
      : function () {
          return mr.apply(mr, arguments);
        };
  });
  var lu = c((cu) => {
    "use strict";
    var su = {}.propertyIsEnumerable,
      uu = Object.getOwnPropertyDescriptor,
      oT = uu && !su.call({ 1: 2 }, 1);
    cu.f = oT
      ? function (t) {
          var r = uu(this, t);
          return !!r && r.enumerable;
        }
      : su;
  });
  var Di = c((H5, fu) => {
    fu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Be = c((X5, pu) => {
    var du = Function.prototype,
      Gi = du.bind,
      Vi = du.call,
      aT = Gi && Gi.bind(Vi);
    pu.exports = Gi
      ? function (e) {
          return e && aT(Vi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Vi.apply(e, arguments);
            }
          );
        };
  });
  var vu = c((k5, hu) => {
    var gu = Be(),
      sT = gu({}.toString),
      uT = gu("".slice);
    hu.exports = function (e) {
      return uT(sT(e), 8, -1);
    };
  });
  var yu = c((W5, Eu) => {
    var cT = ce(),
      lT = Be(),
      fT = Gt(),
      dT = vu(),
      Bi = cT.Object,
      pT = lT("".split);
    Eu.exports = fT(function () {
      return !Bi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return dT(e) == "String" ? pT(e, "") : Bi(e);
        }
      : Bi;
  });
  var Ui = c((j5, mu) => {
    var gT = ce(),
      hT = gT.TypeError;
    mu.exports = function (e) {
      if (e == null) throw hT("Can't call method on " + e);
      return e;
    };
  });
  var _r = c((z5, _u) => {
    var vT = yu(),
      ET = Ui();
    _u.exports = function (e) {
      return vT(ET(e));
    };
  });
  var Ze = c((K5, Tu) => {
    Tu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Vt = c((Y5, bu) => {
    var yT = Ze();
    bu.exports = function (e) {
      return typeof e == "object" ? e !== null : yT(e);
    };
  });
  var Tr = c(($5, Iu) => {
    var Hi = ce(),
      mT = Ze(),
      _T = function (e) {
        return mT(e) ? e : void 0;
      };
    Iu.exports = function (e, t) {
      return arguments.length < 2 ? _T(Hi[e]) : Hi[e] && Hi[e][t];
    };
  });
  var Au = c((Q5, Ou) => {
    var TT = Be();
    Ou.exports = TT({}.isPrototypeOf);
  });
  var wu = c((Z5, Su) => {
    var bT = Tr();
    Su.exports = bT("navigator", "userAgent") || "";
  });
  var qu = c((J5, Pu) => {
    var Lu = ce(),
      Xi = wu(),
      xu = Lu.process,
      Cu = Lu.Deno,
      Ru = (xu && xu.versions) || (Cu && Cu.version),
      Nu = Ru && Ru.v8,
      Ue,
      fn;
    Nu &&
      ((Ue = Nu.split(".")),
      (fn = Ue[0] > 0 && Ue[0] < 4 ? 1 : +(Ue[0] + Ue[1])));
    !fn &&
      Xi &&
      ((Ue = Xi.match(/Edge\/(\d+)/)),
      (!Ue || Ue[1] >= 74) &&
        ((Ue = Xi.match(/Chrome\/(\d+)/)), Ue && (fn = +Ue[1])));
    Pu.exports = fn;
  });
  var ki = c((eU, Fu) => {
    var Mu = qu(),
      IT = Gt();
    Fu.exports =
      !!Object.getOwnPropertySymbols &&
      !IT(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Mu && Mu < 41)
        );
      });
  });
  var Wi = c((tU, Du) => {
    var OT = ki();
    Du.exports = OT && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var ji = c((rU, Gu) => {
    var AT = ce(),
      ST = Tr(),
      wT = Ze(),
      xT = Au(),
      CT = Wi(),
      RT = AT.Object;
    Gu.exports = CT
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = ST("Symbol");
          return wT(t) && xT(t.prototype, RT(e));
        };
  });
  var Bu = c((nU, Vu) => {
    var NT = ce(),
      LT = NT.String;
    Vu.exports = function (e) {
      try {
        return LT(e);
      } catch {
        return "Object";
      }
    };
  });
  var Hu = c((iU, Uu) => {
    var PT = ce(),
      qT = Ze(),
      MT = Bu(),
      FT = PT.TypeError;
    Uu.exports = function (e) {
      if (qT(e)) return e;
      throw FT(MT(e) + " is not a function");
    };
  });
  var ku = c((oU, Xu) => {
    var DT = Hu();
    Xu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : DT(r);
    };
  });
  var ju = c((aU, Wu) => {
    var GT = ce(),
      zi = ln(),
      Ki = Ze(),
      Yi = Vt(),
      VT = GT.TypeError;
    Wu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && Ki((r = e.toString)) && !Yi((n = zi(r, e)))) ||
        (Ki((r = e.valueOf)) && !Yi((n = zi(r, e)))) ||
        (t !== "string" && Ki((r = e.toString)) && !Yi((n = zi(r, e))))
      )
        return n;
      throw VT("Can't convert object to primitive value");
    };
  });
  var Ku = c((sU, zu) => {
    zu.exports = !1;
  });
  var dn = c((uU, $u) => {
    var Yu = ce(),
      BT = Object.defineProperty;
    $u.exports = function (e, t) {
      try {
        BT(Yu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Yu[e] = t;
      }
      return t;
    };
  });
  var pn = c((cU, Zu) => {
    var UT = ce(),
      HT = dn(),
      Qu = "__core-js_shared__",
      XT = UT[Qu] || HT(Qu, {});
    Zu.exports = XT;
  });
  var $i = c((lU, ec) => {
    var kT = Ku(),
      Ju = pn();
    (ec.exports = function (e, t) {
      return Ju[e] || (Ju[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: kT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var rc = c((fU, tc) => {
    var WT = ce(),
      jT = Ui(),
      zT = WT.Object;
    tc.exports = function (e) {
      return zT(jT(e));
    };
  });
  var pt = c((dU, nc) => {
    var KT = Be(),
      YT = rc(),
      $T = KT({}.hasOwnProperty);
    nc.exports =
      Object.hasOwn ||
      function (t, r) {
        return $T(YT(t), r);
      };
  });
  var Qi = c((pU, ic) => {
    var QT = Be(),
      ZT = 0,
      JT = Math.random(),
      eb = QT((1).toString);
    ic.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + eb(++ZT + JT, 36);
    };
  });
  var Zi = c((gU, cc) => {
    var tb = ce(),
      rb = $i(),
      oc = pt(),
      nb = Qi(),
      ac = ki(),
      uc = Wi(),
      Bt = rb("wks"),
      St = tb.Symbol,
      sc = St && St.for,
      ib = uc ? St : (St && St.withoutSetter) || nb;
    cc.exports = function (e) {
      if (!oc(Bt, e) || !(ac || typeof Bt[e] == "string")) {
        var t = "Symbol." + e;
        ac && oc(St, e)
          ? (Bt[e] = St[e])
          : uc && sc
          ? (Bt[e] = sc(t))
          : (Bt[e] = ib(t));
      }
      return Bt[e];
    };
  });
  var pc = c((hU, dc) => {
    var ob = ce(),
      ab = ln(),
      lc = Vt(),
      fc = ji(),
      sb = ku(),
      ub = ju(),
      cb = Zi(),
      lb = ob.TypeError,
      fb = cb("toPrimitive");
    dc.exports = function (e, t) {
      if (!lc(e) || fc(e)) return e;
      var r = sb(e, fb),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = ab(r, e, t)), !lc(n) || fc(n))
        )
          return n;
        throw lb("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), ub(e, t);
    };
  });
  var Ji = c((vU, gc) => {
    var db = pc(),
      pb = ji();
    gc.exports = function (e) {
      var t = db(e, "string");
      return pb(t) ? t : t + "";
    };
  });
  var to = c((EU, vc) => {
    var gb = ce(),
      hc = Vt(),
      eo = gb.document,
      hb = hc(eo) && hc(eo.createElement);
    vc.exports = function (e) {
      return hb ? eo.createElement(e) : {};
    };
  });
  var ro = c((yU, Ec) => {
    var vb = At(),
      Eb = Gt(),
      yb = to();
    Ec.exports =
      !vb &&
      !Eb(function () {
        return (
          Object.defineProperty(yb("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var no = c((mc) => {
    var mb = At(),
      _b = ln(),
      Tb = lu(),
      bb = Di(),
      Ib = _r(),
      Ob = Ji(),
      Ab = pt(),
      Sb = ro(),
      yc = Object.getOwnPropertyDescriptor;
    mc.f = mb
      ? yc
      : function (t, r) {
          if (((t = Ib(t)), (r = Ob(r)), Sb))
            try {
              return yc(t, r);
            } catch {}
          if (Ab(t, r)) return bb(!_b(Tb.f, t, r), t[r]);
        };
  });
  var br = c((_U, Tc) => {
    var _c = ce(),
      wb = Vt(),
      xb = _c.String,
      Cb = _c.TypeError;
    Tc.exports = function (e) {
      if (wb(e)) return e;
      throw Cb(xb(e) + " is not an object");
    };
  });
  var Ir = c((Oc) => {
    var Rb = ce(),
      Nb = At(),
      Lb = ro(),
      bc = br(),
      Pb = Ji(),
      qb = Rb.TypeError,
      Ic = Object.defineProperty;
    Oc.f = Nb
      ? Ic
      : function (t, r, n) {
          if ((bc(t), (r = Pb(r)), bc(n), Lb))
            try {
              return Ic(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw qb("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var gn = c((bU, Ac) => {
    var Mb = At(),
      Fb = Ir(),
      Db = Di();
    Ac.exports = Mb
      ? function (e, t, r) {
          return Fb.f(e, t, Db(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var oo = c((IU, Sc) => {
    var Gb = Be(),
      Vb = Ze(),
      io = pn(),
      Bb = Gb(Function.toString);
    Vb(io.inspectSource) ||
      (io.inspectSource = function (e) {
        return Bb(e);
      });
    Sc.exports = io.inspectSource;
  });
  var Cc = c((OU, xc) => {
    var Ub = ce(),
      Hb = Ze(),
      Xb = oo(),
      wc = Ub.WeakMap;
    xc.exports = Hb(wc) && /native code/.test(Xb(wc));
  });
  var ao = c((AU, Nc) => {
    var kb = $i(),
      Wb = Qi(),
      Rc = kb("keys");
    Nc.exports = function (e) {
      return Rc[e] || (Rc[e] = Wb(e));
    };
  });
  var hn = c((SU, Lc) => {
    Lc.exports = {};
  });
  var Gc = c((wU, Dc) => {
    var jb = Cc(),
      Fc = ce(),
      so = Be(),
      zb = Vt(),
      Kb = gn(),
      uo = pt(),
      co = pn(),
      Yb = ao(),
      $b = hn(),
      Pc = "Object already initialized",
      fo = Fc.TypeError,
      Qb = Fc.WeakMap,
      vn,
      Or,
      En,
      Zb = function (e) {
        return En(e) ? Or(e) : vn(e, {});
      },
      Jb = function (e) {
        return function (t) {
          var r;
          if (!zb(t) || (r = Or(t)).type !== e)
            throw fo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    jb || co.state
      ? ((gt = co.state || (co.state = new Qb())),
        (qc = so(gt.get)),
        (lo = so(gt.has)),
        (Mc = so(gt.set)),
        (vn = function (e, t) {
          if (lo(gt, e)) throw new fo(Pc);
          return (t.facade = e), Mc(gt, e, t), t;
        }),
        (Or = function (e) {
          return qc(gt, e) || {};
        }),
        (En = function (e) {
          return lo(gt, e);
        }))
      : ((wt = Yb("state")),
        ($b[wt] = !0),
        (vn = function (e, t) {
          if (uo(e, wt)) throw new fo(Pc);
          return (t.facade = e), Kb(e, wt, t), t;
        }),
        (Or = function (e) {
          return uo(e, wt) ? e[wt] : {};
        }),
        (En = function (e) {
          return uo(e, wt);
        }));
    var gt, qc, lo, Mc, wt;
    Dc.exports = { set: vn, get: Or, has: En, enforce: Zb, getterFor: Jb };
  });
  var Uc = c((xU, Bc) => {
    var po = At(),
      eI = pt(),
      Vc = Function.prototype,
      tI = po && Object.getOwnPropertyDescriptor,
      go = eI(Vc, "name"),
      rI = go && function () {}.name === "something",
      nI = go && (!po || (po && tI(Vc, "name").configurable));
    Bc.exports = { EXISTS: go, PROPER: rI, CONFIGURABLE: nI };
  });
  var jc = c((CU, Wc) => {
    var iI = ce(),
      Hc = Ze(),
      oI = pt(),
      Xc = gn(),
      aI = dn(),
      sI = oo(),
      kc = Gc(),
      uI = Uc().CONFIGURABLE,
      cI = kc.get,
      lI = kc.enforce,
      fI = String(String).split("String");
    (Wc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (Hc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!oI(r, "name") || (uI && r.name !== s)) && Xc(r, "name", s),
          (u = lI(r)),
          u.source || (u.source = fI.join(typeof s == "string" ? s : ""))),
        e === iI)
      ) {
        o ? (e[t] = r) : aI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Xc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Hc(this) && cI(this).source) || sI(this);
    });
  });
  var ho = c((RU, zc) => {
    var dI = Math.ceil,
      pI = Math.floor;
    zc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? pI : dI)(t);
    };
  });
  var Yc = c((NU, Kc) => {
    var gI = ho(),
      hI = Math.max,
      vI = Math.min;
    Kc.exports = function (e, t) {
      var r = gI(e);
      return r < 0 ? hI(r + t, 0) : vI(r, t);
    };
  });
  var Qc = c((LU, $c) => {
    var EI = ho(),
      yI = Math.min;
    $c.exports = function (e) {
      return e > 0 ? yI(EI(e), 9007199254740991) : 0;
    };
  });
  var Jc = c((PU, Zc) => {
    var mI = Qc();
    Zc.exports = function (e) {
      return mI(e.length);
    };
  });
  var vo = c((qU, tl) => {
    var _I = _r(),
      TI = Yc(),
      bI = Jc(),
      el = function (e) {
        return function (t, r, n) {
          var i = _I(t),
            o = bI(i),
            a = TI(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    tl.exports = { includes: el(!0), indexOf: el(!1) };
  });
  var yo = c((MU, nl) => {
    var II = Be(),
      Eo = pt(),
      OI = _r(),
      AI = vo().indexOf,
      SI = hn(),
      rl = II([].push);
    nl.exports = function (e, t) {
      var r = OI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !Eo(SI, o) && Eo(r, o) && rl(i, o);
      for (; t.length > n; ) Eo(r, (o = t[n++])) && (~AI(i, o) || rl(i, o));
      return i;
    };
  });
  var yn = c((FU, il) => {
    il.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var al = c((ol) => {
    var wI = yo(),
      xI = yn(),
      CI = xI.concat("length", "prototype");
    ol.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return wI(t, CI);
      };
  });
  var ul = c((sl) => {
    sl.f = Object.getOwnPropertySymbols;
  });
  var ll = c((VU, cl) => {
    var RI = Tr(),
      NI = Be(),
      LI = al(),
      PI = ul(),
      qI = br(),
      MI = NI([].concat);
    cl.exports =
      RI("Reflect", "ownKeys") ||
      function (t) {
        var r = LI.f(qI(t)),
          n = PI.f;
        return n ? MI(r, n(t)) : r;
      };
  });
  var dl = c((BU, fl) => {
    var FI = pt(),
      DI = ll(),
      GI = no(),
      VI = Ir();
    fl.exports = function (e, t) {
      for (var r = DI(t), n = VI.f, i = GI.f, o = 0; o < r.length; o++) {
        var a = r[o];
        FI(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var gl = c((UU, pl) => {
    var BI = Gt(),
      UI = Ze(),
      HI = /#|\.prototype\./,
      Ar = function (e, t) {
        var r = kI[XI(e)];
        return r == jI ? !0 : r == WI ? !1 : UI(t) ? BI(t) : !!t;
      },
      XI = (Ar.normalize = function (e) {
        return String(e).replace(HI, ".").toLowerCase();
      }),
      kI = (Ar.data = {}),
      WI = (Ar.NATIVE = "N"),
      jI = (Ar.POLYFILL = "P");
    pl.exports = Ar;
  });
  var vl = c((HU, hl) => {
    var mo = ce(),
      zI = no().f,
      KI = gn(),
      YI = jc(),
      $I = dn(),
      QI = dl(),
      ZI = gl();
    hl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        f,
        h;
      if (
        (n
          ? (a = mo)
          : i
          ? (a = mo[r] || $I(r, {}))
          : (a = (mo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((h = zI(a, s)), (u = h && h.value)) : (u = a[s]),
            (o = ZI(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof f == typeof u) continue;
            QI(f, u);
          }
          (e.sham || (u && u.sham)) && KI(f, "sham", !0), YI(a, s, f, e);
        }
    };
  });
  var yl = c((XU, El) => {
    var JI = yo(),
      e0 = yn();
    El.exports =
      Object.keys ||
      function (t) {
        return JI(t, e0);
      };
  });
  var _l = c((kU, ml) => {
    var t0 = At(),
      r0 = Ir(),
      n0 = br(),
      i0 = _r(),
      o0 = yl();
    ml.exports = t0
      ? Object.defineProperties
      : function (t, r) {
          n0(t);
          for (var n = i0(r), i = o0(r), o = i.length, a = 0, s; o > a; )
            r0.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var bl = c((WU, Tl) => {
    var a0 = Tr();
    Tl.exports = a0("document", "documentElement");
  });
  var Rl = c((jU, Cl) => {
    var s0 = br(),
      u0 = _l(),
      Il = yn(),
      c0 = hn(),
      l0 = bl(),
      f0 = to(),
      d0 = ao(),
      Ol = ">",
      Al = "<",
      To = "prototype",
      bo = "script",
      wl = d0("IE_PROTO"),
      _o = function () {},
      xl = function (e) {
        return Al + bo + Ol + e + Al + "/" + bo + Ol;
      },
      Sl = function (e) {
        e.write(xl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      p0 = function () {
        var e = f0("iframe"),
          t = "java" + bo + ":",
          r;
        return (
          (e.style.display = "none"),
          l0.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(xl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      mn,
      _n = function () {
        try {
          mn = new ActiveXObject("htmlfile");
        } catch {}
        _n =
          typeof document < "u"
            ? document.domain && mn
              ? Sl(mn)
              : p0()
            : Sl(mn);
        for (var e = Il.length; e--; ) delete _n[To][Il[e]];
        return _n();
      };
    c0[wl] = !0;
    Cl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((_o[To] = s0(t)), (n = new _o()), (_o[To] = null), (n[wl] = t))
            : (n = _n()),
          r === void 0 ? n : u0(n, r)
        );
      };
  });
  var Ll = c((zU, Nl) => {
    var g0 = Zi(),
      h0 = Rl(),
      v0 = Ir(),
      Io = g0("unscopables"),
      Oo = Array.prototype;
    Oo[Io] == null && v0.f(Oo, Io, { configurable: !0, value: h0(null) });
    Nl.exports = function (e) {
      Oo[Io][e] = !0;
    };
  });
  var Pl = c(() => {
    "use strict";
    var E0 = vl(),
      y0 = vo().includes,
      m0 = Ll();
    E0(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return y0(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    m0("includes");
  });
  var Ml = c(($U, ql) => {
    var _0 = ce(),
      T0 = Be();
    ql.exports = function (e, t) {
      return T0(_0[e].prototype[t]);
    };
  });
  var Dl = c((QU, Fl) => {
    Pl();
    var b0 = Ml();
    Fl.exports = b0("Array", "includes");
  });
  var Vl = c((ZU, Gl) => {
    var I0 = Dl();
    Gl.exports = I0;
  });
  var Ul = c((JU, Bl) => {
    var O0 = Vl();
    Bl.exports = O0;
  });
  var Ao = c((eH, Hl) => {
    var A0 =
      typeof global == "object" && global && global.Object === Object && global;
    Hl.exports = A0;
  });
  var He = c((tH, Xl) => {
    var S0 = Ao(),
      w0 = typeof self == "object" && self && self.Object === Object && self,
      x0 = S0 || w0 || Function("return this")();
    Xl.exports = x0;
  });
  var Ut = c((rH, kl) => {
    var C0 = He(),
      R0 = C0.Symbol;
    kl.exports = R0;
  });
  var Kl = c((nH, zl) => {
    var Wl = Ut(),
      jl = Object.prototype,
      N0 = jl.hasOwnProperty,
      L0 = jl.toString,
      Sr = Wl ? Wl.toStringTag : void 0;
    function P0(e) {
      var t = N0.call(e, Sr),
        r = e[Sr];
      try {
        e[Sr] = void 0;
        var n = !0;
      } catch {}
      var i = L0.call(e);
      return n && (t ? (e[Sr] = r) : delete e[Sr]), i;
    }
    zl.exports = P0;
  });
  var $l = c((iH, Yl) => {
    var q0 = Object.prototype,
      M0 = q0.toString;
    function F0(e) {
      return M0.call(e);
    }
    Yl.exports = F0;
  });
  var ht = c((oH, Jl) => {
    var Ql = Ut(),
      D0 = Kl(),
      G0 = $l(),
      V0 = "[object Null]",
      B0 = "[object Undefined]",
      Zl = Ql ? Ql.toStringTag : void 0;
    function U0(e) {
      return e == null
        ? e === void 0
          ? B0
          : V0
        : Zl && Zl in Object(e)
        ? D0(e)
        : G0(e);
    }
    Jl.exports = U0;
  });
  var So = c((aH, ef) => {
    function H0(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    ef.exports = H0;
  });
  var wo = c((sH, tf) => {
    var X0 = So(),
      k0 = X0(Object.getPrototypeOf, Object);
    tf.exports = k0;
  });
  var ot = c((uH, rf) => {
    function W0(e) {
      return e != null && typeof e == "object";
    }
    rf.exports = W0;
  });
  var xo = c((cH, of) => {
    var j0 = ht(),
      z0 = wo(),
      K0 = ot(),
      Y0 = "[object Object]",
      $0 = Function.prototype,
      Q0 = Object.prototype,
      nf = $0.toString,
      Z0 = Q0.hasOwnProperty,
      J0 = nf.call(Object);
    function eO(e) {
      if (!K0(e) || j0(e) != Y0) return !1;
      var t = z0(e);
      if (t === null) return !0;
      var r = Z0.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && nf.call(r) == J0;
    }
    of.exports = eO;
  });
  var af = c((Co) => {
    "use strict";
    Object.defineProperty(Co, "__esModule", { value: !0 });
    Co.default = tO;
    function tO(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var sf = c((No, Ro) => {
    "use strict";
    Object.defineProperty(No, "__esModule", { value: !0 });
    var rO = af(),
      nO = iO(rO);
    function iO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Ht;
    typeof self < "u"
      ? (Ht = self)
      : typeof window < "u"
      ? (Ht = window)
      : typeof global < "u"
      ? (Ht = global)
      : typeof Ro < "u"
      ? (Ht = Ro)
      : (Ht = Function("return this")());
    var oO = (0, nO.default)(Ht);
    No.default = oO;
  });
  var Lo = c((wr) => {
    "use strict";
    wr.__esModule = !0;
    wr.ActionTypes = void 0;
    wr.default = ff;
    var aO = xo(),
      sO = lf(aO),
      uO = sf(),
      uf = lf(uO);
    function lf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var cf = (wr.ActionTypes = { INIT: "@@redux/INIT" });
    function ff(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(ff)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function h() {
        return o;
      }
      function g(_) {
        if (typeof _ != "function")
          throw new Error("Expected listener to be a function.");
        var O = !0;
        return (
          f(),
          s.push(_),
          function () {
            if (O) {
              (O = !1), f();
              var S = s.indexOf(_);
              s.splice(S, 1);
            }
          }
        );
      }
      function d(_) {
        if (!(0, sO.default)(_))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof _.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, _));
        } finally {
          u = !1;
        }
        for (var O = (a = s), y = 0; y < O.length; y++) O[y]();
        return _;
      }
      function E(_) {
        if (typeof _ != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = _), d({ type: cf.INIT });
      }
      function A() {
        var _,
          O = g;
        return (
          (_ = {
            subscribe: function (S) {
              if (typeof S != "object")
                throw new TypeError("Expected the observer to be an object.");
              function b() {
                S.next && S.next(h());
              }
              b();
              var x = O(b);
              return { unsubscribe: x };
            },
          }),
          (_[uf.default] = function () {
            return this;
          }),
          _
        );
      }
      return (
        d({ type: cf.INIT }),
        (n = { dispatch: d, subscribe: g, getState: h, replaceReducer: E }),
        (n[uf.default] = A),
        n
      );
    }
  });
  var qo = c((Po) => {
    "use strict";
    Po.__esModule = !0;
    Po.default = cO;
    function cO(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var gf = c((Mo) => {
    "use strict";
    Mo.__esModule = !0;
    Mo.default = gO;
    var df = Lo(),
      lO = xo(),
      pH = pf(lO),
      fO = qo(),
      gH = pf(fO);
    function pf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function dO(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function pO(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: df.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                df.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function gO(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        pO(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          h = arguments[1];
        if (s) throw s;
        if (!1) var g;
        for (var d = !1, E = {}, A = 0; A < o.length; A++) {
          var _ = o[A],
            O = r[_],
            y = f[_],
            S = O(y, h);
          if (typeof S > "u") {
            var b = dO(_, h);
            throw new Error(b);
          }
          (E[_] = S), (d = d || S !== y);
        }
        return d ? E : f;
      };
    }
  });
  var vf = c((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    Fo.default = hO;
    function hf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function hO(e, t) {
      if (typeof e == "function") return hf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = hf(a, t));
      }
      return n;
    }
  });
  var Go = c((Do) => {
    "use strict";
    Do.__esModule = !0;
    Do.default = vO;
    function vO() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var Ef = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    var EO =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Vo.default = TO;
    var yO = Go(),
      mO = _O(yO);
    function _O(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function TO() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            f = [],
            h = {
              getState: s.getState,
              dispatch: function (d) {
                return u(d);
              },
            };
          return (
            (f = t.map(function (g) {
              return g(h);
            })),
            (u = mO.default.apply(void 0, f)(s.dispatch)),
            EO({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Bo = c((Me) => {
    "use strict";
    Me.__esModule = !0;
    Me.compose =
      Me.applyMiddleware =
      Me.bindActionCreators =
      Me.combineReducers =
      Me.createStore =
        void 0;
    var bO = Lo(),
      IO = Xt(bO),
      OO = gf(),
      AO = Xt(OO),
      SO = vf(),
      wO = Xt(SO),
      xO = Ef(),
      CO = Xt(xO),
      RO = Go(),
      NO = Xt(RO),
      LO = qo(),
      mH = Xt(LO);
    function Xt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Me.createStore = IO.default;
    Me.combineReducers = AO.default;
    Me.bindActionCreators = wO.default;
    Me.applyMiddleware = CO.default;
    Me.compose = NO.default;
  });
  var Xe,
    Uo,
    Je,
    PO,
    qO,
    Tn,
    MO,
    Ho = se(() => {
      "use strict";
      (Xe = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Uo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (Je = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (PO = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (qO = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Tn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (MO = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ne,
    FO,
    bn = se(() => {
      "use strict";
      (Ne = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (FO = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var DO,
    yf = se(() => {
      "use strict";
      DO = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var GO,
    VO,
    BO,
    UO,
    HO,
    XO,
    kO,
    Xo,
    mf = se(() => {
      "use strict";
      bn();
      ({
        TRANSFORM_MOVE: GO,
        TRANSFORM_SCALE: VO,
        TRANSFORM_ROTATE: BO,
        TRANSFORM_SKEW: UO,
        STYLE_SIZE: HO,
        STYLE_FILTER: XO,
        STYLE_FONT_VARIATION: kO,
      } = Ne),
        (Xo = {
          [GO]: !0,
          [VO]: !0,
          [BO]: !0,
          [UO]: !0,
          [HO]: !0,
          [XO]: !0,
          [kO]: !0,
        });
    });
  var ge = {};
  Re(ge, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => sA,
    IX2_ANIMATION_FRAME_CHANGED: () => tA,
    IX2_CLEAR_REQUESTED: () => ZO,
    IX2_ELEMENT_STATE_CHANGED: () => aA,
    IX2_EVENT_LISTENER_ADDED: () => JO,
    IX2_EVENT_STATE_CHANGED: () => eA,
    IX2_INSTANCE_ADDED: () => nA,
    IX2_INSTANCE_REMOVED: () => oA,
    IX2_INSTANCE_STARTED: () => iA,
    IX2_MEDIA_QUERIES_DEFINED: () => cA,
    IX2_PARAMETER_CHANGED: () => rA,
    IX2_PLAYBACK_REQUESTED: () => $O,
    IX2_PREVIEW_REQUESTED: () => YO,
    IX2_RAW_DATA_IMPORTED: () => WO,
    IX2_SESSION_INITIALIZED: () => jO,
    IX2_SESSION_STARTED: () => zO,
    IX2_SESSION_STOPPED: () => KO,
    IX2_STOP_REQUESTED: () => QO,
    IX2_TEST_FRAME_RENDERED: () => lA,
    IX2_VIEWPORT_WIDTH_CHANGED: () => uA,
  });
  var WO,
    jO,
    zO,
    KO,
    YO,
    $O,
    QO,
    ZO,
    JO,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    _f = se(() => {
      "use strict";
      (WO = "IX2_RAW_DATA_IMPORTED"),
        (jO = "IX2_SESSION_INITIALIZED"),
        (zO = "IX2_SESSION_STARTED"),
        (KO = "IX2_SESSION_STOPPED"),
        (YO = "IX2_PREVIEW_REQUESTED"),
        ($O = "IX2_PLAYBACK_REQUESTED"),
        (QO = "IX2_STOP_REQUESTED"),
        (ZO = "IX2_CLEAR_REQUESTED"),
        (JO = "IX2_EVENT_LISTENER_ADDED"),
        (eA = "IX2_EVENT_STATE_CHANGED"),
        (tA = "IX2_ANIMATION_FRAME_CHANGED"),
        (rA = "IX2_PARAMETER_CHANGED"),
        (nA = "IX2_INSTANCE_ADDED"),
        (iA = "IX2_INSTANCE_STARTED"),
        (oA = "IX2_INSTANCE_REMOVED"),
        (aA = "IX2_ELEMENT_STATE_CHANGED"),
        (sA = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (uA = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (cA = "IX2_MEDIA_QUERIES_DEFINED"),
        (lA = "IX2_TEST_FRAME_RENDERED");
    });
  var Ie = {};
  Re(Ie, {
    ABSTRACT_NODE: () => uS,
    AUTO: () => QA,
    BACKGROUND: () => WA,
    BACKGROUND_COLOR: () => kA,
    BAR_DELIMITER: () => eS,
    BORDER_COLOR: () => jA,
    BOUNDARY_SELECTOR: () => hA,
    CHILDREN: () => tS,
    COLON_DELIMITER: () => JA,
    COLOR: () => zA,
    COMMA_DELIMITER: () => ZA,
    CONFIG_UNIT: () => IA,
    CONFIG_VALUE: () => mA,
    CONFIG_X_UNIT: () => _A,
    CONFIG_X_VALUE: () => vA,
    CONFIG_Y_UNIT: () => TA,
    CONFIG_Y_VALUE: () => EA,
    CONFIG_Z_UNIT: () => bA,
    CONFIG_Z_VALUE: () => yA,
    DISPLAY: () => KA,
    FILTER: () => BA,
    FLEX: () => YA,
    FONT_VARIATION_SETTINGS: () => UA,
    HEIGHT: () => XA,
    HTML_ELEMENT: () => aS,
    IMMEDIATE_CHILDREN: () => rS,
    IX2_ID_DELIMITER: () => fA,
    OPACITY: () => VA,
    PARENT: () => iS,
    PLAIN_OBJECT: () => sS,
    PRESERVE_3D: () => oS,
    RENDER_GENERAL: () => lS,
    RENDER_PLUGIN: () => dS,
    RENDER_STYLE: () => fS,
    RENDER_TRANSFORM: () => cS,
    ROTATE_X: () => PA,
    ROTATE_Y: () => qA,
    ROTATE_Z: () => MA,
    SCALE_3D: () => LA,
    SCALE_X: () => CA,
    SCALE_Y: () => RA,
    SCALE_Z: () => NA,
    SIBLINGS: () => nS,
    SKEW: () => FA,
    SKEW_X: () => DA,
    SKEW_Y: () => GA,
    TRANSFORM: () => OA,
    TRANSLATE_3D: () => xA,
    TRANSLATE_X: () => AA,
    TRANSLATE_Y: () => SA,
    TRANSLATE_Z: () => wA,
    WF_PAGE: () => dA,
    WIDTH: () => HA,
    WILL_CHANGE: () => $A,
    W_MOD_IX: () => gA,
    W_MOD_JS: () => pA,
  });
  var fA,
    dA,
    pA,
    gA,
    hA,
    vA,
    EA,
    yA,
    mA,
    _A,
    TA,
    bA,
    IA,
    OA,
    AA,
    SA,
    wA,
    xA,
    CA,
    RA,
    NA,
    LA,
    PA,
    qA,
    MA,
    FA,
    DA,
    GA,
    VA,
    BA,
    UA,
    HA,
    XA,
    kA,
    WA,
    jA,
    zA,
    KA,
    YA,
    $A,
    QA,
    ZA,
    JA,
    eS,
    tS,
    rS,
    nS,
    iS,
    oS,
    aS,
    sS,
    uS,
    cS,
    lS,
    fS,
    dS,
    Tf = se(() => {
      "use strict";
      (fA = "|"),
        (dA = "data-wf-page"),
        (pA = "w-mod-js"),
        (gA = "w-mod-ix"),
        (hA = ".w-dyn-item"),
        (vA = "xValue"),
        (EA = "yValue"),
        (yA = "zValue"),
        (mA = "value"),
        (_A = "xUnit"),
        (TA = "yUnit"),
        (bA = "zUnit"),
        (IA = "unit"),
        (OA = "transform"),
        (AA = "translateX"),
        (SA = "translateY"),
        (wA = "translateZ"),
        (xA = "translate3d"),
        (CA = "scaleX"),
        (RA = "scaleY"),
        (NA = "scaleZ"),
        (LA = "scale3d"),
        (PA = "rotateX"),
        (qA = "rotateY"),
        (MA = "rotateZ"),
        (FA = "skew"),
        (DA = "skewX"),
        (GA = "skewY"),
        (VA = "opacity"),
        (BA = "filter"),
        (UA = "font-variation-settings"),
        (HA = "width"),
        (XA = "height"),
        (kA = "backgroundColor"),
        (WA = "background"),
        (jA = "borderColor"),
        (zA = "color"),
        (KA = "display"),
        (YA = "flex"),
        ($A = "willChange"),
        (QA = "AUTO"),
        (ZA = ","),
        (JA = ":"),
        (eS = "|"),
        (tS = "CHILDREN"),
        (rS = "IMMEDIATE_CHILDREN"),
        (nS = "SIBLINGS"),
        (iS = "PARENT"),
        (oS = "preserve-3d"),
        (aS = "HTML_ELEMENT"),
        (sS = "PLAIN_OBJECT"),
        (uS = "ABSTRACT_NODE"),
        (cS = "RENDER_TRANSFORM"),
        (lS = "RENDER_GENERAL"),
        (fS = "RENDER_STYLE"),
        (dS = "RENDER_PLUGIN");
    });
  var bf = {};
  Re(bf, {
    ActionAppliesTo: () => FO,
    ActionTypeConsts: () => Ne,
    EventAppliesTo: () => Uo,
    EventBasedOn: () => Je,
    EventContinuousMouseAxes: () => PO,
    EventLimitAffectedElements: () => qO,
    EventTypeConsts: () => Xe,
    IX2EngineActionTypes: () => ge,
    IX2EngineConstants: () => Ie,
    InteractionTypeConsts: () => DO,
    QuickEffectDirectionConsts: () => MO,
    QuickEffectIds: () => Tn,
    ReducedMotionTypes: () => Xo,
  });
  var Le = se(() => {
    "use strict";
    Ho();
    bn();
    yf();
    mf();
    _f();
    Tf();
    bn();
    Ho();
  });
  var pS,
    If,
    Of = se(() => {
      "use strict";
      Le();
      ({ IX2_RAW_DATA_IMPORTED: pS } = ge),
        (If = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case pS:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var kt = c((fe) => {
    "use strict";
    Object.defineProperty(fe, "__esModule", { value: !0 });
    var gS =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    fe.clone = On;
    fe.addLast = wf;
    fe.addFirst = xf;
    fe.removeLast = Cf;
    fe.removeFirst = Rf;
    fe.insert = Nf;
    fe.removeAt = Lf;
    fe.replaceAt = Pf;
    fe.getIn = An;
    fe.set = Sn;
    fe.setIn = wn;
    fe.update = Mf;
    fe.updateIn = Ff;
    fe.merge = Df;
    fe.mergeDeep = Gf;
    fe.mergeIn = Vf;
    fe.omit = Bf;
    fe.addDefaults = Uf;
    var Af = "INVALID_ARGS";
    function Sf(e) {
      throw new Error(e);
    }
    function ko(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var hS = {}.hasOwnProperty;
    function On(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = ko(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Pe(e, t, r) {
      var n = r;
      n == null && Sf(Af);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (f != null) {
          var h = ko(f);
          if (h.length)
            for (var g = 0; g <= h.length; g++) {
              var d = h[g];
              if (!(e && n[d] !== void 0)) {
                var E = f[d];
                t && In(n[d]) && In(E) && (E = Pe(e, t, n[d], E)),
                  !(E === void 0 || E === n[d]) &&
                    (i || ((i = !0), (n = On(n))), (n[d] = E));
              }
            }
        }
      }
      return n;
    }
    function In(e) {
      var t = typeof e > "u" ? "undefined" : gS(e);
      return e != null && (t === "object" || t === "function");
    }
    function wf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function xf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Cf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Rf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Nf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Lf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Pf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function An(e, t) {
      if ((!Array.isArray(t) && Sf(Af), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Sn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = On(i);
      return (o[t] = r), o;
    }
    function qf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          In(e) && In(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = qf(a, t, r, n + 1);
      }
      return Sn(e, o, i);
    }
    function wn(e, t, r) {
      return t.length ? qf(e, t, r, 0) : r;
    }
    function Mf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Sn(e, t, i);
    }
    function Ff(e, t, r) {
      var n = An(e, t),
        i = r(n);
      return wn(e, t, i);
    }
    function Df(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Pe.call.apply(Pe, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Pe(!1, !1, e, t, r, n, i, o);
    }
    function Gf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Pe.call.apply(Pe, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Pe(!1, !0, e, t, r, n, i, o);
    }
    function Vf(e, t, r, n, i, o, a) {
      var s = An(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          f = arguments.length,
          h = Array(f > 7 ? f - 7 : 0),
          g = 7;
        g < f;
        g++
      )
        h[g - 7] = arguments[g];
      return (
        h.length
          ? (u = Pe.call.apply(Pe, [null, !1, !1, s, r, n, i, o, a].concat(h)))
          : (u = Pe(!1, !1, s, r, n, i, o, a)),
        wn(e, t, u)
      );
    }
    function Bf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (hS.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = ko(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Uf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Pe.call.apply(Pe, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Pe(!0, !1, e, t, r, n, i, o);
    }
    var vS = {
      clone: On,
      addLast: wf,
      addFirst: xf,
      removeLast: Cf,
      removeFirst: Rf,
      insert: Nf,
      removeAt: Lf,
      replaceAt: Pf,
      getIn: An,
      set: Sn,
      setIn: wn,
      update: Mf,
      updateIn: Ff,
      merge: Df,
      mergeDeep: Gf,
      mergeIn: Vf,
      omit: Bf,
      addDefaults: Uf,
    };
    fe.default = vS;
  });
  var Xf,
    ES,
    yS,
    mS,
    _S,
    TS,
    Hf,
    kf,
    Wf = se(() => {
      "use strict";
      Le();
      (Xf = ee(kt())),
        ({
          IX2_PREVIEW_REQUESTED: ES,
          IX2_PLAYBACK_REQUESTED: yS,
          IX2_STOP_REQUESTED: mS,
          IX2_CLEAR_REQUESTED: _S,
        } = ge),
        (TS = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Hf = Object.create(null, {
          [ES]: { value: "preview" },
          [yS]: { value: "playback" },
          [mS]: { value: "stop" },
          [_S]: { value: "clear" },
        })),
        (kf = (e = TS, t) => {
          if (t.type in Hf) {
            let r = [Hf[t.type]];
            return (0, Xf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Se,
    bS,
    IS,
    OS,
    AS,
    SS,
    wS,
    xS,
    CS,
    RS,
    NS,
    jf,
    LS,
    zf,
    Kf = se(() => {
      "use strict";
      Le();
      (Se = ee(kt())),
        ({
          IX2_SESSION_INITIALIZED: bS,
          IX2_SESSION_STARTED: IS,
          IX2_TEST_FRAME_RENDERED: OS,
          IX2_SESSION_STOPPED: AS,
          IX2_EVENT_LISTENER_ADDED: SS,
          IX2_EVENT_STATE_CHANGED: wS,
          IX2_ANIMATION_FRAME_CHANGED: xS,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: CS,
          IX2_VIEWPORT_WIDTH_CHANGED: RS,
          IX2_MEDIA_QUERIES_DEFINED: NS,
        } = ge),
        (jf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (LS = 20),
        (zf = (e = jf, t) => {
          switch (t.type) {
            case bS: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Se.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case IS:
              return (0, Se.set)(e, "active", !0);
            case OS: {
              let {
                payload: { step: r = LS },
              } = t;
              return (0, Se.set)(e, "tick", e.tick + r);
            }
            case AS:
              return jf;
            case xS: {
              let {
                payload: { now: r },
              } = t;
              return (0, Se.set)(e, "tick", r);
            }
            case SS: {
              let r = (0, Se.addLast)(e.eventListeners, t.payload);
              return (0, Se.set)(e, "eventListeners", r);
            }
            case wS: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Se.setIn)(e, ["eventState", r], n);
            }
            case CS: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Se.setIn)(e, ["playbackState", r], n);
            }
            case RS: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: f } = n[a];
                if (r >= u && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, Se.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case NS:
              return (0, Se.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var $f = c((VH, Yf) => {
    function PS() {
      (this.__data__ = []), (this.size = 0);
    }
    Yf.exports = PS;
  });
  var xn = c((BH, Qf) => {
    function qS(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Qf.exports = qS;
  });
  var xr = c((UH, Zf) => {
    var MS = xn();
    function FS(e, t) {
      for (var r = e.length; r--; ) if (MS(e[r][0], t)) return r;
      return -1;
    }
    Zf.exports = FS;
  });
  var ed = c((HH, Jf) => {
    var DS = xr(),
      GS = Array.prototype,
      VS = GS.splice;
    function BS(e) {
      var t = this.__data__,
        r = DS(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : VS.call(t, r, 1), --this.size, !0;
    }
    Jf.exports = BS;
  });
  var rd = c((XH, td) => {
    var US = xr();
    function HS(e) {
      var t = this.__data__,
        r = US(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    td.exports = HS;
  });
  var id = c((kH, nd) => {
    var XS = xr();
    function kS(e) {
      return XS(this.__data__, e) > -1;
    }
    nd.exports = kS;
  });
  var ad = c((WH, od) => {
    var WS = xr();
    function jS(e, t) {
      var r = this.__data__,
        n = WS(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    od.exports = jS;
  });
  var Cr = c((jH, sd) => {
    var zS = $f(),
      KS = ed(),
      YS = rd(),
      $S = id(),
      QS = ad();
    function Wt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Wt.prototype.clear = zS;
    Wt.prototype.delete = KS;
    Wt.prototype.get = YS;
    Wt.prototype.has = $S;
    Wt.prototype.set = QS;
    sd.exports = Wt;
  });
  var cd = c((zH, ud) => {
    var ZS = Cr();
    function JS() {
      (this.__data__ = new ZS()), (this.size = 0);
    }
    ud.exports = JS;
  });
  var fd = c((KH, ld) => {
    function ew(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    ld.exports = ew;
  });
  var pd = c((YH, dd) => {
    function tw(e) {
      return this.__data__.get(e);
    }
    dd.exports = tw;
  });
  var hd = c(($H, gd) => {
    function rw(e) {
      return this.__data__.has(e);
    }
    gd.exports = rw;
  });
  var et = c((QH, vd) => {
    function nw(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    vd.exports = nw;
  });
  var Wo = c((ZH, Ed) => {
    var iw = ht(),
      ow = et(),
      aw = "[object AsyncFunction]",
      sw = "[object Function]",
      uw = "[object GeneratorFunction]",
      cw = "[object Proxy]";
    function lw(e) {
      if (!ow(e)) return !1;
      var t = iw(e);
      return t == sw || t == uw || t == aw || t == cw;
    }
    Ed.exports = lw;
  });
  var md = c((JH, yd) => {
    var fw = He(),
      dw = fw["__core-js_shared__"];
    yd.exports = dw;
  });
  var bd = c((eX, Td) => {
    var jo = md(),
      _d = (function () {
        var e = /[^.]+$/.exec((jo && jo.keys && jo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function pw(e) {
      return !!_d && _d in e;
    }
    Td.exports = pw;
  });
  var zo = c((tX, Id) => {
    var gw = Function.prototype,
      hw = gw.toString;
    function vw(e) {
      if (e != null) {
        try {
          return hw.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Id.exports = vw;
  });
  var Ad = c((rX, Od) => {
    var Ew = Wo(),
      yw = bd(),
      mw = et(),
      _w = zo(),
      Tw = /[\\^$.*+?()[\]{}|]/g,
      bw = /^\[object .+?Constructor\]$/,
      Iw = Function.prototype,
      Ow = Object.prototype,
      Aw = Iw.toString,
      Sw = Ow.hasOwnProperty,
      ww = RegExp(
        "^" +
          Aw.call(Sw)
            .replace(Tw, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function xw(e) {
      if (!mw(e) || yw(e)) return !1;
      var t = Ew(e) ? ww : bw;
      return t.test(_w(e));
    }
    Od.exports = xw;
  });
  var wd = c((nX, Sd) => {
    function Cw(e, t) {
      return e?.[t];
    }
    Sd.exports = Cw;
  });
  var vt = c((iX, xd) => {
    var Rw = Ad(),
      Nw = wd();
    function Lw(e, t) {
      var r = Nw(e, t);
      return Rw(r) ? r : void 0;
    }
    xd.exports = Lw;
  });
  var Cn = c((oX, Cd) => {
    var Pw = vt(),
      qw = He(),
      Mw = Pw(qw, "Map");
    Cd.exports = Mw;
  });
  var Rr = c((aX, Rd) => {
    var Fw = vt(),
      Dw = Fw(Object, "create");
    Rd.exports = Dw;
  });
  var Pd = c((sX, Ld) => {
    var Nd = Rr();
    function Gw() {
      (this.__data__ = Nd ? Nd(null) : {}), (this.size = 0);
    }
    Ld.exports = Gw;
  });
  var Md = c((uX, qd) => {
    function Vw(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    qd.exports = Vw;
  });
  var Dd = c((cX, Fd) => {
    var Bw = Rr(),
      Uw = "__lodash_hash_undefined__",
      Hw = Object.prototype,
      Xw = Hw.hasOwnProperty;
    function kw(e) {
      var t = this.__data__;
      if (Bw) {
        var r = t[e];
        return r === Uw ? void 0 : r;
      }
      return Xw.call(t, e) ? t[e] : void 0;
    }
    Fd.exports = kw;
  });
  var Vd = c((lX, Gd) => {
    var Ww = Rr(),
      jw = Object.prototype,
      zw = jw.hasOwnProperty;
    function Kw(e) {
      var t = this.__data__;
      return Ww ? t[e] !== void 0 : zw.call(t, e);
    }
    Gd.exports = Kw;
  });
  var Ud = c((fX, Bd) => {
    var Yw = Rr(),
      $w = "__lodash_hash_undefined__";
    function Qw(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = Yw && t === void 0 ? $w : t),
        this
      );
    }
    Bd.exports = Qw;
  });
  var Xd = c((dX, Hd) => {
    var Zw = Pd(),
      Jw = Md(),
      ex = Dd(),
      tx = Vd(),
      rx = Ud();
    function jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    jt.prototype.clear = Zw;
    jt.prototype.delete = Jw;
    jt.prototype.get = ex;
    jt.prototype.has = tx;
    jt.prototype.set = rx;
    Hd.exports = jt;
  });
  var jd = c((pX, Wd) => {
    var kd = Xd(),
      nx = Cr(),
      ix = Cn();
    function ox() {
      (this.size = 0),
        (this.__data__ = {
          hash: new kd(),
          map: new (ix || nx)(),
          string: new kd(),
        });
    }
    Wd.exports = ox;
  });
  var Kd = c((gX, zd) => {
    function ax(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    zd.exports = ax;
  });
  var Nr = c((hX, Yd) => {
    var sx = Kd();
    function ux(e, t) {
      var r = e.__data__;
      return sx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Yd.exports = ux;
  });
  var Qd = c((vX, $d) => {
    var cx = Nr();
    function lx(e) {
      var t = cx(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    $d.exports = lx;
  });
  var Jd = c((EX, Zd) => {
    var fx = Nr();
    function dx(e) {
      return fx(this, e).get(e);
    }
    Zd.exports = dx;
  });
  var tp = c((yX, ep) => {
    var px = Nr();
    function gx(e) {
      return px(this, e).has(e);
    }
    ep.exports = gx;
  });
  var np = c((mX, rp) => {
    var hx = Nr();
    function vx(e, t) {
      var r = hx(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    rp.exports = vx;
  });
  var Rn = c((_X, ip) => {
    var Ex = jd(),
      yx = Qd(),
      mx = Jd(),
      _x = tp(),
      Tx = np();
    function zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    zt.prototype.clear = Ex;
    zt.prototype.delete = yx;
    zt.prototype.get = mx;
    zt.prototype.has = _x;
    zt.prototype.set = Tx;
    ip.exports = zt;
  });
  var ap = c((TX, op) => {
    var bx = Cr(),
      Ix = Cn(),
      Ox = Rn(),
      Ax = 200;
    function Sx(e, t) {
      var r = this.__data__;
      if (r instanceof bx) {
        var n = r.__data__;
        if (!Ix || n.length < Ax - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new Ox(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    op.exports = Sx;
  });
  var Ko = c((bX, sp) => {
    var wx = Cr(),
      xx = cd(),
      Cx = fd(),
      Rx = pd(),
      Nx = hd(),
      Lx = ap();
    function Kt(e) {
      var t = (this.__data__ = new wx(e));
      this.size = t.size;
    }
    Kt.prototype.clear = xx;
    Kt.prototype.delete = Cx;
    Kt.prototype.get = Rx;
    Kt.prototype.has = Nx;
    Kt.prototype.set = Lx;
    sp.exports = Kt;
  });
  var cp = c((IX, up) => {
    var Px = "__lodash_hash_undefined__";
    function qx(e) {
      return this.__data__.set(e, Px), this;
    }
    up.exports = qx;
  });
  var fp = c((OX, lp) => {
    function Mx(e) {
      return this.__data__.has(e);
    }
    lp.exports = Mx;
  });
  var pp = c((AX, dp) => {
    var Fx = Rn(),
      Dx = cp(),
      Gx = fp();
    function Nn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new Fx(); ++t < r; ) this.add(e[t]);
    }
    Nn.prototype.add = Nn.prototype.push = Dx;
    Nn.prototype.has = Gx;
    dp.exports = Nn;
  });
  var hp = c((SX, gp) => {
    function Vx(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    gp.exports = Vx;
  });
  var Ep = c((wX, vp) => {
    function Bx(e, t) {
      return e.has(t);
    }
    vp.exports = Bx;
  });
  var Yo = c((xX, yp) => {
    var Ux = pp(),
      Hx = hp(),
      Xx = Ep(),
      kx = 1,
      Wx = 2;
    function jx(e, t, r, n, i, o) {
      var a = r & kx,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var f = o.get(e),
        h = o.get(t);
      if (f && h) return f == t && h == e;
      var g = -1,
        d = !0,
        E = r & Wx ? new Ux() : void 0;
      for (o.set(e, t), o.set(t, e); ++g < s; ) {
        var A = e[g],
          _ = t[g];
        if (n) var O = a ? n(_, A, g, t, e, o) : n(A, _, g, e, t, o);
        if (O !== void 0) {
          if (O) continue;
          d = !1;
          break;
        }
        if (E) {
          if (
            !Hx(t, function (y, S) {
              if (!Xx(E, S) && (A === y || i(A, y, r, n, o))) return E.push(S);
            })
          ) {
            d = !1;
            break;
          }
        } else if (!(A === _ || i(A, _, r, n, o))) {
          d = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), d;
    }
    yp.exports = jx;
  });
  var _p = c((CX, mp) => {
    var zx = He(),
      Kx = zx.Uint8Array;
    mp.exports = Kx;
  });
  var bp = c((RX, Tp) => {
    function Yx(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Tp.exports = Yx;
  });
  var Op = c((NX, Ip) => {
    function $x(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Ip.exports = $x;
  });
  var Cp = c((LX, xp) => {
    var Ap = Ut(),
      Sp = _p(),
      Qx = xn(),
      Zx = Yo(),
      Jx = bp(),
      eC = Op(),
      tC = 1,
      rC = 2,
      nC = "[object Boolean]",
      iC = "[object Date]",
      oC = "[object Error]",
      aC = "[object Map]",
      sC = "[object Number]",
      uC = "[object RegExp]",
      cC = "[object Set]",
      lC = "[object String]",
      fC = "[object Symbol]",
      dC = "[object ArrayBuffer]",
      pC = "[object DataView]",
      wp = Ap ? Ap.prototype : void 0,
      $o = wp ? wp.valueOf : void 0;
    function gC(e, t, r, n, i, o, a) {
      switch (r) {
        case pC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case dC:
          return !(e.byteLength != t.byteLength || !o(new Sp(e), new Sp(t)));
        case nC:
        case iC:
        case sC:
          return Qx(+e, +t);
        case oC:
          return e.name == t.name && e.message == t.message;
        case uC:
        case lC:
          return e == t + "";
        case aC:
          var s = Jx;
        case cC:
          var u = n & tC;
          if ((s || (s = eC), e.size != t.size && !u)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= rC), a.set(e, t);
          var h = Zx(s(e), s(t), n, i, o, a);
          return a.delete(e), h;
        case fC:
          if ($o) return $o.call(e) == $o.call(t);
      }
      return !1;
    }
    xp.exports = gC;
  });
  var Ln = c((PX, Rp) => {
    function hC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Rp.exports = hC;
  });
  var Ee = c((qX, Np) => {
    var vC = Array.isArray;
    Np.exports = vC;
  });
  var Qo = c((MX, Lp) => {
    var EC = Ln(),
      yC = Ee();
    function mC(e, t, r) {
      var n = t(e);
      return yC(e) ? n : EC(n, r(e));
    }
    Lp.exports = mC;
  });
  var qp = c((FX, Pp) => {
    function _C(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Pp.exports = _C;
  });
  var Zo = c((DX, Mp) => {
    function TC() {
      return [];
    }
    Mp.exports = TC;
  });
  var Jo = c((GX, Dp) => {
    var bC = qp(),
      IC = Zo(),
      OC = Object.prototype,
      AC = OC.propertyIsEnumerable,
      Fp = Object.getOwnPropertySymbols,
      SC = Fp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                bC(Fp(e), function (t) {
                  return AC.call(e, t);
                }));
          }
        : IC;
    Dp.exports = SC;
  });
  var Vp = c((VX, Gp) => {
    function wC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Gp.exports = wC;
  });
  var Up = c((BX, Bp) => {
    var xC = ht(),
      CC = ot(),
      RC = "[object Arguments]";
    function NC(e) {
      return CC(e) && xC(e) == RC;
    }
    Bp.exports = NC;
  });
  var Lr = c((UX, kp) => {
    var Hp = Up(),
      LC = ot(),
      Xp = Object.prototype,
      PC = Xp.hasOwnProperty,
      qC = Xp.propertyIsEnumerable,
      MC = Hp(
        (function () {
          return arguments;
        })()
      )
        ? Hp
        : function (e) {
            return LC(e) && PC.call(e, "callee") && !qC.call(e, "callee");
          };
    kp.exports = MC;
  });
  var jp = c((HX, Wp) => {
    function FC() {
      return !1;
    }
    Wp.exports = FC;
  });
  var Pn = c((Pr, Yt) => {
    var DC = He(),
      GC = jp(),
      Yp = typeof Pr == "object" && Pr && !Pr.nodeType && Pr,
      zp = Yp && typeof Yt == "object" && Yt && !Yt.nodeType && Yt,
      VC = zp && zp.exports === Yp,
      Kp = VC ? DC.Buffer : void 0,
      BC = Kp ? Kp.isBuffer : void 0,
      UC = BC || GC;
    Yt.exports = UC;
  });
  var qn = c((XX, $p) => {
    var HC = 9007199254740991,
      XC = /^(?:0|[1-9]\d*)$/;
    function kC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? HC),
        !!t &&
          (r == "number" || (r != "symbol" && XC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    $p.exports = kC;
  });
  var Mn = c((kX, Qp) => {
    var WC = 9007199254740991;
    function jC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= WC;
    }
    Qp.exports = jC;
  });
  var Jp = c((WX, Zp) => {
    var zC = ht(),
      KC = Mn(),
      YC = ot(),
      $C = "[object Arguments]",
      QC = "[object Array]",
      ZC = "[object Boolean]",
      JC = "[object Date]",
      eR = "[object Error]",
      tR = "[object Function]",
      rR = "[object Map]",
      nR = "[object Number]",
      iR = "[object Object]",
      oR = "[object RegExp]",
      aR = "[object Set]",
      sR = "[object String]",
      uR = "[object WeakMap]",
      cR = "[object ArrayBuffer]",
      lR = "[object DataView]",
      fR = "[object Float32Array]",
      dR = "[object Float64Array]",
      pR = "[object Int8Array]",
      gR = "[object Int16Array]",
      hR = "[object Int32Array]",
      vR = "[object Uint8Array]",
      ER = "[object Uint8ClampedArray]",
      yR = "[object Uint16Array]",
      mR = "[object Uint32Array]",
      ie = {};
    ie[fR] =
      ie[dR] =
      ie[pR] =
      ie[gR] =
      ie[hR] =
      ie[vR] =
      ie[ER] =
      ie[yR] =
      ie[mR] =
        !0;
    ie[$C] =
      ie[QC] =
      ie[cR] =
      ie[ZC] =
      ie[lR] =
      ie[JC] =
      ie[eR] =
      ie[tR] =
      ie[rR] =
      ie[nR] =
      ie[iR] =
      ie[oR] =
      ie[aR] =
      ie[sR] =
      ie[uR] =
        !1;
    function _R(e) {
      return YC(e) && KC(e.length) && !!ie[zC(e)];
    }
    Zp.exports = _R;
  });
  var tg = c((jX, eg) => {
    function TR(e) {
      return function (t) {
        return e(t);
      };
    }
    eg.exports = TR;
  });
  var ng = c((qr, $t) => {
    var bR = Ao(),
      rg = typeof qr == "object" && qr && !qr.nodeType && qr,
      Mr = rg && typeof $t == "object" && $t && !$t.nodeType && $t,
      IR = Mr && Mr.exports === rg,
      ea = IR && bR.process,
      OR = (function () {
        try {
          var e = Mr && Mr.require && Mr.require("util").types;
          return e || (ea && ea.binding && ea.binding("util"));
        } catch {}
      })();
    $t.exports = OR;
  });
  var Fn = c((zX, ag) => {
    var AR = Jp(),
      SR = tg(),
      ig = ng(),
      og = ig && ig.isTypedArray,
      wR = og ? SR(og) : AR;
    ag.exports = wR;
  });
  var ta = c((KX, sg) => {
    var xR = Vp(),
      CR = Lr(),
      RR = Ee(),
      NR = Pn(),
      LR = qn(),
      PR = Fn(),
      qR = Object.prototype,
      MR = qR.hasOwnProperty;
    function FR(e, t) {
      var r = RR(e),
        n = !r && CR(e),
        i = !r && !n && NR(e),
        o = !r && !n && !i && PR(e),
        a = r || n || i || o,
        s = a ? xR(e.length, String) : [],
        u = s.length;
      for (var f in e)
        (t || MR.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              LR(f, u))
          ) &&
          s.push(f);
      return s;
    }
    sg.exports = FR;
  });
  var Dn = c((YX, ug) => {
    var DR = Object.prototype;
    function GR(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || DR;
      return e === r;
    }
    ug.exports = GR;
  });
  var lg = c(($X, cg) => {
    var VR = So(),
      BR = VR(Object.keys, Object);
    cg.exports = BR;
  });
  var Gn = c((QX, fg) => {
    var UR = Dn(),
      HR = lg(),
      XR = Object.prototype,
      kR = XR.hasOwnProperty;
    function WR(e) {
      if (!UR(e)) return HR(e);
      var t = [];
      for (var r in Object(e)) kR.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    fg.exports = WR;
  });
  var xt = c((ZX, dg) => {
    var jR = Wo(),
      zR = Mn();
    function KR(e) {
      return e != null && zR(e.length) && !jR(e);
    }
    dg.exports = KR;
  });
  var Fr = c((JX, pg) => {
    var YR = ta(),
      $R = Gn(),
      QR = xt();
    function ZR(e) {
      return QR(e) ? YR(e) : $R(e);
    }
    pg.exports = ZR;
  });
  var hg = c((ek, gg) => {
    var JR = Qo(),
      eN = Jo(),
      tN = Fr();
    function rN(e) {
      return JR(e, tN, eN);
    }
    gg.exports = rN;
  });
  var yg = c((tk, Eg) => {
    var vg = hg(),
      nN = 1,
      iN = Object.prototype,
      oN = iN.hasOwnProperty;
    function aN(e, t, r, n, i, o) {
      var a = r & nN,
        s = vg(e),
        u = s.length,
        f = vg(t),
        h = f.length;
      if (u != h && !a) return !1;
      for (var g = u; g--; ) {
        var d = s[g];
        if (!(a ? d in t : oN.call(t, d))) return !1;
      }
      var E = o.get(e),
        A = o.get(t);
      if (E && A) return E == t && A == e;
      var _ = !0;
      o.set(e, t), o.set(t, e);
      for (var O = a; ++g < u; ) {
        d = s[g];
        var y = e[d],
          S = t[d];
        if (n) var b = a ? n(S, y, d, t, e, o) : n(y, S, d, e, t, o);
        if (!(b === void 0 ? y === S || i(y, S, r, n, o) : b)) {
          _ = !1;
          break;
        }
        O || (O = d == "constructor");
      }
      if (_ && !O) {
        var x = e.constructor,
          N = t.constructor;
        x != N &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof x == "function" &&
            x instanceof x &&
            typeof N == "function" &&
            N instanceof N
          ) &&
          (_ = !1);
      }
      return o.delete(e), o.delete(t), _;
    }
    Eg.exports = aN;
  });
  var _g = c((rk, mg) => {
    var sN = vt(),
      uN = He(),
      cN = sN(uN, "DataView");
    mg.exports = cN;
  });
  var bg = c((nk, Tg) => {
    var lN = vt(),
      fN = He(),
      dN = lN(fN, "Promise");
    Tg.exports = dN;
  });
  var Og = c((ik, Ig) => {
    var pN = vt(),
      gN = He(),
      hN = pN(gN, "Set");
    Ig.exports = hN;
  });
  var ra = c((ok, Ag) => {
    var vN = vt(),
      EN = He(),
      yN = vN(EN, "WeakMap");
    Ag.exports = yN;
  });
  var Vn = c((ak, Lg) => {
    var na = _g(),
      ia = Cn(),
      oa = bg(),
      aa = Og(),
      sa = ra(),
      Ng = ht(),
      Qt = zo(),
      Sg = "[object Map]",
      mN = "[object Object]",
      wg = "[object Promise]",
      xg = "[object Set]",
      Cg = "[object WeakMap]",
      Rg = "[object DataView]",
      _N = Qt(na),
      TN = Qt(ia),
      bN = Qt(oa),
      IN = Qt(aa),
      ON = Qt(sa),
      Ct = Ng;
    ((na && Ct(new na(new ArrayBuffer(1))) != Rg) ||
      (ia && Ct(new ia()) != Sg) ||
      (oa && Ct(oa.resolve()) != wg) ||
      (aa && Ct(new aa()) != xg) ||
      (sa && Ct(new sa()) != Cg)) &&
      (Ct = function (e) {
        var t = Ng(e),
          r = t == mN ? e.constructor : void 0,
          n = r ? Qt(r) : "";
        if (n)
          switch (n) {
            case _N:
              return Rg;
            case TN:
              return Sg;
            case bN:
              return wg;
            case IN:
              return xg;
            case ON:
              return Cg;
          }
        return t;
      });
    Lg.exports = Ct;
  });
  var Bg = c((sk, Vg) => {
    var ua = Ko(),
      AN = Yo(),
      SN = Cp(),
      wN = yg(),
      Pg = Vn(),
      qg = Ee(),
      Mg = Pn(),
      xN = Fn(),
      CN = 1,
      Fg = "[object Arguments]",
      Dg = "[object Array]",
      Bn = "[object Object]",
      RN = Object.prototype,
      Gg = RN.hasOwnProperty;
    function NN(e, t, r, n, i, o) {
      var a = qg(e),
        s = qg(t),
        u = a ? Dg : Pg(e),
        f = s ? Dg : Pg(t);
      (u = u == Fg ? Bn : u), (f = f == Fg ? Bn : f);
      var h = u == Bn,
        g = f == Bn,
        d = u == f;
      if (d && Mg(e)) {
        if (!Mg(t)) return !1;
        (a = !0), (h = !1);
      }
      if (d && !h)
        return (
          o || (o = new ua()),
          a || xN(e) ? AN(e, t, r, n, i, o) : SN(e, t, u, r, n, i, o)
        );
      if (!(r & CN)) {
        var E = h && Gg.call(e, "__wrapped__"),
          A = g && Gg.call(t, "__wrapped__");
        if (E || A) {
          var _ = E ? e.value() : e,
            O = A ? t.value() : t;
          return o || (o = new ua()), i(_, O, r, n, o);
        }
      }
      return d ? (o || (o = new ua()), wN(e, t, r, n, i, o)) : !1;
    }
    Vg.exports = NN;
  });
  var ca = c((uk, Xg) => {
    var LN = Bg(),
      Ug = ot();
    function Hg(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Ug(e) && !Ug(t))
        ? e !== e && t !== t
        : LN(e, t, r, n, Hg, i);
    }
    Xg.exports = Hg;
  });
  var Wg = c((ck, kg) => {
    var PN = Ko(),
      qN = ca(),
      MN = 1,
      FN = 2;
    function DN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          f = e[u],
          h = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(u in e)) return !1;
        } else {
          var g = new PN();
          if (n) var d = n(f, h, u, e, t, g);
          if (!(d === void 0 ? qN(h, f, MN | FN, n, g) : d)) return !1;
        }
      }
      return !0;
    }
    kg.exports = DN;
  });
  var la = c((lk, jg) => {
    var GN = et();
    function VN(e) {
      return e === e && !GN(e);
    }
    jg.exports = VN;
  });
  var Kg = c((fk, zg) => {
    var BN = la(),
      UN = Fr();
    function HN(e) {
      for (var t = UN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, BN(i)];
      }
      return t;
    }
    zg.exports = HN;
  });
  var fa = c((dk, Yg) => {
    function XN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Yg.exports = XN;
  });
  var Qg = c((pk, $g) => {
    var kN = Wg(),
      WN = Kg(),
      jN = fa();
    function zN(e) {
      var t = WN(e);
      return t.length == 1 && t[0][2]
        ? jN(t[0][0], t[0][1])
        : function (r) {
            return r === e || kN(r, e, t);
          };
    }
    $g.exports = zN;
  });
  var Dr = c((gk, Zg) => {
    var KN = ht(),
      YN = ot(),
      $N = "[object Symbol]";
    function QN(e) {
      return typeof e == "symbol" || (YN(e) && KN(e) == $N);
    }
    Zg.exports = QN;
  });
  var Un = c((hk, Jg) => {
    var ZN = Ee(),
      JN = Dr(),
      eL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      tL = /^\w*$/;
    function rL(e, t) {
      if (ZN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        JN(e)
        ? !0
        : tL.test(e) || !eL.test(e) || (t != null && e in Object(t));
    }
    Jg.exports = rL;
  });
  var rh = c((vk, th) => {
    var eh = Rn(),
      nL = "Expected a function";
    function da(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(nL);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (da.Cache || eh)()), r;
    }
    da.Cache = eh;
    th.exports = da;
  });
  var ih = c((Ek, nh) => {
    var iL = rh(),
      oL = 500;
    function aL(e) {
      var t = iL(e, function (n) {
          return r.size === oL && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    nh.exports = aL;
  });
  var ah = c((yk, oh) => {
    var sL = ih(),
      uL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      cL = /\\(\\)?/g,
      lL = sL(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(uL, function (r, n, i, o) {
            t.push(i ? o.replace(cL, "$1") : n || r);
          }),
          t
        );
      });
    oh.exports = lL;
  });
  var pa = c((mk, sh) => {
    function fL(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    sh.exports = fL;
  });
  var ph = c((_k, dh) => {
    var uh = Ut(),
      dL = pa(),
      pL = Ee(),
      gL = Dr(),
      hL = 1 / 0,
      ch = uh ? uh.prototype : void 0,
      lh = ch ? ch.toString : void 0;
    function fh(e) {
      if (typeof e == "string") return e;
      if (pL(e)) return dL(e, fh) + "";
      if (gL(e)) return lh ? lh.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -hL ? "-0" : t;
    }
    dh.exports = fh;
  });
  var hh = c((Tk, gh) => {
    var vL = ph();
    function EL(e) {
      return e == null ? "" : vL(e);
    }
    gh.exports = EL;
  });
  var Gr = c((bk, vh) => {
    var yL = Ee(),
      mL = Un(),
      _L = ah(),
      TL = hh();
    function bL(e, t) {
      return yL(e) ? e : mL(e, t) ? [e] : _L(TL(e));
    }
    vh.exports = bL;
  });
  var Zt = c((Ik, Eh) => {
    var IL = Dr(),
      OL = 1 / 0;
    function AL(e) {
      if (typeof e == "string" || IL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -OL ? "-0" : t;
    }
    Eh.exports = AL;
  });
  var Hn = c((Ok, yh) => {
    var SL = Gr(),
      wL = Zt();
    function xL(e, t) {
      t = SL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[wL(t[r++])];
      return r && r == n ? e : void 0;
    }
    yh.exports = xL;
  });
  var Xn = c((Ak, mh) => {
    var CL = Hn();
    function RL(e, t, r) {
      var n = e == null ? void 0 : CL(e, t);
      return n === void 0 ? r : n;
    }
    mh.exports = RL;
  });
  var Th = c((Sk, _h) => {
    function NL(e, t) {
      return e != null && t in Object(e);
    }
    _h.exports = NL;
  });
  var Ih = c((wk, bh) => {
    var LL = Gr(),
      PL = Lr(),
      qL = Ee(),
      ML = qn(),
      FL = Mn(),
      DL = Zt();
    function GL(e, t, r) {
      t = LL(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = DL(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && FL(i) && ML(a, i) && (qL(e) || PL(e)));
    }
    bh.exports = GL;
  });
  var Ah = c((xk, Oh) => {
    var VL = Th(),
      BL = Ih();
    function UL(e, t) {
      return e != null && BL(e, t, VL);
    }
    Oh.exports = UL;
  });
  var wh = c((Ck, Sh) => {
    var HL = ca(),
      XL = Xn(),
      kL = Ah(),
      WL = Un(),
      jL = la(),
      zL = fa(),
      KL = Zt(),
      YL = 1,
      $L = 2;
    function QL(e, t) {
      return WL(e) && jL(t)
        ? zL(KL(e), t)
        : function (r) {
            var n = XL(r, e);
            return n === void 0 && n === t ? kL(r, e) : HL(t, n, YL | $L);
          };
    }
    Sh.exports = QL;
  });
  var kn = c((Rk, xh) => {
    function ZL(e) {
      return e;
    }
    xh.exports = ZL;
  });
  var ga = c((Nk, Ch) => {
    function JL(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Ch.exports = JL;
  });
  var Nh = c((Lk, Rh) => {
    var eP = Hn();
    function tP(e) {
      return function (t) {
        return eP(t, e);
      };
    }
    Rh.exports = tP;
  });
  var Ph = c((Pk, Lh) => {
    var rP = ga(),
      nP = Nh(),
      iP = Un(),
      oP = Zt();
    function aP(e) {
      return iP(e) ? rP(oP(e)) : nP(e);
    }
    Lh.exports = aP;
  });
  var Et = c((qk, qh) => {
    var sP = Qg(),
      uP = wh(),
      cP = kn(),
      lP = Ee(),
      fP = Ph();
    function dP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? cP
        : typeof e == "object"
        ? lP(e)
          ? uP(e[0], e[1])
          : sP(e)
        : fP(e);
    }
    qh.exports = dP;
  });
  var ha = c((Mk, Mh) => {
    var pP = Et(),
      gP = xt(),
      hP = Fr();
    function vP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!gP(t)) {
          var o = pP(r, 3);
          (t = hP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Mh.exports = vP;
  });
  var va = c((Fk, Fh) => {
    function EP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Fh.exports = EP;
  });
  var Gh = c((Dk, Dh) => {
    var yP = /\s/;
    function mP(e) {
      for (var t = e.length; t-- && yP.test(e.charAt(t)); );
      return t;
    }
    Dh.exports = mP;
  });
  var Bh = c((Gk, Vh) => {
    var _P = Gh(),
      TP = /^\s+/;
    function bP(e) {
      return e && e.slice(0, _P(e) + 1).replace(TP, "");
    }
    Vh.exports = bP;
  });
  var Wn = c((Vk, Xh) => {
    var IP = Bh(),
      Uh = et(),
      OP = Dr(),
      Hh = 0 / 0,
      AP = /^[-+]0x[0-9a-f]+$/i,
      SP = /^0b[01]+$/i,
      wP = /^0o[0-7]+$/i,
      xP = parseInt;
    function CP(e) {
      if (typeof e == "number") return e;
      if (OP(e)) return Hh;
      if (Uh(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Uh(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = IP(e);
      var r = SP.test(e);
      return r || wP.test(e) ? xP(e.slice(2), r ? 2 : 8) : AP.test(e) ? Hh : +e;
    }
    Xh.exports = CP;
  });
  var jh = c((Bk, Wh) => {
    var RP = Wn(),
      kh = 1 / 0,
      NP = 17976931348623157e292;
    function LP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = RP(e)), e === kh || e === -kh)) {
        var t = e < 0 ? -1 : 1;
        return t * NP;
      }
      return e === e ? e : 0;
    }
    Wh.exports = LP;
  });
  var Ea = c((Uk, zh) => {
    var PP = jh();
    function qP(e) {
      var t = PP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    zh.exports = qP;
  });
  var Yh = c((Hk, Kh) => {
    var MP = va(),
      FP = Et(),
      DP = Ea(),
      GP = Math.max;
    function VP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : DP(r);
      return i < 0 && (i = GP(n + i, 0)), MP(e, FP(t, 3), i);
    }
    Kh.exports = VP;
  });
  var ya = c((Xk, $h) => {
    var BP = ha(),
      UP = Yh(),
      HP = BP(UP);
    $h.exports = HP;
  });
  var Jh = {};
  Re(Jh, {
    ELEMENT_MATCHES: () => XP,
    FLEX_PREFIXED: () => ma,
    IS_BROWSER_ENV: () => ke,
    TRANSFORM_PREFIXED: () => yt,
    TRANSFORM_STYLE_PREFIXED: () => zn,
    withBrowser: () => jn,
  });
  var Zh,
    ke,
    jn,
    XP,
    ma,
    yt,
    Qh,
    zn,
    Kn = se(() => {
      "use strict";
      (Zh = ee(ya())),
        (ke = typeof window < "u"),
        (jn = (e, t) => (ke ? e() : t)),
        (XP = jn(() =>
          (0, Zh.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (ma = jn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (yt = jn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Qh = yt.split("transform")[0]),
        (zn = Qh ? Qh + "TransformStyle" : "transformStyle");
    });
  var _a = c((kk, iv) => {
    var kP = 4,
      WP = 0.001,
      jP = 1e-7,
      zP = 10,
      Vr = 11,
      Yn = 1 / (Vr - 1),
      KP = typeof Float32Array == "function";
    function ev(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function tv(e, t) {
      return 3 * t - 6 * e;
    }
    function rv(e) {
      return 3 * e;
    }
    function $n(e, t, r) {
      return ((ev(t, r) * e + tv(t, r)) * e + rv(t)) * e;
    }
    function nv(e, t, r) {
      return 3 * ev(t, r) * e * e + 2 * tv(t, r) * e + rv(t);
    }
    function YP(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = $n(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > jP && ++s < zP);
      return a;
    }
    function $P(e, t, r, n) {
      for (var i = 0; i < kP; ++i) {
        var o = nv(t, r, n);
        if (o === 0) return t;
        var a = $n(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    iv.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = KP ? new Float32Array(Vr) : new Array(Vr);
      if (t !== r || n !== i)
        for (var a = 0; a < Vr; ++a) o[a] = $n(a * Yn, t, n);
      function s(u) {
        for (var f = 0, h = 1, g = Vr - 1; h !== g && o[h] <= u; ++h) f += Yn;
        --h;
        var d = (u - o[h]) / (o[h + 1] - o[h]),
          E = f + d * Yn,
          A = nv(E, t, n);
        return A >= WP ? $P(u, E, t, n) : A === 0 ? E : YP(u, f, f + Yn, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : $n(s(f), r, i);
      };
    };
  });
  var Ur = {};
  Re(Ur, {
    bounce: () => Lq,
    bouncePast: () => Pq,
    ease: () => QP,
    easeIn: () => ZP,
    easeInOut: () => eq,
    easeOut: () => JP,
    inBack: () => Iq,
    inCirc: () => mq,
    inCubic: () => iq,
    inElastic: () => Sq,
    inExpo: () => vq,
    inOutBack: () => Aq,
    inOutCirc: () => Tq,
    inOutCubic: () => aq,
    inOutElastic: () => xq,
    inOutExpo: () => yq,
    inOutQuad: () => nq,
    inOutQuart: () => cq,
    inOutQuint: () => dq,
    inOutSine: () => hq,
    inQuad: () => tq,
    inQuart: () => sq,
    inQuint: () => lq,
    inSine: () => pq,
    outBack: () => Oq,
    outBounce: () => bq,
    outCirc: () => _q,
    outCubic: () => oq,
    outElastic: () => wq,
    outExpo: () => Eq,
    outQuad: () => rq,
    outQuart: () => uq,
    outQuint: () => fq,
    outSine: () => gq,
    swingFrom: () => Rq,
    swingFromTo: () => Cq,
    swingTo: () => Nq,
  });
  function tq(e) {
    return Math.pow(e, 2);
  }
  function rq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function nq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function iq(e) {
    return Math.pow(e, 3);
  }
  function oq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function aq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function sq(e) {
    return Math.pow(e, 4);
  }
  function uq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function cq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function lq(e) {
    return Math.pow(e, 5);
  }
  function fq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function dq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function pq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function gq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function hq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function vq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Eq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function yq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function mq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function _q(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Tq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function bq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Iq(e) {
    let t = at;
    return e * e * ((t + 1) * e - t);
  }
  function Oq(e) {
    let t = at;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Aq(e) {
    let t = at;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Sq(e) {
    let t = at,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function wq(e) {
    let t = at,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function xq(e) {
    let t = at,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Cq(e) {
    let t = at;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Rq(e) {
    let t = at;
    return e * e * ((t + 1) * e - t);
  }
  function Nq(e) {
    let t = at;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Lq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Pq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Br,
    at,
    QP,
    ZP,
    JP,
    eq,
    Ta = se(() => {
      "use strict";
      (Br = ee(_a())),
        (at = 1.70158),
        (QP = (0, Br.default)(0.25, 0.1, 0.25, 1)),
        (ZP = (0, Br.default)(0.42, 0, 1, 1)),
        (JP = (0, Br.default)(0, 0, 0.58, 1)),
        (eq = (0, Br.default)(0.42, 0, 0.58, 1));
    });
  var av = {};
  Re(av, {
    applyEasing: () => Mq,
    createBezierEasing: () => qq,
    optimizeFloat: () => Hr,
  });
  function Hr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function qq(e) {
    return (0, ov.default)(...e);
  }
  function Mq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Hr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Ur[e] ? Ur[e](t) : t);
  }
  var ov,
    ba = se(() => {
      "use strict";
      Ta();
      ov = ee(_a());
    });
  var cv = {};
  Re(cv, {
    createElementState: () => uv,
    ixElements: () => Yq,
    mergeActionState: () => Ia,
  });
  function uv(e, t, r, n, i) {
    let o =
      r === Fq ? (0, Jt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, Jt.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Ia(e, t, r, n, i) {
    let o = Qq(i);
    return (0, Jt.mergeIn)(e, [t, Kq, r], n, o);
  }
  function Qq(e) {
    let { config: t } = e;
    return $q.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var Jt,
    jk,
    Fq,
    zk,
    Dq,
    Gq,
    Vq,
    Bq,
    Uq,
    Hq,
    Xq,
    kq,
    Wq,
    jq,
    zq,
    sv,
    Kq,
    Yq,
    $q,
    lv = se(() => {
      "use strict";
      Jt = ee(kt());
      Le();
      ({
        HTML_ELEMENT: jk,
        PLAIN_OBJECT: Fq,
        ABSTRACT_NODE: zk,
        CONFIG_X_VALUE: Dq,
        CONFIG_Y_VALUE: Gq,
        CONFIG_Z_VALUE: Vq,
        CONFIG_VALUE: Bq,
        CONFIG_X_UNIT: Uq,
        CONFIG_Y_UNIT: Hq,
        CONFIG_Z_UNIT: Xq,
        CONFIG_UNIT: kq,
      } = Ie),
        ({
          IX2_SESSION_STOPPED: Wq,
          IX2_INSTANCE_ADDED: jq,
          IX2_ELEMENT_STATE_CHANGED: zq,
        } = ge),
        (sv = {}),
        (Kq = "refState"),
        (Yq = (e = sv, t = {}) => {
          switch (t.type) {
            case Wq:
              return sv;
            case jq: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, Jt.getIn)(u, [r, n]) !== n && (u = uv(u, n, a, r, o)),
                Ia(u, r, s, i, o)
              );
            }
            case zq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Ia(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      $q = [
        [Dq, Uq],
        [Gq, Hq],
        [Vq, Xq],
        [Bq, kq],
      ];
    });
  var fv = c((ye) => {
    "use strict";
    Object.defineProperty(ye, "__esModule", { value: !0 });
    ye.renderPlugin =
      ye.getPluginOrigin =
      ye.getPluginDuration =
      ye.getPluginDestination =
      ye.getPluginConfig =
      ye.createPluginInstance =
      ye.clearPlugin =
        void 0;
    var Zq = (e) => e.value;
    ye.getPluginConfig = Zq;
    var Jq = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    ye.getPluginDuration = Jq;
    var eM = (e) => e || { value: 0 };
    ye.getPluginOrigin = eM;
    var tM = (e) => ({ value: e.value });
    ye.getPluginDestination = tM;
    var rM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    ye.createPluginInstance = rM;
    var nM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    ye.renderPlugin = nM;
    var iM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    ye.clearPlugin = iM;
  });
  var pv = c((me) => {
    "use strict";
    Object.defineProperty(me, "__esModule", { value: !0 });
    me.renderPlugin =
      me.getPluginOrigin =
      me.getPluginDuration =
      me.getPluginDestination =
      me.getPluginConfig =
      me.createPluginInstance =
      me.clearPlugin =
        void 0;
    var oM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      aM = () => window.Webflow.require("spline"),
      sM = (e, t) => e.filter((r) => !t.includes(r)),
      uM = (e, t) => e.value[t];
    me.getPluginConfig = uM;
    var cM = () => null;
    me.getPluginDuration = cM;
    var dv = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      lM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = sM(n, o);
          return a.length ? a.reduce((u, f) => ((u[f] = dv[f]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = dv[a]), o), {});
      };
    me.getPluginOrigin = lM;
    var fM = (e) => e.value;
    me.getPluginDestination = fM;
    var dM = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? oM(n) : null;
    };
    me.createPluginInstance = dM;
    var pM = (e, t, r) => {
      let n = aM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (u.position.x = f.positionX),
            f.positionY != null && (u.position.y = f.positionY),
            f.positionZ != null && (u.position.z = f.positionZ),
            f.rotationX != null && (u.rotation.x = f.rotationX),
            f.rotationY != null && (u.rotation.y = f.rotationY),
            f.rotationZ != null && (u.rotation.z = f.rotationZ),
            f.scaleX != null && (u.scale.x = f.scaleX),
            f.scaleY != null && (u.scale.y = f.scaleY),
            f.scaleZ != null && (u.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    me.renderPlugin = pM;
    var gM = () => null;
    me.clearPlugin = gM;
  });
  var Aa = c((Oa) => {
    "use strict";
    Object.defineProperty(Oa, "__esModule", { value: !0 });
    Oa.normalizeColor = hM;
    var gv = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function hM(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof gv[o] == "string" ? gv[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3
          ? ((t = parseInt(u[0] + u[0], 16)),
            (r = parseInt(u[1] + u[1], 16)),
            (n = parseInt(u[2] + u[2], 16)))
          : u.length === 6 &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (r = parseInt(u.substring(2, 4), 16)),
            (n = parseInt(u.substring(4, 6), 16)));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          h = parseFloat(u[1].replace("%", "")) / 100,
          g = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let d = (1 - Math.abs(2 * g - 1)) * h,
          E = d * (1 - Math.abs(((f / 60) % 2) - 1)),
          A = g - d / 2,
          _,
          O,
          y;
        f >= 0 && f < 60
          ? ((_ = d), (O = E), (y = 0))
          : f >= 60 && f < 120
          ? ((_ = E), (O = d), (y = 0))
          : f >= 120 && f < 180
          ? ((_ = 0), (O = d), (y = E))
          : f >= 180 && f < 240
          ? ((_ = 0), (O = E), (y = d))
          : f >= 240 && f < 300
          ? ((_ = E), (O = 0), (y = d))
          : ((_ = d), (O = 0), (y = E)),
          (t = Math.round((_ + A) * 255)),
          (r = Math.round((O + A) * 255)),
          (n = Math.round((y + A) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          h = parseFloat(u[1].replace("%", "")) / 100,
          g = parseFloat(u[2].replace("%", "")) / 100,
          d = (1 - Math.abs(2 * g - 1)) * h,
          E = d * (1 - Math.abs(((f / 60) % 2) - 1)),
          A = g - d / 2,
          _,
          O,
          y;
        f >= 0 && f < 60
          ? ((_ = d), (O = E), (y = 0))
          : f >= 60 && f < 120
          ? ((_ = E), (O = d), (y = 0))
          : f >= 120 && f < 180
          ? ((_ = 0), (O = d), (y = E))
          : f >= 180 && f < 240
          ? ((_ = 0), (O = E), (y = d))
          : f >= 240 && f < 300
          ? ((_ = E), (O = 0), (y = d))
          : ((_ = d), (O = 0), (y = E)),
          (t = Math.round((_ + A) * 255)),
          (r = Math.round((O + A) * 255)),
          (n = Math.round((y + A) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var hv = c((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    _e.renderPlugin =
      _e.getPluginOrigin =
      _e.getPluginDuration =
      _e.getPluginDestination =
      _e.getPluginConfig =
      _e.createPluginInstance =
      _e.clearPlugin =
        void 0;
    var vM = Aa(),
      EM = (e, t) => e.value[t];
    _e.getPluginConfig = EM;
    var yM = () => null;
    _e.getPluginDuration = yM;
    var mM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, vM.normalizeColor)(i);
    };
    _e.getPluginOrigin = mM;
    var _M = (e) => e.value;
    _e.getPluginDestination = _M;
    var TM = () => null;
    _e.createPluginInstance = TM;
    var bM = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: f, alpha: h } = o,
        g;
      a != null && (g = a + i),
        s != null &&
          f != null &&
          u != null &&
          h != null &&
          (g = `rgba(${s}, ${u}, ${f}, ${h})`),
        g != null && document.documentElement.style.setProperty(n, g);
    };
    _e.renderPlugin = bM;
    var IM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    _e.clearPlugin = IM;
  });
  var vv = c((Qn) => {
    "use strict";
    var wa = un().default;
    Object.defineProperty(Qn, "__esModule", { value: !0 });
    Qn.pluginMethodMap = void 0;
    var Sa = (Le(), Ke(bf)),
      OM = wa(fv()),
      AM = wa(pv()),
      SM = wa(hv()),
      Zk = (Qn.pluginMethodMap = new Map([
        [Sa.ActionTypeConsts.PLUGIN_LOTTIE, { ...OM }],
        [Sa.ActionTypeConsts.PLUGIN_SPLINE, { ...AM }],
        [Sa.ActionTypeConsts.PLUGIN_VARIABLE, { ...SM }],
      ]));
  });
  var Ev = {};
  Re(Ev, {
    clearPlugin: () => Pa,
    createPluginInstance: () => xM,
    getPluginConfig: () => Ca,
    getPluginDestination: () => Na,
    getPluginDuration: () => wM,
    getPluginOrigin: () => Ra,
    isPluginType: () => Rt,
    renderPlugin: () => La,
  });
  function Rt(e) {
    return xa.pluginMethodMap.has(e);
  }
  var xa,
    Nt,
    Ca,
    Ra,
    wM,
    Na,
    xM,
    La,
    Pa,
    qa = se(() => {
      "use strict";
      Kn();
      xa = ee(vv());
      (Nt = (e) => (t) => {
        if (!ke) return () => null;
        let r = xa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Ca = Nt("getPluginConfig")),
        (Ra = Nt("getPluginOrigin")),
        (wM = Nt("getPluginDuration")),
        (Na = Nt("getPluginDestination")),
        (xM = Nt("createPluginInstance")),
        (La = Nt("renderPlugin")),
        (Pa = Nt("clearPlugin"));
    });
  var mv = c((tW, yv) => {
    function CM(e, t) {
      return e == null || e !== e ? t : e;
    }
    yv.exports = CM;
  });
  var Tv = c((rW, _v) => {
    function RM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    _v.exports = RM;
  });
  var Iv = c((nW, bv) => {
    function NM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    bv.exports = NM;
  });
  var Av = c((iW, Ov) => {
    var LM = Iv(),
      PM = LM();
    Ov.exports = PM;
  });
  var Ma = c((oW, Sv) => {
    var qM = Av(),
      MM = Fr();
    function FM(e, t) {
      return e && qM(e, t, MM);
    }
    Sv.exports = FM;
  });
  var xv = c((aW, wv) => {
    var DM = xt();
    function GM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!DM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    wv.exports = GM;
  });
  var Fa = c((sW, Cv) => {
    var VM = Ma(),
      BM = xv(),
      UM = BM(VM);
    Cv.exports = UM;
  });
  var Nv = c((uW, Rv) => {
    function HM(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Rv.exports = HM;
  });
  var Pv = c((cW, Lv) => {
    var XM = Tv(),
      kM = Fa(),
      WM = Et(),
      jM = Nv(),
      zM = Ee();
    function KM(e, t, r) {
      var n = zM(e) ? XM : jM,
        i = arguments.length < 3;
      return n(e, WM(t, 4), r, i, kM);
    }
    Lv.exports = KM;
  });
  var Mv = c((lW, qv) => {
    var YM = va(),
      $M = Et(),
      QM = Ea(),
      ZM = Math.max,
      JM = Math.min;
    function eF(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = QM(r)), (i = r < 0 ? ZM(n + i, 0) : JM(i, n - 1))),
        YM(e, $M(t, 3), i, !0)
      );
    }
    qv.exports = eF;
  });
  var Dv = c((fW, Fv) => {
    var tF = ha(),
      rF = Mv(),
      nF = tF(rF);
    Fv.exports = nF;
  });
  function Gv(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function iF(e, t) {
    if (Gv(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Gv(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var Da,
    Vv = se(() => {
      "use strict";
      Da = iF;
    });
  var nE = {};
  Re(nE, {
    cleanupHTMLElement: () => tD,
    clearAllStyles: () => eD,
    clearObjectCache: () => TF,
    getActionListProgress: () => nD,
    getAffectedElements: () => Ha,
    getComputedStyle: () => CF,
    getDestinationValues: () => FF,
    getElementId: () => AF,
    getInstanceId: () => IF,
    getInstanceOrigin: () => LF,
    getItemConfigByKey: () => MF,
    getMaxDurationItemIndex: () => rE,
    getNamespacedParameterId: () => aD,
    getRenderType: () => Jv,
    getStyleProp: () => DF,
    mediaQueriesEqual: () => uD,
    observeStore: () => xF,
    reduceListToGroup: () => iD,
    reifyState: () => SF,
    renderHTMLElement: () => GF,
    shallowEqual: () => Da,
    shouldAllowMediaQuery: () => sD,
    shouldNamespaceEventParameter: () => oD,
    stringifyTarget: () => cD,
  });
  function TF() {
    Zn.clear();
  }
  function IF() {
    return "i" + bF++;
  }
  function AF(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + OF++;
  }
  function SF({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ri.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function xF({ store: e, select: t, onChange: r, comparator: n = wF }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function Hv(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Ha({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (P, T) =>
          P.concat(
            Ha({
              config: { target: T },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: f,
        getSiblingElements: h,
        matchSelector: g,
        elementContains: d,
        isSiblingNode: E,
      } = i,
      { target: A } = e;
    if (!A) return [];
    let {
      id: _,
      objectId: O,
      selector: y,
      selectorGuids: S,
      appliesTo: b,
      useEventTarget: x,
    } = Hv(A);
    if (O) return [Zn.has(O) ? Zn.get(O) : Zn.set(O, {}).get(O)];
    if (b === Uo.PAGE) {
      let P = a(_);
      return P ? [P] : [];
    }
    let C = (t?.action?.config?.affectedElements ?? {})[_ || y] || {},
      G = !!(C.id || C.selector),
      V,
      U,
      k,
      K = t && s(Hv(t.target));
    if (
      (G
        ? ((V = C.limitAffectedElements), (U = K), (k = s(C)))
        : (U = k = s({ id: _, selector: y, selectorGuids: S })),
      t && x)
    ) {
      let P = r && (k || x === !0) ? [r] : u(K);
      if (k) {
        if (x === yF) return u(k).filter((T) => P.some((L) => d(T, L)));
        if (x === Bv) return u(k).filter((T) => P.some((L) => d(L, T)));
        if (x === Uv) return u(k).filter((T) => P.some((L) => E(L, T)));
      }
      return P;
    }
    return U == null || k == null
      ? []
      : ke && n
      ? u(k).filter((P) => n.contains(P))
      : V === Bv
      ? u(U, k)
      : V === EF
      ? f(u(U)).filter(g(k))
      : V === Uv
      ? h(u(U)).filter(g(k))
      : u(k);
  }
  function CF({ element: e, actionItem: t }) {
    if (!ke) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case ir:
      case or:
      case ar:
      case sr:
      case ii:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function LF(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Rt(a)) return Ra(a)(t[a], n);
    switch (n.actionTypeId) {
      case tr:
      case rr:
      case nr:
      case jr:
        return t[n.actionTypeId] || Xa[n.actionTypeId];
      case zr:
        return RF(t[n.actionTypeId], n.config.filters);
      case Kr:
        return NF(t[n.actionTypeId], n.config.fontVariations);
      case $v:
        return { value: (0, st.default)(parseFloat(o(e, ei)), 1) };
      case ir: {
        let s = o(e, tt),
          u = o(e, rt),
          f,
          h;
        return (
          n.config.widthUnit === mt
            ? (f = Xv.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, st.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === mt
            ? (h = Xv.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (h = (0, st.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: f, heightValue: h }
        );
      }
      case or:
      case ar:
      case sr:
        return QF({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case ii:
        return { value: (0, st.default)(o(e, ti), r.display) };
      case _F:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function FF({ element: e, actionItem: t, elementApi: r }) {
    if (Rt(t.actionTypeId)) return Na(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case tr:
      case rr:
      case nr:
      case jr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case ir: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: f } = t.config;
        if (!ke) return { widthValue: u, heightValue: f };
        if (a === mt) {
          let h = n(e, tt);
          i(e, tt, ""), (u = o(e, "offsetWidth")), i(e, tt, h);
        }
        if (s === mt) {
          let h = n(e, rt);
          i(e, rt, ""), (f = o(e, "offsetHeight")), i(e, rt, h);
        }
        return { widthValue: u, heightValue: f };
      }
      case or:
      case ar:
      case sr: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = r,
            f = u(e, s),
            h = (0, jv.normalizeColor)(f);
          return {
            rValue: h.red,
            gValue: h.green,
            bValue: h.blue,
            aValue: h.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case zr:
        return t.config.filters.reduce(PF, {});
      case Kr:
        return t.config.fontVariations.reduce(qF, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function Jv(e) {
    if (/^TRANSFORM_/.test(e)) return Kv;
    if (/^STYLE_/.test(e)) return Ba;
    if (/^GENERAL_/.test(e)) return Va;
    if (/^PLUGIN_/.test(e)) return Yv;
  }
  function DF(e, t) {
    return e === Ba ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function GF(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case Kv:
        return XF(e, t, r, i, a);
      case Ba:
        return ZF(e, t, r, i, o, a);
      case Va:
        return JF(e, i, a);
      case Yv: {
        let { actionTypeId: f } = i;
        if (Rt(f)) return La(f)(u, t, i);
      }
    }
  }
  function XF(e, t, r, n, i) {
    let o = HF.map((s) => {
        let u = Xa[s],
          {
            xValue: f = u.xValue,
            yValue: h = u.yValue,
            zValue: g = u.zValue,
            xUnit: d = "",
            yUnit: E = "",
            zUnit: A = "",
          } = t[s] || {};
        switch (s) {
          case tr:
            return `${sF}(${f}${d}, ${h}${E}, ${g}${A})`;
          case rr:
            return `${uF}(${f}${d}, ${h}${E}, ${g}${A})`;
          case nr:
            return `${cF}(${f}${d}) ${lF}(${h}${E}) ${fF}(${g}${A})`;
          case jr:
            return `${dF}(${f}${d}, ${h}${E})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    Lt(e, yt, i), a(e, yt, o), jF(n, r) && a(e, zn, pF);
  }
  function kF(e, t, r, n) {
    let i = (0, ri.default)(t, (a, s, u) => `${a} ${u}(${s}${UF(u, r)})`, ""),
      { setStyle: o } = n;
    Lt(e, Xr, n), o(e, Xr, i);
  }
  function WF(e, t, r, n) {
    let i = (0, ri.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Lt(e, kr, n), o(e, kr, i);
  }
  function jF({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === tr && n !== void 0) ||
      (e === rr && n !== void 0) ||
      (e === nr && (t !== void 0 || r !== void 0))
    );
  }
  function $F(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function QF({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Ua[t],
      o = n(e, i),
      a = KF.test(o) ? o : r[i],
      s = $F(YF, a).split(Wr);
    return {
      rValue: (0, st.default)(parseInt(s[0], 10), 255),
      gValue: (0, st.default)(parseInt(s[1], 10), 255),
      bValue: (0, st.default)(parseInt(s[2], 10), 255),
      aValue: (0, st.default)(parseFloat(s[3]), 1),
    };
  }
  function ZF(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case ir: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: f, heightValue: h } = r;
        f !== void 0 && (s === mt && (s = "px"), Lt(e, tt, o), a(e, tt, f + s)),
          h !== void 0 &&
            (u === mt && (u = "px"), Lt(e, rt, o), a(e, rt, h + u));
        break;
      }
      case zr: {
        kF(e, r, n.config, o);
        break;
      }
      case Kr: {
        WF(e, r, n.config, o);
        break;
      }
      case or:
      case ar:
      case sr: {
        let s = Ua[n.actionTypeId],
          u = Math.round(r.rValue),
          f = Math.round(r.gValue),
          h = Math.round(r.bValue),
          g = r.aValue;
        Lt(e, s, o),
          a(e, s, g >= 1 ? `rgb(${u},${f},${h})` : `rgba(${u},${f},${h},${g})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Lt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function JF(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ii: {
        let { value: i } = t.config;
        i === gF && ke ? n(e, ti, ma) : n(e, ti, i);
        return;
      }
    }
  }
  function Lt(e, t, r) {
    if (!ke) return;
    let n = Zv[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, er);
    if (!a) {
      o(e, er, n);
      return;
    }
    let s = a.split(Wr).map(Qv);
    s.indexOf(n) === -1 && o(e, er, s.concat(n).join(Wr));
  }
  function eE(e, t, r) {
    if (!ke) return;
    let n = Zv[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, er);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        er,
        a
          .split(Wr)
          .map(Qv)
          .filter((s) => s !== n)
          .join(Wr)
      );
  }
  function eD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        f = i[u];
      f && kv({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        kv({ actionList: i[o], elementApi: t });
      });
  }
  function kv({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Wv({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Wv({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Wv({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Rt(o)
        ? (s = (u) => Pa(o)(u, i))
        : (s = tE({ effect: rD, actionTypeId: o, elementApi: r })),
        Ha({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function tD(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === ir) {
      let { config: a } = t;
      a.widthUnit === mt && n(e, tt, ""), a.heightUnit === mt && n(e, rt, "");
    }
    i(e, er) && tE({ effect: eE, actionTypeId: o, elementApi: r })(e);
  }
  function rD(e, t, r) {
    let { setStyle: n } = r;
    eE(e, t, r), n(e, t, ""), t === yt && n(e, zn, "");
  }
  function rE(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function nD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, f) => {
        if (n && f === 0) return;
        let { actionItems: h } = u,
          g = h[rE(h)],
          { config: d, actionTypeId: E } = g;
        i.id === g.id && (s = a + o);
        let A = Jv(E) === Va ? 0 : d.duration;
        a += d.delay + A;
      }),
      a > 0 ? Hr(s / a) : 0
    );
  }
  function iD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, ni.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: f }) => f.some(a));
        }),
      (0, ni.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function oD(e, { basedOn: t }) {
    return (
      (e === Xe.SCROLLING_IN_VIEW && (t === Je.ELEMENT || t == null)) ||
      (e === Xe.MOUSE_MOVE && t === Je.ELEMENT)
    );
  }
  function aD(e, t) {
    return e + mF + t;
  }
  function sD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function uD(e, t) {
    return Da(e && e.sort(), t && t.sort());
  }
  function cD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ga + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ga + r + Ga + n;
  }
  var st,
    ri,
    Jn,
    ni,
    jv,
    oF,
    aF,
    sF,
    uF,
    cF,
    lF,
    fF,
    dF,
    pF,
    gF,
    ei,
    Xr,
    kr,
    tt,
    rt,
    zv,
    hF,
    vF,
    Bv,
    EF,
    Uv,
    yF,
    ti,
    er,
    mt,
    Wr,
    mF,
    Ga,
    Kv,
    Va,
    Ba,
    Yv,
    tr,
    rr,
    nr,
    jr,
    $v,
    zr,
    Kr,
    ir,
    or,
    ar,
    sr,
    ii,
    _F,
    Qv,
    Ua,
    Zv,
    Zn,
    bF,
    OF,
    wF,
    Xv,
    RF,
    NF,
    PF,
    qF,
    MF,
    Xa,
    VF,
    BF,
    UF,
    HF,
    zF,
    KF,
    YF,
    tE,
    iE = se(() => {
      "use strict";
      (st = ee(mv())), (ri = ee(Pv())), (Jn = ee(Dv())), (ni = ee(kt()));
      Le();
      Vv();
      ba();
      jv = ee(Aa());
      qa();
      Kn();
      ({
        BACKGROUND: oF,
        TRANSFORM: aF,
        TRANSLATE_3D: sF,
        SCALE_3D: uF,
        ROTATE_X: cF,
        ROTATE_Y: lF,
        ROTATE_Z: fF,
        SKEW: dF,
        PRESERVE_3D: pF,
        FLEX: gF,
        OPACITY: ei,
        FILTER: Xr,
        FONT_VARIATION_SETTINGS: kr,
        WIDTH: tt,
        HEIGHT: rt,
        BACKGROUND_COLOR: zv,
        BORDER_COLOR: hF,
        COLOR: vF,
        CHILDREN: Bv,
        IMMEDIATE_CHILDREN: EF,
        SIBLINGS: Uv,
        PARENT: yF,
        DISPLAY: ti,
        WILL_CHANGE: er,
        AUTO: mt,
        COMMA_DELIMITER: Wr,
        COLON_DELIMITER: mF,
        BAR_DELIMITER: Ga,
        RENDER_TRANSFORM: Kv,
        RENDER_GENERAL: Va,
        RENDER_STYLE: Ba,
        RENDER_PLUGIN: Yv,
      } = Ie),
        ({
          TRANSFORM_MOVE: tr,
          TRANSFORM_SCALE: rr,
          TRANSFORM_ROTATE: nr,
          TRANSFORM_SKEW: jr,
          STYLE_OPACITY: $v,
          STYLE_FILTER: zr,
          STYLE_FONT_VARIATION: Kr,
          STYLE_SIZE: ir,
          STYLE_BACKGROUND_COLOR: or,
          STYLE_BORDER: ar,
          STYLE_TEXT_COLOR: sr,
          GENERAL_DISPLAY: ii,
          OBJECT_VALUE: _F,
        } = Ne),
        (Qv = (e) => e.trim()),
        (Ua = Object.freeze({ [or]: zv, [ar]: hF, [sr]: vF })),
        (Zv = Object.freeze({
          [yt]: aF,
          [zv]: oF,
          [ei]: ei,
          [Xr]: Xr,
          [tt]: tt,
          [rt]: rt,
          [kr]: kr,
        })),
        (Zn = new Map());
      bF = 1;
      OF = 1;
      wF = (e, t) => e === t;
      (Xv = /px/),
        (RF = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = VF[n.type]), r),
            e || {}
          )),
        (NF = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = BF[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (PF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (qF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (MF = (e, t, r) => {
          if (Rt(e)) return Ca(e)(r, t);
          switch (e) {
            case zr: {
              let n = (0, Jn.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Kr: {
              let n = (0, Jn.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Xa = {
        [tr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [rr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [nr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [jr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (VF = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (BF = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (UF = (e, t) => {
          let r = (0, Jn.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (HF = Object.keys(Xa));
      (zF = "\\(([^)]+)\\)"), (KF = /^rgb/), (YF = RegExp(`rgba?${zF}`));
      tE =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case tr:
            case rr:
            case nr:
            case jr:
              e(n, yt, r);
              break;
            case zr:
              e(n, Xr, r);
              break;
            case Kr:
              e(n, kr, r);
              break;
            case $v:
              e(n, ei, r);
              break;
            case ir:
              e(n, tt, r), e(n, rt, r);
              break;
            case or:
            case ar:
            case sr:
              e(n, Ua[t], r);
              break;
            case ii:
              e(n, ti, r);
              break;
          }
        };
    });
  var Pt = c((we) => {
    "use strict";
    var ur = un().default;
    Object.defineProperty(we, "__esModule", { value: !0 });
    we.IX2VanillaUtils =
      we.IX2VanillaPlugins =
      we.IX2ElementsReducer =
      we.IX2Easings =
      we.IX2EasingUtils =
      we.IX2BrowserSupport =
        void 0;
    var lD = ur((Kn(), Ke(Jh)));
    we.IX2BrowserSupport = lD;
    var fD = ur((Ta(), Ke(Ur)));
    we.IX2Easings = fD;
    var dD = ur((ba(), Ke(av)));
    we.IX2EasingUtils = dD;
    var pD = ur((lv(), Ke(cv)));
    we.IX2ElementsReducer = pD;
    var gD = ur((qa(), Ke(Ev)));
    we.IX2VanillaPlugins = gD;
    var hD = ur((iE(), Ke(nE)));
    we.IX2VanillaUtils = hD;
  });
  var ai,
    ut,
    vD,
    ED,
    yD,
    mD,
    _D,
    TD,
    oi,
    oE,
    bD,
    ID,
    ka,
    OD,
    AD,
    SD,
    wD,
    aE,
    sE = se(() => {
      "use strict";
      Le();
      (ai = ee(Pt())),
        (ut = ee(kt())),
        ({
          IX2_RAW_DATA_IMPORTED: vD,
          IX2_SESSION_STOPPED: ED,
          IX2_INSTANCE_ADDED: yD,
          IX2_INSTANCE_STARTED: mD,
          IX2_INSTANCE_REMOVED: _D,
          IX2_ANIMATION_FRAME_CHANGED: TD,
        } = ge),
        ({
          optimizeFloat: oi,
          applyEasing: oE,
          createBezierEasing: bD,
        } = ai.IX2EasingUtils),
        ({ RENDER_GENERAL: ID } = Ie),
        ({
          getItemConfigByKey: ka,
          getRenderType: OD,
          getStyleProp: AD,
        } = ai.IX2VanillaUtils),
        (SD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: f,
              skipMotion: h,
              skipToValue: g,
            } = e,
            { parameters: d } = t.payload,
            E = Math.max(1 - a, 0.01),
            A = d[n];
          A == null && ((E = 1), (A = s));
          let _ = Math.max(A, 0) || 0,
            O = oi(_ - r),
            y = h ? g : oi(r + O * E),
            S = y * 100;
          if (y === r && e.current) return e;
          let b, x, N, C;
          for (let V = 0, { length: U } = i; V < U; V++) {
            let { keyframe: k, actionItems: K } = i[V];
            if ((V === 0 && (b = K[0]), S >= k)) {
              b = K[0];
              let P = i[V + 1],
                T = P && S !== k;
              (x = T ? P.actionItems[0] : null),
                T && ((N = k / 100), (C = (P.keyframe - k) / 100));
            }
          }
          let G = {};
          if (b && !x)
            for (let V = 0, { length: U } = o; V < U; V++) {
              let k = o[V];
              G[k] = ka(u, k, b.config);
            }
          else if (b && x && N !== void 0 && C !== void 0) {
            let V = (y - N) / C,
              U = b.config.easing,
              k = oE(U, V, f);
            for (let K = 0, { length: P } = o; K < P; K++) {
              let T = o[K],
                L = ka(u, T, b.config),
                j = (ka(u, T, x.config) - L) * k + L;
              G[T] = j;
            }
          }
          return (0, ut.merge)(e, { position: y, current: G });
        }),
        (wD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: f,
              destinationKeys: h,
              pluginDuration: g,
              instanceDelay: d,
              customEasingFn: E,
              skipMotion: A,
            } = e,
            _ = u.config.easing,
            { duration: O, delay: y } = u.config;
          g != null && (O = g),
            (y = d ?? y),
            a === ID ? (O = 0) : (o || A) && (O = y = 0);
          let { now: S } = t.payload;
          if (r && n) {
            let b = S - (i + y);
            if (s) {
              let V = S - i,
                U = O + y,
                k = oi(Math.min(Math.max(0, V / U), 1));
              e = (0, ut.set)(e, "verboseTimeElapsed", U * k);
            }
            if (b < 0) return e;
            let x = oi(Math.min(Math.max(0, b / O), 1)),
              N = oE(_, x, E),
              C = {},
              G = null;
            return (
              h.length &&
                (G = h.reduce((V, U) => {
                  let k = f[U],
                    K = parseFloat(n[U]) || 0,
                    T = (parseFloat(k) - K) * N + K;
                  return (V[U] = T), V;
                }, {})),
              (C.current = G),
              (C.position = x),
              x === 1 && ((C.active = !1), (C.complete = !0)),
              (0, ut.merge)(e, C)
            );
          }
          return e;
        }),
        (aE = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case vD:
              return t.payload.ixInstances || Object.freeze({});
            case ED:
              return Object.freeze({});
            case yD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: f,
                  isCarrier: h,
                  origin: g,
                  destination: d,
                  immediate: E,
                  verbose: A,
                  continuous: _,
                  parameterId: O,
                  actionGroups: y,
                  smoothing: S,
                  restingValue: b,
                  pluginInstance: x,
                  pluginDuration: N,
                  instanceDelay: C,
                  skipMotion: G,
                  skipToValue: V,
                } = t.payload,
                { actionTypeId: U } = i,
                k = OD(U),
                K = AD(k, U),
                P = Object.keys(d).filter(
                  (L) => d[L] != null && typeof d[L] != "string"
                ),
                { easing: T } = i.config;
              return (0, ut.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: g,
                destination: d,
                destinationKeys: P,
                immediate: E,
                verbose: A,
                current: null,
                actionItem: i,
                actionTypeId: U,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: f,
                renderType: k,
                isCarrier: h,
                styleProp: K,
                continuous: _,
                parameterId: O,
                actionGroups: y,
                smoothing: S,
                restingValue: b,
                pluginInstance: x,
                pluginDuration: N,
                instanceDelay: C,
                skipMotion: G,
                skipToValue: V,
                customEasingFn:
                  Array.isArray(T) && T.length === 4 ? bD(T) : void 0,
              });
            }
            case mD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, ut.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case _D: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case TD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? SD : wD;
                r = (0, ut.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var xD,
    CD,
    RD,
    uE,
    cE = se(() => {
      "use strict";
      Le();
      ({
        IX2_RAW_DATA_IMPORTED: xD,
        IX2_SESSION_STOPPED: CD,
        IX2_PARAMETER_CHANGED: RD,
      } = ge),
        (uE = (e = {}, t) => {
          switch (t.type) {
            case xD:
              return t.payload.ixParameters || {};
            case CD:
              return {};
            case RD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var dE = {};
  Re(dE, { default: () => LD });
  var lE,
    fE,
    ND,
    LD,
    pE = se(() => {
      "use strict";
      lE = ee(Bo());
      Of();
      Wf();
      Kf();
      fE = ee(Pt());
      sE();
      cE();
      ({ ixElements: ND } = fE.IX2ElementsReducer),
        (LD = (0, lE.combineReducers)({
          ixData: If,
          ixRequest: kf,
          ixSession: zf,
          ixElements: ND,
          ixInstances: aE,
          ixParameters: uE,
        }));
    });
  var hE = c((xW, gE) => {
    var PD = ht(),
      qD = Ee(),
      MD = ot(),
      FD = "[object String]";
    function DD(e) {
      return typeof e == "string" || (!qD(e) && MD(e) && PD(e) == FD);
    }
    gE.exports = DD;
  });
  var EE = c((CW, vE) => {
    var GD = ga(),
      VD = GD("length");
    vE.exports = VD;
  });
  var mE = c((RW, yE) => {
    var BD = "\\ud800-\\udfff",
      UD = "\\u0300-\\u036f",
      HD = "\\ufe20-\\ufe2f",
      XD = "\\u20d0-\\u20ff",
      kD = UD + HD + XD,
      WD = "\\ufe0e\\ufe0f",
      jD = "\\u200d",
      zD = RegExp("[" + jD + BD + kD + WD + "]");
    function KD(e) {
      return zD.test(e);
    }
    yE.exports = KD;
  });
  var xE = c((NW, wE) => {
    var TE = "\\ud800-\\udfff",
      YD = "\\u0300-\\u036f",
      $D = "\\ufe20-\\ufe2f",
      QD = "\\u20d0-\\u20ff",
      ZD = YD + $D + QD,
      JD = "\\ufe0e\\ufe0f",
      e1 = "[" + TE + "]",
      Wa = "[" + ZD + "]",
      ja = "\\ud83c[\\udffb-\\udfff]",
      t1 = "(?:" + Wa + "|" + ja + ")",
      bE = "[^" + TE + "]",
      IE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      OE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      r1 = "\\u200d",
      AE = t1 + "?",
      SE = "[" + JD + "]?",
      n1 = "(?:" + r1 + "(?:" + [bE, IE, OE].join("|") + ")" + SE + AE + ")*",
      i1 = SE + AE + n1,
      o1 = "(?:" + [bE + Wa + "?", Wa, IE, OE, e1].join("|") + ")",
      _E = RegExp(ja + "(?=" + ja + ")|" + o1 + i1, "g");
    function a1(e) {
      for (var t = (_E.lastIndex = 0); _E.test(e); ) ++t;
      return t;
    }
    wE.exports = a1;
  });
  var RE = c((LW, CE) => {
    var s1 = EE(),
      u1 = mE(),
      c1 = xE();
    function l1(e) {
      return u1(e) ? c1(e) : s1(e);
    }
    CE.exports = l1;
  });
  var LE = c((PW, NE) => {
    var f1 = Gn(),
      d1 = Vn(),
      p1 = xt(),
      g1 = hE(),
      h1 = RE(),
      v1 = "[object Map]",
      E1 = "[object Set]";
    function y1(e) {
      if (e == null) return 0;
      if (p1(e)) return g1(e) ? h1(e) : e.length;
      var t = d1(e);
      return t == v1 || t == E1 ? e.size : f1(e).length;
    }
    NE.exports = y1;
  });
  var qE = c((qW, PE) => {
    var m1 = "Expected a function";
    function _1(e) {
      if (typeof e != "function") throw new TypeError(m1);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    PE.exports = _1;
  });
  var za = c((MW, ME) => {
    var T1 = vt(),
      b1 = (function () {
        try {
          var e = T1(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    ME.exports = b1;
  });
  var Ka = c((FW, DE) => {
    var FE = za();
    function I1(e, t, r) {
      t == "__proto__" && FE
        ? FE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    DE.exports = I1;
  });
  var VE = c((DW, GE) => {
    var O1 = Ka(),
      A1 = xn(),
      S1 = Object.prototype,
      w1 = S1.hasOwnProperty;
    function x1(e, t, r) {
      var n = e[t];
      (!(w1.call(e, t) && A1(n, r)) || (r === void 0 && !(t in e))) &&
        O1(e, t, r);
    }
    GE.exports = x1;
  });
  var HE = c((GW, UE) => {
    var C1 = VE(),
      R1 = Gr(),
      N1 = qn(),
      BE = et(),
      L1 = Zt();
    function P1(e, t, r, n) {
      if (!BE(e)) return e;
      t = R1(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = L1(t[i]),
          f = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var h = s[u];
          (f = n ? n(h, u, s) : void 0),
            f === void 0 && (f = BE(h) ? h : N1(t[i + 1]) ? [] : {});
        }
        C1(s, u, f), (s = s[u]);
      }
      return e;
    }
    UE.exports = P1;
  });
  var kE = c((VW, XE) => {
    var q1 = Hn(),
      M1 = HE(),
      F1 = Gr();
    function D1(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = q1(e, a);
        r(s, a) && M1(o, F1(a, e), s);
      }
      return o;
    }
    XE.exports = D1;
  });
  var jE = c((BW, WE) => {
    var G1 = Ln(),
      V1 = wo(),
      B1 = Jo(),
      U1 = Zo(),
      H1 = Object.getOwnPropertySymbols,
      X1 = H1
        ? function (e) {
            for (var t = []; e; ) G1(t, B1(e)), (e = V1(e));
            return t;
          }
        : U1;
    WE.exports = X1;
  });
  var KE = c((UW, zE) => {
    function k1(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    zE.exports = k1;
  });
  var $E = c((HW, YE) => {
    var W1 = et(),
      j1 = Dn(),
      z1 = KE(),
      K1 = Object.prototype,
      Y1 = K1.hasOwnProperty;
    function $1(e) {
      if (!W1(e)) return z1(e);
      var t = j1(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !Y1.call(e, n))) || r.push(n);
      return r;
    }
    YE.exports = $1;
  });
  var ZE = c((XW, QE) => {
    var Q1 = ta(),
      Z1 = $E(),
      J1 = xt();
    function e2(e) {
      return J1(e) ? Q1(e, !0) : Z1(e);
    }
    QE.exports = e2;
  });
  var ey = c((kW, JE) => {
    var t2 = Qo(),
      r2 = jE(),
      n2 = ZE();
    function i2(e) {
      return t2(e, n2, r2);
    }
    JE.exports = i2;
  });
  var ry = c((WW, ty) => {
    var o2 = pa(),
      a2 = Et(),
      s2 = kE(),
      u2 = ey();
    function c2(e, t) {
      if (e == null) return {};
      var r = o2(u2(e), function (n) {
        return [n];
      });
      return (
        (t = a2(t)),
        s2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    ty.exports = c2;
  });
  var iy = c((jW, ny) => {
    var l2 = Et(),
      f2 = qE(),
      d2 = ry();
    function p2(e, t) {
      return d2(e, f2(l2(t)));
    }
    ny.exports = p2;
  });
  var ay = c((zW, oy) => {
    var g2 = Gn(),
      h2 = Vn(),
      v2 = Lr(),
      E2 = Ee(),
      y2 = xt(),
      m2 = Pn(),
      _2 = Dn(),
      T2 = Fn(),
      b2 = "[object Map]",
      I2 = "[object Set]",
      O2 = Object.prototype,
      A2 = O2.hasOwnProperty;
    function S2(e) {
      if (e == null) return !0;
      if (
        y2(e) &&
        (E2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          m2(e) ||
          T2(e) ||
          v2(e))
      )
        return !e.length;
      var t = h2(e);
      if (t == b2 || t == I2) return !e.size;
      if (_2(e)) return !g2(e).length;
      for (var r in e) if (A2.call(e, r)) return !1;
      return !0;
    }
    oy.exports = S2;
  });
  var uy = c((KW, sy) => {
    var w2 = Ka(),
      x2 = Ma(),
      C2 = Et();
    function R2(e, t) {
      var r = {};
      return (
        (t = C2(t, 3)),
        x2(e, function (n, i, o) {
          w2(r, i, t(n, i, o));
        }),
        r
      );
    }
    sy.exports = R2;
  });
  var ly = c((YW, cy) => {
    function N2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    cy.exports = N2;
  });
  var dy = c(($W, fy) => {
    var L2 = kn();
    function P2(e) {
      return typeof e == "function" ? e : L2;
    }
    fy.exports = P2;
  });
  var gy = c((QW, py) => {
    var q2 = ly(),
      M2 = Fa(),
      F2 = dy(),
      D2 = Ee();
    function G2(e, t) {
      var r = D2(e) ? q2 : M2;
      return r(e, F2(t));
    }
    py.exports = G2;
  });
  var vy = c((ZW, hy) => {
    var V2 = He(),
      B2 = function () {
        return V2.Date.now();
      };
    hy.exports = B2;
  });
  var my = c((JW, yy) => {
    var U2 = et(),
      Ya = vy(),
      Ey = Wn(),
      H2 = "Expected a function",
      X2 = Math.max,
      k2 = Math.min;
    function W2(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        f = 0,
        h = !1,
        g = !1,
        d = !0;
      if (typeof e != "function") throw new TypeError(H2);
      (t = Ey(t) || 0),
        U2(r) &&
          ((h = !!r.leading),
          (g = "maxWait" in r),
          (o = g ? X2(Ey(r.maxWait) || 0, t) : o),
          (d = "trailing" in r ? !!r.trailing : d));
      function E(C) {
        var G = n,
          V = i;
        return (n = i = void 0), (f = C), (a = e.apply(V, G)), a;
      }
      function A(C) {
        return (f = C), (s = setTimeout(y, t)), h ? E(C) : a;
      }
      function _(C) {
        var G = C - u,
          V = C - f,
          U = t - G;
        return g ? k2(U, o - V) : U;
      }
      function O(C) {
        var G = C - u,
          V = C - f;
        return u === void 0 || G >= t || G < 0 || (g && V >= o);
      }
      function y() {
        var C = Ya();
        if (O(C)) return S(C);
        s = setTimeout(y, _(C));
      }
      function S(C) {
        return (s = void 0), d && n ? E(C) : ((n = i = void 0), a);
      }
      function b() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = u = i = s = void 0);
      }
      function x() {
        return s === void 0 ? a : S(Ya());
      }
      function N() {
        var C = Ya(),
          G = O(C);
        if (((n = arguments), (i = this), (u = C), G)) {
          if (s === void 0) return A(u);
          if (g) return clearTimeout(s), (s = setTimeout(y, t)), E(u);
        }
        return s === void 0 && (s = setTimeout(y, t)), a;
      }
      return (N.cancel = b), (N.flush = x), N;
    }
    yy.exports = W2;
  });
  var Ty = c((ej, _y) => {
    var j2 = my(),
      z2 = et(),
      K2 = "Expected a function";
    function Y2(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(K2);
      return (
        z2(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        j2(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    _y.exports = Y2;
  });
  var Iy = {};
  Re(Iy, {
    actionListPlaybackChanged: () => lr,
    animationFrameChanged: () => ui,
    clearRequested: () => _G,
    elementStateChanged: () => ns,
    eventListenerAdded: () => si,
    eventStateChanged: () => es,
    instanceAdded: () => ts,
    instanceRemoved: () => rs,
    instanceStarted: () => ci,
    mediaQueriesDefined: () => os,
    parameterChanged: () => cr,
    playbackRequested: () => yG,
    previewRequested: () => EG,
    rawDataImported: () => $a,
    sessionInitialized: () => Qa,
    sessionStarted: () => Za,
    sessionStopped: () => Ja,
    stopRequested: () => mG,
    testFrameRendered: () => TG,
    viewportWidthChanged: () => is,
  });
  var by,
    $2,
    Q2,
    Z2,
    J2,
    eG,
    tG,
    rG,
    nG,
    iG,
    oG,
    aG,
    sG,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    gG,
    hG,
    vG,
    $a,
    Qa,
    Za,
    Ja,
    EG,
    yG,
    mG,
    _G,
    si,
    TG,
    es,
    ui,
    cr,
    ts,
    ci,
    rs,
    ns,
    lr,
    is,
    os,
    li = se(() => {
      "use strict";
      Le();
      (by = ee(Pt())),
        ({
          IX2_RAW_DATA_IMPORTED: $2,
          IX2_SESSION_INITIALIZED: Q2,
          IX2_SESSION_STARTED: Z2,
          IX2_SESSION_STOPPED: J2,
          IX2_PREVIEW_REQUESTED: eG,
          IX2_PLAYBACK_REQUESTED: tG,
          IX2_STOP_REQUESTED: rG,
          IX2_CLEAR_REQUESTED: nG,
          IX2_EVENT_LISTENER_ADDED: iG,
          IX2_TEST_FRAME_RENDERED: oG,
          IX2_EVENT_STATE_CHANGED: aG,
          IX2_ANIMATION_FRAME_CHANGED: sG,
          IX2_PARAMETER_CHANGED: uG,
          IX2_INSTANCE_ADDED: cG,
          IX2_INSTANCE_STARTED: lG,
          IX2_INSTANCE_REMOVED: fG,
          IX2_ELEMENT_STATE_CHANGED: dG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: pG,
          IX2_VIEWPORT_WIDTH_CHANGED: gG,
          IX2_MEDIA_QUERIES_DEFINED: hG,
        } = ge),
        ({ reifyState: vG } = by.IX2VanillaUtils),
        ($a = (e) => ({ type: $2, payload: { ...vG(e) } })),
        (Qa = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: Q2,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Za = () => ({ type: Z2 })),
        (Ja = () => ({ type: J2 })),
        (EG = ({ rawData: e, defer: t }) => ({
          type: eG,
          payload: { defer: t, rawData: e },
        })),
        (yG = ({
          actionTypeId: e = Ne.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: tG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (mG = (e) => ({ type: rG, payload: { actionListId: e } })),
        (_G = () => ({ type: nG })),
        (si = (e, t) => ({
          type: iG,
          payload: { target: e, listenerParams: t },
        })),
        (TG = (e = 1) => ({ type: oG, payload: { step: e } })),
        (es = (e, t) => ({ type: aG, payload: { stateKey: e, newState: t } })),
        (ui = (e, t) => ({ type: sG, payload: { now: e, parameters: t } })),
        (cr = (e, t) => ({ type: uG, payload: { key: e, value: t } })),
        (ts = (e) => ({ type: cG, payload: { ...e } })),
        (ci = (e, t) => ({ type: lG, payload: { instanceId: e, time: t } })),
        (rs = (e) => ({ type: fG, payload: { instanceId: e } })),
        (ns = (e, t, r, n) => ({
          type: dG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (lr = ({ actionListId: e, isPlaying: t }) => ({
          type: pG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (is = ({ width: e, mediaQueries: t }) => ({
          type: gG,
          payload: { width: e, mediaQueries: t },
        })),
        (os = () => ({ type: hG }));
    });
  var xe = {};
  Re(xe, {
    elementContains: () => us,
    getChildElements: () => NG,
    getClosestElement: () => Yr,
    getProperty: () => SG,
    getQuerySelector: () => ss,
    getRefType: () => cs,
    getSiblingElements: () => LG,
    getStyle: () => AG,
    getValidDocument: () => xG,
    isSiblingNode: () => RG,
    matchSelector: () => wG,
    queryDocument: () => CG,
    setStyle: () => OG,
  });
  function OG(e, t, r) {
    e.style[t] = r;
  }
  function AG(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function SG(e, t) {
    return e[t];
  }
  function wG(e) {
    return (t) => t[as](e);
  }
  function ss({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Oy) !== -1) {
        let n = e.split(Oy),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Sy)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function xG(e) {
    return e == null || e === document.documentElement.getAttribute(Sy)
      ? document
      : null;
  }
  function CG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function us(e, t) {
    return e.contains(t);
  }
  function RG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function NG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function LG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function cs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? bG
        : IG
      : null;
  }
  var Ay,
    as,
    Oy,
    bG,
    IG,
    Sy,
    Yr,
    wy = se(() => {
      "use strict";
      Ay = ee(Pt());
      Le();
      ({ ELEMENT_MATCHES: as } = Ay.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Oy,
          HTML_ELEMENT: bG,
          PLAIN_OBJECT: IG,
          WF_PAGE: Sy,
        } = Ie);
      Yr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[as] && r[as](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var ls = c((nj, Cy) => {
    var PG = et(),
      xy = Object.create,
      qG = (function () {
        function e() {}
        return function (t) {
          if (!PG(t)) return {};
          if (xy) return xy(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Cy.exports = qG;
  });
  var fi = c((ij, Ry) => {
    function MG() {}
    Ry.exports = MG;
  });
  var pi = c((oj, Ny) => {
    var FG = ls(),
      DG = fi();
    function di(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    di.prototype = FG(DG.prototype);
    di.prototype.constructor = di;
    Ny.exports = di;
  });
  var My = c((aj, qy) => {
    var Ly = Ut(),
      GG = Lr(),
      VG = Ee(),
      Py = Ly ? Ly.isConcatSpreadable : void 0;
    function BG(e) {
      return VG(e) || GG(e) || !!(Py && e && e[Py]);
    }
    qy.exports = BG;
  });
  var Gy = c((sj, Dy) => {
    var UG = Ln(),
      HG = My();
    function Fy(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = HG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? Fy(s, t - 1, r, n, i)
            : UG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    Dy.exports = Fy;
  });
  var By = c((uj, Vy) => {
    var XG = Gy();
    function kG(e) {
      var t = e == null ? 0 : e.length;
      return t ? XG(e, 1) : [];
    }
    Vy.exports = kG;
  });
  var Hy = c((cj, Uy) => {
    function WG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Uy.exports = WG;
  });
  var Wy = c((lj, ky) => {
    var jG = Hy(),
      Xy = Math.max;
    function zG(e, t, r) {
      return (
        (t = Xy(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Xy(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), jG(e, this, s);
        }
      );
    }
    ky.exports = zG;
  });
  var zy = c((fj, jy) => {
    function KG(e) {
      return function () {
        return e;
      };
    }
    jy.exports = KG;
  });
  var $y = c((dj, Yy) => {
    var YG = zy(),
      Ky = za(),
      $G = kn(),
      QG = Ky
        ? function (e, t) {
            return Ky(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: YG(t),
              writable: !0,
            });
          }
        : $G;
    Yy.exports = QG;
  });
  var Zy = c((pj, Qy) => {
    var ZG = 800,
      JG = 16,
      eV = Date.now;
    function tV(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = eV(),
          i = JG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= ZG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Qy.exports = tV;
  });
  var em = c((gj, Jy) => {
    var rV = $y(),
      nV = Zy(),
      iV = nV(rV);
    Jy.exports = iV;
  });
  var rm = c((hj, tm) => {
    var oV = By(),
      aV = Wy(),
      sV = em();
    function uV(e) {
      return sV(aV(e, void 0, oV), e + "");
    }
    tm.exports = uV;
  });
  var om = c((vj, im) => {
    var nm = ra(),
      cV = nm && new nm();
    im.exports = cV;
  });
  var sm = c((Ej, am) => {
    function lV() {}
    am.exports = lV;
  });
  var fs = c((yj, cm) => {
    var um = om(),
      fV = sm(),
      dV = um
        ? function (e) {
            return um.get(e);
          }
        : fV;
    cm.exports = dV;
  });
  var fm = c((mj, lm) => {
    var pV = {};
    lm.exports = pV;
  });
  var ds = c((_j, pm) => {
    var dm = fm(),
      gV = Object.prototype,
      hV = gV.hasOwnProperty;
    function vV(e) {
      for (
        var t = e.name + "", r = dm[t], n = hV.call(dm, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    pm.exports = vV;
  });
  var hi = c((Tj, gm) => {
    var EV = ls(),
      yV = fi(),
      mV = 4294967295;
    function gi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = mV),
        (this.__views__ = []);
    }
    gi.prototype = EV(yV.prototype);
    gi.prototype.constructor = gi;
    gm.exports = gi;
  });
  var vm = c((bj, hm) => {
    function _V(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    hm.exports = _V;
  });
  var ym = c((Ij, Em) => {
    var TV = hi(),
      bV = pi(),
      IV = vm();
    function OV(e) {
      if (e instanceof TV) return e.clone();
      var t = new bV(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = IV(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    Em.exports = OV;
  });
  var Tm = c((Oj, _m) => {
    var AV = hi(),
      mm = pi(),
      SV = fi(),
      wV = Ee(),
      xV = ot(),
      CV = ym(),
      RV = Object.prototype,
      NV = RV.hasOwnProperty;
    function vi(e) {
      if (xV(e) && !wV(e) && !(e instanceof AV)) {
        if (e instanceof mm) return e;
        if (NV.call(e, "__wrapped__")) return CV(e);
      }
      return new mm(e);
    }
    vi.prototype = SV.prototype;
    vi.prototype.constructor = vi;
    _m.exports = vi;
  });
  var Im = c((Aj, bm) => {
    var LV = hi(),
      PV = fs(),
      qV = ds(),
      MV = Tm();
    function FV(e) {
      var t = qV(e),
        r = MV[t];
      if (typeof r != "function" || !(t in LV.prototype)) return !1;
      if (e === r) return !0;
      var n = PV(r);
      return !!n && e === n[0];
    }
    bm.exports = FV;
  });
  var wm = c((Sj, Sm) => {
    var Om = pi(),
      DV = rm(),
      GV = fs(),
      ps = ds(),
      VV = Ee(),
      Am = Im(),
      BV = "Expected a function",
      UV = 8,
      HV = 32,
      XV = 128,
      kV = 256;
    function WV(e) {
      return DV(function (t) {
        var r = t.length,
          n = r,
          i = Om.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(BV);
          if (i && !a && ps(o) == "wrapper") var a = new Om([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = ps(o),
            u = s == "wrapper" ? GV(o) : void 0;
          u &&
          Am(u[0]) &&
          u[1] == (XV | UV | HV | kV) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[ps(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && Am(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            h = f[0];
          if (a && f.length == 1 && VV(h)) return a.plant(h).value();
          for (var g = 0, d = r ? t[g].apply(this, f) : h; ++g < r; )
            d = t[g].call(this, d);
          return d;
        };
      });
    }
    Sm.exports = WV;
  });
  var Cm = c((wj, xm) => {
    var jV = wm(),
      zV = jV();
    xm.exports = zV;
  });
  var Nm = c((xj, Rm) => {
    function KV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Rm.exports = KV;
  });
  var Pm = c((Cj, Lm) => {
    var YV = Nm(),
      gs = Wn();
    function $V(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = gs(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = gs(t)), (t = t === t ? t : 0)),
        YV(gs(e), t, r)
      );
    }
    Lm.exports = $V;
  });
  var Hm,
    Xm,
    km,
    Wm,
    QV,
    ZV,
    JV,
    eB,
    tB,
    rB,
    nB,
    iB,
    oB,
    aB,
    sB,
    uB,
    cB,
    lB,
    fB,
    jm,
    zm,
    dB,
    pB,
    gB,
    Km,
    hB,
    vB,
    Ym,
    EB,
    hs,
    $m,
    qm,
    Mm,
    Qm,
    Qr,
    yB,
    nt,
    Zm,
    mB,
    qe,
    We,
    Zr,
    Jm,
    vs,
    Fm,
    Es,
    _B,
    $r,
    TB,
    bB,
    IB,
    e_,
    Dm,
    OB,
    Gm,
    AB,
    SB,
    wB,
    Vm,
    Ei,
    yi,
    Bm,
    Um,
    t_,
    r_ = se(() => {
      "use strict";
      (Hm = ee(Cm())), (Xm = ee(Xn())), (km = ee(Pm()));
      Le();
      ys();
      li();
      (Wm = ee(Pt())),
        ({
          MOUSE_CLICK: QV,
          MOUSE_SECOND_CLICK: ZV,
          MOUSE_DOWN: JV,
          MOUSE_UP: eB,
          MOUSE_OVER: tB,
          MOUSE_OUT: rB,
          DROPDOWN_CLOSE: nB,
          DROPDOWN_OPEN: iB,
          SLIDER_ACTIVE: oB,
          SLIDER_INACTIVE: aB,
          TAB_ACTIVE: sB,
          TAB_INACTIVE: uB,
          NAVBAR_CLOSE: cB,
          NAVBAR_OPEN: lB,
          MOUSE_MOVE: fB,
          PAGE_SCROLL_DOWN: jm,
          SCROLL_INTO_VIEW: zm,
          SCROLL_OUT_OF_VIEW: dB,
          PAGE_SCROLL_UP: pB,
          SCROLLING_IN_VIEW: gB,
          PAGE_FINISH: Km,
          ECOMMERCE_CART_CLOSE: hB,
          ECOMMERCE_CART_OPEN: vB,
          PAGE_START: Ym,
          PAGE_SCROLL: EB,
        } = Xe),
        (hs = "COMPONENT_ACTIVE"),
        ($m = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: qm } = Ie),
        ({ getNamespacedParameterId: Mm } = Wm.IX2VanillaUtils),
        (Qm = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Qr = Qm(({ element: e, nativeEvent: t }) => e === t.target)),
        (yB = Qm(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (nt = (0, Hm.default)([Qr, yB])),
        (Zm = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !_B[i.eventTypeId]) return i;
          }
          return null;
        }),
        (mB = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!Zm(e, n);
        }),
        (qe = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            f = Zm(e, u);
          return (
            f &&
              fr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + qm + n.split(qm)[1],
                actionListId: (0, Xm.default)(f, "action.config.actionListId"),
              }),
            fr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            Jr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (We = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Zr = { handler: We(nt, qe) }),
        (Jm = { ...Zr, types: [hs, $m].join(" ") }),
        (vs = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Fm = "mouseover mouseout"),
        (Es = { types: vs }),
        (_B = { PAGE_START: Ym, PAGE_FINISH: Km }),
        ($r = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, km.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (TB = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (bB = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (IB = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = $r(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return TB(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (e_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [hs, $m].indexOf(n) !== -1 ? n === hs : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Dm = (e) => (t, r) => {
          let n = { elementHovered: bB(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (OB = (e) => (t, r) => {
          let n = { ...r, elementVisible: IB(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Gm =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = $r(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: f } = a,
              h = f === "PX",
              g = i - o,
              d = Number((n / g).toFixed(2));
            if (r && r.percentTop === d) return r;
            let E = (h ? u : (o * (u || 0)) / 100) / g,
              A,
              _,
              O = 0;
            r &&
              ((A = d > r.percentTop),
              (_ = r.scrollingDown !== A),
              (O = _ ? d : r.anchorTop));
            let y = s === jm ? d >= O + E : d <= O - E,
              S = {
                ...r,
                percentTop: d,
                inBounds: y,
                anchorTop: O,
                scrollingDown: A,
              };
            return (r && y && (_ || S.inBounds !== r.inBounds) && e(t, S)) || S;
          }),
        (AB = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (SB = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (wB = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Vm =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (Ei = (e = !0) => ({
          ...Jm,
          handler: We(
            e ? nt : Qr,
            e_((t, r) => (r.isActive ? Zr.handler(t, r) : r))
          ),
        })),
        (yi = (e = !0) => ({
          ...Jm,
          handler: We(
            e ? nt : Qr,
            e_((t, r) => (r.isActive ? r : Zr.handler(t, r)))
          ),
        })),
        (Bm = {
          ...Es,
          handler: OB((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === zm) === r
              ? (qe(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Um = 0.05),
        (t_ = {
          [oB]: Ei(),
          [aB]: yi(),
          [iB]: Ei(),
          [nB]: yi(),
          [lB]: Ei(!1),
          [cB]: yi(!1),
          [sB]: Ei(),
          [uB]: yi(),
          [vB]: { types: "ecommerce-cart-open", handler: We(nt, qe) },
          [hB]: { types: "ecommerce-cart-close", handler: We(nt, qe) },
          [QV]: {
            types: "click",
            handler: We(
              nt,
              Vm((e, { clickCount: t }) => {
                mB(e) ? t === 1 && qe(e) : qe(e);
              })
            ),
          },
          [ZV]: {
            types: "click",
            handler: We(
              nt,
              Vm((e, { clickCount: t }) => {
                t === 2 && qe(e);
              })
            ),
          },
          [JV]: { ...Zr, types: "mousedown" },
          [eB]: { ...Zr, types: "mouseup" },
          [tB]: {
            types: Fm,
            handler: We(
              nt,
              Dm((e, t) => {
                t.elementHovered && qe(e);
              })
            ),
          },
          [rB]: {
            types: Fm,
            handler: We(
              nt,
              Dm((e, t) => {
                t.elementHovered || qe(e);
              })
            ),
          },
          [fB]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: f,
                  restingState: h = 0,
                } = r,
                {
                  clientX: g = o.clientX,
                  clientY: d = o.clientY,
                  pageX: E = o.pageX,
                  pageY: A = o.pageY,
                } = n,
                _ = s === "X_AXIS",
                O = n.type === "mouseout",
                y = h / 100,
                S = u,
                b = !1;
              switch (a) {
                case Je.VIEWPORT: {
                  y = _
                    ? Math.min(g, window.innerWidth) / window.innerWidth
                    : Math.min(d, window.innerHeight) / window.innerHeight;
                  break;
                }
                case Je.PAGE: {
                  let {
                    scrollLeft: x,
                    scrollTop: N,
                    scrollWidth: C,
                    scrollHeight: G,
                  } = $r();
                  y = _ ? Math.min(x + E, C) / C : Math.min(N + A, G) / G;
                  break;
                }
                case Je.ELEMENT:
                default: {
                  S = Mm(i, u);
                  let x = n.type.indexOf("mouse") === 0;
                  if (x && nt({ element: t, nativeEvent: n }) !== !0) break;
                  let N = t.getBoundingClientRect(),
                    { left: C, top: G, width: V, height: U } = N;
                  if (!x && !AB({ left: g, top: d }, N)) break;
                  (b = !0), (y = _ ? (g - C) / V : (d - G) / U);
                  break;
                }
              }
              return (
                O && (y > 1 - Um || y < Um) && (y = Math.round(y)),
                (a !== Je.ELEMENT || b || b !== o.elementHovered) &&
                  ((y = f ? 1 - y : y), e.dispatch(cr(S, y))),
                {
                  elementHovered: b,
                  clientX: g,
                  clientY: d,
                  pageX: E,
                  pageY: A,
                }
              );
            },
          },
          [EB]: {
            types: vs,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = $r(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(cr(r, s));
            },
          },
          [gB]: {
            types: vs,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: f,
                } = $r(),
                {
                  basedOn: h,
                  selectedAxis: g,
                  continuousParameterGroupId: d,
                  startsEntering: E,
                  startsExiting: A,
                  addEndOffset: _,
                  addStartOffset: O,
                  addOffsetValue: y = 0,
                  endOffsetValue: S = 0,
                } = r,
                b = g === "X_AXIS";
              if (h === Je.VIEWPORT) {
                let x = b ? o / s : a / u;
                return (
                  x !== i.scrollPercent && t.dispatch(cr(d, x)),
                  { scrollPercent: x }
                );
              } else {
                let x = Mm(n, d),
                  N = e.getBoundingClientRect(),
                  C = (O ? y : 0) / 100,
                  G = (_ ? S : 0) / 100;
                (C = E ? C : 1 - C), (G = A ? G : 1 - G);
                let V = N.top + Math.min(N.height * C, f),
                  k = N.top + N.height * G - V,
                  K = Math.min(f + k, u),
                  T = Math.min(Math.max(0, f - V), K) / K;
                return (
                  T !== i.scrollPercent && t.dispatch(cr(x, T)),
                  { scrollPercent: T }
                );
              }
            },
          },
          [zm]: Bm,
          [dB]: Bm,
          [jm]: {
            ...Es,
            handler: Gm((e, t) => {
              t.scrollingDown && qe(e);
            }),
          },
          [pB]: {
            ...Es,
            handler: Gm((e, t) => {
              t.scrollingDown || qe(e);
            }),
          },
          [Km]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: We(Qr, SB(qe)),
          },
          [Ym]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: We(Qr, wB(qe)),
          },
        });
    });
  var m_ = {};
  Re(m_, {
    observeRequests: () => zB,
    startActionGroup: () => Jr,
    startEngine: () => Oi,
    stopActionGroup: () => fr,
    stopAllActionGroups: () => v_,
    stopEngine: () => Ai,
  });
  function zB(e) {
    qt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: $B }),
      qt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: QB }),
      qt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: ZB }),
      qt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: JB });
  }
  function KB(e) {
    qt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Ai(e),
          d_({ store: e, elementApi: xe }),
          Oi({ store: e, allowEvents: !0 }),
          p_();
      },
    });
  }
  function YB(e, t) {
    let r = qt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function $B({ rawData: e, defer: t }, r) {
    let n = () => {
      Oi({ store: r, rawData: e, allowEvents: !0 }), p_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function p_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function QB(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: f = !0,
      } = e,
      { rawData: h } = e;
    if (n && i && h && s) {
      let g = h.actionLists[n];
      g && (h = FB({ actionList: g, actionItemId: i, rawData: h }));
    }
    if (
      (Oi({ store: t, rawData: h, allowEvents: a, testManual: u }),
      (n && r === Ne.GENERAL_START_ACTION) || ms(r))
    ) {
      fr({ store: t, actionListId: n }),
        h_({ store: t, actionListId: n, eventId: o });
      let g = Jr({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && g && t.dispatch(lr({ actionListId: n, isPlaying: !s }));
    }
  }
  function ZB({ actionListId: e }, t) {
    e ? fr({ store: t, actionListId: e }) : v_({ store: t }), Ai(t);
  }
  function JB(e, t) {
    Ai(t), d_({ store: t, elementApi: xe });
  }
  function Oi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch($a(t)),
      i.active ||
        (e.dispatch(
          Qa({
            hasBoundaryNodes: !!document.querySelector(_i),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (o5(e), e5(), e.getState().ixSession.hasDefinedMediaQueries && KB(e)),
        e.dispatch(Za()),
        t5(e, n));
  }
  function e5() {
    let { documentElement: e } = document;
    e.className.indexOf(n_) === -1 && (e.className += ` ${n_}`);
  }
  function t5(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(ui(n, o)), t ? YB(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Ai(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(r5), BB(), e.dispatch(Ja());
    }
  }
  function r5({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function n5({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: f, ixSession: h } = e.getState(),
      { events: g } = f,
      d = g[n],
      { eventTypeId: E } = d,
      A = {},
      _ = {},
      O = [],
      { continuousActionGroups: y } = a,
      { id: S } = a;
    DB(E, i) && (S = GB(t, S));
    let b = h.hasBoundaryNodes && r ? Yr(r, _i) : null;
    y.forEach((x) => {
      let { keyframe: N, actionItems: C } = x;
      C.forEach((G) => {
        let { actionTypeId: V } = G,
          { target: U } = G.config;
        if (!U) return;
        let k = U.boundaryMode ? b : null,
          K = UB(U) + _s + V;
        if (((_[K] = i5(_[K], N, G)), !A[K])) {
          A[K] = !0;
          let { config: P } = G;
          Ti({
            config: P,
            event: d,
            eventTarget: r,
            elementRoot: k,
            elementApi: xe,
          }).forEach((T) => {
            O.push({ element: T, key: K });
          });
        }
      });
    }),
      O.forEach(({ element: x, key: N }) => {
        let C = _[N],
          G = (0, ct.default)(C, "[0].actionItems[0]", {}),
          { actionTypeId: V } = G,
          U = Ii(V) ? bs(V)(x, G) : null,
          k = Ts({ element: x, actionItem: G, elementApi: xe }, U);
        Is({
          store: e,
          element: x,
          eventId: n,
          actionListId: o,
          actionItem: G,
          destination: k,
          continuous: !0,
          parameterId: S,
          actionGroups: C,
          smoothing: s,
          restingValue: u,
          pluginInstance: U,
        });
      });
  }
  function i5(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function o5(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    g_(e),
      (0, dr.default)(r, (i, o) => {
        let a = t_[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        f5({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && s5(e);
  }
  function s5(e) {
    let t = () => {
      g_(e);
    };
    a5.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(si(window, [r, t]));
    }),
      t();
  }
  function g_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(is({ width: n, mediaQueries: i }));
    }
  }
  function f5({ logic: e, store: t, events: r }) {
    d5(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = u5(r, l5);
    if (!(0, a_.default)(s)) return;
    (0, dr.default)(s, (g, d) => {
      let E = r[d],
        { action: A, id: _, mediaQueries: O = o.mediaQueryKeys } = E,
        { actionListId: y } = A.config;
      HB(O, o.mediaQueryKeys) || t.dispatch(os()),
        A.actionTypeId === Ne.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(E.config) ? E.config : [E.config]).forEach((b) => {
            let { continuousParameterGroupId: x } = b,
              N = (0, ct.default)(a, `${y}.continuousParameterGroups`, []),
              C = (0, o_.default)(N, ({ id: U }) => U === x),
              G = (b.smoothing || 0) / 100,
              V = (b.restingState || 0) / 100;
            C &&
              g.forEach((U, k) => {
                let K = _ + _s + k;
                n5({
                  store: t,
                  eventStateKey: K,
                  eventTarget: U,
                  eventId: _,
                  eventConfig: b,
                  actionListId: y,
                  parameterGroup: C,
                  smoothing: G,
                  restingValue: V,
                });
              });
          }),
        (A.actionTypeId === Ne.GENERAL_START_ACTION || ms(A.actionTypeId)) &&
          h_({ store: t, actionListId: y, eventId: _ });
    });
    let u = (g) => {
        let { ixSession: d } = t.getState();
        c5(s, (E, A, _) => {
          let O = r[A],
            y = d.eventState[_],
            { action: S, mediaQueries: b = o.mediaQueryKeys } = O;
          if (!bi(b, d.mediaQueryKey)) return;
          let x = (N = {}) => {
            let C = i(
              {
                store: t,
                element: E,
                event: O,
                eventConfig: N,
                nativeEvent: g,
                eventStateKey: _,
              },
              y
            );
            XB(C, y) || t.dispatch(es(_, C));
          };
          S.actionTypeId === Ne.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(O.config) ? O.config : [O.config]).forEach(x)
            : x();
        });
      },
      f = (0, l_.default)(u, jB),
      h = ({ target: g = document, types: d, throttle: E }) => {
        d.split(" ")
          .filter(Boolean)
          .forEach((A) => {
            let _ = E ? f : u;
            g.addEventListener(A, _), t.dispatch(si(g, [A, _]));
          });
      };
    Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e);
  }
  function d5(e) {
    if (!WB) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = ss(o);
      t[a] ||
        ((i === Xe.MOUSE_CLICK || i === Xe.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function h_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let f = (0, ct.default)(u, "actionItemGroups[0].actionItems", []),
        h = (0, ct.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!bi(h, i.mediaQueryKey)) return;
      f.forEach((g) => {
        let { config: d, actionTypeId: E } = g,
          A =
            d?.target?.useEventTarget === !0 && d?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : d,
          _ = Ti({ config: A, event: s, elementApi: xe }),
          O = Ii(E);
        _.forEach((y) => {
          let S = O ? bs(E)(y, g) : null;
          Is({
            destination: Ts({ element: y, actionItem: g, elementApi: xe }, S),
            immediate: !0,
            store: e,
            element: y,
            eventId: r,
            actionItem: g,
            actionListId: t,
            pluginInstance: S,
          });
        });
      });
    }
  }
  function v_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, dr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Os(r, e), i && e.dispatch(lr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function fr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Yr(r, _i) : null;
    (0, dr.default)(o, (u) => {
      let f = (0, ct.default)(u, "actionItem.config.target.boundaryMode"),
        h = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && h) {
        if (s && f && !us(s, u.element)) return;
        Os(u, e),
          u.verbose && e.dispatch(lr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function Jr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: f } = e.getState(),
      { events: h } = u,
      g = h[t] || {},
      { mediaQueries: d = u.mediaQueryKeys } = g,
      E = (0, ct.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: A, useFirstGroupAsInitialState: _ } = E;
    if (!A || !A.length) return !1;
    o >= A.length && (0, ct.default)(g, "config.loop") && (o = 0),
      o === 0 && _ && o++;
    let y =
        (o === 0 || (o === 1 && _)) && ms(g.action?.actionTypeId)
          ? g.config.delay
          : void 0,
      S = (0, ct.default)(A, [o, "actionItems"], []);
    if (!S.length || !bi(d, f.mediaQueryKey)) return !1;
    let b = f.hasBoundaryNodes && r ? Yr(r, _i) : null,
      x = PB(S),
      N = !1;
    return (
      S.forEach((C, G) => {
        let { config: V, actionTypeId: U } = C,
          k = Ii(U),
          { target: K } = V;
        if (!K) return;
        let P = K.boundaryMode ? b : null;
        Ti({
          config: V,
          event: g,
          eventTarget: r,
          elementRoot: P,
          elementApi: xe,
        }).forEach((L, B) => {
          let F = k ? bs(U)(L, C) : null,
            j = k ? kB(U)(L, C) : null;
          N = !0;
          let z = x === G && B === 0,
            te = qB({ element: L, actionItem: C }),
            be = Ts({ element: L, actionItem: C, elementApi: xe }, F);
          Is({
            store: e,
            element: L,
            actionItem: C,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: z,
            computedStyle: te,
            destination: be,
            immediate: a,
            verbose: s,
            pluginInstance: F,
            pluginDuration: j,
            instanceDelay: y,
          });
        });
      }),
      N
    );
  }
  function Is(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: f,
        eventId: h,
      } = n,
      g = !u,
      d = NB(),
      { ixElements: E, ixSession: A, ixData: _ } = t.getState(),
      O = RB(E, i),
      { refState: y } = E[O] || {},
      S = cs(i),
      b = A.reducedMotion && Xo[o.actionTypeId],
      x;
    if (b && u)
      switch (_.events[h]?.eventTypeId) {
        case Xe.MOUSE_MOVE:
        case Xe.MOUSE_MOVE_IN_VIEWPORT:
          x = f;
          break;
        default:
          x = 0.5;
          break;
      }
    let N = MB(i, y, r, o, xe, s);
    if (
      (t.dispatch(
        ts({
          instanceId: d,
          elementId: O,
          origin: N,
          refType: S,
          skipMotion: b,
          skipToValue: x,
          ...n,
        })
      ),
      E_(document.body, "ix2-animation-started", d),
      a)
    ) {
      p5(t, d);
      return;
    }
    qt({ store: t, select: ({ ixInstances: C }) => C[d], onChange: y_ }),
      g && t.dispatch(ci(d, A.tick));
  }
  function Os(e, t) {
    E_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === f_ && VB(o, n, xe), t.dispatch(rs(e.id));
  }
  function E_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function p5(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(ci(t, 0)), e.dispatch(ui(performance.now(), r));
    let { ixInstances: n } = e.getState();
    y_(n[t], e);
  }
  function y_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: f,
        groupIndex: h,
        eventId: g,
        eventTarget: d,
        eventStateKey: E,
        actionListId: A,
        isCarrier: _,
        styleProp: O,
        verbose: y,
        pluginInstance: S,
      } = e,
      { ixData: b, ixSession: x } = t.getState(),
      { events: N } = b,
      C = N[g] || {},
      { mediaQueries: G = b.mediaQueryKeys } = C;
    if (bi(G, x.mediaQueryKey) && (n || r || i)) {
      if (f || (u === CB && i)) {
        t.dispatch(ns(o, s, f, a));
        let { ixElements: V } = t.getState(),
          { ref: U, refType: k, refState: K } = V[o] || {},
          P = K && K[s];
        (k === f_ || Ii(s)) && LB(U, K, P, g, a, O, xe, u, S);
      }
      if (i) {
        if (_) {
          let V = Jr({
            store: t,
            eventId: g,
            eventTarget: d,
            eventStateKey: E,
            actionListId: A,
            groupIndex: h + 1,
            verbose: y,
          });
          y && !V && t.dispatch(lr({ actionListId: A, isPlaying: !1 }));
        }
        Os(e, t);
      }
    }
  }
  var o_,
    ct,
    a_,
    s_,
    u_,
    c_,
    dr,
    l_,
    mi,
    xB,
    ms,
    _s,
    _i,
    f_,
    CB,
    n_,
    Ti,
    RB,
    Ts,
    qt,
    NB,
    LB,
    d_,
    PB,
    qB,
    MB,
    FB,
    DB,
    GB,
    bi,
    VB,
    BB,
    UB,
    HB,
    XB,
    Ii,
    bs,
    kB,
    i_,
    WB,
    jB,
    a5,
    u5,
    c5,
    l5,
    ys = se(() => {
      "use strict";
      (o_ = ee(ya())),
        (ct = ee(Xn())),
        (a_ = ee(LE())),
        (s_ = ee(iy())),
        (u_ = ee(ay())),
        (c_ = ee(uy())),
        (dr = ee(gy())),
        (l_ = ee(Ty()));
      Le();
      mi = ee(Pt());
      li();
      wy();
      r_();
      (xB = Object.keys(Tn)),
        (ms = (e) => xB.includes(e)),
        ({
          COLON_DELIMITER: _s,
          BOUNDARY_SELECTOR: _i,
          HTML_ELEMENT: f_,
          RENDER_GENERAL: CB,
          W_MOD_IX: n_,
        } = Ie),
        ({
          getAffectedElements: Ti,
          getElementId: RB,
          getDestinationValues: Ts,
          observeStore: qt,
          getInstanceId: NB,
          renderHTMLElement: LB,
          clearAllStyles: d_,
          getMaxDurationItemIndex: PB,
          getComputedStyle: qB,
          getInstanceOrigin: MB,
          reduceListToGroup: FB,
          shouldNamespaceEventParameter: DB,
          getNamespacedParameterId: GB,
          shouldAllowMediaQuery: bi,
          cleanupHTMLElement: VB,
          clearObjectCache: BB,
          stringifyTarget: UB,
          mediaQueriesEqual: HB,
          shallowEqual: XB,
        } = mi.IX2VanillaUtils),
        ({
          isPluginType: Ii,
          createPluginInstance: bs,
          getPluginDuration: kB,
        } = mi.IX2VanillaPlugins),
        (i_ = navigator.userAgent),
        (WB = i_.match(/iPad/i) || i_.match(/iPhone/)),
        (jB = 12);
      a5 = ["resize", "orientationchange"];
      (u5 = (e, t) => (0, s_.default)((0, c_.default)(e, t), u_.default)),
        (c5 = (e, t) => {
          (0, dr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + _s + o;
              t(i, n, a);
            });
          });
        }),
        (l5 = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Ti({ config: t, elementApi: xe });
        });
    });
  var T_ = c((lt) => {
    "use strict";
    var g5 = un().default,
      h5 = ru().default;
    Object.defineProperty(lt, "__esModule", { value: !0 });
    lt.actions = void 0;
    lt.destroy = __;
    lt.init = _5;
    lt.setEnv = m5;
    lt.store = void 0;
    Ul();
    var v5 = Bo(),
      E5 = h5((pE(), Ke(dE))),
      As = (ys(), Ke(m_)),
      y5 = g5((li(), Ke(Iy)));
    lt.actions = y5;
    var Ss = (lt.store = (0, v5.createStore)(E5.default));
    function m5(e) {
      e() && (0, As.observeRequests)(Ss);
    }
    function _5(e) {
      __(), (0, As.startEngine)({ store: Ss, rawData: e, allowEvents: !0 });
    }
    function __() {
      (0, As.stopEngine)(Ss);
    }
  });
  var A_ = c((Gj, O_) => {
    "use strict";
    var b_ = $e(),
      I_ = T_();
    I_.setEnv(b_.env);
    b_.define(
      "ix2",
      (O_.exports = function () {
        return I_;
      })
    );
  });
  var w_ = c((Vj, S_) => {
    "use strict";
    var pr = $e();
    pr.define(
      "links",
      (S_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = pr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          f = /index\.(html|php)$/,
          h = /\/$/,
          g,
          d;
        r.ready = r.design = r.preview = E;
        function E() {
          (i = o && pr.env("design")),
            (d = pr.env("slug") || a.pathname || ""),
            pr.scroll.off(_),
            (g = []);
          for (var y = document.links, S = 0; S < y.length; ++S) A(y[S]);
          g.length && (pr.scroll.on(_), _());
        }
        function A(y) {
          if (!y.getAttribute("hreflang")) {
            var S =
              (i && y.getAttribute("href-disabled")) || y.getAttribute("href");
            if (((s.href = S), !(S.indexOf(":") >= 0))) {
              var b = e(y);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var x = e(s.hash);
                x.length && g.push({ link: b, sec: x, active: !1 });
                return;
              }
              if (!(S === "#" || S === "")) {
                var N =
                  s.href === a.href || S === d || (f.test(S) && h.test(d));
                O(b, u, N);
              }
            }
          }
        }
        function _() {
          var y = n.scrollTop(),
            S = n.height();
          t.each(g, function (b) {
            if (!b.link.attr("hreflang")) {
              var x = b.link,
                N = b.sec,
                C = N.offset().top,
                G = N.outerHeight(),
                V = S * 0.5,
                U = N.is(":visible") && C + G - V >= y && C + V <= y + S;
              b.active !== U && ((b.active = U), O(x, u, U));
            }
          });
        }
        function O(y, S, b) {
          var x = y.hasClass(S);
          (b && x) || (!b && !x) || (b ? y.addClass(S) : y.removeClass(S));
        }
        return r;
      })
    );
  });
  var C_ = c((Bj, x_) => {
    "use strict";
    var Si = $e();
    Si.define(
      "scroll",
      (x_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = A() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (P) {
              window.setTimeout(P, 15);
            },
          u = Si.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          h = 'a[href="#"]',
          g = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")",
          d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(d));
        function A() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
        function O(P) {
          return _.test(P.hash) && P.host + P.pathname === r.host + r.pathname;
        }
        let y =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function S() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            y.matches
          );
        }
        function b(P, T) {
          var L;
          switch (T) {
            case "add":
              (L = P.attr("tabindex")),
                L
                  ? P.attr("data-wf-tabindex-swap", L)
                  : P.attr("tabindex", "-1");
              break;
            case "remove":
              (L = P.attr("data-wf-tabindex-swap")),
                L
                  ? (P.attr("tabindex", L),
                    P.removeAttr("data-wf-tabindex-swap"))
                  : P.removeAttr("tabindex");
              break;
          }
          P.toggleClass("wf-force-outline-none", T === "add");
        }
        function x(P) {
          var T = P.currentTarget;
          if (
            !(
              Si.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(T.className))
            )
          ) {
            var L = O(T) ? T.hash : "";
            if (L !== "") {
              var B = e(L);
              B.length &&
                (P && (P.preventDefault(), P.stopPropagation()),
                N(L, P),
                window.setTimeout(
                  function () {
                    C(B, function () {
                      b(B, "add"),
                        B.get(0).focus({ preventScroll: !0 }),
                        b(B, "remove");
                    });
                  },
                  P ? 0 : 300
                ));
            }
          }
        }
        function N(P) {
          if (
            r.hash !== P &&
            n &&
            n.pushState &&
            !(Si.env.chrome && r.protocol === "file:")
          ) {
            var T = n.state && n.state.hash;
            T !== P && n.pushState({ hash: P }, "", P);
          }
        }
        function C(P, T) {
          var L = i.scrollTop(),
            B = G(P);
          if (L !== B) {
            var F = V(P, L, B),
              j = Date.now(),
              z = function () {
                var te = Date.now() - j;
                window.scroll(0, U(L, B, te, F)),
                  te <= F ? s(z) : typeof T == "function" && T();
              };
            s(z);
          }
        }
        function G(P) {
          var T = e(f),
            L = T.css("position") === "fixed" ? T.outerHeight() : 0,
            B = P.offset().top - L;
          if (P.data("scroll") === "mid") {
            var F = i.height() - L,
              j = P.outerHeight();
            j < F && (B -= Math.round((F - j) / 2));
          }
          return B;
        }
        function V(P, T, L) {
          if (S()) return 0;
          var B = 1;
          return (
            a.add(P).each(function (F, j) {
              var z = parseFloat(j.getAttribute("data-scroll-time"));
              !isNaN(z) && z >= 0 && (B = z);
            }),
            (472.143 * Math.log(Math.abs(T - L) + 125) - 2e3) * B
          );
        }
        function U(P, T, L, B) {
          return L > B ? T : P + (T - P) * k(L / B);
        }
        function k(P) {
          return P < 0.5
            ? 4 * P * P * P
            : (P - 1) * (2 * P - 2) * (2 * P - 2) + 1;
        }
        function K() {
          var { WF_CLICK_EMPTY: P, WF_CLICK_SCROLL: T } = t;
          o.on(T, g, x),
            o.on(P, h, function (L) {
              L.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: K };
      })
    );
  });
  var N_ = c((Uj, R_) => {
    "use strict";
    var T5 = $e();
    T5.define(
      "touch",
      (R_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            h;
          o.addEventListener("touchstart", g, !1),
            o.addEventListener("touchmove", d, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", A, !1),
            o.addEventListener("mousedown", g, !1),
            o.addEventListener("mousemove", d, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", A, !1);
          function g(O) {
            var y = O.touches;
            (y && y.length > 1) ||
              ((a = !0),
              y ? ((s = !0), (f = y[0].clientX)) : (f = O.clientX),
              (h = f));
          }
          function d(O) {
            if (a) {
              if (s && O.type === "mousemove") {
                O.preventDefault(), O.stopPropagation();
                return;
              }
              var y = O.touches,
                S = y ? y[0].clientX : O.clientX,
                b = S - h;
              (h = S),
                Math.abs(b) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", O, { direction: b > 0 ? "right" : "left" }), A());
            }
          }
          function E(O) {
            if (a && ((a = !1), s && O.type === "mouseup")) {
              O.preventDefault(), O.stopPropagation(), (s = !1);
              return;
            }
          }
          function A() {
            a = !1;
          }
          function _() {
            o.removeEventListener("touchstart", g, !1),
              o.removeEventListener("touchmove", d, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", A, !1),
              o.removeEventListener("mousedown", g, !1),
              o.removeEventListener("mousemove", d, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", A, !1),
              (o = null);
          }
          this.destroy = _;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var P_ = c((Hj, L_) => {
    "use strict";
    var _t = $e(),
      b5 = Mi(),
      Te = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    _t.define(
      "navbar",
      (L_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          f,
          h,
          g = _t.env(),
          d = '<div class="w-nav-overlay" data-wf-ignore />',
          E = ".w-nav",
          A = "w--open",
          _ = "w--nav-dropdown-open",
          O = "w--nav-dropdown-toggle-open",
          y = "w--nav-dropdown-list-open",
          S = "w--nav-link-open",
          b = b5.triggers,
          x = e();
        (r.ready = r.design = r.preview = N),
          (r.destroy = function () {
            (x = e()), C(), u && u.length && u.each(k);
          });
        function N() {
          (f = g && _t.env("design")),
            (h = _t.env("editor")),
            (s = e(document.body)),
            (u = o.find(E)),
            u.length && (u.each(U), C(), G());
        }
        function C() {
          _t.resize.off(V);
        }
        function G() {
          _t.resize.on(V);
        }
        function V() {
          u.each(Y);
        }
        function U(p, M) {
          var H = e(M),
            D = e.data(M, E);
          D ||
            (D = e.data(M, E, {
              open: !1,
              el: H,
              config: {},
              selectedIdx: -1,
            })),
            (D.menu = H.find(".w-nav-menu")),
            (D.links = D.menu.find(".w-nav-link")),
            (D.dropdowns = D.menu.find(".w-dropdown")),
            (D.dropdownToggle = D.menu.find(".w-dropdown-toggle")),
            (D.dropdownList = D.menu.find(".w-dropdown-list")),
            (D.button = H.find(".w-nav-button")),
            (D.container = H.find(".w-container")),
            (D.overlayContainerId = "w-nav-overlay-" + p),
            (D.outside = je(D));
          var ue = H.find(".w-nav-brand");
          ue &&
            ue.attr("href") === "/" &&
            ue.attr("aria-label") == null &&
            ue.attr("aria-label", "home"),
            D.button.attr("style", "-webkit-user-select: text;"),
            D.button.attr("aria-label") == null &&
              D.button.attr("aria-label", "menu"),
            D.button.attr("role", "button"),
            D.button.attr("tabindex", "0"),
            D.button.attr("aria-controls", D.overlayContainerId),
            D.button.attr("aria-haspopup", "menu"),
            D.button.attr("aria-expanded", "false"),
            D.el.off(E),
            D.button.off(E),
            D.menu.off(E),
            T(D),
            f
              ? (K(D), D.el.on("setting" + E, L(D)))
              : (P(D),
                D.button.on("click" + E, te(D)),
                D.menu.on("click" + E, "a", be(D)),
                D.button.on("keydown" + E, B(D)),
                D.el.on("keydown" + E, F(D))),
            Y(p, M);
        }
        function k(p, M) {
          var H = e.data(M, E);
          H && (K(H), e.removeData(M, E));
        }
        function K(p) {
          p.overlay && (oe(p, !0), p.overlay.remove(), (p.overlay = null));
        }
        function P(p) {
          p.overlay ||
            ((p.overlay = e(d).appendTo(p.el)),
            p.overlay.attr("id", p.overlayContainerId),
            (p.parent = p.menu.parent()),
            oe(p, !0));
        }
        function T(p) {
          var M = {},
            H = p.config || {},
            D = (M.animation = p.el.attr("data-animation") || "default");
          (M.animOver = /^over/.test(D)),
            (M.animDirect = /left$/.test(D) ? -1 : 1),
            H.animation !== D && p.open && t.defer(z, p),
            (M.easing = p.el.attr("data-easing") || "ease"),
            (M.easing2 = p.el.attr("data-easing2") || "ease");
          var ue = p.el.attr("data-duration");
          (M.duration = ue != null ? Number(ue) : 400),
            (M.docHeight = p.el.attr("data-doc-height")),
            (p.config = M);
        }
        function L(p) {
          return function (M, H) {
            H = H || {};
            var D = i.width();
            T(p),
              H.open === !0 && ft(p, !0),
              H.open === !1 && oe(p, !0),
              p.open &&
                t.defer(function () {
                  D !== i.width() && z(p);
                });
          };
        }
        function B(p) {
          return function (M) {
            switch (M.keyCode) {
              case Te.SPACE:
              case Te.ENTER:
                return te(p)(), M.preventDefault(), M.stopPropagation();
              case Te.ESCAPE:
                return oe(p), M.preventDefault(), M.stopPropagation();
              case Te.ARROW_RIGHT:
              case Te.ARROW_DOWN:
              case Te.HOME:
              case Te.END:
                return p.open
                  ? (M.keyCode === Te.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    j(p),
                    M.preventDefault(),
                    M.stopPropagation())
                  : (M.preventDefault(), M.stopPropagation());
            }
          };
        }
        function F(p) {
          return function (M) {
            if (p.open)
              switch (
                ((p.selectedIdx = p.links.index(document.activeElement)),
                M.keyCode)
              ) {
                case Te.HOME:
                case Te.END:
                  return (
                    M.keyCode === Te.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    j(p),
                    M.preventDefault(),
                    M.stopPropagation()
                  );
                case Te.ESCAPE:
                  return (
                    oe(p),
                    p.button.focus(),
                    M.preventDefault(),
                    M.stopPropagation()
                  );
                case Te.ARROW_LEFT:
                case Te.ARROW_UP:
                  return (
                    (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                    j(p),
                    M.preventDefault(),
                    M.stopPropagation()
                  );
                case Te.ARROW_RIGHT:
                case Te.ARROW_DOWN:
                  return (
                    (p.selectedIdx = Math.min(
                      p.links.length - 1,
                      p.selectedIdx + 1
                    )),
                    j(p),
                    M.preventDefault(),
                    M.stopPropagation()
                  );
              }
          };
        }
        function j(p) {
          if (p.links[p.selectedIdx]) {
            var M = p.links[p.selectedIdx];
            M.focus(), be(M);
          }
        }
        function z(p) {
          p.open && (oe(p, !0), ft(p, !0));
        }
        function te(p) {
          return a(function () {
            p.open ? oe(p) : ft(p);
          });
        }
        function be(p) {
          return function (M) {
            var H = e(this),
              D = H.attr("href");
            if (!_t.validClick(M.currentTarget)) {
              M.preventDefault();
              return;
            }
            D && D.indexOf("#") === 0 && p.open && oe(p);
          };
        }
        function je(p) {
          return (
            p.outside && o.off("click" + E, p.outside),
            function (M) {
              var H = e(M.target);
              (h && H.closest(".w-editor-bem-EditorOverlay").length) ||
                he(p, H);
            }
          );
        }
        var he = a(function (p, M) {
          if (p.open) {
            var H = M.closest(".w-nav-menu");
            p.menu.is(H) || oe(p);
          }
        });
        function Y(p, M) {
          var H = e.data(M, E),
            D = (H.collapsed = H.button.css("display") !== "none");
          if ((H.open && !D && !f && oe(H, !0), H.container.length)) {
            var ue = Tt(H);
            H.links.each(ue), H.dropdowns.each(ue);
          }
          H.open && gr(H);
        }
        var ve = "max-width";
        function Tt(p) {
          var M = p.container.css(ve);
          return (
            M === "none" && (M = ""),
            function (H, D) {
              (D = e(D)), D.css(ve, ""), D.css(ve) === "none" && D.css(ve, M);
            }
          );
        }
        function Mt(p, M) {
          M.setAttribute("data-nav-menu-open", "");
        }
        function bt(p, M) {
          M.removeAttribute("data-nav-menu-open");
        }
        function ft(p, M) {
          if (p.open) return;
          (p.open = !0),
            p.menu.each(Mt),
            p.links.addClass(S),
            p.dropdowns.addClass(_),
            p.dropdownToggle.addClass(O),
            p.dropdownList.addClass(y),
            p.button.addClass(A);
          var H = p.config,
            D = H.animation;
          (D === "none" || !n.support.transform || H.duration <= 0) && (M = !0);
          var ue = gr(p),
            hr = p.menu.outerHeight(!0),
            It = p.menu.outerWidth(!0),
            l = p.el.height(),
            v = p.el[0];
          if (
            (Y(0, v),
            b.intro(0, v),
            _t.redraw.up(),
            f || o.on("click" + E, p.outside),
            M)
          ) {
            R();
            return;
          }
          var m = "transform " + H.duration + "ms " + H.easing;
          if (
            (p.overlay &&
              ((x = p.menu.prev()), p.overlay.show().append(p.menu)),
            H.animOver)
          ) {
            n(p.menu)
              .add(m)
              .set({ x: H.animDirect * It, height: ue })
              .start({ x: 0 })
              .then(R),
              p.overlay && p.overlay.width(It);
            return;
          }
          var I = l + hr;
          n(p.menu).add(m).set({ y: -I }).start({ y: 0 }).then(R);
          function R() {
            p.button.attr("aria-expanded", "true");
          }
        }
        function gr(p) {
          var M = p.config,
            H = M.docHeight ? o.height() : s.height();
          return (
            M.animOver
              ? p.menu.height(H)
              : p.el.css("position") !== "fixed" && (H -= p.el.outerHeight(!0)),
            p.overlay && p.overlay.height(H),
            H
          );
        }
        function oe(p, M) {
          if (!p.open) return;
          (p.open = !1), p.button.removeClass(A);
          var H = p.config;
          if (
            ((H.animation === "none" ||
              !n.support.transform ||
              H.duration <= 0) &&
              (M = !0),
            b.outro(0, p.el[0]),
            o.off("click" + E, p.outside),
            M)
          ) {
            n(p.menu).stop(), v();
            return;
          }
          var D = "transform " + H.duration + "ms " + H.easing2,
            ue = p.menu.outerHeight(!0),
            hr = p.menu.outerWidth(!0),
            It = p.el.height();
          if (H.animOver) {
            n(p.menu)
              .add(D)
              .start({ x: hr * H.animDirect })
              .then(v);
            return;
          }
          var l = It + ue;
          n(p.menu).add(D).start({ y: -l }).then(v);
          function v() {
            p.menu.height(""),
              n(p.menu).set({ x: 0, y: 0 }),
              p.menu.each(bt),
              p.links.removeClass(S),
              p.dropdowns.removeClass(_),
              p.dropdownToggle.removeClass(O),
              p.dropdownList.removeClass(y),
              p.overlay &&
                p.overlay.children().length &&
                (x.length ? p.menu.insertAfter(x) : p.menu.prependTo(p.parent),
                p.overlay.attr("style", "").hide()),
              p.el.triggerHandler("w-close"),
              p.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  Bs();
  Hs();
  ks();
  zs();
  Mi();
  A_();
  w_();
  C_();
  N_();
  P_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6c6835a8-7c0b-f79d-25fe-7d0d0aa93621",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6c6835a8-7c0b-f79d-25fe-7d0d0aa93621",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1712048533004,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6c6835a8-7c0b-f79d-25fe-7d0d0aa93621",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6c6835a8-7c0b-f79d-25fe-7d0d0aa93621",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1712048533004,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6c6835a8-7c0b-f79d-25fe-7d0d0aa93621",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6c6835a8-7c0b-f79d-25fe-7d0d0aa93621",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1712051519937,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "07c2fa73-4d2f-25e5-9960-0e5358a965c1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "07c2fa73-4d2f-25e5-9960-0e5358a965c1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1712053354581,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-21",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "07c2fa73-4d2f-25e5-9960-0e5358a965c1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "07c2fa73-4d2f-25e5-9960-0e5358a965c1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1712053354581,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "07c2fa73-4d2f-25e5-9960-0e5358a965c1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "07c2fa73-4d2f-25e5-9960-0e5358a965c1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1712053354581,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|1f028e76-76f8-5da8-340b-24ab2bb79d48",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|1f028e76-76f8-5da8-340b-24ab2bb79d48",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1712059089766,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|1f028e76-76f8-5da8-340b-24ab2bb79d48",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|1f028e76-76f8-5da8-340b-24ab2bb79d48",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1712059089766,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|1f028e76-76f8-5da8-340b-24ab2bb79d48",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|1f028e76-76f8-5da8-340b-24ab2bb79d48",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1712059089766,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|5bc4b3c4-0293-2713-f97d-a2fcd4d55d2a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|5bc4b3c4-0293-2713-f97d-a2fcd4d55d2a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1712064977748,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|5bc4b3c4-0293-2713-f97d-a2fcd4d55d2a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|5bc4b3c4-0293-2713-f97d-a2fcd4d55d2a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1712064977748,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|5bc4b3c4-0293-2713-f97d-a2fcd4d55d2a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|5bc4b3c4-0293-2713-f97d-a2fcd4d55d2a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1712064977748,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1713448075364,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|aee4f7af-b47f-7ab5-bb8e-88c7f34c48b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|aee4f7af-b47f-7ab5-bb8e-88c7f34c48b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1713973242614,
    },
    "e-70": {
      id: "e-70",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|aee4f7af-b47f-7ab5-bb8e-88c7f34c48b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|aee4f7af-b47f-7ab5-bb8e-88c7f34c48b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1713973242614,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-17", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|35dcd8d0-f4bb-aba7-e552-a54c27383bd0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|35dcd8d0-f4bb-aba7-e552-a54c27383bd0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-17-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1715683836161,
    },
    "e-96": {
      id: "e-96",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-18", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|ce095f14-84f1-cd3b-8124-c9b054b6db6b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|ce095f14-84f1-cd3b-8124-c9b054b6db6b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-18-p",
          smoothing: 70,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1715684660279,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-100",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66434628d715c3ac59ec50ce|1f028e76-76f8-5da8-340b-24ab2bb79d48",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66434628d715c3ac59ec50ce|1f028e76-76f8-5da8-340b-24ab2bb79d48",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715684905293,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-102",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66434628d715c3ac59ec50ce|1f028e76-76f8-5da8-340b-24ab2bb79d48",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66434628d715c3ac59ec50ce|1f028e76-76f8-5da8-340b-24ab2bb79d48",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715684905293,
    },
    "e-102": {
      id: "e-102",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-101",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66434628d715c3ac59ec50ce|1f028e76-76f8-5da8-340b-24ab2bb79d48",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66434628d715c3ac59ec50ce|1f028e76-76f8-5da8-340b-24ab2bb79d48",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715684905293,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-104",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66434628d715c3ac59ec50ce|5bc4b3c4-0293-2713-f97d-a2fcd4d55d2a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66434628d715c3ac59ec50ce|5bc4b3c4-0293-2713-f97d-a2fcd4d55d2a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715684905293,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-106",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66434628d715c3ac59ec50ce|5bc4b3c4-0293-2713-f97d-a2fcd4d55d2a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66434628d715c3ac59ec50ce|5bc4b3c4-0293-2713-f97d-a2fcd4d55d2a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715684905293,
    },
    "e-106": {
      id: "e-106",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-105",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66434628d715c3ac59ec50ce|5bc4b3c4-0293-2713-f97d-a2fcd4d55d2a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66434628d715c3ac59ec50ce|5bc4b3c4-0293-2713-f97d-a2fcd4d55d2a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715684905293,
    },
    "e-107": {
      id: "e-107",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-108",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66434628d715c3ac59ec50ce",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66434628d715c3ac59ec50ce",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715684905293,
    },
    "e-124": {
      id: "e-124",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-125",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "7ad45a7f-507f-3bb6-aa77-36d81def7609",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "7ad45a7f-507f-3bb6-aa77-36d81def7609",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715797238639,
    },
    "e-125": {
      id: "e-125",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-124",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "7ad45a7f-507f-3bb6-aa77-36d81def7609",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "7ad45a7f-507f-3bb6-aa77-36d81def7609",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715797238639,
    },
    "e-126": {
      id: "e-126",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-127",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|c325387c-f716-c762-6ba6-f76f5eb9deef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|c325387c-f716-c762-6ba6-f76f5eb9deef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715797277963,
    },
    "e-127": {
      id: "e-127",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-126",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|c325387c-f716-c762-6ba6-f76f5eb9deef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|c325387c-f716-c762-6ba6-f76f5eb9deef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715797277964,
    },
    "e-128": {
      id: "e-128",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-129",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|ba23d428-6f54-72d8-41e7-8a5fecb5a712",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|ba23d428-6f54-72d8-41e7-8a5fecb5a712",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715797433737,
    },
    "e-129": {
      id: "e-129",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-128",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|ba23d428-6f54-72d8-41e7-8a5fecb5a712",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|ba23d428-6f54-72d8-41e7-8a5fecb5a712",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715797433737,
    },
    "e-132": {
      id: "e-132",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-133",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|42305c76-664c-a814-482c-6f6fe0247885",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|42305c76-664c-a814-482c-6f6fe0247885",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715797453334,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-132",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "660ad92995aa7941f36c7342|42305c76-664c-a814-482c-6f6fe0247885",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "660ad92995aa7941f36c7342|42305c76-664c-a814-482c-6f6fe0247885",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715797453334,
    },
    "e-134": {
      id: "e-134",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-135",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66434628d715c3ac59ec50ce|7e0e2b36-d267-22fb-e9aa-6495181b3ec5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66434628d715c3ac59ec50ce|7e0e2b36-d267-22fb-e9aa-6495181b3ec5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715882623261,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-134",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66434628d715c3ac59ec50ce|7e0e2b36-d267-22fb-e9aa-6495181b3ec5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66434628d715c3ac59ec50ce|7e0e2b36-d267-22fb-e9aa-6495181b3ec5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715882623261,
    },
    "e-136": {
      id: "e-136",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-137",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66434628d715c3ac59ec50ce|0fe54449-a500-1c3b-c8dd-820e3754c551",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66434628d715c3ac59ec50ce|0fe54449-a500-1c3b-c8dd-820e3754c551",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718092132460,
    },
    "e-137": {
      id: "e-137",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-136",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66434628d715c3ac59ec50ce|0fe54449-a500-1c3b-c8dd-820e3754c551",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66434628d715c3ac59ec50ce|0fe54449-a500-1c3b-c8dd-820e3754c551",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718092132460,
    },
  },
  actionLists: {
    "a-4": {
      id: "a-4",
      title: "btn hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6c6835a8-7c0b-f79d-25fe-7d0d0aa93621",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "6c6835a8-7c0b-f79d-25fe-7d0d0aa93621",
                },
                xValue: 0.95,
                yValue: 0.95,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1712048536622,
    },
    "a-6": {
      id: "a-6",
      title: "btn out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6c6835a8-7c0b-f79d-25fe-7d0d0aa93621",
                },
                xValue: 0.95,
                yValue: 0.95,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "6c6835a8-7c0b-f79d-25fe-7d0d0aa93621",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1712048536622,
    },
    "a-7": {
      id: "a-7",
      title: "ani",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: { id: "07c2fa73-4d2f-25e5-9960-0e5358a965c7" },
                xValue: 0.6,
                yValue: 0.6,
                locked: true,
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: { id: "07c2fa73-4d2f-25e5-9960-0e5358a965c7" },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-7-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: { id: "07c2fa73-4d2f-25e5-9960-0e5358a965c7" },
                xValue: 0.6,
                yValue: 0.6,
                locked: true,
              },
            },
            {
              id: "a-7-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1712051684025,
    },
    "a-8": {
      id: "a-8",
      title: "btn hover 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "07c2fa73-4d2f-25e5-9960-0e5358a965c1",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "07c2fa73-4d2f-25e5-9960-0e5358a965c1",
                },
                xValue: 0.95,
                yValue: 0.95,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1712048536622,
    },
    "a-9": {
      id: "a-9",
      title: "btn out 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "07c2fa73-4d2f-25e5-9960-0e5358a965c1",
                },
                xValue: 0.95,
                yValue: 0.95,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "07c2fa73-4d2f-25e5-9960-0e5358a965c1",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1712048536622,
    },
    "a-15": {
      id: "a-15",
      title: "main btn click",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".drops_img",
                  selectorGuids: ["3f0d68b8-af0a-8b1a-085c-ec65a86e9bb7"],
                },
                xValue: 0.4,
                yValue: 0.4,
                locked: true,
              },
            },
            {
              id: "a-15-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".drops_img",
                  selectorGuids: ["3f0d68b8-af0a-8b1a-085c-ec65a86e9bb7"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".copied_img",
                  selectorGuids: ["4a29dd64-9175-7093-0faa-0a7095fb96a7"],
                },
                yValue: 12,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".copied_img",
                  selectorGuids: ["4a29dd64-9175-7093-0faa-0a7095fb96a7"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  selector: ".drops_img",
                  selectorGuids: ["3f0d68b8-af0a-8b1a-085c-ec65a86e9bb7"],
                },
                xValue: 1.4,
                yValue: 1.4,
                locked: true,
              },
            },
            {
              id: "a-15-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".drops_img",
                  selectorGuids: ["3f0d68b8-af0a-8b1a-085c-ec65a86e9bb7"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 200,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".copied_img",
                  selectorGuids: ["4a29dd64-9175-7093-0faa-0a7095fb96a7"],
                },
                yValue: -40,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 200,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".copied_img",
                  selectorGuids: ["4a29dd64-9175-7093-0faa-0a7095fb96a7"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".drops_img",
                  selectorGuids: ["3f0d68b8-af0a-8b1a-085c-ec65a86e9bb7"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".copied_img",
                  selectorGuids: ["4a29dd64-9175-7093-0faa-0a7095fb96a7"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  selector: ".drops_img",
                  selectorGuids: ["3f0d68b8-af0a-8b1a-085c-ec65a86e9bb7"],
                },
                xValue: 0.4,
                yValue: 0.4,
                locked: true,
              },
            },
            {
              id: "a-15-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".copied_img",
                  selectorGuids: ["4a29dd64-9175-7093-0faa-0a7095fb96a7"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".drops_img",
                  selectorGuids: ["3f0d68b8-af0a-8b1a-085c-ec65a86e9bb7"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1712051684025,
    },
    "a-13": {
      id: "a-13",
      title: "ani tab",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                xValue: 0.4,
                yValue: 0.4,
                locked: true,
              },
            },
            {
              id: "a-13-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                xValue: 1.6,
                yValue: 1.6,
                locked: true,
              },
            },
            {
              id: "a-13-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-13-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                yValue: -28,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                xValue: 0.4,
                yValue: 0.4,
                locked: true,
              },
            },
            {
              id: "a-13-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-13-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1712051684025,
    },
    "a-10": {
      id: "a-10",
      title: "ani 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                xValue: 0.4,
                yValue: 0.4,
                locked: true,
              },
            },
            {
              id: "a-10-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                xValue: 1.4,
                yValue: 1.4,
                locked: true,
              },
            },
            {
              id: "a-10-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-10-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                yValue: -32,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                xValue: 0.4,
                yValue: 0.4,
                locked: true,
              },
            },
            {
              id: "a-10-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-10-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".ani",
                  selectorGuids: ["0fffa075-9fa2-4188-acc7-71f4792faa94"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1712051684025,
    },
    "a-16": {
      id: "a-16",
      title: "NFTs looped animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".logoes_ticker_content2",
                  selectorGuids: ["e0026630-da32-272b-ae04-30389c315c17"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 30000,
                target: {
                  selector: ".logoes_ticker_content2",
                  selectorGuids: ["e0026630-da32-272b-ae04-30389c315c17"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1713448098387,
    },
    "a-17": {
      id: "a-17",
      title: "cloud home main left",
      continuousParameterGroups: [
        {
          id: "a-17-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 48,
              actionItems: [
                {
                  id: "a-17-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "660ad92995aa7941f36c7342|35dcd8d0-f4bb-aba7-e552-a54c27383bd0",
                    },
                    xValue: -195,
                    yValue: -118,
                    xUnit: "px",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 87,
              actionItems: [
                {
                  id: "a-17-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "660ad92995aa7941f36c7342|35dcd8d0-f4bb-aba7-e552-a54c27383bd0",
                    },
                    xValue: -300,
                    yValue: -118,
                    xUnit: "px",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1715683842830,
    },
    "a-18": {
      id: "a-18",
      title: "cloud home main right",
      continuousParameterGroups: [
        {
          id: "a-18-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 16,
              actionItems: [
                {
                  id: "a-18-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "660ad92995aa7941f36c7342|ce095f14-84f1-cd3b-8124-c9b054b6db6b",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "%",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 65,
              actionItems: [
                {
                  id: "a-18-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "660ad92995aa7941f36c7342|ce095f14-84f1-cd3b-8124-c9b054b6db6b",
                    },
                    xValue: 100,
                    yValue: 80,
                    xUnit: "%",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1715683842830,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
