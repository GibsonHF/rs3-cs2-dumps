//
function script9556(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int5 != int4)) {
        return;
    };
    var int6 = IF_GETINVOBJECT(int0);
    var int7 = IF_GETINVOBJECT(int2);
    var int8 = IF_GETINVCOUNT(int0);
    var int9 = IF_GETINVCOUNT(int2);
    if ((((INV_TOTAL(93 as inv, int6) > 0) && (OC_STACKABLE(int6) == 1)) || (INV_FREESPACE(93 as inv) > 0))) {
        IF_SETTRANS(0, int2);
        script13959(int3, 28755, 0);
        IF_SETTRANS(175, int0);
        script13959(int1, 28755, 1);
        if ((int6 != int7)) {
            IF_SETOBJECT_NONUM(int6, 0, int2);
        };
    };
    return;
}