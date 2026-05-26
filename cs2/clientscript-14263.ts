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
    IF_SETHIDE(true, comp(1015, 81));
    IF_SETHIDE(false, comp(1015, 79));
    if ((int2 == -1)) {
        IF_SETHIDE(false, comp(1015, 38));
        IF_SETTEXT("No Troop", comp(1015, 38));
        IF_SETHIDE(true, comp(1015, 78));
    } else {
        IF_SETHIDE(true, comp(1015, 38));
        IF_SETHIDE(false, comp(1015, 78));
        IF_SETTEXT(npc_getparam(int2, 1139), comp(1015, 57));
        IF_SETGRAPHIC(npc_getparam(int2, 1148), comp(1015, 59));
        IF_SETTEXT(`Movement: <col=ffffff>${inttostring(npc_getparam(int2, 1134), 10)}`, comp(1015, 83));
        IF_SETTEXT(`Damage: <col=ffffff>${inttostring((npc_getparam(int2, 1135) * 100), 10)}`, comp(1015, 84));
        IF_SETTEXT(`Health: <col=ffffff>${inttostring((npc_getparam(int2, 1136) * 100), 10)}`, comp(1015, 85));
        IF_SETTEXT(`Range: <col=ffffff>${inttostring(npc_getparam(int2, 1137), 10)}`, comp(1015, 86));
        IF_SETTEXT(`Cost: <col=ffffff>${inttostring(npc_getparam(int2, 1138), 10)}`, comp(1015, 87));
    };
    return;
}