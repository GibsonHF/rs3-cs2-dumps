//[proc,clan_switch_tab]
function script4400(int0: int): void {
    var int1 = script9670(int0, 1);
    script13972(comp(1105, 66), comp(1105, 67), 28595 as struct, "Top", int1);
    IF_SETHIDE(script6427(int1), comp(1105, 8));
    int1 = script9670(int0, 2);
    script13972(comp(1105, 69), comp(1105, 70), 28595 as struct, "Bottom", int1);
    IF_SETHIDE(script6427(int1), comp(1105, 11));
    int1 = script9670(int0, 3);
    script13972(comp(1105, 72), comp(1105, 73), 28595 as struct, "Colour", int1);
    IF_SETHIDE(script6427(int1), comp(1105, 14));
    return;
}