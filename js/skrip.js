function dataPerson(){
    let forms = document.getElementById('frm')
    let nama = forms.nama.value
    let kerjaan = forms.kerja.value
    let hobby = forms.hobi.value
    let input  = 'Nama anda adalah ' + nama + ' Pekerjaan anda adalah ' +kerjaan+ ' Hobi anda adalah ' +hobby
    let noInput = 'Data yang anda masukan belum lengkap'
    let hasil = (nama && kerjaan && hobby != '')? input : noInput

    document.getElementById('hasil').innerHTML = hasil
}
    //Tugasnya adalah lengkapi kode tersebut dan tampilkan hasilnya
//     1. nama
//     2. pekerjaan
//     3. hobi
