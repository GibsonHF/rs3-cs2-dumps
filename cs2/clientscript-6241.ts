//
function script6241(): void {
    var int0 = IF_GETWIDTH(84213764);
    var int1 = MAX(1, (100 - SCALE(varclient_1923, 25000, 100)));
    script4542(int1, 84213764, -1);
    IF_SETTEXT(TOSTRING_LOCALISED((25000 - varclient_1923), 1), 84213792);
    var int2 = IF_GETWIDTH(84213764);
    var int3 = (int0 - int2);
    if ((int3 > 0)) {
        IF_SETSIZE(int3, IF_GETHEIGHT(84213784), 0, 0, 84213784);
        IF_SETTRANS(0, 84213785);
        IF_SETTRANS(0, 84213786);
        IF_SETTRANS(0, 84213787);
        IF_SETPOSITION(IF_GETWIDTH(84213764), IF_GETY(84213784), 0, 0, 84213784);
        IF_SETHIDE(0, 84213784);
        IF_SETONTIMER(callback(script6242), 84213764);
    };
    return;
}