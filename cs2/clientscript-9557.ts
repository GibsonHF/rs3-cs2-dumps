//
function script9557(int0: component, int1: component, int2: component, int3: component, int4: unknown_int, int5: unknown_int): void {
    if ((int5 != int4)) {
        return;
    };
    var int6 = IF_GETINVOBJECT(int2);
    var int7 = IF_GETINVOBJECT(int0);
    var int8 = IF_GETINVCOUNT(int2);
    var int9 = IF_GETINVCOUNT(int0);
    if (((OC_STACKABLE(int6) == 1) || (int8 == 0))) {
        IF_SETTRANS(0, int2);
        script13959(int3, 28755 as struct, false);
        IF_SETTRANS(175, int0);
        script13959(int1, 28755 as struct, true);
        if ((int6 != int7)) {
            IF_SETOBJECT_NONUM(int7, 0, int2);
        };
    };
    return;
}