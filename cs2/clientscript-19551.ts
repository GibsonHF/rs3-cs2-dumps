//
function script19551(int0: number, int1: number): number {
    if (((int0 != 86048846) && (int0 != 86048847))) {
        return 0;
    };
    var int2 = MAX(0, (script19579() - 1));
    if (((CC_FIND(86048843, int2) == 1) && (CC_FIND[1](86048858, int2) == 1))) {
        if ((int1 == 0)) {
            if (((IF_GETX(86048850) == ((CC_GETX() + CC_GETWIDTH()) - 1)) && (IF_GETY(86048850) == (CC_GETY() - 1)))) {
                IF_SETHIDE(1, 86048850);
            };
        } else {
            IF_SETPOSITION(((CC_GETX() + CC_GETWIDTH()) - 1), (CC_GETY() - 1), 0, 0, 86048850);
            IF_SETSIZE((CC_GETWIDTH[1]() + 2), (CC_GETHEIGHT[1]() + 2), 0, 0, 86048850);
            IF_SETHIDE(0, 86048850);
            IF_SETHIDE(1, 86048852);
            IF_SETHIDE(1, 86048855);
        };
    };
    return 1;
}