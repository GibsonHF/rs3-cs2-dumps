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
        script20226(91815958, 91815957, int0, 1, 0, 44);
    };
    if ((IF_FIND(comp(1401, 27)) == 1)) {
        script20227(91815964, 91815963, int0, 1, 0, 44);
    };
    return;
}