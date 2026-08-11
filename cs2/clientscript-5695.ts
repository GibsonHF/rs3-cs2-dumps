//
function script5695(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int0, int1, int2, int3] = VIEWPORT_GETBOUNDS();
    if ((varclient_6403 == 0)) {
        IF_SETSIZE(0, 0, 1, 1, comp(387, 0));  // chat_v3_choice:chat_v3_choice_holder
        IF_SETSIZE(0, 0, 1, 1, comp(327, 0));  // chat_v3:chat_v3
        IF_SETPOSITION(0, 0, 0, 0, comp(387, 0));  // chat_v3_choice:chat_v3_choice_holder
        IF_SETPOSITION(0, 0, 0, 0, comp(327, 0));  // chat_v3:chat_v3
    } else {
        IF_SETSIZE(int2, int3, 0, 0, comp(387, 0));  // chat_v3_choice:chat_v3_choice_holder
        IF_SETSIZE(int2, int3, 0, 0, comp(327, 0));  // chat_v3:chat_v3
        IF_SETPOSITION(int0, int1, 0, 0, comp(387, 0));  // chat_v3_choice:chat_v3_choice_holder
        IF_SETPOSITION(int0, int1, 0, 0, comp(327, 0));  // chat_v3:chat_v3
    };
    return;
}