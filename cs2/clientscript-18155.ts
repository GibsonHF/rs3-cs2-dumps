//
function script18155(): [unknown_int, string] {
    if ((script18151() == 0)) {
        return [0, "You have no rewards to collect."];
    };
    if (((INV_FREESPACE(93 as inv) == 0) && (script5774() == 0))) {
        return [0, "Your bank and backpack are too full to collect rewards."];
    };
    if ((varbitplayer_52723 == 1)) {
        return [1, "Collect all progress rewards you have unlocked."];
    };
    return [1, "Collect all weekly progress rewards you have unlocked."];
}