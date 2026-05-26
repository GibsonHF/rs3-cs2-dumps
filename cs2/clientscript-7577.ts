//
function script7577(): void {
    var int0 = IF_GETTRANS(10682369);
    if ((int0 <= 20)) {
        IF_SETTRANS(0, 10682369);
        IF_SETONTIMER(callback(script7578), 10682370);
    } else {
        IF_SETTRANS(--int0, 10682369);
    };
    return;
}