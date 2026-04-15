//
function script7215(int0: struct, int1: quest, int2: achievement, int3: dbrow, int4: boolean): string {
    var string0 = "";
    if ((int0 != -1 as struct)) {
        if ((STRING_LENGTH(struct_getparam(int0, 2268)) > 0)) {
            string0 = struct_getparam(int0, 2268);
        } else if ((struct_getparam(int0, 5503) == 1)) {
            string0 = dbrow_getfield(2414 as dbrow, 307216, 0);
        };
    };
    if ((STRING_LENGTH(string0) == 0)) {
        if ((int4 == true)) {
            string0 = dbrow_getfield(int3, 307216, 0);
        } else {
            string0 = dbrow_getfield(int3, 307200, 0);
        };
    };
    return string0;
}