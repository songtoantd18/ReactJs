import React, { useState } from "react";

const TodoList = () => {
  //   const storeJobs = JSON.parse(localStorage.getItem("listjobs"));
  //   const [listjobs, setListJobs] = useState(storeJobs ?? []);
  const [listjobs, setListJobs] = useState(() => {
    const storeJobs = JSON.parse(localStorage.getItem("listjobs"));
    return storeJobs ?? [];
  });

  const [job, setJob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setListJobs((prev) => {
      console.log("prev:", ...prev);
      const newJob = [...prev, job];
      console.log("newJob:", newJob);

      const jsonJob = JSON.stringify(newJob);
      localStorage.setItem("listjobs", jsonJob);
      return newJob;
    });
    setJob("nhap cong viec");
  };

  return (
    <div>
      <form>
        <input type="date" />

        <input
          placeholder="what do you do"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button onClick={handleSubmit}>add</button>
        <ul>
          {listjobs.map((job, index) => {
            return <li key={index}>{job}</li>;
          })}
        </ul>
      </form>
    </div>
  );
};

export default TodoList;
