//
function script11510(): void {
    var int0 = IF_GETHEIGHT(comp(1627, 13));  // mtxmgt_colour_overlay:premium_layer
    IF_SETSIZE(IF_GETWIDTH(comp(1627, 37)), (IF_GETHEIGHT(comp(1627, 37)) - int0), 0, 0, comp(1627, 37));  // mtxmgt_colour_overlay:colour_window
    IF_SETPOSITION(IF_GETX(comp(1627, 37)), IF_GETY(comp(1627, 37)), 0, 0, comp(1627, 37));  // mtxmgt_colour_overlay:colour_window
    return;
}