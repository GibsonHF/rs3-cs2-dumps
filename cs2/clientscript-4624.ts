//[proc,clan_noticeboard_event_mouseleave]
function script4624(int0: component, int1: int): void {
    if ((IF_GETGRAPHIC(int0) == 5936 as graphic)) {
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