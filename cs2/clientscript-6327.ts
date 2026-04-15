//
function script6327(int0: component): void {
    IF_SETTRANS(MAX((IF_GETTRANS(int0) - 20), 0), int0);
    IF_SETONTIMER(callback(script6328, -2147483645, (CLIENTCLOCK() + 2)), int0);
    return;
}