//[proc,clan_noticeboard_event_mouseleave]
function script4624(int0: number, int1: number): void {
    if ((IF_GETGRAPHIC(int0) == 5936 as graphic)) {
        return;
    };
    if ((int1 == varplayer_2047)) {
        IF_SETGRAPHIC(5935 as graphic, int0);
    } else {
        IF_SETGRAPHIC(5932 as graphic, int0);
    };
    return;
}