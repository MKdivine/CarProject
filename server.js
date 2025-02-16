const express = require('express');
const app = express();
const path = require('path');

// EJS als View-Engine festlegen
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ordner für EJS-Templates
app.use(express.static(path.join(__dirname, 'public')));


// Importiere das MongoDB-Modul
const { MongoClient } = require('mongodb');

// Verbindungs-URI (ersetze die Platzhalter mit deinen eigenen Werten)
// Beispiel für eine lokale MongoDB-Instanz:
const uri = 'mongodb://localhost:27017';

// Beispiel für MongoDB Atlas:
// const uri = 'mongodb+srv://<benutzername>:<passwort>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';

// Name der Datenbank und Collection
const dbName = 'meine_datenbank';
const collectionName = 'meine_collection';

// Funktion zum Verbinden und Arbeiten mit der Datenbank
async function connectToMongoDB() {
    // Erstelle einen neuen MongoDB-Client
    const client = new MongoClient(uri);

    try {
        // Verbinde dich zur MongoDB
        await client.connect();
        console.log('Erfolgreich mit MongoDB verbunden!');

        // Wähle die Datenbank aus
        const db = client.db(dbName);

        // Wähle die Collection aus
        const collection = db.collection(collectionName);

        // Beispiel: Ein Dokument einfügen
        const document = { name: 'Max Mustermann', alter: 30, stadt: 'Berlin' };
        const insertResult = await collection.insertOne(document);
        console.log('Dokument eingefügt:', insertResult.insertedId);

        // Beispiel: Ein Dokument abfragen
        const query = { name: 'Max Mustermann' };
        const findResult = await collection.findOne(query);
        console.log('Gefundenes Dokument:', findResult);

    } catch (error) {
        console.error('Fehler bei der Verbindung zur MongoDB:', error);
    } finally {
        // Schließe die Verbindung
        await client.close();
        console.log('Verbindung zur MongoDB geschlossen.');
    }
}

// Funktion aufrufen
connectToMongoDB();