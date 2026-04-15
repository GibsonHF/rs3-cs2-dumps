//
function script3400(int0: component, int1: int, int2: int): void {
    CC_SETTRANS(0);
    CC_SETONTIMER(callback(script3401, int0, int1, int2, (CLIENTCLOCK() + int2)));
    return;
}