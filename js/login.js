document.getElementById("login-button").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("https://api.joeandthejuice.digital/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      document.cookie = `token=${data.accessToken}; path=/;`;
      localStorage.setItem("username", data.username);
      window.location.href = "server.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
