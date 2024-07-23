async function fetchData() {
    const urlInput = document.getElementById('urlInput').value;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = proxyUrl + urlInput;

    try {
        const response = await fetch(targetUrl);
        const data = await response.text();
        document.getElementById('result').innerText = data;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('result').innerText = 'Error fetching data';
    }
}
