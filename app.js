/**+-Ahora vamos a Codear React.js usando el Lenguaje JSX que es una Extensión de Javascript (Como lo es SASS de CSS) que mezcla Javascript con HTML creada Específicamente para ser usada en React.JS 
  * y simplificar su Código. Antes de Poder usar JSX debemos Permitir que nuestro Archivo "app.js" o el Archivo .js que tengamos COMPILE JSX ya que éste no viene con esa opción por Defecto, para eso usamos el
  *  Programa Prepros 7 en el que Seleccionamos a Archivo "app.js" y le marcamos la Configuración de "Transpile with Babel", lo que va a crear un Nuevo Archivo Llamado "app-dist.js" en la misma Carpeta que el 
  * Archivo "app.js" y por el Cual se PreProcesará el Código JSX por lo cual ahora debemos llamar a "app-dist.js" en vez de a "app.js" desde Nuestro HTML, ya que ahora la Lógica Provrendrá de Allí.
  * Una vez hecho esto podremos escribir JSX Normalmente. NOTA:_ Todo lo que se ponga entre Corchetes "{...}" en JSX será interpretado como Javascript Normal y las Clases de los Elementos en JSX se 
  * escribe "className='***'" en vez de solo "class='***'". NO se pueden poner varios Elementos HTML/JSX en una misma constante/variable, en todo caso se puede Poner 1 Elemento que sea Contenedor de Otros Varios
  * Elementos dentro de él. Si se quieren escribir varias Líneas, poner todo el Contenido de la constante/variable dentro de Paréntesis "(...)".*/

/**+-(1)-LOS COMPONENTES en React.js son Funciones que reciben Datos y Retornan Elementos de React.js en JSX, sirven para ahorrar muchas lineas de código en Procesos Repetitivos y que siguen un Patrón.
 *+-LOS COMPONENTES en React.js Por Defecto se Escriben con la Primera Letra del Nombre en Mayúscula y su único Parámetro siempre es 'props', que es la abreviación de Propiedades, y dentro de la función escribimos
 las distintas propiedades que vayamos creando con esta Sintaxis:_ {props.propertyName} .*/

function Greets(props){
  return <h1>Hello! {props.userName}.</h1>;
}
/**(2)-Luego, para Renderizarlo en el ReactDOM e Invocarlo como si fuese una Función escribimos la Sintaxis de un Elemento de HTML que se cierra en sí mismo (<... />) con el Nombre del Componente Adentro del Mismo y 
 * para invocar lo que vendría siendo el Parámetro de la Función tomamos SÓLO en Nombre de la Propiedad y Lo escribimos Como Un Atributo de Un Elemento HTML cuyo valor va a ser el que le queramos asignar a ese
 *  Parámetro:_.*/
ReactDOM.render(<Greets userName="Jhon"/> , document.getElementById('p1'));

/**+-Sin Usar Componentes y sólo Usando React.js y JSX el mismo Código se vería así:_
 * const user = 'Jhon';
 * const greet = <h1>Hello! {user}</h1>;
 * ReactDOM.render( greet, document.getElementById('p1'));
 * 
 * +-Por lo cual el Código cumpliría la misma función pero no sería Reutilizable.
 * 
 * (3)-A continuacón, una muestra de lo fácil que sería copiar y reutilizar el Código de ser Necesario:_.*/

ReactDOM.render(
<div>
  <Greets userName="Alex"/>
  <Greets userName="Daniel"/>
  <Greets userName="Mark"/>
  <Greets userName="Bill"/>
</div>, 
document.getElementById('p2')
);

/**(4)-Ahora como Ejercicio vamos a hacer Una Interfaz de Usuario con Imagen y Nombre de Usuario y cosas similares a lo de Arriba PERO Usando la Sintaxis de Javascript ES6:_*/

const User = props => {
  return (
    <div> 
      <img src={props.img} alt={props.name} height="300" width="300" />
      <p>{props.name}</p>
    </div>
  );
};
/**(El Valor de los Atributos "src='***'" y "alt='***'" y del Elemento <p> van entre Corchetes "{...}" porque es Código Javascript que va a ser Interpretado y NO HTML).*/

ReactDOM.render(

  <User img="img/ProfilePhoto.jpg" name="Nachoxt17"/>,

  document.getElementById('p3')
  );

/**+-(5)-Y ahora vamos a 'Descomponer' este Componente y a Reutilizar sus partes de Forma Separada para Ver cómo se Reutilizan los Componentes en React.js:_*/

const Avatar = props => <img src={props.user.img} alt={props.user.name} height="300" width="300"/>;
/**(Como sólo vamos a retornar(return) esa sola expresión, No Hace Falta Obviar con "return ...;" ni usar los Corchetes ({...}) gracias a que Usamos una Función Flecha de Javascript ES6).
 * +-Cuando sabes que vas a usar un Componente que va a ser reutilizado en Componente Mayor, es recomendable usar un Paso Intermedio Como lo es la Palabra "user" en "props.user.img".*/

const UserName = props => <p>{props.user.name}</p>;

/**+-Ahora necesitamos Un Componente Mayor como el que hicimos Antes que Anide los 2 Sub-Componentes que acabamos de Hacer Recién:_
 *+-La Parte de "user={props.user}" en ambos de los Sub-Componentes Invocados abajo se refiere a que el Valor del Atributo "user='***'" del que van a salir "{props.user.img}" y "{props.user.name}", que va a salir del
 Parámetro del Conjunto de Propiedades(props) que se le va a dar al Componente Padre "User1", osea que van a Heredar el Objeto "user=***" de su Componente Padre.*/

const User1 = props => {
  return (
    <div> 
      <Avatar user={props.user}/>
      <UserName user={props.user}/>
    </div>
  );
};

const user = {
  name : 'Deadpool',
  img: 'img/ProfilePhoto.jpg'
};

ReactDOM.render(<User1 user={user} />, document.getElementById('p4'));

/**(6)-A Continuación Vamos a Hacer Un Componente que de Una Lista de Usuarios con Sus Nombres y Avatares cuyos Datos Provienen del Array de Objetos "investors" (Lo que Significa que es un Elemento 
 * JSON = JavaScript Object Notation = Notación de Objetos en Javascript) que crearemos a Continuación(Normalmente estos Datos en Formato JSON Provienen de una API (siglas de 'Application Programming Interface')):_*/

const investors = [
  {
    name: 'Logan',
    avatar: "img/user1.png"
  },
  {
    name: 'Mason',
    avatar: "img/user2.png"
  },
  {
    name: 'Alex',
    avatar: "img/user3.jpg"
  },
  {
    name: 'Lucas',
    avatar: "img/user4.jpg"
  },
  {
    name: 'James',
    avatar: "img/user5.jpg"
  }
];

const Avatar1 = props => <img src={props.user.avatar} alt={props.user.name}  height="300" width="300" />;
const UserName1 = props => <p>{props.user.name}</p>;

const User2 = props => {
  return (
    <div className="user-item"> 
      <Avatar1 user={props.user}/>
      <UserName1 user={props.user}/>
    </div>
  );
};

const UsersList = props => {
  const userList = props.list.map((user, i) => <User2 user={user} key={i} />);
  return (
    <div className="user-list">
        {userList}
    </div>
  );
}; 
/**+-El "list" de "props.list.map(***)" es el Atributo que Contiene al Dato(En este Caso, el JSON de 'investors') que yo le Voy a pasar al Componente "UserList" cuando lo Renderice, más abajo lo vamos a volver a 
encontrar en el ReactDOM.render(***);. NOTA:_Aquí le pusimos "list" pero en realidad se puede usar cualquier Nombre.*/

ReactDOM.render(<UsersList list={investors} />, document.getElementById('p5'));