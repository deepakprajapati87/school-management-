
const kidsData = [
  {
    id: 1,
    name: "Jessia Rose",
    gender: "Female",
    class: "2",
    roll: "#2225",
    section: "A",
    admissionId: "#0021",
    admissionDate: "07.08.2017",
    avatar: "https://cdn-icons-png.flaticon.com/512/706/706830.png"
  },
  {
    id: 2,
    name: "Jack Steve",
    gender: "Male",
    class: "3",
    roll: "#2205",
    section: "A",
    admissionId: "#0045",
    admissionDate: "07.08.2017",
    avatar: "https://cdn-icons-png.flaticon.com/512/236/236831.png"
  }
];

export const MyKids=()=> {
  return (
    <div className="container my-5">
      <div className="row">
        {kidsData.map((kid) => (
          <div className="col-md-6 mb-4" key={kid.id}>
            <div className=" p-4 h-100" style={{backgroundColor:'#fafafa', padding:'40px 30px 28px'}}>
              <div className="d-flex">
                <img
                  src={kid.avatar}
                  alt={kid.name}
                  className="rounded-circle me-4"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <div>
                  <p><strong>Name:</strong> {kid.name}</p>
                  <p><strong>Gender:</strong> {kid.gender}</p>
                  <p><strong>Class:</strong> {kid.class}</p>
                  <p><strong>Roll:</strong> {kid.roll}</p>
                  <p><strong>Section:</strong> {kid.section}</p>
                  <p><strong>Admission Id:</strong> {kid.admissionId}</p>
                  <p><strong>Admission Date:</strong> {kid.admissionDate}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


