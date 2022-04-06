const initCloseMenu = () => {
    jQuery( document ).ready( function( ) {
        Array.from(document.getElementsByClassName('eael-content-timeline-content')).map((item, key) => {
            item.addEventListener("click", function( event ) {
                item.classList.add('display-content')
            })
        })
    } );
  }
  initCloseMenu()
  console.log('Open Timeline!!!')
  