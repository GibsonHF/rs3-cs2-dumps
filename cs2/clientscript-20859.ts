//
function script20859(): void {
    if ((script20866() == 1)) {
        script20858();
        return;
    };
    varclient_8472 = script12585(varclient_8472);
    if ((CC_FIND(comp(1498, 1), 1000) == 1)) {  // marketplace_store:categories_layer
        script7889(1, 1, varclient_8472);
    };
    if ((varclient_8376 != 1)) {
        IF_SETSCROLLPOS(0, 0, comp(1498, 2));  // marketplace_store:items_holder
        script20630(varclient_8376);
    };
    return;
}