//
function script1461(int0: component): void {
    if (((varclient_6348 != 0) && (varclient_6348 != 1))) {
        varclient_6348 = varbitplayer_38905;
    };
    if ((varclient_6348 == 0)) {
        IF_SETOP(1, "Loop", int0);
    } else {
        IF_SETOP(1, "Unloop", int0);
    };
    if (((IF_GETGRAPHIC(int0) != 32099 as graphic) && (IF_GETGRAPHIC(int0) != 32101 as graphic))) {
        script1453(int0);
    } else {
        script1450(int0);
    };
    return;
}