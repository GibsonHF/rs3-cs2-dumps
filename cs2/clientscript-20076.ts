//
function script20076(int0: number, int1: number): void {
    var int2 = -1;
    int2 = (int2 + 1);
    while ((int2 < int0)) {
        if ((CC_FIND(comp(1495, 25), int2) == 1)) {  // marketplace_preview:recolour_button_layer
            if ((int2 == int1)) {
                CC_BUTTON_SETTOGGLED(true);
            } else {
                CC_BUTTON_SETTOGGLED(false);
            };
        };
    };
    return;
}