//
function script9261(): void {
    varplayer_138 = -1;
    varplayer_139 = -1;
    varplayer_135 = -1 as obj;
    varclient_2250 = "";
    script15049();
    IF_SETSIZE(0, 246, 1, 1, comp(105, 10));  // stockmarket:offerchoosetype0 ?
    IF_SETONTIMER(callback(), comp(105, 10));  // stockmarket:offerchoosetype0 ?
    script621();
    return;
}