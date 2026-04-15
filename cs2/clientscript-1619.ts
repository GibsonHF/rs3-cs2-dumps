//
function script1619(int0: int, int1: int, int2: obj): void {
    if (((((int0 < 0) || (int0 >= 5)) || (int1 < 0)) || (int1 >= 5))) {
        printmessage("Nothing happens, as if something has gone wrong.");
        return;
    };
    var int3 = enum_getvalue(0, 26, 800 as cs2enum, int1);
    var int4 = enum_getvalue(0, 9, int3, int0);
    IF_SETMODEL(enum_getvalue(33, 31, 797 as cs2enum, int2), int4);
    IF_SETMODELANGLE(0, 0, 520, 0, 0, 2180, int4);
    return;
}