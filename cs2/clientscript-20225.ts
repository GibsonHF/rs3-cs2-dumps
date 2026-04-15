//
function script20225(): void {
    script20209(1, "League progression is separate to your regular RuneScape save. When the League ends, points and untradeable rewards will be transferred to your nominated RuneScape save.");
    script20211(0);
    CC_DELETEALL(comp(1401, 21));
    CC_DELETEALL(comp(1401, 27));
    var int0 = (IF_GETWIDTH(comp(1401, 20)) - 16);
    var int1 = 4;
    var int2 = 0;
    if ((IF_FIND(comp(1401, 21)) == 1)) {
        script20226(comp(1401, 22), comp(1401, 21), int0, 1, 0, 44);
    };
    if ((IF_FIND(comp(1401, 27)) == 1)) {
        script20227(comp(1401, 28), comp(1401, 27), int0, 1, 0, 44);
    };
    return;
}