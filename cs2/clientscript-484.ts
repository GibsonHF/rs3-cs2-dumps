//
function script484(int0: number): void {
    var int1 = -1;
    var int2 = -1;
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
    if ((int1 == -1)) {
        IF_SETHIDE(1, 66519078);
        IF_SETHIDE(0, 66519118);
        IF_SETGRAPHIC(npc_getparam(int2, 1148), 66519099);
        IF_SETTEXT(npc_getparam(int2, 1139), 66519097);
        IF_SETTEXT(`Movement: <col=ffffff>${inttostring(npc_getparam(int2, 1134), 10)}`, 66519123);
        IF_SETTEXT(`Damage: <col=ffffff>${inttostring((npc_getparam(int2, 1135) * 100), 10)}`, 66519124);
        IF_SETTEXT(`Health: <col=ffffff>${inttostring((npc_getparam(int2, 1136) * 100), 10)}`, 66519125);
        IF_SETTEXT(`Range: <col=ffffff>${inttostring(npc_getparam(int2, 1137), 10)}`, 66519126);
        IF_SETTEXT(`Cost: <col=ffffff>${inttostring(npc_getparam(int2, 1138), 10)}`, 66519127);
    } else if ((int1 != int2)) {
        IF_SETGRAPHIC(npc_getparam(int2, 1148), 66519099);
        IF_SETTEXT(strconcat(IF_GETTEXT(66519097), ` ~ ${npc_getparam(int2, 1139)}`), 66519097);
        int3 = npc_getparam(int1, 1134);
        int4 = npc_getparam(int2, 1134);
        if ((int3 < int4)) {
            int5 = (int4 - int3);
            string0 = ` ~ ${inttostring(npc_getparam(int2, 1134), 10)} (<col=00c800>+${inttostring(int5, 10)}</col>)`;
        } else if ((int3 > int4)) {
            int5 = (int3 - int4);
            string0 = ` ~ ${inttostring(npc_getparam(int2, 1134), 10)} (<col=c80000>-${inttostring(int5, 10)}</col>)`;
        } else {
            string0 = ` ~ ${inttostring(npc_getparam(int2, 1134), 10)}`;
        };
        IF_SETTEXT(strconcat(IF_GETTEXT(66519123), string0), 66519123);
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
        IF_SETTEXT(strconcat(IF_GETTEXT(66519124), string0), 66519124);
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
        IF_SETTEXT(strconcat(IF_GETTEXT(66519125), string0), 66519125);
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
        IF_SETTEXT(strconcat(IF_GETTEXT(66519126), string0), 66519126);
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
        IF_SETTEXT(strconcat(IF_GETTEXT(66519127), string0), 66519127);
    };
    return;
}