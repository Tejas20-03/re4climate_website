import React, { useEffect } from "react";
import bg from "../../assets/bg.jpg";
import man from "../../assets/man.png";
import cloud1 from "../../assets/clouds_1.png";
import cloud2 from "../../assets/clouds_2.png";
import mountainsLeft from "../../assets/mountain_left.png";
import mountainsRight from "../../assets/mountain_right.png";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    gsap.to("#bg", {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 1.5,
    });
    gsap.to("#man", {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 0.5,
    });
    gsap.to("#mountainL", {
      scrollTrigger: {
        scrub: 1,
      },
      x: -500,
    });
    gsap.to("#mountainR", {
      scrollTrigger: {
        scrub: 1,
      },
      x: 500,
    });
    gsap.to("#cloud1", {
      scrollTrigger: {
        scrub: 1,
      },
      x: 200,
    });
    gsap.to("#cloud2", {
      scrollTrigger: {
        scrub: 1,
      },
      x: -200,
    });
    gsap.to("#text", {
      scrollTrigger: {
        scrub: 1,
      },
      y: 500,
    });
  });
  return (
    <>
      <section className="aboutUs">
        <img id="bg" src={bg} alt="bg" className="img1" />
        <h2 id="text">RE4Climate</h2>
        <img src={man} alt="man" id="man" className="img1" />
        <img src={cloud1} alt="cloud" id="cloud1" className="img1" />
        <img src={cloud2} alt="cloud" id="cloud2" className="img1" />
        <img
          src={mountainsLeft}
          alt="mountain"
          id="mountainL"
          className="img1"
        />
        <img
          src={mountainsRight}
          alt="mountain"
          id="mountainR"
          className="img1"
        />
      </section>
      <div className="sec">
        <h2>About RE4Climate</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic sunt
          sequi facere iste, atque reprehenderit expedita odio molestias omnis
          quae unde iusto repudiandae voluptatem aperiam! Repudiandae
          accusantium illum dolorem. Quas assumenda pariatur animi voluptate
          nostrum exercitationem hic iste eos expedita illum error possimus
          fugiat delectus vitae quam nemo repellendus, laboriosam nobis nihil
          nesciunt consectetur perferendis! Optio numquam aliquam nemo! Dolorem,
          quia quo optio quam soluta rerum porro magnam. Nihil obcaecati
          delectus nisi at iusto, in officia perferendis, impedit debitis
          quaerat vel aliquam adipisci, fuga exercitationem veritatis omnis
          laudantium facilis! Totam deleniti magnam similique illo? Veniam
          corporis tenetur explicabo optio, quia autem repudiandae quod ad,
          accusamus molestias, alias a nemo ipsa perferendis quas recusandae
          quisquam atque asperiores? Consectetur, repudiandae quae. Eum, ipsam
          sapiente porro deleniti doloribus dolorum similique fuga animi
          exercitationem consectetur maxime commodi, harum neque! Similique
          deleniti quo placeat nam, minus ea nesciunt molestiae animi, rerum
          laboriosam, quas officiis! Autem at corporis tenetur sit velit est
          debitis tempore nihil iusto excepturi aut unde blanditiis vitae
          nostrum sequi, reprehenderit sed fuga non deleniti laborum magnam?
          Consequatur quis vitae sapiente corporis. Velit similique, numquam
          consectetur ad tenetur voluptate quo itaque repudiandae voluptatibus,
          quasi fuga eum accusamus reprehenderit nam sequi odit. Eos nihil enim
          in laboriosam vero rerum ab, optio quibusdam amet! Eveniet officiis
          repellat qui perspiciatis nam nisi magni eaque architecto deserunt.
          Laborum eligendi cupiditate odio? Quae libero fuga sequi, quas
          quibusdam reprehenderit illo possimus perspiciatis nam recusandae vel
          eligendi harum? Inventore exercitationem perspiciatis magnam eum
          cumque similique nam officia quo fugit dignissimos dolor, quia illo
          iure doloribus, ratione facilis dolore possimus repudiandae
          necessitatibus fugiat est aliquam facere beatae illum. Quos! Earum,
          inventore modi distinctio voluptates iusto dolor ratione provident
          quae delectus sunt in repellendus eligendi necessitatibus! Iure
          laborum ad, quo laudantium aliquid architecto nam ut quaerat libero
          dolorum rerum modi?
        </p>
      </div>
    </>
  );
}

export default About;
