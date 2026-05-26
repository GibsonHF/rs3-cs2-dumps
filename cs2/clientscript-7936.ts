//
function script7936(int0: number): void {
    unk11046(10);
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
    if ((script13749() == 0)) {
        IF_SETHIDE(1, 93061283);
        IF_SETPOSITION(0, 150, 1, 0, 93061163);
        IF_SETPOSITION(-80, 0, 2, 1, 93061164);
    } else {
        IF_SETPOSITION(-250, 0, 1, 1, 93061164);
        IF_SETPOSITION(0, 0, 2, 1, 93061182);
    };
    IF_OPENSUBCLIENT(93061303, 882);
    IF_SETHIDE(1, 93061303);
    script15063(1);
    script14987(0);
    return;
}