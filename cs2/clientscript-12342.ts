//
function script12342(int0: component, int1: int): void {
    var int2 = enum_getvalue(9, 26, 10870 as cs2enum, int0);
    if ((int2 == -1 as cs2enum)) {
        return;
    };
    var int3 = 0;
    switch (enum_getvalue(0, 0, int2, int1)) {
        case 11: {
            script12607(varbitclient_32703);
            break;
        }
        case 12: {
            if ((varbitplayer_27169 == 0)) {
                script12614(28);
            };
            break;
        }
        case 14: {
            varbitclient_2053 = (1 - varbitclient_2053);
            break;
        }
        case 4: {
            varbitclient_30624 = (1 - varbitclient_30624);
            int3 = 1;
            break;
        }
        case 6: {
            varbitclient_30626 = (1 - varbitclient_30626);
            int3 = 1;
            break;
        }
        case 7: {
            varbitclient_30627 = (1 - varbitclient_30627);
            int3 = 1;
            break;
        }
        case 8: {
            varbitclient_30628 = (1 - varbitclient_30628);
            int3 = 1;
            break;
        }
        case 9: {
            varbitclient_30629 = (1 - varbitclient_30629);
            int3 = 1;
            break;
        }
        case 10: {
            varbitclient_30630 = (1 - varbitclient_30630);
            int3 = 1;
            break;
        }
        case 13: {
            if ((varbitplayer_27169 == 0)) {
                script12614(30);
            };
            break;
        }
        default: {
            return;
        }
    };
    if ((int3 == 1)) {
        if ((script12344(30, 0) == 1)) {
            script12318(script3387(0));
        };
        if ((script12344(30, 1) == 1)) {
            script12318(script3387(1));
        };
    };
    return;
}