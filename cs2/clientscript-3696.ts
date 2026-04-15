//
function script3696(int0: dbrow): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = -1 as dbrow;
    var int4 = -1 as obj;
    var int5 = 0;
    IF_SETHIDE(false, comp(90, 4));
    IF_SETHIDE(true, comp(90, 69));
    IF_SETHIDE(true, comp(90, 3));
    script13969(comp(90, 67), comp(90, 68), 28595 as struct, "Check Animals");
    script13972(comp(90, 64), comp(90, 65), 28595 as struct, "Add/Remove Animals", 1);
    script13969(comp(90, 149), comp(90, 150), 28595 as struct, "Farmhands");
    varclient_6489 = 0;
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int6 = INV_SIZE(93 as inv);
    var int7 = dbrow_getfield(int0, 159840, 0);
    var string0 = "Assign";
    var int8 = comp(90, 16);
    var int9 = comp(90, 17);
    var int10 = comp(90, 9);
    var int11 = comp(90, 10);
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
            if ((int4 != -1 as obj)) {
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
    int5 = MAX(int5, (IF_GETHEIGHT(comp(90, 15)) - 78));
    IF_SETSCROLLSIZE(0, (int5 + 78), comp(90, 15));
    script31(comp(90, 14), comp(90, 15), -1 as graphic, -1 as graphic, -1 as graphic, -1 as graphic, -1 as graphic, -1 as graphic);
    return;
}