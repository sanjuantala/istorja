/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */


var elem = document.querySelector('.mobile-homepage-text-adverts ul');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  freeScroll: true,
contain: true,
// disable previous & next buttons and dots
prevNextButtons: false,
pageDots: true,
  freeScroll: true,
wrapAround: true,
  groupCells: true,
  groupCells: '100%',
  autoPlay: true,
  fade: true 

});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.mobile-homepage-text-adverts ul', {
  // options
});