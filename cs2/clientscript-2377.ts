//[proc,makeover_gender]
function script2377(int0: number, int1: number, int2: number): void {
    if ((int0 == 0)) {
        IF_SETCOLOUR(16777215, int1);
        IF_SETTEXTSHADOW(1, int1);
        IF_SETCOLOUR(script10495(3), int2);
        IF_SETTEXTSHADOW(0, int2);
        CC_DELETEALL(comp(900, 15));  // makeover_mage:male_select
        CC_DELETEALL(comp(900, 9));  // makeover_mage:female_select
        script13971(58982415, -1, 24106, "Selected", 1);
        script13969(58982409, -1, 28554, "Select");
    } else {
        IF_SETCOLOUR(16777215, int2);
        IF_SETTEXTSHADOW(1, int2);
        IF_SETCOLOUR(script10495(3), int1);
        IF_SETTEXTSHADOW(0, int1);
        CC_DELETEALL(comp(900, 15));  // makeover_mage:male_select
        CC_DELETEALL(comp(900, 9));  // makeover_mage:female_select
        script13969(58982415, -1, 24106, "Select");
        script13971(58982409, -1, 28554, "Selected", 1);
    };
    return;
}