//
function script14843(int0: component, int1: unknown_int, int2: dbrow, int3: int, int4: int, int5: int, int6: int, int7: int): unknown_int {
    var int8 = ((int6 - 326) / 2);
    var int9 = int3;
    var int10 = int4;
    var int11 = int5;
    var int12 = dbrow_getfield(int2, 368672, 0);
    var int13 = dbrow_getfield(int12, 352400, 0);
    var int14 = struct_getparam(script9984(int13, 1), 3909);
    var string0 = "";
    var string1 = "";
    if ((script14629(int2) == 1)) {
        string0 = `Field Study: ${dbrow_getfield(int2, 368736, 0)}`;
        if ((script14630(int2) == 1)) {
            string1 = `Report: ${dbrow_getfield(int2, 368752, 0)}`;
        } else {
            string1 = "Report: I need to get my team to do some further research.";
        };
    } else {
        string0 = "Field Study: I have yet to find any information on this.";
    };
    if ((script14630(int2) == 1)) {
        string1 = `Report: ${dbrow_getfield(int2, 368752, 0)}`;
    };
    if ((int14 != -1 as graphic)) {
        script7924(int0, IF_GETNEXTSUBID(int0), 20, 20, int9, int10, int14, false, false, false, 0);
        script7801(int0, IF_GETNEXTSUBID(int0), ((int11 - 20) - 2), 20, 0, 0, ((int9 + 20) + 2), int10, 0, 0, dbrow_getfield(int2, 368688, 0), 0, 29 as fontmetrics, 0, 1, enum_getvalue(25, 0, 8584 as cs2enum, 29 as fontmetrics), false);
    } else {
        script7801(int0, IF_GETNEXTSUBID(int0), int11, 20, 0, 0, int9, int10, 0, 0, dbrow_getfield(int2, 368688, 0), 0, 29 as fontmetrics, 0, 1, enum_getvalue(25, 0, 8584 as cs2enum, 29 as fontmetrics), false);
    };
    if ((STRING_LENGTH(string0) > 0)) {
        script7801(int0, IF_GETNEXTSUBID(int0), int11, 60, 0, 0, int9, (int10 + 20), 0, 0, string0, 0, 26 as fontmetrics, 0, 0, enum_getvalue(25, 0, 8584 as cs2enum, 26 as fontmetrics), false);
    };
    if ((STRING_LENGTH(string1) > 0)) {
        script7801(int0, IF_GETNEXTSUBID(int0), int11, 100, 0, 0, int9, ((int10 + 20) + 60), 0, 0, string1, 0, 26 as fontmetrics, 0, 0, enum_getvalue(25, 0, 8584 as cs2enum, 26 as fontmetrics), false);
    };
    return 0;
}