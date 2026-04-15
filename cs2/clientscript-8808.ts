//
function script8808(): void {
    var int0 = script10075();
    var int1 = script10076();
    IF_SETONTIMER(callback(), int0);
    IF_SETPARAM_INT(4145, -1, int1);
    if (((IF_HASSUB(int0) == 1) || (varclient_2 == 1))) {
        IF_CLOSESUBCLIENT(int0);
        varclient_2 = 0;
        script7789(25);
    };
    IF_SETHIDE(true, comp(1477, 911));
    return;
}