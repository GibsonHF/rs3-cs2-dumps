//
function script17799(int0: number, int1: number, int2: number): number {
    var int3 = DB_GETFIELDCOUNT(int0, 962704);
    var int4 = -1;
    var int5 = 0;
    var int6 = 19716;
    var int7 = -1;
    if ((int3 > 0)) {
        while ((++int7 < int3)) {
            int4 = script17509(int0, int7);
            int6 = 19716;
            if ((script2193(int4) != 2)) {
                int6 = 19717;
            };
            int5 = (int5 + script17812(int2, (int1 + int5), 2100, -1, -1, `Completed '${script2103(int4)}'`, 2, int6));
        };
    };
    return int5;
}