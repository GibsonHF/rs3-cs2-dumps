//
function script19739(int0: number): void {
    var int1 = script19693(int0);
    stack(1101824);
    stack(int0);
    DB_FIND(0);
    var int2 = dbrow_findnext();
    var int3 = dbrow_getfield(int2, 1101856, 0);
    var int4 = dbrow_getfield(int2, 1101872, 0);
    if ((int1 == 19)) {
        IF_SETHIDE(true, int3);
        IF_SETHIDE(true, int4);
        return;
    };
    var int5 = -1;
    var int6 = 0;
    var int7 = 0;
    var int8 = 1;
    [int5, int6, int7, int8] = script19695(int0);
    IF_SETGRAPHIC(enum_getvalue(0, 23, 6669, int1), int3);
    script19725(int4, int5, int6, int8, int7, 80);
    IF_SETHIDE(false, int3);
    IF_SETHIDE(false, int4);
    var string0 = OC_NAME(int5);
    if ((int8 > 1)) {
        string0 = `<col=FF00>${inttostring(int8, 10)}x</col> ${OC_NAME(int5)}`;
    };
    script3536(string0, int4, -1);
    return;
}