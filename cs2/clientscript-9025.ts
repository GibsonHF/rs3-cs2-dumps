//
function script9025(int0: struct, int1: quest, int2: achievement, int3: dbrow, int4: boolean, int5: int, int6: component, int7: unknown_int, int8: unknown_int): void {
    IF_SETTEXT(script7215(int0, int1, int2, int3, int4), int6);
    stack(dbrow_getfield(int3, 307232, 0));
    stack(int7);
    IF_SETGRAPHIC();
    var int9 = -1;
    if (((int0 != -1) && (struct_getparam(int0, 4253) != -1 as struct))) {
        var int0 = struct_getparam(int0, 4253);
    };
    var int10 = 0;
    if ((int9 == -1 as graphic)) {
        int10 = DB_GETFIELDCOUNT(int3, 307248);
        if ((int5 > int10)) {
            var int5 = int10;
        };
        int9 = dbrow_getfield(int3, 307248, int5);
    };
    stack(int9);
    stack(int8);
    IF_SETGRAPHIC();
    return;
}