//[clientscript,tzhaar_fightpit_foesremaining]
function script70(): void {
    if ((varplayer_3006 < 1)) {
        IF_SETTEXT("You're the Winner!", 24444928);
    } else {
        IF_SETTEXT(`Foes Remaining: ${inttostring(varplayer_3006, 10)}`, 24444928);
    };
    return;
}