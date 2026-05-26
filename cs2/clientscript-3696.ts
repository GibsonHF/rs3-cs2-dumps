//
function script3696(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = -1 as dbrow;
    var int4 = -1;
    var int5 = 0;
    IF_SETHIDE(0, 5898244);
    IF_SETHIDE(1, 5898309);
    IF_SETHIDE(1, 5898243);
    script13969(5898307, 5898308, 28595, "Check Animals");
    script13972(5898304, 5898305, 28595, "Add/Remove Animals", 1);
    script13969(5898389, 5898390, 28595, "Farmhands");
    varclient_6489 = 0;
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int6 = INV_SIZE(93 as inv);
    var int7 = dbrow_getfield(int0, 159840, 0);
    var string0 = "Assign";
    var int8 = 5898256;
    var int9 = 5898257;
    var int10 = 5898249;
    var int11 = 5898250;
    CC_DELETEALL(int8);
    CC_DELETEALL(int9);
    CC_DELETEALL(int10);
    CC_DELETEALL(int11);
    var int12 = INV_SIZE(int7);
    if ((INV_FREESPACE(int7) == int12)) {
        int2 = 0;
    } else {
        int1 = 0;
        while ((int1 < int12)) {
            int4 = INV_GETOBJ(int7, int1);
            if ((int4 != -1)) {
                int3 = item_getparam(int4, 7452);
                if ((int3 != -1 as dbrow)) {
                    int2 = dbrow_getfield(int3, 118784, 0);
                    int1 = (int12 + 1);
                };
            };
            int1 = (int1 + 1);
        };
    };
    var int13 = dbrow_getfield(int0, 159776, 0);
    int5 = script4185(int7, int2, int13, int10, int11, "Remove", 0);
    int5 = script4185(93 as inv, int2, int13, int8, int9, "Add", 1);
    int5 = MAX(int5, (IF_GETHEIGHT(5898255) - 78));
    IF_SETSCROLLSIZE(0, (int5 + 78), 5898255);
    script31(5898254, 5898255, -1, -1, -1, -1, -1, -1);
    return;
}