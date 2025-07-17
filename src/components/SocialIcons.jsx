const SocialIcons = ({iconSize='text-xl'}) => {
  return (
    <div className="flex gap-6">
      <a
        className={`text-white ${iconSize} hover:scale-110`}
        href="#"
      >
        <img src="/social/instagram.png" alt="instagram_icon_image" />
      </a>
      <a
        className={`text-white ${iconSize} hover:scale-110`}
        href="#"
      >
        <img src="/social/facebook.png" alt="instagram_icon_image" />
      </a>
      <a
        className={`text-white ${iconSize} hover:scale-110`}
        href="#"
      >
        <img src="/social/linkedin.png" alt="instagram_icon_image" />
      </a>
    </div>
  );
};

export default SocialIcons;
