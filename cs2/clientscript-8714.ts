//
function script8714(int0: number, int1: number, string0: string): [number, string] {
    if ((int0 == -1 as dbrow)) {
        return [0, ""];
    };
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int0, 1503280);
    var int4 = -1 as quest;
    var string1 = "";
    while ((int2 < int3)) {
        int4 = dbrow_getfield(int0, 1503280, int2);
        if ((int4 != -1 as quest)) {
            string1 = QUEST_GETNAME(int4);
            if ((QUEST_FINISHED(int4) == false)) {
                var string0 = strconcat(string0, `<br>- Complete the '${string1}' quest`);
                var int1 = 0;
            };
        };
        int2 = (int2 + 1);
    };
    return [int1, string0];
}