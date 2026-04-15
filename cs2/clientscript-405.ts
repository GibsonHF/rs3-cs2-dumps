//[clientscript,conq_ranking_overlay_onload]
function script405(int0: component): void {
    IF_SETTRANS(255, int0);
    IF_SETONTIMER(callback(script406, -2147483645), int0);
    IF_SETTEXT(`Conquest Ranking: ${inttostring(varplayer_1660, 10)}`, int0);
    return;
}