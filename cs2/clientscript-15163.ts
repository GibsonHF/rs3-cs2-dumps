//
function script15163(int0: dbrow, int1: dbrow, int2: int, int3: int): void {
    if ((DB_GETROWTABLE(int0) != 112)) {
        return;
    };
    var int4 = 0;
    var int5 = MIN(10, DB_GETFIELDCOUNT(int0, 458752));
    var int6 = comp(-1, 65535);
    while ((int4 < 10)) {
        int6 = script15130(int4);
        IF_SETHIDE(true, int6);
        IF_SETPOSITION(0, (((int4 + 1) * 50) - 50), 0, 0, int6);
        IF_SETSIZE(0, 50, 1, 0, int6);
        IF_SETPARAM_INT(4052, 0, int6);
        int4 = (int4 + 1);
    };
    int6 = comp(-1, 65535);
    int4 = 0;
    var string0 = "";
    var int7 = -1 as cs2enum;
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    var int10 = comp(-1, 65535);
    var int11 = 0;
    var int12 = 1;
    var int13 = 0;
    if ((CC_FIND[1](comp(653, 154), 1) == 1)) {
        int12 = 0;
    };
    while ((int4 < int5)) {
        stack(dbrow_getfield(int0, 458752, int4));
        [string0, int7] = stack();
        [int6, int8, int9, int10] = script15136(int4);
        CC_DELETEALL(int8);
        CC_DELETEALL(int10);
        IF_SETHIDE(false, int6);
        IF_SETTEXT(string0, int9);
        if ((int4 == int2)) {
            int13 = 1;
        } else {
            int13 = 0;
        };
        int11 = script15164(int1, int8, int10, int7, int13, int3);
        IF_SETPARAM_INT(4052, int11, int6);
        if ((int12 == 1)) {
            script9582(int6, 0, 0);
        };
        int4 = (int4 + 1);
    };
    script9581(comp(653, 134));
    return;
}