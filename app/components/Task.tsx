import { ITask } from '@/types/tasks';

interface Props {
    task: ITask
}

const Task: React.FC<Props> = ({task}) => {
  return (
    <tr key={task.id}>
        <td>{task.text}</td>
        <td>Blue</td>
    </tr>
    )
}

export default Task;
