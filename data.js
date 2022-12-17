export const products = [
  {
    type: "S4 Pro",
    sn: "SN0000f43",
    danger: false,
    location: "Site 1, Cheddar, UK",
    imageLocation: "/products/s4pro.avif",
    integratedElectronics: [
      { name: "Temperature", value: 25.2, unit: "℃" },
      {
        name: "Operating time",
        value: 207,
        unit: "mins",
      },
    ],
    operationalCharacteristics: [
      { name: "Analogue input value", value: 15.7, unit: " mA" },
      { name: "Spool position", value: 68.4, unit: "%" },
      { name: "Pressure (P)", value: 35.2, unit: " bar" },
      { name: "Flow torque", value: 520, unit: " mNm" },
    ],
  },
  {
    type: "S4 Pro",
    sn: "SN0000f44",
    danger: true,
    location: "Site 1, Cheddar, UK",
    imageLocation: "/products/s4pro.avif",
    integratedElectronics: [
      { name: "Temperature", value: 25.2, unit: "℃" },
      {
        name: "Operating time",
        value: 207,
        unit: "mins",
      },
    ],
    operationalCharacteristics: [
      { name: "Analogue input value", value: 15.7, unit: " mA" },
      { name: "Spool position", value: 68.4, unit: "%" },
      { name: "Pressure (P)", value: 35.2, unit: " bar" },
      { name: "Flow torque", value: 520, unit: " mNm" },
    ],
  },
  {
    type: "S6 Pro X",
    sn: "SN0000h56",
    danger: false,
    location: "Vehicle 1, Chester, UK",
    imageLocation: "/products/s6prox.avif",
    integratedElectronics: [
      { name: "Temperature", value: 25.2, unit: "℃" },
      {
        name: "Operating time",
        value: 207,
        unit: "mins",
      },
    ],
    operationalCharacteristics: [
      { name: "Analogue input value", value: 15.7, unit: " mA" },
      { name: "Spool position", value: 68.4, unit: "%" },
      { name: "Pressure (P)", value: 35.2, unit: " bar" },
      { name: "Flow torque", value: 520, unit: " mNm" },
    ],
  },
  {
    type: "S10 Pro",
    sn: "SN0000g96",
    danger: false,
    location: "Site 1, Cheddar, UK",
    imageLocation: "/products/s10pro.avif",
    integratedElectronics: [
      { name: "Temperature", value: 25.2, unit: "℃" },
      {
        name: "Operating time",
        value: 207,
        unit: "mins",
      },
    ],
    operationalCharacteristics: [
      { name: "Analogue input value", value: 15.7, unit: " mA" },
      { name: "Spool position", value: 68.4, unit: "%" },
      { name: "Pressure (P)", value: 35.2, unit: " bar" },
      { name: "Flow torque", value: 520, unit: " mNm" },
    ],
  },
];

const today = new Date();
today.setHours(0, 0, 0, 0);

export const logsByDay = [
  {
    sn: "SN0000f43",
    label: "Spool position",
    date: new Date(new Date().setDate(today.getDate())),
    value: 5,
  },
  {
    sn: "SN0000f43",
    label: "Spool position",
    date: new Date(new Date().setDate(today.getDate() - 1)),
    value: 6,
  },
  {
    sn: "SN0000f43",
    label: "Spool position",
    date: new Date(new Date().setDate(today.getDate() - 2)),
    value: 7,
  },
  {
    sn: "SN0000f43",
    label: "Spool position",
    date: new Date(new Date().setDate(today.getDate() - 3)),
    value: 4,
  },
  {
    sn: "SN0000f43",
    label: "Spool position",
    date: new Date(new Date().setDate(today.getDate() - 4)),
    value: 8,
  },
  {
    sn: "SN0000f43",
    label: "Spool position",
    date: new Date(new Date().setDate(today.getDate() - 5)),
    value: 7,
  },
  {
    sn: "SN0000f43",
    label: "Spool position",
    date: new Date(new Date().setDate(today.getDate() - 6)),
    value: 5,
  },
  {
    sn: "SN0000f43",
    label: "Temperature",
    date: new Date(new Date().setDate(today.getDate())),
    value: 7,
  },
  {
    sn: "SN0000f43",
    label: "Temperature",
    date: new Date(new Date().setDate(today.getDate() - 1)),
    value: 7,
  },
  {
    sn: "SN0000f43",
    label: "Temperature",
    date: new Date(new Date().setDate(today.getDate() - 2)),
    value: 9,
  },
  {
    sn: "SN0000f43",
    label: "Temperature",
    date: new Date(new Date().setDate(today.getDate() - 3)),
    value: 6,
  },
  {
    sn: "SN0000f43",
    label: "Temperature",
    date: new Date(new Date().setDate(today.getDate() - 4)),
    value: 5,
  },
  {
    sn: "SN0000f43",
    label: "Temperature",
    date: new Date(new Date().setDate(today.getDate() - 5)),
    value: 6,
  },
  {
    sn: "SN0000f43",
    label: "Temperature",
    date: new Date(new Date().setDate(today.getDate() - 6)),
    value: 9,
  },
];

const first = new Date(new Date().setDate(1));

export const logsByMonth = [
  {
    sn: "SN0000f43",
    label: "Spool position",
    date: first,
    value: 5,
  },
  {
    sn: "SN0000f43",
    label: "Spool position",
    date: new Date(new Date(first).setMonth(first.getMonth() - 1)),
    value: 5,
  },
  {
    sn: "SN0000f43",
    label: "Spool position",
    date: new Date(new Date(first).setMonth(first.getMonth() - 2)),
    value: 3,
  },
  {
    sn: "SN0000f43",
    label: "Spool position",
    date: new Date(new Date(first).setMonth(first.getMonth() - 3)),
    value: 6,
  },
  {
    sn: "SN0000f43",
    label: "Spool position",
    date: new Date(new Date(first).setMonth(first.getMonth() - 4)),
    value: 7,
  },
  {
    sn: "SN0000f43",
    label: "Spool position",
    date: new Date(new Date(first).setMonth(first.getMonth() - 5)),
    value: 9,
  },
  {
    sn: "SN0000f43",
    label: "Spool position",
    date: new Date(new Date(first).setMonth(first.getMonth() - 6)),
    value: 10,
  },
  {
    sn: "SN0000f43",
    label: "Temperature",
    date: new Date(new Date(first)),
    value: 8,
  },
  {
    sn: "SN0000f43",
    label: "Temperature",
    date: new Date(new Date(first).setMonth(first.getMonth() - 1)),
    value: 3,
  },
  {
    sn: "SN0000f43",
    label: "Temperature",
    date: new Date(new Date(first).setMonth(first.getMonth() - 2)),
    value: 5,
  },
  {
    sn: "SN0000f43",
    label: "Temperature",
    date: new Date(new Date(first).setMonth(first.getMonth() - 3)),
    value: 2,
  },
  {
    sn: "SN0000f43",
    label: "Temperature",
    date: new Date(new Date(first).setMonth(first.getMonth() - 4)),
    value: 9,
  },
  {
    sn: "SN0000f43",
    label: "Temperature",
    date: new Date(new Date(first).setMonth(first.getMonth() - 5)),
    value: 5,
  },
  {
    sn: "SN0000f43",
    label: "Temperature",
    date: new Date(new Date(first).setMonth(first.getMonth() - 6)),
    value: 4,
  },
];
