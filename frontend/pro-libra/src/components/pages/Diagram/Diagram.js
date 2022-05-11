import React from 'react';
import './Diagram.css';
import DiagramKategoriBuku from './DiagramKategoriBuku';
import DiagramLogPengunjung from './DiagramLogPengunjung';
import DiagramPeminjam from './DiagramPeminjam';

function Diagram() {

  return (
    <div className="diagram">
      <DiagramPeminjam/>
      <br/>
     <DiagramLogPengunjung/>
     <br/>
     <DiagramKategoriBuku/>
    </div>
  )
}

export default Diagram
