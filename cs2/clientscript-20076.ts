//
function script20076(int0: int, int1: int): void {
    var int2 = -1;
    while ((++int2 < int0)) {
        if ((CC_FIND(comp(1495, 24), int2) == 1)) {
            if ((int2 == int1)) {
                CC_BUTTON_SETTOGGLED(true);
            } else {
                CC_BUTTON_SETTOGGLED(false);
            };
        };
    };
    return;
}