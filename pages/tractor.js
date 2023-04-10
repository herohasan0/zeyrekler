import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Details from "../components/Details";

export default function Tractor() {
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

      <Details />
    </Layout>
  );
}
