//
function script3285(int0: number): void {
    IF_SETSCROLLSIZE(0, int0, comp(947, 5));  // rand_floor_select:floor_select_layer
    if ((IF_GETSCROLLHEIGHT(comp(947, 5)) < IF_GETHEIGHT(comp(947, 5)))) {  // rand_floor_select:floor_select_layer
        IF_SETHIDE(true, comp(947, 713));  // rand_floor_select:floor_scroll_layer
    };
    return;
}