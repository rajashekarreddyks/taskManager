import React,  {useState}  from  "react";

function Task(){

    const [tasks, setTasks] = useState([{
        Task: "Build a task manager", TaskHead:"keyo", Members: 8, Action: "Going"
    }])

     return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
            <thread>
                <th>Task</th>
                <th>Task-head</th>
                <th>Members</th>
                <th>Action </th>
            </thread>
            <tbody>
               {
                tasks.map((task) => {
                 return  
                    <tr>
                        <td>{task.Task}</td>
                        <td>{task.TaskHead}</td>
                        <td>{task.Members}</td>
                        <td>{task.Action}</td>
                    </tr>
                })
               }
            </tbody>
            </div>
        </div>
    )
}

export default  Task;