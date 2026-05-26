//
function script12189(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): [number, number] {
    if ((int5 == 0)) {
        return [int1, int3];
    };
    var int6 = script12076(MODULO(int5, 65536));
    var string0 = script12079(int6, (MODULO(int5, 16777216) / 65536), (int5 / 16777216));
    var int7 = dbrow_getfield(int6, 32864, 0);
    if ((int7 > 1)) {
        string0 = strconcat(string0, " (Two slots)");
    };
    var [int1, int3] = script176(int0, int1, int2, int3, int4, 21341, 16, 16, string0, 29166);
    var string1 = dbrow_getfield(int6, 32832, 0);
    if ((int7 > 1)) {
        string1 = strconcat(string1, " This perk will take up two slots in a gizmo.");
    };
    CC_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -2147483643));
    return [int1, int3];
}