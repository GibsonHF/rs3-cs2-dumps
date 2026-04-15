//
function script2149(int0: quest): unknown_int {
    if ((int0 == -1 as quest)) {
        return 0;
    };
    if ((script2154(int0) == 0)) {
        return 0;
    };
    if ((varplayer_1297 < QUEST_POINTSREQ(int0))) {
        return 0;
    };
    if ((varclient_698 < quest_getparam(int0, 7859))) {
        return 0;
    };
    if ((script4035() < quest_getparam(int0, 7860))) {
        return 0;
    };
    if ((script2152(int0) == 0)) {
        return 0;
    };
    if (((quest_getparam(int0, 7862) == true) && (script2194(int0) == 0))) {
        return 0;
    };
    if (((quest_getparam(int0, 7861) == true) && (varbitplayer_9663 == 0))) {
        return 0;
    };
    return 1;
}