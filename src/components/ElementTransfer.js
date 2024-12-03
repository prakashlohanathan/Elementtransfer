import  { useState } from "react";
import "./ElementTransfer.css";

const ElementTransfer = () => {
  const [bucket1, setBucket1] = useState(["Apple", "Banana", "Cherry", "Date","graphes"]);
  const [bucket2, setBucket2] = useState([]);
  const [selectedBucket1, setSelectedBucket1] = useState([]);
  const [selectedBucket2, setSelectedBucket2] = useState([]);

  const handleTransfer = (source, setSource, destination, setDestination, selected, setSelected) => {
    const updatedSource = source.filter((item) => !selected.includes(item));
    setSource(updatedSource);
    setDestination([...destination, ...selected]);
    setSelected([]);
  };

  const transferAll = (source, setSource, destination, setDestination) => {
    setDestination([...destination, ...source]);
    setSource([]);
  };

  return (
    <><h1> Element Transfer</h1>
    <div className="container">
      {/* Bucket 1 */}
      <div className="bucket">
        <h3>Bucket 1</h3>
        <select
          multiple
          value={selectedBucket1}
          onChange={(e) =>
            setSelectedBucket1(Array.from(e.target.selectedOptions, (o) => o.value))
          }
          className="select-box"
        >
          {bucket1.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Transfer Buttons */}
      <div className="buttons">
        <button
          onClick={() =>
            handleTransfer(bucket1, setBucket1, bucket2, setBucket2, selectedBucket1, setSelectedBucket1)
          }
          disabled={selectedBucket1.length === 0}
        >
          Add &gt;&gt;
        </button>
        <button
          onClick={() =>
            handleTransfer(bucket2, setBucket2, bucket1, setBucket1, selectedBucket2, setSelectedBucket2)
          }
          disabled={selectedBucket2.length === 0}
        >
          &lt;&lt; Remove
        </button>
        <button
          onClick={() => transferAll(bucket1, setBucket1, bucket2, setBucket2)}
          disabled={bucket1.length === 0}
        >
          Add All &gt;&gt;
        </button>
        <button
          onClick={() => transferAll(bucket2, setBucket2, bucket1, setBucket1)}
          disabled={bucket2.length === 0}
        >
          &lt;&lt; Remove All
        </button>
      </div>

      {/* Bucket 2 */}
      <div className="bucket">
        <h3>Bucket 2</h3>
        <select
          multiple
          value={selectedBucket2}
          onChange={(e) =>
            setSelectedBucket2(Array.from(e.target.selectedOptions, (o) => o.value))
          }
          className="select-box"
        >
          {bucket2.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
    </>
  );
};

export default ElementTransfer;
