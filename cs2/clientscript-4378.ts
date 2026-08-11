//[clientscript,clan_motto_text_init]
function script4378(int0: number, int1: number, int2: number): void {
    script8841(14, 1);
    IF_SETONDIALOGABORT(callback(script8097), int0);
    IF_SETONCLICK(callback(script4380, int0, int2, -2147483647), int0);
    script1566(0, IF_GETTEXT(comp(1103, 28)), 80);  // clan_motto_input:text_input
    script1567(1);
    return;
}