//
function script13883(int0: number, int1: number, int2: number): void {
    if ((varclient_6708 == 1)) {
        return;
    };
    if ((varclient_6707 < 0)) {
        IF_SETHIDE(1, 33882321);
        IF_SETHIDE(1, 33882319);
        return;
    };
    if ((script13884(int0, int1, int2) == 1)) {
        return;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        IF_SETHIDE(1, 33882321);
        if ((int2 == 0)) {
            if (((IF_GETX(33882321) == (CC_GETX() - 1)) && (IF_GETY(33882321) == (CC_GETY() - 1)))) {
                IF_SETHIDE(1, 33882321);
            };
        } else {
            if ((int0 != 33882329)) {
                IF_SETHIDE(1, 33882323);
                IF_SETHIDE(1, 33882326);
            } else if ((varclient_6707 < int1)) {
                IF_SETHIDE(1, 33882323);
                IF_SETHIDE(0, 33882326);
            } else {
                IF_SETHIDE(0, 33882323);
                IF_SETHIDE(1, 33882326);
            };
            IF_SETPOSITION((CC_GETX() - 1), (CC_GETY() - 1), 0, 0, 33882321);
            IF_SETSIZE((CC_GETWIDTH() + 2), (CC_GETHEIGHT() + 2), 0, 0, 33882321);
            IF_SETHIDE(0, 33882321);
        };
    };
    return;
}