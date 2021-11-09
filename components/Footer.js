export default function Footer() {
    return (
        <>
        <footer>
    <div className="body-footer">
        <div className="div-flex mb20">
            <div className="part">
                <h4>Quienes somos?</h4>
                <p>Empresa dedicada a la venta y comercializacion de Videojuegos.Tenemos variedad de consolas, juegos y contenido digital para ti al mejor precio.</p>
                <p>Encontraras variedad de perifericos para tu consola favorita y PC. Manejamos pedidos por mayoreo (con anticipacion), así como con tarjetas de regalo.</p>
            </div>

            <div className="part">
                <h4 className="mb10">Información de contacto</h4>
                <a href="" target="_blank"><i class="fab fa-facebook fa-2x"></i>&emsp;Urban Dresser</a>
                <br/>
                <a href="" target="_blank"><i class="fab fa-whatsapp fa-2x"></i>&emsp;(555) 555 5555</a>
                <br/>
            </div>
        </div>
        <div>
<hr/>
        <center><h5 className="text-light">&copy;{new Date().getFullYear()} Urban Dresser</h5></center>
</div>
    </div>
</footer>
{/*             <div>
                <div className="footer fixed-relative">
                    <h5 className="text-light">&copy;{new Date().getFullYear()} Insurance Information</h5>
                </div>
            </div> */}
        </>
    );
}