let frm = document.getElementById('frm');
let jabs = ['Manager', 'Asisten Manager', 'Staff'];
let jabatanAnda = `<option value="">----- Jabatan -----</option>`;
for (let j in jabs) {
    jabatanAnda += `<option value="${jabs[j]}">${jabs[j]}</option>`;
}
frm.jabatan.innerHTML = jabatanAnda;

function cetakData() {
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

    let gajiPokok;

    switch (jabatan) {
        case 'Manager':
            gajiPokok = 15000000;
            break;
        case 'Asisten Manager':
            gajiPokok = 10000000;
            break;
        case 'Staff':
            gajiPokok = 5000000;
            break;
        default:
            gajiPokok = 0;
            break
    }

    let tunjanganKeluarga = (status == "Menikah" || status == "menikah") ? gajiPokok * 0.2 : gajiPokok * 0;

    let tunjanganJabatan = gajiPokok * 0.15;
    let bpjs = gajiPokok * 0.1;
    let totalGaji = gajiPokok + tunjanganKeluarga + tunjanganJabatan + bpjs;

    document.write(`<style>
    *{
        font-family: sans-serif;
        color:dimgray;
    }
    
    h1, h5{
       text-align: center;
       margin-top: 40px;
       margin-bottom:30px;
    }
    
    table{
        width: 1200px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        border-collapse: collapse;
    }
    
    tr th{
        border: 1px solid black;  
        padding: 15px 20px;
        background-color:#ccc;
    }
    
    tr td {
        border: 1px solid black;
        padding: 20px;
        background-color:;
    }
    
    tfoot tr td {
        font-weight:bold;
        padding: 15px 20px;
    }
    </style>
    <h1>Data Pegawai PT Pengangguran Sukses</h1>
    <h5>Data ${nama} sebagai ${jabatan} di PT Pengangguran Sukses</h5>
    <table>
        <thead>
            <tr>
                <th>Nama Pegawai</th>
                <th>Jabatan</th>
                <th>Status</th>
                <th>Gaji Pokok</th>
                <th>Tunjangan Jabatan</th>
                <th>Tunjangan BPJS</th>
                <th>Tunjangan Keluarga</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${nama}</td>
                <td>${jabatan}</td>
                <td>${status}</td>
                <td>Rp. ${gajiPokok}</td>
                <td>Rp. ${tunjanganJabatan}</td>
                <td>Rp. ${bpjs}</td>
                <td>Rp. ${tunjanganKeluarga}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="6">Total Gaji</td>
                <td>Rp. ${totalGaji}</td>
            </tr>
        </tfoot>
    </table>`);
}
