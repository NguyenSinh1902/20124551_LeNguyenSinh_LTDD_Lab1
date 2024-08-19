// Dữ liệu kiểm tra
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

// Sử dụng toán tử ba ngôi (ternary operator) để tính tiền tip
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;

// Tính tổng giá trị (hóa đơn + tiền tip)
const total1 = bill1 + tip1;
const total2 = bill2 + tip2;
const total3 = bill3 + tip3;

// In kết quả ra console
console.log(`Hóa đơn là ${bill1}, tiền tip là ${tip1}, và tổng giá trị là ${total1}`);
console.log(`Hóa đơn là ${bill2}, tiền tip là ${tip2}, và tổng giá trị là ${total2}`);
console.log(`Hóa đơn là ${bill3}, tiền tip là ${tip3}, và tổng giá trị là ${total3}`);
