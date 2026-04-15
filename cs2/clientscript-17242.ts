//
function script17242(int0: dbrow): [int, string] {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905280);
    var int3 = -1 as quest;
    var int4 = 0;
    var string0 = "";
    var string1 = "";
    while ((int1 < int2)) {
        int3 = dbrow_getfield(int0, 905280, int1);
        if ((QUEST_FINISHED(int3) == false)) {
            int4 = (int4 + 1);
            string1 = QUEST_GETNAME(int3);
            string0 = script17238(string0, `Complete quest: ${string1}`);
        } else {
            string0 = script17238(string0, `<str=FFFFFE>Complete quest: ${string1}`);
        };
        int1 = (int1 + 1);
    };
    return [int4, string0];
}