//
function script8148(int0: number): void {
    if ((int0 == 1)) {
        if ((IF_GETNEXTSUBID(93782021) == 0)) {
            IF_SETONTIMER(callback(script8149), 93782021);
        } else {
            script8150(int0);
        };
    } else if ((IF_GETNEXTSUBID(93782021) != 0)) {
        script8150(int0);
    };
    return;
}