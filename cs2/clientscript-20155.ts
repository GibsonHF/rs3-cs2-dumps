//
function script20155(int0: dbrow, int1: boolean, string0: string): [boolean, string] {
    switch (int0) {
        case 16976: {
            if ((script1858(13) == 1)) {
                return [true, ""];
            };
            break;
        }
        case 17016: {
            if ((script1858(12) == 1)) {
                return [true, ""];
            };
            break;
        }
    };
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int0, 1388592);
    var int4 = -1 as var_reference;
    var int5 = 0;
    var string1 = "";
    while ((int2 < int3)) {
        stack(dbrow_getfield(int0, 1388592, int2));
        [int4, int5, string1] = stack();
        if ((WORLDMAP_GETDISPLAYCOORD(int4) < int5)) {
            var string0 = strconcat(string0, `<br>- ${string1}`);
            var int1 = false;
        };
        int2 = (int2 + 1);
    };
    return [int1, string0];
}