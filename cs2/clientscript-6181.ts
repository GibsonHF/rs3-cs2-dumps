//
function script6181(): void {
    var int0 = -1 as struct;
    var int1 = 0;
    var int2 = comp(-1, 65535);
    while ((int1 < ENUM_GETOUTPUTCOUNT(5840 as cs2enum))) {
        int2 = enum_getvalue(0, 9, 5840 as cs2enum, int1);
        if ((int2 != comp(-1, 65535))) {
            CC_CREATE(int2, 3, 0);
            CC_SETPOSITION(2, 2, 0, 0);
            CC_SETSIZE(2, 2, 1, 1);
            int0 = enum_getvalue(9, 73, 5839 as cs2enum, int2);
            if ((int0 != -1 as struct)) {
                CC_SETCOLOUR(struct_getparam(int0, 2395));
                int0 = -1 as struct;
            };
            CC_SETFILL(1);
            CC_CREATE(int2, 5, 1);
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETSIZE(20, 20, 0, 0);
            CC_SETGRAPHIC(2288 as graphic);
            int2 = comp(-1, 65535);
        };
        int1 = (int1 + 1);
    };
    return;
}