//
function script15451(int0: int, int1: int, int2: obj, int3: component, int4: unknown_int, string0: unknown_string, string1: unknown_string, string2: unknown_string): void {
    var string3 = "";
    if (((int0 == int1) || (script12517(93 as inv, int2, 0) == -1))) {
        script13959(int3, 31846 as struct, true);
        if ((int0 == int1)) {
            string3 = string0;
        } else {
            string3 = string1;
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string3, int4, -1), int4);
    } else {
        script13959(int3, 31846 as struct, false);
        string3 = string2;
        IF_SETONMOUSEREPEAT(callback(script8799, string3, int4, -1), int4);
    };
    return;
}