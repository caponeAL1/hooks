import React, { useState, useEffect } from 'react';

 

function App() {
  // Retrieve the visitor count from local storage, or set it to 1 if it doesn't exist
  const initialVisitorCount = parseInt(localStorage.getItem('visitorCount')) || 1;
  const [visitorCount, setVisitorCount] = useState(initialVisitorCount);

 

  // Update the visitor count in both state and local storage
  const updateVisitorCount = () => {
    const updatedCount = visitorCount + 1;
    setVisitorCount(updatedCount);
    localStorage.setItem('visitorCount', updatedCount.toString());
  };

 

  useEffect(() => {
    console.log('Visitor count incremented: ' + visitorCount);
  }, [visitorCount]);

 

  return (
    <center>
      <div className="App">
        <form>
          <input type="button" onClick={updateVisitorCount} value="Update Visitor" /> <br />
          <b>You are Visitor </b> {visitorCount}
        </form>
      </div>
    </center>
  );
}

 

export default App;