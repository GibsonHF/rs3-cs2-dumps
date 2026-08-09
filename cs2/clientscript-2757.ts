//
function script2757(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if ((int3 == 0)) {
        script5500();
        return;
    };
    var int8 = IF_GETX(comp(1477, 28));
    var int9 = IF_GETY(comp(1477, 28));
    var int10 = 0;
    var int11 = 0;
    var int12 = IF_GETPARENTLAYER(comp(1177, 0));
    if ((int12 != comp(-1, 65535))) {
        int10 = IF_GETWIDTH(int12);
        int11 = IF_GETHEIGHT(int12);
    };
    if ((varclient_1695 == true)) {
        script5499();
    };
    if ((IF_FIND(comp(1177, 0)) == 1)) {
        if ((strcmp(varclient_2251, "") != 0)) {
            CC_SETSIZE(MIN(200, (20 + PARAWIDTH(varclient_2251, 180 as fontmetrics, 29))), (22 + (15 * PARAHEIGHT(varclient_2251, 180 as fontmetrics, 29))), 0, 0);
        };
        switch (varclient_7118) {
            case 1:
            case 2: {
                [int0, int1] = script17185(int0, int1, int8, int9, int10, int11, CC_GETWIDTH(), CC_GETHEIGHT());
                break;
            }
            default: {
                [int0, int1] = script17184(int0, int1, int8, int9, int10, int11, CC_GETWIDTH(), CC_GETHEIGHT());
                break;
            }
        };
        CC_SETPOSITION(int0, int1, 0, 0);
        if ((varclient_1695 == 1)) {
            varclient_1695 = 0;
            CC_SETONTIMER(callback(script5497, script9356(varclient_2251)));
        };
    };
    if ((CC_FIND(comp(1177, 0), 9) == 1)) {
        CC_SETTEXT(varclient_2251);
    };
    return;
}