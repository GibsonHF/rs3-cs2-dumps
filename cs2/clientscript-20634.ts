//
function script20634(int0: number): void {
    if ((int0 > IF_GETHEIGHT(comp(1498, 2)))) {  // marketplace_store:items_holder
        IF_SETSCROLLSIZE(0, int0, comp(1498, 2));  // marketplace_store:items_holder
        script7791(98172933, 98172930);
        IF_SETHIDE(true, comp(1498, 3));  // marketplace_store:fade_top
        IF_SETHIDE(false, comp(1498, 4));  // marketplace_store:fade_bottom
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1498, 2));  // marketplace_store:items_holder
        IF_SETHIDE(true, comp(1498, 3));  // marketplace_store:fade_top
        IF_SETHIDE(true, comp(1498, 4));  // marketplace_store:fade_bottom
    };
    return;
}