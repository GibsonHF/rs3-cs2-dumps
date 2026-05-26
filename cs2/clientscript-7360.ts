//
function script7360(int0: number, int1: number): void {
    if ((int1 != -1)) {
        IF_SETHIDE(1, int1);
    };
    CC_SETTRANS(255);
    CC_SETONTIMER(callback(script13583, CC_GETLAYER(), CC_GETID(), (CLIENTCLOCK() + int0), int1));
    return;
}