//[clientscript,tzhaar_fightpit_foesremaining]
function script70(): void {
    if ((varplayer_3006 < 1)) {
        IF_SETTEXT("You're the Winner!", comp(373, 0));
    } else {
        IF_SETTEXT(`Foes Remaining: ${inttostring(varplayer_3006, 10)}`, comp(373, 0));
    };
    return;
}