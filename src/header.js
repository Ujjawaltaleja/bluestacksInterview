import HeaderImage from "./header.png";
function Header() {
  return (
    <div className="header">
      <img src={HeaderImage} alt="header" className="headerImage" />
    </div>
  );
}

export default Header;
