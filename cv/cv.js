/** Render del CV. No suele hacer falta tocar este archivo: edita cv.data.js. */

const ICONOS = {
	phone: 'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z',
	mail: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4.4 6.3 4 6v.6l8 5 8-5V6l-.4.3L12 11z',
	pin: 'M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z',
	user: 'M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5z',
	linkedin: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.84 0-2.12 1.43-2.12 2.9V21h-4V9z',
	github: 'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z',
	web: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.9 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14a7.96 7.96 0 0 1 0-4h3.38a16.5 16.5 0 0 0 0 4H4.26zm.84 2h2.95c.32 1.25.79 2.45 1.38 3.56A7.99 7.99 0 0 1 5.1 16zm2.95-8H5.1a7.99 7.99 0 0 1 4.33-3.56A15.7 15.7 0 0 0 8.05 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66a14.7 14.7 0 0 1 0-4h4.68a14.7 14.7 0 0 1 0 4zm.23 5.56c.59-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14a16.5 16.5 0 0 0 0-4h3.38a7.96 7.96 0 0 1 0 4h-3.38z'
};

const icono = (nombre) =>
	`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONOS[nombre] || ICONOS.web}"/></svg>`;

const seccion = (titulo, contenido) =>
	`<section><h2>${titulo}</h2>${contenido}</section>`;

function render(cv) {
	const contacto = cv.contacto.map(c => {
		const texto = c.url ? `<a href="${c.url}">${c.texto}</a>` : c.texto;
		return `<li>${icono(c.icono)}<span>${texto}</span></li>`;
	}).join('');

	const experiencia = cv.experiencia.map(e => `
		<article class="item">
			${e.empresa ? `<p class="empresa">${e.empresa}</p>` : ''}
			<h3>${e.cargo}</h3>
			<p class="periodo">${e.periodo}</p>
			${e.parrafos.map(p => `<p>${p}</p>`).join('')}
		</article>`).join('');

	const formacion = cv.formacion.map(f => `
		<article class="item formacion">
			<div>
				<p class="empresa">${f.institucion}</p>
				<h3>${f.titulo}</h3>
			</div>
			<span class="periodo">${f.periodo}</span>
		</article>`).join('');

	const tecnologias = cv.tecnologias.map(t => `
		<div class="tec">
			<p class="categoria">${t.categoria}</p>
			<div class="filas">
				${t.filas.map(f => `
					<div class="fila">
						<span class="items">${f.items.join(' · ')}${f.ambito ? ` <em>(${f.ambito})</em>` : ''}</span>
						<span class="nivel">${f.nivel}</span>
					</div>`).join('')}
			</div>
		</div>`).join('');

	const blandas = `<p class="blandas">${cv.blandas.join(' · ')}</p>`;

	const idiomas = `<ul class="idiomas">${cv.idiomas.map(i =>
		`<li><b>${i.nombre}:</b> ${i.nivel}</li>`).join('')}</ul>`;

	document.getElementById('cv').innerHTML = `
		<aside class="col-izq">
			<img class="foto" src="${cv.foto}" alt="${cv.nombre} ${cv.apellido}">
			<div class="identidad">
				<h1>${cv.nombre}<br>${cv.apellido}</h1>
				<p class="cargo">${cv.titulo}</p>
			</div>
			<ul class="contacto">${contacto}</ul>
			<div class="col-izq-body">
				${seccion('Perfil Profesional', `<p>${cv.perfil}</p>`)}
				${seccion('Habilidades Blandas', blandas)}
				${seccion('Idiomas', idiomas)}
			</div>
		</aside>
		<div class="col-der">
			${seccion('Experiencia Laboral', experiencia)}
			${seccion('Formación', formacion)}
			${seccion('Experiencia Técnica', tecnologias)}
		</div>`;

	document.title = `${cv.nombre} ${cv.apellido} - CV`;
}

render(CV);
