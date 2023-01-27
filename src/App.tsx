import React from 'react';
import { Card, Col, Button, Menu, Row } from 'antd';
import pet1 from './pet1.png';
import pet2 from './pet2.png';
import friend1 from './friend1.png';
import friend2 from './friend2.png';
import friend3 from './friend3.png';
import './App.css';

const { Meta } = Card;


function App() {

  return (
    <div className="App">
      <section className='OurPets'>
        <Menu mode="horizontal" className='Menu'>
          <Menu.Item key="home">
            <a href="/">Home</a>
          </Menu.Item>
          <Menu.Item key="about">
            <a href="/about">About</a>
          </Menu.Item>
          <Menu.Item key="friends">
            <a href="/about">Friends</a>
          </Menu.Item>
          <Menu.Item key="contact">
            <a href="/contact">Contact</a>
          </Menu.Item>
          </Menu>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <h1 className='Titulo'>No solo las personas necesitan una casa</h1>
            <p className='Descripcion'> Blacky es un perrito lindo, cariñoso y muy jugueton. Si buscas un compañero de paseo el es la mejor opción</p>
            <Button type="primary" shape="round" className='Button'>
              Hazte su amigo
            </Button>
          </Col>
          <Col span={12}>
            <img src={pet1} alt="pet1" />
          </Col>
        </Row>
      </section>
      <section className='AboutAs' id="about">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12} className="Center">
            <img src={pet2} alt="pet2" />
          </Col>
          <Col span={12}>            
            <h1 className='Titulo'>Acerca de nuestra web</h1>
            <p className='Descripcion'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </Col>
        </Row>
      </section>
      <section className='AboutAs' id='friends'>
        <h1>Nuestros Amigos que estan buscando una casita</h1>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img src={friend1} alt="friend1" />}
            >
              <Meta title="Maylo"/>
              <Button type="primary" shape="round" className='Button'>
                Conocerlo mas
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img src={friend2} alt="friend2" />}
            >
              <Meta title="Ojo Loco" />
              <Button type="primary" shape="round" className='Button'>
                Conocerlo mas
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img src={friend3} alt="friend3" />}
            >
              <Meta title="Tigrilla" />
              <Button type="primary" shape="round" className='Button'>
                Conocerlo mas
              </Button>
            </Card>
          </Col>
        </Row>
        <div className='MagenCentrado'>
          <Button type="primary" shape="round" className='Button'>
            Conocer mas Amigos
          </Button>
        </div>        
      </section>
      
    </div>
  );
}

export default App;
