import React from "react";
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="./img/home/imagen-home.webp" alt="" />
            </div>
            <div className="columnas">
                <div className="Bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>este es un mensaje</p>
                    <p>este es otro mensaje</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Este es un comentario</span>
                        <span class="autor">Juan Perez</span>
                    </div>
                </div>

            </div>

        </main>
    )
}

export default HomePage;
