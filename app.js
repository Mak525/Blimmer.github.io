document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll("nav ul li");
    const contents = document.querySelectorAll(".tab-content");
    const inviteFriendsButton = document.getElementById("invite-friends");
    const inviteOptions = document.getElementById("invite-options");
    const copyLinkButton = document.getElementById("copy-link");
    const shareLinkButton = document.getElementById("share-link");
    const plane = document.getElementById("plane");
    let balance = 0;
    let energy = 1500;
    let friends = 0;

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            tabs.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
            const tabId = this.getAttribute("data-tab");
            contents.forEach(content => {
                content.classList.remove("active");
                if (content.id === tabId) {
                    content.classList.add("active");
                }
            });
        });
    });

    inviteFriendsButton.addEventListener("click", function() {
        inviteOptions.classList.toggle("hidden");
    });

    copyLinkButton.addEventListener("click", function() {
        const link = "https://example.com/referral";
        navigator.clipboard.writeText(link).then(() => {
            alert("Referral link copied!");
        });
    });

    shareLinkButton.addEventListener("click", function() {
        const link = "https://example.com/referral";
        if (navigator.share) {
            navigator.share({
                title: "Join Blimmer!",
                url: link
            }).catch(console.error);
        } else {
            alert("Share feature not supported on your browser.");
        }
    });

    plane.addEventListener("click", function() {
        if (energy >= 5) {
            balance += 5;
            energy -= 5;
            document.getElementById("balance").innerText = balance;
            document.getElementById("energy").innerText = energy;
        } else {
            alert("Not enough energy!");
        }
    });
});
