const inputNama = document.getElementById("nama");
const inputKelas = document.getElementById("kelas");
const btn = document.getElementById("kirim");
const list = document.getElementById("list");

btn.addEventListener("click", function(e){
    e.preventDefault
    let nama = inputNama.value.trim();
    let kelas = inputKelas.value.trim();
    let li = document.createElement('li');

    if(nama == ""){
        const alert = document.getElementById("alert")
        alert.style.display ="block";
        return;
    }
    if(kelas == ""){
        const alert = document.getElementById("alert")
        alert.style.display ="block";
        return;
    }
    if(!kelas.startsWith("X")){
        const alert = document.getElementById("alert")
        alert.style.display ="block";
        return;
    }
    

    li.innerHTML = `Nama : ${nama} <br> Kelas: ${kelas}`;
    list.appendChild(li);
    
    inputKelas.value = "";
    inputNama.value = "";
});
    
