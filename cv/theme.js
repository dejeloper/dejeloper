/** Panel de colores. Solo pantalla: no se imprime y no afecta al render del CV. */

const VARS = [
	{ key: "--acero", label: "Principal" },
	{ key: "--oscuro", label: "Contacto" },
	{ key: "--titulo", label: "Títulos" },
	{ key: "--texto", label: "Texto" },
	{ key: "--fecha", label: "Fechas" },
	{ key: "--barra-bg", label: "Separadores" }
];

const PRESETS = {
	Acero: ["#7d9fb5", "#2e3d4d", "#2b3b47", "#3a3a3a", "#86a5b8", "#d2d8dc"],
	Grafito: ["#8a8f95", "#2b2b2b", "#262626", "#3a3a3a", "#9a9a9a", "#dcdcdc"],
	Bosque: ["#6f9a7b", "#26382c", "#26382c", "#38403a", "#89ab93", "#d6dcd7"],
	Borgoña: ["#a8737a", "#3d2429", "#3d2429", "#3a3434", "#b99095", "#e0d5d6"],
	Índigo: ["#7b83c4", "#252a4a", "#252a4a", "#37373f", "#9299d1", "#d6d8e6"]
};

const ALMACEN = "cv-tema";
const raiz = document.documentElement;

const aplicar = (tema) =>
	VARS.forEach(({ key }) => tema[key] && raiz.style.setProperty(key, tema[key]));

const guardar = (tema) => localStorage.setItem(ALMACEN, JSON.stringify(tema));

const leerActual = () => Object.fromEntries(
	VARS.map(({ key }) => [key, getComputedStyle(raiz).getPropertyValue(key).trim()])
);

function sincronizarInputs(tema) {
	VARS.forEach(({ key }) => {
		document.querySelector(`input[data-var="${key}"]`).value = tema[key];
	});
}

function construir() {
	const barra = document.getElementById("barra");

	barra.innerHTML = `
		<div class="grupo colores">
			${VARS.map(v => `
				<label>
					<input type="color" data-var="${v.key}">
					<span>${v.label}</span>
				</label>`).join("")}
		</div>
		<div class="grupo presets">
			${Object.keys(PRESETS).map(p => `<button data-preset="${p}">${p}</button>`).join("")}
		</div>
		<div class="grupo">
			<button class="reset" data-preset="Acero">Restablecer</button>
			<button class="primaria" id="imprimir">Imprimir / Guardar PDF</button>
		</div>`;

	barra.addEventListener("input", (e) => {
		const key = e.target.dataset.var;
		if (!key) return;
		raiz.style.setProperty(key, e.target.value);
		guardar(leerActual());
	});

	barra.addEventListener("click", (e) => {
		const preset = e.target.dataset.preset;
		if (preset) {
			const tema = Object.fromEntries(VARS.map((v, i) => [v.key, PRESETS[preset][i]]));
			aplicar(tema);
			guardar(tema);
			sincronizarInputs(tema);
		}
		if (e.target.id === "imprimir") print();
	});
}

construir();
aplicar(JSON.parse(localStorage.getItem(ALMACEN) || "{}"));
sincronizarInputs(leerActual());
