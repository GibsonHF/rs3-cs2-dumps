//
function script13017(int0: number, int1: number, int2: number): void {
    varclient_6727 = 0;
    varclient_6728 = 0;
    varclient_7339 = 0;
    varclient_7340 = 0;
    var int3 = ADDPERCENT(int0, -40);
    if ((int0 > 0)) {
        varclient_6727 = (int3 / 60);
        varclient_6728 = MODULO(int3, 60);
    };
    int3 = ADDPERCENT(int1, -40);
    if ((int1 > 0)) {
        varclient_7339 = (int3 / 60);
        varclient_7340 = MODULO(int3, 60);
    };
    if (((int2 == 0) && ((int0 + int1) > 0))) {
        IF_SETONTIMER(callback(script18163), 38273032);
    };
    script12262(int2);
    IF_SETTEXT(script18166(), 38273032);
    script18167(0);
    if ((MAP_MEMBERS() == 0)) {
        IF_SETTEXT("1.2x<br>XP", 38273026);
    } else {
        IF_SETTEXT("2x<br>XP", 38273026);
    };
    return;
}