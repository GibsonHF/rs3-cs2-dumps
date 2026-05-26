//[proc,clan_noticeboard_event_mouseleave]
function script4624(int0: number, int1: number): void {
    if ((IF_GETGRAPHIC(int0) == 5936)) {
        return;
    };
    if ((int1 == varplayer_2047)) {
        stack(5935);
        stack(int0);
        IF_SETGRAPHIC();
    } else {
        stack(5932);
        stack(int0);
        IF_SETGRAPHIC();
    };
    return;
}