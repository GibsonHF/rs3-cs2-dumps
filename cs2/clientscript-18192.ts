//
function script18192(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, string0: string): void {
    var int6 = 0;
    if ((TESTBIT(AND(int5, 12858), 13) == 1)) {
        int6 = 1;
    };
    var int7 = -1 as dbrow;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = -1 as struct;
    var int12 = IF_GETSCROLLY(comp(1843, 183));
    var string1 = "";
    var int13 = 0;
    var int14 = -1 as struct;
    var int15 = comp(-1, 65535);
    var int16 = 0;
    if ((IF_FIND(comp(1843, 1)) == 1)) {
        cc_setparam(5946, -1);
    };
    if ((IF_FIND(comp(1843, 183)) == 1)) {
        int8 = MAX(0, cc_getparam(6359));
        var [int7, int0] = script18193(int7, int8, int0, int6, string0, int2, int3, int4);
        int9 = CC_GETWIDTH();
        int11 = enum_getvalue(0, 73, 12233 as cs2enum, ++int10);
        while (((int7 != -1 as dbrow) && (int11 != -1 as struct))) {
            script18196(int11, int7, int8, int12, int4, int9);
            int13 = script18197(int11, int7);
            int14 = script18198(int11, int7);
            script18201(int11, int7);
            int15 = struct_getparam(int11, 6226);
            CC_DELETEALL(int15);
            if ((int13 == 1)) {
                script13179(int15, int7);
                int13 = 0;
            };
            int8 = (int8 + 1);
            [int7, int0] = script18193(int7, int8, int0, int6, string0, int2, int3, int4);
            int11 = enum_getvalue(0, 73, 12233 as cs2enum, ++int10);
        };
        while (((int11 != -1 as struct) && (IF_FIND[1](IF_GETLAYER(struct_getparam(int11, 4037))) == 1))) {
            CC_SETSIZE[1](0, 0, 0, 0);
            int11 = enum_getvalue(0, 73, 12233 as cs2enum, ++int10);
        };
    };
    int0 = (int0 + script18194(int7, int6, string0, int2, int3, int4));
    var int17 = MAX(0, (int0 * (20 + 4)));
    if (((varbitclient_35137 == 1) && (varclient_5939 < INV_SIZE(675 as inv)))) {
        int17 = ((int17 - 20) + 155);
    };
    if ((IF_FIND(comp(1843, 250)) == 1)) {
        script13248(int0, string0, comp(1843, 250));
    };
    script13171(int17, 0);
    return;
}