//
function script10368(): void {
    var int0 = enum_getvalue(0, 0, 887 as cs2enum, varplayer_4696);
    var int1 = -1;
    if ((PLAYER_GROUP_FIND() == 1)) {
        int1 = script10275();
        if (((int1 == -1) || operator("!=", PLAYER_GROUP_GET_OWNER_SLOT(int1)))) {
            IF_SETHIDE(false, comp(1524, 116));
        } else {
            IF_SETHIDE(true, comp(1524, 116));
        };
        if ((varplayergroup_16 == int0)) {
            script10369("Rejoin the queue and combine your group with others that exist.", "Rejoin Queue");
        } else {
            script10369("Change the type of content your group has been set up for.", "Update Group");
        };
    } else {
        IF_SETHIDE(true, comp(1524, 116));
        script10369("Join a group for this content. If no groups are available you will create a new group.", "Join Queue");
    };
    return;
}