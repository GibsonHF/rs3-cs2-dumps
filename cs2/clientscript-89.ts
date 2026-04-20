//
function script89(int0: int): void {
    var int1 = comp(645, 11);
    var int2 = comp(645, 12);
    var int3 = comp(645, 14);
    var int4 = comp(645, 15);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    var int5 = 0;
    var int6 = -1 as struct;
    var int7 = IF_GETWIDTH(int1);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var string0 = "";
    dbrow_findnext();
    var int13 = stack();
    while ((int13 != -1 as dbrow)) {
        int5 = dbrow_getfield(int13, 1470464, 0);
        [int12, string0] = script236(int0, int5, int13);
        if ((int12 == 1)) {
            int6 = 35508 as struct;
        } else {
            int6 = 35515 as struct;
        };
        if (((int11 > 0) && (MODULO(int11, 2) == 0))) {
            [int9, int10] = [0, ((int10 + 20) + 4)];
            int8 = (int10 + 20);
        };
        script12501(int1, int2, int6, int9, int10, ((int7 / 2) - 2), 20, int11, false, dbrow_getfield(int13, 1470496, 0));
        if ((CC_FIND(int1, ((int11 * 11) + 9)) == 1)) {
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETMAXLINES(1);
        };
        if ((CC_FIND(int2, int11) == 1)) {
            CC_SETOPBASE(dbrow_getfield(int13, 1470496, 0));
            CC_SETOPCURSOR(1, 46);
        };
        int9 = ((int7 / 2) + 2);
        dbrow_findnext();
        int13 = stack();
        int11 = (int11 + 1);
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(int3), int8), int3);
    IF_SETSCROLLPOS(0, IF_GETSCROLLY(int3), int3);
    script7791(int4, int3);
    return;
}