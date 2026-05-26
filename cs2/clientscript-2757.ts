//
function script2757(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if ((int3 == 0)) {
        script5500();
        return;
    };
    var int8 = IF_GETX(96796700);
    var int9 = IF_GETY(96796700);
    var int10 = 0;
    var int11 = 0;
    var int12 = IF_GETPARENTLAYER(77135872);
    if ((int12 != -1)) {
        int10 = IF_GETWIDTH(int12);
        int11 = IF_GETHEIGHT(int12);
    };
    if ((varclient_1695 == true)) {
        script5499();
    };
    if ((IF_FIND(77135872) == 1)) {
        if ((strcmp(varclient_2251, "") != 0)) {
            CC_SETSIZE(MIN(200, (20 + PARAWIDTH(varclient_2251, 180, 29))), (22 + (15 * PARAHEIGHT(varclient_2251, 180, 29))), 0, 0);
        };
        switch (varclient_7118) {
            case 1:
            case 2: {
                var [int0, int1] = script17185(int0, int1, int8, int9, int10, int11, CC_GETWIDTH(), CC_GETHEIGHT());
                break;
            }
            default: {
                [int0, int1] = script17184(int0, int1, int8, int9, int10, int11, CC_GETWIDTH(), CC_GETHEIGHT());
                break;
            }
        };
        CC_SETPOSITION(int0, int1, 0, 0);
        if ((varclient_1695 == true)) {
            varclient_1695 = false;
            CC_SETONTIMER(callback(script5497, script9356(varclient_2251)));
        };
    };
    if ((CC_FIND(77135872, 9) == 1)) {
        CC_SETTEXT(varclient_2251);
    };
    return;
}