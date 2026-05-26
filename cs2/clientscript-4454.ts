//
function script4454(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((ACTIVECLANCHANNEL_FIND_LISTENED() == 1)) {
        IF_SETONTIMER(callback(), int1);
        stack(4443);
        stack(-1);
        stack(int3);
        stack("ii");
        stack(int1);
        IF_SETONPLAYERGROUPTRANSMIT();
        IF_SETONCLANCHANNELTRANSMIT(callback(script4443, -1, int3), int1);
        IF_SETONFRIENDTRANSMIT(callback(script4443, -1, int3), int1);
        IF_SETONCLANSETTINGSTRANSMIT(callback(script4443, -1, int3), int1);
        script4444(varclient_1506, int3);
    } else {
        IF_SETGRAPHIC(6256 as graphic, int4);
        if (((CLIENTCLOCK() - int2) > 200)) {
            script4445(int3);
            IF_SETONTIMER(callback(script4454, int0, int1, CLIENTCLOCK(), int3, int4), int1);
        };
    };
    return;
}