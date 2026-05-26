//
function script1953(int0: number, int1: number): void {
    IF_SETTRANS(40, int0);
    IF_SETONTIMER(callback(script1955, int0, int1, CLIENTCLOCK()), int0);
    return;
}