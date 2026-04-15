//
function script15384(int0: int): void {
    script15381();
    varclient_6857 = 0;
    var int1 = 1;
    var int2 = 2;
    var int3 = 0;
    script15786(comp(579, 24), comp(579, 2), int1, comp(579, 28), comp(579, 3), int2, comp(579, 32), comp(579, 4), int3);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    switch (script15536()) {
        case 6: {
            int4 = 3;
            int5 = 6;
            if ((varbitplayer_39917 > 14)) {
                int6 = 7;
            };
            break;
        }
    };
    script15786(comp(579, 12), comp(579, 7), int4, comp(579, 16), comp(579, 8), int5, comp(579, 20), comp(579, 9), int6);
    script15786(comp(579, 37), comp(579, 35), int7, comp(579, 42), comp(579, 40), int8, comp(579, 47), comp(579, 45), int9);
    var int10 = 1;
    while ((int10 <= varclient_6857)) {
        if ((((int10 == 1) && (varclient_6857 > 1)) || (int10 > 1))) {
            script15386(0, int10);
        };
        int10 = (int10 + 1);
    };
    if ((int0 > varclient_6857)) {
        var int0 = 1;
    };
    if ((int0 <= 0)) {
        int0 = 1;
    };
    varclient_6856 = int0;
    return;
}