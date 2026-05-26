//
function script12084(int0: number, int1: number, string0: string): void {
    if ((IF_GETHIDE(96797308) == 0)) {
        CC_CREATE(96797309, 4, IF_GETNEXTSUBID(96797309));
        CC_SETTRANS(255);
        CC_SETSIZE(200, 25, 0, 0);
        CC_SETTEXTFONT(212);
        CC_SETCOLOUR(int0);
        CC_SETTEXTSHADOW(1);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXT(string0);
        CC_SETPOSITION(0, 0, 1, 2);
        CC_SETONTIMER(callback(script12085, -2147483645, CC_GETID(), (CLIENTCLOCK() + int1)));
    } else {
        CC_DELETEALL(96797309);
    };
    return;
}