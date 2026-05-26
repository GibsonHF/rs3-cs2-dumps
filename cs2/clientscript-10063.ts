//
function script10063(): void {
    script3113();
    if ((WORLDLIST_FETCH() == 0)) {
        IF_SETONTIMER(callback(script13117, -2147483645), 59375622);
    } else {
        script3116();
    };
    return;
}