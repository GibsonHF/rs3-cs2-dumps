//
function script17237(int0: dbrow): string {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905360);
    var int3 = -1 as achievement;
    var string0 = "";
    while ((int1 < int2)) {
        int3 = dbrow_getfield(int0, 905360, int1);
        if ((ACHIEVEMENT_ALLPREREQMET(int3) == 0)) {
            string0 = script17238(string0, `Meet requirements for achievement: ${ACHIEVEMENT_GETNAME(int3)}`);
        };
        int1 = (int1 + 1);
    };
    return string0;
}