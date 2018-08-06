import {shallowMount} from '@vue/test-utils'
import ListOfAvengers from '@/components/ListOfAvengers.vue'

describe('HelloWorld.vue', () => {
  it('Component does run', () => {
    // const wrapper = new Vue(Main).$mount();
    const wrapper = shallowMount(ListOfAvengers)
    expect(wrapper.isVueInstance).toBeTruthy()
    })
  })


describe('Testing tests', () => {
    it('True to be true', () => {
        expect(true).toBeTruthy();
    })
})