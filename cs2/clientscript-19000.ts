//
function script19000(): void {
    var int0 = IF_GETNEXTSUBID(comp(1870, 18));  // trh119_buried_treasure_overlay:grid_chest_layer
    var int1 = -1;
    int1 = (int1 + 1);
    while ((int1 < int0)) {
        if ((CC_FIND(comp(1870, 18), int1) == 1)) {  // trh119_buried_treasure_overlay:grid_chest_layer
            CC_SETONTIMER(callback());
            CC_SETTRANS(0);
        };
    };
    return;
}