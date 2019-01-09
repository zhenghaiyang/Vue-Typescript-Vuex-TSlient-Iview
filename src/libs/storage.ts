/**
 * 存储localStorage
 */
export const setStore = (name: string, content: any) => {
    if (!name) { return; }
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = (name: any) => {
    if (!name) { return; }
    const resp: string|null = window.localStorage.getItem(name) || null;
    return resp && JSON.parse(resp);
};

/**
 * 删除localStorage
 */
export const removeStore = (name: any) => {
    if (!name) { return; }
    window.localStorage.removeItem(name);
};
