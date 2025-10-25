import useCanvas from "./useCanvas"

const GameScreen = props => {
  const {Snake, Grid ,...rest} = props;
  const ref = useCanvas(Snake, Grid);



  return (
    <canvas ref={ref} width={1000} height={600} {...rest}/>
  )
}

  


export default GameScreen
