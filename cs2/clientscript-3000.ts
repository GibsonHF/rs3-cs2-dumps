//
function script3000(): void {
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        script3001();
    };
    return;
}