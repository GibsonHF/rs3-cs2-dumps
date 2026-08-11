//
function script376(int0: number, int1: number): void {
    if (((varbitplayer_22332 == 1) || (varbitplayer_38842 == 1))) {
        IF_SETGRAPHIC(18859 as graphic, int0);
        IF_SETOP(1, "Dock", comp(1490, 29));  // toplevel_v2_target_info:docking_padlock
        if ((IF_FIND(int1) == 1)) {
            script3927(2008);
        };
    } else {
        IF_SETGRAPHIC(18861 as graphic, int0);
        IF_SETOP(1, "Undock", comp(1490, 29));  // toplevel_v2_target_info:docking_padlock
        if ((IF_FIND(int1) == 1)) {
            script3927(-1);
        };
    };
    return;
}