import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="list-item">
          <a href="https://www.linkedin.com/in/adarsh-kumar-singh-6339b8190/" className="list-link">
            LinkedIn
          </a>
        </li>
        <li className="list-item">
          <a href="https://github.com/adarsh-3099/" className="list-link">
            Github
          </a>
        </li>
        <li className="list-item">
          <a href="https://www.instagram.com/adarsh___30/" className="list-link">
            Instagram
          </a>
        </li>
         </ul>
      <div className="footer-text">
        &copy;adarsh {new Date().getFullYear()}{" "}
      </div>
    </footer>
  );
}
