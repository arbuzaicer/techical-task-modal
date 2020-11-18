import ModalUI from "@material-ui/core/Modal";
import React, { useState } from "react";
import styled from "styled-components";

import theme from "theme/theme";

import Button from "./Button";
import Card from "./Card";
import CloseIcon from "./icons/CloseIcon";
import Timer from "./Timer";
import Typography from "./Typography";
import Select from "./Select";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const Modal = ({ onClose, visible }: ModalProps) => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [paymentSystem, setPaymentSystem] = useState("Банковская карта");

  const cardsData = [
    {
      replenish: 50,
      get: 100,
    },
    {
      replenish: 100,
      get: 200,
    },

    {
      replenish: 500,
      get: 1000,
    },
  ];

  const onSubmitClick = () => {
    alert(
      `Выбранный способ оплаты: ${paymentSystem}, пополнение на сумму: ${cardsData[selectedItem].replenish}`
    );
  };

  return (
    <ModalUI open={visible} onClose={onClose}>
      <Container>
        <CloseIconContainer onClick={onClose}>
          <CloseIcon />
        </CloseIconContainer>
        <HeaderSection>
          <Typography
            fontSize={16}
            fontWeight={700}
            color={theme.colors.darkenTextBlue}
          >
            +100%
          </Typography>
        </HeaderSection>
        <Spacer height={70} />
        <Timer />
        <Spacer height={27} />
        <Typography fontSize={36} fontWeight={700}>
          Увеличьте свой депозит!
        </Typography>
        <Spacer height={30} />
        <Select selectValue={paymentSystem} setSelectValue={setPaymentSystem} />
        <Spacer height={50} />
        <CardsContainer>
          {cardsData.map((el, index) => (
            <Card
              key={el.replenish}
              isSelected={index === selectedItem}
              handleSelect={() => setSelectedItem(index)}
              replenish={el.replenish}
              get={el.get}
            />
          ))}
        </CardsContainer>
        <Spacer height={46} />
        <TotalPrice>
          <Typography fontSize={16} fontWeight={700} color={theme.colors.green}>
            ${cardsData[selectedItem].replenish + cardsData[selectedItem].get}
            ,00
          </Typography>
          <Typography fontSize={16} fontWeight={700}>
            будет зачислено вам на счет
          </Typography>
        </TotalPrice>
        <Spacer height={24} />
        <ButtonContainer>
          <Button label="Пополнить" onClick={onSubmitClick} />
        </ButtonContainer>
        <Spacer height={23} />
        <DescriptionText>
          <Typography
            fontSize={14}
            fontWeight={500}
            color={theme.colors.lightBlue}
          >
            При пополнении счета с банковской карты списание средств происходит
            по курсу банка клиента
          </Typography>
        </DescriptionText>
        <Spacer height={8} />
        <Link href={"#"}>ПОДРОБНЕЕ</Link>
      </Container>
    </ModalUI>
  );
};

const Container = styled.div`
  width: 695px;
  height: 727px;
  position: relative;
  background: linear-gradient(177.76deg, #2e354b 0%, #30374c 100%);
  box-shadow: 25px 25px 50px rgba(24, 28, 38, 0.5);
  border-radius: 10px;
  border: 3px solid #3c4561;
  display: flex;
  align-items: center;
  flex-direction: column;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const CloseIconContainer = styled.div`
  position: absolute;
  right: 22px;
  top: 22px;
  cursor: pointer;
  z-index: 10;
`;

const HeaderSection = styled.div`
  width: 68px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -3px;
  border-radius: 0px 0px 5px 5px;
  background-color: ${(props) => props.theme.colors.green};
`;

const CardsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

const DescriptionText = styled.div`
  width: 60%;
  opacity: 0.5;
  text-align: center;
`;

const Spacer = styled.div<{ height: number }>`
  width: 100%;
  height: ${({ height }) => height}px;
`;

const TotalPrice = styled.div`
  width: 43%;
  display: flex;
  justify-content: space-evenly;
`;

const ButtonContainer = styled.div`
  width: 133px;
  height: 42px;
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.lightBlue};
  opacity: 0.7;
  text-decoration-style: dotted;
  font-family: "Gilroy", sans-serif;
`;

export default Modal;
