//
function script13322(int0: int, int1: component): void {
    if ((int1 != comp(-1, 65535))) {
        IF_SETHIDE(true, int1);
    };
    CC_SETTRANS(0);
    CC_SETONTIMER(callback(script15372, CC_GETLAYER(), CC_GETID(), (CLIENTCLOCK() + int0), int1));
    return;
}