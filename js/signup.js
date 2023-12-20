document.getElementById("sign-up-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  fetch("https://api.joeandthejuice.digital/createUser", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          email: email,
          username: username,
          password: password,
      }),
  })
  .then(response => response.json())
  .then(data => {
        console.log("Success:", data);
        document.cookie = `token=${data.accessToken}; path=/;`;
        localStorage.setItem("username", JSON.stringify(data.username).split('"')[1]);
        window.location.href = "server.html";
  })
  .catch(error => {
      console.error("Error:", error);
  });
});