import Head from "next/head";

export default function Home({ posts }) {
  // console.log(posts);
  return (
    <div>
      <Head>
        <title>Next Practice</title>
        <meta keywords="Practice by next js" />
        <meta contents="Practice by next js" />
      </Head>
      <h1>Store React Practice</h1>
      <ul>
        {posts.itemList.map((itemList) => (
          <li key={itemList.id}>{itemList.item_name}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3065/api/items");
  const posts = await res.json();
  return {
    props: { posts },
  };
};
