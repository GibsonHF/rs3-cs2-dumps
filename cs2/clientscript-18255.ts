//
function script18255(): void {
    var int0 = script18160(varplayer_3233);
    var int1 = script16319(int0);
    IF_SETHIDE(true, comp(1343, 60));  // jobs_main:reroll_layer
    IF_SETHIDE(true, comp(1343, 61));  // jobs_main:extend_layer
    if ((varbitplayer_50552 > 0)) {
        script18256(int1, int0, 88015029, 88015026);
    } else {
        IF_SETHIDE(true, comp(1343, 62));  // jobs_main:currency_layer
        IF_SETSIZE(0, 290, 1, 0, comp(1343, 43));  // jobs_main:objectives_layer
        IF_SETSIZE(0, 125, 1, 0, comp(1343, 48));  // jobs_main:objectives_progress_layer
        IF_SETPOSITION(0, 140, 1, 0, comp(1343, 56));  // jobs_main:rewards_layer
        IF_SETSIZE(0, 125, 1, 0, comp(1343, 56));  // jobs_main:rewards_layer
    };
    return;
}