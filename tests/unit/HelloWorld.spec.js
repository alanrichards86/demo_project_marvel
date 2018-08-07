import Main from '@/components/Main.vue'
// import Vue from 'vue'
import {mount} from '@vue/test-utils'

// describe('Main.vue', () => {
//   it('Component is mounted and expect name of component to be returned', () => {
//     const vm = new Vue(Main).$mount()
//     expect(vm.$options.name).toBe('Main')
//   })
// })
describe('Main.vue', () => {
  it('Component is mounted and expect name of component to be returned', () => {
  const wrapper = mount(Main)
  expect(wrapper.isVueInstance()).toBe(true)
  })
})
