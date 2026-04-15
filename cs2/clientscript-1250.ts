//
function script1250(): void {
    IF_SETONTIMER(callback(script1251, (CLIENTCLOCK() + 5)), comp(64, 7));
    return;
}