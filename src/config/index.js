export const baseURL = process.env.NODE_ENV === 'production' 
? 'http://production.com' // 生产环境
: 'http://localhost:3000' // 开发环境 若有代理，此处不用写，若有，则需要写url
