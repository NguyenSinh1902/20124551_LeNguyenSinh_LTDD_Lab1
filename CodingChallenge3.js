
let dolphinsScores = [96, 108, 89];
let koalasScores = [88, 91, 110];

let avgDolphins = (dolphinsScores[0] + dolphinsScores[1] + dolphinsScores[2]) / 3;
let avgKoalas = (koalasScores[0] + koalasScores[1] + koalasScores[2]) / 3;

console.log(`Điểm trung bình của Dolphins: ${avgDolphins}`);
console.log(`Điểm trung bình của Koalas: ${avgKoalas}`);

if (avgDolphins > avgKoalas) {
    console.log("Dolphins thắng cuộc!");
} else if (avgKoalas > avgDolphins) {
    console.log("Koalas thắng cuộc!");
} else {
    console.log("Hòa!");
}

if (avgDolphins >= 100 && avgDolphins > avgKoalas) {
    console.log("Dolphins thắng cuộc với điều kiện điểm tối thiểu!");
} else if (avgKoalas >= 100 && avgKoalas > avgDolphins) {
    console.log("Koalas thắng cuộc với điều kiện điểm tối thiểu!");
} else if (avgDolphins >= 100 && avgKoalas >= 100 && avgDolphins === avgKoalas) {
    console.log("Hòa với điều kiện điểm tối thiểu!");
} else {
    console.log("Không đội nào đạt đủ điểm tối thiểu để thắng.");
}

dolphinsScores = [97, 112, 101];
koalasScores = [109, 95, 123];

avgDolphins = (dolphinsScores[0] + dolphinsScores[1] + dolphinsScores[2]) / 3;
avgKoalas = (koalasScores[0] + koalasScores[1] + koalasScores[2]) / 3;

console.log(`\nĐiểm trung bình của Dolphins: ${avgDolphins}`);
console.log(`Điểm trung bình của Koalas: ${avgKoalas}`);

if (avgDolphins >= 100 && avgDolphins > avgKoalas) {
    console.log("Dolphins thắng cuộc với điều kiện điểm tối thiểu!");
} else if (avgKoalas >= 100 && avgKoalas > avgDolphins) {
    console.log("Koalas thắng cuộc với điều kiện điểm tối thiểu!");
} else if (avgDolphins >= 100 && avgKoalas >= 100 && avgDolphins === avgKoalas) {
    console.log("Hòa với điều kiện điểm tối thiểu!");
} else {
    console.log("Không đội nào đạt đủ điểm tối thiểu để thắng.");
}

dolphinsScores = [97, 112, 101];
koalasScores = [109, 95, 106];

avgDolphins = (dolphinsScores[0] + dolphinsScores[1] + dolphinsScores[2]) / 3;
avgKoalas = (koalasScores[0] + koalasScores[1] + koalasScores[2]) / 3;

console.log(`\nĐiểm trung bình của Dolphins: ${avgDolphins}`);
console.log(`Điểm trung bình của Koalas: ${avgKoalas}`);

if (avgDolphins >= 100 && avgDolphins > avgKoalas) {
    console.log("Dolphins thắng cuộc với điều kiện điểm tối thiểu!");
} else if (avgKoalas >= 100 && avgKoalas > avgDolphins) {
    console.log("Koalas thắng cuộc với điều kiện điểm tối thiểu!");
} else if (avgDolphins >= 100 && avgKoalas >= 100 && avgDolphins === avgKoalas) {
    console.log("Hòa với điều kiện điểm tối thiểu!");
} else {
    console.log("Không đội nào đạt đủ điểm tối thiểu để thắng.");
}
