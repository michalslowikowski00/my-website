import Link from 'next/link';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub className="text-xl" />,
    path: 'https://github.com/michalslowikowski00',
  },
  {
    icon: <FaLinkedin className="text-xl" />,
    path: 'https://www.linkedin.com/in/michal-slowikowski/',
  },
  {
    icon: <FaYoutube className="text-xl" />,
    path: 'https://www.youtube.com/watch?v=tHyfAwEmzxE',
  },
];

export const Socials = () => {
  return (
    <div className="flex gap-8">
      {socials.map((social, index) => {
        return (
          <Link
            className="w-9 h-9 border rounded-full flex justify-center items-center hover:bg-white hover:text-emerald-600 hover:transition-all duration-500"
            href={social.path}
            key={index}
            target="_blank"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};
