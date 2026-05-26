//[proc,clanwars_resynch_accept]
function script1782(): void {
    if ((varplayer_1384 != -1 as player_uid)) {
        script1801();
        if ((varclient_258 == false)) {
            if ((varclient_259 == false)) {
                script13993(51838991, -1, 28556, "Accept");
            } else {
                script13993(51838991, -1, 28556, "Accept -<br>Opponent accepted.");
            };
        } else {
            script13993(51838991, -1, 28556, "Waiting for opponent...");
        };
    } else {
        script1802();
    };
    return;
}