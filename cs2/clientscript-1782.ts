//[proc,clanwars_resynch_accept]
function script1782(): void {
    if ((varplayer_1384 != -1 as player_uid)) {
        script1801();
        if ((varclient_258 == false)) {
            if ((varclient_259 == false)) {
                script13993(comp(791, 15), comp(-1, 65535), 28556 as struct, "Accept");
            } else {
                script13993(comp(791, 15), comp(-1, 65535), 28556 as struct, "Accept -<br>Opponent accepted.");
            };
        } else {
            script13993(comp(791, 15), comp(-1, 65535), 28556 as struct, "Waiting for opponent...");
        };
    } else {
        script1802();
    };
    return;
}