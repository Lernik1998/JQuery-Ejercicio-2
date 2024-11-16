// Cargo el DOM primero
$(function () {
  let auxTarPn = 0;
  /*
1. **Agregar Tareas**: Al hacer clic en el botón "Agregar Tarea",
el texto del campo de entrada se añade a la lista de tareas.
*/

  $("#add-task-btn").on("click", function () {
    // Obtengo el nombre del input, val() porque es <input>
    let tituloTarea = $("#new-task").val();

    let nuevaTarea = $(`<div> <span id="nomTarea"> ${tituloTarea} </span>
            <button class="edNomTarea">Editar tarea</button>
            <button class="completado">Completado</button>
            <button class="elimTarea">Eliminar tarea</button>
        <div>`);

    // Obtengo la lista de tareas y añado la tarea
    $("#task-list").append(nuevaTarea.hide().fadeIn(500));

    // Vaciamos input para otra tarea
    $("#new-task").val("");

    actualizarTareasPendientes(true);
  });

  /*
2. **Editar Tareas**: Se usa un `prompt` para cambiar el texto de una
tarea específica.
*/

  $("#task-list").on("click", ".edNomTarea", function () {
    let nuevoNomTarea = prompt("Indica el nuevo nombre de la tarea");

    $(this)
      .parent()
      .replaceWith(
        `<div> <span id="nomTarea"> ${nuevoNomTarea} </span>
        <button class="edNomTarea">Editar tarea</button>
        <button class="completado">Completado</button> 
        <button class="elimTarea">Eliminar tarea</button>
        <div>`
      );
  });

  /* 
3. **Completar Tareas**: Al hacer clic en el botón de completar, se 
cambia el estado de `completed` de la tarea.
*/

  $("#task-list").on("click", ".completado", function (e) {
    // Btn seleccionado
    let btnSeleccionado = $(this);

    let divTarea = btnSeleccionado.parent();

    divTarea.toggleClass("tareaCompletada");

    if (divTarea.hasClass("tareaCompletada")) {
      actualizarTareasPendientes(false);
    } else {
      actualizarTareasPendientes(true);
    }
  });

  /*6. **Contador de Tareas**: Muestra la cantidad de tareas pendientes en tiempo real.
   */
  function actualizarTareasPendientes(tarea) {
    if (tarea) {
      $("#task-counter").find("span").text();
      auxTarPn++;
      $("#task-counter").find("span").text(auxTarPn);
    } else {
      if (auxTarPn <= 0) {
        $("#task-counter").find("span").text(0);
      } else {
        $("#task-counter").find("span").text();
        auxTarPn--;
        $("#task-counter").find("span").text(auxTarPn);
      }
    }
  }

  /*4. **Eliminar Tareas**: Cada tarea tiene un botón de 
  eliminar que la quita de la lista.
   */

  $("#task-list").on("click", ".elimTarea", function () {
    // Obtengo el elemento padre desde donde se ha hecho click

    let div = $(this).parent();

    $(div).fadeOut(500, function () {
      div.remove();
    });

    actualizarTareasPendientes(false);
  });

  /*
5. **Filtros de Visualización**: Los botones de filtros permiten
ver solo tareas completadas, pendientes o todas.
 */

  $(".filters").on("click", ".filter-btn", function () {
    /*
    if ($(this).attr("data-filter") == "all") {
      $("#task-list div").show();
    } else if ($(this).attr("data-filter") == "completed") {
      alert("Mostrando tareas completadas");
      $("#task-list div").hide();
      $("#task-list .tareaCompletada").show();
    } else {
      alert("Mostrando tareas pendientes de completar");
      $("#task-list div").hide();
      $("#task-list div:not(.tareaCompletada)").show();
    }*/

    /*
    8. **Animaciones**: Añadir animaciones es sencillo con métodos como 
    `.fadeIn()`, `.slideToggle()` o `.animate()` de jQuery para los efectos visuales.
 */

    if ($(this).attr("data-filter") == "all") {
      $("#task-list div").fadeIn(300);
    } else if ($(this).attr("data-filter") == "completed") {
      alert("Mostrando tareas completadas");
      $("#task-list div").fadeOut(300);
      $("#task-list .tareaCompletada").fadeIn(300);
    } else {
      alert("Mostrando tareas pendientes de completar");
      $("#task-list div").fadeOut(300);
      $("#task-list div:not(.tareaCompletada)").fadeIn(300);
    }
  });
});

/*
Código de Raúl :)

Funcionalidades

1. **Agregar Tareas**: Permitir al usuario añadir nuevas tareas a la lista.
2. **Editar Tareas**: Opción para modificar el texto de una tarea existente.
3. **Completar Tareas**: Marcar una tarea como completada o pendiente.
4. **Eliminar Tareas**: Quitar una tarea de la lista.
5. **Contador de Tareas**: Mostrar el número total de tareas y las tareas pendientes.
6. **Filtros de Visualización**: Filtrar la lista de tareas para ver todas, solo completadas o solo pendientes.
7. **Animaciones**: Efectos visuales en los elementos de la lista.
8. **Almacenamiento Local**: Guardar el estado de las tareas en el navegador para que persistan al cerrar la página.


$(document).ready(function() {
    const taskList = $('#task-list');
    const taskCounter = $('#task-counter span');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Actualizar el contador de tareas
    function updateCounter() {
        const pendingTasks = tasks.filter(task => !task.completed).length;
        taskCounter.text(pendingTasks);
    }

    // Guardar tareas en el local storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Renderizar las tareas en la lista
    function renderTasks(filter = 'all') {
        taskList.empty();
        tasks.forEach((task, index) => {
            if (filter === 'completed' && !task.completed) return;
            if (filter === 'pending' && task.completed) return;

            const taskItem = $(`
                <li class="${task.completed ? 'completed' : ''}">
                    <span>${task.text}</span>
                    <div class="task-buttons">
                        <button class="complete-btn">✓</button>
                        <button class="edit-btn">✎</button>
                        <button class="delete-btn">✗</button>
                    </div>
                </li>
            `);

            // Marcar como completada
            taskItem.find('.complete-btn').click(() => {
                task.completed = !task.completed;
                saveTasks();
                renderTasks(filter);
                updateCounter();
            });

            // Editar tarea
            taskItem.find('.edit-btn').click(() => {
                const newText = prompt("Editar tarea:", task.text);
                if (newText) {
                    task.text = newText;
                    saveTasks();
                    renderTasks(filter);
                }
            });

            // Eliminar tarea
            taskItem.find('.delete-btn').click(() => {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks(filter);
                updateCounter();
            });

            taskList.append(taskItem);
        });
        updateCounter();
    }

    // Agregar nueva tarea
    $('#add-task-btn').click(() => {
        const newTaskText = $('#new-task').val().trim();
        if (newTaskText) {
            tasks.push({ text: newTaskText, completed: false });
            $('#new-task').val('');
            saveTasks();
            renderTasks();
        }
    });

    // Filtro de tareas
    $('.filter-btn').click(function() {
        const filter = $(this).data('filter');
        renderTasks(filter);
    });

    // Renderizar las tareas al cargar la página
    renderTasks();
});
 */
