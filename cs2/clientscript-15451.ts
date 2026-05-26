//
function script15451(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string, string1: string, string2: string): void {
    var string3 = "";
    if (((int0 == int1) || (script12517(93, int2, 0) == -1))) {
        script13959(int3, 31846, 1);
        if ((int0 == int1)) {
            string3 = string0;
        } else {
            string3 = string1;
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string3, int4, -1), int4);
    } else {
        script13959(int3, 31846, 0);
        string3 = string2;
        IF_SETONMOUSEREPEAT(callback(script8799, string3, int4, -1), int4);
    };
    return;
}