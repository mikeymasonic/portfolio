import React from 'react';
import styles from './Bio.css';
import BioImage from '../../assets/images/michaelRomayBio.jpg';

const Bio = () => {
  return (
    <>
      <section className={styles.Bio}>
        <h1>Bio</h1>
        <section className={styles.Image}>
          <img src={BioImage} alt="Michael Romay Photo" />
        </section>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          consectetur aspernatur placeat, iusto inventore autem, molestiae
          consequuntur quia omnis eius maiores illum ex quasi iste temporibus
          aliquid? Assumenda, hic. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Amet commodi rem necessitatibus. Omnis sapiente
          aspernatur, ut neque dicta, iure quasi ullam voluptatibus natus facere
          nemo enim quam porro. Velit, omnis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aspernatur reprehenderit fugiat
          veritatis, sint, nulla quaerat itaque molestiae rem numquam id, a odio
          soluta omnis nostrum porro. Ullam at fugiat molestias! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Veniam ratione vero
          minima, inventore dicta quas distinctio impedit? Sunt, maxime modi. At
          necessitatibus mollitia voluptas perspiciatis quam tenetur excepturi,
          dolores neque! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Reprehenderit ipsam dolores vel? Totam dolore deleniti
          doloremque nam ea, voluptas voluptatibus repellendus earum ex qui
          recusandae, similique ullam laboriosam. Nesciunt, facilis?
        </p>
      </section>
    </>
  );
};

export default Bio;
