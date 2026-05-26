//
function script8501(): void {
    var int0 = MODULO((REBOOTTIMER() / 50), 60);
    var int1 = (REBOOTTIMER() / 3000);
    if ((int0 < 10)) {
        IF_SETTEXT(`System update in<br>${inttostring(int1, 10)}:0${inttostring(int0, 10)}`, 96797590);
    } else {
        IF_SETTEXT(`System update in<br>${inttostring(int1, 10)}:${inttostring(int0, 10)}`, 96797590);
    };
    if ((REBOOTTIMER() > 0)) {
        IF_SETHIDE(0, 96797588);
    } else {
        IF_SETHIDE(1, 96797588);
    };
    return;
}