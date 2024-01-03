import { redirect, useLoaderData } from "@remix-run/react";
import NewNote, { links as newNoteLinks } from "../components/NewNote";
import { getStoredNotes, storeNotes } from "../data/notes";
import NoteList, {links as noteListLinks} from "../components/NoteList";

export default function NotesPage() {
    const notes = useLoaderData();

    return (
        <main>
            <NewNote />
            <NoteList notes = {notes}/>
        </main>
    )
}

export async function loader() {
    // return json(await getStoredNotes());
    return await getStoredNotes();
}

export async function action({request}) {
    const formData = await request.formData();
  
    // const noteData = {
    //   title: formData.get('title'),
    //   content: formData.get('content')
    // }
  
    const noteData = Object.fromEntries(formData);
    
    // Add validation...
  
    noteData.id = new Date().toISOString();
    console.log(noteData);
    const currentNotes = await getStoredNotes();
    const updatedNotes = currentNotes.concat(noteData);
    console.log(updatedNotes);
    await storeNotes(updatedNotes);
    return redirect('/notes');
  }

export function links() {
    return [...newNoteLinks(), ...noteListLinks()];
}