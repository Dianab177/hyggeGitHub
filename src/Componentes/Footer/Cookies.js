import { makeStyles, Paper, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const Cookies = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Typography variant="h4" className={classes.title} gutterBottom>
          Política de Cookies
        </Typography>
        <Typography className={classes.bold} gutterBottom>
          Versión Junio 2020
        </Typography>
        <Typography>
          Desde
          <span style={{ color: "#005795" }}>
            <strong>hygge</strong>
          </span>{" "}
          se le informa de que a través de las cookies que usamos no recogemos
          ni recabamos datos personales de nuestros Usuarios. La finalidad de
          las cookies es ofrecerle una excelente experiencia de navegación y
          mejorar nuestros servicios en función de los usos que les dé a los
          contenidos publicados, o los accesos que haga a los diferentes
          apartados de la misma.
          <strong>1. INFORMACIÓN GENERAL</strong>
          <strong>a) Lo que debe saber sobres las Cookies</strong>
          Las cookies (galletas) son pequeños archivos que guardan información
          en los dispositivos móviles de los Usuarios que usan nuestra
          plataforma. Las cookies se asocian con el navegador de un ordenador o
          dispositivo determinado. Gracias a ellas, resulta posible que Spathios
          reconozca los navegadores de los Usuarios después de que éstos hayan
          visitado la Web por primera vez, determinando así sus preferencias de
          navegación y, a partir de ello, evaluarlas, pudiendo utilizarlas como
          indicadores para mejorar nuestro contenido y navegación en la Web.
          <strong>b) Las cookies que utilizamos en Spathios</strong>
          En el cuadro que aparece a continuación se incluyen los detalles,
          finalidad, el tipo y las clases de cookies que hemos implementado en
          nuestra plataforma. Para su comprensión, es necesario que conozca la
          definición de las cookies propias y de terceros. Cookies de terceros:
          son gestionadas por otras empresas e instaladas desde sus equipos y/o
          dominios a su equipo terminal. Cookies Propias: son gestionadas por
          nuestro proyecto e instaladas desde nuestros ordenadores a su equipo
          terminal.
          <br />
          <br />
          <strong>2. COOKIES UTILIZADAS</strong>
          <br />
          <br />
          <strong>2.1. Tipo de cookies que utilizamos</strong>
          <br />
          <br />
          <TableContainer className={classes.paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Cookie id.</TableCell>
                  <TableCell align="right">Finalidad</TableCell>
                  <TableCell align="right">Fecha caducidad</TableCell>
                  <TableCell align="right">Propia o de terceros</TableCell>
                  <TableCell align="right">Responsable</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    wordpress_logged_in_
                  </TableCell>
                  <TableCell align="right">
                    Después del loggin, WordPress activa la cookie para indicar
                    cuándo se ha conectado y quién es, siendo utilizado por la
                    interfaz de WordPress.
                  </TableCell>
                  <TableCell align="right">Sesión</TableCell>
                  <TableCell align="right">Propia</TableCell>
                  <TableCell align="right">hygge</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    PHPSESSID
                  </TableCell>
                  <TableCell align="right">
                    Permite que las variables de sesión sean almacenadas en el
                    servidor web
                  </TableCell>
                  <TableCell align="right">Sesión</TableCell>
                  <TableCell align="right">Propia</TableCell>
                  <TableCell align="right">hygge</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    wordpress_test_cookie
                  </TableCell>
                  <TableCell align="right">
                    Permite que el gestor de contenidos WordPress compruebe si
                    el navegador tiene las cookies activadas
                  </TableCell>
                  <TableCell align="right">Sesión</TableCell>
                  <TableCell align="right">Propia</TableCell>
                  <TableCell align="right">hygge</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    redux_current_tab
                  </TableCell>
                  <TableCell align="right">
                    Cookie para mejorar la navegación en la web
                  </TableCell>
                  <TableCell align="right">1 semana</TableCell>
                  <TableCell align="right">Propia</TableCell>
                  <TableCell align="right">hygge</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    redux_current_tab_get
                  </TableCell>
                  <TableCell align="right">
                    Cookie para mejorar la navegación en la web
                  </TableCell>
                  <TableCell align="right">1 semana</TableCell>
                  <TableCell align="right">Propia</TableCell>
                  <TableCell align="right">hygge</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    NID
                  </TableCell>
                  <TableCell align="right">
                    Permiten personalizar cómo se ven anuncios fuera de Google o
                    almacenar información, como el idioma preferido a la hora de
                    mostrar resultados de búsqueda
                  </TableCell>
                  <TableCell align="right">6 meses</TableCell>
                  <TableCell align="right">Terceros</TableCell>
                  <TableCell align="right">Google</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    CONSENT
                  </TableCell>
                  <TableCell align="right">
                    Cookie de Google Maps. Permite el funcionamiento del mapa de
                    Google en la página de contacto de la página web
                  </TableCell>
                  <TableCell align="right">20 años</TableCell>
                  <TableCell align="right">Terceros</TableCell>
                  <TableCell align="right">Google</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    1P_JAR
                  </TableCell>
                  <TableCell align="right">
                    Cookie publicitaria de Google utilizada para fines de
                    seguimiento de usuarios y orientación de anuncios
                  </TableCell>
                  <TableCell align="right">1 semana</TableCell>
                  <TableCell align="right">Terceros</TableCell>
                  <TableCell align="right">Google</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    ANID
                  </TableCell>
                  <TableCell align="right">
                    Muestra anuncios más relevantes para usted y sus intereses
                  </TableCell>
                  <TableCell align="right">1 mes</TableCell>
                  <TableCell align="right">Terceros</TableCell>
                  <TableCell align="right">Google</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    SEARCH_SAMESITE
                  </TableCell>
                  <TableCell align="right">
                    El objetivo es mitigar el riesgo de fuga de información de
                    origen cruzado. También proporciona cierta protección contra
                    los ataques de falsificación de solicitudes entre sitios
                  </TableCell>
                  <TableCell align="right">6 meses</TableCell>
                  <TableCell align="right">Terceros</TableCell>
                  <TableCell align="right">Google</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    __stripe_mid
                  </TableCell>
                  <TableCell align="right">
                    Usada por la pasarela de pago Stripe, almacena un ID
                    necesario para realizar el pago
                  </TableCell>
                  <TableCell align="right">24 horas</TableCell>
                  <TableCell align="right">Terceros</TableCell>
                  <TableCell align="right">Stripe</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    _fbp
                  </TableCell>
                  <TableCell align="right">
                    Utilizada por Facebook para ofrecer una serie de productos
                    publicitarios, como ofertas en tiempo real de terceros
                    anunciantes Representa el tiempo en el que el usuario inició
                    sesión.
                  </TableCell>
                  <TableCell align="right">24 horas</TableCell>
                  <TableCell align="right">Terceros</TableCell>
                  <TableCell align="right">Facebook</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    act
                  </TableCell>
                  <TableCell align="right">
                    Esta cookie se usa para distinguir entre dos sesiones para
                    el mismo usuario, creadas en diferentes momentos
                  </TableCell>
                  <TableCell align="right">Sesión</TableCell>
                  <TableCell align="right">Terceros</TableCell>
                  <TableCell align="right">Facebook</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    C_user
                  </TableCell>
                  <TableCell align="right">
                    Contiene la ID de usuario del usuario actualmente conectado
                  </TableCell>
                  <TableCell align="right">1 año</TableCell>
                  <TableCell align="right">Terceros</TableCell>
                  <TableCell align="right">Facebook</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Fr
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    Cookie necesaria de Facebook
                  </TableCell>
                  <TableCell align="right"> </TableCell>
                  <TableCell align="right">Terceros</TableCell>
                  <TableCell align="right">Facebook</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    spin
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    Cookie necesaria de Facebook
                  </TableCell>
                  <TableCell align="right"> </TableCell>
                  <TableCell align="right">Terceros</TableCell>
                  <TableCell align="right">Facebook</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    sb
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    Cookie necesaria de Facebook
                  </TableCell>
                  <TableCell align="right"> </TableCell>
                  <TableCell align="right">Terceros</TableCell>
                  <TableCell align="right">Facebook</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    xs
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    Cookie necesaria de Facebook
                  </TableCell>
                  <TableCell align="right"> </TableCell>
                  <TableCell align="right">Terceros</TableCell>
                  <TableCell align="right">Facebook</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    dpr
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    Cookie necesaria de Facebook
                  </TableCell>
                  <TableCell align="right"> </TableCell>
                  <TableCell align="right">Terceros</TableCell>
                  <TableCell align="right">Facebook</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br/>
          <strong>
            2.2. Advertencia sobre el uso de cookies y otras técnicas de
            spamming
          </strong>
          <br />
          <br />
          Como Usuario queda informado de la presencia de cookies en esta
          plataforma con el fin de facilitar el uso y navegación por la misma.
          Ahora bien, tiene la posibilidad de configurar su navegador para ser
          avisado en pantalla de la recepción de cookies y para impedir la
          instalación de las mismas en su disco duro. Si tiene dudas, en el
          punto 4 de este documento tiene más información. También puede
          consultar las instrucciones y manuales de su navegador para ampliar
          esta información. Para utilizar nuestra Página Web o utilizar la
          plataforma no resulta necesario que permita la instalación de cookies,
          sin perjuicio de que por ello suceda que no pueda acceder a algunos de
          los servicios o apartados de la Web. Se le informa también de que
          {" "}
          <span style={{ color: "#005795" }}>
            <strong>hygge</strong>
          </span>{" "} no utiliza técnicas de “spamming” y que únicamente tratará
          los datos que el Usuario transmita mediante el uso de los formularios
          electrónicos de contacto, mensajes de correo electrónico o contenidos
          facilitados a través de los servicios de la Página Web, para las
          finalidades expresadas en nuestro Aviso Legal y en nuestra Política de
          Privacidad.<br/><br/>
          <strong>3. LA ACEPTACIÓN DE LAS COOKIES EN NUESTRA PLATAFORMA</strong>
          <br />
          <br />
          La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y de Comercio Electrónico (en adelante, LSSICE), en
          relación con las cookies, exige que los Usuarios sean informados con
          carácter previo a la experiencia de navegación en la plataforma sobre
          el uso, tipo y finalidad de las cookies. Esa es la razón por la que
          hemos implementado un aviso informativo que se despliega una vez
          accede a nuestra plataforma, informándole de manera previa y expresa,
          cumpliendo con dicho precepto legal. Es importante que tenga en cuenta
          que en este aviso encontrará dos opciones: la primera, que le
          permitirá acceder a este texto informativo, y la segunda, que podrá
          usar para aceptar la instalación de las cookies en su equipo terminal.
          En calidad de Usuario, si omite la aceptación del uso de las cookies y
          continúa navegando en nuestra plataforma, entenderemos que existe un
          consentimiento tácito por su parte para poder aplicar y utilizar las
          cookies descritas en el apartado anterior y, con ello, daremos
          cumplimiento a lo exigido por la LSSICE.
          <br />
          <br />
          <strong>
            4. ¿CÓMO PUEDE DESINSTALAR LAS COOKIES DESDE SU NAVEGADOR?
          </strong>
          <br />
          <br />
          Si desea desinstalar las cookies desde su navegador, le indicamos
          algunos links que podrá consultar en función del tipo de navegador que
          tenga instalado en su equipo terminal. En Google Chrome:
          <br />
          https://support.google.com/chrome/answer/95647?hl=es
          <br />
          En Safari:
          <br />
          https://support.apple.com/kb/ph5042
          <br />
          En Mozilla Firefox:
          <br />
          https://support.mozilla.org/en-US/kb/disable-third-party-cookies
          <br />
          En Internet Explorer:
          <br />
          http://windows.microsoft.com/en-US/windows-vista/block-or-allow-cookies
          <br />
          En Opera:
          <br />
          http://www.opera.com/help/tutorials/security/privacy/
          <br />
          <br />
          Le advertimos que, después de realizar el proceso de desinstalación de
          cookies desde su navegador, ello puede dificultarle o impedirle el
          acceso o navegación a determinadas partes de nuestra Página Web.
          <br />
          <br />
          <strong>5. SOBRE LAS COOKIES DE LAS REDES SOCIALES</strong>
          <br />
          <br />
          Finalmente, queremos advertirle que nuestra plataforma no administra
          las redes sociales o plataforma de terceros como Facebook, Instagram o
          Youtube, donde{" "}
          <span style={{ color: "#005795" }}>
            <strong>hygge</strong>
          </span>{" "}
          tiene presencia, con lo cual tampoco es responsable de las cookies que
          instalan dichas plataformas. En calidad de Usuario de nuestra
          plataforma online, está obligado a consultar las políticas de
          privacidad y cookies de dichas redes para estar al corriente del tipo
          y finalidades y decidir aceptarlas o rechazarlas. Cookies utilizadas
          por Instagram:
          <br />
          https://help.instagram.com/1896641480634370?ref=ig
          <br />
          Cookies utilizadas por Facebook:
          <br />
          https://es-es.facebook.com/policies/cookies/
          <br />
          Cookies utilizadas por Youtube:
          <br />
          https://support.google.com/youtube/answer/32050?co=GENIE.Platform%3DDesktop&hl=es
          <br />
        </Typography>
      </Paper>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#FEFCF3",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  paper: {
    maxWidth: "90vw",
    backgroundColor: "#FEFCF3",
    padding: theme.spacing(5),
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(4, 0, 2, 0),
    color: "#005795",
    fontWeight: "bold",
  },
  ul: {
    marginLeft: theme.spacing(5),
  },
  link: {
    color: "#005795",
    textDecoration: "none",
  },
}));

export default Cookies;
