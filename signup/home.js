document.addEventListener("DOMContentLoaded", function () {
    // Simulate logged-in user (Replace with actual username from signup)
    let username = "Labib"; // Fetch dynamically in a real application
    document.getElementById("usernameDisplay").innerText = username;

    // Hiring message auto-hide after 5 seconds
    setTimeout(() => {
        document.getElementById("hiringMessage").style.display = "none";
    }, 5000);

    // Video Thumbnail Effects
    const videos = document.querySelectorAll(".video");
    videos.forEach(video => {
        video.addEventListener("mouseover", () => {
            video.style.transform = "scale(1.05)";
            video.style.transition = "0.3s";
        });

        video.addEventListener("mouseout", () => {
            video.style.transform = "scale(1)";
        });

        video.addEventListener("click", () => {
            alert("Redirecting to video... (This would open the actual video page)");
            // In real implementation, change this to window.location.href = "actual_video_url";
        });
    });
});
