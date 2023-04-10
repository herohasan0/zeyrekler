import React from "react";
import Detailsline from "./Detailsline";
import styles from "./Details.module.css";
import { useRouter } from "next/router";

function Details() {
  const router = useRouter();
  const tractor = router.query;
  return (
    <div>
      <div>
        <Detailsline Text="Marka" Value={tractor?.marka} />
        <Detailsline Text="Model" Value={tractor?.model} />
        <Detailsline Text="Yıl" Value={tractor?.yil} />
        <Detailsline Text="Ceker" Value={tractor?.ceker} />
        <Detailsline Text="Ruhsat" Value={tractor?.ruhsat} />
        <Detailsline Text="Plaka" Value={tractor?.plaka} />
        <Detailsline Text="Saat" Value={tractor?.saat} />
        <Detailsline Text="Muayene Tarihi" Value={tractor?.muayene} />
        <Detailsline
          className={styles.Fiyat}
          Text="Fiyat"
          Value={tractor?.fiyat}
        />
        <Detailsline Text="Kredi Miktarı" Value={tractor?.kredi} />
        <Detailsline
          className={styles.Aciklama}
          Text="Açıklama"
          Value={tractor?.aciklama}
        />
      </div>
    </div>
  );
}

export default Details;
