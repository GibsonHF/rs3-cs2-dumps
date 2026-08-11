//
function script17315(int0: number, int1: number, int2: number, string0: string): void {
    if ((int1 <= 0)) {
        script17317(int2, string0);
        if ((int0 == comp(1152, 32))) {  // trh192_overlay:character_model
            varbitplayer_52882 = 0;
            IF_SETNPCMODEL(script17310(0), comp(1152, 32));  // trh192_overlay:character_model
            IF_SETMODELANIM(35288 as seq, int0);
        };
        IF_SETONTIMER(callback(), int0);
        varbitplayer_52884 = 0;
    } else {
        IF_SETONTIMER(callback(script17315, int0, (int1 - 1), int2, string0), int0);
    };
    return;
}