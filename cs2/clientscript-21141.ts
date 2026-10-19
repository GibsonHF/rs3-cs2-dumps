//
function script21141(): void {
    varclient_8512 = -1;
    unk10992("Search...", -1701144064, 255, int1);
    if ((STRING_LENGTH(varclient_8500) > 0)) {
        IF_SETTEXT(varclient_8500, int1);
    };
    if ((varclient_8499 == -1)) {
        varclient_8499 = 0;
    };
    stack(int0);
    stack(1);
    script21144();
    stack(int0);
    stack(-1);
    stack(1);
    script21143();
    return;
}