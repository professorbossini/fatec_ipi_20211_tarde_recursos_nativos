import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('lugares.db');

export const init = () => {
  const promise = new Promise ((resolve, reject) => {
    
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS tb_lugar (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, imagemURI TEXT NOT NULL, endereco TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
        [],
        () => {resolve()},
        (_, err) => {reject(err)}
      );
    })
  });
  return promise;
}