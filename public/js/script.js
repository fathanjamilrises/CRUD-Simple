const inputNama = document.getElementById("nama");
const inputKelas = document.getElementById("kelas");
const btn = document.getElementById("kirim");
const tbody = document.querySelector("tbody");
const modal = document.getElementById("authentication-modal");
const closeModalButton = document.querySelector("[data-modal-hide='authentication-modal']");

function addEditEventListeners() {
  const editButtons = document.querySelectorAll("[data-modal-toggle='authentication-modal']");

  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });
}

closeModalButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

function loadData() {
  const data = JSON.parse(localStorage.getItem("dataUser")) || [];
  tbody.innerHTML = ""; 
  data.forEach((entry) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-4 py-2">${entry.nama}</td>
      <td class="border px-4 py-2">${entry.kelas}</td>
      <td class="border px-4 py-2">
        <button
          type="button" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Edit
        </button>
        <button
          type="button" 
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Hapus
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  addEditEventListeners();
}

loadData();

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let nama = inputNama.value.trim();
  let kelas = inputKelas.value.trim();

  if (nama === "" || kelas === "" || !kelas.startsWith("X")) {
    const alert = document.getElementById("alert");
    alert.style.display = "block";
    return;
  }

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td class="border px-4 py-2">${nama}</td>
    <td class="border px-4 py-2">${kelas}</td>
    <td class="border px-4 py-2">
      <button
        type="button" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Edit
      </button>
      <button
        type="button" 
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Hapus
      </button>
    </td>
  `;

  tbody.appendChild(tr);

  const existingData = JSON.parse(localStorage.getItem("dataUser")) || [];
  existingData.push({ nama, kelas });
  localStorage.setItem("dataUser", JSON.stringify(existingData));

  inputKelas.value = "";
  inputNama.value = "";

  addEditEventListeners();
});
