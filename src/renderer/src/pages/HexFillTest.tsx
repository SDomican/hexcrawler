import React, { useMemo, useRef, useState, useEffect } from 'react';
import '../assets/global.css';
import styles from '../components/hexagon.module.css';
import SideBar from '../components/SideBar';
import { HexGrid, Layout, Hexagon } from 'react-hexgrid';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function HexFillTest(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Resize observer to track container size
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    const resizeObserver = new ResizeObserver(updateSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => {
      window.removeEventListener('resize', updateSize);
      if (containerRef.current) resizeObserver.unobserve(containerRef.current);
    };
  }, []);

  // Memoized Hex component
  const MemoHex = React.memo(({ q, r, s, className }: { q: number; r: number; s: number; className: string }) => {
    return <Hexagon q={q} r={r} s={s} className={className} />;
  });

  const hexes = useMemo(() => {
    const result: React.JSX.Element[] = [];
    const width = 100;
    const height = 100;
    for (let r = 0; r < height; r++) {
      const rOffset = Math.floor(r / 2);
      for (let q = -rOffset; q < width - rOffset; q++) {
        const s = -q - r;
        result.push(<MemoHex key={`${q},${r},${s}`} q={q} r={r} s={s} className={styles.whiteBorderHex} />);
      }
    }
    return result;
  }, []);

  return (
    <TransformWrapper>
      <div id='trnasfo' style={{ display: 'flex', height: '100vh' }}>
        <SideBar />
        <div ref={containerRef} style={{ flex: 1, position: 'relative' }}>
          <TransformComponent
            wrapperStyle={{
              border: '2px solid blue',
              width: '100%',
              height: '100%',
              backgroundColor: 'red',
            }}
          >
            <div>
              <HexGrid width={dimensions.width} height={dimensions.height} viewBox="50 -50 700 800">
                <Layout size={{ x: 5, y: 5 }} flat={false} spacing={1} origin={{ x: -50, y: -40 }}>
                  {hexes}
                </Layout>
              </HexGrid>
            </div>
          </TransformComponent>
        </div>
      </div>
    </TransformWrapper>
  );
}
