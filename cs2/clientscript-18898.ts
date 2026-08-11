//
function script18898(int0: number, int1: number): void {
    var int2 = 0;
    CC_DELETEALL(comp(1284, 30));  // calendar_main:rows_scrollbar
    if ((int1 <= IF_GETHEIGHT(comp(1284, 22)))) {  // calendar_main:rows_container
        IF_SETHIDE(true, comp(1284, 30));  // calendar_main:rows_scrollbar
        IF_SETSCROLLSIZE(0, 0, comp(1284, 22));  // calendar_main:rows_container
        IF_SETSCROLLPOS(0, 0, comp(1284, 24));  // calendar_main:rows_container_scroll_layer
    } else {
        if ((int0 == 0)) {
            int2 = MIN(int1, IF_GETSCROLLY(comp(1284, 24)));  // calendar_main:rows_container_scroll_layer
        };
        IF_SETHIDE(false, comp(1284, 30));  // calendar_main:rows_scrollbar
        IF_SETSCROLLSIZE(0, int1, comp(1284, 22));  // calendar_main:rows_container
        IF_SETSCROLLPOS(0, int2, comp(1284, 24));  // calendar_main:rows_container_scroll_layer
        script7791(84148254, 84148246);
    };
    return;
}