<template>
  <div class="dashboard-page">
    <grid-layout
      id="grid-layout"
      :margin="[parseInt(marginX), parseInt(marginY)]"
      :layout.sync="layout"
      :col-num="parseInt(colNum)"
      :row-height="rowHeight"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :is-mirrored="mirrored"
      :is-bounded="bounded"
      :prevent-collision="preventCollision"
      :vertical-compact="compact"
      :restore-on-drag="restoreOnDrag"
      :use-css-transforms="true"
      :responsive="responsive"
      :transform-scale="transformScale"
      @layout-created="layoutCreatedEvent"
      @layout-before-mount="layoutBeforeMountEvent"
      @layout-mounted="layoutMountedEvent"
      @layout-ready="layoutReadyEvent"
      @layout-updated="layoutUpdatedEvent"
      @breakpoint-changed="breakpointChangedEvent"
    >
      <grid-item
        v-for="item in layout"
        :key="item.i"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :min-w="item.minW"
        :max-w="item.maxW"
        :min-x="item.minX"
        :max-x="item.maxX"
        :min-y="item.minY"
        :max-y="item.maxY"
        :preserve-aspect-ratio="item.preserveAspectRatio"
        @resize="resize"
        @move="move"
        @resized="resized"
        @container-resized="containerResized"
        @moved="moved"
      >
        <WidgetContainer :text="item.i" @removeItem="removeItem($event)" />
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash-es'
import GridItem from './components/GridItem.vue'
import GridLayout from './components/GridLayout.vue'
import WidgetContainer from './components/WidgetContainer.vue'
import { getDocumentDir, setDocumentDir } from './components/helpers/DOM'

const testLayout = [
  {
    x: 0,
    y: 0,
    w: 2,
    h: 2,
    i: '0',
    resizable: true,
    draggable: true,
    static: false,
    minY: 0,
    maxY: 2
  },
  { x: 2, y: 0, w: 2, h: 4, i: '1', resizable: null, draggable: null, static: true },
  {
    x: 4,
    y: 0,
    w: 2,
    h: 5,
    i: '2',
    resizable: false,
    draggable: false,
    static: false,
    minX: 4,
    maxX: 4,
    minW: 2,
    maxW: 2,
    preserveAspectRatio: true
  },
  {
    x: 6,
    y: 0,
    w: 2,
    h: 3,
    i: '3',
    resizable: false,
    draggable: false,
    static: false,
    preserveAspectRatio: true
  },
  { x: 8, y: 0, w: 2, h: 3, i: '4', resizable: false, draggable: false, static: false },
  { x: 10, y: 0, w: 2, h: 3, i: '5', resizable: false, draggable: false, static: false },
  { x: 0, y: 5, w: 2, h: 5, i: '6', resizable: false, draggable: false, static: false },
  { x: 2, y: 5, w: 2, h: 5, i: '7', resizable: false, draggable: false, static: false },
  { x: 4, y: 5, w: 2, h: 5, i: '8', resizable: false, draggable: false, static: false },
  { x: 6, y: 3, w: 2, h: 4, i: '9', resizable: false, draggable: false, static: true },
  { x: 8, y: 4, w: 2, h: 4, i: '10', resizable: false, draggable: false, static: false },
  { x: 10, y: 4, w: 2, h: 4, i: '11', resizable: false, draggable: false, static: false, minY: 4 },
  { x: 0, y: 10, w: 2, h: 5, i: '12', resizable: false, draggable: false, static: false },
  { x: 2, y: 10, w: 2, h: 5, i: '13', resizable: false, draggable: false, static: false },
  { x: 4, y: 8, w: 2, h: 4, i: '14', resizable: false, draggable: false, static: false },
  { x: 6, y: 8, w: 2, h: 4, i: '15', resizable: false, draggable: false, static: false },
  { x: 8, y: 10, w: 2, h: 5, i: '16', resizable: false, draggable: false, static: false },
  { x: 10, y: 4, w: 2, h: 2, i: '17', resizable: false, draggable: false, static: false },
  { x: 0, y: 9, w: 2, h: 3, i: '18', resizable: false, draggable: false, static: false },
  { x: 2, y: 6, w: 2, h: 2, i: '19', resizable: false, draggable: false, static: false }
]

export default {
  components: {
    GridLayout,
    GridItem,
    WidgetContainer
  },
  data() {
    return {
      layout: cloneDeep(testLayout),
      layout2: cloneDeep(testLayout),
      draggable: true,
      resizable: true,
      mirrored: false,
      responsive: true,
      bounded: false,
      transformScale: 1,
      preventCollision: false,
      compact: true,
      restoreOnDrag: true,
      rowHeight: 30,
      colNum: 12,
      index: 0,
      marginX: 12,
      marginY: 12
    }
  },
  mounted() {
    this.index = this.layout.length
  },
  methods: {
    clicked() {
      window.alert('CLICK!')
    },
    increaseWidth() {
      let width = document.getElementById('content').offsetWidth
      width += 20
      document.getElementById('content').style.width = width + 'px'
    },
    decreaseWidth() {
      let width = document.getElementById('content').offsetWidth
      width -= 20
      document.getElementById('content').style.width = width + 'px'
    },
    scaleHalf() {
      this.transformScale = 0.5
      document.getElementById('grid-layout').style.transform = 'scale(0.5)'
    },
    scaleThreeQuarters() {
      this.transformScale = 0.75
      document.getElementById('grid-layout').style.transform = 'scale(0.75)'
    },
    scaleIdentity() {
      this.transformScale = 1
      document.getElementById('grid-layout').style.transform = 'scale(1)'
    },
    removeItem(i) {
      console.log('### REMOVE ' + i)
      const index = this.layout.map(item => item.i).indexOf(i)
      this.layout.splice(index, 1)
    },
    addItem() {
      const item = { x: 0, y: 0, w: 2, h: 2, i: this.index + '', whatever: 'bbb' }
      this.index++
      this.layout.push(item)
    },
    addItemDynamically() {
      const x = (this.layout.length * 2) % (this.colNum || 12)
      const y = this.layout.length + (this.colNum || 12)
      console.log('X=' + x + ' Y=' + y)
      const item = {
        x: x,
        y: y,
        w: 2,
        h: 2,
        i: this.index + ''
      }
      this.index++
      this.layout.push(item)
    },
    move(i, newX, newY) {
      console.log('MOVE i=' + i + ', X=' + newX + ', Y=' + newY)
    },
    resize(i, newH, newW, newHPx, newWPx) {
      console.log(
        'RESIZE i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx
      )
    },
    moved(i, newX, newY) {
      console.log('### MOVED i=' + i + ', X=' + newX + ', Y=' + newY)
    },
    resized(i, newH, newW, newHPx, newWPx) {
      console.log(
        '### RESIZED i=' +
          i +
          ', H=' +
          newH +
          ', W=' +
          newW +
          ', H(px)=' +
          newHPx +
          ', W(px)=' +
          newWPx
      )
    },
    containerResized(i, newH, newW, newHPx, newWPx) {
      console.log(
        '### CONTAINER RESIZED i=' +
          i +
          ', H=' +
          newH +
          ', W=' +
          newW +
          ', H(px)=' +
          newHPx +
          ', W(px)=' +
          newWPx
      )
    },
    /**
     * Add change direction button
     */
    changeDirection() {
      const documentDirection = getDocumentDir()
      let toggle = ''
      if (documentDirection === 'rtl') {
        toggle = 'ltr'
      } else {
        toggle = 'rtl'
      }
      setDocumentDir(toggle)
      // eventBus.$emit('directionchange');
    },

    layoutCreatedEvent: function(newLayout) {
      console.log('Created layout: ', newLayout)
    },
    layoutBeforeMountEvent: function(newLayout) {
      console.log('beforeMount layout: ', newLayout)
    },
    layoutMountedEvent: function(newLayout) {
      console.log('Mounted layout: ', newLayout)
    },
    layoutReadyEvent: function(newLayout) {
      console.log('Ready layout: ', newLayout)
    },
    layoutUpdatedEvent: function(newLayout) {
      console.log('Updated layout: ', newLayout)
    },
    breakpointChangedEvent: function(newBreakpoint, newLayout) {
      console.log('breakpoint changed breakpoint=', newBreakpoint, ', layout: ', newLayout)
    }
  }
}
</script>
