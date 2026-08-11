//
function script10910(int0: number): void {
    IF_SETHIDE(false, comp(1579, 21));  // thedrop:disabled_answer1
    IF_SETHIDE(false, comp(1579, 40));  // thedrop:disabled_answer2
    IF_SETHIDE(false, comp(1579, 48));  // thedrop:disabled_answer3
    IF_SETHIDE(false, comp(1579, 56));  // thedrop:disabled_answer4
    IF_SETHIDE(false, comp(1579, 64));  // thedrop:disabled_answer5
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(1579, 19));  // thedrop:selected_answer1
            IF_SETHIDE(true, comp(1579, 21));  // thedrop:disabled_answer1
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1579, 38));  // thedrop:selected_answer2
            IF_SETHIDE(true, comp(1579, 40));  // thedrop:disabled_answer2
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1579, 46));  // thedrop:selected_answer3
            IF_SETHIDE(true, comp(1579, 48));  // thedrop:disabled_answer3
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1579, 54));  // thedrop:selected_answer4
            IF_SETHIDE(true, comp(1579, 56));  // thedrop:disabled_answer4
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1579, 62));  // thedrop:selected_answer5
            IF_SETHIDE(true, comp(1579, 64));  // thedrop:disabled_answer5
            break;
        }
    };
    return;
}