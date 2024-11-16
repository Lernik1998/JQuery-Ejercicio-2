📋 Lista de Tareas Interactiva

Este proyecto es una aplicación de "Lista de Tareas" interactiva desarrollada con HTML, CSS y jQuery. Los usuarios pueden agregar, editar, completar, eliminar y filtrar tareas de manera dinámica, todo desde su navegador. ¡Gestiona tus tareas de forma sencilla y divertida!

✨ Funcionalidades

➕ Agregar Tareas: Los usuarios pueden añadir nuevas tareas desde un campo de entrada.
✏️ Editar Tareas: Permite editar el nombre de una tarea a través de un prompt.
✔️ Completar Tareas: Cambia el estado de una tarea a "completada" con un solo clic.
❌ Eliminar Tareas: Cada tarea tiene un botón para eliminarla de la lista.
🔍 Filtros de Visualización: Los usuarios pueden filtrar tareas para ver todas, solo las completadas o solo las pendientes.
📊 Contador de Tareas Pendientes: Muestra en tiempo real cuántas tareas están pendientes de completar.
🔧 Estructura del Código

🌍 Variables Globales
auxTarPn: Almacena el número de tareas pendientes y actualiza el contador.
⚙️ Funciones Principales
agregarTarea() ➕
Añade una nueva tarea a la lista y actualiza el contador de tareas pendientes.
editarTarea() ✏️
Permite editar el nombre de una tarea con un prompt.
completarTarea() ✔️
Cambia el estado de la tarea a completada, lo que afecta su estilo visual y el contador de tareas pendientes.
eliminarTarea() ❌
Elimina una tarea de la lista con animación.
actualizarTareasPendientes() 📊
Actualiza el contador de tareas pendientes de acuerdo con las acciones realizadas (agregar, completar, eliminar).
filtrarTareas() 🔍
Muestra tareas según el filtro seleccionado: todas, completadas o pendientes.
animaciones() 🎞️
Agrega animaciones visuales para las tareas, como fadeIn() y fadeOut().
📄 Instrucciones de Uso

Clona el repositorio o descarga el código.
Abre el archivo index.html en un navegador.
Ingresa una tarea en el campo de texto y haz clic en "Agregar Tarea".
Haz clic en "Editar tarea" para modificar el nombre de una tarea.
Haz clic en "Completado" para marcar una tarea como completada.
Haz clic en "Eliminar tarea" para borrar una tarea de la lista.
Usa los botones de filtro para ver todas las tareas, solo las completadas o solo las pendientes.
📂 Estructura de Archivos

index.html 📄: Estructura del HTML y el formulario de entrada.
css.css 🎨: Estilos visuales para la aplicación, como la apariencia de las tareas y los botones.
js.js 🚀: Lógica de la aplicación, que incluye la gestión de tareas y filtros con jQuery.
💻 Tecnologías

HTML 🧱
CSS 🎨
JavaScript (jQuery) 📜
🚀 Mejoras Futuras

💬 Agregar notificaciones: Implementar alertas para confirmar acciones como la eliminación de tareas.
🎨 Mejorar diseño visual: Añadir más estilos y animaciones para una experiencia de usuario más atractiva.
🤖 Funcionalidad de tareas recurrentes: Permitir a los usuarios establecer tareas que se repitan automáticamente en intervalos definidos.
🙌 Créditos

Desarrollado por Lernik Gasparyan.