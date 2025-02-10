fetch("/userinfo")
  .then((response) => response.json())
  .then((data) => {
    const updata_data = JSON.parse(JSON.stringify(data)); //data 형태변환
    let local_data = JSON.parse(localStorage.getItem("data")) || [];
    local_data.push(updata_data);
    localStorage.setItem("data", JSON.stringify(local_data));

    const row = document.querySelector(".row");
    local_data.forEach((user) => {
      const row_div = document.createElement("div");
      row_div.classList.add("row_div");
      row_div.innerHTML = `
        <div class="row_name">${user.name}</div>
        <div class="row_age">${user.age}</div>
        <div class="row_email">${user.email}</div>
      `;
      row.appendChild(row_div);
    });
  })
  .catch((e) => {
    console.error("error", e);
  });
