//
function script4484(int0: int): [string, graphic, int] {
    var string0 = "";
    var int1 = -1 as graphic;
    var int2 = -1;
    var int3 = enum_getvalue(0, 0, 13933 as cs2enum, int0);
    if ((int3 == -1)) {
        return [string0, int1, int2];
    };
    string0 = enum_getvalue(0, 36, 13932 as cs2enum, int3);
    int1 = enum_getvalue(0, 23, 13935 as cs2enum, int3);
    int2 = script971(int3);
    if ((int2 == 1)) {
        int2 = 0;
    } else {
        int2 = 1;
    };
    return [string0, int1, int2];
}