import useMeasure from 'react-use-measure';

import { ResizeObserver } from '@juggle/resize-observer';

export const Shape = () => {
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });
const width = '2px';
  return (
    <div ref={ref}>
    <svg width={bounds.width} height={400}>
      <defs>
      <linearGradient id={`Gradient`} key={`gradient-`}  x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor={`hsl(${((1) * 20) - 20}, 50%, 50%)`} />
      <stop offset="50%" stopColor={`hsl(0, 10%, 0%)`} />

      <stop offset="100%"  stopColor={`hsl(${(1) * 30}, 50%, 60%)`}/>
      </linearGradient>
      <style>
              {
                ` .line { stroke: url(#Gradient); }
                `
              }
    </style>
      </defs>
      <g transform='translate(460, 90)' className="bird3">
      <g transform='rotate(90) '>
      <polygon className='line' points="0,0 50,50 150,150" strokeWidth={width} />
    <polygon className='line' points="50,50 50,150, 200,200" fill="none" strokeWidth={width} />
    <polygon className='line' points="50,50 50,150, 20,200" fill="none" strokeWidth={width} />
    <polygon className='line' points="20,200, 50,50, 0,0" fill="none" strokeWidth={width} />
    <polygon className='line' points="50,50, 180,50 50,110" fill="none" strokeWidth={width} />
    </g>
    </g>
<g transform=" translate(80, 70)" className="bird2">

    <g transform="scale(0.5) rotate(-30)">
      <polygon className='line' points="0,0 50,50 150,150" strokeWidth={width} />
    <polygon className='line' points="50,50 50,150, 200,200" fill="none" strokeWidth={width} />
    <polygon className='line' points="50,50 50,150, 20,200" fill="none" strokeWidth={width} />
    <polygon className='line' points="20,200, 50,50, 0,0" fill="none" strokeWidth={width} />
    <polygon className='line' points="50,50, 180,50 50,110" fill="none" strokeWidth={width} />
    </g>
</g>
<g transform=" translate(40, -0)" className='bird1'>
    <g transform="scale(0.25) rotate(30)">
      <polygon className='line' points="0,0 50,50 150,150" strokeWidth={width} />
    <polygon className='line' points="50,50 50,150, 200,200" fill="none" strokeWidth={width} />
    <polygon className='line' points="50,50 50,150, 20,200" fill="none" strokeWidth={width} />
    <polygon className='line' points="20,200, 50,50, 0,0" fill="none" strokeWidth={width} />
    <polygon className='line' points="50,50, 180,50 50,110" fill="none" strokeWidth={width} />
    </g>
    </g>
    </svg>
    </div>
  )
}
