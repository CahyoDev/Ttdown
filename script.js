document.getElementById('downloadForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const tiktokUrl = document.getElementById('tiktokUrl').value;
    
    try {
        const response = await fetch(`/download?url=${encodeURIComponent(tiktokUrl)}`);
        const data = await response.json();
        if (data.status === 'success') {
            displayVideo(data.result.url);
        } else {
            alert('Failed to download video. Please check the URL.');
        }
    } catch (error) {
        alert('Error fetching the video.');
    }
});

function displayVideo(videoUrl) {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = `<video src="${videoUrl}" controls width="400"></video>`;
}