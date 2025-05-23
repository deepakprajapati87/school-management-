import  { useState } from "react";
import { HeadingThree } from "../headingThree/headingThree";


const initialStudents = [
  { id: 1, examName: "Midterm", subject: "Math", grade: "A", percentage: 95, date: "2025-04-01" },
  { id: 2, examName: "Final", subject: "Science", grade: "B", percentage: 80, date: "2025-04-15" },
  { id: 3, examName: "Quiz", subject: "English", grade: "A", percentage: 88, date: "2025-04-20" },
  { id: 4, examName: "Midterm", subject: "History", grade: "C", percentage: 70, date: "2025-03-18" },
  { id: 5, examName: "Final", subject: "Math", grade: "B", percentage: 82, date: "2025-05-01" },
  { id: 6, examName: "Quiz", subject: "Science", grade: "A", percentage: 90, date: "2025-05-10" },
    { id: 7, examName: "Midterm", subject: "Math", grade: "A", percentage: 95, date: "2025-04-01" },
  { id: 8, examName: "Final", subject: "Science", grade: "B", percentage: 80, date: "2025-04-15" },
  { id: 9, examName: "Quiz", subject: "English", grade: "A", percentage: 88, date: "2025-04-20" },
  { id: 10, examName: "Midterm", subject: "History", grade: "C", percentage: 70, date: "2025-03-18" },
  { id: 11, examName: "Final", subject: "Math", grade: "B", percentage: 82, date: "2025-05-01" },
  { id: 12, examName: "Quiz", subject: "Science", grade: "A", percentage: 90, date: "2025-05-10" },
];

export const StudentTable=() =>{
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);
  const itemsPerPage = 4;

  const handleSort = (column) => {
    const direction = sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(direction);
  };

  const handleEdit = (id, field, value) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, [field]: value } : student
    );
    setStudents(updated);
  };

  const handleSelect = (id) => {
    setSelectedIds((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((sid) => sid !== id) : [...prevSelected, id]
    );
  };

  const handleSelectAll = (visibleIds) => {
    const allSelected = visibleIds.every((id) => selectedIds.includes(id));
    setSelectedIds(allSelected ? selectedIds.filter((id) => !visibleIds.includes(id)) : [...new Set([...selectedIds, ...visibleIds])]);
  };

  const filteredStudents = students.filter((student) =>
    Object.values(student).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (!sortColumn) return 0;
    const valA = a[sortColumn];
    const valB = b[sortColumn];
    return sortDirection === "asc"
      ? valA > valB
        ? 1
        : -1
      : valA < valB
      ? 1
      : -1;
  });

  const totalPages = Math.ceil(sortedStudents.length / itemsPerPage);
  const paginatedStudents = sortedStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const visibleIds = paginatedStudents.map((student) => student.id);
  const allVisibleSelected = visibleIds.every((id) => selectedIds.includes(id));

  return (
    <div className="container card mb-4 p-3">
    <HeadingThree title='All Exam Results'/>
      {/* Search Filter */}
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => { 
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {/* Table */}
      <table className="table table-bordered table-striped">
        <thead className="">
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allVisibleSelected}
                onChange={() => handleSelectAll(visibleIds)}
              />
            </th>
            {["examName", "subject", "grade", "percentage", "date"].map((col) => (
              <th key={col} onClick={() => handleSort(col)} style={{ cursor: "pointer" }}>
                {col.charAt(0).toUpperCase() + col.slice(1)}
                {sortColumn === col && (sortDirection === "asc" ? " 🔼" : " 🔽")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedStudents.map((student) => (
            <tr key={student.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(student.id)}
                  onChange={() => handleSelect(student.id)}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={student.examName}
                  onChange={(e) => handleEdit(student.id, "examName", e.target.value)}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={student.subject}
                  onChange={(e) => handleEdit(student.id, "subject", e.target.value)}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={student.grade}
                  onChange={(e) => handleEdit(student.id, "grade", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={student.percentage}
                  onChange={(e) => handleEdit(student.id, "percentage", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="date"
                  className="form-control"
                  value={student.date}
                  onChange={(e) => handleEdit(student.id, "date", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

 {/* Pagination (Right-aligned with Prev/Next and Page Numbers) */}
<nav className="d-flex justify-content-end">
  <ul className="pagination">
    {/* Previous Button */}
    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
      <button
        className="page-link"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      >
        Previous
      </button>
    </li>

    {/* Page Numbers */}
    {[...Array(totalPages).keys()].map((n) => (
      <li
        key={n}
        className={`page-item ${currentPage === n + 1 ? "active" : ""}`}
      >
        <button
          className="page-link"
          onClick={() => setCurrentPage(n + 1)}
        >
          {n + 1}
        </button>
      </li>
    ))}

    {/* Next Button */}
    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
      <button
        className="page-link"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      >
        Next
      </button>
    </li>
  </ul>
</nav>


      {/* Selected IDs Preview */}
      <div className="alert alert-info">
        <strong>Selected IDs:</strong> {selectedIds.join(", ") || "None"}
      </div>
    </div>
  );
}

