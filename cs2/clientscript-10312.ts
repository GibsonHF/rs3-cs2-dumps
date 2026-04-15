//
function script10312(int0: unknown_int): void {
    stack(10313);
    stack(int0);
    stack("i");
    stack(int0);
    IF_SETONPLAYERGROUPTRANSMIT();
    stack(10314);
    stack(int0);
    stack("i");
    stack(int0);
    IF_SETONPLAYERGROUPVARPTRANSMIT();
    IF_SETONFRIENDTRANSMIT(callback(script10315, int0), int0);
    IF_SETONVARTRANSMIT(callback(script10317, int0, 4691, 3814, 4695, 3), int0);
    script10319(int0);
    return;
}