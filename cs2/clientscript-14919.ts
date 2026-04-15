//
function script14919(int0: component, int1: component, int2: graphic, int3: unknown_int, int4: int, int5: int, int6: int, string0: string, string1: string): void {
    var int7 = 1;
    if ((int3 == 1)) {
        int7 = 5;
    };
    script11624(int0, int1, 14998 as struct, int4, int5, int6, int7);
    if ((int2 != -1 as graphic)) {
        script7924(int0, IF_GETNEXTSUBID(int0), 24, 24, int4, int5, int2, false, false, false, 0);
    };
    if ((STRING_LENGTH(string0) > 0)) {
        script2681(int0, 24, 16, int4, (int5 + 24), 26 as fontmetrics, string0, 0);
        CC_SETTEXTALIGN(1, 1, 0);
    };
    if ((STRING_LENGTH(string1) > 0)) {
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(24, (24 + 16), 0, 0);
        CC_SETPOSITION(int4, int5, 0, 0);
        script3537(string1);
    };
    return;
}