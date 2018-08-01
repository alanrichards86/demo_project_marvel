import { mount } from '@vue/test-utils'
import Main from '@/components/Main.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(Main)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
