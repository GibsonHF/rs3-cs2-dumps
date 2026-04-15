//
function script19815(int0: int, int1: unknown_int): void {
    var int2 = int0;
    var int3 = comp(1320, 171);
    var int4 = 0;
    var int5 = dbrow_getfield(14845 as dbrow, 1106000, 0);
    var int6 = dbrow_getfield(14845 as dbrow, 1106016, 0);
    var int7 = DB_GETFIELDCOUNT(int5, 1269760);
    var int8 = DB_GETFIELDCOUNT(int6, 1269760);
    var int9 = 10;
    var int10 = MIN(varbitplayer_57155, int7);
    if ((int1 == 2)) {
        int9 = 11;
        int10 = MIN(varbitplayer_57156, int8);
    };
    if ((CC_FINDBYCATEGORY(comp(1320, 171), int9, int10) == 1)) {
        int4 = (CC_GETX() - 220);
    };
    if ((IF_FIND(int3) == 1)) {
        IF_SETSCROLLSIZE(int2, IF_GETHEIGHT(int3), int3);
        IF_SETSCROLLPOS(int4, 0, int3);
        if ((int2 > IF_GETWIDTH(int3))) {
            script11147(comp(1320, 170), int3);
        } else {
            CC_DELETEALL(comp(1320, 170));
        };
    };
    return;
}