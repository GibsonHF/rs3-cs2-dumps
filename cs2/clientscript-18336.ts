//
function script18336(int0: int): void {
    var int1 = 0;
    var int2 = (1 + script17343());
    while ((int1 < int2)) {
        if ((CC_FINDBYCATEGORY(comp(1802, 288), int1, 1) == 1)) {
            if ((int1 == int0)) {
                CC_BUTTON_SETTOGGLED(true);
            } else {
                CC_BUTTON_SETTOGGLED(false);
            };
        };
        int1 = (int1 + 1);
    };
    return;
}