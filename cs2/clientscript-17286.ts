//
function script17286(int0: dbrow): string {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905264);
    var int3 = -1 as quest;
    var string0 = "";
    var string1 = "";
    while ((int1 < int2)) {
        int3 = dbrow_getfield(int0, 905264, int1);
        if ((QUEST_STARTED(int3) == 1)) {
            string1 = QUEST_GETNAME(int3);
            string0 = script17238(string0, `Quest not started: ${string1}`);
        };
        int1 = (int1 + 1);
    };
    return string0;
}