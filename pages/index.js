import React from "react";
import Layout from "../components/Layout";
import List from "../components/List";
import Link from "next/link";

function HomePage({ tractors }) {
  return (
    <Layout>
      <Link href="/" as="/">
        <a>
          <h1 className="Title">ZEYREKLER</h1>
        </a>
      </Link>
      <List tractors={tractors} />
    </Layout>
  );
}

export async function getStaticProps() {
  const finalList = [];
  const res = await fetch(
    `https://api.airtable.com/v0/appCmWQmXtgsN2ZYW/araclar?view=Grid%20view`,
    {
      headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
    }
  );
  const posts = await res.json();
  finalList.push(...posts.records);

  if (posts.offset) {
    const res2 = await fetch(
      `https://api.airtable.com/v0/appCmWQmXtgsN2ZYW/araclar?offset=${posts.offset}&view=Grid%20view`,
      {
        headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
      }
    );

    const posts2 = await res2.json();

    finalList.push(...posts2.records);
  }

  const tractors = finalList?.map((record) => ({
    _id: record?.id,
    Marka: record?.fields.marka,
    Model: record?.fields.model,
    Yil: record?.fields.yil,
    Ceker: record?.fields.ceker,
    Ruhsat: record?.fields.ruhsat,
    Saat: record?.fields.saat,
    Fiyat: record?.fields.fiyat,
    Muayene_Tarihi: record?.fields.muayene_tarihi,
  }));

  return {
    props: {
      tractors,
    },
    revalidate: 3600, // In seconds
  };
}

export default HomePage;
