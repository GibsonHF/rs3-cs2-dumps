//
function script19431(int0: component, int1: int, int2: int, int3: achievement): int {
    var int4 = 0;
    var int5 = 24;
    var int6 = 33374;
    var int7 = 33385;
    var string0 = "View task list";
    var int8 = script20491(17514 as dbrow);
    var int9 = STRINGWIDTH(string0, int8);
    var int10 = 4367 as dbrow;
    var int11 = ((65 - 65) / 2);
    var int12 = 65;
    var int13 = script19432(int1);
    var int14 = 0;
    var int15 = unk10981(int3);
    int14 = script19623(int3);
    var int16 = MIN(16384, SCALE(16384, int15, int14));
    if ((varbitplayer_56570 == int1)) {
        int10 = 14486 as dbrow;
        int13 = script19433(int1);
        if (((ACHIEVEMENT_REQSTATE(int3) == -2) && branch_not_long[63](varplayer_11944, -1n as clanhash))) {
            stack(1253392);
            stack(int3);
            DB_FIND(0);
            dbrow_findnext();
            if ((script19337(stack()) == 1)) {
                IF_SETTEXT("Claimed", comp(1302, 82));
                IF_SETENABLED(false, comp(1302, 82));
            } else {
                IF_SETTEXT("Claim Reward", comp(1302, 82));
                IF_SETENABLED(true, comp(1302, 82));
            };
        } else {
            IF_SETTEXT("Locked", comp(1302, 82));
            IF_SETENABLED(false, comp(1302, 82));
        };
    };
    script15938(int0, int1, int4++, 0, int2, 0, 0, 0, 65, 1, 0);
    script19436(int1);
    script16109(int1, int4++, 0, 0, 0, 0, 0, 0, 1, 1, int1, 0);
    script10033(int1, int4++, 0, 0, 0, 0, 0, 0, 1, 1, int10);
    script7918(int1, int4++, 2, 0, 0, 1, 64, 64, 0, 0, int13);
    script15937(int1, int4++, 10, 4, 2, 0, 80, 14, 1, 1);
    script10485(int1, int4++, 0, 0, 0, 0, 6554, int5, 2, 0, 17467 as dbrow, `Tier ${inttostring(int1, 10)}:`);
    script15937(int1, int4++, 0, 0, 2, 0, ((int9 + 4) + int5), int5, 0, 0);
    CC_SETOP(1, "Go To Achievements");
    CC_SETOPCURSOR(1, 210);
    CC_SETONMOUSEOVER(callback(script19434, -2147483645, int1, int4, int6, int7));
    CC_SETONMOUSELEAVE(callback(script19435, -2147483645, int1, int4, int6, int7));
    CC_SETONSCROLLWHEEL(callback(script36, 85327978, 85327977, -2147483646));
    script19632(20, 10, 8, 12);
    unk11118(callback(script3791, 85327978, 85327977, -2147483646, -1));
    script7918(int1, int4++, 0, 0, 2, 0, int5, int5, 0, 0, int6);
    script10485(int1, int4++, 0, 0, 0, 0, int9, int5, 0, 0, 17514, string0);
    CC_GETDYNAMICLAYER();
    CC_GETDYNAMICLAYER();
    script17947(int1, int4++, 0, 0, 1, 2, 0, 22, 1, 0, 14482);
    script17947(int1, int4++, 0, 0, 0, 1, int16, 12, 2, 0, 14483);
    CC_GETDYNAMICLAYER();
    script10485(int1, int4++, 0, 0, 1, 1, 0, 0, 1, 1, 14484, `Tasks to complete: ${inttostring(int14, 10)}/${inttostring(int15, 10)}`);
    return ((int2 + 65) + 4);
}