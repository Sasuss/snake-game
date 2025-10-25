import { useRef, useEffect } from 'react';

const useCanvas = (Snake, Grid) => {
  const ref = useRef();



  useEffect(() => {
      const canvas = ref.current;
      const ctx = canvas.getContext('2d');  

      
      let count = 0;
      let animation;
      Grid(ctx);
      const Renderer = () => {
        count++;
        Snake(ctx, count);
        animation = window.requestAnimationFrame(Renderer);
        return () => window.cancelAnimationFrame(animation);
      }

      Renderer();
      
  } , [Grid, Snake]);
  

  return ref;
}

  


export default useCanvas
