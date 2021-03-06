function launchParticlesJS(a, b) {
  function c() {
    pJS.fn.canvasInit(),
      pJS.fn.canvasSize(),
      pJS.fn.canvasPaint(),
      pJS.fn.particlesCreate(),
      pJS.fn.particlesDraw();
  }
  function d() {
    pJS.fn.particlesDraw(), (pJS.fn.requestAnimFrame = requestAnimFrame(d));
  }
  var e = document.querySelector("#" + a + " > canvas");
  if (
    ((pJS = {
      canvas: { el: e, w: e.offsetWidth, h: e.offsetHeight },
      particles: {
        color: "#fff",
        shape: "circle",
        opacity: 1,
        size: 2.5,
        size_random: !0,
        nb: 200,
        line_linked: {
          enable_auto: !0,
          distance: 100,
          color: "#fff",
          opacity: 1,
          width: 1,
          condensed_mode: { enable: !0, rotateX: 65e3, rotateY: 65e3 }
        },
        anim: { enable: !0, speed: 1 },
        array: []
      },
      interactivity: {
        enable: !0,
        mouse: { distance: 100 },
        detect_on: "canvas",
        mode: "grab",
        line_linked: { opacity: 1 },
        events: { onclick: { enable: !0, mode: "push", nb: 4 } }
      },
      retina_detect: !1,
      fn: { vendors: { interactivity: {} } }
    }),
    b)
  ) {
    if (b.particles) {
      var f = b.particles;
      if (
        (f.color && (pJS.particles.color = f.color),
        f.shape && (pJS.particles.shape = f.shape),
        f.opacity && (pJS.particles.opacity = f.opacity),
        f.size && (pJS.particles.size = f.size),
        0 == f.size_random && (pJS.particles.size_random = f.size_random),
        f.nb && (pJS.particles.nb = f.nb),
        f.line_linked)
      ) {
        var g = f.line_linked;
        if (
          (0 == g.enable_auto &&
            (pJS.particles.line_linked.enable_auto = g.enable_auto),
          g.distance && (pJS.particles.line_linked.distance = g.distance),
          g.color && (pJS.particles.line_linked.color = g.color),
          g.opacity && (pJS.particles.line_linked.opacity = g.opacity),
          g.width && (pJS.particles.line_linked.width = g.width),
          g.condensed_mode)
        ) {
          var h = g.condensed_mode;
          0 == h.enable &&
            (pJS.particles.line_linked.condensed_mode.enable = h.enable),
            h.rotateX &&
              (pJS.particles.line_linked.condensed_mode.rotateX = h.rotateX),
            h.rotateY &&
              (pJS.particles.line_linked.condensed_mode.rotateY = h.rotateY);
        }
      }
      if (f.anim) {
        var i = f.anim;
        0 == i.enable && (pJS.particles.anim.enable = i.enable),
          i.speed && (pJS.particles.anim.speed = i.speed);
      }
    }
    if (b.interactivity) {
      var j = b.interactivity;
      if (
        (0 == j.enable && (pJS.interactivity.enable = j.enable),
        j.mouse &&
          j.mouse.distance &&
          (pJS.interactivity.mouse.distance = j.mouse.distance),
        j.detect_on && (pJS.interactivity.detect_on = j.detect_on),
        j.mode && (pJS.interactivity.mode = j.mode),
        j.line_linked &&
          j.line_linked.opacity &&
          (pJS.interactivity.line_linked.opacity = j.line_linked.opacity),
        j.events)
      ) {
        var k = j.events;
        if (k.onclick) {
          var l = k.onclick;
          0 == l.enable && (pJS.interactivity.events.onclick.enable = !1),
            "push" != l.mode &&
              (pJS.interactivity.events.onclick.mode = l.mode),
            l.nb && (pJS.interactivity.events.onclick.nb = l.nb);
        }
      }
    }
    pJS.retina_detect = b.retina_detect;
  }
  (pJS.particles.color_rgb = hexToRgb(pJS.particles.color)),
    (pJS.particles.line_linked.color_rgb_line = hexToRgb(
      pJS.particles.line_linked.color
    )),
    pJS.retina_detect &&
      window.devicePixelRatio > 1 &&
      ((pJS.retina = !0),
      (pJS.canvas.w = 2 * pJS.canvas.el.offsetWidth),
      (pJS.canvas.h = 2 * pJS.canvas.el.offsetHeight),
      (pJS.particles.anim.speed = 2 * pJS.particles.anim.speed),
      (pJS.particles.line_linked.distance =
        2 * pJS.particles.line_linked.distance),
      (pJS.particles.line_linked.width = 2 * pJS.particles.line_linked.width),
      (pJS.interactivity.mouse.distance =
        2 * pJS.interactivity.mouse.distance)),
    (pJS.fn.canvasInit = function() {
      pJS.canvas.ctx = pJS.canvas.el.getContext("2d");
    }),
    (pJS.fn.canvasSize = function() {
      (pJS.canvas.el.width = pJS.canvas.w),
        (pJS.canvas.el.height = pJS.canvas.h),
        (window.onresize = function() {
          pJS &&
            ((pJS.canvas.w = pJS.canvas.el.offsetWidth),
            (pJS.canvas.h = pJS.canvas.el.offsetHeight),
            pJS.retina && ((pJS.canvas.w *= 2), (pJS.canvas.h *= 2)),
            (pJS.canvas.el.width = pJS.canvas.w),
            (pJS.canvas.el.height = pJS.canvas.h),
            pJS.fn.canvasPaint(),
            pJS.particles.anim.enable ||
              (pJS.fn.particlesRemove(), pJS.fn.canvasRemove(), c()));
        });
    }),
    (pJS.fn.canvasPaint = function() {
      pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    }),
    (pJS.fn.canvasRemove = function() {
      pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    }),
    (pJS.fn.particle = function(a, b, c) {
      (this.x = c ? c.x : Math.random() * pJS.canvas.w),
        (this.y = c ? c.y : Math.random() * pJS.canvas.h),
        (this.radius =
          (pJS.particles.size_random ? Math.random() : 1) * pJS.particles.size),
        pJS.retina && (this.radius *= 2),
        (this.color = a),
        (this.opacity = b),
        (this.vx = -0.5 + Math.random()),
        (this.vy = -0.5 + Math.random()),
        (this.draw = function() {
          switch (((pJS.canvas.ctx.fillStyle =
            "rgba(" +
            this.color.r +
            "," +
            this.color.g +
            "," +
            this.color.b +
            "," +
            this.opacity +
            ")"),
          pJS.canvas.ctx.beginPath(),
          pJS.particles.shape)) {
            case "circle":
              pJS.canvas.ctx.arc(
                this.x,
                this.y,
                this.radius,
                0,
                2 * Math.PI,
                !1
              );
              break;
            case "edge":
              pJS.canvas.ctx.rect(
                this.x,
                this.y,
                2 * this.radius,
                2 * this.radius
              );
              break;
            case "triangle":
              pJS.canvas.ctx.moveTo(this.x, this.y),
                pJS.canvas.ctx.lineTo(
                  this.x + this.radius,
                  this.y + 2 * this.radius
                ),
                pJS.canvas.ctx.lineTo(
                  this.x - this.radius,
                  this.y + 2 * this.radius
                ),
                pJS.canvas.ctx.closePath();
          }
          pJS.canvas.ctx.fill();
        });
    }),
    (pJS.fn.particlesCreate = function() {
      for (var a = 0; a < pJS.particles.nb; a++)
        pJS.particles.array.push(
          new pJS.fn.particle(pJS.particles.color_rgb, pJS.particles.opacity)
        );
    }),
    (pJS.fn.particlesAnimate = function() {
      for (var a = 0; a < pJS.particles.array.length; a++) {
        var b = pJS.particles.array[a];
        (b.x += b.vx * (pJS.particles.anim.speed / 2)),
          (b.y += b.vy * (pJS.particles.anim.speed / 2)),
          b.x - b.radius > pJS.canvas.w
            ? (b.x = b.radius)
            : b.x + b.radius < 0 && (b.x = pJS.canvas.w + b.radius),
          b.y - b.radius > pJS.canvas.h
            ? (b.y = b.radius)
            : b.y + b.radius < 0 && (b.y = pJS.canvas.h + b.radius);
        for (var c = a + 1; c < pJS.particles.array.length; c++) {
          var d = pJS.particles.array[c];
          if (
            (pJS.particles.line_linked.enable_auto &&
              pJS.fn.vendors.distanceParticles(b, d),
            pJS.interactivity.enable)
          )
            switch (pJS.interactivity.mode) {
              case "grab":
                pJS.fn.vendors.interactivity.grabParticles(b, d);
            }
        }
      }
    }),
    (pJS.fn.particlesDraw = function() {
      pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h),
        pJS.fn.particlesAnimate();
      for (var a = 0; a < pJS.particles.array.length; a++) {
        var b = pJS.particles.array[a];
        b.draw(
          "rgba(" +
            b.color.r +
            "," +
            b.color.g +
            "," +
            b.color.b +
            "," +
            b.opacity +
            ")"
        );
      }
    }),
    (pJS.fn.particlesRemove = function() {
      pJS.particles.array = [];
    }),
    (pJS.fn.vendors.distanceParticles = function(a, b) {
      var c = a.x - b.x,
        d = a.y - b.y,
        e = Math.sqrt(c * c + d * d);
      if (e <= pJS.particles.line_linked.distance) {
        var f = pJS.particles.line_linked.color_rgb_line;
        if (
          (pJS.canvas.ctx.beginPath(),
          (pJS.canvas.ctx.strokeStyle =
            "rgba(" +
            f.r +
            "," +
            f.g +
            "," +
            f.b +
            "," +
            (pJS.particles.line_linked.opacity -
              e / pJS.particles.line_linked.distance) +
            ")"),
          pJS.canvas.ctx.moveTo(a.x, a.y),
          pJS.canvas.ctx.lineTo(b.x, b.y),
          (pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width),
          pJS.canvas.ctx.stroke(),
          pJS.canvas.ctx.closePath(),
          pJS.particles.line_linked.condensed_mode.enable)
        ) {
          var c = a.x - b.x,
            d = a.y - b.y,
            g = c / (1e3 * pJS.particles.line_linked.condensed_mode.rotateX),
            h = d / (1e3 * pJS.particles.line_linked.condensed_mode.rotateY);
          (b.vx += g), (b.vy += h);
        }
      }
    }),
    (pJS.fn.vendors.interactivity.listeners = function() {
      if ("window" == pJS.interactivity.detect_on) var a = window;
      else var a = pJS.canvas.el;
      if (
        ((a.onmousemove = function(b) {
          if (a == window)
            var c = b.clientX,
              d = b.clientY;
          else
            var c = b.offsetX,
              d = b.offsetY;
          pJS &&
            ((pJS.interactivity.mouse.pos_x = c),
            (pJS.interactivity.mouse.pos_y = d),
            pJS.retina &&
              ((pJS.interactivity.mouse.pos_x *= 2),
              (pJS.interactivity.mouse.pos_y *= 2)),
            (pJS.interactivity.status = "mousemove"));
        }),
        (a.onmouseleave = function() {
          pJS &&
            ((pJS.interactivity.mouse.pos_x = 0),
            (pJS.interactivity.mouse.pos_y = 0),
            (pJS.interactivity.status = "mouseleave"));
        }),
        pJS.interactivity.events.onclick.enable)
      )
        switch (pJS.interactivity.events.onclick.mode) {
          case "push":
            a.onclick = function() {
              if (pJS)
                for (var a = 0; a < pJS.interactivity.events.onclick.nb; a++)
                  pJS.particles.array.push(
                    new pJS.fn.particle(
                      pJS.particles.color_rgb,
                      pJS.particles.opacity,
                      {
                        x: pJS.interactivity.mouse.pos_x,
                        y: pJS.interactivity.mouse.pos_y
                      }
                    )
                  );
            };
            break;
          case "remove":
            a.onclick = function() {
              pJS.particles.array.splice(
                0,
                pJS.interactivity.events.onclick.nb
              );
            };
        }
    }),
    (pJS.fn.vendors.interactivity.grabParticles = function(a, b) {
      var c = a.x - b.x,
        d = a.y - b.y,
        e = Math.sqrt(c * c + d * d),
        f = a.x - pJS.interactivity.mouse.pos_x,
        g = a.y - pJS.interactivity.mouse.pos_y,
        h = Math.sqrt(f * f + g * g);
      if (
        e <= pJS.particles.line_linked.distance &&
        h <= pJS.interactivity.mouse.distance &&
        "mousemove" == pJS.interactivity.status
      ) {
        var i = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.beginPath(),
          (pJS.canvas.ctx.strokeStyle =
            "rgba(" +
            i.r +
            "," +
            i.g +
            "," +
            i.b +
            "," +
            (pJS.interactivity.line_linked.opacity -
              h / pJS.interactivity.mouse.distance) +
            ")"),
          pJS.canvas.ctx.moveTo(a.x, a.y),
          pJS.canvas.ctx.lineTo(
            pJS.interactivity.mouse.pos_x,
            pJS.interactivity.mouse.pos_y
          ),
          (pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width),
          pJS.canvas.ctx.stroke(),
          pJS.canvas.ctx.closePath();
      }
    }),
    (pJS.fn.vendors.destroy = function() {
      cancelAnimationFrame(pJS.fn.requestAnimFrame), e.remove(), delete pJS;
    }),
    c(),
    pJS.particles.anim.enable && d(),
    pJS.interactivity.enable && pJS.fn.vendors.interactivity.listeners();
}
function hexToRgb(a) {
  var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  a = a.replace(b, function(a, b, c, d) {
    return b + b + c + c + d + d;
  });
  var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
  return c
    ? { r: parseInt(c[1], 16), g: parseInt(c[2], 16), b: parseInt(c[3], 16) }
    : null;
}
(window.Modernizr = (function(a, b, c) {
  function d(a) {
    s.cssText = a;
  }
  function e(a, b) {
    return typeof a === b;
  }
  function f(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function g(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!f(e, "-") && s[e] !== c) return "pfx" == b ? e : !0;
    }
    return !1;
  }
  function h(a, b, d) {
    for (var f in a) {
      var g = b[a[f]];
      if (g !== c)
        return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g;
    }
    return !1;
  }
  function i(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
      f = (a + " " + u.join(d + " ") + d).split(" ");
    return e(b, "string") || e(b, "undefined")
      ? g(f, b)
      : ((f = (a + " " + v.join(d + " ") + d).split(" ")), h(f, b, c));
  }
  var j,
    k,
    l,
    m = "2.8.3",
    n = {},
    o = !0,
    p = b.documentElement,
    q = "modernizr",
    r = b.createElement(q),
    s = r.style,
    t = ({}.toString, "Webkit Moz O ms"),
    u = t.split(" "),
    v = t.toLowerCase().split(" "),
    w = {},
    x = [],
    y = x.slice,
    z = {}.hasOwnProperty;
  (l =
    e(z, "undefined") || e(z.call, "undefined")
      ? function(a, b) {
          return b in a && e(a.constructor.prototype[b], "undefined");
        }
      : function(a, b) {
          return z.call(a, b);
        }),
    Function.prototype.bind ||
      (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError();
        var c = y.call(arguments, 1),
          d = function() {
            if (this instanceof d) {
              var e = function() {};
              e.prototype = b.prototype;
              var f = new e(),
                g = b.apply(f, c.concat(y.call(arguments)));
              return Object(g) === g ? g : f;
            }
            return b.apply(a, c.concat(y.call(arguments)));
          };
        return d;
      }),
    (w.flexbox = function() {
      return i("flexWrap");
    }),
    (w.canvas = function() {
      var a = b.createElement("canvas");
      return !(!a.getContext || !a.getContext("2d"));
    }),
    (w.csstransforms = function() {
      return !!i("transform");
    });
  for (var A in w)
    l(w, A) &&
      ((k = A.toLowerCase()), (n[k] = w[A]()), x.push((n[k] ? "" : "no-") + k));
  return (
    (n.addTest = function(a, b) {
      if ("object" == typeof a) for (var d in a) l(a, d) && n.addTest(d, a[d]);
      else {
        if (((a = a.toLowerCase()), n[a] !== c)) return n;
        (b = "function" == typeof b ? b() : b),
          "undefined" != typeof o &&
            o &&
            (p.className += " " + (b ? "" : "no-") + a),
          (n[a] = b);
      }
      return n;
    }),
    d(""),
    (r = j = null),
    (n._version = m),
    (n._domPrefixes = v),
    (n._cssomPrefixes = u),
    (n.testProp = function(a) {
      return g([a]);
    }),
    (n.testAllProps = i),
    (p.className =
      p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
      (o ? " js " + x.join(" ") : "")),
    n
  );
})(this, this.document)),
  (window.requestAnimFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(a) {
        window.setTimeout(a, 1e3 / 60);
      }
    );
  })()),
  (window.cancelRequestAnimFrame = (function() {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout
    );
  })()),
  (window.particlesJS = function(a, b) {
    "string" != typeof a && ((b = a), (a = "particles-js")),
      a || (a = "particles-js");
    var c = document.createElement("canvas");
    (c.style.width = "100%"), (c.style.height = "100%");
    var d = document.getElementById(a).appendChild(c);
    null != d && launchParticlesJS(a, b);
  }),
  $(function() {
    var a = function() {
      var a = window.innerWidth,
        b = window.innerHeight,
        c = (a + b) / 12,
        d = "#930F1B";
      particlesJS("particles", {
        particles: {
          color: d,
          shape: "circle",
          opacity: 1,
          size: 2.5,
          size_random: !0,
          nb: c,
          line_linked: {
            enable_auto: !0,
            distance: 250,
            color: d,
            opacity: 0.5,
            width: 1,
            condensed_mode: { enable: !1, rotateX: 600, rotateY: 600 }
          },
          anim: { enable: !0, speed: 2.5 }
        },
        interactivity: {
          enable: !1,
          mouse: { distance: 250 },
          detect_on: "canvas",
          mode: "grab",
          line_linked: { opacity: 0.5 },
          events: { onclick: { push_particles: { enable: !0, nb: 4 } } }
        },
        retina_detect: !0
      });
    };
    Modernizr.canvas && a();
  }),
  $(function() {
    var a = $("html, body"),
      b = $(".nav a, .callToAction"),
      c = $(".navContainer"),
      d = $(".nav");
    a.on("click", function() {
      d.hide();
    }),
      c.on("click", function(a) {
        a.stopPropagation(), d.toggle();
      }),
      b.on("click", function() {
        var b = $(this).attr("href"),
          c = $(b).offset().top,
          d = window.innerWidth,
          e = 106;
        return 960 > d && (e = 0), a.animate({ scrollTop: c - e }, 500), !1;
      }),
      a.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(b) {
        (b.which > 0 ||
          "mousedown" === b.type ||
          "mousewheel" === b.type ||
          "touchstart" == b.type) &&
          a.stop().unbind("scroll mousedown DOMMouseScroll mousewheel keyup");
      });
  });
