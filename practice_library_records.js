const borrowRecords = [
    {
        recordId: "PM01",
        studentId: "SV101",
        bookTitle: "JavaScript Co Ban",
        borrowDays: 10,
        isReturned: false
    },
    {
        recordId: "PM02",
        studentId: "SV102",
        bookTitle: "Lap Trinh Python",
        borrowDays: 20,
        isReturned: false
    },
    {
        recordId: "PM03",
        studentId: "SV103",
        bookTitle: "Clean Code",
        borrowDays: 16,
        isReturned: false
    }
];

// 1. CREATE - Them phieu muon moi
console.log("===== 1. THEM PHIEU MUON MOI =====");

borrowRecords.push({
    recordId: "PM04",
    studentId: "SV104",
    bookTitle: "Clean Code",
    borrowDays: 18,
    isReturned: false
});

console.log("Da them phieu muon PM04 thanh cong!");
console.log("Tong so phieu muon: " + borrowRecords.length);

// 2. READ - Tinh tien phat qua han
console.log("");
console.log("===== 2. KIEM TRA PHIEU MUON QUA HAN =====");

for (let i = 0; i < borrowRecords.length; i++) {
    const record = borrowRecords[i];

    let fineAmount = 0;

    if (record.borrowDays > 14 && record.isReturned === false) {
        fineAmount = (record.borrowDays - 14) * 5000;

        console.log("Ma phieu: " + record.recordId);
        console.log("Sinh vien: " + record.studentId);
        console.log("Ten sach: " + record.bookTitle);
        console.log("So ngay muon: " + record.borrowDays);
        console.log("Tien phat: " + fineAmount.toLocaleString("vi-VN") + " VND");
        console.log("------------------------------");
    }
}

// 3. UPDATE - Cap nhat phieu PM01 da tra sach
console.log("");
console.log("===== 3. CAP NHAT TRA SACH =====");

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === "PM01") {
        borrowRecords[i].isReturned = true;

        console.log("Phieu PM01 da duoc cap nhat!");
        console.log("Trang thai da tra: " + borrowRecords[i].isReturned);
        break;
    }
}

// 4. DELETE - Xoa phieu PM03
console.log("");
console.log("===== 4. XOA PHIEU MUON =====");

let isRecordFound = false;

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === "PM03") {
        borrowRecords.splice(i, 1);
        isRecordFound = true;

        console.log("Da xoa phieu PM03 thanh cong!");
        break;
    }
}

if (isRecordFound === false) {
    console.log("Khong tim thay phieu PM03!");
}

// 5. BAO CAO TONG KET
console.log("");
console.log("==============================================================");
console.log("             BANG TONG KET PHIEU MUON THU VIEN");
console.log("==============================================================");

console.log(
    "MA PHIEU".padEnd(12) +
    "MA SINH VIEN".padEnd(16) +
    "TEN SACH".padEnd(22) +
    "SO NGAY".padEnd(10) +
    "TRANG THAI".padEnd(15) +
    "TIEN PHAT"
);

console.log("--------------------------------------------------------------");

let totalRecords = borrowRecords.length;
let totalReturned = 0;
let totalBorrowing = 0;
let totalFine = 0;

for (let i = 0; i < borrowRecords.length; i++) {
    const record = borrowRecords[i];

    let status = "";
    let fineAmount = 0;

    if (record.isReturned === true) {
        status = "Da tra";
        totalReturned++;
    } else {
        status = "Dang muon";
        totalBorrowing++;
    }

    if (record.borrowDays > 14 && record.isReturned === false) {
        fineAmount = (record.borrowDays - 14) * 5000;
    }

    totalFine += fineAmount;

    console.log(
        record.recordId.padEnd(12) +
        record.studentId.padEnd(16) +
        record.bookTitle.padEnd(22) +
        String(record.borrowDays).padEnd(10) +
        status.padEnd(15) +
        fineAmount.toLocaleString("vi-VN") + " VND"
    );
}

console.log("--------------------------------------------------------------");
console.log("Tong so phieu: " + totalRecords);
console.log("So phieu da tra: " + totalReturned);
console.log("So phieu dang muon: " + totalBorrowing);
console.log("Tong tien phat cac phieu dang muon qua han: " +
    totalFine.toLocaleString("vi-VN") + " VND");
console.log("==============================================================");