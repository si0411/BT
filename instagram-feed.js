document.addEventListener('DOMContentLoaded', function() {
    console.log("Instagram feed script loaded");
    const accessToken = 'IGQWRPNnlnWDdFdHR3TDM2YVJVUlZAUZAmVqWEIxelhvMG9KLWhnc2ZAoOUJGUFJxS3d2QTJSZA2hxMUtRLVhaYndXWm9ycHNncEtOSnVlcEdDT0dNRXN1WVJqYXJKWFNxbmhldi11M0hnS3QtWWFSMHRCNVpCNHUyeVkZD';
    const userId = '3539337020'; // Your Instagram user ID

    fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink&access_token=${accessToken}`)
        .then(response => response.json())
        .then(data => {
            const feed = document.getElementById('instagram-feed');
            data.data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <a href="${post.permalink}" target="_blank">
                        <img src="${post.media_url}" alt="${post.caption}">
                    </a>
                `;
                feed.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching Instagram posts:', error));
});
