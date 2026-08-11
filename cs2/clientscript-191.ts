//
function script191(): void {
    if (((varclient_3693 == 1) || (varbitplayer_28881 == 1))) {
        return;
    };
    IF_SETHIDE(false, comp(279, 6));  // mobile_ribbon_left:chat_wrapper
    var int0 = script10405(18);
    IF_SETPOSITION(0, 82, 0, 0, struct_getparam(int0, 3503));
    IF_SETSIZE(300, 100, 0, 0, struct_getparam(int0, 3503));
    script9292();
    script15881();
    IF_SETHIDE(false, struct_getparam(int0, 3503));
    return;
}