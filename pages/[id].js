import React from "react";
import Layout from "../components/Layout";
import Details from "../components/Details";
import Link from "next/link";

function HomePage(tractor) {
  return (
    <Layout>
      <div className="Head">
        <Link href="/" as="/">
          <a>
            <h1 className="Title">ZEYREKLER</h1>
          </a>
        </Link>
        <Link href="/" as="/">
          <a className="Home">Ana Sayfa</a>
        </Link>
      </div>

      <Details tractor={tractor} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://api.airtable.com/v0/appCmWQmXtgsN2ZYW/araclar?view=Grid%20view`,
    {
      headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
    }
  );
  const posts = await res.json();

  const paths = posts?.records.map((record) => ({
    params: { id: record.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.airtable.com/v0/appCmWQmXtgsN2ZYW/araclar/${params.id}`,
    {
      headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
    }
  );
  const post = await res.json();

  const tractor = {
    _id: post?.id,
    Marka: post?.fields.marka,
    Model: post?.fields.model,
    Yil: post?.fields.yil,
    Ceker: post?.fields.ceker,
    Ruhsat: post?.fields.ruhsat,
    Saat: post?.fields.saat,
    Fiyat: post?.fields.fiyat,
    Muayene_Tarihi: post?.fields.muayene_tarihi,
  };

  return {
    props: {
      tractor,
    },
    revalidate: 3600, // In seconds
  };
}

export default HomePage;
