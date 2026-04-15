//
function script17247(int0: dbrow): [int, string] {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905360);
    var int3 = -1 as achievement;
    var int4 = 0;
    var string0 = "";
    while ((int1 < int2)) {
        int3 = dbrow_getfield(int0, 905360, int1);
        if ((ACHIEVEMENT_ALLPREREQMET(int3) == 0)) {
            int4 = (int4 + 1);
            string0 = script17238(string0, `Meet requirements for achievement: ${ACHIEVEMENT_GETNAME(int3)}`);
        } else {
            string0 = script17238(string0, `<str=FFFFFE>Meet requirements for achievement: ${ACHIEVEMENT_GETNAME(int3)}`);
        };
        int1 = (int1 + 1);
    };
    return [int4, string0];
}