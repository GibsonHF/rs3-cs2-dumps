//
function script5497(int0: int): void {
    if ((varclient_2243 == 1)) {
        return;
    };
    if ((int0 != 0)) {
        if ((IF_FIND(comp(1177, 0)) == 1)) {
            CC_SETONTIMER(callback(script5497, (int0 - 1)));
        };
        return;
    };
    var int1 = 0;
    while ((int1 < 11)) {
        script5498(int1, comp(1177, 0));
        int1 = (int1 + 1);
    };
    script5498(-1, comp(1177, 2));
    script5498(-1, comp(1177, 3));
    script5498(-1, comp(1177, 4));
    if (((CC_FIND(comp(1177, 0), 9) == 1) && (CC_GETTRANS() == 255))) {
        script5500();
    };
    return;
}