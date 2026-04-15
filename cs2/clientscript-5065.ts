//
function script5065(int0: unknown_int): void {
    var int1 = IF_GETHEIGHT(comp(1111, 65));
    IF_SETSIZE(0, int1, 1, 0, comp(1111, 66));
    IF_SETSIZE(0, int1, 1, 0, comp(1111, 67));
    IF_SETSIZE(0, int1, 1, 0, comp(1111, 68));
    var int2 = IF_GETHEIGHT(comp(1111, 52));
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    switch (varclient_768) {
        case 2: {
            int3 = int1;
            int4 = (int2 - (int1 * 2));
            int5 = (int2 - int1);
            script5056(comp(1111, 65), 0);
            script5056(comp(1111, 66), 1);
            script5056(comp(1111, 67), 0);
            script5056(comp(1111, 68), 0);
            break;
        }
        case 3: {
            int3 = int1;
            int4 = (int1 * 2);
            int5 = (int2 - int1);
            script5056(comp(1111, 65), 0);
            script5056(comp(1111, 66), 0);
            script5056(comp(1111, 67), 1);
            script5056(comp(1111, 68), 0);
            break;
        }
        case 4: {
            int3 = int1;
            int4 = (int1 * 2);
            int5 = (int1 * 3);
            script5056(comp(1111, 65), 0);
            script5056(comp(1111, 66), 0);
            script5056(comp(1111, 67), 0);
            script5056(comp(1111, 68), 1);
            break;
        }
        default: {
            varclient_768 = 1;
            int3 = (int2 - (int1 * 3));
            int4 = (int2 - (int1 * 2));
            int5 = (int2 - int1);
            script5056(comp(1111, 65), 1);
            script5056(comp(1111, 66), 0);
            script5056(comp(1111, 67), 0);
            script5056(comp(1111, 68), 0);
            break;
        }
    };
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    if ((int0 == 1)) {
        [int6, int7, int8] = [int3, int4, int5];
    } else {
        int9 = IF_GETY(comp(1111, 66));
        if ((int9 != int3)) {
            int6 = (int9 + MAX(MIN((int3 - int9), 3), -3));
            int10 = 1;
        } else {
            int6 = int3;
        };
        int9 = IF_GETY(comp(1111, 67));
        if ((int9 != int4)) {
            int7 = (int9 + MAX(MIN((int4 - int9), 3), -3));
            int10 = 1;
        } else {
            int7 = int4;
        };
        int9 = IF_GETY(comp(1111, 68));
        if ((int9 != int5)) {
            int8 = (int9 + MAX(MIN((int5 - int9), 3), -3));
            int10 = 1;
        } else {
            int8 = int5;
        };
    };
    IF_SETPOSITION(0, 0, 1, 0, comp(1111, 65));
    IF_SETPOSITION(0, int6, 1, 0, comp(1111, 66));
    IF_SETPOSITION(0, int7, 1, 0, comp(1111, 67));
    IF_SETPOSITION(0, int8, 1, 0, comp(1111, 68));
    IF_SETPOSITION(0, int1, 1, 0, comp(1111, 53));
    IF_SETPOSITION(0, (int6 + int1), 1, 0, comp(1111, 56));
    IF_SETPOSITION(0, (int7 + int1), 1, 0, comp(1111, 59));
    IF_SETPOSITION(0, (int8 + int1), 1, 0, comp(1111, 62));
    IF_SETSIZE(0, (int6 - int1), 1, 0, comp(1111, 53));
    IF_SETSIZE(0, (int7 - (int6 + int1)), 1, 0, comp(1111, 56));
    IF_SETSIZE(0, (int8 - (int7 + int1)), 1, 0, comp(1111, 59));
    IF_SETSIZE(0, (int8 + int1), 1, 1, comp(1111, 62));
    script72(comp(1111, 55), comp(1111, 54), IF_GETSCROLLY(comp(1111, 54)));
    script72(comp(1111, 58), comp(1111, 57), IF_GETSCROLLY(comp(1111, 57)));
    script72(comp(1111, 61), comp(1111, 60), IF_GETSCROLLY(comp(1111, 60)));
    script72(comp(1111, 64), comp(1111, 63), IF_GETSCROLLY(comp(1111, 63)));
    if ((int10 == 1)) {
        IF_SETONTIMER(callback(script5064, -1), comp(1111, 52));
    } else {
        IF_SETONTIMER(callback(), comp(1111, 52));
    };
    return;
}