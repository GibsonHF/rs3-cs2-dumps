//
function script16541(): void {
    var int0 = 9806 as graphic;
    var int1 = 9802 as graphic;
    if ((IF_GETGRAPHIC(comp(577, 8)) != int1)) {  // inv_drop_areas:alch_bg
        IF_SETGRAPHIC(int0, comp(577, 8));  // inv_drop_areas:alch_bg
    };
    if ((IF_GETGRAPHIC(comp(577, 4)) != int1)) {  // inv_drop_areas:drop_bg
        IF_SETGRAPHIC(int0, comp(577, 4));  // inv_drop_areas:drop_bg
    };
    if ((IF_GETGRAPHIC(comp(577, 12)) != int1)) {  // inv_drop_areas:diss_bg
        IF_SETGRAPHIC(int0, comp(577, 12));  // inv_drop_areas:diss_bg
    };
    return;
}