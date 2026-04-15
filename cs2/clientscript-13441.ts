//
function script13441(int0: int): void {
    var int1 = 122880075;
    var int2 = comp(1875, 110);
    var int3 = 122880109;
    var int4 = 122880097;
    var int5 = comp(1875, 96);
    var int6 = script13433(5);
    var int7 = struct_getparam(int6, 6582);
    var int8 = struct_getparam(int6, 6583);
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 1;
    var int14 = -1 as graphic;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = ENUM_GETOUTPUTCOUNT(int7);
    var int21 = -1 as obj;
    var int22 = 0;
    var int23 = -1 as struct;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var string0 = "null";
    int17 = script13434(5);
    int16 = (MIN(varplayer_7002, int17) / 10);
    int19 = script13431(5);
    int15 = (int19 / (int17 / 348));
    int17 = (int17 / 10);
    string0 = `${inttostring(int16, 10)}/${inttostring(int17, 10)}`;
    if ((IF_GETNEXTSUBID(int2) == 0)) {
        CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
        CC_SETGRAPHIC(30931 as graphic);
        CC_SETPOSITION(int9, int10, 0, 0);
        CC_SETSIZE(0, 0, 1, 1);
        IF_SETONMOUSEREPEAT(callback(script3876, string0, int2, -1), int3);
        CC_SETONVARTRANSMIT(callback(script13436, 5, 7002, 6991, 2));
    };
    IF_SETONTIMER(callback(script13442, int2, int3, int4, int15), int2);
    IF_SETHIDE(0, 122880001);
    while ((int18 < int20)) {
        int21 = enum_getvalue(0, 33, int7, int18);
        int14 = item_getparam(int21, 6276);
        int12 = enum_getvalue(0, 0, int8, int18);
        int12 = (int12 / 10);
        int11 = script13440(int18, 5);
        int12 = (int17 - int12);
        int25 = 1000;
        int10 = (int17 - ((int17 * int18) / int20));
        int10 = (int10 / int25);
        if ((int24 == 0)) {
            int24 = 1;
            int9 = 0;
        } else {
            int24 = 0;
            int9 = (IF_GETWIDTH(int5) - (36 + 4));
        };
        if ((int21 != -1 as obj)) {
            if ((((int19 / 10) >= (int17 - int12)) && (int11 == 0))) {
                int23 = 28303 as struct;
            } else {
                int23 = 28303 as struct;
                if (((int19 / 10) < (int17 - int12))) {
                    int23 = 21363 as struct;
                    int11 = 2;
                };
            };
            script10764(int5, int23, int9, int10, 36, (32 + 4), -1);
            CC_CREATE(int5, 5, IF_GETNEXTSUBID(int5));
            CC_SETSIZE((36 - 4), 32, 0, 0);
            if ((int14 == -1 as graphic)) {
                CC_SETOBJECT(int21, int13);
                CC_SETPOSITION((int9 + 4), (int10 + 4), 0, 0);
            } else {
                CC_SETGRAPHIC(int14);
                CC_SETPOSITION((int9 + 2), (int10 + 2), 0, 0);
            };
            CC_SETONMOUSEREPEAT(callback(script13481, int6, (int17 - int12), int11, int21, int5, (IF_GETNEXTSUBID(int5) - 1)));
            if ((script6431() == 1)) {
                CC_SETONCLICK(callback(script8296, int6, (int17 - int12), int11, int21, int14));
            };
            int22 = IF_GETNEXTSUBID(int5);
        };
        int18 = (int18 + 1);
    };
    return;
}