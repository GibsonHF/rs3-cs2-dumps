//
function script12233(int0: component, int1: struct, int2: int, int3: int, int4: int, int5: int, int6: int): void {
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = script12006(int0);
    var int12 = ENUM_GETOUTPUTCOUNT(int11);
    var int13 = IF_GETWIDTH(struct_getparam(int1, 8122));
    var int14 = IF_GETHEIGHT(struct_getparam(int1, 8122));
    var int15 = 0;
    var int16 = -1;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var string0 = "";
    var int20 = -1 as graphic;
    var int21 = -1 as graphic;
    var int22 = -1 as graphic;
    var int23 = 0;
    var int24 = 0;
    var int25 = -1 as struct;
    var int26 = 1;
    [int7, int8, int9, int10] = script12005();
    define_array(int2);
    var int27 = 0;
    while ((int27 < int2)) {
        pop_array(int27, script8108(int3, int4, int27));
        int27 = (int27 + 1);
    };
    while (((int24 < int12) && (int15 < int6))) {
        int26 = 1;
        [int25, int17, string0, int20, int21, int22, int23] = script12003(int11, int24);
        CC_CREATE(int0, 5, int24);
        CC_SETSIZE(int7, int8, 0, 0);
        CC_SETPOSITION(push_array(MODULO(int15, int2)), (((int15 / int2) * int5) + 3), 0, 0);
        int18 = script7821(int25, int0, int24);
        int19 = script12248(int24);
        if ((int1 == 37672 as struct)) {
            script12004(int0, string0, int25, int1, int24, int11);
        } else {
            if ((((varbitplayer_45116 == 0) && (varbitplayer_45115 == 1)) && (int18 == 0))) {
                int26 = 0;
            };
            if ((((varbitplayer_45116 == 1) && (int17 == 0)) && (int19 == 0))) {
                int26 = 0;
            };
            if ((int26 == 1)) {
                CC_SETHIDE(false);
                script12004(int0, string0, int25, int1, int24, int11);
            } else {
                CC_SETHIDE(true);
            };
        };
        CC_CREATE(struct_getparam(int1, 8128), 5, int24);
        CC_SETSIZE(int9, int10, 0, 0);
        CC_SETPOSITION((push_array(MODULO(int15, int2)) - 2), (((int15 / int2) * int5) + 1), 0, 0);
        if (((int0 != comp(1890, 38)) && (CC_FIND(struct_getparam(int1, 8128), int24) == 1))) {
            CC_SETGRAPHIC(int20);
        };
        if (((int1 == 37672 as struct) || (int26 == 1))) {
            int15 = (int15 + 1);
        };
        int24 = (int24 + 1);
    };
    return;
}