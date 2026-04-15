//
function script6157(int0: component): void {
    var int1 = 0;
    var int2 = 120;
    var int3 = 75;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    var int7 = -1 as cs2enum;
    while ((int1 < 16)) {
        CC_CREATE(int0, 5, int1);
        CC_SETSIZE(int2, int3, 0, 0);
        int4 = (int2 * MODULO(int1, 4));
        int5 = (int3 * (int1 / 4));
        CC_SETPOSITION(int4, int5, 0, 0);
        switch (MAP_LANG()) {
            case 0: {
                int7 = 5760 as cs2enum;
                break;
            }
            case 2: {
                int7 = 5761 as cs2enum;
                break;
            }
            case 3: {
                int7 = 5763 as cs2enum;
                break;
            }
            case 1: {
                int7 = 5762 as cs2enum;
                break;
            }
        };
        CC_SETGRAPHIC(enum_getvalue(0, 23, int7, int1));
        int1 = (int1 + 1);
    };
    return;
}