//
function script12938(int0: int): struct {
    var int1 = enum_getvalue(0, 74, 706 as cs2enum, (int0 - 1));
    if ((int1 != -1 as dbrow)) {
        return enum_getvalue(0, 73, 11922 as cs2enum, dbrow_getfield(int1, 53264, 0));
    };
    return -1 as struct;
}