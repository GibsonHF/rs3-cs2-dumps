//
function script376(int0: number, int1: number): void {
    if (((varbitplayer_22332 == 1) || (varbitplayer_38842 == 1))) {
        IF_SETGRAPHIC(18859, int0);
        IF_SETOP(1, "Dock", 97648669);
        if ((IF_FIND(int1) == 1)) {
            script3927(2008);
        };
    } else {
        IF_SETGRAPHIC(18861, int0);
        IF_SETOP(1, "Undock", 97648669);
        if ((IF_FIND(int1) == 1)) {
            script3927(-1);
        };
    };
    return;
}