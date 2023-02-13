import { useState } from 'react';

let nextId = 0;
let nextdes=0;


  

export default function List() {
  const [name, setName] = useState('');
  const [description, SetDescription] = useState([]);

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };



  

  return (
    <>
      <h1>Task</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      {/* <input
        value={description}
        onChange={e => setName(e.target.value)}
      /> */}
    

      <button onClick={() => {
        setName('');
        description.push({
          description: nextdes,
          name: name,
          
        });
      }}>Submit</button>
      <ul>
        {description.map(description => (
          <li key={description.id}>{description.name}</li>
        ))}
      </ul>

      Select the priority:
      <div className="priority">
        <input
          type="checkbox"
          id="priority"
          name="priority"
          //value="true"
          checked={isChecked}
          onChange={handleOnChange}
        />
        Priority
      </div>
      <div className="complete">
        <input
          type="checkbox"
          id="complete"
          name="complete"
          //value="false"
          checked={isChecked}
          onChange={handleOnChange}
        />
        isCompleted
      </div>
      <div className="result">
        Above checkbox is {isChecked ? "checked" : "un-checked"}.
      </div>

    

    </>
  );
}
