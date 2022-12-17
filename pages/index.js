export default function Home() {
  // TODO: Login page.
  return <div>Home</div>;
}

export function getStaticProps() {
  return {
    redirect: {
      destination: "/products",
      permanent: false,
    },
  };
}
