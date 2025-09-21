// Array de notas
const notes = [
    {
        title: "Nota 1",
        content: "Este detalle es una demostración de que, como los girasoles que siempre buscan el sol, mi corazón siempre te busca a ti. 💛"
    },
    {
        title: "Nota 2", 
        content: "Sé que no has tenido unos dias tan bonitos como quisieramos, pero pronto volverá a salir el sol para que vuelvas a sonreir con tranquilidad. 🌻"
    },
    {
        title: "Nota 3",
        content: "Las flores amarillas simbolizan la amistad, la alegría y los nuevos comienzos (Si, me tomé el tiempo de investigar skldsdkl). Y contigo he encontrado todo eso y mucho más. Eres mi mejor amiga y mi gran amor. ✨"
    },
    {
        title: "Nota 4",
        content: "Este 21 de septiembre de seguro no esperabas nada, pero no quise dejarte sin un regalito especial para intentar sacarte una sonrisita y a su vez compensarte por la vez que no te di ningun detallito asi.  🌞"
    },
    {
        title: "Nota 5",
        content: "Espero que te guste este regalito y logre animarte un poco. También espero que pronto estés mejor y por más que parezca disco rayado, aquí estaré para ti siempre que lo necesites. Te amo mi niña. 💝"
    }
];

let currentNoteIndex = 0;

function nextNote() {
    // Avanzar al siguiente índice
    currentNoteIndex = (currentNoteIndex + 1) % notes.length;

    // Actualizar la interfaz
    updateNoteDisplay();

    // Efecto de animación al cambiar
    const note = document.getElementById('note');
    note.style.transform = 'rotate(-2deg) scale(0.9)';
    
    setTimeout(() => {
        note.style.transform = 'rotate(-2deg) scale(1)';
    }, 150);
}

function updateNoteDisplay() {
    const currentNote = notes[currentNoteIndex];
    document.getElementById('noteTitle').textContent = currentNote.title;
    document.getElementById('noteText').value = currentNote.content;
    document.getElementById('noteCounter').textContent = `${currentNoteIndex + 1} / ${notes.length}`;
}

// Crear partículas doradas
function createParticles() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 4 + 's';
            document.body.appendChild(particle);
            
            // Eliminar partícula después de la animación
            setTimeout(() => {
                particle.remove();
            }, 4000);
        }, i * 300);
    }
}

// Crear partículas cada cierto tiempo
setInterval(createParticles, 3000);

// Crear partículas iniciales
createParticles();

// Inicializar
updateNoteDisplay();