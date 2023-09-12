import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <ul>
          <div>
            <li>ああああ</li>
            <button>完成</button>
            <button>削除</button>
          </div>
          <div>
            <li>ああああ</li>
            <button>完成</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <ul>
          <div>
            <li>うううう</li>
            <button>戻す</button>
          </div>
          <div>
            <li>おおお</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
