//[proc,interface_invother_update_big]
function script160(int0: component, int1: inv, int2: int, int3: int, int4: unknown_int, int5: unknown_int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string): void {
    CC_DELETEALL(int0);
    var int6 = 0;
    var int7 = 0;
    if ((IF_GETSCROLLWIDTH(int0) > 0)) {
        int6 = ((IF_GETSCROLLWIDTH(int0) - (36 * int2)) / (int2 - 1));
    } else {
        int6 = ((IF_GETWIDTH(int0) - (36 * int2)) / (int2 - 1));
    };
    if ((IF_GETSCROLLHEIGHT(int0) > 0)) {
        int7 = ((IF_GETSCROLLHEIGHT(int0) - (32 * int3)) / (int3 - 1));
    } else {
        int7 = ((IF_GETHEIGHT(int0) - (32 * int3)) / (int3 - 1));
    };
    var int8 = 0;
    while ((int8 <= (int2 * int3))) {
        CC_CREATE(int0, 5, int8);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION(((36 + int6) * MODULO(int8, int2)), ((int8 / int2) * (32 + int7)), 0, 0);
        script161(int1, int8, int0, int8, int4, int5, string0, string1, string2, string3, string4, string5, string6, string7, string8);
        int8 = (int8 + 1);
    };
    return;
}