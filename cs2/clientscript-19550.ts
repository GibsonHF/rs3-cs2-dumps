//
function script19550(int0: number, int1: number, int2: number): void {
    if ((varclient_6708 == 1)) {
        return;
    };
    if ((varclient_6707 < 0)) {
        IF_SETHIDE(1, 86048850);
        IF_SETHIDE(1, 86048848);
        return;
    };
    if ((script19551(int0, int2) == 1)) {
        return;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        IF_SETHIDE(1, 86048850);
        if ((int2 == 0)) {
            if (((IF_GETX(86048850) == (CC_GETX() - 1)) && (IF_GETY(86048850) == (CC_GETY() - 1)))) {
                IF_SETHIDE(1, 86048850);
            };
        } else {
            if ((int0 != 86048858)) {
                IF_SETHIDE(1, 86048852);
                IF_SETHIDE(1, 86048855);
            } else if ((varclient_6707 < int1)) {
                IF_SETHIDE(1, 86048852);
                IF_SETHIDE(0, 86048855);
            } else {
                IF_SETHIDE(0, 86048852);
                IF_SETHIDE(1, 86048855);
            };
            IF_SETPOSITION((CC_GETX() - 1), (CC_GETY() - 1), 0, 0, 86048850);
            IF_SETSIZE((CC_GETWIDTH() + 2), (CC_GETHEIGHT() + 2), 0, 0, 86048850);
            IF_SETHIDE(0, 86048850);
        };
    };
    return;
}