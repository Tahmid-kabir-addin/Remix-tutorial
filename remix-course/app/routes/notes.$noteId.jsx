import { Link, json, useLoaderData, useParams } from '@remix-run/react';
import { getStoredNotes } from '../data/notes';
import styles from '../styles/note-details.css';

export default function NoteDetailsPage() {
    // const data = useLoaderData()
    // console.log(data); // this is not printing
    const data = useLoaderData()

    return (
        <main id="note-details">
            <header>
                <nav>
                    <Link to = "/notes">Back to all notes</Link>
                </nav>
                <h1>{data.title}</h1>
            </header>
            <p id="note-details-content">
                {data.content}
            </p>
        </main>
    );
}

export async function loader({params}) {
    const notes = await getStoredNotes();
    const note = notes.filter(note => note.id === params.noteId);
    console.log(note[0]); // this is printing
    return note[0];
}

export function links() {
    return [{rel: 'stylesheet', href: styles}];
}