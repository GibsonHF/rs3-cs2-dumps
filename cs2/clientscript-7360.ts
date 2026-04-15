//
function script7360(int0: int, int1: component): void {
    if ((int1 != comp(-1, 65535))) {
        IF_SETHIDE(true, int1);
    };
    CC_SETTRANS(255);
    CC_SETONTIMER(callback(script13583, CC_GETLAYER(), CC_GETID(), (CLIENTCLOCK() + int0), int1));
    return;
}