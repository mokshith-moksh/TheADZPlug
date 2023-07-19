import React, { useEffect, useRef } from 'react';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const W = window.innerWidth;
  const H = window.innerHeight;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = W;
    canvas.height = H;
    ctx.fillStyle = '#112';
    ctx.fillRect(0, 0, W, H);
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'darkblue';

    let stars = [];

    const createStar = () => {
      const x = Math.random() * W;
      const y = H;
      const radius = 2.5 * Math.random();
      const speed = 1 + Math.random() * 3;

      return {
        x,
        y,
        radius,
        speed,
      };
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, W, H);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.y -= star.speed;

        if (star.y + star.radius < 0) {
          // Reset the star position when it goes off the screen
          stars[i] = createStar();
        }
      }

      requestAnimationFrame(animate);
    };

    // Create initial stars
    for (let i = 0; i < 100; i++) {
      stars.push(createStar());
    }

    animate();

    const interval = setInterval(() => {
      // Refresh the animation after 10 seconds
      stars = [];
      for (let i = 0; i < 100; i++) {
        stars.push(createStar());
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [W, H]);

  const canvasStyle = {
    position: 'absolute',
    zIndex: -50,
    width: '100vw',
    overflow: 'hidden',
  };

  return <canvas ref={canvasRef} id="cnv" style={canvasStyle}></canvas>;
};

export default CanvasAnimation;
