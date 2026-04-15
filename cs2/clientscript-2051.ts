//
function script2051(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: coordgrid, string0: string, string1: string, string2: string): void {
    if ((CC_FIND(int0, int1) == 1)) {
        script2052(string0, int2, int3, int4, int5, int6, string1, string2, int7);
    } else {
        CC_CREATE(int0, 4, int1);
        script2052(string0, int2, int3, int4, int5, int6, string1, string2, int7);
    };
    return;
}