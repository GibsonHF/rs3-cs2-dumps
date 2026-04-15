//
function script8092(): void {
    switch (varclient_3518) {
        case 2: {
            IF_SETSIZE(0, 53, 1, 1, comp(310, 2));
            if ((IF_GETHIDE(comp(310, 1)) == true)) {
                IF_SETHIDE(false, comp(310, 1));
                IF_SETSIZE(16, 0, 1, 1, comp(310, 0));
            };
            script72(comp(310, 1), comp(310, 0), IF_GETSCROLLY(comp(310, 0)));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(319, 9));
            IF_SETHIDE(true, comp(1429, 24));
            IF_SETSIZE(16, 45, 1, 1, comp(319, 7));
            if ((IF_GETHIDE(comp(319, 2)) == false)) {
                IF_SETHIDE(false, comp(319, 2));
            };
            if ((IF_GETHIDE(comp(319, 3)) == false)) {
                IF_SETHIDE(false, comp(319, 3));
            };
            script72(comp(319, 3), comp(319, 0), IF_GETSCROLLY(comp(319, 0)));
            script72(comp(319, 2), comp(319, 1), IF_GETSCROLLY(comp(319, 1)));
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(824, 31));
            IF_SETHIDE(true, comp(1429, 24));
            IF_SETSIZE(16, 0, 1, 1, comp(824, 0));
            IF_SETSCROLLSIZE(0, 255, comp(824, 0));
            if ((IF_GETHIDE(comp(824, 1)) == false)) {
                IF_SETHIDE(false, comp(824, 1));
            };
            script72(comp(824, 1), comp(824, 0), IF_GETSCROLLY(comp(824, 0)));
            break;
        }
        case 5: {
            script5308();
            break;
        }
    };
    return;
}