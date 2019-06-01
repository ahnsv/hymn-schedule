const db = new Dexie("schedule");

db.version(1).stores({schedules: "++id, title, start, end, category, important"});

db.transaction('rw', db.schedules, async () => {
//   populate db
    await db.table('schedules').clear();
    let i = 1
    while (i < 30) {
        const date = new Date(2019, 5, i);
        const endDate = new Date(2019, 5, i + 1)
        await db.schedules.add({
            title: 'test' + i,
            start: date.toISOString().split('T')[0],
            end: endDate.toISOString().split('T')[0],
            category: 'military',
            important: true
        })
        i++;
    }
}).catch((err) => {
    console.log(err)
});


