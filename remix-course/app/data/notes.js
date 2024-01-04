import fs from 'fs/promises';

export async function getStoredNotes() {
  const rawFileContent = await fs.readFile('notes.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedNotes = data.notes ?? [];
  // console.log(storedNotes);
  return storedNotes;
}

export function storeNotes(notes) {
  // console.log(notes);
  return fs.writeFile('notes.json', JSON.stringify({ notes: notes || [] }));
}