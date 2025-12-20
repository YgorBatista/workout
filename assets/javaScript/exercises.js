function showList() {
    fetch('./assets/javaScript/exercisesList.json')
        .then(response => response.json())
        .then(exercises => {
            const exercisesList = document.querySelector('#exercises');

            exercises.map(exercise => {
                const listItem = document.createElement('div');
                listItem.classList.add('list-item');

                const id = document.createElement('p');
                id.textContent = exercise.id;

                const titleInfo = document.createElement('div');
                titleInfo.classList.add('title-info');

                const exerciseTitle = document.createElement('h4');
                exerciseTitle.textContent = exercise.module;

                const exerciseInfo = document.createElement('span');
                exerciseInfo.textContent = exercise.videos;

                const exerciseIcon = document.createElement('img');
                exerciseIcon.src = exercise.icon;
                exerciseIcon.classList.add('exercise-icon');

                titleInfo.appendChild(exerciseTitle);
                titleInfo.appendChild(exerciseInfo);

                listItem.appendChild(id);
                listItem.appendChild(titleInfo);
                listItem.appendChild(exerciseIcon);

                exercisesList.appendChild(listItem);
            });
        });
}
showList();
