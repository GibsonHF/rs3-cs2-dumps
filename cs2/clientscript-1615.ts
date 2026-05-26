//[clientscript,inventory_targetmode]
function script1615(int0: number, int1: number, int2: number): void {
    if ((int0 == 1)) {
        if ((INV_GETOBJ(93, int2) == -1)) {
            if ((CC_FIND(int1, int2) == 1)) {
                CC_SETONTIMER(callback(script791, int1, int2, (CLIENTCLOCK() + 5)));
            };
            return;
        };
        if ((CC_FIND(int1, int2) == 1)) {
            CC_SETOUTLINE(2);
            if ((CC_GETTRANS() != 0)) {
                CC_SETONTIMER(callback(script1621, int1, int2, 0, 8));
            } else {
                CC_SETONTIMER(callback());
            };
        };
        varclient_1031 = (1 + int2);
    } else {
        if ((CC_FIND(int1, int2) == 1)) {
            CC_SETOUTLINE(1);
            if ((CC_GETTRANS() != 0)) {
                CC_SETONTIMER(callback(script1621, int1, int2, 0, 8));
            } else {
                CC_SETONTIMER(callback());
            };
        };
        varclient_1031 = 0;
    };
    return;
}