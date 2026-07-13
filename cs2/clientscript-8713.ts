//
function script8713(int0: number, int1: number, string0: string): [number, string] {
    if ((int0 == -1 as dbrow)) {
        return [0, ""];
    };
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int0, 1503264);
    var int4 = -1 as var_reference;
    var int5 = 0;
    var string1 = "";
    while ((int2 < int3)) {
        stack(dbrow_getfield(int0, 1503264, int2));
        [int4, int5, string1] = stack();
        if ((WORLDMAP_GETDISPLAYCOORD(int4) < int5)) {
            var string0 = strconcat(string0, `<br>- ${string1}`);
            var int1 = 0;
        };
        int2 = (int2 + 1);
    };
    return [int1, string0];
}