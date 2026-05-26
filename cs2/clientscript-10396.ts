//
function script10396(int0: number, int1: number): void {
    var int2 = 21301;
    var int3 = script8418(int2, 0);
    if ((int3 == -1)) {
        return;
    };
    var int4 = script13415(int0);
    if ((int4 == -1)) {
        return;
    };
    var int5 = struct_getparam(int2, 3506);
    if ((int5 == comp(-1, 65535))) {
        return;
    };
    var string0 = struct_getparam(int4, 3493);
    if ((CC_FIND(int5, 15) == 1)) {
        CC_SETSIZE(0, struct_getparam(int3, 3547), 1, 0);
        CC_SETTEXTFONT(57);
        CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8584 as cs2enum, 57 as fontmetrics));
        CC_SETTEXTSHADOW(1);
        if (((int1 != -1) && (strcmp(struct_getparam(int1, 3493), "") != 0))) {
            CC_SETTEXT(struct_getparam(int1, 3493));
        } else {
            CC_SETTEXT(string0);
        };
    };
    return;
}