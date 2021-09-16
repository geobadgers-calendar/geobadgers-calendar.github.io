

export function get_data() {

  var getdata = {
    format: "MM dd, yyyy",
    titleFormat: "MM",
    calendarEvents: [{
        id: "1",
        name: "Fist GGSA Meeting",
        description: "First GGSA meeting of 2021-22 school year.",
        date: "September/13/2021",
        type: "ggsa",
    }, {
        id: "2",
        name: "Weeks Lecture",
        description: "Investigating the redox conditions contributing to organic matter burial in the geologic record | by Dr. Selva Marroquin",
        //badge: "2-day event",
        date:"September/17/2021",
        type: "department",
    }, {
        id: "3",
        name: "Weeks Lecture",
        description: "Fossils, maps, and teeth: merging paleontology and ecology to advance conservation practices | by Dr. Silvia Pineda Munoz,
        date: "September/24/2021",
        type: "department"
    }, {
        id: "4",
        name: "Weeks Lecture",
        description:"The calibration and optimization of ML–MC as a depth discriminant | by Dr. Monique Holt",
        date: "October/1/2021",
        type: "department"
    }, {
        id: "5",
        name: "GSA Meeting",
        description: "GSA 2021 in Oregon",
        badge: "4-day event",
        date: ["October/10/2021","October/13/2021"],
        type: "department"
    }, {
        id: "5",
        name: "AGU Fall Meeting",
        description: "AGU 2021 Meeting in Louisiana",
        badge: "5-day event",
        date: ["December/13/2021","December/17/2021"],
        type: "department"
    }
  ]
  };
  return getdata;
}
