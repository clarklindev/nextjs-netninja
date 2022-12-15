import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
  //https://youtu.be/zueyEdRZQlk
  //fetch data at buildtime
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log('data: ', data);

  return {
    // props contains properties we want to make available inside the component
    props: {
      ninjas: data
    }
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>all ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Ninjas;
