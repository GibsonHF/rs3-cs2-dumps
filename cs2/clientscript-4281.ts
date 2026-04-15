//[clientscript,clan_join_invite_onload]
function script4281(): void {
    if ((ACTIVECLANSETTINGS_FIND_LISTENED() == 1)) {
        script4283();
    } else {
        IF_SETONCLANSETTINGSTRANSMIT(callback(script4282), 71761962);
    };
    return;
}