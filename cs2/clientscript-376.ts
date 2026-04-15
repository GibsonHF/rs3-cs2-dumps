//
function script376(int0: unknown_int, int1: unknown_int): void {
    if (((varbitplayer_22332 == 1) || (varbitplayer_38842 == 1))) {
        stack(18859);
        stack(int0);
        IF_SETGRAPHIC();
        IF_SETOP(1, "Dock", 97648669);
        if ((IF_FIND(int1) == 1)) {
            script3927(2008);
        };
    } else {
        stack(18861);
        stack(int0);
        IF_SETGRAPHIC();
        IF_SETOP(1, "Undock", 97648669);
        if ((IF_FIND(int1) == 1)) {
            script3927(-1);
        };
    };
    return;
}