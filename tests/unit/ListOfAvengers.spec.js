import Vue from 'vue'
import ListOfAvengers from '@/components/ListOfAvengers.vue'

describe('ListOfAvengers.vue', () => {
    it('Component is mounted and expect name of component to be returned', () => {
        const vm = new Vue(ListOfAvengers).$mount()
        expect(vm.$options.name).toBe('ListOfAvengers')
    })
})
describe('ListOfAvengers.vue', () => {
    it('Expect skill variable to be empty', () => {
        const vm = new Vue(ListOfAvengers).$mount()
        expect(vm.skill).toBe('')
    })
})
  describe('ListOfAvengers.vue', () => {
    it('Expect skill variable to not return any string', () => {
        const vm = new Vue(ListOfAvengers).$mount()
        expect(vm.skill).not.toBe('string')
    })
})
describe('ListOfAvengers.vue', () => {
    it('Expect addSkill function to exisit', () => {
        const vm = new Vue(ListOfAvengers).$mount()
        expect(vm.addSkill).toBeTruthy()
    })
})
