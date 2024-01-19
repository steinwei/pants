import { PantsComponent } from "../common/component.ts";

PantsComponent({
  props: {
    dataSource: {
      type: Array,
      default: [],
    },
    slots: {
      type: Number,
      default: 2,
    },
    itemHeight: {
      type: Number,
      default: 200,
    },
    axis: {
      type: String,
      default: 'vertical',
    },
  },
  data: {
    
  },
  methods: {
    initScrollTopList() {},
    countsInViewport() {},
    getItemHeight() {},
  },
})
