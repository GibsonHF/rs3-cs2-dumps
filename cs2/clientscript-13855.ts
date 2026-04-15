//
function script13855(int0: component, int1: int, int2: unknown_int): void {
    if (((CC_FIND(int0, int1) == 1) && (cc_getparam(861) == 0))) {
        cc_setparam(861, 1);
        script13871();
        if (((int2 == 1) && (script13749() == true))) {
            script13886(int0, int1);
            script2958(cc_getparam(7258), cc_getparam(7259), int0);
        };
    };
    return;
}