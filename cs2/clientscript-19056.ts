//
function script19056(): void {
    var int0 = -1 as graphic;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = DB_GETFIELDCOUNT(13098 as dbrow, 1183744);
    var int7 = -1;
    while ((++int7 < int6)) {
        if ((IF_FIND(comp(1014, 45)) == 1)) {
            [int0, int2, int1, int3, int4, int5] = dbrow_getfield(13098 as dbrow, 1183744, int7);
            CC_CREATECHILD(5, 0, int7);
            CC_SETGRAPHIC(int0);
            CC_SETSIZE(int2, int1, 0, 0);
            CC_SETPOSITION(int3, int4, 1, 1);
            CC_SETONTIMER(callback(script19057, 0, int7, int5));
        };
    };
    return;
}