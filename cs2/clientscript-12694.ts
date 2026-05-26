//
function script12694(): void {
    var int0 = script14441();
    if (((int0 == -1) || (varbitplayer_33661 == 0))) {
        return;
    };
    if ((struct_getparam(int0, 5904) != comp(-1, 65535))) {
        IF_SETGRAPHIC(struct_getparam(int0, 5901), 116916233);
        IF_SETGRAPHIC(18100 as graphic, 116916232);
        IF_SETHIDE(1, struct_getparam(int0, 5904));
    };
    if ((struct_getparam(int0, 5909) != comp(-1, 65535))) {
        if ((IF_GETGRAPHIC(116916239) != struct_getparam(int0, 6287))) {
            IF_SETGRAPHIC(struct_getparam(int0, 5906), 116916239);
        };
        IF_SETGRAPHIC(18100 as graphic, 116916238);
        IF_SETHIDE(1, struct_getparam(int0, 5909));
    };
    if ((struct_getparam(int0, 5914) != comp(-1, 65535))) {
        if ((IF_GETGRAPHIC(116916241) != struct_getparam(int0, 6288))) {
            IF_SETGRAPHIC(struct_getparam(int0, 5911), 116916241);
        };
        IF_SETGRAPHIC(18100 as graphic, 116916240);
        IF_SETHIDE(1, struct_getparam(int0, 5914));
    };
    if ((struct_getparam(int0, 5919) != comp(-1, 65535))) {
        if ((IF_GETGRAPHIC(116916243) != struct_getparam(int0, 6289))) {
            IF_SETGRAPHIC(struct_getparam(int0, 5916), 116916243);
        };
        IF_SETGRAPHIC(18100 as graphic, 116916242);
        IF_SETHIDE(1, struct_getparam(int0, 5919));
    };
    if ((struct_getparam(int0, 5924) != comp(-1, 65535))) {
        if ((IF_GETGRAPHIC(116916245) != struct_getparam(int0, 6290))) {
            IF_SETGRAPHIC(struct_getparam(int0, 5921), 116916245);
        };
        IF_SETGRAPHIC(18100 as graphic, 116916244);
        IF_SETHIDE(1, struct_getparam(int0, 5924));
    };
    switch (varbitplayer_33660) {
        case 2: {
            IF_SETGRAPHIC(struct_getparam(int0, 5908), 116916239);
            IF_SETGRAPHIC(18102 as graphic, 116916238);
            IF_SETHIDE(0, struct_getparam(int0, 5909));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(struct_getparam(int0, 5913), 116916241);
            IF_SETGRAPHIC(18102 as graphic, 116916240);
            IF_SETHIDE(0, struct_getparam(int0, 5914));
            break;
        }
        case 4: {
            IF_SETGRAPHIC(struct_getparam(int0, 5918), 116916243);
            IF_SETGRAPHIC(18102 as graphic, 116916242);
            IF_SETHIDE(0, struct_getparam(int0, 5919));
            break;
        }
        case 5: {
            IF_SETGRAPHIC(struct_getparam(int0, 5923), 116916245);
            IF_SETGRAPHIC(18102 as graphic, 116916244);
            IF_SETHIDE(0, struct_getparam(int0, 5924));
            break;
        }
        default: {
            if ((struct_getparam(int0, 5904) != comp(-1, 65535))) {
                IF_SETGRAPHIC(struct_getparam(int0, 5903), 116916233);
                IF_SETGRAPHIC(18102 as graphic, 116916232);
                IF_SETHIDE(0, struct_getparam(int0, 5904));
            };
            break;
        }
    };
    return;
}