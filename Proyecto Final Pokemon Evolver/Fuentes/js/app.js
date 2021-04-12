//Pokemons con sus respectivas caracteristicas
var initialPoks = [
    {
        clickCount: 0,
        name1: 'Bulbasaur',
        name2: 'Ivysaur',
        name3: 'Venusaur',
        evo1: 'img/bulbasaur.png',
        evo2: 'img/ivysaur.png',
        evo3: 'img/venusaur.png',
        desc1: 'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.',
        desc2: 'Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.',
        desc3: 'La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.',
        region: 'Region: Kanto',
        tipo1: 'Tipo: Planta-Veneno',
        tipo2: 'Tipo: Planta-Veneno',
        tipo3: 'Tipo: Planta-Veneno',
        gen: '1ra Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/bulbasaur',
        url2: 'https://www.pokemon.com/el/pokedex/Ivysaur',
        url3: 'https://www.pokemon.com/el/pokedex/Venusaur'
    },
    {
        clickCount: 0,
        name1: 'Charmander',
        name2: 'Charmeleon',
        name3: 'Charizard',
        evo1: 'img/charmander.png',
        evo2: 'img/charmeleon.png',
        evo3: 'img/charizard.png',
        desc1: 'Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.',
        desc2: 'Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.',
        desc3: 'Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.',
        region: 'Region: Kanto',
        tipo1: 'Tipo: Fuego',
        tipo2: 'Tipo: Fuego',
        tipo3: 'Tipo: Fuego-Volador',
        gen: '1ra Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Charmander',
        url2: 'https://www.pokemon.com/el/pokedex/Charmeleon',
        url3: 'https://www.pokemon.com/el/pokedex/Charizard'

    },
    {
        clickCount: 0,
        name1: 'Squirtle',
        name2: 'Wartortle',
        name3: 'Blastoise',
        evo1: 'img/squirtle.png',
        evo2: 'img/wartortle.png',
        evo3: 'img/blastoise.png',
        desc1: 'Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.',
        desc2: 'Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.',
        desc3: 'Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.',
        region: 'Region: Kanto',
        tipo1: 'Tipo: Agua',
        tipo2: 'Tipo: Agua',
        tipo3: 'Tipo: Agua',
        gen: '1ra Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Squirtle',
        url2: 'https://www.pokemon.com/el/pokedex/Wartortle',
        url3: 'https://www.pokemon.com/el/pokedex/Blastoise'
    },
    {
        clickCount: 0,
        name1: 'Chikorita',
        name2: 'Bayleef',
        name3: 'Meganium',
        evo1: 'img/chikorita.png',
        evo2: 'img/bayleef.png',
        evo3: 'img/meganium.png',
        desc1: 'Al luchar, Chikorita agita la hoja que tiene para mantener a raya al rival. Pero, al mismo tiempo, libera una suave fragancia que apacigua el encuentro y crea un ambiente agradable y de amistad.',
        desc2: 'Bayleef tiene un collar de hojas alrededor del cuello y un brote de un árbol en cada una de ellas. La fragancia que desprenden estos brotes anima a la gente.',
        desc3: 'La fragancia de la flor de Meganium aplaca y suaviza los ánimos. Al luchar, este Pokémon libera mayor cantidad de esencia para disminuir el ánimo de combate de su oponente.',
        region: 'Region: Johto',
        tipo1: 'Tipo: Planta',
        tipo2: 'Tipo: Planta',
        tipo3: 'Tipo: Planta',
        gen: '2da Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Chikorita',
        url2: 'https://www.pokemon.com/el/pokedex/Bayleef',
        url3: 'https://www.pokemon.com/el/pokedex/Meganium'
    },
    {
        clickCount: 0,
        name1: 'Cyndaquil',
        name2: 'Quilava',
        name3: 'Typhlosion',
        evo1: 'img/cyndaquil.png',
        evo2: 'img/quilava.png',
        evo3: 'img/typhlosion.png',
        desc1: 'Cyndaquil se protege soltando llamas por el lomo. Cuando está enfadado, las llamas son fieras, pero, si está cansado, solo consigue echar algunas chispas que no llegan a cuajar en una completa combustión.',
        desc2: 'Quilava mantiene a sus rivales a raya con la intensidad de sus llamas y las ráfagas de aire ígneo que producen. También aprovecha su espectacular agilidad para esquivar ataques a la vez que abrasa al rival con sus llamas.',
        desc3: 'Typhlosion se oculta tras un trémulo haz de calor que crea mediante sus intensas y sofocantes llamaradas. Este Pokémon causa explosiones de fuego que reducen todo a cenizas.',
        region: 'Region: Johto',
        tipo1: 'Tipo: Fuego',
        tipo2: 'Tipo: Fuego',
        tipo3: 'Tipo: Fuego',
        gen: '2da Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Cyndaquil',
        url2: 'https://www.pokemon.com/el/pokedex/Quilava',
        url3: 'https://www.pokemon.com/el/pokedex/Typhlosion'
    },
    {
        clickCount: 0,
        name1: 'Totodile',
        name2: 'Croconaw',
        name3: 'Feraligatr',
        evo1: 'img/totodile.png',
        evo2: 'img/croconaw.png',
        evo3: 'img/feraligatr.png',
        desc1: 'Totodile tiene cuerpo pequeño, pero fuertes mandíbulas. A veces, piensa que solo está dando un mordisquito y hace unas heridas bastante considerables.',
        desc2: 'Una vez que Croconaw le ha clavado los colmillos a su presa, es imposible que escape porque los tiene hacia adentro como si fueran anzuelos. Cuando Croconaw hinca los dientes, no hay escapatoria.',
        desc3: 'Feraligatr intimida a sus oponentes abriendo las grandes fauces que tiene. En combate, golpea el suelo bruscamente con las gruesas y fuertes patas traseras que tiene para cargar contra su rival a una velocidad de vértigo.',
        region: 'Region: Johto',
        tipo1: 'Tipo: Agua',
        tipo2: 'Tipo: Agua',
        tipo3: 'Tipo: Agua',
        gen: '2da Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Totodile',
        url2: 'https://www.pokemon.com/el/pokedex/Croconaw',
        url3: 'https://www.pokemon.com/el/pokedex/Feraligatr'
    },
    {
        clickCount: 0,
        name1: 'Treecko',
        name2: 'Grovyle',
        name3: 'Sceptile',
        evo1: 'img/Treecko.png',
        evo2: 'img/Grovyle.png',
        evo3: 'img/Sceptile.png',
        desc1: 'Treecko tiene unos ganchos pequeños en las plantas de los pies con los que puede escalar superficies verticales. Este Pokémon ataca dando un golpetazo con la cola.',
        desc2: 'Las hojas que Grovyle tiene por el cuerpo le resultan muy útiles para camuflarse en el bosque y esconderse de los enemigos. A este Pokémon no hay quien lo supere subiendo a los árboles del bosque.',
        desc3: 'Las hojas que le salen a Sceptile del cuerpo tienen unos bordes muy afilados. Este Pokémon es muy ágil, va saltando de rama en rama y se lanza sobre el enemigo por la espalda.',
        region: 'Region: Hoenn',
        tipo1: 'Tipo: Planta',
        tipo2: 'Tipo: Planta',
        tipo3: 'Tipo: Planta',
        gen: '3ra Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Treecko',
        url2: 'https://www.pokemon.com/el/pokedex/Grovyle',
        url3: 'https://www.pokemon.com/el/pokedex/Sceptile'
    },
    {
        clickCount: 0,
        name1: 'Torchic',
        name2: 'Combusken',
        name3: 'Blaziken',
        evo1: 'img/Torchic.png',
        evo2: 'img/Combusken.png',
        evo3: 'img/Blaziken.png',
        desc1: 'Torchic no se separa de su Entrenador. Siempre va tras él con sus pasitos inseguros. Este Pokémon escupe bolas de fuego que pueden alcanzar los 1000 °C y carbonizar al enemigo.',
        desc2: 'Combusken fortalece las piernas corriendo por llanos y montañas. Este Pokémon tiene en las extremidades inferiores tanto fuerza como velocidad. Puede dar hasta diez patadas por segundo.',
        desc3: 'En combate, Blaziken expulsa vivas llamas por las muñecas y ataca al enemigo con fiereza. Cuanto más fuerte sea el enemigo, más intensas serán las llamas.',
        region: 'Region: Hoenn',
        tipo1: 'Tipo: Fuego',
        tipo2: 'Tipo: Fuego-Lucha',
        tipo3: 'Tipo: Fuego-Lucha',
        gen: '3ra Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Torchic',
        url2: 'https://www.pokemon.com/el/pokedex/Combusken',
        url3: 'https://www.pokemon.com/el/pokedex/Blaziken'
    },
    {
        clickCount: 0,
        name1: 'Mudkip',
        name2: 'Marshtomp',
        name3: 'Swampert',
        evo1: 'img/Mudkip.png',
        evo2: 'img/Marshtomp.png',
        evo3: 'img/Swampert.png',
        desc1: 'La aleta que tiene Mudkip en la cabeza actúa de radar y es muy sensible. Puede captar movimientos que se produzcan en el agua y en el aire, y todo lo que ocurra a su alrededor, sin necesidad de abrir los ojos.',
        desc2: 'El cuerpo de Marshtomp está cubierto por una fina película pegajosa gracias a la cual puede vivir en tierra. Cuando la marea está baja, a este Pokémon le encanta jugar en el fango.',
        desc3: 'Swampert es muy fuerte. Puede arrastrar una roca que pese más de una tonelada sin ningún problema. Este Pokémon tiene el sentido de la vista muy desarrollado. Es capaz de ver hasta en aguas cenagosas.',
        region: 'Region: Hoenn',
        tipo1: 'Tipo: Agua',
        tipo2: 'Tipo: Agua-Tierra',
        tipo3: 'Tipo: Agua-Tierra',
        gen: '3ra Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Mudkip',
        url2: 'https://www.pokemon.com/el/pokedex/Marshtomp',
        url3: 'https://www.pokemon.com/el/pokedex/Swampert'
    },
    {
        clickCount: 0,
        name1: 'Turtwig',
        name2: 'Grotle',
        name3: 'Torterra',
        evo1: 'img/Turtwig.png',
        evo2: 'img/Grotle.png',
        evo3: 'img/Torterra.png',
        desc1: 'Realiza la fotosíntesis al bañarle los rayos de sol. Su concha está formada por tierra endurecida.',
        desc2: 'Vive en los bosques cerca del agua. Por el día, sale a que les dé el sol a las plantas de su espalda.',
        desc3: 'Las gentes de antaño creían que el planeta se sustentaba en la espalda de un gran Torterra.',
        region: 'Region: Sinnoh',
        tipo1: 'Tipo: Planta',
        tipo2: 'Tipo: Planta',
        tipo3: 'Tipo: Planta-Tierra',
        gen: '4ta Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Turtwig',
        url2: 'https://www.pokemon.com/el/pokedex/Grotle',
        url3: 'https://www.pokemon.com/el/pokedex/Torterra'
    },
    {
        clickCount: 0,
        name1: 'Chimchar',
        name2: 'Monferno',
        name3: 'Infernape',
        evo1: 'img/Chimchar.png',
        evo2: 'img/Monferno.png',
        evo3: 'img/Infernape.png',
        desc1: 'El gas de su panza alimenta el fuego de su parte trasera, que ni la lluvia puede extinguir.',
        desc2: 'Controla hábilmente la intensidad del fuego de su cola para mantener al enemigo a una distancia ideal.',
        desc3: 'Su corona de fuego demuestra su naturaleza ígnea. Nadie le gana en velocidad.',
        region: 'Region: Sinnoh',
        tipo1: 'Tipo: Fuego',
        tipo2: 'Tipo: Fuego-Lucha',
        tipo3: 'Tipo: Fuego-Lucha',
        gen: '4ta Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Chimchar',
        url2: 'https://www.pokemon.com/el/pokedex/Monferno',
        url3: 'https://www.pokemon.com/el/pokedex/Infernape'
    },
    {
        clickCount: 0,
        name1: 'Piplup',
        name2: 'Prinplup',
        name3: 'Empoleon',
        evo1: 'img/Piplup.png',
        evo2: 'img/Prinplup.png',
        evo3: 'img/Empoleon.png',
        desc1: 'No le gusta que lo cuiden. Como no aprecia el apoyo de su Entrenador, le cuesta coger confianza con él.',
        desc2: 'Vive solo, alejado de los demás. Cada uno piensa que es el más importante.',
        desc3: 'Nada tan rápido como un fueraborda. Con los afilados bordes de sus alas puede cortar el hielo.',
        region: 'Region: Sinnoh',
        tipo1: 'Tipo: Agua',
        tipo2: 'Tipo: Agua',
        tipo3: 'Tipo: Agua-Acero',
        gen: '4ta Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Piplup',
        url2: 'https://www.pokemon.com/el/pokedex/Prinplup',
        url3: 'https://www.pokemon.com/el/pokedex/Empoleon'
    },
    {
        clickCount: 0,
        name1: 'Snivy',
        name2: 'Servine',
        name3: 'Serperior',
        evo1: 'img/Snivy.png',
        evo2: 'img/Servine.png',
        evo3: 'img/Serperior.png',
        desc1: 'Cuando recibe los rayos de sol, se mueve mucho más rápido que de costumbre. Usa mejor sus lianas que sus manos.',
        desc2: 'Parece que se desliza al correr. Engaña a sus rivales con su velocidad y los fustiga con su látigo.',
        desc3: 'Tan solo muestra su verdadero poder a quienes no se amedrentan ante su noble pero inquisitoria mirada.',
        region: 'Region: Teselia',
        tipo1: 'Tipo: Planta',
        tipo2: 'Tipo: Planta',
        tipo3: 'Tipo: Planta',
        gen: '5ta Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Snivy',
        url2: 'https://www.pokemon.com/el/pokedex/Servine',
        url3: 'https://www.pokemon.com/el/pokedex/Serperior'
    },
    {
        clickCount: 0,
        name1: 'Tepig',
        name2: 'Pignite',
        name3: 'Emboar',
        evo1: 'img/Tepig.png',
        evo2: 'img/Pignite.png',
        evo3: 'img/Emboar.png',
        desc1: 'Evita con agilidad los ataques enemigos. Lanza bolas de fuego por su hocico y tuesta bayas del bosque para comer.',
        desc2: 'Cuanto más come, más combustible tiene en su interior para avivar sus llamas, con lo que también aumenta su poder.',
        desc3: 'Calienta sus puños con las llamas de su barbilla para propinar puñetazos ardientes. Es muy fiel a sus compañeros.',
        region: 'Region: Teselia',
        tipo1: 'Tipo: Fuego',
        tipo2: 'Tipo: Fuego-Lucha',
        tipo3: 'Tipo: Fuego-Lucha',
        gen: '5ta Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Tepig',
        url2: 'https://www.pokemon.com/el/pokedex/Pignite',
        url3: 'https://www.pokemon.com/el/pokedex/Emboar'
    },
    {
        clickCount: 0,
        name1: 'Oshawott',
        name2: 'Dewott',
        name3: 'Samurott',
        evo1: 'img/Oshawott.png',
        evo2: 'img/Dewott.png',
        evo3: 'img/Samurott.png',
        desc1: 'La vieira de su ombligo no solo sirve como arma, sino también como instrumento para cortar las bayas que estén duras.',
        desc2: 'Gran espadachín. Utiliza sus dos vieiras con soltura al ejecutar las técnicas que aprende con una disciplina espartana.',
        desc3: 'En un abrir y cerrar de ojos, puede desenvainar y envainar los sables que hay en sus patas delanteras.',
        region: 'Region: Teselia',
        tipo1: 'Tipo: Agua',
        tipo2: 'Tipo: Agua',
        tipo3: 'Tipo: Agua',
        gen: '5ta Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Oshawott',
        url2: 'https://www.pokemon.com/el/pokedex/Dewott',
        url3: 'https://www.pokemon.com/el/pokedex/Samurott'
    },
    {
        clickCount: 0,
        name1: 'Chespin',
        name2: 'Quilladin',
        name3: 'Chesnaught',
        evo1: 'img/Chespin.png',
        evo2: 'img/Quilladin.png',
        evo3: 'img/Chesnaught.png',
        desc1: 'Cuando acumula energía, las suaves púas de su cabeza se vuelven tan duras y afiladas que hasta pueden atravesar rocas.',
        desc2: 'Desvía los ataques de los enemigos con la robusta coraza que cubre su cuerpo y contraataca con sus dos afilados cuernos.',
        desc3: 'Su fuerza es tal que, de un empellón, puede hacer volcar un tanque de 50 toneladas. Protege a sus aliados cuando hace de escudo.',
        region: 'Region: Kalos',
        tipo1: 'Tipo: Planta',
        tipo2: 'Tipo: Planta',
        tipo3: 'Tipo: Planta-Lucha',
        gen: '6ta Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Chespin',
        url2: 'https://www.pokemon.com/el/pokedex/Quilladin',
        url3: 'https://www.pokemon.com/el/pokedex/Chesnaught'
    },
    {
        clickCount: 0,
        name1: 'Fennekin',
        name2: 'Braixen',
        name3: 'Delphox',
        evo1: 'img/Fennekin.png',
        evo2: 'img/Braixen.png',
        evo3: 'img/Delphox.png',
        desc1: 'Tras masticar e ingerir pequeñas ramas se siente pletórico y expulsa aire caliente por sus grandes orejas a temperaturas superiores a los 200 °C.',
        desc2: 'Tiene una rama enredada en la cola. Cuando la saca, la rama prende fuego al hacer fricción con su pelaje y se lanza al ataque con ella.',
        desc3: 'Fija la mirada en la llama que arde en la punta de su bastón para concentrarse y prever sucesos que tienen lugar en el futuro.',
        region: 'Region: Kalos',
        tipo1: 'Tipo: Fuego',
        tipo2: 'Tipo: Fuego',
        tipo3: 'Tipo: Fuego-Psiquico',
        gen: '6ta Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Fennekin',
        url2: 'https://www.pokemon.com/el/pokedex/Braixen',
        url3: 'https://www.pokemon.com/el/pokedex/Delphox'
    },
    {
        clickCount: 0,
        name1: 'Froakie',
        name2: 'Frogadier',
        name3: 'Greninja',
        evo1: 'img/Froakie.png',
        evo2: 'img/Frogadier.png',
        evo3: 'img/Greninja.png',
        desc1: 'Secreta burbujas tanto por la espalda como por el pecho. Gracias a la elasticidad de estas, puede parar ataques y reducir el daño recibido.',
        desc2: 'Puede lanzar piedras envueltas en burbujas con tal puntería que acierta latas vacías a 30 metros de distancia.',
        desc3: 'Comprime el agua y crea estrellas ninja con las que ataca al enemigo. Cuando las hace girar a gran velocidad cortan en dos hasta el metal.',
        region: 'Region: Kalos',
        tipo1: 'Tipo: Agua',
        tipo2: 'Tipo: Agua',
        tipo3: 'Tipo: Agua-Siniestro',
        gen: '6ta Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Froakie',
        url2: 'https://www.pokemon.com/el/pokedex/Frogadier',
        url3: 'https://www.pokemon.com/el/pokedex/Greninja'
    },
    {
        clickCount: 0,
        name1: 'Rowlet',
        name2: 'Datrix',
        name3: 'Decidueye',
        evo1: 'img/Rowlet.png',
        evo2: 'img/Datrix.png',
        evo3: 'img/Decidueye.png',
        desc1: 'Usa sus afiladas plumas como arma arrojadiza y la fuerza de sus patas le permite asestar poderosas patadas que es mejor no subestimar.',
        desc2: 'Es narcisista y bastante pulcro, por lo que, si no se le dedica suficiente atención a su aseo, se niega a obedecer cualquier orden.',
        desc3: 'Usa sus plumas como flechas para atacar a los rivales. Si no puede permitirse fallar, frunce su capucha para concentrarse mejor.',
        region: 'Region: Alola',
        tipo1: 'Tipo: Planta-Volador',
        tipo2: 'Tipo: Planta-Volador',
        tipo3: 'Tipo: Planta-Fantasma',
        gen: '7ta Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Rowlet',
        url2: 'https://www.pokemon.com/el/pokedex/Datrix',
        url3: 'https://www.pokemon.com/el/pokedex/Decidueye'
    },
    {
        clickCount: 0,
        name1: 'Litten',
        name2: 'Torracat',
        name3: 'Incineroar',
        evo1: 'img/Litten.png',
        evo2: 'img/Torracat.png',
        evo3: 'img/Incineroar.png',
        desc1: 'Detesta que lo acaricien demasiado, aunque lo hagan sus seres queridos. En caso de sentirse agobiado se recluye en sí mismo.',
        desc2: 'Si le coge cariño a su Entrenador se muestra afectuoso, pero es tan fuerte y sus garras tan afiladas que lo puede dejar lleno de arañazos.',
        desc3: 'Este Pokémon rudo y egoísta considera aburrido enfrentarse a un rival inferior a él y prefiere dar lo mejor de sí mismo contra rivales más fuertes.',
        region: 'Region: Alola',
        tipo1: 'Tipo: Fuego',
        tipo2: 'Tipo: Fuego',
        tipo3: 'Tipo: Fuego-Siniestro',
        gen: '7ta Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Litten',
        url2: 'https://www.pokemon.com/el/pokedex/Torracat',
        url3: 'https://www.pokemon.com/el/pokedex/Incineroar'
    },
    {
        clickCount: 0,
        name1: 'Popplio',
        name2: 'Brionne',
        name3: 'Primarina',
        evo1: 'img/Popplio.png',
        evo2: 'img/Brionne.png',
        evo3: 'img/Primarina.png',
        desc1: 'Gracias al entrenamiento diario al que se somete, es capaz de inflar burbujas cada vez más grandes a través de la nariz.',
        desc2: 'Se emociona al contemplar una danza que no conoce y se esfuerza sobremanera por aprender todos sus pasos a la perfección.',
        desc3: 'Primarina considera los combates como un escenario ideal donde abatir a su presa con un canto y baile que derrochan elegancia.',
        region: 'Region: Alola',
        tipo1: 'Tipo: Agua',
        tipo2: 'Tipo: Agua',
        tipo3: 'Tipo: Agua-Hada',
        gen: '7ta Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Popplio',
        url2: 'https://www.pokemon.com/el/pokedex/Brionne',
        url3: 'https://www.pokemon.com/el/pokedex/Primarina'
    },
    {
        clickCount: 0,
        name1: 'Grookey',
        name2: 'Thwackey',
        name3: 'Rillaboom',
        evo1: 'img/Grookey.png',
        evo2: 'img/Thwackey.png',
        evo3: 'img/Rillaboom.png',
        desc1: 'Al marcar el ritmo con su baqueta especial, produce unas ondas sonoras capaces de devolver la vitalidad a la flora.',
        desc2: 'Los Thwackey que marcan el ritmo más contundente con sus dos baquetas son los más respetados por sus congéneres.',
        desc3: 'Controla los poderes y las raíces de su singular tocón en combate golpeándolo como si fuera un tambor.',
        region: 'Region: Galar',
        tipo1: 'Tipo: Planta',
        tipo2: 'Tipo: Planta',
        tipo3: 'Tipo: Planta',
        gen: '8va Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Grookey',
        url2: 'https://www.pokemon.com/el/pokedex/Thwackey',
        url3: 'https://www.pokemon.com/el/pokedex/Rillaboom'
    },
    {
        clickCount: 0,
        name1: 'Scorbunny',
        name2: 'Raboot',
        name3: 'Cinderace',
        evo1: 'img/Scorbunny.png',
        evo2: 'img/Raboot.png',
        evo3: 'img/Cinderace.png',
        desc1: 'Se pone a correr para elevar su temperatura corporal y propagar la energía ígnea por todo el cuerpo. Desata así su verdadera fuerza.',
        desc2: 'Su suave pelaje lo protege del frío y le permite incrementar todavía más la temperatura de sus movimientos de tipo Fuego.',
        desc3: 'Convierte piedras en balones de fuego dándoles toques y, luego, chuta con fuerza hacia el rival para chamuscarlo.',
        region: 'Region: Galar',
        tipo1: 'Tipo: Fuego',
        tipo2: 'Tipo: Fuego',
        tipo3: 'Tipo: Fuego',
        gen: '8va Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Scorbunny',
        url2: 'https://www.pokemon.com/el/pokedex/Raboot',
        url3: 'https://www.pokemon.com/el/pokedex/Cinderace'
    },
    {
        clickCount: 0,
        name1: 'Sobble',
        name2: 'Drizzile',
        name3: 'Inteleon',
        evo1: 'img/Sobble.png',
        evo2: 'img/Drizzile.png',
        evo3: 'img/Inteleon.png',
        desc1: 'Cuando se espanta, libera unas lágrimas con un factor lacrimógeno equivalente a 100 cebollas para hacer llorar también al rival.',
        desc2: 'Crea bolas de agua con el líquido que segrega por las palmas de las manos y las usa en combate de forma estratégica.',
        desc3: 'Esconde algunos trucos bajo la manga: puede disparar agua por los dedos o planear con las membranas de su espalda.',
        region: 'Region: Galar',
        tipo1: 'Tipo: Agua',
        tipo2: 'Tipo: Agua',
        tipo3: 'Tipo: Agua',
        gen: '8va Generacion',
        url1: 'https://www.pokemon.com/el/pokedex/Sobble',
        url2: 'https://www.pokemon.com/el/pokedex/Drizzile',
        url3: 'https://www.pokemon.com/el/pokedex/Inteleon'
    }
]

//Funcion que asigna las caracteristicas de cada pokemon
var Pok = function(data){
    this.clickCount = ko.observable(data.clickCount);
    this.region = ko.observable(data.region);
    this.gen = ko.observable(data.gen);

    //tipo de pokemon
    this.tipo = ko.computed(function(){
        var title;
        var clicks = this.clickCount();
        if(clicks<1){
            title = data.tipo1;
        }
        else if(clicks<2){
            title = data.tipo2;
        }
        else{
            title = data.tipo3;
        }
        return title;
    }, this);

    //nombre del pokemon
    this.name = ko.computed(function(){
        var title;
        var clicks = this.clickCount();
        if(clicks<1){
            title = data.name1;
        }
        else if(clicks<2){
            title = data.name2;
        }
        else{
            title = data.name3;
        }
        return title;
    }, this);

    //imagen del pokemon
    this.imgSrc = ko.computed(function(){
        var title;
        var clicks = this.clickCount();
        if(clicks<1){
            title = data.evo1;
        }
        else if(clicks<2){
            title = data.evo2;
        }
        else{
            title = data.evo3;
        }
        return title;
    }, this);

    //url de la imagen
    this.url = ko.computed(function(){
        var title;
        var clicks = this.clickCount();
        if(clicks<1){
            title = data.url1;
        }
        else if(clicks<2){
            title = data.url2;
        }
        else{
            title = data.url3;
        }
        return title;
    }, this);

    //descripcion del pokemon
    this.desc = ko.computed(function(){
        var title;
        var clicks = this.clickCount();
        if(clicks<1){
            title = data.desc1;
        }
        else if(clicks<2){
            title = data.desc2;
        }
        else{
            title = data.desc3;
        }
        return title;
    }, this);
}

var ViewModel = function(){
    var self = this;

    this.pokList = ko.observableArray([]);

    initialPoks.forEach(function(pokItem){
        self.pokList.push(new Pok(pokItem));
    });

    this.currentPok = ko.observable(this.pokList()[0]);

    this.incrementCounter = function(){
        if(self.currentPok().clickCount()<2){
            self.currentPok().clickCount(self.currentPok().clickCount() + 1);
            var count = 0;
            count++;
        }
    };

    this.decrementCounter = function(){
        if(self.currentPok().clickCount()>0){
            self.currentPok().clickCount(self.currentPok().clickCount() - 1);
            var count = 0;
            count--;
        }
    };

    this.setPok = function(clickedPok){
        self.currentPok(clickedPok);
    };
    
}

ko.applyBindings(new ViewModel());