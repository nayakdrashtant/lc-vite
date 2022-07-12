import {ref, watch} from "vue";

export function useStorage(key, val = null) {
    let storeVal = read();

    if (storeVal) {
        val = ref(storeVal);
    } else {
        val = ref(val);
        write();
    }

    watch(val, write, {deep: true});

    function read() {
        return JSON.parse(localStorage.getItem(key));
    }

    function write() {
        if (val.value === '' || val.value === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(val.value));
        }
    }

    return val;
}