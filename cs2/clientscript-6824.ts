//
function script6824(int0: number): void {
    script6829();
    if ((int0 == 0)) {
        IF_SETONTIMER(callback(script6825, CLIENTCLOCK(), 88539196), 88539196);
        IF_SETONTIMER(callback(script6825, CLIENTCLOCK(), 88539197), 88539197);
    } else if ((int0 == 1)) {
        IF_SETONTIMER(callback(script6827, CLIENTCLOCK(), 88539196), 88539196);
        IF_SETONTIMER(callback(script6826, CLIENTCLOCK(), 88539197), 88539197);
    } else if ((int0 == 2)) {
        IF_SETONTIMER(callback(script6826, CLIENTCLOCK(), 88539196), 88539196);
        IF_SETONTIMER(callback(script6827, CLIENTCLOCK(), 88539197), 88539197);
    };
    return;
}