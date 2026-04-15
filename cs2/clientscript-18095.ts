//
function script18095(): void {
    var int0 = script17853();
    if ((varplayer_11339 != int0)) {
        script12478("Opening Splash on a pass which isn't the current.");
        return;
    };
    if ((script17912() == 1)) {
        script18096(2, 0);
        if ((script11939() == 1)) {
            IF_SETPOSITION(0, 15, 1, 2, comp(1228, 7));
            IF_SETHIDE(true, comp(1228, 6));
        } else {
            script18096(1, 1);
        };
    } else if ((script17862(7906 as dbrow) < script17890(int0))) {
        script18096(1, 3);
        script18096(2, 2);
    } else {
        script18096(1, 2);
        script18096(2, -1);
    };
    var int1 = comp(1228, 4);
    CC_DELETEALL(int1);
    script7857(int1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7978 as dbrow, "");
    CC_SETOP(1, "Close");
    return;
}