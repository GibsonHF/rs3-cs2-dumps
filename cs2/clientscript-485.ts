//
function script485(int0: component): void {
    var int1 = -1 as npc;
    var int2 = 0;
    IF_SETCOLOUR(16750623, int0);
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
    if ((int1 == -1 as npc)) {
        IF_SETHIDE(false, comp(1015, 38));
        IF_SETHIDE(true, comp(1015, 78));
    } else {
        stack(npc_getparam(int1, 1148));
        stack(66519099);
        IF_SETGRAPHIC();
        stack(int1);
        stack(1139);
        npc_getparam();
        IF_SETTEXT(stack(), 66519097);
        stack("Movement: <col=ffffff>");
        stack(int1);
        stack(1134);
        npc_getparam();
        IF_SETTEXT(`${stack()}${inttostring(stack(), 10)}`, 66519123);
        stack("Damage: <col=ffffff>");
        stack(int1);
        stack(1135);
        npc_getparam();
        IF_SETTEXT(`${stack()}${inttostring((stack() * 100), 10)}`, 66519124);
        stack("Health: <col=ffffff>");
        stack(int1);
        stack(1136);
        npc_getparam();
        IF_SETTEXT(`${stack()}${inttostring((stack() * 100), 10)}`, 66519125);
        stack("Range: <col=ffffff>");
        stack(int1);
        stack(1137);
        npc_getparam();
        IF_SETTEXT(`${stack()}${inttostring(stack(), 10)}`, 66519126);
        stack("Cost: <col=ffffff>");
        stack(int1);
        stack(1138);
        npc_getparam();
        IF_SETTEXT(`${stack()}${inttostring(stack(), 10)}`, 66519127);
    };
    return;
}