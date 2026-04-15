//
function script17288(int0: dbrow): unknown_int {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905264);
    var int3 = -1 as quest;
    while ((int1 < int2)) {
        int3 = dbrow_getfield(int0, 905264, int1);
        if ((QUEST_STARTED(int3) == 1)) {
            return 0;
        };
        int1 = (int1 + 1);
    };
    return 1;
}