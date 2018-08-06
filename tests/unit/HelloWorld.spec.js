import {shallowMount} from '@vue/test-utils'
import Main from '@/components/Main.vue'
import axios from 'axios'
jest.mock('axios');

describe('HelloWorld.vue', () => {
  it('Component does run', t => {
    // const wrapper = new Vue(Main).$mount();
    const wrapper = shallowMount(Main);
    wrapper.vm.$nextTick(() => {
      console.log('PASSED')
      expect(wrapper.props()).toEqual({ title: '' })
      t.pass();
      t.end();
    })
    })
  })


describe('Testing tests', () => {
  it('True to be true', () => {
    expect(true).toBeTruthy();
  })
})








// import { shallowMount } from '@vue/test-utils'
// import ListOfAvengers from '@/components/ListOfAvengers.vue';


// describe('Test should work', () => {
//   it('True is true', () => {
//     expect(true).toBeTruthy()
//   })
// })

// // describe('ListOfAvengers.vue', () => {
// //     it('Component does run...', () => {
// //         const wrapper = shallowMount(ListOfAvengers)
// //         expect(wrapper.is(ListOfAvengers)).toBeTruthy()
// //     })
// // })




// // describe('Avengers Component', () => {
// //     const dom = new jsdom.JSDOM();
// //     const firstHeading = dom.window.document.querySelector('h1');
// //     expect(firstHeading.textContent).toContain('Hello');

// // })

// // describe('ListOfAvengers.vue', () => {
// //     it('Has function addSkill', () => {
// //         const wrapper = shallowMount(ListOfAvengers)
// //         expect(wrapper.addSkill()).toBeTruthy();
// //     })
// // })
