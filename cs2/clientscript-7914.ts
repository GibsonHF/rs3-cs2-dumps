//
function script7914(int0: number, int1: number, int2: number): void {
    var int3 = 0;
    var int4 = DB_GETFIELDCOUNT(int1, 544768);
    var int5 = -1;
    var string0 = "";
    while ((int3 < int4)) {
        [string0, int5] = dbrow_getfield(int1, 544768, int3);
        CC_LIST_ADDENTRY(int3, string0, -1);
        if ((int5 != 11678)) {
            CC_LIST_SETENTRYICON(int3, int5);
        };
        int3 = (int3 + 1);
    };
    CC_LIST_SETISSELECTED(int2, 1, 0);
    return;
}