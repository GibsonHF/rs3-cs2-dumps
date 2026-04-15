//
function script14148(int0: unknown_int): unknown_int {
    if ((CAM2_GETCONTROLMODE() != 1)) {
        return 1;
    };
    if ((varclient_3824 == 1)) {
        return 1;
    };
    if ((varclient_173 == 1)) {
        if (((((int0 == 2) && (script15536() == 7)) && (script15532(0) == 1)) && (varbitplayer_49044 == 10))) {
            return 0;
        };
        return 1;
    };
    if (((varbitplayer_3028 == 1) && (varbitplayer_3031 != 1))) {
        return 1;
    };
    if ((script14245() == 1)) {
        return 1;
    };
    if ((script7942() == 1)) {
        return 1;
    };
    return 0;
}