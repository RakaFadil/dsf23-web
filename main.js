function hasilHitung() {
    let nilai = document.getElementById("nilai").value;
    let nilaiHuruf;

    if (nilai >= 85 && nilai <= 100) {
        console.log("Nilai angka: " + nilai);
        console.log("Nilai huruf: A");
        nilaiHuruf = "A";
        if (nilai % 2 === 0) {
            console.log("Bilangan Genap");
            document.getElementById("outputBilangan").innerText = "Bilangan : Genap";
        } else {
            console.log("Bilangan Ganjil");
            document.getElementById("outputBilangan").innerText = "Bilangan : Ganjil";
        }
    } else if (nilai >= 75 && nilai <= 84) {
        console.log("Nilai angka: " + nilai);
        console.log("Nilai huruf: B");
        nilaiHuruf = "B"
        if (nilai % 2 === 0) {
            console.log("Bilangan Genap");
            document.getElementById("outputBilangan").innerText = "Bilangan : Genap";
        } else {
            console.log("Bilangan Ganjil");
            document.getElementById("outputBilangan").innerText = "Bilangan : Ganjil";
        }
    } else if (nilai >= 60 && nilai <= 74) {
        console.log("Nilai angka: " + nilai);
        console.log("Nilai huruf: C");
        nilaiHuruf = "C"
        if (nilai % 2 === 0) {
            console.log("Bilangan Genap");
            document.getElementById("outputBilangan").innerText = "Bilangan : Genap";
        } else {
            console.log("Bilangan Ganjil");
            document.getElementById("outputBilangan").innerText = "Bilangan : Ganjil";
        }
    } else {
        console.log("Nilai angka: " + nilai);
        console.log("Nilai huruf: D");
        nilaiHuruf = "D"
        if (nilai % 2 === 0) {
            console.log("Bilangan Genap");
            document.getElementById("outputBilangan").innerText = "Bilangan : Genap";
        } else {
            console.log("Bilangan Ganjil");
            document.getElementById("outputBilangan").innerText = "Bilangan : Ganjil";
        }
    }

    document.getElementById("outputNilai").innerText =  "Nilai angka : " + nilai;
    document.getElementById("outputHuruf").innerText =  "Nilai huruf : " + nilaiHuruf;
}