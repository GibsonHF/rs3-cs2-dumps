//[clientscript,clanwars_setup_acceptlayer]
function script1800(int0: component): void {
    script13993(int0, comp(-1, 65535), 28556 as struct, "Accept");
    if ((varplayer_1384 != -1 as player_uid)) {
        script1801();
    } else {
        script1802();
    };
    return;
}