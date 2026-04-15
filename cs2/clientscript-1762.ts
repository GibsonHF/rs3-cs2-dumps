//[clientscript,brew_time]
function script1762(int0: component): void {
    if ((varclient_231 > 6)) {
        IF_SETTEXT(`Time Left : ${inttostring((varclient_231 - 5), 10)} mins`, int0);
    } else if ((varclient_231 == 6)) {
        IF_SETTEXT("Time Left : 1 min", int0);
    } else {
        IF_SETTEXT("Time Left : 0 mins", int0);
    };
    return;
}