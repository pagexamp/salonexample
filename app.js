// Interactive Web App Engine for EJEMPLO WEB (MÉXICO - HIDALGO)
// With Strict Day-of-Week & Shift Working Hours Scheduling Verification Engine

const defaultSucursales = [
  { id: 'suc1', name: 'Sucursal Pachuca Centro', address: 'Av. Revolución #450, Col. Centro, Pachuca, Hgo.', openTime: '10:00', closeTime: '19:00', manager: 'Valeria Gómez', status: 'operativa' },
  { id: 'suc2', name: 'Sucursal Tulancingo Plaza', address: 'Calle Zaragoza #102, Centro, Tulancingo, Hgo.', openTime: '10:00', closeTime: '18:00', manager: 'Sofía Hernández', status: 'operativa' }
];

const ALL_DAYS = [
  { id: 'lun', label: 'Lun' },
  { id: 'mar', label: 'Mar' },
  { id: 'mie', label: 'Mié' },
  { id: 'jue', label: 'Jue' },
  { id: 'vie', label: 'Vie' },
  { id: 'sab', label: 'Sáb' },
  { id: 'dom', label: 'Dom' }
];

// Worker Model with Days Checkbox Array
const defaultWorkers = [
  { id: 'w1', name: 'Valeria Gómez', days: ['mar', 'mie', 'jue', 'vie', 'sab'], startTime: '10:00', endTime: '19:00', status: 'activa' },
  { id: 'w2', name: 'Sofía Hernández', days: ['mar', 'mie', 'jue', 'vie', 'sab', 'dom'], startTime: '10:00', endTime: '18:00', status: 'activa' },
  { id: 'w3', name: 'Camila Morales', days: ['lun', 'mar', 'mie', 'jue', 'vie'], startTime: '11:00', endTime: '19:00', status: 'activa' },
  { id: 'w4', name: 'Fernanda Ruiz', days: ['mar', 'mie', 'jue', 'vie', 'sab'], startTime: '10:00', endTime: '19:00', status: 'activa' }
];

const defaultServices = [
  { id: 'srv1', name: 'Manicura Gel & Art VIP', category: 'unas', price: 450, duration: 90, assignedWorkerIds: ['w1', 'w2'], visible: true, icon: '💅', desc: 'Esculturado en gel de alta resistencia, nivelado Ruso, diseño personalizado y exfoliación hidratante.' },
  { id: 'srv2', name: 'Extensiones Pestañas 1 a 1', category: 'pestanas', price: 750, duration: 120, assignedWorkerIds: ['w1'], visible: true, icon: '👁️', desc: 'Técnica japonesa o volumen ruso adaptado a la forma de tu ojo con fibras ultraligeras de seda.' },
  { id: 'srv3', name: 'Lifting & Brow Lamination', category: 'pestanas', price: 550, duration: 60, assignedWorkerIds: ['w2', 'w4'], visible: true, icon: '✨', desc: 'Rizado natural de pestañas con tratamiento de queratina + diseño y laminado de cejas con tinte.' },
  { id: 'srv4', name: 'Diseño de Color & Balayage', category: 'cabello', price: 2200, duration: 180, assignedWorkerIds: ['w3'], visible: true, icon: '💇‍♀️', desc: 'Colorimetría avanzada, matiz personalizado, tratamiento Plex de reconstrucción y peinado pro.' }
];

// Initial bookings with status: 'pendiente'
const defaultBookings = [
  { id: 'b1', clientName: 'María García', sucursalName: 'Sucursal Pachuca Centro', serviceId: 'srv4', serviceName: 'Diseño de Color & Balayage', date: getTodayString(), startTime: '10:00', duration: 180, endTime: '13:00', workerId: 'w3', workerName: 'Camila Morales', status: 'pendiente' },
  { id: 'b2', clientName: 'Lucía Fernández', sucursalName: 'Sucursal Pachuca Centro', serviceId: 'srv1', serviceName: 'Manicura Gel & Art VIP', date: getTodayString(), startTime: '11:00', duration: 90, endTime: '12:30', workerId: 'w2', workerName: 'Sofía Hernández', status: 'confirmada' }
];

function getTodayString() {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

// Convert YYYY-MM-DD to day of week code: 'dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'
function getDayCodeFromDate(dateStr) {
  if (!dateStr) return '';
  const dayMap = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
  const d = new Date(dateStr + 'T00:00:00');
  return dayMap[d.getDay()];
}

function formatDateDDMM(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}`;
  }
  return dateStr;
}

let sucursales = JSON.parse(localStorage.getItem('ejemplo_sucursales_v7')) || defaultSucursales;
let workers = JSON.parse(localStorage.getItem('ejemplo_workers_v7')) || defaultWorkers;
let services = JSON.parse(localStorage.getItem('ejemplo_services_v7')) || defaultServices;
let bookings = JSON.parse(localStorage.getItem('ejemplo_bookings_v7')) || defaultBookings;

function saveState() {
  localStorage.setItem('ejemplo_sucursales_v7', JSON.stringify(sucursales));
  localStorage.setItem('ejemplo_workers_v7', JSON.stringify(workers));
  localStorage.setItem('ejemplo_services_v7', JSON.stringify(services));
  localStorage.setItem('ejemplo_bookings_v7', JSON.stringify(bookings));
}

let mapInitialized = false;

document.addEventListener('DOMContentLoaded', () => {
  initHidalgoMap();

  // Navbar Scroll & Scrollspy
  const sections = document.querySelectorAll('section[id], div[id].admin-panel-section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth Scroll for Nav Links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetSec = document.querySelector(targetId);
        if (targetSec) {
          if (targetId !== '#panelAdmin') {
            document.getElementById('panelAdmin').classList.remove('active');
            document.querySelectorAll('section:not(#panelAdmin), footer').forEach(s => s.style.display = 'block');
          }
          targetSec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Mode Switcher (Client vs Admin)
  const modeToggleBtn = document.getElementById('modeToggleBtn');
  const adminPanel = document.getElementById('panelAdmin');
  const clientSections = document.querySelectorAll('section:not(#panelAdmin), footer');

  let isAdminView = false;
  modeToggleBtn.addEventListener('click', () => {
    isAdminView = !isAdminView;
    if (isAdminView) {
      clientSections.forEach(s => s.style.display = 'none');
      adminPanel.classList.add('active');
      modeToggleBtn.innerHTML = '<i class="fa-solid fa-store"></i> Regresar al Sitio Web';
      renderAdminPanel();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      clientSections.forEach(s => s.style.display = 'block');
      adminPanel.classList.remove('active');
      modeToggleBtn.innerHTML = '<i class="fa-solid fa-sliders"></i> Panel Admin / Agenda';
      renderServicesGrid('all');
    }
  });

  // Dual Switcher Tabs (Salón vs Cursos)
  const switchBtns = document.querySelectorAll('.switch-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });

  // Category Filters
  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const cat = chip.getAttribute('data-cat');
      renderServicesGrid(cat);
    });
  });

  renderServicesGrid('all');

  // Booking Engine: Strict Day of Week & Shift Verification
  const serviceSelect = document.getElementById('serviceSelect');
  const appointmentDate = document.getElementById('appointmentDate');
  const branchSelect = document.getElementById('branchSelect');
  const timeSlotsContainer = document.getElementById('timeSlotsContainer');
  
  let selectedTimeSlot = null;
  let schedulingSolution = null;

  appointmentDate.value = getTodayString();
  appointmentDate.min = getTodayString();

  function updateAvailableTimeSlots() {
    timeSlotsContainer.innerHTML = '';
    selectedTimeSlot = null;
    schedulingSolution = null;

    const selectedServiceName = serviceSelect.value;
    const dateVal = appointmentDate.value;
    if (!selectedServiceName || !dateVal) return;

    const serviceObj = services.find(s => s.name === selectedServiceName) || services[0];
    const duration = serviceObj.duration;
    
    const candidateHours = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

    candidateHours.forEach(time => {
      const startMin = timeToMinutes(time);
      const endMin = startMin + duration;

      const solution = findSchedulingSolution(serviceObj, dateVal, startMin, endMin);

      const btn = document.createElement('div');
      btn.className = 'time-slot-btn';

      if (solution.possible) {
        btn.innerHTML = `<strong>${time} hrs</strong><br><small style="font-size: 0.75rem; color: #2ecc71;">🟢 Disponible</small>`;
        btn.addEventListener('click', () => {
          document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          selectedTimeSlot = time;
          schedulingSolution = solution;
        });
      } else {
        btn.classList.add('disabled');
        btn.innerHTML = `<strong>${time} hrs</strong><br><small style="font-size: 0.75rem;">🔴 No disponible</small>`;
        btn.title = `Horario no disponible (personal no trabaja en esta fecha/hora o agenda llena)`;
      }

      timeSlotsContainer.appendChild(btn);
    });
  }

  serviceSelect.addEventListener('change', updateAvailableTimeSlots);
  appointmentDate.addEventListener('change', updateAvailableTimeSlots);

  // Modals Logic
  const bookModal = document.getElementById('bookModal');
  const courseModal = document.getElementById('courseModal');
  const cityModal = document.getElementById('cityModal');
  const closeModalBtns = document.querySelectorAll('.modal-close');

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  });

  window.openBookModal = (serviceName = '') => {
    populateServiceSelectOptions();
    populateBranchSelectOptions();
    if (serviceName) {
      serviceSelect.value = serviceName;
    }
    updateAvailableTimeSlots();
    bookModal.classList.add('active');
  };

  window.openCourseModal = (courseName = '') => {
    if (courseName) {
      document.getElementById('courseSelect').value = courseName;
    }
    courseModal.classList.add('active');
  };

  window.openCityModal = () => {
    cityModal.classList.add('active');
  };

  // Appointment Form Submission
  document.getElementById('appointmentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('clientName').value;
    const serviceName = serviceSelect.value;
    const branchName = branchSelect.value;
    const date = appointmentDate.value;

    if (!selectedTimeSlot || !schedulingSolution || !schedulingSolution.possible) {
      alert('Por favor selecciona un horario disponible en verde.');
      return;
    }

    const serviceObj = services.find(s => s.name === serviceName) || services[0];
    const duration = serviceObj.duration;
    const startMin = timeToMinutes(selectedTimeSlot);
    const endMin = startMin + duration;
    const endTime = minutesToTime(endMin);

    if (schedulingSolution.reassignedBookingId && schedulingSolution.newWorkerForReassignedBooking) {
      const bToReassign = bookings.find(b => b.id === schedulingSolution.reassignedBookingId);
      if (bToReassign) {
        bToReassign.workerId = schedulingSolution.newWorkerForReassignedBooking.id;
        bToReassign.workerName = schedulingSolution.newWorkerForReassignedBooking.name;
        showToast(`⚡ Cita previa de ${bToReassign.clientName} reasignada automáticamente a ${bToReassign.workerName} para optimizar la agenda.`);
      }
    }

    const assignedWorker = schedulingSolution.targetWorker;

    const newBooking = {
      id: 'b_' + Date.now(),
      clientName: name,
      sucursalName: branchName,
      serviceId: serviceObj.id,
      serviceName: serviceName,
      date: date,
      startTime: selectedTimeSlot,
      duration: duration,
      endTime: endTime,
      workerId: assignedWorker.id,
      workerName: assignedWorker.name,
      status: 'pendiente'
    };

    bookings.push(newBooking);
    saveState();

    bookModal.classList.remove('active');
    showToast(`✨ ¡Cita agendada para ${name}! Atiende: ${assignedWorker.name} (${selectedTimeSlot} a ${endTime} hrs). Estatus: Pendiente.`);

    setTimeout(() => {
      const waText = encodeURIComponent(`Hola EJEMPLO WEB! Deseo solicitar cita para: ${serviceName} ($${serviceObj.price} MXN) en ${branchName} el día ${formatDateDDMM(date)} de ${selectedTimeSlot} a ${endTime} hrs. Cliente: ${name}. Atiende: ${assignedWorker.name}. Quedo atenta a su confirmación.`);
      window.open(`https://wa.me/?text=${waText}`, '_blank');
    }, 1500);
  });

  document.getElementById('courseForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('studentName').value;
    const course = document.getElementById('courseSelect').value;
    const location = document.getElementById('courseLocationSelect').value;

    courseModal.classList.remove('active');
    showToast(`🎓 ¡Lugar apartado para ${name}! Curso: ${course} en ${location}.`);

    setTimeout(() => {
      const waText = encodeURIComponent(`Hola EJEMPLO WEB Hidalgo! Deseo apartar mi lugar para el curso presencial: ${course} en ${location}. Nombre: ${name}`);
      window.open(`https://wa.me/?text=${waText}`, '_blank');
    }, 1500);
  });

  document.getElementById('cityForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reqName').value;
    const city = document.getElementById('reqCity').value;
    const group = document.getElementById('reqGroupSize').value;
    const course = document.getElementById('reqCourseSelect').value;

    cityModal.classList.remove('active');
    showToast(`📍 Solicitud registrada para llevar el curso presencial a ${city} (${group}).`);

    setTimeout(() => {
      const waText = encodeURIComponent(`Hola EJEMPLO WEB Hidalgo! Solicito llevar el curso presencial de ${course} a la zona de ${city} para ${group}. Mi nombre: ${name}`);
      window.open(`https://wa.me/?text=${waText}`, '_blank');
    }, 1500);
  });

  // Admin: Add New Branch Form
  document.getElementById('newBranchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const bName = document.getElementById('newBranchName').value;
    const bAddress = document.getElementById('newBranchAddress').value;
    const bOpen = document.getElementById('newBranchOpen').value || '10:00';
    const bClose = document.getElementById('newBranchClose').value || '19:00';
    const bManager = document.getElementById('newBranchManager').value || 'Por asignar';

    const newSuc = {
      id: 'suc_' + Date.now(),
      name: bName,
      address: bAddress,
      openTime: bOpen,
      closeTime: bClose,
      manager: bManager,
      status: 'operativa'
    };

    sucursales.push(newSuc);
    saveState();
    renderAdminPanel();
    document.getElementById('newBranchForm').reset();
    showToast(`🏢 Nueva sucursal "${bName}" registrada en el sistema.`);
  });

  // Admin: Add New Worker Form
  document.getElementById('newWorkerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const wName = document.getElementById('newWorkerName').value;
    const wStart = document.getElementById('newWorkerStart').value || '10:00';
    const wEnd = document.getElementById('newWorkerEnd').value || '19:00';

    const checkedDays = [];
    ALL_DAYS.forEach(d => {
      const cb = document.getElementById(`newW_day_${d.id}`);
      if (cb && cb.checked) checkedDays.push(d.id);
    });

    const newW = {
      id: 'w_' + Date.now(),
      name: wName,
      days: checkedDays.length > 0 ? checkedDays : ['mar', 'mie', 'jue', 'vie', 'sab'],
      startTime: wStart,
      endTime: wEnd,
      status: 'activa'
    };

    workers.push(newW);
    saveState();
    renderAdminPanel();
    document.getElementById('newWorkerForm').reset();
    showToast(`👥 Trabajadora "${wName}" registrada en el equipo.`);
  });

  // Admin: Add New Service Form
  document.getElementById('newServiceForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('newSrvName').value;
    const price = parseFloat(document.getElementById('newSrvPrice').value);
    const duration = parseInt(document.getElementById('newSrvDuration').value);
    const category = document.getElementById('newSrvCategory').value;
    const icon = document.getElementById('newSrvIcon').value || '✨';

    const newSrv = {
      id: 'srv_' + Date.now(),
      name: name,
      category: category,
      price: price,
      duration: duration,
      assignedWorkerIds: workers.map(w => w.id),
      visible: true,
      icon: icon,
      desc: `Servicio en salón con duración estimada de ${duration} minutos.`
    };

    services.push(newSrv);
    saveState();
    renderAdminPanel();
    renderServicesGrid('all');
    document.getElementById('newServiceForm').reset();
    showToast(`✅ Servicio "${name}" ($${price} MXN) guardado en la oferta.`);
  });

  const waBtn = document.getElementById('waBtn');
  const waMenu = document.getElementById('waMenu');
  waBtn.addEventListener('click', () => waMenu.classList.toggle('active'));
  document.addEventListener('click', (e) => {
    if (!waBtn.contains(e.target) && !waMenu.contains(e.target)) waMenu.classList.remove('active');
  });
});

/**
 * SCHEDULING & AUTOMATIC RE-ASSIGNMENT ALGORITHM
 * Strictly checks:
 * 1. Worker status === 'activa'
 * 2. Worker is assigned to target service
 * 3. Worker's checked DAYS include dateVal's day of week!
 * 4. Candidate time range is within worker's shift [startTime, endTime]
 * 5. Worker is not occupied in another booking (or existing booking can be re-assigned to another active, working, free worker!)
 */
function findSchedulingSolution(targetService, dateVal, startMin, endMin) {
  const targetDayCode = getDayCodeFromDate(dateVal);

  // Filter active workers who are assigned to target service AND work on targetDayCode!
  const activeWorkers = workers.filter(w => {
    if (w.status !== 'activa') return false;
    if (!targetService.assignedWorkerIds.includes(w.id)) return false;
    if (!Array.isArray(w.days) || !w.days.includes(targetDayCode)) return false; // Strict day check!
    return true;
  });
  
  if (activeWorkers.length === 0) {
    return { possible: false };
  }

  const getWorkerFlexibilityScore = (wId) => {
    return services.filter(s => s.assignedWorkerIds.includes(wId)).length;
  };

  // Sort candidate workers by flexibility score ascending (Least flexible / most specialized FIRST)
  activeWorkers.sort((a, b) => getWorkerFlexibilityScore(a.id) - getWorkerFlexibilityScore(b.id));

  // 1. Direct Assignment Check
  for (let w of activeWorkers) {
    const wShiftStart = timeToMinutes(w.startTime || '10:00');
    const wShiftEnd = timeToMinutes(w.endTime || '19:00');
    if (startMin < wShiftStart || endMin > wShiftEnd) continue;

    const isOccupied = bookings.some(b => {
      if (b.date === dateVal && (b.workerId === w.id || b.workerName === w.name) && b.status !== 'cancelada') {
        const bStart = timeToMinutes(b.startTime);
        const bEnd = timeToMinutes(b.endTime);
        return (startMin < bEnd && endMin > bStart);
      }
      return false;
    });

    if (!isOccupied) {
      return { possible: true, targetWorker: w, reassignedBookingId: null, newWorkerForReassignedBooking: null };
    }
  }

  // 2. Dynamic Re-assignment Check
  for (let w of activeWorkers) {
    const wShiftStart = timeToMinutes(w.startTime || '10:00');
    const wShiftEnd = timeToMinutes(w.endTime || '19:00');
    if (startMin < wShiftStart || endMin > wShiftEnd) continue;

    const overlappingBooking = bookings.find(b => {
      if (b.date === dateVal && (b.workerId === w.id || b.workerName === w.name) && b.status !== 'cancelada') {
        const bStart = timeToMinutes(b.startTime);
        const bEnd = timeToMinutes(b.endTime);
        return (startMin < bEnd && endMin > bStart);
      }
      return false;
    });

    if (overlappingBooking) {
      const bServiceObj = services.find(s => s.id === overlappingBooking.serviceId || s.name === overlappingBooking.serviceName);
      if (bServiceObj) {
        const bStartMin = timeToMinutes(overlappingBooking.startTime);
        const bEndMin = timeToMinutes(overlappingBooking.endTime);

        // Find alternative workers for overlappingBooking who also WORK ON targetDayCode!
        const altWorkers = workers.filter(altW => {
          if (altW.id === w.id || altW.status !== 'activa') return false;
          if (!bServiceObj.assignedWorkerIds.includes(altW.id)) return false;
          if (!Array.isArray(altW.days) || !altW.days.includes(targetDayCode)) return false; // Strict day check!

          const altShiftStart = timeToMinutes(altW.startTime || '10:00');
          const altShiftEnd = timeToMinutes(altW.endTime || '19:00');
          if (bStartMin < altShiftStart || bEndMin > altShiftEnd) return false;

          const altOccupied = bookings.some(bOther => {
            if (bOther.id === overlappingBooking.id) return false;
            if (bOther.date === dateVal && (bOther.workerId === altW.id || bOther.workerName === altW.name) && bOther.status !== 'cancelada') {
              const oStart = timeToMinutes(bOther.startTime);
              const oEnd = timeToMinutes(bOther.endTime);
              return (bStartMin < oEnd && bEndMin > oStart);
            }
            return false;
          });

          return !altOccupied;
        });

        if (altWorkers.length > 0) {
          return {
            possible: true,
            targetWorker: w,
            reassignedBookingId: overlappingBooking.id,
            newWorkerForReassignedBooking: altWorkers[0]
          };
        }
      }
    }
  }

  return { possible: false };
}

// Leaflet Map Hidalgo
function initHidalgoMap() {
  if (mapInitialized) return;
  const mapElement = document.getElementById('hidalgoMap');
  if (!mapElement) return;

  const hidalgoCenter = [20.1011, -98.7591];

  const map = L.map('hidalgoMap', {
    scrollWheelZoom: false
  }).setView(hidalgoCenter, 9);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; CARTO &copy; OpenStreetMap',
    maxZoom: 18
  }).addTo(map);

  const mainIcon = L.divIcon({
    className: 'custom-leaflet-marker',
    html: `<div style="background: linear-gradient(135deg, #F5D796, #E6C280); color:#000; width:36px; height:36px; border-radius:50%; border:3px solid #000; display:flex; align-items:center; justify-content:center; font-weight:bold; box-shadow:0 0 15px rgba(230,194,128,0.8);"><i class="fa-solid fa-crown"></i></div>`,
    iconSize: [36, 36]
  });

  L.marker([20.1011, -98.7591], { icon: mainIcon }).addTo(map)
    .bindPopup(`
      <div class="custom-map-popup">
        <h4>⭐ Sucursal Pachuca Centro</h4>
        <p><strong>Pachuca de Soto, Hidalgo</strong><br>Av. Revolución #450, Col. Centro</p>
        <span class="badge">🟢 ABIERTO AHORA (10:00 - 19:00)</span>
      </div>
    `).openPopup();

  const cityIcon = L.divIcon({
    className: 'custom-leaflet-marker',
    html: `<div style="background: linear-gradient(135deg, #F3B3B0, #E89E9B); color:#000; width:30px; height:30px; border-radius:50%; border:2px solid #000; display:flex; align-items:center; justify-content:center; font-weight:bold; box-shadow:0 0 12px rgba(232,158,155,0.7);"><i class="fa-solid fa-graduation-cap"></i></div>`,
    iconSize: [30, 30]
  });

  L.marker([20.0831, -98.3625], { icon: cityIcon }).addTo(map)
    .bindPopup(`
      <div class="custom-map-popup">
        <h4>📍 Sucursal Tulancingo Plaza</h4>
        <p>Calle Zaragoza #102, Centro</p>
        <span class="badge">🟢 ABIERTO AHORA (10:00 - 18:00)</span>
      </div>
    `);

  mapInitialized = true;
}

function populateServiceSelectOptions() {
  const select = document.getElementById('serviceSelect');
  select.innerHTML = '';
  services.filter(s => s.visible).forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.name;
    opt.textContent = `${s.name} (${s.duration} min - $${s.price.toLocaleString('es-MX')} MXN)`;
    select.appendChild(opt);
  });
}

function populateBranchSelectOptions() {
  const select = document.getElementById('branchSelect');
  if (!select) return;
  select.innerHTML = '';
  sucursales.filter(s => s.status === 'operativa').forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.name;
    opt.textContent = `${s.name} (${s.address})`;
    select.appendChild(opt);
  });
}

function renderServicesGrid(category = 'all') {
  const grid = document.getElementById('servicesGridContainer');
  if (!grid) return;
  grid.innerHTML = '';

  const visibleServices = services.filter(s => s.visible);
  const filtered = category === 'all' ? visibleServices : visibleServices.filter(s => s.category === category);

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1;">No hay servicios disponibles en esta categoría actualmente.</p>';
    return;
  }

  filtered.forEach(s => {
    const assignedStaffCount = s.assignedWorkerIds ? s.assignedWorkerIds.length : 1;
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
      <div>
        <div class="service-icon">${s.icon}</div>
        <h3 class="service-title">${s.name}</h3>
        <div class="service-price">$${s.price.toLocaleString('es-MX')} MXN</div>
        <p class="service-desc">${s.desc}</p>
      </div>
      <div>
        <div class="service-meta">
          <span class="duration-badge"><i class="fa-regular fa-clock"></i> ${s.duration} min</span>
          <span><i class="fa-solid fa-user-check"></i> ${assignedStaffCount} especialista(s)</span>
        </div>
        <button class="btn btn-gold" style="width: 100%" onclick="openBookModal('${s.name}')">
          <i class="fa-solid fa-calendar-plus"></i> Agendar Servicio
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderAdminPanel() {
  document.getElementById('adminTotalBookings').textContent = bookings.length;
  document.getElementById('adminTotalWorkers').textContent = workers.filter(w => w.status === 'activa').length;
  document.getElementById('adminTotalServices').textContent = services.length;
  document.getElementById('adminTotalSucursales').textContent = sucursales.filter(s => s.status === 'operativa').length;

  const totalRevenue = bookings.reduce((sum, b) => {
    const s = services.find(srv => srv.name === b.serviceName);
    return sum + (s ? s.price : 450);
  }, 0);
  document.getElementById('adminTotalRevenue').textContent = `$${totalRevenue.toLocaleString('es-MX')} MXN`;

  // 1. Sucursales Table Render
  const sucursalesTableBody = document.getElementById('adminSucursalesTableBody');
  if (sucursalesTableBody) {
    sucursalesTableBody.innerHTML = '';
    sucursales.forEach((s, idx) => {
      const isOpen = isStoreOpen(s.openTime || '10:00', s.closeTime || '19:00');
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span style="color: var(--accent-gold); font-weight: 600;">#${s.id}</span></td>
        <td>
          <input type="text" value="${s.name}" class="form-control" style="padding: 0.4rem; font-weight: bold;" onchange="updateBranchField(${idx}, 'name', this.value)">
        </td>
        <td>
          <input type="text" value="${s.address}" class="form-control" style="padding: 0.4rem; font-size: 0.82rem;" onchange="updateBranchField(${idx}, 'address', this.value)">
        </td>
        <td>
          <div style="display: flex; gap: 0.3rem; align-items: center;">
            <input type="text" value="${s.openTime || '10:00'}" style="width:60px;" class="form-control" onchange="updateBranchField(${idx}, 'openTime', this.value)"> - 
            <input type="text" value="${s.closeTime || '19:00'}" style="width:60px;" class="form-control" onchange="updateBranchField(${idx}, 'closeTime', this.value)">
          </div>
        </td>
        <td>
          <input type="text" value="${s.manager}" class="form-control" style="padding: 0.4rem; font-size: 0.85rem; color: var(--accent-gold);" onchange="updateBranchField(${idx}, 'manager', this.value)">
        </td>
        <td>
          <span class="status-pill ${isOpen ? 'open-now' : 'closed-now'}">
            ${isOpen ? '🟢 ABIERTO' : '🔴 CERRADO'}
          </span>
        </td>
        <td>
          <button class="visibility-toggle-btn ${s.status === 'operativa' ? 'visible' : 'hidden'}" onclick="toggleSucursalStatus(${idx})">
            ${s.status === 'operativa' ? '🟢 Operativa' : '🔴 Inactiva'}
          </button>
        </td>
        <td>
          <button class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; color: #e74c3c;" onclick="deleteSucursal(${idx})">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      `;
      sucursalesTableBody.appendChild(tr);
    });
  }

  // 2. Workers Table Render
  const workersTableBody = document.getElementById('adminWorkersTableBody');
  workersTableBody.innerHTML = '';
  workers.forEach((w, idx) => {
    const tr = document.createElement('tr');
    
    let daysCheckboxesHtml = '<div class="days-checkbox-group">';
    ALL_DAYS.forEach(d => {
      const isChecked = Array.isArray(w.days) && w.days.includes(d.id) ? 'checked' : '';
      daysCheckboxesHtml += `
        <label class="day-checkbox-item">
          <input type="checkbox" ${isChecked} onchange="toggleWorkerDay(${idx}, '${d.id}')"> ${d.label}
        </label>
      `;
    });
    daysCheckboxesHtml += '</div>';

    tr.innerHTML = `
      <td><span style="color: var(--accent-gold); font-weight: 600;">#${w.id}</span></td>
      <td>
        <input type="text" value="${w.name}" class="form-control" style="padding: 0.4rem; font-weight: bold;" onchange="updateWorkerField(${idx}, 'name', this.value)">
      </td>
      <td>${daysCheckboxesHtml}</td>
      <td>
        <div style="display: flex; gap: 0.3rem; align-items: center;">
          <input type="text" value="${w.startTime || '10:00'}" style="width:60px;" class="form-control" onchange="updateWorkerField(${idx}, 'startTime', this.value)"> - 
          <input type="text" value="${w.endTime || '19:00'}" style="width:60px;" class="form-control" onchange="updateWorkerField(${idx}, 'endTime', this.value)">
        </div>
      </td>
      <td>
        <button class="visibility-toggle-btn ${w.status === 'activa' ? 'visible' : 'hidden'}" onclick="toggleWorkerStatus(${idx})">
          ${w.status === 'activa' ? '🟢 Activa' : '🔴 Inactiva'}
        </button>
      </td>
      <td>
        <button class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; color: #e74c3c;" onclick="deleteWorker(${idx})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    `;
    workersTableBody.appendChild(tr);
  });

  // 3. Services Configuration Table Render
  const srvTableBody = document.getElementById('adminServicesTableBody');
  srvTableBody.innerHTML = '';
  services.forEach((s, idx) => {
    const tr = document.createElement('tr');
    
    let workerCheckboxesHtml = '<div class="staff-checkboxes-group">';
    workers.filter(w => w.status === 'activa').forEach(w => {
      const isChecked = s.assignedWorkerIds && s.assignedWorkerIds.includes(w.id) ? 'checked' : '';
      workerCheckboxesHtml += `
        <label class="staff-checkbox-item">
          <input type="checkbox" ${isChecked} onchange="toggleWorkerAssignment(${idx}, '${w.id}')"> ${w.name}
        </label>
      `;
    });
    workerCheckboxesHtml += '</div>';

    tr.innerHTML = `
      <td><strong>${s.icon} ${s.name}</strong></td>
      <td>
        <div style="display: flex; align-items: center; gap: 0.4rem;">
          <input type="number" value="${s.price}" step="50" style="width: 85px;" class="form-control" onchange="updateServicePrice(${idx}, this.value)">
          <small>MXN</small>
        </div>
      </td>
      <td>
        <div style="display: flex; align-items: center; gap: 0.4rem;">
          <input type="number" value="${s.duration}" min="15" step="15" style="width: 75px;" class="form-control" onchange="updateServiceDuration(${idx}, this.value)">
          <small>min</small>
        </div>
      </td>
      <td>${workerCheckboxesHtml}</td>
      <td>
        <button class="visibility-toggle-btn ${s.visible ? 'visible' : 'hidden'}" onclick="toggleServiceVisibility(${idx})">
          ${s.visible ? '👁️ Visible' : '🙈 Oculto'}
        </button>
      </td>
      <td>
        <button class="btn btn-outline" style="padding: 0.35rem 0.8rem; font-size: 0.8rem; color: #e74c3c;" onclick="deleteService(${idx})"><i class="fa-solid fa-trash"></i></button>
      </td>
    `;
    srvTableBody.appendChild(tr);
  });

  // 4. Agenda Table Render with Date formatted as dd/mm (e.g. 26/07)
  const agendaTableBody = document.getElementById('adminAgendaTableBody');
  agendaTableBody.innerHTML = '';
  bookings.forEach((b, idx) => {
    const tr = document.createElement('tr');
    
    let statusClass = 'pendiente';
    if (b.status === 'confirmada') statusClass = 'confirmada';
    if (b.status === 'cancelada') statusClass = 'cancelada';

    tr.innerHTML = `
      <td><strong>${b.clientName}</strong></td>
      <td><small style="color: var(--accent-gold);">${b.sucursalName || 'Sucursal Pachuca Centro'}</small></td>
      <td>${b.serviceName}</td>
      <td><strong style="color: var(--accent-gold);"><i class="fa-regular fa-calendar"></i> ${formatDateDDMM(b.date)}</strong></td>
      <td><span class="duration-badge">${b.startTime} - ${b.endTime} (${b.duration}m)</span></td>
      <td><strong style="color: var(--accent-gold);"><i class="fa-solid fa-user-check"></i> ${b.workerName || 'Trabajadora'}</strong></td>
      <td>
        <select class="form-control status-pill ${statusClass}" style="padding: 0.2rem 0.6rem !important; font-size: 0.8rem;" onchange="updateBookingStatus(${idx}, this.value)">
          <option value="pendiente" ${b.status === 'pendiente' ? 'selected' : ''}>🟡 Pendiente</option>
          <option value="confirmada" ${b.status === 'confirmada' ? 'selected' : ''}>🟢 Confirmada</option>
          <option value="cancelada" ${b.status === 'cancelada' ? 'selected' : ''}>🔴 Cancelada</option>
        </select>
      </td>
      <td>
        <button class="btn btn-outline" style="padding: 0.3rem 0.7rem; font-size: 0.78rem; color: #e74c3c;" onclick="deleteBooking(${idx})"><i class="fa-solid fa-xmark"></i> Eliminar</button>
      </td>
    `;
    agendaTableBody.appendChild(tr);
  });
}

function isStoreOpen(openStr, closeStr) {
  const now = new Date();
  const currentMin = now.getHours() * 60 + now.getMinutes();
  const openMin = timeToMinutes(openStr);
  const closeMin = timeToMinutes(closeStr);
  return (currentMin >= openMin && currentMin < closeMin);
}

window.toggleWorkerDay = (workerIndex, dayId) => {
  if (!Array.isArray(workers[workerIndex].days)) {
    workers[workerIndex].days = [];
  }
  const pos = workers[workerIndex].days.indexOf(dayId);
  if (pos > -1) {
    workers[workerIndex].days.splice(pos, 1);
  } else {
    workers[workerIndex].days.push(dayId);
  }
  saveState();
  showToast(`Días de trabajadora "${workers[workerIndex].name}" actualizados.`);
};

window.updateBookingStatus = (index, newStatus) => {
  bookings[index].status = newStatus;
  saveState();
  renderAdminPanel();
  showToast(`Estatus de cita para ${bookings[index].clientName} cambiado a: ${newStatus.toUpperCase()}.`);
};

window.updateBranchField = (index, field, value) => {
  sucursales[index][field] = value;
  saveState();
  populateBranchSelectOptions();
  showToast(`Dato de sucursal "${sucursales[index].name}" actualizado.`);
};

window.updateWorkerField = (index, field, value) => {
  workers[index][field] = value;
  saveState();
  showToast(`Dato de trabajadora "${workers[index].name}" actualizado.`);
};

window.toggleSucursalStatus = (index) => {
  sucursales[index].status = sucursales[index].status === 'operativa' ? 'inactiva' : 'operativa';
  saveState();
  renderAdminPanel();
  populateBranchSelectOptions();
  showToast(`Estatus de "${sucursales[index].name}" cambiado a ${sucursales[index].status}.`);
};

window.toggleServiceVisibility = (index) => {
  services[index].visible = !services[index].visible;
  saveState();
  renderAdminPanel();
  renderServicesGrid('all');
  showToast(`Estatus de "${services[index].name}" actualizado a ${services[index].visible ? 'Visible en sitio' : 'Oculto'}.`);
};

window.toggleWorkerAssignment = (serviceIndex, workerId) => {
  if (!services[serviceIndex].assignedWorkerIds) {
    services[serviceIndex].assignedWorkerIds = [];
  }
  const pos = services[serviceIndex].assignedWorkerIds.indexOf(workerId);
  if (pos > -1) {
    services[serviceIndex].assignedWorkerIds.splice(pos, 1);
  } else {
    services[serviceIndex].assignedWorkerIds.push(workerId);
  }
  saveState();
  renderAdminPanel();
};

window.toggleWorkerStatus = (index) => {
  workers[index].status = workers[index].status === 'activa' ? 'inactiva' : 'activa';
  saveState();
  renderAdminPanel();
  showToast(`Trabajadora "${workers[index].name}" ahora está ${workers[index].status}.`);
};

window.updateServicePrice = (index, val) => {
  services[index].price = parseFloat(val) || 0;
  saveState();
  renderServicesGrid('all');
  showToast(`Precio de "${services[index].name}" actualizado a $${val} MXN.`);
};

window.updateServiceDuration = (index, val) => {
  services[index].duration = parseInt(val) || 60;
  saveState();
  showToast(`Duración de "${services[index].name}" ajustada a ${val} min.`);
};

window.deleteSucursal = (index) => {
  if (confirm(`¿Eliminar la sucursal "${sucursales[index].name}"?`)) {
    sucursales.splice(index, 1);
    saveState();
    renderAdminPanel();
  }
};

window.deleteWorker = (index) => {
  if (confirm(`¿Eliminar a la trabajadora "${workers[index].name}"?`)) {
    workers.splice(index, 1);
    saveState();
    renderAdminPanel();
  }
};

window.deleteService = (index) => {
  if (confirm(`¿Eliminar servicio "${services[index].name}"?`)) {
    services.splice(index, 1);
    saveState();
    renderAdminPanel();
    renderServicesGrid('all');
  }
};

window.deleteBooking = (index) => {
  if (confirm('¿Eliminar esta cita de la agenda?')) {
    bookings.splice(index, 1);
    saveState();
    renderAdminPanel();
    showToast('Cita eliminada y horario liberado en la agenda.');
  }
};

function timeToMinutes(timeStr) {
  if (!timeStr) return 0;
  const [h, m] = timeStr.split(':').map(Number);
  return (h || 0) * 60 + (m || 0);
}

function minutesToTime(totalMin) {
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  toastMsg.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}
