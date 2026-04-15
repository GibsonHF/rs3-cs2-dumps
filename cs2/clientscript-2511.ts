//
function script2511(): [int, int] {
    var int0 = script20382();
    var int1 = enum_getvalue(0, 74, int0, 0);
    if ((DB_GETFIELDCOUNT(int1, 127024) == 0)) {
        return [1023, 0];
    };
    int1 = dbrow_getfield(int1, 127024, 0);
    return [0, enum_getreverseindex(74, 0, 14569 as cs2enum, int1, 0)];
}