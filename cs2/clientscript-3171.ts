//
function script3171(int0: number, int1: number, int2: number): void {
    IF_SETONFRIENDTRANSMIT(callback(script3172, int0, int1, int2), int0);
    IF_SETONCLANTRANSMIT(callback(script3172, int0, int1, int2), int0);
    IF_SETONCHATTRANSMIT(callback(script3172, int0, int1, int2), int0);
    IF_SETONCLANCHANNELTRANSMIT(callback(script3172, int0, int1, int2), int0);
    IF_SETONCLANSETTINGSTRANSMIT(callback(script3172, int0, int1, int2), int0);
    IF_SETONRESIZE(callback(script3172, int0, int1, int2), int0);
    script3173(int0, int1, int2);
    return;
}