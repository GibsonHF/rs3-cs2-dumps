//
function script20679(int0: number): number {
    if ((PLAYERMEMBER() == true)) {
        if (((script9850() == 17) && (script17030() == 1))) {
            IF_SETHIDE(true, comp(517, 250));  // bank:buy_booster_button
            IF_SETPOSITION(0, 0, 1, 1, comp(517, 245));  // bank:bank_space
        };
    } else if (((script20678() == 13) && (script17030() == 1))) {
        IF_SETHIDE(true, comp(517, 250));  // bank:buy_booster_button
        IF_SETPOSITION(0, 0, 1, 1, comp(517, 245));  // bank:bank_space
    };
    return;
}