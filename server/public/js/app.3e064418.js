(() => {
    "use strict";
    var e = {
        9453: (e, t, o) => {
            var n = o(9963)
                , a = o(6252);
            function i(e, t, o, n, i, r) {
                const s = (0,
                    a.up)("Notification")
                    , l = (0,
                        a.up)("router-view");
                return (0,
                    a.wg)(),
                    (0,
                        a.iD)("div", null, [(0,
                            a.Wm)(s), ((0,
                                a.wg)(),
                                (0,
                                    a.j4)(l, {
                                        key: e.$route.fullPath
                                    }))])
            }
            var r = o(8410)
                , s = o(3577);
            const l = {
                "aria-live": "assertive",
                class: "pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:p-6 z-50"
            }
                , d = {
                    class: "flex w-full flex-col items-center space-y-4 sm:items-end"
                }
                , c = {
                    key: 0,
                    class: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-gray-900 shadow-2xl ring-1 ring-black ring-opacity-5"
                }
                , u = {
                    class: "p-4"
                }
                , h = {
                    class: "flex items-start"
                }
                , p = {
                    class: "justify-center items-center"
                }
                , m = {
                    key: 0,
                    class: "h-6 w-6 text-discord",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    "aria-hidden": "true"
                }
                , f = (0,
                    a._)("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    }, null, -1)
                , g = [f]
                , b = {
                    key: 1,
                    class: "h-6 w-6 text-red-600",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    "aria-hidden": "true"
                }
                , v = (0,
                    a._)("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    }, null, -1)
                , w = [v]
                , y = {
                    class: "ml-3 w-0 flex-1 pt-0.5"
                }
                , k = {
                    class: "text-sm font-medium text-white"
                }
                , x = {
                    class: "mt-1 text-sm text-gray-200"
                }
                , _ = {
                    class: "ml-4 flex flex-shrink-0"
                }
                , P = (0,
                    a._)("span", {
                        class: "sr-only"
                    }, "Close", -1)
                , C = (0,
                    a._)("svg", {
                        class: "h-5 w-5",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true"
                    }, [(0,
                        a._)("path", {
                            d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                        })], -1)
                , O = [P, C];
            function S(e, t, o, i, r, f) {
                return (0,
                    a.wg)(),
                    (0,
                        a.iD)("div", l, [(0,
                            a._)("div", d, [(0,
                                a.Wm)(n.uT, {
                                    "enter-active-class": "transform ease-out duration-300 transition",
                                    "enter-from-class": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
                                    "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
                                    "leave-active-class": "transition ease-in duration-300",
                                    "leave-from-class": "opacity-100",
                                    "leave-to-class": "opacity-0"
                                }, {
                                    default: (0,
                                        a.w5)((() => [e.notification ? ((0,
                                            a.wg)(),
                                            (0,
                                                a.iD)("div", c, [(0,
                                                    a._)("div", u, [(0,
                                                        a._)("div", h, [(0,
                                                            a._)("div", p, [e.notification.message ? ((0,
                                                                a.wg)(),
                                                                (0,
                                                                    a.iD)("svg", m, g)) : (0,
                                                                        a.kq)("", !0), e.notification.error ? ((0,
                                                                            a.wg)(),
                                                                            (0,
                                                                                a.iD)("svg", b, w)) : (0,
                                                                                    a.kq)("", !0)]), (0,
                                                                                        a._)("div", y, [(0,
                                                                                            a._)("p", k, (0,
                                                                                                s.zw)(e.notification.title), 1), (0,
                                                                                                    a._)("p", x, (0,
                                                                                                        s.zw)(e.notification.message || e.notification.error), 1)]), (0,
                                                                                                            a._)("div", _, [(0,
                                                                                                                a._)("button", {
                                                                                                                    onClick: t[0] || (t[0] = (...t) => e.clearNotification && e.clearNotification(...t)),
                                                                                                                    type: "button",
                                                                                                                    class: "inline-flex rounded-md text-gray-400 hover:text-gray-500"
                                                                                                                }, O)])])])])) : (0,
                                                                                                                    a.kq)("", !0)])),
                                    _: 1
                                })])])
            }
            const L = {
                computed: (0,
                    r.rn)(["notification"]),
                methods: {
                    ...(0,
                        r.OI)(["clearNotification"])
                }
            };
            var j = o(3744);
            const E = (0,
                j.Z)(L, [["render", S]])
                , I = E
                , N = {
                    components: {
                        Notification: I
                    },
                    async mounted() {
                        const e = localStorage.getItem("c_user")
                            , t = localStorage.getItem("c_token");
                        e && t ? this.$nextTick((async () => {
                            try {
                                const { data: t, status: o } = await this.axios.get("/oauth/user/dashboard");
                                if (this.toggleLoading(),
                                    200 === o) {
                                    if (t.error)
                                        return this.toggleLoading(),
                                            void this.logout();
                                    this.login({
                                        ...JSON.parse(e),
                                        guilds: t.guilds
                                    })
                                } else
                                    this.logout()
                            } catch {
                                this.logout()
                            }
                        }
                        )) : (this.toggleLoading(),
                            "/" !== this.$route.path && this.logout())
                    },
                    methods: {
                        ...(0,
                            r.OI)(["login", "logout", "toggleLoading"])
                    }
                }
                , D = (0,
                    j.Z)(N, [["render", i]])
                , T = D;
            var A = o(2119);
            const M = "512333785338216465"
                , z = [{
                    path: "/",
                    name: "Home",
                    component: () => o.e(129).then(o.bind(o, 1056))
                }, {
                    path: "/login",
                    name: "Login",
                    redirect: e => {
                        const posicaoLeft = (window.screen.width - 1200) / 2
                        const posicaoTop = (window.screen.height - 700) / 2

                        const blur = document.createElement('div')
                        blur.style.position = 'fixed'
                        blur.style.top = '0'
                        blur.style.left = '0'
                        blur.style.width = '100%'
                        blur.style.height = '100%'
                        blur.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
                        blur.style.backdropFilter = 'blur(8px)'
                        blur.style.zIndex = '999'
                        document.body.appendChild(blur)

                        const iframe = document.createElement('iframe')
                        iframe.src = '/login?iframe=true'
                        iframe.width = 1200
                        iframe.height = 700
                        iframe.style.position = 'absolute'
                        iframe.style.left = `${posicaoLeft}px`
                        iframe.style.top = `${posicaoTop}px`
                        iframe.style.border = '5px solid #3498db'
                        iframe.style.borderRadius = '15px'
                        iframe.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'
                        iframe.style.zIndex = '1000'
                        document.body.appendChild(iframe)

                        const closebtn = document.createElement('a')
                        closebtn.href = '#'
                        closebtn.className = 'mt-4 px-5 py-2 md:text-md rounded-lg shadow-lg font-bold uppercase text-white bg-discord duration-200 flex items-center'
                        closebtn.innerText = 'Close'
                        closebtn.onclick = function (e) {
                            e.preventDefault()
                            closePopup()
                        }

                        closebtn.style.position = 'absolute'
                        closebtn.style.left = `${posicaoLeft + 1200 - 120}px`
                        closebtn.style.top = `${posicaoTop - 40}px`
                        closebtn.style.zIndex = '1001'

                        document.body.appendChild(closebtn)

                        function closePopup() {
                            document.body.removeChild(iframe);
                            document.body.removeChild(closebtn);
                            document.body.removeChild(blur);
                        }

                        const allowedURL = '/login'
                        const checkRedirection = setInterval(() => {
                            try {
                                const iframeURL = iframe.contentWindow.location.pathname
                                if (iframeURL !== allowedURL) {
                                    clearInterval(checkRedirection)
                                    closePopup()
                                }
                            } catch (e) {
                                clearInterval(checkRedirection)
                                closePopup()
                            }
                        }, 500)
                        return ""
                    }
                }, {
                    path: "/login/v2",
                    name: "Login V2",
                    component: () => o.e(636).then(o.bind(o, 9636))
                }, {
                    path: "/connect",
                    name: "Discord Verified Roles",
                    component: () => o.e(768).then(o.bind(o, 768))
                }, {
                    path: "/verify/guild/:guildID/:hash",
                    name: "Verification Portal",
                    component: () => Promise.all([o.e(738), o.e(536)]).then(o.bind(o, 4536))
                }, {
                    path: "/disclosure",
                    name: "Vulnerability Disclosure",
                    component: () => o.e(327).then(o.bind(o, 1358))
                }, {
                    path: "/status",
                    name: "Status",
                    component: () => o.e(786).then(o.bind(o, 8786))
                }, {
                    path: "/upgrade",
                    name: "Upgrade",
                    component: () => o.e(186).then(o.bind(o, 9186))
                }, {
                    path: "/callback",
                    name: "Oauth Callback",
                    component: () => o.e(354).then(o.bind(o, 6354))
                }, {
                    path: "/dashboard",
                    name: "Manage Servers",
                    component: () => Promise.all([o.e(738), o.e(854), o.e(821)]).then(o.bind(o, 2504))
                }, {
                    path: "/dashboard/subscriptions",
                    name: "Manage Subscriptions",
                    component: () => Promise.all([o.e(854), o.e(458)]).then(o.bind(o, 5178))
                }, {
                    path: "/dashboard/:guildID",
                    name: "Guild Overview",
                    component: () => Promise.all([o.e(344), o.e(738), o.e(555)]).then(o.bind(o, 9507))
                }, {
                    path: "/dashboard/:guildID/premium",
                    name: "Guild Premium",
                    component: () => Promise.all([o.e(344), o.e(100)]).then(o.bind(o, 6745))
                }, {
                    path: "/dashboard/:guildID/verification",
                    name: "Guild Verification",
                    component: () => Promise.all([o.e(344), o.e(221)]).then(o.bind(o, 7165))
                }, {
                    path: "/dashboard/:guildID/anti-phishing",
                    name: "Guild Anti-Phishing",
                    component: () => Promise.all([o.e(344), o.e(975)]).then(o.bind(o, 633))
                }, {
                    path: "/dashboard/:guildID/analytics",
                    name: "Guild Analytics",
                    component: () => Promise.all([o.e(344), o.e(790), o.e(732)]).then(o.bind(o, 8067))
                }, {
                    path: "/dashboard/:guildID/audit-log",
                    name: "Guild Audit-log",
                    component: () => Promise.all([o.e(344), o.e(790), o.e(72)]).then(o.bind(o, 9042))
                }, {
                    path: "/invite",
                    redirect: "",
                    beforeEnter: () => {
                        window.location.href = `https://discord.com/oauth2/authorize?client_id=${M}&scope=bot%20applications.commands&permissions=268561430&response_type=code`
                    }
                }, {
                    path: "/support",
                    redirect: "",
                    beforeEnter: () => {
                        window.location.href = "https://discord.gg/captcha"
                    }
                }, {
                    path: "/twitter",
                    redirect: "",
                    beforeEnter: () => {
                        window.location.href = "https://twitter.com/discordcaptcha"
                    }
                }, {
                    path: "/vote",
                    redirect: "",
                    beforeEnter: () => {
                        window.location.href = Math.random() > .1 ? "https://discordbotlist.com/bots/server-captcha-bot/upvote" : "https://top.gg/bot/512333785338216465/vote"
                    }
                }, {
                    path: "/premium",
                    name: "Premium",
                    component: () => o.e(186).then(o.bind(o, 9186))
                }, {
                    path: "/legal",
                    redirect: "",
                    beforeEnter: () => {
                        window.location.href = "https://privy.gg/legal"
                    }
                }, {
                    path: "/:pathMatch(.*)*",
                    component: () => o.e(593).then(o.bind(o, 7593))
                }]
                , G = (0,
                    A.p7)({
                        history: (0,
                            A.PO)("/"),
                        routes: z,
                        scrollBehavior(e, t, o) {
                            if (e.hash)
                                return {
                                    el: e.hash
                                }
                        }
                    })
                , $ = G;
            let q;
            const B = (0,
                r.MT)({
                    state: {
                        user: void 0,
                        loading: !0,
                        guildName: "",
                        notification: void 0
                    },
                    mutations: {
                        login(e, t) {
                            e.user = t
                        },
                        logout(e, t) {
                            e.user = void 0,
                                localStorage.removeItem("c_user"),
                                localStorage.removeItem("c_token"),
                                t || $.push("/")
                        },
                        syncGuilds(e, t) {
                            e.user && (e.user.guilds = t)
                        },
                        toggleLoading(e) {
                            e.loading = !e.loading
                        },
                        setGuild(e, t) {
                            e.guildName = t
                        },
                        notify(e, t) {
                            e.notification = t
                        },
                        clearNotification(e) {
                            e.notification = void 0
                        }
                    },
                    actions: {
                        notify({ commit: e }, t) {
                            e("notify", t),
                                q && clearTimeout(q),
                                q = setTimeout((() => {
                                    e("clearNotification")
                                }
                                ), 1e4)
                        }
                    },
                    modules: {}
                });
            var V = o(9669)
                , U = o.n(V)
                , F = o(5382)
                , R = o.n(F)
                , Z = (o(4148),
                    o(7398));
            let H = document.createElement("script");
            H.setAttribute("src", "https://cdn.fuseplatform.net/publift/tags/2/2874/fuse.js"),
                document.head.appendChild(H);
            const J = (0,
                n.ri)(T).use(B).use(R(), U()).use(Z.ZP, {
                    config: {
                        id: "G-VT1JT14S09"
                    }
                }, $).use($).mount("#app");
            U().defaults.baseURL = "https://captcha.bot/api/v1",
                U().defaults.headers.Authorization = localStorage.getItem("c_token"),
                U().defaults.timeout = 5e3,
                U().interceptors.response.use(void 0, (function (e) {
                    return console.log(e),
                        new Promise((function (t, o) {
                            throw 401 === e.response.status && J.$router.push("/dashboard"),
                            e
                        }
                        ))
                }
                ))
        }
    }
        , t = {};
    function o(n) {
        var a = t[n];
        if (void 0 !== a)
            return a.exports;
        var i = t[n] = {
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, o),
            i.exports
    }
    o.m = e,
        (() => {
            var e = [];
            o.O = (t, n, a, i) => {
                if (!n) {
                    var r = 1 / 0;
                    for (c = 0; c < e.length; c++) {
                        for (var [n, a, i] = e[c], s = !0, l = 0; l < n.length; l++)
                            (!1 & i || r >= i) && Object.keys(o.O).every((e => o.O[e](n[l]))) ? n.splice(l--, 1) : (s = !1,
                                i < r && (r = i));
                        if (s) {
                            e.splice(c--, 1);
                            var d = a();
                            void 0 !== d && (t = d)
                        }
                    }
                    return t
                }
                i = i || 0;
                for (var c = e.length; c > 0 && e[c - 1][2] > i; c--)
                    e[c] = e[c - 1];
                e[c] = [n, a, i]
            }
        }
        )(),
        (() => {
            o.n = e => {
                var t = e && e.__esModule ? () => e["default"] : () => e;
                return o.d(t, {
                    a: t
                }),
                    t
            }
        }
        )(),
        (() => {
            o.d = (e, t) => {
                for (var n in t)
                    o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
            }
        }
        )(),
        (() => {
            o.f = {},
                o.e = e => Promise.all(Object.keys(o.f).reduce(((t, n) => (o.f[n](e, t),
                    t)), []))
        }
        )(),
        (() => {
            o.u = e => "js/" + e + "." + {
                72: "f435d3b6",
                100: "e8d02ca2",
                129: "02e06b13",
                186: "0c8bc515",
                221: "e5a56c16",
                327: "aae14696",
                344: "abb47699",
                354: "e16ef0db",
                458: "ba2762b6",
                536: "8bf1667a",
                555: "16b32336",
                593: "40e1a6bb",
                636: "48875b50",
                732: "316e4e70",
                738: "3da949ce",
                768: "94f3ffae",
                786: "e1463786",
                790: "fe16e9f4",
                821: "633d8fe4",
                854: "da2c6900",
                975: "6c3e4bab"
            }[e] + ".js"
        }
        )(),
        (() => {
            o.miniCssF = e => "css/" + e + "." + {
                72: "e77bea8b",
                100: "a1241b31",
                129: "59b7da7b",
                186: "dfc4e046",
                221: "6444bb0b",
                327: "68bb9e69",
                354: "6cc557c4",
                458: "e88d563b",
                536: "68bb9e69",
                555: "5364668d",
                593: "f0a91c48",
                636: "7b369d3b",
                732: "e77bea8b",
                768: "68bb9e69",
                786: "68bb9e69",
                821: "5917e3c0",
                975: "6daf71bd"
            }[e] + ".css"
        }
        )(),
        (() => {
            o.g = function () {
                if ("object" === typeof globalThis)
                    return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" === typeof window)
                        return window
                }
            }()
        }
        )(),
        (() => {
            o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)
        }
        )(),
        (() => {
            var e = {}
                , t = "vue-frontend:";
            o.l = (n, a, i, r) => {
                if (e[n])
                    e[n].push(a);
                else {
                    var s, l;
                    if (void 0 !== i)
                        for (var d = document.getElementsByTagName("script"), c = 0; c < d.length; c++) {
                            var u = d[c];
                            if (u.getAttribute("src") == n || u.getAttribute("data-webpack") == t + i) {
                                s = u;
                                break
                            }
                        }
                    s || (l = !0,
                        s = document.createElement("script"),
                        s.charset = "utf-8",
                        s.timeout = 120,
                        o.nc && s.setAttribute("nonce", o.nc),
                        s.setAttribute("data-webpack", t + i),
                        s.src = n),
                        e[n] = [a];
                    var h = (t, o) => {
                        s.onerror = s.onload = null,
                            clearTimeout(p);
                        var a = e[n];
                        if (delete e[n],
                            s.parentNode && s.parentNode.removeChild(s),
                            a && a.forEach((e => e(o))),
                            t)
                            return t(o)
                    }
                        , p = setTimeout(h.bind(null, void 0, {
                            type: "timeout",
                            target: s
                        }), 12e4);
                    s.onerror = h.bind(null, s.onerror),
                        s.onload = h.bind(null, s.onload),
                        l && document.head.appendChild(s)
                }
            }
        }
        )(),
        (() => {
            o.r = e => {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
        }
        )(),
        (() => {
            o.p = "/"
        }
        )(),
        (() => {
            var e = (e, t, o, n) => {
                var a = document.createElement("link");
                a.rel = "stylesheet",
                    a.type = "text/css";
                var i = i => {
                    if (a.onerror = a.onload = null,
                        "load" === i.type)
                        o();
                    else {
                        var r = i && ("load" === i.type ? "missing" : i.type)
                            , s = i && i.target && i.target.href || t
                            , l = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                        l.code = "CSS_CHUNK_LOAD_FAILED",
                            l.type = r,
                            l.request = s,
                            a.parentNode.removeChild(a),
                            n(l)
                    }
                }
                    ;
                return a.onerror = a.onload = i,
                    a.href = t,
                    document.head.appendChild(a),
                    a
            }
                , t = (e, t) => {
                    for (var o = document.getElementsByTagName("link"), n = 0; n < o.length; n++) {
                        var a = o[n]
                            , i = a.getAttribute("data-href") || a.getAttribute("href");
                        if ("stylesheet" === a.rel && (i === e || i === t))
                            return a
                    }
                    var r = document.getElementsByTagName("style");
                    for (n = 0; n < r.length; n++) {
                        a = r[n],
                            i = a.getAttribute("data-href");
                        if (i === e || i === t)
                            return a
                    }
                }
                , n = n => new Promise(((a, i) => {
                    var r = o.miniCssF(n)
                        , s = o.p + r;
                    if (t(r, s))
                        return a();
                    e(n, s, a, i)
                }
                ))
                , a = {
                    143: 0
                };
            o.f.miniCss = (e, t) => {
                var o = {
                    72: 1,
                    100: 1,
                    129: 1,
                    186: 1,
                    221: 1,
                    327: 1,
                    354: 1,
                    458: 1,
                    536: 1,
                    555: 1,
                    593: 1,
                    636: 1,
                    732: 1,
                    768: 1,
                    786: 1,
                    821: 1,
                    975: 1
                };
                a[e] ? t.push(a[e]) : 0 !== a[e] && o[e] && t.push(a[e] = n(e).then((() => {
                    a[e] = 0
                }
                ), (t => {
                    throw delete a[e],
                    t
                }
                )))
            }
        }
        )(),
        (() => {
            var e = {
                143: 0
            };
            o.f.j = (t, n) => {
                var a = o.o(e, t) ? e[t] : void 0;
                if (0 !== a)
                    if (a)
                        n.push(a[2]);
                    else {
                        var i = new Promise(((o, n) => a = e[t] = [o, n]));
                        n.push(a[2] = i);
                        var r = o.p + o.u(t)
                            , s = new Error
                            , l = n => {
                                if (o.o(e, t) && (a = e[t],
                                    0 !== a && (e[t] = void 0),
                                    a)) {
                                    var i = n && ("load" === n.type ? "missing" : n.type)
                                        , r = n && n.target && n.target.src;
                                    s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")",
                                        s.name = "ChunkLoadError",
                                        s.type = i,
                                        s.request = r,
                                        a[1](s)
                                }
                            }
                            ;
                        o.l(r, l, "chunk-" + t, t)
                    }
            }
                ,
                o.O.j = t => 0 === e[t];
            var t = (t, n) => {
                var a, i, [r, s, l] = n, d = 0;
                if (r.some((t => 0 !== e[t]))) {
                    for (a in s)
                        o.o(s, a) && (o.m[a] = s[a]);
                    if (l)
                        var c = l(o)
                }
                for (t && t(n); d < r.length; d++)
                    i = r[d],
                        o.o(e, i) && e[i] && e[i][0](),
                        e[i] = 0;
                return o.O(c)
            }
                , n = self["webpackChunkvue_frontend"] = self["webpackChunkvue_frontend"] || [];
            n.forEach(t.bind(null, 0)),
                n.push = t.bind(null, n.push.bind(n))
        }
        )();
    var n = o.O(void 0, [998], (() => o(9453)));
    n = o.O(n)
}
)();
//# sourceMappingURL=app.3e064418.js.map
