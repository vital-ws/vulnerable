import { useRef, useEffect } from 'react'

const Game = (props) => {

  const canvasRef = useRef(null)

  // Initial settings for coin
  const coin = {
    x: 0,
    y: 0,
    radius: 40,
    bounce: 0.70,
    velX: 5,
    velY: -10,
  }

  // Draw function with basic config
  const draw = (ctx, frameCount) => {

    const image = new Image()
    image.src = rubl
    
    image.onload = () => {  
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.imageSmoothingEnabled = false
      ctx.drawImage(image, coin.x - coin.radius, coin.y - coin.radius)
    }
  }

  // Mouse click event function
  const mouseClick = e => {
    const rect = canvasRef.current.getBoundingClientRect()
  
    // Get click coordinates
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Distance from mouse click to object
    const dist = Math.sqrt(((x - coin.x) * (x - coin.x)) + ((y - coin.y) * (y - coin.y)))

    if (dist < coin.radius) {
       //TODO: event
    }
  }

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    // Set init position for coin (center)
    coin.x = context.canvas.width / 2
    coin.y = context.canvas.height / 2

    let frameCount = 0
    let frameId

    // Recursive function for render animation
    const render = () => {
      frameCount++
      draw(context, frameCount)
      frameId = window.requestAnimationFrame(render)
    }

    render()

    return () => window.cancelAnimationFrame(frameId)

  }, [draw])

  return <canvas className="game-canvas" ref={canvasRef} width={650} height={650} onMouseDown={mouseClick} />
}

export default Game