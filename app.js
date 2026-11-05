const CURRENT_USER = "María González";
const STORAGE_KEY = "justidata-informes-v1";
const PERICIA_CATEGORIES = ["Médica", "Psicológica", "Informática", "Contable", "Accidentológica", "Documentológica"];

const initialCases = [
  {
    id: "c-1048",
    number: "2025-0148",
    organism: "Juzgado Civil y Comercial N.º 4",
    file: "Expte. 4182/24",
    requested: "2025-01-18",
    category: "Informática",
    area: "Informática forense",
    description: "Análisis de integridad y trazabilidad de comunicaciones digitales presentadas en autos.",
    state: "En análisis",
    experts: [
      { name: "Dr. Martín Paredes", role: "Perito oficial", specialty: "Informática forense" },
      { name: "Lic. Lucía Benítez", role: "Perito de parte", specialty: "Análisis de dispositivos" }
    ],
    evaluated: ["Federico Ramos"],
    stateHistory: [
      { state: "Solicitada", date: "2025-01-18", user: "María González" },
      { state: "En análisis", date: "2025-01-22", user: "María González" }
    ]
  },
  {
    id: "c-1052",
    number: "2025-0221",
    organism: "Fiscalía de Instrucción N.º 2",
    file: "Expte. 9610/24",
    requested: "2025-02-03",
    category: "Psicológica",
    area: "Psicología forense",
    description: "Evaluación psicológica solicitada en el marco de las actuaciones de la causa.",
    state: "En proceso de evaluación",
    experts: [
      { name: "Lic. Paula Méndez", role: "Perito de oficio", specialty: "Psicología forense" }
    ],
    evaluated: ["Camila Torres", "Santiago Torres"],
    stateHistory: [
      { state: "Solicitada", date: "2025-02-03", user: "María González" },
      { state: "En proceso de evaluación", date: "2025-02-08", user: "María González" }
    ]
  },
  {
    id: "c-1061",
    number: "2025-0306",
    organism: "Juzgado Laboral N.º 1",
    file: "Expte. 1277/25",
    requested: "2025-02-14",
    category: "Médica",
    area: "Medicina laboral",
    description: "Determinación de incapacidad y evaluación de secuelas derivadas del accidente.",
    state: "En elaboración de informe",
    experts: [
      { name: "Dr. Andrés Molina", role: "Perito de oficio", specialty: "Medicina laboral" }
    ],
    evaluated: ["Natalia Suárez"],
    stateHistory: [
      { state: "Solicitada", date: "2025-02-14", user: "María González" },
      { state: "En análisis", date: "2025-02-17", user: "María González" },
      { state: "En elaboración de informe", date: "2025-03-10", user: "María González" }
    ]
  },
  {
    id: "c-1068",
    number: "2025-0359",
    organism: "Estudio Jurídico Ferraro",
    file: "Expte. 5390/24",
    requested: "2025-02-27",
    category: "Contable",
    area: "Contabilidad forense",
    description: "Revisión de documentación contable y determinación de diferencias en los registros.",
    state: "Finalizada",
    experts: [
      { name: "Cra. Valeria Acosta", role: "Perito oficial", specialty: "Contabilidad forense" }
    ],
    evaluated: ["Comercial del Sur S.A."],
    stateHistory: [
      { state: "Solicitada", date: "2025-02-27", user: "María González" },
      { state: "En elaboración de informe", date: "2025-03-03", user: "María González" },
      { state: "Finalizada", date: "2025-03-19", user: "María González" }
    ]
  }
];

const initialReports = [
  {
    id: "r-208",
    caseId: "c-1048",
    date: "2025-03-12",
    activity: "Análisis de evidencia digital",
    title: "Ampliación de Pericia",
    expert: "Dr. Martín Paredes",
    evaluated: "Federico Ramos",
    author: "Dr. Martín Paredes",
    description: "Se incorporó al análisis una copia forense del dispositivo móvil remitida por el organismo solicitante.",
    findings: "La imagen recibida presenta integridad verificable. Se inició el análisis de metadatos y de la secuencia temporal de las comunicaciones."
  },
  {
    id: "r-203",
    caseId: "c-1048",
    date: "2025-01-22",
    activity: "Recepción y apertura de actuaciones",
    title: "Informe Pericial",
    expert: "Dr. Martín Paredes",
    evaluated: "Federico Ramos",
    author: "Dr. Martín Paredes",
    description: "Se recibió la documentación inicial, se verificó el material digital aportado y se definió el alcance de las tareas periciales.",
    findings: "Se constató la recepción de los elementos detallados en el oficio. El material queda preservado para su análisis técnico."
  },
  {
    id: "r-205",
    caseId: "c-1052",
    date: "2025-03-08",
    activity: "Entrevista de evaluación",
    title: "Informe Pericial",
    expert: "Lic. Paula Méndez",
    evaluated: "Camila Torres",
    author: "Lic. Paula Méndez",
    description: "Se realizó una entrevista semiestructurada en el consultorio de evaluación, con registro de las observaciones correspondientes.",
    findings: "La instancia se completó según lo programado. La evaluación continúa con el análisis integrado de las técnicas administradas."
  },
  {
    id: "r-198",
    caseId: "c-1061",
    date: "2025-03-10",
    activity: "Evaluación clínica",
    title: "Informe Pericial",
    expert: "Dr. Andrés Molina",
    evaluated: "Natalia Suárez",
    author: "Dr. Andrés Molina",
    description: "Se realizó examen clínico y revisión de antecedentes médicos vinculados con el hecho informado en el expediente.",
    findings: "La evaluación se encuentra completa. Los antecedentes y hallazgos fueron incorporados para la elaboración del informe técnico."
  },
  {
    id: "r-194",
    caseId: "c-1068",
    date: "2025-03-19",
    activity: "Presentación de informe final",
    title: "Informe Pericial",
    expert: "Cra. Valeria Acosta",
    evaluated: "Comercial del Sur S.A.",
    author: "Cra. Valeria Acosta",
    description: "Se presentó el informe contable final ante el organismo solicitante, con detalle de la documentación revisada y los procedimientos aplicados.",
    findings: "La documentación analizada permitió responder los puntos periciales requeridos. Se adjuntan las conclusiones y el detalle de los cálculos realizados."
  }
];

const screenRoot = document.querySelector("#screen-root");
const toastRegion = document.querySelector("#toast-region");
let data = loadData();
let activeScreen = "search";
let toastTimer;

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return { cases: initialCases, reports: initialReports };

  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed.cases) && Array.isArray(parsed.reports)) return parsed;
    throw new Error("La estructura guardada no coincide con la versión esperada.");
  } catch (error) {
    console.error("No se pudieron leer los datos guardados del prototipo.", error);
    return { cases: initialCases, reports: initialReports };
  }
}

function persistData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("No se pudieron guardar los cambios del prototipo.", error);
    showToast("El informe se cargó en esta sesión, pero no se pudo guardar en el navegador.", true);
    return false;
  }
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function formatDate(value) {
  if (!value) return "—";
  const parsed = new Date(`${value}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return "—";
  return new Intl.DateTimeFormat("es-AR", { day: "2-digit", month: "short", year: "numeric" }).format(parsed);
}

function todayISO() {
  const date = new Date();
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

function statusClass(state) {
  if (state === "Finalizada") return "status-finished";
  if (state === "En proceso de evaluación") return "status-evaluation";
  if (state === "En elaboración de informe") return "status-report";
  if (state === "En mora" || state === "Vencida") return "status-overdue";
  if (state === "Solicitada") return "status-requested";
  return "status-analysis";
}

function statusBadge(state) {
  return `<span class="status ${statusClass(state)}">${escapeHTML(state)}</span>`;
}

function getCase(caseId) {
  return data.cases.find((item) => item.id === caseId);
}

function getReport(reportId) {
  return data.reports.find((item) => item.id === reportId);
}

function getExpertName(caseItem) {
  return caseItem?.experts?.[0]?.name ?? "Sin perito asignado";
}

function renderReportRows(reports, target) {
  if (!reports.length) {
    target.innerHTML = `<tr><td colspan="7"><div class="empty-state"><strong>No encontramos informes</strong><p>Probá con otros filtros o registrá un nuevo informe pericial.</p></div></td></tr>`;
    return;
  }

  target.innerHTML = reports.map((report) => {
    const caseItem = getCase(report.caseId);
    if (!caseItem) return "";
    const kindClass = report.title === "Ampliación de Pericia" ? "extension" : "";
    return `<tr>
      <td><span class="case-number">${escapeHTML(caseItem.number)}</span><span class="table-secondary">${escapeHTML(caseItem.organism)}</span></td>
      <td><span class="table-main">${escapeHTML(report.title)}</span><span class="table-secondary">${escapeHTML(report.activity)}</span></td>
      <td>${escapeHTML(report.evaluated)}</td>
      <td><span class="report-kind ${kindClass}">${escapeHTML(caseItem.category)}</span></td>
      <td>${escapeHTML(formatDate(report.date))}</td>
      <td>${statusBadge(caseItem.state)}</td>
      <td><button class="table-action" type="button" data-report="${escapeHTML(report.id)}">Ver informe <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8 4l4 4-4 4"></path></svg></button></td>
    </tr>`;
  }).join("");
}

function renderSearch() {
  activeScreen = "search";
  updateShell();
  const reports = [...data.reports].sort((a, b) => b.date.localeCompare(a.date));
  const current = reports.filter((report) => getCase(report.caseId)?.state !== "Finalizada").length;
  const finished = reports.filter((report) => getCase(report.caseId)?.state === "Finalizada").length;
  const casesInProgress = data.cases.filter((item) => item.state !== "Finalizada").length;

  screenRoot.innerHTML = `<div class="page-heading">
    <div><p class="eyebrow">Seguimiento documental</p><h1>Búsqueda de informes</h1><p class="page-subtitle">Consultá las actuaciones registradas y accedé al historial de cada pericia.</p></div>
    <button class="button button-primary" type="button" data-screen="new"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 4v12M4 10h12"></path></svg>Nuevo informe</button>
  </div>
  <div class="stats-grid" aria-label="Resumen de informes">
    <div class="stat-card"><span class="stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.8h7l4 4V20H7a2 2 0 0 1-2-2V5.8a2 2 0 0 1 2-2Z"></path><path d="M14 4v4h4M9 12h6M9 16h6"></path></svg></span><span class="stat-copy"><span>Informes registrados</span><strong>${reports.length}</strong></span></div>
    <div class="stat-card"><span class="stat-icon teal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18V6M5 18h15M8 15l3-4 3 2 5-7"></path></svg></span><span class="stat-copy"><span>Pericias en seguimiento</span><strong>${casesInProgress}</strong></span></div>
    <div class="stat-card"><span class="stat-icon amber"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7v5l3 2"></path></svg></span><span class="stat-copy"><span>Actuaciones activas</span><strong>${current}</strong></span></div>
    <div class="stat-card"><span class="stat-icon gray"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"></path><circle cx="12" cy="12" r="9"></circle></svg></span><span class="stat-copy"><span>Pericias finalizadas</span><strong>${finished}</strong></span></div>
  </div>
  <section class="panel filter-panel" aria-label="Filtros de búsqueda">
    <div class="filter-top"><h2 class="filter-title"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 5h14M5.5 10h9M8 15h4"></path></svg>Filtros de búsqueda</h2><button class="button button-quiet clear-filters" type="button" id="clear-filters">Limpiar filtros</button></div>
    <div class="filter-grid">
      <div class="field"><label for="filter-query">Buscar por pericia, organismo o persona</label><div class="control-wrap"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.8" cy="8.8" r="5.8"></circle><path d="m13.2 13.2 4 4"></path></svg><input class="search-input" id="filter-query" type="search" placeholder="N.º de pericia, expediente, nombre…"></div></div>
      <div class="field"><label for="filter-category">Tipo de pericia</label><select id="filter-category"><option value="">Todos los tipos</option>${categoryOptions()}</select></div>
      <div class="field"><label for="filter-state">Estado actual</label><select id="filter-state"><option value="">Todos los estados</option>${stateOptions()}</select></div>
      <div class="field"><label for="filter-date">Fecha del informe</label><input id="filter-date" type="date" aria-label="Filtrar por fecha del informe"></div>
    </div>
  </section>
  <section class="panel table-panel">
    <div class="table-heading"><h2>Informes periciales</h2><span class="results-count" id="results-count"></span></div>
    <div class="table-scroll"><table><thead><tr><th>Pericia / organismo</th><th>Actuación</th><th>Persona evaluada</th><th>Tipo</th><th>Fecha</th><th>Estado actual</th><th><span class="screen-reader-only">Acciones</span></th></tr></thead><tbody id="report-rows"></tbody></table></div>
  </section>`;

  const rows = screenRoot.querySelector("#report-rows");
  const count = screenRoot.querySelector("#results-count");
  const query = screenRoot.querySelector("#filter-query");
  const category = screenRoot.querySelector("#filter-category");
  const state = screenRoot.querySelector("#filter-state");
  const date = screenRoot.querySelector("#filter-date");

  function applyFilters() {
    const term = query.value.trim().toLocaleLowerCase("es-AR");
    const filtered = reports.filter((report) => {
      const caseItem = getCase(report.caseId);
      if (!caseItem) return false;
      const searchable = [caseItem.number, caseItem.organism, caseItem.file, report.evaluated, report.expert, report.activity, report.title].join(" ").toLocaleLowerCase("es-AR");
      return (!term || searchable.includes(term))
        && (!category.value || caseItem.category === category.value)
        && (!state.value || caseItem.state === state.value)
        && (!date.value || report.date === date.value);
    });
    count.textContent = `${filtered.length} ${filtered.length === 1 ? "resultado" : "resultados"}`;
    renderReportRows(filtered, rows);
  }

  [query, category, state, date].forEach((control) => control.addEventListener("input", applyFilters));
  screenRoot.querySelector("#clear-filters").addEventListener("click", () => {
    query.value = "";
    category.value = "";
    state.value = "";
    date.value = "";
    applyFilters();
  });
  applyFilters();
}

function categoryOptions() {
  const categories = [...new Set([...PERICIA_CATEGORIES, ...data.cases.map((item) => item.category)])].sort((a, b) => a.localeCompare(b, "es"));
  return categories.map((category) => `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`).join("");
}

function stateOptions() {
  const states = [...new Set(data.cases.map((item) => item.state))].sort((a, b) => a.localeCompare(b, "es"));
  return states.map((state) => `<option value="${escapeHTML(state)}">${escapeHTML(state)}</option>`).join("");
}

function renderForm(selectedCaseId = "") {
  activeScreen = "new";
  updateShell();
  const cases = [...data.cases].sort((a, b) => a.number.localeCompare(b.number));
  const caseOptions = cases.map((item) => `<option value="${escapeHTML(item.id)}" ${item.id === selectedCaseId ? "selected" : ""}>${escapeHTML(item.number)} · ${escapeHTML(item.organism)}</option>`).join("");

  screenRoot.innerHTML = `<div class="page-heading">
    <div><p class="eyebrow">Registro de actuaciones</p><h1>Cargar nuevo informe</h1><p class="page-subtitle">Incorporá el informe al historial de una pericia para mantener su seguimiento actualizado.</p></div>
  </div>
  <form id="report-form" novalidate>
    <div class="form-layout">
      <section class="panel form-panel">
        <div class="section-heading"><span class="section-number">01</span><div><h2>Identificación de la pericia</h2><p>Seleccioná el expediente al que corresponde esta actuación.</p></div></div>
        <div class="form-grid">
          <div class="field span-2"><label for="case-select">Pericia <span class="required">*</span></label><select id="case-select" name="caseId" required><option value="">Seleccioná una pericia registrada</option>${caseOptions}</select><span class="helper-text">La combinación de organismo y número de pericia identifica el expediente.</span></div>
        </div>
        <div class="form-divider"></div>
        <div class="section-heading"><span class="section-number">02</span><div><h2>Detalle del informe</h2><p>Describí la actuación y los resultados incorporados al expediente.</p></div></div>
        <div class="form-grid">
          <div class="field"><label for="report-date">Fecha de actuación <span class="required">*</span></label><input id="report-date" name="date" type="date" value="${todayISO()}" required></div>
          <div class="field"><label for="report-title">Tipo de presentación</label><input id="report-title" name="title" type="text" value="Informe Pericial" readonly aria-describedby="report-title-help"><span class="helper-text" id="report-title-help">La primera presentación se registra como informe; las siguientes, como ampliación.</span></div>
          <div class="field"><label for="report-activity">Tipo de actuación <span class="required">*</span></label><select id="report-activity" name="activity" required><option value="">Seleccioná una actuación</option><option>Recepción de solicitud</option><option>Asignación de peritos</option><option>Entrevista o evaluación</option><option>Análisis de documentación</option><option>Prueba técnica</option><option>Elaboración de informe</option><option>Presentación de informe final</option><option>Otra actuación</option></select></div>
          <div class="field"><label for="report-expert">Perito responsable <span class="required">*</span></label><select id="report-expert" name="expert" required disabled><option value="">Primero seleccioná una pericia</option></select></div>
          <div class="field"><label for="report-evaluated">Persona evaluada o interviniente</label><select id="report-evaluated" name="evaluated" disabled><option value="">Primero seleccioná una pericia</option></select></div>
          <div class="field"><label for="report-state">Estado actual de la pericia <span class="required">*</span></label><select id="report-state" name="state" required disabled><option value="">Primero seleccioná una pericia</option></select><span class="helper-text">Si cambia el estado, se registra en su historial.</span></div>
          <div class="field span-2"><label for="report-description">Descripción de la actuación <span class="required">*</span></label><textarea id="report-description" name="description" placeholder="Detallá las tareas realizadas, la documentación recibida o las instancias cumplidas…" required></textarea></div>
          <div class="field span-2"><label for="report-findings">Resultados u observaciones</label><textarea id="report-findings" name="findings" placeholder="Agregá los hallazgos técnicos o el avance del análisis."></textarea></div>
        </div>
        <div class="form-actions"><button class="button button-secondary" type="button" data-screen="search">Cancelar</button><button class="button button-primary" type="submit"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10.5 8 14l8-8"></path></svg>Guardar informe</button></div>
      </section>
      <aside class="panel case-preview" aria-live="polite">
        <div class="preview-head"><h2>Resumen de la pericia</h2><span class="preview-tag">EXPEDIENTE</span></div>
        <div id="case-preview-content" class="preview-empty">Seleccioná una pericia para consultar sus datos antes de cargar el informe.</div>
        <div class="preview-divider"></div>
        <div class="classification-note"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.5"></circle><path d="M10 9v4M10 6.5h.01"></path></svg><span>El informe quedará asociado a la pericia y al usuario que lo registra.</span></div>
      </aside>
    </div>
  </form>`;

  const form = screenRoot.querySelector("#report-form");
  const caseSelect = screenRoot.querySelector("#case-select");
  const expertSelect = screenRoot.querySelector("#report-expert");
  const evaluatedSelect = screenRoot.querySelector("#report-evaluated");
  const stateSelect = screenRoot.querySelector("#report-state");
  const titleField = screenRoot.querySelector("#report-title");
  const preview = screenRoot.querySelector("#case-preview-content");

  function updateSelectedCase() {
    const caseItem = getCase(caseSelect.value);
    expertSelect.innerHTML = caseItem
      ? `<option value="">Seleccioná un perito</option>${caseItem.experts.map((expert) => `<option value="${escapeHTML(expert.name)}">${escapeHTML(expert.name)} · ${escapeHTML(expert.role)}</option>`).join("")}`
      : `<option value="">Primero seleccioná una pericia</option>`;
    evaluatedSelect.innerHTML = caseItem
      ? `<option value="">No especificar</option>${caseItem.evaluated.map((person) => `<option value="${escapeHTML(person)}">${escapeHTML(person)}</option>`).join("")}`
      : `<option value="">Primero seleccioná una pericia</option>`;
    stateSelect.innerHTML = caseItem
      ? `<option value="${escapeHTML(caseItem.state)}">${escapeHTML(caseItem.state)}</option>${["Solicitada", "En análisis", "En proceso de evaluación", "En elaboración de informe", "Finalizada"].filter((state) => state !== caseItem.state).map((state) => `<option value="${escapeHTML(state)}">${escapeHTML(state)}</option>`).join("")}`
      : `<option value="">Primero seleccioná una pericia</option>`;
    expertSelect.disabled = !caseItem;
    evaluatedSelect.disabled = !caseItem;
    stateSelect.disabled = !caseItem;

    if (!caseItem) {
      titleField.value = "Informe Pericial";
      preview.className = "preview-empty";
      preview.textContent = "Seleccioná una pericia para consultar sus datos antes de cargar el informe.";
      return;
    }

    const hasPreviousReport = data.reports.some((report) => report.caseId === caseItem.id);
    titleField.value = hasPreviousReport ? "Ampliación de Pericia" : "Informe Pericial";
    preview.className = "";
    preview.innerHTML = `<div class="preview-case-id">${escapeHTML(caseItem.number)}</div><div class="preview-case-name">${escapeHTML(caseItem.organism)}</div>
      <dl class="preview-data">
        <div><dt>Expediente</dt><dd>${escapeHTML(caseItem.file)}</dd></div>
        <div><dt>Tipo de pericia</dt><dd>${escapeHTML(caseItem.category)}</dd></div>
        <div><dt>Área técnica</dt><dd>${escapeHTML(caseItem.area)}</dd></div>
        <div><dt>Perito asignado</dt><dd>${escapeHTML(getExpertName(caseItem))}</dd></div>
        <div><dt>Estado actual</dt><dd>${statusBadge(caseItem.state)}</dd></div>
        <div><dt>Informes previos</dt><dd>${data.reports.filter((report) => report.caseId === caseItem.id).length}</dd></div>
      </dl>`;
    if (caseItem.experts.length) expertSelect.value = caseItem.experts[0].name;
    if (caseItem.evaluated.length) evaluatedSelect.value = caseItem.evaluated[0];
  }

  caseSelect.addEventListener("change", updateSelectedCase);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const caseItem = getCase(formData.get("caseId"));
    if (!caseItem) {
      showToast("Seleccioná una pericia válida antes de guardar el informe.", true);
      caseSelect.focus();
      return;
    }

    const previousState = caseItem.state;
    const nextState = String(formData.get("state"));
    const report = {
      id: `r-${Date.now()}`,
      caseId: caseItem.id,
      date: String(formData.get("date")),
      activity: String(formData.get("activity")),
      title: data.reports.some((item) => item.caseId === caseItem.id) ? "Ampliación de Pericia" : "Informe Pericial",
      expert: String(formData.get("expert")),
      evaluated: String(formData.get("evaluated") || "No especificada"),
      author: CURRENT_USER,
      description: String(formData.get("description")).trim(),
      findings: String(formData.get("findings")).trim()
    };

    data.reports.push(report);
    if (nextState !== previousState) {
      caseItem.state = nextState;
      caseItem.stateHistory.push({ state: nextState, date: report.date, user: CURRENT_USER });
    }
    persistData();
    showToast("El informe se registró correctamente.");
    renderDetail(report.id);
  });

  if (selectedCaseId) updateSelectedCase();
}

function renderDetail(reportId) {
  const report = getReport(reportId);
  const caseItem = report && getCase(report.caseId);
  if (!report || !caseItem) {
    showToast("No se encontró el informe solicitado.", true);
    renderSearch();
    return;
  }

  activeScreen = "detail";
  updateShell();
  const caseReports = data.reports.filter((item) => item.caseId === caseItem.id).sort((a, b) => b.date.localeCompare(a.date));
  const stateHistory = [...(caseItem.stateHistory ?? [])].sort((a, b) => b.date.localeCompare(a.date));
  const expert = caseItem.experts.find((item) => item.name === report.expert);
  const expertRole = expert ? `${expert.role} · ${expert.specialty}` : "Perito interviniente";

  screenRoot.innerHTML = `<div class="detail-toolbar">
    <button class="button button-quiet" type="button" data-screen="search"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M15.5 10H4.5M9 5l-5 5 5 5"></path></svg>Volver a informes</button>
    <div class="detail-toolbar-actions"><button class="button button-secondary" type="button" id="print-report"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 7V3h8v4M6 14H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2M6 11h8v6H6z"></path></svg>Imprimir</button><button class="button button-primary" type="button" data-screen="new" data-case-id="${escapeHTML(caseItem.id)}"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 4v12M4 10h12"></path></svg>Nuevo informe</button></div>
  </div>
  <section class="panel detail-hero">
    <div class="detail-topline">
      <div><div class="detail-label">${escapeHTML(report.title)} · ${escapeHTML(report.activity)}</div><h1 class="detail-title">Pericia ${escapeHTML(caseItem.number)}</h1><p class="detail-subtitle">${escapeHTML(caseItem.organism)} <span class="crumb-separator">·</span> ${escapeHTML(caseItem.file)}</p></div>
      ${statusBadge(caseItem.state)}
    </div>
    <div class="detail-meta">
      <div class="meta-item"><span>Fecha del informe</span><strong>${escapeHTML(formatDate(report.date))}</strong></div>
      <div class="meta-item"><span>Tipo de pericia</span><strong>${escapeHTML(caseItem.category)}</strong></div>
      <div class="meta-item"><span>Perito responsable</span><strong>${escapeHTML(report.expert)}</strong></div>
      <div class="meta-item"><span>Registrado por</span><strong>${escapeHTML(report.author)}</strong></div>
    </div>
  </section>
  <div class="detail-grid">
    <div class="detail-column">
      <section class="panel detail-card">
        <div class="detail-card-heading"><h2>Detalle de la actuación</h2><span>${escapeHTML(formatDate(report.date))}</span></div>
        <p class="report-copy">${escapeHTML(report.description)}</p>
        ${report.findings ? `<div class="finding-box"><h3>Resultados u observaciones</h3><p>${escapeHTML(report.findings)}</p></div>` : ""}
      </section>
      <section class="panel detail-card">
        <div class="detail-card-heading"><h2>Datos de la pericia</h2><span>Identificación del expediente</span></div>
        <div class="case-data-grid">
          <div class="case-data-item"><span>Organismo solicitante</span><strong>${escapeHTML(caseItem.organism)}</strong></div>
          <div class="case-data-item"><span>Número de pericia</span><strong>${escapeHTML(caseItem.number)}</strong></div>
          <div class="case-data-item"><span>Expediente</span><strong>${escapeHTML(caseItem.file)}</strong></div>
          <div class="case-data-item"><span>Fecha de solicitud</span><strong>${escapeHTML(formatDate(caseItem.requested))}</strong></div>
          <div class="case-data-item"><span>Área técnica</span><strong>${escapeHTML(caseItem.area)}</strong></div>
          <div class="case-data-item"><span>Descripción del caso</span><strong>${escapeHTML(caseItem.description)}</strong></div>
        </div>
      </section>
    </div>
    <div class="detail-column">
      <section class="panel detail-card">
        <div class="detail-card-heading"><h2>Personas intervinientes</h2><span>${caseItem.experts.length + caseItem.evaluated.length} personas</span></div>
        <div class="participants-list">
          ${caseItem.experts.map((item) => `<div class="participant"><span class="participant-avatar">${escapeHTML(initials(item.name))}</span><div class="participant-info"><strong>${escapeHTML(item.name)}</strong><span>${escapeHTML(item.role)} · ${escapeHTML(item.specialty)}</span></div></div>`).join("")}
          ${caseItem.evaluated.map((person) => `<div class="participant"><span class="participant-avatar evaluated">${escapeHTML(initials(person))}</span><div class="participant-info"><strong>${escapeHTML(person)}</strong><span>Persona evaluada</span></div></div>`).join("")}
        </div>
        <div class="preview-divider"></div>
        <div class="participant"><span class="participant-avatar">${escapeHTML(initials(report.author))}</span><div class="participant-info"><strong>${escapeHTML(report.author)}</strong><span>Usuario que registró la actuación</span></div></div>
      </section>
      <section class="panel detail-card">
        <div class="detail-card-heading"><h2>Historial de actuaciones</h2><span>${caseReports.length} registros</span></div>
        <div class="timeline">${caseReports.map((item) => `<div class="timeline-item"><span class="timeline-marker"></span><div class="timeline-content"><strong>${item.id === report.id ? `<span class="timeline-current">${escapeHTML(item.title)}</span>` : `<button class="timeline-link" type="button" data-report="${escapeHTML(item.id)}">${escapeHTML(item.title)}</button>`}</strong><span>${escapeHTML(item.activity)} · ${escapeHTML(formatDate(item.date))}</span></div></div>`).join("")}</div>
      </section>
      <section class="panel detail-card">
        <div class="detail-card-heading"><h2>Historial de estados</h2></div>
        <div class="state-history">${stateHistory.map((item) => `<div class="state-history-row"><span class="history-dot"></span><div><strong>${escapeHTML(item.state)}</strong><span>${escapeHTML(formatDate(item.date))} · ${escapeHTML(item.user)}</span></div></div>`).join("")}</div>
      </section>
    </div>
  </div>`;
  screenRoot.querySelector("#print-report").addEventListener("click", () => window.print());
}

function initials(name) {
  return String(name).split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toLocaleUpperCase("es-AR");
}

function updateShell() {
  const titles = { search: "Informes", new: "Cargar informe", detail: "Detalle del informe" };
  document.querySelector("#breadcrumb-current").textContent = titles[activeScreen];
  document.querySelector("#nav-report-count").textContent = String(data.reports.length);
  document.querySelectorAll(".nav-link[data-screen]").forEach((button) => {
    button.setAttribute("aria-current", button.dataset.screen === (activeScreen === "detail" ? "search" : activeScreen) ? "page" : "false");
  });
}

function showToast(message, isError = false) {
  window.clearTimeout(toastTimer);
  toastRegion.innerHTML = `<div class="toast${isError ? " error" : ""}">${escapeHTML(message)}</div>`;
  toastTimer = window.setTimeout(() => { toastRegion.innerHTML = ""; }, 4200);
}

function navigateTo(screen, caseId) {
  if (screen === "new") renderForm(caseId ?? "");
  else renderSearch();
}

document.addEventListener("click", (event) => {
  const screenButton = event.target.closest("[data-screen]");
  if (screenButton) {
    event.preventDefault();
    navigateTo(screenButton.dataset.screen, screenButton.dataset.caseId);
    return;
  }
  const reportButton = event.target.closest("[data-report]");
  if (reportButton) renderDetail(reportButton.dataset.report);
});

document.querySelector("#today-label").textContent = new Intl.DateTimeFormat("es-AR", {
  weekday: "short",
  day: "numeric",
  month: "short",
  year: "numeric"
}).format(new Date());

renderSearch();
