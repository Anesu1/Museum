import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import Pattern from "../../styled/Pattern";

const ExWrapper = styled.section`
  position: relative;
  padding: 5%;
  .ex-inner {
    padding-left: 10%;
    @media (min-width: 768px) {
      padding-left: 20px;
    }
    h2 {
      @media (min-width: 768px) {
        font-size: 26px;
      }
      img {
        max-width: 430px;
        height: 7px;
        @media (min-width: 768px) {
          max-width: 545px;
        }
      }
    }
    p {
      margin-bottom: 30px;
    }
  }
`;

function Exhibition() {
  return (
    <ExWrapper>
      <Pattern bgColor="#000" />
      <div className="ex-inner">
        <Heading text="MUSEUM OF AFRICAN LIBERATION EXHIBITIONS:" />
        <Paragraph>
          It is envisaged that for each country there will be a section of the
          Museum devoted to its liberation war history. The museum will house
          the stories of other countries' sacrifices and histories. Inevitably,
          the museum will feature the histories of FRELIMO, SWAPO, MPLA and
          other gallant liberation parties. It will feature massacres at
          Wiriamu, Maseru, Cassinga as well as victories such as the epic battle
          of Cuito Cunavale and Gorongoza. Also exhibiting at the museum will be
          the great victories of the Mau Mau Uprisings of Kenya, as well as the
          heroic def eat of the Italians at Adwa in Ethiopia. A key section of
          the Museum will also be dedicated to the 14 Founding Fathers of the
          African Liberation history.
        </Paragraph>
        <Paragraph>
          The Museum of African Liberation will enable researchers to appreciate
          the seamlessness of the African struggle for freedom and the
          indomitable spirit for liberty even against the most powerful
          oppressor. The story of African Liberation cannot be told without
          highlighting the importance of national unity and pan-African
          solidarity and the Museum of African Liberation is designed to
          immortalise a vital part of the African Heritage. The Museum of
          African Liberation is a unique opportunity for educational and
          cultural diplomatic cooperation by all these countries which fought to
          win their freedom be it through military or diplomatic means or even a
          mixture of both . A vital portion of their history will be recorded
          and deposited in the Museum. The Museum will enable Africans and the
          rest of the world to learn about the history and struggle for freedom
          and human dignity by each and all of these African countries under one
          roof. Each of the countries shall be able to provide the historical
          material, the weapons, the battles, losses and victories which were
          experienced during the struggle. It is one of the most effective ways
          of teaching African history and achievements told by Africans
          themselves. Africans have demonstrated that they are capable of
          liberating themselves, Africans must be the ones to tell the world how
          they did it and how it feels to be victorious and free.
        </Paragraph>
      </div>
    </ExWrapper>
  );
}

export default Exhibition;
