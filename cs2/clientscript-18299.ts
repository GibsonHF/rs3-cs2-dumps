//
function script18299(): void {
    var int0 = -1 as struct;
    var int1 = -1 as struct;
    var int2 = -1 as struct;
    var int3 = -1 as struct;
    [int0, int1, int2, int3] = script18289();
    var int4 = ENUM_GETOUTPUTCOUNT(17157 as cs2enum);
    var int5 = 6;
    var int6 = MAX(1, ((int4 / int5) + script12377(MODULO(int4, int5), 0, 1)));
    var int7 = -1 as struct;
    var int8 = -1 as graphic;
    var int9 = -1 as graphic;
    var int10 = 0;
    while ((++int10 <= int4)) {
        int7 = enum_getvalue(0, 73, 17157 as cs2enum, int10);
        script15938(comp(635, 13), int10, 0, 0, 0, 0, 0, 0, 0, 1, 1);
        script7858(int10, 1, 0, 0, 1, 1, 0, 0, 1, 1, 4479 as dbrow, "");
        if ((script18291(int7) == 0)) {
            int9 = script11657(14045 as graphic);
        } else {
            int9 = -1 as graphic;
        };
        if ((((((int9 != -1 as graphic) || (int7 == int0)) || (int7 == int1)) || (int7 == int2)) || (int7 == int3))) {
            CC_SETENABLED(false);
            CC_SETOPCURSOR(1, -1);
            int8 = struct_getparam(int7, 4030);
        } else {
            CC_SETENABLED(true);
            CC_SETOP(1, "Select");
            CC_SETOPCURSOR(1, 157);
            int8 = struct_getparam(int7, 2802);
        };
        if ((struct_getparam(int7, 2809) == 1)) {
            CC_SETOPBASE(`<col=F8D56B>${struct_getparam(int7, 2794)}`);
        } else {
            CC_SETOPBASE(`<col=B8D1D1>${struct_getparam(int7, 2794)}`);
        };
        script7918(int10, 3, 0, 0, 1, 1, 6, 6, 1, 1, int8);
        script7918(int10, 4, 0, 0, 1, 1, 6, 6, 1, 1, int9);
    };
    var int11 = 0;
    var int12 = 0;
    if ((IF_FIND(comp(635, 13)) == 1)) {
        [int11, int12] = CC_SETONHORIZONTALPINCH(CC_GRID_GETNUMCOLUMNS(), CC_GRID_GETNUMROWS(), int5, unk11080(int6));
        CC_SETSIZE(0, int12, 1, 0);
        IF_SETSCROLLSIZE(0, int12, comp(635, 12));
    };
    script7791(comp(635, 14), comp(635, 12));
    return;
}