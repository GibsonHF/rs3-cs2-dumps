//
function script8148(int0: number): void {
    if ((int0 == 1)) {
        if ((IF_GETNEXTSUBID(comp(1431, 2)) == 0)) {  // toplevel_v2_ribbon:quickchild_listener
            IF_SETONTIMER(callback(script8149), comp(1431, 2));  // toplevel_v2_ribbon:quickchild_listener
        } else {
            script8150(int0);
        };
    } else if ((IF_GETNEXTSUBID(comp(1431, 2)) != 0)) {  // toplevel_v2_ribbon:quickchild_listener
        script8150(int0);
    };
    return;
}