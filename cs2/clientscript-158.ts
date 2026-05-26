//[clientscript,interface_invother_init]
function script158(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, string0: string, string1: string, string2: string, string3: string, string4: string): void {
    script160(int0, int1, int2, int3, int4, int5, string0, string1, string2, string3, string4, "null", "null", "null", "null");
    if ((int1 == 90)) {
        IF_SETONINVTRANSMIT(callback(script159, int0, int1, int2, int3, int4, int5, string0, string1, string2, string3, string4, "null", "null", "null", "null", 90, 626, 2), int0);
    } else {
        IF_SETONINVTRANSMIT(callback(script159, int0, int1, int2, int3, int4, int5, string0, string1, string2, string3, string4, "null", "null", "null", "null", int1, 1), int0);
    };
    return;
}