//
function script6611(int0: unknown_int, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    if ((int0 == 1)) {
        if ((enum_getvalue(0, 0, 6060 as cs2enum, int1) == 1)) {
            CC_SETGRAPHIC(12168 as graphic);
            [int2, int3] = [20, 20];
        };
        if ((enum_getvalue(0, 0, 6060 as cs2enum, int1) == 2)) {
            CC_SETGRAPHIC(12166 as graphic);
            [int2, int3] = [40, 20];
        };
        if ((enum_getvalue(0, 0, 6060 as cs2enum, int1) == 3)) {
            CC_SETGRAPHIC(12162 as graphic);
            [int2, int3] = [60, 20];
        };
        if ((enum_getvalue(0, 0, 6060 as cs2enum, int1) == 4)) {
            CC_SETGRAPHIC(12158 as graphic);
            [int2, int3] = [80, 20];
        };
        CC_SETSIZE(int2, int3, 0, 0);
    } else {
        if ((enum_getvalue(0, 0, 6060 as cs2enum, int1) == 1)) {
            CC_SETGRAPHIC(12169 as graphic);
            [int2, int3] = [20, 20];
        };
        if ((enum_getvalue(0, 0, 6060 as cs2enum, int1) == 2)) {
            CC_SETGRAPHIC(12167 as graphic);
            [int2, int3] = [20, 40];
        };
        if ((enum_getvalue(0, 0, 6060 as cs2enum, int1) == 3)) {
            CC_SETGRAPHIC(12163 as graphic);
            [int2, int3] = [20, 60];
        };
        if ((enum_getvalue(0, 0, 6060 as cs2enum, int1) == 4)) {
            CC_SETGRAPHIC(12159 as graphic);
            [int2, int3] = [20, 80];
        };
        CC_SETSIZE(int2, int3, 0, 0);
    };
    return;
}