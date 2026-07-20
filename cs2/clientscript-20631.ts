//
function script20631(int0: number): void {
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
    var int4 = 0;
    while ((++int2 < int1)) {
        stack(dbrow_getfield(17540 as dbrow, 1421312, int2));
        [int3, string0] = stack();
        if ((script20473(int3) == 1)) {
            if ((int0 == 1)) {
                script20857(98172929, int3, script20651(int3), int4);
                CC_SETONOP(callback(script20629, int3));
                script20632(int3);
                int4 = (int4 + 28);
                if ((int3 == 1)) {
                    int4 = (int4 + 2);
                    script7223(98172929, 500, 0, int4, 0, 0, 0, 0, 1, 0, script10495(7));
                    int4 = (int4 + 6);
                };
            } else if ((CC_FIND(comp(1498, 1), int3) == 1)) {
                script20632(int3);
            };
        };
    };
    if (((script20848() == 1) && (int0 == 1))) {
        int4 = (int4 + 4);
        script7223(98172929, IF_GETNEXTSUBID(comp(1498, 1)), 0, int4, 0, 0, 0, 0, 1, 0, script10495(7));
        int4 = (int4 + 4);
        script7876(98172929, 1000, 0, int4, 0, 0, 0, 24, 1, 0, 2550, "Sale Only", 1, 1, varclient_8472);
        CC_SETONBUTTONCLICK(callback(script20859));
    };
    return;
}