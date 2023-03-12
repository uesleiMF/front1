import React from "react";
import { Social } from "./styles";
import { FaWhatsapp } from "react-icons/fa";
import c1 from "../../components/Img/uj.png";
import Typewriter from "typewriter-effect";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sobrenos.css";

export default function Sobrenos() {
  return (
    <div className="container">
      <div className="card mt-4 bg-warning bg-opacity-75">
        <div className="card-title">
          
           
          <p></p>
           <p className="mx-4 my-4 mb-0 text-center fs-3 fw-bold">REDE AMAI</p>
         
           <p className="mx-4 my-4 mb-0 text-center fs-3 fw-bold">CONHEÇAM UM POUCO DESSE MINISTÉRIO</p>
           
            <div className="Letras">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString ("A REDE DE CASAIS DO MINISTÉRIO AMAI  ")
                    .pauseFor(700)
                    
                  
                    .typeString("FOI UM PROJETO QUE NASCEU NO CORAÇÃO DE DEUS. ")
                    .pauseFor(700)

                    .typeString(
                      "OBJETIVO ESSE DE RESTAURAR CASAMENTOS, UM POUQUINHO DA HISTORIA DESTA REDE TÃO ABENÇOADA QUE CADA DIA CRESCE "
                    )
                    .pauseFor(700)

                    .typeString("REDE DE CASAIS DA IEQ-MARABA-PA")
                    .start();
                }}
              />
            
          </div>
        </div>
      </div>

      <div className="card mt-4  bg-primary bg-opacity-75">
        <h3 className="mx-3 my-3 text-center text-white">REDE AMAI </h3>
        <h4 className="mx-3 my-3 text-center text-white">CASAIS LIDERES </h4>

        <div class="d-flex align-content p-3">
          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <img src={c1} alt="bo" className="card-img-top" />

              <p>
                {" "}
                <h1 className="card-title ">CASAL--LIDER</h1>
              </p>
              <h2 className="card-title">PASTORES</h2>
              <h2 className="card-title">MARCOS</h2>
              <h2 className="card-title"> & </h2>
              <h2 className="card-title">SOLANGE</h2>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
                <h2 className="card-title">(94)99972-7849</h2>
              </Social>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
                <h2 className="card-title">(94)99972-7849</h2>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h1 className="card-title ">CASAL--LIDER</h1>
              </p>
              <h2 className="card-title">PASTORES</h2>
              <h2 className="card-title">PINA</h2>
              <h2 className="card-title"> & </h2>
              <h2 className="card-title">CARLA</h2>
              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
                <h2 className="card-title">(94)99972-7849</h2>
              </Social>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
                <h2 className="card-title">(94)99972-7849</h2>
              </Social>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4 bg-success bg-opacity-75">
        <h3 className="mx-3 my-3 text-center text-white">CELULA DE CASAIS</h3>
        <h4 className="mx-3 my-3 text-center text-white ">(UM SO PROPOSITO)</h4>
        <h5 className="mx-3 my-3 text-center text-white"> CASAIS LIDERES</h5>

        <div class="d-flex align-content p-3">
          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <img src={c1} alt="bo" className="card-img" />

              <p>
                {" "}
                <h1 className="card-title">CASAL</h1>
              </p>
              <h2 className="card-title">LIDER</h2>
              <h2 className="card-title">ALTAIR</h2>
              <h2 className="card-title"> & </h2>
              <h2 className="card-title">ELLEN</h2>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
                <h2 className="card-title">(94)99972-7849</h2>
              </Social>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
                <h2 className="card-title">(94)99972-7849</h2>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h1 className="card-title">CASAL</h1>
              </p>
              <h2 className="card-title">VICE-LIDER</h2>
              <h2 className="card-title">___________</h2>
              <h2 className="card-title"> & </h2>
              <h2 className="card-title">___________</h2>
              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
                <h2 className="card-title">(94)99972-7849</h2>
              </Social>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
                <h2 className="card-title">(94)99972-7849</h2>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h1 className="card-title">CASAL</h1>
              </p>
              <h2 className="card-title">SECRETARIO</h2>
              <h2 className="card-title">Ueslei</h2>
              <h2 className="card-title"> & </h2>
              <h2 className="card-title">Jessica</h2>
              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
                <h3 className="card-title">(94)99972-7849</h3>
              </Social>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
                <h3 className="card-title">(94)99972-7849</h3>
              </Social>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4 bg-danger bg-opacity-75">
        <h3 className="mx-3 my-3 text-center text-white">CELULA DE CASAIS</h3>
        <h4 className="mx-3 my-3 text-center text-white ">(UM SO PROPOSITO)</h4>
        <h5 className="mx-3 my-3 text-center text-white"> CASAIS LIDERES</h5>

        <div class="d-flex align-content p-3">
          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <img src={c1} alt="bo" className="card-img" />

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">LIDER</h3>
              <h4 className="card-title">Altair</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Ellen</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">VICE-LIDER</h3>
              <h4 className="card-title">___________</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">___________</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">SECRETARIO</h3>
              <h4 className="card-title">Ueslei</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Jessica</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4 bg-info   ">
        <h3 className="mx-3 my-3 text-center text-white">CELULA DE CASAIS</h3>
        <h4 className="mx-3 my-3 text-center text-white ">(UM SO PROPOSITO)</h4>
        <h5 className="mx-3 my-3 text-center text-white"> CASAIS LIDERES</h5>

        <div class="d-flex align-content p-3">
          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <img src={c1} alt="bo" className="card-img" />

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">LIDER</h3>
              <h4 className="card-title">Altair</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Ellen</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">VICE-LIDER</h3>
              <h4 className="card-title">___________</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">___________</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">SECRETARIO</h3>
              <h4 className="card-title">Ueslei</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Jessica</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4 bg-success">
        <h3 className="mx-3 my-3 text-center text-white">CELULA DE CASAIS</h3>
        <h4 className="mx-3 my-3 text-center text-white ">(UM SO PROPOSITO)</h4>
        <h5 className="mx-3 my-3 text-center text-white"> CASAIS LIDERES</h5>

        <div class="d-flex align-content p-3">
          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <img src={c1} alt="bo" className="card-img" />

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">LIDER</h3>
              <h4 className="card-title">Altair</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Ellen</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">VICE-LIDER</h3>
              <h4 className="card-title">___________</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">___________</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">SECRETARIO</h3>
              <h4 className="card-title">Ueslei</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Jessica</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4 bg-warning">
        <h3 className="mx-3 my-3 text-center text-white">CELULA DE CASAIS</h3>
        <h4 className="mx-3 my-3 text-center text-white ">(UM SO PROPOSITO)</h4>
        <h5 className="mx-3 my-3 text-center text-white"> CASAIS LIDERES</h5>

        <div class="d-flex align-content p-3">
          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <img src={c1} alt="bo" className="card-img" />

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">LIDER</h3>
              <h4 className="card-title">Altair</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Ellen</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">VICE-LIDER</h3>
              <h4 className="card-title">___________</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">___________</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">SECRETARIO</h3>
              <h4 className="card-title">Ueslei</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Jessica</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4 bg-primary">
        <h3 className="mx-3 my-3 text-center text-white">CELULA DE CASAIS</h3>
        <h4 className="mx-3 my-3 text-center text-white ">(UM SO PROPOSITO)</h4>
        <h5 className="mx-3 my-3 text-center text-white"> CASAIS LIDERES</h5>

        <div class="d-flex align-content p-3">
          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <img src={c1} alt="bo" className="card-img" />

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">LIDER</h3>
              <h4 className="card-title">Altair</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Ellen</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">VICE-LIDER</h3>
              <h4 className="card-title">___________</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">___________</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">SECRETARIO</h3>
              <h4 className="card-title">Ueslei</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Jessica</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4 bg-success">
        <h3 className="mx-3 my-3 text-center text-white">CELULA DE CASAIS</h3>
        <h4 className="mx-3 my-3 text-center text-white ">(UM SO PROPOSITO)</h4>
        <h5 className="mx-3 my-3 text-center text-white"> CASAIS LIDERES</h5>

        <div class="d-flex align-content p-3">
          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <img src={c1} alt="bo" className="card-img" />

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">LIDER</h3>
              <h4 className="card-title">Altair</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Ellen</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">VICE-LIDER</h3>
              <h4 className="card-title">___________</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">___________</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">SECRETARIO</h3>
              <h4 className="card-title">Ueslei</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Jessica</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4 bg-info">
        <h3 className="mx-3 my-3 text-center text-white">CELULA DE CASAIS</h3>
        <h4 className="mx-3 my-3 text-center text-white ">(UM SO PROPOSITO)</h4>
        <h5 className="mx-3 my-3 text-center text-white"> CASAIS LIDERES</h5>

        <div class="d-flex align-content p-3">
          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <img src={c1} alt="bo" className="card-img" />

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">LIDER</h3>
              <h4 className="card-title">Altair</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Ellen</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">VICE-LIDER</h3>
              <h4 className="card-title">___________</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">___________</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">SECRETARIO</h3>
              <h4 className="card-title">Ueslei</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Jessica</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4 bg-success">
        <h3 className="mx-3 my-3 text-center text-white">CELULA DE CASAIS</h3>
        <h4 className="mx-3 my-3 text-center text-white ">(UM SO PROPOSITO)</h4>
        <h5 className="mx-3 my-3 text-center text-white"> CASAIS LIDERES</h5>

        <div class="d-flex align-content p-3">
          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <img src={c1} alt="bo" className="card-img" />

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">LIDER</h3>
              <h4 className="card-title">Altair</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Ellen</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">VICE-LIDER</h3>
              <h4 className="card-title">___________</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">___________</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">SECRETARIO</h3>
              <h4 className="card-title">Ueslei</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Jessica</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4 bg-success">
        <h3 className="mx-3 my-3 text-center text-white">CELULA DE CASAIS</h3>
        <h4 className="mx-3 my-3 text-center text-white ">(UM SO PROPOSITO)</h4>
        <h5 className="mx-3 my-3 text-center text-white"> CASAIS LIDERES</h5>

        <div class="d-flex align-content p-3">
          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <img src={c1} alt="bo" className="card-img" />

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">LIDER</h3>
              <h4 className="card-title">Altair</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Ellen</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">VICE-LIDER</h3>
              <h4 className="card-title">___________</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">___________</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">SECRETARIO</h3>
              <h4 className="card-title">Ueslei</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Jessica</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4 bg-success">
        <h3 className="mx-3 my-3 text-center text-white">CELULA DE CASAIS</h3>
        <h4 className="mx-3 my-3 text-center text-white ">(UM SO PROPOSITO)</h4>
        <h5 className="mx-3 my-3 text-center text-white"> CASAIS LIDERES</h5>

        <div class="d-flex align-content p-3">
          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <img src={c1} alt="bo" className="card-img" />

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">LIDER</h3>
              <h4 className="card-title">Altair</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Ellen</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">VICE-LIDER</h3>
              <h4 className="card-title">___________</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">___________</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">SECRETARIO</h3>
              <h4 className="card-title">Ueslei</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Jessica</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4 bg-success">
        <h3 className="mx-3 my-3 text-center text-white">CELULA DE CASAIS</h3>
        <h4 className="mx-3 my-3 text-center text-white ">(UM SO PROPOSITO)</h4>
        <h5 className="mx-3 my-3 text-center text-white"> CASAIS LIDERES</h5>

        <div class="d-flex align-content p-3">
          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <img src={c1} alt="bo" className="card-img" />

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">LIDER</h3>
              <h4 className="card-title">Altair</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Ellen</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">VICE-LIDER</h3>
              <h4 className="card-title">___________</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">___________</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">SECRETARIO</h3>
              <h4 className="card-title">Ueslei</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Jessica</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4 mb-3 bg-success">
        <h3 className="mx-3 my-3 text-center text-white">CELULA DE CASAIS</h3>
        <h4 className="mx-3 my-3 text-center text-white ">(UM SO PROPOSITO)</h4>
        <h5 className="mx-3 my-3 text-center text-white"> CASAIS LIDERES</h5>

        <div class="d-flex align-content p-3">
          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <img src={c1} alt="bo" className="card-img" />

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">LIDER</h3>
              <h4 className="card-title">Altair</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Ellen</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">VICE-LIDER</h3>
              <h4 className="card-title">___________</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">___________</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>

          <div class="d-flex align-content-around flex-wrap">
            <div class="cardd">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
              </a>

              <p>
                {" "}
                <h2 className="card-title">CASAL</h2>
              </p>
              <h3 className="card-title">SECRETARIO</h3>
              <h4 className="card-title">Ueslei</h4>
              <h4 className="card-title"> & </h4>
              <h4 className="card-title">Jessica</h4>

              <Social>
                <a
                  href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/"
                >
                  <FaWhatsapp />
                </a>
              </Social>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
