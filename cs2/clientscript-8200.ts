//
function script8200(int0: int, int1: int): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    [int3, int2, int4] = script8215(int0, int1);
    var int5 = -20;
    var int6 = int2;
    while ((int6 != comp(-1, 65535))) {
        int5 = (int5 + IF_GETY(int6));
        int6 = IF_GETLAYER(int6);
    };
    var int7 = ((IF_GETHEIGHT(comp(1444, 2)) / 2) - IF_GETHEIGHT(int2));
    var int8 = MAX(0, MIN((int5 - int7), IF_GETSCROLLHEIGHT(comp(1444, 2))));
    IF_SETONTIMER(callback(script8201, int8, 100, 94634986, 94633986), 94633986);
    return;
}