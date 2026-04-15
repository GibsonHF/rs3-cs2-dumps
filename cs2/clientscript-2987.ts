//
function script2987(int0: int, int1: int): void {
    var int2 = enum_getvalue(0, 74, 14569 as cs2enum, int0);
    if ((int2 == -1 as dbrow)) {
        return;
    };
    if ((int1 > DB_GETFIELDCOUNT(int2, 127008))) {
        return;
    };
    var int3 = dbrow_getfield(int2, 127008, int1);
    if ((int3 == -1 as struct)) {
        return;
    };
    switch (struct_getparam(int3, 7513)) {
        case 6:
        case 7:
        case 8: {
            varplayer_8174 = int3;
            break;
        }
    };
    return;
}