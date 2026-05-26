//[proc,clan_switch_tab]
function script4400(int0: number): void {
    var int1 = script9670(int0, 1);
    script13972(72417346, 72417347, 28595, "Top", int1);
    IF_SETHIDE(script6427(int1), 72417288);
    int1 = script9670(int0, 2);
    script13972(72417349, 72417350, 28595, "Bottom", int1);
    IF_SETHIDE(script6427(int1), 72417291);
    int1 = script9670(int0, 3);
    script13972(72417352, 72417353, 28595, "Colour", int1);
    IF_SETHIDE(script6427(int1), 72417294);
    return;
}