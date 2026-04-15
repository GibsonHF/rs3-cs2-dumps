//
function script16576(int0: struct, int1: int): void {
    if (((((int0 != -1 as struct) && (struct_getparam(int0, 3534) != -1)) && (int1 != 32)) && (script15851(int1) == 0))) {
        if (((varbitclient_38843 > 0) && (varbitclient_38843 != (int1 + 1)))) {
            script8323((varbitclient_38843 - 1), 1);
        };
        varbitclient_38843 = (int1 + 1);
        if ((((varplayer_7879 == 1) && (varbitplayer_51268 == 1)) && (IF_GETHEIGHT(comp(1924, 94)) > (((IF_GETHEIGHT(comp(1477, 60)) - 410) - IF_GETHEIGHT(comp(276, 16))) - 10)))) {
            IF_SETSIZE(250, (IF_GETHEIGHT(comp(1477, 60)) - IF_GETHEIGHT(comp(1924, 94))), 0, 1, struct_getparam(int0, 3503));
        } else if (((IF_GETHEIGHT(comp(1477, 60)) - IF_GETHEIGHT(comp(276, 16))) < 410)) {
            IF_SETSIZE(250, IF_GETHEIGHT(comp(276, 16)), 0, 1, struct_getparam(int0, 3503));
        } else {
            IF_SETSIZE(250, 410, 0, 0, struct_getparam(int0, 3503));
        };
        script2638();
    };
    return;
}