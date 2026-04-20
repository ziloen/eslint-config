// 以下应当报错
const a = `${[]}`
const b = name

/** @type {unknown} */
const c = 123
const isError = c instanceof Error

const g = /**@type {any}*/({})

const testRegexpUnusedCaptureGroup = '2000-12-31'.replace(/(\d{4})-(\d{2})-(\d{2})/, 'Date')

export { }

