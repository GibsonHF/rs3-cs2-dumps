//[clientscript,clan_info_load]
function script4413(): void {
    if ((ACTIVECLANSETTINGS_FIND_LISTENED() == 1)) {
        script4415();
    } else {
        IF_SETONCLANSETTINGSTRANSMIT(callback(script4414), 72548421);
    };
    return;
}