// main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create a row object
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

// Insert the row and get the new row ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)`);
console.log(`// Insert row ${JSON.stringify(row)}`);
console.log('');

// Update the row with an age field
const updatedRow: RowElement = {
    ...row,
    age: 23
};
CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(newRowID, updatedRow);`);
console.log(`// Update row ${newRowID} ${JSON.stringify(updatedRow)}`);
console.log('');

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID});`);
console.log(`// Delete row id ${newRowID}`);
