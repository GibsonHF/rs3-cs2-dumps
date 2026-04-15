//
function script17232(int0: dbrow): string {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905280);
    var int3 = -1 as quest;
    var string0 = "";
    var string1 = "";
    while ((int1 < int2)) {
        int3 = dbrow_getfield(int0, 905280, int1);
        if ((QUEST_FINISHED(int3) == false)) {
            string1 = QUEST_GETNAME(int3);
            string0 = script17238(string0, `Complete quest: ${string1}`);
        };
        int1 = (int1 + 1);
    };
    return string0;
}