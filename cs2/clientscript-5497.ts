//
function script5497(int0: number): void {
    if ((varclient_2243 == 1)) {
        return;
    };
    if ((int0 != 0)) {
        if ((IF_FIND(comp(1177, 0)) == 1)) {  // info_box:mainlayer
            CC_SETONTIMER(callback(script5497, (int0 - 1)));
        };
        return;
    };
    var int1 = 0;
    while ((int1 < 11)) {
        script5498(int1, 77135872);
        int1 = (int1 + 1);
    };
    script5498(-1, 77135874);
    script5498(-1, 77135875);
    script5498(-1, 77135876);
    if (((CC_FIND(comp(1177, 0), 9) == 1) && (CC_GETTRANS() == 255))) {  // info_box:mainlayer
        script5500();
    };
    return;
}