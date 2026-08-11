//
function script15011(int0: number): void {
    script15012(int0);
    script15019();
    if ((STRING_LENGTH(varclient_6788) > 0)) {
        IF_SETTEXT(ESCAPE(varclient_6788), comp(707, 15));  // stock_favourites:search_input_display ?
    };
    IF_SETHIDE(true, comp(707, 1));  // stock_favourites:search_layer ?
    return;
}