import { Fragment } from "react";
import { Button } from "./Button";
export default function Article({ title, backgroundImage, navigation }) {
  const { prev } = navigation;
  return (
    <article>
      <div
        className="article-image-section article-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="article-description-section article-section">
        <ul>
          <li>
            design modern și personalizat în funcție de domeniul dvs de
            activitate
          </li>
          <li>
            site-ul să fie cross-browser (vizualizat corect în toate browserele)
          </li>
          <li>validarea codului HTML/CSS</li>
          <li>îmbunătățirea experienței utilizatorilor (UX)</li>
          <li>verificarea formularului de contact</li>
          <li>
            SEO onpage și tehnici pentru rezultate bune în motoarele de căutare
          </li>
          <li>
            instalarea certificatului SSL (Certificatul SSL are rolul de a
            securiza schimbul de informații dintre server și client)
          </li>
          <li>să fie pregătit pentru marketing online și promovare online</li>
          <li>site optimizat și pentru accesul de pe telefon și tabletă</li>
          <li>raport lunar trafic website</li>
          <li>suport specializat telefonic și prin e-mail</li>
          <li>
            integrare cu Google Maps, Google Analytics, Tag Manager & Search
            Console
          </li>
          <li>posibilitate de construcție a website-ului în mai multe limbi</li>
          <li>site-ul va fi creat folosind platforma Wordpress</li>
          <li>folosim doar teme licențiate</li>
          <li>
            suport tehnic pentru eventualele probleme tehnice apărute timp de 1
            an
          </li>
        </ul>
        <p style={{ marginBlockStart: ".5rem" }}>
          Verificăm și testăm toate funcționalitățile website-ului, cu design
          profesional si responsive web design.
        </p>
        <br />
        <p>
          <b>
            Preț: <s>1000</s> 650 euro
          </b>
        </p>
      </div>
      <div className="article-nav-section article-section">
        <Button
          title={"Solicită Oferta"}
          onClick={prev}
          className="article-nav-button"
        />
        <Button
          title={"Solicită Oferta"}
          onClick={prev}
          className="article-nav-button"
        />
      </div>
      <div className="article-title-section article-section">
        {title.includes(".") ? (
          <>
            <h2>
              {title.split(".")[0]}
              <br />
              {title.split(".")[1]}
            </h2>
          </>
        ) : (
          <h2>{title}</h2>
        )}
      </div>
    </article>
  );
}
