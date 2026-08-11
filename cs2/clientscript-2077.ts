//
function script2077(): void {
    var int0 = 0;
    var int1 = 0;
    if ((varclient_632 == 0)) {
        int0 = (3 - varclient_635);
        if ((int0 == 1)) {
            IF_SETTEXT(`New game:<br><col=FFFFFF>${inttostring(int0, 10)}</col> min`, comp(837, 8));  // snp_waiting_room:text_next_game_count
        } else {
            IF_SETTEXT(`New game:<br><col=FFFFFF>${inttostring(int0, 10)}</col> mins`, comp(837, 8));  // snp_waiting_room:text_next_game_count
        };
    } else {
        int1 = (20 - varclient_636);
        int0 = (int1 + 3);
        IF_SETTEXT(`New game:<br><col=FFFFFF>${inttostring(int0, 10)}</col> mins`, comp(837, 8));  // snp_waiting_room:text_next_game_count
    };
    return;
}