//
function script8542(): void {
    if ((varbitplayer_20723 == 0)) {
        IF_SETHIDE(true, comp(247, 1));
        IF_SETSIZE(424, 215, 0, 0, comp(247, 22));
        IF_SETSIZE(6, 46, 1, 0, comp(247, 19));
        IF_SETTEXT("Lumbridge needs you!<br>Carry rubble and gather resources to rebuild the homes damaged by the Battle of Lumbridge!", comp(247, 20));
        IF_SETSIZE(16384, 16384, 2, 2, comp(247, 20));
        IF_SETPOSITION(0, 0, 2, 0, comp(247, 20));
    } else {
        IF_SETHIDE(false, comp(247, 1));
        IF_SETSIZE(424, 249, 0, 0, comp(247, 22));
        IF_SETSIZE(6, 80, 1, 0, comp(247, 19));
        IF_SETTEXT("Today only, you can help build a memorial to the fallen of the Battle of Lumbridge.<br>Bring stone to builder Bob between the foreman and the stockpiles.", comp(247, 20));
        IF_SETSIZE(320, 16384, 0, 2, comp(247, 20));
        IF_SETPOSITION(0, 0, 2, 0, comp(247, 20));
    };
    return;
}