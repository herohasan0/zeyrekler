import React from "react";
import Detailsline from "./Detailsline";
import styles from "./Details.module.css";

function Details({ tractor }) {
  return (
    <div>
      <div>
        <Detailsline Text="Marka" Value={tractor?.tractor?.Marka} />
        <Detailsline Text="Model" Value={tractor?.tractor?.Model} />
        <Detailsline Text="Yıl" Value={tractor?.tractor?.Yil} />
        <Detailsline Text="Ceker" Value={tractor?.tractor?.Ceker} />
        <Detailsline Text="Ruhsat" Value={tractor?.tractor?.Ruhsat} />
        <Detailsline Text="Plaka" Value={tractor?.tractor?.Plaka} />
        <Detailsline Text="Saat" Value={tractor?.tractor?.Saat} />
        <Detailsline
          Text="Muayene Tarihi"
          Value={tractor?.tractor?.Muayene_Tarihi}
        />
        <Detailsline
          className={styles.Fiyat}
          Text="Fiyat"
          Value={tractor?.tractor?.Fiyat}
        />
        <Detailsline
          Text="Kredi Miktarı"
          Value={tractor?.tractor?.Kredi_Miktari}
        />
        <Detailsline
          className={styles.Aciklama}
          Text="Açıklama"
          Value={tractor?.tractor?.Aciklama}
        />
      </div>
    </div>
  );
}

export default Details;
