//
function script7215(int0: number, int1: number, int2: number, int3: number, int4: number): string {
    var string0 = "";
    if ((int0 != -1)) {
        if ((STRING_LENGTH(struct_getparam(int0, 2268)) > 0)) {
            string0 = struct_getparam(int0, 2268);
        } else if ((struct_getparam(int0, 5503) == 1)) {
            string0 = dbrow_getfield(2414 as dbrow, 307216, 0);
        };
    };
    if ((STRING_LENGTH(string0) == 0)) {
        if ((int4 == 1)) {
            string0 = dbrow_getfield(int3, 307216, 0);
        } else {
            string0 = dbrow_getfield(int3, 307200, 0);
        };
    };
    return string0;
}