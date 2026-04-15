//
function script19465(): void {
    var int0 = (IF_GETWIDTH(comp(1302, 51)) - 10);
    CC_DELETEALL(comp(1302, 51));
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(5975 as cs2enum);
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    while ((int1 < int2)) {
        int3 = enum_getvalue(0, 0, 5975 as cs2enum, int1);
        int8 = script19336(int3);
        script15938(comp(1302, 51), int3, 0, 0, int4, 0, 0, 0, 0, 1, 0);
        int6 = script19466(int3, int8, enum_getvalue(0, 36, 5976 as cs2enum, int3));
        int5 = 0;
        if ((int8 == 0)) {
            switch (int3) {
                case 1: {
                    [int7, int5] = script19469(int7, int0);
                    break;
                }
                case 2: {
                    [int7, int5] = script19470(int7, int0);
                    break;
                }
                case 3: {
                    [int7, int5] = script19471(int7, int0);
                    break;
                }
                case 4: {
                    [int7, int5] = script19472(int7, int0);
                    break;
                }
                case 5: {
                    [int7, int5] = script19473(int7, int0);
                    break;
                }
                case 6: {
                    [int7, int5] = script19474(int7, int0);
                    break;
                }
                default: {
                    return;
                }
            };
        };
        int5 = (int5 + int6);
        script19468(int3, int5);
        int4 = ((int4 + 10) + int5);
        int1 = (int1 + 1);
    };
    script19620(comp(1302, 52), comp(1302, 51), int4, comp(-1, 65535), -1, 0, -1, -1);
    return;
}