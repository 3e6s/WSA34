"use strict";
(self.webpackChunk_am5 = self.webpackChunk_am5 || []).push([
  [1239],
  {
    2924: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ArcDiagram: function () {
            return We;
          },
          ArcDiagramLink: function () {
            return Fe;
          },
          ArcDiagramNodes: function () {
            return Ge;
          },
          Chord: function () {
            return ae;
          },
          ChordDirected: function () {
            return oe;
          },
          ChordLink: function () {
            return ie;
          },
          ChordLinkDirected: function () {
            return re;
          },
          ChordNodes: function () {
            return ee;
          },
          ChordNonRibbon: function () {
            return le;
          },
          DefaultTheme: function () {
            return u;
          },
          Flow: function () {
            return p;
          },
          FlowLink: function () {
            return ne;
          },
          FlowNode: function () {
            return q;
          },
          FlowNodes: function () {
            return Z;
          },
          Sankey: function () {
            return Re;
          },
          SankeyLink: function () {
            return he;
          },
          SankeyNodes: function () {
            return ue;
          },
        });
      var i = n(7582),
        s = n(3409),
        a = n(6245),
        r = n(2754),
        o = n(3783),
        l = n(5071),
        c = n(9395);
      class u extends s.Q {
        setupDefaultRules() {
          super.setupDefaultRules();
          const e = this._root.interfaceColors,
            t = this.rule.bind(this);
          t("Flow").setAll({
            width: a.AQ,
            height: a.AQ,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            hiddenSize: 0.05,
            minSize: 0,
            minHiddenValue: 0,
          }),
            t("FlowNodes").setAll({
              colors: r.U.new(this._root, {}),
              legendLabelText: "{name}",
              legendValueText: "{sumOutgoing.formatNumber('#.#')}",
            }),
            t("FlowNode").setAll({
              setStateOnChildren: !0,
              cursorOverStyle: "pointer",
              toggleKey: "disabled",
            }),
            t("FlowNode").states.create("disabled", {}),
            t("FlowNode", ["unknown"]).setAll({ draggable: !1, opacity: 0 }),
            t("Label", ["flow"]).states.create("disabled", {
              fill: e.get("disabled"),
            }),
            t("RadialLabel", ["flow", "node"]).setAll({
              text: "{name}",
              populateText: !0,
            }),
            t("FlowLink").setAll({
              fillStyle: "gradient",
              strokeStyle: "gradient",
            }),
            t("FlowLink", ["source", "unknown"]).setAll({}),
            t("FlowLink", ["target", "unknown"]).setAll({}),
            t("FlowNode").events.on("pointerover", (e) => {
              const t = e.target.dataItem;
              if (t) {
                const e = t.get("outgoingLinks");
                e &&
                  l.each(e, (e) => {
                    const t = e.get("link");
                    t.hover(), t.hideTooltip();
                  });
                const n = t.get("incomingLinks");
                n &&
                  l.each(n, (e) => {
                    const t = e.get("link");
                    t.hover(), t.hideTooltip();
                  });
              }
              let n = t.get("slice") || t.get("rectangle");
              n && n.get("tooltipText") && n.showTooltip();
            }),
            t("FlowNode").events.on("pointerout", (e) => {
              const t = e.target.dataItem;
              if (t) {
                const e = t.get("outgoingLinks");
                e &&
                  l.each(e, (e) => {
                    e.get("link").unhover();
                  });
                const n = t.get("incomingLinks");
                n &&
                  l.each(n, (e) => {
                    e.get("link").unhover();
                  });
              }
            }),
            t("Sankey").setAll({
              orientation: "horizontal",
              nodeAlign: "justify",
              linkTension: 0.5,
              nodePadding: 10,
              nodeWidth: 10,
            }),
            t("RoundedRectangle", ["sankey", "node", "shape"]).setAll({
              cornerRadiusTL: 0,
              cornerRadiusBL: 0,
              cornerRadiusTR: 0,
              cornerRadiusBR: 0,
            }),
            t("RoundedRectangle", ["shape"]).states.create("disabled", {
              fill: e.get("disabled"),
            }),
            t("SankeyLink").setAll({ controlPointDistance: 0.2 }),
            t("FlowNode", ["sankey"]).setAll({ draggable: !0 });
          {
            const n = t("Graphics", ["sankey", "link"]);
            n.setAll({
              fillOpacity: 0.2,
              strokeOpacity: 0,
              interactive: !0,
              tooltipText: "{sourceId} - {targetId}: {value}",
            }),
              (0, o.v)(n, "fill", e, "grid");
          }
          t("Graphics", ["sankey", "link"]).states.create("hover", {
            fillOpacity: 0.5,
          }),
            t("Label", ["sankey", "node"]).setAll({
              text: "{name}",
              populateText: !0,
            }),
            t("Label", ["sankey", "horizontal"]).setAll({
              y: a.CI,
              centerY: a.CI,
              paddingLeft: 15,
            }),
            t("Label", ["sankey", "vertical"]).setAll({
              x: a.CI,
              centerX: a.CI,
              paddingTop: 15,
            }),
            t("Chord").setAll({
              radius: (0, a.aQ)(90),
              nodeWidth: 10,
              padAngle: 1,
              startAngle: 0,
              sort: "none",
            }),
            t("ChordDirected").setAll({ linkHeadRadius: 10 }),
            t("ChordNodes").setAll({ x: a.CI, y: a.CI }),
            t("FlowNode", ["chord"]).setAll({ draggable: !0 }),
            t("ChordLink").setAll({
              sourceRadius: a.AQ,
              targetRadius: a.AQ,
              fillStyle: "solid",
              strokeStyle: "solid",
              tooltipText: "{sourceId} - {targetId}: {value}",
            }),
            t("Slice", ["chord", "node", "shape"]).setAll({ cornerRadius: 0 }),
            t("Slice", ["shape"]).states.create("disabled", {
              fill: e.get("disabled"),
            }),
            t("RadialLabel", ["chord", "node"]).setAll({
              radius: 5,
              textType: "circular",
            }),
            t("ChordLinkDirected").setAll({ headRadius: 10 });
          {
            const n = t("Graphics", ["chord", "link", "shape"]);
            n.setAll({ fillOpacity: 0.2, strokeOpacity: 0, interactive: !0 }),
              (0, o.v)(n, "fill", e, "grid"),
              (0, o.v)(n, "stroke", e, "grid");
          }
          t("Graphics", ["chord", "link", "shape"]).states.create("hover", {
            fillOpacity: 0.5,
          }),
            t("ChordNonRibbon").setAll({ linkType: "curve" }),
            t("ChordLink", ["basic"]).setAll({
              fillStyle: "none",
              strokeStyle: "source",
            }),
            t("Graphics", ["chord", "link", "shape", "basic"]).setAll({
              strokeOpacity: 0.4,
            }),
            t("Graphics", ["chord", "link", "shape", "basic"]).states.create(
              "hover",
              { strokeWidth: 2, strokeOpacity: 1 }
            ),
            t("ArcDiagram").setAll({
              orientation: "horizontal",
              nodePadding: 5,
              minRadius: 5,
              radiusKey: "sum",
              animationEasing: c.out(c.cubic),
            }),
            t("ArcDiagramNodes", ["horizontal"]).setAll({
              y: a.AQ,
              centerY: a.AQ,
            }),
            t("ArcDiagramNodes", ["vertical"]).setAll({ centerX: 0 }),
            t("Circle", ["arcdiagram", "node", "shape"]).setAll({
              tooltipText: "{name}: {sum}",
            }),
            t("Circle", ["arcdiagram", "node", "shape"]).states.create(
              "disabled",
              { fill: e.get("disabled") }
            );
          {
            const n = t("ArcDiagramLink", ["link", "shape"]);
            n.setAll({
              strokeOpacity: 0.15,
              strokeStyle: "solid",
              fillStyle: "none",
              isMeasured: !1,
            }),
              (0, o.v)(n, "stroke", e, "grid");
          }
          t("ArcDiagramLink", ["link", "shape"]).states.create("hover", {
            strokeOpacity: 1,
          }),
            t("Label", ["arcdiagram", "node"]).setAll({
              text: "{name}",
              populateText: !0,
            }),
            t("Label", ["arcdiagram", "horizontal"]).setAll({
              y: 0,
              centerY: a.CI,
              centerX: a.AQ,
              rotation: -90,
            }),
            t("Label", ["arcdiagram", "vertical"]).setAll({
              centerY: a.CI,
              centerX: a.AQ,
              paddingRight: 15,
            });
        }
      }
      var h = n(3399),
        d = n(8777),
        g = n(1747),
        f = n(5040);
      class p extends h.F {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "linksContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.children.push(d.W.new(this._root, {})),
            }),
            Object.defineProperty(this, "_nodesData", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "_linksData", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "_index", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "_nodesDataSet", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_linksByIndex", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            });
        }
        _afterNew() {
          this._defaultThemes.push(u.new(this._root)),
            this.fields.push("disabled", "sourceId", "targetId"),
            this.nodes && (this.nodes.flow = this),
            super._afterNew(),
            this.children.push(this.bulletsContainer);
        }
        processDataItem(e) {
          super.processDataItem(e);
          const t = this.nodes;
          if (t) {
            let n = !1,
              i = e.get("sourceId"),
              s = t.getDataItemById(i);
            s ||
              (null == i &&
                ((i = "undefined" + this._index), this._index++, (n = !0)),
              t.data.push({ id: i, unknown: n }),
              (s = t.getDataItemById(i)),
              n || s.set("name", i)),
              (n = !1);
            let a = e.get("targetId"),
              r = t.getDataItemById(a);
            r ||
              (null == a &&
                ((a = "undefined" + this._index), this._index++, (n = !0)),
              t.data.push({ id: a, unknown: n }),
              (r = t.getDataItemById(a)),
              n || r.set("name", a)),
              s && (e.set("source", s), t.addOutgoingLink(s, e)),
              r && (e.set("target", r), t.addincomingLink(r, e)),
              e.set("link", this.makeLink(e));
            const o = this.nodes.dataItems.indexOf(s),
              l = this.nodes.dataItems.indexOf(r);
            (this._linksByIndex[o + "_" + l] = e),
              s.get("unknown") &&
                (r && s.set("fill", r.get("fill")),
                e.get("link").set("fillStyle", "gradient")),
              r.get("unknown") &&
                (s && r.set("fill", s.get("fill")),
                e.get("link").set("fillStyle", "gradient")),
              this._updateLinkColor(e);
          }
        }
        _onDataClear() {
          this.nodes._userDataSet ||
            (this.nodes.data.setAll([]), (this.nodes._userDataSet = !1));
        }
        _prepareChildren() {
          super._prepareChildren();
          let e = 1 / 0,
            t = -1 / 0,
            n = 0;
          if (this._valuesDirty) {
            this._nodesData = [];
            const i = this.nodes;
            i &&
              l.each(i.dataItems, (e) => {
                const t = e.get("d3SankeyNode");
                this._nodesData.push(t);
                const n = e.get("incomingLinks");
                let s = 0,
                  a = 0;
                n &&
                  l.each(n, (e) => {
                    const t = e.get("value"),
                      n = e.get("valueWorking");
                    (s += t), (a += n);
                  }),
                  e.set("sumIncoming", s),
                  e.set("sumIncomingWorking", a);
                const r = e.get("outgoingLinks");
                let o = 0,
                  c = 0;
                r &&
                  l.each(r, (e) => {
                    const t = e.get("value"),
                      n = e.get("valueWorking");
                    (o += t), (c += n);
                  }),
                  e.set("sumOutgoing", o),
                  e.set("sumOutgoingWorking", c),
                  e.set("sum", s + o),
                  e.set("sumWorking", a + c),
                  i.updateLegendValue(e);
              }),
              (this._linksData = []),
              l.each(this.dataItems, (i) => {
                let s = i.get("value");
                f.isNumber(s) && (s < e && (e = s), s > t && (t = s), (n += s));
              }),
              l.each(this.dataItems, (e) => {
                let t = e.get("value");
                if (f.isNumber(t)) {
                  let t = e.get("valueWorking"),
                    i = this.get("minSize", 0);
                  i > 0 && t < i * n && (t = i * n);
                  let s = {
                    source: e.get("source").get("d3SankeyNode"),
                    target: e.get("target").get("d3SankeyNode"),
                    value: t,
                  };
                  e.setRaw("d3SankeyLink", s),
                    this._linksData.push(s),
                    this.updateLegendValue(e);
                }
              }),
              this.setPrivateRaw("valueHigh", t),
              this.setPrivateRaw("valueLow", e),
              this.setPrivateRaw("valueSum", n);
          }
        }
        _updateLinkColor(e) {
          const t = e.get("link"),
            n = t.get("fillStyle"),
            i = t.get("strokeStyle"),
            s = e.get("source"),
            a = e.get("target"),
            r = s.get("fill"),
            o = a.get("fill");
          switch ((t.remove("fillGradient"), t.remove("strokeGradient"), n)) {
            case "solid":
              t._applyTemplates();
              break;
            case "source":
              t.set("fill", r);
              break;
            case "target":
              t.set("fill", o);
              break;
            case "gradient":
              let e = t._fillGradient;
              e || (e = g.o.new(this._root, {}));
              const n = { color: r };
              s.get("unknown") && (n.opacity = 0);
              const i = { color: o };
              a.get("unknown") && (i.opacity = 0),
                e.set("stops", [n, i]),
                (t._fillGradient = e),
                t.set("fillGradient", e);
              break;
            case "none":
              t.set("fill", void 0);
          }
          switch (i) {
            case "solid":
              t._applyTemplates();
              break;
            case "source":
              t.set("stroke", r);
              break;
            case "target":
              t.set("stroke", o);
              break;
            case "gradient":
              let e = t._strokeGradient;
              if (!e) {
                e = g.o.new(this._root, {});
                const n = { color: r };
                s.get("unknown") && (n.opacity = 0);
                const i = { color: o };
                a.get("unknown") && (i.opacity = 0),
                  e.set("stops", [n, i]),
                  (t._strokeGradient = e);
              }
              t.set("strokeGradient", e);
              break;
            case "none":
              t.remove("stroke");
          }
        }
        disposeDataItem(e) {
          super.disposeDataItem(e);
          let t = e.get("link");
          t && (this.links.removeValue(t), t.dispose());
        }
        hideDataItem(e, t) {
          const n = Object.create(null, {
            hideDataItem: { get: () => super.hideDataItem },
          });
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = [n.hideDataItem.call(this, e, t)],
              s = this.states.create("hidden", {}),
              a = "stateAnimationDuration",
              r = "stateAnimationEasing";
            f.isNumber(t) || (t = s.get(a, this.get(a, 0)));
            const o = s.get(r, this.get(r));
            i.push(
              e
                .animate({
                  key: "valueWorking",
                  to: Math.max(
                    this.get("minHiddenValue", 0),
                    this.get("hiddenSize", 0) * e.get("value")
                  ),
                  duration: t,
                  easing: o,
                })
                .waitForStop()
            ),
              e.get("link").hide(),
              yield Promise.all(i);
          });
        }
        showDataItem(e, t) {
          const n = Object.create(null, {
            showDataItem: { get: () => super.showDataItem },
          });
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = [n.showDataItem.call(this, e, t)];
            f.isNumber(t) || (t = this.get("stateAnimationDuration", 0));
            const s = this.get("stateAnimationEasing");
            i.push(
              e
                .animate({
                  key: "valueWorking",
                  to: e.get("value"),
                  duration: t,
                  easing: s,
                })
                .waitForStop()
            ),
              e.get("link").show(),
              yield Promise.all(i);
          });
        }
        _positionBullet(e) {
          const t = e.get("sprite");
          if (t) {
            const n = t.dataItem;
            if (n) {
              const t = n.get("link"),
                i = e.get("sprite");
              if (i) {
                const n = t.getPoint(this._getBulletLocation(e));
                i.setAll({ x: n.x, y: n.y }),
                  e.get("autoRotate") &&
                    i.set("rotation", n.angle + e.get("autoRotateAngle", 0));
              }
            }
          }
        }
        _getBulletLocation(e) {
          return e.get("locationY", 0);
        }
      }
      Object.defineProperty(p, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Flow",
      }),
        Object.defineProperty(p, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: h.F.classNames.concat([p.className]),
        });
      var m = Math.abs,
        b = Math.cos,
        y = Math.sin,
        k = Math.PI,
        _ = k / 2,
        w = 2 * k,
        v = Math.max,
        x = 1e-12;
      function A(e, t) {
        return Array.from({ length: t - e }, (t, n) => e + n);
      }
      function D(e, t) {
        var n = 0,
          i = null,
          s = null,
          a = null;
        function r(r) {
          var o,
            l = r.length,
            c = new Array(l),
            u = A(0, l),
            h = new Array(l * l),
            d = new Array(l),
            g = 0;
          r = Float64Array.from(
            { length: l * l },
            t
              ? (e, t) => r[t % l][(t / l) | 0]
              : (e, t) => r[(t / l) | 0][t % l]
          );
          for (let t = 0; t < l; ++t) {
            let n = 0;
            for (let i = 0; i < l; ++i) n += r[t * l + i] + e * r[i * l + t];
            g += c[t] = n;
          }
          o = (g = v(0, w - n * l) / g) ? n : w / l;
          {
            let t = 0;
            i && u.sort((e, t) => i(c[e], c[t]));
            for (const n of u) {
              const i = t;
              if (e) {
                const e = A(1 + ~l, l).filter((e) =>
                  e < 0 ? r[~e * l + n] : r[n * l + e]
                );
                s &&
                  e.sort((e, t) =>
                    s(
                      e < 0 ? -r[~e * l + n] : r[n * l + e],
                      t < 0 ? -r[~t * l + n] : r[n * l + t]
                    )
                  );
                for (const i of e)
                  i < 0
                    ? ((
                        h[~i * l + n] ||
                        (h[~i * l + n] = { source: null, target: null })
                      ).target = {
                        index: n,
                        startAngle: t,
                        endAngle: (t += r[~i * l + n] * g),
                        value: r[~i * l + n],
                      })
                    : ((
                        h[n * l + i] ||
                        (h[n * l + i] = { source: null, target: null })
                      ).source = {
                        index: n,
                        startAngle: t,
                        endAngle: (t += r[n * l + i] * g),
                        value: r[n * l + i],
                      });
                d[n] = { index: n, startAngle: i, endAngle: t, value: c[n] };
              } else {
                const e = A(0, l).filter((e) => r[n * l + e] || r[e * l + n]);
                s && e.sort((e, t) => s(r[n * l + e], r[n * l + t]));
                for (const i of e) {
                  let e;
                  if (
                    (n < i
                      ? ((e =
                          h[n * l + i] ||
                          (h[n * l + i] = { source: null, target: null })),
                        (e.source = {
                          index: n,
                          startAngle: t,
                          endAngle: (t += r[n * l + i] * g),
                          value: r[n * l + i],
                        }))
                      : ((e =
                          h[i * l + n] ||
                          (h[i * l + n] = { source: null, target: null })),
                        (e.target = {
                          index: n,
                          startAngle: t,
                          endAngle: (t += r[n * l + i] * g),
                          value: r[n * l + i],
                        }),
                        n === i && (e.source = e.target)),
                    e.source && e.target && e.source.value < e.target.value)
                  ) {
                    const t = e.source;
                    (e.source = e.target), (e.target = t);
                  }
                }
                d[n] = { index: n, startAngle: i, endAngle: t, value: c[n] };
              }
              t += o;
            }
          }
          return ((h = Object.values(h)).groups = d), a ? h.sort(a) : h;
        }
        return (
          (r.padAngle = function (e) {
            return arguments.length ? ((n = v(0, e)), r) : n;
          }),
          (r.sortGroups = function (e) {
            return arguments.length ? ((i = e), r) : i;
          }),
          (r.sortSubgroups = function (e) {
            return arguments.length ? ((s = e), r) : s;
          }),
          (r.sortChords = function (e) {
            return arguments.length
              ? (null == e
                  ? (a = null)
                  : (((t = e),
                    (a = function (e, n) {
                      return t(
                        e.source.value + e.target.value,
                        n.source.value + n.target.value
                      );
                    }))._ = e),
                r)
              : a && a._;
            var t;
          }),
          r
        );
      }
      var N = n(5493),
        I = Array.prototype.slice;
      function P(e) {
        return function () {
          return e;
        };
      }
      function L(e) {
        return e.source;
      }
      function O(e) {
        return e.target;
      }
      function j(e) {
        return e.radius;
      }
      function S(e) {
        return e.startAngle;
      }
      function T(e) {
        return e.endAngle;
      }
      function C() {
        return 0;
      }
      function R() {
        return 10;
      }
      function M(e) {
        var t = L,
          n = O,
          i = j,
          s = j,
          a = S,
          r = T,
          o = C,
          l = null;
        function c() {
          var c,
            u = t.apply(this, arguments),
            h = n.apply(this, arguments),
            d = o.apply(this, arguments) / 2,
            g = I.call(arguments),
            f = +i.apply(this, ((g[0] = u), g)),
            p = a.apply(this, g) - _,
            k = r.apply(this, g) - _,
            w = +s.apply(this, ((g[0] = h), g)),
            v = a.apply(this, g) - _,
            A = r.apply(this, g) - _;
          if (
            (l || (l = c = (0, N.ET)()),
            d > x &&
              (m(k - p) > 2 * d + x
                ? k > p
                  ? ((p += d), (k -= d))
                  : ((p -= d), (k += d))
                : (p = k = (p + k) / 2),
              m(A - v) > 2 * d + x
                ? A > v
                  ? ((v += d), (A -= d))
                  : ((v -= d), (A += d))
                : (v = A = (v + A) / 2)),
            l.moveTo(f * b(p), f * y(p)),
            l.arc(0, 0, f, p, k),
            p !== v || k !== A)
          )
            if (e) {
              var D = w - +e.apply(this, arguments),
                P = (v + A) / 2;
              l.quadraticCurveTo(0, 0, D * b(v), D * y(v)),
                l.lineTo(w * b(P), w * y(P)),
                l.lineTo(D * b(A), D * y(A));
            } else
              l.quadraticCurveTo(0, 0, w * b(v), w * y(v)),
                l.arc(0, 0, w, v, A);
          if ((l.quadraticCurveTo(0, 0, f * b(p), f * y(p)), l.closePath(), c))
            return (l = null), c + "" || null;
        }
        return (
          e &&
            (c.headRadius = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : P(+t)), c)
                : e;
            }),
          (c.radius = function (e) {
            return arguments.length
              ? ((i = s = "function" == typeof e ? e : P(+e)), c)
              : i;
          }),
          (c.sourceRadius = function (e) {
            return arguments.length
              ? ((i = "function" == typeof e ? e : P(+e)), c)
              : i;
          }),
          (c.targetRadius = function (e) {
            return arguments.length
              ? ((s = "function" == typeof e ? e : P(+e)), c)
              : s;
          }),
          (c.startAngle = function (e) {
            return arguments.length
              ? ((a = "function" == typeof e ? e : P(+e)), c)
              : a;
          }),
          (c.endAngle = function (e) {
            return arguments.length
              ? ((r = "function" == typeof e ? e : P(+e)), c)
              : r;
          }),
          (c.padAngle = function (e) {
            return arguments.length
              ? ((o = "function" == typeof e ? e : P(+e)), c)
              : o;
          }),
          (c.source = function (e) {
            return arguments.length ? ((t = e), c) : t;
          }),
          (c.target = function (e) {
            return arguments.length ? ((n = e), c) : n;
          }),
          (c.context = function (e) {
            return arguments.length ? ((l = null == e ? null : e), c) : l;
          }),
          c
        );
      }
      function G() {
        return M();
      }
      function F() {
        return M(R);
      }
      function W(e, t) {
        return null == e || null == t
          ? NaN
          : e < t
          ? -1
          : e > t
          ? 1
          : e >= t
          ? 0
          : NaN;
      }
      function Y(e, t) {
        return null == e || null == t
          ? NaN
          : t < e
          ? -1
          : t > e
          ? 1
          : t >= e
          ? 0
          : NaN;
      }
      n(7896);
      const { abs: z, max: B, min: V } = Math;
      function E(e) {
        return { type: e };
      }
      function Q(e, t, n) {
        (this.k = e), (this.x = t), (this.y = n);
      }
      ["w", "e"].map(E),
        ["n", "s"].map(E),
        ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(E),
        (Q.prototype = {
          constructor: Q,
          scale: function (e) {
            return 1 === e ? this : new Q(this.k * e, this.x, this.y);
          },
          translate: function (e, t) {
            return (0 === e) & (0 === t)
              ? this
              : new Q(this.k, this.x + this.k * e, this.y + this.k * t);
          },
          apply: function (e) {
            return [e[0] * this.k + this.x, e[1] * this.k + this.y];
          },
          applyX: function (e) {
            return e * this.k + this.x;
          },
          applyY: function (e) {
            return e * this.k + this.y;
          },
          invert: function (e) {
            return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
          },
          invertX: function (e) {
            return (e - this.x) / this.k;
          },
          invertY: function (e) {
            return (e - this.y) / this.k;
          },
          rescaleX: function (e) {
            return e
              .copy()
              .domain(e.range().map(this.invertX, this).map(e.invert, e));
          },
          rescaleY: function (e) {
            return e
              .copy()
              .domain(e.range().map(this.invertY, this).map(e.invert, e));
          },
          toString: function () {
            return (
              "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            );
          },
        }),
        new Q(1, 0, 0),
        Q.prototype;
      var X = n(5769),
        H = n(7144),
        K = n(962);
      class q extends d.W {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "series", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
        }
      }
      Object.defineProperty(q, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "FlowNode",
      }),
        Object.defineProperty(q, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: d.W.classNames.concat([q.className]),
        });
      class Z extends h.F {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "labels", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new H.o(X.YS.new({}), () =>
                K._._new(this._root, { themeTags: ["flow"] }, [
                  this.labels.template,
                ])
              ),
            }),
            Object.defineProperty(this, "nodes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new H.o(X.YS.new({}), () =>
                q._new(this._root, { themeTags: ["node"] }, [
                  this.nodes.template,
                ])
              ),
            }),
            Object.defineProperty(this, "_userDataSet", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            });
        }
        _afterNew() {
          this.fields.push("unknown", "name", "fill"),
            this.set("idField", "id"),
            this.set("nameField", "id"),
            this.set("fillField", "fill"),
            this.set("unknownField", "unknown"),
            this.children.push(this.bulletsContainer),
            super._afterNew();
        }
        _onDataClear() {
          const e = this.get("colors");
          e && e.reset(), (this._userDataSet = !0);
        }
        processDataItem(e) {
          if (
            (super.processDataItem(e),
            e.setRaw("d3SankeyNode", { name: e.get("id"), dataItem: e }),
            null == e.get("fill"))
          ) {
            let t = this.get("colors");
            t && e.setRaw("fill", t.next());
          }
          const t = this.makeNode(e);
          e.setRaw("node", t);
          const n = this.get("disabledField");
          if (n) {
            const t = e.dataContext;
            t &&
              t[n] &&
              this.root.events.once("frameended", () => {
                this.disableDataItem(e, 0);
              });
          }
        }
        makeNode(e, t) {
          const n = this.nodes.make();
          return (
            this.nodes.push(n),
            t && n.addTag(t),
            e.get("unknown") && n.addTag("unknown"),
            this.children.push(n),
            n._setDataItem(e),
            (n.series = this),
            n.events.on("click", (e) => {
              const t = e.target;
              if ("disabled" == t.get("toggleKey")) {
                const e = t.dataItem;
                e &&
                  (e.isHidden()
                    ? this.enableDataItem(e)
                    : this.disableDataItem(e));
              }
            }),
            e.on("fill", () => {
              this._updateNodeColor(e);
            }),
            e.set("node", n),
            n
          );
        }
        _updateNodeColor(e) {}
        disposeDataItem(e) {
          super.disposeDataItem(e);
          let t = e.get("node");
          t && (this.nodes.removeValue(t), t.dispose());
          let n = e.get("label");
          n && (this.labels.removeValue(n), n.dispose());
        }
        addincomingLink(e, t) {
          let n = e.get("incomingLinks");
          n || ((n = []), e.set("incomingLinks", n)), n.push(t);
        }
        addOutgoingLink(e, t) {
          let n = e.get("outgoingLinks");
          n || ((n = []), e.set("outgoingLinks", n)), n.push(t);
        }
        showDataItem(e, t) {
          const n = Object.create(null, {
            showDataItem: { get: () => super.showDataItem },
          });
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = [n.showDataItem.call(this, e, t)],
              s = this.flow;
            if (s) {
              const n = e.get("node");
              n && n.show();
              let i = e.get("label");
              i && i.show(t);
              let a = e.get("outgoingLinks");
              a &&
                l.each(a, (e) => {
                  s.showDataItem(e, t);
                }),
                (a = e.get("incomingLinks")),
                a &&
                  l.each(a, (e) => {
                    s.showDataItem(e, t);
                  });
            }
            yield i;
          });
        }
        hideDataItem(e, t) {
          const n = Object.create(null, {
            hideDataItem: { get: () => super.hideDataItem },
          });
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = [n.hideDataItem.call(this, e, t)],
              s = this.flow;
            if (s) {
              const n = e.get("node");
              n && n.hide();
              let i = e.get("label");
              i && i.hide(t);
              let a = e.get("outgoingLinks");
              a &&
                l.each(a, (e) => {
                  s.hideDataItem(e, t);
                }),
                (a = e.get("incomingLinks")),
                a &&
                  l.each(a, (e) => {
                    s.hideDataItem(e, t);
                  });
            }
            yield i;
          });
        }
        enableDataItem(e, t) {
          const n = Object.create(null, {
            showDataItem: { get: () => super.showDataItem },
          });
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = [n.showDataItem.call(this, e, t)],
              s = this.flow;
            if (s) {
              const n = e.get("node");
              n &&
                this.root.events.once("frameended", () => {
                  n.set("disabled", !1);
                });
              let i = e.get("label");
              i && i.set("disabled", !1);
              let a = e.get("outgoingLinks");
              a &&
                l.each(a, (e) => {
                  s.showDataItem(e, t);
                }),
                (a = e.get("incomingLinks")),
                a &&
                  l.each(a, (e) => {
                    s.showDataItem(e, t);
                  });
            }
            yield i;
          });
        }
        disableDataItem(e, t) {
          const n = Object.create(null, {
            hideDataItem: { get: () => super.hideDataItem },
          });
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = [n.hideDataItem.call(this, e, t)],
              s = this.flow;
            if (s) {
              const n = e.get("node");
              n &&
                this.root.events.once("frameended", () => {
                  n.set("disabled", !0);
                });
              let i = e.get("label");
              i && i.set("disabled", !0);
              let a = e.get("outgoingLinks");
              a &&
                l.each(a, (e) => {
                  s.hideDataItem(e, t);
                }),
                (a = e.get("incomingLinks")),
                a &&
                  l.each(a, (e) => {
                    s.hideDataItem(e, t);
                  });
            }
            yield i;
          });
        }
      }
      Object.defineProperty(Z, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "FlowNodes",
      }),
        Object.defineProperty(Z, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: h.F.classNames.concat([Z.className]),
        });
      var $ = n(5863),
        U = n(815),
        J = n(751);
      class ee extends Z {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "labels", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new H.o(X.YS.new({}), () =>
                U.x._new(this._root, {}, [this.labels.template])
              ),
            }),
            Object.defineProperty(this, "flow", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_dAngle", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "slices", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new H.o(X.YS.new({}), () =>
                $.p._new(this._root, { themeTags: ["shape"] }, [
                  this.slices.template,
                ])
              ),
            }),
            Object.defineProperty(this, "rectangles", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.slices,
            });
        }
        makeNode(e) {
          const t = super.makeNode(e, "chord"),
            n = t.children.insertIndex(0, this.slices.make());
          e.set("slice", n), n._setSoft("fill", e.get("fill"));
          const i = this.labels.make();
          return (
            this.labels.push(i),
            i.addTag("flow"),
            i.addTag("chord"),
            i.addTag("node"),
            t.children.push(i),
            e.set("label", i),
            t.events.on("dragstart", (e) => {
              let t = this.toLocal(e.point);
              const n = J.getAngle({ x: 0, y: 0 }, t);
              this.flow && (this._dAngle = this.flow.get("startAngle", 0) - n);
            }),
            t.events.on("dragged", (e) => {
              let n = this.toLocal(e.point);
              const i = J.getAngle({ x: 0, y: 0 }, n);
              t.setAll({ x: 0, y: 0 }),
                this.flow && this.flow.set("startAngle", i + this._dAngle);
            }),
            i._setDataItem(e),
            n._setDataItem(e),
            t
          );
        }
        _positionBullet(e) {
          const t = e.get("sprite");
          if (t) {
            const n = t.dataItem;
            if (n) {
              const t = e.get("sprite");
              if (t) {
                const i = n.get("slice"),
                  s = e.get("locationX", 0.5),
                  a = e.get("locationY", 0.5);
                if (i) {
                  const e = i.get("radius", 0),
                    n = i.get("innerRadius", 0),
                    r = n + (e - n) * a,
                    o = i.get("startAngle", 0) + i.get("arc", 0) * s;
                  t.setAll({ x: r * J.cos(o), y: r * J.sin(o) });
                }
              }
            }
          }
        }
        _updateNodeColor(e) {
          const t = e.get("slice");
          t && t.set("fill", e.get("fill"));
        }
        disposeDataItem(e) {
          super.disposeDataItem(e);
          let t = e.get("slice");
          t && (this.slices.removeValue(t), t.dispose());
        }
      }
      Object.defineProperty(ee, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ChordNodes",
      }),
        Object.defineProperty(ee, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Z.classNames.concat([ee.className]),
        });
      var te = n(1479);
      class ne extends te.T {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "series", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_fillGradient", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_strokeGradient", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
        }
        _changed() {
          if ((super._changed(), this.isDirty("fillStyle"))) {
            const e = this.series,
              t = this.dataItem;
            e && t && e._updateLinkColor(t);
          }
        }
        _getTooltipPoint() {
          let e = this.get("tooltipY"),
            t = 0.5;
          return e instanceof a.gG && (t = e.value), this.getPoint(t);
        }
      }
      Object.defineProperty(ne, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "FlowLink",
      }),
        Object.defineProperty(ne, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: te.T.classNames.concat([ne.className]),
        });
      class ie extends ne {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_p0", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_p1", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_type", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
        }
        getPoint(e) {
          if (this._p0 && this._p1) {
            if ("line" === this._type) {
              let t = J.getPointOnLine(this._p0, this._p1, e);
              return { x: t.x, y: t.y, angle: J.getAngle(this._p0, this._p1) };
            }
            {
              let t = J.getPointOnQuadraticCurve(
                  this._p0,
                  this._p1,
                  { x: 0, y: 0 },
                  Math.max(0, e - 0.01)
                ),
                n = J.getPointOnQuadraticCurve(
                  this._p0,
                  this._p1,
                  { x: 0, y: 0 },
                  Math.min(1, e + 0.01)
                ),
                i = J.getPointOnQuadraticCurve(
                  this._p0,
                  this._p1,
                  { x: 0, y: 0 },
                  e
                );
              return { x: i.x, y: i.y, angle: J.getAngle(t, n) };
            }
          }
          return { x: 0, y: 0, angle: 0 };
        }
      }
      Object.defineProperty(ie, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ChordLink",
      }),
        Object.defineProperty(ie, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ne.classNames.concat([ie.className]),
        });
      var se = n(7652);
      class ae extends p {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "links", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new H.o(X.YS.new({}), () =>
                ie._new(this._root, { themeTags: ["link", "shape"] }, [
                  this.links.template,
                ])
              ),
            }),
            Object.defineProperty(this, "nodes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.children.push(ee.new(this._root, {})),
            }),
            Object.defineProperty(this, "_d3chord", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: D(!1, !1),
            }),
            Object.defineProperty(this, "_chordLayout", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "_ribbon", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: G(),
            });
        }
        _afterNew() {
          (this._settings.themeTags = se.mergeTags(this._settings.themeTags, [
            "chord",
          ])),
            this.linksContainer.setAll({ x: a.CI, y: a.CI }),
            this.bulletsContainer.setAll({ x: a.CI, y: a.CI }),
            super._afterNew();
        }
        _fixRibbon(e) {
          e.startAngle(
            (e) =>
              e.startAngle + this.get("startAngle", 0) * J.RADIANS + Math.PI / 2
          ),
            e.endAngle(
              (e) =>
                e.endAngle + this.get("startAngle", 0) * J.RADIANS + Math.PI / 2
            );
        }
        makeLink(e) {
          const t = this.linksContainer.children.push(this.links.make());
          return (
            this.links.push(t),
            t._setDataItem(e),
            t.set("source", e.get("source")),
            t.set("target", e.get("target")),
            (t.series = this),
            t
          );
        }
        _makeMatrix() {
          const e = [];
          return (
            l.each(this.nodes.dataItems, (t) => {
              const n = [];
              e.push(n);
              let i = t.get("outgoingLinks");
              l.each(this.nodes.dataItems, (e) => {
                let t = 0;
                i &&
                  l.each(i, (n) => {
                    n.get("target") === e && (t = n.get("valueWorking"));
                    let i = this.getPrivate("valueSum", 0),
                      s = this.get("minSize", 0);
                    t > 0 && s > 0 && t < i * s && (t = i * s);
                  }),
                  n.push(t);
              });
            }),
            e
          );
        }
        _prepareChildren() {
          super._prepareChildren(), this._fixRibbon(this._ribbon);
          let e = !1;
          if (
            this._valuesDirty ||
            this._sizeDirty ||
            this.isDirty("padAngle") ||
            this.isDirty("startAngle")
          ) {
            const t = this._makeMatrix();
            this._d3chord.padAngle(this.get("padAngle", 0) * J.RADIANS);
            const n = this.get("sort");
            "ascending" === n
              ? this._d3chord.sortGroups(W)
              : "descending" === n && this._d3chord.sortGroups(Y),
              (this._chordLayout = this._d3chord(t)),
              (e = !0);
          }
          if (e || this.isDirty("radius") || this.isDirty("nodeWidth")) {
            let e =
                se.relativeToValue(
                  this.get("radius", 0),
                  Math.min(this.innerWidth(), this.innerHeight())
                ) / 2,
              t = 0;
            const n = this.get("startAngle", 0),
              i = this.get("nodeWidth", 0);
            l.each(this.nodes.dataItems, (s) => {
              const a = s.get("slice"),
                r = this._chordLayout.groups[t],
                o = r.startAngle * J.DEGREES + n,
                l = r.endAngle * J.DEGREES + n;
              a.setAll({
                radius: e,
                innerRadius: e - i,
                startAngle: o,
                arc: l - o,
              });
              const c = s.get("label");
              c.setAll({ labelAngle: o + (l - o) / 2 }),
                c.setPrivate("radius", e),
                c.setPrivate("innerRadius", 0.1),
                t++;
            });
            const s = e - this.get("nodeWidth", 0);
            l.each(this._chordLayout, (e) => {
              let t = this._linksByIndex[e.source.index + "_" + e.target.index];
              if (
                (t ||
                  (t =
                    this._linksByIndex[e.target.index + "_" + e.source.index]),
                t)
              ) {
                const n = t.get("link");
                this._getLinkPoints(n, s, e),
                  this._updateLink(this._ribbon, n, s, e);
              }
            });
          }
        }
        _getLinkPoints(e, t, n) {
          const i = n.source,
            s = n.target,
            a = this.get("startAngle", 0) * J.RADIANS;
          if (i && s) {
            const n = i.startAngle,
              r = n + (i.endAngle - n) / 2 + a,
              o = s.startAngle,
              l = o + (s.endAngle - o) / 2 + a;
            (e._p0 = { x: t * Math.cos(r), y: t * Math.sin(r) }),
              (e._p1 = { x: t * Math.cos(l), y: t * Math.sin(l) });
          }
        }
        _updateLink(e, t, n, i) {
          i &&
            (e.sourceRadius(se.relativeToValue(t.get("sourceRadius", a.AQ), n)),
            e.targetRadius(se.relativeToValue(t.get("targetRadius", a.AQ), n)),
            t.set("draw", (t) => {
              e.context(t), e(i);
            }));
        }
      }
      Object.defineProperty(ae, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Chord",
      }),
        Object.defineProperty(ae, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: p.classNames.concat([ae.className]),
        });
      class re extends ie {
        _afterNew() {
          (this._settings.themeTags = se.mergeTags(this._settings.themeTags, [
            "chord",
            "link",
            "directed",
          ])),
            super._afterNew();
        }
      }
      Object.defineProperty(re, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ChordLinkDirected",
      }),
        Object.defineProperty(re, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ie.classNames.concat([re.className]),
        });
      class oe extends ae {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_d3chord", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: D(!0, !1),
            }),
            Object.defineProperty(this, "_ribbonArrow", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: F(),
            }),
            Object.defineProperty(this, "links", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new H.o(X.YS.new({}), () =>
                re._new(this._root, { themeTags: ["link", "shape"] }, [
                  this.links.template,
                ])
              ),
            });
        }
        makeLink(e) {
          const t = this.linksContainer.children.push(this.links.make());
          return (
            t._setDataItem(e),
            t.set("source", e.get("source")),
            t.set("target", e.get("target")),
            (t.series = this),
            t
          );
        }
        _afterNew() {
          (this._settings.themeTags = se.mergeTags(this._settings.themeTags, [
            "directed",
          ])),
            super._afterNew(),
            this._markDirtyKey("linkHeadRadius");
        }
        _prepareChildren() {
          const e = "linkHeadRadius";
          if (this.isDirty(e)) {
            const t = this.get(e);
            if (null == t) this._ribbon = G();
            else {
              let e = F();
              e.headRadius(t), (this._ribbon = e);
            }
          }
          super._prepareChildren();
        }
      }
      Object.defineProperty(oe, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ChordDirected",
      }),
        Object.defineProperty(oe, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ae.classNames.concat([oe.className]),
        });
      class le extends ae {
        _afterNew() {
          (this._settings.themeTags = se.mergeTags(this._settings.themeTags, [
            "chord",
            "basic",
          ])),
            super._afterNew();
        }
        _makeMatrix() {
          const e = [];
          return (
            l.each(this.nodes.dataItems, (t) => {
              const n = [];
              e.push(n),
                l.each(this.nodes.dataItems, (e) => {
                  let i = 1;
                  t === e && (i = 0), n.push(i);
                });
            }),
            e
          );
        }
        _updateLink(e, t, n, i) {
          if (((t._type = this.get("linkType")), i)) {
            const e = this.get("linkType");
            t.set("draw", (n) => {
              let i = t._p0,
                s = t._p1;
              i &&
                s &&
                (n.moveTo(i.x, i.y),
                "line" == e
                  ? n.lineTo(s.x, s.y)
                  : n.quadraticCurveTo(0, 0, s.x, s.y));
            });
          }
        }
        _getLinkPoints(e, t, n) {
          const i = e.get("source"),
            s = e.get("target");
          if (i && s) {
            const n = i.get("slice"),
              a = s.get("slice"),
              r = n.get("startAngle", 0) + n.get("arc", 0) / 2,
              o = a.get("startAngle", 0) + a.get("arc", 0) / 2;
            (e._p0 = { x: t * J.cos(r), y: t * J.sin(r) }),
              (e._p1 = { x: t * J.cos(o), y: t * J.sin(o) });
          }
        }
      }
      Object.defineProperty(le, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ChordNonRibbon",
      }),
        Object.defineProperty(le, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ae.classNames.concat([le.className]),
        });
      var ce = n(3497);
      class ue extends Z {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "rectangles", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new H.o(X.YS.new({}), () =>
                ce.c._new(this._root, { themeTags: ["shape"] }, [
                  this.rectangles.template,
                ])
              ),
            }),
            Object.defineProperty(this, "flow", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
        }
        makeNode(e) {
          const t = this.flow,
            n = super.makeNode(e, "sankey"),
            i = n.children.insertIndex(0, this.rectangles.make());
          this.rectangles.push(i),
            i._setSoft("fill", e.get("fill")),
            e.set("rectangle", i),
            n.events.on("dragged", () => {
              const e = n.dataItem.get("d3SankeyNode");
              e &&
                t &&
                ("horizontal" == t.get("orientation")
                  ? ((e.x0 = n.x()), (e.y0 = n.y()))
                  : ((e.x0 = n.y()), (e.y0 = n.x())),
                t.updateSankey());
            });
          const s = this.labels.make();
          return (
            this.labels.push(s),
            t && s.addTag(t.get("orientation", "")),
            n.children.push(s),
            e.set("label", s),
            s._setDataItem(e),
            i._setDataItem(e),
            n
          );
        }
        _positionBullet(e) {
          const t = e.get("sprite");
          if (t) {
            const n = t.dataItem;
            if (n) {
              const t = e.get("sprite");
              if (t) {
                const i = n.get("rectangle"),
                  s = n.get("node"),
                  a = e.get("locationX", 0.5),
                  r = e.get("locationY", 0.5);
                i &&
                  t.setAll({
                    x: s.x() + i.width() * a,
                    y: s.y() + i.height() * r,
                  });
              }
            }
          }
        }
        disposeDataItem(e) {
          super.disposeDataItem(e);
          let t = e.get("rectangle");
          t && (this.rectangles.removeValue(t), t.dispose());
        }
        _updateNodeColor(e) {
          const t = e.get("rectangle");
          t && t.set("fill", e.get("fill"));
        }
      }
      Object.defineProperty(ue, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SankeyNodes",
      }),
        Object.defineProperty(ue, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Z.classNames.concat([ue.className]),
        });
      class he extends ne {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_svgPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              ),
            }),
            Object.defineProperty(this, "_totalLength", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            });
        }
        _beforeChanged() {
          if ((super._beforeChanged(), this.isDirty("source"))) {
            const e = this.get("source");
            if (e) {
              const t = e.get("node");
              this._disposers.push(
                t.events.on("positionchanged", () => {
                  this.markDirty();
                })
              );
            }
          }
          if (this.isDirty("target")) {
            const e = this.get("target");
            if (e) {
              const t = e.get("node");
              this._disposers.push(
                t.events.on("positionchanged", () => {
                  this.markDirty();
                })
              );
            }
          }
          if (this.isPrivateDirty("orientation")) {
            const e = this.series,
              t = this.dataItem;
            t && e && e._updateLinkColor(t);
          }
          const e = this.get("target"),
            t = this.get("source");
          let n, i;
          if (t && e) {
            (this._clear = !0), (n = t.get("node")), (i = e.get("node"));
            let s = 0,
              a = 0,
              r = 0,
              o = 0,
              l = 0,
              c = 0,
              u = 0,
              h = 0,
              d = 0,
              g = 0,
              f = 0,
              p = 0,
              m = 0,
              b = 0,
              y = 0,
              k = 0,
              _ = 0,
              w = 0;
            const v = this.dataItem;
            if (v) {
              const x = v.get("d3SankeyLink");
              if (x) {
                let v = x.width || 0,
                  A = this.getPrivate("orientation");
                "vertical" == A
                  ? (n && (r = n.y()),
                    i && (o = i.y()),
                    (_ = 90),
                    (w = 90),
                    (s = x.y0 || 0),
                    (a = x.y1 || 0),
                    o < r && (([s, a] = [a, s]), ([r, o] = [o, r])),
                    t.get("unknown") && ((s = a), (r += (o - r) / 2)),
                    e.get("unknown") && ((a = s), (o = r + (o - r) / 2)),
                    (l = s - v / 2),
                    (c = r),
                    (u = a - v / 2),
                    (h = o),
                    (d = s + v / 2),
                    (g = a + v / 2),
                    (f = r),
                    (p = o),
                    (m = s),
                    (b = a),
                    (y = r),
                    (k = o))
                  : (n && (s = n.x()),
                    i && (a = i.x()),
                    (r = x.y0 || 0),
                    (o = x.y1 || 0),
                    a < s && (([s, a] = [a, s]), ([r, o] = [o, r])),
                    t.get("unknown") && ((r = o), (s += (a - s) / 2)),
                    e.get("unknown") && ((o = r), (a = s + (a - s) / 2)),
                    (l = s),
                    (c = r - v / 2),
                    (u = a),
                    (h = o - v / 2),
                    (d = s),
                    (g = a),
                    (f = r + v / 2),
                    (p = o + v / 2),
                    (m = s),
                    (b = a),
                    (y = r),
                    (k = o)),
                  J.round(l, 3) == J.round(u, 3) && (u += 0.01),
                  J.round(c, 3) == J.round(h, 3) && (h += 0.01),
                  J.round(d, 3) == J.round(g, 3) && (g += 0.01),
                  J.round(f, 3) == J.round(p, 3) && (p += 0.01);
                let D = this.get("controlPointDistance", 0.2);
                D = Math.min(0.4999, D);
                let N = l + (u - l) * D * J.cos(_),
                  I = c + (h - c) * D * J.sin(_),
                  P = u - (u - l) * D * J.cos(w),
                  L = h - (h - c) * D * J.sin(w),
                  O = m + (b - m) * D * J.cos(_),
                  j = y + (k - y) * D * J.sin(_),
                  S = b - (b - m) * D * J.cos(w),
                  T = k - (k - y) * D * J.sin(w),
                  C = J.getAngle({ x: N, y: I }, { x: P, y: L }),
                  R = ((v / J.cos(C) - v) / J.tan(C)) * J.cos(_),
                  M = (v / J.sin(C) - v) * J.tan(C) * J.sin(_),
                  G = -R / 2 + d + (g - d) * D * J.cos(_),
                  F = -M / 2 + f + (p - f) * D * J.sin(_),
                  W = -R / 2 + g - (g - d) * D * J.cos(w),
                  Y = -M / 2 + p - (p - f) * D * J.sin(w);
                (N += R / 2),
                  (I += M / 2),
                  (P += R / 2),
                  (L += M / 2),
                  "vertical" == A
                    ? ((I = Math.min(h, Math.max(c + 1, I))),
                      (F = Math.min(p, Math.max(f + 1, F))),
                      (L = Math.max(c, Math.min(h - 1, L))),
                      (Y = Math.max(f, Math.min(p - 1, Y))))
                    : ((N = Math.min(u, Math.max(l + 1, N))),
                      (G = Math.min(g, Math.max(d + 1, G))),
                      (P = Math.max(l, Math.min(u - 1, P))),
                      (W = Math.max(d, Math.min(g - 1, W))));
                let z = [
                  [l, c, d, f],
                  [N, I, G, F],
                  [P, L, W, Y],
                  [u, h, g, p],
                ];
                this.set("draw", (e) => {
                  const t = this.series;
                  t._fillGenerator.context(e), t._fillGenerator(z);
                });
                let B = [
                  [m, y],
                  [O, j],
                  [S, T],
                  [b, k],
                ];
                const V = this.series._strokeGenerator(B);
                V &&
                  (this._svgPath.setAttribute("d", V),
                  (this._totalLength = this._svgPath.getTotalLength()));
              }
            }
          }
          this.series &&
            this.dataItem &&
            this.series._positionBullets(this.dataItem);
        }
        getPoint(e) {
          if (this._svgPath && this._svgPath.getAttribute("d")) {
            let t = this._svgPath.getPointAtLength(e * this._totalLength - 0.1),
              n = this._svgPath.getPointAtLength(e * this._totalLength + 0.1),
              i = this.toGlobal(
                this._svgPath.getPointAtLength(e * this._totalLength)
              );
            return { x: i.x, y: i.y, angle: J.getAngle(t, n) };
          }
          return { x: 0, y: 0, angle: 0 };
        }
        _getTooltipPoint() {
          return this.toLocal(super._getTooltipPoint());
        }
      }
      Object.defineProperty(he, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SankeyLink",
      }),
        Object.defineProperty(he, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ne.classNames.concat([he.className]),
        });
      var de = n(3794),
        ge = n(774),
        fe = n(8289),
        pe = n(5892);
      function me(e, t) {
        let n = 0;
        if (void 0 === t) for (let t of e) (t = +t) && (n += t);
        else {
          let i = -1;
          for (let s of e) (s = +t(s, ++i, e)) && (n += s);
        }
        return n;
      }
      function be(e, t) {
        let n;
        if (void 0 === t)
          for (const t of e)
            null != t && (n < t || (void 0 === n && t >= t)) && (n = t);
        else {
          let i = -1;
          for (let s of e)
            null != (s = t(s, ++i, e)) &&
              (n < s || (void 0 === n && s >= s)) &&
              (n = s);
        }
        return n;
      }
      function ye(e, t) {
        let n;
        if (void 0 === t)
          for (const t of e)
            null != t && (n > t || (void 0 === n && t >= t)) && (n = t);
        else {
          let i = -1;
          for (let s of e)
            null != (s = t(s, ++i, e)) &&
              (n > s || (void 0 === n && s >= s)) &&
              (n = s);
        }
        return n;
      }
      function ke(e) {
        return e.target.depth;
      }
      function _e(e) {
        return e.depth;
      }
      function we(e, t) {
        return t - 1 - e.height;
      }
      function ve(e, t) {
        return e.sourceLinks.length ? e.depth : t - 1;
      }
      function xe(e) {
        return e.targetLinks.length
          ? e.depth
          : e.sourceLinks.length
          ? ye(e.sourceLinks, ke) - 1
          : 0;
      }
      function Ae(e) {
        return function () {
          return e;
        };
      }
      function De(e, t) {
        return Ie(e.source, t.source) || e.index - t.index;
      }
      function Ne(e, t) {
        return Ie(e.target, t.target) || e.index - t.index;
      }
      function Ie(e, t) {
        return e.y0 - t.y0;
      }
      function Pe(e) {
        return e.value;
      }
      function Le(e) {
        return e.index;
      }
      function Oe(e) {
        return e.nodes;
      }
      function je(e) {
        return e.links;
      }
      function Se(e, t) {
        const n = e.get(t);
        if (!n) throw new Error("missing: " + t);
        return n;
      }
      function Te({ nodes: e }) {
        for (const t of e) {
          let e = t.y0,
            n = e;
          for (const n of t.sourceLinks)
            (n.y0 = e + n.width / 2), (e += n.width);
          for (const e of t.targetLinks)
            (e.y1 = n + e.width / 2), (n += e.width);
        }
      }
      function Ce() {
        let e,
          t,
          n,
          i = 0,
          s = 0,
          a = 1,
          r = 1,
          o = 24,
          l = 8,
          c = Le,
          u = ve,
          h = Oe,
          d = je,
          g = 6;
        function f() {
          const f = {
            nodes: h.apply(null, arguments),
            links: d.apply(null, arguments),
          };
          return (
            (function ({ nodes: e, links: t }) {
              for (const [t, n] of e.entries())
                (n.index = t), (n.sourceLinks = []), (n.targetLinks = []);
              const i = new Map(e.map((t, n) => [c(t, n, e), t]));
              for (const [e, n] of t.entries()) {
                n.index = e;
                let { source: t, target: s } = n;
                "object" != typeof t && (t = n.source = Se(i, t)),
                  "object" != typeof s && (s = n.target = Se(i, s)),
                  t.sourceLinks.push(n),
                  s.targetLinks.push(n);
              }
              if (null != n)
                for (const { sourceLinks: t, targetLinks: i } of e)
                  t.sort(n), i.sort(n);
            })(f),
            (function ({ nodes: e }) {
              for (const t of e)
                t.value =
                  void 0 === t.fixedValue
                    ? Math.max(me(t.sourceLinks, Pe), me(t.targetLinks, Pe))
                    : t.fixedValue;
            })(f),
            (function ({ nodes: e }) {
              const t = e.length;
              let n = new Set(e),
                i = new Set(),
                s = 0;
              for (; n.size; ) {
                for (const e of n) {
                  e.depth = s;
                  for (const { target: t } of e.sourceLinks) i.add(t);
                }
                if (++s > t) throw new Error("circular link");
                (n = i), (i = new Set());
              }
            })(f),
            (function ({ nodes: e }) {
              const t = e.length;
              let n = new Set(e),
                i = new Set(),
                s = 0;
              for (; n.size; ) {
                for (const e of n) {
                  e.height = s;
                  for (const { source: t } of e.targetLinks) i.add(t);
                }
                if (++s > t) throw new Error("circular link");
                (n = i), (i = new Set());
              }
            })(f),
            (function (n) {
              const c = (function ({ nodes: e }) {
                const n = be(e, (e) => e.depth) + 1,
                  s = (a - i - o) / (n - 1),
                  r = new Array(n);
                for (const t of e) {
                  const e = Math.max(
                    0,
                    Math.min(n - 1, Math.floor(u.call(null, t, n)))
                  );
                  (t.layer = e),
                    (t.x0 = i + e * s),
                    (t.x1 = t.x0 + o),
                    r[e] ? r[e].push(t) : (r[e] = [t]);
                }
                if (t) for (const e of r) e.sort(t);
                return r;
              })(n);
              (e = Math.min(l, (r - s) / (be(c, (e) => e.length) - 1))),
                (function (t) {
                  const n = ye(
                    t,
                    (t) => (r - s - (t.length - 1) * e) / me(t, Pe)
                  );
                  for (const i of t) {
                    let t = s;
                    for (const s of i) {
                      (s.y0 = t), (s.y1 = t + s.value * n), (t = s.y1 + e);
                      for (const e of s.sourceLinks) e.width = e.value * n;
                    }
                    t = (r - t + e) / (i.length + 1);
                    for (let e = 0; e < i.length; ++e) {
                      const n = i[e];
                      (n.y0 += t * (e + 1)), (n.y1 += t * (e + 1));
                    }
                    w(i);
                  }
                })(c);
              for (let e = 0; e < g; ++e) {
                const t = Math.pow(0.99, e),
                  n = Math.max(1 - t, (e + 1) / g);
                m(c, t, n), p(c, t, n);
              }
            })(f),
            Te(f),
            f
          );
        }
        function p(e, n, i) {
          for (let s = 1, a = e.length; s < a; ++s) {
            const a = e[s];
            for (const e of a) {
              let t = 0,
                i = 0;
              for (const { source: n, value: s } of e.targetLinks) {
                let a = s * (e.layer - n.layer);
                (t += v(n, e) * a), (i += a);
              }
              if (!(i > 0)) continue;
              let s = (t / i - e.y0) * n;
              (e.y0 += s), (e.y1 += s), _(e);
            }
            void 0 === t && a.sort(Ie), b(a, i);
          }
        }
        function m(e, n, i) {
          for (let s = e.length - 2; s >= 0; --s) {
            const a = e[s];
            for (const e of a) {
              let t = 0,
                i = 0;
              for (const { target: n, value: s } of e.sourceLinks) {
                let a = s * (n.layer - e.layer);
                (t += x(e, n) * a), (i += a);
              }
              if (!(i > 0)) continue;
              let s = (t / i - e.y0) * n;
              (e.y0 += s), (e.y1 += s), _(e);
            }
            void 0 === t && a.sort(Ie), b(a, i);
          }
        }
        function b(t, n) {
          const i = t.length >> 1,
            a = t[i];
          k(t, a.y0 - e, i - 1, n),
            y(t, a.y1 + e, i + 1, n),
            k(t, r, t.length - 1, n),
            y(t, s, 0, n);
        }
        function y(t, n, i, s) {
          for (; i < t.length; ++i) {
            const a = t[i],
              r = (n - a.y0) * s;
            r > 1e-6 && ((a.y0 += r), (a.y1 += r)), (n = a.y1 + e);
          }
        }
        function k(t, n, i, s) {
          for (; i >= 0; --i) {
            const a = t[i],
              r = (a.y1 - n) * s;
            r > 1e-6 && ((a.y0 -= r), (a.y1 -= r)), (n = a.y0 - e);
          }
        }
        function _({ sourceLinks: e, targetLinks: t }) {
          if (void 0 === n) {
            for (const {
              source: { sourceLinks: e },
            } of t)
              e.sort(Ne);
            for (const {
              target: { targetLinks: t },
            } of e)
              t.sort(De);
          }
        }
        function w(e) {
          if (void 0 === n)
            for (const { sourceLinks: t, targetLinks: n } of e)
              t.sort(Ne), n.sort(De);
        }
        function v(t, n) {
          let i = t.y0 - ((t.sourceLinks.length - 1) * e) / 2;
          for (const { target: s, width: a } of t.sourceLinks) {
            if (s === n) break;
            i += a + e;
          }
          for (const { source: e, width: s } of n.targetLinks) {
            if (e === t) break;
            i -= s;
          }
          return i;
        }
        function x(t, n) {
          let i = n.y0 - ((n.targetLinks.length - 1) * e) / 2;
          for (const { source: s, width: a } of n.targetLinks) {
            if (s === t) break;
            i += a + e;
          }
          for (const { target: e, width: s } of t.sourceLinks) {
            if (e === n) break;
            i -= s;
          }
          return i;
        }
        return (
          (f.update = function (e) {
            return Te(e), e;
          }),
          (f.nodeId = function (e) {
            return arguments.length
              ? ((c = "function" == typeof e ? e : Ae(e)), f)
              : c;
          }),
          (f.nodeAlign = function (e) {
            return arguments.length
              ? ((u = "function" == typeof e ? e : Ae(e)), f)
              : u;
          }),
          (f.nodeSort = function (e) {
            return arguments.length ? ((t = e), f) : t;
          }),
          (f.nodeWidth = function (e) {
            return arguments.length ? ((o = +e), f) : o;
          }),
          (f.nodePadding = function (t) {
            return arguments.length ? ((l = e = +t), f) : l;
          }),
          (f.nodes = function (e) {
            return arguments.length
              ? ((h = "function" == typeof e ? e : Ae(e)), f)
              : h;
          }),
          (f.links = function (e) {
            return arguments.length
              ? ((d = "function" == typeof e ? e : Ae(e)), f)
              : d;
          }),
          (f.linkSort = function (e) {
            return arguments.length ? ((n = e), f) : n;
          }),
          (f.size = function (e) {
            return arguments.length
              ? ((i = s = 0), (a = +e[0]), (r = +e[1]), f)
              : [a - i, r - s];
          }),
          (f.extent = function (e) {
            return arguments.length
              ? ((i = +e[0][0]),
                (a = +e[1][0]),
                (s = +e[0][1]),
                (r = +e[1][1]),
                f)
              : [
                  [i, s],
                  [a, r],
                ];
          }),
          (f.iterations = function (e) {
            return arguments.length ? ((g = +e), f) : g;
          }),
          f
        );
      }
      class Re extends p {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "links", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new H.o(X.YS.new({}), () =>
                he._new(this._root, { themeTags: ["link", "shape"] }, [
                  this.links.template,
                ])
              ),
            }),
            Object.defineProperty(this, "nodes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.children.push(ue.new(this._root, {})),
            }),
            Object.defineProperty(this, "_d3Sankey", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: Ce(),
            }),
            Object.defineProperty(this, "_d3Graph", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_fillGenerator", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: (0, de.Z)(),
            }),
            Object.defineProperty(this, "_strokeGenerator", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: (0, ge.Z)(),
            });
        }
        _afterNew() {
          (this._settings.themeTags = se.mergeTags(this._settings.themeTags, [
            "sankey",
            this._settings.orientation || "horizontal",
          ])),
            this._fillGenerator.y0(function (e) {
              return e[3];
            }),
            this._fillGenerator.x0(function (e) {
              return e[2];
            }),
            this._fillGenerator.y1(function (e) {
              return e[1];
            }),
            this._fillGenerator.x1(function (e) {
              return e[0];
            }),
            super._afterNew();
        }
        makeLink(e) {
          const t = e.get("source"),
            n = e.get("target"),
            i = this.links.make();
          return (
            t.get("unknown") && (i.addTag("source"), i.addTag("unknown")),
            n.get("unknown") && (i.addTag("target"), i.addTag("unknown")),
            this.linksContainer.children.push(i),
            i._setDataItem(e),
            i.set("source", t),
            i.set("target", n),
            (i.series = this),
            this.links.push(i),
            i
          );
        }
        updateSankey() {
          const e = this._d3Graph;
          e &&
            (this._d3Sankey.update(e),
            l.each(this.dataItems, (e) => {
              const t = e.get("link");
              t.setPrivate("orientation", this.get("orientation")),
                t.markDirty();
            }));
        }
        _updateLinkColor(e) {
          super._updateLinkColor(e);
          const t = this.get("orientation"),
            n = e.get("link")._fillGradient,
            i = e.get("link")._strokeGradient;
          "vertical" == t
            ? (n && n.set("rotation", 90), i && i.set("rotation", 90))
            : (n && n.set("rotation", 0), i && i.set("rotation", 0));
        }
        _getBulletLocation(e) {
          return "vertical" == this.get("orientation")
            ? e.get("locationY", 0)
            : e.get("locationX", 0);
        }
        _prepareChildren() {
          super._prepareChildren();
          let e = !1;
          if (
            ("vertical" == this.get("orientation") && (e = !0),
            this.isDirty("orientation") || this.isDirty("linkTension"))
          ) {
            const t = this.get("linkTension", 0.5);
            e
              ? (this._fillGenerator.curve((0, pe.$)(t)),
                this._strokeGenerator.curve((0, pe.$)(t)))
              : (this._fillGenerator.curve((0, fe.G)(t)),
                this._strokeGenerator.curve((0, fe.G)(t)));
          }
          if (
            (this._valuesDirty ||
              this._sizeDirty ||
              this.isDirty("nodePadding") ||
              this.isDirty("nodeWidth") ||
              this.isDirty("nodeAlign") ||
              this.isDirty("nodeSort") ||
              this.isDirty("orientation") ||
              this.isDirty("linkTension") ||
              this.isDirty("linkSort")) &&
            this._nodesData.length > 0
          ) {
            const t = this._d3Sankey;
            let n = this.innerWidth(),
              i = this.innerHeight();
            switch (
              (e && ([n, i] = [i, n]),
              t.size([n, i]),
              t.nodePadding(this.get("nodePadding", 10)),
              t.nodeWidth(this.get("nodeWidth", 10)),
              t.nodeSort(this.get("nodeSort", null)),
              t.linkSort(this.get("linkSort")),
              this.get("nodeAlign"))
            ) {
              case "right":
                t.nodeAlign(we);
                break;
              case "justify":
                t.nodeAlign(ve);
                break;
              case "center":
                t.nodeAlign(xe);
                break;
              default:
                t.nodeAlign(_e);
            }
            (this._d3Graph = t({
              nodes: this._nodesData,
              links: this._linksData,
            })),
              l.each(this.dataItems, (e) => {
                const t = e.get("link");
                t.setPrivate("orientation", this.get("orientation")),
                  t.markDirty();
              });
            const s = this._d3Graph;
            if (s) {
              const t = s.nodes;
              l.each(t, (t) => {
                const n = t.dataItem,
                  i = n.get("node");
                let s, a, r, o;
                e
                  ? ((s = t.y0), (a = t.y1), (r = t.x0), (o = t.x1))
                  : ((s = t.x0), (a = t.x1), (r = t.y0), (o = t.y1)),
                  f.isNumber(s) &&
                    f.isNumber(a) &&
                    f.isNumber(r) &&
                    f.isNumber(o) &&
                    (i.setAll({ x: s, y: r, width: a - s, height: o - r }),
                    n.get("rectangle").setAll({ width: a - s, height: o - r }));
              });
            }
          }
        }
      }
      Object.defineProperty(Re, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Sankey",
      }),
        Object.defineProperty(Re, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: p.classNames.concat([Re.className]),
        });
      var Me = n(8035);
      class Ge extends Z {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "labels", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new H.o(X.YS.new({}), () =>
                K._._new(this._root, {}, [this.labels.template])
              ),
            }),
            Object.defineProperty(this, "flow", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_dAngle", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "circles", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new H.o(X.YS.new({}), () =>
                Me.C._new(this._root, { themeTags: ["shape"] }, [
                  this.circles.template,
                ])
              ),
            });
        }
        makeNode(e) {
          const t = super.makeNode(e, "ArcDiagram"),
            n = t.children.insertIndex(0, this.circles.make());
          e.set("circle", n), n._setSoft("fill", e.get("fill"));
          const i = this.labels.make();
          return (
            this.labels.push(i),
            i.addTag("flow"),
            i.addTag("arcdiagram"),
            i.addTag("node"),
            t.children.push(i),
            e.set("label", i),
            i._setDataItem(e),
            n._setDataItem(e),
            t
          );
        }
        disposeDataItem(e) {
          super.disposeDataItem(e);
          let t = e.get("circle");
          t && (this.circles.removeValue(t), t.dispose());
        }
        _updateNodeColor(e) {
          const t = e.get("circle");
          t && t.set("fill", e.get("fill"));
        }
      }
      Object.defineProperty(Ge, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ArcDiagramNodes",
      }),
        Object.defineProperty(Ge, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Z.classNames.concat([Ge.className]),
        });
      class Fe extends ne {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_p0", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_p1", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_radius", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            });
        }
        _beforeChanged() {
          if ((super._beforeChanged(), this.isDirty("source"))) {
            const e = this.get("source");
            if (e) {
              const t = e.get("node");
              this._disposers.push(
                t.events.on("positionchanged", () => {
                  this._markDirtyKey("stroke");
                })
              );
            }
          }
          if (this.isDirty("target")) {
            const e = this.get("target");
            if (e) {
              const t = e.get("node");
              this._disposers.push(
                t.events.on("positionchanged", () => {
                  this._markDirtyKey("stroke");
                })
              );
            }
          }
          if (this.isPrivateDirty("orientation")) {
            const e = this.series,
              t = this.dataItem;
            t && e && e._updateLinkColor(t);
          }
          this.series &&
            this.dataItem &&
            this.series._positionBullets(this.dataItem),
            "gradient" == this.get("strokeStyle")
              ? this.set("isMeasured", !0)
              : this.set("isMeasured", !1);
        }
        _changed() {
          super._changed(), this._clear && this._draw();
        }
        _draw() {
          const e = this.get("target"),
            t = this.get("source");
          if (t && e) {
            let n = t.get("node"),
              i = e.get("node");
            const s = n.x(),
              a = n.y(),
              r = i.x(),
              o = i.y();
            (this._p0 = { x: s, y: a }), (this._p1 = { x: r, y: o });
            let l = 0;
            if ("vertical" == this.getPrivate("orientation")) {
              l = (o - a) / 2;
              let e = 1;
              a > o && (e = -1),
                this._display.arc(s, a + l, l * e, -Math.PI / 2, Math.PI / 2);
            } else {
              l = (r - s) / 2;
              let e = 1;
              s > r && (e = -1),
                this._display.arc(s + l, a, l * e, -Math.PI, 0);
            }
            this._radius = l;
          }
        }
        getPoint(e) {
          if (this._p0 && this._p1) {
            const t = this._radius;
            if ("vertical" == this.getPrivate("orientation")) {
              let n = 180 * e - 90;
              return {
                y: this._p0.y + t + t * J.sin(n),
                x: t * J.cos(n),
                angle: n + 90,
              };
            }
            {
              let n = 180 + 180 * e;
              return {
                x: this._p0.x + t + t * J.cos(n),
                y: t * J.sin(n),
                angle: n + 90,
              };
            }
          }
          return { x: 0, y: 0, angle: 0 };
        }
      }
      Object.defineProperty(Fe, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ArcDiagramLink",
      }),
        Object.defineProperty(Fe, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ne.classNames.concat([Fe.className]),
        });
      class We extends p {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "links", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new H.o(X.YS.new({}), () =>
                Fe._new(this._root, { themeTags: ["link", "shape"] }, [
                  this.links.template,
                ])
              ),
            }),
            Object.defineProperty(this, "nodes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.children.push(Ge.new(this._root, {})),
            });
        }
        _afterNew() {
          (this._settings.themeTags = se.mergeTags(this._settings.themeTags, [
            "arcdiagram",
            this._settings.orientation || "horizontal",
          ])),
            super._afterNew(),
            this.nodes.children.push(this.bulletsContainer);
        }
        makeLink(e) {
          const t = this.nodes.children.moveValue(this.links.make(), 0);
          return (
            this.links.push(t),
            t._setDataItem(e),
            t.set("source", e.get("source")),
            t.set("target", e.get("target")),
            (t.series = this),
            t
          );
        }
        _prepareChildren() {
          if (
            (super._prepareChildren(),
            this._valuesDirty || this._sizeDirty || this.isDirty("orientation"))
          ) {
            let e = 1;
            const t = this.get("orientation");
            l.each(this.dataItems, (e) => {
              e.get("link").setPrivate("orientation", this.get("orientation"));
            }),
              (e = "vertical" == t ? this.innerHeight() : this.innerWidth());
            let n = 0,
              i = 1 / 0,
              s = this.get("radiusKey");
            "none" != s &&
              l.each(this.nodes.dataItems, (e) => {
                let t = e.get(s + "Working");
                (n += t), (i = Math.min(i, t));
              });
            const a = this.nodes.dataItems.length,
              r = this.get("nodePadding", 10),
              o = this.get("minRadius", 5);
            (e -= a * (r + 2 * o)), e <= 0 && (e = 0);
            let c = e / (n - a * i),
              u = 0;
            const h = this.get("animationDuration", 0),
              d = this.get("animationEasing");
            l.each(this.nodes.dataItems, (n) => {
              let l = n.get(s + "Working");
              const g = n.get("node");
              let f = o + (c * (l - i)) / 2;
              if (("none" == s && (f = o + e / a / 2), "vertical" == t)) {
                g.set("x", 0);
                const e = u + r + f;
                0 == g.y()
                  ? g.set("y", e)
                  : g.animate({ key: "y", to: e, duration: h, easing: d });
              } else {
                g.set("y", 0);
                const e = u + r + f;
                0 == g.x()
                  ? g.set("x", e)
                  : g.animate({ key: "x", to: e, duration: h, easing: d });
              }
              (u = u + r + 2 * f), n.get("circle").set("radius", f);
            });
          }
        }
        _updateLinkColor(e) {
          super._updateLinkColor(e);
          const t = this.get("orientation"),
            n = e.get("link")._fillGradient,
            i = e.get("link")._strokeGradient;
          "vertical" == t
            ? (n && n.set("rotation", 90), i && i.set("rotation", 90))
            : (n && n.set("rotation", 0), i && i.set("rotation", 0));
        }
      }
      Object.defineProperty(We, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ArcDiagram",
      }),
        Object.defineProperty(We, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: p.classNames.concat([We.className]),
        });
    },
    906: function (e, t, n) {
      n.r(t),
        n.d(t, {
          am5flow: function () {
            return i;
          },
        });
      const i = n(2924);
    },
  },
  function (e) {
    var t = (906, e((e.s = 906))),
      n = window;
    for (var i in t) n[i] = t[i];
    t.__esModule && Object.defineProperty(n, "__esModule", { value: !0 });
  },
]);
