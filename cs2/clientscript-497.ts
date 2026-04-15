//
function script497(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    if ((varclient_1367 != -1 as npc)) {
        int0 = npc_getparam(varclient_1367, 1134);
        if ((varclient_1368 > int0)) {
            string0 = `Movement: <col=00c800>${inttostring(varclient_1368, 10)}<col=ff981f>/${inttostring(int0, 10)}`;
        } else if ((varclient_1368 < int0)) {
            string0 = `Movement: <col=c80000>${inttostring(varclient_1368, 10)}<col=ff981f>/${inttostring(int0, 10)}`;
        } else {
            string0 = `Movement: ${inttostring(varclient_1368, 10)}/${inttostring(int0, 10)}`;
        };
        int1 = npc_getparam(varclient_1367, 1135);
        if ((varclient_1369 > int1)) {
            string1 = `Damage: <col=00c800>${inttostring((varclient_1369 * 100), 10)}<col=ff981f>/${inttostring((int1 * 100), 10)}`;
        } else if ((varclient_1369 < int1)) {
            string1 = `Damage: <col=c80000>${inttostring((varclient_1369 * 100), 10)}<col=ff981f>/${inttostring((int1 * 100), 10)}`;
        } else {
            string1 = `Damage: ${inttostring((varclient_1369 * 100), 10)}/${inttostring((int1 * 100), 10)}`;
        };
        int2 = npc_getparam(varclient_1367, 1136);
        if ((varclient_1370 > int2)) {
            string2 = `Health: <col=00c800>${inttostring((varclient_1370 * 100), 10)}<col=ff981f>/${inttostring((int2 * 100), 10)}`;
        } else if ((varclient_1370 < int2)) {
            string2 = `Health: <col=c80000>${inttostring((varclient_1370 * 100), 10)}<col=ff981f>/${inttostring((int2 * 100), 10)}`;
        } else {
            string2 = `Health: ${inttostring((varclient_1370 * 100), 10)}/${inttostring((int2 * 100), 10)}`;
        };
        int3 = npc_getparam(varclient_1367, 1137);
        if ((varclient_1371 > int3)) {
            string3 = `Range: <col=00c800>${inttostring(varclient_1371, 10)}<col=ff981f>/${inttostring(int3, 10)}`;
        } else if ((varclient_1371 < int3)) {
            string3 = `Range: <col=c80000>${inttostring(varclient_1371, 10)}<col=ff981f>/${inttostring(int3, 10)}`;
        } else {
            string3 = `Range: ${inttostring(varclient_1371, 10)}/${inttostring(int3, 10)}`;
        };
        IF_SETTEXT(string0, comp(1012, 7));
        IF_SETTEXT(string1, comp(1012, 8));
        IF_SETTEXT(string2, comp(1012, 9));
        IF_SETTEXT(string3, comp(1012, 10));
    };
    return;
}