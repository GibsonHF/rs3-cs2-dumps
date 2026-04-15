//
function script7511(int0: int, int1: unknown_int, int2: int): void {
    var int3 = 0;
    var int4 = 5;
    if ((int0 == 0)) {
        var int2 = (int2 - 1);
        IF_SETONTIMER(callback(), comp(1389, 5));
        varclient_2706 = 0;
        if ((int2 > 0)) {
            if ((int1 == 1)) {
                script7507(int2);
            };
            if ((int1 == 0)) {
                script7509(int2);
            };
        };
    } else {
        if ((IF_FIND(comp(1389, 5)) == 1)) {
            if ((int1 == 1)) {
                CC_SETPOSITION((CC_GETX() - int4), CC_GETY(), 0, 0);
            } else if ((int1 == 0)) {
                CC_SETPOSITION((CC_GETX() + int4), CC_GETY(), 0, 0);
            } else {
                var int0 = 0;
            };
        };
        int3 = (int3 + 1);
        if ((int1 == 1)) {
            int0 = (int0 + int4);
        } else if ((int1 == 0)) {
            int0 = (int0 - int4);
        } else {
            int0 = 0;
        };
        IF_SETONTIMER(callback(script7511, int0, int1, int2), 91029509);
    };
    return;
}