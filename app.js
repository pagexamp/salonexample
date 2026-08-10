// Interactive Web App Engine for (MÉXICO - HIDALGO)
// Clean Dashboard View + All Square Cards inside admin-stats-grid + Fullscreen 100% Admin Modules + Red Floating Close Button + Benefits Loyalty Program (Unique 6-digit Customer Numbers) + Scrollable Modals & Customer Number Validation + Non-closing bookModal on Outside Click & No Scrollbar on Time Slots + Global Body Scroll Lock on Modals + Dynamic 30-min Time Slots (Real-time today check + Worker shift end & Branch closing validation + Editable Worker Branch Assignment + 12-Hour AM/PM Time Formatting Engine) + Editable Benefits & Clickable Client Name Editing

// 1. CONSTANTS & DEFAULT DATA
const ALL_DAYS = [
  { id: 'lun', label: 'Lun' },
  { id: 'mar', label: 'Mar' },
  { id: 'mie', label: 'Mié' },
  { id: 'jue', label: 'Jue' },
  { id: 'vie', label: 'Vie' },
  { id: 'sab', label: 'Sáb' },
  { id: 'dom', label: 'Dom' }
];

const defaultSucursales = [
  {
    "id": "suc_1785290482341",
    "name": "Total Beauty Tepatepec",
    "address": "1o de Mayo 2, III Demarcación, 42660 Tepatepec, Hgo.",
    "coords": "20.245587874549987, -99.08899571226857",
    "openTime": "10:00",
    "closeTime": "19:00",
    "manager": "General",
    "status": "operativa",
    "lat": 20.245587874549987,
    "lng": -99.08899571226857
  }
];

const defaultCategories = [
  {
    "id": "pestanas",
    "name": "PESTAÑAS"
  },
  {
    "id": "cejas",
    "name": "CEJAS"
  },
  {
    "id": "depilacion",
    "name": "DEPILACIÓN"
  },
  {
    "id": "cat_gelish_4275",
    "name": "GELISH"
  },
  {
    "id": "cat_acrilicas_8311",
    "name": "ACRÍLICAS"
  },
  {
    "id": "cat_manicure_2894",
    "name": "MANICURE"
  },
  {
    "id": "cat_pedicure_6515",
    "name": "PEDICURE"
  },
  {
    "id": "cat_alaciados____tratamientos_capilares_6429",
    "name": "ALACIADOS & TRATAMIENTOS CAPILARES"
  },
  {
    "id": "cat_cortes_de_cabello_9460",
    "name": "CORTES DE CABELLO"
  },
  {
    "id": "cat_colorimetria_2782",
    "name": "COLORIMETRIA"
  },
  {
    "id": "cat_cortina_y_contornos_7097",
    "name": "CORTINA Y CONTORNOS"
  },
  {
    "id": "cat_mechas_de_frente_6583",
    "name": "MECHAS DE FRENTE"
  },
  {
    "id": "cat_tintes_5015",
    "name": "TINTES"
  },
  {
    "id": "cat_rayitos_0268",
    "name": "RAYITOS"
  }
];

const defaultWorkers = [
  {
    "id": "w_1785290718227",
    "name": "Especialista prueba",
    "sucursalId": "suc_1785290482341",
    "days": [
      "lun",
      "mar",
      "mie",
      "jue",
      "vie",
      "sab",
      "dom"
    ],
    "startTime": "10:00",
    "endTime": "19:00",
    "status": "activa"
  }
];

const defaultServices = [
  {
    "id": "srv_cat_lifting_pestanas",
    "name": "Lifting de Pestañas",
    "category": "pestanas",
    "price": 300,
    "duration": 60,
    "badge": "✨ Favorito",
    "assignedWorkerIds": [
      "w1",
      "w2",
      "w3",
      "w4",
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Tratamiento estético que eleva, curva y acentúa la forma natural de tus pestañas desde la raíz, logrando una mirada más abierta, definida y con efecto rímel de larga duración sin necesidad de extensiones.",
    "image": "images/1786228261_lifting_de_pesta_as.png"
  },
  {
    "id": "srv_cat_pestanas_clasica",
    "name": "Extensiones de Pestañas  (Técnica Clásica)",
    "category": "pestanas",
    "price": 499,
    "duration": 90,
    "badge": "🌟 Elegante",
    "assignedWorkerIds": [
      "w_1785290718227",
      "w1",
      "w2",
      "w3",
      "w4"
    ],
    "visible": true,
    "desc": "Aplicación de una extensión individual sobre cada una de tus pestañas naturales para lograr un efecto elegante, natural y con mayor longitud y definición en tu mirada.",
    "image": "images/1786228362_Gemini_Generated_Image_le5ku1le5ku1le5k.png"
  },
  {
    "id": "srv_cat_pestanas_volumen",
    "name": "Extensiones de Pestañas Volumen Tecnológico",
    "category": "pestanas",
    "price": 550,
    "duration": 105,
    "badge": "👑 Tendencia",
    "assignedWorkerIds": [
      "w_1785290718227",
      "w1",
      "w2",
      "w3",
      "w4"
    ],
    "visible": true,
    "desc": "Aplicación de abanicos predefinidos de fibras ultra ligeras que aportan máximo volumen, densidad y definición a tu mirada en menos tiempo, con un acabado uniforme y duradero.",
    "image": "images/1786228728_3.png"
  },
  {
    "id": "srv_cat_pestanas_efectos",
    "name": "Extensiones de Pestañas Efectos en Tendencia",
    "category": "pestanas",
    "price": 700,
    "duration": 120,
    "badge": "🔥 Top Trend",
    "assignedWorkerIds": [
      "w_1785290718227",
      "w1",
      "w2",
      "w3",
      "w4"
    ],
    "visible": true,
    "desc": "Diseños que combinan diferentes longitudes y curvaturas para crear miradas únicas, con estilo vanguardista y un acabado moderno de gran impacto.",
    "image": "images/1786228832_4.png"
  },
  {
    "id": "srv_1786199088366",
    "name": "Extensiones de Pestañas Efecto Rimel / Mojado",
    "category": "pestanas",
    "price": 550,
    "duration": 60,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Técnica que combina fibras cerradas para simular el aspecto de pestañas recién maquilladas con rímel o ligeramente húmedas, logrando una mirada con volumen texturizado, definida y de estilo fresco.",
    "image": "images/1786228956_5.png"
  },
  {
    "id": "srv_1786199162474",
    "name": "Laminado + Diseño + Depilación de Cejas",
    "category": "cejas",
    "price": 300,
    "duration": 60,
    "badge": "👑 Tendencia",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio integral que fija y peina los pelos rebeldes, define la forma ideal de tus cejas según la morfología de tu rostro y elimina el exceso de vello para lograr una mirada enmarcada, simétrica y pulida.",
    "image": "images/1786229583_6.png"
  },
  {
    "id": "srv_1786199214904",
    "name": "Ceja HD (Laminado + Diseño + Depilación + Pigmento)",
    "category": "cejas",
    "price": 400,
    "duration": 60,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Tratamiento de definición avanzada que alinea, da forma y depila tus cejas, añadiendo un pigmento especial para rellenar huecos, aportar color y lograr un efecto de cejas tupidas, simétricas y de alto impacto.",
    "image": "images/1786229917_7.png"
  },
  {
    "id": "srv_1786199245142",
    "name": "Laminado (Solo)",
    "category": "cejas",
    "price": 200,
    "duration": 60,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Tratamiento de fijación que peina y alinea los pelos rebeldes de las cejas hacia la dirección deseada, logrando un aspecto más grueso, ordenado y con mayor volumen natural.",
    "image": "images/1786231514_8.png"
  },
  {
    "id": "srv_1786199270406",
    "name": "Diseño y Depilación de Cejas",
    "category": "cejas",
    "price": 150,
    "duration": 60,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Estudio visajista para definir la forma ideal de tus cejas según tus facciones, seguido de una depilación precisa que remueve el vello no deseado para enmarcar tu mirada con limpieza y simetría.",
    "image": "images/1786232203_9.png"
  },
  {
    "id": "srv_1786199416933",
    "name": "Depilación de Cara con Hilo",
    "category": "depilacion",
    "price": 250,
    "duration": 60,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Técnica natural y precisa que remueve el vello de raíz utilizando un hilo de algodón, ideal para pieles sensibles ya que no irrita, exfolia suavemente y deja el rostro completamente liso y definido.",
    "image": "images/1786232656_10.png"
  },
  {
    "id": "srv_1786199435085",
    "name": "Depilación de Cara con Cera",
    "category": "depilacion",
    "price": 200,
    "duration": 60,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Técnica rápida y efectiva que retira el vello facial desde la raíz, dejando la piel del rostro suave, libre de imperfecciones y con un acabado uniforme por semanas.",
    "image": "images/1786289292_1.png"
  },
  {
    "id": "srv_1786199454376",
    "name": "Depilación de Cara con Perfilador",
    "category": "depilacion",
    "price": 200,
    "duration": 60,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Técnica suave e indolora que remueve el vello fino y las células muertas de la piel con una cuchilla de precisión, dejando el rostro instantáneamente suave, luminoso y listo para una mejor absorción de productos o un maquillaje impecable.",
    "image": "images/1786289383_2.png"
  },
  {
    "id": "srv_1786199560441",
    "name": "Gelish Gel Semipermanente Un Solo Tono",
    "category": "cat_gelish_4275",
    "price": 199,
    "duration": 60,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Aplicación de esmalte en gel de alta durabilidad en un color uniforme, curado con luz LED/UV para garantizar un brillo impecable, secado instantáneo y uñas perfectas sin descascararse por semanas.",
    "image": "images/1786289901_3.png"
  },
  {
    "id": "srv_1786199589046",
    "name": "Gelish Gel Semipermanente 2 tonos",
    "category": "pestanas",
    "price": 199,
    "duration": 60,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Aplicación de esmalte en gel de alta durabilidad combinando dos tonos a tu elección, curado con luz LED/UV para un acabado con brillo impecable, diseño personalizado y larga duración sin descascararse.",
    "image": "images/1786290284_4.png"
  },
  {
    "id": "srv_1786199610139",
    "name": "GELISH GEL SEMIPERMANENTE DE 3 TONOS O MAS",
    "category": "cat_gelish_4275",
    "price": 199,
    "duration": 60,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Aplicación de esmalte en gel de alta durabilidad con una combinación de tres o más tonos a tu elección, logrando un estilo dinámico, colorido y completamente personalizado con un brillo impecable y de larga duración.",
    "image": "images/1786297105_5.png"
  },
  {
    "id": "srv_1786199637960",
    "name": "GELISH GEL RUBBER",
    "category": "cat_gelish_4275",
    "price": 350,
    "duration": 60,
    "badge": "👑 Tendencia",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Base de gel de alta densidad y flexibilidad que refuerza la uña natural, corrige imperfecciones de la superficie y aporta nivelación, ideal para uñas quebradizas o débiles que buscan mayor resistencia y larga duración.",
    "image": "images/1786297568_6.png"
  },
  {
    "id": "srv_1786199675265",
    "name": "GELISH RETIRO DE GEL SEMIPERMANENTE",
    "category": "cat_gelish_4275",
    "price": 50,
    "duration": 60,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Remoción segura y cuidadosa del esmalte en gel mediante productos y herramientas especializadas, diseñada para retirar el producto por completo sin dañar la capa natural de tus uñas.",
    "image": "images/1786298109_7.png"
  },
  {
    "id": "srv_1786199724908",
    "name": "RETOQUE DE UÑAS ACRILICAS",
    "category": "cat_acrilicas_8311",
    "price": 300,
    "duration": 60,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Mantenimiento profesional para rellenar el crecimiento natural de la uña, reestructurar la arquitectura de la acrílica y renovar el color o diseño, devolviéndoles un aspecto impecable, fuerte y recien hecho.",
    "image": "images/1786298383_8.png"
  },
  {
    "id": "srv_1786199856028",
    "name": "UÑAS PEQUEÑAS LARGO 1-2 (TIP)",
    "category": "cat_acrilicas_8311",
    "price": 350,
    "duration": 70,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Extensión de uñas con tip en un largo corto y cómodo (números 1 al 2), perfecta para un estilo práctico, natural y resistente sin perder la elegancia en tus manos.",
    "image": "images/1786299572_9.png"
  },
  {
    "id": "srv_1786199918552",
    "name": "UÑAS PEQUEÑAS LARGO 1-2 (ACRÍLICO)",
    "category": "cat_acrilicas_8311",
    "price": 380,
    "duration": 1,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Aplicación de acrílico en un largo corto y muy práctico (números 1 al 2), ideal para dar fuerza, forma y durabilidad a la uña natural con un aspecto sumamente natural y cómodo para el día a día.",
    "image": "images/1786299794_10.png"
  },
  {
    "id": "srv_1786199946171",
    "name": "UÑAS MEDIANAS LARGO 3-4 (TIP)",
    "category": "cat_acrilicas_8311",
    "price": 350,
    "duration": 79,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Extensión de uñas con tip en un largo mediano (números 3 al 4), equilibrando estilismo, presencia y comodidad para lucir manos elegantes y estilizadas.",
    "image": "images/1786299986_11.png"
  },
  {
    "id": "srv_1786199985679",
    "name": "UÑAS MEDIANAS LARGO 3-4 (ACRILICOS)",
    "category": "cat_acrilicas_8311",
    "price": 399,
    "duration": 60,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Aplicación de acrílico en un largo mediano versátil (números 3 al 4), ideal para brindar mayor resistencia, estructura y un acabado estilizado y elegante que resalta tus manos sin perder comodidad.",
    "image": "images/1786300267_12.png"
  },
  {
    "id": "srv_1786200016708",
    "name": "UÑAS GRANDES LARGO 5-6 (TIP)",
    "category": "cat_acrilicas_8311",
    "price": 399,
    "duration": 90,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Extensión de uñas con tip en un largo impactante (números 5 al 6), ideal para quienes buscan una manicura llamativa, elegante y con espacio perfecto para lucir diseños de alto impacto.",
    "image": "images/1786300495_13.png"
  },
  {
    "id": "srv_1786200044953",
    "name": "UÑAS GRANDES LARGO 5-6 (ACRILICO)",
    "category": "cat_acrilicas_8311",
    "price": 450,
    "duration": 70,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Aplicación de acrílico en un largo llamativo e impactante (números 5 al 6), que brinda máxima firmeza, resistencia y una estructura estilizada, perfecta para lucir manos espectaculares y con gran presencia.",
    "image": "images/1786300722_14.png"
  },
  {
    "id": "srv_1786200073689",
    "name": "UÑAS XL LARGO 7-15  (TIP)",
    "category": "cat_acrilicas_8311",
    "price": 550,
    "duration": 89,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Extensión de uñas con tip en largo extra grande (números 7 al 15), diseñada para lograr un estilo audaz, vanguardista e imponente, ideal para lucir manos estilizadas y diseños creativos de máximo impacto.",
    "image": "images/1786301115_15.png"
  },
  {
    "id": "srv_1786200107294",
    "name": "UÑAS XL LARGO 7-15  (ACRILICO)",
    "category": "cat_acrilicas_8311",
    "price": 599,
    "duration": 78,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Aplicación de acrílico esculpido en un largo extra grande (números 7 al 15), que ofrece máxima resistencia, firmeza y una arquitectura impecable para garantizar la durabilidad de un estilo imponente, audaz y de alto impacto.",
    "image": "images/1786301226_16.png"
  },
  {
    "id": "srv_1786200141039",
    "name": "MANICURE",
    "category": "cat_manicure_2894",
    "price": 150,
    "duration": 78,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Tratamiento completo que limpia, da forma y lima tus uñas naturales, retira e hidrata la cutícula y suaviza la piel de las manos con un ligero masaje, dejándolas impecables, sanas y cuidadas.",
    "image": "images/1786301500_17.png"
  },
  {
    "id": "srv_1786200176857",
    "name": "PEDICURE SPA",
    "category": "cat_pedicure_6515",
    "price": 250,
    "duration": 97,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Tratamiento integral de descanso y renovación para tus pies que incluye limpieza profunda, limado de uñas, cuidado de cutículas, exfoliación suave, remoción de asperezas, mascarilla hidratante y un masaje relajante que devuelve la frescura y suavidad a tu piel.",
    "image": "images/1786301788_18.png"
  },
  {
    "id": "srv_1786200235808",
    "name": "PEDICURE GELISH 1, 2 O 3 TONOS",
    "category": "cat_pedicure_6515",
    "price": 199,
    "duration": 78,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Tratamiento completo de pedicure que combina la limpieza y el cuidado de tus pies con la aplicación de esmalte en gel de alta durabilidad, permitiéndote elegir entre 1, 2 o hasta 3 tonos para lucir un acabado impecable, brillante y resistente.",
    "image": "images/1786302587_19.png"
  },
  {
    "id": "srv_1786200257156",
    "name": "PEDICURE ACRIPIE",
    "category": "cat_pedicure_6515",
    "price": 299,
    "duration": 89,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio integral de pedicure combinado con la aplicación o reconstrucción de uñas de pies en acrílico, ideal para unificar la forma, dar fuerza, corregir imperfecciones y lucir un acabado perfecto, resistente y de larga duración.",
    "image": "images/1786303274_20.png"
  },
  {
    "id": "srv_1786200280110",
    "name": "PEDICURE RETOQUE DE ACRIPIE",
    "category": "cat_pedicure_6515",
    "price": 250,
    "duration": 88,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Mantenimiento profesional que reescultura el crecimiento de las uñas de los pies en acrílico, rellena el espacio natural y renueva la forma y el color, devolviéndoles un aspecto impecable, uniforme y resistente.",
    "image": "images/1786303129_21.png"
  },
  {
    "id": "srv_1786200367513",
    "name": "ALACIADOS Y TRATAMIENTOS CAPILARES DEL HOMBRO HACIA ARRIBA",
    "category": "cat_alaciados____tratamientos_capilares_6429",
    "price": 999,
    "duration": 89,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio especializado de alisado o restauración profunda diseñado exclusivamente para melenas cuyo largo máximo de cabello llega hasta la altura de los hombros o por encima de ellos (cabello corto o arriba del hombro). Este proceso ayuda a reducir el frizz, aporta brillo extremo e hidratación intensiva, dejando el cabello suave, manejable y saludable.",
    "image": "images/1786303715_22.png"
  },
  {
    "id": "srv_1786200398169",
    "name": "ALACIADOS Y TRATAMIENTOS CAPILARES DEL HOMBRO HACIA ABAJO DE LA AXILA",
    "category": "cat_alaciados____tratamientos_capilares_6429",
    "price": 1200,
    "duration": 88,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio especializado de alisado o restauración profunda diseñado para melenas cuya longitud de cabello abarca desde debajo de los hombros hasta la altura de la axila (largo mediano). Ayuda a controlar el volumen, eliminar el frizz, aportar brillo intenso e hidratar a profundidad para lograr un cabello suave, sedoso y fácil de peinar.",
    "image": "images/1786304006_23.png"
  },
  {
    "id": "srv_1786200431817",
    "name": "ALACIADOS Y TRATAMIENTOS CAPILARES DE INICIO DE LA AXILA A MEDIA ESPALDA",
    "category": "cat_alaciados____tratamientos_capilares_6429",
    "price": 1500,
    "duration": 60,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio especializado de alisado o restauración profunda diseñado para melenas cuyo largo de cabello comienza desde la altura de la axila y llega hasta la media espalda. Ayuda a controlar el volumen, eliminar el frizz de raíz a puntas, aportar un brillo espectacular e hidratar a profundidad para mantener el cabello suave, sedoso y radiante.",
    "image": "images/1786304440_24.png"
  },
  {
    "id": "srv_1786200567430",
    "name": "ALACIADOS Y TRATAMIENTOS CAPILARES DE MEDIA ESPALDA A INICIO DE LA LUMBAR",
    "category": "cat_alaciados____tratamientos_capilares_6429",
    "price": 1800,
    "duration": 89,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio especializado de alisado o restauración profunda diseñado para melenas de gran longitud, cuyo largo de cabello abarca desde la media espalda hasta el inicio de la zona lumbar. Ayuda a controlar el volumen, eliminar el frizz por completo, aportar brillo espejo e hidratar intensamente cada fibra capilar para mantener un cabello suave, sedoso y con caída impecable.",
    "image": "images/1786305157_26.png"
  },
  {
    "id": "srv_1786200594924",
    "name": "ALACIADOS Y TRATAMIENTOS CAPILARES DE INICIO DE LA LUMBAR A LA CADERA",
    "category": "cat_alaciados____tratamientos_capilares_6429",
    "price": 2500,
    "duration": 99,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio especializado de alisado o restauración profunda diseñado para melenas muy largas, cuyo cabello abarca desde el inicio de la zona lumbar hasta la altura de la cadera. Ayuda a controlar el volumen, eliminar el frizz en toda la extensión, aportar un brillo espejo excepcional e hidratar intensamente cada hebra para lograr una cabellera suave, sedosa y con un movimiento impecable.",
    "image": "images/1786305041_25.png"
  },
  {
    "id": "srv_1786200637668",
    "name": "CORTE DE CABELLO BORDADO",
    "category": "cat_cortes_de_cabello_9460",
    "price": 250,
    "duration": 89,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Técnica especializada de corte que elimina puntas abiertas, dañadas y orzadas a lo largo de toda la melena sin sacrificar ni un solo centímetro de tu largo total, devolviendo la suavidad, el brillo y una apariencia completamente sana y renovada a tu cabello.",
    "image": "images/1786305654_27.png"
  },
  {
    "id": "srv_1786200652386",
    "name": "CORTE DE CABELLO TRADICIONAL",
    "category": "cat_cortes_de_cabello_9460",
    "price": 199,
    "duration": 78,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio clásico de corte de cabello diseñado para dar forma, renovar las puntas, ajustar el estilo y mantener la salud de tu melena, adaptándose perfectamente a la longitud y diseño que prefieras.",
    "image": "images/1786305821_28.png"
  },
  {
    "id": "srv_1786200674537",
    "name": "DESPUNTE DE CABELLO DE HASTA 3CM",
    "category": "cat_cortes_de_cabello_9460",
    "price": 150,
    "duration": 7,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Corte ligero de mantenimiento diseñado para recortar un máximo de 3 centímetros de las puntas, ideal para eliminar el cabello seco o maltratado, refrescar la forma de tu melena y conservar la salud y vitalidad de tu cabello sin modificar su largo principal.",
    "image": "images/1786306347_29.png"
  },
  {
    "id": "srv_1786200971740",
    "name": "MECHAS Y BALAYAGE DEL HOMBRO HACIA ARRIBA",
    "category": "cat_colorimetria_2782",
    "price": 1800,
    "duration": 98,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Técnica de coloración y diseño de luz aplicada en melenas cuyo largo máximo llega hasta la altura de los hombros o por encima de ellos. El proceso se realiza dejando un espacio de crecimiento natural (abajo de la raíz), ideal para lograr un difuminado sutil, un efecto tridimensional luminoso y un mantenimiento más cómodo y natural.",
    "image": "images/1786306585_30.png"
  },
  {
    "id": "srv_1786201020509",
    "name": "MECHAS Y BALAYAGE DEL HOMBRO HACIA ABAJO DE LA AXILA",
    "category": "cat_colorimetria_2782",
    "price": 1099,
    "duration": 58,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Técnica de coloración y diseño de luz adaptada para melenas de largo mediano (desde los hombros hasta la altura de la axila). El trabajo de aclarado se aplica respetando el crecimiento natural (abajo de la raíz), logrando un degradado armónico, un efecto tridimensional radiante y un bajo mantenimiento que realza la textura y el movimiento del cabello.",
    "image": "images/1786306773_31.png"
  },
  {
    "id": "srv_1786201050018",
    "name": "MECHAS Y BALAYAGE DE INICIO DE LA AXILA A MEDIA ESPALDA",
    "category": "cat_colorimetria_2782",
    "price": 2500,
    "duration": 98,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Técnica avanzada de coloración y diseño de luz diseñada para melenas largas (desde la altura de la axila hasta la media espalda). El proceso se aplica dejando un espacio de crecimiento natural (abajo de la raíz), logrando una transición de color suave y sofisticada, un efecto tridimensional luminoso y un mantenimiento práctico que realza la amplitud y el movimiento de tu cabello.",
    "image": "images/1786307262_32.png"
  },
  {
    "id": "srv_1786201085281",
    "name": "MECHAS Y BALAYAGE DE  MEDIA ESPALDA A INICIO DE LA LUMBAR",
    "category": "cat_colorimetria_2782",
    "price": 2900,
    "duration": 97,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Técnica de coloración y diseño de luz premium diseñada para melenas de gran extensión, abarcando desde la media espalda hasta el inicio de la zona lumbar. Aplicamos el color dejando un espacio de crecimiento natural (abajo de la raíz) para lograr un difuminado impecable, un efecto de luz multidimensional y una transición de color sofisticada que realza la elegancia y el movimiento de tu cabello a lo largo de toda su longitud.",
    "image": "images/1786307814_33.png"
  },
  {
    "id": "srv_1786201115814",
    "name": "MECHAS Y BALAYAGE DE NICIO DE LA LUMBAR A LA CADERA",
    "category": "cat_colorimetria_2782",
    "price": 3500,
    "duration": 78,
    "badge": "🔥 Top Trend",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Técnica de coloración y diseño de luz de alta especialidad para melenas extremadamente largas (desde el inicio de la zona lumbar hasta la cadera). Trabajamos el color respetando el crecimiento natural (abajo de la raíz) para conseguir un difuminado artístico impecable y un efecto de luz multidimensional que recorre toda la melena, otorgando un brillo espectacular, profundidad y un movimiento elegante a un cabello de longitud impactante.",
    "image": "images/1786308248_34.png"
  },
  {
    "id": "srv_1786201358313",
    "name": "CORTINA Y CONTORNOS DEL HOMBRO HACIA ARRIBA",
    "category": "cat_cortina_y_contornos_7097",
    "price": 1300,
    "duration": 23,
    "badge": "👑 Tendencia",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio de coloración y diseño enfocado en la zona frontal y superior (contornos y cortina) diseñado para melenas con cabello delgado cuyo largo máximo llega hasta la altura de los hombros o por encima de ellos. Aporta luminosidad, dimensión y un enmarcado perfecto al rostro, cuidando y protegiendo la estructura fina de tu cabello con productos especializados.",
    "image": "images/1786310725_35.png"
  },
  {
    "id": "srv_1786201387259",
    "name": "CORTINA Y CONTORNOS DEL HOMBRO HACIA ABAJO DE LA AXILA",
    "category": "cat_cortina_y_contornos_7097",
    "price": 1500,
    "duration": 65,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio de coloración y diseño enfocado en los contornos del rostro y la sección superior (cortina) para melenas de largo mediano (desde los hombros hasta la altura de la axila) con cabello de hebra delgada. Aporta luminosidad estratégica y dimensión para enmarcar el rostro de forma elegante, utilizando productos especiales que cuidan, protegen y fortalecen la estructura fina de tu cabello durante el proceso.",
    "image": "images/1786311220_36.png"
  },
  {
    "id": "srv_1786201413513",
    "name": "CORTINA Y CONTORNOS DE INICIO DE LA AXILA A MEDIA ESPALDA",
    "category": "cat_cortina_y_contornos_7097",
    "price": 1800,
    "duration": 80,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio de coloración y diseño focalizado (cortina y contornos) especializado para melenas largas, con una longitud que va desde la altura de la axila hasta la media espalda, en cabello de hebra delgada. Aporta luminosidad estratégica y dimensión para enmarcar el rostro y la parte superior, utilizando técnicas y productos cuidadosos que protegen, fortalecen y evitan el maltrato en cabellos finos.",
    "image": "images/1786312397_37.png"
  },
  {
    "id": "srv_1786201438351",
    "name": "CORTINA Y CONTORNOS DE INICIO DE LA LUMBAR A LA CADERA",
    "category": "cat_cortina_y_contornos_7097",
    "price": 1999,
    "duration": 48,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio de coloración y diseño focalizado en los contornos del rostro y la sección superior (cortina) para melenas extremadamente largas, con una longitud que abarca desde el inicio de la zona lumbar hasta la cadera, en cabello de hebra delgada. Aporta luminosidad estratégica y dimensión para realzar el rostro de forma sofisticada, utilizando técnicas de alta precisión y productos protectores avanzados que cuidan, fortalecen y preservan la integridad de las estructuras finas en longitudes extremas.",
    "image": "images/1786312779_38.png"
  },
  {
    "id": "srv_1786201515937",
    "name": "MECHAS DE FRENTE DEL HOMBRO HACIA ARRIBA",
    "category": "cat_mechas_de_frente_6583",
    "price": 500,
    "duration": 89,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio de iluminación frontal diseñado específicamente para melenas cuyo largo máximo llega hasta la altura de los hombros o por encima de ellos. Aporta puntos de luz estratégicos alrededor del rostro para enmarcarlo, realzar tus facciones y darle un brillo fresco y renovado a tu imagen de manera sutil y elegante.",
    "image": "images/1786313230_39.png"
  },
  {
    "id": "srv_1786201539359",
    "name": "MECHAS DE FRENTE DEL HOMBRO HACIA ABAJO DE LA AXILA",
    "category": "cat_mechas_de_frente_6583",
    "price": 700,
    "duration": 89,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio de iluminación frontal diseñado para melenas de largo mediano, con una longitud que va desde los hombros hasta la altura de la axila. Aporta puntos de luz estratégicos alrededor del rostro para enmarcarlo con naturalidad, realzar tus facciones y brindar un brillo fresco, dinámico y elegante a todo el contorno.",
    "image": "images/1786318013_40.png"
  },
  {
    "id": "srv_1786201567547",
    "name": "MECHAS DE FRENTE  INICIO DE LA AXILA A MEDIA ESPALDA",
    "category": "cat_mechas_de_frente_6583",
    "price": 900,
    "duration": 78,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio de iluminación frontal diseñado para melenas largas, con una longitud que va desde la altura de la axila hasta la media espalda. Aporta puntos de luz estratégicos y luminosos alrededor del rostro para enmarcarlo con sofisticación, realzar tus facciones y crear un contraste elegante y natural que armoniza perfectamente con todo el largo de tu cabello.",
    "image": "images/1786318397_41.png"
  },
  {
    "id": "srv_1786201594003",
    "name": "MECHAS DE FRENTE  INICIO DE LA LUMBAR A LA CADERA",
    "category": "cat_mechas_de_frente_6583",
    "price": 1200,
    "duration": 32,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio de iluminación frontal diseñado para melenas extremadamente largas, con una longitud que abarca desde el inicio de la zona lumbar hasta la cadera. Aporta puntos de luz estratégicos y luminosos alrededor del rostro para enmarcarlo con gran sofisticación, realzar tus facciones y crear un contraste elegante que complementa y armoniza perfectamente con la impresionante caída y magnitud de tu cabello.",
    "image": "images/1786318673_42.png"
  },
  {
    "id": "srv_1786209185468",
    "name": "APLICACION DE TINTE",
    "category": "cat_tintes_5015",
    "price": 799,
    "duration": 78,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio de coloración global que consiste en la aplicación uniforme de tinte en todo el cabello para renovar el tono, cubrir canas por completo, intensificar el color actual o lograr un cambio de imagen radiante, utilizando productos profesionales que cuidan, nutren y aportan un brillo excepcional a tu melena.",
    "image": "images/1786319212_43.png"
  },
  {
    "id": "srv_1786209205988",
    "name": "RECUBRIMIENTO DE CANAS",
    "category": "cat_tintes_5015",
    "price": 1200,
    "duration": 87,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Servicio de coloración especializado enfocado en la cobertura total y uniforme de las canas, utilizando fórmulas profesionales de alta pigmentación que garantizan un resultado duradero, de aspecto natural y con un brillo excepcional, cuidando y respetando la salud de tu fibra capilar.",
    "image": "images/1786320888_44.png"
  },
  {
    "id": "srv_1786209256242",
    "name": "RAYITOS CON GORRO CABELLO NO PROCESADO",
    "category": "cat_rayitos_0268",
    "price": 800,
    "duration": 67,
    "badge": "",
    "assignedWorkerIds": [
      "w_1785290718227"
    ],
    "visible": true,
    "desc": "Técnica tradicional de iluminación con gorro diseñada exclusivamente para cabellos vírgenes (no procesados previamente). Permite extraer mechones finos desde la raíz para lograr un contraste clásico, definido y luminoso de aspecto natural, cuidando al máximo la salud y textura original de tu melena al no contar con químicos previos.",
    "image": "images/1786321283_45.png"
  }
];

const defaultCourses = [];

const defaultRequestedGroups = [];

function getTodayString() {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

const defaultCourseReservations = [];

const defaultBenefitsClients = [];

const defaultBookings = [];

const defaultTestimonials = [];

// 2. STATE VARIABLES
let sucursales = defaultSucursales;
let categories = defaultCategories;
let workers = defaultWorkers;
let services = defaultServices;
const defaultAdminUsers = [
  {
    id: 'u_frank_superadmin',
    username: 'Frank',
    passwordHash: '8b9c240954b83fbefb1a7cfdf87ec34ee1c90ff33e70d47d4808c160a28f8045',
    name: 'Frank (Administrador Principal)',
    role: 'superadmin',
    permissions: {
      revenue: true,
      agenda: true,
      categories: true,
      services: true,
      courses: true,
      sucursales: true,
      workers: true,
      requestedGroups: true,
      benefits: true,
      testimonials: true,
      userManagement: true
    }
  }
];

let courses = defaultCourses;
let requestedGroups = defaultRequestedGroups;
let courseReservations = defaultCourseReservations;
let benefitsClients = defaultBenefitsClients;
let bookings = defaultBookings;
let testimonials = defaultTestimonials;
let adminUsers = defaultAdminUsers;
let currentUser = null;

async function hashPassword(password) {
  try {
    const salt = 'TB_SECURE_SALT_2026';
    const encoder = new TextEncoder();
    const data = encoder.encode(salt + password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  } catch (err) {
    return password;
  }
}

let activeCategoryFilter = 'all';
let mapInitialized = false;
let leafletMap = null;
let leafletMarkers = [];
let selectedTimeSlot = null;
let schedulingSolution = null;

let showAllAdminTestimonials = false;
let currentActiveAdminSectionId = null;

let activeRevenueCategoryView = 'salon';
let activeRevenuePeriodFilter = 'all';

// GLOBAL 12-HOUR TIME FORMATTING ENGINE
function timeTo12Hr(time24) {
  if (!time24) return '';
  const parts = time24.split(':');
  let h = parseInt(parts[0], 10);
  const m = parts[1] || '00';
  if (isNaN(h)) return time24;
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  if (h === 0) h = 12;
  return `${h.toString().padStart(2, '0')}:${m} ${ampm}`;
}

// GLOBAL BODY SCROLL LOCK CONTROLLER
function lockBodyScroll() {
  document.body.style.overflow = 'hidden';
}

function unlockBodyScroll() {
  const activeOverlays = document.querySelectorAll('.modal-overlay.active, .admin-fullscreen-modal.active');
  if (activeOverlays.length === 0) {
    document.body.style.overflow = '';
  }
}

// GLOBAL CUSTOM DIALOG ENGINE (MODALES ELEGANTES PARA REEMPLAZAR ALERT, CONFIRM Y PROMPT DE NAVEGADOR)
window.showCustomAlert = function(message, title = 'Atención', iconClass = 'fa-solid fa-circle-exclamation') {
  return new Promise((resolve) => {
    const modal = document.getElementById('customDialogModal');
    const titleEl = document.getElementById('customDialogTitle');
    const msgEl = document.getElementById('customDialogMessage');
    const iconEl = document.getElementById('customDialogIcon');
    const okBtn = document.getElementById('customDialogOkBtn');
    const cancelBtn = document.getElementById('customDialogCancelBtn');

    if (!modal || !msgEl || !okBtn) {
      showToast(message);
      resolve(true);
      return;
    }

    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.innerHTML = message;
    if (iconEl) iconEl.className = iconClass;
    if (cancelBtn) cancelBtn.style.display = 'none';

    okBtn.onclick = function() {
      modal.classList.remove('active');
      unlockBodyScroll();
      resolve(true);
    };

    modal.classList.add('active');
    lockBodyScroll();
  });
};

window.showCustomConfirm = function(message, title = 'Confirmar Acción', iconClass = 'fa-solid fa-circle-question') {
  return new Promise((resolve) => {
    const modal = document.getElementById('customDialogModal');
    const titleEl = document.getElementById('customDialogTitle');
    const msgEl = document.getElementById('customDialogMessage');
    const iconEl = document.getElementById('customDialogIcon');
    const okBtn = document.getElementById('customDialogOkBtn');
    const cancelBtn = document.getElementById('customDialogCancelBtn');

    if (!modal || !msgEl || !okBtn || !cancelBtn) {
      resolve(window.confirm(message));
      return;
    }

    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.innerHTML = message;
    if (iconEl) iconEl.className = iconClass;
    
    cancelBtn.style.display = 'inline-flex';
    cancelBtn.onclick = function() {
      modal.classList.remove('active');
      unlockBodyScroll();
      resolve(false);
    };

    okBtn.onclick = function() {
      modal.classList.remove('active');
      unlockBodyScroll();
      resolve(true);
    };

    modal.classList.add('active');
    lockBodyScroll();
  });
};

window.showCustomPrompt = function(message, title = 'Ingresar Información', defaultValue = '') {
  return new Promise((resolve) => {
    const modal = document.getElementById('customDialogModal');
    const titleEl = document.getElementById('customDialogTitle');
    const msgEl = document.getElementById('customDialogMessage');
    const iconEl = document.getElementById('customDialogIcon');
    const okBtn = document.getElementById('customDialogOkBtn');
    const cancelBtn = document.getElementById('customDialogCancelBtn');

    if (!modal || !msgEl || !okBtn || !cancelBtn) {
      resolve(window.prompt(message, defaultValue));
      return;
    }

    if (titleEl) titleEl.textContent = title;
    if (iconEl) iconEl.className = 'fa-solid fa-user-plus';

    msgEl.innerHTML = `
      <p style="margin-bottom: 0.8rem;">${message}</p>
      <input type="text" class="form-control" id="customPromptInput" value="${defaultValue}" placeholder="Escribe aquí..." style="font-size: 1rem; padding: 0.6rem;">
    `;

    const input = document.getElementById('customPromptInput');
    if (input) {
      setTimeout(() => input.focus(), 100);
    }

    cancelBtn.style.display = 'inline-flex';
    cancelBtn.onclick = function() {
      modal.classList.remove('active');
      unlockBodyScroll();
      resolve(null);
    };

    okBtn.onclick = function() {
      const val = document.getElementById('customPromptInput') ? document.getElementById('customPromptInput').value.trim() : '';
      modal.classList.remove('active');
      unlockBodyScroll();
      resolve(val || null);
    };

    modal.classList.add('active');
    lockBodyScroll();
  });
};

// VIP LEVEL & BENEFIT NORMALIZER ENGINE (PROGRESION EXACTA: 0 Nuevo, 1 Inicial, 2-3 Bronze, 4 Silver, 5 Gold, 6+ Elite)
function calculateVIPLevel(benefitsArray) {
  if (!Array.isArray(benefitsArray)) return '🆕 Cliente Nuevo';
  const count = benefitsArray.length;
  if (count >= 6) return '👑 Cliente Elite';
  if (count === 5) return '🥇 Cliente VIP Gold';
  if (count === 4) return '🥈 Cliente VIP Silver';
  if (count >= 2 && count <= 3) return '🥉 Cliente VIP Bronze';
  if (count === 1) return '🌱 Cliente Inicial';
  return '🆕 Cliente Nuevo';
}

function normalizeBenefits(benefitsArray) {
  if (!Array.isArray(benefitsArray)) return [];
  return benefitsArray.map(b => {
    if (typeof b === 'string') {
      return { text: b, redeemed: false, redeemedDate: null };
    }
    return b;
  });
}

// CENTRAL FILE DATABASE FETCH & SYNC LOGIC
async function syncFromCentralDatabase() {
  let db = null;
  
  // 1. Try server API (/api/data)
  try {
    const response = await fetch('/api/data');
    if (response.ok) {
      db = await response.json();
    }
  } catch (err) {
    console.warn('Server API /api/data not reachable.', err);
  }

  // 2. Fallback to direct static fetch of database.json (for GitHub Pages / Vercel / static hosting)
  if (!db) {
    try {
      const staticResp = await fetch('database.json');
      if (staticResp.ok) {
        db = await staticResp.json();
        console.log('Successfully loaded database.json from static file.');
      }
    } catch (err2) {
      console.warn('Could not fetch static database.json:', err2);
    }
  }

  // 3. Fallback to localStorage cache if network fails completely
  if (!db) {
    try {
      const cached = localStorage.getItem('ejemplo_central_cache');
      if (cached) {
        db = JSON.parse(cached);
      }
    } catch (e) {}
  }

  if (db) {
    if (Array.isArray(db.sucursales) && db.sucursales.length > 0) sucursales = db.sucursales;
    if (Array.isArray(db.categories) && db.categories.length > 0) categories = db.categories;
    if (Array.isArray(db.workers) && db.workers.length > 0) workers = db.workers;
    if (Array.isArray(db.services) && db.services.length > 0) services = db.services;
    if (Array.isArray(db.courses) && db.courses.length > 0) courses = db.courses;
    if (Array.isArray(db.requestedGroups) && db.requestedGroups.length > 0) requestedGroups = db.requestedGroups;
    if (Array.isArray(db.courseReservations)) courseReservations = db.courseReservations;
    if (Array.isArray(db.benefitsClients) && db.benefitsClients.length > 0) {
      benefitsClients = db.benefitsClients.map(c => ({
        ...c,
        benefits: normalizeBenefits(c.benefits),
        level: calculateVIPLevel(normalizeBenefits(c.benefits))
      }));
    }
    if (Array.isArray(db.bookings)) bookings = db.bookings;
    if (Array.isArray(db.testimonials) && db.testimonials.length > 0) testimonials = db.testimonials;
    if (Array.isArray(db.adminUsers) && db.adminUsers.length > 0) {
      adminUsers = db.adminUsers;
    }
  }

  // Guarantee Superadmin Frank always exists with correct privileges
  let frankUser = adminUsers.find(u => u.username.toLowerCase() === 'frank');
  const frankHash = await hashPassword('0401Frank');
  if (!frankUser) {
    frankUser = {
      id: 'u_frank_superadmin',
      username: 'Frank',
      passwordHash: frankHash,
      name: 'Frank (Administrador Principal)',
      role: 'superadmin',
      permissions: {
        revenue: true, agenda: true, categories: true, services: true, courses: true, sucursales: true, workers: true, requestedGroups: true, benefits: true, testimonials: true, userManagement: true
      }
    };
    adminUsers.unshift(frankUser);
  } else {
    frankUser.role = 'superadmin';
    frankUser.passwordHash = frankHash;
    frankUser.permissions = {
      revenue: true, agenda: true, categories: true, services: true, courses: true, sucursales: true, workers: true, requestedGroups: true, benefits: true, testimonials: true, userManagement: true
    };
  }
}

async function saveState() {
  const payload = { sucursales, categories, workers, services, courses, requestedGroups, courseReservations, benefitsClients, bookings, testimonials, adminUsers };
  try {
    localStorage.setItem('ejemplo_central_cache', JSON.stringify(payload));
  } catch (e) {}

  try {
    await fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.error('Failed to sync to database.json server:', err);
  }
}

// 6-DIGIT UNIQUE NON-REPEATING CUSTOMER NUMBER GENERATOR
function generateUniqueCustomerNumber() {
  let num;
  let exists = true;
  while (exists) {
    num = Math.floor(100000 + Math.random() * 900000).toString();
    exists = benefitsClients.some(c => c.clientNumber === num);
  }
  return num;
}

// VALIDATION ENGINE FOR CUSTOMER NUMBER IN BOOKING MODAL
window.validateBookingClientNumber = function(val) {
  const input = document.getElementById('bookingClientNumber');
  const feedback = document.getElementById('bookingClientFeedback');
  const code = (val || '').trim();

  if (!code) {
    if (feedback) {
      feedback.textContent = 'Ingresa tu código de 6 dígitos para aplicar tus beneficios VIP en esta cita.';
      feedback.style.color = 'var(--text-muted)';
    }
    return true;
  }

  const client = benefitsClients.find(c => c.clientNumber === code);

  if (!client) {
    showToast('⚠️ El número de cliente ingresado no existe en nuestro programa de beneficios.');
    if (input) input.value = '';
    if (feedback) {
      feedback.textContent = '❌ Número de cliente no encontrado.';
      feedback.style.color = '#e74c3c';
    }
    return false;
  } else {
    const levelStr = calculateVIPLevel(client.benefits);
    showToast(`🎁 ¡Cliente VIP "${client.name}" (${levelStr}) detectado! Tus beneficios se aplicarán en tu cita.`);
    if (feedback) {
      feedback.textContent = `🟢 ¡Cliente ${client.name} (${levelStr})! Beneficios detectados.`;
      feedback.style.color = '#2ecc71';
    }
    return true;
  }
};

// PUBLIC CLIENT BENEFITS PROGRAM HANDLERS
window.openClientBenefitsModal = function() {
  const modal = document.getElementById('clientBenefitsModal');
  const resultContainer = document.getElementById('benefitsResultContainer');
  const input = document.getElementById('lookupClientNumber');

  if (input) input.value = '';
  if (resultContainer) {
    resultContainer.style.display = 'none';
    resultContainer.innerHTML = '';
  }

  if (modal) {
    modal.classList.add('active');
    lockBodyScroll();
  }
};

window.closeClientBenefitsModal = function() {
  const modal = document.getElementById('clientBenefitsModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

window.searchClientBenefits = function() {
  const input = document.getElementById('lookupClientNumber');
  const resultContainer = document.getElementById('benefitsResultContainer');

  if (!input || !resultContainer) return;

  const code = input.value.trim();

  if (!code || code.length !== 6 || isNaN(code)) {
    showCustomAlert('Por favor ingresa un número de cliente válido de 6 dígitos.', 'Número Inválido', 'fa-solid fa-id-card');
    return;
  }

  const client = benefitsClients.find(c => c.clientNumber === code);

  resultContainer.style.display = 'block';

  if (!client) {
    resultContainer.innerHTML = `
      <div style="background: rgba(231, 76, 60, 0.1); border: 1px solid #e74c3c; border-radius: 14px; padding: 1.5rem; text-align: center;">
        <i class="fa-solid fa-circle-xmark" style="font-size: 2rem; color: #e74c3c; margin-bottom: 0.6rem;"></i>
        <h4 style="color: #FFF; margin-bottom: 0.3rem;">Número de Cliente No Encontrado</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary);">
          El número <strong>${code}</strong> no se encuentra registrado en nuestro sistema. Consulta en el salón o contáctanos por WhatsApp para solicitar tu registro.
        </p>
      </div>
    `;
    return;
  }

  const normBenefits = normalizeBenefits(client.benefits);
  const calculatedLevel = calculateVIPLevel(normBenefits);

  const activeBenefits = normBenefits.filter(b => !b.redeemed);
  const redeemedBenefits = normBenefits.filter(b => b.redeemed);

  const activeHtml = activeBenefits.map(b => `
    <li style="margin-bottom: 0.6rem; display: flex; align-items: flex-start; gap: 0.6rem; background: var(--bg-card); padding: 0.6rem 0.8rem; border-radius: 10px; border: 1px solid var(--border-light);">
      <i class="fa-solid fa-gift" style="color: var(--accent-gold); font-size: 1.1rem; margin-top: 0.1rem;"></i>
      <span style="color: var(--text-primary); font-size: 0.92rem; font-weight: 500;">${b.text}</span>
    </li>
  `).join('');

  const redeemedHtml = redeemedBenefits.map(b => `
    <li style="margin-bottom: 0.4rem; display: flex; align-items: flex-start; gap: 0.6rem; opacity: 0.7; background: rgba(255,255,255,0.03); padding: 0.5rem 0.8rem; border-radius: 8px;">
      <i class="fa-solid fa-circle-check" style="color: #e74c3c; font-size: 1rem; margin-top: 0.1rem;"></i>
      <span style="color: var(--text-muted); font-size: 0.88rem; text-decoration: line-through;">${b.text} (Canjeado el ${b.redeemedDate || 'recientemente'})</span>
    </li>
  `).join('');

  resultContainer.innerHTML = `
    <div style="background: var(--bg-elevated); border: 2px solid var(--accent-gold); border-radius: 16px; padding: 1.6rem; box-shadow: var(--shadow-glow);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.8rem; border-bottom: 1px solid var(--border-light); padding-bottom: 1rem; margin-bottom: 1.2rem;">
        <div>
          <span style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 1px; color: var(--accent-gold); font-weight: 700;">
            <i class="fa-solid fa-crown"></i> ${calculatedLevel}
          </span>
          <h3 style="color: #FFF; font-size: 1.3rem; margin-top: 0.2rem;">${client.name}</h3>
          <small style="color: var(--text-muted);"><i class="fa-solid fa-location-dot"></i> ${client.city} | <i class="fa-brands fa-whatsapp"></i> ${client.phone}</small>
        </div>
        <div style="background: var(--bg-card); padding: 0.6rem 1rem; border-radius: 10px; border: 1px solid var(--border-light); text-align: center;">
          <small style="color: var(--text-muted); font-size: 0.72rem; text-transform: uppercase; display: block;">N° Cliente</small>
          <strong style="font-size: 1.2rem; color: var(--accent-gold); letter-spacing: 2px;">${client.clientNumber}</strong>
        </div>
      </div>

      <h4 style="color: var(--accent-gold); font-size: 1.05rem; margin-bottom: 0.8rem;">
        <i class="fa-solid fa-circle-check"></i> Tus Beneficios Vigentes (${activeBenefits.length}):
      </h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 1.5rem;">
        ${activeBenefits.length > 0 ? activeHtml : '<p style="color: var(--text-muted); font-size: 0.85rem;">No tienes beneficios vigentes pendientes.</p>'}
      </ul>

      ${redeemedBenefits.length > 0 ? `
        <h4 style="color: #e74c3c; font-size: 0.95rem; margin-bottom: 0.6rem;">
          <i class="fa-solid fa-history"></i> Beneficios Ya Canjeados (${redeemedBenefits.length}):
        </h4>
        <ul style="list-style: none; padding: 0; margin-bottom: 1.5rem;">
          ${redeemedHtml}
        </ul>
      ` : ''}

      <div style="text-align: center; border-top: 1px solid var(--border-light); padding-top: 1rem;">
        <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 0.8rem;">
          Menciona tu número de cliente <strong>${client.clientNumber}</strong> al agendar en salón o apartar tu curso presencial.
        </p>
        <button type="button" class="btn btn-gold" onclick="closeClientBenefitsModal(); openBookModal();" style="width: 100%; justify-content: center;">
          <i class="fa-solid fa-calendar-check"></i> Usar Mis Beneficios para Agendar
        </button>
      </div>
    </div>
  `;
};

// ADMIN BENEFIT CLIENT CREATION (NO BENEFITS FIELD ASKED) & INLINE BENEFIT EDITING SYSTEM
let isSavingBenefitClient = false;
window.handleNewBenefitClientSubmit = async function(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  if (isSavingBenefitClient) return false;
  isSavingBenefitClient = true;

  try {
    const nameInput = document.getElementById('newBC_Name');
    const phoneInput = document.getElementById('newBC_Phone');
    const cityInput = document.getElementById('newBC_City');

    if (!nameInput || !phoneInput || !cityInput) return false;

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const city = cityInput.value.trim();

    if (!name || !phone || !city) {
      showCustomAlert('Por favor completa el nombre, WhatsApp y ciudad del cliente.', 'Campos Requeridos', 'fa-solid fa-circle-exclamation');
      return false;
    }

    // Check duplicate client name or phone in benefitsClients to prevent double entry
    const existing = benefitsClients.find(c => c.name.toLowerCase() === name.toLowerCase() && c.phone === phone);
    if (existing) {
      showToast(`⚠️ El cliente "${name}" con WhatsApp ${phone} ya está registrado con el N° ${existing.clientNumber}.`);
      return false;
    }

    const clientNumber = generateUniqueCustomerNumber();
    const benefitsArray = []; // Starts with 0 benefits
    const autoLevel = calculateVIPLevel(benefitsArray); // "🆕 Cliente Nuevo"

    const newClient = {
      id: 'bc_' + Date.now(),
      clientNumber: clientNumber,
      name: name,
      phone: phone,
      city: city,
      level: autoLevel,
      benefits: benefitsArray
    };

    benefitsClients.push(newClient);
    await saveState();

    const form = document.getElementById('newBenefitClientForm');
    if (form) form.reset();

    renderAdminPanel();

    // Populate and open Loyalty Card Modal
    const cardNum = document.getElementById('cardClientNumber');
    const cardName = document.getElementById('cardClientName');
    const cardPhone = document.getElementById('cardClientPhone');
    const cardCity = document.getElementById('cardClientCity');
    const cardLevel = document.getElementById('cardClientLevel');
    const waBtn = document.getElementById('sendCardWaBtn');

    if (cardNum) cardNum.textContent = clientNumber;
    if (cardName) cardName.textContent = name;
    if (cardPhone) cardPhone.innerHTML = `<i class="fa-brands fa-whatsapp"></i> ${phone}`;
    if (cardCity) cardCity.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${city}`;
    if (cardLevel) cardLevel.textContent = autoLevel;

    if (waBtn) {
      waBtn.onclick = function() {
        const text = `¡Hola ${name}! 👑 Te hemos registrado exitosamente en el Programa de Beneficios VIP de Total Beauty.\n\n` +
          `💳 Tu N° de Cliente de 6 dígitos es: *${clientNumber}*\n` +
          `📍 Ciudad: ${city}\n` +
          `🌟 Estatus: ${autoLevel}\n\n` +
          `Ingresa tu N° *${clientNumber}* en nuestro sitio web al agendar tu cita o consultar tus beneficios VIP. ¡Te esperamos!`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
      };
    }

    const cardModal = document.getElementById('newClientCardModal');
    if (cardModal) {
      cardModal.classList.add('active');
      lockBodyScroll();
    }

    showToast(`💳 ¡Tarjeta de Lealtad N° ${clientNumber} generada para ${name}!`);
  } catch (err) {
    console.error('Error in handleNewBenefitClientSubmit:', err);
  }
  return false;
};

window.closeNewClientCardModal = function() {
  const modal = document.getElementById('newClientCardModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

// INLINE BENEFIT CREATION, EDITING AND DELETION FUNCTIONS
window.addSingleBenefitToClient = async function(clientIdx) {
  const client = benefitsClients[clientIdx];
  if (!client) return;

  const input = document.getElementById(`addBenefitInput_${clientIdx}`);
  if (!input) return;

  const text = input.value.trim();
  if (!text) {
    showCustomAlert('Escribe la descripción del beneficio para guardarlo.', 'Beneficio Vacío', 'fa-solid fa-gift');
    return;
  }

  client.benefits = normalizeBenefits(client.benefits);
  client.benefits.push({
    text: text,
    redeemed: false,
    redeemedDate: null
  });

  client.level = calculateVIPLevel(client.benefits);
  await saveState();
  renderAdminPanel();
  showToast(`🎁 Nuevo beneficio "${text}" guardado para ${client.name} (${client.level}).`);
};

window.updateBenefitText = async function(clientIdx, benefitIdx, inputEl) {
  const client = benefitsClients[clientIdx];
  if (!client) return;

  client.benefits = normalizeBenefits(client.benefits);
  const item = client.benefits[benefitIdx];
  if (!item) return;

  const rawVal = typeof inputEl === 'object' && inputEl.value !== undefined ? inputEl.value : inputEl;
  const oldVal = (typeof inputEl === 'object' && inputEl.dataset && inputEl.dataset.oldVal !== undefined ? inputEl.dataset.oldVal : item.text).trim();
  const newVal = (rawVal || '').trim();

  // Si no cambio nada, no hacer nada ni mostrar notificaciones
  if (oldVal === newVal) return;

  if (!newVal) {
    client.benefits.splice(benefitIdx, 1);
    showToast(`🗑️ Beneficio de ${client.name} eliminado.`);
  } else {
    item.text = newVal;
    showToast(`✏️ Beneficio de ${client.name} modificado a: "${newVal}".`);
  }

  client.level = calculateVIPLevel(client.benefits);
  if (typeof inputEl === 'object' && inputEl.dataset) inputEl.dataset.oldVal = newVal;
  await saveState();
  renderAdminPanel();
};

window.removeBenefitFromClient = async function(clientIdx, benefitIdx) {
  const client = benefitsClients[clientIdx];
  if (!client) return;

  client.benefits = normalizeBenefits(client.benefits);
  const removedText = client.benefits[benefitIdx] ? client.benefits[benefitIdx].text : '';

  client.benefits.splice(benefitIdx, 1);
  client.level = calculateVIPLevel(client.benefits);
  await saveState();
  renderAdminPanel();
  showToast(`🗑️ Beneficio "${removedText}" eliminado de ${client.name}.`);
};

window.openEditBenefitClientModal = function(index) {
  const client = benefitsClients[index];
  if (!client) return;

  client.benefits = normalizeBenefits(client.benefits);

  document.getElementById('editBC_Index').value = index;
  document.getElementById('editBC_ClientNumber').value = client.clientNumber;
  document.getElementById('editBC_Name').value = client.name;
  document.getElementById('editBC_Phone').value = client.phone;
  document.getElementById('editBC_City').value = client.city;

  const benefitsText = client.benefits.map(b => b.text).join('\n');
  const textarea = document.getElementById('editBC_Benefits');
  const badge = document.getElementById('editBC_AutoLevelBadge');

  if (textarea) {
    textarea.value = benefitsText;
    textarea.oninput = function() {
      const currentLines = textarea.value.split(/\n/).map(l => l.trim()).filter(l => l.length > 0);
      const liveLevel = calculateVIPLevel(currentLines);
      if (badge) badge.textContent = liveLevel;
    };
  }

  const autoLevel = calculateVIPLevel(client.benefits);
  if (badge) badge.textContent = autoLevel;

  const modal = document.getElementById('editBenefitClientModal');
  if (modal) {
    modal.classList.add('active');
    lockBodyScroll();
  }
};

window.closeEditBenefitClientModal = function() {
  const modal = document.getElementById('editBenefitClientModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

window.saveEditedBenefitClient = async function() {
  const idx = parseInt(document.getElementById('editBC_Index').value);
  if (isNaN(idx) || !benefitsClients[idx]) return;

  const name = document.getElementById('editBC_Name').value.trim();
  const phone = document.getElementById('editBC_Phone').value.trim();
  const city = document.getElementById('editBC_City').value.trim();
  const benefitsRaw = document.getElementById('editBC_Benefits').value.trim();

  if (!name || !phone || !city) {
    showCustomAlert('Por favor completa el nombre, WhatsApp y ciudad del cliente VIP.', 'Campos Requeridos', 'fa-solid fa-user-pen');
    return;
  }

  const existingBenefits = normalizeBenefits(benefitsClients[idx].benefits);
  const lines = benefitsRaw ? benefitsRaw.split(/\n/).map(l => l.trim()).filter(l => l.length > 0) : [];

  const updatedBenefits = lines.map(lineText => {
    const match = existingBenefits.find(eb => eb.text.toLowerCase() === lineText.toLowerCase());
    if (match) {
      return { text: lineText, redeemed: match.redeemed, redeemedDate: match.redeemedDate };
    }
    return { text: lineText, redeemed: false, redeemedDate: null };
  });

  const autoLevel = calculateVIPLevel(updatedBenefits);

  benefitsClients[idx].name = name;
  benefitsClients[idx].phone = phone;
  benefitsClients[idx].city = city;
  benefitsClients[idx].benefits = updatedBenefits;
  benefitsClients[idx].level = autoLevel;

  await saveState();
  closeEditBenefitClientModal();
  renderAdminPanel();
  showToast(`✨ Datos del Cliente VIP "${name}" (${autoLevel}) actualizados.`);
};

window.toggleRedeemBenefit = async function(clientIdx, benefitIdx) {
  const client = benefitsClients[clientIdx];
  if (!client) return;

  client.benefits = normalizeBenefits(client.benefits);
  const item = client.benefits[benefitIdx];
  if (!item) return;

  item.redeemed = !item.redeemed;
  if (item.redeemed) {
    item.redeemedDate = formatDateDDMM(getTodayString());
    showToast(`🎁 Beneficio "${item.text}" marcado como CANJEADO para ${client.name}.`);
  } else {
    item.redeemedDate = null;
    showToast(`↩ Beneficio "${item.text}" REACTIVADO para ${client.name}.`);
  }

  client.level = calculateVIPLevel(client.benefits);
  await saveState();
  renderAdminPanel();
};

window.deleteBenefitClient = async function(index) {
  const client = benefitsClients[index];
  if (!client) return;

  const confirmed = await showCustomConfirm(`¿Deseas eliminar al cliente <strong>"${client.name}"</strong> (N° ${client.clientNumber}) del Programa de Beneficios?`, 'Eliminar Cliente VIP', 'fa-solid fa-user-minus');
  if (confirmed) {
    benefitsClients.splice(index, 1);
    await saveState();
    renderAdminPanel();
    showToast('Cliente retirado del Programa de Beneficios.');
  }
};

// AUTHENTICATION & RBAC PERMISSION CONTROLLERS
async function checkActiveSession() {
  if (currentUser) return true;
  try {
    const savedSession = sessionStorage.getItem('tb_admin_session');
    if (savedSession) {
      const parsed = JSON.parse(savedSession);
      const matched = adminUsers.find(u => u.username.toLowerCase() === parsed.username.toLowerCase());
      if (matched) {
        currentUser = matched;
        return true;
      }
    }
  } catch (e) {}
  return false;
}

window.openAdminLoginModal = function() {
  const modal = document.getElementById('adminLoginModal');
  if (modal) {
    const errEl = document.getElementById('loginErrorMsg');
    if (errEl) errEl.style.display = 'none';
    modal.classList.add('active');
    lockBodyScroll();
  }
};

window.closeAdminLoginModal = function() {
  const modal = document.getElementById('adminLoginModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

window.processAdminLogin = async function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const usernameInput = document.getElementById('loginUsername');
  const passwordInput = document.getElementById('loginPassword');
  const errEl = document.getElementById('loginErrorMsg');

  if (!usernameInput || !passwordInput) return false;

  const uName = usernameInput.value.trim();
  const uPass = passwordInput.value.trim();

  if (!uName || !uPass) {
    if (errEl) {
      errEl.textContent = 'Por favor ingresa usuario y contraseña.';
      errEl.style.display = 'block';
    }
    return false;
  }

  const inputHash = await hashPassword(uPass);
  const frankHash = await hashPassword('0401Frank');

  let matchedUser = adminUsers.find(u => u.username.toLowerCase() === uName.toLowerCase());

  // Special authentication check for Super Admin Frank (Username: Frank, Password: 0401Frank)
  if (uName.toLowerCase() === 'frank' && (uPass === '0401Frank' || inputHash === frankHash)) {
    if (!matchedUser) {
      matchedUser = {
        id: 'u_frank_superadmin',
        username: 'Frank',
        passwordHash: frankHash,
        name: 'Frank (Administrador Principal)',
        role: 'superadmin',
        permissions: {
          revenue: true, agenda: true, categories: true, services: true, courses: true, sucursales: true, workers: true, requestedGroups: true, benefits: true, testimonials: true, userManagement: true
        }
      };
      adminUsers.unshift(matchedUser);
      saveState();
    } else {
      matchedUser.role = 'superadmin';
      matchedUser.passwordHash = frankHash;
    }
  }

  if (matchedUser) {
    const passOk = (matchedUser.passwordHash === inputHash) || (uName.toLowerCase() === 'frank' && uPass === '0401Frank');
    if (passOk) {
      currentUser = matchedUser;
      sessionStorage.setItem('tb_admin_session', JSON.stringify({ username: matchedUser.username, loginTime: Date.now() }));
      closeAdminLoginModal();
      
      const adminPanel = document.getElementById('panelAdmin');
      const clientSections = document.querySelectorAll('section:not(#panelAdmin), footer');
      clientSections.forEach(s => s.style.display = 'none');
      if (adminPanel) {
        adminPanel.classList.add('active');
        adminPanel.style.display = 'block';
      }
      document.body.classList.add('admin-mode');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      renderAdminPanel();
      showToast(`🔓 ¡Bienvenido al Panel Admin, ${matchedUser.name}!`);
      return false;
    }
  }

  if (errEl) {
    errEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Usuario o contraseña incorrectos.';
    errEl.style.display = 'block';
  }
  return false;
};

window.logoutAdmin = function() {
  currentUser = null;
  sessionStorage.removeItem('tb_admin_session');
  location.href= "index.html";
  showToast('🔒 Sesión cerrada de forma segura.');
  setTimeout(() => {
    openAdminLoginModal();
  }, 300);
};
window.logintAdmin = function() {
  currentUser = null;
    openAdminLoginModal();
};
window.togglePasswordVisibility = function(inputId, btnEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (btnEl) btnEl.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  } else {
    input.type = 'password';
    if (btnEl) btnEl.innerHTML = '<i class="fa-solid fa-eye"></i>';
  }
};

// FULLSCREEN 100% ADMIN MODULE CONTROLLER WITH PERMISSION CHECK
window.openAdminSection = function(sectionId) {
  const permMap = {
    'adminAgendaSection': 'agenda',
    'adminRevenueSection': 'revenue',
    'adminBenefitsSection': 'benefits',
    'adminSucursalesSection': 'sucursales',
    'adminWorkersSection': 'workers',
    'adminCategoriesSection': 'categories',
    'adminServicesSection': 'services',
    'adminCoursesSection': 'courses',
    'adminRequestedGroupsSection': 'requestedGroups',
    'adminTestimoniosSection': 'testimonials',
    'adminUserManagementSection': 'userManagement'
  };

  const reqPerm = permMap[sectionId];
  const isSuper = currentUser && (currentUser.role === 'superadmin' || currentUser.username.toLowerCase() === 'frank');
  const hasPerm = isSuper || (currentUser && currentUser.permissions && currentUser.permissions[reqPerm] !== false);

  if (!hasPerm) {
    showCustomAlert('No tienes permisos asignados para acceder a este módulo. Contacta al Administrador Principal.', 'Acceso Denegado', 'fa-solid fa-lock');
    return;
  }

  const modal = document.getElementById('adminFullscreenModal');
  const container = document.getElementById('adminFullscreenContainer');
  const targetSec = document.getElementById(sectionId);

  if (!modal || !container || !targetSec) return;

  if (currentActiveAdminSectionId && currentActiveAdminSectionId !== sectionId) {
    const prevSec = document.getElementById(currentActiveAdminSectionId);
    const layout = document.querySelector('.admin-grid-layout');
    if (prevSec && layout && prevSec.parentElement === container) {
      prevSec.style.display = 'none';
      layout.appendChild(prevSec);
    }
  }

  currentActiveAdminSectionId = sectionId;
  container.appendChild(targetSec);
  targetSec.style.display = 'block';

  if (sectionId === 'adminRevenueSection') {
    renderRevenueSection();
  }

  modal.classList.add('active');
  lockBodyScroll();
  modal.scrollTop = 0;
};

window.closeAdminSection = function() {
  const modal = document.getElementById('adminFullscreenModal');
  if (modal) modal.classList.remove('active');

  if (currentActiveAdminSectionId) {
    const activeSec = document.getElementById(currentActiveAdminSectionId);
    const layout = document.querySelector('.admin-grid-layout');
    const container = document.getElementById('adminFullscreenContainer');
    if (activeSec && layout && container && activeSec.parentElement === container) {
      activeSec.style.display = 'none';
      layout.appendChild(activeSec);
    }
    currentActiveAdminSectionId = null;
  }
  unlockBodyScroll();
};

// USER MANAGEMENT HANDLERS (EXCLUSIVOS PARA FRANK SUPERADMIN)
window.handleNewAdminUserSubmit = async function(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  try {
    const usernameInput = document.getElementById('newUserUsername');
    const passwordInput = document.getElementById('newUserPassword');
    const nameInput = document.getElementById('newUserName');
    const roleSelect = document.getElementById('newUserRole');

    if (!usernameInput || !passwordInput || !nameInput) return false;

    const username = usernameInput.value.trim().replace(/\s+/g, '');
    const password = passwordInput.value.trim();
    const name = nameInput.value.trim();
    const role = roleSelect ? roleSelect.value : 'worker';

    if (!username || !password || !name) {
      showCustomAlert('Por favor completa el usuario, contraseña y nombre completo.', 'Campos Requeridos', 'fa-solid fa-user-shield');
      return false;
    }

    const exists = adminUsers.some(u => u.username.toLowerCase() === username.toLowerCase());
    if (exists) {
      showCustomAlert(`El nombre de usuario "${username}" ya está registrado. Elige otro nombre de usuario.`, 'Usuario Duplicado', 'fa-solid fa-user-xmark');
      return false;
    }

    const passwordHash = await hashPassword(password);
    const permissions = {
      revenue: document.getElementById('perm_revenue').checked,
      agenda: document.getElementById('perm_agenda').checked,
      categories: document.getElementById('perm_categories').checked,
      services: document.getElementById('perm_services').checked,
      courses: document.getElementById('perm_courses').checked,
      sucursales: document.getElementById('perm_sucursales').checked,
      workers: document.getElementById('perm_workers').checked,
      requestedGroups: document.getElementById('perm_requestedGroups').checked,
      benefits: document.getElementById('perm_benefits').checked,
      testimonials: document.getElementById('perm_testimonials').checked
    };

    const newUser = {
      id: 'u_' + Date.now(),
      username: username,
      passwordHash: passwordHash,
      name: name,
      role: role,
      permissions: permissions
    };

    adminUsers.push(newUser);
    await saveState();
    renderAdminPanel();

    const form = document.getElementById('newUserForm');
    if (form) form.reset();

    showToast(`👤 Usuario "${username}" (${name}) creado exitosamente con permisos asignados.`);
  } catch (err) {
    console.error('Error in handleNewAdminUserSubmit:', err);
  }
  return false;
};

window.openEditUserPermissionsModal = function(index) {
  const u = adminUsers[index];
  if (!u) return;

  document.getElementById('editUserIndex').value = index;
  document.getElementById('editUserTitleName').textContent = `${u.name} (@${u.username})`;
  document.getElementById('editUserUsername').value = u.username;
  document.getElementById('editUserName').value = u.name;
  document.getElementById('editUserPassword').value = '';
  document.getElementById('editUserRole').value = u.role || 'worker';

  const p = u.permissions || {};
  document.getElementById('editPerm_revenue').checked = p.revenue !== false;
  document.getElementById('editPerm_agenda').checked = p.agenda !== false;
  document.getElementById('editPerm_categories').checked = p.categories !== false;
  document.getElementById('editPerm_services').checked = p.services !== false;
  document.getElementById('editPerm_courses').checked = p.courses !== false;
  document.getElementById('editPerm_sucursales').checked = p.sucursales !== false;
  document.getElementById('editPerm_workers').checked = p.workers !== false;
  document.getElementById('editPerm_requestedGroups').checked = p.requestedGroups !== false;
  document.getElementById('editPerm_benefits').checked = p.benefits !== false;
  document.getElementById('editPerm_testimonials').checked = p.testimonials !== false;

  const modal = document.getElementById('editUserPermissionsModal');
  if (modal) {
    modal.classList.add('active');
    lockBodyScroll();
  }
};

window.closeEditUserPermissionsModal = function() {
  const modal = document.getElementById('editUserPermissionsModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

window.saveEditedUserPermissions = async function() {
  const idx = parseInt(document.getElementById('editUserIndex').value);
  if (isNaN(idx) || !adminUsers[idx]) return;

  const u = adminUsers[idx];
  const name = document.getElementById('editUserName').value.trim();
  const password = document.getElementById('editUserPassword').value.trim();
  const role = document.getElementById('editUserRole').value;

  if (!name) {
    showCustomAlert('El nombre completo no puede estar vacío.', 'Campo Requerido', 'fa-solid fa-user-pen');
    return;
  }

  u.name = name;
  u.role = role;

  if (password) {
    u.passwordHash = await hashPassword(password);
  }

  if (u.role !== 'superadmin' && u.username.toLowerCase() !== 'frank') {
    u.permissions = {
      revenue: document.getElementById('editPerm_revenue').checked,
      agenda: document.getElementById('editPerm_agenda').checked,
      categories: document.getElementById('editPerm_categories').checked,
      services: document.getElementById('editPerm_services').checked,
      courses: document.getElementById('editPerm_courses').checked,
      sucursales: document.getElementById('editPerm_sucursales').checked,
      workers: document.getElementById('editPerm_workers').checked,
      requestedGroups: document.getElementById('editPerm_requestedGroups').checked,
      benefits: document.getElementById('editPerm_benefits').checked,
      testimonials: document.getElementById('editPerm_testimonials').checked
    };
  }

  await saveState();
  closeEditUserPermissionsModal();
  renderAdminPanel();
  showToast(`✨ Permisos de "${u.username}" actualizados.`);
};

window.deleteAdminUser = async function(index) {
  const u = adminUsers[index];
  if (!u) return;

  if (u.role === 'superadmin' || u.username.toLowerCase() === 'frank') {
    await showCustomAlert('El usuario Administrador Principal  no puede ser eliminado.', 'Acción No Permitida', 'fa-solid fa-shield-cat');
    return;
  }

  const confirmed = await showCustomConfirm(`¿Deseas revocar el acceso y eliminar al usuario <strong>"${u.username}"</strong> (${u.name})?`, 'Eliminar Acceso de Usuario', 'fa-solid fa-user-minus');
  if (confirmed) {
    adminUsers.splice(index, 1);
    await saveState();
    renderAdminPanel();
    showToast(`🗑️ Acceso del usuario "${u.username}" revocado.`);
  }
};

// WORKER SELF-REGISTRATION & LINK GENERATOR ENGINE
window.copyWorkerRegistrationLink = function() {
  const regUrl = window.location.origin + window.location.pathname + '?register=worker';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(regUrl).then(() => {
      showToast('📋 ¡Link de auto-registro copiado al portapapeles!');
    }).catch(() => {
      prompt('Copia este enlace de registro para enviarlo a tus trabajadoras:', regUrl);
    });
  } else {
    prompt('Copia este enlace de registro para enviarlo a tus trabajadoras:', regUrl);
  }
  showCustomAlert(`Enlace directo para registro de trabajadoras:<br><br><strong style="color: var(--accent-gold); word-break: break-all;">${regUrl}</strong><br><br>Envíalo por WhatsApp para que tus trabajadoras creen su propio usuario y contraseña.`, 'Link de Registro Generado', 'fa-solid fa-link');
};

window.openWorkerSelfRegistrationModal = function() {
  const modal = document.getElementById('workerSelfRegistrationModal');
  if (modal) {
    const errEl = document.getElementById('selfRegErrorMsg');
    if (errEl) errEl.style.display = 'none';
    modal.classList.add('active');
    lockBodyScroll();
  }
};

window.closeWorkerSelfRegistrationModal = function() {
  const modal = document.getElementById('workerSelfRegistrationModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

window.processWorkerSelfRegistration = async function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const nameInput = document.getElementById('selfRegName');
  const usernameInput = document.getElementById('selfRegUsername');
  const passwordInput = document.getElementById('selfRegPassword');
  const errEl = document.getElementById('selfRegErrorMsg');

  if (!nameInput || !usernameInput || !passwordInput) return false;

  const name = nameInput.value.trim();
  const username = usernameInput.value.trim().replace(/\s+/g, '');
  const password = passwordInput.value.trim();

  if (!name || !username || !password) {
    if (errEl) {
      errEl.textContent = 'Por favor completa todos los campos.';
      errEl.style.display = 'block';
    }
    return false;
  }

  const exists = adminUsers.some(u => u.username.toLowerCase() === username.toLowerCase());
  if (exists) {
    if (errEl) {
      errEl.textContent = `El usuario "${username}" ya está registrado. Elige otro nombre de usuario.`;
      errEl.style.display = 'block';
    }
    return false;
  }

  const passwordHash = await hashPassword(password);
  const newWorkerUser = {
    id: 'u_' + Date.now(),
    username: username,
    passwordHash: passwordHash,
    name: name,
    role: 'worker',
    permissions: {
      revenue: false,
      agenda: true,
      categories: false,
      services: false,
      courses: false,
      sucursales: false,
      workers: false,
      requestedGroups: false,
      benefits: false,
      testimonials: false
    }
  };

  adminUsers.push(newWorkerUser);
  await saveState();

  closeWorkerSelfRegistrationModal();

  // Prefill login username
  const loginUserField = document.getElementById('loginUsername');
  if (loginUserField) loginUserField.value = username;

  openAdminLoginModal();
  showCustomAlert(`¡Tu usuario <strong>"${username}"</strong> (${name}) ha sido registrado con éxito!<br><br>Tu Administrador Principal activará los permisos de los módulos a los que tendrás acceso. Ya puedes iniciar sesión.`, 'Acceso Creado Exitosamente', 'fa-solid fa-circle-check');
  return false;
};

// REVENUE CALCULATOR & RENDERER ENGINE (SEPARATED SERVICES & COURSES)
function getBookingPrice(b) {
  const srv = services.find(s => s.id === b.serviceId || s.name === b.serviceName);
  return srv ? srv.price : (b.price || 450);
}

function getCourseResPrice(cr) {
  const course = courses.find(c => c.title.toLowerCase() === cr.courseTitle.toLowerCase());
  return course ? course.price : (cr.price || 3000);
}

window.switchRevenueView = function(viewType) {
  activeRevenueCategoryView = viewType;

  const btnSalon = document.getElementById('revTabSalon');
  const btnCursos = document.getElementById('revTabCursos');
  const btnGlobal = document.getElementById('revTabGlobal');

  [btnSalon, btnCursos, btnGlobal].forEach(b => {
    if (b) b.classList.remove('active');
  });

  if (viewType === 'cursos' && btnCursos) btnCursos.classList.add('active');
  else if (viewType === 'global' && btnGlobal) btnGlobal.classList.add('active');
  else if (btnSalon) btnSalon.classList.add('active');

  renderRevenueSection();
};

function renderRevenueSection() {
  const todayStr = getTodayString();
  const monthStr = todayStr.substring(0, 7);
  const yearStr = todayStr.substring(0, 4);

  const labelToday = document.getElementById('revCardTodayLabel');
  const labelMonth = document.getElementById('revCardMonthLabel');
  const labelYear = document.getElementById('revCardYearLabel');
  const labelTotal = document.getElementById('revCardTotalLabel');

  if (activeRevenueCategoryView === 'cursos') {
    if (labelToday) labelToday.textContent = 'Cursos Presenciales (Hoy)';
    if (labelMonth) labelMonth.textContent = 'Cursos (este Mes)';
    if (labelYear) labelYear.textContent = 'Cursos del Año (2026)';
    if (labelTotal) labelTotal.textContent = 'Total Cursos Acumulado';
  } else if (activeRevenueCategoryView === 'global') {
    if (labelToday) labelToday.textContent = 'Ingresos Globales (Hoy)';
    if (labelMonth) labelMonth.textContent = 'Ingresos Globales (este Mes)';
    if (labelYear) labelYear.textContent = 'Ingresos Globales (Año 2026)';
    if (labelTotal) labelTotal.textContent = 'Total Global Consolidado';
  } else {
    if (labelToday) labelToday.textContent = 'Servicios Salón (Hoy)';
    if (labelMonth) labelMonth.textContent = 'Servicios (este Mes)';
    if (labelYear) labelYear.textContent = 'Servicios del Año (2026)';
    if (labelTotal) labelTotal.textContent = 'Total Servicios Acumulado';
  }

  const activeBookings = bookings.filter(b => b.status !== 'cancelada');
  const activeCourseRes = courseReservations.filter(c => c.status !== 'cancelada');

  let todaySum = 0, todayCount = 0;
  let monthSum = 0, monthCount = 0;
  let yearSum = 0, yearCount = 0;
  let totalSum = 0, totalCount = 0;

  if (activeRevenueCategoryView === 'salon') {
    activeBookings.forEach(b => {
      const p = getBookingPrice(b);
      totalSum += p; totalCount++;
      if (b.date === todayStr) { todaySum += p; todayCount++; }
      if (b.date.startsWith(monthStr)) { monthSum += p; monthCount++; }
      if (b.date.startsWith(yearStr)) { yearSum += p; yearCount++; }
    });
  } else if (activeRevenueCategoryView === 'cursos') {
    activeCourseRes.forEach(cr => {
      const p = getCourseResPrice(cr);
      totalSum += p; totalCount++;
      if (cr.date === todayStr) { todaySum += p; todayCount++; }
      if (cr.date.startsWith(monthStr)) { monthSum += p; monthCount++; }
      if (cr.date.startsWith(yearStr)) { yearSum += p; yearCount++; }
    });
  } else {
    activeBookings.forEach(b => {
      const p = getBookingPrice(b);
      totalSum += p; totalCount++;
      if (b.date === todayStr) { todaySum += p; todayCount++; }
      if (b.date.startsWith(monthStr)) { monthSum += p; monthCount++; }
      if (b.date.startsWith(yearStr)) { yearSum += p; yearCount++; }
    });
    activeCourseRes.forEach(cr => {
      const p = getCourseResPrice(cr);
      totalSum += p; totalCount++;
      if (cr.date === todayStr) { todaySum += p; todayCount++; }
      if (cr.date.startsWith(monthStr)) { monthSum += p; monthCount++; }
      if (cr.date.startsWith(yearStr)) { yearSum += p; yearCount++; }
    });
  }

  const todayAmountEl = document.getElementById('revenueTodayAmount');
  const todayCountEl = document.getElementById('revenueTodayCount');
  if (todayAmountEl) todayAmountEl.textContent = `$${todaySum.toLocaleString('es-MX')} MXN`;
  if (todayCountEl) todayCountEl.textContent = `${todayCount} registro(s) hoy`;

  const monthAmountEl = document.getElementById('revenueMonthAmount');
  const monthCountEl = document.getElementById('revenueMonthCount');
  if (monthAmountEl) monthAmountEl.textContent = `$${monthSum.toLocaleString('es-MX')} MXN`;
  if (monthCountEl) monthCountEl.textContent = `${monthCount} registro(s) este mes`;

  const yearAmountEl = document.getElementById('revenueYearAmount');
  const yearCountEl = document.getElementById('revenueYearCount');
  if (yearAmountEl) yearAmountEl.textContent = `$${yearSum.toLocaleString('es-MX')} MXN`;
  if (yearCountEl) yearCountEl.textContent = `${yearCount} registro(s) este año`;

  const totalAmountEl = document.getElementById('revenueTotalAmount');
  const totalCountEl = document.getElementById('revenueTotalCount');
  if (totalAmountEl) totalAmountEl.textContent = `$${totalSum.toLocaleString('es-MX')} MXN`;
  if (totalCountEl) totalCountEl.textContent = `${totalCount} registro(s) histórico`;

  renderRevenueTable(activeRevenuePeriodFilter);
}

window.renderRevenueTable = function(period = 'all') {
  activeRevenuePeriodFilter = period;

  const btnAll = document.getElementById('revFilterAllBtn');
  const btnToday = document.getElementById('revFilterTodayBtn');
  const btnMonth = document.getElementById('revFilterMonthBtn');
  const btnYear = document.getElementById('revFilterYearBtn');

  [btnAll, btnToday, btnMonth, btnYear].forEach(btn => {
    if (btn) btn.classList.remove('active');
  });

  if (period === 'today' && btnToday) btnToday.classList.add('active');
  else if (period === 'month' && btnMonth) btnMonth.classList.add('active');
  else if (period === 'year' && btnYear) btnYear.classList.add('active');
  else if (btnAll) btnAll.classList.add('active');

  const todayStr = getTodayString();
  const monthStr = todayStr.substring(0, 7);
  const yearStr = todayStr.substring(0, 4);

  let combinedList = [];

  if (activeRevenueCategoryView === 'salon' || activeRevenueCategoryView === 'global') {
    bookings.filter(b => b.status !== 'cancelada').forEach(b => {
      combinedList.push({
        type: '💅 Servicio Salón',
        client: b.clientName,
        concept: b.serviceName,
        location: b.sucursalName || 'Pachuca Centro',
        date: b.date,
        price: getBookingPrice(b),
        badgeClass: 'open-now'
      });
    });
  }

  if (activeRevenueCategoryView === 'cursos' || activeRevenueCategoryView === 'global') {
    courseReservations.filter(c => c.status !== 'cancelada').forEach(cr => {
      combinedList.push({
        type: '🎓 Curso Presencial',
        client: cr.studentName,
        concept: cr.courseTitle,
        location: `Sede ${cr.municipality}`,
        date: cr.date,
        price: getCourseResPrice(cr),
        badgeClass: 'pendiente'
      });
    });
  }

  if (period === 'today') {
    combinedList = combinedList.filter(item => item.date === todayStr);
  } else if (period === 'month') {
    combinedList = combinedList.filter(item => item.date.startsWith(monthStr));
  } else if (period === 'year') {
    combinedList = combinedList.filter(item => item.date.startsWith(yearStr));
  }

  const tableBody = document.getElementById('adminRevenueTableBody');
  if (!tableBody) return;
  tableBody.innerHTML = '';

  if (combinedList.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 1.5rem; color: var(--text-muted);">No hay registros financieros para este período o categoría.</td></tr>';
    return;
  }

  combinedList.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <span class="status-pill ${item.type.includes('Curso') ? 'pendiente' : 'open-now'}" style="font-size: 0.78rem;">
          ${item.type}
        </span>
      </td>
      <td><strong>${item.client}</strong></td>
      <td><strong style="color: var(--accent-gold);">${item.concept}</strong></td>
      <td><small style="color: var(--text-secondary);">${item.location}</small></td>
      <td><strong style="color: var(--accent-gold);">${formatDateDDMM(item.date)}</strong></td>
      <td><strong style="color: #2ecc71; font-size: 0.95rem;">$${item.price.toLocaleString('es-MX')} MXN</strong></td>
    `;
    tableBody.appendChild(tr);
  });
};

// FILE ATTACHMENT LABEL UPDATER
window.updateFileLabel = function(inputEl) {
  if (!inputEl) return;
  const parentContainer = inputEl.closest('.form-group') || inputEl.parentElement.parentElement;
  const indicator = parentContainer ? parentContainer.querySelector('.file-name-indicator') : null;
  if (indicator) {
    if (inputEl.files && inputEl.files.length > 0) {
      indicator.textContent = `📷 ${inputEl.files[0].name}`;
      indicator.style.color = 'var(--accent-gold)';
    } else {
      indicator.textContent = 'Sin archivo seleccionado';
      indicator.style.color = 'var(--text-muted)';
    }
  }
};

// HELPER FOR IMAGE FILE UPLOAD
async function uploadImageFile(fileInputEl) {
  if (!fileInputEl || !fileInputEl.files || fileInputEl.files.length === 0) {
    return null;
  }
  const file = fileInputEl.files[0];
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = reader.result;
      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename: file.name, base64: base64 })
        });
        if (res.ok) {
          const data = await res.json();
          resolve(data.imagePath);
        } else {
          resolve(null);
        }
      } catch (err) {
        console.error('Upload failed:', err);
        resolve(null);
      }
    };
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

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
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

// GLOBAL NAVIGATION WINDOW HANDLERS
window.openAdminPanel = async function() {
  try {
    const isLogged = await checkActiveSession();
    if (!isLogged) {
      openAdminLoginModal();
      return;
    }

    document.body.classList.add('admin-mode');

    const adminPanel = document.getElementById('panelAdmin');
    const clientSections = document.querySelectorAll('section:not(#panelAdmin)');
    clientSections.forEach(s => {
      s.style.display = 'none';
    });

    if (adminPanel) {
      adminPanel.classList.add('active');
      adminPanel.style.display = 'block';
    }

    renderAdminPanel();
    checkAndShowAdminThresholdAlert();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) {
    console.error('Error in openAdminPanel:', err);
  }
};

window.closeAdminPanel = function() {
  try {
    closeAdminSection();
    document.body.classList.remove('admin-mode');

    const adminPanel = document.getElementById('panelAdmin');
    const clientSections = document.querySelectorAll('section:not(#panelAdmin)');
    clientSections.forEach(s => {
      s.style.display = 'block';
    });

    if (adminPanel) {
      adminPanel.classList.remove('active');
      adminPanel.style.display = 'none';
    }

    renderCategoryFilterChips();
    renderServicesGrid(activeCategoryFilter);
    renderCoursesGrid();
    renderTestimonialsPublic();
    renderActiveGroupsList();
    updateHidalgoMapMarkers();

    const inicioSec = document.getElementById('experiencia');
    if (inicioSec) {
      inicioSec.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } catch (err) {
    console.error('Error in closeAdminPanel:', err);
  }
};

// ADMIN ALERT MODAL FOR GROUPS REACHING >= 80% CAPACITY
function checkAndShowAdminThresholdAlert() {
  const readyGroups = requestedGroups.filter(g => {
    if (g.status === 'publicado') return false;
    const pct = Math.round((g.registeredStudents / g.maxStudents) * 100);
    return pct >= 80;
  });

  if (readyGroups.length === 0) return;

  const alertList = document.getElementById('adminThresholdAlertList');
  if (alertList) {
    alertList.innerHTML = '';
    readyGroups.forEach(g => {
      const pct = Math.round((g.registeredStudents / g.maxStudents) * 100);
      const card = document.createElement('div');
      card.style.background = 'var(--bg-card)';
      card.style.border = '1px solid var(--accent-gold)';
      card.style.borderRadius = '12px';
      card.style.padding = '1.2rem';
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.4rem;">
          <strong style="font-size: 1.1rem; color: #FFF;">📍 ${g.municipality}</strong>
          <span class="status-pill open-now" style="font-size: 0.85rem; padding: 0.3rem 0.8rem;">
            🟢 ¡ALCANZÓ EL ${pct}%! (${g.registeredStudents}/${g.maxStudents} Cupos)
          </span>
        </div>
        <p style="font-size: 0.9rem; color: var(--accent-gold); font-weight: 600; margin-bottom: 0.6rem;">
          Curso Solicitado: ${g.courseTitle}
        </p>
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.8rem; margin-top: 0.8rem;">
          <span style="font-size: 0.8rem; color: var(--text-secondary);">
            Superó el quórum del 80%. Haz clic para prellenar la apertura oficial y publicarlo.
          </span>
          <button type="button" class="btn btn-gold" onclick="manageThresholdGroup('${g.municipality}', '${g.courseTitle}', ${pct}, '${g.id}')" style="padding: 0.45rem 1rem; font-size: 0.85rem;">
            <i class="fa-solid fa-calendar-plus"></i> Entendido / Publicar Curso Presencial
          </button>
        </div>
      `;
      alertList.appendChild(card);
    });
  }

  const modal = document.getElementById('adminThresholdAlertModal');
  if (modal) {
    modal.classList.add('active');
    lockBodyScroll();
  }
}

window.manageThresholdGroup = function(municipality, courseTitle, pct, groupId = '') {
  closeAdminThresholdModal();

  const titleInput = document.getElementById('newCourseTitle');
  const locationInput = document.getElementById('newCourseLocation');
  const modalityInput = document.getElementById('newCourseModality');
  const descInput = document.getElementById('newCourseDesc');
  const priceInput = document.getElementById('newCoursePrice');
  const durationInput = document.getElementById('newCourseDuration');
  const certificateInput = document.getElementById('newCourseCertificate');
  const dateTimeInput = document.getElementById('newCourseDateTime');
  const materialCb = document.getElementById('newCourseMaterial');
  const originGroupInput = document.getElementById('newCourseOriginGroupId');

  if (titleInput) titleInput.value = courseTitle;
  if (locationInput) locationInput.value = `${municipality}`;
  if (modalityInput) modalityInput.value = `${municipality}`;
  if (descInput) descInput.value = ` `;
  if (priceInput) priceInput.value = " ";
  if (durationInput) durationInput.value = ' ';
  if (certificateInput) certificateInput.value = ' ';
  if (dateTimeInput) dateTimeInput.value = '';
  if (materialCb) materialCb.checked = true;

  if (originGroupInput) {
    if (groupId) {
      originGroupInput.value = groupId;
    } else {
      const match = requestedGroups.find(g => g.municipality.toLowerCase() === municipality.toLowerCase());
      if (match) originGroupInput.value = match.id;
    }
  }

  openAdminSection('adminCoursesSection');
  showToast(`📋 Formulario prellenado para aperturar curso en ${municipality} (${pct}% quórum). Guarda para publicar y archivar grupo.`);
};

window.closeAdminThresholdModal = function() {
  const modal = document.getElementById('adminThresholdAlertModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

// 4. GROUPS SEARCH & RESPONSIVE LIST ENGINE (Only top 3 shown in main section, sorted by fullness)
window.renderActiveGroupsList = function(query = '') {
  const container = document.getElementById('activeGroupsListContainer');
  if (!container) return;
  container.innerHTML = '';

  const activeGroupsOnly = (requestedGroups || []).filter(g => g.status !== 'publicado');
  const cleanQuery = query.toLowerCase().trim();

  const filtered = activeGroupsOnly.filter(g => 
    g.municipality.toLowerCase().includes(cleanQuery) || 
    g.courseTitle.toLowerCase().includes(cleanQuery)
  );

  filtered.sort((a, b) => {
    const pctA = (a.registeredStudents / a.maxStudents);
    const pctB = (b.registeredStudents / b.maxStudents);
    return pctB - pctA;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; padding: 1rem;">No se encontraron grupos activos. ¡Puedes solicitar tu municipio abajo!</p>';
    return;
  }

  const top3 = filtered.slice(0, 3);

  top3.forEach(g => {
    const pct = Math.round((g.registeredStudents / g.maxStudents) * 100);
    const isReady = pct >= 80;
    const badgeColor = isReady ? '#2ecc71' : 'var(--accent-gold)';
    const statusLabel = isReady ? `🟢 ${pct}% (¡Listo!)` : `${pct}% Lleno`;

    const card = document.createElement('div');
    card.className = 'sede-card-item';
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;">
        <strong style="font-size: 0.9rem;">📍 ${g.municipality}</strong>
        <span style="color: ${badgeColor}; font-size: 0.8rem; font-weight: 700;">${statusLabel}</span>
      </div>
      <p style="font-size: 0.78rem; color: var(--accent-gold); margin-top: 0.2rem;">${g.courseTitle}</p>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.4rem;">
        <span style="font-size: 0.75rem; color: var(--text-muted);">${g.registeredStudents} de ${g.maxStudents} cupos asegurados</span>
        <button type="button" class="btn btn-gold" onclick="joinRequestedGroup('${g.municipality}', '${g.courseTitle}')" style="padding: 0.2rem 0.6rem; font-size: 0.72rem;">
          <i class="fa-solid fa-user-plus"></i> Inscribirme
        </button>
      </div>
      <div class="progress-bar-bg" style="margin-top: 0.4rem;">
        <div class="progress-bar-fill" style="width: ${pct}%; background: ${isReady ? 'linear-gradient(135deg, #2ecc71, #27ae60)' : 'var(--gradient-gold)'};"></div>
      </div>
    `;
    container.appendChild(card);
  });
};

window.openAllGroupsModal = function() {
  renderModalGroupsList('');
  const modal = document.getElementById('allGroupsModal');
  if (modal) {
    modal.classList.add('active');
    lockBodyScroll();
  }
};

window.closeAllGroupsModal = function() {
  const modal = document.getElementById('allGroupsModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

window.renderModalGroupsList = function(query = '') {
  const container = document.getElementById('modalGroupsGridContainer');
  if (!container) return;
  container.innerHTML = '';

  const activeGroupsOnly = (requestedGroups || []).filter(g => g.status !== 'publicado');
  const cleanQuery = query.toLowerCase().trim();

  const filtered = activeGroupsOnly.filter(g => 
    g.municipality.toLowerCase().includes(cleanQuery) || 
    g.courseTitle.toLowerCase().includes(cleanQuery)
  );

  filtered.sort((a, b) => {
    const pctA = (a.registeredStudents / a.maxStudents);
    const pctB = (b.registeredStudents / b.maxStudents);
    return pctB - pctA;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1;">No hay grupos solicitados activos con esa búsqueda.</p>';
    return;
  }

  filtered.forEach(g => {
    const pct = Math.round((g.registeredStudents / g.maxStudents) * 100);
    const isReady = pct >= 80;
    const badgeHtml = isReady 
      ? '<span class="status-pill open-now" style="font-size: 0.75rem;">🟢 ¡LISTO AL ' + pct + '%! (Mín. 80%)</span>' 
      : '<span class="status-pill pendiente" style="font-size: 0.75rem;">🟡 ' + pct + '% Lleno</span>';

    const card = document.createElement('div');
    card.style.background = 'var(--bg-primary)';
    card.style.borderRadius = '16px';
    card.style.padding = '1.2rem';
    card.style.border = isReady ? '1.5px solid #2ecc71' : '1px solid var(--border-light)';

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.6rem;">
        <h4 style="font-size: 1.1rem; color: #FFF;">📍 ${g.municipality}</h4>
        ${badgeHtml}
      </div>
      <p style="font-size: 0.88rem; color: var(--accent-gold); font-weight: 600; margin-bottom: 0.6rem;">
        <i class="fa-solid fa-graduation-cap"></i> ${g.courseTitle}
      </p>
      <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.8rem;">
        Alumnas inscritas: <strong>${g.registeredStudents} / ${g.maxStudents}</strong>
      </p>
      <div class="progress-bar-bg" style="margin-bottom: 1rem; height: 8px;">
        <div class="progress-bar-fill" style="width: ${pct}%; background: ${isReady ? 'linear-gradient(135deg, #2ecc71, #27ae60)' : 'var(--gradient-gold)'};"></div>
      </div>
      <button type="button" class="btn btn-gold" onclick="joinRequestedGroup('${g.municipality}', '${g.courseTitle}')" style="width: 100%; justify-content: center;">
        <i class="fa-solid fa-user-plus"></i> Inscribirme a este Grupo
      </button>
    `;
    container.appendChild(card);
  });
};

window.joinRequestedGroup = function(municipality, courseTitle) {
  closeAllGroupsModal();
  openCourseModal(courseTitle);
  showToast(`📍 Uniéndote al grupo de ${municipality} para: ${courseTitle}.`);
};

// ADMIN REQUESTED GROUPS MANAGEMENT HANDLERS
window.addStudentToGroup = async function(groupId) {
  const group = requestedGroups.find(g => g.id === groupId);
  if (!group) return;

  const studentName = await showCustomPrompt(`Ingresa el nombre completo de la nueva alumna a inscribir en <strong>${group.municipality}</strong>:`, 'Inscribir Nueva Alumna', '');
  if (!studentName || !studentName.trim()) return;

  if (!Array.isArray(group.studentNames)) {
    group.studentNames = [];
  }

  const name = studentName.trim();
  group.studentNames.push(name);
  group.registeredStudents = group.studentNames.length;

  const courseObj = courses.find(c => c.title.toLowerCase().includes(group.courseTitle.toLowerCase())) || { price: 3000 };
  courseReservations.push({
    id: 'cr_' + Date.now(),
    studentName: name,
    courseTitle: group.courseTitle,
    municipality: group.municipality,
    price: courseObj.price,
    date: getTodayString(),
    status: 'confirmada'
  });

  await saveState();
  renderAdminPanel();
  renderActiveGroupsList();
  showToast(`👤 Alumna "${name}" inscrita en el grupo de ${group.municipality}.`);
};

window.deleteRequestedGroup = async function(groupId) {
  const idx = requestedGroups.findIndex(g => g.id === groupId);
  if (idx > -1) {
    const groupName = requestedGroups[idx].municipality;
    const confirmed = await showCustomConfirm(`¿Deseas eliminar definitivamente el grupo de <strong>${groupName}</strong>?`, 'Eliminar Grupo Solicitado', 'fa-solid fa-trash');
    if (confirmed) {
      requestedGroups.splice(idx, 1);
      await saveState();
      renderAdminPanel();
      renderActiveGroupsList();
      showToast(`🗑️ Grupo de ${groupName} eliminado y actualizado en database.json.`);
    }
  }
};

window.openBookModal = function(serviceName = '') {
  try {
    populateServiceSelectOptions();
    populateBranchSelectOptions();
    const serviceSelect = document.getElementById('serviceSelect');
    if (serviceName && serviceSelect) {
      serviceSelect.value = serviceName;
    }

    const clientNumberInput = document.getElementById('bookingClientNumber');
    const feedback = document.getElementById('bookingClientFeedback');
    if (clientNumberInput) clientNumberInput.value = '';
    if (feedback) {
      feedback.textContent = 'Ingresa tu código de 6 dígitos para aplicar tus beneficios VIP en esta cita.';
      feedback.style.color = 'var(--text-muted)';
    }

    updateAvailableTimeSlots();
    const bookModal = document.getElementById('bookModal');
    if (bookModal) {
      bookModal.classList.add('active');
      lockBodyScroll();
    }
  } catch (err) {
    console.error('Error in openBookModal:', err);
  }
};

window.openCourseModal = function(courseName = '') {
  try {
    populateCourseSelectOptions();
    if (courseName) {
      const courseSelect = document.getElementById('courseSelect');
      if (courseSelect) courseSelect.value = courseName;
    }
    const courseModal = document.getElementById('courseModal');
    if (courseModal) {
      courseModal.classList.add('active');
      lockBodyScroll();
    }
  } catch (err) {
    console.error('Error in openCourseModal:', err);
  }
};

window.openCityModal = function() {
  try {
    populateCourseSelectOptions();
    const cityModal = document.getElementById('cityModal');
    if (cityModal) {
      cityModal.classList.add('active');
      lockBodyScroll();
    }
  } catch (err) {
    console.error('Error in openCityModal:', err);
  }
};

// 5. TESTIMONIAL SUBMISSION, APPROVAL & RESPONSIVE VIEW ENGINE
window.toggleAdminShowAllTestimonials = function() {
  showAllAdminTestimonials = !showAllAdminTestimonials;
  renderAdminPanel();
  showToast(showAllAdminTestimonials ? '👁️ Mostrando todos los testimonios (aprobados y pendientes).' : '🙈 Testimonios aprobados ocultados para moderación limpia.');
};

let isSavingTestimonial = false;
window.handleNewTestimonialSubmit = async function(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  if (isSavingTestimonial) return false;
  isSavingTestimonial = true;

  try {
    const authorEl = document.getElementById('newTestimonialAuthor');
    const roleEl = document.getElementById('newTestimonialRole');
    const ratingEl = document.getElementById('newTestimonialRating');
    const titleEl = document.getElementById('newTestimonialTitle');
    const commentEl = document.getElementById('newTestimonialComment');

    if (!authorEl || !titleEl || !commentEl) return false;

    const author = authorEl.value.trim();
    const role = roleEl ? roleEl.value : 'Cliente Salón';
    const rating = ratingEl ? (parseInt(ratingEl.value) || 5) : 5;
    const title = titleEl.value.trim();
    const comment = commentEl.value.trim();

    if (!author || !title || !comment) {
      showCustomAlert('Por favor completa tu nombre, el título y el comentario para enviar tu testimonio.', 'Campos Requeridos', 'fa-solid fa-comments');
      return false;
    }

    // Check duplicate testimonial to prevent double entry
    const isDuplicate = testimonials.some(t => 
      t.author.toLowerCase() === author.toLowerCase() && 
      t.title.toLowerCase() === title.toLowerCase() &&
      t.comment.toLowerCase() === comment.toLowerCase()
    );

    if (isDuplicate) {
      showToast('⚠️ Este testimonio ya ha sido enviado y está en proceso de revisión.');
      return false;
    }

    const newTestimonial = {
      id: 't_' + Date.now(),
      author: author,
      role: role,
      rating: rating,
      title: title,
      comment: comment,
      date: getTodayString(),
      status: 'pendiente'
    };

    testimonials.push(newTestimonial);
    await saveState();

    const form = document.getElementById('newTestimonialForm');
    if (form) form.reset();

    renderAdminPanel();
    showToast(`📝 ¡Gracias ${author}! Tu testimonio fue enviado a revisión previa. Se publicará tras ser aprobado por el administrador.`);
  } catch (err) {
    console.error('Error in handleNewTestimonialSubmit:', err);
  } finally {
    isSavingTestimonial = false;
  }
  return false;
};

window.approveTestimonial = async function(index) {
  if (testimonials[index]) {
    testimonials[index].status = 'aprobado';
    await saveState();
    renderAdminPanel();
    renderTestimonialsPublic();
    showToast(`🟢 Testimonio de "${testimonials[index].author}" aprobado y publicado en el sitio web.`);
  }
};

window.rejectTestimonial = async function(index) {
  if (testimonials[index]) {
    testimonials[index].status = 'rechazado';
    await saveState();
    renderAdminPanel();
    renderTestimonialsPublic();
    showToast(`🔴 Testimonio de "${testimonials[index].author}" ocultado/desaprobado.`);
  }
};

window.deleteTestimonial = async function(index) {
  const confirmed = await showCustomConfirm(`¿Deseas eliminar definitivamente el testimonio de <strong>"${testimonials[index].author}"</strong>?`, 'Eliminar Testimonio', 'fa-solid fa-trash');
  if (confirmed) {
    testimonials.splice(index, 1);
    await saveState();
    renderAdminPanel();
    renderTestimonialsPublic();
    showToast('Testimonio eliminado.');
  }
};

window.openAllTestimonialsModal = function() {
  const container = document.getElementById('allTestimonialsGridContainer');
  if (container) {
    container.innerHTML = '';
    const approved = testimonials.filter(t => t.status === 'aprobado');

    if (approved.length === 0) {
      container.innerHTML = '<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1;">No hay testimonios aprobados aun.</p>';
    } else {
      approved.forEach(t => {
        const starsHtml = '⭐'.repeat(t.rating || 5);
        const initial = t.author ? t.author.charAt(0).toUpperCase() : 'U';

        const card = document.createElement('div');
        card.style.background = 'var(--bg-card)';
        card.style.borderRadius = '16px';
        card.style.padding = '1.4rem';
        card.style.border = '1px solid var(--border-light)';

        card.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.8rem;">
            <span style="font-size: 0.9rem;">${starsHtml}</span>
            <small style="color: var(--text-muted); font-size: 0.75rem;">${formatDateDDMM(t.date)}</small>
          </div>
          <h4 style="color: var(--accent-gold); margin-bottom: 0.5rem; font-size: 1.05rem;">
            <i class="fa-solid fa-quote-left" style="font-size: 0.8rem; opacity: 0.7;"></i> "${t.title}"
          </h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.2rem; line-height: 1.5;">
            "${t.comment}"
          </p>
          <div style="display: flex; align-items: center; gap: 0.8rem;">
            <div style="width: 38px; height: 38px; border-radius: 50%; background: var(--gradient-gold); display: flex; align-items: center; justify-content: center; font-weight: bold; color: #000;">
              ${initial}
            </div>
            <div>
              <strong style="font-size: 0.9rem;">${t.author}</strong><br>
              <small style="color: var(--text-muted);">${t.role || 'Cliente Satisfecha'}</small>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }
  }

  const modal = document.getElementById('allTestimonialsModal');
  if (modal) {
    modal.classList.add('active');
    lockBodyScroll();
  }
};

window.closeAllTestimonialsModal = function() {
  const modal = document.getElementById('allTestimonialsModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

function renderTestimonialsPublic() {
  const container = document.getElementById('testimonialsGridContainer');
  const btnBox = document.getElementById('viewAllTestimonialsBtnBox');
  if (!container) return;
  container.innerHTML = '';

  const approved = testimonials.filter(t => t.status === 'aprobado');

  if (approved.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1;">Aún no hay testimonios aprobados publicados.</p>';
    if (btnBox) btnBox.style.display = 'none';
    return;
  }

  const isMobile = window.innerWidth <= 768;
  const maxLimit = isMobile ? 3 : 6;
  const limitedApproved = approved.slice(0, maxLimit);

  limitedApproved.forEach(t => {
    const starsHtml = '⭐'.repeat(t.rating || 5);
    const initial = t.author ? t.author.charAt(0).toUpperCase() : 'U';

    const card = document.createElement('div');
    card.style.background = 'var(--bg-card)';
    card.style.borderRadius = '16px';
    card.style.padding = '1.4rem';
    card.style.border = '1px solid var(--border-light)';

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.8rem;">
        <span style="font-size: 0.9rem;">${starsHtml}</span>
        <small style="color: var(--text-muted); font-size: 0.75rem;">${formatDateDDMM(t.date)}</small>
      </div>
      <h4 style="color: var(--accent-gold); margin-bottom: 0.5rem; font-size: 1.05rem;">
        <i class="fa-solid fa-quote-left" style="font-size: 0.8rem; opacity: 0.7;"></i> "${t.title}"
      </h4>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.2rem; line-height: 1.5;">
        "${t.comment}"
      </p>
      <div style="display: flex; align-items: center; gap: 0.8rem;">
        <div style="width: 38px; height: 38px; border-radius: 50%; background: var(--gradient-gold); display: flex; align-items: center; justify-content: center; font-weight: bold; color: #000;">
          ${initial}
        </div>
        <div>
          <strong style="font-size: 0.9rem;">${t.author}</strong><br>
          <small style="color: var(--text-muted);">${t.role || 'Cliente Satisfecha'}</small>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  if (btnBox) {
    if (approved.length > maxLimit) {
      btnBox.style.display = 'block';
      btnBox.innerHTML = `
        <button type="button" class="btn btn-gold" onclick="openAllTestimonialsModal()">
          <i class="fa-solid fa-comments"></i> Ver todos los testimonios (${approved.length})
        </button>
      `;
    } else {
      btnBox.style.display = 'none';
    }
  }
}

// SERVICE CREATION & EDITING MODAL HANDLERS
window.handleNewServiceSubmit = async function(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  try {
    const name = document.getElementById('newSrvName').value.trim();
    const price = parseFloat(document.getElementById('newSrvPrice').value);
    const duration = parseInt(document.getElementById('newSrvDuration').value);
    const category = document.getElementById('newSrvCategory').value;
    const desc = document.getElementById('newSrvDesc').value.trim();
    const badgeEl = document.getElementById('newSrvBadge');
    const badge = badgeEl ? badgeEl.value.trim() : '';
    const imageFileInput = document.getElementById('newSrvImageFile');

    if (!name || isNaN(price) || isNaN(duration) || !desc) {
      showCustomAlert('Por favor completa el nombre, precio, duración y descripción del servicio.', 'Servicio Incompleto', 'fa-solid fa-spa');
      return false;
    }

    let uploadedPath = await uploadImageFile(imageFileInput);
    let finalImage = uploadedPath || 'images/course_nails.jpg';

    const newSrv = {
      id: 'srv_' + Date.now(),
      name: name,
      category: category,
      price: price,
      duration: duration,
      badge: badge,
      assignedWorkerIds: workers.map(w => w.id),
      visible: true,
      desc: desc,
      image: finalImage
    };

    services.push(newSrv);
    await saveState();
    renderAdminPanel();
    renderServicesGrid('all');
    const form = document.getElementById('newServiceForm');
    if (form) form.reset();
    showToast(`✅ Servicio "${name}" guardado exitosamente en database.json.`);
  } catch (err) {
    console.error('Error in handleNewServiceSubmit:', err);
  }
  return false;
};

window.openEditServiceModal = function(index) {
  const srv = services[index];
  if (!srv) return;

  const idxEl = document.getElementById('editSrvIndex');
  if (idxEl) idxEl.value = index;
  const nameEl = document.getElementById('editSrvName');
  if (nameEl) nameEl.value = srv.name;
  const priceEl = document.getElementById('editSrvPrice');
  if (priceEl) priceEl.value = srv.price;
  const durEl = document.getElementById('editSrvDuration');
  if (durEl) durEl.value = srv.duration;
  const descEl = document.getElementById('editSrvDesc');
  if (descEl) descEl.value = srv.desc || '';
  const badgeEl = document.getElementById('editSrvBadge');
  if (badgeEl) badgeEl.value = srv.badge || '';
  
  const imgPreview = document.getElementById('editSrvImagePreview');
  if (imgPreview) imgPreview.src = srv.image || 'images/course_nails.jpg';

  const editCategorySelect = document.getElementById('editSrvCategory');
  if (editCategorySelect) {
    editCategorySelect.innerHTML = '';
    categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat.id;
      opt.textContent = cat.name;
      if (cat.id === srv.category) opt.selected = true;
      editCategorySelect.appendChild(opt);
    });
  }

  const modal = document.getElementById('editServiceModal');
  if (modal) {
    modal.classList.add('active');
    lockBodyScroll();
  }
};

window.closeEditServiceModal = function() {
  const modal = document.getElementById('editServiceModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

window.saveEditedService = async function() {
  const idx = parseInt(document.getElementById('editSrvIndex').value);
  if (isNaN(idx) || !services[idx]) return;

  const name = document.getElementById('editSrvName').value.trim();
  const category = document.getElementById('editSrvCategory').value;
  const price = parseFloat(document.getElementById('editSrvPrice').value);
  const duration = parseInt(document.getElementById('editSrvDuration').value);
  const desc = document.getElementById('editSrvDesc').value.trim();
  const badgeEl = document.getElementById('editSrvBadge');
  const badge = badgeEl ? badgeEl.value.trim() : '';
  const fileInput = document.getElementById('editSrvImageFile');

  if (!name || isNaN(price) || isNaN(duration) || !desc) {
    showCustomAlert('Por favor completa todos los campos obligatorios del servicio.', 'Datos Faltantes', 'fa-solid fa-pen-to-square');
    return;
  }

  let uploadedPath = await uploadImageFile(fileInput);
  if (uploadedPath) {
    services[idx].image = uploadedPath;
  }

  services[idx].name = name;
  services[idx].category = category;
  services[idx].price = price;
  services[idx].duration = duration;
  services[idx].desc = desc;
  services[idx].badge = badge;

  await saveState();
  closeEditServiceModal();
  renderAdminPanel();
  renderServicesGrid(activeCategoryFilter);
  showToast(`✨ Servicio "${name}" actualizado.`);
};

// COURSE MANAGEMENT HANDLERS
let isSavingCourse = false;
window.handleNewCourseSubmit = async function(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  if (isSavingCourse) return false;
  isSavingCourse = true;

  try {
    const titleEl = document.getElementById('newCourseTitle');
    const descEl = document.getElementById('newCourseDesc');
    const modalityEl = document.getElementById('newCourseModality');
    const priceEl = document.getElementById('newCoursePrice');
    const materialEl = document.getElementById('newCourseMaterial');
    const durationEl = document.getElementById('newCourseDuration');
    const certEl = document.getElementById('newCourseCertificate');
    const locationEl = document.getElementById('newCourseLocation');
    const coordsEl = document.getElementById('newCourseCoords');
    const dateTimeEl = document.getElementById('newCourseDateTime');
    const imageFileInput = document.getElementById('newCourseImageFile');
    const originGroupIdEl = document.getElementById('newCourseOriginGroupId');

    const title = titleEl ? titleEl.value.trim() : '';
    const desc = descEl ? descEl.value.trim() : '';
    const modality = modalityEl ? (modalityEl.value.trim() || 'Presencial') : 'Presencial';
    const price = priceEl ? parseFloat(priceEl.value) : NaN;
    const includesMaterial = materialEl ? materialEl.checked : true;
    const duration = durationEl ? durationEl.value.trim() : '';
    const certificate = certEl ? certEl.value.trim() : '';
    const location = locationEl ? locationEl.value.trim() : '';
    const coordsStr = coordsEl ? coordsEl.value.trim() : '';
    const dateTime = dateTimeEl ? dateTimeEl.value.trim() : '';
    const originGroupId = originGroupIdEl ? originGroupIdEl.value : '';

    if (!title || !desc || isNaN(price) || !duration || !certificate || !location) {
      showCustomAlert('Por favor completa el título, descripción, inversión, duración, certificado y sede del curso presencial.', 'Campos Incompletos', 'fa-solid fa-graduation-cap');
      return false;
    }

    let uploadedPath = await uploadImageFile(imageFileInput);
    let finalImage = uploadedPath || 'images/course_nails.jpg';

    const newCourse = {
      id: 'c_' + Date.now(),
      title: title,
      desc: desc,
      modality: modality,
      price: price,
      includesMaterial: includesMaterial,
      duration: duration,
      certificate: certificate,
      location: location,
      coords: coordsStr,
      dateTime: dateTime,
      image: finalImage,
      visible: true
    };

    if (coordsStr) {
      const parsed = parseCoordsString(coordsStr);
      if (parsed) {
        newCourse.lat = parsed[0];
        newCourse.lng = parsed[1];
      }
    }

    courses.push(newCourse);

    let archivedGroupName = '';
    if (originGroupId) {
      const originGroup = requestedGroups.find(g => g.id === originGroupId);
      if (originGroup) {
        originGroup.status = 'publicado';
        archivedGroupName = originGroup.municipality;
      }
    } else {
      const matchedGroup = requestedGroups.find(g => 
        g.status !== 'publicado' && 
        (title.toLowerCase().includes(g.courseTitle.toLowerCase()) || location.toLowerCase().includes(g.municipality.toLowerCase()))
      );
      if (matchedGroup) {
        matchedGroup.status = 'publicado';
        archivedGroupName = matchedGroup.municipality;
      }
    }

    await saveState();
    renderAdminPanel();
    renderCoursesGrid();
    renderActiveGroupsList();
    populateCourseSelectOptions();
    updateHidalgoMapMarkers();

    const form = document.getElementById('newCourseForm');
    if (form) form.reset();

    if (originGroupIdEl) originGroupIdEl.value = '';

    if (archivedGroupName) {
      showToast(`🎉 ¡Curso "${title}" publicado! El grupo de ${archivedGroupName} fue marcado como abierto y retirado de la lista de quórum.`);
    } else {
      showToast(`🎓 Curso "${title}" guardado y publicado con éxito en el mapa y sitio.`);
    }
  } catch (err) {
    console.error('Error in handleNewCourseSubmit:', err);
    showCustomAlert('Ocurrió un error inesperado al publicar el curso. Por favor inténtalo de nuevo.', 'Error', 'fa-solid fa-triangle-exclamation');
  } finally {
    isSavingCourse = false;
  }
  return false;
};

window.openEditCourseModal = function(index) {
  const course = courses[index];
  if (!course) return;

  const idxEl = document.getElementById('editCourseIndex');
  if (idxEl) idxEl.value = index;
  const titleEl = document.getElementById('editCourseTitle');
  if (titleEl) titleEl.value = course.title;
  const descEl = document.getElementById('editCourseDesc');
  if (descEl) descEl.value = course.desc;
  const modEl = document.getElementById('editCourseModality');
  if (modEl) modEl.value = course.modality || '100% Presencial en Salón';
  const priceEl = document.getElementById('editCoursePrice');
  if (priceEl) priceEl.value = course.price;
  const matEl = document.getElementById('editCourseMaterial');
  if (matEl) matEl.checked = course.includesMaterial;
  const durEl = document.getElementById('editCourseDuration');
  if (durEl) durEl.value = course.duration;
  const certEl = document.getElementById('editCourseCertificate');
  if (certEl) certEl.value = course.certificate;
  const locEl = document.getElementById('editCourseLocation');
  if (locEl) locEl.value = course.location;
  const coordsEl = document.getElementById('editCourseCoords');
  if (coordsEl) coordsEl.value = course.coords || (course.lat && course.lng ? course.lat + ', ' + course.lng : '');
  const dtEl = document.getElementById('editCourseDateTime');
  if (dtEl) dtEl.value = course.dateTime;
  
  const imgPreview = document.getElementById('editCourseImagePreview');
  if (imgPreview) imgPreview.src = course.image || 'images/course_nails.jpg';

  const modal = document.getElementById('editCourseModal');
  if (modal) {
    modal.classList.add('active');
    lockBodyScroll();
  }
};

window.closeEditCourseModal = function() {
  const modal = document.getElementById('editCourseModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

window.saveEditedCourse = async function() {
  const idxEl = document.getElementById('editCourseIndex');
  const idx = idxEl ? parseInt(idxEl.value) : NaN;
  if (isNaN(idx) || !courses[idx]) return;

  const titleEl = document.getElementById('editCourseTitle');
  const descEl = document.getElementById('editCourseDesc');
  const modalityEl = document.getElementById('editCourseModality');
  const priceEl = document.getElementById('editCoursePrice');
  const materialEl = document.getElementById('editCourseMaterial');
  const durationEl = document.getElementById('editCourseDuration');
  const certEl = document.getElementById('editCourseCertificate');
  const locEl = document.getElementById('editCourseLocation');
  const coordsEl = document.getElementById('editCourseCoords');
  const dtEl = document.getElementById('editCourseDateTime');
  const fileInput = document.getElementById('editCourseImageFile');

  const title = titleEl ? titleEl.value.trim() : '';
  const desc = descEl ? descEl.value.trim() : '';
  const modality = modalityEl ? modalityEl.value.trim() : '100% Presencial en Salón';
  const price = priceEl ? parseFloat(priceEl.value) : NaN;
  const includesMaterial = materialEl ? materialEl.checked : true;
  const duration = durationEl ? durationEl.value.trim() : '';
  const certificate = certEl ? certEl.value.trim() : '';
  const location = locEl ? locEl.value.trim() : '';
  const coordsStr = coordsEl ? coordsEl.value.trim() : '';
  const dateTime = dtEl ? dtEl.value.trim() : '';

  if (!title || !desc || isNaN(price) || !duration || !certificate || !location) {
    showCustomAlert('Por favor completa todos los campos requeridos del curso presencial.', 'Curso Incompleto', 'fa-solid fa-graduation-cap');
    return;
  }

  let uploadedPath = await uploadImageFile(fileInput);
  if (uploadedPath) {
    courses[idx].image = uploadedPath;
  }

  courses[idx].title = title;
  courses[idx].desc = desc;
  courses[idx].modality = modality || '100% Presencial en Salón';
  courses[idx].price = price;
  courses[idx].includesMaterial = includesMaterial;
  courses[idx].duration = duration;
  courses[idx].certificate = certificate;
  courses[idx].location = location;
  courses[idx].coords = coordsStr;
  if (coordsStr) {
    const parsed = parseCoordsString(coordsStr);
    if (parsed) {
      courses[idx].lat = parsed[0];
      courses[idx].lng = parsed[1];
    }
  }
  courses[idx].dateTime = dateTime;

  await saveState();
  closeEditCourseModal();
  renderAdminPanel();
  renderCoursesGrid();
  populateCourseSelectOptions();
  updateHidalgoMapMarkers();
  showToast(`🎓 Curso "${title}" actualizado correctamente.`);
};

window.toggleCourseVisibility = function(index) {
  if (courses[index]) {
    courses[index].visible = courses[index].visible === false ? true : false;
    saveState();
    renderAdminPanel();
    renderCoursesGrid();
    populateCourseSelectOptions();
    updateHidalgoMapMarkers();
    showToast(`Visibilidad del curso "${courses[index].title}" cambiada a ${courses[index].visible !== false ? 'Visible' : 'Oculto'}.`);
  }
};

window.deleteCourse = async function(index) {
  const confirmed = await showCustomConfirm(`¿Deseas eliminar el curso presencial <strong>"${courses[index].title}"</strong>?`, 'Eliminar Curso', 'fa-solid fa-trash');
  if (confirmed) {
    courses.splice(index, 1);
    await saveState();
    renderAdminPanel();
    renderCoursesGrid();
    populateCourseSelectOptions();
    updateHidalgoMapMarkers();
    showToast('Curso eliminado.');
  }
};

window.handleNewCategorySubmit = function(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  try {
    const nameEl = document.getElementById('newCatName');
    if (!nameEl) return false;

    const catName = nameEl.value.trim();
    if (!catName) {
      showCustomAlert('Por favor ingresa el nombre de la categoría.', 'Campo Vacío', 'fa-solid fa-tags');
      return false;
    }

    const cleanSlug = catName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, '_');
    const catId = 'cat_' + cleanSlug + '_' + Date.now().toString().slice(-4);

    const exists = categories.some(c => c.name.toLowerCase() === catName.toLowerCase());
    if (exists) {
      showCustomAlert('Ya existe una categoría registrada con este mismo nombre.', 'Categoría Duplicada', 'fa-solid fa-tags');
      return false;
    }

    categories.push({ id: catId, name: catName });
    saveState();
    renderAdminPanel();
    renderCategoryFilterChips();

    nameEl.value = '';
    showToast(`✨ Categoría "${catName}" guardada en la base de datos central.`);
  } catch (err) {
    console.error('Error in handleNewCategorySubmit:', err);
  }
  return false;
};

function parseCoordsString(coordsStr) {
  if (!coordsStr || typeof coordsStr !== 'string') return null;
  const parts = coordsStr.split(',').map(p => p.trim());
  if (parts.length === 2) {
    const lat = parseFloat(parts[0]);
    const lng = parseFloat(parts[1]);
    if (!isNaN(lat) && !isNaN(lng) && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
      return [lat, lng];
    }
  }
  return null;
}

window.handleNewBranchSubmit = function(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  try {
    const bName = document.getElementById('newBranchName').value;
    const bAddress = document.getElementById('newBranchAddress').value;
    const bCoords = document.getElementById('newBranchCoords') ? document.getElementById('newBranchCoords').value.trim() : '';
    const bOpen = document.getElementById('newBranchOpen').value || '10:00';
    const bClose = document.getElementById('newBranchClose').value || '19:00';

    if (!bName || !bAddress) {
      showCustomAlert('Por favor ingresa el nombre y domicilio de la sucursal.', 'Datos Faltantes', 'fa-solid fa-store');
      return false;
    }

    const newSuc = {
      id: 'suc_' + Date.now(),
      name: bName,
      address: bAddress,
      coords: bCoords,
      openTime: bOpen,
      closeTime: bClose,
      manager: 'General',
      status: 'operativa'
    };

    if (bCoords) {
      const parsed = parseCoordsString(bCoords);
      if (parsed) {
        newSuc.lat = parsed[0];
        newSuc.lng = parsed[1];
      }
    }

    sucursales.push(newSuc);
    saveState();
    renderAdminPanel();
    updateHidalgoMapMarkers();
    populateBranchSelectOptions();
    const form = document.getElementById('newBranchForm');
    if (form) form.reset();
    showToast(`🏢 Nueva sucursal "${bName}" guardada en database.json.`);
  } catch (err) {
    console.error('Error in handleNewBranchSubmit:', err);
  }
  return false;
};

window.handleNewWorkerSubmit = function(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  try {
    const wName = document.getElementById('newWorkerName').value;
    const wBranch = document.getElementById('newWorkerBranch').value || 'suc1';
    const wStart = document.getElementById('newWorkerStart').value || '10:00';
    const wEnd = document.getElementById('newWorkerEnd').value || '19:00';

    if (!wName) {
      showCustomAlert('Por favor ingresa el nombre de la trabajadora.', 'Nombre Requerido', 'fa-solid fa-user-plus');
      return false;
    }

    const checkedDays = [];
    ALL_DAYS.forEach(d => {
      const cb = document.getElementById(`newW_day_${d.id}`);
      if (cb && cb.checked) checkedDays.push(d.id);
    });

    const newW = {
      id: 'w_' + Date.now(),
      name: wName,
      sucursalId: wBranch,
      days: checkedDays.length > 0 ? checkedDays : ['lun', 'mar', 'mie', 'jue', 'vie', 'sab'],
      startTime: wStart,
      endTime: wEnd,
      status: 'activa'
    };

    workers.push(newW);
    saveState();
    renderAdminPanel();
    const form = document.getElementById('newWorkerForm');
    if (form) form.reset();
    showToast(`👥 Trabajadora "${wName}" guardada en database.json.`);
  } catch (err) {
    console.error('Error in handleNewWorkerSubmit:', err);
  }
  return false;
};

window.updateWorkerBranch = function(index, sucursalId) {
  if (workers[index]) {
    workers[index].sucursalId = sucursalId;
    saveState();
    renderAdminPanel();
    showToast(`Sucursal asignada de "${workers[index].name}" actualizada.`);
  }
};

// GLOBAL DELEGATED CLICK LISTENER
document.addEventListener('click', (e) => {
  const returnBtn = e.target.closest('#adminReturnBtn');
  if (returnBtn) {
    e.preventDefault();
    window.closeAdminPanel();
    return;
  }

  const modeBtn = e.target.closest('#modeToggleBtn');
  if (modeBtn) {
    e.preventDefault();
    window.openAdminPanel();
    return;
  }

  const logoBtn = e.target.closest('.logo-container');
  if (logoBtn) {
    e.preventDefault();
    window.closeAdminPanel();
    return;
  }
});

document.addEventListener('DOMContentLoaded', async () => {
  await syncFromCentralDatabase();

  renderCategoryFilterChips();
  renderServicesGrid('all');
  renderCoursesGrid();
  renderTestimonialsPublic();
  renderActiveGroupsList();
  renderAdminPanel();
  initHidalgoMap();

  setInterval(() => {
    updateHidalgoMapMarkers();
    renderAdminPanel();
  }, 60000);

  window.addEventListener('resize', () => {
    renderTestimonialsPublic();
  });

  const testimonialForm = document.getElementById('newTestimonialForm');
  if (testimonialForm) {
    testimonialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.handleNewTestimonialSubmit(e);
    });
  }

  const newBCForm = document.getElementById('newBenefitClientForm');
  if (newBCForm) {
    newBCForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.handleNewBenefitClientSubmit(e);
    });
  }

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
    if (window.scrollY > 50 && navbar) {
      navbar.classList.add('scrolled');
    } else if (navbar) {
      navbar.classList.remove('scrolled');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetSec = document.querySelector(targetId);
        if (targetSec) {
          if (targetId !== '#panelAdmin') {
            window.closeAdminPanel();
          }
          targetSec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  const switchBtns = document.querySelectorAll('.switch-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const targetEl = document.getElementById(targetTab);
      if (targetEl) targetEl.classList.add('active');
    });
  });

  const serviceSelect = document.getElementById('serviceSelect');
  const branchSelect = document.getElementById('branchSelect');
  const appointmentDate = document.getElementById('appointmentDate');

  if (appointmentDate) {
    appointmentDate.value = getTodayString();
    appointmentDate.min = getTodayString();
    appointmentDate.addEventListener('change', updateAvailableTimeSlots);
  }

  if (serviceSelect) {
    serviceSelect.addEventListener('change', updateAvailableTimeSlots);
  }

  if (branchSelect) {
    branchSelect.addEventListener('change', updateAvailableTimeSlots);
  }

  const closeModalBtns = document.querySelectorAll('.modal-close');
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      unlockBodyScroll();
    });
  });

  // Modal Backdrop Click Listener (bookModal will NOT close on outside click)
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        if (overlay.id === 'bookModal') return; // Do NOT close bookModal on outside click
        overlay.classList.remove('active');
        unlockBodyScroll();
      }
    });
  });

  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('clientName');
      const branchInput = document.getElementById('branchSelect');
      const dateInput = document.getElementById('appointmentDate');
      const clientNumberInput = document.getElementById('bookingClientNumber');
      
      const name = nameInput ? nameInput.value.trim() : '';
      const serviceName = serviceSelect ? serviceSelect.value : '';
      const branchVal = branchInput ? branchInput.value : '';
      
      const branchObj = sucursales.find(s => s.id === branchVal || s.name === branchVal) || sucursales[0];
      const branchName = branchObj ? branchObj.name : 'Sucursal Pachuca Centro';
      const date = dateInput ? dateInput.value : getTodayString();
      const clientNumberVal = clientNumberInput ? clientNumberInput.value.trim() : '';

      if (clientNumberVal) {
        const isValid = window.validateBookingClientNumber(clientNumberVal);
        if (!isValid) return;
      }

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
          showToast(`⚡ Cita previa de ${bToReassign.clientName} reasignada a ${bToReassign.workerName}.`);
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
        clientNumber: clientNumberVal || '',
        status: 'pendiente'
      };

      bookings.push(newBooking);
      saveState();

      const bookModal = document.getElementById('bookModal');
      if (bookModal) bookModal.classList.remove('active');
      unlockBodyScroll();
      showToast(`✨ ¡Cita agendada para ${name}! Atiende: ${assignedWorker.name} (${timeTo12Hr(selectedTimeSlot)} a ${timeTo12Hr(endTime)}). Estatus: Pendiente.`);

      setTimeout(() => {
        let waText = `Hola! Deseo solicitar cita para: ${serviceName} ($${serviceObj.price} MXN) en ${branchName} el día ${formatDateDDMM(date)} de ${timeTo12Hr(selectedTimeSlot)} a ${timeTo12Hr(endTime)}. Cliente: ${name}. Atiende: ${assignedWorker.name}. Total Beauty Web`;
        if (clientNumberVal) {
          waText += ` (N° de Cliente VIP: ${clientNumberVal})`;
        }
        waText += ` Quedo atenta a su confirmación.`;
        window.open(`https://wa.me/?text=${encodeURIComponent(waText)}`, '_blank');
      }, 1500);
    });
  }

  const courseForm = document.getElementById('courseForm');
  if (courseForm) {
    courseForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('studentName').value;
      const courseStr = document.getElementById('courseSelect').value;
      const location = document.getElementById('courseLocationSelect').value;

      const courseObj = courses.find(c => courseStr.toLowerCase().includes(c.title.toLowerCase())) || { price: 3000 };

      courseReservations.push({
        id: 'cr_' + Date.now(),
        studentName: name,
        courseTitle: courseStr,
        municipality: location,
        price: courseObj.price,
        date: getTodayString(),
        status: 'confirmada'
      });
      saveState();

      const courseModal = document.getElementById('courseModal');
      if (courseModal) courseModal.classList.remove('active');
      unlockBodyScroll();
      showToast(`🎓 ¡Lugar apartado para ${name}! Curso: ${courseStr} en ${location}.`);

      setTimeout(() => {
        const waText = encodeURIComponent(`Hola! Deseo apartar mi lugar para el curso presencial: ${courseStr} en ${location}. Nombre: ${name} Total Beauty Web`);
        window.open(`https://wa.me/?text=${waText}`, '_blank');
      }, 1500);
    });
  }

  const cityForm = document.getElementById('cityForm');
  if (cityForm) {
    cityForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('reqName').value;
      const city = document.getElementById('reqCity').value.trim();
      const group = document.getElementById('reqGroupSize').value;
      const courseStr = document.getElementById('reqCourseSelect').value;

      const existingGroup = requestedGroups.find(g => g.municipality.toLowerCase() === city.toLowerCase() && g.status !== 'publicado');
      if (existingGroup) {
        if (!Array.isArray(existingGroup.studentNames)) existingGroup.studentNames = [];
        existingGroup.studentNames.push(name);
        existingGroup.registeredStudents = existingGroup.studentNames.length;
      } else {
        requestedGroups.push({
          id: 'rg_' + Date.now(),
          municipality: city,
          courseTitle: courseStr,
          registeredStudents: 1,
          maxStudents: 8,
          studentNames: [name],
          status: 'activo'
        });
      }

      const courseObj = courses.find(c => courseStr.toLowerCase().includes(c.title.toLowerCase())) || { price: 3000 };
      courseReservations.push({
        id: 'cr_' + Date.now(),
        studentName: name,
        courseTitle: courseStr,
        municipality: city,
        price: courseObj.price,
        date: getTodayString(),
        status: 'confirmada'
      });

      await saveState();
      renderActiveGroupsList();

      const cityModal = document.getElementById('cityModal');
      if (cityModal) cityModal.classList.remove('active');
      unlockBodyScroll();
      showToast(`📍 Solicitud registrada para llevar el curso presencial a ${city} (${group}).`);

      setTimeout(() => {
        const waText = encodeURIComponent(`Hola! Solicito llevar el curso presencial de ${courseStr} a la zona de ${city} para ${group}. Mi nombre: ${name} Total Beauty Web`);
        window.open(`https://wa.me/?text=${waText}`, '_blank');
      }, 1500);
    });
  }

  const waBtn = document.getElementById('waBtn');
  const waMenu = document.getElementById('waMenu');
  if (waBtn && waMenu) {
    waBtn.addEventListener('click', () => waMenu.classList.toggle('active'));
    document.addEventListener('click', (e) => {
      if (!waBtn.contains(e.target) && !waMenu.contains(e.target)) waMenu.classList.remove('active');
    });
  }
});

function renderCoursesGrid() {
  const container = document.querySelector('.courses-grid');
  if (!container) return;
  container.innerHTML = '';

  const visibleCourses = courses.filter(c => c.visible !== false);

  if (visibleCourses.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1;">No hay cursos presenciales visibles actualmente.</p>';
    return;
  }

  visibleCourses.forEach((c) => {
    const materialText = c.includesMaterial ? '(Incluye Kit)' : '(No incluye kit)';
    const imgSrc = c.image || 'images/course_nails.jpg';
    const modalityBadgeText = c.modality || '100% Presencial en Salón';

    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <div class="course-thumb">
        <img src="${imgSrc}" alt="${c.title}" onerror="this.src='images/course_nails.jpg'">
        <span class="course-badge-presencial"><i class="fa-solid fa-users"></i> ${modalityBadgeText}</span>
      </div>
      <div class="course-content">
        <h3 class="course-title">${c.title}</h3>
        <p class="course-desc">${c.desc}</p>
        
        <ul class="course-features">
          <li><i class="fa-solid fa-check"></i> <strong>Inversión:</strong> $${c.price.toLocaleString('es-MX')} MXN ${materialText}</li>
          <li><i class="fa-solid fa-clock"></i> <strong>Duración:</strong> ${c.duration}</li>
          <li><i class="fa-solid fa-certificate"></i> <strong>Certificado:</strong> ${c.certificate}</li>
          <li><i class="fa-solid fa-location-dot"></i> <strong>${c.location}:</strong> ${c.dateTime}</li>
        </ul>

        <div class="course-footer">
          <div class="course-actions">
            <button type="button" class="btn btn-gold" onclick="openCourseModal('${c.title}')">
              <i class="fa-solid fa-ticket"></i> Reservar
            </button>
            <button type="button" class="btn btn-outline" onclick="openCityModal()">
              <i class="fa-solid fa-map-pin"></i> Pedir Municipio
            </button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderCategoryFilterChips() {
  const container = document.getElementById('categoryFiltersContainer');
  if (!container) return;
  container.innerHTML = '';

  const allChip = document.createElement('button');
  allChip.type = 'button';
  allChip.className = `filter-chip ${activeCategoryFilter === 'all' ? 'active' : ''}`;
  allChip.textContent = 'Todos los Servicios';
  allChip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    allChip.classList.add('active');
    activeCategoryFilter = 'all';
    renderServicesGrid('all');
  });
  container.appendChild(allChip);

  categories.forEach(cat => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = `filter-chip ${activeCategoryFilter === cat.id ? 'active' : ''}`;
    chip.textContent = cat.name;
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategoryFilter = cat.id;
      renderServicesGrid(cat.id);
    });
    container.appendChild(chip);
  });
}

function updateAvailableTimeSlots() {
  const timeSlotsContainer = document.getElementById('timeSlotsContainer');
  const serviceSelect = document.getElementById('serviceSelect');
  const branchSelect = document.getElementById('branchSelect');
  const appointmentDate = document.getElementById('appointmentDate');

  if (!timeSlotsContainer || !serviceSelect || !appointmentDate || !branchSelect) return;
  timeSlotsContainer.innerHTML = '';
  selectedTimeSlot = null;
  schedulingSolution = null;

  const selectedServiceName = serviceSelect.value;
  const selectedBranchVal = branchSelect.value;
  const dateVal = appointmentDate.value;
  if (!selectedServiceName || !dateVal || !selectedBranchVal) return;

  const serviceObj = services.find(s => s.name === selectedServiceName) || services[0];
  const selectedBranch = sucursales.find(s => s.id === selectedBranchVal || s.name === selectedBranchVal) || sucursales[0];
  
  const openMin = timeToMinutes(selectedBranch.openTime || '10:00');
  const closeMin = timeToMinutes(selectedBranch.closeTime || '19:00');

  // Dynamic slots every 30 minutes from branch open to branch close
  const candidateHours = [];
  for (let m = openMin; m < closeMin; m += 30) {
    candidateHours.push(minutesToTime(m));
  }

  candidateHours.forEach(time => {
    const startMin = timeToMinutes(time);
    const endMin = startMin + serviceObj.duration;

    const solution = findSchedulingSolution(serviceObj, selectedBranch, dateVal, startMin, endMin);
    const time12 = timeTo12Hr(time);

    const btn = document.createElement('div');
    btn.className = 'time-slot-btn';

    if (solution.possible) {
      btn.innerHTML = `<strong>${time12}</strong><br><small style="font-size: 0.75rem; color: #2ecc71;">🟢 Disponible</small>`;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedTimeSlot = time;
        schedulingSolution = solution;
      });
    } else {
      btn.classList.add('disabled');
      let reasonText = '🔴 No disponible';
      if (solution.reason === 'pasado') {
        reasonText = '⏳ Horario pasado (30 min anticipación)';
      } else if (solution.reason === 'cierre_sucursal' || solution.reason === 'excede_turno') {
        reasonText = '🌆 Excede horario de cierre';
      } else if (solution.reason === 'sin_personal') {
        reasonText = '📅 Sin personal este día';
      } else if (solution.reason === 'ocupado') {
        reasonText = '🔴 Horario ya reservado';
      }
      btn.innerHTML = `<strong>${time12}</strong><br><small style="font-size: 0.72rem; color: #e74c3c;">${reasonText}</small>`;
      btn.title = reasonText;
    }

    timeSlotsContainer.appendChild(btn);
  });
}

function findSchedulingSolution(targetService, selectedBranch, dateVal, startMin, endMin) {
  const targetDayCode = getDayCodeFromDate(dateVal);
  const todayStr = getTodayString();

  // 1. Real-time today check with minimum 30 minutes advance booking
  if (dateVal === todayStr) {
    const now = new Date();
    const currentMin = now.getHours() * 60 + now.getMinutes();
    if (startMin < currentMin + 30) {
      return { possible: false, reason: 'pasado' };
    }
  }

  // 2. Branch closing time check
  const bCloseMin = timeToMinutes(selectedBranch.closeTime || '19:00');
  if (endMin > bCloseMin) {
    return { possible: false, reason: 'cierre_sucursal' };
  }

  // 3. Filter active workers assigned to service, day AND branch
  const activeWorkers = workers.filter(w => {
    if (w.status !== 'activa') return false;
    if (targetService.assignedWorkerIds && !targetService.assignedWorkerIds.includes(w.id)) return false;
    if (!Array.isArray(w.days) || !w.days.includes(targetDayCode)) return false;
    if (w.sucursalId && w.sucursalId !== selectedBranch.id) return false;
    return true;
  });
  
  if (activeWorkers.length === 0) {
    return { possible: false, reason: 'sin_personal' };
  }

  const getWorkerFlexibilityScore = (wId) => {
    return services.filter(s => s.assignedWorkerIds && s.assignedWorkerIds.includes(wId)).length;
  };

  activeWorkers.sort((a, b) => getWorkerFlexibilityScore(a.id) - getWorkerFlexibilityScore(b.id));

  // Check direct availability
  for (let w of activeWorkers) {
    const wShiftStart = timeToMinutes(w.startTime || '10:00');
    const wShiftEnd = timeToMinutes(w.endTime || '19:00');

    // Worker shift bounds check (cannot end past worker shift end)
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

  // Check re-assignment availability
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

        const altWorkers = workers.filter(altW => {
          if (altW.id === w.id || altW.status !== 'activa') return false;
          if (bServiceObj.assignedWorkerIds && !bServiceObj.assignedWorkerIds.includes(altW.id)) return false;
          if (!Array.isArray(altW.days) || !altW.days.includes(targetDayCode)) return false;
          if (altW.sucursalId && altW.sucursalId !== selectedBranch.id) return false;

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

  // Check specific reason if no worker matched
  const workerWithShiftIssue = activeWorkers.find(w => {
    const wShiftEnd = timeToMinutes(w.endTime || '19:00');
    return endMin > wShiftEnd;
  });

  if (workerWithShiftIssue) {
    return { possible: false, reason: 'excede_turno' };
  }

  return { possible: false, reason: 'ocupado' };
}

// DYNAMIC HIDALGO MAP ENGINE
// DYNAMIC HIDALGO MAP ENGINE (GOOGLE MAPS REAL VECTOR TILES + SATELLITE HYBRID ENGINE)
function initHidalgoMap() {
  if (mapInitialized) return;
  const mapElement = document.getElementById('hidalgoMap');
  if (!mapElement) return;

  const hidalgoCenter = [20.1011, -98.7591];

  leafletMap = L.map('hidalgoMap', {
    scrollWheelZoom: false
  }).setView(hidalgoCenter, 11);

  // 1. Google Maps Vector Streets Layer (Alta definición, todas las calles, avenidas y nombres exactos)
  const googleStreets = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: '&copy; Google Maps',
    maxZoom: 20
  });

  // 2. Google Maps Hybrid Layer (Vista Satelital Fotográfica con Etiquetas de Calles y Colonias)
  const googleHybrid = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    attribution: '&copy; Google Maps Satellite',
    maxZoom: 20
  });

  // 3. Esri World Street Map (Capa alternativa de alta resolución urbana)
  const esriStreets = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri',
    maxZoom: 19
  });

  // Capa predeterminada: Google Maps Calles
  googleStreets.addTo(leafletMap);

  // Selector interactivo de capas en la esquina superior derecha del mapa
  const baseMaps = {
    "🗺️ Google Maps (Calles)": googleStreets,
    "🛰️ Google Maps (Satélite Híbrido)": googleHybrid,
    "🗺️ Esri World Street Map": esriStreets
  };

  L.control.layers(baseMaps, null, { position: 'topright' }).addTo(leafletMap);

  updateHidalgoMapMarkers();
  mapInitialized = true;
}

// DYNAMIC HIDALGO MAP ENGINE (SINCRONIZACIÓN Y GEOLOCALIZACIÓN 100% EXACTA DE CALLE)
const HIDALGO_COORDINATE_MAP = [
  { keywords: ['mixquiahuala'], lat: 20.2311, lng: -99.2144 },
];

const geocodeCache = {};

function getFallbackCoordinates(addressStr, indexOffset = 0) {
  if (!addressStr) return [20.1011 + (indexOffset * 0.003), -98.7591 + (indexOffset * 0.003)];
  const clean = addressStr.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  for (const item of HIDALGO_COORDINATE_MAP) {
    for (const kw of item.keywords) {
      if (clean.includes(kw)) {
        const offsetLat = (indexOffset % 3) * 0.002 * (indexOffset % 2 === 0 ? 1 : -1);
        const offsetLng = Math.floor(indexOffset / 3) * 0.002 * (indexOffset % 2 === 0 ? -1 : 1);
        return [item.lat + offsetLat, item.lng + offsetLng];
      }
    }
  }

  return [20.1011 + (indexOffset * 0.003), -98.7591 + (indexOffset * 0.003)];
}

async function resolveExactCoordinates(addressStr, fallbackCoords) {
  if (!addressStr || addressStr.trim().length < 3) return fallbackCoords;

  const queryKey = addressStr.trim().toLowerCase();
  if (geocodeCache[queryKey]) {
    return geocodeCache[queryKey];
  }

  try {
    let query = addressStr.trim();
    if (!query.toLowerCase().includes('hidalgo') && !query.toLowerCase().includes('hgo')) {
      query += ', Hidalgo, Mexico';
    }
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`, {
      headers: { 'Accept-Language': 'es' }
    });

    if (response.ok) {
      const results = await response.json();
      if (Array.isArray(results) && results.length > 0 && results[0].lat && results[0].lon) {
        const exactCoords = [parseFloat(results[0].lat), parseFloat(results[0].lon)];
        geocodeCache[queryKey] = exactCoords;
        return exactCoords;
      }
    }
  } catch (err) {
    console.warn('Geocoding query fallback used for address:', addressStr, err);
  }

  geocodeCache[queryKey] = fallbackCoords;
  return fallbackCoords;
}

async function updateHidalgoMapMarkers() {
  if (!leafletMap) return;

  leafletMarkers.forEach(m => leafletMap.removeLayer(m));
  leafletMarkers = [];

  const boundsCoords = [];

  // 1. Render ALL Sucursales from Panel Admin with Explicit GPS or Live Street-Level Geocoding
  if (Array.isArray(sucursales) && sucursales.length > 0) {
    for (let idx = 0; idx < sucursales.length; idx++) {
      const s = sucursales[idx];
      const addressQuery = (s.address || s.name || '').trim();
      const explicitCoords = parseCoordsString(s.coords) || (s.lat && s.lng ? [parseFloat(s.lat), parseFloat(s.lng)] : null);
      const fallback = getFallbackCoordinates(addressQuery + ' ' + (s.name || ''), idx);

      const coords = explicitCoords ? explicitCoords : await resolveExactCoordinates(addressQuery, fallback);
      boundsCoords.push(coords);

      const isOpen = s.status === 'operativa' && isStoreOpen(s.openTime || '10:00', s.closeTime || '19:00');
      const badgeHtml = isOpen
        ? `<span style="background: rgba(46, 204, 113, 0.15); color: #2ecc71; padding: 0.2rem 0.5rem; border-radius: 999px; font-weight: 700; font-size: 0.75rem; border: 1px solid rgba(46, 204, 113, 0.4);">🟢 ABIERTO (${timeTo12Hr(s.openTime)} - ${timeTo12Hr(s.closeTime)})</span>`
        : `<span style="background: rgba(231, 76, 60, 0.15); color: #e74c3c; padding: 0.2rem 0.5rem; border-radius: 999px; font-weight: 700; font-size: 0.75rem; border: 1px solid rgba(231, 76, 60, 0.4);">🔴 CERRADO (${timeTo12Hr(s.openTime)} a ${timeTo12Hr(s.closeTime)})</span>`;

      const branchIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `<div style="background: linear-gradient(135deg, #F5D796, #E6C280); color:#000; width:38px; height:38px; border-radius:50%; border:3px solid #000; display:flex; align-items:center; justify-content:center; font-weight:bold; box-shadow:0 0 15px rgba(230,194,128,0.8);" title="Sucursal: ${s.name}"><i class="fa-solid fa-store"></i></div>`,
        iconSize: [38, 38]
      });

      const googleMapsUrl = explicitCoords 
        ? `https://www.google.com/maps?q=${coords[0]},${coords[1]}`
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery + ', Hidalgo, Mexico')}`;

      const marker = L.marker(coords, { icon: branchIcon }).addTo(leafletMap)
        .bindPopup(`
          <div class="custom-map-popup" style="color: #FFFFFF !important; min-width: 220px; background: #151720; padding: 0.8rem; border-radius: 10px; border: 1.5px solid var(--accent-gold);">
            <h4 style="margin-top: 0.2rem; margin-bottom: 0.5rem; color: #E6C280 !important; font-size: 1.1rem !important; font-weight: 800 !important; border-bottom: 1px solid rgba(230, 194, 128, 0.3); padding-bottom: 0.4rem;">${s.name}</h4>
            <p style="margin-bottom: 0.6rem; font-size: 0.88rem; color: #E2E8F0 !important;">
              <i class="fa-solid fa-location-dot" style="color: var(--accent-gold);"></i> ${s.address || 'Dirección registrada en Panel Admin'}
            </p>
            <div style="margin-bottom: 0.8rem;">${badgeHtml}</div>
            <div style="display: flex; gap: 0.4rem; flex-direction: column;">
              <button type="button" class="btn btn-gold" style="width: 100%; padding: 0.45rem; font-size: 0.82rem; justify-content: center; font-weight: 700;" onclick="openBookModal()">
                <i class="fa-solid fa-calendar-check"></i> Agendar en esta Sucursal
              </button>
              <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="width: 100%; padding: 0.4rem; font-size: 0.78rem; justify-content: center; border-color: #4285F4; color: #4285F4; font-weight: 600;">
                <i class="fa-map-location-dot fa-solid"></i> Abrir en Google Maps GPS
              </a>
            </div>
          </div>
        `);

      leafletMarkers.push(marker);
    }
  }

  // 2. Render ALL Published Courses from Panel Admin with Explicit GPS or Live Street-Level Geocoding
  if (Array.isArray(courses) && courses.length > 0) {
    const activeCourses = courses.filter(c => c.visible !== false);
    for (let idx = 0; idx < activeCourses.length; idx++) {
      const c = activeCourses[idx];
      const courseTitle = c.title || c.name || c.courseTitle || 'Curso Presencial';
      const courseLocation = c.location || c.municipality || 'Sede Presencial en Hidalgo';
      const courseDate = c.dateTime || c.date || 'Fecha por definir';

      const locationQuery = (courseLocation + ' ' + courseTitle).trim();
      const explicitCoords = parseCoordsString(c.coords) || (c.lat && c.lng ? [parseFloat(c.lat), parseFloat(c.lng)] : null);
      const fallback = getFallbackCoordinates(locationQuery, idx + 10);

      const coords = explicitCoords ? explicitCoords : await resolveExactCoordinates(locationQuery, fallback);
      boundsCoords.push(coords);

      const courseIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `<div style="background: linear-gradient(135deg, #F3B3B0, #E89E9B); color:#000; width:36px; height:36px; border-radius:50%; border:2px solid #000; display:flex; align-items:center; justify-content:center; font-weight:bold; box-shadow:0 0 12px rgba(232,158,155,0.8);" title="Curso: ${courseTitle}"><i class="fa-solid fa-graduation-cap"></i></div>`,
        iconSize: [36, 36]
      });

      const materialText = c.includesMaterial ? '<span style="color: #2ecc71; font-weight: 700;">(Kit Incluido)</span>' : '';
      const googleMapsUrl = explicitCoords 
        ? `https://www.google.com/maps?q=${coords[0]},${coords[1]}`
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationQuery + ', Hidalgo, Mexico')}`;

      const marker = L.marker(coords, { icon: courseIcon }).addTo(leafletMap)
        .bindPopup(`
          <div class="custom-map-popup" style="color: #FFFFFF !important; min-width: 220px; background: #151720; padding: 0.8rem; border-radius: 10px; border: 1.5px solid var(--accent-rose);">
            <small style="color: #F3B3B0 !important; text-transform: uppercase; font-weight: 800; font-size: 0.72rem; letter-spacing: 1px; display: block; margin-bottom: 0.2rem;">🎓 Curso Presencial Confirmado</small>
            <h4 style="margin-top: 0.2rem; margin-bottom: 0.5rem; color: #FFFFFF !important; font-size: 1.1rem !important; font-weight: 800 !important; border-bottom: 1px solid rgba(243, 179, 176, 0.3); padding-bottom: 0.4rem;">${courseTitle}</h4>
            <p style="margin-bottom: 0.4rem; font-size: 0.88rem; color: #E2E8F0 !important;">
              <i class="fa-solid fa-location-dot" style="color: #F3B3B0;"></i> <strong style="color: #FFF !important;">Sede:</strong> ${courseLocation}
            </p>
            <p style="margin-bottom: 0.4rem; font-size: 0.88rem; color: #E2E8F0 !important;">
              <i class="fa-solid fa-calendar-days" style="color: var(--accent-gold);"></i> <strong style="color: #FFF !important;">Fecha:</strong> ${courseDate}
            </p>
            <p style="margin-bottom: 0.8rem; font-size: 0.95rem; color: var(--accent-gold) !important; font-weight: 800 !important;">
              $${(c.price || 0).toLocaleString('es-MX')} MXN ${materialText}
            </p>
            <div style="display: flex; gap: 0.4rem; flex-direction: column;">
              <button type="button" class="btn btn-gold" style="width: 100%; padding: 0.45rem; font-size: 0.82rem; justify-content: center; font-weight: 700;" onclick="openCourseModal('${courseTitle.replace(/'/g, "\\'")}')">
                <i class="fa-solid fa-certificate"></i> Inscribirme a este Curso
              </button>
              <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="width: 100%; padding: 0.4rem; font-size: 0.78rem; justify-content: center; border-color: #4285F4; color: #4285F4; font-weight: 600;">
                <i class="fa-map-location-dot fa-solid"></i> Abrir en Google Maps GPS
              </a>
            </div>
          </div>
        `);

      leafletMarkers.push(marker);
    }
  }

  // Fit map view to display all markers dynamically
  if (boundsCoords.length > 0) {
    try {
      const bounds = L.latLngBounds(boundsCoords);
      leafletMap.fitBounds(bounds, { padding: [45, 45], maxZoom: 16 });
    } catch (err) {
      console.warn('Could not fit bounds on map:', err);
    }
  }
}

function populateServiceSelectOptions() {
  const select = document.getElementById('serviceSelect');
  if (!select) return;
  select.innerHTML = '';
  services.filter(s => s.visible).forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.name;
    opt.textContent = `${s.name} (${s.duration} min - $${s.price.toLocaleString('es-MX')} MXN)`;
    select.appendChild(opt);
  });
}

function populateBranchSelectOptions() {
  const selects = [document.getElementById('branchSelect'), document.getElementById('newWorkerBranch')];
  selects.forEach(select => {
    if (!select) return;
    select.innerHTML = '';
    sucursales.filter(s => s.status === 'operativa').forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.id || s.name;
      opt.textContent = `${s.name} (${timeTo12Hr(s.openTime)} - ${timeTo12Hr(s.closeTime)})`;
      select.appendChild(opt);
    });
  });
}

function populateCourseSelectOptions() {
  const courseSelects = [document.getElementById('courseSelect'), document.getElementById('reqCourseSelect')];
  courseSelects.forEach(select => {
    if (!select) return;
    select.innerHTML = '';
    courses.filter(c => c.visible !== false).forEach(c => {
      const opt = document.createElement('option');
      opt.value = `${c.title} ($${c.price.toLocaleString('es-MX')} MXN)`;
      opt.textContent = `${c.title} ($${c.price.toLocaleString('es-MX')} MXN)`;
      select.appendChild(opt);
    });
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
    const imgSrc = s.image || 'images/course_nails.jpg';
    const badgeHtml = s.badge 
      ? `<div style="position: absolute; top: 10px; right: 10px; background: linear-gradient(135deg, #e74c3c, #c0392b); color: #fff; padding: 0.35rem 0.8rem; border-radius: 999px; font-weight: 800; font-size: 0.78rem; border: 1.5px solid #fff; box-shadow: 0 4px 12px rgba(231,76,60,0.6); z-index: 5;"><i class="fa-solid fa-fire"></i> ${s.badge}</div>` 
      : '';

    const card = document.createElement('div');
    card.className = 'service-card';
    card.style.position = 'relative';
    card.innerHTML = `
      <div>
        <div style="position: relative; width: 100%; height: 160px; border-radius: 12px; overflow: hidden; margin-bottom: 1rem;">
          <img src="${imgSrc}" alt="${s.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='images/course_nails.jpg'">
          ${badgeHtml}
        </div>
        <h3 class="service-title">${s.name}</h3>
        <div class="service-price">$${s.price.toLocaleString('es-MX')} MXN</div>
        <p class="service-desc">${s.desc}</p>
      </div>
      <div>
        <div class="service-meta">
          <span class="duration-badge"><i class="fa-regular fa-clock"></i> ${s.duration} min</span>
          <span><i class="fa-solid fa-user-check"></i> ${assignedStaffCount} especialista(s)</span>
        </div>
        <button type="button" class="btn btn-gold" style="width: 100%" onclick="openBookModal('${s.name.replace(/'/g, "\\'")}')">
          <i class="fa-solid fa-calendar-plus"></i> Agendar Servicio
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderCoursesGrid() {
  const container = document.querySelector('.courses-grid');
  if (!container) return;
  container.innerHTML = '';

  const activeCourses = (courses || []).filter(c => c.visible !== false);

  if (activeCourses.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1;">No hay cursos presenciales disponibles actualmente.</p>';
    return;
  }

  activeCourses.forEach(c => {
    const imgSrc = c.image || 'images/course_nails.jpg';
    const materialText = c.includesMaterial ? '<span style="color: #2ecc71; font-weight: 700;">🟢 Incluye Kit Completo de Material</span>' : '<span style="color: var(--text-muted);">⚪ No incluye kit</span>';
    const modalityText = c.modality || '100% Presencial en Salón';

    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <div style="position: relative; width: 100%; height: 180px; border-radius: 14px; overflow: hidden; margin-bottom: 1rem;">
        <img src="${imgSrc}" alt="${c.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='images/course_nails.jpg'">
        <div style="position: absolute; top: 10px; right: 10px; background: rgba(15, 16, 22, 0.88); backdrop-filter: blur(8px); border: 1.5px solid var(--accent-gold); color: var(--accent-gold); padding: 0.35rem 0.8rem; border-radius: 999px; font-weight: 800; font-size: 0.78rem; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">
          <i class="fa-solid fa-graduation-cap"></i> ${modalityText}
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.4rem;">
        <span class="course-duration"><i class="fa-solid fa-clock"></i> ${c.duration}</span>
        <span style="font-size: 1.15rem; font-weight: 800; color: var(--accent-gold);">$${(c.price || 0).toLocaleString('es-MX')} MXN</span>
      </div>

      <h3 class="course-title" style="font-size: 1.15rem; margin-bottom: 0.5rem; color: #FFF;">${c.title}</h3>
      <p class="course-desc" style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.8rem; line-height: 1.5;">${c.desc}</p>

      <div style="background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 10px; border: 1px solid var(--border-light); margin-bottom: 1rem; font-size: 0.82rem; display: flex; flex-direction: column; gap: 0.4rem;">
        <div><i class="fa-solid fa-award" style="color: var(--accent-gold);"></i> <strong>Certificado:</strong> ${c.certificate || 'Validez Curricular'}</div>
        <div><i class="fa-solid fa-location-dot" style="color: var(--accent-gold);"></i> <strong>Sede:</strong> ${c.location || 'Salón Principal Pachuca'}</div>
        ${c.dateTime ? `<div><i class="fa-solid fa-calendar-days" style="color: var(--accent-gold);"></i> <strong>Fecha:</strong> ${c.dateTime}</div>` : ''}
        <div>${materialText}</div>
      </div>

      <button type="button" class="btn btn-rose" style="width: 100%; justify-content: center; font-weight: 700;" onclick="openCourseModal('${c.title.replace(/'/g, "\\'")}')">
        <i class="fa-solid fa-certificate"></i> Inscribirme a este Curso
      </button>
    `;

    container.appendChild(card);
  });
}

function renderAdminPanel() {
  const totalBookingsEl = document.getElementById('adminTotalBookings');
  const totalWorkersEl = document.getElementById('adminTotalWorkers');
  const totalSucursalesEl = document.getElementById('adminTotalSucursales');
  const totalCoursesEl = document.getElementById('adminTotalCourses');
  const totalTestimonialsEl = document.getElementById('adminTotalTestimonials');
  const totalRevenueEl = document.getElementById('adminTotalRevenue');
  const totalGroupsEl = document.getElementById('adminTotalGroups');
  const totalCategoriesEl = document.getElementById('adminTotalCategories');
  const totalServicesEl = document.getElementById('adminTotalServices');
  const totalBenefitsClientsEl = document.getElementById('adminTotalBenefitsClients');

  if (totalBookingsEl) totalBookingsEl.textContent = bookings.length;
  if (totalWorkersEl) totalWorkersEl.textContent = workers.filter(w => w.status === 'activa').length;
  if (totalSucursalesEl) totalSucursalesEl.textContent = sucursales.filter(s => s.status === 'operativa').length;
  if (totalCoursesEl) totalCoursesEl.textContent = courses.length;
  if (totalCategoriesEl) totalCategoriesEl.textContent = categories.length;
  if (totalServicesEl) totalServicesEl.textContent = services.length;
  if (totalBenefitsClientsEl) totalBenefitsClientsEl.textContent = benefitsClients.length;

  const pendingTestimonialsCount = testimonials.filter(t => t.status === 'pendiente').length;
  if (totalTestimonialsEl) totalTestimonialsEl.textContent = `${pendingTestimonialsCount} (Pend.)`;

  const activeGroupsCount = requestedGroups.filter(g => g.status !== 'publicado').length;
  if (totalGroupsEl) totalGroupsEl.textContent = activeGroupsCount;

  // Global Consolidated Total
  const totalServicesRevenue = bookings.filter(b => b.status !== 'cancelada').reduce((sum, b) => sum + getBookingPrice(b), 0);
  const totalCoursesRevenue = courseReservations.filter(c => c.status !== 'cancelada').reduce((sum, c) => sum + getCourseResPrice(c), 0);
  const grandTotal = totalServicesRevenue + totalCoursesRevenue;

  if (totalRevenueEl) totalRevenueEl.textContent = `$${grandTotal.toLocaleString('es-MX')} MXN`;

  populateBranchSelectOptions();

  // Benefits Admin Table (Click on Name to Edit Info + Inline Benefit Input & Save Button + No Edit Button in Actions)
  const benefitsTableBody = document.getElementById('adminBenefitsTableBody');
  if (benefitsTableBody) {
    benefitsTableBody.innerHTML = '';
    if (benefitsClients.length === 0) {
      benefitsTableBody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: var(--text-muted);">No hay clientes registrados en el programa de beneficios.</td></tr>';
    } else {
      benefitsClients.forEach((bc, clientIdx) => {
        const tr = document.createElement('tr');
        const normBenefits = normalizeBenefits(bc.benefits);
        const calculatedLevel = calculateVIPLevel(normBenefits);

        const benefitsListHtml = normBenefits.map((b, benefitIdx) => {
          const isRedeemed = b.redeemed;
          return `
            <div style="display: flex; gap: 0.3rem; align-items: center; margin-bottom: 0.35rem;">
              <input type="text" class="form-control" value="${b.text}" data-old-val="${b.text}" style="padding: 0.3rem 0.5rem; font-size: 0.82rem; ${isRedeemed ? 'text-decoration: line-through; opacity: 0.6;' : 'font-weight: 500;'}" onfocus="this.dataset.oldVal=this.value.trim()" onblur="updateBenefitText(${clientIdx}, ${benefitIdx}, this)" onkeyup="if(event.key==='Enter') this.blur()" title="Edita el texto del beneficio y da clic afuera o presiona Enter">
              <button type="button" class="${isRedeemed ? 'btn btn-outline' : 'btn btn-gold'}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem; white-space: nowrap;" onclick="toggleRedeemBenefit(${clientIdx}, ${benefitIdx})" title="${isRedeemed ? 'Reactivar beneficio' : 'Marcar como canjeado'}">
                ${isRedeemed ? '↩ Reactivar' : '🎁 Canjear'}
              </button>
              <button type="button" class="btn btn-outline" style="padding: 0.25rem 0.45rem; font-size: 0.72rem; color: #e74c3c;" onclick="removeBenefitFromClient(${clientIdx}, ${benefitIdx})" title="Eliminar este beneficio">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          `;
        }).join('');

        const newBenefitFieldHtml = `
          <div style="display: flex; gap: 0.3rem; margin-top: 0.6rem; border-top: 1px dashed var(--border-light); padding-top: 0.5rem;">
            <input type="text" class="form-control" id="addBenefitInput_${clientIdx}" placeholder="Escribir nuevo beneficio..." style="padding: 0.35rem 0.6rem; font-size: 0.8rem;" onkeyup="if(event.key==='Enter') addSingleBenefitToClient(${clientIdx})">
            <button type="button" class="btn btn-gold" style="padding: 0.35rem 0.7rem; font-size: 0.75rem; white-space: nowrap;" onclick="addSingleBenefitToClient(${clientIdx})">
              <i class="fa-solid fa-floppy-disk"></i> Guardar
            </button>
          </div>
        `;

        tr.innerHTML = `
          <td><strong style="color: var(--accent-gold); font-size: 1.05rem; letter-spacing: 1px;">${bc.clientNumber}</strong></td>
          <td>
            <strong style="color: var(--accent-gold); cursor: pointer; text-decoration: underline;" onclick="openEditBenefitClientModal(${clientIdx})" title="Haz clic aquí para editar los datos personales de ${bc.name}">
              <i class="fa-solid fa-user-pen" style="font-size: 0.8rem; margin-right: 0.2rem;"></i> ${bc.name}
            </strong>
          </td>
          <td><small style="color: var(--accent-gold);"><i class="fa-brands fa-whatsapp"></i> ${bc.phone}</small></td>
          <td><small>${bc.city}</small></td>
          <td><span class="status-pill open-now" style="font-size: 0.75rem;">${calculatedLevel}</span></td>
          <td style="min-width: 360px;">${benefitsListHtml}${newBenefitFieldHtml}</td>
          <td>
            <button type="button" class="btn btn-outline" style="padding: 0.35rem 0.7rem; font-size: 0.75rem; color: #e74c3c;" onclick="deleteBenefitClient(${clientIdx})" title="Eliminar cliente del programa">
              <i class="fa-solid fa-trash"></i> Eliminar
            </button>
          </td>
        `;
        benefitsTableBody.appendChild(tr);
      });
    }
  }

  // Categories Table Render
  const categoriesTableBody = document.getElementById('adminCategoriesTableBody');
  if (categoriesTableBody) {
    categoriesTableBody.innerHTML = '';
    categories.forEach((cat, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span style="color: var(--accent-gold); font-weight: 600;">#${cat.id}</span></td>
        <td>
          <input type="text" value="${cat.name}" data-old-val="${cat.name}" class="form-control" style="padding: 0.4rem; font-weight: bold;" onfocus="this.dataset.oldVal=this.value.trim()" onblur="updateCategoryField(${idx}, 'name', this)" onkeyup="if(event.key==='Enter') this.blur()">
        </td>
        <td>
          <button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; color: #e74c3c;" onclick="deleteCategory(${idx})">
            <i class="fa-solid fa-trash"></i> Eliminar
          </button>
        </td>
      `;
      categoriesTableBody.appendChild(tr);
    });
  }

  // Populate Service Creation Category Dropdown
  const newSrvCategorySelect = document.getElementById('newSrvCategory');
  if (newSrvCategorySelect) {
    newSrvCategorySelect.innerHTML = '';
    categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat.id;
      opt.textContent = cat.name;
      newSrvCategorySelect.appendChild(opt);
    });
  }

  // Sucursales Table
  const sucursalesTableBody = document.getElementById('adminSucursalesTableBody');
  if (sucursalesTableBody) {
    sucursalesTableBody.innerHTML = '';
    sucursales.forEach((s, idx) => {
      const isOpen = isStoreOpen(s.openTime || '10:00', s.closeTime || '19:00');
      const tr = document.createElement('tr');
      const coordsVal = s.coords || (s.lat && s.lng ? s.lat + ', ' + s.lng : '');

      tr.innerHTML = `
        <td>
          <input type="text" value="${s.name}" data-old-val="${s.name}" class="form-control" style="padding: 0.4rem; font-weight: bold;" onfocus="this.dataset.oldVal=this.value.trim()" onblur="updateBranchField(${idx}, 'name', this)" onkeyup="if(event.key==='Enter') this.blur()">
        </td>
        <td>
          <input type="text" value="${s.address}" data-old-val="${s.address}" class="form-control" style="padding: 0.4rem; font-size: 0.82rem;" onfocus="this.dataset.oldVal=this.value.trim()" onblur="updateBranchField(${idx}, 'address', this)" onkeyup="if(event.key==='Enter') this.blur()">
        </td>
        <td>
          <input type="text" value="${coordsVal}" data-old-val="${coordsVal}" class="form-control" style="padding: 0.4rem; font-size: 0.82rem; font-family: monospace; color: var(--accent-gold);" placeholder="20.271977, -98.952332" onfocus="this.dataset.oldVal=this.value.trim()" onblur="updateBranchField(${idx}, 'coords', this)" onkeyup="if(event.key==='Enter') this.blur()" title="Coordenadas GPS en formato: Latitud, Longitud">
        </td>
        <td>
          <div style="display: flex; gap: 0.3rem; align-items: center;">
            <input type="text" value="${s.openTime || '10:00'}" data-old-val="${s.openTime || '10:00'}" style="width:60px;" class="form-control" onfocus="this.dataset.oldVal=this.value.trim()" onblur="updateBranchField(${idx}, 'openTime', this)" onkeyup="if(event.key==='Enter') this.blur()"> - 
            <input type="text" value="${s.closeTime || '19:00'}" data-old-val="${s.closeTime || '19:00'}" style="width:60px;" class="form-control" onfocus="this.dataset.oldVal=this.value.trim()" onblur="updateBranchField(${idx}, 'closeTime', this)" onkeyup="if(event.key==='Enter') this.blur()">

          </div>
        </td>
        <td>
          <button type="button" class="visibility-toggle-btn ${s.status === 'operativa' ? 'visible' : 'hidden'}" onclick="toggleSucursalStatus(${idx})">
            ${s.status === 'operativa' ? '🟢 ACTIVA' : '🔴 Inactiva'}
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; color: #e74c3c;" onclick="deleteSucursal(${idx})">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      `;
      sucursalesTableBody.appendChild(tr);
    });
  }

  // Workers Table (with Editable Branch Assignment & 12h display)
  const workersTableBody = document.getElementById('adminWorkersTableBody');
  if (workersTableBody) {
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

      let branchOptionsHtml = '';
      sucursales.filter(s => s.status === 'operativa').forEach(s => {
        const selected = (w.sucursalId === s.id || w.sucursalId === s.name) ? 'selected' : '';
        branchOptionsHtml += `<option value="${s.id}" ${selected}>${s.name}</option>`;
      });

      tr.innerHTML = `
        <td><span style="color: var(--accent-gold); font-weight: 600;">#${w.id}</span></td>
        <td>
          <input type="text" value="${w.name}" data-old-val="${w.name}" class="form-control" style="padding: 0.4rem; font-weight: bold;" onfocus="this.dataset.oldVal=this.value.trim()" onblur="updateWorkerField(${idx}, 'name', this)" onkeyup="if(event.key==='Enter') this.blur()">
        </td>
        <td>
          <select class="form-control" style="padding: 0.3rem; font-size: 0.82rem;" onchange="updateWorkerBranch(${idx}, this.value)">
            ${branchOptionsHtml}
          </select>
        </td>
        <td>${daysCheckboxesHtml}</td>
        <td>
          <div style="display: flex; gap: 0.3rem; align-items: center;">
            <input type="text" value="${w.startTime || '10:00'}" data-old-val="${w.startTime || '10:00'}" style="width:60px;" class="form-control" onfocus="this.dataset.oldVal=this.value.trim()" onblur="updateWorkerField(${idx}, 'startTime', this)" onkeyup="if(event.key==='Enter') this.blur()"> - 
            <input type="text" value="${w.endTime || '19:00'}" data-old-val="${w.endTime || '19:00'}" style="width:60px;" class="form-control" onfocus="this.dataset.oldVal=this.value.trim()" onblur="updateWorkerField(${idx}, 'endTime', this)" onkeyup="if(event.key==='Enter') this.blur()">
            <small style="color: var(--accent-gold); font-size: 0.72rem;">(${timeTo12Hr(w.startTime)} - ${timeTo12Hr(w.endTime)})</small>
          </div>
        </td>
        <td>
          <button type="button" class="visibility-toggle-btn ${w.status === 'activa' ? 'visible' : 'hidden'}" onclick="toggleWorkerStatus(${idx})">
            ${w.status === 'activa' ? '🟢 Activa' : '🔴 Inactiva'}
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; color: #e74c3c;" onclick="deleteWorker(${idx})">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      `;
      workersTableBody.appendChild(tr);
    });
  }

  // Services Table
  const srvTableBody = document.getElementById('adminServicesTableBody');
  if (srvTableBody) {
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

      const imgSrc = s.image || 'images/course_nails.jpg';

      tr.innerHTML = `
        <td>
          <div style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer;" onclick="openEditServiceModal(${idx})">
            <img src="${imgSrc}" style="width: 38px; height: 38px; border-radius: 8px; object-fit: cover;" onerror="this.src='images/course_nails.jpg'">
            <div>
              <strong style="color: var(--accent-gold); text-decoration: underline;">${s.name}</strong><br>
              <small style="color: var(--text-muted);">${s.desc ? (s.desc.substring(0, 30) + '...') : ''}</small>
            </div>
          </div>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <input type="number" value="${s.price}" data-old-val="${s.price}" step="50" style="width: 85px;" class="form-control" onfocus="this.dataset.oldVal=this.value" onblur="updateServicePrice(${idx}, this)" onkeyup="if(event.key==='Enter') this.blur()">
            <small>MXN</small>
          </div>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <input type="number" value="${s.duration}" data-old-val="${s.duration}" min="15" step="15" style="width: 75px;" class="form-control" onfocus="this.dataset.oldVal=this.value" onblur="updateServiceDuration(${idx}, this)" onkeyup="if(event.key==='Enter') this.blur()">
            <small>min</small>
          </div>
        </td>
        <td>${workerCheckboxesHtml}</td>
        <td>
          <button type="button" class="visibility-toggle-btn ${s.visible ? 'visible' : 'hidden'}" onclick="toggleServiceVisibility(${idx})">
            ${s.visible ? '👁️ Visible' : '🙈 Oculto'}
          </button>
        </td>
        <td>
          <div style="display: flex; gap: 0.3rem; align-items: center;">
            <button type="button" class="btn btn-gold" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;" onclick="openEditServiceModal(${idx})" title="Editar Servicio">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button type="button" class="btn btn-outline" style="padding: 0.35rem 0.65rem; font-size: 0.75rem; color: #e74c3c;" onclick="deleteService(${idx})" title="Eliminar Servicio">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      `;
      srvTableBody.appendChild(tr);
    });
  }

  // Requested Groups Management Table Render
  const requestedGroupsTableBody = document.getElementById('adminRequestedGroupsTableBody') || document.getElementById('adminGroupsTableBody');
  if (requestedGroupsTableBody) {
    requestedGroupsTableBody.innerHTML = '';

    if (requestedGroups.length === 0) {
      requestedGroupsTableBody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: var(--text-muted);">No hay grupos solicitados actualmente.</td></tr>';
    } else {
      requestedGroups.forEach(g => {
        const tr = document.createElement('tr');
        const pct = Math.round((g.registeredStudents / g.maxStudents) * 100);
        const isReady = pct >= 80;
        const isPublished = g.status === 'publicado';

        const studentsList = Array.isArray(g.studentNames) && g.studentNames.length > 0 
          ? g.studentNames.map(n => `<span style="display: inline-block; background: rgba(230,194,128,0.15); padding: 0.15rem 0.5rem; border-radius: 6px; margin: 0.1rem; font-size: 0.75rem; border: 1px solid var(--border-light);">👤 ${n}</span>`).join(' ')
          : '<small style="color: var(--text-muted);">Sin nombres registrados</small>';

        let statusBadge = '';
        if (isPublished) {
          statusBadge = '<span class="status-pill open-now" style="background: rgba(52, 152, 219, 0.2); color: #3498db; border: 1px solid #3498db;">🎉 Publicado (Curso Confirmado)</span>';
        } else if (isReady) {
          statusBadge = `<span class="status-pill open-now">🟢 Listo (${pct}% quórum)</span>`;
        } else {
          statusBadge = `<span class="status-pill pendiente">🟡 En Proceso (${pct}%)</span>`;
        }

        tr.innerHTML = `
          <td><strong>📍 ${g.municipality}</strong></td>
          <td><strong style="color: var(--accent-gold);">${g.courseTitle}</strong></td>
          <td>
            <strong>${g.registeredStudents} / ${g.maxStudents}</strong> cupos (${pct}%)
            <div class="progress-bar-bg" style="height: 6px; margin-top: 0.3rem;">
              <div class="progress-bar-fill" style="width: ${pct}%; background: ${isReady ? '#2ecc71' : 'var(--gradient-gold)'};"></div>
            </div>
          </td>
          <td style="max-width: 250px;">${studentsList}</td>
          <td>${statusBadge}</td>
          <td>
            <div style="display: flex; gap: 0.3rem; align-items: center; flex-wrap: wrap;">
              ${!isPublished ? `
                <button type="button" class="btn btn-gold" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;" onclick="manageThresholdGroup('${g.municipality}', '${g.courseTitle}', ${pct}, '${g.id}')">
                  <i class="fa-solid fa-calendar-plus"></i> Publicar Curso Presencial
                </button>
                <button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;" onclick="addStudentToGroup('${g.id}')">
                  <i class="fa-solid fa-user-plus"></i> + Alumna
                </button>
              ` : `
                <small style="color: #3498db; font-size: 0.75rem;"><i class="fa-solid fa-circle-check"></i> Archivo publicado</small>
              `}
              <button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; color: #e74c3c;" onclick="deleteRequestedGroup('${g.id}')">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        `;
        requestedGroupsTableBody.appendChild(tr);
      });
    }
  }

  // Courses Table Render
  const coursesTableBody = document.getElementById('adminCoursesTableBody');
  if (coursesTableBody) {
    coursesTableBody.innerHTML = '';
    courses.forEach((c, idx) => {
      const tr = document.createElement('tr');
      const imgSrc = c.image || 'images/course_nails.jpg';
      const materialBadge = c.includesMaterial ? '<span style="color: #2ecc71; font-weight: 600;">(Incluye Kit)</span>' : '<span style="color: var(--text-muted);">(No incluye kit)</span>';

      tr.innerHTML = `
        <td>
          <img src="${imgSrc}" style="width: 44px; height: 44px; border-radius: 8px; object-fit: cover;" onerror="this.src='images/course_nails.jpg'">
        </td>
        <td>
          <strong style="color: var(--accent-gold);">${c.title}</strong><br>
          <small style="color: var(--text-muted);">${c.desc ? c.desc.substring(0, 40) + '...' : ''}</small>
        </td>
        <td><strong>$${c.price.toLocaleString('es-MX')} MXN</strong></td>
        <td>${materialBadge}</td>
        <td>
          <small style="color: var(--text-secondary);">${c.duration}</small><br>
          <small style="color: var(--accent-gold);">${c.certificate}</small>
        </td>
        <td>
          <small style="color: var(--text-secondary);">${c.location}</small><br>
          <small style="color: var(--text-muted);">${c.dateTime}</small>
        </td>
        <td>
          <div style="display: flex; gap: 0.3rem; align-items: center;">
            <button type="button" class="visibility-toggle-btn ${c.visible !== false ? 'visible' : 'hidden'}" onclick="toggleCourseVisibility(${idx})">
              ${c.visible !== false ? '👁️ Visible' : '🙈 Oculto'}
            </button>
            <button type="button" class="btn btn-gold" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;" onclick="openEditCourseModal(${idx})">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; color: #e74c3c;" onclick="deleteCourse(${idx})">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      `;
      coursesTableBody.appendChild(tr);
    });
  }

  // Agenda Table (Formatted in 12h AM/PM)
  const agendaTableBody = document.getElementById('adminAgendaTableBody');
  if (agendaTableBody) {
    agendaTableBody.innerHTML = '';
    bookings.forEach((b, idx) => {
      const tr = document.createElement('tr');
      
      let statusClass = 'pendiente';
      if (b.status === 'confirmada') statusClass = 'confirmada';
      if (b.status === 'cancelada') statusClass = 'cancelada';

      const clientNumBadge = b.clientNumber ? `<br><small style="color: var(--accent-gold); font-size: 0.75rem;"><i class="fa-solid fa-gift"></i> VIP: ${b.clientNumber}</small>` : '';

      tr.innerHTML = `
        <td><strong>${b.clientName}</strong>${clientNumBadge}</td>
        <td><small style="color: var(--accent-gold);">${b.sucursalName || 'Sucursal Pachuca Centro'}</small></td>
        <td>${b.serviceName}</td>
        <td><strong style="color: var(--accent-gold);"><i class="fa-regular fa-calendar"></i> ${formatDateDDMM(b.date)}</strong></td>
        <td><span class="duration-badge">${timeTo12Hr(b.startTime)} - ${timeTo12Hr(b.endTime)} (${b.duration}m)</span></td>
        <td><strong style="color: var(--accent-gold);"><i class="fa-solid fa-user-check"></i> ${b.workerName || 'Trabajadora'}</strong></td>
        <td>
          <select class="form-control status-pill ${statusClass}" style="padding: 0.2rem 0.6rem !important; font-size: 0.8rem;" onchange="updateBookingStatus(${idx}, this.value)">
            <option value="pendiente" ${b.status === 'pendiente' ? 'selected' : ''}>🟡 Pendiente</option>
            <option value="confirmada" ${b.status === 'confirmada' ? 'selected' : ''}>🟢 Confirmada</option>
            <option value="cancelada" ${b.status === 'cancelada' ? 'selected' : ''}>🔴 Cancelada</option>
          </select>
        </td>
        <td>
          <button type="button" class="btn btn-outline" style="padding: 0.3rem 0.7rem; font-size: 0.78rem; color: #e74c3c;" onclick="deleteBooking(${idx})"><i class="fa-solid fa-xmark"></i> Eliminar</button>
        </td>
      `;
      agendaTableBody.appendChild(tr);
    });
  }

  // Testimonials Admin Table Render
  const filterBtn = document.getElementById('adminTestimonialsFilterBtn');
  if (filterBtn) {
    if (showAllAdminTestimonials) {
      filterBtn.innerHTML = `<i class="fa-solid fa-eye-slash"></i> Ocultar aprobados (Mostrar solo pendientes)`;
      filterBtn.className = 'btn btn-outline';
    } else {
      filterBtn.innerHTML = `<i class="fa-solid fa-eye"></i> Ver todos los testimonios (${testimonials.length})`;
      filterBtn.className = 'btn btn-gold';
    }
  }

  const testimoniosTableBody = document.getElementById('adminTestimoniosTableBody');
  if (testimoniosTableBody) {
    testimoniosTableBody.innerHTML = '';

    const listToRender = testimonials.map((t, idx) => ({ ...t, originalIndex: idx }))
      .filter(t => showAllAdminTestimonials ? true : t.status !== 'aprobado');

    if (listToRender.length === 0) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td colspan="6" style="text-align: center; padding: 1.5rem; color: var(--accent-gold);">
          <i class="fa-solid fa-circle-check" style="font-size: 1.2rem;"></i> ¡Excelente! No hay testimonios pendientes por revisar. Los testimonios aprobados están ocultos de esta vista limpia. Haz clic en <strong>"Ver todos los testimonios"</strong> arriba si deseas ver la lista completa.
        </td>
      `;
      testimoniosTableBody.appendChild(tr);
    } else {
      listToRender.forEach(t => {
        const idx = t.originalIndex;
        const tr = document.createElement('tr');
        const starsHtml = '⭐'.repeat(t.rating || 5);
        
        let statusBadge = '';
        if (t.status === 'aprobado') {
          statusBadge = '<span class="status-pill open-now">🟢 Aprobado (Visible)</span>';
        } else if (t.status === 'rechazado') {
          statusBadge = '<span class="status-pill closed-now">🔴 Oculto</span>';
        } else {
          statusBadge = '<span class="status-pill pendiente" style="background: rgba(241, 196, 15, 0.15); color: #f1c40f; border: 1px solid #f1c40f;">🟡 Pendiente Aprobación</span>';
        }

        tr.innerHTML = `
          <td>
            <strong style="color: var(--accent-gold);">${t.author}</strong><br>
            <small style="color: var(--text-muted);">${t.role || 'Cliente'}</small>
          </td>
          <td><small style="color: var(--accent-gold);">${starsHtml}</small></td>
          <td>
            <strong>"${t.title}"</strong><br>
            <small style="color: var(--text-secondary);">${t.comment}</small>
          </td>
          <td><small style="color: var(--text-muted);">${formatDateDDMM(t.date)}</small></td>
          <td>${statusBadge}</td>
          <td>
            <div style="display: flex; gap: 0.3rem; align-items: center;">
              ${t.status !== 'aprobado' ? `
                <button type="button" class="btn btn-gold" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;" onclick="approveTestimonial(${idx})" title="Aprobar y publicar">
                  <i class="fa-solid fa-check"></i> Aprobar
                </button>
              ` : `
                <button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; color: #f39c12;" onclick="rejectTestimonial(${idx})" title="Ocultar del sitio">
                  <i class="fa-solid fa-eye-slash"></i> Ocultar
                </button>
              `}
              <button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; color: #e74c3c;" onclick="deleteTestimonial(${idx})" title="Eliminar definitivamente">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        `;
        testimoniosTableBody.appendChild(tr);
      });
    }
  }

  // Update header welcome message & current logged-in user badge
  const userLabel = document.getElementById('currentUserNameLabel');
  if (userLabel) {
    userLabel.textContent = currentUser ? currentUser.name : '';
  }
  const welcomeMsg = document.getElementById('adminWelcomeUserMsg');
  if (welcomeMsg) {
    const isSuper = currentUser && (currentUser.role === 'superadmin' || currentUser.username.toLowerCase() === 'frank');
    welcomeMsg.textContent = isSuper
      ? 'Modo Administrador Principal. Tienes acceso total para gestionar trabajadoras, permisos y todos los módulos.'
      : `Conectado como: ${currentUser ? currentUser.name : 'Personal'}. Puedes gestionar únicamente los módulos asignados por el administrador.`;
  }

  // RBAC Filtering for Dashboard Square Stat Cards
  const userPerms = currentUser ? (currentUser.permissions || {}) : {};
  const isSuperUser = currentUser && (currentUser.role === 'superadmin' || currentUser.username.toLowerCase() === 'frank');

  const cardMap = [
    { id: 'cardStatAgenda', perm: 'agenda' },
    { id: 'cardStatRevenue', perm: 'revenue' },
    { id: 'cardStatBenefits', perm: 'benefits' },
    { id: 'cardStatSucursales', perm: 'sucursales' },
    { id: 'cardStatWorkers', perm: 'workers' },
    { id: 'cardStatCategories', perm: 'categories' },
    { id: 'cardStatServices', perm: 'services' },
    { id: 'cardStatCourses', perm: 'courses' },
    { id: 'cardStatGroups', perm: 'requestedGroups' },
    { id: 'cardStatTestimonials', perm: 'testimonials' },
    { id: 'cardStatUserManagement', perm: 'userManagement', superOnly: true }
  ];

  cardMap.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) {
      if (isSuperUser) {
        el.style.display = 'flex';
      } else if (item.superOnly) {
        el.style.display = 'none';
      } else {
        const hasPerm = userPerms[item.perm] === true;
        el.style.display = hasPerm ? 'flex' : 'none';
      }
    }
  });

  // Admin Users & Permissions Table Render (Exclusivo Frank)
  const usersCountEl = document.getElementById('adminTotalUsers');
  if (usersCountEl) usersCountEl.textContent = adminUsers.length;

  const usersTableBody = document.getElementById('adminUsersTableBody');
  if (usersTableBody) {
    usersTableBody.innerHTML = '';
    adminUsers.forEach((u, idx) => {
      const tr = document.createElement('tr');
      const isSuper = u.role === 'superadmin' || u.username.toLowerCase() === 'frank';
      const roleBadge = isSuper
        ? '<span class="status-pill open-now" style="background: rgba(230,194,128,0.15); color: var(--accent-gold); border: 1px solid var(--accent-gold);"><i class="fa-solid fa-crown"></i> Superadministrador</span>'
        : (u.role === 'admin' ? '<span class="status-pill open-now">⭐ Administrador Secundario</span>' : '<span class="status-pill pendiente">👥 Personal / Trabajadora</span>');

      const permLabels = [];
      const p = u.permissions || {};
      if (isSuper) {
        permLabels.push('<span style="color: var(--accent-gold); font-weight:700;">🌐 Acceso Total Absoluto</span>');
      } else {
        if (p.revenue !== false) permLabels.push('📊 Ganancias');
        if (p.agenda !== false) permLabels.push('📅 Agenda');
        if (p.categories !== false) permLabels.push('🏷️ Categorías');
        if (p.services !== false) permLabels.push('✂️ Servicios');
        if (p.courses !== false) permLabels.push('🎓 Cursos');
        if (p.sucursales !== false) permLabels.push('🏢 Sucursales');
        if (p.workers !== false) permLabels.push('👥 Trabajadoras');
        if (p.requestedGroups !== false) permLabels.push('📍 Quórum');
        if (p.benefits !== false) permLabels.push('👑 VIP');
        if (p.testimonials !== false) permLabels.push('💬 Testimonios');
      }

      const permHtml = permLabels.map(l => `<span class="duration-badge" style="font-size: 0.72rem; margin: 0.1rem; display: inline-block;">${l}</span>`).join(' ');

      tr.innerHTML = `
        <td><strong style="color: var(--accent-gold);"><i class="fa-solid fa-user-lock"></i> ${u.username}</strong></td>
        <td><strong>${u.name}</strong></td>
        <td>${roleBadge}</td>
        <td><div style="max-width: 320px; display: flex; flex-wrap: wrap;">${permHtml}</div></td>
        <td>
          <div style="display: flex; gap: 0.4rem;">
            <button type="button" class="btn btn-gold" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;" onclick="openEditUserPermissionsModal(${idx})" title="Editar Permisos">
              <i class="fa-solid fa-user-gear"></i> Permisos
            </button>
            ${!isSuper ? `
              <button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; color: #e74c3c;" onclick="deleteAdminUser(${idx})" title="Eliminar Acceso">
                <i class="fa-solid fa-trash"></i>
              </button>
            ` : ''}
          </div>
        </td>
      `;
      usersTableBody.appendChild(tr);
    });
  }

  // Revenue Section Refresh
  renderRevenueSection();
}

window.updateCategoryField = async function(index, field, inputEl) {
  const cat = categories[index];
  if (!cat) return;

  const rawVal = typeof inputEl === 'object' && inputEl.value !== undefined ? inputEl.value : inputEl;
  const oldVal = (typeof inputEl === 'object' && inputEl.dataset && inputEl.dataset.oldVal !== undefined ? inputEl.dataset.oldVal : cat[field]).trim();
  const newVal = (rawVal || '').trim();

  // Si no se modificó nada, no hacer nada ni mostrar notificaciones
  if (oldVal === newVal) return;

  if (!newVal) {
    await showCustomAlert('El nombre de la categoría no puede estar vacío.', 'Campo Requerido', 'fa-solid fa-triangle-exclamation');
    if (typeof inputEl === 'object') inputEl.value = oldVal;
    renderAdminPanel();
    return;
  }

  cat[field] = newVal;
  if (typeof inputEl === 'object' && inputEl.dataset) inputEl.dataset.oldVal = newVal;

  const saved = await saveState();
  if (saved !== false) {
    showToast(`✨ Categoría actualizada de "${oldVal}" a: "${newVal}".`);
  } else {
    showToast(`⚠️ Error al guardar la categoría "${newVal}".`);
  }
  renderCategoryFilterChips();
  renderServicesGrid(activeCategoryFilter);
};

window.deleteCategory = async function(index) {
  const confirmed = await showCustomConfirm(`¿Deseas eliminar la categoría <strong>"${categories[index].name}"</strong>?`, 'Eliminar Categoría', 'fa-solid fa-trash');
  if (confirmed) {
    categories.splice(index, 1);
    await saveState();
    renderAdminPanel();
    renderCategoryFilterChips();
    renderServicesGrid('all');
  }
};

window.toggleWorkerDay = async function(workerIndex, dayId) {
  const w = workers[workerIndex];
  if (!w) return;
  if (!Array.isArray(w.days)) {
    w.days = [];
  }
  const pos = w.days.indexOf(dayId);
  if (pos > -1) {
    w.days.splice(pos, 1);
  } else {
    w.days.push(dayId);
  }
  const saved = await saveState();
  if (saved !== false) {
    showToast(`📅 Días laborales de "${w.name}" actualizados.`);
  }
};

window.updateBookingStatus = async function(index, newStatus) {
  if (!bookings[index]) return;
  bookings[index].status = newStatus;
  const saved = await saveState();
  if (saved !== false) {
    showToast(`📌 Estatus de cita para ${bookings[index].clientName} actualizado a: ${newStatus.toUpperCase()}.`);
  }
  renderAdminPanel();
};

window.updateBranchField = async function(index, field, inputEl) {
  const s = sucursales[index];
  if (!s) return;

  const rawVal = typeof inputEl === 'object' && inputEl.value !== undefined ? inputEl.value : inputEl;
  const oldVal = (typeof inputEl === 'object' && inputEl.dataset && inputEl.dataset.oldVal !== undefined ? inputEl.dataset.oldVal : (s[field] || '')).trim();
  const newVal = (rawVal || '').trim();

  // Si no se modificó nada, no hacer nada ni mostrar notificaciones
  if (oldVal === newVal) return;

  let label = field;
  if (field === 'name') label = 'Nombre';
  else if (field === 'address') label = 'Domicilio';
  else if (field === 'coords') label = 'Coordenadas GPS';
  else if (field === 'openTime') label = 'Hora de Apertura';
  else if (field === 'closeTime') label = 'Hora de Cierre';

  if (!newVal && field !== 'coords') {
    await showCustomAlert(`El campo ${label} de la sucursal no puede estar vacío.`, 'Campo Requerido', 'fa-solid fa-triangle-exclamation');
    if (typeof inputEl === 'object') inputEl.value = oldVal;
    renderAdminPanel();
    return;
  }

  s[field] = newVal;
  if (field === 'coords') {
    const parsed = parseCoordsString(newVal);
    if (parsed) {
      s.lat = parsed[0];
      s.lng = parsed[1];
    } else {
      delete s.lat;
      delete s.lng;
    }
  }
  if (typeof inputEl === 'object' && inputEl.dataset) inputEl.dataset.oldVal = newVal;

  const saved = await saveState();
  if (saved !== false) {
    showToast(`🏢 ${label} de "${s.name}" cambiado a: "${newVal}".`);
  } else {
    showToast(`⚠️ Error al actualizar sucursal "${s.name}".`);
  }
  populateBranchSelectOptions();
  renderAdminPanel();
  updateHidalgoMapMarkers();
};

window.updateWorkerField = async function(index, field, inputEl) {
  const w = workers[index];
  if (!w) return;

  const rawVal = typeof inputEl === 'object' && inputEl.value !== undefined ? inputEl.value : inputEl;
  const oldVal = (typeof inputEl === 'object' && inputEl.dataset && inputEl.dataset.oldVal !== undefined ? inputEl.dataset.oldVal : (w[field] || '')).trim();
  const newVal = (rawVal || '').trim();

  // Si no se modificó nada, no hacer nada ni mostrar notificaciones
  if (oldVal === newVal) return;

  let label = field;
  if (field === 'name') label = 'Nombre';
  else if (field === 'startTime') label = 'Hora de Entrada';
  else if (field === 'endTime') label = 'Hora de Salida';

  if (!newVal) {
    await showCustomAlert(`El campo ${label} de la trabajadora no puede estar vacío.`, 'Campo Requerido', 'fa-solid fa-triangle-exclamation');
    if (typeof inputEl === 'object') inputEl.value = oldVal;
    renderAdminPanel();
    return;
  }

  w[field] = newVal;
  if (typeof inputEl === 'object' && inputEl.dataset) inputEl.dataset.oldVal = newVal;

  const saved = await saveState();
  if (saved !== false) {
    showToast(`👥 ${label} de "${w.name}" cambiado a: "${newVal}".`);
  } else {
    showToast(`⚠️ Error al actualizar trabajadora "${w.name}".`);
  }
  renderAdminPanel();
};

window.toggleSucursalStatus = async function(index) {
  if (!sucursales[index]) return;
  sucursales[index].status = sucursales[index].status === 'operativa' ? 'inactiva' : 'operativa';
  await saveState();
  renderAdminPanel();
  populateBranchSelectOptions();
  updateHidalgoMapMarkers();
  showToast(`Estatus de "${sucursales[index].name}" cambiado a: ${sucursales[index].status.toUpperCase()}.`);
};

window.toggleServiceVisibility = async function(index) {
  if (!services[index]) return;
  services[index].visible = !services[index].visible;
  await saveState();
  renderAdminPanel();
  renderServicesGrid(activeCategoryFilter);
  showToast(`Estatus de "${services[index].name}" actualizado a: ${services[index].visible ? 'Visible en sitio' : 'Oculto'}.`);
};

window.toggleWorkerAssignment = async function(serviceIndex, workerId) {
  if (!services[serviceIndex]) return;
  if (!services[serviceIndex].assignedWorkerIds) {
    services[serviceIndex].assignedWorkerIds = [];
  }
  const pos = services[serviceIndex].assignedWorkerIds.indexOf(workerId);
  if (pos > -1) {
    services[serviceIndex].assignedWorkerIds.splice(pos, 1);
  } else {
    services[serviceIndex].assignedWorkerIds.push(workerId);
  }
  await saveState();
  renderAdminPanel();
  showToast(`👥 Asignación de personal para "${services[serviceIndex].name}" actualizada.`);
};

window.toggleWorkerStatus = async function(index) {
  if (!workers[index]) return;
  workers[index].status = workers[index].status === 'activa' ? 'inactiva' : 'activa';
  await saveState();
  renderAdminPanel();
  showToast(`Trabajadora "${workers[index].name}" ahora está: ${workers[index].status.toUpperCase()}.`);
};

window.updateServicePrice = async function(index, inputEl) {
  const s = services[index];
  if (!s) return;

  const rawVal = typeof inputEl === 'object' && inputEl.value !== undefined ? inputEl.value : inputEl;
  const priceNum = parseFloat(rawVal);

  if (isNaN(priceNum) || priceNum < 0) {
    await showCustomAlert('Por favor ingresa un precio válido.', 'Precio Inválido', 'fa-solid fa-triangle-exclamation');
    if (typeof inputEl === 'object') inputEl.value = s.price;
    renderAdminPanel();
    return;
  }

  const oldVal = typeof inputEl === 'object' && inputEl.dataset && inputEl.dataset.oldVal !== undefined ? parseFloat(inputEl.dataset.oldVal) : s.price;

  // Si no se modificó el precio, no hacer nada ni mostrar notificaciones
  if (oldVal === priceNum) return;

  s.price = priceNum;
  if (typeof inputEl === 'object' && inputEl.dataset) inputEl.dataset.oldVal = priceNum;

  const saved = await saveState();
  if (saved !== false) {
    showToast(`💲 Precio de "${s.name}" modificado a $${priceNum.toLocaleString('es-MX')} MXN.`);
  }
  renderServicesGrid(activeCategoryFilter);
};

window.updateServiceDuration = async function(index, inputEl) {
  const s = services[index];
  if (!s) return;

  const rawVal = typeof inputEl === 'object' && inputEl.value !== undefined ? inputEl.value : inputEl;
  const durNum = parseInt(rawVal);

  if (isNaN(durNum) || durNum <= 0) {
    await showCustomAlert('Por favor ingresa una duración válida en minutos.', 'Duración Inválida', 'fa-solid fa-triangle-exclamation');
    if (typeof inputEl === 'object') inputEl.value = s.duration;
    renderAdminPanel();
    return;
  }

  const oldVal = typeof inputEl === 'object' && inputEl.dataset && inputEl.dataset.oldVal !== undefined ? parseInt(inputEl.dataset.oldVal) : s.duration;

  // Si no se modificó la duración, no hacer nada ni mostrar notificaciones
  if (oldVal === durNum) return;

  s.duration = durNum;
  if (typeof inputEl === 'object' && inputEl.dataset) inputEl.dataset.oldVal = durNum;

  const saved = await saveState();
  if (saved !== false) {
    showToast(`⏱️ Duración de "${s.name}" modificada a ${durNum} min.`);
  }
};

window.deleteSucursal = async function(index) {
  const confirmed = await showCustomConfirm(`¿Deseas eliminar la sucursal <strong>"${sucursales[index].name}"</strong>?`, 'Eliminar Sucursal', 'fa-solid fa-trash');
  if (confirmed) {
    sucursales.splice(index, 1);
    await saveState();
    renderAdminPanel();
    updateHidalgoMapMarkers();
  }
};

window.deleteWorker = async function(index) {
  const confirmed = await showCustomConfirm(`¿Deseas eliminar a la trabajadora <strong>"${workers[index].name}"</strong>?`, 'Eliminar Trabajadora', 'fa-solid fa-user-xmark');
  if (confirmed) {
    workers.splice(index, 1);
    await saveState();
    renderAdminPanel();
  }
};

window.deleteService = async function(index) {
  const confirmed = await showCustomConfirm(`¿Deseas eliminar el servicio <strong>"${services[index].name}"</strong>?`, 'Eliminar Servicio', 'fa-solid fa-trash');
  if (confirmed) {
    services.splice(index, 1);
    await saveState();
    renderAdminPanel();
    renderServicesGrid(activeCategoryFilter);
  }
};

window.deleteBooking = async function(index) {
  const confirmed = await showCustomConfirm('¿Deseas eliminar esta cita de la agenda? El horario será liberado en el sistema.', 'Eliminar Cita de Agenda', 'fa-solid fa-calendar-xmark');
  if (confirmed) {
    bookings.splice(index, 1);
    await saveState();
    renderAdminPanel();
    showToast('Cita eliminada y horario liberado en la agenda.');
  }
};

function isStoreOpen(openStr, closeStr) {
  const now = new Date();
  const currentMin = now.getHours() * 60 + now.getMinutes();
  const openMin = timeToMinutes(openStr || '10:00');
  const closeMin = timeToMinutes(closeStr || '19:00');
  return (currentMin >= openMin && currentMin < closeMin);
}

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
  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }
}

window.openAdminPanel = function() {
  window.location.href = 'general.html';
};

window.closeAdminPanel = function() {
  if (window.location.pathname.toLowerCase().includes('general.html')) {
    window.location.href = 'index.html';
  } else {
    const inicioSec = document.getElementById('experiencia');
    if (inicioSec) {
      inicioSec.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};

// INITIALIZATION LOGIC BASED ON ACTIVE PAGE (index.html vs general.html)
window.addEventListener('DOMContentLoaded', async () => {
  await syncFromCentralDatabase();

  const isGeneralPage = window.location.pathname.toLowerCase().includes('general.html');

  if (isGeneralPage) {
    const isLogged = await checkActiveSession();
    if (!isLogged) {
      openAdminLoginModal();
    } else {
      renderAdminPanel();
    }

    if (window.location.search.includes('register=worker') || window.location.hash === '#registro-personal') {
      setTimeout(() => {
        openWorkerSelfRegistrationModal();
      }, 400);
    }
  } else {
    // Public Client Page (index.html)
    renderCategoryFilterChips();
    renderServicesGrid(activeCategoryFilter);
    renderCoursesGrid();
    renderTestimonialsPublic();
    renderActiveGroupsList();
    initHidalgoMap();

    if (window.location.search.includes('register=worker') || window.location.hash === '#registro-personal') {
      window.location.href = 'general.html?register=worker';
    }
  }
});


  // 1. Deshabilitar el clic derecho
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // 2. Deshabilitar atajos de teclado para copiar, cortar, guardar e inspeccionar
  document.addEventListener("keydown", function (e) {
    // Detecta Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+S, Ctrl+U (Ver código fuente)
    if (
      e.ctrlKey && 
      (e.key === 'c' || e.key === 'C' || 
       e.key === 'x' || e.key === 'X' || 
       e.key === 's' || e.key === 'S' || 
       e.key === 'u' || e.key === 'U')
    ) {
      e.preventDefault();
      alert("Acción prihibida en este sitio."); // Opcional: elimina esta línea si no quieres mostrar alerta
    }

    // Bloquear tecla F12 (Herramientas de desarrollo)
    if (e.key === "F12") {
      e.preventDefault();
    }

    // Bloquear Ctrl + Shift + I / J / C (Inspeccionar consola)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
      e.preventDefault();
    }
  });

  // 3. Deshabilitar el evento de copiado directamente
  document.addEventListener("copy", function (e) {
    e.preventDefault();
    alert("El copiado de contenido está prohibido."); // Opcional
  });
