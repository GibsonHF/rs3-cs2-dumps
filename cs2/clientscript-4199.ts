//
function script4199(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, string0: string): number {
    var int8 = 4220;
    var int9 = 0;
    if ((int6 == 0)) {
        int8 = 4227;
    };
    var int10 = struct_getparam(int8, 4403);
    if ((IF_FIND(int2) == 1)) {
        var int4 = script10410(int2, int3, int8, int0, int1, 75, 75, int4, 0, dbrow_getfield(int5, 155648, 0));
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script5452, int5, int7, -2147483644));
        CC_SETOP(2, string0);
        int9 = (IF_GETNEXTSUBID(int2) - 2);
        if ((CC_FIND(int2, int9) == 1)) {
            CC_SETTEXTSHADOW(true);
            CC_SETSIZE(75, 30, 0, 0);
            CC_SETPOSITION(int0, int1, 0, 0);
            CC_SETTEXTALIGN(1, 0, 13);
            CC_SETTEXTFONT(struct_getparam(int10, 3810));
        };
        CC_CREATE(int2, 6, IF_GETNEXTSUBID(int2));
        CC_SETPOSITION((int0 + 19), ((int1 + 30) + dbrow_getfield(int5, 155968, 0)), 0, 0);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETOBJECT_NONUM(dbrow_getfield(int5, 155936, 0), 0);
        CC_SETMODELANIM(-1 as seq);
        CC_SETMODELZOOM(SCALE(120, 100, dbrow_getfield(int5, 155952, 0)));
        CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
        CC_SETPOSITION((int0 + (75 - 26)), (int1 + (75 - 24)), 0, 0);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETOBJECT_NONUM(43968 as obj, 1);
        CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
        CC_SETPOSITION(int0, (int1 + (75 - 17)), 0, 0);
        CC_SETSIZE((75 - 14), 15, 0, 0);
        CC_SETTEXTFONT(struct_getparam(int10, 3810));
        CC_SETTEXTSHADOW(true);
        script11024(0);
        CC_SETTEXTALIGN(2, 0, 13);
        CC_SETTEXT(inttostring(dbrow_getfield(int5, 155856, 0), 10));
    };
    return int4;
}