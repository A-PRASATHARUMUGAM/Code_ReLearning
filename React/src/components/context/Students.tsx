import {studentData} from "../../data/studentsdata";


const Students = () => {

   

 return (
    <div>
      <h1>Student Details</h1>

      {studentData.map((student) => (
        <div key={student.id}>
          <h2>{student.name}</h2>

          <p>Age: {student.age}</p>
          <p>Department: {student.department}</p>
          <p>Email: {student.email}</p>
          <p>Mark: {student.mark}</p>

          <hr />
        </div>
      ))}
    </div>
  );

  
}

export default Students