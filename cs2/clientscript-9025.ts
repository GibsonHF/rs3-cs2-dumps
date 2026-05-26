//
function script9025(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    IF_SETTEXT(script7215(int0, int1, int2, int3, int4), int6);
    IF_SETGRAPHIC(dbrow_getfield(int3, 307232, 0), int7);
    var int9 = -1 as graphic;
    if (((int0 != -1 as struct) && (struct_getparam(int0, 4253) != -1 as struct))) {
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
    IF_SETGRAPHIC(int9, int8);
    return;
}