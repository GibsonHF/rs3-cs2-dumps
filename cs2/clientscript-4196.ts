//
function script4196(int0: int, int1: int, int2: component, int3: component, int4: int, int5: inv, int6: int, int7: dbrow, int8: unknown_int, string0: unknown_string): int {
    var int9 = 4220 as struct;
    var int10 = 0;
    var int11 = struct_getparam(int9, 4403);
    var int12 = script891(INV_GETVAR(int5, int6, 41806));
    var int13 = enum_getvalue(0, 32, 14311 as cs2enum, dbrow_getfield(int7, 118800, 0));
    var int14 = INV_GETVAR(int5, int6, 41803);
    var int15 = 0;
    var string1 = "";
    var string2 = "";
    [int13, string1, string2, int15] = script15449(int7, int5, int6, MAX(0, INV_GETVAR(int5, int6, 41804)), int14, INV_GETVAR(int5, int6, 41802), INV_GETVAR(int5, int6, 41805));
    var int16 = npc_getparam(int13, 7479);
    var int17 = 0;
    if ((IF_FIND(int2) == 1)) {
        var int4 = script10410(int2, int3, int9, int0, int1, 75, 75, int4, false, string1);
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script1009, int13, int5, int6, string1, string2, int14, int15, int8, -2147483644, int12));
        CC_SETOP(2, string0);
        int10 = (IF_GETNEXTSUBID(int2) - 2);
        if ((CC_FIND(int2, int10) == 1)) {
            CC_SETTEXTSHADOW(true);
            CC_SETSIZE(75, 30, 0, 0);
            CC_SETPOSITION(int0, int1, 0, 0);
            CC_SETTEXTALIGN(1, 0, 13);
            CC_SETTEXTFONT(struct_getparam(int11, 3810));
            script11024(0);
        };
        CC_CREATE(int2, 6, IF_GETNEXTSUBID(int2));
        if ((int13 == 25749 as npc)) {
            int16 = SCALE(60, 100, int16);
            int17 = -6;
        };
        CC_SETPOSITION(((int0 + 19) + npc_getparam(int13, 7480)), (((int1 + 25) + npc_getparam(int13, 7481)) + int17), 0, 0);
        CC_SETSIZE(35, 52, 0, 0);
        CC_SETNPCMODEL(int13);
        CC_SETMODELANIM(BAS_GETANIM_READY(npc_getparam(int13, 3857)));
        if (((INV_GETVAR(int5, int6, 41805) == 1) && (dbrow_getfield(int7, 118784, 0) == 9))) {
            CC_SETMODELANGLE(-1, 25, 0, 1600, 0, 800);
        } else {
            CC_SETMODELANGLE(-1, 25, npc_getparam(int13, 3864), npc_getparam(int13, 3865), 0, 800);
        };
        CC_SETMODELZOOM(SCALE(120, 100, int16));
        if ((int12 == 1)) {
            CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
            CC_SETGRAPHIC(5568 as graphic);
            CC_SETPOSITION((int0 + 47), (int1 + 47), 0, 0);
            CC_SETSIZE(25, 25, 0, 0);
        };
        if ((INV_GETVAR(int5, int6, 48837) == 1)) {
            CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
            CC_SETSIZE(16, 16, 0, 0);
            CC_SETPOSITION((int0 + 4), (int1 + 56), 0, 0);
            CC_SETGRAPHIC(15217 as graphic);
        };
    };
    return int4;
}