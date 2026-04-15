//
function script1953(int0: component, int1: unknown_int): void {
    IF_SETTRANS(40, int0);
    IF_SETONTIMER(callback(script1955, int0, int1, CLIENTCLOCK()), int0);
    return;
}