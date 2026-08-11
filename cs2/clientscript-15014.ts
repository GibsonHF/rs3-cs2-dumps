//
function script15014(int0: number): void {
    if ((script20870() == 0)) {
        IF_TRIGGEROP(comp(707, 17), -1, 1);  // stock_favourites:search_input_clickout ?
        varclient_6787 = 10;
        IF_SETONTIMER(callback(script15061, int0), comp(707, 0));  // stock_favourites:favourites ?
    };
    script15019();
    script15016();
    return;
}