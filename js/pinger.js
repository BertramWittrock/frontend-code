async function pingUrl(url, index) {
    const startTime = new Date().getTime(); // Start timer

    try {
        const response = await fetch(url);
        const endTime = new Date().getTime(); // End timer
        const responseTime = endTime - startTime; // Calculate response time

        console.log(`Ping to ${url} successful. Response time: ${responseTime}ms`);
        document.getElementById(`speed-container-${index+1}`).textContent = "Ping: " + responseTime;
    } catch (error) {
        console.log(`Ping to ${url} failed: ${error}`);
        document.getElementById(`speed-container-${index+1}`).textContent = "Ping failed";
    }
}

function ping() {
    const urls = ['https://us.joeandthejuice.digital', 'https://eu.joeandthejuice.digital', 'https://asia.joeandthejuice.digital'];

    urls.forEach((url, index) => {
        pingUrl(url, index);
    });
}

ping();
