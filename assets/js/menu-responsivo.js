const $ = document.querySelector.bind(document)
const menuResponsivo = $('[data-menu-responsivo]')

const menuHamburguer = () => {
    //Toggle menu
    const containerMenu = $('[data-container-menu]')
    const menuLista = $('[data-menu-lista]')
    containerMenu.classList.add('flex-wrap')
    menuLista.classList.toggle('display-block')

    // Triangulo decorativo
    const decoracaoTriangulo  = document.createElement('p')
    decoracaoTriangulo.classList.add('triagulo-decorativo')
    
    menuLista.append(decoracaoTriangulo)

    toggleTituloCabecalho()
}

const toggleTituloCabecalho = () => {
    const tituloCabecalho = $('[data-titulo-cabecalho]')
    tituloCabecalho.classList.toggle('visibility-hidden')
}


menuResponsivo.addEventListener('click', menuHamburguer)
   
