import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Button } from '../ui/button';

const socials = [
  { name: 'github', elem: <FaGithub className="text-xl" /> },
  { name: 'linkedin', elem: <FaLinkedin className="text-xl" /> },
  { name: 'youtube', elem: <FaYoutube className="text-xl" /> },
];

export const Socials = () => {
  return socials.map((social, index) => {
    return <Button variant="outline" key={index}>{social.elem}</Button>;
  });
};
