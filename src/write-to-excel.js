const ExcelJS = require('exceljs');

const writeToExcel = async (data) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Ürünler');

    worksheet.columns = [
        { header: 'Başlık', key: 'title', width: 30 },
        { header: 'Fiyat', key: 'price', width: 15 },
        { header: 'Derecelendirme', key: 'rating', width: 15 },
        { header: 'Resim URL', key: 'image', width: 50 }
    ];

    data.forEach(item => {
        worksheet.addRow(item);
    });

    const filePath = './amazon_urunler.xlsx';
    await workbook.xlsx.writeFile(filePath);
    console.log(`Veriler başarıyla ${filePath} dosyasına kaydedildi.`);
};

module.exports = writeToExcel;
