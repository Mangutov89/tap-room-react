import React from "react";


function Header(){
  return (
    <div>
      <style jsx>{`
        h1 {
          background-color: black;
          color: white;
          text-align: center;
          font-family: monospace;
          font-size: 80px;
          font-weight: bold;
          padding: 25px 0;
        }
      `}
      <h1>PDX Tap List</h1>
    </div>
  );
}

export default Header;
