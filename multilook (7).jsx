import { useState } from "react";

const NEON = "#39FF14";
const ADMIN_PASS = "multilook2024";

// ══════════════════════════════════════════
//  YAMALITO — Poodle dorado con polito blanco
// ══════════════════════════════════════════
function Yamalito({ size = 100, happy = false, waving = false }) {
  const scale = size / 160;
  return (
    <svg width={size} height={size} viewBox="0 0 160 175" xmlns="http://www.w3.org/2000/svg"
      style={{ transition: "transform 0.4s cubic-bezier(.34,1.56,.64,1)", transform: happy ? "scale(1.15) rotate(-6deg)" : "scale(1)", overflow: "visible" }}>
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#39FF14" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#39FF14" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {happy && <ellipse cx="80" cy="155" rx="55" ry="18" fill="url(#glow)" />}

      {/* ── CUERPO ── */}
      <ellipse cx="80" cy="128" rx="34" ry="30" fill="#C8781A"/>
      {/* Pelaje rizado del cuerpo */}
      {[...Array(10)].map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const cx2 = 80 + 30 * Math.cos(angle);
        const cy2 = 128 + 24 * Math.sin(angle);
        return <circle key={i} cx={cx2} cy={cy2} r="9" fill="#B36515"/>;
      })}

      {/* ── POLITO BLANCO ── */}
      <ellipse cx="80" cy="133" rx="24" ry="20" fill="white"/>
      {/* Cuello del polo */}
      <path d="M68 116 Q80 122 92 116" fill="none" stroke="#e0e0e0" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Línea central polo */}
      <line x1="80" y1="118" x2="80" y2="138" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="2,2"/>
      {/* Logo M en el polo */}
      <text x="80" y="130" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#111" fontFamily="system-ui" letterSpacing="-0.5">MULTILOOK</text>

      {/* ── CABEZA ── */}
      {/* Pelaje rizado exterior cabeza */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const cx2 = 80 + 30 * Math.cos(angle);
        const cy2 = 72 + 26 * Math.sin(angle);
        return <circle key={i} cx={cx2} cy={cy2} r="11" fill="#B36515"/>;
      })}
      {/* Base cabeza */}
      <circle cx="80" cy="72" r="26" fill="#D4892A"/>
      {/* Zona facial más clara */}
      <ellipse cx="80" cy="76" rx="18" ry="16" fill="#E8A040"/>

      {/* ── OREJAS ── */}
      <ellipse cx="50" cy="66" rx="13" ry="18" fill="#C47820"/>
      {/* Pelaje en oreja izq */}
      {[0,1,2].map(i => <circle key={i} cx={50 + (i-1)*5} cy={56 + i*3} r="7" fill="#B36515"/>)}
      <ellipse cx="110" cy="66" rx="13" ry="18" fill="#C47820"/>
      {[0,1,2].map(i => <circle key={i} cx={110 + (i-1)*5} cy={56 + i*3} r="7" fill="#B36515"/>)}

      {/* ── OJOS ── */}
      <circle cx="70" cy="68" r="6" fill="#1a0a00"/>
      <circle cx="90" cy="68" r="6" fill="#1a0a00"/>
      <circle cx="68" cy="66" r="2" fill="white"/>
      <circle cx="88" cy="66" r="2" fill="white"/>
      {/* Cejas */}
      <path d="M65 62 Q70 60 75 62" fill="none" stroke="#7a4a10" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M85 62 Q90 60 95 62" fill="none" stroke="#7a4a10" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Guiño si happy */}
      {happy && <path d="M67 68 Q70 65 73 68" fill="none" stroke="#1a0a00" strokeWidth="2.5" strokeLinecap="round"/>}

      {/* ── NARIZ ── */}
      <ellipse cx="80" cy="77" rx="6" ry="4.5" fill="#2d1000"/>
      <ellipse cx="78.5" cy="75.5" rx="2" ry="1.3" fill="#4a2000" opacity="0.6"/>
      {/* Línea nariz */}
      <line x1="80" y1="81" x2="80" y2="85" stroke="#2d1000" strokeWidth="1.5"/>

      {/* ── BOCA ── */}
      <path d={happy ? "M73 85 Q80 93 87 85" : "M73 85 Q80 90 87 85"} fill="none" stroke="#2d1000" strokeWidth="2" strokeLinecap="round"/>
      {/* Lengua cuando happy */}
      {happy && <ellipse cx="80" cy="91" rx="6" ry="5" fill="#FF7096"/>}
      {happy && <line x1="80" y1="88" x2="80" y2="96" stroke="#e05070" strokeWidth="1" opacity="0.6"/>}

      {/* ── MEJILLAS rosadas ── */}
      <ellipse cx="62" cy="80" rx="6" ry="4" fill="#FF9999" opacity="0.45"/>
      <ellipse cx="98" cy="80" rx="6" ry="4" fill="#FF9999" opacity="0.45"/>

      {/* ── BRAZOS ── */}
      <ellipse cx="46" cy="122" rx="11" ry="20" fill="#C47820" transform="rotate(20 46 122)"/>
      {/* Pelaje brazo izq */}
      {[0,1,2].map(i => <circle key={i} cx={40+i*4} cy={110+i*5} r="6" fill="#B36515"/>)}
      <ellipse cx="114" cy="122" rx="11" ry="20" fill="#C47820" transform={waving ? "rotate(-35 114 122)" : "rotate(-20 114 122)"}/>
      {[0,1,2].map(i => <circle key={i} cx={120-i*4} cy={110+i*5} r="6" fill="#B36515"/>)}

      {/* ── PATAS delanteras ── */}
      <ellipse cx="36" cy="140" rx="11" ry="9" fill="#A05C10"/>
      <circle cx="31" cy="143" r="3.5" fill="#8a4a08"/>
      <circle cx="36" cy="145" r="3.5" fill="#8a4a08"/>
      <circle cx="41" cy="143" r="3.5" fill="#8a4a08"/>
      <ellipse cx="124" cy="140" rx="11" ry="9" fill="#A05C10"/>
      <circle cx="119" cy="143" r="3.5" fill="#8a4a08"/>
      <circle cx="124" cy="145" r="3.5" fill="#8a4a08"/>
      <circle cx="129" cy="143" r="3.5" fill="#8a4a08"/>

      {/* ── PATAS traseras ── */}
      <ellipse cx="60" cy="155" rx="12" ry="14" fill="#C47820"/>
      <ellipse cx="100" cy="155" rx="12" ry="14" fill="#C47820"/>
      <ellipse cx="58" cy="165" rx="13" ry="8" fill="#A05C10"/>
      <ellipse cx="102" cy="165" rx="13" ry="8" fill="#A05C10"/>

      {/* ── COLA ── */}
      <path d="M113 118 Q130 100 125 88 Q120 76 130 72" fill="none" stroke="#C47820" strokeWidth="10" strokeLinecap="round"/>
      <circle cx="131" cy="70" r="9" fill="#B36515"/>
      <circle cx="128" cy="63" r="7" fill="#C47820"/>

      {/* Celebración */}
      {happy && <>
        <text x="22" y="45" fontSize="18">⭐</text>
        <text x="118" y="42" fontSize="18">✨</text>
        <text x="65" y="20" fontSize="15">🎉</text>
        <text x="10" y="75" fontSize="13">💫</text>
        <text x="130" y="80" fontSize="13">💚</text>
      </>}
    </svg>
  );
}

// ══════════════════════════════════════════
//  LOGO
// ══════════════════════════════════════════
function MLogo({ dark = false, big = false }) {
  const sz = big ? "text-4xl" : "text-xl";
  const iconSz = big ? "w-12 h-12 text-3xl" : "w-9 h-9 text-xl";
  return (
    <div className="flex items-center gap-2 select-none">
      <div className={`relative ${iconSz} flex items-center justify-center rounded-xl overflow-hidden flex-shrink-0`}
        style={{ background: "linear-gradient(135deg,#39FF14,#00EEFF)" }}>
        <span className="font-black leading-none text-black" style={{ fontFamily: "system-ui", letterSpacing: "-2px" }}>M</span>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,transparent 46%,white 46%,white 54%,transparent 54%)", opacity: 0.88 }}/>
      </div>
      <span className={`font-black ${sz} tracking-tight ${dark ? "text-white" : "text-gray-900"}`} style={{ fontFamily: "system-ui" }}>
        multi<span style={{ color: NEON }}>look</span>
      </span>
    </div>
  );
}

// ══════════════════════════════════════════
//  SPLASH / LOGIN
// ══════════════════════════════════════════
function SplashScreen({ onClient, onAdmin }) {
  const [showLogin, setShowLogin] = useState(false);
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);

  const tryLogin = () => {
    if (pass === ADMIN_PASS) { onAdmin(); }
    else { setErr(true); setPass(""); }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 20% 20%, #0f2a0f 0%, #080808 50%, #1a001a 100%)" }}>
      {/* Orbes decorativos */}
      <div className="absolute w-80 h-80 rounded-full pointer-events-none" style={{ background: "#39FF14", opacity: 0.06, filter: "blur(80px)", top: "-60px", left: "-80px" }}/>
      <div className="absolute w-64 h-64 rounded-full pointer-events-none" style={{ background: "#FF3EFF", opacity: 0.07, filter: "blur(70px)", bottom: "-40px", right: "-60px" }}/>
      <div className="absolute w-48 h-48 rounded-full pointer-events-none" style={{ background: "#00EEFF", opacity: 0.05, filter: "blur(60px)", top: "40%", right: "10%" }}/>

      <div className="relative z-10 flex flex-col items-center text-center max-w-xs w-full gap-5">
        {/* Logo */}
        <MLogo dark big />

        {/* Tagline */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-gray-500 text-sm">No importa tu plan,</p>
          <p className="font-black text-white text-xl leading-snug">nosotros tenemos<br/>
            <span style={{ color: NEON }}>tu look.</span>
          </p>
        </div>

        {/* Mascota */}
        <div className="relative my-2">
          <div className="absolute -inset-4 rounded-full pointer-events-none" style={{ background: NEON, opacity: 0.08, filter: "blur(24px)" }}/>
          <Yamalito size={160} happy={showLogin} waving />
        </div>

        {/* CTAs */}
        {!showLogin ? (
          <div className="flex flex-col gap-3 w-full">
            <button onClick={onClient}
              className="w-full py-4 rounded-2xl font-black text-black text-lg tracking-tight transition-all hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(90deg,#39FF14,#00EEFF)", boxShadow: "0 0 32px #39FF1444" }}>
              Ver catálogo →
            </button>
            <p className="text-gray-700 text-xs">Tu moda favorita, a un clic de distancia</p>
            <button onClick={() => { setShowLogin(true); setErr(false); }}
              className="text-gray-700 text-xs hover:text-gray-400 transition-colors mt-1 underline underline-offset-4">
              Acceso administrador
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3 w-full">
            <div className="bg-gray-900/80 rounded-2xl p-4 border border-gray-800">
              <p className="text-gray-500 text-xs mb-3 uppercase tracking-widest font-semibold">🔐 Clave de admin</p>
              <input type="password" autoFocus value={pass}
                onChange={e => { setPass(e.target.value); setErr(false); }}
                onKeyDown={e => e.key === "Enter" && tryLogin()}
                placeholder="Escribe tu clave..."
                className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 text-center text-lg tracking-widest outline-none border-2 transition-all"
                style={{ borderColor: err ? "#FF3EFF" : "#374151" }} />
              {err && <p className="text-pink-400 text-xs mt-2 font-semibold">❌ Clave incorrecta</p>}
            </div>
            <button onClick={tryLogin}
              className="w-full py-3 rounded-2xl font-black text-black transition-all active:scale-95 hover:scale-105"
              style={{ background: "linear-gradient(90deg,#39FF14,#00EEFF)", boxShadow: "0 0 20px #39FF1433" }}>
              Entrar al panel ✓
            </button>
            <button onClick={() => { setShowLogin(false); setErr(false); setPass(""); }}
              className="text-gray-700 text-xs hover:text-gray-400 transition-colors">← Volver</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════
//  DATOS PRODUCTOS
// ══════════════════════════════════════════
const DEFAULT_PRODUCTS = [
  { id: 1, name: "Hoodie Oversize Drop", price: "89.90", tag: "NEW", img: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=400&q=80", desc: "Tallas: S, M, L, XL" },
  { id: 2, name: "Cargo Jogger Slate",   price: "74.90", tag: "HOT", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&q=80", desc: "Colores: Negro, Gris" },
  { id: 3, name: "Polo Crop Rainbow",    price: "49.90", tag: "",    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80", desc: "Tallas: XS, S, M" },
  { id: 4, name: "Bucket Hat Neo",       price: "35.90", tag: "SALE",img: "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=400&q=80", desc: "Talla única" },
  { id: 5, name: "Tee Minimal Wave",     price: "44.90", tag: "",    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80", desc: "Algodón 100%" },
  { id: 6, name: "Shorts Utility Pop",   price: "59.90", tag: "NEW", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400&q=80", desc: "Tallas: S, M, L" },
];
const TAG_COLORS = { NEW: "#39FF14", HOT: "#FF3EFF", SALE: "#FF6B35" };

// ══════════════════════════════════════════
//  PRODUCT CARD
// ══════════════════════════════════════════
function ProductCard({ product, onAdd }) {
  const [burst, setBurst] = useState(false);
  const handle = () => {
    setBurst(true); onAdd(product);
    setTimeout(() => setBurst(false), 2200);
  };
  return (
    <div className="relative rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
      style={{ border: "2.5px solid transparent", backgroundClip: "padding-box", boxShadow: "0 2px 16px rgba(0,0,0,0.08)", outline: "2.5px solid", outlineColor: "transparent",
        background: "white", borderImage: "linear-gradient(135deg,#39FF14,#FF3EFF,#00EEFF,#FF6B35) 1" }}>
      {burst && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-2xl"
          style={{ background: "rgba(255,255,255,0.94)", animation: "popFade 2.2s ease forwards" }}>
          <Yamalito size={90} happy />
          <span className="text-xs font-black mt-1" style={{ color: NEON }}>¡Añadido! 🎉</span>
        </div>
      )}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img src={product.img} alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        {product.tag && (
          <span className="absolute top-2 left-2 text-xs font-black px-2 py-1 rounded-full text-black"
            style={{ background: TAG_COLORS[product.tag] }}>{product.tag}</span>
        )}
      </div>
      <div className="p-3 flex flex-col gap-2">
        <p className="font-bold text-sm text-gray-900 leading-snug">{product.name}</p>
        {product.desc && <p className="text-gray-400 text-xs">{product.desc}</p>}
        <p className="text-base font-black" style={{ color: NEON }}>S/ {product.price}</p>
        <button onClick={handle}
          className="w-full py-2 rounded-xl text-xs font-black text-black transition-all active:scale-95 hover:scale-105"
          style={{ background: "linear-gradient(90deg,#39FF14,#00EEFF,#FF3EFF)", boxShadow: "0 2px 8px #39FF1433" }}>
          🛒 Añadir al carrito
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════
//  FORMULARIO PRODUCTO (admin)
// ══════════════════════════════════════════
function ProductForm({ initial, onSave, onCancel }) {
  const blank = { name: "", price: "", tag: "", img: "", desc: "" };
  const [form, setForm] = useState(initial || blank);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const valid = form.name.trim() && form.price.trim();

  return (
    <div className="bg-gray-900 rounded-2xl p-5 border border-gray-700 flex flex-col gap-4">
      <h3 className="text-white font-black text-sm">{initial?.id ? "✎ Editar producto" : "＋ Nuevo producto"}</h3>
      {[
        { label: "Nombre del producto *", key: "name", ph: "Ej: Hoodie Oversize Drop" },
        { label: "Precio S/ *", key: "price", ph: "Ej: 89.90" },
        { label: "Descripción / Tallas", key: "desc", ph: "Ej: Tallas S, M, L — Algodón premium" },
        { label: "URL de imagen", key: "img", ph: "https://..." },
      ].map(f => (
        <div key={f.key}>
          <label className="text-gray-400 text-xs mb-1 block">{f.label}</label>
          <input value={form[f.key]} onChange={e => set(f.key, e.target.value)} placeholder={f.ph}
            className="w-full bg-gray-800 text-white rounded-xl px-3 py-2.5 text-sm outline-none border border-gray-700 focus:border-green-400 transition-colors" />
        </div>
      ))}
      <div>
        <label className="text-gray-400 text-xs mb-2 block">Etiqueta especial</label>
        <div className="flex gap-2 flex-wrap">
          {["", "NEW", "HOT", "SALE"].map(t => (
            <button key={t} onClick={() => set("tag", t)}
              className="px-3 py-1.5 rounded-full text-xs font-black border-2 transition-all"
              style={form.tag === t
                ? { background: t ? TAG_COLORS[t] : NEON, color: "#000", borderColor: "transparent" }
                : { background: "transparent", color: "#6b7280", borderColor: "#374151" }}>
              {t || "Sin etiqueta"}
            </button>
          ))}
        </div>
      </div>
      {form.img && (
        <div>
          <label className="text-gray-400 text-xs mb-1 block">Vista previa imagen</label>
          <img src={form.img} alt="preview"
            className="w-full h-40 object-cover rounded-xl border border-gray-700"
            onError={e => e.target.style.display = "none"} />
        </div>
      )}
      <div className="flex gap-2">
        <button onClick={() => valid && onSave(form)} disabled={!valid}
          className="flex-1 py-3 rounded-xl font-black text-black text-sm transition-all active:scale-95"
          style={{ background: valid ? "linear-gradient(90deg,#39FF14,#00EEFF)" : "#333", color: valid ? "#000" : "#666" }}>
          💾 Guardar producto
        </button>
        <button onClick={onCancel}
          className="px-4 py-3 rounded-xl font-bold text-sm text-gray-400 bg-gray-800 hover:bg-gray-700 transition-colors">
          Cancelar
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════
//  PANEL: GESTIONAR PRODUCTOS
// ══════════════════════════════════════════
function PanelProductos({ products, onChange }) {
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");

  const save = (form) => {
    const updated = editing === "new"
      ? [...products, { ...form, id: Date.now() }]
      : products.map(p => p.id === editing.id ? { ...p, ...form } : p);
    onChange(updated); setEditing(null);
  };
  const del = (id) => { if (window.confirm("¿Eliminar este producto?")) onChange(products.filter(p => p.id !== id)); };

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  if (editing) return <ProductForm initial={editing === "new" ? null : editing} onSave={save} onCancel={() => setEditing(null)} />;

  return (
    <div className="flex flex-col gap-4">
      <button onClick={() => setEditing("new")}
        className="w-full py-3 rounded-xl font-black text-black text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
        style={{ background: "linear-gradient(90deg,#39FF14,#00EEFF)", boxShadow: "0 2px 16px #39FF1433" }}>
        ＋ Añadir nuevo producto
      </button>
      <input value={search} onChange={e => setSearch(e.target.value)}
        placeholder="🔍 Buscar producto..."
        className="w-full bg-gray-800 text-white rounded-xl px-3 py-2.5 text-sm outline-none border border-gray-700 focus:border-green-400 transition-colors" />
      <p className="text-gray-600 text-xs">{filtered.length} producto{filtered.length !== 1 ? "s" : ""}</p>
      <div className="flex flex-col gap-2">
        {filtered.map(p => (
          <div key={p.id} className="bg-gray-900 rounded-xl p-3 flex items-center gap-3 border border-gray-800 hover:border-gray-600 transition-colors">
            <img src={p.img} alt={p.name} className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
              onError={e => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Crect width='56' height='56' fill='%23374151'/%3E%3Ctext x='28' y='34' text-anchor='middle' fill='%236b7280' font-size='20'%3E🖼%3C/text%3E%3C/svg%3E"; }} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                <p className="text-white text-xs font-bold truncate">{p.name}</p>
                {p.tag && <span className="text-[10px] font-black px-1.5 py-0.5 rounded-full text-black flex-shrink-0"
                  style={{ background: TAG_COLORS[p.tag] }}>{p.tag}</span>}
              </div>
              <p className="font-black text-sm" style={{ color: NEON }}>S/ {p.price}</p>
              {p.desc && <p className="text-gray-600 text-[10px] truncate">{p.desc}</p>}
            </div>
            <div className="flex flex-col gap-1 flex-shrink-0">
              <button onClick={() => setEditing(p)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all">✎ Editar</button>
              <button onClick={() => del(p.id)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-red-400 bg-red-900/30 hover:bg-red-900/50 transition-all">🗑 Borrar</button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p className="text-gray-600 text-sm text-center py-4">Sin resultados</p>}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════
//  PANEL: PEDIDOS
// ══════════════════════════════════════════
function PanelPedidos({ orders, onReply }) {
  const [replies, setReplies] = useState({});
  if (!orders.length) return (
    <div className="text-center py-12 flex flex-col items-center gap-3">
      <Yamalito size={90} />
      <p className="text-gray-500 text-sm">Sin pedidos aún — Yamalito espera</p>
    </div>
  );
  return (
    <div className="flex flex-col gap-3">
      {orders.map(o => (
        <div key={o.id} className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-white font-black text-sm">Pedido #{o.id}</span>
              <p className="text-gray-500 text-xs mt-0.5">👤 <span className="text-gray-300">{o.client}</span></p>
            </div>
            <span className="text-[10px] text-gray-500 bg-gray-800 px-2 py-1 rounded-full flex-shrink-0">{o.time}</span>
          </div>
          <div className="bg-gray-800 rounded-xl p-2.5 mb-3 flex flex-col gap-1">
            {o.items.map((it, i) => (
              <div key={i} className="flex justify-between text-xs">
                <span className="text-gray-300">{it.name} ×{it.qty}</span>
                <span className="font-black" style={{ color: NEON }}>S/ {it.price}</span>
              </div>
            ))}
            <div className="border-t border-gray-700 mt-1 pt-1 flex justify-between text-xs font-black">
              <span className="text-gray-400">Total</span>
              <span style={{ color: NEON }}>S/ {o.items.reduce((a, it) => a + parseFloat(it.price) * it.qty, 0).toFixed(2)}</span>
            </div>
          </div>
          {o.reply ? (
            <div className="bg-green-900/30 border border-green-900/50 rounded-xl px-3 py-2">
              <p className="text-green-300 text-xs">✓ Respondiste: "{o.reply}"</p>
            </div>
          ) : (
            <div className="flex gap-2">
              <input className="flex-1 bg-gray-800 text-white text-xs rounded-xl px-3 py-2 outline-none border border-gray-700 focus:border-green-400"
                placeholder="Responde al cliente..." value={replies[o.id] || ""}
                onChange={e => setReplies(r => ({ ...r, [o.id]: e.target.value }))} />
              <button className="px-3 rounded-xl text-xs font-black text-black flex-shrink-0"
                style={{ background: "linear-gradient(90deg,#39FF14,#00EEFF)" }}
                onClick={() => { onReply(o.id, replies[o.id] || ""); setReplies(r => ({ ...r, [o.id]: "" })); }}>
                Enviar
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ══════════════════════════════════════════
//  PANEL: ESTADÍSTICAS
// ══════════════════════════════════════════
function PanelEstadisticas({ products, orders }) {
  const totalPedidos = orders.length;
  const totalProductos = products.length;
  const pendientes = orders.filter(o => !o.reply).length;
  const totalVentas = orders.reduce((acc, o) => acc + o.items.reduce((a, it) => a + parseFloat(it.price) * it.qty, 0), 0);

  const stats = [
    { label: "Total ventas", value: `S/ ${totalVentas.toFixed(2)}`, icon: "💰", color: NEON },
    { label: "Pedidos recibidos", value: totalPedidos, icon: "📦", color: "#00EEFF" },
    { label: "Pendientes responder", value: pendientes, icon: "⏳", color: "#FF3EFF" },
    { label: "Productos activos", value: totalProductos, icon: "👕", color: "#FF6B35" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        {stats.map(s => (
          <div key={s.label} className="bg-gray-900 rounded-2xl p-4 border border-gray-800 flex flex-col gap-1">
            <span className="text-2xl">{s.icon}</span>
            <p className="text-2xl font-black" style={{ color: s.color }}>{s.value}</p>
            <p className="text-gray-500 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Productos más vendidos */}
      <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
        <p className="text-white font-black text-sm mb-3">🔥 Productos más pedidos</p>
        {products.slice(0, 4).map((p, i) => (
          <div key={p.id} className="flex items-center gap-3 py-2 border-b border-gray-800 last:border-0">
            <span className="text-xs font-black text-gray-600 w-4">#{i+1}</span>
            <img src={p.img} alt={p.name} className="w-8 h-8 rounded-lg object-cover"/>
            <span className="text-white text-xs flex-1 truncate">{p.name}</span>
            <span className="font-black text-xs" style={{ color: NEON }}>S/ {p.price}</span>
          </div>
        ))}
      </div>

      {/* Compartir */}
      <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
        <p className="text-white font-black text-sm mb-2">📤 Compartir catálogo</p>
        <p className="text-gray-500 text-xs mb-3">Envía este link a tus clientes. Ellos solo verán el catálogo — nunca el panel admin.</p>
        <div className="bg-gray-800 rounded-xl px-3 py-2.5 flex items-center justify-between gap-2">
          <span className="text-green-400 text-xs font-mono truncate">multilook.vercel.app</span>
          <button className="text-[10px] font-black px-2 py-1 rounded-lg flex-shrink-0"
            style={{ background: NEON, color: "#000" }}
            onClick={() => navigator.clipboard?.writeText("multilook.vercel.app")}>
            Copiar
          </button>
        </div>
        <p className="text-gray-700 text-[10px] mt-2">💡 Para tener tu propio link real, escríbeme y te explico cómo publicarlo gratis en Vercel o Netlify.</p>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════
//  PANEL: CONFIGURACIÓN
// ══════════════════════════════════════════
function PanelConfig({ onChangePwd, onLogout }) {
  const [np, setNp] = useState("");
  const [saved, setSaved] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
        <p className="text-white font-black text-sm mb-3">🔐 Cambiar clave de admin</p>
        <input type="password" value={np} onChange={e => setNp(e.target.value)}
          placeholder="Nueva clave..."
          className="w-full bg-gray-800 text-white rounded-xl px-3 py-2.5 text-sm outline-none border border-gray-700 focus:border-green-400 mb-3" />
        <button onClick={() => { if (np.trim()) { onChangePwd(np); setSaved(true); setNp(""); setTimeout(() => setSaved(false), 2000); } }}
          className="w-full py-2.5 rounded-xl font-black text-black text-sm"
          style={{ background: "linear-gradient(90deg,#39FF14,#00EEFF)" }}>
          {saved ? "✓ Guardada" : "Guardar nueva clave"}
        </button>
      </div>
      <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
        <p className="text-white font-black text-sm mb-1">🏪 Tu tienda</p>
        <p className="text-gray-500 text-xs mb-3">Nombre de marca, contacto, dirección.</p>
        {[["Nombre de la marca", "Multilook"], ["WhatsApp", "+51 999 999 999"], ["Dirección", "Lima, Perú"]].map(([label, ph]) => (
          <div key={label} className="mb-2">
            <label className="text-gray-600 text-xs mb-1 block">{label}</label>
            <input placeholder={ph} className="w-full bg-gray-800 text-white rounded-xl px-3 py-2 text-sm outline-none border border-gray-700 focus:border-green-400 transition-colors" />
          </div>
        ))}
      </div>
      <button onClick={onLogout}
        className="w-full py-3 rounded-xl font-black text-red-400 bg-red-900/20 border border-red-900/40 hover:bg-red-900/40 transition-colors text-sm">
        Cerrar sesión
      </button>
    </div>
  );
}

// ══════════════════════════════════════════
//  ADMIN VIEW COMPLETO
// ══════════════════════════════════════════
function AdminView({ products, onProductsChange, orders, onReply, onLogout }) {
  const [tab, setTab] = useState("stats");
  const [adminPass, setAdminPass] = useState(ADMIN_PASS);
  const newOrders = orders.filter(o => !o.reply).length;

  const tabs = [
    { id: "stats",    icon: "📊", label: "Resumen" },
    { id: "products", icon: "👕", label: "Productos" },
    { id: "orders",   icon: "📦", label: "Pedidos",  badge: newOrders },
    { id: "config",   icon: "⚙️", label: "Config" },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0a0a0a" }}>
      {/* Header */}
      <header className="bg-gray-950 border-b border-gray-800 px-4 py-3 flex items-center gap-4">
        <MLogo dark />
        <span className="text-xs text-gray-600 hidden sm:block flex-1">Panel de administración</span>
        <button onClick={onLogout} className="text-xs text-gray-600 hover:text-red-400 transition-colors px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800">
          Salir ✕
        </button>
      </header>

      <div className="flex flex-1 max-w-4xl mx-auto w-full">
        {/* Sidebar */}
        <aside className="w-44 sm:w-52 bg-gray-950 border-r border-gray-800 flex flex-col p-3 gap-1 pt-5">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left w-full"
              style={tab === t.id
                ? { background: "linear-gradient(90deg,#39FF14,#00EEFF)", color: "#000" }
                : { color: "#6b7280" }}>
              <span className="flex-shrink-0">{t.icon}</span>
              <span className="flex-1">{t.label}</span>
              {t.badge > 0 && (
                <span className="text-[10px] font-black px-1.5 py-0.5 rounded-full text-white flex-shrink-0"
                  style={{ background: "#FF3EFF" }}>{t.badge}</span>
              )}
            </button>
          ))}

          {/* Yamalito en el sidebar */}
          <div className="mt-auto pt-4 flex flex-col items-center">
            <Yamalito size={80} waving />
            <p className="text-gray-700 text-[10px] text-center mt-1">Yamalito te cuida 🐾</p>
          </div>
        </aside>

        {/* Contenido */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <h2 className="text-white font-black text-base mb-5">
            {tabs.find(t => t.id === tab)?.icon} {tabs.find(t => t.id === tab)?.label}
          </h2>
          {tab === "stats"    && <PanelEstadisticas products={products} orders={orders} />}
          {tab === "products" && <PanelProductos products={products} onChange={onProductsChange} />}
          {tab === "orders"   && <PanelPedidos orders={orders} onReply={onReply} />}
          {tab === "config"   && <PanelConfig onChangePwd={setAdminPass} onLogout={onLogout} />}
        </main>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════
//  CATÁLOGO CLIENTE
// ══════════════════════════════════════════
function CatalogoCliente({ products, onBack }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState("");

  const addToCart = (p) => setCart(prev => {
    const ex = prev.find(x => x.id === p.id);
    return ex ? prev.map(x => x.id === p.id ? { ...x, qty: x.qty + 1 } : x) : [...prev, { ...p, qty: 1 }];
  });
  const removeFromCart = (id) => setCart(prev => prev.filter(p => p.id !== id));

  const totalItems = cart.reduce((a, p) => a + p.qty, 0);
  const totalPrice = cart.reduce((a, p) => a + parseFloat(p.price) * p.qty, 0).toFixed(2);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    (p.desc || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-100 px-4 sm:px-8 py-3 flex items-center gap-3">
        <MLogo />
        {/* Buscador */}
        <div className="flex-1 max-w-sm mx-2 hidden sm:block">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2 text-sm outline-none transition-all focus:border-green-400" />
          </div>
        </div>
        <div className="flex-1 sm:hidden" />
        <button onClick={() => setCartOpen(true)}
          className="relative px-4 py-2 rounded-xl text-sm font-black text-black flex items-center gap-1.5 transition-all active:scale-95 hover:scale-105"
          style={{ background: "linear-gradient(90deg,#39FF14,#00EEFF)", boxShadow: "0 2px 16px #39FF1444" }}>
          🛒 <span className="hidden sm:inline">Carrito</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white text-[10px] font-black flex items-center justify-center"
              style={{ background: "#FF3EFF" }}>{totalItems}</span>
          )}
        </button>
      </header>

      {/* Hero */}
      <div className="px-4 sm:px-8 py-8 flex items-center justify-between gap-4"
        style={{ background: "linear-gradient(120deg,#f0fff4 0%,#ffffff 55%,#fdf4ff 100%)" }}>
        <div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 leading-none">
            Estilo sin<br /><span style={{ color: NEON, WebkitTextStroke: "1.5px #111" }}>límites.</span>
          </h1>
          <p className="text-gray-500 mt-3 text-sm max-w-xs">No importa tu plan, <b className="text-gray-800">nosotros tenemos tu look.</b></p>
        </div>
        <div className="hidden sm:flex flex-col items-center gap-1">
          <Yamalito size={130} waving />
          <span className="text-xs text-gray-400 font-semibold">Yamalito</span>
        </div>
      </div>

      {/* Buscador mobile */}
      <div className="sm:hidden px-4 pt-3 pb-1">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Buscar productos..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-sm outline-none" />
        </div>
      </div>

      {/* Grid */}
      <main className="flex-1 px-4 sm:px-8 py-5">
        {filtered.length === 0 ? (
          <div className="text-center py-20 flex flex-col items-center gap-3">
            <Yamalito size={100} />
            <p className="text-gray-400 text-sm">{search ? "Sin resultados para esa búsqueda" : "Catálogo vacío — vuelve pronto 🐾"}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(p => <ProductCard key={p.id} product={p} onAdd={addToCart} />)}
          </div>
        )}
      </main>

      {/* Cart drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setCartOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative w-80 max-w-full bg-white h-full shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="p-5 border-b flex items-center justify-between">
              <h2 className="font-black text-lg">Mi carrito</h2>
              <button onClick={() => setCartOpen(false)} className="text-gray-400 hover:text-gray-700 text-xl transition-colors">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center mt-10 gap-3">
                  <Yamalito size={100} />
                  <p className="text-gray-400 text-sm text-center">Tu carrito está vacío 🐾<br/><span className="text-gray-300 text-xs">¡Yamalito espera que elijas algo!</span></p>
                </div>
              ) : cart.map(item => (
                <div key={item.id} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                  <img src={item.img} alt={item.name} className="w-14 h-14 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">{item.name}</p>
                    <p className="text-xs font-black mt-0.5" style={{ color: NEON }}>S/ {item.price}</p>
                  </div>
                  <span className="text-xs bg-gray-200 rounded-full px-2 py-0.5 font-bold">×{item.qty}</span>
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-400 transition-colors text-sm ml-1">✕</button>
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <div className="p-4 border-t">
                <div className="flex justify-between text-sm font-black mb-3 px-1">
                  <span className="text-gray-600">Total a pagar</span>
                  <span className="text-xl" style={{ color: NEON }}>S/ {totalPrice}</span>
                </div>
                <div className="flex justify-center mb-3">
                  <Yamalito size={60} happy />
                </div>
                <button className="w-full py-3 rounded-xl font-black text-black text-sm transition-all active:scale-95"
                  style={{ background: "linear-gradient(90deg,#39FF14,#FF3EFF)", boxShadow: "0 2px 20px #39FF1444" }}>
                  Confirmar pedido 🎉
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════
//  APP ROOT
// ══════════════════════════════════════════
export default function App() {
  const [screen, setScreen] = useState("splash");
  const [products, setProducts] = useState(DEFAULT_PRODUCTS);
  const [orders, setOrders] = useState([
    { id: 1001, client: "María G.", time: "hace 5 min", items: [{ name: "Hoodie Oversize Drop", qty: 1, price: "89.90" }], reply: null },
    { id: 1002, client: "Carlos R.", time: "hace 20 min", items: [{ name: "Cargo Jogger Slate", qty: 2, price: "74.90" }], reply: null },
  ]);

  const handleReply = (id, text) => {
    if (!text.trim()) return;
    setOrders(prev => prev.map(o => o.id === id ? { ...o, reply: text } : o));
  };

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @keyframes popFade {
          0%{opacity:0;transform:scale(0.6)}
          15%{opacity:1;transform:scale(1.12)}
          80%{opacity:1;transform:scale(1)}
          100%{opacity:0;transform:scale(0.85)}
        }
      `}</style>

      {screen === "splash" && (
        <SplashScreen onClient={() => setScreen("customer")} onAdmin={() => setScreen("admin")} />
      )}
      {screen === "customer" && (
        <CatalogoCliente products={products} onBack={() => setScreen("splash")} />
      )}
      {screen === "admin" && (
        <AdminView
          products={products}
          onProductsChange={setProducts}
          orders={orders}
          onReply={handleReply}
          onLogout={() => setScreen("splash")}
        />
      )}
    </div>
  );
}
