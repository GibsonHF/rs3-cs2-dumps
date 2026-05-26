//
function script4004(int0: number): void {
    if ((OC_CATEGORY(int0) == 4463)) {
        IF_SETHIDE(1, 82771971);
        IF_SETHIDE(0, 82771973);
        IF_SETTEXT(`(+${inttostring(item_getparam(int0, 4810), 10)}%)`, 82771980);
    } else {
        IF_SETHIDE(0, 82771971);
        IF_SETHIDE(1, 82771973);
    };
    return;
}