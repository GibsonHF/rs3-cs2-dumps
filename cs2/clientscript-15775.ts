//
function script15775(int0: dbrow): string {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905248);
    var int3 = -1 as stat;
    var int4 = 0;
    var string0 = "";
    while ((int1 < int2)) {
        [int3, int4] = dbrow_getfield(int0, 905248, int1);
        if ((STAT_BASE(int3) < int4)) {
            string0 = script17238(string0, `Base level ${inttostring(int4, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int3)}`);
        };
        int1 = (int1 + 1);
    };
    return string0;
}