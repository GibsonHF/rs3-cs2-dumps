//
function script18117(int0: int, int1: int): void {
    var int2 = -1;
    var int3 = 0;
    while ((++int2 < int0)) {
        script7852(comp(1311, 371), int2, 0, int3, 0, 0, 24, 24, 0, 0, 4479 as dbrow, inttostring((int2 + 1), 10));
        CC_BUTTON_SETCANTOGGLE(true);
        if ((int2 == int1)) {
            CC_BUTTON_SETTOGGLED(true);
        } else {
            CC_BUTTON_SETTOGGLED(false);
        };
        CC_SETOP(1, "Select");
        CC_SETOPCURSOR(1, 46);
        int3 = (int3 + 26);
    };
    return;
}