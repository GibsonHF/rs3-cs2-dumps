//
function script1213(int0: int): void {
    var int1 = 0;
    var int2 = script15709(1);
    if ((int0 == 0)) {
        while ((int1 < 16)) {
            script5498(int1, int2);
            int1 = (int1 + 1);
        };
        if (((CC_FIND(int2, 9) == 1) && (CC_GETTRANS() == 255))) {
            script5500();
        };
    } else if ((IF_FIND(int2) == 1)) {
        CC_SETONTIMER(callback(script1213, (int0 - 1)));
    };
    return;
}