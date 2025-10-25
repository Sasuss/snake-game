import GameScreen from "./components/GameScreen"

function App() {
  
  const Snake = (ctx, count) => {
    ctx.fillStyle = "green";
    ctx.fillRect(0 + count, 0, 50, 50);
    //console.log(count);
  }

  const Grid = ctx => {
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
  }
 
  return (
    <div className='flex justify-center items-center min-h-screen min-w-screen'>
      <GameScreen Snake={Snake} Grid={Grid} className='outline-solid'/>
    </div>
  )
}

export default App
