//
function script9690(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = IF_GETWIDTH(96796992);
    var int4 = IF_GETHEIGHT(96796992);
    if ((((int0 == 26) && (varbitplayer_27169 == 0)) && (varbitplayer_19925 == 0))) {
        [int1, int2] = script8726(8, int0);
        if (((int1 == -1) && (int2 == -1))) {
            if (((int3 <= 200) && (int4 <= 135))) {
                IF_SETHIDE(1, 15138833);
                IF_SETHIDE(0, 15138832);
            } else {
                IF_SETHIDE(0, 15138833);
                IF_SETHIDE(1, 15138832);
                return;
            };
        } else {
            IF_SETHIDE(1, 15138832);
            IF_SETHIDE(1, 15138833);
            return;
        };
    };
    return;
}