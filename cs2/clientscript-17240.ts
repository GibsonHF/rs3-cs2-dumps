//
function script17240(int0: dbrow): [int, string] {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905232);
    var int3 = -1 as stat;
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    while ((int1 < int2)) {
        [int3, int4] = dbrow_getfield(int0, 905232, int1);
        if ((STAT(int3) < int4)) {
            int5 = (int5 + 1);
            string0 = script17238(string0, `Level ${inttostring(int4, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int3)}`);
        } else {
            string0 = script17238(string0, `<str=FFFFFE>Level ${inttostring(int4, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int3)}`);
        };
        int1 = (int1 + 1);
    };
    return [int5, string0];
}