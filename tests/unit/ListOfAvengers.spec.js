import shallowMount from '@vue/test-utils'
import ListOfAvengers from '@/components/list_of_avengers/ListOfAvengers.vue'

describe('ListOfAvengers.vue', () => {
    it('Component does run', () => {
        const wrapper = shallowMount(ListOfAvengers)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
