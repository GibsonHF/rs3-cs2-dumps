//
function script10055(): void {
    if ((script13749() == false)) {
        script7791(comp(909, 18), comp(909, 11));
        script7791(comp(909, 35), comp(909, 30));
        script7791(comp(909, 43), comp(909, 42));
        varclient_1122 = IF_GETHEIGHT(comp(909, 42));
        IF_SETONTIMER(callback(), comp(909, 0));
        IF_SETONTIMER(callback(script15593, 0), 59572226);
        IF_SETONTIMER(callback(script15594, 0), 59572246);
    } else {
        script17120();
    };
    varclient_2505 = "";
    return;
}