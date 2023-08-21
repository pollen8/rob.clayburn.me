import { useState } from 'react';
import useMeasure from 'react-use-measure';

import { JournalRow } from './supabase';

type Props = {
  entries: JournalRow[];
}

const radius = 50;
const largeRadius = 100;
export const TimeLine = ({
entries,
}: Props) => {
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });
  const [active, setActive] = useState(-1);
  console.log('active', active);
  return (
    <div ref={ref} style={{width: '100%'}}>
    <svg width={bounds.width} height="300px">
    <defs>
    {
        entries.map((entry, i) => 
    <linearGradient id={`Gradient${i}`} key={`gradient-${i}`}  x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor={`hsl(${((i + 1) * 20) - 20}, 50%, 50%)`} />
      <stop offset="50%" stopColor={`hsl(0, 10%, 0%)`} />

      <stop offset="100%"  stopColor={`hsl(${(i + 1) * 30}, 50%, 60%)`}/>
      </linearGradient>
        )}
          <style>
              {
              entries.map((entry, i) => {
                return ` #circle${i} { fill: url(#Gradient${i}); }
                `
              })
            }
    </style>
      </defs>
      {
        entries.map((entry, i) => {
          let thisRadius = radius;
          let offset = 50;
          if (active === i) {
            thisRadius = largeRadius;
          } else {
            if (i < active) {
              offset = 0;
            }
            if (i > active) {
              offset = 100;
            }
          }
          return (
          <circle 
          key={entry.id}
          id={`circle${i}`}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(-1)}
            cx={(i * ((radius * 2))) + (largeRadius) + offset} 
            cy={radius} r={thisRadius}
           fill={`hsl(${i * 20}, 50%, 50%)`}>
            </circle>
          )
        })
      }
      </svg>
      </div>
  )
}
