export type todo = {
  id: number;
  task: string;
  status: boolean;
  date: string;
};

export const TaskView = ({
  props,
  onToggle,
}: {
  props: todo;
  onToggle: (id: number) => void;
}) => {
  return (
    <div>
      <div key={props.id}>
        <input
          type="checkbox"
          checked={props.status}
          onChange={() => onToggle(props.id)}
        />
        <span>{props.task}</span>
      </div>
    </div>
  );
};
