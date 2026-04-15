//
function script8148(int0: unknown_int): void {
    if ((int0 == 1)) {
        if ((IF_GETNEXTSUBID(comp(1431, 5)) == 0)) {
            IF_SETONTIMER(callback(script8149), comp(1431, 5));
        } else {
            script8150(int0);
        };
    } else if ((IF_GETNEXTSUBID(comp(1431, 5)) != 0)) {
        script8150(int0);
    };
    return;
}