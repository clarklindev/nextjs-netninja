//because it is a dynamic path, getStaticPaths() tells next.js how many pages need to be made based on data..
export const getStaticPaths = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

// receives context object, runs for each item/pages from getStaticPaths()
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
  const data = await (await res).json();
  return {
    props: { ninja: data }
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
