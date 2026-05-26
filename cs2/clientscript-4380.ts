//[clientscript,clan_motto_text_click]
function script4380(int0: number, int1: number, int2: number): void {
    varclient_2538 = IF_GETTEXT(int0);
    varclient_1496 = script1552(int2, varclient_2538, 26, int0, -1);
    IF_SETPOSITION(varclient_1496, 5, 0, 0, int1);
    script8841(14, 1);
    script1566(0, varclient_2538, 80);
    script1567(1);
    return;
}