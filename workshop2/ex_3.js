const initialStudents = [
  { id: '6001', name: 'Alice', major: 'CE', score: 85, contact: { email: 'alice@ce.ac.th', phone: '0811111111' } },
  { id: '6002', name: 'Bob', major: 'IT', score: 42, contact: { email: 'bob@it.ac.th', phone: '0822222222' } },
  { id: '6003', name: 'Charlie', major: 'CE', score: 68, contact: { email: 'charlie@ce.ac.th', phone: '0833333333' } },
  { id: '6004', name: 'David', major: 'IT', score: 78, contact: { email: 'david@it.ac.th', phone: '0844444444' } },
  { id: '6005', name: 'Eve', major: 'CE', score: 48, contact: { email: 'eve@ce.ac.th', phone: '0855555555' } },
  { id: '6006', name: 'Frank', major: 'IT', score: 91, contact: { email: 'frank@it.ac.th', phone: '0866666666' } }
];

const getNames = (students) => {
  return students.map((student) => student.name);
};


const getPassedStudents = (students) => {
  return students.filter((student) => student.score >= 50);
};


const getTotalScore = (students) => {
  return students.reduce((total, student) => total + student.score, 0);
};


const getAverageScore = (students) => {
  if (students.length === 0) {
    return 0;
  }
  const average = getTotalScore(students) / students.length;
  return Number(average.toFixed(2));
};


const countByGrade = (students) => {
  return students.reduce((acc, student) => {
    let grade = 'F';
    if (student.score >= 80) grade = 'A';
    else if (student.score >= 70) grade = 'B';
    else if (student.score >= 60) grade = 'C';
    else if (student.score >= 50) grade = 'D';

    acc[grade] = (acc[grade] || 0) + 1;
    return acc;
  }, {});
};


const getTopStudent = (students) => {
  return students.reduce((topStudent, currentStudent) => {
    if (topStudent === null || currentStudent.score > topStudent.score) {
      return currentStudent;
    }
    return topStudent;
  }, null);
};

const avgPassedCeScore = initialStudents
  .filter((student) => student.major === 'CE' && student.score >= 50)
  .map((student) => student.score)
  .reduce((sum, score, _, array) => sum + score / array.length, 0);

console.log('=== ผลการทำงานกับข้อมูลปกติ ===');
console.log('getNames:', getNames(initialStudents));
console.log('getPassedStudents:', getPassedStudents(initialStudents));
console.log('getTotalScore:', getTotalScore(initialStudents));
console.log('getAverageScore:', getAverageScore(initialStudents));
console.log('countByGrade:', countByGrade(initialStudents));
console.log('getTopStudent:', getTopStudent(initialStudents));
console.log('avgPassedCeScore (ส่วนที่ 2):', avgPassedCeScore);

console.log('\n=== ทดสอบกรณีขอบ (Edge Cases: []) ===');
console.log('getNames([]):', getNames([]));                       
console.log('getPassedStudents([]):', getPassedStudents([]));       
console.log('getTotalScore([]):', getTotalScore([]));              
console.log('getAverageScore([]):', getAverageScore([]));           
console.log('countByGrade([]):', countByGrade([]));                 
console.log('getTopStudent([]):', getTopStudent([]));               