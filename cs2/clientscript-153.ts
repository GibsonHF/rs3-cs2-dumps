//[proc,interface_inv_update_big]
function script153(int0: component, int1: inv, int2: int, int3: int, int4: unknown_int, int5: unknown_int, int6: unknown_int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string): void {
    CC_DELETEALL(int0);
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    if ((int2 > 1)) {
        if ((IF_GETSCROLLWIDTH(int0) > 0)) {
            int7 = ((IF_GETSCROLLWIDTH(int0) - (36 * int2)) / (int2 - 1));
            int9 = ((IF_GETSCROLLWIDTH(int0) - (40 * int2)) / (int2 - 1));
        } else {
            int7 = ((IF_GETWIDTH(int0) - (36 * int2)) / (int2 - 1));
            int9 = ((IF_GETWIDTH(int0) - (40 * int2)) / (int2 - 1));
        };
    };
    if ((int3 > 1)) {
        if ((IF_GETSCROLLHEIGHT(int0) > 0)) {
            int8 = ((IF_GETSCROLLHEIGHT(int0) - (32 * int3)) / (int3 - 1));
            int10 = ((IF_GETSCROLLHEIGHT(int0) - (36 * int3)) / (int3 - 1));
        } else {
            int8 = ((IF_GETHEIGHT(int0) - (32 * int3)) / (int3 - 1));
            int10 = ((IF_GETHEIGHT(int0) - (36 * int3)) / (int3 - 1));
        };
    };
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = (int2 * int3);
    var int16 = 36;
    var int17 = 32;
    var int18 = 2;
    var int19 = 2;
    if ((int6 == 1)) {
        int7 = int9;
        int8 = int10;
        int16 = 40;
        int17 = 36;
        int18 = 4;
    };
    while ((int11 < int15)) {
        int13 = ((int16 + int7) * MODULO(int11, int2));
        int14 = ((int11 / int2) * (int17 + int8));
        CC_CREATE(int0, 5, int12);
        CC_SETSIZE(36, 32, 0, 0);
        script154(int1, int11, int0, int12, int4, int5, string0, string1, string2, string3, string4, string5, string6, string7, string8);
        if ((int6 == 1)) {
            CC_SETPOSITION((int13 + int18), (int14 + int19), 0, 0);
        } else {
            CC_SETPOSITION(int13, int14, 0, 0);
        };
        int12 = (int12 + 1);
        int11 = (int11 + 1);
    };
    if ((int6 == 1)) {
        int11 = 0;
        while ((int11 < int15)) {
            int13 = ((int16 + int9) * MODULO(int11, int2));
            int14 = ((int11 / int2) * (int17 + int10));
            CC_CREATE(int0, 5, int12);
            CC_SETSIZE(40, 36, 0, 0);
            CC_SETPOSITION(int13, int14, 0, 0);
            CC_SETGRAPHIC(18266 as graphic);
            CC_SENDTOBACK();
            int12 = (int12 + 1);
            int11 = (int11 + 1);
        };
    };
    if ((int1 == 93 as inv)) {
        switch (int0) {
            case 124649523: {
                script13669();
                break;
            }
            case 124518402: {
                script13654();
                break;
            }
            case 12124171: {
                script7153();
                break;
            }
            case 12058639: {
                script20704();
                break;
            }
        };
    };
    return;
}