//[clientscript,clan_noticeboard_event_mouseover]
function script4622(int0: number): void {
    if ((IF_GETGRAPHIC(int0) == 5936 as graphic)) {
        return;
    };
    IF_SETGRAPHIC(5933 as graphic, int0);
    return;
}