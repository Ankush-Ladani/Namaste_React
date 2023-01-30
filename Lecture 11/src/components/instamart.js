import { useState } from "react";

const Section = ({ title, description, isVisible, setVisible }) => {
  return (
    <div className="border-2 m-2 p-2">
      <h1 className="m-2 p-2 font-bold text-3xl">{title}</h1>
      {isVisible ? (
        <p className="m-2 p-2 font-sm text-md"> {description} </p>
      ) : (
        ""
      )}
      {isVisible ? (
        <button onClick={() => setVisible(false)}>Hide</button>
      ) : (
        <button onClick={() => setVisible(true)}>Show</button>
      )}
    </div>
  );
};

const Instamart = () => {
  // const [showConfig, setShowConfig] = useState({
  //   showAbout: false,
  //   showTeam: false,
  //   showCareer: false,
  // });

  const [visibleSection, setVisibleSection] = useState("");

  return (
    <>
      <Section
        title={"About Instamart"}
        isVisible={visibleSection === "about"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        setVisible={() => {
          setVisibleSection("about");
        }}
        // setVisible={() => {
        //   setShowConfig({
        //     showAbout: true,
        //     showTeam: false,
        //     showCareer: false,
        //   });
        // }}
      />

      <Section
        // isVisible={showConfig.showTeam}
        isVisible={visibleSection === "team"}
        title={"Team Instamart"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        // setVisible={() => {
        //   setShowConfig({
        //     showAbout: false,
        //     showTeam: true,
        //     showCareer: false,
        //   });
        // }}
        setVisible={() => {
          setVisibleSection("team");
        }}
      />

      <Section
        // isVisible={showConfig.showCareer}
        isVisible={visibleSection === "career"}
        title={"Career Instamart"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        // setVisible={() => {
        //   setShowConfig({
        //     showAbout: false,
        //     showTeam: false,
        //     showCareer: true,
        //   });
        // }}
        setVisible={() => {
          setVisibleSection("career");
        }}
      />
    </>
  );
};

export default Instamart;
