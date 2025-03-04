import React, { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

const Page2 = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Load the external CSS dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://unpkg.com/grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Cleanup on unmount
    };
  }, []);

  useEffect(() => {
    if (!editorRef.current) {
      const templateHTML = `
          <nav>
      <div class="nav__logo">ProCoder09<span></span></div>
      <ul class="nav__links">
        <li class="link"><a href="#">Home</a></li>
        <li class="link"><a href="#">Destinations</a></li>
        <li class="link"><a href="#">Pricing</a></li>
        <li class="link"><a href="#">Reviews</a></li>
      </ul>
      <button class="btn">Contact Us</button>
    </nav>
    <header>
      <div class="section__container header__container">
        <div class="header__image">
          <img src="header-1.jpg" alt="header" />
          <img src="header-2.jpg" alt="header" />
        </div>
        <div class="header__content">
          <div>
            <p class="sub__header">Book Now</p>
            <h1>The Smiling 😊<br />agent for travel</h1>
            <p class="section__subtitle">
              Make your travel more enjoyable with us. We are the best travel
              agency and we are providing the best travel services for our
              clients.
            </p>
            <div class="action__btns">
              <button class="btn">Plan a Trip</button>
              <div class="story">
                <div class="video__image">
                  <img src="story.jpg" alt="story" />
                  <span><i class="ri-play-fill"></i></span>
                </div>
                <span>Watch our story</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="section__container destination__container">
      <div class="section__header">
        <div>
          <h2 class="section__title">Explore top destinations</h2>
          <p class="section__subtitle">
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </p>
        </div>
        <div class="destination__nav">
          <span><i class="ri-arrow-left-s-line"></i></span>
          <span><i class="ri-arrow-right-s-line"></i></span>
        </div>
      </div>
      <div class="destination__grid">
        <div class="destination__card">
          <img src="destination-1.jpg" alt="destination" />
          <div class="destination__details">
            <p class="destination__title">Banff</p>
            <p class="destination__subtitle">Canada</p>
          </div>
        </div>
        <div class="destination__card">
          <img src="destination-2.jpg" alt="destination" />
          <div class="destination__details">
            <p class="destination__title">Machu Picchu</p>
            <p class="destination__subtitle">Peru</p>
          </div>
        </div>
        <div class="destination__card">
          <img src="destination-3.jpg" alt="destination" />
          <div class="destination__details">
            <p class="destination__title">Lauterbrunnen</p>
            <p class="destination__subtitle">Switzerland</p>
          </div>
        </div>
        <div class="destination__card">
          <img src="destination-4.jpg" alt="destination" />
          <div class="destination__details">
            <p class="destination__title">Zhangjiajie</p>
            <p class="destination__subtitle">China</p>
          </div>
        </div>
      </div>
    </section>

    <section class="trip">
      <div class="section__container trip__container">
        <h2 class="section__title">Best trip package</h2>
        <p class="section__subtitle">
          Explore your suitable and dream places around the world. Here you can
          find your right destination.
        </p>
        <div class="trip__grid">
          <div class="trip__card">
            <img src="trip-1.jpg" alt="trip" />
            <div class="trip__details">
              <p>Wasserwerk Frelberg, Germany</p>
              <div class="rating"><i class="ri-star-fill"></i> 4.2</div>
              <div class="booking__price">
                <div class="price"><span>From</span> $300</div>
                <button class="book__now">Book Now</button>
              </div>
            </div>
          </div>
          <div class="trip__card">
            <img src="trip-2.jpg" alt="trip" />
            <div class="trip__details">
              <p>Patagonia, Argentina and Chile</p>
              <div class="rating"><i class="ri-star-fill"></i> 4.5</div>
              <div class="booking__price">
                <div class="price"><span>From</span> $450</div>
                <button class="book__now">Book Now</button>
              </div>
            </div>
          </div>
          <div class="trip__card">
            <img src="trip-3.jpg" alt="trip" />
            <div class="trip__details">
              <p>The Dolomites, Italy</p>
              <div class="rating"><i class="ri-star-fill"></i> 4.7</div>
              <div class="booking__price">
                <div class="price"><span>From</span> $400</div>
                <button class="book__now">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div class="view__all">
          <button class="btn">View All</button>
        </div>
      </div>
    </section>

    <section class="gallary">
      <div class="section__container gallary__container">
        <div class="image__gallary">
          <div class="gallary__col">
            <img src="gallery-1.jpg" alt="gallary" />
          </div>
          <div class="gallary__col">
            <img src="gallery-2.jpg" alt="gallary" />
            <img src="gallery-3.jpg" alt="gallary" />
          </div>
        </div>
        <div class="gallary__content">
          <div>
            <h2 class="section__title">
              Our trip gallary that will inspire you
            </h2>
            <p class="section__subtitle">
              Explore your suitable and dream places around the world. Here you
              can find your right destination.
            </p>
            <button class="btn">View All</button>
          </div>
        </div>
      </div>
    </section>

    <section class="subscribe">
      <div class="section__container subscribe__container">
        <div class="subscribe__content">
          <h2 class="section__title">Subscribe to get special prize</h2>
          <p class="section__subtitle">
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </p>
        </div>
        <div class="subscribe__form">
          <form>
            <input type="email" placeholder="Your email here" />
            <button class="btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <h3>Code Champion<span>.</span></h3>
          <p>
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </p>
        </div>
        <div class="footer__col">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div class="footer__col">
          <h4>Address</h4>
          <p>
            <span>Address:</span> 280 Wilson Street, Cima, California, 92323,
            United States
          </p>
          <p><span>Email:</span> info@Code Champion.com</p>
          <p><span>Phone:</span> +91 9876543210</p>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2023 Web Design Mastery. All rights reserved.
      </div>
    </footer>
      `;

      const templateCSS = `
        
 :root {
  --primary-color: #3685fb;
  --primary-color-dark: #2f73d9;
  --secondary-color: #fafcff;
  --text-dark: #0d213f;
  --text-light: #767268;
  --extra-light: #ffffff;
  --max-width: 1200px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.section__container {
  max-width: var(--max-width);
  margin: auto;
  padding: 5rem 1rem;
}

.section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.section__title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.section__subtitle {
  font-size: 1rem;
  color: var(--text-dark);
  max-width: calc(var(--max-width) / 2);
}

.btn {
  padding: 0.75rem 2rem;
  outline: none;
  border: none;
  font-size: 1rem;
  color: var(--extra-light);
  background-color: var(--primary-color);
  border-radius: 5rem;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background-color: var(--primary-color-dark);
}

a {
  text-decoration: none;
}

img {
  width: 100%;
  display: block;
}

body {
  font-family: "Poppins", sans-serif;
}

nav {
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-dark);
  cursor: pointer;
}

.nav__logo span {
  color: var(--primary-color);
}

.nav__links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.link a {
  padding: 0 1rem;
  color: var(--text-dark);
  transition: 0.3s;
}

.link a:hover {
  color: var(--primary-color);
}

header {
  background-color: var(--secondary-color);
}

.header__container {
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.header__image {
  position: relative;
}

.header__image img {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 0.5rem solid var(--extra-light);
  border-radius: 2rem;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
}

.header__image img:nth-child(1) {
  max-width: 350px;
  transform: translate(-75%, -50%);
}

.header__image img:nth-child(2) {
  max-width: 250px;
  transform: translate(0%, -25%);
}

.header__content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__content > div {
  max-width: 400px;
  display: grid;
  gap: 1rem;
}

.header__content .sub__header {
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-color);
}

.header__content h1 {
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 800;
  color: var(--text-dark);
}

.header__content .action__btns {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
}

.story {
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
}

.video__image {
  position: relative;
}

.video__image img {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
}

.video__image span {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
}

.video__image span i {
  padding: 0.5rem;
  font-size: 1rem;
  color: red;
  background-color: var(--extra-light);
  border-radius: 100%;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
}

.story > span {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
}

.destination__nav {
  display: flex;
  gap: 1rem;
}

.destination__nav span {
  width: 30px;
  height: 30px;
  display: grid;
  place-content: center;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 100%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.3s;
}

.destination__nav span:hover {
  color: var(--extra-light);
  background-color: var(--primary-color);
}

.destination__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.destination__card {
  overflow: hidden;
  position: relative;
  isolation: isolate;
  cursor: pointer;
}

.destination__card img {
  border-radius: 1rem;
}

.destination__details {
  position: absolute;
  width: calc(100% - 2rem);
  padding: 1rem;
  bottom: -6rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: var(--extra-light);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  z-index: 1;
  transition: 0.3s;
}

.destination__card:hover .destination__details {
  bottom: 1rem;
}

.destination__title {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.destination__subtitle {
  font-size: 1rem;
  font-weight: 600;
}

.trip {
  background-color: var(--secondary-color);
}

.trip__container :is(.section__title, .section__subtitle, .view__all) {
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}

.trip__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 4rem 0;
}

.trip__card {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
}

.trip__details {
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  background-color: var(--extra-light);
  cursor: pointer;
}

.rating {
  color: goldenrod;
}

.booking__price {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price span {
  font-weight: 400;
  font-size: 0.9rem;
  color: var(--text-light);
}

.book__now {
  padding: 0.5rem 1.5rem;
  color: var(--primary-color);
  outline: none;
  border: 1px solid var(--primary-color);
  border-radius: 5rem;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;
}

.book__now:hover {
  color: var(--extra-light);
  background-color: var(--primary-color);
}

.gallary__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.image__gallary {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.gallary__col {
  display: grid;
  place-content: center;
  gap: 1rem;
}

.gallary__col img {
  border-radius: 1rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}

.gallary__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.gallary__content > div {
  max-width: 400px;
}

.gallary__content .section__subtitle {
  margin-bottom: 2rem;
}

.subscribe {
  background-color: var(--secondary-color);
}

.subscribe__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.subscribe__form {
  display: flex;
  align-items: center;
  justify-content: center;
}

.subscribe__form form {
  width: 100%;
  max-width: 400px;
  display: flex;
  background-color: var(--extra-light);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 5rem;
}

.subscribe__form input {
  width: 100%;
  padding: 1rem;
  outline: none;
  border: none;
  border-radius: 5rem;
  font-size: 1rem;
}

.footer {
  background-color: var(--text-dark);
}

.footer__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  color: var(--secondary-color);
}

.footer__col h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.footer__col h3 span {
  color: var(--primary-color);
}

.footer__col p {
  font-size: 0.8rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.footer__col p:hover {
  color: var(--primary-color);
}

.footer__col p span {
  font-weight: 600;
}

.footer__col h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.footer__bar {
  max-width: var(--max-width);
  margin: auto;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: var(--secondary-color);
  border-top: 1px solid var(--text-light);
}

@media (width < 1200px) {

  
  .header__image img:nth-child(1) {
    max-width: 300px;
  }
  
  .header__image img:nth-child(2) {
    max-width: 200px;
  }
}

@media (width < 900px) {
  
  .nav__links {
    display: none;
  }

  .header__container {
    grid-template-columns: repeat(1, 1fr);
  }
  .header__image {
    min-height: 500px;
  }

  .destination__grid {
    gap: 1rem;
  }

  .trip__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (width < 600px) {
  .destination__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .trip__grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .gallary__container {
    grid-template-columns: repeat(1, 1fr);
  }

  .subscribe__container {
    grid-template-columns: repeat(1, 1fr);
  }

  .footer__container {
    grid-template-columns: repeat(2, 1fr);
  }
      `;
      const svgText = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 30 30"
        stroke-width="1.5"
        stroke="currentColor"
        width="50"
        height="50"
        class="mr-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
        />
      </svg>
      `;

      editorRef.current = grapesjs.init({
        container: "#grapesjs-editor",
        height: "100%",
        width: "90%",
        storageManager: { type: null },
        plugins: ["gjs-preset-webpage"],
        pluginsOpts: {
          "gjs-preset-webpage": {
            blocksBasicOpts: {
              blocks: ["link-block", "quote", "text-basic"],
            },
          },
        },
        components: templateHTML, // Load the template HTML
        style: templateCSS, // Inject the CSS directly

        blockManager: {
          appendTo: "#blocks",

          blocks: [
            {
              id: "text",
              label: `
                <div style="display: flex; align-items: center; gap: 8px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                  <span>Text</span>
                </div>
              `,
              category: "Basic",
              activate: true,
              content: {
                type: "text",
                content: "Insert your text here",
                style: { padding: "10px" },
              },
            },
            {
              id: "section",
              label: `
                <div style="display: flex; align-items: center; gap: 8px;">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>

                  <span><b>Section</b></span>
                </div>
              `,
              content:
                "<section><h1>You can insert a section here</h1></section>",
              category: "Basic",
            },
            {
              id: "image",
              label: `
                <div style="display: flex; align-items: center; gap: 8px;">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

                  <span><b>Image</b></span>
                </div>
              `,
              content:
                '<img src="https://via.placeholder.com/350x150" alt="Placeholder"/>',
              category: "Basic",
            },
            {
              id: "button",
              label: `
                <div style="display: flex; align-items: center; gap: 8px;">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
</svg>


                  <span><b>Button</b></span>
                </div>
              `,
              content: '<button class="btn btn-primary">Click Me</button>',
              category: "Basic",
            },
          ],
        },

        styleManager: {
          sectors: [
            {
              name: "General",
              open: true,
              buildProps: ["width", "min-height", "padding"],
            },
            {
              name: "Typography",
              open: false,
              buildProps: [
                "font-family",
                "font-size",
                "font-weight",
                "color",
                "text-align",
              ],
              properties: [
                {
                  property: "text-align",
                  type: "radio",
                  options: [
                    { value: "left", className: "fa fa-align-left" },
                    { value: "center", className: "fa fa-align-center" },
                    { value: "right", className: "fa fa-align-right" },
                    { value: "justify", className: "fa fa-align-justify" },
                  ],
                },
              ],
            },
            {
              name: "Decorations",
              open: false,
              buildProps: ["border-radius", "box-shadow", "background-color"],
            },
          ],
        },
      });
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#1F1F1F]">
      {/* Header */}
      <div className="w-full bg-black py-4 px-6 flex justify-between items-center shadow-xl shadow-[#3f3f3f]">
        <h1 className="text-3xl font-bold text-white">WebGalaxy</h1>
        <button className="px-6 py-3 bg-[#0049F3] hover:bg-blue-700 rounded-lg border-none text-white">
          Your Profile
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-grow">
        {/* Sidebar for Blocks */}
        <div
          // id="blocks"
          className="w-1/4 bg-[#1F1F1F] border-t-2 border-[#3f3f3f] text-white"
        >
          <div
            id="blocks"
            classname="grid grid-cols-2 gap-4 p-4 bg-[#2a2a2a] border border-gray-700 rounded-lg"
          ></div>

          <div className="w-[320px] bg-[#1F1F1F] border border-gray-500 rounded-lg p-4 space-y-4 mt-20">
            {/* Placeholder Text */}
            <p className="text-gray-400 text-sm">
              Not satisfied? Ask galaxy for modifications.
            </p>

            {/* Input Box */}
            <textarea
              className="w-full h-20 bg-[#1F1F1F] border-none text-white placeholder-gray-500 focus:outline-none resize-none"
              placeholder=""
              disabled
            />

            {/* Reimagine Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-[#0049F3] hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition">
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="white"
              >
                <path
                  d="M15 2L15.5387 4.39157C15.9957 6.42015 17.5798 8.00431 19.6084 8.46127L22 9L19.6084 9.53873C17.5798 9.99569 15.9957 11.5798 15.5387 13.6084L15 16L14.4613 13.6084C14.0043 11.5798 12.4202 9.99569 10.3916 9.53873L8 9L10.3916 8.46127C12.4201 8.00431 14.0043 6.42015 14.4613 4.39158L15 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 12L7.38481 13.7083C7.71121 15.1572 8.84275 16.2888 10.2917 16.6152L12 17L10.2917 17.3848C8.84275 17.7112 7.71121 18.8427 7.38481 20.2917L7 22L6.61519 20.2917C6.28879 18.8427 5.15725 17.7112 3.70827 17.3848L2 17L3.70827 16.6152C5.15725 16.2888 6.28879 15.1573 6.61519 13.7083L7 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              Reimagine
            </button>
          </div>
        </div>

        {/* GrapesJS Editor */}
        <div
          id="grapesjs-editor"
          className="flex-grow bg-white overflow-hidden"
        ></div>
      </div>
    </div>
  );
};

export default Page2;
