//
function script17233(int0: dbrow): string {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905296);
    var int3 = -1 as quest;
    var string0 = "";
    var string1 = "";
    while ((int1 < int2)) {
        int3 = dbrow_getfield(int0, 905296, int1);
        if ((script18524(int3) == 0)) {
            string1 = QUEST_GETNAME(int3);
            string0 = script17238(string0, `Meet requirements for quest: ${string1}`);
        };
        int1 = (int1 + 1);
    };
    return string0;
}