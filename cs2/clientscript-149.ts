//[clientscript,interface_inv_init]
function script149(int0: component, int1: inv, int2: int, int3: int, int4: unknown_int, int5: unknown_int, int6: unknown_int, string0: string, string1: string, string2: string, string3: string, string4: string): void {
    script153(int0, int1, int2, int3, int4, int5, string0, string1, string2, string3, string4, "null", "null", "null", "null", int6);
    if ((int1 == 90 as inv)) {
        IF_SETONINVTRANSMIT(callback(script151, int0, int1, int2, int3, int4, int5, string0, string1, string2, string3, string4, "null", "null", "null", "null", int6, 90, 626, 2), int0);
    } else {
        IF_SETONINVTRANSMIT(callback(script151, int0, int1, int2, int3, int4, int5, string0, string1, string2, string3, string4, "null", "null", "null", "null", int6, int1, 1), int0);
    };
    return;
}