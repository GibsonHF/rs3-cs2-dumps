//
function script16919(): void {
    if ((MAP_WORLD() <= 0)) {
        IF_SETTEXT("World: Auto", comp(906, 63));  // lobbyscreen:current_text
        IF_SETHIDE(true, comp(906, 64));  // lobbyscreen:current_icon
        IF_SETCOLOUR(15777401, comp(906, 63));  // lobbyscreen:current_text
        IF_SETTEXTALIGN(1, 1, 0, comp(906, 63));  // lobbyscreen:current_text
        return;
    };
    var int0 = WORLDLIST_SPECIFIC_THISWORLD();
    if ((TESTBIT(int0, 24) == 1)) {
        IF_SETGRAPHIC(script20124(), comp(906, 64));  // lobbyscreen:current_icon
        IF_SETHIDE(false, comp(906, 64));  // lobbyscreen:current_icon
    } else {
        if ((TESTBIT(int0, 0) == 1)) {
            IF_SETGRAPHIC(23835 as graphic, comp(906, 64));  // lobbyscreen:current_icon
            IF_SETCOLOUR(15777401, comp(906, 63));  // lobbyscreen:current_text
        } else {
            IF_SETGRAPHIC(23837 as graphic, comp(906, 64));  // lobbyscreen:current_icon
            IF_SETCOLOUR(16777215, comp(906, 63));  // lobbyscreen:current_text
        };
        IF_SETHIDE(false, comp(906, 64));  // lobbyscreen:current_icon
    };
    IF_SETTEXT(`World ${inttostring(MAP_WORLD(), 10)}`, comp(906, 63));  // lobbyscreen:current_text
    script3064(1);
    return;
}