//
function script7936(int0: int): void {
    unk11047(10);
    varclient_3488 = int0;
    if ((varclient_3488 == 2)) {
        script7934(2);
    } else if ((varclient_3488 == 3)) {
        script7934(3);
    } else {
        script7934(4);
    };
    script7932();
    script15555();
    script15579();
    if ((script13749() == false)) {
        IF_SETHIDE(true, comp(1420, 163));
        IF_SETPOSITION(0, 150, 1, 0, comp(1420, 43));
        IF_SETPOSITION(-80, 0, 2, 1, comp(1420, 44));
    } else {
        IF_SETPOSITION(-250, 0, 1, 1, comp(1420, 44));
        IF_SETPOSITION(0, 0, 2, 1, comp(1420, 62));
    };
    IF_OPENSUBCLIENT(comp(1420, 183), 882);
    IF_SETHIDE(true, comp(1420, 183));
    script15063(true);
    script14987(0);
    return;
}