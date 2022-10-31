import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaInstagram, FaTwitch } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousal from '../BrandCarousal/BrandCarousal';



const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-4' variant="outline-primary"> <FaGoogle> </FaGoogle> Login with Google</Button>

                <Button className='mb-4' variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>

            </ButtonGroup>
            <div className='mt-5'>
                <h5> Find us on </h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook /> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter /> Twiter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp />WhatsApp</ListGroup.Item>

                </ListGroup>
            </div>
            <div>
                <BrandCarousal></BrandCarousal>
            </div>
        </div>
    );
};

export default RightSideNav;