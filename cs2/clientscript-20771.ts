//
function script20771(int0: number, int1: number, int2: number): void {
    dbrow_findnext();
    var int3 = stack();
    var int4 = 0;
    var int5 = -1;
    while ((int3 != -1 as dbrow)) {
        int4 = dbrow_getfield(int3, 1515520, 0);
        if ((CC_FIND(int0, int4) == 1)) {
            unk11040(callback(script20772, int0, int1, int2, int3, int4));
            CC_CALLONRESIZE();
        };
        dbrow_findnext();
        int3 = stack();
    };
    return;
}