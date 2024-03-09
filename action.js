
    let draggedTask = null;

    function showAddTaskModal(tasksContainerId) {
      document.getElementById('modal').style.display = 'block';
      document.getElementById('addTaskButton').setAttribute('data-container', tasksContainerId);
    }

    function hideAddTaskModal() {
      document.getElementById('modal').style.display = 'none';
    }

    function addTask() {
      var title = document.getElementById('taskTitle').value;
      var description = document.getElementById('taskDescription').value;

      var taskElement = document.createElement('div');
      taskElement.classList.add('bg-gray-200', 'p-3', 'mb-2', 'rounded-md', 'draggable');
      taskElement.setAttribute('draggable', true);
      taskElement.setAttribute('ondragstart', 'drag(event)');

      var titleElement = document.createElement('h3');
      titleElement.classList.add('text-base', 'font-semibold');
      titleElement.textContent = title;

      var descriptionElement = document.createElement('p');
      descriptionElement.classList.add('text-sm', 'text-gray-600');
      descriptionElement.textContent = description;

      taskElement.appendChild(titleElement);
      taskElement.appendChild(descriptionElement);

      var tasksContainerId = document.getElementById('addTaskButton').getAttribute('data-container');
      var tasksContainer = document.getElementById(tasksContainerId + 'Content');
      tasksContainer.appendChild(taskElement);

      hideAddTaskModal();
    }

    function allowDrop(event) {
      event.preventDefault();
    }

    function drag(event) {
      draggedTask = event.target;
      event.dataTransfer.setData("text/plain", event.target.id);
    }

    function drop(event, targetContainerId) {
      event.preventDefault();
      var data = event.dataTransfer.getData("text/plain");
      var targetContainer = document.getElementById(targetContainerId + 'Content');
      targetContainer.appendChild(draggedTask);
      draggedTask = null;
    }
