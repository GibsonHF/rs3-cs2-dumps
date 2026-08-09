//
function script20809(int0: number): void {
    var int1 = dbrow_findnext();
    var int2 = 0;
    var int3 = -1;
    while ((int1 != -1)) {
        int2 = dbrow_getfield(int1, 1515520, 0);
        int3 = dbrow_getfield(int1, 1515584, 0);
        if ((CC_FIND(int0, int2) == 1)) {
            CC_SETOBJECT_HIGHRES(int3);
            CC_SETOUTLINE(1);
        };
        int1 = dbrow_findnext();
    };
    return;
}