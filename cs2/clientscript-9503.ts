//
function script9503(int0: component, int1: unknown_int, int2: unknown_int): void {
    var int3 = 0;
    var string0 = "null";
    switch (int0) {
        case 49086525: {
            int3 = varclient_3881;
            if ((int3 == 1)) {
                string0 = "<col=DCDBD6>Armadyl</col>-aligned diviners collect divine energy 10% faster.";
            } else {
                string0 = "<col=DCDBD6>Armadyl</col>-aligned convoys can collect 10% more divine energy on each trip.";
            };
            break;
        }
        case 49086524: {
            int3 = varclient_3882;
            if ((int3 == 1)) {
                string0 = "<col=DCDBD6>Armadyl</col>-aligned caravan units have 10% more life points.";
            } else {
                string0 = "<col=DCDBD6>Armadyl</col>-aligned bodyguards deal 50% more damage.";
            };
            break;
        }
        case 49086523: {
            int3 = varclient_3883;
            if ((int3 == 1)) {
                string0 = "<col=DCDBD6>Armadyl</col>-aligned players heal bodyguards and caravans 10% faster.";
            } else {
                string0 = "<col=DCDBD6>Armadyl</col>-aligned players gather 10% more divine energy when gathering with a convoy.";
            };
            break;
        }
        case 49086522: {
            int3 = varclient_3884;
            if ((int3 == 1)) {
                string0 = "<col=DCDBD6>Armadyl</col>-aligned buildings are 15% stronger.";
            } else {
                string0 = "<col=DCDBD6>Armadyl</col>-aligned buildings have boosts to their associated effects.";
            };
            break;
        }
        case 49086520: {
            int3 = varclient_3885;
            if ((int3 == 1)) {
                string0 = "<col=D66E1F>Bandos</col>-aligned diviners collect divine energy 10% faster.";
            } else {
                string0 = "<col=D66E1F>Bandos</col>-aligned convoys can collect 10% more divine energy on each trip.";
            };
            break;
        }
        case 49086519: {
            int3 = varclient_3886;
            if ((int3 == 1)) {
                string0 = "<col=D66E1F>Bandos</col>-aligned caravan units have 10% more life points.";
            } else {
                string0 = "<col=D66E1F>Bandos</col>-aligned bodyguards deal 50% more damage.";
            };
            break;
        }
        case 49086518: {
            int3 = varclient_3887;
            if ((int3 == 1)) {
                string0 = "<col=D66E1F>Bandos</col>-aligned players heal bodyguards and caravans 10% faster.";
            } else {
                string0 = "<col=D66E1F>Bandos</col>-aligned players gather 10% more divine energy when gathering with a convoy.";
            };
            break;
        }
        case 49086517: {
            int3 = varclient_3888;
            if ((int3 == 1)) {
                string0 = "<col=D66E1F>Bandos</col>-aligned buildings are 15% stronger.";
            } else {
                string0 = "<col=D66E1F>Bandos</col>-aligned buildings have boosts to their associated effects.";
            };
            break;
        }
    };
    if ((varbitplayer_21115 == 3)) {
        string0 = strconcat(string0, "<br><br><col=DCDBD6>You are aligned with Armadyl.");
    } else if ((varbitplayer_21115 == 4)) {
        string0 = strconcat(string0, "<br><br><col=D66E1F>You are aligned with Bandos.");
    } else {
        string0 = strconcat(string0, "<br><br>You are currently unaligned.");
    };
    script8800(string0, int0, -1);
    return;
}