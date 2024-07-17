function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  //   return students.findIndex((student) => student === searchStudent);

  let start = 0;
  let end = students.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (students[mid] === searchStudent) {
      return mid;
    } else if (students[mid] < searchStudent) {
      start = mid + 1;
    } else end = mid - 1;
  }
  return -1;
}
const students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
const searchStudent = "John";
console.log(findStudentIndex(students, searchStudent));
// ตอบคำถามตรงนี้จ้า
// เป็น O(Log n) เพราะมีการลดจำนวนลูปลงครึ่งนึงในแต่ละรอบ
// ส่วนของแถมน่าจะเป็น O(n) ไม่แน่ใจเรื่องการทำงานของมัน แต่คิดว่าน่าจะแค่ไล่เช็คทีละตัวเลยมองเป็น O(n)
