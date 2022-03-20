import { useState } from "react";
import "./style.css";

export default function Counter() {
	const [count, setCount] = useState(256);
	const handleClick = (type) => {
    switch (type) {
      case 'increase':
        setCount(count + 1);
        break;
      case 'decrease':
        setCount(count - 1);
        break;
      default:
        break;
    }

	};

	return (
		<div className="container">
			{/* 向上箭頭 */}
			<div
				className={`chevron chevron-up ${count >= 270 ? "visibility-hidden" : ''}`}
				onClick={() => handleClick('increase')}
			/>
			{/* 數字 */}
			<div className="number">{count}</div>
			{/* 向下箭頭 */}
			<div
				className="chevron chevron-down"
				onClick={() => handleClick('decrease')}
			/>
		</div>
	);
}
