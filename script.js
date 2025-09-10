const contentWindow = document.getElementById('contentWindow');

const pages = {
    page1: `
        <h2>Common UI</h2>
        <p>Welcome to the first page of content.</p>
    `,
    page2: `
        <h2>Widget Effects</h2>
        <p>This is the second page with different content.</p>
    `,
    page3: `
        <h2>Dino Dynasty Digital</h2>
        <p>Here’s the third page content!</p>
    `,
    page4: `
        <h2>Becoming Whole</h2>
        <p>Some thoughtful content here.</p>
    `
};

// Attach event listeners
document.getElementById('content-button1').addEventListener('click', () => {
    contentWindow.innerHTML = pages.page1;
});
document.getElementById('content-button2').addEventListener('click', () => {
    contentWindow.innerHTML = pages.page2;
});
document.getElementById('content-button3').addEventListener('click', () => {
    contentWindow.innerHTML = pages.page3;
});
document.getElementById('content-button4').addEventListener('click', () => {
    contentWindow.innerHTML = pages.page4;
});