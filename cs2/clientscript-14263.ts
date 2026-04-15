//
function script14263(): void {
    var int0 = MAX(1, varbitplayer_5388);
    script13995(comp(1015, 41), comp(-1, 65535), 28556 as struct, script483(varbitplayer_5396), script9670(1, int0));
    script13995(comp(1015, 42), comp(-1, 65535), 28556 as struct, script483(varbitplayer_5397), script9670(2, int0));
    script13995(comp(1015, 43), comp(-1, 65535), 28556 as struct, script483(varbitplayer_5402), script9670(3, int0));
    script13995(comp(1015, 44), comp(-1, 65535), 28556 as struct, script483(varbitplayer_5403), script9670(4, int0));
    script13995(comp(1015, 45), comp(-1, 65535), 28556 as struct, script483(varbitplayer_5406), script9670(5, int0));
    script13995(comp(1015, 46), comp(-1, 65535), 28556 as struct, script483(varbitplayer_5407), script9670(6, int0));
    script13995(comp(1015, 47), comp(-1, 65535), 28556 as struct, script483(varbitplayer_5408), script9670(7, int0));
    script13995(comp(1015, 48), comp(-1, 65535), 28556 as struct, script483(varbitplayer_5409), script9670(8, int0));
    script13995(comp(1015, 49), comp(-1, 65535), 28556 as struct, script483(varbitplayer_5410), script9670(9, int0));
    script13995(comp(1015, 50), comp(-1, 65535), 28556 as struct, script483(varbitplayer_5411), script9670(10, int0));
    var int1 = script14265(varbitplayer_5388);
    script14264(int1);
    var int2 = script486(int1);
    IF_SETHIDE(true, comp(1015, 81));
    IF_SETHIDE(false, comp(1015, 79));
    if ((int2 == -1 as npc)) {
        IF_SETHIDE(false, comp(1015, 38));
        IF_SETTEXT("No Troop", comp(1015, 38));
        IF_SETHIDE(true, comp(1015, 78));
    } else {
        IF_SETHIDE(true, comp(1015, 38));
        IF_SETHIDE(false, comp(1015, 78));
        IF_SETTEXT(npc_getparam(int2, 1139), comp(1015, 57));
        stack(npc_getparam(int2, 1148));
        stack(66519099);
        IF_SETGRAPHIC();
        stack("Movement: <col=ffffff>");
        stack(int2);
        stack(1134);
        npc_getparam();
        IF_SETTEXT(`${stack()}${inttostring(stack(), 10)}`, 66519123);
        stack("Damage: <col=ffffff>");
        stack(int2);
        stack(1135);
        npc_getparam();
        IF_SETTEXT(`${stack()}${inttostring((stack() * 100), 10)}`, 66519124);
        stack("Health: <col=ffffff>");
        stack(int2);
        stack(1136);
        npc_getparam();
        IF_SETTEXT(`${stack()}${inttostring((stack() * 100), 10)}`, 66519125);
        stack("Range: <col=ffffff>");
        stack(int2);
        stack(1137);
        npc_getparam();
        IF_SETTEXT(`${stack()}${inttostring(stack(), 10)}`, 66519126);
        stack("Cost: <col=ffffff>");
        stack(int2);
        stack(1138);
        npc_getparam();
        IF_SETTEXT(`${stack()}${inttostring(stack(), 10)}`, 66519127);
    };
    return;
}