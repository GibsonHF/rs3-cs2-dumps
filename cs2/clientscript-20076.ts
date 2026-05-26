//
function script20076(int0: number, int1: number): void {
    var int2 = -1;
    while ((++int2 < int0)) {
        if ((CC_FIND(97976344, int2) == 1)) {
            if ((int2 == int1)) {
                CC_BUTTON_SETTOGGLED(1);
            } else {
                CC_BUTTON_SETTOGGLED(0);
            };
        };
    };
    return;
}