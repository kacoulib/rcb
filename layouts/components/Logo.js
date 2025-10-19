import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {
  // destructuring items from config object
  const { base_url, logo, logo_width, logo_height, logo_text, title } =
    config.site;

  const handleLogoClick = (e) => {
    e.preventDefault();
    // Aller à la page d'accueil et scroll vers le haut
    window.location.href = "/";
  };

  return (
    <Link
      href="/"
      onClick={handleLogoClick}
      className="navbar-brand py-1 flex items-center"
      style={{
        height: logo_height.replace("px", "") + "px",
        width: logo_width.replace("px", "") + "px",
      }}
    >
      {src || logo ? (
        <Image
          width={logo_width.replace("px", "") * 2}
          height={logo_height.replace("px", "") * 2}
          src={src ? src : logo}
          alt={title}
          priority
          className="object-contain w-full h-full"
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
