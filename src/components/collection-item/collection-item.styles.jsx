import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin: 0 3px;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 50%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  border: none;
  font-size: .8rem;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.8;
    padding: 0 5px;
    width: 30%;
    font-size: .8rem;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
`;

export const NameContainer = styled.span`
  width: 80%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
`;