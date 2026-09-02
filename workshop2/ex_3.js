const initialStudents = [
  { id: '6001', name: 'Alice', major: 'CE', score: 85, contact: { email:'alice@ce.ac.th', phone: '0811111111' } },
  { id: '6002', name: 'Bob', major: 'IT', score: 42, contact: { email:'bob@it.ac.th', phone: '0822222222' } },
  { id: '6003', name: 'Charlie', major: 'CE', score: 68, contact: { email:'charlie@ce.ac.th', phone: '0833333333' } },
  { id: '6004', name: 'David', major: 'IT', score: 78, contact: { email:'david@it.ac.th', phone: '0844444444' } },
  { id: '6005', name: 'Eve', major: 'CE', score: 48, contact: { email:'eve@ce.ac.th', phone: '0855555555' } },
  { id: '6006', name: 'Frank', major: 'IT', score: 91, contact: { email:'frank@it.ac.th', phone: '0866666666' } }
];


const getNames = (students) =>{
    return students.map((students)=> students.name);
};

const getPassedStudents = (students) =>{
    return students.fillter((student)=>student.score >=50);

};

const getTotalScore = (students) =>{
    return students.ruduce((total,student)=> total + student.score >=0);
};

const getAverageScore = (students) => {
    if (students.length ===0 ){
        return 0;
        
    }
    const average = getTotalScore(students) / students.length;
    return Number(average.toFixed(2));
}