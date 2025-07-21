const SocialIcons = ({iconSize='text-xl'}) => {
  return (
    <div className="flex gap-6">
      <a
        className={`text-white ${iconSize} hover:scale-110 duration-200`}
        href="https://www.instagram.com/rtf__insurance"
      >
        <img src="/social/instagram.png" alt="instagram_icon_image" />
      </a>
      <a
        className={`text-white ${iconSize} hover:scale-110 duration-200`}
        href="https://www.facebook.com/RTFinsurancebrokers/"
      >
        <img src="/social/facebook.png" alt="instagram_icon_image" />
      </a>
      <a
        className={`text-white ${iconSize} hover:scale-110 duration-200`}
        href="https://x.com/search?q=%23RTFInsurance&src=hashtag_click"
      >
        <img src="/social/linkedin.png" alt="instagram_icon_image" />
      </a>
    </div>
  );
};

export default SocialIcons;
