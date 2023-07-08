import React from "react";

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Aqui va un breve texto</p>
                <p>Aca va otro texto breve</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/nosotros/nosotros1.jpg" alt="" />
                        <h5>Juan Gomez</h5>
                        <h6>Gerente general</h6>
                        <p>Aca va la descripcion de la persona correspondiente</p>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;
