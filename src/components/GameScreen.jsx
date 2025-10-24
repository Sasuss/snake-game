import { useRef, useEffect } from 'react';

function GameScreen() {
  
  const canvasRef = useRef(null);


  useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');  
      ctx.strokeStyle = 'pink';
      ctx.beginPath();
      for (let i = 50; i <= 1000; i += 50) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 1000);
        ctx.stroke();
      }
      for (let i = 50; i <= 600; i += 50) {
        ctx.moveTo(0, i);
        ctx.lineTo(1000, i);
        ctx.stroke();
      }
      
      
      

  } , []);

  return (
    <canvas ref={canvasRef} width={1000} height={600} className='outline-solid'></canvas>
  )
}

export default GameScreen
