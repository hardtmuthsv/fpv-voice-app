const FPV_COMMANDS = [
  {
    id: "arm",
    buttonLabel: "ARM",
    speechUk: "",
    translations: {},
    x: 36,
    y: 55,
    width: 92,
    height: 118,
    className: "top",
    speechKey: "arm"
  },
  {
    id: "disarm",
    buttonLabel: "DISARM",
    speechUk: "",
    translations: {},
    x: 143,
    y: 55,
    width: 132,
    height: 118,
    className: "top",
    speechKey: "disarm"
  },
  {
    id: "vtx_power",
    buttonLabel: "ПОТУЖНІСТЬ\nVTX",
    speechUk: "",
    translations: {},
    x: 296,
    y: 55,
    width: 215,
    height: 118,
    className: "top",
    speechKey: "vtxPower"
  },
  {
    id: "battery",
    buttonLabel: "БАТАРЕЯ",
    speechUk: "",
    translations: {},
    x: 528,
    y: 55,
    width: 192,
    height: 118,
    className: "top",
    speechKey: "battery"
  },
  {
    id: "camera_0",
    buttonLabel: "КАМЕРА 0",
    speechUk: "",
    translations: {},
    x: 735,
    y: 55,
    width: 190,
    height: 118,
    className: "top",
    speechKey: "camera0"
  },
  {
    id: "camera_45",
    buttonLabel: "КАМЕРА 45",
    speechUk: "",
    translations: {},
    x: 938,
    y: 55,
    width: 187,
    height: 118,
    className: "top",
    speechKey: "camera45"
  },
  {
    id: "camera_90",
    buttonLabel: "КАМЕРА 90",
    speechUk: "",
    translations: {},
    x: 1140,
    y: 55,
    width: 188,
    height: 118,
    className: "top",
    speechKey: "camera90"
  },
  {
    id: "control_invert",
    buttonLabel: "ІНВЕРСІЯ\nКЕРУВАННЯ",
    speechUk: "",
    translations: {},
    x: 1345,
    y: 55,
    width: 245,
    height: 118,
    className: "top",
    speechKey: "controlInvert"
  },
  {
    id: "falling_throttle_up",
    buttonLabel: "МИ ПАДАЄМО\nДАЙ ГАЗ ВГОРУ",
    speechUk: "",
    translations: {},
    x: 36,
    y: 213,
    width: 246,
    height: 116,
    className: "red",
    speechKey: "fallingThrottleUp"
  },
  {
    id: "shaking_throttle_up",
    buttonLabel: "ДРОН ТРЯСЕ\nTHROTTLE ВГОРУ",
    speechUk: "",
    translations: {},
    x: 36,
    y: 346,
    width: 246,
    height: 116,
    className: "red",
    speechKey: "shakingThrottleUp"
  },
  {
    id: "throttle_up_large",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 313,
    y: 213,
    width: 137,
    height: 66,
    className: "red",
    speechKey: "throttleUpLarge"
  },
  {
    id: "throttle_up_medium",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 313,
    y: 303,
    width: 137,
    height: 66,
    className: "red2",
    speechKey: "throttleUpMedium"
  },
  {
    id: "throttle_up_small",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 313,
    y: 392,
    width: 137,
    height: 66,
    className: "red3",
    speechKey: "throttleUpSmall"
  },
  {
    id: "throttle_90",
    buttonLabel: "THROTTLE\n90",
    speechUk: "",
    translations: {},
    x: 473,
    y: 213,
    width: 246,
    height: 116,
    className: "red",
    speechKey: "throttle90"
  },
  {
    id: "throttle_60",
    buttonLabel: "THROTTLE\n60",
    speechUk: "",
    translations: {},
    x: 473,
    y: 342,
    width: 246,
    height: 116,
    className: "red2",
    speechKey: "throttle60"
  },
  {
    id: "throttle_down_small",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 313,
    y: 635,
    width: 137,
    height: 66,
    className: "red3",
    speechKey: "throttleDownSmall"
  },
  {
    id: "throttle_down_medium",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 313,
    y: 724,
    width: 137,
    height: 66,
    className: "gray",
    speechKey: "throttleDownMedium"
  },
  {
    id: "throttle_down_large",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 313,
    y: 814,
    width: 137,
    height: 66,
    className: "white",
    speechKey: "throttleDownLarge"
  },
  {
    id: "throttle_down_slow",
    buttonLabel: "ПОВІЛЬНО ВНИЗ\nTHROTTLE",
    speechUk: "",
    translations: {},
    x: 473,
    y: 768,
    width: 246,
    height: 116,
    className: "gray",
    speechKey: "throttleDownSlow"
  },
  {
    id: "throttle_low",
    buttonLabel: "МАЛО\nTHROTTLE",
    speechUk: "",
    translations: {},
    x: 747,
    y: 213,
    width: 132,
    height: 116,
    className: "gray",
    speechKey: "throttleLow"
  },
  {
    id: "throttle_high",
    buttonLabel: "БАГАТО\nTHROTTLE",
    speechUk: "",
    translations: {},
    x: 747,
    y: 346,
    width: 132,
    height: 116,
    className: "gray",
    speechKey: "throttleHigh"
  },
  {
    id: "yaw_left_large",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 36,
    y: 478,
    width: 68,
    height: 136,
    className: "blue",
    speechKey: "yawLeftLarge"
  },
  {
    id: "yaw_left_medium",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 127,
    y: 478,
    width: 68,
    height: 136,
    className: "blue2",
    speechKey: "yawLeftMedium"
  },
  {
    id: "yaw_left_small",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 218,
    y: 478,
    width: 68,
    height: 136,
    className: "blue3",
    speechKey: "yawLeftSmall"
  },
  {
    id: "turn_left",
    buttonLabel: "ПОВЕРТАЄМО\nЛІВОРУЧ",
    speechUk: "",
    translations: {},
    x: 36,
    y: 635,
    width: 247,
    height: 116,
    className: "blue2",
    speechKey: "turnLeft"
  },
  {
    id: "yaw_right_small",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 473,
    y: 478,
    width: 68,
    height: 136,
    className: "blue3",
    speechKey: "yawRightSmall"
  },
  {
    id: "yaw_right_medium",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 563,
    y: 478,
    width: 68,
    height: 136,
    className: "blue2",
    speechKey: "yawRightMedium"
  },
  {
    id: "yaw_right_large",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 653,
    y: 478,
    width: 68,
    height: 136,
    className: "blue",
    speechKey: "yawRightLarge"
  },
  {
    id: "turn_right",
    buttonLabel: "ПОВЕРТАЄМО\nПРАВОРУЧ",
    speechUk: "",
    translations: {},
    x: 473,
    y: 635,
    width: 247,
    height: 116,
    className: "blue2",
    speechKey: "turnRight"
  },
  {
    id: "dont_climb_fast",
    buttonLabel: "НЕ НАБИРАЙ\nШВИДКО ВИСОТУ",
    speechUk: "",
    translations: {},
    x: 36,
    y: 768,
    width: 246,
    height: 116,
    className: "gray",
    speechKey: "dontClimbFast"
  },
  {
    id: "altitude_500",
    buttonLabel: "ВИСОТА\n500",
    speechUk: "",
    translations: {},
    x: 747,
    y: 489,
    width: 132,
    height: 116,
    className: "gray",
    speechKey: "alt500"
  },
  {
    id: "altitude_300",
    buttonLabel: "ВИСОТА\n300",
    speechUk: "",
    translations: {},
    x: 747,
    y: 635,
    width: 132,
    height: 116,
    className: "gray",
    speechKey: "alt300"
  },
  {
    id: "altitude_200",
    buttonLabel: "ВИСОТА\n200",
    speechUk: "",
    translations: {},
    x: 747,
    y: 768,
    width: 132,
    height: 116,
    className: "gray",
    speechKey: "alt200"
  },
  {
    id: "hold_altitude",
    buttonLabel: "ТРИМАЙ ВИСОТУ",
    speechUk: "",
    translations: {},
    x: 908,
    y: 213,
    width: 246,
    height: 116,
    className: "green2",
    speechKey: "holdAltitude"
  },
  {
    id: "dont_fly_backwards",
    buttonLabel: "НЕ ЛІТАЙ ЗАДОМ",
    speechUk: "",
    translations: {},
    x: 908,
    y: 342,
    width: 246,
    height: 116,
    className: "green2",
    speechKey: "dontFlyBackwards"
  },
  {
    id: "level_horizon",
    buttonLabel: "ВИРІВНЯЙ\nГОРИЗОНТ",
    speechUk: "",
    translations: {},
    x: 908,
    y: 635,
    width: 246,
    height: 116,
    className: "yellow2",
    speechKey: "levelHorizon"
  },
  {
    id: "raise_nose",
    buttonLabel: "ПІДНІМИ НІС\nДРОНА",
    speechUk: "",
    translations: {},
    x: 908,
    y: 768,
    width: 246,
    height: 116,
    className: "green2",
    speechKey: "raiseNose"
  },
  {
    id: "pitch_up_large",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 1185,
    y: 213,
    width: 137,
    height: 66,
    className: "green",
    speechKey: "pitchUpLarge"
  },
  {
    id: "pitch_up_medium",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 1185,
    y: 303,
    width: 137,
    height: 66,
    className: "green2",
    speechKey: "pitchUpMedium"
  },
  {
    id: "pitch_up_small",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 1185,
    y: 392,
    width: 137,
    height: 66,
    className: "green3",
    speechKey: "pitchUpSmall"
  },
  {
    id: "pitch_down_small",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 1185,
    y: 635,
    width: 137,
    height: 66,
    className: "green3",
    speechKey: "pitchDownSmall"
  },
  {
    id: "pitch_down_medium",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 1185,
    y: 724,
    width: 137,
    height: 66,
    className: "green2",
    speechKey: "pitchDownMedium"
  },
  {
    id: "pitch_down_large",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 1185,
    y: 814,
    width: 137,
    height: 66,
    className: "green",
    speechKey: "pitchDownLarge"
  },
  {
    id: "fly_forward",
    buttonLabel: "ТРЕБА\nЛЕТІТИ ВПЕРЕД",
    speechUk: "",
    translations: {},
    x: 1342,
    y: 213,
    width: 247,
    height: 116,
    className: "gray",
    speechKey: "flyForward"
  },
  {
    id: "pitch_forward",
    buttonLabel: "PITCH\nВПЕРЕД",
    speechUk: "",
    translations: {},
    x: 1342,
    y: 342,
    width: 247,
    height: 116,
    className: "green2",
    speechKey: "pitchForward"
  },
  {
    id: "roll_right_small",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 1342,
    y: 478,
    width: 68,
    height: 136,
    className: "yellow3",
    speechKey: "rollRightSmall"
  },
  {
    id: "roll_right_medium",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 1432,
    y: 478,
    width: 68,
    height: 136,
    className: "yellow2",
    speechKey: "rollRightMedium"
  },
  {
    id: "roll_right_large",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 1523,
    y: 478,
    width: 68,
    height: 136,
    className: "yellow",
    speechKey: "rollRightLarge"
  },
  {
    id: "drone_tilted",
    buttonLabel: "ДРОН НАХИЛЕНИЙ",
    speechUk: "",
    translations: {},
    x: 1342,
    y: 635,
    width: 247,
    height: 116,
    className: "gray",
    speechKey: "droneTilted"
  },
  {
    id: "pitch_back",
    buttonLabel: "PITCH\nНАЗАД",
    speechUk: "",
    translations: {},
    x: 1342,
    y: 768,
    width: 247,
    height: 116,
    className: "green2",
    speechKey: "pitchBack"
  },
  {
    id: "roll_left_large",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 908,
    y: 478,
    width: 68,
    height: 136,
    className: "yellow",
    speechKey: "rollLeftLarge"
  },
  {
    id: "roll_left_medium",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 998,
    y: 478,
    width: 68,
    height: 136,
    className: "yellow2",
    speechKey: "rollLeftMedium"
  },
  {
    id: "roll_left_small",
    buttonLabel: "",
    speechUk: "",
    translations: {},
    x: 1088,
    y: 478,
    width: 68,
    height: 136,
    className: "yellow3",
    speechKey: "rollLeftSmall"
  }
];

const LANGUAGES = [
  ['uk-UA','Українська'],['en-US','English'],['es-ES','Español'],['fr-FR','Français'],
  ['de-DE','Deutsch'],['it-IT','Italiano'],['pt-PT','Português'],['nl-NL','Nederlands'],
  ['pl-PL','Polski'],['cs-CZ','Čeština'],['sk-SK','Slovenčina'],['sl-SI','Slovenščina'],
  ['hr-HR','Hrvatski'],['sr-RS','Српски'],['bs-BA','Bosanski'],['ro-RO','Română'],
  ['hu-HU','Magyar'],['et-EE','Eesti'],['lv-LV','Latviešu'],['lt-LT','Lietuvių'],
  ['fi-FI','Suomi'],['sv-SE','Svenska'],['nb-NO','Norsk'],['da-DK','Dansk'],
  ['is-IS','Íslenska'],['el-GR','Ελληνικά'],['tr-TR','Türkçe'],['ko-KR','한국어']
];

// FPV control terms stay in English in every spoken language.
const PROTECTED_TERMS = {
  yaw:'Yaw',
  roll:'Roll',
  pitch:'Pitch',
  throttle:'Throttle',
  arm:'Arm',
  disarm:'Disarm',
  vtx:'VTX',
  rssi:'RSSI',
  gps:'GPS',
  osd:'OSD',
  elrs:'ELRS'
};

const PROTECTED_ALIASES = {
  throttle:[
    'Throttle','газ','гас','gas','gaz','gass','gaas','gāze','gazas','kaasu','gjof','gjöf',
    'gases','acelerador','plyn','plin','aumenta o acelerador','acelerador para cima',
    'Γκάζι','γκάζι','스로틀'
  ],
  yaw:['Yaw','Рискання','Lacet','Gier','Guinada','Јо','요'],
  roll:['Roll','Крен','Roulis','Рол','롤'],
  pitch:['Pitch','Тангаж','Nick','Пич','피치'],
  arm:[
    'Arm','Арм','Armar','Armer','Scharf schalten','Arma','Armen','Uzbrój','Zapnout arm',
    'Zapni arm','Vklopi arm','Uključi arm','Armează','Élesítés','Armi','Ieslēdz arm',
    'Įjungti arm','Armaa','Arma','Virkja','Όπλιση','Arm et','시동'
  ],
  disarm:[
    'Disarm','Дизарм','Desarmar','Désarmer','Entschärfen','Disarma','Ontwapenen','Rozbrój',
    'Vypnout arm','Vypni arm','Izklopi arm','Isključi arm','Dezarmează','Hatástalanítás',
    'Disarmi','Izslēdz arm','Išjungti arm','Disarmaa','Avväpna','Afvirkja','Αφοπλισμός',
    'Disarm et','시동 해제'
  ],
  vtx:['VTX'],
  rssi:['RSSI'],
  gps:['GPS'],
  osd:['OSD'],
  elrs:['ELRS']
};

const TERMS = {
  'uk-UA':{throttle:'Газ',yaw:'Рискання',pitch:'Тангаж',roll:'Крен',up:'вгору',down:'вниз',left:'ліворуч',right:'праворуч',forward:'вперед',back:'назад',large:'сильно',medium:'середньо',small:'трохи',low:'мало газу',high:'багато газу',slow:'повільно',arm:'Арм.',disarm:'Дизарм.',vtxPower:'Потужність VTX.',battery:'Батарея.',camera:'Камера',controlInvert:'Інверсія керування.',fallingThrottleUp:'Ми падаємо. Дай газ вгору.',shakingThrottleUp:'Дрон трясе. Газ вгору.',turnLeft:'Повертаємо ліворуч.',turnRight:'Повертаємо праворуч.',dontClimbFast:'Не набирай швидко висоту.',holdAltitude:'Тримай висоту.',dontFlyBackwards:'Не літай задом.',levelHorizon:'Вирівняй горизонт.',raiseNose:'Підніми ніс дрона.',flyForward:'Треба летіти вперед.',droneTilted:'Дрон нахилений.',altitude:'Висота'},
  'en-US':{throttle:'Throttle',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'up',down:'down',left:'left',right:'right',forward:'forward',back:'back',large:'large',medium:'medium',small:'small',low:'Low throttle',high:'High throttle',slow:'slow',arm:'Arm.',disarm:'Disarm.',vtxPower:'VTX power.',battery:'Battery.',camera:'Camera',controlInvert:'Control inversion.',fallingThrottleUp:'We are falling. Throttle up.',shakingThrottleUp:'The drone is shaking. Throttle up.',turnLeft:'Turn left.',turnRight:'Turn right.',dontClimbFast:'Do not climb too fast.',holdAltitude:'Hold altitude.',dontFlyBackwards:'Do not fly backward.',levelHorizon:'Level the horizon.',raiseNose:'Raise the drone nose.',flyForward:'Fly forward.',droneTilted:'The drone is tilted.',altitude:'Altitude'},
  'es-ES':{throttle:'Throttle',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'arriba',down:'abajo',left:'izquierda',right:'derecha',forward:'adelante',back:'atrás',large:'grande',medium:'mediano',small:'pequeño',low:'Poco throttle',high:'Mucho throttle',slow:'despacio',arm:'Armar.',disarm:'Desarmar.',vtxPower:'Potencia VTX.',battery:'Batería.',camera:'Cámara',controlInvert:'Inversión de control.',fallingThrottleUp:'Estamos cayendo. Throttle más fuerte.',shakingThrottleUp:'El drone tiembla. Throttle arriba.',turnLeft:'Giramos a la izquierda.',turnRight:'Giramos a la derecha.',dontClimbFast:'No subas muy rápido.',holdAltitude:'Mantén la altura.',dontFlyBackwards:'No vueles hacia atrás.',levelHorizon:'Nivela el horizonte.',raiseNose:'Sube la nariz del drone.',flyForward:'Hay que volar hacia adelante.',droneTilted:'El drone está inclinado.',altitude:'Altura'},
  'fr-FR':{throttle:'Gaz',yaw:'Lacet',pitch:'Tangage',roll:'Roulis',up:'haut',down:'bas',left:'gauche',right:'droite',forward:'avant',back:'arrière',large:'grand',medium:'moyen',small:'petit',low:'Peu de gaz',high:'Trop de gaz',slow:'lentement',arm:'Armer.',disarm:'Désarmer.',vtxPower:'Puissance VTX.',battery:'Batterie.',camera:'Caméra',controlInvert:'Inversion des commandes.',fallingThrottleUp:'Nous tombons. Monte les gaz.',shakingThrottleUp:'Le drone tremble. Monte les gaz.',turnLeft:'Tourne à gauche.',turnRight:'Tourne à droite.',dontClimbFast:'Ne monte pas trop vite.',holdAltitude:'Garde l altitude.',dontFlyBackwards:'Ne vole pas en arrière.',levelHorizon:'Mets l horizon à plat.',raiseNose:'Lève le nez du drone.',flyForward:'Il faut voler vers l avant.',droneTilted:'Le drone est incliné.',altitude:'Altitude'},
  'de-DE':{throttle:'Gas',yaw:'Gier',pitch:'Nick',roll:'Roll',up:'hoch',down:'runter',left:'links',right:'rechts',forward:'vorwärts',back:'zurück',large:'groß',medium:'mittel',small:'klein',low:'Wenig Gas',high:'Viel Gas',slow:'langsam',arm:'Scharf schalten.',disarm:'Entschärfen.',vtxPower:'VTX Leistung.',battery:'Batterie.',camera:'Kamera',controlInvert:'Steuerung invertieren.',fallingThrottleUp:'Wir fallen. Mehr Gas.',shakingThrottleUp:'Die Drohne wackelt. Gas hoch.',turnLeft:'Nach links drehen.',turnRight:'Nach rechts drehen.',dontClimbFast:'Nicht zu schnell steigen.',holdAltitude:'Höhe halten.',dontFlyBackwards:'Nicht rückwärts fliegen.',levelHorizon:'Horizont ausrichten.',raiseNose:'Nase der Drohne anheben.',flyForward:'Vorwärts fliegen.',droneTilted:'Die Drohne ist geneigt.',altitude:'Höhe'},
  'it-IT':{throttle:'Gas',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'su',down:'giu',left:'sinistra',right:'destra',forward:'avanti',back:'indietro',large:'grande',medium:'medio',small:'piccolo',low:'Poco gas',high:'Molto gas',slow:'lentamente',arm:'Arma.',disarm:'Disarma.',vtxPower:'Potenza VTX.',battery:'Batteria.',camera:'Camera',controlInvert:'Inversione dei comandi.',fallingThrottleUp:'Stiamo cadendo. Dai gas.',shakingThrottleUp:'Il drone vibra. Gas su.',turnLeft:'Gira a sinistra.',turnRight:'Gira a destra.',dontClimbFast:'Non salire troppo in fretta.',holdAltitude:'Mantieni quota.',dontFlyBackwards:'Non volare all indietro.',levelHorizon:'Livella l orizzonte.',raiseNose:'Alza il muso del drone.',flyForward:'Bisogna volare avanti.',droneTilted:'Il drone è inclinato.',altitude:'Quota'},
  'pt-PT':{throttle:'Acelerador',yaw:'Guinada',pitch:'Pitch',roll:'Roll',up:'para cima',down:'para baixo',left:'esquerda',right:'direita',forward:'para a frente',back:'para trás',large:'grande',medium:'médio',small:'pequeno',low:'Pouco acelerador',high:'Muito acelerador',slow:'devagar',arm:'Armar.',disarm:'Desarmar.',vtxPower:'Potência VTX.',battery:'Bateria.',camera:'Câmara',controlInvert:'Inversão de controlo.',fallingThrottleUp:'Estamos a cair. Aumenta o acelerador.',shakingThrottleUp:'O drone treme. Acelerador para cima.',turnLeft:'Vira à esquerda.',turnRight:'Vira à direita.',dontClimbFast:'Não ganhes altura muito rápido.',holdAltitude:'Mantém a altitude.',dontFlyBackwards:'Não voes para trás.',levelHorizon:'Nivela o horizonte.',raiseNose:'Levanta o nariz do drone.',flyForward:'É preciso voar para a frente.',droneTilted:'O drone está inclinado.',altitude:'Altitude'},
  'nl-NL':{throttle:'Gas',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'omhoog',down:'omlaag',left:'links',right:'rechts',forward:'vooruit',back:'achteruit',large:'groot',medium:'middel',small:'klein',low:'Weinig gas',high:'Veel gas',slow:'langzaam',arm:'Armen.',disarm:'Ontwapenen.',vtxPower:'VTX vermogen.',battery:'Batterij.',camera:'Camera',controlInvert:'Besturing omkeren.',fallingThrottleUp:'We vallen. Geef meer gas.',shakingThrottleUp:'De drone trilt. Gas omhoog.',turnLeft:'Draai links.',turnRight:'Draai rechts.',dontClimbFast:'Stijg niet te snel.',holdAltitude:'Houd hoogte.',dontFlyBackwards:'Vlieg niet achteruit.',levelHorizon:'Zet de horizon recht.',raiseNose:'Til de neus van de drone op.',flyForward:'Vlieg vooruit.',droneTilted:'De drone hangt scheef.',altitude:'Hoogte'},
  'pl-PL':{throttle:'Gaz',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'w górę',down:'w dół',left:'w lewo',right:'w prawo',forward:'do przodu',back:'do tyłu',large:'dużo',medium:'średnio',small:'mało',low:'Mało gazu',high:'Dużo gazu',slow:'powoli',arm:'Uzbrój.',disarm:'Rozbrój.',vtxPower:'Moc VTX.',battery:'Bateria.',camera:'Kamera',controlInvert:'Odwrócenie sterowania.',fallingThrottleUp:'Spadamy. Dodaj gazu.',shakingThrottleUp:'Dron drży. Gaz w górę.',turnLeft:'Skręcamy w lewo.',turnRight:'Skręcamy w prawo.',dontClimbFast:'Nie nabieraj szybko wysokości.',holdAltitude:'Trzymaj wysokość.',dontFlyBackwards:'Nie leć tyłem.',levelHorizon:'Wyrównaj horyzont.',raiseNose:'Podnieś nos drona.',flyForward:'Trzeba lecieć do przodu.',droneTilted:'Dron jest przechylony.',altitude:'Wysokość'},
  'cs-CZ':{throttle:'Plyn',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'nahoru',down:'dolů',left:'doleva',right:'doprava',forward:'dopředu',back:'dozadu',large:'hodně',medium:'středně',small:'málo',low:'Málo plynu',high:'Hodně plynu',slow:'pomalu',arm:'Zapnout arm.',disarm:'Vypnout arm.',vtxPower:'Výkon VTX.',battery:'Baterie.',camera:'Kamera',controlInvert:'Inverze řízení.',fallingThrottleUp:'Padáme. Přidej plyn.',shakingThrottleUp:'Dron se třese. Plyn nahoru.',turnLeft:'Otáčíme doleva.',turnRight:'Otáčíme doprava.',dontClimbFast:'Nestoupej moc rychle.',holdAltitude:'Drž výšku.',dontFlyBackwards:'Nelétej dozadu.',levelHorizon:'Srovnej horizont.',raiseNose:'Zvedni nos dronu.',flyForward:'Je třeba letět dopředu.',droneTilted:'Dron je nakloněný.',altitude:'Výška'},
  'sk-SK':{throttle:'Plyn',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'hore',down:'dole',left:'doľava',right:'doprava',forward:'dopredu',back:'dozadu',large:'veľa',medium:'stredne',small:'málo',low:'Málo plynu',high:'Veľa plynu',slow:'pomaly',arm:'Zapni arm.',disarm:'Vypni arm.',vtxPower:'Výkon VTX.',battery:'Batéria.',camera:'Kamera',controlInvert:'Inverzia riadenia.',fallingThrottleUp:'Padáme. Pridaj plyn.',shakingThrottleUp:'Dron sa trasie. Plyn hore.',turnLeft:'Otáčame doľava.',turnRight:'Otáčame doprava.',dontClimbFast:'Nestúpaj príliš rýchlo.',holdAltitude:'Drž výšku.',dontFlyBackwards:'Neleť dozadu.',levelHorizon:'Vyrovnaj horizont.',raiseNose:'Zdvihni nos dronu.',flyForward:'Treba letieť dopredu.',droneTilted:'Dron je naklonený.',altitude:'Výška'},
  'sl-SI':{throttle:'Plin',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'gor',down:'dol',left:'levo',right:'desno',forward:'naprej',back:'nazaj',large:'veliko',medium:'srednje',small:'malo',low:'Malo plina',high:'Veliko plina',slow:'počasi',arm:'Vklopi arm.',disarm:'Izklopi arm.',vtxPower:'Moč VTX.',battery:'Baterija.',camera:'Kamera',controlInvert:'Inverzija upravljanja.',fallingThrottleUp:'Padamo. Dodaj plin.',shakingThrottleUp:'Dron se trese. Plin gor.',turnLeft:'Zavij levo.',turnRight:'Zavij desno.',dontClimbFast:'Ne dviguj se prehitro.',holdAltitude:'Drži višino.',dontFlyBackwards:'Ne leti nazaj.',levelHorizon:'Poravnaj horizont.',raiseNose:'Dvigni nos drona.',flyForward:'Treba je leteti naprej.',droneTilted:'Dron je nagnjen.',altitude:'Višina'},
  'hr-HR':{throttle:'Gas',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'gore',down:'dolje',left:'lijevo',right:'desno',forward:'naprijed',back:'nazad',large:'jako',medium:'srednje',small:'malo',low:'Malo gasa',high:'Puno gasa',slow:'polako',arm:'Uključi arm.',disarm:'Isključi arm.',vtxPower:'Snaga VTX.',battery:'Baterija.',camera:'Kamera',controlInvert:'Inverzija upravljanja.',fallingThrottleUp:'Padamo. Dodaj gas.',shakingThrottleUp:'Dron se trese. Gas gore.',turnLeft:'Skrećemo lijevo.',turnRight:'Skrećemo desno.',dontClimbFast:'Ne diži visinu prebrzo.',holdAltitude:'Drži visinu.',dontFlyBackwards:'Ne leti unatrag.',levelHorizon:'Poravnaj horizont.',raiseNose:'Podigni nos drona.',flyForward:'Treba letjeti naprijed.',droneTilted:'Dron je nagnut.',altitude:'Visina'},
  'sr-RS':{throttle:'Гас',yaw:'Јо',pitch:'Пич',roll:'Рол',up:'горе',down:'доле',left:'лево',right:'десно',forward:'напред',back:'назад',large:'јако',medium:'средње',small:'мало',low:'Мало гаса',high:'Много гаса',slow:'полако',arm:'Арм.',disarm:'Дизарм.',vtxPower:'Снага VTX.',battery:'Батерија.',camera:'Камера',controlInvert:'Инверзија управљања.',fallingThrottleUp:'Падамо. Дај гас.',shakingThrottleUp:'Дрон се тресе. Гас горе.',turnLeft:'Скрећемо лево.',turnRight:'Скрећемо десно.',dontClimbFast:'Не пењи се пребрзо.',holdAltitude:'Држи висину.',dontFlyBackwards:'Не лети уназад.',levelHorizon:'Поравнај хоризонт.',raiseNose:'Подигни нос дрона.',flyForward:'Треба летети напред.',droneTilted:'Дрон је нагнут.',altitude:'Висина'},
  'bs-BA':{throttle:'Gas',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'gore',down:'dolje',left:'lijevo',right:'desno',forward:'naprijed',back:'nazad',large:'jako',medium:'srednje',small:'malo',low:'Malo gasa',high:'Puno gasa',slow:'polako',arm:'Uključi arm.',disarm:'Isključi arm.',vtxPower:'Snaga VTX.',battery:'Baterija.',camera:'Kamera',controlInvert:'Inverzija upravljanja.',fallingThrottleUp:'Padamo. Dodaj gas.',shakingThrottleUp:'Dron se trese. Gas gore.',turnLeft:'Skrećemo lijevo.',turnRight:'Skrećemo desno.',dontClimbFast:'Ne diži visinu prebrzo.',holdAltitude:'Drži visinu.',dontFlyBackwards:'Ne leti unazad.',levelHorizon:'Poravnaj horizont.',raiseNose:'Podigni nos drona.',flyForward:'Treba letjeti naprijed.',droneTilted:'Dron je nagnut.',altitude:'Visina'},
  'ro-RO':{throttle:'Gaz',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'sus',down:'jos',left:'stânga',right:'dreapta',forward:'înainte',back:'înapoi',large:'mare',medium:'mediu',small:'mic',low:'Puțin gaz',high:'Mult gaz',slow:'încet',arm:'Armează.',disarm:'Dezarmează.',vtxPower:'Putere VTX.',battery:'Baterie.',camera:'Cameră',controlInvert:'Inversare control.',fallingThrottleUp:'Cădem. Dă gaz.',shakingThrottleUp:'Drona tremură. Gaz sus.',turnLeft:'Virăm la stânga.',turnRight:'Virăm la dreapta.',dontClimbFast:'Nu urca prea repede.',holdAltitude:'Ține altitudinea.',dontFlyBackwards:'Nu zbura înapoi.',levelHorizon:'Nivelează orizontul.',raiseNose:'Ridică botul dronei.',flyForward:'Trebuie să zbori înainte.',droneTilted:'Drona este înclinată.',altitude:'Altitudine'},
  'hu-HU':{throttle:'Gáz',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'fel',down:'le',left:'balra',right:'jobbra',forward:'előre',back:'hátra',large:'nagy',medium:'közepes',small:'kicsi',low:'Kevés gáz',high:'Sok gáz',slow:'lassan',arm:'Élesítés.',disarm:'Hatástalanítás.',vtxPower:'VTX teljesítmény.',battery:'Akkumulátor.',camera:'Kamera',controlInvert:'Irányítás fordítása.',fallingThrottleUp:'Esünk. Adj gázt.',shakingThrottleUp:'A drón remeg. Gáz fel.',turnLeft:'Fordulj balra.',turnRight:'Fordulj jobbra.',dontClimbFast:'Ne emelkedj túl gyorsan.',holdAltitude:'Tartsd a magasságot.',dontFlyBackwards:'Ne repülj hátra.',levelHorizon:'Szintezd a horizontot.',raiseNose:'Emeld a drón orrát.',flyForward:'Előre kell repülni.',droneTilted:'A drón meg van dőlve.',altitude:'Magasság'},
  'et-EE':{throttle:'Gaas',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'üles',down:'alla',left:'vasakule',right:'paremale',forward:'edasi',back:'tagasi',large:'palju',medium:'keskmiselt',small:'vähe',low:'Vähe gaasi',high:'Palju gaasi',slow:'aeglaselt',arm:'Armi.',disarm:'Disarmi.',vtxPower:'VTX võimsus.',battery:'Aku.',camera:'Kaamera',controlInvert:'Juhtimise pööramine.',fallingThrottleUp:'Me kukume. Lisa gaasi.',shakingThrottleUp:'Droon väriseb. Gaas üles.',turnLeft:'Pööra vasakule.',turnRight:'Pööra paremale.',dontClimbFast:'Ära tõuse liiga kiiresti.',holdAltitude:'Hoia kõrgust.',dontFlyBackwards:'Ära lenda tagurpidi.',levelHorizon:'Sirgenda horisont.',raiseNose:'Tõsta drooni nina.',flyForward:'Tuleb lennata edasi.',droneTilted:'Droon on kaldu.',altitude:'Kõrgus'},
  'lv-LV':{throttle:'Gāze',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'augšā',down:'lejā',left:'pa kreisi',right:'pa labi',forward:'uz priekšu',back:'atpakaļ',large:'daudz',medium:'vidēji',small:'maz',low:'Maz gāzes',high:'Daudz gāzes',slow:'lēni',arm:'Ieslēdz arm.',disarm:'Izslēdz arm.',vtxPower:'VTX jauda.',battery:'Baterija.',camera:'Kamera',controlInvert:'Vadības inversija.',fallingThrottleUp:'Mēs krītam. Dod gāzi.',shakingThrottleUp:'Drons trīc. Gāzi augšā.',turnLeft:'Griežam pa kreisi.',turnRight:'Griežam pa labi.',dontClimbFast:'Nekāp pārāk ātri.',holdAltitude:'Turi augstumu.',dontFlyBackwards:'Nelido atpakaļ.',levelHorizon:'Izlīdzini horizontu.',raiseNose:'Pacel drona degunu.',flyForward:'Jālido uz priekšu.',droneTilted:'Drons ir sasvērts.',altitude:'Augstums'},
  'lt-LT':{throttle:'Gazas',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'aukštyn',down:'žemyn',left:'kairėn',right:'dešinėn',forward:'pirmyn',back:'atgal',large:'daug',medium:'vidutiniškai',small:'mažai',low:'Mažai gazo',high:'Daug gazo',slow:'lėtai',arm:'Įjungti arm.',disarm:'Išjungti arm.',vtxPower:'VTX galia.',battery:'Baterija.',camera:'Kamera',controlInvert:'Valdymo inversija.',fallingThrottleUp:'Mes krentame. Duok gazo.',shakingThrottleUp:'Dronas dreba. Gazas aukštyn.',turnLeft:'Sukame kairėn.',turnRight:'Sukame dešinėn.',dontClimbFast:'Nekilk per greitai.',holdAltitude:'Laikyk aukštį.',dontFlyBackwards:'Neskrisk atgal.',levelHorizon:'Išlygink horizontą.',raiseNose:'Pakelk drono nosį.',flyForward:'Reikia skristi pirmyn.',droneTilted:'Dronas pasviręs.',altitude:'Aukštis'},
  'fi-FI':{throttle:'Kaasu',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'ylös',down:'alas',left:'vasen',right:'oikea',forward:'eteen',back:'taakse',large:'paljon',medium:'keskellä',small:'vähän',low:'Vähän kaasua',high:'Paljon kaasua',slow:'hitaasti',arm:'Armaa.',disarm:'Disarmaa.',vtxPower:'VTX teho.',battery:'Akku.',camera:'Kamera',controlInvert:'Ohjauksen kääntö.',fallingThrottleUp:'Putoamme. Lisää kaasua.',shakingThrottleUp:'Drone tärisee. Kaasu ylös.',turnLeft:'Käänny vasemmalle.',turnRight:'Käänny oikealle.',dontClimbFast:'Älä nouse liian nopeasti.',holdAltitude:'Pidä korkeus.',dontFlyBackwards:'Älä lennä taaksepäin.',levelHorizon:'Suorista horisontti.',raiseNose:'Nosta dronen nokkaa.',flyForward:'Pitää lentää eteenpäin.',droneTilted:'Drone on kallellaan.',altitude:'Korkeus'},
  'sv-SE':{throttle:'Gas',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'upp',down:'ner',left:'vänster',right:'höger',forward:'framåt',back:'bakåt',large:'mycket',medium:'medium',small:'lite',low:'Lite gas',high:'Mycket gas',slow:'långsamt',arm:'Arma.',disarm:'Avväpna.',vtxPower:'VTX effekt.',battery:'Batteri.',camera:'Kamera',controlInvert:'Invertera styrning.',fallingThrottleUp:'Vi faller. Ge mer gas.',shakingThrottleUp:'Drönaren skakar. Gas upp.',turnLeft:'Sväng vänster.',turnRight:'Sväng höger.',dontClimbFast:'Stig inte för snabbt.',holdAltitude:'Håll höjden.',dontFlyBackwards:'Flyg inte bakåt.',levelHorizon:'Räta upp horisonten.',raiseNose:'Höj drönarens nos.',flyForward:'Flyg framåt.',droneTilted:'Drönaren lutar.',altitude:'Höjd'},
  'nb-NO':{throttle:'Gass',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'opp',down:'ned',left:'venstre',right:'høyre',forward:'framover',back:'bakover',large:'mye',medium:'middels',small:'lite',low:'Lite gass',high:'Mye gass',slow:'sakte',arm:'Arm.',disarm:'Disarm.',vtxPower:'VTX effekt.',battery:'Batteri.',camera:'Kamera',controlInvert:'Inverter styring.',fallingThrottleUp:'Vi faller. Gi mer gass.',shakingThrottleUp:'Dronen rister. Gass opp.',turnLeft:'Sving venstre.',turnRight:'Sving høyre.',dontClimbFast:'Ikke stig for raskt.',holdAltitude:'Hold høyden.',dontFlyBackwards:'Ikke fly bakover.',levelHorizon:'Rett opp horisonten.',raiseNose:'Løft nesen på dronen.',flyForward:'Fly framover.',droneTilted:'Dronen er skjev.',altitude:'Høyde'},
  'da-DK':{throttle:'Gas',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'op',down:'ned',left:'venstre',right:'højre',forward:'frem',back:'tilbage',large:'meget',medium:'middel',small:'lidt',low:'Lidt gas',high:'Meget gas',slow:'langsomt',arm:'Arm.',disarm:'Disarm.',vtxPower:'VTX effekt.',battery:'Batteri.',camera:'Kamera',controlInvert:'Inverter styring.',fallingThrottleUp:'Vi falder. Giv mere gas.',shakingThrottleUp:'Dronen ryster. Gas op.',turnLeft:'Drej til venstre.',turnRight:'Drej til højre.',dontClimbFast:'Stig ikke for hurtigt.',holdAltitude:'Hold højden.',dontFlyBackwards:'Flyv ikke baglæns.',levelHorizon:'Ret horisonten.',raiseNose:'Løft dronens næse.',flyForward:'Flyv fremad.',droneTilted:'Dronen hælder.',altitude:'Højde'},
  'is-IS':{throttle:'Gjof',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'upp',down:'niður',left:'vinstri',right:'hægri',forward:'áfram',back:'aftur',large:'mikið',medium:'miðlungs',small:'lítið',low:'Lítil gjöf',high:'Mikil gjöf',slow:'hægt',arm:'Virkja.',disarm:'Afvirkja.',vtxPower:'VTX afl.',battery:'Rafhlaða.',camera:'Myndavél',controlInvert:'Snúa stjórn við.',fallingThrottleUp:'Við föllum. Meiri gjöf.',shakingThrottleUp:'Dróninn titrar. Gjöf upp.',turnLeft:'Beygðu til vinstri.',turnRight:'Beygðu til hægri.',dontClimbFast:'Ekki hækka of hratt.',holdAltitude:'Haltu hæð.',dontFlyBackwards:'Ekki fljúga aftur á bak.',levelHorizon:'Réttu sjóndeildarhringinn.',raiseNose:'Lyftu nefi drónans.',flyForward:'Fljúgðu áfram.',droneTilted:'Dróninn hallar.',altitude:'Hæð'},
  'el-GR':{throttle:'Γκάζι',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'πάνω',down:'κάτω',left:'αριστερά',right:'δεξιά',forward:'μπροστά',back:'πίσω',large:'πολύ',medium:'μέτρια',small:'λίγο',low:'Λίγο γκάζι',high:'Πολύ γκάζι',slow:'αργά',arm:'Όπλιση.',disarm:'Αφοπλισμός.',vtxPower:'Ισχύς VTX.',battery:'Μπαταρία.',camera:'Κάμερα',controlInvert:'Αντιστροφή ελέγχου.',fallingThrottleUp:'Πέφτουμε. Δώσε γκάζι.',shakingThrottleUp:'Το drone τρέμει. Γκάζι πάνω.',turnLeft:'Στρίβουμε αριστερά.',turnRight:'Στρίβουμε δεξιά.',dontClimbFast:'Μην ανεβαίνεις πολύ γρήγορα.',holdAltitude:'Κράτα ύψος.',dontFlyBackwards:'Μην πετάς προς τα πίσω.',levelHorizon:'Ίσιωσε τον ορίζοντα.',raiseNose:'Σήκωσε τη μύτη του drone.',flyForward:'Πρέπει να πετάξεις μπροστά.',droneTilted:'Το drone έχει κλίση.',altitude:'Ύψος'},
  'tr-TR':{throttle:'Gaz',yaw:'Yaw',pitch:'Pitch',roll:'Roll',up:'yukarı',down:'aşağı',left:'sol',right:'sağ',forward:'ileri',back:'geri',large:'büyük',medium:'orta',small:'küçük',low:'Az gaz',high:'Çok gaz',slow:'yavaş',arm:'Arm et.',disarm:'Disarm et.',vtxPower:'VTX gücü.',battery:'Batarya.',camera:'Kamera',controlInvert:'Kontrol ters çevirme.',fallingThrottleUp:'Düşüyoruz. Gaz ver.',shakingThrottleUp:'Drone titriyor. Gaz yukarı.',turnLeft:'Sola dön.',turnRight:'Sağa dön.',dontClimbFast:'Çok hızlı yükselme.',holdAltitude:'İrtifayı koru.',dontFlyBackwards:'Geriye uçma.',levelHorizon:'Ufku düzle.',raiseNose:'Drone burnunu kaldır.',flyForward:'İleri uçmak gerekiyor.',droneTilted:'Drone yatık.',altitude:'İrtifa'},
  'ko-KR':{throttle:'스로틀',yaw:'요',pitch:'피치',roll:'롤',up:'위로',down:'아래로',left:'왼쪽',right:'오른쪽',forward:'앞으로',back:'뒤로',large:'크게',medium:'중간',small:'조금',low:'스로틀 낮게',high:'스로틀 높게',slow:'천천히',arm:'시동.',disarm:'시동 해제.',vtxPower:'VTX 출력.',battery:'배터리.',camera:'카메라',controlInvert:'조종 반전.',fallingThrottleUp:'떨어지고 있다. 스로틀 올려.',shakingThrottleUp:'드론이 흔들린다. 스로틀 위로.',turnLeft:'왼쪽으로 돌아.',turnRight:'오른쪽으로 돌아.',dontClimbFast:'너무 빨리 상승하지 마.',holdAltitude:'고도 유지.',dontFlyBackwards:'뒤로 날지 마.',levelHorizon:'수평을 맞춰.',raiseNose:'드론 기수를 올려.',flyForward:'앞으로 날아야 해.',droneTilted:'드론이 기울었다.',altitude:'고도'}
};

function phrasePack(t){
  const protectedWords=Object.entries(PROTECTED_ALIASES)
    .flatMap(([key, aliases])=>aliases.map(alias=>[alias, PROTECTED_TERMS[key]]))
    .sort((a,b)=>b[0].length-a[0].length);
  const phrase=(...parts)=>parts.filter(Boolean).join(' ') + '.';
  const protect=(text)=>protectedWords.reduce((result,[alias, term])=>{
    const escaped=alias.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    return result.replace(new RegExp(escaped,'gi'), term);
  }, text);
  return {
    arm:phrase(PROTECTED_TERMS.arm), disarm:phrase(PROTECTED_TERMS.disarm), vtxPower:protect(t.vtxPower), battery:t.battery,
    camera0:phrase(t.camera,'0'), camera45:phrase(t.camera,'45'), camera90:phrase(t.camera,'90'),
    controlInvert:t.controlInvert, fallingThrottleUp:protect(t.fallingThrottleUp), shakingThrottleUp:protect(t.shakingThrottleUp),
    throttleUpLarge:phrase(PROTECTED_TERMS.throttle,t.up,t.large), throttleUpMedium:phrase(PROTECTED_TERMS.throttle,t.up,t.medium), throttleUpSmall:phrase(PROTECTED_TERMS.throttle,t.up,t.small),
    throttle90:phrase(PROTECTED_TERMS.throttle,'90'), throttle60:phrase(PROTECTED_TERMS.throttle,'60'),
    throttleDownSmall:phrase(PROTECTED_TERMS.throttle,t.down,t.small), throttleDownMedium:phrase(PROTECTED_TERMS.throttle,t.down,t.medium), throttleDownLarge:phrase(PROTECTED_TERMS.throttle,t.down,t.large),
    throttleDownSlow:phrase(PROTECTED_TERMS.throttle,t.down,t.slow), throttleLow:protect(t.low) + '.', throttleHigh:protect(t.high) + '.',
    yawLeftLarge:phrase(PROTECTED_TERMS.yaw,t.left,t.large), yawLeftMedium:phrase(PROTECTED_TERMS.yaw,t.left,t.medium), yawLeftSmall:phrase(PROTECTED_TERMS.yaw,t.left,t.small),
    turnLeft:t.turnLeft, yawRightSmall:phrase(PROTECTED_TERMS.yaw,t.right,t.small), yawRightMedium:phrase(PROTECTED_TERMS.yaw,t.right,t.medium), yawRightLarge:phrase(PROTECTED_TERMS.yaw,t.right,t.large),
    turnRight:t.turnRight, dontClimbFast:t.dontClimbFast,
    alt500:phrase(t.altitude,'500'), alt300:phrase(t.altitude,'300'), alt200:phrase(t.altitude,'200'),
    holdAltitude:t.holdAltitude, dontFlyBackwards:t.dontFlyBackwards, levelHorizon:t.levelHorizon, raiseNose:t.raiseNose,
    pitchUpLarge:phrase(PROTECTED_TERMS.pitch,t.up,t.large), pitchUpMedium:phrase(PROTECTED_TERMS.pitch,t.up,t.medium), pitchUpSmall:phrase(PROTECTED_TERMS.pitch,t.up,t.small),
    pitchDownSmall:phrase(PROTECTED_TERMS.pitch,t.down,t.small), pitchDownMedium:phrase(PROTECTED_TERMS.pitch,t.down,t.medium), pitchDownLarge:phrase(PROTECTED_TERMS.pitch,t.down,t.large),
    flyForward:t.flyForward, pitchForward:phrase(PROTECTED_TERMS.pitch,t.forward), rollRightSmall:phrase(PROTECTED_TERMS.roll,t.right,t.small),
    rollRightMedium:phrase(PROTECTED_TERMS.roll,t.right,t.medium), rollRightLarge:phrase(PROTECTED_TERMS.roll,t.right,t.large),
    droneTilted:t.droneTilted, pitchBack:phrase(PROTECTED_TERMS.pitch,t.back), rollLeftLarge:phrase(PROTECTED_TERMS.roll,t.left,t.large),
    rollLeftMedium:phrase(PROTECTED_TERMS.roll,t.left,t.medium), rollLeftSmall:phrase(PROTECTED_TERMS.roll,t.left,t.small)
  };
}

const TRANSLATIONS = Object.fromEntries(Object.entries(TERMS).map(([lang, terms])=>[lang, phrasePack(terms)]));

window.FPV_COMMANDS = FPV_COMMANDS;
window.FPV_LANGUAGES = LANGUAGES;
window.FPV_TRANSLATIONS = TRANSLATIONS;
