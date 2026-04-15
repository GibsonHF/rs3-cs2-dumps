//
function script8273(int0: component): void {
    if ((varclient_1000 > COMLEVEL_ACTIVE())) {
        IF_SETTEXT(`${inttostring(COMLEVEL_ACTIVE(), 10)}+${inttostring((varclient_1000 - COMLEVEL_ACTIVE()), 10)}`, int0);
    } else {
        IF_SETTEXT(inttostring(COMLEVEL_ACTIVE(), 10), int0);
    };
    return;
}