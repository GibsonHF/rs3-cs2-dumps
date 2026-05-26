//
function script3137(int0: number, int1: number, int2: number, int3: number): void {
    if ((((script20335(1) > 0) && (script20335(2) > 0)) && (script20335(3) > 0))) {
        if ((int3 == 1)) {
            script426(`Sorry, we couldn't contact world ${inttostring(int2, 10)}.<br>Please choose a different world.`, int0, int1, 1);
        };
        return;
    };
    if ((script20335(1) < 1)) {
        script20336(1, int2);
    } else if ((script20335(2) < 1)) {
        script20336(2, int2);
    } else if ((script20335(3) < 1)) {
        script20336(3, int2);
    };
    if ((int3 == 1)) {
        script3113();
        script3065(1);
    };
    return;
}