import React from 'react';
import tshirtImage from '../../assets/tshirt.png';

import { Container, Row, Panel, Column, Gallery, Section, Description} from './styles';

import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';


const Product: React.FC = () => {
  return (
    <>
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
        <Gallery>
          <img alt ="T-shirt" src={tshirtImage} />
        </Gallery>
        <Info/>

        </Column>

        <Column>
          <ProductAction />
          <SellerInfo/>

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />

        </Column>

      </Panel>

    </Container>
    </>
  );
}

const WarrantySection =() => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description"> Receba o produto comprado ou o dinheiro de volta.</p>
      </span>
      <span>
        <p className="title">Garantia do Vendedor</p>
        <p className="description"> Sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descição</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita vero est illum deleniti, nobis aliquid eius! Beatae quam iure ullam aliquid modi? Aliquid, nam illum saepe deleniti et facere reiciendis?
    <br/>
    <br/>
    Itens inclusos: <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque blanditiis quas similique soluta voluptas quae obcaecati vero. Laborum, labore culpa aliquid enim autem dolorum harum sunt ea rem tenetur.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio voluptas ducimus nam nulla reiciendis natus, a nobis sed expedita fuga minima itaque culpa modi molestias saepe facere accusamus sequi!
    </p>
  </Description>
)

export default Product;
