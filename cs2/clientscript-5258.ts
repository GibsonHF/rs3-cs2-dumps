//
function script5258(int0: number, int1: number): void {
    if (((CC_FIND(int1, (int0 * 2)) == 1) && (CC_FIND[1](int1, ((int0 * 2) + 1)) == 1))) {
        script3681(int0, int1);
        CC_SETONTIMER(callback());
    };
    return;
}