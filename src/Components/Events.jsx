import React from "react";

function Events() {
  const containerRef = React.useRef(null);
  const [state, setState] = React.useState("");
  const [change, setChange] = React.useState("");

  const pRefs = React.useRef([]);

  const handleHover = (text) => {
    setState(text);
  };

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // React.useEffect(() => {
  //   const handleResize = (event) => {
  //     // Handle the resize event here
  //     console.log("Element resized:", event);
  //     setState("i'm getting resized !!!!");
  //     console.log("hi");
  //   };

  //   const myElement = containerRef.current; // Get the DOM element from the ref
  //   console.log(myElement);
  //   myElement.addEventListener("resize", handleResize); // Add event listener

  //   // Clean up the event listener when component unmounts
  //   return () => {
  //     myElement.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div
      className="parent"
      style={{
        maxHeight: "1000px",
        minWidth: "800px",
        overflow: "scroll",
      }}
      onScroll={(e) => {
        console.log(e.target.scrollTop);
        if (e.target.scrollTop > 300) setState(" where are you going");
      }}
    >
      <form
        action="post"
        className="event"
        onSubmit={(e) => {
          e.preventDefault();
          if (change) {
            setState("i submit it this :" + change);
          }
        }}
      >
        <div
          className="explainer"
          ref={containerRef}
          onClick={() => {
            setState("you Clicked me");
          }}
          onMouseOver={() => {
            setState("you are annoying me stop");
          }}
          onMouseOut={() => {
            setState("Noo come back !!!!!");
          }}
        >
          Explainer
        </div>
        <input
          type="text"
          name="input"
          value={change}
          // onChange={(e) => {
          //   setChange(e.target.value);
          //   if (change) {
          //     setState("Wow I'm changing that's my change :" + change);
          //   }
          // }}
          onKeyDown={(e) => {
            setState("|you pressed : " + e.key);
          }}
          onKeyUp={(e) => {
            setState("|you RELEASED : " + e.key);
          }}
          // onFocus={() => {
          //   setState("that's right focus on me");
          // }}
          // onBlur={() => {
          //   setState("Noo don't leave me ");
          // }}
          autoComplete="off"
        />
        <button type="submit">submit</button>
        <div className="shower">{state}</div>
      </form>

      {data
        .filter((item, index) => index < 10)
        .map((item, index) => {
          return (
            <p
              key={index}
              className="para"
              ref={(el) => (pRefs.current[index] = el)}
              onMouseEnter={() => handleHover(pRefs.current[index].textContent)}
            >
              {item.title}
            </p>
          );
        })}

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae
        debitis ut eos nobis impedit porro ipsum iste dolorem quae placeat quod
        labore ad et facilis consequuntur, sit, animi, voluptate cupiditate.
        Iure at praesentium accusamus quod ut maiores. Quos corrupti eligendi
        debitis animi? Numquam exercitationem molestiae placeat repellat
        cupiditate fugiat voluptatibus expedita eius illum suscipit minima
        dolorum ab sint quaerat quibusdam possimus ducimus, in vero architecto
        culpa! Nobis voluptatem ad vitae beatae sequi delectus eaque officiis
        esse nisi error nam accusantium asperiores, iste voluptates accusamus
        quidem optio enim obcaecati sit fugit laborum natus odit. Eligendi nam
        quod ipsam pariatur illum nobis iure. Veritatis voluptatem qui quam
        nostrum minus aliquid aspernatur eius consequatur quas quaerat
        repellendus necessitatibus quidem accusantium culpa, tempore illo nulla
        autem, illum non voluptas molestias voluptatum. Dolorum commodi iste
        libero consectetur sint modi magni, doloribus vitae! Ex explicabo
        aliquam expedita quis atque nemo autem porro magnam nisi, dignissimos
        impedit fuga, voluptas nostrum corporis cupiditate aliquid harum totam,
        voluptatibus at inventore quaerat. Deserunt, quia. Adipisci enim
        corrupti, nam quas delectus iste error atque commodi necessitatibus qui,
        aliquam ea tenetur provident cum excepturi voluptate ad voluptatum quia
        quo! Explicabo expedita voluptatem, laborum inventore nulla ullam enim
        quasi fugit cum similique perspiciatis atque iste et, temporibus sit,
        maiores eius vero labore nam? Aliquam repellat itaque similique, harum
        obcaecati voluptatum! Explicabo temporibus, quis natus maiores beatae
        atque repudiandae, aliquid blanditiis a voluptatem neque! Asperiores
        maiores ut quia numquam natus! Iure vero dolore adipisci in quam quaerat
        harum quae rem qui aliquam odio voluptatibus laboriosam, deserunt
        obcaecati magnam iste ducimus cupiditate reprehenderit tempora vel.
        Vitae, modi architecto quis sint officia exercitationem voluptatem error
        adipisci asperiores repellendus nam harum eos dolore ex laboriosam non,
        beatae obcaecati fuga blanditiis! Quos dolore necessitatibus soluta sit
        adipisci deleniti. Ipsa doloribus sequi architecto, ipsam consequuntur
        delectus eaque omnis praesentium, dicta error eligendi autem ea atque
        provident amet facere aspernatur iusto iste, eveniet voluptate. Ratione
        tempore sit quasi qui, commodi minus? Doloribus atque, omnis fugiat
        saepe amet modi suscipit debitis sapiente id iusto. Nulla tempore
        voluptate, veritatis consectetur veniam doloremque nemo facere officiis
        aliquid fuga repudiandae beatae ex minima in aut vitae odit dolorem enim
        esse distinctio voluptatibus quam porro unde. Inventore dicta
        praesentium atque repellat maxime nulla excepturi ad, aspernatur, quis
        officiis iusto nostrum vitae perspiciatis, quam delectus? Nisi
        dignissimos ex quo eaque, architecto, quod, fuga officiis totam ipsam
        facilis odio tempore error odit ad cupiditate! Possimus iure corporis
        voluptatum voluptates tempore a autem perferendis, tempora aut, ipsum
        facere numquam accusantium nostrum quas accusamus obcaecati corrupti
        exercitationem ex dignissimos fuga pariatur doloremque? Recusandae
        consequuntur accusamus vitae quod voluptatem minima dolor eveniet nobis
        quo expedita eaque adipisci tempora, perferendis, inventore nisi
        reiciendis libero iusto molestiae amet eum repellat quaerat voluptates
        cum quasi. Vitae sint maiores vel error natus officia? Distinctio
        praesentium libero veniam officiis dignissimos soluta. Natus rem
        voluptates animi asperiores dolorem, voluptatibus nam perferendis aut
        repellat at mollitia alias in harum molestiae repudiandae? Animi aut,
        blanditiis voluptate ipsa aperiam nostrum accusamus veritatis optio.
        Dolorem saepe magni nisi hic sint vel fuga perferendis eum incidunt,
        iste est, veritatis corrupti quia nihil dolor illum ex culpa molestias
        quisquam, pariatur distinctio perspiciatis! Dolores eum, porro dolorem
        corporis, iusto voluptatum repudiandae error minus, quam explicabo
        magnam! Debitis architecto consequatur, ipsa hic, veritatis consequuntur
        reprehenderit repellendus totam, odio atque adipisci rem ducimus? Cum
        assumenda et eum. Dolorem earum quos tempora atque distinctio maiores
        numquam consequuntur nemo facere. Accusantium deserunt veniam dolorem
        corrupti voluptas quis molestiae quod commodi velit exercitationem, nisi
        qui laborum saepe beatae! Eum inventore quas minus, nemo facilis earum
        repudiandae consectetur mollitia tempore minima itaque nisi voluptas
        expedita tenetur deserunt? Consectetur facilis omnis cupiditate
        temporibus magni nostrum autem vero eveniet voluptas a nemo placeat
        maiores tempore pariatur mollitia quod dolor deserunt non beatae natus
        possimus labore, iste dolores voluptatibus. Ducimus numquam nemo vitae
        cupiditate sed! Delectus quasi possimus tenetur voluptatum facere eaque
        mollitia iusto necessitatibus cum, rem, alias veniam doloribus libero
        eligendi soluta quod aliquam culpa, optio fugit! Nemo natus doloribus
        voluptate vel nisi, nesciunt laborum veritatis sunt? Reprehenderit
        deserunt ratione aliquam cupiditate tempora, quos ducimus inventore at
        repellat consectetur fuga amet quod similique atque quibusdam possimus
        quis! Vero eius voluptates pariatur recusandae quidem dolorum,
        exercitationem laudantium. Nam, exercitationem id voluptate suscipit
        officia cum fugiat corporis iure dicta voluptatem recusandae fuga
        dolorum eum impedit perspiciatis laborum minus eaque ratione odio
        mollitia aperiam est maiores ad. Exercitationem voluptates a cum sed ut
        facere excepturi asperiores, omnis maiores quidem, amet assumenda eaque
        mollitia natus minus dolorem soluta quas! Suscipit impedit voluptatibus
        laboriosam ex amet voluptatum vel error, necessitatibus saepe ipsam at
        eaque iste consequuntur beatae, iusto exercitationem quas molestias
        accusamus aliquid porro cumque pariatur atque quisquam eos! Itaque,
        iusto dolorem! Nemo inventore, labore eos beatae veniam impedit vero
        placeat earum eveniet similique corporis itaque sequi, amet in
        voluptatibus, laudantium ullam nulla ab perspiciatis blanditiis
        perferendis! Nobis, dolore eligendi neque voluptate facilis accusantium
        dolores? Provident eveniet modi alias aliquid eligendi temporibus
        inventore ratione perferendis! Voluptatibus at illum exercitationem
        facilis impedit tempora nemo adipisci. Delectus eius laboriosam maxime
        modi ab sequi velit sit distinctio corporis totam porro esse nemo
        laudantium aliquid quidem, fuga repellat, quis impedit voluptatum eum
        obcaecati aspernatur, rerum animi. In quos obcaecati officiis esse
        excepturi dolorem voluptatibus fugit, commodi, odio perferendis
        temporibus facilis perspiciatis illo mollitia minima delectus laudantium
        modi! Nobis error in vero fugit architecto eaque doloribus quo quidem
        sint quam praesentium nostrum, a sequi id neque voluptate nesciunt
        perspiciatis consequuntur sapiente culpa inventore necessitatibus sed
        est. Architecto enim deserunt perferendis distinctio, explicabo debitis
        perspiciatis. Provident quia doloribus itaque ducimus recusandae
        aliquam. Repudiandae provident iste ab quasi laborum corporis eaque at
        omnis eos earum? Asperiores iusto sint cupiditate dolore at,
        reprehenderit voluptatum, esse nam porro, quisquam aspernatur adipisci
        illum doloribus ab distinctio temporibus consequuntur enim. Quibusdam,
        sed in quo veniam corrupti accusantium voluptate itaque animi velit
        nobis repudiandae ratione placeat unde rem, totam laudantium? Velit in
        quis eum voluptate, maxime fugiat recusandae fugit iusto repellendus
        magnam esse dolorum vero perferendis veniam reprehenderit quam, incidunt
        vitae non unde! Necessitatibus iste rerum natus.
      </p>
    </div>
  );
}

export default Events;
