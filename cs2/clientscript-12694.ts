//
function script12694(): void {
    var int0 = script14441();
    if (((int0 == -1 as struct) || (varbitplayer_33661 == 0))) {
        return;
    };
    if ((struct_getparam(int0, 5904) != comp(-1, 65535))) {
        stack(struct_getparam(int0, 5901));
        stack(116916233);
        IF_SETGRAPHIC();
        stack(18100);
        stack(116916232);
        IF_SETGRAPHIC();
        stack(1);
        stack(int0);
        stack(5904);
        struct_getparam();
        IF_SETHIDE(stack());
    };
    if ((struct_getparam(int0, 5909) != comp(-1, 65535))) {
        if ((IF_GETGRAPHIC(comp(1784, 15)) != struct_getparam(int0, 6287))) {
            stack(struct_getparam(int0, 5906));
            stack(116916239);
            IF_SETGRAPHIC();
        };
        stack(18100);
        stack(116916238);
        IF_SETGRAPHIC();
        stack(1);
        stack(int0);
        stack(5909);
        struct_getparam();
        IF_SETHIDE(stack());
    };
    if ((struct_getparam(int0, 5914) != comp(-1, 65535))) {
        if ((IF_GETGRAPHIC(comp(1784, 17)) != struct_getparam(int0, 6288))) {
            stack(struct_getparam(int0, 5911));
            stack(116916241);
            IF_SETGRAPHIC();
        };
        stack(18100);
        stack(116916240);
        IF_SETGRAPHIC();
        stack(1);
        stack(int0);
        stack(5914);
        struct_getparam();
        IF_SETHIDE(stack());
    };
    if ((struct_getparam(int0, 5919) != comp(-1, 65535))) {
        if ((IF_GETGRAPHIC(comp(1784, 19)) != struct_getparam(int0, 6289))) {
            stack(struct_getparam(int0, 5916));
            stack(116916243);
            IF_SETGRAPHIC();
        };
        stack(18100);
        stack(116916242);
        IF_SETGRAPHIC();
        stack(1);
        stack(int0);
        stack(5919);
        struct_getparam();
        IF_SETHIDE(stack());
    };
    if ((struct_getparam(int0, 5924) != comp(-1, 65535))) {
        if ((IF_GETGRAPHIC(comp(1784, 21)) != struct_getparam(int0, 6290))) {
            stack(struct_getparam(int0, 5921));
            stack(116916245);
            IF_SETGRAPHIC();
        };
        stack(18100);
        stack(116916244);
        IF_SETGRAPHIC();
        stack(1);
        stack(int0);
        stack(5924);
        struct_getparam();
        IF_SETHIDE(stack());
    };
    switch (varbitplayer_33660) {
        case 2: {
            stack(struct_getparam(int0, 5908));
            stack(116916239);
            IF_SETGRAPHIC();
            stack(18102);
            stack(116916238);
            IF_SETGRAPHIC();
            stack(0);
            stack(int0);
            stack(5909);
            struct_getparam();
            IF_SETHIDE(stack());
            break;
        }
        case 3: {
            stack(struct_getparam(int0, 5913));
            stack(116916241);
            IF_SETGRAPHIC();
            stack(18102);
            stack(116916240);
            IF_SETGRAPHIC();
            stack(0);
            stack(int0);
            stack(5914);
            struct_getparam();
            IF_SETHIDE(stack());
            break;
        }
        case 4: {
            stack(struct_getparam(int0, 5918));
            stack(116916243);
            IF_SETGRAPHIC();
            stack(18102);
            stack(116916242);
            IF_SETGRAPHIC();
            stack(0);
            stack(int0);
            stack(5919);
            struct_getparam();
            IF_SETHIDE(stack());
            break;
        }
        case 5: {
            stack(struct_getparam(int0, 5923));
            stack(116916245);
            IF_SETGRAPHIC();
            stack(18102);
            stack(116916244);
            IF_SETGRAPHIC();
            stack(0);
            stack(int0);
            stack(5924);
            struct_getparam();
            IF_SETHIDE(stack());
            break;
        }
        default: {
            if ((struct_getparam(int0, 5904) != comp(-1, 65535))) {
                stack(struct_getparam(int0, 5903));
                stack(116916233);
                IF_SETGRAPHIC();
                stack(18102);
                stack(116916232);
                IF_SETGRAPHIC();
                stack(0);
                stack(int0);
                stack(5904);
                struct_getparam();
                IF_SETHIDE(stack());
            };
            break;
        }
    };
    return;
}