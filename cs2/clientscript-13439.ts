//
function script13439(int0: int, int1: struct, int2: unknown_int): void {
    var int3 = comp(1875, 75);
    var int4 = 122880000;
    var int5 = comp(1875, 81);
    var int6 = 122880078;
    var int7 = 122880083;
    var int8 = comp(1875, 79);
    var int9 = 122880080;
    var int10 = struct_getparam(int1, 6582);
    var int11 = struct_getparam(int1, 6583);
    var int12 = 0;
    var int13 = 1;
    var int14 = 0;
    var int15 = (IF_GETWIDTH(int3) - 50);
    var int16 = (IF_GETWIDTH(int5) / 100);
    var int17 = ENUM_GETOUTPUTCOUNT(int10);
    var int18 = -1 as obj;
    var int19 = -1 as graphic;
    var string0 = "";
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = script13431(int0);
    var int25 = 44;
    int24 = (int24 / 4250);
    var int26 = -1 as struct;
    CC_DELETEALL(int3);
    CC_DELETEALL(int8);
    while ((int20 < int17)) {
        int18 = enum_getvalue(0, 33, int10, int20);
        int19 = item_getparam(int18, 6276);
        int12 = enum_getvalue(0, 0, int11, int20);
        int14 = script13440(int20, int0);
        if ((int14 == 1)) {
            int14 = 0;
        } else {
            int14 = 2;
        };
        if ((int18 != -1 as obj)) {
            if ((int14 == 0)) {
                int26 = 28303 as struct;
            } else {
                int26 = 21363 as struct;
                int14 = 2;
            };
            script10764(int8, int26, int21, int22, (36 + 4), (32 + 4), -1);
            CC_CREATE(int8, 5, IF_GETNEXTSUBID(int8));
            switch (int0) {
                case 1: {
                    CC_SETONVARTRANSMIT(callback(script13429, int0, 6998, 6991, 2));
                    break;
                }
                case 2: {
                    CC_SETONVARTRANSMIT(callback(script13429, int0, 6999, 6991, 2));
                    break;
                }
                case 3: {
                    CC_SETONVARTRANSMIT(callback(script13429, int0, 7000, 6991, 2));
                    break;
                }
                case 4: {
                    CC_SETONVARTRANSMIT(callback(script13429, int0, 7001, 6991, 2));
                    break;
                }
            };
            if ((int19 == -1 as graphic)) {
                CC_SETOBJECT(int18, int13);
                CC_SETPOSITION((int21 + 4), (int22 + 2), 0, 0);
                CC_SETSIZE(36, 32, 0, 0);
            } else {
                CC_SETGRAPHIC(int19);
                CC_SETPOSITION((int21 + 4), (int22 + 2), 0, 0);
                CC_SETSIZE(32, 32, 0, 0);
            };
            CC_SETONMOUSEREPEAT(callback(script13481, int1, (int12 / 10), int14, int18, int8, (IF_GETNEXTSUBID(int8) - 1)));
            int23 = IF_GETNEXTSUBID(int8);
            CC_CREATE[1](int9, 4, IF_GETNEXTSUBID(int9));
            CC_SETTEXT[1](inttostring(int20, 10));
            CC_SETPOSITION[1]((int21 + 2), 0, 0, 0);
            CC_SETTEXTFONT[1](26);
            CC_SETSIZE[1](40, 22, 0, 0);
            CC_SETCOLOUR[1](16777215);
            CC_SETTEXTALIGN[1](1, 1, 0);
            int21 = (((int21 + 36) + 4) + int25);
            if ((script6431() == 1)) {
                CC_SETONCLICK(callback(script8296, int1, (int12 / 10), int14, int18, int19));
            };
        };
        int20 = (int20 + 1);
    };
    return;
}