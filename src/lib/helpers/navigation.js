
export const scrollToItem = ({itemID, ajaxPageNumber,requestedPageNum}) => {
  const headersHeight = $('.site-header').outerHeight(true);
  const filterHeight = $('.js-mobile-filters-toggle').outerHeight(true);

  if(itemID && (ajaxPageNumber == requestedPageNum)) {
      if($(itemID)){
          var itemTop = $(itemID).offset().top - headersHeight - filterHeight;
          window.scrollTo({left:0, top:itemTop, behavior: 'smooth'});
      }
  }
}

