const links = {
    'support': 'https://discord.gg/eYszU5XgdK',
    'vk': 'https://vk.com/sparklecompany',
    'invite': 'https://discord.com/api/oauth2/authorize?client_id=932281102486372443&permissions=8&scope=bot%20applications.commands'
};

function actionButtonListener() {
    document.querySelectorAll('.action-btn').forEach((actionBtn) => {
        actionBtn.addEventListener("click", (e) => {
            e.preventDefault();

            window.location.href = links[actionBtn.id];
        })
    })
}

window.onload = (e) => {
    actionButtonListener();
}