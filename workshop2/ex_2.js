const initialStudents = [
  { id: '6001', name: 'Alice', major: 'CE', score: 85, contact: { email: 'alice@ce.ac.th', phone: '0811111111' } },
  { id: '6002', name: 'Bob', major: 'IT', score: 42, contact: { email: 'bob@it.ac.th', phone: '0822222222' } },
  { id: '6003', name: 'Charlie', major: 'CE', score: 68, contact: { email: 'charlie@ce.ac.th', phone: '0833333333' } },
  { id: '6004', name: 'David', major: 'IT', score: 78, contact: { email: 'david@it.ac.th', phone: '0844444444' } },
  { id: '6005', name: 'Eve', major: 'CE', score: 48, contact: { email: 'eve@ce.ac.th', phone: '0855555555' } },
  { id: '6006', name: 'Frank', major: 'IT', score: 91, contact: { email: 'frank@it.ac.th', phone: '0866666666' } }
];

const findById = (students, id) => students.find((s) => s.id === id);

const findByMajor = (students, major) => students.filter((s) => s.major === major);

const hasFailingStudent = (students) => students.some((s) => s.score < 50);

const getEmail = (students, id) => {
  const student = findById(students, id);
  return student?.contact?.email ?? 'ไม่พบข้อมูลติดต่อ';
};

console.log('Search ID 9999:', findById(initialStudents, '9999'));
console.log('Get Email ID 9999:', getEmail(initialStudents, '9999'));

const newStudentNoContact = { id: '6007', name: 'Grace', major: 'CE', score: 75 };
const updatedStudents = [...initialStudents, newStudentNoContact];

console.log('Get Email No Contact Student:', getEmail(updatedStudents, '6007'));