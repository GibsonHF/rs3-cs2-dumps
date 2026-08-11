//
function script14477(): void {
    IF_SETSCROLLSIZE(0, (IF_GETY(comp(1006, 7) /*rand_herbburner:collector_layer*/) + IF_GETHEIGHT(comp(1006, 7) /*rand_herbburner:collector_layer*/)), comp(1006, 5) /*rand_herbburner:scrolling_layer*/);
    IF_SETSCROLLPOS(0, 0, comp(1006, 5));  // rand_herbburner:scrolling_layer
    return;
}