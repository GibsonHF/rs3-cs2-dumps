//
function script20640(): void {
    if ((IF_GETHEIGHT(comp(707, 14)) <= 5)) {  // stock_favourites:search_input_caret ?
        IF_SETHIDE(true, comp(707, 1));  // stock_favourites:search_layer ?
    } else {
        IF_SETHIDE(false, comp(707, 1));  // stock_favourites:search_layer ?
    };
    return;
}