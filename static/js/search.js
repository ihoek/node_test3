fetch("/username")
  .then((response) => response.json())
  .then((data_name) => {
    let name_lst = [];
    console.log("data", data_name.name);
    let local_data = localStorage.getItem("data");
    console.log("local", JSON.parse(local_data));

    JSON.parse(local_data).map((element) => {
      if (element.name === data_name.name) {
        name_lst.push(element);
      }
    });

    console.log("name_lst", name_lst);
    const row = document.querySelector(".row");
    name_lst.forEach((user) => {
      const row_div = document.createElement("div");
      row_div.classList.add("row_div");
      row_div.innerHTML = `
        <div>${user.name}</div>
        <div>${user.age}</div>
        <div>${user.email}</div>
      `;
      row.appendChild(row_div);
    });
  });
