import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>¿Preparado para comenzar? </h3>
              <h3>Habla con nosotros hoy</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Empezar </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>CompuPlaza</h3>
              <p>Somo una gran empresa con un gran prestigio </p>
            </div>
            <div className="footer-subscribe">
              <h3>Suscríbete para recibir actualizaciones importantes</h3>
              <form action="#">
                <input
                  type="email"
                  name="email"
                  placeholder="ingrese su correo"
                />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Siguenos</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a href="">
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Llamanos</h3>
              <h3>+51 970793132</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} CompuPlaza. Reservados todos los
                derechos
              </p>
              <div>
                <p>POLITICA & PRIVACIDAD</p>
                <p>TERMINOS & CONDICIONES</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
