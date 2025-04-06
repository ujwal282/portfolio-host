import SocialIcons from "./SocialIcons";
const Footer = () => {
  return (
    <footer className="flex flex-col p-4 xl:flex-row items-center justify-center xl:justify-around bg-gray-500 h-max font-body gap-4">
      <p className="text-white text-center xl:text-left">
        &copy; <span>2023 <span className="text-primary font-bold">Ujwal Paudel</span> All Rights Reserved, INC</span>
      </p>
      <SocialIcons />
    </footer>
  );
}

export default Footer;
