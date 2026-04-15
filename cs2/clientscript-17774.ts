//
function script17774(int0: int, int1: int, int2: int, int3: npc, int4: obj): int {
    var int5 = comp(1223, 22);
    var int6 = IF_GETWIDTH(int5);
    var int7 = (18 * PARAHEIGHT(`${inttostring(int1, 10)} / ${inttostring(int2, 10)} ${script17522(int3)}`, int6, 207 as fontmetrics));
    script9731(int5, IF_GETNEXTSUBID(int5), 0, int0, 0, 0, 18, 18, 0, 0, int4, -1);
    script2995(int5, IF_GETNEXTSUBID(int5), 18, int0, 0, 0, (int6 - 18), int7, 0, 0, 2100 as dbrow, `${inttostring(int1, 10)} / ${inttostring(int2, 10)} ${script17522(int3)}`);
    script2731(int5, CC_GETID(), 2);
    return int7;
}