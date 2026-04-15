//
function script19812(int0: int, int1: int): void {
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = -1 as struct;
    var int5 = -1 as graphic;
    var int6 = -1 as dbrow;
    [int2, int3, int4, int5, int6] = script19765(int0, int1);
    script9525(comp(1320, 184), 3, -1);
    script16663(14844 as dbrow, int2, int3);
    if (((int6 != -1 as dbrow) && ((int0 == 1) || (int0 == 2)))) {
        IF_SETTEXT(`Keys: ${inttostring(dbrow_getfield(int6, 1273856, 0), 10)}`, comp(1320, 186));
    } else {
        IF_SETTEXT("Unlocked from obtaining all previous rewards.", comp(1320, 186));
    };
    return;
}