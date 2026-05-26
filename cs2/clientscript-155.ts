//[clientscript,interface_inv_dragcomplete_swap_big]
function script155(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string): void {
    if ((int2 == -1)) {
        script154(int0, int1, int3, int1, int4, int5, string0, string1, string2, string3, string4, string5, string6, string7, string8);
        return;
    };
    script154(int0, int1, int3, int2, int4, int5, string0, string1, string2, string3, string4, string5, string6, string7, string8);
    script154(int0, int2, int3, int1, int4, int5, string0, string1, string2, string3, string4, string5, string6, string7, string8);
    return;
}