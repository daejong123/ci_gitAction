
import {add} from './util'
describe('测试dd', () => {
    test('should sum', () => {
        expect(add(1,2)).toBe(3)
    })
    test('should sum1', () => {
        expect(add(1,3)).toBe(4)
    })
    test('should sum2', () => {
        expect(add(1,4)).toBe(5)
    })
})


describe('测试ff', () => {
    test('should dd', () => {
        expect(add(1,3)).toBe(3)
    })
    test('should dd1', () => {
        expect(add(1,3)).toBe(4)
    })
    test('should dd2', () => {
        expect(add(1,4)).toBe(5)
    })
})