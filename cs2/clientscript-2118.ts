//
function script2118(int0: int): void {
    var int1 = IF_GETNEXTSUBID(comp(267, 76));
    if (((varbitplayer_42061 == 1) && (script259(44179 as obj) == 0))) {
        CC_CREATE(comp(267, 76), 5, int1);
        CC_SETSIZE(100, 100, 0, 0);
        CC_SETPOSITION((10 + (int0 * 110)), 0, 0, 1);
        CC_SETGRAPHIC(struct_getparam(41420, 7508));
        CC_SETONMOUSEREPEAT(callback(script3876, struct_getparam(41420, 7505), -2147483645, -2147483643));
    };
    return;
}