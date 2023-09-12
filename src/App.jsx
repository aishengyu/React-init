import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div class="input-area ">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div class="imcomplete-area">
        <ul>
          <div class="list-row">
            <li>ああああ</li>
            <button>完成</button>
            <button>削除</button>
          </div>
          <div class="list-row">
            <li>ああああ</li>
            <button>完成</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div class="complete-area">
        <ul>
          <div class="list-row">
            <li>うううう</li>
            <button>戻す</button>
          </div>
          <div class="list-row">
            <li>おおお</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
