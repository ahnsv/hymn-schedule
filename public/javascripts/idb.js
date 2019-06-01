import {openDB, deleteDB, wrap, unwrap} from 'idb';

async function idb() {
    const db = openDB('schedules', 1, {
        upgrade(database, oldVersion, newVersion, transaction) {
            console.log(transaction);
        },
        blocked() {
        },
        blocking() {
        }
    })


}