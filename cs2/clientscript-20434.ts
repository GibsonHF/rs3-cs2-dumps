//
function script20434(): void {
    varplayer_12541 = 0;
    script20435();
    IF_SETSCROLLPOS(0, 0, comp(1802, 256));  // timed_event:anniversary_skillcapes_skill_list_buttons
    script20440(varbitplayer_60369);
    script20444();
    IF_SETONVARTRANSMIT(callback(script20438, 12541, 12540, 2), comp(1802, 255));  // timed_event:anniversary_skillcapes_skill_list_layer
    return;
}