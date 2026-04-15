//[clientscript,interface_inv_dragcomplete_shuffle_big]
function script156(int0: inv, int1: int, int2: int, int3: component, int4: unknown_int, int5: unknown_int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string): void {
    if ((int2 == -1)) {
        script154(int0, int1, int3, int1, int4, int5, string0, string1, string2, string3, string4, string5, string6, string7, string8);
        return;
    };
    var int6 = int1;
    while ((int6 != int2)) {
        if ((int6 > int2)) {
            script154(int0, (int6 - 1), int3, int6, int4, int5, string0, string1, string2, string3, string4, string5, string6, string7, string8);
            int6 = (int6 - 1);
        } else if ((int6 < int2)) {
            script154(int0, (int6 + 1), int3, int6, int4, int5, string0, string1, string2, string3, string4, string5, string6, string7, string8);
            int6 = (int6 + 1);
        };
    };
    script154(int0, int1, int3, int2, int4, int5, string0, string1, string2, string3, string4, string5, string6, string7, string8);
    return;
}