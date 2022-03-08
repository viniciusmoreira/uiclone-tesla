/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTransform } from 'framer-motion';
import useWrapperScroll from '../Model/useWrapperScroll';
import { Container, Header, Logo, Burger, Footer } from './styles';

function UniqueOverlay() {
    const { scrollYProgress } = useWrapperScroll();
    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

    return (
        <Container>
            <Header>
                <Logo />
                <Burger />
            </Header>

            <Footer style={{opacity}}>
                <ul>
                    <li>UI Clone</li>
                    <li>made by</li>
                    <li><a href="#">Vinícius Moreira</a></li>
                </ul>
            </Footer>
        </Container>
    );
};

export default UniqueOverlay;
