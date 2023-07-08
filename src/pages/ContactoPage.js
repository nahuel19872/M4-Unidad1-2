import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto rapido</h2>
                <form>
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="number" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p class="acciones"><input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>

            <div class="datos">
                <h2>Otras vías de comunicación</h2>
                <p>Tambien puede contactarse por estos medios</p>
                <ul>
                    <li>Telefono: 45441278</li>
                    <li>Email: nahuelv1987@gmail.com</li>
                    <li>Facebook</li>
                    <li>Skype</li>
                </ul>
            </div>

        </main>

    );
}

export default ContactoPage;
