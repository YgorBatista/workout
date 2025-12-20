function showThumbs() {
    fetch('./assets/javaScript/thumbVideos.json')
        .then(response => response.json())
        .then(thumbVideos => {
            const videos = document.querySelector('#videos-thumb');

            thumbVideos.map(video => {
                const imageVideo = document.createElement('div');
                imageVideo.classList.add('thumb-n-title');

                const img = document.createElement('img');
                img.src = video.img;
                img.alt = video.title;

                const title = document.createElement('h4');
                title.textContent = video.title;

                const calories = document.createElement('h6');
                calories.textContent = video.description;

                imageVideo.appendChild(img);
                imageVideo.appendChild(title);
                imageVideo.appendChild(calories);

                videos.appendChild(imageVideo);
            });
        });
}

showThumbs();
