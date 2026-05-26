//[clientscript,evilbob_load]
function script2114(int0: number, int1: number): void {
    IF_SETHIDE(0, int0);
    IF_SETHIDE(1, int1);
    varclient_679 = false;
    IF_SETONVARCTRANSMIT(callback(script2115, int0, int1, 679, 1), int0);
    return;
}