/**
 * @description 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
 * @params {Object} opts - 必填项，以json对象形式传参
 * @params {String} opts.url  - 必填项, 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'
 * @params {String} opts.success  - 必填项, 接口调用成功的回调函数
 * @params {String} opts.fail  - 必填项, 接口调用失败的回调函数
 * @params {String} opts.complete  - 必填项, 接口调用结束的回调函数（调用成功、失败都会执行
 * @return {}
 * */
export const navigateTo = (opts) => {
    return wx.navigateTo(opts);
};

/**
 * @description 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * @params {Object} opts - 必填项，以json对象形式传参
 * @params {String} opts.url  - 必填项, 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数
 * @params {String} opts.success  - 必填项, 接口调用成功的回调函数
 * @params {String} opts.fail  - 必填项, 接口调用失败的回调函数
 * @params {String} opts.complete  - 必填项, 接口调用结束的回调函数（调用成功、失败都会执行
 * @return {}
 * */
export const switchTab = (opts) => {
    return wx.switchTab(opts);
};