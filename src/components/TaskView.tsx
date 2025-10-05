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
    <div
      className={`task-card fade-in ${props.status ? "task-completed" : ""}`}
      role="listitem"
    >
      <div className="flex items-center space-x-3">
        {/* カスタムチェックボックス */}
        <div className="relative">
          <input
            type="checkbox"
            checked={props.status}
            onChange={() => onToggle(props.id)}
            className="sr-only"
            id={`task-${props.id}`}
            aria-label={`タスク「${props.task}」を${
              props.status ? "未完了" : "完了"
            }にする`}
          />
          <label
            htmlFor={`task-${props.id}`}
            className={`flex items-center justify-center w-5 h-5 rounded border-2 cursor-pointer transition-all duration-200 ${
              props.status
                ? "bg-green-500 border-green-500 text-white"
                : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"
            }`}
          ></label>
        </div>

        {/* タスクテキスト */}
        <span className="flex-1 text-gray-900 text-base font-medium transition-all duration-200">
          {props.task}
        </span>

        {/* ステータスバッジ */}
        <div
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            props.status
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {props.status ? "完了" : "未完了"}
        </div>
      </div>
    </div>
  );
};
