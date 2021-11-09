export default function Footer() {
    return (
        <>
        <footer>
    <div className="body-footer">
        <div className="div-flex mb20">
            <div className="column1">
                <h4>Quienes somos?</h4>
                <p>Conectar las necesidades de clientes que buscan las mejores opciones en precio y variedad de articulos de ropa de todo tipo con productos a buenos precios, revisados y garantizados.</p>
            </div>

            <div className="column2">
                <h4>Información de contacto</h4>
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