import React from 'react';

import Line from './Line.js';

import styles from './List.module.css';

function List({ tractors }) {
  var sayi = 1;
  return (
    <div className={styles.List}>
      {tractors.posts
        .sort((a, b) => a.Marka.localeCompare(b.Marka))
        .map((tractor) => (
          <Line
            key={tractor._id}
            id={tractor._id}
            Marka={tractor.Marka}
            Model={tractor.Model}
            Yil={tractor.Yil}
            Ceker={tractor.Ceker}
            Ruhsat={tractor.Ruhsat}
            Saat={tractor.Saat}
            Fiyat={tractor.Fiyat}
            Muayene={tractor.Muayene_Tarihi}
            Numb={`${sayi++}-`}
          >

          </Line>
        ))}
    </div>
  );
}

export default List;
