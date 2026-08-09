//
function script10312(int0: number): void {
    stack(callback(script10313, int0));
    stack(int0);
    IF_SETONPLAYERGROUPTRANSMIT();
    stack(callback(script10314, int0));
    stack(int0);
    IF_SETONPLAYERGROUPVARPTRANSMIT();
    IF_SETONFRIENDTRANSMIT(callback(script10315, int0), int0);
    IF_SETONVARTRANSMIT(callback(script10317, int0, 4691, 3814, 4695, 3), int0);
    script10319(int0);
    return;
}