//[proc,create_suggestions_highlight]
function script3226(int0: component, int1: unknown_int, string0: string): void {
    if ((int1 == 1)) {
        IF_SETCOLOUR(4442112, int0);
        IF_SETTEXT(`<u=43C800>${string0}</u>`, int0);
    } else {
        IF_SETCOLOUR(3381504, int0);
        IF_SETTEXT(`<u=339900>${string0}</u>`, int0);
    };
    return;
}