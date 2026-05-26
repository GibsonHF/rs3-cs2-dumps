//
function script18336(int0: number): void {
    var int1 = 0;
    var int2 = (1 + script17343());
    while ((int1 < int2)) {
        if ((CC_FINDBYCATEGORY(118096160, int1, 1) == 1)) {
            if ((int1 == int0)) {
                CC_BUTTON_SETTOGGLED(1);
            } else {
                CC_BUTTON_SETTOGGLED(0);
            };
        };
        int1 = (int1 + 1);
    };
    return;
}