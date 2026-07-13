//
function script20757(): void {
    if (((IF_GETWIDTH(comp(1516, 8)) == 0) || (CC_FIND(comp(1516, 29), 0) == 0))) {
        IF_SETONTIMER(callback(script20757), comp(1516, 8));
        return;
    };
    varclient_8423 = varplayer_12904;
    varclient_8424 = varplayer_12905;
    varclient_8425 = varplayer_12906;
    varclient_8429 = 1;
    IF_SETSIZE(script20789(680, 252, 0), 540, 0, 0, comp(1516, 6));
    IF_SETONTIMER(callback(), comp(1516, 8));
    script20790(99352584, 99352606, 99352587, 99352585, 99352608, 99352586, 99352609, 99352588, 99352607, 252);
    script20791(99352585);
    script20801(99352586, varbitclient_61226, varbitclient_61227, 99352600, 99352604, 99352601, 99352602, 99352603, 99352588);
    script20769();
    script20806(99352600, 99352604, 99352601, 99352602, 99352603, varbitclient_61228, 99352588, 1);
    script20812(99352588);
    script8841(105, 1);
    return;
}