//
function script8950(int0: struct, int1: boolean): [string, unknown_string, unknown_int, unknown_int] {
    var string0 = "";
    var string1 = "";
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = 0;
    if ((struct_getparam(int0, 1345) > 0)) {
        string0 = "View Quest";
        if ((int1 == true)) {
            string1 = "Tap for Quest Journal";
        } else {
            string1 = "Click for Quest Journal";
        };
        int2 = 172;
    } else if ((struct_getparam(int0, 1346) > 0)) {
        string0 = "View Boss";
        if ((int1 == true)) {
            string1 = "Tap for Boss Info";
        } else {
            string1 = "Click for Boss Info";
        };
        int2 = 172;
    } else {
        [int3, int4] = script13279(int0);
        if (((int3 >= 0) && (int4 != -1))) {
            string0 = "View Achievement";
            if ((int1 == true)) {
                string1 = "Tap for Achievement";
            } else {
                string1 = "Click for Achievement";
            };
            int2 = 172;
            int5 = 1;
        };
    };
    return [string0, string1, int2, int5];
}