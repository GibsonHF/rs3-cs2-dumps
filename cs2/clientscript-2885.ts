//
function script2885(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    switch (int5) {
        case 2:
        case 3:
        case 4: {
            script8808();
            varclient_1 = 0;
            var int4 = (int4 + CLIENTCLOCK());
            if ((CC_FIND(int0, int1) == 1)) {
                CC_SETTRANS(int2);
                CC_SETONTIMER(callback(script1621, int0, int1, int3, int4));
            };
            break;
        }
        default: {
            return;
        }
    };
    return;
}