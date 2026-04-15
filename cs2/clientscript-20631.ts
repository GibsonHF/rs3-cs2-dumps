//
function script20631(int0: unknown_int): void {
    if ((int0 == 1)) {
        CC_DELETEALL(comp(1498, 1));
    };
    var int1 = DB_GETFIELDCOUNT(17540 as dbrow, 1421312);
    if ((int1 <= 0)) {
        script12478("Store has no side tabs so the left panel has not been drawn.");
        return;
    };
    var int2 = -1;
    var int3 = -1;
    var string0 = "";
    while ((++int2 < int1)) {
        stack(dbrow_getfield(17540 as dbrow, 1421312, int2));
        [int3, string0] = stack();
        if ((script20473(int3) == 1)) {
            if ((int0 == 1)) {
                script20618(comp(1498, 1), int3, string0);
                CC_SETONOP(callback(script20629, int3));
                script20632(int3);
            } else if ((CC_FIND(comp(1498, 1), int3) == 1)) {
                script20632(int3);
            };
        };
    };
    return;
}