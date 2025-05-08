document.addEventListener('DOMContentLoaded', () => {
    fetch('data/posts.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('newsSection');
            
            data.posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.className = 'propaganda-post';
                postDiv.innerHTML = `
                    <img src="${post.image}" class="post-image">
                    <h3>${post.title}</h3>
                    <p class="date">${post.date}</p>
                    <p>${post.content}</p>
                `;
                newsContainer.appendChild(postDiv);
            });
        });
});
