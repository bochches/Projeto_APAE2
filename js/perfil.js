// Exibe o nome do usuário logado no título da página
(function () {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (user) {
    document.getElementById("nomeUsuario").textContent = user.firstname || user.username || "Usuário";
  }
})();