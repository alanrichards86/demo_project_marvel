import { mount } from '@vue/test-utils'
import Main from '@/components/Main.vue'

describe('HelloWorld.vue', () => {
  it('Component does run', () => {
    const wrapper = mount(Main)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
