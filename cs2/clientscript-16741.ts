//
function script16741(int0: number): void {
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
            if ((CC_FIND(48758895, 0) == 1)) {
                script16740(varclient_3681);
            };
            if ((CC_FIND(48759020, 0) == 1)) {
                script16740(varclient_3681);
            };
            break;
        }
        case 48758896:
        case 48759021: {
            varclient_6406 = (1 - varclient_6406);
            string0 = script1346(varclient_2576);
            IF_SETTEXT(string0, 48758891);
            if ((varclient_174 == 100)) {
                script3237(48758890, 48758891, 48758892, string0, 100, 212);
            };
            if ((CC_FIND(48758896, 0) == 1)) {
                script16740(varclient_6406);
            };
            if ((CC_FIND(48759021, 0) == 1)) {
                script16740(varclient_6406);
            };
            break;
        }
    };
    return;
}