window.onload = function () {
  /* aceita 'logado' OU 'currentUser' */
  const sessionFlag = localStorage.getItem('logado');
  const userObj     = JSON.parse(localStorage.getItem('currentUser'));

  if (!sessionFlag && !userObj) {
    window.location.href = "login.html";
    return;
  }

  /* se a função loadUsers existir (admin), chame‑a */
  if (typeof loadUsers === "function") {
    loadUsers();
  }
};
