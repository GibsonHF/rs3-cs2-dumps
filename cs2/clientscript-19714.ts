//
function script19714(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = ENUM_GETOUTPUTCOUNT(int3);
    if ((int4 <= 1)) {
        return;
    };
    var int5 = -1;
    int5 = (int5 + 1);
    while ((int5 < int4)) {
        script7852(97976345, int5, 0, 0, 1, 1, 25, 25, 0, 0, 4479, inttostring((int5 + 1), 10));
        CC_BUTTON_SETCANTOGGLE(1);
        if ((int5 == 0)) {
            CC_BUTTON_SETTOGGLED(true);
        };
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script19716, int0, int1, int2, int5, int4));
    };
    IF_SETHIDE(false, comp(1495, 25));  // marketplace_preview:recolour_button_layer
    return;
}