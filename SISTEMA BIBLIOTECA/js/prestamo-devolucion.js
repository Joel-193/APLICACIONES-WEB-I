let loans = [
    {
        libro: "El señor de los anillos",
        estudiante: "Juan Pérez",
        fechaPrestamo: "2024-05-21",
        fechaDevolucion: "2024-06-04",
        cantidad: 1,
        observacion: "Libro en buen estado"
    },
    {
        libro: "Cien años de soledad",
        estudiante: "María Gómez",
        fechaPrestamo: "2024-05-20",
        fechaDevolucion: "2024-06-03",
        cantidad: 1,
        observacion: "Devolver en la biblioteca central"
    }
];

function addLoan() {
    const libro = document.getElementById('libro').value;
    const estudiante = document.getElementById('estudiante').value;
    const fechaPrestamo = document.getElementById('fecha-prestamo').value;
    const fechaDevolucion = document.getElementById('fecha-devolucion').value;
    const cantidad = document.getElementById('cantidad').value;
    const observacion = document.getElementById('observacion').value;

    loans.push({
        libro,
        estudiante,
        fechaPrestamo,
        fechaDevolucion,
        cantidad,
        observacion
    });

    showLoans();
    clearForm();
}

function showLoans() {
    const respuesta = document.getElementById('respuesta');
    respuesta.innerHTML = '';

    loans.forEach((loan, index) => {
        respuesta.innerHTML += `
            <ul>
                <li><strong>Libro:</strong> ${loan.libro}</li>
                <li><strong>Estudiante:</strong> ${loan.estudiante}</li>
                <li><strong>Fecha de préstamo:</strong> ${loan.fechaPrestamo}</li>
                <li><strong>Fecha de devolución:</strong> ${loan.fechaDevolucion}</li>
                <li><strong>Cantidad:</strong> ${loan.cantidad}</li>
                <li><strong>Observación:</strong> ${loan.observacion}</li>
                <a href="#" class="delete" data-index="${index}">🗑 Eliminar</a>
            </ul>
            <br>
        `;
    });
}

function clearForm() {
    document.getElementById('libro').value = '';
    document.getElementById('estudiante').value = '';
    document.getElementById('fecha-prestamo').value = '';
    document.getElementById('fecha-devolucion').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('observacion').value = '';
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    addLoan();
});

document.getElementById('respuesta').addEventListener('click', function(event) {
    if (event.target.className === 'delete') {
        const index = event.target.getAttribute('data-index');
        loans.splice(index, 1);
        showLoans();
    }
});

// Mostrar préstamos al cargar la página
showLoans();
