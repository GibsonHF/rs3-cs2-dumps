//
function script20821(): void {
    if (((IF_GETWIDTH(comp(1518, 7) /*house_furniture_trunk:mainmodal_window_content*/) == 0) || (CC_FIND(comp(1518, 21) /*house_furniture_trunk:mainmodal_window_border*/, 0) == 0))) {
        IF_SETONTIMER(callback(script20821), comp(1518, 7));  // house_furniture_trunk:mainmodal_window_content
        return;
    };
    varclient_8423 = varplayer_12904;
    varclient_8424 = varplayer_12905;
    varclient_8425 = varplayer_12906;
    varclient_8429 = 3;
    varbitclient_61239 = 1;
    varbitclient_61236 = 0;
    varbitclient_61237 = 0;
    IF_SETSIZE(script20789(680, 190, 0), 540, 0, 0, comp(1518, 5));  // house_furniture_trunk:mainmodal_window
    IF_SETONTIMER(callback(), comp(1518, 7));  // house_furniture_trunk:mainmodal_window_content
    script20790(99483655, 99483670, 99483658, 99483656, 99483672, 99483657, 99483673, 99483664, 99483671, 190);
    script20791(99483656);
    stack(99483657);
    script20801(varbitclient_61226, varbitclient_61227, 99483659, 99483663, 99483660, 99483661, 99483662, -1, 99483664);
    stack(99483659);
    script20806(99483663, 99483660, 99483661, 99483662, -1, varbitclient_61228, 99483664, 1);
    script20812(99483664);
    script8841(107, 1);
    return;
}