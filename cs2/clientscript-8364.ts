//
function script8364(int0: int, int1: int): void {
    script8365(int0, int1);
    script8157(int1);
    var int2 = script10405(int1);
    var int3 = struct_getparam(int2, 3506);
    if ((((script20475() == 1) || (varclient_3477 == true)) && (CC_FIND(int3, 0) == 1))) {
        CC_SETONDRAG(callback(script8369, int1, GET_MOUSEX(), GET_MOUSEY(), 1));
        CC_SETONDRAGCOMPLETE(callback(script8366, int1, -2147483645, -2147483643));
        CC_DRAGPICKUP((CC_GETWIDTH() / 2), (CC_GETHEIGHT() / 2));
        FORCE_INTERFACE_DRAG();
        script6739(6);
    };
    if ((varbitplayer_38842 == 1)) {
        script16576(int2, int1);
    };
    return;
}