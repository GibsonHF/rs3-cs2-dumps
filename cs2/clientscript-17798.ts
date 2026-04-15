//
function script17798(int0: dbrow, int1: int, int2: component): int {
    var string0 = "Must be performed at one of the following sites: ";
    var int3 = DB_GETFIELDCOUNT(int0, 962688);
    var int4 = -1 as dbrow;
    var int5 = 0;
    var int6 = 0;
    var int7 = 19716 as graphic;
    var int8 = -1;
    if ((int3 > 0)) {
        while ((++int8 < int3)) {
            int4 = script17508(int0, int8);
            string0 = strconcat(string0, script17496(int4));
            if ((int4 == varplayer_11130)) {
                int5 = 1;
            };
            if ((int8 < (int3 - 1))) {
                string0 = strconcat(string0, ", ");
            };
        };
        if ((int5 == 0)) {
            int7 = 19717 as graphic;
        };
        int6 = (int6 + script17812(int2, (int1 + int6), 2100 as dbrow, -1 as graphic, -1 as obj, string0, 2, int7));
    };
    return int6;
}