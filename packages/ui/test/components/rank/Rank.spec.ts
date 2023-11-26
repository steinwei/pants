import { it, expect, vi } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import Rank from "../../../src/components/rank/Rank.vue";

const response = {
  data: {
    list: [],
    total: 1000,
    page: 1,
    pageSize: 10,
  }
};

const spy = vi.spyOn(window, 'fetch').mockResolvedValue(response)

function serialize(params: any) {
  let result = '?'
  Object.keys(params).forEach(key => {
    result += key + '=' + params[key]
  })
  return result
}

it('init rank data', async () => {
  const wrapper = mount(Rank, {
    props: {
      fetcher: (params) => window.fetch('/api/posts' + serialize(params))
    }
  })

  expect(window.fetch).toHaveBeenCalledTimes(1)
  expect(window.fetch).toHaveBeenCalledWith('/api/posts')

  await flushPromises()

  const posts = wrapper.find('.p-rank-wrapper')
  expect(posts).toMatchSnapshot()
})

const spyLoadMoreData = vi.spyOn(window, 'fetch').mockResolvedValue(response)

it('get more data', async () => {
  const wrapper = mount(Rank, {
    props: {
      fetcher: (params) => window.fetch('/api/posts' + serialize(params))
    }
  })
  const posts = wrapper.find('.p-rank-wrapper')

  expect(window.fetch).toHaveBeenCalledTimes(1)
  expect(window.fetch).toHaveBeenCalledWith('/api/posts')

  await flushPromises()

  const posts = wrapper.find('.p-rank-wrapper')
  expect(posts).toMatchSnapshot()
})
