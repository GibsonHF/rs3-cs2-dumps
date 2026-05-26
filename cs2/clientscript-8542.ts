//
function script8542(): void {
    if ((varbitplayer_20723 == 0)) {
        IF_SETHIDE(1, 16187393);
        IF_SETSIZE(424, 215, 0, 0, 16187414);
        IF_SETSIZE(6, 46, 1, 0, 16187411);
        IF_SETTEXT("Lumbridge needs you!<br>Carry rubble and gather resources to rebuild the homes damaged by the Battle of Lumbridge!", 16187412);
        IF_SETSIZE(16384, 16384, 2, 2, 16187412);
        IF_SETPOSITION(0, 0, 2, 0, 16187412);
    } else {
        IF_SETHIDE(0, 16187393);
        IF_SETSIZE(424, 249, 0, 0, 16187414);
        IF_SETSIZE(6, 80, 1, 0, 16187411);
        IF_SETTEXT("Today only, you can help build a memorial to the fallen of the Battle of Lumbridge.<br>Bring stone to builder Bob between the foreman and the stockpiles.", 16187412);
        IF_SETSIZE(320, 16384, 0, 2, 16187412);
        IF_SETPOSITION(0, 0, 2, 0, 16187412);
    };
    return;
}