//
function script2992(int0: int): unknown_int {
    var int1 = enum_getvalue(0, 74, 14569 as cs2enum, script20386());
    if ((int1 == -1 as dbrow)) {
        return 1;
    };
    if ((int0 > DB_GETFIELDCOUNT(int1, 127008))) {
        return 1;
    };
    var int2 = dbrow_getfield(int1, 127008, int0);
    if (((struct_getparam(int2, 7537) == false) && (struct_getparam(int2, 9208) == -1))) {
        return 1;
    };
    return 0;
}