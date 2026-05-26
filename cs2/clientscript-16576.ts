//
function script16576(int0: number, int1: number): void {
    if (((((int0 != -1) && (struct_getparam(int0, 3534) != -1)) && (int1 != 32)) && (script15851(int1) == 0))) {
        if (((varbitclient_38843 > 0) && (varbitclient_38843 != (int1 + 1)))) {
            script8323((varbitclient_38843 - 1), 1);
        };
        varbitclient_38843 = (int1 + 1);
        if ((((varplayer_7879 == 1) && (varbitplayer_51268 == 1)) && (IF_GETHEIGHT(126091358) > (((IF_GETHEIGHT(96796732) - 410) - IF_GETHEIGHT(18087952)) - 10)))) {
            IF_SETSIZE(250, (IF_GETHEIGHT(96796732) - IF_GETHEIGHT(126091358)), 0, 1, struct_getparam(int0, 3503));
        } else if (((IF_GETHEIGHT(96796732) - IF_GETHEIGHT(18087952)) < 410)) {
            IF_SETSIZE(250, IF_GETHEIGHT(18087952), 0, 1, struct_getparam(int0, 3503));
        } else {
            IF_SETSIZE(250, 410, 0, 0, struct_getparam(int0, 3503));
        };
        script2638();
    };
    return;
}