import React, { useState } from "react";

const TodoListP2 = () => {
  const [job, setJobs] = useState("");
  const [listjobs, setListJobs] = useState([]);
  console.log("listjobs:", listjobs);

  /////////////////////////////
  const deleteHandler = (index) => {
    console.log("index:", index);
    listjobs.splice(index, 1);
    setListJobs([...listjobs]);
  };
  /////////////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    setJobs("");
    setListJobs((prev) => {
      console.log("prev:", prev);
      const newjob = [...prev, job];
      return newjob;
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={job} onChange={(e) => setJobs(e.target.value)} />
        {/* <button onClick={handleSubmit}> push</button> */}
        <button> push</button>

        <ul>
          {listjobs.map((job, index) => {
            return (
              <li key={index}>
                {job}
                {<button onClick={() => deleteHandler(index)}>xoa2</button>}
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
};

export default TodoListP2;
