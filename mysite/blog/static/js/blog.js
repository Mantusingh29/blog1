import React, { useState } from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import { useDrag } from 'https://cdn.skypack.dev/react-use-gesture';

const map = (value, imin, imax, omin, omax) => (
    (value - imin) / (imax - imin) * (omax - omin) + omin
);

const clamp = (num, min, max) => {
    return Math.min(Math.max(num, min), max);
};

const getElementCenter = el => {
  const {top, left, width, height} = el.getBoundingClientRect();
  return [left + width / 2, top + height / 2];
}

const getAngle = ([x, y], [left, top], from, range) => {
  const adjacent = left - x;
  const opposite = top - y;
  const radians = Math.atan(opposite / adjacent) + (adjacent < 0 ? Math.PI : 0) + Math.PI / 2;
  let angle = radians * (180 / Math.PI); // Convert angle to degrees

  // Normalize the angle to start at 'from', so that the full circle starts
  // and ends at that point.
  angle = angle - from + (angle >= 0 && angle < from ? 360 : 0);

  // When the angle is outside of the given range, we want the angle to go either to the
  // start of the range, or to the end of the range, based on proximity to either end.
  if (angle > 180 + range / 2) {
    angle = 0;
  }

  return clamp(angle, 0, range);
}

const RadialSlider = () => {
  const [angle, setAngle] = useState(30);
  const bind = useDrag(({values, event}) => {
    setAngle(getAngle(getElementCenter(event.target), values, 210, 300, 0, 100) + 30);
  });

  return (
    <div {...bind()} className='radial-slider'>
      <div className='knob' style={{'--angle': `${angle}deg`}}>
        <div className='teeth'/>
        <div className='cap'/>
        <div className='indicator'/>
      </div>
      <div className='numbers'>
        {[...new Array(11)].map((_, i) => (
          <div className='number' style={{'--angle': `${Math.round(i * (300 / 11)) - 45}deg`}}><div>{i + 1}</div></div>
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <div className='app'>
    <div className='label'>VOLUME</div>
    <RadialSlider/>
    <div className='tribute'>
      A tribute to <a href='https://www.youtube.com/watch?v=uMSV4OteqBE&ab_channel=dovenol' target='_blank'/>
    </div>
  </div>
);

ReactDOM.render(
  <App/>,
  document.body
);
