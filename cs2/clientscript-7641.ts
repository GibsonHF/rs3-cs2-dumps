//
function script7641(int0: component, int1: unknown_int): void {
    if (((varclient_2746 != 0) && (varclient_2746 != 1))) {
        varclient_2746 = 0;
    };
    if (((IF_GETGRAPHIC(int0) != 16926 as graphic) && (IF_GETGRAPHIC(int0) != 16928 as graphic))) {
        script7643(int0, int1, 1);
        script8808();
    } else {
        script7643(int0, int1, 0);
    };
    return;
}