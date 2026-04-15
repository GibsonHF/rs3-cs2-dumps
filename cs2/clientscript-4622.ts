//[clientscript,clan_noticeboard_event_mouseover]
function script4622(int0: component): void {
    if ((IF_GETGRAPHIC(int0) == 5936 as graphic)) {
        return;
    };
    stack(5933);
    stack(int0);
    IF_SETGRAPHIC();
    return;
}