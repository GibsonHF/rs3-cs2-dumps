//
function script10865(): void {
    var int0 = SCALE(180, 30, MIN(30, varbitplayer_26384));
    var int1 = IF_GETHEIGHT(103153675);
    var int2 = IF_GETHEIGHT(103153674);
    var int3 = 1;
    var int4 = SCALE(255, 180, (180 - int0));
    var int5 = SCALE(255, 180, int0);
    var int6 = 0;
    if (((int2 == int0) && (int1 == int0))) {
        IF_SETONTIMER(callback(), 103153667);
    } else {
        if ((int2 < int0)) {
            if (((int0 - int2) > 10)) {
                int3 = 5;
            };
            IF_SETSIZE(16, (int2 + int3), 0, 0, 103153674);
        } else if ((int2 > int0)) {
            IF_SETSIZE(16, (int2 - int3), 0, 0, 103153674);
        };
        int3 = 1;
        if ((int1 < int0)) {
            IF_SETSIZE(16, (int1 + int3), 0, 0, 103153675);
        } else if ((int1 > int0)) {
            if (((int1 - int0) > 10)) {
                int3 = 5;
            };
            IF_SETSIZE(16, (int1 - int3), 0, 0, 103153675);
        };
        IF_SETCOLOUR(script693(int4, int5, int6), 103153675);
    };
    return;
}