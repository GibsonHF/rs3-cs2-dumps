//
function script14686(int0: obj): dbrow {
    if ((int0 == -1 as obj)) {
        return -1 as dbrow;
    };
    if ((item_getparam(int0, 7211) != -1 as dbrow)) {
        return item_getparam(int0, 7211);
    };
    switch (OC_CATEGORY(int0)) {
        case 4608: {
            stack(364624);
            stack(int0);
            DB_FIND(0);
            dbrow_findnext();
            return stack();
        }
        case 4609: {
            stack(364640);
            stack(int0);
            DB_FIND(0);
            dbrow_findnext();
            return stack();
        }
    };
    script12478(`Invalid restoration category for obj: ${script6686(int0)}`);
    return -1 as dbrow;
}