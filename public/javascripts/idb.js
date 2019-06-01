const db = new Dexie("schedule");

db.version(1).stores({schedules: "++id, title, start, end, category, important"});



