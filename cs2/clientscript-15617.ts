//
function script15617(string0: string): void {
    if ((varclient_1271 > (CLIENTCLOCK() - 100))) {
        return;
    };
    printmessage(string0);
    varclient_1271 = CLIENTCLOCK();
    return;
}