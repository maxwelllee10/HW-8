const form = document.getElementById('github-form');
const input = document.getElementById('github-user');
const picture = document.getElementById('picture');
const table = document.getElementById('profile');

form.addEventListener('submit', event => {
    event.preventDefault();
    const url = `https://api.github.com/users/${input.value}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            picture.innerHTML = `<img src="${data.avatar_url}" alt="Profile picture">`;
            table.innerHTML = `
                <tr>
                    <th>Name</th>
                    <td>${data.name || 'Not available'}</td>
                </tr>
                <tr>
                    <th>Blog</th>
                    <td>${data.blog || 'Not available'}</td>
                </tr>
                <tr>
                    <th>Account created</th>
                    <td>${new Date(data.created_at).toLocaleDateString()}</td>
                </tr>
            `;
        })
        .catch(error => console.log(error));
});