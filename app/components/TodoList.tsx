import { ITask } from '@/types/tasks';
import Task from './Task';

interface Props {
  tasks: ITask[]
}

const TodoList: React.FC<Props> = ({ tasks }) => {
  return <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Tasks</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => <Task key={task.id} task={task}/>)}
    </tbody>
  </table>
</div>
};

export default TodoList