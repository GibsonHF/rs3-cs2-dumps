//
function script17803(int0: dbrow, int1: int, int2: component): int {
    var int3 = -1 as npc;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    while ((++int6 < script17512(int0))) {
        [int3, int4] = script17511(int0, int6);
        int5 = (int5 + script17812(int2, (int1 + int5), 2100 as dbrow, -1 as graphic, script17816(int3), `${inttostring(int4, 10)} ${script17522(int3)}`, 2, 30593 as graphic));
    };
    return int5;
}