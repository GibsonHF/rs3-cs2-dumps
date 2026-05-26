//
function script13855(int0: number, int1: number, int2: number): void {
    if (((CC_FIND(int0, int1) == 1) && (cc_getparam(861) == 0))) {
        cc_setparam(861, 1);
        script13871();
        if (((int2 == 1) && (script13749() == 1))) {
            script13886(int0, int1);
            script2958(cc_getparam(7258), cc_getparam(7259), int0);
        };
    };
    return;
}