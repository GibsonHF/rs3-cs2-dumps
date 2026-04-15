//[proc,scrollbar_vertical]
function script31(int0: component, int1: component, int2: graphic, int3: graphic, int4: graphic, int5: graphic, int6: graphic, int7: graphic): void {
    CC_DELETEALL(int0);
    var int8 = script9984(28551 as struct, -1);
    if ((int8 == -1 as struct)) {
        int8 = 28551 as struct;
    };
    if ((script15721() == 2)) {
        script8938(int0, int1, int8);
        return;
    };
    var int6 = struct_getparam(int8, 1388);
    var int7 = struct_getparam(int8, 1389);
    var int3 = struct_getparam(int8, 1394);
    var int4 = struct_getparam(int8, 1395);
    var int5 = struct_getparam(int8, 1396);
    var int2 = struct_getparam(int8, 1393);
    var int9 = IF_GETSCROLLHEIGHT(int1);
    var int10 = IF_GETHEIGHT(int0);
    var int11 = (int10 - 32);
    var int12 = 0;
    if ((int9 > 0)) {
        int12 = SCALE(IF_GETHEIGHT(int1), int9, int11);
    } else {
        int12 = int11;
    };
    int12 = MIN(int11, MAX(int12, struct_getparam(int8, 4406)));
    if ((struct_getparam(int8, 4407) != -1)) {
        int12 = MIN(int12, struct_getparam(int8, 4407));
    };
    var int13 = IF_GETSCROLLY(int1);
    var int14 = 0;
    var int15 = 0;
    if ((int13 > 0)) {
        int14 = (int9 - IF_GETHEIGHT(int1));
        if ((int14 == 0)) {
            int14 = 1;
        };
        if ((int13 > int14)) {
            IF_SETSCROLLPOS(0, int14, int1);
            int13 = int14;
        };
        int15 = SCALE(int13, int14, (int11 - int12));
        int15 = MIN(MAX(int15, 0), (int11 - int12));
    };
    var int16 = script12611(int0);
    CC_CREATE(int0, 5, 0);
    CC_SETPOSITION(0, 21, 0, 0);
    CC_SETSIZE(16, 42, 0, 1);
    CC_CREATE(int0, 5, 1);
    CC_SETPOSITION(0, (21 + int15), 0, 0);
    CC_SETGRAPHIC(int4);
    script12591(4, int16);
    CC_SETTILING(true);
    CC_SETDRAGGABLE(int0, 0);
    CC_SETDRAGRENDERBEHAVIOUR(3);
    CC_SETSIZE(16, (int12 - 10), 0, 0);
    CC_SETONDRAG(callback(script35, int0, int1, -2147483646, 0));
    CC_SETONDRAGCOMPLETE(callback(script35, int0, int1, -2147483646, 1));
    CC_CREATE(int0, 5, 2);
    CC_SETPOSITION(0, (16 + int15), 0, 0);
    CC_SETSIZE(16, 5, 0, 0);
    CC_SETGRAPHIC(int3);
    script12591(4, int16);
    CC_SETTILING(0);
    CC_CREATE(int0, 5, 3);
    CC_SETPOSITION(0, (((16 + int15) + int12) - 5), 0, 0);
    CC_SETSIZE(16, 5, 0, 0);
    CC_SETGRAPHIC(int5);
    script12591(4, int16);
    CC_SETTILING(0);
    CC_CREATE(int0, 5, 4);
    CC_SENDTOBACK();
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETGRAPHIC(int6);
    script12591(4, int16);
    CC_SETTILING(0);
    CC_SETONHOLD(callback(script13132, int0, int1, 1, -2147483643));
    CC_CREATE(int0, 5, 5);
    CC_SENDTOBACK();
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETGRAPHIC(int7);
    script12591(4, int16);
    CC_SETTILING(0);
    CC_SETONHOLD(callback(script13132, int0, int1, 0, -2147483643));
    CC_CREATE(int0, 5, 6);
    CC_SENDTOBACK();
    CC_SETPOSITION(0, 16, 0, 0);
    CC_SETSIZE(16, 32, 0, 1);
    CC_SETGRAPHIC(int2);
    script12591(4, int16);
    CC_SETTILING(1);
    CC_SETONCLICK(callback(script34, int0, int1, -2147483646));
    IF_SETONSCROLLWHEEL(callback(script36, int0, int1, -2147483646), int0);
    IF_SETONSCROLLWHEEL(callback(script36, int0, int1, -2147483646), int1);
    script14178(int0, int1);
    return;
}