const button = document.getElementById('contactBtn');

button.addEventListener('click', () => {
    alert('Button clicked!');
});
const contentWindow = document.getElementById('contentWindow');

const pages = {
    page1: `
        <h2>Page 1</h2>
        <p>Welcome to the first page of content.</p>
    `,
    page2: `
        <h2>Page 2</h2>
        <p>This is the second page with different content.</p>
    `,
    page3: `
        <h2>Page 3</h2>
        <p>Here’s the third page content!</p>
    `
};

// Button event listeners
document.getElementById('page1Btn').addEventListener('click', () => {
    contentWindow.innerHTML = pages.page1;
});
document.getElementById('page2Btn').addEventListener('click', () => {
    contentWindow.innerHTML = pages.page2;
});
document.getElementById('page3Btn').addEventListener('click', () => {
    contentWindow.innerHTML = pages.page3;
});