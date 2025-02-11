import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface CustomCursorProps {
  cursorSize?: number;
  followerSize?: number;
  trailCount?: number;
  trailSize?: number;
  trailColor?: string;
  hoverScale?: number;
  clickScale?: number;
}

export const CustomCursor = ({
  cursorSize = 16,
  followerSize = 32,
  trailCount = 5,
  trailSize = 8,
  trailColor = 'rgba(96, 165, 250, 0.3)',
  hoverScale = 1.5,
  clickScale = 0.8,
}: CustomCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const trails = trailsRef.current;

    // Create trail elements
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'fixed rounded-full pointer-events-none mix-blend-screen z-50 -translate-x-1/2 -translate-y-1/2';
      trail.style.width = `${trailSize}px`;
      trail.style.height = `${trailSize}px`;
      trail.style.backgroundColor = trailColor;
      document.body.appendChild(trail);
      trails.push(trail);
    }

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0,
      });

      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
      });

      // Animate trails with delay
      trails.forEach((trail, index) => {
        gsap.to(trail, {
          x: mouseX,
          y: mouseY,
          duration: 0.3,
          delay: index * 0.02,
        });
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: clickScale, duration: 0.1 });
      gsap.to(follower, { scale: clickScale, duration: 0.1 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.1 });
      gsap.to(follower, { scale: 1, duration: 0.1 });
    };

    const onMouseEnterInteractive = () => {
      gsap.to(cursor, { scale: hoverScale, duration: 0.2 });
      gsap.to(follower, { scale: hoverScale, duration: 0.2 });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(follower, { scale: 1, duration: 0.2 });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });

      trails.forEach(trail => trail.remove());
    };
  }, [cursorSize, followerSize, trailCount, trailSize, trailColor, hoverScale, clickScale]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed rounded-full pointer-events-none mix-blend-difference z-50 -translate-x-1/2 -translate-y-1/2"
        style={{ width: `${cursorSize}px`, height: `${cursorSize}px`, backgroundColor: 'white' }}
      />
      <div
        ref={followerRef}
        className="fixed rounded-full pointer-events-none mix-blend-difference z-50 -translate-x-1/2 -translate-y-1/2"
        style={{ width: `${followerSize}px`, height: `${followerSize}px`, border: '2px solid white' }}
      />
    </>
  );
};