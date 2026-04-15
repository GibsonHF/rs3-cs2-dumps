//
function script17251(int0: dbrow): unknown_int {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 905280);
    var int3 = -1 as quest;
    while ((int1 < int2)) {
        int3 = dbrow_getfield(int0, 905280, int1);
        if ((QUEST_FINISHED(int3) == false)) {
            return 0;
        };
        int1 = (int1 + 1);
    };
    return 1;
}