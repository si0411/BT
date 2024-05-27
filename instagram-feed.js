document.addEventListener('DOMContentLoaded', function() {
    console.log("Instagram feed script loaded");
    const accessToken = 'IGQWRPNnlnWDdFdHR3TDM2YVJVUIZAUZAmVqWEIxelhvMG9KLWhnc2ZAoOUJGUFJxS3d2QTJSZA2hxMUtRLVhaYndXWm9ycHNncEtOSnVlcEdDT0dNRXN1WVJqYXJKWFNxbmhldi11M0hnS3QtWWFSMHRCNVpCNHUyeVkZD';
    const userId = '3539337020'; // Your Instagram user ID

    fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink&access_token=${accessToken}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const feed = document.getElementById('instagram-feed');
            if (!data.data) {
                throw new Error("No data found in the API response");
            }
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
        .catch(error => {
            console.error('Error fetching Instagram posts:', error);
            const feed = document.getElementById('instagram-feed');
            feed.innerHTML = `<p>Error fetching Instagram posts. Please check the console for more details.</p>`;
        });
});
