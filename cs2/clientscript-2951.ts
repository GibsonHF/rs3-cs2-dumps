//[clientscript,login_popup_throbber]
function script2951(int0: number): void {
    varclient_1882 = 1;
    var int1 = script2948();
    if (((((PLATFORMTYPE() != 1) && (int1 != -3)) && (int1 != 42)) && (int1 != 43))) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    varclient_1092 = (CLIENTCLOCK() + 5);
    if ((((int0 != -1) && (CC_FIND(int0, 1) == 1)) && (CC_GETGRAPHIC() == 18963))) {
        CC_SET2DANGLE(MODULO((CC_GET2DANGLE() - 1872), 65536));
    };
    return;
}