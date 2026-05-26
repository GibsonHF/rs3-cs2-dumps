//[clientscript,clanwars_setup_acceptlayer]
function script1800(int0: number): void {
    script13993(int0, -1, 28556, "Accept");
    if ((varplayer_1384 != -1 as player_uid)) {
        script1801();
    } else {
        script1802();
    };
    return;
}