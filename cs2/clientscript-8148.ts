//
function script8148(int0: number): void {
    if ((int0 == 1)) {
        if ((IF_GETNEXTSUBID(comp(1431, 5)) == 0)) {  // toplevel_v2_ribbon:window_holder
            IF_SETONTIMER(callback(script8149), comp(1431, 5));  // toplevel_v2_ribbon:window_holder
        } else {
            script8150(int0);
        };
    } else if ((IF_GETNEXTSUBID(comp(1431, 5)) != 0)) {  // toplevel_v2_ribbon:window_holder
        script8150(int0);
    };
    return;
}