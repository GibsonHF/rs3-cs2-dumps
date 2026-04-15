//
function script1883(int0: int, int1: int, int2: component, int3: int): void {
    var int4 = 0;
    var int5 = 0;
    if ((int0 == 0)) {
        int5 = 0;
    } else {
        var int0 = MAX(int0, 1);
        if ((int1 > SCALE(3, 4, int0))) {
            int5 = 5;
        } else if ((int1 > SCALE(1, 4, int0))) {
            int5 = 4;
        } else if ((int1 > (0 - SCALE(1, 4, int0)))) {
            int5 = 3;
        } else if ((int1 > (0 - SCALE(3, 4, int0)))) {
            int5 = 2;
        } else {
            int5 = 1;
        };
    };
    while ((int4 < int5)) {
        CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
        CC_SETGRAPHIC(15515 as graphic);
        CC_SETSIZE(24, 36, 0, 0);
        CC_SETPOSITION((int4 * 26), int3, 0, 0);
        int4 = (int4 + 1);
    };
    while ((int4 < 5)) {
        CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
        CC_SETGRAPHIC(15518 as graphic);
        CC_SETSIZE(24, 36, 0, 0);
        CC_SETPOSITION((int4 * 26), int3, 0, 0);
        int4 = (int4 + 1);
    };
    return;
}