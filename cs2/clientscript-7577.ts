//
function script7577(): void {
    var int0 = IF_GETTRANS(comp(163, 1));
    if ((int0 <= 20)) {
        IF_SETTRANS(0, comp(163, 1));
        IF_SETONTIMER(callback(script7578), comp(163, 2));
    } else {
        IF_SETTRANS(--int0, comp(163, 1));
    };
    return;
}