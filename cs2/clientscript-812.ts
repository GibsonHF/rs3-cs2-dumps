//
function script812(int0: obj): void {
    CC_SETHIDE(true);
    if ((int0 == -1 as obj)) {
        return;
    };
    if ((item_getparam(int0, 740) > 1)) {
        if (((script14404(int0) == 1) && (script926(int0) == 1))) {
            return;
        };
        CC_SETHIDE(false);
        return;
    };
    if ((item_getparam(int0, 740) == 1)) {
        if ((script14404(int0) == 1)) {
            return;
        };
        CC_SETHIDE(false);
        return;
    };
    if ((script928(int0) == 1)) {
        if ((script926(int0) == 1)) {
            return;
        };
        CC_SETHIDE(false);
        return;
    };
    if ((script14404(int0) == 1)) {
        return;
    };
    CC_SETHIDE(false);
    return;
}