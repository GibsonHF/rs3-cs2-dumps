//
function script20809(int0: number): void {
    dbrow_findnext();
    var int1 = stack();
    var int2 = 0;
    var int3 = -1;
    while ((int1 != -1 as dbrow)) {
        int2 = dbrow_getfield(int1, 1515520, 0);
        int3 = dbrow_getfield(int1, 1515584, 0);
        if ((CC_FIND(int0, int2) == 1)) {
            CC_SETOBJECT_HIGHRES(int3);
            CC_SETOUTLINE(1);
        };
        dbrow_findnext();
        int1 = stack();
    };
    return;
}