//
function script5755(int0: int): void {
    var int1 = (CLIENTCLOCK() - int0);
    if ((int1 > 225)) {
        script8899(13139 as cs2enum);
        script13632();
    } else if (((int1 > 200) && (varbitclient_35731 < 9))) {
        script8899(13138 as cs2enum);
        if (((IF_FIND(comp(1865, 15)) == 1) && (varbitplayer_35835 >= 25))) {
            cc_setparam(6519, 0);
            CC_SETONTIMER(callback(script5756, 122224655, 0, varbitplayer_35835));
        } else {
            IF_SETTEXT(inttostring(varbitplayer_35835, 10), comp(1865, 15));
        };
        varbitclient_35731 = 9;
    } else if (((int1 > 175) && (varbitclient_35731 < 8))) {
        script8899(13137 as cs2enum);
        script4596(13138 as cs2enum);
        varbitclient_35731 = 8;
    } else if (((int1 > 150) && (varbitclient_35731 < 7))) {
        script8899(13136 as cs2enum);
        script4596(13137 as cs2enum);
        varbitclient_35731 = 7;
    } else if (((int1 > 125) && (varbitclient_35731 < 6))) {
        script8899(13135 as cs2enum);
        script4596(13136 as cs2enum);
        varbitclient_35731 = 6;
    } else if (((int1 > 100) && (varbitclient_35731 < 5))) {
        script8899(13134 as cs2enum);
        script4596(13135 as cs2enum);
        varbitclient_35731 = 5;
    } else if (((int1 > 75) && (varbitclient_35731 < 4))) {
        script8899(13133 as cs2enum);
        script4596(13134 as cs2enum);
        varbitclient_35731 = 4;
    } else if (((int1 > 50) && (varbitclient_35731 < 3))) {
        script8899(13132 as cs2enum);
        script4596(13133 as cs2enum);
        varbitclient_35731 = 3;
    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
        script8899(9059 as cs2enum);
        script4596(13132 as cs2enum);
        varbitclient_35731 = 2;
    };
    return;
}