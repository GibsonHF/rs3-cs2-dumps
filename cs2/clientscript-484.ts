//
function script484(int0: component): void {
    var int1 = -1 as npc;
    var int2 = -1 as npc;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    IF_SETCOLOUR(16777215, int0);
    switch (varbitplayer_5388) {
        case 1: {
            int1 = script486(varbitplayer_5396);
            break;
        }
        case 2: {
            int1 = script486(varbitplayer_5397);
            break;
        }
        case 3: {
            int1 = script486(varbitplayer_5402);
            break;
        }
        case 4: {
            int1 = script486(varbitplayer_5403);
            break;
        }
        case 5: {
            int1 = script486(varbitplayer_5406);
            break;
        }
        case 6: {
            int1 = script486(varbitplayer_5407);
            break;
        }
        case 7: {
            int1 = script486(varbitplayer_5408);
            break;
        }
        case 8: {
            int1 = script486(varbitplayer_5409);
            break;
        }
        case 9: {
            int1 = script486(varbitplayer_5410);
            break;
        }
        case 10: {
            int1 = script486(varbitplayer_5411);
            break;
        }
        default: {
            return;
        }
    };
    switch (int0) {
        case 66519145: {
            int2 = script486(0);
            break;
        }
        case 66519070: {
            int2 = script486(1);
            break;
        }
        case 66519074: {
            int2 = script486(2);
            break;
        }
        case 66519075: {
            int2 = script486(3);
            break;
        }
        case 66519076: {
            int2 = script486(4);
            break;
        }
        case 66519142: {
            int2 = script486(5);
            break;
        }
        case 66519143: {
            int2 = script486(6);
            break;
        }
        case 66519144: {
            int2 = script486(7);
            break;
        }
        default: {
            return;
        }
    };
    if ((int1 == -1 as npc)) {
        IF_SETHIDE(true, comp(1015, 38));
        IF_SETHIDE(false, comp(1015, 78));
        stack(npc_getparam(int2, 1148));
        stack(66519099);
        IF_SETGRAPHIC();
        stack(int2);
        stack(1139);
        npc_getparam();
        IF_SETTEXT(stack(), 66519097);
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
    } else if ((int1 != int2)) {
        stack(npc_getparam(int2, 1148));
        stack(66519099);
        IF_SETGRAPHIC();
        stack(IF_GETTEXT(66519097));
        stack(" ~ ");
        stack(int2);
        stack(1139);
        npc_getparam();
        IF_SETTEXT(strconcat(stack(), `${stack()}`), 66519097);
        stack(int1);
        stack(1134);
        npc_getparam();
        int3 = stack();
        stack(int2);
        stack(1134);
        npc_getparam();
        int4 = stack();
        if ((int3 < int4)) {
            int5 = (int4 - int3);
            string0 = ` ~ ${inttostring(npc_getparam(int2, 1134), 10)} (<col=00c800>+${inttostring(int5, 10)}</col>)`;
        } else if ((int3 > int4)) {
            int5 = (int3 - int4);
            string0 = ` ~ ${inttostring(npc_getparam(int2, 1134), 10)} (<col=c80000>-${inttostring(int5, 10)}</col>)`;
        } else {
            string0 = ` ~ ${inttostring(npc_getparam(int2, 1134), 10)}`;
        };
        IF_SETTEXT(strconcat(IF_GETTEXT(comp(1015, 83)), string0), comp(1015, 83));
        int3 = npc_getparam(int1, 1135);
        int4 = npc_getparam(int2, 1135);
        if ((int3 < int4)) {
            int5 = (int4 - int3);
            string0 = ` ~ ${inttostring((npc_getparam(int2, 1135) * 100), 10)} (<col=00c800>+${inttostring((int5 * 100), 10)}</col>)`;
        } else if ((int3 > int4)) {
            int5 = (int3 - int4);
            string0 = ` ~ ${inttostring((npc_getparam(int2, 1135) * 100), 10)} (<col=c80000>-${inttostring((int5 * 100), 10)}</col>)`;
        } else {
            string0 = ` ~ ${inttostring((npc_getparam(int2, 1135) * 100), 10)}`;
        };
        IF_SETTEXT(strconcat(IF_GETTEXT(comp(1015, 84)), string0), comp(1015, 84));
        int3 = npc_getparam(int1, 1136);
        int4 = npc_getparam(int2, 1136);
        if ((int3 < int4)) {
            int5 = (int4 - int3);
            string0 = ` ~ ${inttostring((npc_getparam(int2, 1136) * 100), 10)} (<col=00c800>+${inttostring((int5 * 100), 10)}</col>)`;
        } else if ((int3 > int4)) {
            int5 = (int3 - int4);
            string0 = ` ~ ${inttostring((npc_getparam(int2, 1136) * 100), 10)} (<col=c80000>-${inttostring((int5 * 100), 10)}</col>)`;
        } else {
            string0 = ` ~ ${inttostring((npc_getparam(int2, 1136) * 100), 10)}`;
        };
        IF_SETTEXT(strconcat(IF_GETTEXT(comp(1015, 85)), string0), comp(1015, 85));
        int3 = npc_getparam(int1, 1137);
        int4 = npc_getparam(int2, 1137);
        if ((int3 < int4)) {
            int5 = (int4 - int3);
            string0 = ` ~ ${inttostring(npc_getparam(int2, 1137), 10)} (<col=00c800>+${inttostring(int5, 10)}</col>)`;
        } else if ((int3 > int4)) {
            int5 = (int3 - int4);
            string0 = ` ~ ${inttostring(npc_getparam(int2, 1137), 10)} (<col=c80000>-${inttostring(int5, 10)}</col>)`;
        } else {
            string0 = ` ~ ${inttostring(npc_getparam(int2, 1137), 10)}`;
        };
        IF_SETTEXT(strconcat(IF_GETTEXT(comp(1015, 86)), string0), comp(1015, 86));
        int3 = npc_getparam(int1, 1138);
        int4 = npc_getparam(int2, 1138);
        if ((int3 < int4)) {
            int5 = (int4 - int3);
            string0 = ` ~ ${inttostring(npc_getparam(int2, 1138), 10)} (<col=c80000>+${inttostring(int5, 10)}</col>)`;
        } else if ((int3 > int4)) {
            int5 = (int3 - int4);
            string0 = ` ~ ${inttostring(npc_getparam(int2, 1138), 10)} (<col=00c800>-${inttostring(int5, 10)}</col>)`;
        } else {
            string0 = ` ~ ${inttostring(npc_getparam(int2, 1138), 10)}`;
        };
        IF_SETTEXT(strconcat(IF_GETTEXT(comp(1015, 87)), string0), comp(1015, 87));
    };
    return;
}