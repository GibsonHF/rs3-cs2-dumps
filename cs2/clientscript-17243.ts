//
function script17243(int0: dbrow): [int, string] {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905296);
    var int3 = -1 as quest;
    var int4 = 0;
    var string0 = "";
    var string1 = "";
    while ((int1 < int2)) {
        int3 = dbrow_getfield(int0, 905296, int1);
        if ((script18524(int3) == 0)) {
            int4 = (int4 + 1);
            string1 = QUEST_GETNAME(int3);
            string0 = script17238(string0, `Meet requirements for quest: ${string1}`);
        } else {
            string0 = script17238(string0, `qii_strikeoutMeet requirements for quest: ${string1}`);
        };
        int1 = (int1 + 1);
    };
    return [int4, string0];
}