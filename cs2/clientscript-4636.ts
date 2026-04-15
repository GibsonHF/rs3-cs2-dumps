//
function script4636(int0: component, int1: component, int2: component, string0: string): void {
    CC_CREATE(int1, 3, IF_GETNEXTSUBID(int1));
    var int3 = int2;
    var int4 = 0;
    var int5 = 0;
    var int6 = false;
    while (((int3 != int0) && (int3 != comp(-1, 65535)))) {
        int4 = (int4 + IF_GETX(int3));
        int5 = (int5 + IF_GETY(int3));
        if ((IF_GETHIDE(int3) == true)) {
            int6 = true;
        };
        int3 = IF_GETPARENTLAYER(int3);
    };
    CC_SETTRANS(255);
    CC_SETFILL(1);
    if ((STRING_LENGTH(string0) > 0)) {
        CC_SETOP(1, string0);
    } else {
        CC_SETOP(1, IF_GETOP(1, int2));
    };
    CC_SETPOSITION(int4, int5, 0, 0);
    CC_SETSIZE(IF_GETWIDTH(int2), IF_GETHEIGHT(int2), 0, 0);
    CC_SETHIDE(int6);
    IF_SETONOP(callback(), int2);
    IF_SETONCLICK(callback(), int2);
    IF_CLEAROPS(int2);
    return;
}