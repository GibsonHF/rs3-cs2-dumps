//
function script17799(int0: dbrow, int1: int, int2: component): int {
    var int3 = DB_GETFIELDCOUNT(int0, 962704);
    var int4 = -1 as quest;
    var int5 = 0;
    var int6 = 19716 as graphic;
    var int7 = -1;
    if ((int3 > 0)) {
        while ((++int7 < int3)) {
            int4 = script17509(int0, int7);
            int6 = 19716 as graphic;
            if ((script2193(int4) != 2)) {
                int6 = 19717 as graphic;
            };
            int5 = (int5 + script17812(int2, (int1 + int5), 2100 as dbrow, -1 as graphic, -1 as obj, `Completed '${script2103(int4)}'`, 2, int6));
        };
    };
    return int5;
}