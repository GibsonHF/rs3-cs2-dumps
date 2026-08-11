//
function script10793(): void {
    CC_DELETEALL(comp(1560, 17));  // player_inspect:ragdoll_layer
    var string0 = "This player has Privacy mode activated. You will only see worn items based on their cosmetic appearance.";
    if ((varplayer_4985 == 1)) {
        CC_CREATE(comp(1560, 17), 5, IF_GETNEXTSUBID(comp(1560, 17)));  // player_inspect:ragdoll_layer
        CC_SETGRAPHIC(24783 as graphic);
        CC_SETPOSITION(14, 5, 0, 0);
        CC_SETSIZE(19, 19, 0, 0);
        script14990(2, string0);
    };
    return;
}