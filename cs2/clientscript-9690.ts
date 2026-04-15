//
function script9690(int0: int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = IF_GETWIDTH(comp(1477, 320));
    var int4 = IF_GETHEIGHT(comp(1477, 320));
    if ((((int0 == 26) && (varbitplayer_27169 == 0)) && (varbitplayer_19925 == 0))) {
        [int1, int2] = script8726(8, int0);
        if (((int1 == -1) && (int2 == -1))) {
            if (((int3 <= 200) && (int4 <= 135))) {
                IF_SETHIDE(true, comp(231, 17));
                IF_SETHIDE(false, comp(231, 16));
            } else {
                IF_SETHIDE(false, comp(231, 17));
                IF_SETHIDE(true, comp(231, 16));
                return;
            };
        } else {
            IF_SETHIDE(true, comp(231, 16));
            IF_SETHIDE(true, comp(231, 17));
            return;
        };
    };
    return;
}