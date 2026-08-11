//
function script5482(): void {
    var int0 = ((65535 * varbitplayer_12312) / 60);
    IF_SET2DANGLE(int0, comp(1175, 8));  // opn_clock:minute_hand
    var int1 = (((65535 * varbitplayer_12312) / 60) / 12);
    IF_SET2DANGLE(int1, comp(1175, 9));  // opn_clock:hour_hand
    return;
}