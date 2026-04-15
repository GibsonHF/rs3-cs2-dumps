//
function script10347(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(889 as cs2enum);
    var int3 = -1 as cs2enum;
    while ((int0 < int2)) {
        int1 = enum_getvalue(0, 0, 889 as cs2enum, int0);
        if ((int1 != -1)) {
            int3 = enum_getvalue(0, 26, 9124 as cs2enum, int1);
        };
        if (((int3 != -1 as cs2enum) && (enum_hasoutput(0, int3, 41) == 1))) {
            switch (int1) {
                case 0: {
                    varbitclient_24645 = 1;
                    break;
                }
                case 1: {
                    varbitclient_24646 = 1;
                    break;
                }
                case 2: {
                    varbitclient_24647 = 1;
                    break;
                }
                case 3: {
                    varbitclient_24648 = 1;
                    break;
                }
                case 4: {
                    varbitclient_24649 = 1;
                    break;
                }
                case 5: {
                    varbitclient_24650 = 1;
                    break;
                }
                case 7: {
                    varbitclient_1684 = 1;
                    break;
                }
            };
            int0 = int2;
        };
        int0 = (int0 + 1);
    };
    script10350();
    script10361(varplayer_4696);
    IF_SETONVARCTRANSMIT(callback(script10348, 4502, 1), comp(1524, 0));
    stack(10349);
    stack("");
    stack(99876864);
    IF_SETONPLAYERGROUPTRANSMIT();
    return;
}