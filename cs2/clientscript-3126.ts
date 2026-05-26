//
function script3126(int0: number, int1: number, int2: number, int3: number, string0: string): void {
    if (((varclient_6542 + 3000) < CLIENTCLOCK())) {
        varclient_6542 = CLIENTCLOCK();
        IF_SETONTIMER(callback(script6260, int2), int3);
    };
    script3877(string0, int0, int1);
    return;
}