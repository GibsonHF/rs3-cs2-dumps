//
function script3883(): void {
    IF_SETSIZE(1, 20, 0, 0, comp(580, 4));
    IF_SETSIZE(1, 20, 0, 0, comp(580, 11));
    IF_SETSIZE(1, 20, 0, 0, comp(580, 18));
    IF_SETSIZE(1, 20, 0, 0, comp(580, 25));
    IF_SETSIZE(1, 20, 0, 0, comp(580, 32));
    IF_SETONTIMER(callback(script3884, 38010884, 38010889), comp(580, 4));
    IF_SETONTIMER(callback(script3884, 38010891, 38010896), 38010891);
    IF_SETONTIMER(callback(script3884, 38010898, 38010903), 38010898);
    IF_SETONTIMER(callback(script3884, 38010905, 38010910), 38010905);
    IF_SETONTIMER(callback(script3884, 38010912, 38010917), 38010912);
    return;
}