//
function script19820(): void {
    if ((varplayer_12086 == varbitplayer_57205)) {
        script13971(comp(691, 193), comp(691, 194), 28554 as struct, "Active Loadout", true);
        IF_SETHIDE(true, comp(691, 21));
    } else {
        script13969(comp(691, 193), comp(691, 194), 28554 as struct, "Activate Loadout");
        IF_SETHIDE(false, comp(691, 21));
        IF_SETTEXT(`${TOSTRING_LOCALISED(script19774(), 1)} chronote activation cost`, comp(691, 196));
    };
    return;
}