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
            className={`flex items-center justify-center w-6 h-6 rounded-md border-2 cursor-pointer transition-all duration-200 ${
              props.status
                ? "bg-green-500 border-green-500 text-white"
                : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"
            }`}
          >
            {props.status && (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </label>
        </div>

        {/* タスクテキスト */}
        <span
          className={`flex-1 text-gray-900 transition-all duration-200 ${
            props.status ? "line-through text-gray-500" : ""
          }`}
        >
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
