//
function script16741(int0: unknown_int): void {
    var string0 = "";
    switch (int0) {
        case 48758895:
        case 48759020: {
            if ((varclient_3681 == 1)) {
                varclient_3682 = 1;
                varclient_3681 = 0;
                varclient_3683 = "";
            } else {
                varclient_3681 = 1;
                varclient_3682 = 0;
            };
            if ((CC_FIND(comp(744, 111), 0) == 1)) {
                script16740(varclient_3681);
            };
            if ((CC_FIND(comp(744, 236), 0) == 1)) {
                script16740(varclient_3681);
            };
            break;
        }
        case 48758896:
        case 48759021: {
            varclient_6406 = (1 - varclient_6406);
            string0 = script1346(varclient_2576);
            IF_SETTEXT(string0, comp(744, 107));
            if ((varclient_174 == 100)) {
                script3237(comp(744, 106), comp(744, 107), comp(744, 108), string0, 100, 212 as fontmetrics);
            };
            if ((CC_FIND(comp(744, 112), 0) == 1)) {
                script16740(varclient_6406);
            };
            if ((CC_FIND(comp(744, 237), 0) == 1)) {
                script16740(varclient_6406);
            };
            break;
        }
    };
    return;
}