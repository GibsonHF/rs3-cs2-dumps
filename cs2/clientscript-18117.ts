//
function script18117(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = 0;
    while ((++int2 < int0)) {
        script7852(85918067, int2, 0, int3, 0, 0, 24, 24, 0, 0, 4479, inttostring((int2 + 1), 10));
        CC_BUTTON_SETCANTOGGLE(1);
        if ((int2 == int1)) {
            CC_BUTTON_SETTOGGLED(1);
        } else {
            CC_BUTTON_SETTOGGLED(0);
        };
        CC_SETOP(1, "Select");
        CC_SETOPCURSOR(1, 46);
        int3 = (int3 + 26);
    };
    return;
}