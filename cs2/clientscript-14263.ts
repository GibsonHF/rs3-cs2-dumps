//
function script14263(): void {
    var int0 = MAX(1, varbitplayer_5388);
    script13995(66519081, -1, 28556, script483(varbitplayer_5396), script9670(1, int0));
    script13995(66519082, -1, 28556, script483(varbitplayer_5397), script9670(2, int0));
    script13995(66519083, -1, 28556, script483(varbitplayer_5402), script9670(3, int0));
    script13995(66519084, -1, 28556, script483(varbitplayer_5403), script9670(4, int0));
    script13995(66519085, -1, 28556, script483(varbitplayer_5406), script9670(5, int0));
    script13995(66519086, -1, 28556, script483(varbitplayer_5407), script9670(6, int0));
    script13995(66519087, -1, 28556, script483(varbitplayer_5408), script9670(7, int0));
    script13995(66519088, -1, 28556, script483(varbitplayer_5409), script9670(8, int0));
    script13995(66519089, -1, 28556, script483(varbitplayer_5410), script9670(9, int0));
    script13995(66519090, -1, 28556, script483(varbitplayer_5411), script9670(10, int0));
    var int1 = script14265(varbitplayer_5388);
    script14264(int1);
    var int2 = script486(int1);
    IF_SETHIDE(1, 66519121);
    IF_SETHIDE(0, 66519119);
    if ((int2 == -1)) {
        IF_SETHIDE(0, 66519078);
        IF_SETTEXT("No Troop", 66519078);
        IF_SETHIDE(1, 66519118);
    } else {
        IF_SETHIDE(1, 66519078);
        IF_SETHIDE(0, 66519118);
        IF_SETTEXT(npc_getparam(int2, 1139), 66519097);
        IF_SETGRAPHIC(npc_getparam(int2, 1148), 66519099);
        IF_SETTEXT(`Movement: <col=ffffff>${inttostring(npc_getparam(int2, 1134), 10)}`, 66519123);
        IF_SETTEXT(`Damage: <col=ffffff>${inttostring((npc_getparam(int2, 1135) * 100), 10)}`, 66519124);
        IF_SETTEXT(`Health: <col=ffffff>${inttostring((npc_getparam(int2, 1136) * 100), 10)}`, 66519125);
        IF_SETTEXT(`Range: <col=ffffff>${inttostring(npc_getparam(int2, 1137), 10)}`, 66519126);
        IF_SETTEXT(`Cost: <col=ffffff>${inttostring(npc_getparam(int2, 1138), 10)}`, 66519127);
    };
    return;
}